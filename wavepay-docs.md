# WavePay API reference

Base URL: https://t3rnel-wavepay-production.t3ratech.workers.dev. Site: https://wavepay.t3ratech.co.zw. Updated 2026-10-31.

One-file version of https://wavepay.t3ratech.co.zw/docs/index.html for language models and for download.

## Get started

1. `POST /v2/register` `{name, ownerEmail}` returns a live key and a test key (shown once).
2. Use the `mk_test_…` key for fake-money testing; same routes, simulator settlement.
3. `POST /v2/checkouts` `{productId, planId, provider, email}` with an `Idempotency-Key` header; send the buyer to `checkoutUrl`; read `GET /v2/checkouts/<reference>/status` or take the signed webhook.

Money is in minor units. Internal routes take the key in `x-wavepay-service-key`. Providers: paynow, paynow-mobile, paypal, crypto (method = rail id), twocheckout where enabled.

## Checkouts and payments

Create a checkout for a plan, send the buyer to the hosted page (or push a wallet prompt), and read the result.

#### `GET /v2/providers`

Enabled payment rails on this deployment

Authentication: None (public)

Responses: 200 { providers: [{ id, label, methods }] }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/providers
```

#### `GET /v2/pricing`

Plans, prices and promotions for a product

Authentication: None (public)

Responses: 200 { plans: [{ planId, priceMinor, currency, promotion }] }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/pricing
```

#### `POST /v2/checkouts`

Create a buyer-facing hosted checkout

Authentication: None (public)

Body (JSON): `productId` (string), `planId` (string), `provider` (string), `email` (string), `amountMinor` (integer), `currency` (string)

Responses: 201 { reference: pay_…, checkoutUrl, provider, amountMinor, currency, test }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"…","email":"…","amountMinor":0,"currency":"…"}'
```

#### `GET /v2/checkouts/{reference}/status`

Poll a checkout's settlement status

Authentication: None (public)

Responses: 200 { reference, state, amountMinor, currency }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts/<reference>/status
```

#### `POST /v2/internal/checkouts`

Create a server-side checkout (merchant-scoped)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `productId` (string), `planId` (string), `provider` (string), `email` (string), `externalSubject` (string), `amountMinor` (integer), `currency` (string)

Responses: 201 { reference, checkoutUrl, provider, amountMinor, currency, test }; 403 MERCHANT_SCOPE — product not bound to this merchant

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"…","email":"…","externalSubject":"…","amountMinor":0,"currency":"…"}'
```

#### `POST /v2/internal/checkouts/status`

Poll a checkout's status (merchant)

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { reference, state }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts/status \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/payments`

Reconciliation ledger — idempotent drain with since/limit cursors

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { payments: [{ reference, amountMinor, currency, settledAt }], cursor }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/payments \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/checkouts/otp`

Complete an O'mari payment with the buyer's one-time PIN

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `reference` (string), `otp` (string)

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts/otp \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"reference":"…","otp":"…"}'
```

## Merchants, sites and keys

Register, receive keys, bind products to sites, and read what a key can sell.

#### `POST /v2/register`

Register a merchant account — no key required — returns a live key and a test key

Authentication: None (public)

Body (JSON): `name` (string), `ownerEmail` (string)

Responses: 200 { merchantId, key: mk_live_… shown once, planId, paymentsPerMonth }; 409 MERCHANT_ALREADY_REGISTERED

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register \
  -H 'content-type: application/json' \
  -d '{"name":"…","ownerEmail":"…"}'
```

#### `GET /v2/internal/merchant/catalog`

Everything this key can sell — sites, plans, live prices. The sign-in check.

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { merchantId, sites: [{ siteId, products, plans }], key: { mode, planId } }; 401 key missing, wrong, or revoked — refused loudly

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/catalog \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/sites/webhook`

Set or rotate a site's settlement webhook URL+secret (secret shown once)

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { webhookUrl, secret }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/sites/webhook \
  -H 'x-wavepay-service-key: mk_live_…'
```

## Where the money lands

Connect your own provider account so the provider pays you directly. WavePay never holds your money in this mode.

#### `GET /v2/internal/merchant/settlement`

The provider accounts your key has connected (masked); the secret is never returned

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { accounts: [{ provider, mode: 'own-keys', environment, account, status, connectedAt, verifiedAt }] }; 403 a global key, which has no merchant

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `PUT /v2/internal/merchant/settlement/{provider}`

Connect your own provider account so the money lands with you (own keys). Credentials are checked with the provider, sealed, and never returned

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `clientId` (string), `clientSecret` (string), `environment` (sandbox|production)

Responses: 200 { account: { provider, mode, environment, account, status, connectedAt, verifiedAt } }; 400 SETTLEMENT_PROVIDER_UNSUPPORTED or INVALID_REQUEST; 403 LIVE_KEY_REQUIRED (a test key cannot hold an account) or a global key; 422 CREDENTIALS_REJECTED (the provider refused them) or ENVIRONMENT_MISMATCH (sandbox keys on a production Worker, or the reverse)

```sh
curl -sX PUT https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement/<provider> \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"clientId":"…","clientSecret":"…","environment":"sandbox"}'
```

#### `DELETE /v2/internal/merchant/settlement/{provider}`

Disconnect the account; later payments settle through the deployment's account again

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { disconnected: boolean }

```sh
curl -sX DELETE https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement/<provider> \
  -H 'x-wavepay-service-key: mk_live_…'
```

## Pricing and usage

WavePay's own price list and your usage meter. The same data is at /pricing.json.

#### `GET /v2/price-list`

WavePay's own price list: plans, the usage schedule and the modes (same data as /pricing.json)

Authentication: None (public)

Responses: 200 { currency, plans: [{ id, name, monthlyMinor, annualMinor, includedPayments, sites }], usage: { tiers }, providerFees, modes }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/price-list
```

#### `GET /v2/internal/merchant/usage`

This month's usage meter for your key: payments, included allowance, usage fee by tier, total due

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { month, plan, payments, includedPayments, nonUsdPayments, usage: { feeMinor, chargedPayments, byTier }, totalDueMinor }; 403 a global key, which has no merchant

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/usage \
  -H 'x-wavepay-service-key: mk_live_…'
```

## Crypto

Eleven rails quoted in US dollars. The buyer sends the exact amount; the exchange deposit settles the payment.

#### `GET /v2/crypto/rails`

The crypto rails WavePay takes (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC) and which can be quoted right now

Authentication: None (public)

Responses: 200 { rails: [{ id, symbol, network, address, confirmations, quotable }] }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/crypto/rails
```

#### `POST /v2/internal/crypto/rates`

Global key: store coin prices in US dollars (a checkout refuses a rate older than ten minutes)

Authentication: Global service key (operator only)

Responses: 200 { ok, coins }; 400 unknown coin or a price that is not positive

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/rates \
  -H 'x-wavepay-service-key: <global key>'
```

#### `POST /v2/internal/crypto/pending`

Global key: open crypto payments with rail, exact base-unit amount and address — what the watcher looks for

Authentication: Global service key (operator only)

Responses: 200 { payments: [{ reference, rail, baseUnits, address, createdAt }] }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/pending \
  -H 'x-wavepay-service-key: <global key>'
```

#### `POST /v2/internal/crypto/settle`

Global key: settle a payment from a deposit the exchange credited. Re-verified: rail, address, exact amount, and the transaction never settled a payment before

Authentication: Global service key (operator only)

Responses: 200 the payment's status; 409 TRANSFER_ALREADY_USED; 422 PAYMENT_MISMATCH — not the deposit that was asked for

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/settle \
  -H 'x-wavepay-service-key: <global key>'
```

## Subscriptions, instalments and refunds

Recurring charges, buy-now-pay-later schedules and refunds.

#### `POST /v2/internal/subscriptions`

Open a subscription (flag: recurring; test keys always)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `productId` (string), `planId` (string), `provider` (paynow|paynow-mobile|paypal), `email` (string), `phone` (string), `externalSubject` (string), `collection` (automatic|invoice_and_remind), `method` (string)

Responses: 201 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"paynow","email":"…","phone":"…","externalSubject":"…","collection":"automatic","method":"…"}'
```

#### `GET /v2/internal/subscriptions`

List this merchant's subscriptions

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/subscriptions/cancel`

Cancel a subscription now or at period end

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `id` (string), `atPeriodEnd` (boolean)

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/cancel \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…","atPeriodEnd":true}'
```

#### `POST /v2/internal/bnpl`

Start buy-now-pay-later (flag: bnpl; test keys always)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `productId` (string), `planId` (string), `provider` (paynow|paypal), `email` (string), `externalSubject` (string), `instalments` (integer), `depositMinor` (integer), `intervalDays` (integer)

Responses: 201 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"paynow","email":"…","externalSubject":"…","instalments":0,"depositMinor":0,"intervalDays":0}'
```

#### `GET /v2/internal/bnpl`

List this merchant's BNPL plans

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/bnpl/cancel`

Cancel a BNPL plan

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `id` (string)

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl/cancel \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

#### `POST /v2/internal/refunds`

Refund a settled payment (flag: refunds; test keys always)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `reference` (string), `amountMinor` (integer), `reason` (string), `revokeAccess` (boolean)

Responses: 201 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/refunds \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"reference":"…","amountMinor":0,"reason":"…","revokeAccess":true}'
```

#### `POST /v2/test/billing/run`

Run the billing engine as if advanceDays had passed (mk_test_ keys only)

Authentication: None (public)

Body (JSON): `advanceDays` (integer)

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/billing/run \
  -H 'content-type: application/json' \
  -d '{"advanceDays":0}'
```

#### `POST /v2/internal/subscriptions/pause`

Pause a subscription: keeps paid access, stops the next renewal (also at 2Checkout)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `id` (string)

Responses: 200 OK; 403 FEATURE_DISABLED or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/pause \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

#### `POST /v2/internal/subscriptions/resume`

Resume a paused subscription

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `id` (string)

Responses: 200 OK; 403 FEATURE_DISABLED or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/resume \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

#### `POST /v2/internal/subscriptions/price`

Change what the next renewals cost (also at 2Checkout)

Authentication: Merchant key in x-wavepay-service-key

Body (JSON): `id` (string), `amountMinor` (integer)

Responses: 200 OK; 403 FEATURE_DISABLED or MERCHANT_SCOPE

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/price \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…","amountMinor":0}'
```

## Licences

Signed entitlements that your software verifies offline.

#### `POST /v2/licensing/checkout`

Sell and email a licence key

Authentication: None (public)

Responses: 201 Checkout created; key emailed on settle

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/checkout
```

#### `POST /v2/licensing/activate`

Activate a licence key on a device

Authentication: None (public)

Responses: 200 { entitlement } — signed, verifiable offline

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/activate
```

#### `POST /v2/licensing/recover`

Mail the buyer a fresh licence key

Authentication: None (public)

Responses: 200 Recovery email sent

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/recover
```

## MCP and agents

The same API as MCP tools, plus the machine-readable files agents read.

#### `POST /mcp`

MCP endpoint — JSON-RPC 2.0 over HTTP. Tools: wavepay_register, wavepay_providers, wavepay_pricing, wavepay_checkout, wavepay_checkout_status, wavepay_features, wavepay_subscribe, wavepay_bnpl, wavepay_refund, wavepay_test_billing_run, wavepay_catalog

Authentication: None (public)

Responses: 200 JSON-RPC response

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

## Test mode

A test key uses the same routes with fake money.

#### `POST /v2/test/settle`

Settle a test checkout end-to-end — exercises the webhook without touching a provider (mk_test_* keys only)

Authentication: None (public)

Responses: 200 Settled in test mode

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/settle
```

#### `GET /v2/test/pay/{reference}`

Hosted page for a test checkout: Approve or Decline (test payments only)

Authentication: None (public)

Responses: 200 HTML; 409 NOT_A_TEST_PAYMENT

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/pay/<reference>
```

## Everything else

Routes that fit no other resource.

#### `GET /v2/site/providers`

Providers the public website may describe

Authentication: None (public)

Responses: 200 { view: 'all'|'real', providers: [{ id, name, accepts, instruments, live }] }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/site/providers
```

#### `GET /v2/mail/unsubscribe`

Unsubscribe confirmation page

Authentication: None (public)

Responses: 200 HTML confirmation page; 400 Link altered or incomplete

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/mail/unsubscribe
```

#### `POST /v2/mail/unsubscribe`

Unsubscribe (or resubscribe)

Authentication: None (public)

Responses: 200 HTML result page; 400 Link altered or incomplete

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/mail/unsubscribe
```

#### `POST /v2/internal/mailing/import`

Import another product's registrants onto the mailing list

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { received, added, existing, invalid }; 400 Invalid source or addresses; 401 Not the global service key

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/mailing/import \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `GET /v2/features`

Which flagged capabilities are on for live money (test keys can use all)

Authentication: None (public)

Responses: 200 { features: [{flag, live, test}] }

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/features
```

#### `GET /v2/internal/payment-methods`

Saved payment methods (never the token)

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/payment-methods \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `GET /v2/internal/paypal/disputes`

PayPal disputes (operator key, flag: disputes)

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 OK; 403 FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/paypal/disputes \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/twocheckout/ipn`

2Checkout IPN: signed order, renewal, refund and chargeback notification

Authentication: None (public)

Responses: 200 Acknowledged; 202 Acknowledged, nothing to do; 401 PROVIDER_SIGNATURE_INVALID

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/ipn
```

#### `GET /v2/twocheckout/ipn`

2Checkout IPN endpoint liveness (2Checkout checks a URL with a GET when it is saved)

Authentication: None (public)

Responses: 200 {ok, endpoint}

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/ipn
```

#### `POST /v2/twocheckout/lcn`

2Checkout LCN: signed subscription change notification

Authentication: None (public)

Responses: 200 Acknowledged; 202 Acknowledged, nothing to do; 401 PROVIDER_SIGNATURE_INVALID

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/lcn
```

#### `GET /v2/twocheckout/lcn`

2Checkout LCN endpoint liveness (2Checkout checks a URL with a GET when it is saved)

Authentication: None (public)

Responses: 200 {ok, endpoint}

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/lcn
```

#### `GET /v2/internal/merchant/invoices`

Your usage invoices (month, amount, status)

Authentication: Merchant key in x-wavepay-service-key

Responses: 200 { invoices: [{ id, month, planId, payments, chargedPayments, amountMinor, status, createdAt, dueAt, paidAt }] }; 403 a global key, which has no merchant

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/invoices \
  -H 'x-wavepay-service-key: mk_live_…'
```

#### `POST /v2/internal/invoices/run`

Global key: invoice a month's usage now (default last month); dryRun lists who would be invoiced. Idempotent

Authentication: Global service key (operator only)

Body (JSON): `month` (string), `dryRun` (boolean)

Responses: 200 { month, created: [{ merchantId, invoiceId, amountMinor, emailed }], skipped }

```sh
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/invoices/run \
  -H 'x-wavepay-service-key: <global key>' \
  -H 'content-type: application/json' \
  -d '{"month":"…","dryRun":true}'
```

#### `GET /v2/invoices/{id}/pay/{provider}`

The emailed pay link for a usage invoice: needs its token (?t=), opens a checkout for the invoice amount and redirects to it

Authentication: None (public)

Responses: 302 redirect to the provider's checkout; 401 wrong token

```sh
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/invoices/<id>/pay/<provider>
```

## Errors

| Code | HTTP | Meaning |
|---|---|---|
| INVALID_AMOUNT | 400 | See the operation that returned it. |
| INVALID_CURRENCY | 400 | See the operation that returned it. |
| INVALID_OTP | 400 | See the operation that returned it. |
| INVALID_REQUEST | 400 | The request is malformed or a field is missing or not allowed. |
| PROMO_CODE_INVALID | 400 | See the operation that returned it. |
| PROOF_EXPIRED | 400 | See the operation that returned it. |
| SETTLEMENT_PROVIDER_UNSUPPORTED | 400 | That provider cannot be connected as your own account. |
| INVALID_DEVICE_PROOF | 401 | See the operation that returned it. |
| PROVIDER_SIGNATURE_INVALID | 401 | See the operation that returned it. |
| SERVICE_UNAUTHORIZED | 401 | The x-wavepay-service-key header is missing, wrong or revoked. |
| UNAUTHORIZED | 401 | Missing or wrong credentials. |
| CHARGE_DECLINED | 402 | See the operation that returned it. |
| CHECKOUT_ASSOCIATION_DENIED | 403 | See the operation that returned it. |
| FEATURE_DISABLED | 403 | See the operation that returned it. |
| LICENSE_REVOKED | 403 | See the operation that returned it. |
| LIVE_KEY_REQUIRED | 403 | A test key cannot do this; use your live key. |
| MERCHANT_SCOPE | 403 | Your key may not touch this resource (it belongs to another merchant, or the route needs the global key). |
| MERCHANT_SCOPE_REQUIRED | 403 | This route needs a merchant key, not the global key. |
| NOT_A_TEST_KEY | 403 | See the operation that returned it. |
| RESERVATION_ASSOCIATION_DENIED | 403 | See the operation that returned it. |
| ACTIVATION_NOT_FOUND | 404 | See the operation that returned it. |
| BNPL_NOT_FOUND | 404 | See the operation that returned it. |
| COUPON_NOT_FOUND | 404 | See the operation that returned it. |
| KEY_NOT_FOUND | 404 | See the operation that returned it. |
| LICENSE_NOT_FOUND | 404 | See the operation that returned it. |
| MERCHANT_NOT_FOUND | 404 | See the operation that returned it. |
| PAYMENT_NOT_FOUND | 404 | See the operation that returned it. |
| PLAN_NOT_FOUND | 404 | See the operation that returned it. |
| PRODUCT_NOT_FOUND | 404 | See the operation that returned it. |
| PROMOTION_NOT_FOUND | 404 | See the operation that returned it. |
| RECOVERY_NOT_FOUND | 404 | See the operation that returned it. |
| SITE_NOT_FOUND | 404 | See the operation that returned it. |
| SUBSCRIPTION_NOT_FOUND | 404 | See the operation that returned it. |
| UNKNOWN_CHECKOUT | 404 | See the operation that returned it. |
| UNKNOWN_LICENSE | 404 | See the operation that returned it. |
| COLLECTION_NOT_SUPPORTED | 409 | See the operation that returned it. |
| COUPON_ALREADY_REDEEMED | 409 | See the operation that returned it. |
| COUPON_NOT_REDEEMABLE | 409 | See the operation that returned it. |
| ENTITLEMENT_UNAVAILABLE | 409 | See the operation that returned it. |
| IDEMPOTENCY_CONFLICT | 409 | The same Idempotency-Key was used with a different request. |
| LICENSE_ACTIVATION_LIMIT_REACHED | 409 | See the operation that returned it. |
| LICENSE_NOT_READY | 409 | See the operation that returned it. |
| LICENSING_DISABLED | 409 | See the operation that returned it. |
| MERCHANT_ALREADY_REGISTERED | 409 | That owner email already has a merchant. |
| NO_CONTACT | 409 | See the operation that returned it. |
| NOT_A_TEST_PAYMENT | 409 | See the operation that returned it. |
| OTP_UNSUPPORTED | 409 | See the operation that returned it. |
| PAYMENT_NOT_APPROVED | 409 | See the operation that returned it. |
| PAYMENT_NOT_READY | 409 | See the operation that returned it. |
| PAYMENT_NOT_REFUNDABLE | 409 | See the operation that returned it. |
| PAYMENT_REPLAY | 409 | See the operation that returned it. |
| PLAN_NOT_RECURRING | 409 | See the operation that returned it. |
| PROMO_CODE_EXHAUSTED | 409 | See the operation that returned it. |
| PROMO_CODE_REVOKED | 409 | See the operation that returned it. |
| PROMOTION_NOT_ACTIVE | 409 | See the operation that returned it. |
| PROVIDER_DISABLED | 409 | That provider is not enabled on this deployment, or the merchant's account for it cannot be used. |
| REFUND_EXCEEDS_PAYMENT | 409 | See the operation that returned it. |
| REFUND_REFUSED | 409 | See the operation that returned it. |
| REFUND_UNSUPPORTED | 409 | See the operation that returned it. |
| RESERVATION_STATE_CONFLICT | 409 | See the operation that returned it. |
| RESERVATION_UNAVAILABLE | 409 | See the operation that returned it. |
| SUBSCRIPTION_NOT_ACTIVE | 409 | See the operation that returned it. |
| TRANSFER_ALREADY_USED | 409 | That transaction already settled a payment. |
| CREDENTIALS_REJECTED | 422 | The provider refused the credentials you connected. |
| ENVIRONMENT_MISMATCH | 422 | Sandbox credentials on a live deployment, or the reverse. |
| PAYMENT_MISMATCH | 422 | The payment, amount or address does not match what was asked for. |
| MERCHANT_LIMIT_REACHED | 429 | The Free plan's monthly allowance is used. Paid plans are never refused: they are charged by usage. |
| RATE_LIMITED | 429 | Too many requests; wait and retry. |
| PROVIDER_AUTH_FAILED | 502 | See the operation that returned it. |
| PROVIDER_RESPONSE_INVALID | 502 | See the operation that returned it. |
| PROVIDER_UNAVAILABLE | 502 | The provider could not be reached; retry. |
| CONFIGURATION_ERROR | 503 | See the operation that returned it. |
| CRYPTO_BUSY | 503 | Every payable amount for that coin is taken by open payments; retry shortly. |
| RATE_UNAVAILABLE | 503 | No crypto price newer than ten minutes for that coin; retry shortly. |
| SETTLEMENT_ACCOUNT_UNUSABLE | 503 | Your connected account's credentials stopped working; reconnect it. The payment is refused, never paid to anyone else. |

## Security

- Secrets are shown once and stored only as hashes (merchant keys) or sealed with AES-GCM (provider credentials, buyer addresses); they are never logged or returned.
- Card numbers never touch WavePay: card entry is on the provider's hosted page, so WavePay stays out of PCI card-data scope.
- Settlement webhooks carry an HMAC signature (X-WavePay-Signature); licences are Ed25519-signed and verify offline.
- Every checkout takes an Idempotency-Key, so a retry returns the same checkout, never a second charge.
- Details and how to report a vulnerability: /security.html and /.well-known/security.txt.
