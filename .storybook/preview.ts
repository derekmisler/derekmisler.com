import './preview.css';

import type { AstroRenderer, ProjectAnnotations } from '@storybook-astro/framework';

const preview: ProjectAnnotations<AstroRenderer> = {
  globalTypes: {
    theme: {
      description: 'Site theme',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
  decorators: [
    (Story, { globals, parameters }) => {
      document.body.toggleAttribute('data-hidden', parameters.overlayOpen === true);
      const theme = globals.theme === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      return Story();
    },
  ],
};

export default preview;
