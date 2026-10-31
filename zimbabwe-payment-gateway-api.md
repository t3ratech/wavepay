# Zimbabwe payment gateway API: EcoCash, OneMoney, Visa and…

> WavePay is a Zimbabwe payment gateway API: one POST /v2/checkouts reaches EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow, plus Visa…

USE CASE

# Zimbabwe payment gateway API: EcoCash, OneMoney, Visa and Mastercard in one integration

WavePay is a Zimbabwe payment gateway API: one POST /v2/checkouts reaches EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow, plus Visa, Mastercard and PayPal for international buyers, with signed settlement webhooks and one payments ledger.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## The flow

1. EcoCash payment API: provider paynow-mobile with the buyer's phone number pushes the EcoCash prompt to their handset; OneMoney, InnBucks and O'mari work the same way.
2. Cards and ZimSwitch: the hosted Paynow page takes Visa, Mastercard and ZimSwitch; international buyers can pay with PayPal.
3. Settle: a signed webhook, or poll GET /v2/checkouts/<reference>/status until collected.
4. Costs: a WavePay plan plus a small percentage that falls with volume (see /pricing.html); provider fees are paid to the provider at cost with no WavePay markup.

## Questions

## Is there an EcoCash payment API?

Yes. Through Paynow, provider paynow-mobile sends the EcoCash prompt to the buyer's phone; the same call covers OneMoney, InnBucks and O'mari.

## Which currency does it settle in?

Paynow checkouts are priced in US dollars. Which rails a deployment offers is reported live by GET /v2/providers.

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
