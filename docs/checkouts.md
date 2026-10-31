> Create a checkout for a plan, send the buyer to the hosted page (or push a wallet prompt), and read the result.

API reference

# Checkouts and payments

Create a checkout for a plan, send the buyer to the hosted page (or push a wallet prompt), and read the result.

Enabled payment rails on this deployment

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { providers: [{ id, label, methods }] } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/providers
```

Plans, prices and promotions for a product

Authentication: None (public)

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `productId` | query | yes | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { plans: [{ planId, priceMinor, currency, promotion }] } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/pricing
```

Create a buyer-facing hosted checkout

Authentication: None (public)

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `productId` | string | yes |
| `planId` | string | yes |
| `provider` | string | no |
| `email` | string | no |
| `amountMinor` | integer | no |
| `currency` | string | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | { reference: pay_…, checkoutUrl, provider, amountMinor, currency, test } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"…","email":"…","amountMinor":0,"currency":"…"}'
```

Poll a checkout's settlement status

Authentication: None (public)

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `reference` | path | yes | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { reference, state, amountMinor, currency } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts/<reference>/status
```

Create a server-side checkout (merchant-scoped)

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `idempotency-key` | header | yes | string |

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `productId` | string | yes |
| `planId` | string | yes |
| `provider` | string | yes |
| `email` | string | no |
| `externalSubject` | string | no |
| `amountMinor` | integer | no |
| `currency` | string | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | { reference, checkoutUrl, provider, amountMinor, currency, test } |
| 403 | MERCHANT_SCOPE — product not bound to this merchant |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"…","email":"…","externalSubject":"…","amountMinor":0,"currency":"…"}'
```

Poll a checkout's status (merchant)

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { reference, state } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts/status \
  -H 'x-wavepay-service-key: mk_live_…'
```

Reconciliation ledger — idempotent drain with since/limit cursors

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { payments: [{ reference, amountMinor, currency, settledAt }], cursor } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/payments \
  -H 'x-wavepay-service-key: mk_live_…'
```

Complete an O'mari payment with the buyer's one-time PIN

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `reference` | string | yes |
| `otp` | string | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/checkouts/otp \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"reference":"…","otp":"…"}'
```
