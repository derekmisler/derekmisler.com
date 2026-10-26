import Section from '@/components/Section.astro';

export default {
  title: 'Components/Section',
  component: Section,
  args: {
    id: 'about',
    label: 'About me',
  },
};

export const Prose = {
  args: {
    slots: {
      default: `
        <h4>Background</h4>
        <p class="not-last:mb-md">Web development started at 13 as curiosity, tinkering until things worked.</p>
        <h4>Education</h4>
        <p>BFA, Graphic Design</p>
      `,
    },
  },
};

export const List = {
  args: {
    id: 'highlights',
    label: 'Highlights',
    slots: {
      default: `
        <ul>
          <li>Senior engineer at Docker building AI agent experiences and developer tooling.</li>
          <li>Led Patreon's migration to Next.js, reducing LCP by 55%.</li>
          <li>First front-end engineer and later Staff-level lead at Transfix.</li>
        </ul>
      `,
    },
  },
};
