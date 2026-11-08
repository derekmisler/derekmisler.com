import {
  contact,
  currentCareers,
  description,
  education,
  fullName,
  jobTitle,
  pastCareers,
  skills,
  socialId,
  tools,
} from '../constants.ts';

const plain = (text: string) => text.replaceAll('‑', '-');

const email = contact.find(({ href }) => href.startsWith('mailto:'))?.href.replace(/^mailto:|\?.*$/g, '');

const profiles = contact
  .filter(({ href }) => href.startsWith('https://'))
  .map(({ href }) => [href, href.replace(/^https:\/\/(www\.)?|\/$/g, '')]);

const links = [[`https://${socialId}.com`, `${socialId}.com`], [`mailto:${email}`, email], ...profiles];

const roles = [...currentCareers, ...pastCareers].flatMap((role) => [
  `### ${role.title}, [${role.location}](${role.link})`,
  '',
  `<p class="dates">${role.startDate} to ${role.endDate ?? 'Present'}</p>`,
  '',
  ...role.accomplishments.map((item) => `- ${plain(item)}`),
  '',
]);

const groups = (entries: [string, string[]][]) =>
  entries.map(([category, items]) => `- **${category}:** ${items.join(', ')}`);

export const resumeMd = [
  `# ${fullName}`,
  '',
  `<p class="role">${jobTitle}</p>`,
  '',
  `<p class="links">${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join(' ')}</p>`,
  '',
  plain(description),
  '',
  '## Experience',
  '',
  ...roles,
  '## Skills',
  '',
  ...groups(skills),
  '',
  '## Tools',
  '',
  ...groups(tools),
  '',
  '## Education',
  '',
  `### ${education.title}, ${education.location}`,
  '',
  plain(education.accomplishments.join(' ')),
  '',
].join('\n');
