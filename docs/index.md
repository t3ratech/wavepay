> Register, test with fake money and take a payment: the WavePay API reference start page, with conventions for money, idempotency and errors.

API reference

# Get started

[Download the whole reference as Markdown](https://wavepay.t3ratech.co.zw/wavepay-docs.md)

Base URL: `https://t3rnel-wavepay-production.t3ratech.workers.dev`. JSON in, JSON out. Everything under `/v2/internal/` takes your key in the `x-wavepay-service-key` header; checkout pages and the price list are public.

## 1. Register

One call creates your merchant and returns a live key and a test key. Both are shown once and only their hashes are stored.

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register \
  -H 'content-type: application/json' \
  -d '{"name":"My product","ownerEmail":"you@example.com"}'
```

## 2. Test with fake money

The `mk_test_…` key uses the same routes and settles through a simulator. It never reaches a provider and never counts against your plan.

## 3. Take a payment

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'content-type: application/json' -H 'Idempotency-Key: order-1001' \
  -d '{"productId":"my-product","planId":"growth","provider":"paynow","email":"buyer@example.com"}'
```

Send the buyer to `checkoutUrl`, then read `GET /v2/checkouts/<reference>/status` or receive the signed webhook. Providers: `paynow`, `paynow-mobile`, `paypal`, `crypto` (set `method` to a rail id) and `twocheckout` where enabled.

## Conventions

- **Money** is in minor units (cents). **Idempotency**: send an `Idempotency-Key` on every checkout; a repeat returns the same checkout.
- **Errors** are `{"error":{"code":"…"}}` with a meaningful HTTP status; see [Errors](https://wavepay.t3ratech.co.zw/docs/errors.html).
- **One page for models:** [wavepay-docs.md](https://wavepay.t3ratech.co.zw/wavepay-docs.md) is this whole reference as a single Markdown file, and [llms.txt](https://wavepay.t3ratech.co.zw/llms.txt) indexes the site.
- **Security:** Secrets are shown once and stored only as hashes (merchant keys) or sealed with AES-GCM (provider credentials, buyer addresses); they are never logged or returned. [How we protect your keys and data](https://wavepay.t3ratech.co.zw/security.html).
