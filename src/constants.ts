export const headline =
  'Front-end engineer and design enthusiast, committed to crafting accessible, engaging web experiences with a strong emphasis on UI/UX and typography.';

export const subHeadline =
  'As a seasoned front-end engineer with over 15 years of experience, I started web development at the age of 13, fueled by a passion for technology. My skills span graphic design and a range of web and app development technologies. I excel in creating accessible, user-friendly digital experiences by merging technical expertise with a strong design sensibility, deep knowledge of UI/UX, and typography.';

export const firstName = 'Derek';
export const lastName = 'Misler';
export const fullName = `${firstName} ${lastName}`;
export const title = `Front-End Engineer & Design Specialist`;
export const description =
  "Explore Derek Misler's portfolio, showcasing over 15 years of experience as a front-end engineer. Specializing in creating accessible, high-quality web applications and designs, Derek blends technical expertise with a strong design sensibility in UI/UX and typography.";

const socialId = 'derekmisler';
export const contact: Partial<HTMLAnchorElement>[] = [
  { href: `mailto:hello@${socialId}.com?subject=Hello!` },
  { href: `https://www.linkedin.com/in/${socialId}/` },
  { href: `https://github.com/${socialId}` },
  { href: '/derek-misler-resume.pdf', download: 'true' },
];

export const skills: [string, string[]][] = [
  ['Languages', ['JavaScript/TypeScript', 'Python', 'Ruby', 'Go', 'Web Components']],
  ['Frameworks & Libraries', ['React', 'Next.js', 'Node.js', 'React Native', 'Astro', 'Redux', 'Remix', 'Flask', 'Django', 'Rails']],
  ['Tools & Technologies', ['Docker', 'AWS', 'GCP', 'Vite', 'ESLint', 'Prettier', 'NPM/Yarn', 'CircleCI', 'Webpack', 'Babel']],
  ['Testing', ['Jest', 'React Testing Library (RTL)', 'Cypress', 'Enzyme', 'Storybook', 'Chromatic']],
  ['Design & UX', ['Figma', 'UI/UX', 'Responsive Design', 'Typography', 'Color Theory', 'Design Systems']],
  ['Other Skills', ['SEO', 'Accessibility (A11y)', 'Functional Programming', 'API Design', 'Performance Optimization', 'PWAs']],
];

interface Experience {
  location: string;
  title: string;
  description?: string;
  accomplishments?: string[];
  startDate: string;
  endDate: string;
  link?: string;
}
export const education: Experience[] = [
  {
    location: 'Appalachian State University',
    title: 'BFA, Graphic Design',
    description:
      'I pursued a degree in graphic design within the arts department, where I honed my skills in front-end web development. My curriculum was centered around web design and included rigorous training in color theory, typography, and layout design in collaborative group settings. During this time, I also expanded my technical expertise by learning Flash/Actionscript for game development, which further enhanced my understanding of interactive media.',
    startDate: '2005',
    endDate: '2009',
  },
];

export const careers: Experience[] = [
  {
    location: 'Docker',
    title: 'Senior Software Engineer',
    accomplishments: ['Technical lead on the development of analytics dashboards for enterprise customers.'],
    startDate: '2024',
    endDate: 'Present',
    link: 'https://www.docker.com',
  },
  {
    location: 'Patreon',
    title: 'Senior Software Engineer',
    accomplishments: [
      'I was a senior engineer on the front-end platform team, leading a large-scale migration from a Flask/React multi-page app with an in-house server-rendering service to Next.js, focusing on modernizing our front-end architecture.',
      "I led the front-end development for this migration, collaborating closely with back-end platform and infrastructure teams, which resulted in a 55% reduction in LCP, the primary metric for the project's key results.",
      'I developed a pattern that enabled incremental feature migration without blocking other teams, incorporating feature flag support for percentage-based rollouts.',
      'I integrated error alerting with PagerDuty, Sentry, and Slack, and set up DataDog dashboards for comprehensive monitoring.',
      'I coordinated scheduled QA sessions with all product teams to facilitate knowledge sharing and crafted regular status updates for both upper management and engineering teams.',
      'I spearheaded best practices in front-end development, including TypeScript adoption, linting, and documentation.',
      'I led the migration from Enzyme with limited automated tests to React Testing Library and Cypress, establishing a full suite of integration, end-to-end, and smoke tests.',
      'I collaborated with cross-functional teams to streamline the development process, enabling the execution of end-to-end and smoke tests during development and on pull requests.',
      'I mentored junior engineers and interns, contributing to their professional growth and enhancing team cohesion.',
      "I designed and led 'Front-End 101' onboarding sessions for all new engineers, ensuring consistent knowledge transfer.",
      'I played a key role in adopting industry-leading front-end technologies to improve developer productivity and maintainability.',
      'I was an essential contributor in the migration from Redux to Jotai for state management.',
      'I developed accessible form elements and validation, which were integrated into our component library, including the use of React Hook Form to manage form state.',
    ],
    startDate: '2021',
    endDate: '2023',
    link: 'https://www.patreon.com',
  },
  {
    location: 'Cadre',
    title: 'Lead Software Engineer',
    accomplishments: [
      'I refactored and unified a decoupled single-page application (SPA) and third-party marketing site into a cohesive Django/React web app.',
      'I migrated fragmented codebases into a monorepo, improving code maintainability and collaboration.',
      'I developed a custom server-rendering configuration for our marketing site using Webpack, React, and a new Node.js service.',
      'I served as the technical lead and primary developer for our internal component and design pattern library.',
      'I contributed to the open-source component library (Base Web) that inspired the development of our own component library.',
      'I led and mentored teams of full-stack engineers across multiple projects, utilizing both Agile and Shape Up methodologies.',
    ],
    startDate: '2020',
    endDate: '2021',
    link: 'https://cadre.com',
  },
  {
    location: 'Transfix, Inc.',
    title: 'Staff Software Engineer',
    accomplishments: [
      "I was the first front-end engineer, establishing the foundation for the company's front-end and mobile architecture.",
      'I rebuilt Android and iOS apps using React Native, modernizing the mobile experience.',
      'I refactored the web app from Rails to Aurelia and ultimately transitioned to React/Redux for enhanced performance and scalability.',
      'I refactored the public site from WordPress to Jade (a static site templating language) and later migrated to 11ty.js.',
      'I developed an internal library for creating web (React/Redux) apps, mobile (React Native) apps, and shared modules (NPM).',
      'I implemented a brand-new CI/CD pipeline using CircleCI, streamlining deployment processes.',
      'I established standards for networking configurations, CSS and JS syntax linting, and automated testing.',
      'I developed web networking standards, leveraging AWS tools, including deployment configurations, client-side security, and multi-region failover.',
      'I served as the technical lead in the creation of our internal component and design pattern library.',
      'I grew and led a team of cross-functional engineers and designers to continue advancing front-end and mobile development.',
    ],
    startDate: '2016',
    endDate: '2020',
    link: 'https://transfix.io',
  },
  {
    location: 'Asheville Convention & Visitors Bureau',
    title: 'Web Manager, Developer, Photographer',
    accomplishments: [
      'I was the lead and primary developer responsible for our entire web presence.',
      'I developed our first mobile site and responsive blog theme within a .NET-backed codebase.',
      'I redesigned and refactored our marketing site twice: initially using ColdFusion, and later transitioning to Node/MongoDB on the back end and a custom JS templating language, Goatee, on the front end.',
      'I oversaw the design aspects of all print and web-related assets for various marketing campaigns.',
      'I served as the primary data analyst for all marketing campaigns, capturing and segmenting demographic data to inform future strategies.',
      'I was the lead developer and designer of two long-form, media-rich, highly interactive, award-winning web applications built with a Node back end and AngularJS front end.',
    ],
    startDate: '2011',
    endDate: '2016',
    link: 'http://www.exploreasheville.com',
  },
  {
    location: 'Houser Shoes, Inc.',
    title: 'Developer, Designer, Photographer',
    accomplishments: [
      'I was part of a 3-person team that redesigned the e-commerce website for Houser Shoes.',
      'I developed a custom CMS based on Magento, using PHP and MySQL, and integrated it with their inventory and accounting systems.',
      'I leveraged my photography skills to serve as the lead product photographer, responsible for taking, editing, and uploading extensive product photos.',
      'I managed the email marketing program, including the design and implementation of each campaign.',
      'I conducted analysis of the results after each email marketing campaign to inform future strategies.',
    ],
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com',
  },
  {
    location: 'Precision Printing',
    title: 'Designer, Printer',
    accomplishments: [
      'My experience working in a print shop, though not directly web-related, has influenced my work as a developer.',
      'I handled jobs involving tens of thousands of prints, which required an extremely detail-oriented approach.',
      'I prioritized efficiency and clear communication among team members to avoid costly mistakes that could result in significant time, paper, ink, and money wasted.',
    ],
    startDate: '2007',
    endDate: '2009',
  },
  {
    location: 'The Appalachian Newspaper',
    title: 'Designer, Developer, Photographer',
    accomplishments: [
      'I worked with an intern to establish an online presence for The Appalachian newspaper.',
      'I maintained my role as the lead graphic designer throughout the project.',
    ],
    startDate: '2006',
    endDate: '2008',
    link: 'http://theappalachianonline.com',
  },
];
