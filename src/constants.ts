export const headline =
  'A seasoned front-end engineer with 15+ years of experience, I began web development at age 13, driven by curiosity. Skilled in graphic design and diverse web and app development, I excel in crafting accessible, user-friendly digital experiences, combining technical expertise with strong design sensibility and deep UI/UX and typography knowledge.';

const socialId = 'derekmisler';
export const contact: Partial<HTMLAnchorElement>[] = [
  { href: `mailto:${socialId}@gmail.com?subject=Hello!` },
  { href: `https://www.linkedin.com/in/${socialId}/` },
  { href: `https://github.com/${socialId}` },
  { href: '/derek-misler-resume.pdf', download: 'true' },
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
      'Derek chose to study graphic design in an arts department. He already had a grasp on front-end web development techniques and continued to study them during this time, but the curriculum path he chose focused on web design while also teaching color theory, typography, and layout design in a group setting. Outside of designing for the web, Derek also had the opportunity to learn Flash/Actionscript game development.',
    startDate: '2005',
    endDate: '2009',
  },
];

export const careers: Experience[] = [
  {
    location: 'Docker',
    title: 'Senior Software Engineer',
    accomplishments: [],
    startDate: '2024',
    endDate: 'Present',
    link: 'https://www.docker.com',
  },
  {
    location: 'Patreon',
    title: 'Senior Software Engineer',
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
    endDate: '2023',
    link: 'https://www.patreon.com',
  },
  {
    location: 'Cadre',
    title: 'Lead Software Engineer',
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
    location: 'Transfix, Inc.',
    title: 'Staff Software Engineer',
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
    location: 'Asheville Convention & Visitors Bureau',
    title: 'Web Manager, Developer, Photographer',
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
    location: 'Houser Shoes, Inc.',
    title: 'Developer, Designer, Photographer',
    description: `During his time at Houser Shoes, Derek was part of a 3 person team that redesigned their e-commerce website. We also created a custom CMS based on Magento, which utilized primarily PHP and MySQL and was tied to their inventory and accounting systems. Photography is a part of Derek's design background, so he was also made lead product photographer. Many hours were spent taking and editing and uploading photos of shoes. Just so many shoes. Derek was also in charge of the email marketing program, including all of the design and implementation of each campaign, as well as the analysis of the results after each campaign.`,
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com',
  },
  {
    location: 'Precision Printing',
    title: 'Designer, Printer',
    description:
      "Though this isn't web-related, Derek's experience working in a print shop can be seen in his work as a developer. When a job consists of tens of thousands of prints, the whole process requires an extremely detail-oriented approach, efficiency, and communication among all members of the team to ensure there weren't making mistakes that would cost the company a lot of time/paper/ink/money to fix.",
    startDate: '2007',
    endDate: '2009',
  },
  {
    location: 'The Appalachian Newspaper',
    title: 'Designer, Developer, Photographer',
    description:
      'Derek worked with an intern to establish an online presence for The Appalachian newspaper, while still maintaining his role as the lead graphic designer.',
    startDate: '2006',
    endDate: '2008',
    link: 'http://theappalachianonline.com',
  },
];
