import { readFileSync, writeFileSync } from 'node:fs';
import subsetFont from 'subset-font';

const [source, out = 'public/fonts/recursive.woff2'] = process.argv.slice(2);
if (!source) throw new Error('Usage: node scripts/subset-font.ts <Recursive_VF.ttf> [out.woff2]');

const ranges: [number, number][] = [
  [0x20, 0x7e],
  [0xa0, 0xff],
  [0x131, 0x131],
  [0x152, 0x153],
  [0x2bb, 0x2bc],
  [0x2c6, 0x2c6],
  [0x2da, 0x2da],
  [0x2dc, 0x2dc],
  [0x2000, 0x206f],
  [0x20ac, 0x20ac],
  [0x2122, 0x2122],
  [0x2191, 0x2191],
  [0x2193, 0x2193],
  [0x2212, 0x2212],
  [0x2215, 0x2215],
];

const text = ranges
  .flatMap(([from, to]) => Array.from({ length: to - from + 1 }, (_, i) => String.fromCodePoint(from + i)))
  .join('');

const font = await subsetFont(readFileSync(source), text, {
  targetFormat: 'woff2',
  variationAxes: { CRSV: 0, slnt: 0 },
  keepFeatures: ['rvrn', 'ccmp', 'locl', 'mark', 'mkmk', 'kern', 'liga', 'calt'],
  noHinting: true,
});

writeFileSync(out, font);
console.log(`${out}: ${(font.length / 1024).toFixed(1)} KB`);
