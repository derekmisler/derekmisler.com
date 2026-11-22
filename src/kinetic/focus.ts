const panels = [...document.querySelectorAll<HTMLElement>('.panel')];
const markers = [...document.querySelectorAll<HTMLElement>('.marker')];

const reveal = (index: number) => {
  const target = markers[index]?.offsetParent ? markers[index] : panels[index];
  target?.scrollIntoView({ block: 'start' });
};

document.querySelector('.track')?.addEventListener('focusin', (event) => {
  if (markers[0]?.offsetParent) reveal(panels.findIndex((panel) => panel.contains(event.target as Node)));
});

document.addEventListener('click', (event) => {
  const hash = (event.target as Element).closest('a')?.getAttribute('href');
  const index = panels.findIndex((panel) => `#${panel.id}` === hash);
  if (index < 0) return;
  event.preventDefault();
  reveal(index);
  panels[index].focus({ preventScroll: true });
});
