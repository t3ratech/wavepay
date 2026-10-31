# Accept Visa, Mastercard and PayPal payments from international…

> For buyers outside Zimbabwe, WavePay offers Visa and Mastercard through the hosted paynow checkout and PayPal through provider paypal, on the same checkout call — so…

PAYMENT RAIL

# Accept Visa, Mastercard and PayPal payments from international buyers

For buyers outside Zimbabwe, WavePay offers Visa and Mastercard through the hosted paynow checkout and PayPal through provider paypal, on the same checkout call — so one integration serves local and international customers.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## How it works

1. **Same registration.** The merchant key you already have works for every rail.
2. **Pick the provider.** provider "paypal" for PayPal (its checkout also takes Visa, Mastercard, American Express, Discover and JCB); "paynow" for the hosted checkout that carries Visa and Mastercard alongside the Zimbabwean rails.
3. **Settle in one ledger.** Local and international payments appear in the same ledger, so reconciliation is one feed.

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'Content-Type: application/json' -H 'Idempotency-Key: order-1001' \
  -d '{"productId":"your-product","planId":"pro","provider":"paypal","email":"buyer@example.com"}'
```

## Good to know

- A seller in Harare, Nairobi, Lagos or Lisbon uses the same API; the rails offered depend on what the deployment enabled.
- PayPal and PayNow fees are their own.

## Questions

## Can WavePay take international cards?

Yes — Visa and Mastercard are taken through the hosted paynow checkout and through PayPal, which also takes American Express, Discover and JCB.

## Do I need a second integration for PayPal?

No. It is the same POST /v2/checkouts call with provider "paypal".

## Keep going

- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [Accept OneMoney, InnBucks, Telecash, O'mari and ZimSwitch payments](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
