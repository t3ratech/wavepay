> Integrating each rail yourself means one integration, one reconciliation feed and one failure mode per wallet and card scheme; WavePay replaces them with one checkout…

COMPARE

# WavePay vs integrating each payment rail yourself

Integrating each rail yourself means one integration, one reconciliation feed and one failure mode per wallet and card scheme; WavePay replaces them with one checkout call and one ledger, at the cost of depending on WavePay for the rails it enables.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

One per wallet, card scheme and PayPal

✓ One: POST /v2/checkouts

? One report per rail

✓ One payments ledger with since/limit cursors

? Each integration's own idempotency rules

✓ Idempotency-Key on every checkout

Build and run key issuing yourself

✓ Built in: Ed25519 entitlements, offline verification

Per-provider portals and forms

✓ POST /v2/register or skill.md — no browser

Direct relationship with every provider

✓ WavePay sits between you and the provider
|  | Each rail yourself | WavePay |
| --- | --- | --- |
| Integrations to build |  |  |
| Reconciliation |  |  |
| Retries |  |  |
| Licence keys |  |  |
| Agent onboarding |  |  |
| Control |  |  |

## Questions

## When should I integrate a rail directly?

When you need one rail only, want the direct provider relationship, and are happy to build its reconciliation and licensing yourself.

## When does WavePay make more sense?

When your buyers hold different rails, or when an agent has to set payments up without a browser.

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

- [All guides and comparisons](https://wavepay.t3ratech.co.zw/learn.html)
- [Pricing](https://wavepay.t3ratech.co.zw/pricing.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
