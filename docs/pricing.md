> WavePay's own price list and your usage meter. The same data is at /pricing.json. Every pricing and usage operation with parameters, responses and a working example.

API reference

# Pricing and usage

WavePay's own price list and your usage meter. The same data is at /pricing.json.

WavePay's own price list: plans, the usage schedule and the modes (same data as /pricing.json)

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { currency, plans: [{ id, name, monthlyMinor, annualMinor, includedPayments, sites }], usage: { tiers }, providerFees, modes } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/price-list
```

This month's usage meter for your key: payments, included allowance, usage fee by tier, total due

Authentication: Merchant key in x-wavepay-service-key

#### Parameters

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `month` | query | no | string |

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { month, plan, payments, includedPayments, nonUsdPayments, usage: { feeMinor, chargedPayments, byTier }, totalDueMinor } |
| 403 | a global key, which has no merchant |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/merchant/usage \
  -H 'x-wavepay-service-key: mk_live_…'
```
