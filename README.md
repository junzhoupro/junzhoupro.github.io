# Jun Zhou

Academic homepage built with [Astro Scholar](https://github.com/shravanngoswamii/astro-scholar).

Live site: [https://junzhoupro.github.io](https://junzhoupro.github.io)

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Customize

- `src/consts.ts` — name, contact, social links
- `src/data/authors.json` — author profiles (clickable names in papers)
- `src/data/publications.bib` — papers, journal/conference tags, images, links
- `src/data/projects.json` — research projects
- `src/content/blog/` — news posts
- `src/styles/icons.css` — author / journal / conference icons and Journal / Conference badges

## Deploy

GitHub Actions builds on `master`/`main` and publishes the `gh-pages` branch. For the user site at `https://junzhoupro.github.io`, push this source to `junzhoupro/junzhoupro.github.io` (or copy the built `dist/` there) and set Pages to the `gh-pages` branch.
