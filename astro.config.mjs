import sitemap from '@astrojs/sitemap';
import vercelStatic from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  site: 'https://derekmisler.com',
  integrations: [sitemap()],
});
