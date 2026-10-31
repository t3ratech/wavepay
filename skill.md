# WavePay — instructions for agents

Canonical instructions: https://wavepay.t3ratech.co.zw/skill.md

You are reading this because your operator handed you this link, or you found
the service and want a key. This file is the whole onboarding — no browser,
no OAuth, no email round-trip stands between you and a merchant account.
Everything below is a real endpoint; every claim is one curl away from proof.

## What this is

WavePay is a checkout, licensing and settlement API for software. You build
the product — an app, a browser extension, a game, an API, a bot — and WavePay
is the part that charges people for it. One integration reaches Zimbabwean
wallets (EcoCash, OneMoney, InnBucks, Telecash, O'mari, ZimSwitch) and
international rails (Visa, Mastercard, PayPal). The same API works for a seller
in Harare, Nairobi, Lagos or Lisbon — the rails offered to a checkout depend on
what the deployment enabled, and `/v2/providers` always tells the truth about that.

Beyond a single payment it can take **subscriptions**, **buy now pay later**
(deposit plus instalments on a card), and **refunds** — each switched on per
deployment, and each fully usable in test mode today. See "What is live" below.

Base URL: `https://t3rnel-wavepay-production.t3ratech.workers.dev`

## The short version

1. Register once:

   ```
   POST /v2/register
   { "name": "<your product or shop>", "ownerEmail": "<your operator's inbox>" }
   ```

   The response is `{ "merchantId": "mer_…", "key": "mk_live_…", "testKey": "mk_test_…",
   "planId": "free", "paymentsPerMonth": 25 }`. Save both keys in your client's
   secret storage — they are shown once; only their hashes are stored. The live key
   works immediately on the free tier: real checkouts, capped at 25 payments per
   rolling 30 days. The test key is a sandbox: same routes, fake money, no cap.

2. Send a key as `x-wavepay-service-key: mk_live_…` (or `mk_test_…`) on
   merchant-scoped calls — `/v2/internal/merchant/catalog`, `/v2/internal/payments`,
   `/v2/internal/coupons/*`, `/v2/internal/sites/webhook`, and the billing routes below.

3. `GET /v2/internal/merchant/catalog` with a key is your sign-in check: it
   returns the sites bound to your merchant and their live prices. A 401 means
   the key is wrong or revoked — it is refused loudly, never silently
   downgraded to anonymous.

4. Register once. A repeat `ownerEmail` gets `409 MERCHANT_ALREADY_REGISTERED`.
   Lost keys are minted by the operator after proof — your email on the
   merchant is the record, mail `support@t3ratech.co.zw` with the merchantId.

## Selling

```bash
# a checkout — the buyer gets a hosted page; wallets push straight to the phone
curl -sX POST .../v2/checkouts -H 'content-type: application/json' \
  -H 'idempotency-key: <stable key per order>' \
  -d '{"productId":"<your product>","planId":"<plan>","provider":"paynow","email":"buyer@x.com"}'
# → 201 { "checkoutUrl": "…", "reference": "pay_…", "amountMinor": 900, "currency": "USD" }

# watch it settle
curl -s ".../v2/checkouts/<reference>/status"
# → { "status": "pending" | "collected" | "expired" }

# or get settlements pushed: register a webhook on your site and every
# settled payment POSTs an HMAC-signed event to it.
```

For wallet-push checkouts without a browser (games, bots, terminals) use
`provider: "paynow-mobile"` plus the buyer's `phone` — PayNow pushes the
wallet prompt to the handset. Pass `"method"` (`ecocash`, `onemoney`, `innbucks`
or `omari`) to choose the wallet per checkout:

- **InnBucks** returns `action: { type: "innbucks_code", authorizationCode,
  authorizationExpires, deepLink }` — the buyer enters the code in the InnBucks app
  or follows the deep link.
- **O'mari** texts the buyer a one-time PIN and returns `action: { type: "omari_otp",
  otpReference }`. Submit what the buyer reads out with
  `POST /v2/internal/checkouts/otp { "reference", "otp" }`.

## Test mode — fake money, same routes

A `mk_test_…` key makes every checkout settle through a simulator. **It never
contacts PayNow, PayPal or any provider**, on any provider id, and never counts
against your cap. Choose the outcome with the inputs:

| Input | Outcome |
|---|---|
| phone `0771111111` (or `+263771111111`) | paid |
| phone `0772222222` | paid after ten seconds (pending until then) |
| phone `0773333333` | cancelled by the customer |
| phone `0774444444` | failed — insufficient balance |
| email `buyer+decline@x.com` / `+cancel` / `+delay` | failed / cancelled / paid after ten seconds |
| `+prepaid` on a card-token or BNPL checkout | the saved card is prepaid (BNPL refuses it) |
| `+tokdecline` | the saved card token is declined when charged later |

A test checkout's `checkoutUrl` is `/v2/test/pay/<reference>`, a page with Approve
and Decline buttons. `POST /v2/test/settle {"reference"}` settles one directly and
fires your webhook. `POST /v2/test/billing/run {"advanceDays": 31}` runs the billing
engine as if 31 days had passed, for your **test** subscriptions and instalment
plans only (run it twice: once to raise charges, once to reconcile them).

A test key can use every feature below even when it is not yet switched on for live
money. A live key and a test key can never touch each other's payments.

## What is live

Some capabilities are behind feature flags, switched on per deployment:

| Flag | Switches on |
|---|---|
| `refunds` | `POST /v2/internal/refunds` for live payments |
| `recurring` | subscriptions |
| `bnpl` | buy now, pay later |
| `card_tokens` | saving a PayNow card token for automatic charging (needs PayNow's approval too) |
| `paypal_billing` | PayPal subscriptions and vaulted-card charges |
| `disputes` | reading PayPal disputes (operator key) |

Ask the deployment:

```
GET /v2/features
# → { "features": [ { "flag": "refunds", "live": false, "test": true }, … ] }
```

A live key calling a feature that is off gets `403 FEATURE_DISABLED`. Never assume;
read the flag.

## Subscriptions

```bash
curl -sX POST .../v2/internal/subscriptions -H 'x-wavepay-service-key: mk_…' \
  -H 'content-type: application/json' -H 'idempotency-key: <stable key per subscription>' \
  -d '{"productId":"…","planId":"<a time-limited plan>","provider":"paynow","email":"…",
       "externalSubject":"<your customer id>","collection":"invoice_and_remind"}'
# → 201 { "id":"sub_…","status":"trialing","collection":"invoice_and_remind","checkout":{…} }
```

The plan must be time-limited with a price; the period is the plan's duration.
Hand the buyer `checkout.checkoutUrl`; when it settles the subscription is `active`.
List with `GET /v2/internal/subscriptions`; end with
`POST /v2/internal/subscriptions/cancel {"id","atPeriodEnd":true}`; pause and resume with `/pause` and `/resume`; change the renewal price with `/price {"id","amountMinor"}`.

How each period is collected — **this is the honest part**:

- `collection: "automatic"` charges a saved instrument with nobody present: a PayNow
  **card** token (Visa, Mastercard, ZimSwitch) once PayNow has approved tokenisation
  for the deployment, or a PayPal subscription. If no token comes back the
  subscription falls back to `invoice_and_remind` and records why.
- `collection: "invoice_and_remind"` (the default, and the only mode for mobile
  wallets) raises a fresh checkout each period and sends the buyer the link or the
  wallet prompt. **EcoCash, OneMoney, InnBucks and O'mari cannot be debited
  unattended** — each period needs the customer's PIN.
- A failed charge is retried after 1 day, then 2 days. Three failures → `past_due`;
  a week after the first failed attempt the subscription ends. Access follows what
  was actually paid.
- Retried requests are safe: creation needs an `Idempotency-Key` and every renewal
  is keyed by period and attempt.

## 2Checkout (Verifone)

`provider: "twocheckout"` is the international card rail run by Verifone's 2Checkout, which acts as
merchant of record: it takes the payment, handles tax and invoicing, and pays out to the merchant.
`GET /v2/providers` lists it on a deployment where it is enabled, and a test key can use it today.

- **One-time**: `POST /v2/checkouts` with `provider: "twocheckout"` returns a signed 2Checkout link
  (valid for 24 hours). The buyer pays on 2Checkout's page; settlement arrives as a signed IPN and is
  confirmed by REST, never by the redirect alone.
- **Subscriptions**: `POST /v2/internal/subscriptions` with `provider: "twocheckout"` and
  `collection: "automatic"` makes 2Checkout bill every renewal itself (the period and the renewal
  price are signed into the link). WavePay records each renewal from the signed notification, extends
  access by exactly one period, and never charges on top of 2Checkout's own charge.
- **Manage them**: `POST /v2/internal/subscriptions/cancel` (`atPeriodEnd` switches renewal off and
  keeps the paid access; otherwise the subscription is disabled now), `/pause` and `/resume`
  (access runs to the end of the paid period), and `/price` (what the next renewals cost).
- **Refunds**: `POST /v2/internal/refunds` refunds a completed order through 2Checkout, in part or in
  full, up to three months after the sale. A refund made in 2Checkout's own dashboard is recorded too.
- **Notifications**: 2Checkout calls `POST /v2/twocheckout/ipn` (orders, renewals, refunds,
  chargebacks) and `POST /v2/twocheckout/lcn` (subscription changes). Both are HMAC-SHA256 signed and
  answered with the signed read receipt 2Checkout requires; `GET` on either returns a liveness answer.
- **Test orders**: a deployment can place every 2Checkout link as a test order (dummy cards:
  `4111111111111111`, any expiry and CVV; the cardholder name picks the outcome, for example
  `John Doe` succeeds and `Mona Doe` fails for insufficient funds). A deployment that takes live
  orders ignores test-order notifications, so a dummy card can never grant a licence.

## Buy now, pay later

```bash
curl -sX POST .../v2/internal/bnpl -H 'x-wavepay-service-key: mk_…' \
  -H 'content-type: application/json' -H 'idempotency-key: <stable key per plan>' \
  -d '{"productId":"…","planId":"…","provider":"paynow","email":"…",
       "externalSubject":"<your customer id>","instalments":4}'
# → 201 { "id":"bnpl_…","totalMinor":500,"depositMinor":100,"instalmentMinor":100,… }
```

The buyer pays a deposit (default: an equal share; or set `depositMinor`), their
card is saved, and the balance is collected every `intervalDays` (default 30) **until
the total is paid** — a failed instalment is retried after 1 day, then 2, then every
3 days with no limit on attempts, until it clears or you cancel
(`POST /v2/internal/bnpl/cancel {"id"}`).

- **Cards only**: `provider` is `paynow` or `paypal`. Wallets and crypto cannot be
  debited unattended and are refused with `COLLECTION_NOT_SUPPORTED`.
- **Prepaid and virtual cards are refused** — by the issuer's reported funding type,
  by the operator's blocked BIN ranges (`BNPL_BLOCKED_BIN_PREFIXES`), or because the
  card cannot be screened at all. A refused card cancels the plan and withdraws
  access; the deposit is refunded automatically where the provider can refund
  (PayPal) and otherwise flagged `needsRefund` for you to return.
- **Access** is suspended after 14 days of missed payments and restored by the next
  successful one. Instalments settle money; they never extend the access the
  deposit granted.
- **WavePay collects; it does not lend.** You are paid as instalments arrive and
  carry the risk that a card stops working. Confirm that selling on instalments
  is permitted for your business before offering it.

## Refunds

```bash
curl -sX POST .../v2/internal/refunds -H 'x-wavepay-service-key: mk_…' \
  -H 'content-type: application/json' -H 'idempotency-key: <stable key per refund>' \
  -d '{"reference":"pay_…","amountMinor":250,"reason":"duplicate","revokeAccess":false}'
# → 201 { "id":"rfd_…","status":"completed","amountMinor":250,… }
```

Partial or full, never more than was paid in total, safe to retry. Works for
**PayPal** payments and for **test** payments. PayNow documents no refund API, so a
PayNow payment is refused with `REFUND_UNSUPPORTED` — it is never recorded as
refunded when it was not.

## MCP

`POST /mcp` — JSON-RPC 2.0 (Streamable HTTP). `initialize`, then `tools/list`:

- `wavepay_register` — the same mint as `POST /v2/register` (live key and test key)
- `wavepay_providers` — live rail catalog
- `wavepay_pricing` — `{ "productId": "…" }` → plans, prices, promotions
- `wavepay_checkout` — `{ "productId", "planId", "provider", "email", "phone?", "method?" }`
- `wavepay_checkout_status` — `{ "reference" }`
- `wavepay_catalog` — your merchant catalog; pass the key in
  `x-wavepay-service-key` on the HTTP request carrying the JSON-RPC frame
- `wavepay_features` — which flagged features are live
- `wavepay_subscribe`, `wavepay_bnpl`, `wavepay_refund` — the routes above, same keys,
  same errors (`idempotencyKey` is an argument)
- `wavepay_test_billing_run` — `{ "advanceDays" }`, test key only

## Tiers — priced by payments processed

| Tier | Price | Payments / 30 days | Sites | Coupons | Webhooks |
|------|-------|--------------------|-------|---------|----------|
| Free | $0 | 25 | 1 | — | ✓ |
| Basic | $9/mo | 250 | 3 | ✓ | ✓ |
| Pro | $29/mo | 2,500 | 10 | ✓ | ✓ |

Test-mode keys (`mk_test_…`) never count against the cap. Hitting the cap
refuses new checkouts with `MERCHANT_LIMIT_REACHED` (429) — never a silent
charge. Upgrading is a normal checkout on `productId: "wavepay"`,
`planId: "basic" | "pro"` — the settlement moves your merchant's `plan_id`.

## Rules that protect you

- Rate limits are per client and named: `429` with the bucket in the code.
  Register 5/day, checkout 10/min, poll 30/min.
- Idempotency is real: re-send the same `idempotency-key` and you get the
  same checkout back — never a double charge. Subscriptions, BNPL plans and
  refunds require one.
- Test mode is a mode on the key, not a different API: `mk_test_…` mints
  fake payments against the same routes.
- Licence keys, if your product uses them, are Ed25519-signed entitlements —
  your app verifies them offline with `/v2/licensing/public-key`.

## Status

Live probes: `https://wavepay.t3ratech.co.zw/status.html` — every check on
that page is a real HTTP request, run in the reader's browser.
