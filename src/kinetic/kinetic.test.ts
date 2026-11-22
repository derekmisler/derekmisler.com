import assert from 'node:assert/strict';
import { test } from 'node:test';

import { hourTheme } from './hours.ts';
import { splitWords } from './split.ts';
import { swapKeyframes } from './swaps.ts';

test('hourTheme maps each local hour to its window', () => {
  const cases = [
    [4, 'night'],
    [5, 'dawn'],
    [8, 'dawn'],
    [9, 'midday'],
    [15, 'midday'],
    [16, 'dusk'],
    [19, 'dusk'],
    [20, 'night'],
    [0, 'night'],
  ] as const;
  for (const [hour, theme] of cases) assert.equal(hourTheme(hour), theme, String(hour));
});

test('every swap pattern rests on upright sans at the snap point', () => {
  const css = swapKeyframes();
  assert.equal(css.match(/@keyframes swap-\d/g)?.length, 8);
  assert.equal(css.match(/42\.0%\{--mono:0;--slnt:0\}/g)?.length, 8);
});

test('splitWords keeps every letter so the split text matches the source', () => {
  const text = 'Front-⁠end at Docker';
  assert.equal(
    splitWords(text)
      .map((word) => word.join(''))
      .join(' '),
    text,
  );
});
