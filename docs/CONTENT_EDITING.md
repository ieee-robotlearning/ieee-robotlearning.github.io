# Content Editing Guide

This site is built so most updates do not require editing HTML or Astro components.

## Fastest Editing Option

For simple updates, edit Markdown files in GitHub:

- People: `src/content/people`
- Announcements: `src/content/announcements`
- Resources: `src/content/resources`

Each file starts with frontmatter between `---` lines. That frontmatter controls the cards and listings on the site.

Example person file:

```md
---
name: "Jane Doe"
role: "Student Co-Chair; PhD"
affiliation: "Example University"
location: "City"
country: "USA"
email: "jane@example.edu"
group: "student"
order: 4
image: "/images/people/jane-doe.jpg"
imagePosition: "50% 35%"
---

Optional notes can go here.
```

After editing in GitHub, open a pull request. When the pull request is merged into `main`, GitHub Pages will rebuild the site.

## Common Updates

### Add a Person

Create a file in `src/content/people`, for example:

```text
src/content/people/jane-doe.md
```

Use one of these groups:

- `chair`
- `junior`
- `student`

The `order` number controls display order within the group.

Profile images are optional. Put image files in `public/images/people`, then add an `image` field that starts with `/images/people/...`. Use `imagePosition` only when the face needs different crop framing.

### Add an Announcement

Create a file in `src/content/announcements`.

Use `date` for the date of the activity, event, or deadline the announcement is about. Use `postDate` only when you want to show when it was posted.

Markdown links work in the body:

```md
Please [register here](https://example.com).
```

### Update the TCRL@ICRA Page

The page layout is:

```text
src/pages/tcrl-icra.astro
```

The detailed program data is:

```text
src/data/icraProgram.ts
```

The original Google Slides link is also referenced from the TCRL@ICRA page and announcements.

## Local Preview

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
