# Portfolio Public Assets

Place static assets for the portfolio site here, such as favicons, OG images, and downloadable files.

## Homepage Content Workflow

Edit homepage content in:

```text
source/content/index.yaml
```

Edit Works cards in:

```text
source/content/projects/selected-work.yaml
```

Edit Text Shadow project detail in:

```text
source/content/projects/textshadow-ai.yaml
```

Edit CiHMS project detail in:

```text
source/content/projects/cihms.yaml
```

Edit the Text Shadow Problem subpage in:

```text
source/content/subpages/textshadow-problem.yaml
```

Edit the Text Shadow branch and system integration subpages in:

```text
source/content/subpages/textshadow-human-branch.yaml
source/content/subpages/textshadow-ai-branch.yaml
source/content/subpages/textshadow-system-integration.yaml
```

Then run from `portfolio/site`:

```bash
node scripts/build-index-content.mjs
```

If `npm` is available, the same workflow is exposed as:

```bash
npm run build:content
```

The build script updates:

- `public/index.html`
- `public/content.js`
- `public/projects/textshadow-ai.js`
- `public/projects/cihms.js`
- `public/projects/textshadow/problem.html`
- `public/projects/textshadow/human-branch.html`
- `public/projects/textshadow/ai-branch.html`
- `public/projects/textshadow/system-integration.html`

Works card fields are generated from YAML. Text Shadow project detail and popup sections are also generated from YAML.

Text Shadow subpage HTML is generated from YAML. Do not keep source notes or Markdown drafts under `public/`; place them under `content/` or `source/content/` instead.
