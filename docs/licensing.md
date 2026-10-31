> Signed entitlements that your software verifies offline. Every licences operation with parameters, responses and a working example.

API reference

# Licences

Signed entitlements that your software verifies offline.

Sell and email a licence key

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 201 | Checkout created; key emailed on settle |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/checkout
```

Activate a licence key on a device

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { entitlement } — signed, verifiable offline |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/activate
```

Mail the buyer a fresh licence key

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | Recovery email sent |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/licensing/recover
```
