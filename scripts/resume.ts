import { fileURLToPath } from 'node:url';
import { mdToPdf } from 'md-to-pdf';
import { fullName } from '../src/constants.ts';
import { resumeMd } from '../src/utils/resume.ts';

const path = (relative: string) => fileURLToPath(new URL(relative, import.meta.url));

const dest = path('../public/derek-misler-resume.pdf');

await mdToPdf(
  { content: resumeMd },
  {
    dest,
    basedir: path('../public'),
    stylesheet: [path('resume.css')],
    document_title: `${fullName} Resume`,
    pdf_options: {
      format: 'Letter',
      margin: { top: '0.55in', right: '0.55in', bottom: '0.55in', left: '0.55in' },
    },
    // Uses the installed Chrome so pnpm never downloads one for md-to-pdf.
    launch_options: process.env.PUPPETEER_EXECUTABLE_PATH ? {} : { channel: 'chrome' },
  },
);

console.log(`Wrote ${dest}`);
