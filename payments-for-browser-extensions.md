> Sell a browser extension with WavePay by creating a checkout for your Pro plan, emailing a licence key on payment, and letting the extension verify an Ed25519-signed…

USE CASE

# How to charge for a browser extension

Sell a browser extension with WavePay by creating a checkout for your Pro plan, emailing a licence key on payment, and letting the extension verify an Ed25519-signed entitlement offline — T3rnel Browser sells Pro this way in production.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

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

- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [How to charge for an app or SaaS](https://wavepay.t3ratech.co.zw/payments-for-apps.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
