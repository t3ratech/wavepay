# Buy now, pay later for software: deposits and instalments on…

> WavePay BNPL takes a deposit at checkout and collects the rest from the customer's card on a schedule, retrying with a back-off until the full price is paid; it is…

HOW IT WORKS

# Buy now, pay later for software: deposits and instalments on cards

WavePay BNPL takes a deposit at checkout and collects the rest from the customer's card on a schedule, retrying with a back-off until the full price is paid; it is limited to non-prepaid cards, and WavePay collects but does not lend.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## How a plan runs

POST /v2/internal/bnpl with the number of instalments. The customer pays the deposit and their card is saved. Each interval the next instalment is charged; the last one is only what remains. When paid equals the price the plan completes and stops charging.

## Collection never gives up

A failed instalment is retried after one day, then two, then every three days, with no limit on attempts, until the total is collected or the merchant cancels the plan.

## Which cards

Cards only: provider paynow (Visa, Mastercard, ZimSwitch) or paypal (a vaulted card). Prepaid cards and virtual cards, including mobile-money virtual cards, are refused because they can be emptied or closed after delivery. A card is refused if the issuer reports it prepaid, if its first six digits fall in a range the operator has blocked, or if it cannot be screened at all.

## A refused card

The plan is cancelled and access withdrawn. The deposit is refunded automatically where the provider has a refund API (PayPal); for Paynow, which documents none, the plan's audit record is marked needsRefund so the merchant returns it.

## Access while overdue

Access is suspended after the grace period of missed payments (14 days by default) and restored by the next successful payment. Instalments settle money; they do not extend the access the deposit granted.

## Who carries the risk

The merchant. WavePay is a collection schedule, not a lender: it does not advance the merchant the balance. A card that stops working leaves the instalments unpaid, which is why access follows payment. Confirm that selling on instalments is permitted for your business and customers before you offer it.

## Keep going

- [2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications](https://wavepay.t3ratech.co.zw/guide-2checkout.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
