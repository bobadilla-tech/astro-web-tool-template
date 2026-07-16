# Astro Web Tool Template

Bobadilla Tech's starting point for a new frontend-only Astro web tool. Built
with Astro 5, designed to deploy to GitHub Pages, styled with the Bobadilla
Tech gold/black design system.

## Tech Stack & Architecture

- **Astro** - Static site generator (chosen for SEO and performance)
- **TypeScript** - Strict mode enabled
- **pnpm** - Package manager (NOT npm or yarn)
- **Biome** - Linting and formatting (NOT ESLint or Prettier)
- **GitHub Pages** - Deployment platform

## First things to edit when starting a new project from this template

1. `src/config/site.ts` - `name` and `url` are placeholders, edit them first
2. `src/lib/case-converter.ts`, `src/components/tool/*`, `src/scripts/tool-interactive.ts` -
   the example "text case converter" tool; replace with your real tool's logic and UI
3. `src/pages/index.astro` - wires the example tool into the homepage
4. `public/CNAME` - not committed by default; add it if you're using a custom domain
5. `src/config/site.ts` - `adsenseClientId` / `gaId` - still placeholders; ad and
   analytics components no-op until you set real IDs

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── og-image.png           # 1200x630 PNG for social media
│   │   ├── og-image.svg           # Original SVG (keep for reference)
│   │   └── bobadilla-tech-logo.png
│   ├── favicon.svg
│   └── robots.txt                 # Relative sitemap path, no hardcoded domain
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseHead.astro     # SEO meta tags, OG tags, JSON-LD
│   │   │   ├── Header.astro       # Navigation, dark mode toggle
│   │   │   ├── Footer.astro       # Bobadilla Tech branding
│   │   │   ├── AdContainer.astro  # Google AdSense wrapper (no-op until configured)
│   │   │   └── AdMobileAnchor.astro
│   │   ├── tool/
│   │   │   ├── ToolControls.astro # Example tool's input controls
│   │   │   └── ToolOutput.astro   # Example tool's output display
│   │   ├── CodeBlock.astro
│   │   └── TerminalCommand.astro
│   ├── config/
│   │   └── site.ts                # Brand/domain/ad IDs — edit this first
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── case-converter.ts      # Example tool's core logic — replace this
│   ├── pages/
│   │   ├── index.astro            # Homepage + example tool
│   │   ├── privacy.astro          # Legal boilerplate
│   │   ├── terms.astro            # Legal boilerplate
│   │   └── contact.astro          # Contact info
│   ├── scripts/
│   │   └── tool-interactive.ts    # Example tool's client-side logic
│   └── styles/
│       └── global.css             # CSS variables, theme
├── astro.config.mjs                # Astro config + sitemap
├── package.json
└── tsconfig.json
```

## Important Development Notes

### Package Manager

**ALWAYS use pnpm**, never npm or yarn:

```bash
pnpm install
pnpm dev
pnpm build
```

### Linting/Formatting

**Biome**, not ESLint/Prettier:

```bash
pnpm run check        # biome check . (lint + format + import order)
pnpm run typecheck     # astro check
```

### Ads & Analytics

`AdContainer`, `AdMobileAnchor`, and the GA4 script in `BaseHead.astro` are all
gated by `isAdSenseConfigured` / `isGaConfigured` in `src/config/site.ts`. With
the placeholder IDs left untouched, none of them make network requests — this
is intentional so a fresh clone doesn't ship broken ad/analytics calls.

### GitHub Pages Deployment

- **Workflow**: `.github/workflows/deploy.yml` - builds with `pnpm build`,
  deploys `dist` via the GitHub Pages deploy action on every push to `main`
- **Custom domain**: create `public/CNAME` with your domain if you're using one
  (not committed by default in this template)
- **Node version**: pinned via `.nvmrc`, used by the workflow's `setup-node` step
- Separate `ci.yml` runs lint/typecheck/build on every push and PR

## Design System

Styling matches [bobadilla.tech](https://bobadilla.tech) branding: gold
accent on near-black in dark mode, a warm gold-tinted palette in light
mode. Fonts are Sora (headings) and Space Grotesk (body), loaded via
Google Fonts in `BaseHead.astro`.

**CSS Variables** (global.css):

```css
/* Light Mode */
--accent: #c9a916 (gold-dark) --bg-primary: #fffdf7 --bg-secondary: #f7f2e4
  --text-primary: #1a1512 --text-secondary: #5c5650 /* Dark Mode */
  --accent: #e6be1a (gold) --accent-hover: #ffeea8 (gold-light)
  --bg-primary: #0b0505 --bg-secondary: #1a1210
  --text-primary: #dbdbd7 --text-secondary: #9c9c98;

/* Fonts */
--font-heading: "Sora", ... --font-sans: "Space Grotesk", ...
```

## Common Commands

```bash
pnpm dev                 # Start dev server (localhost:4321)
pnpm build              # Build for production
pnpm preview            # Preview production build
pnpm run check           # Lint + format check (Biome)
pnpm run typecheck        # TypeScript + Astro validation
```

## Important Files to Know

1. **astro.config.mjs** - Main config, sitemap settings
2. **src/config/site.ts** - Brand, URL, ad/analytics config — edit first
3. **src/lib/case-converter.ts** - Example tool logic — replace with your own
4. **src/components/layout/BaseHead.astro** - SEO meta tags
5. **src/styles/global.css** - Design system, CSS variables
