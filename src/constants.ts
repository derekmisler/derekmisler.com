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
  'I\u2019m a senior front\u2011end engineer and design\u2011focused UI/UX specialist with 15+ years of experience crafting accessible, engaging web experiences. At Docker, I work on AI agents and developer tooling, blending React, TypeScript, and design systems with a strong eye for typography and inclusive design. I lead teams through migrations, AI\u2011powered workflows, and analytics surfaces that feel as good as they perform.';

export const firstName = 'Derek';
export const lastName = 'Misler';
export const fullName = `${firstName} ${lastName}`;

// SEO
export const title = 'Senior Front-End Engineer, AI Agents, UI/UX & Accessibility, React & TypeScript';
export const description =
  'Senior front-end engineer at Docker based in Arlington, VA, specializing in AI agents, React, TypeScript, design systems, and accessibility. I craft AI-powered, engaging developer tools, analytics dashboards, and UI/UX for complex web applications.';

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
  'Senior front\u2011end engineer at Docker working on AI agents and Docker\u2019s developer tools, bringing AI\u2011powered workflows into Docker Desktop.',
  'Lead engineer on analytics dashboards and Insights experiences for enterprise customers, helping teams understand usage, adoption, and ROI.',
  'Led Patreon\u2019s migration to Next.js and a modern front\u2011end platform, cutting LCP by 55% while keeping UX quality, accessibility, and rollout safety front and center.',
  'Served as the first front\u2011end engineer and later Staff\u2011level lead at Transfix, defining web and mobile architecture, shared libraries, and front\u2011end standards.',
  'Can blend high\u2011quality design training, typography, and layout craft with 15+ years of engineering experience to ship inclusive, polished product surfaces quickly and reliably.',
];

export const skills = [
  [
    'Technical',
    [
      'Front\u2011end Architecture',
      'Design Systems',
      'Monorepo Architecture',
      'API Design',
      'Performance Optimization',
      'AI Agent Development',
      'LLM Integration',
      'AI\u2011Powered Developer Tools',
      'Developer Experience',
      'Progressive Web Apps',
    ],
  ],
  [
    'Design & UX',
    [
      'UI/UX Design',
      'Responsive Design',
      'Typography & Layout',
      'Accessibility (WCAG)',
      'SEO',
      'Color Theory',
      'Visual Hierarchy',
      'Interaction Design',
      'Design Tokens',
      'Motion & Animation',
    ],
  ],
] satisfies [string, string[]][];

export const tools = [
  ['Core Stack', ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Web Components', 'Figma']],
  [
    'Extended Stack',
    ['Docker', 'Go', 'Python', 'Remix', 'Astro', 'React Native', 'Redux', 'Jotai', 'Adobe Creative Cloud'],
  ],
  ['AI & LLMs', ['OpenAI API', 'Claude API', 'LangChain', 'MCP', 'CAgent']],
  [
    'Dev Tooling',
    [
      'Vite',
      'Webpack',
      'Jest',
      'Vitest',
      'React Testing Library',
      'Playwright',
      'Cypress',
      'ESLint',
      'Prettier',
      'Storybook',
      'Biome',
      'Chromatic',
      'GitHub Actions',
      'DataDog',
      'Sentry',
    ],
  ],
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
      'Led engineering across Docker\u2019s AI platform and enterprise desktop experience, delivering production-ready systems used by millions of developers and adopted by internal teams.',
      'Rebuilt `dagent`, Docker\u2019s internal Electron-based agent UI platform (CI/CD, monorepo, design system, hot-reloading, test infra).',
      'Shipped secure telemetry pipelines for `dagent` and `cagent`, with event schemas, dashboards, and CI-integrated delivery.',
      'Hardened `cagent-action` for open source: implemented secret leak detection, contributor authorization, and prompt injection safeguards.',
      'Built and demoed GitHub Action + reusable agent runners (e.g., changelog generation, flaky test detection), now used across the engineering org.',
      'Owned Docker\u2019s Agent Catalog: added versioning, metadata validation, use case tagging, and S3/CDN deployment.',
      'Built Docker Desktop\u2019s Bulk Deployment feature for enterprise IT teams; completed cross-platform implementation under deadline.',
      'Integrated Docker Hub catalog into Docker Desktop, enabling users to search and launch images directly in the app.',
      'Redesigned the Policy Assignment form UI with structured metadata, grouped layout, and dynamic field search.',
      'Led frontend architecture for the Insights Dashboard, used by enterprise customers and credited in multiple sales wins.',
      'Championed accessibility, testing, and frontend quality; partnered cross-functionally to ship high-quality features at scale.'
    ],
    link: 'https://www.docker.com',
  },
  {
    location: 'Patreon',
    title: 'Senior Front-End Platform Engineer',
    accomplishments: [
      'Led migration from Flask/React multi\u2011page app to Next.js, achieving a 55% reduction in LCP through incremental rollout with feature flags.',
      'Built observability stack integrating DataDog, Sentry, PagerDuty, and Slack; migrated testing from Enzyme to React Testing Library and Cypress.',
      'Drove TypeScript adoption, linting standards, and front\u2011end best practices; contributed to component library and Redux\u2011to\u2011Jotai migration.',
      'Mentored engineers and created \u201cFront\u2011End 101\u201d onboarding track for new hires.',
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
