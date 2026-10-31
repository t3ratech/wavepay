> Charge for an API with WavePay by selling plans through checkout, issuing a licence key on payment, and gating requests on the key — settlement arrives by signed…

USE CASE

# How to charge for API access

Charge for an API with WavePay by selling plans through checkout, issuing a licence key on payment, and gating requests on the key — settlement arrives by signed webhook so access can be granted automatically.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Sell: a checkout per plan with POST /v2/checkouts.
2. Issue: the paid checkout emails the licence key; activation returns a signed entitlement.
3. Gate: your API checks the entitlement or key before serving a request.
4. Automate: register a webhook with POST /v2/internal/sites/webhook; the HMAC secret is returned once.

## Questions

## How does my API learn that someone paid?

Through a signed webhook, or by polling checkout status.

## Is the webhook authentic?

Settlements are signed with the HMAC secret returned when you registered the webhook.

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
