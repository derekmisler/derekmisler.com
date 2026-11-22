import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { mdToPdf } from 'md-to-pdf';
import { fullName } from '../src/constants.ts';
import { resumeMd } from '../src/utils/resume.ts';
import { palette, themeFile, themes, themeSelectors } from './kinetic-palette.ts';

const path = (relative: string) => fileURLToPath(new URL(relative, import.meta.url));

const themeCss = readFileSync(themeFile, 'utf8');

const tokens = (theme: string) =>
  `:root{${Object.entries(palette(themeCss, themeSelectors(theme)))
    .map(([name, { l, c, h }]) => `--${name}:oklch(${(l * 100).toFixed(2)}% ${c.toFixed(4)} ${h.toFixed(2)});`)
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
      pdf_options: { format: 'Letter', margin: { top: 0, right: 0, bottom: 0, left: 0 }, printBackground: true },
      // Uses the installed Chrome so pnpm never downloads one for md-to-pdf.
      launch_options: process.env.PUPPETEER_EXECUTABLE_PATH ? {} : { channel: 'chrome' },
    },
  );
  console.log(`Wrote ${dest}`);
}
