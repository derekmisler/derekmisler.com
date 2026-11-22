import { readFileSync } from 'node:fs';

import { create, type Font } from 'fontkitten';

import { agentLink, contact, fullName, intro, navItems, statements } from '../constants.ts';

type Link = { href: string; label: string; download?: string };
type Part = { text: string; strong?: boolean; href?: string };
type Content = {
  id: string;
  label: string;
  poster: string;
  period?: string;
  headline?: string;
  lead: Part[];
  links?: Link[];
};

const font = create(readFileSync('public/fonts/recursive-kinetic.woff2')) as Font;
const advance = (char: string) => font.glyphForCodePoint(char.codePointAt(0) ?? 0).advanceWidth / font.unitsPerEm;
const monoAdvance = 0.6;

const content: Content[] = [
  {
    id: navItems.home.slug,
    label: navItems.home.label,
    poster: fullName,
    lead: intro,
    links: contact,
  },
  ...statements.map((statement) => ({
    id: statement.slug,
    label: statement.label,
    poster: statement.poster,
    period: statement.period,
    headline: statement.headline,
    lead: [{ text: statement.detail }],
  })),
  {
    id: navItems.contact.slug,
    label: navItems.contact.label,
    poster: navItems.contact.label,
    lead: [{ text: 'Say hello.' }],
    links: [...contact, agentLink],
  },
];

const widestEm = (word: string) =>
  Array.from(word).reduce((sum, char) => (char === '\u2060' ? sum : sum + Math.max(advance(char), monoAdvance)), 0);

export const posterSize = (poster: string, height: number) => {
  const words = poster.split(' ');
  const em = Math.max(...words.map(widestEm));
  return `min((100cqi + var(--poster-bleed)) / ${em.toFixed(3)}, max(${height}, var(--poster-budget)) / ${words.length} * 1svh)`;
};

export const panels = content.map((panel, index) => ({
  ...panel,
  index,
  timeline: `--p${index}`,
  size: posterSize(panel.poster, panel.headline ? 40 : 60),
  links: panel.links ?? [],
}));

const faces = [
  [1000, 0, 0, 0],
  [300, 1, 0, 0],
  [800, 0, 1, -15],
  [500, 1, 1, 0],
  [300, 0, 0, -15],
  [900, 1, 0, -15],
  [600, 0, 1, 0],
] as const;

export const railGap = 0.6;
export const railSpace = 0.25;

export const rail = (labels: string[], random = Math.random) => {
  const order = faces.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const items = labels.map((label, index) => {
    const [, mono, casl, slnt] = faces[order[index % order.length]];
    const wght = index % 2 ? 300 : 1000;
    const space = mono ? monoAdvance : advance(' ');
    const em = Array.from(label).reduce(
      (sum, char) => sum + (char === ' ' ? railSpace : mono ? monoAdvance : advance(char)),
      0,
    );
    return {
      em,
      style: `--wght: ${wght}; --mono: ${mono}; --casl: ${casl}; --slnt: ${slnt}; word-spacing: ${(railSpace - space).toFixed(3)}em`,
    };
  });
  return { items, fit: items.reduce((sum, item) => sum + item.em, (labels.length - 1) * railGap).toFixed(3) };
};

export const railLayout = rail(panels.map((panel) => panel.label));
