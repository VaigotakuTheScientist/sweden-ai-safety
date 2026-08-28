/**
 * Prefixes an internal, root-relative link with the site's base path.
 *
 * The site is served from a sub-path on GitHub Pages (`/sweden-ai-safety`),
 * and Astro only rewrites the asset URLs it generates itself — hand-written
 * hrefs are left alone. Route this helper over every internal link so the data
 * files can keep clean paths such as `/learn`.
 *
 * In-page anchors (`#events`) and absolute URLs are returned unchanged.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path}` || '/';
}
