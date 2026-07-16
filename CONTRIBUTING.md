# Contributing

## Using this template

This repo is a GitHub template — start a new tool with:

```bash
gh repo create your-org/your-new-tool --template bobadilla-tech/astro-web-tool-template --public --clone
cd your-new-tool
pnpm install
```

Then, before you write your tool:

1. Edit `src/config/site.ts` — set `name` and `url`.
2. Replace `src/lib/case-converter.ts`, `src/components/tool/*`, and
   `src/scripts/tool-interactive.ts` with your own tool's logic and UI.
3. Update `src/pages/index.astro` to use your new components.
4. If you're using a custom domain, create `public/CNAME` with that domain
   (this template doesn't ship one).
5. When you're ready to monetize, set real `adsenseClientId` / `gaId` values
   in `src/config/site.ts` — until then, the ad and analytics components
   stay silent.

## Contributing to the template itself

Changes here should stay generic and reusable across future tools — avoid
adding project-specific business logic, content, or copy. Open a PR against
`bobadilla-tech/astro-web-tool-template` directly.

Before submitting, make sure these all pass locally:

```bash
pnpm run check       # biome check .
pnpm run typecheck    # astro check
pnpm build
```
