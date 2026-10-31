> Charge for a bot with WavePay by pushing a wallet prompt to the user's phone with paynow-mobile, so the payment happens inside the chat flow without a browser, then…

USE CASE

# How to charge for a bot

Charge for a bot with WavePay by pushing a wallet prompt to the user's phone with paynow-mobile, so the payment happens inside the chat flow without a browser, then unlock features when status reads collected.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $499/month

## The flow

1. Collect the phone number in chat, then POST /v2/checkouts with paynow-mobile.
2. Poll GET /v2/checkouts/<reference>/status until collected, or use a webhook.
3. Unlock the user's features and store the reference for support.
4. Agents can do all of it through POST /mcp — wavepay_checkout and wavepay_checkout_status.

## Questions

## Can a bot take payment without a web page?

Yes, with paynow-mobile and the buyer's phone number.

## Can the bot's own agent run the integration?

Yes. The MCP tools expose registration, pricing, checkout and status.

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
