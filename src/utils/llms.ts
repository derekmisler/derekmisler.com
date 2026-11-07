import {
  contact,
  currentCareers,
  description,
  education,
  fullName,
  highlights,
  jobTitle,
  pastCareers,
  skills,
  subHeadline,
  tools,
} from '@/constants';

const siteUrl = 'https://derekmisler.com';

const plain = (text: string) => text.replaceAll('‑', '-');

const absolute = (href: string) => (href.startsWith('/') ? `${siteUrl}${href}` : href);

const linkTo = (label: string) =>
  contact
    .filter((item) => item.label === label)
    .map(({ href, altLabel }) => `- [${label}](${absolute(href)}): ${altLabel}`);

const links = ['LinkedIn', 'GitHub', 'Resume'].flatMap(linkTo);

const email = contact.find(({ href }) => href.startsWith('mailto:'))?.href.replace(/^mailto:|\?.*$/g, '');

const header = [`# ${fullName}`, '', `> ${plain(description)}`, '', `${jobTitle}. Contact: ${email}`];

const groups = (title: string, entries: [string, string[]][]) => [
  `## ${title}`,
  '',
  ...entries.map(([category, items]) => `- ${category}: ${items.join(', ')}`),
];

const roles = [...currentCareers, ...pastCareers].flatMap((role) => [
  `### ${role.title}, ${role.location}`,
  '',
  `${role.startDate} to ${role.endDate ?? 'Present'}. ${role.link}`,
  '',
  ...role.accomplishments.map((item) => `- ${plain(item)}`),
  '',
]);

export const llmsTxt = [
  ...header,
  '',
  ...highlights.map((item) => `- ${plain(item)}`),
  '',
  '## Profile',
  '',
  `- [Full profile](${siteUrl}/llms-full.txt): Background, every role with accomplishments, skills and tools`,
  ...linkTo('Resume'),
  '',
  '## Optional',
  '',
  ...linkTo('LinkedIn'),
  ...linkTo('GitHub'),
  '',
].join('\n');

export const llmsFullTxt = [
  ...header,
  '',
  '## Background',
  '',
  plain(subHeadline),
  '',
  '## Highlights',
  '',
  ...highlights.map((item) => `- ${plain(item)}`),
  '',
  '## Experience',
  '',
  ...roles,
  '## Education',
  '',
  `${education.title}, ${education.location}. ${plain(education.accomplishments.join(' '))}`,
  '',
  ...groups('Core skills', skills),
  '',
  ...groups('Tools', tools),
  '',
  '## Links',
  '',
  ...links,
  '',
].join('\n');
