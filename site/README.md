# Portfolio Site

Static portfolio shell implementation for the portfolio direction in this workspace.

## Source Workflow

Edit source content in `source/content/`, then rebuild the generated public files:

```bash
npm run build:content
```

The build script writes homepage content, selected work data, project detail data, and generated Text Shadow subpages into `public/`.

YAML files in `source/content/` are the website source of truth. Markdown files in `source/content/files/` are readable previews for review/export and should mirror YAML structure, not replace it.

## Files

- `public/index.html`
  Single-page site entry.
- `public/content.js`
  Generated homepage and project card content.
- `public/app.js`
  Rendering, navigation state, popup behavior, and subtle reveal logic.
- `public/project.html`
  Shared project detail page shell.
- `public/project.js`
  Project detail rendering, subpage helpers, and interactions.
- `source/content/`
  YAML source content for the generated site files.
- `scripts/build-index-content.mjs`
  Content build script.

## Local Preview

From `portfolio/site`:

```bash
python3 -m http.server 4173 -d public
```

Then open `http://localhost:4173`.

## Responsive Check

Run the local preview first, then audit the homepage and published project pages across mobile, tablet, and desktop widths:

```bash
npm run test:responsive
```

If the preview is running on a different port:

```bash
RESPONSIVE_BASE_URL=http://127.0.0.1:4273 npm run test:responsive
```

## Storybook Mini Design System

Run Storybook from `portfolio/site`:

```bash
npm run storybook
```

Storybook documents the portfolio's lightweight design system without replacing the static site. It covers foundations, buttons, cards, hero patterns, project-detail patterns, and product-oriented writing examples.

To build the static Storybook artifact:

```bash
npm run build-storybook
```

## Launch Notes

- The publish target is `public/`.
- The current static build intentionally uses CDN-hosted Tailwind, Google Fonts, and Mermaid to avoid adding a CSS build pipeline immediately before launch. Revisit this after publish if fully self-hosted assets become a requirement.
- Unavailable or draft projects can stay in YAML with `publishHidden: true`; the homepage renderer hides them until a case study is ready.
