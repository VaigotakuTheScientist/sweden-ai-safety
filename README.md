# Sweden AI Safety — website

This repository holds the **website and digital implementation** for Sweden AI Safety.

Sweden AI Safety is the broader project: an exploration of a shared national layer for AI
safety communities in Sweden, with local communities in cities such as Stockholm,
Gothenburg, Lund and Malmö. The website is one workstream among several (community
building, outreach, events and programmes, career pipeline, organiser support, shared
infrastructure, measurement). This repository currently contains only the public website.

Public positioning: *a network of people and local communities working to understand and
reduce risks from advanced AI.* Governance — federation, chapters or a single organisation —
is an open question and is deliberately not asserted anywhere on the site.

## What's in here

| Path | Contents |
| --- | --- |
| `src/pages/` | Routes. `index.astro` is the homepage; the rest are short holding pages. |
| `src/components/` | Homepage sections and the shared header/footer. |
| `src/layouts/` | `BaseLayout` (document shell) and `PlaceholderPage`. |
| `src/data/` | Structured content: communities, events, activities, site copy and navigation. |
| `src/types/content.ts` | TypeScript types for that content. |
| `src/lib/swedenMap.ts` | Projection and outline for the national network map. |
| `src/styles/` | Design tokens and global CSS. |
| `public/` | Static assets served as-is. |

Content lives in `src/data/`, not in components. Adding a city, an event or a new way to get
involved should mean editing a data file, not rewriting markup.

## Running it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run check    # astro check (TypeScript + template diagnostics)
```

Stack: [Astro](https://astro.build) with TypeScript and plain CSS. No CMS, no backend, no
component library, no analytics — the site is statically generated and renders fully without
JavaScript.

## Where the strategy lives

Product, strategy and operations documentation lives in the Sweden AI Safety project hub in
Notion, not in this repository:

**[Sweden AI Safety — Notion project hub](https://app.notion.com/p/37675628fc8380f0b83cfbd2a4bf8cf7)**

Notion is the persistent project brain (what and why); this repository is the implementation
brain (how it is built). Please don't duplicate strategy here — link to Notion instead.

## Related

`Malmo-Lund-AI-Safety` is a separate repository holding local/chapter history. It is not
superseded by this one.
