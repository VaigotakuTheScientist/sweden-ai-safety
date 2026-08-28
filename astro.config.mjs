// @ts-check
import { defineConfig } from 'astro/config';

// Sweden AI Safety — static site configuration.
// `site` is intentionally left unset until a domain is decided; add it before
// generating canonical URLs, sitemaps or Open Graph absolute paths.
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
