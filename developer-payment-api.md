# Developer-first payment API: idempotent checkouts, signed…

> WavePay is a developer-first payment API: register with one POST, get a live key and a test key, create idempotent checkouts, receive HMAC-signed settlement webhooks…

USE CASE

# Developer-first payment API: idempotent checkouts, signed webhooks, a test mode with fake money

WavePay is a developer-first payment API: register with one POST, get a live key and a test key, create idempotent checkouts, receive HMAC-signed settlement webhooks, and read every payment from a cursor-paged ledger — all described in a public OpenAPI file.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Start: POST /v2/register returns a live key and a test key (mk_test_…) that settles through a simulator, with fake money.
2. Safe retries: every checkout takes an Idempotency-Key, so a retried request returns the same checkout.
3. Settle: signed webhooks (X-WavePay-Signature) or the payments ledger with since/limit cursors.
4. Reference: /openapi.json, /docs.html, /skill.md and /llms.txt describe every route.

## Questions

## Is there a sandbox?

Yes. The test key uses the same routes with fake money and never reaches a provider or counts against your plan.

## Where is the API reference?

openapi.json, docs.html and skill.md, all generated from the same source as the Worker.

## On this page

## At a glance

- Free to start: 25 payments a month
- A test key with fake money
- Provider fees paid at cost, no markup
- Your own account: the money lands with you

## Start in one request

Register, get a live key and a test key, and take a test payment in minutes.

[See plans](https://wavepay.t3ratech.co.zw/pricing.html)

## Share this page

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
