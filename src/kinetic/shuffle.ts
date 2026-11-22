import { swapCount } from './swaps';

let previous = -1;
for (const letter of document.querySelectorAll<HTMLElement>('.poster .letter')) {
  previous = (previous + 1 + Math.floor(Math.random() * (swapCount - 1))) % swapCount;
  letter.style.setProperty('--swap', `swap-${previous}`);
}
