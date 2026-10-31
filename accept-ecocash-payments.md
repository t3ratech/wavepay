> To accept EcoCash, register a WavePay merchant, then create a checkout with provider paynow for a hosted page or paynow-mobile with the buyer's phone number to push…

PAYMENT RAIL

# Accept EcoCash payments in your software

To accept EcoCash, register a WavePay merchant, then create a checkout with provider paynow for a hosted page or paynow-mobile with the buyer's phone number to push the EcoCash prompt straight to their handset.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $149/month; Enterprise: custom volume from $499/month

## How it works

1. **Register once.** POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register with a name and ownerEmail. The live key is shown once.
2. **Create the checkout.** Use provider paynow for a hosted checkout URL, or paynow-mobile plus phone for an express wallet push.
3. **Confirm settlement.** Poll GET /v2/checkouts/<reference>/status or receive a signed webhook; a licence key is emailed automatically if licensing is on.

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/checkouts \
  -H 'Content-Type: application/json' -H 'Idempotency-Key: order-1001' \
  -d '{"productId":"your-product","planId":"pro","provider":"paynow-mobile","email":"buyer@example.com","phone":"+2637XXXXXXXX"}'
```

## Good to know

- Express push (paynow-mobile) covers EcoCash, OneMoney, InnBucks and O'mari; the buyer approves on their handset with their PIN, and the wallet a deployment pushes to is part of its configuration.
- Which rails a deployment enables is reported by GET /v2/providers — check it before showing EcoCash in your UI.
- Provider fees are the provider's own; WavePay takes no percentage of your sales.

## Questions

## Do I need a separate EcoCash merchant integration?

No. WavePay's checkout reaches EcoCash through the same POST /v2/checkouts call you use for every other rail.

## Can I charge an EcoCash user without sending them to a web page?

Yes. Provider paynow-mobile with the buyer's phone number pushes the wallet prompt to the handset.

## Can an agent set EcoCash payments up?

Yes. skill.md and the MCP tool wavepay_checkout cover the full flow with no browser.

## Keep going

- [Accept OneMoney, InnBucks, Telecash, O'mari and ZimSwitch payments](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html)
- [Accept Visa, Mastercard and PayPal payments from international buyers](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
