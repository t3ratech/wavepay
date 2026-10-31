# Crypto payment API: Bitcoin, Ethereum, Solana, BNB, Litecoin…

> WavePay takes crypto on eleven rails — Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT on three networks and USDC — by quoting the US-dollar price at a…

USE CASE

# Crypto payment API: Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT and USDC

WavePay takes crypto on eleven rails — Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT on three networks and USDC — by quoting the US-dollar price at a fresh rate, showing the exact amount and address, and settling the payment when the exchange credits the deposit.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## The flow

1. Pay: POST /v2/checkouts with provider crypto and method set to a rail id from GET /v2/crypto/rails.
2. The exact amount, down to the last digit, is how a deposit is matched to one payment, so no memo or tag is needed.
3. The rate is at most ten minutes old when quoted; a quote stays payable for six hours.
4. Today these are T3raTech's own addresses for T3raTech's own sales; merchant-owned wallets are a separate, later settlement type.

## Questions

## Why is XRP not offered?

XRP needs a destination tag, and a transfer without one can be lost, so it is left out until it can be handled safely.

## Who holds the crypto?

For T3raTech's own sales, T3raTech's exchange account. WavePay does not hold crypto for other merchants.

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
