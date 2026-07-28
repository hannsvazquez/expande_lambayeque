// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

// astro.config.mjs runs before Astro loads env, so read the PUBLIC_ vars via Vite.
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  site: 'https://expandeinmobiliaria.com',
  integrations: [
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      // Static build: always read fresh content at build time, never the CDN cache.
      useCdn: false,
      apiVersion: '2026-07-27',
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
