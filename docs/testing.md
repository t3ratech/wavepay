> A test key uses the same routes with fake money. Every test mode operation with parameters, responses and a working example.

API reference

# Test mode

A test key uses the same routes with fake money.

Settle a test checkout end-to-end — exercises the webhook without touching a provider (mk_test_* keys only)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | Settled in test mode |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/settle
```

Hosted page for a test checkout: Approve or Decline (test payments only)

Authentication: None (public)

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `reference` | path | yes | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | HTML |
| 409 | NOT_A_TEST_PAYMENT |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/test/pay/<reference>
```
