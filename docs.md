# Docs — WavePay

> WavePay developer documentation: merchant registration, checkouts on every rail, wallet push, licensing, webhooks, the payments ledger and MCP tools for agents.

Developer docs

# The whole API in one page

Base URL: `https://t3rnel-wavepay-production.t3ratech.workers.dev`. Public endpoints are rate-limited per client. Merchant endpoints take your key in the `x-wavepay-service-key` header. Agents: [skill.md](https://wavepay.t3ratech.co.zw/skill.md) is the same reference shaped for autonomous clients; `POST /mcp` speaks JSON-RPC tools.

### 0 · Register — no browser

```
POST /v2/register
{ "name": "My Product", "ownerEmail": "you@x.com" }
// 201 → { "merchantId": "mer_…", "key": "mk_live_…",
//         "planId": "free", "paymentsPerMonth": 25 }
// The key is shown once — only its hash is stored.
```

One registration per email; 5/day per client. A lost key is re-minted by the operator against the owner email.

### 1 · Start a checkout

```
POST /v2/checkouts
Idempotency-Key: <stable per order>
{
  "productId": "your-product",
  "planId": "pro",
  "provider": "paynow",        // "paynow-mobile" | "paypal"
  "email": "buyer@x.com",
  "phone": "+2637…"            // express wallet push only
}
// 201 → { "checkoutUrl": "…", "reference": "pay_…" }
```

Hand the buyer `checkoutUrl`. With `paynow-mobile` + `phone`, the wallet prompt pushes straight to the handset — no page at all.

### 2 · Watch it settle

```
GET /v2/checkouts/<reference>/status
// 200 → { "status": "pending" | "collected" | "expired" }

// settlement push instead — register a webhook on your site:
POST /v2/internal/sites/webhook
x-wavepay-service-key: mk_live_…
{ "siteId": "…", "url": "https://you.dev/hook" }
// → returns the HMAC secret once; settlements sign with it.
```

### 3 · Catalogue and pricing

```
GET /v2/providers                   // live rails
GET /v2/pricing?productId=…         // plans, prices, promotions

GET /v2/internal/merchant/catalog   // with your key —
// the sites, plans and coupons your merchant sees
```

### MCP — tools for agents

```
POST /mcp                       // JSON-RPC 2.0
{"jsonrpc":"2.0","id":1,"method":"tools/list"}
// wavepay_register · wavepay_providers · wavepay_pricing
// wavepay_checkout · wavepay_checkout_status · wavepay_catalog
// Merchant tools read the key from the request's
// x-wavepay-service-key header, same as REST.
```

### Licensing (optional, built in)

```
POST /v2/licensing/checkout    // sells + emails a licence key
POST /v2/licensing/activate    // { "licenseKey", "deviceId" } → signed entitlement
POST /v2/licensing/recover     // mails the buyer a fresh key
GET  /v2/licensing/public-key  // Ed25519 trust root — verify entitlements offline
```

T3rnel Browser sells Pro on this exact flow in production.

### Merchant endpoints

| Endpoint | What it does |
| --- | --- |
| `POST /v2/internal/payments` | Your settlement ledger — idempotent drain with `since`/`limit` cursors |
| `POST /v2/internal/coupons/mint` | Mint discount codes on your products (Basic+) |
| `GET /v2/internal/merchant/catalog` | Everything your key can sell: sites, plans, live prices |
| `POST /v2/internal/sites/webhook` | Set the settlement webhook for a site (secret returned once) |
| `POST /v2/test/settle` | Test-mode settlement — exercise the webhook end-to-end, no money moves |
| `POST /v2/test/billing/run` | Test key only — run the billing engine as if `advanceDays` had passed, to exercise renewals, instalments and dunning |
| `GET /v2/features` | Which flagged capabilities are on for live money (test keys can use all of them) |
| `POST /v2/internal/subscriptions` | Open a subscription (needs `Idempotency-Key`); `GET` lists, `/cancel` ends |
| `POST /v2/internal/bnpl` | Buy now, pay later on a card: deposit now, instalments until the total is paid |
| `POST /v2/internal/refunds` | Refund a settled PayPal or test payment, in part or in full |
| `POST /v2/internal/subscriptions/pause` | Pause a subscription (also at 2Checkout); `/resume` undoes it, `/price` changes the renewal price |
| `POST /v2/twocheckout/ipn` | 2Checkout's signed order, renewal, refund and chargeback notifications (and `/lcn` for subscription changes) — called by 2Checkout, not by you |
| `POST /v2/internal/checkouts/otp` | Complete an O'mari payment with the buyer's one-time PIN |

### Test mode

`POST /v2/register` returns `key` (`mk_live_…`) and `testKey` (`mk_test_…`). A test key calls the same routes but settles through a simulator that never contacts a provider and never counts against your cap. Choose the outcome with Paynow's test phones: `0771111111` paid, `0772222222` paid after ten seconds, `0773333333` cancelled, `0774444444` failed; or tag the email (`+decline`, `+cancel`, `+delay`). A test checkout's URL is a hosted page with Approve and Decline buttons. Read [the test-mode guide](https://wavepay.t3ratech.co.zw/guide-test-mode.html).

### Subscriptions, instalments and refunds

**Automatic** collection charges a saved card (Paynow card tokens, once Paynow has approved them for the deployment) or a PayPal subscription. **invoice_and_remind** sends a payment request each period and is the only mode for EcoCash, OneMoney, InnBucks and O'mari, which cannot be debited unattended. **BNPL** takes a deposit and collects the rest from a non-prepaid card until the total is paid; WavePay collects, it does not lend. **Refunds** work for PayPal and test payments; Paynow documents no refund API. These are switched on per deployment — check `GET /v2/features`. See [recurring payments](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html) and [buy now, pay later](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html).

### Rails and rules

**paynow** — hosted PayNow checkout: Visa, Mastercard, ZimSwitch, EcoCash, OneMoney, Telecash, InnBucks, O'mari. **paynow-mobile** — express wallet push to a phone. **twocheckout** — Verifone's 2Checkout: international cards and PayPal, merchant of record, 2Checkout-billed subscriptions, refunds, signed IPN/LCN notifications. **paypal** — international buyers, USD. Prices are minor units (900 = $9.00). Free tier caps at 25 payments/30 days — the cap refuses checkouts as `MERCHANT_LIMIT_REACHED`, never mid-payment. Idempotency-Key retries return the same checkout; `mk_test_…` keys run every route with fake money.
