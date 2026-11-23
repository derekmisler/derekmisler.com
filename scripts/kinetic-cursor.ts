import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { palette, themeFile, themeSelectors } from './kinetic-palette.ts';

export const size = 32;
export const hotspot = 12;

const scale = 0.87;
const at = ([x, y]: number[]) => [hotspot + x * scale, hotspot + y * scale].map((n) => Number(n.toFixed(2)));
const arrow = `M${[
  [0, 0],
  [0, 16.15],
  [4.08, 12.41],
  [7.06, 18.7],
  [10.03, 17.34],
  [7.14, 11.22],
  [12.24, 11.22],
]
  .map((point) => at(point).join(' '))
  .join(' L')} Z`;
const dots = [
  [2.5, 6],
  [2.5, 9.4],
  [4.7, 7.7],
  [2.5, 12.8],
  [4.7, 11.1],
].map(at);

const lines = Array.from({ length: 6 }, (_, i) => {
  const angle = ((125 + (225 * i) / 5) * Math.PI) / 180;
  const end = i % 2 ? 7 : 9.3;
  const ray = (r: number) =>
    `${(hotspot + r * Math.cos(angle)).toFixed(2)} ${(hotspot + r * Math.sin(angle)).toFixed(2)}`;
  return `M${ray(3.6)} L${ray(end)}`;
}).join(' ');

const round = (value: number) => Number(value.toFixed(4));

export const cursorSvg = (accent: { l: number; c: number; h: number }, hot: boolean) => {
  const fill = `oklch(${round(accent.l)} ${round(accent.c)} ${round(accent.h)})`;
  const stroke = (width: number, color: string) =>
    `<path d='${lines}' fill='none' stroke='${color}' stroke-width='${width}' stroke-linecap='round'/>`;
  return [
    `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>`,
    hot ? stroke(4.5, 'oklch(1 0 0)') + stroke(2.4, 'oklch(0 0 0)') : '',
    `<path d='${arrow}' fill='none' stroke='oklch(1 0 0)' stroke-width='5' stroke-linejoin='round'/>`,
    `<path d='${arrow}' fill='${fill}' stroke='oklch(0 0 0)' stroke-width='2.5' stroke-linejoin='round'/>`,
    `<g fill='oklch(1 0 0)' opacity='0.75'>`,
    ...dots.map(([cx, cy]) => `<circle cx='${cx}' cy='${cy}' r='0.9'/>`),
    '</g></svg>',
  ].join('');
};

const url = (svg: string) => `url("data:image/svg+xml,${svg.replace(/[%#<>]/g, (char) => encodeURIComponent(char))}")`;

const block = (selector: string, css: string, theme: string, indent = '') => {
  const { accent } = palette(css, themeSelectors(theme));
  return [
    `${indent}${selector} {`,
    ...[
      ['--cursor', cursorSvg(accent, false), 'auto'],
      ['--cursor-hot', cursorSvg(accent, true), 'pointer'],
    ].flatMap(([name, svg, fallback]) => [
      `${indent}  ${name}:`,
      `${indent}    ${url(svg)}`,
      `${indent}      ${hotspot} ${hotspot},`,
      `${indent}    ${fallback};`,
    ]),
    `${indent}}`,
  ];
};

export const cursorCss = (css = readFileSync(themeFile, 'utf8')) =>
  [
    ...block(':root', css, 'midday'),
    '',
    ...block(":root[data-theme='dawn']", css, 'dawn'),
    '',
    ...block(":root[data-theme='dusk']", css, 'dusk'),
    '',
    ...block(":root[data-theme='night']", css, 'night'),
    '',
    '@media (prefers-color-scheme: dark) {',
    ...block(':root:not([data-theme])', css, 'night', '  '),
    '}',
    '',
  ].join('\n');

export const cursorFile = fileURLToPath(new URL('../src/styles/kinetic-cursor.css', import.meta.url));

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeFileSync(cursorFile, cursorCss());
  console.log(`Wrote ${cursorFile}`);
}
