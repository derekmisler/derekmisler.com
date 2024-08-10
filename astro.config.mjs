import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://derekmisler.com',
  integrations: [sitemap()],
});
