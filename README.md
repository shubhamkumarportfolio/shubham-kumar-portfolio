# Shubham Kumar Portfolio

A premium, editorial portfolio for Shubham Kumar, positioned as a Brand & Marketing Visual Designer working across business, technology, product and cross-channel communication.

## Stack

- React 19
- Vite 8
- JavaScript
- CSS design tokens and responsive layouts
- Lucide React for interface icons

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verification

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    layout/          Shared navigation and future layout components
    ui/              Reusable interface primitives
  data/              Portfolio content kept separate from presentation
  sections/          Homepage sections
  styles/            Tokens, typography, global rules and component styles
  App.jsx             Application shell
  main.jsx            React entry point
public/
  projects/           Optimized project assets grouped by project
```

## Project data

Hero and Selected Work previews are managed in `src/data/projects.js`. Each item includes a stable ID and slug, approved positioning copy, services, optimized imagery, descriptive alt text, intrinsic dimensions, editorial size, future case-study path and availability state. Future case-study pages can use the same data without duplicating content in JSX.

## Design system

Repository-level product and design decisions are documented in:

- `docs/DESIGN_SYSTEM.md`
- `docs/PORTFOLIO_STRATEGY.md`
- `docs/CONTENT_RULES.md`

The permanent system supports light and dark modes through shared tokens, with light as the default and cobalt as the brand signal in both. The selected preference is stored under `shubham-portfolio-theme`; Section 02 — Selected Work remains an intentionally scoped dark region pending its own revision.

Geist Sans and Geist Mono are self-hosted from `public/fonts/`. Both are licensed under the SIL Open Font License included at `public/fonts/OFL.txt`.

## Current scope

The homepage currently includes the responsive light-first Section 01 Hero and Section 02 — Selected Work. Selected Work presents Treewalker Technologies, Galla, RFID / Automation, AIRSON Robotics and Campaign Systems in an asymmetric editorial layout. Case-study routes are stored in project data but remain unavailable until complete pages are approved and built.

## Asset guidelines

Add only public-safe, optimized exports to `public/projects/<project-name>/`. Prefer WebP or AVIF, use meaningful filenames and dimensions, and do not add source design files or confidential employer material.
