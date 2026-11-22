import { readFileSync } from 'node:fs';

import { create, type Font } from 'fontkitten';

import { contact, fullName, navItems, statements } from '../constants.ts';

type Link = { href: string; label: string; download?: string };
type Content = { id: string; label: string; poster: string; headline?: string; lead: string };

const content: Content[] = [
  {
    id: navItems.home.slug,
    label: navItems.home.label,
    poster: fullName,
    lead: 'Front-⁠end engineer at Docker. Type, layout and systems.',
  },
  ...statements.map((statement) => ({
    id: statement.slug,
    label: statement.label,
    poster: statement.label,
    headline: statement.headline,
    lead: statement.detail,
  })),
  {
    id: navItems.contact.slug,
    label: navItems.contact.label,
    poster: navItems.contact.label,
    lead: 'Say hello, or judge my code.',
  },
];

export const posterSize = (poster: string) => {
  const words = poster.split(' ');
  const longest = Math.max(...words.map((word) => Array.from(word).length));
  return `min(${(140 / longest).toFixed(1)}cqi, ${(42 / words.length).toFixed(1)}svh)`;
};

export const panels = content.map((panel, index, all) => ({
  ...panel,
  index,
  timeline: `--p${index}`,
  size: posterSize(panel.poster),
  links: (all[index + 1] ? [{ href: `#${all[index + 1].id}`, label: 'Next' }] : contact) as Link[],
}));

const font = create(readFileSync('public/fonts/recursive-kinetic.woff2')) as Font;

const faces = [
  [1000, 0, 0, 0],
  [300, 1, 0, 0],
  [800, 0, 1, -15],
  [500, 1, 1, 0],
  [300, 0, 0, -15],
  [900, 1, 0, -15],
  [600, 0, 1, 0],
] as const;

export const rail = (labels: string[], random = Math.random) => {
  const order = faces.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const items = labels.map((label, index) => {
    const [wght, mono, casl, slnt] = faces[order[index % order.length]];
    const em = mono
      ? Array.from(label).length * 0.6
      : Array.from(label).reduce(
          (sum, char) => sum + font.glyphForCodePoint(char.codePointAt(0) ?? 0).advanceWidth,
          0,
        ) / font.unitsPerEm;
    return { em, style: `--wght: ${wght}; --mono: ${mono}; --casl: ${casl}; --slnt: ${slnt}` };
  });
  return { items, fit: items.reduce((sum, item) => sum + item.em, 0).toFixed(3) };
};

export const railLayout = rail(panels.map((panel) => panel.label));
