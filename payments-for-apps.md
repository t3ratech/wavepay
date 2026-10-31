# How to charge for an app or SaaS · WavePay

> Charge for an app or SaaS with WavePay by pricing plans as data, sending buyers to a hosted checkout, and unlocking seats from licence activations or your signed…

USE CASE

# How to charge for an app or software as a service (SaaS )

Charge for an app or SaaS with WavePay by pricing plans as data, sending buyers to a hosted checkout, and unlocking seats from licence activations or your signed settlement webhook.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Plans are data: GET /v2/pricing?productId=… returns plans, prices and promotions.
2. Promotions without a release: mint coupons with POST /v2/internal/coupons/mint (Basic and above).
3. Settle: signed webhooks, or drain the ledger with POST /v2/internal/payments.
4. Seats: activation codes and device quotas come from the licensing endpoints.

## Questions

## Can I run a sale without redeploying?

Yes. Pricing is data, so a promotion is a row, not a release.

## Where do I see every payment?

In the payments ledger — one feed for every rail, drained with since/limit cursors.

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
