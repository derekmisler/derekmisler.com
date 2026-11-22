const panels = [...document.querySelectorAll<HTMLElement>('.panel')];

const indexOf = (hash: string | null) => panels.findIndex((panel) => `#${panel.id}` === hash);

document.addEventListener('click', (event) => {
  if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const hash = (event.target as Element).closest('a')?.getAttribute('href') ?? null;
  const index = indexOf(hash);
  if (index < 0) return;
  event.preventDefault();
  panels[index].scrollIntoView({ block: 'start' });
  panels[index].focus({ preventScroll: true, focusVisible: event.detail === 0 });
});
