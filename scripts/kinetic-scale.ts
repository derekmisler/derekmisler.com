import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const viewport = { min: 360, max: 1440 };
export const ratio = { min: 1.25, max: 1.5 };
export const base = { min: 1, max: 1.125 };

export const leading = { body: 1.6, lead: 1.4, heading: 1.1, poster: 0.9 };

const type: { name: string; step: number; tier: keyof typeof leading }[] = [
  { name: 'small', step: -1, tier: 'body' },
  { name: 'body', step: 0, tier: 'body' },
  { name: 'lead', step: 1, tier: 'lead' },
  { name: 'h3', step: 2, tier: 'heading' },
  { name: 'h2', step: 3, tier: 'heading' },
  { name: 'h1', step: 4, tier: 'heading' },
  { name: 'poster', step: 5, tier: 'poster' },
];

const spacing = [
  { name: '2xs', step: -2 },
  { name: 'xs', step: -1 },
  { name: 'sm', step: 0 },
  { name: 'md', step: 1 },
  { name: 'lg', step: 2 },
  { name: 'xl', step: 3 },
  { name: '2xl', step: 4 },
  { name: '3xl', step: 5 },
];

const round = (value: number) => Number(value.toFixed(4));

export const fluid = (step: number) => {
  const min = base.min * ratio.min ** step;
  const max = base.max * ratio.max ** step;
  const slope = (max - min) / (viewport.max - viewport.min);
  const intercept = min - slope * viewport.min;
  const [low, high] = [min, max].sort((a, b) => a - b);
  const cqi = round(slope * 16 * 100);
  const preferred = `${round(intercept)}rem ${cqi < 0 ? '-' : '+'} ${Math.abs(cqi)}cqi`;
  return { min: round(min), max: round(max), css: `clamp(${round(low)}rem, ${preferred}, ${round(high)}rem)` };
};

export const scaleCss = () =>
  [
    '@theme inline {',
    ...type.flatMap(({ name, step, tier }) => [
      `  --text-${name}: ${fluid(step).css};`,
      `  --text-${name}--line-height: var(--leading-${tier});`,
    ]),
    '',
    ...Object.entries(leading).map(([tier, value]) => `  --leading-${tier}: ${value};`),
    '',
    ...spacing.map(({ name, step }) => `  --spacing-${name}: ${fluid(step).css};`),
    '}',
    '',
  ].join('\n');

export const scaleFile = fileURLToPath(new URL('../src/styles/kinetic-scale.css', import.meta.url));

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeFileSync(scaleFile, scaleCss());
  console.log(`Wrote ${scaleFile}`);
}
