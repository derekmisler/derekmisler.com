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
  history.pushState(null, '', hash);
  reveal(index);
  panels[index].focus({ preventScroll: true });
});

addEventListener('popstate', () => reveal(Math.max(0, indexOf(location.hash))));
