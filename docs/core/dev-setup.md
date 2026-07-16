# Dev Setup

## Running locally

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # production build
pnpm preview   # preview the production build
pnpm astro check  # TypeScript/Astro validation
```

## Testing the example tool

The template ships with a minimal "text case converter" as an example — swap
it out for your real tool, but while it's still in place:

1. **Convert**: paste text, pick a case (upper/lower/title/camel/snake/kebab),
   click Convert or press `Ctrl+Enter` (`⌘+Enter` on Mac).
2. **Copy**: click "Copy to Clipboard" or press `Ctrl+K`.
3. **Dark mode**: click the sun/moon icon in the header — persists to
   `localStorage`.
4. **Responsive**: resize the browser, or run `pnpm dev --host` to test on a
   real mobile device on the same network.

## First-time configuration

Before deploying for real:

- Update `name` / `url` in `src/config/site.ts` — also read by
  `astro.config.mjs` for the Astro `site` setting.
- AdSense Publisher ID + ad slot IDs — see
  [`adsense-setup.md`](./adsense-setup.md).
- GA4 measurement ID in `src/config/site.ts` (`gaId`) if you want analytics
  events to actually report anywhere — same placeholder-until-configured
  pattern as AdSense.

For SEO/content strategy see [`seo-optimization.md`](./seo-optimization.md); for
shipping it see [`deployment.md`](./deployment.md).

## Customization

**Colors/theme** — CSS variables in `src/styles/global.css`. Palette
matches [bobadilla.tech](https://bobadilla.tech) branding (gold accent,
near-black dark mode), with `[data-theme="dark"]` overriding the
`:root` light-mode values:

```css
:root {
  --accent: #c9a916;
  --accent-hover: #e6be1a;
  /* ... */
}

[data-theme="dark"] {
  --accent: #e6be1a;
  --accent-hover: #ffeea8;
  /* ... */
}
```

**Example tool logic** — `src/lib/case-converter.ts`. This is the first file
to replace when building your real tool.

## Troubleshooting

**Build errors**

```bash
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

**TypeScript errors**

```bash
pnpm astro check
```

**Dev server won't start / port in use**

```bash
lsof -ti:4321 | xargs kill -9
pnpm dev
```
