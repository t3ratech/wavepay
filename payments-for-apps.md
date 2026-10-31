> Charge for an app or SaaS with WavePay by pricing plans as data, sending buyers to a hosted checkout, and unlocking seats from licence activations or your signed…

USE CASE

# How to charge for an app or SaaS

Charge for an app or SaaS with WavePay by pricing plans as data, sending buyers to a hosted checkout, and unlocking seats from licence activations or your signed settlement webhook.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Basic: 250 payments per 30 days for $9/month; Pro: 2,500 payments per 30 days for $29/month

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

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
