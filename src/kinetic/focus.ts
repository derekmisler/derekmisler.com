const panels = [...document.querySelectorAll<HTMLElement>('.panel')];
const markers = [...document.querySelectorAll<HTMLElement>('.marker')];

const reveal = (index: number) => {
  const target = markers[index]?.offsetParent ? markers[index] : panels[index];
  target?.scrollIntoView({ block: 'start' });
};

const indexOf = (hash: string | null) => panels.findIndex((panel) => `#${panel.id}` === hash);

document.querySelector('.track')?.addEventListener('focusin', (event) => {
  if (markers[0]?.offsetParent) reveal(panels.findIndex((panel) => panel.contains(event.target as Node)));
});

document.addEventListener('click', (event) => {
  if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const hash = (event.target as Element).closest('a')?.getAttribute('href') ?? null;
  const index = indexOf(hash);
  if (index < 0) return;
  event.preventDefault();
  reveal(index);
  panels[index].focus({ preventScroll: true, focusVisible: event.detail === 0 });
});

addEventListener('scrollend', () => {
  if (!markers[0]?.offsetParent) return;
  const nearest = Math.round(scrollY / innerHeight) * innerHeight;
  const distance = Math.abs(nearest - scrollY);
  if (distance > 1 && distance < innerHeight * 0.1) scrollTo({ top: nearest, behavior: 'smooth' });
});
