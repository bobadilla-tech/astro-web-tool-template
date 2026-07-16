# Google AdSense Setup

The template ships with ad/analytics scaffolding wired but pointed at
placeholder IDs — `AdContainer`/`AdMobileAnchor` and the GA4 script in
`BaseHead.astro` all stay silent (no network requests) until you configure
real IDs in `src/config/site.ts`.

## Placements

| Placement                     | Component        | Where                                          |
| ------------------------------ | ---------------- | ----------------------------------------------- |
| In-content rectangle          | `AdContainer`    | `index.astro`, below the example tool           |
| Mobile anchor (bottom banner) | `AdMobileAnchor` | sitewide via `BaseLayout`, mobile only, dismissible |

Add more `<AdContainer adSlot="...">` calls to other pages as needed.

## 1. Add your Publisher ID

Edit `src/config/site.ts`:

```typescript
adsenseClientId: "ca-pub-XXXXXXXXXXXXXXXXX", // Replace with your Publisher ID
```

## 2. Update ad slot IDs

Every `<AdContainer adSlot="...">` / `<AdMobileAnchor adSlot="...">` call
currently uses a placeholder numeric slot ID. Replace each with the real slot
ID from your AdSense dashboard.

## 3. Add `ads.txt`

Create `public/ads.txt`:

```
google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

## 4. Add your GA4 Measurement ID (optional)

Edit `src/config/site.ts`:

```typescript
gaId: "G-XXXXXXXXXX", // Replace with your GA4 Measurement ID
```

The GA4 script tag in `BaseHead.astro` only renders once this is set to a
real ID (`isGaConfigured` gate).

## Known placeholder-ID behavior

Until a real Publisher ID is set, `AdContainer`/`AdMobileAnchor` render
nothing and make no network calls — verify this with DevTools' Network tab
before assuming ads are "just not showing yet."
