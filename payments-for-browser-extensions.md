> Sell a browser extension with WavePay by creating a checkout for your Pro plan, emailing a licence key on payment, and letting the extension verify an Ed25519-signed…

USE CASE

# How to charge for a browser extension

Sell a browser extension with WavePay by creating a checkout for your Pro plan, emailing a licence key on payment, and letting the extension verify an Ed25519-signed entitlement offline — T3rnel Browser sells Pro this way in production.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Basic: 250 payments per 30 days for $9/month; Pro: 2,500 payments per 30 days for $29/month

## The flow

1. Checkout: POST /v2/checkouts for the plan; the buyer pays with the rail they hold.
2. Licence: a paid checkout emails a licence key automatically.
3. Activation: POST /v2/licensing/activate with the key and a deviceId returns a signed entitlement.
4. Verification: the extension checks the entitlement offline against GET /v2/licensing/public-key — no call home on every launch.
5. Recovery: POST /v2/licensing/recover mails a lost key again.

## Questions

## Does my extension need a server to check licences?

No. Entitlements are Ed25519-signed, so the extension verifies them offline against the public key.

## Who already does this?

T3rnel Browser sells its Pro tier on this exact flow.

## Keep going

- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [How to charge for an app or SaaS](https://wavepay.t3ratech.co.zw/payments-for-apps.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
