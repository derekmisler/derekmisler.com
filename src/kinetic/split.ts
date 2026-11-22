import { swapCount } from './swaps.ts';

export const splitWords = (text: string) => text.split(' ').map((word) => Array.from(word));

export const stagger = (total: number, random = Math.random) => {
  const step = total > 1 ? 10 / (total - 1) : 0;
  let index = 0;
  let swap = -1;
  return () => {
    swap = (swap + 1 + Math.floor(random() * (swapCount - 1))) % swapCount;
    const lag = (index++ * step - 5).toFixed(2);
    return `--shift: ${lag}%; --lag: ${lag}; --swap: swap-${swap}`;
  };
};
