> Recurring charges, buy-now-pay-later schedules and refunds. Every subscriptions, instalments and refunds operation with parameters, responses and a working example.

API reference

# Subscriptions, instalments and refunds

Recurring charges, buy-now-pay-later schedules and refunds.

Open a subscription (flag: recurring; test keys always)

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `Idempotency-Key` | header | yes | string |

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `productId` | string | yes |
| `planId` | string | yes |
| `provider` | paynow \| paynow-mobile \| paypal | yes |
| `email` | string | yes |
| `phone` | string | no |
| `externalSubject` | string | yes |
| `collection` | automatic \| invoice_and_remind | no |
| `method` | string | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"paynow","email":"…","phone":"…","externalSubject":"…","collection":"automatic","method":"…"}'
```

List this merchant's subscriptions

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions \
  -H 'x-wavepay-service-key: mk_live_…'
```

Cancel a subscription now or at period end

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `id` | string | yes |
| `atPeriodEnd` | boolean | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/cancel \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…","atPeriodEnd":true}'
```

Start buy-now-pay-later (flag: bnpl; test keys always)

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `Idempotency-Key` | header | yes | string |

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `productId` | string | yes |
| `planId` | string | yes |
| `provider` | paynow \| paypal | yes |
| `email` | string | yes |
| `externalSubject` | string | yes |
| `instalments` | integer | yes |
| `depositMinor` | integer | no |
| `intervalDays` | integer | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"productId":"…","planId":"…","provider":"paynow","email":"…","externalSubject":"…","instalments":0,"depositMinor":0,"intervalDays":0}'
```

List this merchant's BNPL plans

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl \
  -H 'x-wavepay-service-key: mk_live_…'
```

Cancel a BNPL plan

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `id` | string | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/bnpl/cancel \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

Refund a settled payment (flag: refunds; test keys always)

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `Idempotency-Key` | header | yes | string |

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `reference` | string | yes |
| `amountMinor` | integer | no |
| `reason` | string | no |
| `revokeAccess` | boolean | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/refunds \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"reference":"…","amountMinor":0,"reason":"…","revokeAccess":true}'
```

Run the billing engine as if advanceDays had passed (mk_test_ keys only)

Authentication: None (public)

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `advanceDays` | integer | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/billing/run \
  -H 'content-type: application/json' \
  -d '{"advanceDays":0}'
```

Pause a subscription: keeps paid access, stops the next renewal (also at 2Checkout)

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `id` | string | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/pause \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

Resume a paused subscription

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `id` | string | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/resume \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…"}'
```

Change what the next renewals cost (also at 2Checkout)

Authentication: Merchant key in x-wavepay-service-key

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `id` | string | yes |
| `amountMinor` | integer | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED or MERCHANT_SCOPE |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/subscriptions/price \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"id":"…","amountMinor":0}'
```
