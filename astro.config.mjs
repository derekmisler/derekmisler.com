import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  site: 'https://derekmisler.com',
  vite: {
    ssr: {
      noExternal: ['@'],
    },
  },
});
