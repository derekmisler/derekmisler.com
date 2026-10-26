import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook-astro/framework';

import { astroStyles } from './astroStyles';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.ts'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      sanitization: { enabled: false },
    },
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const alias = { find: /^@\//, replacement: fileURLToPath(new URL('../src/', import.meta.url)) };
    const existing = config.resolve?.alias ?? [];
    const aliases = Array.isArray(existing)
      ? existing
      : Object.entries(existing).map(([find, replacement]) => ({ find, replacement }));
    config.resolve = { ...config.resolve, alias: [alias, ...aliases] };
    config.plugins = [...(config.plugins ?? []), astroStyles()];
    return config;
  },
};

export default config;
