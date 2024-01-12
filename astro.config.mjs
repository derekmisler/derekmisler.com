import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://derekmisler.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
  ],
});
