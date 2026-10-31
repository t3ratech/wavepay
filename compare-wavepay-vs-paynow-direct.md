> Paynow is the Zimbabwean gateway WavePay itself uses for EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch; integrate Paynow directly if you need only…

COMPARE

# WavePay vs integrating Paynow directly

Paynow is the Zimbabwean gateway WavePay itself uses for EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch; integrate Paynow directly if you need only Paynow, and use WavePay when you also want PayPal, crypto, subscriptions, licensing and one ledger across rails.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $149/month; Enterprise: custom volume from $499/month

|  | Paynow directly | WavePay |
| --- | --- | --- |
| Zimbabwean wallets and ZimSwitch | Yes, it is the gateway | Yes, through Paynow: the same wallets, one checkout call |
| Other rails | Not its job | PayPal, crypto on eleven rails, 2Checkout where enabled |
| Fees on a payment | Paynow's own fees, published on its fees page | The same provider fees, paid at cost with no WavePay markup, plus a WavePay plan and a small falling percentage after the included payments |
| Subscriptions and instalments | You build the schedule and the retries | Built in where the rail allows recurring charges |
| Licence keys | You build them | Built in: signed entitlements verified offline |
| Reconciliation | Paynow's reports | One payments ledger across every rail |
| Agent onboarding | Merchant sign-up with Paynow | POST /v2/register or skill.md (you still connect a Paynow account for Paynow payments) |

## Questions

## Does WavePay replace Paynow?

No. WavePay sits in front of Paynow for Zimbabwean wallets and cards; Paynow still takes the payment and charges its own fees.

## When should I use Paynow directly?

When Paynow is your only rail, you are happy to build reconciliation and licensing yourself, and you want no layer between you and the provider.

## Keep going

- [All guides and comparisons](https://wavepay.t3ratech.co.zw/learn.html)
- [Pricing](https://wavepay.t3ratech.co.zw/pricing.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
