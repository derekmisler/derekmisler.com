import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://derekmisler.com',
  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      // Dual-theme maps to the data-theme toggle on <html>.
      // PostLayout.astro wires the CSS vars shiki emits to the site palette.
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
