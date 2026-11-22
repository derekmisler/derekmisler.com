const states = [
  [1, 0],
  [0, -15],
  [1, -15],
  [0, 0],
] as const;

export const swapCount = 8;

const stops = (from: number, to: number, random: () => number) =>
  Array.from({ length: 4 + Math.floor(random() * 4) }, () => from + random() * (to - from)).sort((a, b) => a - b);

export const swapKeyframes = (random = Math.random) =>
  Array.from({ length: swapCount }, (_, index) => {
    let previous = 3;
    const frame = (stop: number, state?: number) => {
      const next = state ?? (previous + 1 + Math.floor(random() * 3)) % 4;
      previous = next;
      return `${stop.toFixed(1)}%{--mono:${states[next][0]};--slnt:${states[next][1]}}`;
    };
    return `@keyframes swap-${index}{${[
      frame(0),
      ...stops(4, 40, random).map((stop) => frame(stop)),
      frame(42, 3),
      ...stops(58, 96, random).map((stop) => frame(stop)),
    ].join('')}}`;
  }).join('');
