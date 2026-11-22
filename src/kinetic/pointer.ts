if (matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  const letters = [...document.querySelectorAll<HTMLElement>('.poster .letter')];
  let x = -1e4;
  let y = -1e4;
  let frame = 0;

  const update = () => {
    frame = 0;
    const centers = letters.map((letter) => letter.getBoundingClientRect());
    centers.forEach((rect, index) => {
      const distance = Math.hypot(rect.x + rect.width / 2 - x, rect.y + rect.height / 2 - y);
      letters[index].style.setProperty('--casl', Math.max(0, 1 - distance / 320).toFixed(2));
    });
  };

  addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      frame ||= requestAnimationFrame(update);
    },
    { passive: true },
  );

  document.addEventListener('pointerout', (event) => {
    if (event.relatedTarget) return;
    x = -1e4;
    y = -1e4;
    frame ||= requestAnimationFrame(update);
  });
}
