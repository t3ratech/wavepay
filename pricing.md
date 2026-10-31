# WavePay pricing: Free, Growth $49 and Scale $499, plus a small…

> WavePay has three plans: Free for 25 payments, Growth at $49 for 500 payments (recommended) and Scale at $499 for 2,500.

PRICING

# One plan for the software. A small percentage that falls as you grow.

WavePay has three plans: Free for 25 payments, Growth at $49 for 500 payments (recommended) and Scale at $499 for 2,500. Beyond the included payments a small percentage applies, from 2.25% falling to 0.4%. Provider fees are paid at cost.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

## Free

$0 forever

For trying it out: 25 payments a month, test mode, one site. It stops at the cap and never charges.

- 25 payments a month
- Test mode with fake money
- One site
- Signed webhooks and a payments ledger
- Stops at the cap and never charges

Register free

Recommended

## Growth

$49 USD / month

500 payments included, ten sites, subscriptions, instalments and coupons. After 500, a small percentage.

- 500 payments included
- Then 2.25% of each payment (minimum 10 cents), falling with volume
- Ten sites, coupons, subscriptions, instalments (BNPL)
- Own PayPal account, Paynow, EcoCash, crypto
- Reaches $499 at 2,500 payments of $10, exactly Scale's price

Start with Growth

## Scale

$499 USD / month

2,500 payments included, unlimited sites, priority support and a response-time promise. After 2,500, a lower percentage.

- 2,500 payments included
- Then 1.0% falling to 0.4% on larger volumes
- Unlimited sites and priority support
- Response-time promise for production incidents
- You always pay the cheaper of Growth and Scale

Choose Scale

Annual billing is ten months for twelve. Prices exclude VAT where it applies. No quote needed at any volume: the schedule below simply continues.

## What it costs to take $10 payments, all fees included

WavePay is shown with EcoCash: the 2.5% EcoCash fee goes to the provider at cost and WavePay's plan and usage fee is added on top. Take card or PayPal payments through WavePay and the provider's own fee for that rail applies in the same way. The other lines are each provider's published list rate for a $10 payment.

- WavePay with EcoCash
- Gumroad (10% + $0.50)
- Lemon Squeezy (5% + $0.50)
- Paddle (5% + $0.50)
- PayPal (3.49% + $0.49)
- 2Checkout (Verifone) 2Sell (3.5% + $0.35)
- Stripe (2.9% + $0.30)
- Square (online) (2.9% + $0.30)
- Braintree (2.89% + $0.29)
- Flutterwave (international cards) (4.8%)

Paddle and Lemon Squeezy publish the same rate, so their lines run on top of each other (Paddle dashed). The first 25 payments a month are free on WavePay. Below about 145 payments a month a bare card processor costs less than Growth's $49, because the plan fee is fixed; above that WavePay is cheaper on this chart, and it also brings Zimbabwean wallets, licence keys, subscriptions and agent onboarding in one API.

| Provider | 100 | 250 | 500 | 1,000 | 2,500 | 5,000 | 10,000 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WavePay with EcoCash | $74 | $112 | $174 | $412 | $1,124 | $1,999 | $3,749 |
| Gumroad | $150 | $375 | $750 | $1,500 | $3,750 | $7,500 | $15,000 |
| Lemon Squeezy | $100 | $250 | $500 | $1,000 | $2,500 | $5,000 | $10,000 |
| Paddle | $100 | $250 | $500 | $1,000 | $2,500 | $5,000 | $10,000 |
| PayPal | $84 | $210 | $420 | $839 | $2,098 | $4,195 | $8,390 |
| 2Checkout (Verifone) 2Sell | $70 | $175 | $350 | $700 | $1,750 | $3,500 | $7,000 |
| Stripe | $59 | $148 | $295 | $590 | $1,475 | $2,950 | $5,900 |
| Square (online) | $59 | $148 | $295 | $590 | $1,475 | $2,950 | $5,900 |
| Braintree | $58 | $145 | $290 | $579 | $1,448 | $2,895 | $5,790 |
| Flutterwave (international cards) | $48 | $120 | $240 | $480 | $1,200 | $2,400 | $4,800 |

Sources, read on 2026-10-31: [Gumroad](https://gumroad.com/pricing), [Lemon Squeezy](https://www.lemonsqueezy.com/pricing), [Paddle](https://www.paddle.com/pricing), [PayPal](https://www.paypal.com/us/business/paypal-business-fees), [Stripe](https://stripe.com/pricing), [Braintree](https://www.paypal.com/us/enterprise/paypal-braintree-fees) are read from the provider's own page. Flutterwave (international cards) (secondary sources report 4.8% for international cards since late 2024; rates vary by country; [provider page](https://flutterwave.com/us/pricing)); 2Checkout (Verifone) 2Sell (secondary sources (Merchant Maverick, NerdWallet): 3.5% + $0.35; [provider page](https://www.2checkout.com/pricing/)); Square (online) (Online Store and eCommerce API: 2.9% + 30¢ (read through search snippets of Square's fees page); [provider page](https://squareup.com/us/en/fees)) come from secondary sources and are indicative. List rates change and vary by country, plan and card: confirm on the provider's page. Merchant-of-record services such as Paddle and Lemon Squeezy also handle sales tax, which WavePay does not.

## After the included payments

Each extra payment pays a percentage of its value, by its number in the month, with a minimum per payment. The rate only ever falls. Payment #501 on Growth costs 2.25% of its value: 22.5 cents on a $10 sale, $2.25 on a $100 sale.

| Payment number in the month | Rate | Minimum per payment |
| --- | --- | --- |
| 1–2,500 | 2.25% | $0.10 |
| 2,501–10,000 | 1% | $0.06 |
| 10,001–50,000 | 0.6% | $0.05 |
| 50,001+ | 0.4% | $0.04 |

### What a month costs

| Payments × ticket | Plan | WavePay bill | % of sales | Per payment |
| --- | --- | --- | --- | --- |
| 1,000 × $3 | Growth | $99 | 3.30% | $0.10 |
| 1,000 × $10 | Growth | $162 | 1.62% | $0.16 |
| 2,500 × $10 | Growth | $499 | 2.00% | $0.20 |
| 5,000 × $10 | Growth | $749 | 1.50% | $0.15 |
| 2,500 × $25 | Scale | $499 | 0.80% | $0.20 |
| 1,000 × $100 | Scale | $499 | 0.50% | $0.50 |
| 5,000 × $100 | Scale | $2,999 | 0.60% | $0.60 |

Provider fees, bank charges and the transfer tax are paid by you to the provider at cost: WavePay adds no markup to them. Billed monthly in arrears as one invoice with Paynow and PayPal pay links.

## Start in one request

```
# Register: returns your live key and a test key (shown once)
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register -H 'content-type: application/json' \
  -d '{"name":"My product","ownerEmail":"you@example.com"}'
```

Agents: [skill.md](https://wavepay.t3ratech.co.zw/skill.md) is the same story in one file, and the Model Context Protocol (MCP) server at `/mcp` exposes it as tools. [Connect Claude Code, Codex CLI, Gemini CLI, OpenClaw and more](https://wavepay.t3ratech.co.zw/integrations.html). Also machine-readable: [pricing.json](https://wavepay.t3ratech.co.zw/pricing.json).
