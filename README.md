# WavePay site — wavepay.t3ratech.co.zw

Static marketing/docs/status site for WavePay, served from GitHub Pages.

## Layout

- `index.html` — overview, rails, how-it-works, CTA (persuade mode; see `DESIGN.md`)
- `pricing.html` — merchant plans + self-serve checkout instructions
- `docs.html` — one-page API reference (real endpoints only)
- `status.html` — live probes of the production worker (web monitoring)
- `thanks.html` — payment return target (`wavepay` product `return_url`)
- `.well-known/agent-card.json` — A2A agent card (T3rnel surface convention)

## Deploy

Pages source is the `site/` tree, mirrored to the `t3ratech/wavepay` repo's
`main` branch (root). To publish edits:

1. Edit files here, in the monorepo.
2. `rsync -a --delete site/ /path/to/wavepay-repo/` — or use the
   `wavepay-webdev` skill which does this plus the git push.
3. `git -C /path/to/wavepay-repo add -A && git -C … commit -m "…" && git -C … push`
4. Pages serves `main` root; `CNAME` in that repo holds `wavepay.t3ratech.co.zw`.

## DNS (operator step — one time)

At the `t3ratech.co.zw` DNS provider (the zone is not on the Cloudflare
account in `.env` — check the registrar):

```
wavepay.t3ratech.co.zw.  CNAME  t3ratech.github.io.
```

GitHub Pages then serves the `t3ratech/wavepay` repo at the subdomain and
provisions TLS automatically once DNS resolves.

## Analytics

`assets/app.js` carries `GA4_MEASUREMENT_ID`. Create a GA4 property for the
site (Analytics → Admin → Data Streams → web stream on
`https://wavepay.t3ratech.co.zw`), drop the `G-…` id into the constant, and
pageviews flow. The loader is a no-op until the id is real, and never loads
on non-HTTPS origins.

## Monitoring

- **Web UI**: `status.html` probes `/health`, `/v2/providers`,
  `/v2/pricing?productId=wavepay`, `/v1/public-key`, and the site itself —
  live from the reader's browser.
- **Desktop/ops**: `./t3rnel-services --monitor wavepay` (or the
  `wavepay-status` target) runs the same probe set from the workstation and
  writes `~/.t3rnel/wavepay-status.json`; a red probe exits non-zero so any
  scheduler/cron can alert on it.
