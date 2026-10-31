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

WavePay is shown with EcoCash, the cheapest local rail: the 2.5% EcoCash fee goes to Paynow at cost, and WavePay's plan and usage fee is added on top. The alternatives are each provider's own rates.

WavePay with EcoCash PayPal, direct (4% + $0.30) 2Checkout, direct (3.5% + $0.35): the same $0.70 as PayPal at $10 Paynow EcoCash, direct (2.5%)

| Provider | 100 | 250 | 500 | 1,000 | 2,500 | 5,000 | 10,000 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WavePay with EcoCash | $74 | $112 | $174 | $412 | $1,124 | $1,999 | $3,749 |
| PayPal (direct) | $70 | $175 | $350 | $700 | $1,750 | $3,500 | $7,000 |
| 2Checkout / Verifone (direct) | $70 | $175 | $350 | $700 | $1,750 | $3,500 | $7,000 |
| Paynow, EcoCash (direct, no WavePay) | $25 | $63 | $125 | $250 | $625 | $1,250 | $2,500 |

Sources: Paynow's rates are from [Paynow's fees page](https://www.paynow.co.zw/Home/Fees) (read 2026-10-31). PayPal and 2Checkout rates are indicative figures from our own research, not read from their pages: confirm them on [PayPal](https://www.paypal.com/uk/webapps/mpp/merchant-fees) and [2Checkout](https://www.2checkout.com/pricing/). Paynow direct is the cheapest line because it is one rail with nothing around it: no licence keys, subscriptions, ledger, other rails or agent onboarding. Cards through Paynow cost 3.5% + $0.50 per payment, which is 8.5% of a $10 sale.

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
