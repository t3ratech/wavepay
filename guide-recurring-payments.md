# Recurring payments in Zimbabwe: what charges automatically and…

> A card token or a PayPal subscription can be charged every period with nobody present, but mobile wallets such as EcoCash, OneMoney, InnBucks and O'mari cannot be…

HOW IT WORKS

# Recurring payments in Zimbabwe: what charges automatically and what cannot

A card token or a PayPal subscription can be charged every period with nobody present, but mobile wallets such as EcoCash, OneMoney, InnBucks and O'mari cannot be debited unattended, so a WavePay subscription on a wallet sends the customer a fresh payment prompt each period and access follows what they pay.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $149/month; Enterprise: custom volume from $499/month

## Two collection modes

automatic charges a saved instrument: a Paynow card token (Visa, Mastercard or ZimSwitch) or a PayPal subscription. invoice_and_remind raises a normal checkout each period, pushes the wallet prompt or sends a link, and extends access when it is paid. It is the only mode that works on every local rail.

## Why wallets are different

Paynow documents tokens for cards only. A wallet payment needs the customer's PIN every time, so no service can charge it silently. WavePay does not pretend otherwise: it asks each period.

## Paynow card tokens need Paynow's approval

A merchant may only tokenise cards once Paynow has enabled it for the integration. If a subscription asks for automatic collection and no token comes back, it falls back to invoice_and_remind and records why, instead of failing.

## Failed payments

A failed charge is retried the next day, then two days later. Three failures make the subscription past due, and a week after the first failed attempt it ends. A card whose token has expired is replaced by a payment request, and the customer is told.

## Cancelling

POST /v2/internal/subscriptions/cancel ends it now, or with atPeriodEnd true keeps access to the end of the paid period. A PayPal subscription is also cancelled at PayPal.

## Idempotent

Creating a subscription needs an Idempotency-Key, and every renewal is keyed by its period and attempt, so a repeated billing run can never charge a period twice.

## Keep going

- [2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications](https://wavepay.t3ratech.co.zw/guide-2checkout.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
