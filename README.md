# Chinedum — Portfolio

Personal portfolio site for **Chinedum U.**, Fullstack Software Engineer.
Live at [trulynedum.dev](https://www.trulynedum.dev).

## Tech stack

- [Astro](https://astro.build/) — static site framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [astro-icon](https://github.com/natemoo-re/astro-icon) — icons
- [Simple Icons](https://simpleicons.org/) CDN — tool/brand logos
- [Simple Analytics](https://www.simpleanalytics.com/) — privacy-first analytics

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # build to ./dist
npm run preview   # preview the production build locally
```

## Project structure

```
public/                Static assets (favicon, project screenshots, robots.txt, sitemap.xml)
src/
  Layouts/Layout.astro Root HTML shell + SEO meta + JSON-LD
  components/          UI components (Hero, About, Tools, Projects, Contact, ...)
  data.ts             Site content: nav, tool categories, projects, socials
  pages/              Routes: index, projects, tools, blog, [slug]
  posts/*.md          Blog posts (frontmatter: title, slug, date, description, draft)
  styles/global.css   Global styles + fonts
```

## Content

- **Projects / tools / socials** — edit `src/data.ts`.
- **Blog posts** — add a Markdown file to `src/posts/`. Set `draft: true` to keep it
  out of the build. Use a hyphenated `slug` and a `date` like `9 January 2026`.
- **Project screenshots** — drop images in `public/projects/` and reference the
  filename via the `img` field in `src/data.ts`.
- **Résumé** — the Hero and Contact buttons link to `/resume.pdf`; place the file at
  `public/resume.pdf` (or update the links in `Hero.astro` / `Contact.astro`).
