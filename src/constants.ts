const firstName = 'Derek';
const lastName = 'Misler';
export const fullName = `${firstName} ${lastName}`;
export const headline = 'Software Engineer & Occasional Designer';
export const subheadline =
  'Derek is a front-end engineer and design enthusiast, dedicated to creating accessible and engaging web experiences with a keen eye for UI/UX and typography. This website showcases over 15 years of creating accessible, high-quality web applications and designs that blend functionality with aesthetics.';
export const title = `${firstName} ${lastName} | ${headline}`;
const socialId = 'derekmisler';
export const metaDescription =
  'Discover the world of Derek Misler, a seasoned front-end engineer with a flair for design. Dive into a portfolio showcasing over 15 years of creating accessible, high-quality web applications and designs that blend functionality with aesthetics.';

export const contact = {
  email: `${socialId}@gmail.com`,
  website: `https://${socialId}.com`,
  linkedin: `https://www.linkedin.com/in/${socialId}/`,
  github: `https://github.com/${socialId}`,
};

export const metadata = {
  description: metaDescription,
  abstract: metaDescription,
  title: title,
  applicationName: title,
  metadataBase: new URL(contact.website),
  openGraph: {
    type: 'website',
    url: contact.website,
    title: title,
    description: metaDescription,
    siteName: title,
    images: [
      {
        url: '/square.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: contact.website,
    images: '/horizontal.jpg',
  },
  verification: { google: 'oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk' },
};

export interface Experience {
  title: string;
  specification: string;
  location: string;
  level?: string;
  description?: string;
  accomplishments: string[];
  startDate: string;
  endDate: string;
  link?: string;
}
export const education: Experience[] = [
  {
    title: 'Appalachian State University',
    specification: 'Graphic Design',
    level: 'BFA',
    location: 'Boone, North Carolina',
    description:
      'Derek chose to study graphic design in an arts department. He already had a grasp on front-end web development techniques and continued to study them during this time, but the curriculum path he chose focused on web design while also teaching color theory, typography, and layout design in a group setting. Outside of designing for the web, Derek also had the opportunity to learn Flash/Actionscript game development.',
    accomplishments: [],
    startDate: '2005',
    endDate: '2009',
  },
];

export const careers: Experience[] = [
  {
    title: 'Patreon',
    specification: 'Senior Software Engineer',
    location: 'New York, New York',
    level: 'Full-time/Hybrid',
    accomplishments: [
      'Senior engineer on the front-end platform team with a focus on our large-scale front-end architecture migration from a Flask/React multi-page app and an in-house server-rendering service to Next.js.',
      'Led the front-end development of the migration, and partnered with the BE platform and infra teams, resulting in an immediate 55% decrease in LCP, the primary metric used for the project’s KRs.',
      'Developed a pattern that enabled our team to migrate features incrementally without blocking others.',
      'This included feature flag support for percentage-based rollouts, error alerting with Pager Duty/Sentry/Slack, and DataDog dashboards for monitoring.',
      'The migration also included setting up scheduled QA sessions with all product teams, to facilitate knowledge sharing and developing all comms, including regular status updates for both upper management the engineering teams.',
      'Spearheaded best practices in front-end development, like Typescript adoption, linting, and documentation.',
      'Integral in the migration from Enzyme and very few automated tests, to React Testing Library and Cypress for a full suite of integration, e2e, and smoke tests.',
      'Collaborated with cross-functional teams to streamline the development process, which included the ability to run those e2e and smoke tests in development and on PRs, instead of as the last step in the deploy.',
      'Mentored junior engineers and interns, contributing to their professional growth and team cohesion.',
      'Designed and led “Front-End 101” on-boarding sessions for all new engineers.',
      'Played a key role in adopting industry-leading front-end technologies for better developer productivity and maintainability.',
      'Essential in the migration away from Redux to Jotai.',
      'Also, the developer of accessible form elements and validation, integrated with our component library (including React Hook Form to manage form state).',
    ],
    startDate: '2021',
    endDate: 'Present',
    link: 'https://www.patreon.com',
  },
  {
    title: 'Cadre',
    specification: 'Lead Software Engineer',
    location: 'New York, New York',
    level: 'Full-time/Remote',
    accomplishments: [
      'Refactored and combined a decoupled SPA and third-party marketing site into a Django/React web app.',
      'Migrated fragmented codebases to a monorepo.',
      'Developed a custom server rendering configuration for our marketing site with Webpack, React, and new Node service.',
      'Technical lead and developer of our internal component/design pattern library.',
      'Contributed to the open-source component library that inspired our own component library (Base Web).',
      'Lead/mentored teams of full-stack engineers across multiple projects, using both Agile and Shape Up methodologies.',
    ],
    startDate: '2020',
    endDate: '2021',
    link: 'https://cadre.com',
  },
  {
    title: 'Transfix, Inc.',
    specification: 'Staff Software Engineer',
    location: 'New York, New York',
    level: 'Full-time/Hybrid',
    accomplishments: [
      'First front-end engineer',
      'Rebuilt our Android and iOS apps using React Native.',
      'Refactored web app from Rails, to Aurelia (a terrific JS framework), and finally landing on React/Redux.',
      'Refactored our public site from Wordpress to Jade, a great (but extinct) static site templating language, and then eventually to 11ty.js.',
      'Developed an internal library for creating web (React/Redux) apps, mobile (React Native) apps, and shared modules (NPM).',
      'Brand-new CI/CD pipeline (CircleCI).',
      'Created standards for networking configurations, CSS and JS syntax linting, and automated testing.',
      'Developed our web networking standards, using AWS tools, including all of our deployment configurations, client-side security, and multi-region failover.',
      'Technical lead on the creation of our internal component/design pattern library.',
      'Grew a team of cross-functional engineers and designers to continue the front-end and mobile work.',
    ],
    startDate: '2016',
    endDate: '2020',
    link: 'https://transfix.io',
  },
  {
    title: 'Asheville Convention & Visitors Bureau',
    specification: 'Web Manager& Developer& Photographer',
    location: 'Asheville, North Carolina',
    level: 'Full-time',
    accomplishments: [
      'Lead and primary developer of our entire web presence.',
      'Created our first mobile site and responsive blog theme within a .NET-backed codebase.',
      'Redesigned and refactored our marketing site twice, first with Coldfusion and later with Node/MongoDB on the back-end and a custom JS templating language, Goatee, on the front-end.',
      'Oversaw design aspects of all print- and web-related assets for our various marketing campaigns.',
      'Primary data analyst for all marketing campaigns, including capturing and segmenting demographic data to drive future campaigns.',
      'Lead developer and designer of two long-form, media-rich, highly interactive, award-winning web applications with our Node back-end and AngularJS front-end.',
    ],
    startDate: '2011',
    endDate: '2016',
    link: 'http://www.exploreasheville.com',
  },
  {
    title: 'Houser Shoes, Inc.',
    specification: 'Developer& Designer& Photographer',
    location: 'Fletcher, North Carolina',
    level: 'Full-time',
    description: `During his time at Houser Shoes, Derek was part of a 3 person team that redesigned their e-commerce website. We also created a custom CMS based on Magento, which utilized primarily PHP and MySQL and was tied to their inventory and accounting systems. Photography is a part of Derek's design background, so he was also made lead product photographer. Many hours were spent taking and editing and uploading photos of shoes. Just so many shoes. Derek was also in charge of the email marketing program, including all of the design and implementation of each campaign, as well as the analysis of the results after each campaign.`,
    accomplishments: [],
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com',
  },
  {
    title: 'Precision Printing',
    specification: 'Designer& Printer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description:
      "Though this isn't web-related, Derek's experience working in a print shop can be seen in his work as a developer. When a job consists of tens of thousands of prints, the whole process requires an extremely detail-oriented approach, efficiency, and communication among all members of the team to ensure there weren't making mistakes that would cost the company a lot of time/paper/ink/money to fix.",
    accomplishments: [],
    startDate: '2007',
    endDate: '2009',
    link: undefined,
  },
  {
    title: 'The Appalachian Newspaper',
    specification: 'Designer& Developer& Photographer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description:
      'Derek worked with an intern to establish an online presence for The Appalachian newspaper, while still maintaining his role as the lead graphic designer.',
    accomplishments: [],
    startDate: '2006',
    endDate: '2008',
    link: 'http://theappalachianonline.com',
  },
];

export interface SkillTypes {
  title: string;
  level: number;
}
export const skills: SkillTypes[] = [
  {
    title: 'TypeScript',
    level: 5,
  },
  {
    title: 'A11y',
    level: 5,
  },
  {
    title: 'I18n',
    level: 4,
  },
  {
    title: 'Next.js',
    level: 5,
  },
  {
    title: 'CSS',
    level: 5,
  },
  {
    title: 'Angular',
    level: 4,
  },
  {
    title: 'React',
    level: 5,
  },
  {
    title: 'React Native',
    level: 5,
  },
  {
    title: 'PHP',
    level: 3,
  },
  {
    title: 'Flask/Python',
    level: 4,
  },
  {
    title: 'Django/Python',
    level: 3,
  },
  {
    title: 'Ruby/Rails',
    level: 3,
  },
  {
    title: 'Node.js',
    level: 5,
  },
  {
    title: 'CSS-in-JS',
    level: 5,
  },
  {
    title: 'DevOps',
    level: 4,
  },
  {
    title: 'Jest',
    level: 5,
  },
  {
    title: 'RTL',
    level: 5,
  },
  {
    title: 'Cypress',
    level: 5,
  },
];
