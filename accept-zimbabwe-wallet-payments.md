# Accept OneMoney, InnBucks, Telecash, O'mari and ZimSwitch…

> WavePay reaches OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through the same checkout call as EcoCash — one integration, with GET /v2/providers reporting which…

PAYMENT RAIL

# Accept OneMoney, InnBucks, Telecash, O'mari and ZimSwitch payments

WavePay reaches OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through the same checkout call as EcoCash — one integration, with GET /v2/providers reporting which are live on your deployment. OneMoney, InnBucks and O'mari also support wallet push.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## How it works

1. **Ask what is live.** GET /v2/providers returns the rails the deployment has enabled — build your payment picker from it, not from a hard-coded list.
2. **Create the checkout.** POST /v2/checkouts with provider paynow (hosted, all rails) or paynow-mobile (wallet push, EcoCash/OneMoney/InnBucks/O'mari only).
3. **Reconcile.** Every settlement lands in the payments ledger; drain it with POST /v2/internal/payments using since/limit cursors.

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'Content-Type: application/json' -H 'Idempotency-Key: order-1001' \
  -d '{"productId":"your-product","planId":"pro","provider":"paynow","email":"buyer@example.com"}'
```

| Rail | Type | How a buyer pays |
| --- | --- | --- |
| EcoCash | Mobile wallet | Hosted checkout, or wallet push with paynow-mobile |
| OneMoney | Mobile wallet | Hosted checkout, or wallet push with paynow-mobile |
| InnBucks | Mobile wallet | Hosted checkout, or wallet push with paynow-mobile |
| Telecash | Mobile wallet | Hosted checkout |
| O'mari | Mobile wallet | Hosted checkout, or wallet push with paynow-mobile |
| ZimSwitch | Local debit-card network | Hosted checkout |

## Good to know

- One integration covers every rail a deployment enables.
- Idempotency-Key makes a retried request return the same checkout instead of a second one.

## Questions

## Which Zimbabwean payment methods does WavePay support?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch.

## How do I know which ones are enabled for me?

GET /v2/providers lists the live rails for the deployment you are calling.

## Keep going

- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [Accept Visa, Mastercard and PayPal payments from international buyers](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
