# Engineering guardrails — Sweden AI Safety

Persistent instructions for AI coding agents working in this repository. They apply to every
task unless the task prompt explicitly overrides them.

## Context and authority

1. **The task prompt is authoritative for implementation scope.** Build what was asked, not
   what could plausibly come next.
2. **Read the [Sweden AI Safety Notion hub](https://app.notion.com/p/37675628fc8380f0b83cfbd2a4bf8cf7)
   when project context is needed** — purpose, current organisational hypothesis,
   workstreams, open questions. Treat it as read-only unless a task explicitly says
   otherwise.
3. **Unresolved product questions must stay unresolved.** Governance model (federation,
   chapters or a single organisation), which audiences the brand optimises for, what is
   national versus local — these are open. Do not settle them in code, copy or data, and do
   not let an implementation detail imply an answer.

## Claims

4. **Do not invent organisational claims.** Nothing in this repository may assert legal
   structure, membership numbers, impact, funding, partnerships, formal control over local
   groups, chapter status that has not been agreed, or endorsement by universities or
   institutions.
5. **Do not invent facts about local communities** — organisers, member counts, activity
   levels, URLs, contact addresses or event listings. If it has not been confirmed, render an
   honest empty state instead. Sample data must be clearly marked as such in code and must
   never reach the public site.

## Actions requiring explicit authorisation

6. Do not deploy, publish or enable hosting (including GitHub Pages).
7. Do not merge pull requests.
8. Do not spend money, buy domains or services, or make any external commitment.
9. Do not contact people or organisations, send email, submit forms or grant applications,
   create social media accounts, or publish announcements.
10. Do not modify the separate `Malmo-Lund-AI-Safety` repository.

## Separation of concerns

11. **Notion = strategy, product and operations knowledge.** **GitHub = code and technical
    implementation.** Keep strategy documents out of this repository and keep implementation
    detail out of Notion; link between them instead of copying.

## How to work

12. **Prefer small, reviewable iterations.** Feature branches, focused diffs, draft pull
    requests. Do not implement directly on `main` or on any deployment branch.
13. **Keep content in `src/data/` and types in `src/types/`**, separate from components, so
    the site stays straightforward to update programmatically later.
14. **Keep the stack deliberately simple:** Astro, TypeScript, plain CSS. No CMS, backend,
    authentication, analytics, external map SDK or large component library without an
    explicit decision.
15. **Verify before finishing:** `npm run build` and `npm run check` must pass, and the pages
    you changed should be inspected at desktop and mobile widths.
16. If a task is ambiguous, state the assumption you made in your report rather than
    quietly widening scope.
