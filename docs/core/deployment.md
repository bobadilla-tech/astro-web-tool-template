# Deployment

## GitHub Pages (default)

Deploys automatically via `.github/workflows/deploy.yml` on every push to
`main`, using the modern `actions/deploy-pages@v5` flow (no
`peaceiris/actions-gh-pages` or personal access token needed):

1. `pnpm build` runs, `dist` is uploaded as the Pages artifact.
2. `actions/deploy-pages@v5` publishes it.
3. Node version comes from `.nvmrc`, read by the workflow's `setup-node`
   step.

A separate `.github/workflows/ci.yml` runs lint, typecheck, and build on
every push and PR, independent of the deploy workflow.

**Custom domain**: this template does not ship a `public/CNAME` file — each
project sets its own. If you're using a custom domain, create
`public/CNAME` with that domain and commit it; GitHub Pages reads it from the
deployed artifact on every run, so if it's ever removed the site falls back to
the default `*.github.io` URL on the next deploy. DNS for that domain needs a
CNAME/ALIAS record pointing at GitHub Pages.

**One-time repo setup** (if not already done): Settings > Pages > Build
and deployment > Source: "GitHub Actions".

## Alternative platforms

Kept here for reference in case of a future migration.

### Netlify

```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist"
```

### Vercel

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist"
}
```

### Cloudflare Pages

Connect the repo, set build command `pnpm build`, output directory
`dist`. This is a Pages project, not Workers — no `wrangler.toml` needed.

## Performance targets

- **Lighthouse score**: > 95/100
- **Page load**: < 2 seconds
- **Core Web Vitals**: all "Good" (LCP < 2.5s, FID < 100ms, CLS < 0.1)

Run an audit before/after deploying:

```bash
pnpm build
pnpm preview
# Open Chrome DevTools > Lighthouse
```

## Pre-deploy checklist

- [ ] `pnpm build` succeeds with no errors
- [ ] `src/config/site.ts` `name`/`url` set to your real values
- [ ] Real AdSense Publisher ID + ad slot IDs set, if monetizing (see `adsense-setup.md`)
- [ ] `public/CNAME` created and correct, if using a custom domain
- [ ] OG image renders correctly in a social share preview
- [ ] Sitemap submitted to Search Console / Bing Webmaster Tools
