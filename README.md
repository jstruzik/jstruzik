# jacobstruzik.com

Personal site. Built with [Astro](https://astro.build), fully static, no client JavaScript.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Output goes to `dist/`. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Writing

The writing section is currently disabled: draft posts live in `src/content/writing/` but no pages render them. To re-enable it, restore the `src/pages/writing/` pages (see git history) and add a Writing link to the nav in `src/layouts/Layout.astro`.

Posts are `.md` or `.mdx` files in `src/content/writing/` with frontmatter:

```markdown
---
title: Post Title
description: One-line summary.
date: 2026-07-27
---

Body text.
```

The post appears at `/writing/<filename>/` on the next build.
