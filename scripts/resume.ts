import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { mdToPdf } from 'md-to-pdf';
import { fullName } from '../src/constants.ts';
import { resumeMd } from '../src/utils/resume.ts';
import { declarations, linearSrgb, palette, themeFile, themes, themeSelectors } from './kinetic-palette.ts';

const path = (relative: string) => fileURLToPath(new URL(relative, import.meta.url));

const themeCss = readFileSync(themeFile, 'utf8');

const light = Object.fromEntries(
  Object.entries(declarations(themeCss, [':root'])).filter(([name]) => name.startsWith('--l-')),
);

const hues: Record<string, Record<string, string>> = {
  dusk: { '--h-fg': 'var(--h-bg)', '--h-accent': 'var(--h-bg)' },
};

const inGamut = (color: { l: number; c: number; h: number }) =>
  linearSrgb(color).every((channel) => channel >= 0 && channel <= 1);

// PDFs can't swap colors for print, so every theme assumes white paper and keeps its own hues.
const tokens = (theme: string) =>
  `:root{${Object.entries(palette(themeCss, themeSelectors(theme), { ...light, ...hues[theme] }))
    .map(([name, { l, c: chroma, h }]) => {
      let c = chroma;
      while (c > 0 && !inGamut({ l, c, h })) c = Math.max(0, c - 0.002);
      return `--${name}:oklch(${(l * 100).toFixed(2)}% ${c.toFixed(4)} ${h.toFixed(2)});`;
    })
    .join('')}}`;

for (const theme of themes) {
  const dest = path(`../public/derek-misler-resume-${theme}.pdf`);
  await mdToPdf(
    { content: resumeMd },
    {
      dest,
      basedir: path('../public'),
      stylesheet: [path('resume.css')],
      css: tokens(theme),
      document_title: `${fullName} Resume`,
      pdf_options: { format: 'Letter', preferCSSPageSize: true, printBackground: true },
      // Uses the installed Chrome so pnpm never downloads one for md-to-pdf.
      launch_options: process.env.PUPPETEER_EXECUTABLE_PATH ? {} : { channel: 'chrome' },
    },
  );
  console.log(`Wrote ${dest}`);
}
