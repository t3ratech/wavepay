# 2Checkout (Verifone) with WavePay: checkout, subscriptions…

> WavePay sells through 2Checkout as provider twocheckout: a signed buy-link for one-time purchases, 2Checkout-billed subscriptions with every renewal recorded from a…

HOW IT WORKS

# 2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications

WavePay sells through 2Checkout as provider twocheckout: a signed buy-link for one-time purchases, 2Checkout-billed subscriptions with every renewal recorded from a signed notification, refunds through its REST API, and HMAC-signed IPN and LCN webhooks, with 2Checkout acting as merchant of record for tax and invoicing.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $149/month; Enterprise: custom volume from $499/month

## One-time checkout

POST /v2/checkouts with provider twocheckout returns a link signed with your buy-link secret word. The price, currency, reference and a 24-hour expiry are inside the signature, so none can be edited in the URL. Settlement is proven by the signed IPN or the REST order lookup, never by the redirect alone.

## Subscriptions billed by 2Checkout

Create a subscription with collection=automatic and 2Checkout bills every renewal itself: the period and renewal price travel in the signed link. WavePay extends access by exactly one period when the renewal notification arrives, ignores a resent notification, and never raises its own charge on top. A late renewal marks the subscription past due after three days and ends it after ten.

## Cancel, pause and change the price

Cancel now disables the subscription at 2Checkout; cancel at period end switches renewal off and keeps the paid access. Pause stops the next renewal until you resume it. Price changes what the next renewals cost. Each is applied at 2Checkout first, then recorded here.

## Refunds and chargebacks

POST /v2/internal/refunds refunds a completed order through 2Checkout's REST API, in part or in full, within three months. A refund issued in the 2Checkout dashboard arrives as a notification and is recorded once. A chargeback is recorded for you to see; it never silently refunds or revokes.

## Signed notifications

2Checkout posts IPN (orders, renewals, refunds, reversals, chargebacks) and LCN (subscription changes). Both are checked against an HMAC-SHA256 of the received values before anything happens, and answered with the signed receipt 2Checkout waits for. A notification for an order WavePay did not create is acknowledged and ignored.

## Test orders

Staging places 2Checkout links as test orders: use card 4111111111111111 with any expiry and CVV, and choose the outcome by cardholder name (John Doe succeeds; Mona Doe fails for insufficient funds). A deployment that takes live orders ignores test-order notifications, so a dummy card can never grant a licence.

## Switching it on

The 2Checkout rail is a configuration switch, not a code change: a deployment lists twocheckout in its enabled providers once the account is approved, and GET /v2/providers then offers it to buyers.

## Keep going

- [Testing WavePay with fake money: test keys, simulated outcomes and time travel](https://wavepay.t3ratech.co.zw/guide-test-mode.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
