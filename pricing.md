# Pricing — WavePay

> WavePay pricing by payments processed: Free $0 for 25 payments a month, Basic $9 for 250, Pro $29 for 2,500. Every rail included, no percentage rake.

Merchant pricing

# Priced by payments processed, not by rake

Flat tiers. The ladder below the page's fold: the category norm (Lemon Squeezy ~5%+50¢, Paddle ~5%+50¢, Gumroad 10%, Keygen ~$100/mo) takes a slice of every sale — WavePay sells headroom instead. Start free; a payment count that outgrows the tier is refused by name, never silently charged.

### Free

$0 forever

- 25 payments / 30 days
- 1 site (product)
- Every live rail
- Signed settlement webhooks
- Payments ledger

Register free — one POST

### Basic

$9 USD / month

- 250 payments / 30 days
- 3 sites
- Coupons & promotions
- Webhooks + ledger

Get Basic — $9/mo

Scale

### Pro

$29 USD / month

- 2,500 payments / 30 days
- 10 sites
- Coupons, webhooks, ledger
- Priority support queue

Get Pro — $29/mo

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
  -d '{"productId":"wavepay","planId":"pro","provider":"paynow","email":"you@example.com"}'
# → 201 { "checkoutUrl": "https://www.paynow.co.zw/…", … } — settle it and
#   your merchant's plan_id moves to pro. provider "paypal" works too.
```

Agents: [skill.md](https://wavepay.t3ratech.co.zw/skill.md) is the same story in one markdown file, and `POST /mcp` exposes it all as tools. Registration returns a live key and a test key (`mk_test_…`) — the test key uses the same routes with fake money, never reaches a provider and never counts against the cap. Subscriptions, buy now pay later and refunds are usable in test mode today and switched on for live money per deployment (`GET /v2/features`). Questions: [support@t3ratech.co.zw](mailto:support@t3ratech.co.zw).

### Fair fine print

The tier caps payments *created* in the rolling 30-day window — a hit cap refuses new checkouts with `MERCHANT_LIMIT_REACHED`, it never blocks or double-charges a buyer mid-payment. Provider fees are the providers' own (PayNow and PayPal take theirs; WavePay's price is the plan). Every plan can take every rail the deployment enables — check [status](https://wavepay.t3ratech.co.zw/status.html) for the live list.
