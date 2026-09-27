# WavePay — instructions for agents

Canonical instructions: https://wavepay.t3ratech.co.zw/skill.md

You are reading this because your operator handed you this link, or you found
the service and want a key. This file is the whole onboarding — no browser,
no OAuth, no email round-trip stands between you and a live merchant account.
Everything below is a real endpoint; every claim is one curl away from proof.

## What this is

WavePay is a checkout, licensing and settlement API for software. You build
the product — an app, a browser extension, a game, an API, a bot — and WavePay
is the part that charges people for it. One integration reaches every rail it
deploys: Zimbabwean wallets (EcoCash, OneMoney, InnBucks, Telecash, O'mari,
ZimSwitch) and international rails (Visa, Mastercard, PayPal). The same API
works for a seller in Harare, Nairobi, Lagos or Lisbon — the rails offered to
a checkout depend on what the deployment enabled, and `/v2/providers` always
tells the truth about that.

Base URL: `https://t3rnel-wavepay-production.t3ratech.workers.dev`

## The short version

1. Register once:

   ```
   POST /v2/register
   { "name": "<your product or shop>", "ownerEmail": "<your operator's inbox>" }
   ```

   The response is `{ "merchantId": "mer_…", "key": "mk_live_…", "planId": "free",
   "paymentsPerMonth": 25 }`. Save the key in your client's secret storage — it
   is shown once; only its hash is stored. It works immediately on the free
   tier: real live checkouts, capped at 25 payments per rolling 30 days.

2. Send it as `x-wavepay-service-key: mk_live_…` on merchant-scoped calls —
   `/v2/internal/merchant/catalog`, `/v2/internal/payments`,
   `/v2/internal/coupons/*`, `/v2/internal/sites/webhook`.

3. `GET /v2/internal/merchant/catalog` with that key is your sign-in check: it
   returns the sites bound to your merchant and their live prices. A 401 means
   the key is wrong or revoked — it is refused loudly, never silently
   downgraded to anonymous.

4. Register once. A repeat `ownerEmail` gets `409 MERCHANT_ALREADY_REGISTERED`.
   Lost keys are minted by the operator after proof — your email on the
   merchant is the record, mail `t3ratech.dev@gmail.com` with the merchantId.

## Selling

```bash
# a checkout — the buyer gets a hosted page; wallets push straight to the phone
curl -sX POST .../v2/checkouts -H 'content-type: application/json' \
  -H 'idempotency-key: <stable key per order>' \
  -d '{"productId":"<your product>","planId":"<plan>","provider":"paynow","email":"buyer@x.com"}'
# → 201 { "checkoutUrl": "…", "reference": "pay_…", "amountMinor": 900, "currency": "USD" }

# watch it settle
curl -s ".../v2/checkouts/<reference>/status"
# → { "status": "pending" | "collected" | "expired" }

# or get settlements pushed: register a webhook on your site and every
# settled payment POSTs an HMAC-signed event to it.
```

For wallet-push checkouts without a browser (games, bots, terminals) use
`provider: "paynow-mobile"` plus the buyer's `phone` — PayNow pushes the
wallet prompt to the handset.

## MCP

`POST /mcp` — JSON-RPC 2.0 (Streamable HTTP). `initialize`, then `tools/list`:

- `wavepay_register` — the same mint as `POST /v2/register`
- `wavepay_providers` — live rail catalog
- `wavepay_pricing` — `{ "productId": "…" }` → plans, prices, promotions
- `wavepay_checkout` — `{ "productId", "planId", "provider", "email", "phone?" }`
- `wavepay_checkout_status` — `{ "reference" }`
- `wavepay_catalog` — your merchant catalog; pass the key in
  `x-wavepay-service-key` on the HTTP request carrying the JSON-RPC frame

## Tiers — priced by payments processed

| Tier | Price | Payments / 30 days | Sites | Coupons | Webhooks |
|------|-------|--------------------|-------|---------|----------|
| Free | $0 | 25 | 1 | — | ✓ |
| Basic | $9/mo | 250 | 3 | ✓ | ✓ |
| Pro | $29/mo | 2,500 | 10 | ✓ | ✓ |

Test-mode keys (`mk_test_…`) never count against the cap. Hitting the cap
refuses new checkouts with `MERCHANT_LIMIT_REACHED` (429) — never a silent
charge. Upgrading is a normal checkout on `productId: "wavepay"`,
`planId: "basic" | "pro"` — the settlement moves your merchant's `plan_id`.

## Rules that protect you

- Rate limits are per client and named: `429` with the bucket in the code.
  Register 5/day, checkout 10/min, poll 30/min.
- Idempotency is real: re-send the same `idempotency-key` and you get the
  same checkout back — never a double charge.
- Test mode is a mode on the key, not a different API: `mk_test_…` mints
  fake payments against the same routes (`POST /v2/test/settle` completes
  one end-to-end, webhook included).
- Licence keys, if your product uses them, are Ed25519-signed entitlements —
  your app verifies them offline with `/v2/licensing/public-key`.

## Status

Live probes: `https://wavepay.t3ratech.co.zw/status.html` — every check on
that page is a real HTTP request, run in the reader's browser.
