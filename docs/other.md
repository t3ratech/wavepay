> Routes that fit no other resource. Every everything else operation with parameters, responses and a working example.

API reference

# Everything else

Routes that fit no other resource.

Providers the public website may describe

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { view: 'all'\|'real', providers: [{ id, name, accepts, instruments, live }] } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/site/providers
```

Unsubscribe confirmation page

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | HTML confirmation page |
| 400 | Link altered or incomplete |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/mail/unsubscribe
```

Unsubscribe (or resubscribe)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | HTML result page |
| 400 | Link altered or incomplete |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/mail/unsubscribe
```

Import another product's registrants onto the mailing list

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { received, added, existing, invalid } |
| 400 | Invalid source or addresses |
| 401 | Not the global service key |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/mailing/import \
  -H 'x-wavepay-service-key: mk_live_…'
```

Which flagged capabilities are on for live money (test keys can use all)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { features: [{flag, live, test}] } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/features
```

Saved payment methods (never the token)

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/payment-methods \
  -H 'x-wavepay-service-key: mk_live_…'
```

PayPal disputes (operator key, flag: disputes)

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 403 | FEATURE_DISABLED (flag off for live money) or MERCHANT_SCOPE |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/paypal/disputes \
  -H 'x-wavepay-service-key: mk_live_…'
```

2Checkout IPN: signed order, renewal, refund and chargeback notification

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | Acknowledged |
| 202 | Acknowledged, nothing to do |
| 401 | PROVIDER_SIGNATURE_INVALID |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/ipn
```

2Checkout IPN endpoint liveness (2Checkout checks a URL with a GET when it is saved)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | {ok, endpoint} |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/ipn
```

2Checkout LCN: signed subscription change notification

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | Acknowledged |
| 202 | Acknowledged, nothing to do |
| 401 | PROVIDER_SIGNATURE_INVALID |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/lcn
```

2Checkout LCN endpoint liveness (2Checkout checks a URL with a GET when it is saved)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | {ok, endpoint} |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/twocheckout/lcn
```

Your usage invoices (month, amount, status)

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { invoices: [{ id, month, planId, payments, chargedPayments, amountMinor, status, createdAt, dueAt, paidAt }] } |
| 403 | a global key, which has no merchant |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/invoices \
  -H 'x-wavepay-service-key: mk_live_…'
```

Global key: invoice a month's usage now (default last month); dryRun lists who would be invoiced. Idempotent

Authentication: Global service key (operator only)

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `month` | string | no |
| `dryRun` | boolean | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { month, created: [{ merchantId, invoiceId, amountMinor, emailed }], skipped } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/invoices/run \
  -H 'x-wavepay-service-key: <global key>' \
  -H 'content-type: application/json' \
  -d '{"month":"…","dryRun":true}'
```

The emailed pay link for a usage invoice: needs its token (?t=), opens a checkout for the invoice amount and redirects to it

Authentication: None (public)

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |
| `provider` | path | yes | string |
| `t` | query | yes | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 302 | redirect to the provider's checkout |
| 401 | wrong token |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/invoices/<id>/pay/<provider>
```
