import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { kineticErrors } from './check-tokens.mjs';
import { contrast, linearSrgb, pairs, palette, themeFile, themeSelectors, themes } from './kinetic-palette.ts';
import { base, fluid, ratio, scaleCss, scaleFile } from './kinetic-scale.ts';

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
