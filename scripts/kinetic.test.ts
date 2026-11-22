import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { kineticErrors } from './check-tokens.mjs';
import { boot } from '../src/kinetic/boot.ts';
import { hourTheme } from '../src/kinetic/hours.ts';
import {
  contrast,
  declarations,
  linearSrgb,
  pairs,
  palette,
  themeFile,
  themeSelectors,
  themes,
} from './kinetic-palette.ts';
import { base, fluid, ratio, scaleCss, scaleFile } from './kinetic-scale.ts';
import { panels, posterSize, rail, railGap } from '../src/kinetic/panels.ts';
import { splitWords, stagger } from '../src/kinetic/split.ts';
import { swapCount, swapKeyframes } from '../src/kinetic/swaps.ts';

test('every theme is in gamut, AA for each text and background pair, and the no-JS fallbacks match', () => {
  const css = readFileSync(themeFile, 'utf8');
  for (const theme of themes) {
    const colors = palette(css, themeSelectors(theme));
    for (const [name, color] of Object.entries(colors)) {
      assert.ok(
        linearSrgb(color).every((value) => value >= -0.001 && value <= 1.001),
        `${theme} ${name} is out of sRGB`,
      );
    }
    for (const [text, background] of pairs) {
      const ratio = contrast(colors[text], colors[background]);
      assert.ok(ratio >= 4.5, `${theme} ${text} on ${background} is ${ratio.toFixed(2)}`);
    }
  }
  assert.deepEqual(palette(css, [':root']), palette(css, themeSelectors('midday')));
  assert.deepEqual(palette(css, [':root', ':root:not([data-theme])']), palette(css, themeSelectors('night')));
});

test('the accent stays in gamut and AA across its whole drift', () => {
  const css = readFileSync(themeFile, 'utf8');
  for (const theme of themes) {
    const span = Number(declarations(css, themeSelectors(theme))['--drift-span']);
    assert.ok(Math.abs(span) >= 30, `${theme} barely drifts`);
    for (let step = 0; step <= 10; step++) {
      const drift = (span * step) / 10;
      const colors = palette(`${css}\n:root { --drift: ${drift}; }`, themeSelectors(theme));
      assert.ok(
        linearSrgb(colors.accent).every((value) => value >= -0.001 && value <= 1.001),
        `${theme} at ${drift}`,
      );
      for (const [text, background] of pairs.filter((pair) => pair.some((name) => name === 'accent'))) {
        assert.ok(contrast(colors[text], colors[background]) >= 4.5, `${theme} ${text} on ${background} at ${drift}`);
      }
    }
  }
});

test('the scale runs from ratio 1.25 at 360px to 1.5 at 1440px and the CSS is regenerated', () => {
  assert.deepEqual(fluid(5), {
    min: Number((base.min * ratio.min ** 5).toFixed(4)),
    max: Number((base.max * ratio.max ** 5).toFixed(4)),
    css: 'clamp(3.0518rem, 1.2214rem + 8.1351cqi, 8.543rem)',
  });
  assert.equal(readFileSync(scaleFile, 'utf8'), scaleCss(), 'run node scripts/kinetic-scale.ts');
});

test('kinetic files enforce the kinetic token rules', () => {
  const cases = [
    ['src/kinetic/a.css', 'p { font-variation-settings: "wght" 700; }', 'outside the theme; set --wght'],
    ['src/kinetic/a.css', 'p { transition: color var(--fast); }', '"transition" outside @media'],
    ['src/kinetic/a.css', 'p { color: if(media(hover): red; else: blue); }', 'single-engine "if("'],
    ['src/kinetic/a.css', 'p { color: oklch(50% 0.1 200); }', 'color "oklch(" outside the theme'],
    ['src/styles/kinetic-theme.css', ':root { --x: #fff; }', 'non-OKLCH color "#fff"'],
  ];
  for (const [name, source, message] of cases) {
    assert.ok(kineticErrors(name, source).join('\n').includes(message), source);
  }
  const clean = `@media (prefers-reduced-motion: no-preference) {
  @supports (x: if(style(--a): 1)) { p { animation: spin var(--slow); color: if(style(--a): var(--fg)); } }
}
@supports (animation-timeline: view()) { a { --x: 1; } }
a:hover { padding: var(--spacing-sm); --wght: 700; }`;
  assert.deepEqual(kineticErrors('src/kinetic/a.css', clean), []);
});

test('every swap pattern rests on upright sans at the snap point', () => {
  const css = swapKeyframes();
  assert.equal(css.match(/@keyframes swap-\d/g)?.length, swapCount);
  assert.equal(css.match(/42\.0%\{--mono:0;--slnt:0\}/g)?.length, swapCount);
});

test('split text matches the source and neighbors never share a swap', () => {
  const text = 'Front-⁠end at Docker';
  const words = splitWords(text);
  assert.equal(words.map((word) => word.join('')).join(' '), text);
  const style = stagger(words.flat().length, () => 0);
  const styles = words.flat().map(() => style());
  assert.match(styles[0], /--lag: -5\.00;/);
  assert.match(styles.at(-1) ?? '', /--lag: 5\.00;/);
  const swaps = styles.map((value) => value.match(/swap-(\d)/)?.[1]);
  assert.ok(swaps.every((swap, index) => index === 0 || swap !== swaps[index - 1]));
});

test('panels run from intro to contact, with links only on the ends and posters sized to fit', () => {
  assert.equal(panels[0].id, 'home');
  assert.deepEqual(
    panels[0].links.map((link) => link.label),
    ['Email', 'LinkedIn', 'GitHub', 'Resume'],
  );
  assert.equal(panels.at(-1)?.links.at(-1)?.href, '/llms.txt');
  assert.equal(panels.at(-1)?.id, 'contact');
  assert.ok(panels.slice(1, -1).every((panel) => panel.links.length === 0));
  assert.equal(posterSize('Derek Misler', 64), 'min((100cqi + var(--poster-bleed)) / 3.800, 32.0svh)');
  assert.equal(panels[0].size, posterSize('Derek Misler', 64));
  assert.equal(panels[1].size, posterSize('Gordon 2.0', 40));
  const { items, fit } = rail(['Home', 'Gordon'], () => 0);
  assert.deepEqual(
    items.map((item) => item.style.match(/--wght: (\d+)/)?.[1]),
    ['1000', '300'],
  );
  assert.equal(fit, (items[0].em + items[1].em + railGap).toFixed(3));
});

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

test('boot uses a stored theme and falls back to the hour theme for anything else', () => {
  const hour = new Date().getHours();
  const cases = [
    ['night', 'night', 'night'],
    ['sepia', 'auto', hourTheme(hour)],
    [null, 'auto', hourTheme(hour)],
  ] as const;
  for (const [stored, choice, theme] of cases) {
    const dataset: Record<string, string> = {};
    const document = { documentElement: { dataset }, fonts: { load: () => new Promise(() => {}) } };
    const localStorage = { getItem: () => stored };
    new Function('document', 'localStorage', 'setTimeout', boot)(document, localStorage, () => {});
    assert.deepEqual([dataset.choice, dataset.theme], [choice, theme], String(stored));
  }
});
