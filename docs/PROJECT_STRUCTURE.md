# Project Structure

## Core Files

- `astro.config.mjs` configures Astro, MDX, sitemap generation, and Tailwind.
- `package.json` contains development, build, preview, and check scripts.
- `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.
- `src/styles/global.css` contains shared design tokens, base styles, buttons, cards, and layout helpers.

## Pages

- `src/pages/index.astro` homepage.
- `src/pages/people.astro` roster page generated from Markdown people files.
- `src/pages/announcements.astro` dated announcement listing.
- `src/pages/announcements/[...slug].astro` individual announcement pages.
- `src/pages/tcrl-icra.astro` temporary highlighted ICRA 2026 guide page.
- `src/pages/resources.astro` resource directory generated from Markdown resource files.
- `src/pages/join.astro` contact and participation page.
- `src/data/icraProgram.ts` structured program data used by the TCRL@ICRA page.

## Components

- `src/layouts/BaseLayout.astro` shared HTML shell, metadata, header, and footer.
- `src/components/Header.astro` desktop and mobile navigation.
- `src/components/Footer.astro` site footer.
- `src/components/SectionHeading.astro` reusable section heading block.
- `src/components/PersonCard.astro` roster cards.
- `src/components/ResourceCard.astro` resource cards.

## Content Collections

The schemas live in:

```text
src/content.config.ts
```

Editable content lives in:

- `src/content/announcements`
- `src/content/people`
- `src/content/resources`

Astro validates these files during `npm run build`.

## Static Assets

- `public/images/robot-learning-hero.png` generated hero image.
- `public/images/tcrl-logo.svg` TC logo.
- `public/images/icra` venue and floor-plan images used by the TCRL@ICRA page.
- `public/images/people` locally stored profile images used by people cards.
- `public/favicon.svg` browser icon.

Everything in `public` is served from the site root. For example:

```text
public/images/tcrl-logo.svg
```

is referenced in source content as:

```text
/images/tcrl-logo.svg
```
