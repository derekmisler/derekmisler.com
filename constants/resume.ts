export const firstName: string = 'Derek'
export const middleName: string = 'Alan'
export const lastName: string = 'Misler'
export const description: string = 'Software Engineer & UI/UX Designer'
export const email: string = 'derekmisler@gmail.com'
export const socialId: string = 'derekmisler'
export const metaDescription: string = `Derek is a software engineer living in Brooklyn, NY with a design background and 15+ years of experience building exceptional, high-quality websites and applications.`
export const biography: string = `I have a diverse education, both traditional and self-driven, of many different web and app development languages for desktop and mobile. I also have a design background, tons of UI/UX experience, and a surprisingly large knowledge of typography (seriously, let's talk about it). I think all developers should study design, and I believe having this well-rounded education makes me a stronger engineer.`

export const profile: {
  firstName: string
  middleName: string
  lastName: string
  fullName: string
  description: string
  title: string
  metaDescription: string
  biography: string
} = {
  firstName,
  middleName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  description,
  title: `${firstName} ${lastName} | ${description}`,
  metaDescription,
  biography
}
export const location: {
  houseNumber: string
  street: string
  zipcode: string
  city: string
  state: string
  country: string
} = {
  houseNumber: '495',
  street: '12th St., 4L',
  zipcode: '11215',
  city: 'Brooklyn',
  state: 'NY',
  country: 'United States'
}
export const contact: {
  email: string
  website: string
  phone: string
  phoneDisplay: string
  twitter: string
  twitterHandle: string
  linkedin: string
  github: string
  flickr: string
  fivehundred: string
  stackOverflow: string
  instagram: string
  pinterest: string
} = {
  email,
  website: `http://www.${socialId}.com`,
  phone: '+18282736943',
  phoneDisplay: '(828) 273-6943',
  twitter: `http://twitter.com/${socialId}`,
  twitterHandle: `@${socialId}`,
  linkedin: `http://www.linkedin.com/in/${socialId}/`,
  github: `https://github.com/${socialId}`,
  flickr: `http://www.flickr.com/photos/${socialId}/`,
  fivehundred: `https://prime.500px.com/${socialId}`,
  stackOverflow: `https://stackoverflow.com/story/${socialId}`,
  instagram: `https://www.instagram.com/${socialId}/`,
  pinterest: `https://www.pinterest.com/${socialId}/`
}

interface EducationTypes {
  title: string
  specification: string
  location: string
  description: string
  startDate: string
  endDate: string
}
export const education: EducationTypes[] = [
  {
    title: 'Appalachian State University',
    specification: 'BFA - Graphic Design',
    location: 'Boone, North Carolina',
    description:
      'I chose to study graphic design in an arts department. I already had a grasp on front-end web development techniques and continued to study them during this time, but the curriculum path I chose focused on web design while also teaching color theory, typography, and layout design in a group setting. Outside of designing for the web, we also had the opportunity to learn Flash/Actionscript game development.',
    startDate: '2005',
    endDate: '2009'
  }
]

interface CareerTypes {
  title: string
  specification: string
  location: string
  level: string
  description?: string
  accomplishments: string[]
  startDate: string
  endDate: string
  link?: string
}
export const careers: CareerTypes[] = [
  {
    title: 'Transfix',
    specification: 'Staff Software Engineer',
    location: 'New York, New York',
    level: 'Full-time',
    description: undefined,
    accomplishments: [
      'First front-end engineer',
      'Refactored web app from Rails, to Aurelia (a terrific JS framework), and finally landing on React/Redux.',
      'Refactored our public site from Wordpress to Jade, a great (but extinct) static site templating language, and then eventually to 11ty.js.',
      'Developed an internal library for creating web (React/Redux) apps, mobile (React Native) apps, and shared modules (NPM).',
      'Brand-new CI/CD pipeline (CircleCI).',
      'Created standards for networking configurations, CSS and JS syntax linting, and automated testing.',
      'Developed our web networking standards, using AWS tools, including all of our deployment configurations, client-side security, and multi-region failover.',
      'Technical lead on the creation of our internal component/design pattern library.',
      'Rebuilt our Android and iOS apps using React Native.',
      'Grew a team of cross-functional engineers and designers to continue the work.'
    ],
    startDate: '2016',
    endDate: 'Present',
    link: 'https://www.transfix.io'
  },
  {
    title: 'Asheville Convention & Visitors Bureau',
    specification: 'Web Manager/Developer',
    location: 'Asheville, North Carolina',
    level: 'Full-time',
    description:
      "As the only developer on staff, my job was to maintain our entire web presence. We started with a .NET-backed site, and one of my first tasks was to create a matching mobile site and responsive blog theme. While I was on board, I oversaw two redesigns, first with Coldfusion and more recently with a responsive site that was built with Node/MongoDB on the back-end and a custom JS templating language, Goatee, on the front-end. I've been in charge of creating all print- and web-related assets for our various marketing campaigns, all of the data analysis of those campaigns, and two long-form, media-rich, highly interactive, award-winning web applications. I also oversaw the email marketing program, which included designing and creating the email templates, capturing and segmenting demographic data, and the analysis of the data we received after each campaign.",
    accomplishments: [],
    startDate: '2011',
    endDate: '2016',
    link: 'http://www.exploreasheville.com'
  },
  {
    title: 'Houser Shoes, Inc.',
    specification: 'Front-End Developer/Designer/Photographer',
    location: 'Fletcher, North Carolina',
    level: 'Full-time',
    description:
      'During my time at Houser Shoes, I was part of a 3 person team that redesigned their e-commerce website. We also created a custom CMS based on Magento, which utilized primarily PHP and MySQL and was tied to their inventory and accounting systems. Photography is a part of my design background, so I was also the lead product photographer. Many hours were spent taking and editing and uploading photos of shoes. Just so many shoes. I was also in charge of the email marketing program, including all of the design and implementation of each campaign, as well as the analysis of the results after each campaign.',
    accomplishments: [],
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com'
  },
  {
    title: 'Freelance',
    specification: 'Developer/Designer',
    location: 'Asheville, North Carolina',
    level: 'Freelance',
    description:
      'A lot of branding at first, but eventually full-time web development. Mostly Shopify, SquareSpace, or Wordpress in the past, but I recently had a chance to work on a custom Go-backed (Buffalo) UI/component library.',
    accomplishments: [],
    startDate: '2009',
    endDate: '2016',
    link: undefined
  },
  {
    title: 'Precision Printing',
    specification: 'Designer/Printer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description:
      "Though this isn't web-related, I still think my experience working in a print shop can be seen in my work as a developer. When a job consists of tens of thousands of prints, the whole process requires an extremely detail-oriented approach, efficiency, and communication among all members of the team to ensure we weren't making mistakes that would cost us a lot of time/paper/ink/money to fix.",
    accomplishments: [],
    startDate: '2007',
    endDate: '2009',
    link: undefined
  },
  {
    title: 'The Appalachian Newspaper',
    specification: 'Lead Designer/Developer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description:
      'I worked with an intern to establish an online presence for The Appalachian newspaper, while still maintaining my role as the lead graphic designer.',
    accomplishments: [],
    startDate: '2006',
    endDate: '2008',
    link: 'http://theappalachianonline.com'
  }
]

interface CourseWorkTypes {
  title: string
  specification: string
}
export const coursework: CourseWorkTypes[] = [
  {
    title: 'Harvard',
    specification: 'CS50x3: Computer Science'
  },
  {
    title: 'Microsoft',
    specification: 'DEV204x: Programming with C#'
  },
  {
    title: 'Codecademy',
    specification: 'Python'
  },
  {
    title: 'Codecademy',
    specification: 'Ruby on Rails: Make a Rails App'
  },
  {
    title: 'Codecademy',
    specification: 'AngularJS'
  },
  {
    title: 'Codecademy',
    specification: 'JavaScript APIs'
  },
  {
    title: 'Codecademy/Code School',
    specification: 'JavaScript'
  },
  {
    title: 'Code School',
    specification: 'Ruby'
  },
  {
    title: 'Code School',
    specification: 'Shaping Up with Angular.js'
  },
  {
    title: 'Code School',
    specification: 'Git'
  },
  {
    title: 'Code School',
    specification: 'jQuery'
  },
  {
    title: 'Udemy',
    specification: 'Beginner Python & Django Programming'
  },
  {
    title: 'Udemy',
    specification: 'Python, The Next Level'
  },
  {
    title: 'Udemy',
    specification: 'Ruby Programming for Beginners'
  },
  {
    title: 'Udemy',
    specification: 'Advanced Ruby: 10 Steps to Mastery'
  }
]

export interface SkillTypes {
  title: string
  level: number
}
export const skills: SkillTypes[] = [
  {
    title: 'HTML5',
    level: 5
  },
  {
    title: 'CSS3',
    level: 5
  },
  {
    title: 'ES6/7',
    level: 5
  },
  {
    title: 'Angular',
    level: 4
  },
  {
    title: 'Aurelia',
    level: 5
  },
  {
    title: 'React/Redux',
    level: 5
  },
  {
    title: 'React-Native',
    level: 5
  },
  {
    title: 'PHP',
    level: 4
  },
  {
    title: 'ColdFusion',
    level: 1
  },
  {
    title: 'Python',
    level: 2
  },
  {
    title: 'Ruby/Rails',
    level: 3
  },
  {
    title: 'Node.js',
    level: 5
  },
  {
    title: 'C/C++',
    level: 1
  },
  {
    title: 'Go',
    level: 3
  },
  {
    title: 'C#/.NET',
    level: 2
  },
  {
    title: 'Java',
    level: 3
  },
  {
    title: 'Git/Github',
    level: 5
  },
  {
    title: 'CI/CD',
    level: 5
  },
  {
    title: 'DevOps',
    level: 4
  },
  {
    title: 'AWS',
    level: 4
  },
  {
    title: 'Firebase',
    level: 4
  },
  {
    title: 'Adobe CS',
    level: 5
  },
  {
    title: 'LESS/Sass',
    level: 5
  }
]

interface ProjectTypes {
  title: string
  description: string
  link: string
  image: string
  tags: string[]
}
export const projects: ProjectTypes[] = [
  {
    title: 'Personal Website',
    description: 'The fourth iteration of my personal website.',
    link: 'https://github.com/derekmisler/derekmisler.com',
    image: 'new-exploreasheville.jpg',
    tags: ['Next.js', 'Typescript', 'styled-components']
  },
  {
    title: 'ExploreAsheville.com',
    description: 'The second redesign of ExploreAsheville.com.',
    link: 'http://www.exploreasheville.com/',
    image: 'new-exploreasheville.jpg',
    tags: [
      'HTML5',
      'CSS3',
      'Goatee (Custom JavaScript templating language)',
      'Responsive Design'
    ]
  },
  {
    title: 'Explorers of the Blue Ridge Parkway',
    description: 'An incredibly large project for just one developer/designer.',
    link: 'http://www.exploreasheville.com/blue-ridge-parkway/',
    image: 'explorers-of-the-blue-ridge-parkway.jpg',
    tags: [
      'HTML5',
      'CSS3',
      'jQuery',
      'Responsive Design',
      'Custom CSS Framework'
    ]
  },
  {
    title: 'The Science Behind Fall Color',
    description: 'An award-winning project.',
    link: 'http://www.exploreasheville.com/science-behind-fall-color/',
    image: 'science-behind-fall-color.jpg',
    tags: ['HTML5', 'CSS3', 'jQuery', 'Responsive Design', 'Bootstrap']
  },
  {
    title: 'HouserShoes.com',
    description:
      'A custom content management system built upon Magento by a 3-person team.',
    link: 'http://www.housershoes.com',
    image: 'houser-shoes.jpg',
    tags: ['PHP', 'Magento', 'Custom CMS', 'Responsive Design']
  },
  {
    title: 'Strunk Home Solutions',
    description: 'Branding project: Logo, business cards, letterhead.',
    link:
      'http://www.derekmisler.com/images/portfolio/strunk-home-solutions-letterhead.jpg',
    image: 'strunk-home-solutions-logo.jpg',
    tags: ['InDesign', 'Illustrator']
  },
  {
    title: 'NC Saves Energy',
    description: 'Logo and posters for area non-profit.',
    link: 'http://www.derekmisler.com/images/portfolio/nc-saves-energy.jpg',
    image: 'nc-saves-logo.jpg',
    tags: ['InDesign', 'Illustrator', 'Photoshop', 'Old Blueprints']
  },
  {
    title: 'Periscope Magazine',
    description:
      'This was a magazine a couple of friends and I put together a few years ago. My job was all of the branding and the layout of the first issue, as well as the web development for the others. The first issue is the only PDF and the code for the others can be viewed on Github.',
    link: 'http://www.derekmisler.com/images/portfolio/The-First-Issue.pdf',
    image: 'periscope.jpg',
    tags: ['InDesign', 'Illustrator', 'Photography', 'PHP', 'HTML5', 'CSS3']
  },
  {
    title: 'Houser Shoes Email Marketing',
    description:
      'I was in charge of the email marketing at Houser Shoes. These are just a few examples of the fun ones.',
    link:
      'http://www.derekmisler.com/images/portfolio/houser-shoes-email-big.jpg',
    image: 'houser-shoes-email.jpg',
    tags: ['HTML', 'CSS', 'Photoshop', 'Illustrator']
  }
]

export const resume = {
  profile,
  location,
  contact,
  education,
  careers,
  coursework,
  skills,
  projects
}
