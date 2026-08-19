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

GitHub Actions builds on `master`/`main` and publishes with the official Pages action.

The live URL [https://junzhoupro.github.io](https://junzhoupro.github.io) comes from the user-site repo **`junzhoupro/junzhoupro.github.io`**. A repo named `junzhou.github.io` can only be served at `https://junzhoupro.github.io/junzhou.github.io/`.

In **Settings → Pages**, set Source to **GitHub Actions** (not Jekyll).
