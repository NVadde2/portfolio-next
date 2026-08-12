# Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Zustand, statically exported and deployed to GitHub Pages at `nvadde2.github.io/portfolio`.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Before you deploy — two things need your input

**1. Contact form.** It's wired to POST to Formspree, but needs your endpoint:

1. Create a free account at [formspree.io](https://formspree.io) and add a new form.
2. Copy `.env.local.example` to `.env.local`.
3. Paste your form's endpoint into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

Without this, the form UI still works but submissions won't go anywhere (it'll show a friendly "not wired up yet" message instead of failing silently).

**2. Hobby photos.** The "Outside of work" section on the homepage currently shows placeholder tiles instead of real photos — deliberately, since the old site used generic stock images. To swap in your own:

1. Drop photos into `public/images/hobbies/` using the filenames listed in `src/data/hobbies.ts`.
2. In `src/components/hobbies-grid.tsx`, replace the placeholder `<div>` background with a `next/image` pointed at `hobby.image`.

## Content

All copy lives in plain data files — no CMS, no hunting through JSX:

- `src/data/profile.ts` — name, bio, social links, résumé
- `src/data/experience.ts` — work history
- `src/data/projects.ts` — project cards
- `src/data/skills.ts` — skills, grouped
- `src/data/hobbies.ts` — hobby tile labels/filenames
- `content/blog/*.md` — blog posts (markdown with frontmatter: `title`, `tag`, `date`, `description`)

To add a blog post, drop a new `.md` file in `content/blog/` — it's picked up automatically, no registration needed.

## Deploying

```bash
npm run deploy
```

This builds a static export (`next build`, `output: "export"` in `next.config.ts`) and pushes the `out/` folder to the `gh-pages` branch via the `gh-pages` package — same mechanism the previous site used, so no GitHub repo settings need to change.

The site is configured with `basePath: "/portfolio"` since it's hosted as a project page, not a user page. If you ever move it to a custom domain or a root-level page, remove `basePath`/`assetPrefix` from `next.config.ts`.

## Stack notes

- **Fonts** are self-hosted via `@fontsource` packages rather than fetched live from Google Fonts at build time — more reliable for a static export with no server.
- **Dark mode** is a real toggle (not decorative) backed by Zustand + `localStorage`, with an inline script in `layout.tsx` that applies the theme class before hydration to avoid a flash.
- **Blog** posts are markdown files read at build time via `gray-matter` + rendered with `react-markdown`. No database, no API route (static export can't have API routes).
