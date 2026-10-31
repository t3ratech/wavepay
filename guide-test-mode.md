# Testing WavePay with fake money: test keys, simulated outcomes…

> POST /v2/register returns a live key and a test key (mk_test_…); the test key calls the same routes but settles through a simulator that never contacts a payment…

HOW IT WORKS

# Testing WavePay with fake money: test keys, simulated outcomes and time travel

POST /v2/register returns a live key and a test key (mk_test_…); the test key calls the same routes but settles through a simulator that never contacts a payment provider, so you can drive every outcome of your integration, including renewals and instalments, without moving money.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Basic: 250 payments per 30 days for $9/month; Pro: 2,500 payments per 30 days for $29/month

## Getting a test key

Registration returns key (mk_live_…) and testKey (mk_test_…) together, both shown once. Send either in the x-wavepay-service-key header. A test key never counts against your plan's payment cap.

## Choosing the outcome

Use Paynow's own test phone numbers: 0771111111 pays, 0772222222 pays after ten seconds, 0773333333 is cancelled by the customer, 0774444444 fails for insufficient balance. Without a phone, tag the email: buyer+decline@example.com fails, +cancel cancels, +delay pays after ten seconds. For card tokens, +prepaid returns a prepaid card (BNPL refuses it) and +tokdecline returns a token whose later charges are declined.

## Hosted pages

A test checkout's checkoutUrl is a WavePay page with Approve and Decline buttons, so the redirect-and-return leg of your integration can be walked end to end. It only ever acts on test payments.

## Time travel

POST /v2/test/billing/run with {"advanceDays": 31} runs the billing engine as if 31 days had passed, once for your test subscriptions and instalment plans only. Run it again to reconcile the charges it raised.

## Features that are not yet live

Subscriptions, BNPL, refunds and card tokens are switched on per deployment. A test key can use every one of them regardless, which is how you build against them before they are enabled for live money. GET /v2/features reports the live state.

## What a test key does not prove

A simulator proves your integration handles every outcome; it does not prove a provider's behaviour. Run one live payment of the smallest amount before launch.

## Keep going

- [2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications](https://wavepay.t3ratech.co.zw/guide-2checkout.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
