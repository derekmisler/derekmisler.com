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
} from '../constants.ts';

const plain = (text: string) => text.replaceAll('‑', '-');

const email = contact.find(({ href }) => href.startsWith('mailto:'))?.href.replace(/^mailto:|\?.*$/g, '');

const profiles = contact
  .filter(({ href }) => href.startsWith('https://'))
  .map(({ href }) => [href, href.replace(/^https:\/\/(www\.)?|\/$/g, '')]);

const links = [[`https://${socialId}.com`, `${socialId}.com`], [`mailto:${email}`, email], ...profiles];

const roles = [...currentCareers, ...pastCareers].flatMap((role) => [
  `### ${role.title}, [${role.location}](${role.link}) <span class="dates">${role.startDate} to ${role.endDate ?? 'Present'}</span>`,
  '',
  ...(role.resume ?? []).map((index) => `- ${plain(role.accomplishments[index] ?? '')}`),
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
  `${plain(description)} ${education.title}, ${education.location}.`,
  '',
  '## Skills',
  '',
  ...groups(skills),
  '',
  '## Experience',
  '',
  ...roles,
].join('\n');
