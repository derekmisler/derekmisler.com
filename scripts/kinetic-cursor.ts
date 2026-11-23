import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { palette, themeFile, themeSelectors } from './kinetic-palette.ts';

export const size = 32;
export const hotspot = 12;

const arrow = 'M12 12 L12 28.15 L16.08 24.41 L19.06 30.7 L22.03 29.34 L19.14 23.22 L24.24 23.22 Z';
const dots = [
  [14.5, 18],
  [14.5, 21.4],
  [16.7, 19.7],
  [14.5, 24.8],
  [16.7, 23.1],
];

const lines = Array.from({ length: 6 }, (_, i) => {
  const angle = ((125 + (225 * i) / 5) * Math.PI) / 180;
  const end = i % 2 ? 7 : 9.3;
  const at = (r: number) =>
    `${(hotspot + r * Math.cos(angle)).toFixed(2)} ${(hotspot + r * Math.sin(angle)).toFixed(2)}`;
  return `M${at(3.6)} L${at(end)}`;
}).join(' ');

const round = (value: number) => Number(value.toFixed(4));

export const cursorSvg = (accent: { l: number; c: number; h: number }, hot: boolean) => {
  const fill = `oklch(${round(accent.l)} ${round(accent.c)} ${round(accent.h)})`;
  const stroke = (width: number, color: string) =>
    `<path d='${lines}' fill='none' stroke='${color}' stroke-width='${width}' stroke-linecap='round'/>`;
  return [
    `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>`,
    hot ? stroke(4.5, 'white') + stroke(2.4, 'black') : '',
    `<path d='${arrow}' fill='none' stroke='white' stroke-width='5' stroke-linejoin='round'/>`,
    `<path d='${arrow}' fill='${fill}' stroke='black' stroke-width='2.5' stroke-linejoin='round'/>`,
    `<g fill='white' opacity='0.75'>`,
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
