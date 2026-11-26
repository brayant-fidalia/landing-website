# landing-website
The official website for Fidalia Labs LLC, built with [Astro](https://astro.build).

## Develop
```sh
npm install
cp .env.example .env   # then set PUBLIC_FORMSPREE_ID
npm run dev            # http://localhost:4321
npm run build          # static output in dist/
```

## Edit content
- Company details (name, email): `src/data/site.ts`
- Apps portfolio: add entries to `src/data/apps.ts`
- Brand assets: source in `assets/brand/`, served copies in `public/brand/`
- Production URL: `site` in `astro.config.mjs`

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `PUBLIC_FORMSPREE_ID` (create a form at formspree.io)

The legal pages are template text; review them before launch.
