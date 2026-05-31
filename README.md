# IEEE RAS TC on Robot Learning Website

Static website scaffold for the IEEE RAS Technical Committee on Robot Learning.

## Stack

- Astro
- Tailwind through the Tailwind Vite plugin
- Markdown content collections for announcements, people, and resources
- GitHub Pages deployment through GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Content Editing

- Announcements: `src/content/announcements`
- People: `src/content/people`
- Resources: `src/content/resources`

Most launch work should happen in content files before touching layout code.

Team-facing guides:

- `docs/CONTENT_EDITING.md`
- `docs/PROJECT_STRUCTURE.md`

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist` to GitHub Pages when changes land on `main`.

This repository is configured for the organization site at `https://ieee-robotlearning.github.io/`. In GitHub Pages settings, use GitHub Actions as the source.
