> Send a stable Idempotency-Key with every POST /v2/checkouts — derived from your order id, not generated per attempt — and a retry after a timeout returns the original…

HOW IT WORKS

# Idempotent checkouts: why a retry should never charge twice

Send a stable Idempotency-Key with every POST /v2/checkouts — derived from your order id, not generated per attempt — and a retry after a timeout returns the original checkout instead of creating a second charge.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The failure it prevents

A request times out and the client cannot tell whether the checkout was created. Without a key the safe-looking retry creates a second checkout and can charge the buyer twice.

## Choosing the key

Use something stable per order, such as order-1001. A random value per attempt defeats the point: each retry would look like a new request.

## Where it applies

Every checkout, hosted or wallet push. Settlement polling and webhooks are reads and need no key.

## Reconciling

Match on the checkout reference (pay_…) that comes back; the ledger holds one row per settlement.

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

- [2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications](https://wavepay.t3ratech.co.zw/guide-2checkout.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
