# Multi-currency payment gateway: cards, PayPal and crypto behind…

> WavePay is a multi-currency payment gateway API: Visa and Mastercard and PayPal for international buyers, Paynow for Zimbabwean wallets in US dollars, and eleven…

USE CASE

# Multi-currency payment gateway: cards, PayPal and crypto behind one API

WavePay is a multi-currency payment gateway API: Visa and Mastercard and PayPal for international buyers, Paynow for Zimbabwean wallets in US dollars, and eleven crypto rails quoted in US dollars, all through one checkout call and one ledger.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Visa and Mastercard payment integration: the hosted checkout takes cards through PayPal and Paynow without your servers touching a card number.
2. PayPal integration API: PayPal orders are created and captured for you; a merchant can connect their own PayPal account so the money lands with them.
3. Crypto: Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT and USDC, quoted in US dollars at a rate at most ten minutes old.
4. One ledger and one webhook format whichever rail the buyer chose.

## Questions

## Does the money go to me or to WavePay?

With own keys you connect your own PayPal account and PayPal pays you directly; WavePay never holds it. A mode where WavePay collects and pays out needs a payment service provider licence and is not offered yet.

## Which currencies are supported?

PayPal takes the currencies your PayPal account supports; Paynow and crypto are quoted in US dollars. GET /v2/providers lists what is live.

## On this page

## At a glance

- Free to start: 25 payments a month
- A test key with fake money
- Provider fees paid at cost, no markup
- Your own account: the money lands with you

## Start in one request

Register, get a live key and a test key, and take a test payment in minutes.

[See plans](https://wavepay.t3ratech.co.zw/pricing.html)

## Share this page

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
