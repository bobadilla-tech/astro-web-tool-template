# Astro Web Tool Template

Bobadilla Tech's starting point for shipping a new frontend-only Astro web
tool fast — Astro 5, Biome, pnpm, GitHub Pages CI/CD, and a docs/ structure,
all pre-wired.

## Using this template

```bash
gh repo create your-org/your-new-tool --template bobadilla-tech/astro-web-tool-template --public --clone
cd your-new-tool
pnpm install
```

First things to edit:

1. `src/config/site.ts` — set `name` and `url`
2. `src/lib/case-converter.ts`, `src/components/tool/*`, `src/scripts/tool-interactive.ts` —
   replace the example text-case-converter tool with your own

## Stack

- **Astro 5**: static output, ~0KB JS by default, built for SEO and performance
- **TypeScript**: strict mode
- **Biome**: linting and formatting, not ESLint/Prettier
- **pnpm**: always use pnpm, not npm/yarn
- **GitHub Pages**: hosting

## Quick start

```bash
pnpm install
pnpm dev   # http://localhost:4321
```

## Docs

- [`docs/core/dev-setup.md`](docs/core/dev-setup.md): running locally, testing,
  customization, troubleshooting
- [`docs/core/adsense-setup.md`](docs/core/adsense-setup.md): configuring ads
  and analytics (off by default)
- [`docs/core/seo-optimization.md`](docs/core/seo-optimization.md): meta tags,
  sitemap, content strategy, backlinks
- [`docs/core/deployment.md`](docs/core/deployment.md): GitHub Pages
  (default), alternative platforms, performance targets

## Related projects

- **[Lorelai](https://github.com/bobadilla-tech/lorelai)**: Lorem Ipsum
  generator library for Go
- **[Requiems API](https://requiems.xyz)**: enterprise API solutions by
  Bobadilla Tech

---

Built with ❤️ by [Bobadilla Tech](https://bobadilla.tech) |
[GitHub](https://github.com/bobadilla-tech) | [Website](https://bobadilla.tech)
