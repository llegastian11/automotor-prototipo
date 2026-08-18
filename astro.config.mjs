import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://llegastian11.github.io',
  base: '/automotor-prototipo',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/legal/'),
    }),
  ],
});
