// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Sweden AI Safety — static site configuration.
 *
 * The site is published to GitHub Pages as a *project* site, so it is served
 * from a sub-path rather than the domain root. `base` therefore has to match
 * the repository name, and internal links are prefixed with `withBase()` from
 * `src/lib/paths.ts`.
 *
 * If a custom domain is set up later, change `site` to that domain and set
 * `base` back to '/' — `withBase()` will follow automatically.
 */
export default defineConfig({
  site: 'https://vaigotakuthescientist.github.io',
  base: '/sweden-ai-safety',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
