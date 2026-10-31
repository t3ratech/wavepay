# Pricing — WavePay

> WavePay pricing by payments processed: Free $0 for 25 payments a month, Basic $9 for 250, Pro $29 for 2,500. Every rail included, no percentage rake.

Merchant pricing

# A plan for the software, a small percentage for the volume

WavePay is the checkout, licensing and billing layer. You pay a plan for the software, and a percentage that **falls as your volume grows** once you pass your plan's included payments. Provider fees, bank charges and the transfer tax are paid to the provider at cost: WavePay adds no markup to them.

### Free

$0 forever

25 payments a month, test mode, one site. Stops at the cap; never charges.

- 25 payments / month included
- 1 site
- Signed webhooks + payments ledger

Register free — one POST

### Starter

$15 USD / month

100 payments included, three sites, coupons, webhooks.

- 100 payments / month included
- 3 sites
- Coupons & promotions
- Signed webhooks + payments ledger

Get Starter — $15/mo

Recommended

### Growth

$49 USD / month

500 payments included, ten sites, subscriptions and instalments.

- 500 payments / month included
- 10 sites
- Coupons & promotions
- Signed webhooks + payments ledger

Get Growth — $49/mo

### Scale

$149 USD / month

2,500 payments included, thirty sites, priority support.

- 2,500 payments / month included
- 30 sites
- Coupons & promotions
- Signed webhooks + payments ledger
- Priority support

Get Scale — $149/mo

### Enterprise

From $499 USD / month

From $499 a month: custom volume, SLA, onboarding. By quote.

- Custom volume
- Unlimited sites
- Coupons & promotions
- Signed webhooks + payments ledger
- Priority support and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

### After your included payments

Each extra payment pays a percentage of its value, by its number in the month, with a minimum per payment. The rate only ever falls.

| Payment number in the month | Rate | Minimum per payment |
| --- | --- | --- |
| 1–1,000 | 2% | $0.10 |
| 1,001–2,500 | 1.5% | $0.08 |
| 2,501–10,000 | 1% | $0.06 |
| 10,001–50,000 | 0.6% | $0.05 |
| 50,001+ | 0.4% | $0.04 |

Example: Growth, 1,000 payments of $10 in a month = $49 plan + $100 usage = $149 ($0.149 per payment, 1.49% of sales). Billed monthly in arrears as one invoice; annual prepay is ten months for twelve. Prices exclude VAT where it applies. The same numbers, machine-readable: [pricing.json](https://wavepay.t3ratech.co.zw/pricing.json).

### Your money goes to you

With **own keys** (the default) you connect your own PayPal account and the provider pays you directly: WavePay never holds your money. Zimbabwean merchants use Paynow, EcoCash and crypto. A mode where WavePay collects and pays out needs a Reserve Bank payment-service-provider licence and is not offered yet.

### Start in one POST — no form, no call

```
# Register — returns your live merchant key once. Free tier, working now:
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"My Product","ownerEmail":"you@example.com"}'
# → 201 { "merchantId": "mer_…", "key": "mk_live_…", "planId": "free", "paymentsPerMonth": 25 }

# Upgrade — a normal checkout on the wavepay product, your own rails:
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'Content-Type: application/json' -H 'Idempotency-Key: upgrade-' \
  -d '{"productId":"wavepay","planId":"growth","provider":"paynow","email":"you@example.com"}'
# → 201 { "checkoutUrl": "https://www.paynow.co.zw/…", … } — settle it and
#   your merchant's plan_id moves to growth. provider "paypal" works too.
```

Agents: [skill.md](https://wavepay.t3ratech.co.zw/skill.md) is the same story in one markdown file, and `POST /mcp` exposes it all as tools. Registration returns a live key and a test key (`mk_test_…`) — the test key uses the same routes with fake money, never reaches a provider and never counts against the cap. Subscriptions, buy now pay later and refunds are usable in test mode today and switched on for live money per deployment (`GET /v2/features`). Questions: [support@t3ratech.co.zw](mailto:support@t3ratech.co.zw).

### Fair fine print

Free stops at its 25 payments and never charges. Paid plans never refuse a buyer at the allowance: later payments are charged by the schedule above. A cap or a charge never blocks or double-charges a buyer mid-payment. Check [status](https://wavepay.t3ratech.co.zw/status.html) for the live rails.
