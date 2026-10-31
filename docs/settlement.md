> Connect your own provider account so the provider pays you directly. WavePay never holds your money in this mode.

API reference

# Where the money lands

Connect your own provider account so the provider pays you directly. WavePay never holds your money in this mode.

The provider accounts your key has connected (masked); the secret is never returned

Authentication: Merchant key in x-wavepay-service-key

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { accounts: [{ provider, mode: 'own-keys', environment, account, status, connectedAt, verifiedAt }] } |
| 403 | a global key, which has no merchant |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement \
  -H 'x-wavepay-service-key: mk_live_…'
```

Connect your own provider account so the money lands with you (own keys). Credentials are checked with the provider, sealed, and never returned

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `provider` | path | yes | string |

#### Body (JSON)

| Field | Type | Required |
| --- | --- | --- |
| `clientId` | string | yes |
| `clientSecret` | string | yes |
| `environment` | sandbox \| production | no |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { account: { provider, mode, environment, account, status, connectedAt, verifiedAt } } |
| 400 | SETTLEMENT_PROVIDER_UNSUPPORTED or INVALID_REQUEST |
| 403 | LIVE_KEY_REQUIRED (a test key cannot hold an account) or a global key |
| 422 | CREDENTIALS_REJECTED (the provider refused them) or ENVIRONMENT_MISMATCH (sandbox keys on a production Worker, or the reverse) |

#### Example

```
curl -sX PUT https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement/<provider> \
  -H 'x-wavepay-service-key: mk_live_…' \
  -H 'content-type: application/json' \
  -d '{"clientId":"…","clientSecret":"…","environment":"sandbox"}'
```

Disconnect the account; later payments settle through the deployment's account again

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `provider` | path | yes | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { disconnected: boolean } |

#### Example

```
curl -sX DELETE https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/settlement/<provider> \
  -H 'x-wavepay-service-key: mk_live_…'
```
