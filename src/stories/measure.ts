const canvas = document.createElement('canvas');
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext('2d', { willReadFrequently: true });

const channels = (color: string): number[] => {
  if (!context) return [0, 0, 0, 0];
  context.clearRect(0, 0, 1, 1);
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  return [...context.getImageData(0, 0, 1, 1).data];
};

const hex = (color: string): string => {
  const [r = 0, g = 0, b = 0, a = 0] = channels(color);
  if (a === 0) return 'transparent';
  const value = `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
  return a === 255 ? value : `${value} at ${Math.round((a / 255) * 100)}%`;
};

const luminance = (color: string): number => {
  const [r = 0, g = 0, b = 0] = channels(color).map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: string, b: string): number => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return ((light ?? 0) + 0.05) / ((dark ?? 0) + 0.05);
};

const px = (value: string): string => `${Math.round(Number.parseFloat(value) * 10) / 10}px`;

const measure = () => {
  document.querySelectorAll<HTMLElement>('[data-measure]').forEach((output) => {
    const specimen = output.closest('[data-specimen]');
    const sample = specimen?.querySelector<HTMLElement>('[data-sample]');
    if (!sample) return;
    const style = getComputedStyle(sample);
    switch (output.dataset.measure) {
      case 'color':
        output.textContent = hex(style.backgroundColor);
        break;
      case 'font-size':
        output.textContent = px(style.fontSize);
        break;
      case 'line-height':
        output.textContent = style.lineHeight === 'normal' ? 'normal' : px(style.lineHeight);
        break;
      case 'width':
        output.textContent = px(String(sample.getBoundingClientRect().width));
        break;
      case 'contrast': {
        const ground = specimen?.querySelector<HTMLElement>('[data-ground]');
        if (!ground) return;
        const fg = output.dataset.property === 'background-color' ? style.backgroundColor : style.color;
        const ratio = contrast(fg, getComputedStyle(ground).backgroundColor);
        const minimum = Number(output.dataset.minimum ?? 4.5);
        output.textContent = `${ratio.toFixed(2)}:1 ${ratio >= minimum ? 'pass' : 'fail'}`;
        break;
      }
      default:
        break;
    }
  });
};

measure();
document.fonts.ready.then(measure);
window.addEventListener('resize', measure);
new MutationObserver(measure).observe(document.documentElement, { attributeFilter: ['data-theme'] });
