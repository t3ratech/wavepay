# Subscription payment API for SaaS: renewals, instalments…

> WavePay is a subscription payment API for SaaS: recurring billing on PayPal and stored instruments where the provider allows it, buy-now-pay-later instalments…

USE CASE

# Subscription payment API for software as a service (SaaS ): renewals, instalments, refunds and licences

WavePay is a subscription payment API for SaaS: recurring billing on PayPal and stored instruments where the provider allows it, buy-now-pay-later instalments, refunds, and signed licence keys that verify offline, behind the same checkout call.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Recurring: subscriptions run on PayPal billing and on stored payment instruments; Paynow card tokenisation is pending Paynow's approval and is not offered yet.
2. Instalments: split a price into scheduled payments with the buy-now-pay-later flow.
3. Refunds: POST a refund; the provider's own refund is made and the ledger updated.
4. Licences: a paid checkout emails an Ed25519-signed licence your app verifies offline.

## Questions

## Can I run subscriptions in Zimbabwe?

Subscriptions run on the rails that support recurring charges. Paynow tokenisation, which would extend this to local cards, is requested from Paynow and not yet available.

## Do paid plans refuse buyers at a cap?

No. Paid WavePay plans never refuse a buyer: payments beyond the plan's allowance are charged by the usage schedule.

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
