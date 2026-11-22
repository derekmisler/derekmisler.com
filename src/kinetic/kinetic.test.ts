import assert from 'node:assert/strict';
import { test } from 'node:test';

import { splitWords } from './split.ts';
import { sunTheme } from './sun.ts';
import { zones } from './zones.ts';

test('sunTheme maps New York on the June solstice to each window', () => {
  const cases = [
    ['2026-06-21T09:30:00Z', 'dawn'],
    ['2026-06-21T16:00:00Z', 'midday'],
    ['2026-06-22T00:00:00Z', 'dusk'],
    ['2026-06-22T04:00:00Z', 'night'],
  ] as const;
  for (const [time, theme] of cases)
    assert.equal(sunTheme(zones, 'America/New_York', 240, new Date(time)), theme, time);
});

test('sunTheme falls back to the UTC offset for a zone missing from the table', () => {
  assert.equal(sunTheme(zones, 'Etc/Unknown', 240, new Date('2026-06-21T16:00:00Z')), 'midday');
  assert.equal(sunTheme(zones, 'Etc/Unknown', 240, new Date('2026-06-22T04:00:00Z')), 'night');
});

test('splitWords keeps every letter so the split text matches the source', () => {
  const text = 'Front‑end at Docker';
  assert.equal(
    splitWords(text)
      .map((word) => word.join(''))
      .join(' '),
    text,
  );
  assert.deepEqual(splitWords('Hi you'), [
    ['H', 'i'],
    ['y', 'o', 'u'],
  ]);
});
