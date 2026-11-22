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
