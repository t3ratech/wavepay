> Register, receive keys, bind products to sites, and read what a key can sell. Every merchants, sites and keys operation with parameters, responses and a working example.

API reference

# Merchants, sites and keys

Register, receive keys, bind products to sites, and read what a key can sell.

Register a merchant account — no key required — returns a live key and a test key

Authentication: None (public)

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `ownerEmail` | string | yes |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { merchantId, key: mk_live_… shown once, planId, paymentsPerMonth } |
| 409 | MERCHANT_ALREADY_REGISTERED |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register \
  -H 'content-type: application/json' \
  -d '{"name":"…","ownerEmail":"…"}'
```

Everything this key can sell — sites, plans, live prices. The sign-in check.

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { merchantId, sites: [{ siteId, products, plans }], key: { mode, planId } } |
| 401 | key missing, wrong, or revoked — refused loudly |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/catalog \
  -H 'x-wavepay-service-key: mk_live_…'
```

Set or rotate a site's settlement webhook URL+secret (secret shown once)

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { webhookUrl, secret } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/sites/webhook \
  -H 'x-wavepay-service-key: mk_live_…'
```
