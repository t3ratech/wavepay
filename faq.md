# WavePay FAQ · WavePay

> WavePay is the checkout, licensing and settlement API for software — apps, browser extensions, games, APIs and bots.

QUESTIONS

# Frequently asked questions

WavePay is the checkout, licensing and settlement API for software — apps, browser extensions, games, APIs and bots. One integration reaches Zimbabwean wallets (EcoCash, OneMoney, InnBucks, Telecash, O'mari, ZimSwitch) and international rails (Visa, Mastercard, PayPal).

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## What is WavePay?

WavePay is the checkout, licensing and settlement API for software — apps, browser extensions, games, APIs and bots. One integration reaches Zimbabwean wallets (EcoCash, OneMoney, InnBucks, Telecash, O'mari, ZimSwitch) and international rails (Visa, Mastercard, PayPal).

## How do I start accepting payments?

Two calls. POST /v2/register with a name and an email returns a live merchant key (mk_live_…) once; POST /v2/checkouts with that product and plan returns a hosted checkout URL. The free tier works immediately — 25 payments per 30 days.

## Does WavePay take a percentage of my sales?

Only after your plan's included payments, and the percentage falls as your volume grows (2% down to 0.4%, with a small minimum per payment). The plan fee covers the software: Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month. Provider fees are paid to the provider at cost with no WavePay markup. Full schedule: /pricing.html and /pricing.json.

## Which payment methods can my customers use?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch for Zimbabwean buyers; Visa, Mastercard and PayPal for international buyers. Which are enabled on a deployment is reported live by GET /v2/providers.

## Can an AI agent set up and run payments by itself?

Yes. skill.md is the whole onboarding in one markdown file, and POST /mcp exposes JSON-RPC tools (wavepay_register, wavepay_providers, wavepay_pricing, wavepay_checkout, wavepay_checkout_status, wavepay_catalog). No browser, OAuth or email round-trip is needed.

## How do I know a payment landed?

Poll GET /v2/checkouts/<reference>/status (pending, collected or expired) or register a signed webhook. Every settlement is also in the payments ledger, which you can drain idempotently with since/limit cursors.

## Can a retry charge a customer twice?

No. POST /v2/checkouts takes an Idempotency-Key; repeating a request with the same key returns the same checkout instead of creating a second one.

## Does WavePay issue licence keys?

Yes. Licensing is built in: a paid checkout emails a licence key, devices activate it for an Ed25519-signed entitlement, and your app verifies that entitlement offline against the public key at GET /v2/licensing/public-key.

## Can I charge someone without a browser?

Yes, for EcoCash, OneMoney, InnBucks and O'mari: use provider paynow-mobile with the buyer's phone number and the wallet prompt is pushed straight to the handset to approve with a PIN. The wallet a deployment pushes to is part of its configuration — GET /v2/providers shows it. Games and bots, where a hosted page cannot open, use this.

## Can I test without moving money?

Yes. POST /v2/register returns a test key (mk_test_…) beside your live one. A test key uses the same routes, settles through a simulator that never contacts a provider, and never counts against your payment cap. Paynow's own test phone numbers choose the outcome: 0771111111 pays, 0772222222 pays after ten seconds, 0773333333 cancels, 0774444444 fails. POST /v2/test/billing/run advances time so renewals and instalments can be tested without waiting, and POST /v2/test/settle exercises your webhook end to end.

## Can I charge customers every month?

Yes, as subscriptions. A saved card (where Paynow has approved card tokens for the deployment) or a PayPal subscription is charged automatically. EcoCash, OneMoney, InnBucks and O'mari cannot be debited without the customer, so each period the customer is sent a fresh payment prompt and their access follows what they actually pay. GET /v2/features reports which of these a deployment has switched on for live money; a test key can use all of them today.

## Can customers buy now and pay later?

Yes, on cards. The customer pays a deposit, the rest is collected from that card on a schedule, and collection continues until the total is paid. Prepaid cards and virtual cards are refused because they can be emptied or closed after delivery. WavePay collects; it does not lend, so the merchant carries the risk that a card stops working, which is why access is suspended after a grace period of missed payments and restored when payment resumes. Mobile wallets are not offered BNPL because they cannot be debited unattended.

## Does WavePay work with 2Checkout (Verifone)?

Yes. Provider twocheckout is Verifone's 2Checkout: international cards and PayPal with 2Checkout as merchant of record, so it handles tax and invoicing. A one-time checkout is a signed 2Checkout link settled by signed IPN; a subscription with collection=automatic is billed by 2Checkout itself, and WavePay records each renewal, refund and chargeback from its signed notifications. GET /v2/providers lists it wherever it is enabled.

## Can I refund a payment?

Yes for PayPal payments and for test payments: POST /v2/internal/refunds with an Idempotency-Key refunds all or part of a settled payment, never more than was paid. Paynow documents no refund API, so a Paynow payment is refused with REFUND_UNSUPPORTED rather than recorded as refunded; refund those from the Paynow dashboard.

## What happens when I hit my plan's payment cap?

New checkouts are refused with MERCHANT_LIMIT_REACHED. A buyer who is already mid-payment is never blocked or double-charged.

## Who runs WavePay?

WavePay is built by T3raTech (TeraTech Solutions (Private) Limited). T3rnel Browser sells its Pro tier on this rail in production.

## Keep going

- [Guides, rails and comparisons](https://wavepay.t3ratech.co.zw/learn.html)
- [The whole API in one page](https://wavepay.t3ratech.co.zw/docs.html)
- [Pricing](https://wavepay.t3ratech.co.zw/pricing.html)
- [skill.md — for agents](https://wavepay.t3ratech.co.zw/skill.md)
