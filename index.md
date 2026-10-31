# WavePay — checkout and licensing for software

> Take EcoCash, cards and PayPal with one API. Register in one request, test with fake money, then go live with licence keys, subscriptions and refunds.

Now with subscriptions, instalments and 2Checkout

# Get paid for your software on *every rail your buyers hold*

One API for EcoCash, OneMoney, InnBucks, ZimSwitch, cards and PayPal. Register in one request, test with fake money, and go live with licence keys, subscriptions and refunds built in.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html#register) [Read the docs](https://wavepay.t3ratech.co.zw/docs.html) [For agents](https://wavepay.t3ratech.co.zw/skill.md)

- Free plan, no card needed
- No percentage fee on your sales
- REST and MCP

**9**payment rails

**25**free payments a month

**0%**fee on your sales

**15**languages

Payment rails

## Every rail a buyer might hold

Local wallets for Zimbabwe, cards and PayPal for everyone else. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · coming soon

What you get

## Checkout is the easy part. WavePay is the rest of it.

### Hosted checkout and wallet push

Send buyers to a hosted page, or push an EcoCash prompt straight to their phone.

### Licensing built in

Signed entitlements, licence keys by email, device activation and recovery. Your app verifies offline.

### Subscriptions and instalments

Recurring plans, buy now pay later on cards, and a clear past-due period before access ends.

### Refunds and reversals

Full and partial refunds through the provider, with who did it and why on record.

### A real test environment

A test key beside your live key, a simulator, and time travel to watch a renewal happen.

### Built for agents

skill.md, OpenAPI, an MCP server and WebMCP tools, so an AI can set up checkout for you.

How it works

## Three requests from nothing to paid

1

### Register

One request returns a live key and a test key. Free plan, working immediately.

2

### Sell

Create a checkout and get a hosted URL, or push a wallet prompt to a phone.

3

### Settle

A signed webhook or a poll confirms the money. The licence key is emailed automatically.

For developers

## Start with curl. Finish with a licence key.

Every example in the documentation runs against the sandbox with a test key first, so you can break things safely.

[Open the API reference](https://wavepay.t3ratech.co.zw/docs.html)

curl MCP JavaScript

```
# 1. register: a live key and a test key, shown once 
curl -sX POST https://wavepay.t3ratech.co.zw/v2/register \
  -H 'content-type: application/json' \
  -d '{"name":"My App","ownerEmail":"you@example.com"}'

# 2. sell: returns a hosted checkout URL 
curl -sX POST https://wavepay.t3ratech.co.zw/v2/checkouts \
  -H 'x-wavepay-service-key: mk_test_… ' \
  -H 'idempotency-key: order-1001' \
  -d '{"productId":"my-app","planId":"pro","provider":"paynow","email":"buyer@example.com"}'
```

```
# any MCP client: https://wavepay.t3ratech.co.zw/mcp 
{ "jsonrpc": "2.0", "id": 1, "method": "tools/call",
  "params": {
    "name": "wavepay_checkout",
    "arguments": { "productId": "my-app", "planId": "pro",
                   "provider": "paynow", "email": "buyer@example.com" } } }

# tools: wavepay_register, wavepay_providers, wavepay_pricing,
#        wavepay_checkout, wavepay_checkout_status, wavepay_subscribe … 
```

```
const res = await fetch("https://wavepay.t3ratech.co.zw/v2/checkouts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-wavepay-service-key": process.env.WAVEPAY_KEY,
    "idempotency-key": crypto.randomUUID(),
  },
  body: JSON.stringify({ productId: "my-app", planId: "pro",
                         provider: "paypal", email: "buyer@example.com" }),
});
const { checkoutUrl, reference } = await res.json();
```

Pricing

## Priced by payments, not by rake

Flat monthly plans. The payment providers charge their own fees on top.

### Free

$0 forever

25 payments per 30 days

- 1 site
- Every live rail
- Signed webhooks
- Payments ledger

[Register free](https://wavepay.t3ratech.co.zw/pricing.html#register)

Most popular

### Basic

$9 per month

250 payments per 30 days

- 3 sites
- Coupons and promotions
- Webhooks and ledger

[Get Basic](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Pro

$29 per month

2,500 payments per 30 days

- 10 sites
- Everything in Basic
- Priority support queue

[Get Pro](https://wavepay.t3ratech.co.zw/pricing.html#register)

Questions

## Answers before you ask

Which payment methods can I accept?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal for international buyers. 2Checkout is built and switches on when the provider approves our account.

Do you take a percentage of my sales?

No. Plans are flat monthly prices based on payments processed. The payment providers charge their own fees.

Can I test without real money?

Yes. Registration gives you a test key that uses a simulator. It never reaches a provider and never counts against your plan.

How do buyers get their licence?

When a payment settles, WavePay emails a licence key, and your app can verify the signed entitlement offline.

Can an AI agent use WavePay?

Yes. Point it at skill.md, the OpenAPI document or the MCP server. An agent can register, price, check out and reconcile without a browser.

Guides

## Answers for the thing you are building

### Payment rails

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Your kind of software

[Browser extensions](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Games](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Apps](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [APIs](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bots](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Questions and guides

[FAQ](https://wavepay.t3ratech.co.zw/faq.html), [Subscriptions](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Buy now, pay later](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Test mode](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Guides](https://wavepay.t3ratech.co.zw/learn.html)

## Ready to take your first payment?

Register in one request. No card, no call.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html#register)[Read the docs](https://wavepay.t3ratech.co.zw/docs.html)
