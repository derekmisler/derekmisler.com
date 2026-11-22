const panels = [...document.querySelectorAll<HTMLElement>('.panel')];
const markers = [...document.querySelectorAll<HTMLElement>('.marker')];

document.querySelector('.track')?.addEventListener('focusin', (event) => {
  const marker = markers[panels.findIndex((panel) => panel.contains(event.target as Node))];
  if (marker?.offsetParent) marker.scrollIntoView({ block: 'start' });
});
