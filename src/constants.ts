// Navigation
export const navItems = {
  home: { slug: 'home', label: 'Home' },
  about: { slug: 'about', label: 'About me' },
  experience: { slug: 'experience', label: 'Experience' },
  coreSkills: { slug: 'coreSkills', label: 'Core Skills' },
  workingWith: { slug: 'workingWith', label: 'Working With' },
  contact: { slug: 'contact', label: 'Other Details' },
} satisfies Record<string, { slug: string; label: string }>;

export const subHeadline =
  'I\u2019m a senior front-end engineer who builds high\u2011leverage product systems: design\u2011system\u2011driven UIs, analytics experiences, and AI\u2011powered developer tooling. At Docker, I work on agent experiences and Desktop workflows, with a focus on performance, accessibility, and production\u2011grade delivery.';

export const firstName = 'Derek';
export const lastName = 'Misler';
export const fullName = `${firstName} ${lastName}`;

// SEO
export const title = 'Senior Front-End Engineer | AI Developer Tools | UI/UX & Accessibility';
export const description =
  'Senior front-end engineer at Docker based in Arlington, VA. I build AI\u2011powered developer tooling, enterprise desktop workflows, and analytics experiences using React, TypeScript, design systems, and accessibility\u2011first practices.';

// Social
export const socialId = 'derekmisler';
export const contact = [
  { href: `mailto:hello@${socialId}.com?subject=Hello!`, label: 'Email', altLabel: 'Send me an email' },
  { href: `https://www.linkedin.com/in/${socialId}/`, label: 'LinkedIn', altLabel: 'Let\u2019s connect' },
  { href: `https://github.com/${socialId}`, label: 'GitHub', altLabel: 'Judge my code' },
  {
    href: '/derek-misler-resume.pdf',
    download: 'Derek-Misler-Resume.pdf',
    label: 'Resume',
    altLabel: 'Download my resume',
  },
] satisfies { href: string; label: string; altLabel: string; download?: string }[];

/**
 * High-level "about" bullets to feature near the top of the page.
 */
export const highlights = [
  'Senior engineer at Docker building AI agent experiences and developer tooling that ship inside Docker Desktop.',
  'Led Patreon\u2019s migration to Next.js and a modern front\u2011end platform, reducing LCP by 55% while preserving rollout safety and accessibility.',
  'First front\u2011end engineer and later Staff\u2011level lead at Transfix, defining web + mobile architecture, shared libraries, and engineering standards.',
  'Blend strong design craft (typography, layout, interaction) with 15+ years of engineering to ship inclusive, polished product surfaces reliably.',
];

export const skills = [
  [
    'Architecture & Platform',
    [
      'Front-End Architecture',
      'Design Systems',
      'Monorepo Architecture',
      'Platform DX',
      'API Design',
      'Performance Optimization',
      'Scalable UI Patterns',
    ],
  ],
  [
    'AI & Agent Systems',
    [
      'AI Agent Development',
      'LLM Integration',
      'Agent Orchestration',
      'Prompt Engineering',
      'Agent Security & Guardrails',
      'AI-Powered Developer Tools',
    ],
  ],
  [
    'Product & UX',
    [
      'UI/UX Design',
      'Responsive Design',
      'Typography & Layout',
      'Accessibility (WCAG)',
      'Interaction Design',
      'Design Tokens',
      'Visual Hierarchy',
    ],
  ],
  [
    'Quality & Delivery',
    [
      'Developer Experience',
      'Testing Strategy',
      'CI/CD Workflows',
      'Observability-Driven Iteration',
      'Production Readiness',
    ],
  ],
] satisfies [string, string[]][];

export const tools = [
  ['Core Stack', ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Electron', 'Node.js', 'Web Components']],
  [
    'Platform & Infra',
    ['Docker', 'Nx', 'Monorepos', 'CI/CD', 'GitHub Actions', 'CloudFront', 'S3', 'Telemetry Pipelines'],
  ],
  [
    'AI & Agents',
    [
      'OpenAI API',
      'Claude API',
      'Tool Calling',
      'Agent Workflows',
      'LLM Orchestration',
      'Prompt Engineering',
      'Agent Security',
    ],
  ],
  [
    'Dev Tooling & Quality',
    [
      'Vite',
      'Webpack',
      'Jest',
      'Vitest',
      'React Testing Library',
      'Playwright',
      'Cypress',
      'Storybook',
      'Chromatic',
      'Biome',
      'ESLint',
      'Prettier',
    ],
  ],
  ['Observability & Ops', ['Sigma', 'DataDog', 'Sentry', 'Structured Logging', 'Metrics & Dashboards']],
  ['Languages & Ecosystem', ['Go', 'Python', 'Remix', 'Astro', 'React Native', 'Redux Toolkit', 'Jotai']],
  ['Design', ['Figma', 'Tailwind CSS', 'Adobe Creative Cloud', 'Base Web', 'Shadcn/UI']],
] satisfies [string, string[]][];

interface Experience {
  location: string;
  title: string;
  description?: string;
  accomplishments: string[];
  link?: string;
}

export const education = {
  location: 'Appalachian State University',
  title: 'BFA, Graphic Design',
  accomplishments: [
    'Studied graphic design with a focus on web, typography, and layout. Built early front\u2011end skills through web design courses and interactive media projects, including Flash/ActionScript game development.',
  ],
} satisfies Experience;

export const currentCareers = [
  {
    location: 'Docker',
    title: 'Senior Software Engineer',
    accomplishments: [
      'Led engineering across Docker\u2019s AI platform and Docker Desktop enterprise admin experiences; shipped production-grade systems adopted by internal teams and enterprise customers.',
      'Rebuilt a shared Electron-based UI platform (monorepo, CI/CD, design system integration, hot reload, test infrastructure) to accelerate iteration on agent tooling.',
      'Delivered secure telemetry pipelines (event schema design, CI validation, dashboards) to improve observability and product decision-making.',
      'Strengthened open-source GitHub automation with secret leak prevention, contributor authorization, and prompt-injection mitigations.',
      'Took over ownership, unblocked, and shipped Bulk Deployment for Docker Desktop, enabling enterprise IT teams to configure and distribute Docker at scale across platforms.',
      'Integrated Docker Hub catalog search/launch into Docker Desktop to reduce workflow friction and improve discoverability.',
      'Led front\u2011end architecture for an enterprise Insights dashboard, referenced in customer adoption and sales enablement outcomes.',
      'Raised the quality bar via accessibility, testing, and front-end reviews; partnered with Design, Product, Security, and Data to deliver cross-surface features.',
    ],
    link: 'https://www.docker.com',
  },
  {
    location: 'Patreon',
    title: 'Senior Front-End Platform Engineer',
    accomplishments: [
      'Senior engineer on the Front\u2011End Platform team driving a large\u2011scale migration from a Flask/React multi\u2011page app and in-house SSR to Next.js.',
      'Led the front-end workstream and partnered with backend platform + infrastructure teams, delivering an immediate 55% reduction in LCP (primary KR metric).',
      'Designed an incremental migration pattern to move features safely without blocking product delivery, enabling staged rollout and parallel work.',
      'Built rollout and reliability guardrails: percentage-based feature flags, alerting/triage workflows, and dashboards to monitor regressions.',
      'Drove quality and maintainability upgrades: TypeScript adoption, linting standards, and front\u2011end documentation practices.',
      'Modernized testing from minimal coverage/Enzyme to React Testing Library + Cypress, including running smoke/e2e in dev and on PRs (not only at deploy time).',
      'Mentored junior engineers and interns; created and led \u201cFront\u2011End 101\u201d onboarding for new engineers and served as a high\u2011volume interviewer.',
      'Improved state and form architecture by migrating from Redux to Jotai and building accessible form/validation primitives integrated with the component library (React Hook Form).',
    ],
    link: 'https://www.patreon.com',
  },
  {
    location: 'Cadre',
    title: 'Lead Engineer',
    accomplishments: [
      'Unified decoupled SPA and third-party marketing site into cohesive Django/React app; migrated front\u2011end to monorepo.',
      'Built custom server-rendering with Webpack, React, and Node.js for marketing site.',
      'Led internal design system built on Base Web component library (open-source contributor).',
      'Mentored full\u2011stack engineers using Agile and Shape Up methodologies.',
    ],
    link: 'https://cadre.com',
  },
  {
    location: 'Transfix',
    title: 'Staff Front-End/Mobile Engineer',
    accomplishments: [
      'First front\u2011end engineer; established web and mobile architecture, rebuilding Android/iOS apps in React Native.',
      'Evolved web stack from Rails → Aurelia → React/Redux; developed internal library for web, mobile, and shared NPM modules.',
      'Implemented CI/CD with CircleCI, defined linting/testing standards, and led creation of internal component library.',
      'Rebuilt public site from WordPress to Jade templates, later migrating to 11ty.js.',
    ],
    link: 'https://transfix.io',
  },
] satisfies Experience[];

export const pastCareers = [
  {
    location: 'Asheville Convention & Visitors Bureau',
    title: 'Web Manager, Developer, Photographer',
    accomplishments: [
      'Primary developer for web presence; built first mobile site and responsive blog theme in .NET environment.',
      'Redesigned marketing site twice, evolving from ColdFusion to Node/MongoDB with custom JS templating.',
      'Designed and built two award\u2011winning interactive web experiences using Node and AngularJS.',
    ],
    link: 'http://www.exploreasheville.com',
  },
  {
    location: 'Houser Shoes, Inc.',
    title: 'Developer, Designer, Photographer',
    accomplishments: [
      'Redesigned e\u2011commerce site; built custom CMS on Magento (PHP/MySQL) integrated with inventory systems.',
      'Lead product photographer and email marketing designer with performance analytics.',
    ],
    link: 'http://www.housershoes.com',
  },
  {
    location: 'Precision Printing',
    title: 'Designer, Printer',
    accomplishments: ['Managed large print runs requiring attention to detail and process discipline.'],
  },
  {
    location: 'The Appalachian Newspaper',
    title: 'Designer, Developer, Photographer',
    accomplishments: [
      'Co\u2011founded online presence while serving as lead graphic designer in a fast\u2011moving team.',
    ],
    link: 'http://theappalachianonline.com',
  },
] satisfies Experience[];
