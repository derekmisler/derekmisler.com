import type { Metadata, Viewport } from 'next';
import { themes } from 'styles/colors';

export const firstName = 'Derek';
export const middleName = 'Alan';
export const lastName = 'Misler';
export const description = 'Software Engineer & Occasional Designer';
export const email = 'derekmisler@gmail.com';
export const socialId = 'derekmisler';
export const metaDescription = `I am a front-end engineer and, occasionally, a designer with 15+ years of experience building exceptional, high-quality websites and applications. I have a design background, tons of UI/UX experience, and a surprisingly large knowledge of typography (seriously, let’s talk about it). I think all front-end engineers should study design, and I believe having this well-rounded education makes me a stronger engineer. I just love the front-end so much. All I want to do is to make the web a better, more performant, accessible, and welcoming place.`;
export const biography = `I have a diverse education, both traditional and self-driven, of many different web and app development languages for desktop and mobile. I also have a design background, tons of UI/UX experience, and a surprisingly large knowledge of typography (seriously, let's talk about it). I think all developers should study design, and I believe having this well-rounded education makes me a stronger engineer.`;

export const profile = {
  firstName,
  middleName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  description,
  title: `${firstName} ${lastName} | ${description}`,
  metaDescription,
};

export const location = {
  houseNumber: '495',
  street: '12th St., 4L',
  zipcode: '11215',
  city: 'Brooklyn',
  state: 'NY',
  country: 'United States',
};
export const contact = {
  email,
  website: `https://${socialId}.com`,
  linkedin: `https://www.linkedin.com/in/${socialId}/`,
  github: `https://github.com/${socialId}`,
};

export const metadata: Metadata = {
  description: profile.metaDescription,
  abstract: profile.metaDescription,
  title: profile.title,
  applicationName: profile.fullName,
  metadataBase: new URL(contact.website),
  openGraph: {
    type: 'website',
    url: contact.website,
    title: profile.title,
    description: profile.metaDescription,
    siteName: profile.title,
    images: [
      {
        url: '/images/meta/facebook.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: contact.website,
    images: '/images/meta/twitter-card.jpg',
  },
  verification: { google: 'oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk' },
};
export const viewport: Viewport = {
  themeColor: themes.dark.background,
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
      'I chose to study graphic design in an arts department. I already had a grasp on front-end web development techniques and continued to study them during this time, but the curriculum path I chose focused on web design while also teaching color theory, typography, and layout design in a group setting. Outside of designing for the web, we also had the opportunity to learn Flash/Actionscript game development.',
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
      'At one point, I was top IC interviewer (in terms of number of interviews).',
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
    description:
      'During my time at Houser Shoes, I was part of a 3 person team that redesigned their e-commerce website. We also created a custom CMS based on Magento, which utilized primarily PHP and MySQL and was tied to their inventory and accounting systems. Photography is a part of my design background, so I was also the lead product photographer. Many hours were spent taking and editing and uploading photos of shoes. Just so many shoes. I was also in charge of the email marketing program, including all of the design and implementation of each campaign, as well as the analysis of the results after each campaign.',
    accomplishments: [],
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com',
  },
  {
    title: 'Freelance',
    specification: 'Developer& Designer& Photographer',
    location: 'Asheville, North Carolina',
    level: 'Freelance',
    description:
      'A lot of branding at first, but eventually full-time web development. Mostly Shopify, SquareSpace, or Wordpress, but I recently had a chance to work on a custom Go-backed (Buffalo) UI/component library.',
    accomplishments: [],
    startDate: '2009',
    endDate: 'Present',
    link: undefined,
  },
  {
    title: 'Precision Printing',
    specification: 'Designer& Printer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description:
      "Though this isn't web-related, I still think my experience working in a print shop can be seen in my work as a developer. When a job consists of tens of thousands of prints, the whole process requires an extremely detail-oriented approach, efficiency, and communication among all members of the team to ensure we weren't making mistakes that would cost us a lot of time/paper/ink/money to fix.",
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
      'I worked with an intern to establish an online presence for The Appalachian newspaper, while still maintaining my role as the lead graphic designer.',
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
