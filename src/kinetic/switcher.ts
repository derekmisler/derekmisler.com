const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('.theme-toggle');
const announcer = document.querySelector('.theme-status');
const resumes = document.querySelectorAll<HTMLAnchorElement>('a[download]');
const order = ['auto', 'dawn', 'midday', 'dusk', 'night'];
const storage = (() => {
  try {
    return localStorage;
  } catch {
    return null;
  }
})();

const label = () =>
  `Theme: ${root.dataset.choice === 'auto' ? `auto (${root.dataset.theme})` : root.dataset.choice}. Change theme`;

const sync = () => {
  for (const link of resumes) link.href = `/derek-misler-resume-${root.dataset.theme}.pdf`;
};

const apply = (choice: string) => {
  root.dataset.choice = choice;
  root.dataset.theme = choice === 'auto' ? root.dataset.auto : choice;
  if (choice === 'auto') storage?.removeItem('theme');
  else storage?.setItem('theme', choice);
  button?.setAttribute('aria-label', label());
  if (announcer) announcer.textContent = label();
  sync();
};

sync();
button?.setAttribute('aria-label', label());
button?.addEventListener('click', () => {
  const choice = order[(order.indexOf(root.dataset.choice ?? 'auto') + 1) % order.length];
  const rect = button.getBoundingClientRect();
  root.style.setProperty('--reveal-x', `${rect.x + rect.width / 2}px`);
  root.style.setProperty('--reveal-y', `${rect.y + rect.height / 2}px`);
  if (document.startViewTransition && matchMedia('(prefers-reduced-motion: no-preference)').matches)
    document.startViewTransition(() => apply(choice));
  else apply(choice);
});
