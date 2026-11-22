const root = document.documentElement;
const storage = (() => {
  try {
    return localStorage;
  } catch {
    return null;
  }
})();
const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-choice]')];

const press = (choice: string) => {
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.choice === choice));
};

const apply = (choice: string) => {
  root.dataset.theme = choice === 'auto' ? root.dataset.auto : choice;
  if (choice === 'auto') storage?.removeItem('theme');
  else storage?.setItem('theme', choice);
  press(choice);
};

press(storage?.getItem('theme') ?? 'auto');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const choice = button.dataset.choice ?? 'auto';
    if (document.startViewTransition && matchMedia('(prefers-reduced-motion: no-preference)').matches)
      document.startViewTransition(() => apply(choice));
    else apply(choice);
  });
}
