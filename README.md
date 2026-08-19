# Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Zustand, statically exported and deployed to GitHub Pages at [`nvadde2.github.io/portfolio-next`](https://nvadde2.github.io/portfolio-next/).

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000/portfolio-next`.

## Deploying

Push to the `rebuild/nextjs` branch and GitHub Actions (`.github/workflows/deploy.yml`) builds the static export and publishes it to GitHub Pages automatically — no manual step. Watch progress under the repo's **Actions** tab. You can also trigger a redeploy without a new commit via **Actions → Deploy to GitHub Pages → Run workflow**.

The site is configured with `basePath: "/portfolio-next"` in `next.config.ts` since it's hosted as a GitHub Pages *project* page, not a user/root page. If you ever move it to a custom domain, a root-level page, or rename the repo, that value (and the `BASE_URL` constants in `src/app/sitemap.ts` / `src/app/robots.ts` / `metadataBase` in `src/app/layout.tsx`) need to change to match — they're not derived automatically.

**One-time repo setting:** GitHub Pages needs to be pointed at "GitHub Actions" as its source (Settings → Pages → Build and deployment → Source). If Pages was never enabled on this repo before, the first workflow run will prompt for this, or you can set it ahead of time.

## Before you deploy — one thing still needs your input

**Contact form.** It's wired to POST to Formspree, but needs your endpoint:

1. Create a free account at [formspree.io](https://formspree.io) and add a new form.
2. Copy `.env.local.example` to `.env.local`.
3. Paste your form's endpoint into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
4. Add the same variable as a repository secret or `env` value in `deploy.yml` if you want it available in the deployed build — right now it's only read locally via `.env.local` (untracked by git). Without it, the form UI still works but submissions won't go anywhere.

## Content

All copy lives in plain data files or markdown — no CMS, no hunting through JSX:

- `src/data/profile.ts` — name, bio, social links, résumé, previous-portfolio link
- `src/data/experience.ts` — work history
- `src/data/projects.ts` — project cards (`codeHref`, `demoHref`, `paperHref`, `deployHref`, `hasCaseStudy` are all optional — only set what applies)
- `src/data/skills.ts` — skills, grouped
- `src/data/hobbies.ts` — hobby tile labels/images/slugs
- `content/blog/*.md` — blog posts (frontmatter: `title`, `tag`, `date`, `description`, optional `image` for a header image)
- `content/hobbies/*.md` — optional hobby write-ups (frontmatter: `title`, `date`, `description`)
- `content/projects/*.md` — optional project case studies (same shape as blog posts)

Drop a new file into any of the three `content/` folders and it's picked up automatically — no registration needed. For hobbies specifically: a hobby only gets a "Read more" link on its homepage tile if a matching `content/hobbies/<slug>.md` file exists (slug must match `src/data/hobbies.ts`); otherwise it's just an image tile. Same idea for projects — a `content/projects/<slug>.md` file plus `hasCaseStudy: true` on that project's entry in `projects.ts` is what turns on its "Case study" link.

**Note on `output: "export"`:** because this is a fully static export, any dynamic route (`/blog/[slug]`, `/projects/[slug]`, `/hobbies/[slug]`) needs at least one matching content file to exist at build time, or the build fails outright (Next.js requires `generateStaticParams` to return at least one entry under static export). Don't delete the last file in a `content/` subfolder without also removing or guarding the route.

## Stack notes

- **`basePath` gotcha:** `next/image`, plain `<a>`/`<img>` tags, and markdown-rendered links/images do **not** automatically get `basePath` prefixed — only `next/link` does that. Anything pointing at a local path needs to go through `withBasePath()` from `src/lib/asset-path.ts` (already wired into `ProjectCard`, `EducationList`, `HobbiesGrid`, `Hero`'s résumé link, and the shared `Markdown` component's `img`/`a` renderers). If you add a new component that references a local asset or internal route via a raw string, wrap it in `withBasePath()` or it'll 404 once deployed.
- **Fonts** are self-hosted via `@fontsource` packages rather than fetched live from Google Fonts at build time — more reliable for a static export with no server.
- **Dark mode** is a real toggle (not decorative) backed by Zustand + `localStorage`, with an inline script in `layout.tsx` that applies the theme class before hydration to avoid a flash.
- **Blog/hobby/project content** are markdown files read at build time via `gray-matter` + rendered with `react-markdown`. No database, no API route (static export can't have API routes).
- **SEO:** `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at build time, pulling routes dynamically from `projects.ts`, `getAllPosts()`, and `getHobbyContentSlugs()` — new content is picked up automatically, nothing to update by hand. Both require `export const dynamic = "force-static"` to work under static export.
- **404 / error pages:** `src/app/not-found.tsx` and `src/app/error.tsx` are styled to match the site instead of using Next's bare defaults. `error.tsx` must stay a client component (`"use client"`) — that's a Next.js requirement for error boundaries.
