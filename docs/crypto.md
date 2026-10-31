> Eleven rails quoted in US dollars. The buyer sends the exact amount; the exchange deposit settles the payment.

API reference

# Crypto

Eleven rails quoted in US dollars. The buyer sends the exact amount; the exchange deposit settles the payment.

The crypto rails WavePay takes (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC) and which can be quoted right now

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { rails: [{ id, symbol, network, address, confirmations, quotable }] } |

#### Example

```
curl -sX GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/crypto/rails
```

Global key: store coin prices in US dollars (a checkout refuses a rate older than ten minutes)

Authentication: Global service key (operator only)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { ok, coins } |
| 400 | unknown coin or a price that is not positive |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/rates \
  -H 'x-wavepay-service-key: <global key>'
```

Global key: open crypto payments with rail, exact base-unit amount and address — what the watcher looks for

Authentication: Global service key (operator only)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | { payments: [{ reference, rail, baseUnits, address, createdAt }] } |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/pending \
  -H 'x-wavepay-service-key: <global key>'
```

Global key: settle a payment from a deposit the exchange credited. Re-verified: rail, address, exact amount, and the transaction never settled a payment before

Authentication: Global service key (operator only)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | the payment's status |
| 409 | TRANSFER_ALREADY_USED |
| 422 | PAYMENT_MISMATCH — not the deposit that was asked for |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/internal/crypto/settle \
  -H 'x-wavepay-service-key: <global key>'
```
