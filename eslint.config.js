import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  ...eslintPluginAstro.configs['recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
  },
];
