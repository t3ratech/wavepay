> In a game, charge a player without leaving the session by using provider paynow-mobile with their phone number — the EcoCash, OneMoney, InnBucks or O'mari prompt is…

USE CASE

# How to take payments in a game

In a game, charge a player without leaving the session by using provider paynow-mobile with their phone number — the EcoCash, OneMoney, InnBucks or O'mari prompt is pushed to their handset and your game polls checkout status until it reads collected.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Basic: 250 payments per 30 days for $9/month; Pro: 2,500 payments per 30 days for $29/month

## The flow

1. Create: POST /v2/checkouts with provider paynow-mobile and the player's phone (EcoCash, OneMoney or InnBucks).
2. Wait: poll GET /v2/checkouts/<reference>/status — pending, collected or expired.
3. Grant: unlock the item when the status reads collected, or on your signed webhook.
4. Retry safely: reuse the same Idempotency-Key so a network retry cannot charge twice.

## Questions

## Does the player need to open a web page?

No. With paynow-mobile the prompt arrives on their handset, for EcoCash, OneMoney, InnBucks and O'mari wallets.

## How do I avoid double-charging on a retry?

Send the same Idempotency-Key; the same checkout is returned.

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to charge for an app or SaaS](https://wavepay.t3ratech.co.zw/payments-for-apps.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
