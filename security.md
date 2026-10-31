> How WavePay keeps API keys, provider credentials and buyer data safe: hashed and sealed secrets, no card numbers, signed webhooks, scoped keys, and how to report a…

TRUST

# How WavePay protects your keys, your buyers and your money

How WavePay keeps API keys, provider credentials and buyer data safe: hashed and sealed secrets, no card numbers, signed webhooks, scoped keys, and how to report a vulnerability.

Updated 2026-10-31 · TeraTech Solutions (Private) Limited

## The short version

### We never see a card number

Card entry happens on the provider's own hosted page (Paynow, PayPal, 2Checkout). WavePay does not receive, store or transmit card numbers, so a breach of WavePay cannot leak them.

### Secrets are shown once

Your API keys are shown to you once and kept only as one-way hashes. We cannot read them back, and neither can anyone who copies our database.

### Your provider keys are sealed

If you connect your own PayPal account, its credentials are checked with PayPal and then encrypted at rest with AES-GCM under a key kept separate from the data. They are never logged and never returned by any route.

### Your money goes to you

With your own provider account connected, the provider pays you directly and WavePay never holds your funds.

## Keys and access

- **Scoped keys.** A merchant key can touch only that merchant's own sites, plans and payments. A test key settles with fake money and cannot connect a real provider account.
- **Revocable.** A key can be revoked at any time; a revoked key stops working at once.
- **Environment separation.** A live deployment refuses sandbox provider credentials and the reverse, so a test key can never be mistaken for a live account.
- **Constant-time checks.** Secrets are compared in constant time, and operator credentials are separate from merchant credentials.

## Payments are checked, not trusted

- **Verified with the provider.** A payment is settled only after WavePay has read it from the provider and the amount, currency, reference and plan match what was asked for.
- **No double settlement.** Each provider event or transaction can settle a payment once; a replay is refused. Checkouts take an Idempotency-Key, so a retry returns the same checkout and never charges twice.
- **Signed webhooks.** Settlement webhooks carry an HMAC signature you verify with your own secret. Licences are signed with Ed25519 and your software verifies them offline.
- **A failure never pays the wrong person.** If a connected account's credentials stop working, the payment is refused. It is never redirected to another account.

## Data we hold and how

- Buyer email addresses and phone numbers are encrypted at rest and also kept as keyed hashes for lookups, so an address can be matched without being stored in the clear.
- Traffic is encrypted in transit (TLS) and the service runs on Cloudflare's network with its database in the same platform.
- Requests are rate limited per client to blunt abuse, and routes that take no secret are limited in what they reveal.
- We keep what the service needs to settle, reconcile and support payments, and what the law requires us to keep as financial records. See the [privacy policy](https://wavepay.t3ratech.co.zw/privacy.html).

## What we ask of you

- Keep your live key out of client-side code and source control; use the test key while building.
- Verify the webhook signature on every delivery, and treat a status read from our API, not a redirect, as the truth about a payment.
- Connect your own provider account with its own limited credentials where the provider offers them, and tell us if a key may have leaked so we can revoke it.

## Report a vulnerability

Email [security@t3ratech.co.zw](mailto:security@t3ratech.co.zw). Our [security.txt](https://wavepay.t3ratech.co.zw/.well-known/security.txt) has the details. Please report privately, give us a reasonable time to fix before you publish, and do not access other people's data or disrupt the service. We acknowledge reports promptly, keep you informed, and credit researchers who want credit.

We do not publish internal architecture, limits or hostnames: that detail helps attackers and does not help you decide whether to trust us. If you need more for a security review, [ask us](mailto:support@t3ratech.co.zw) and we will answer under confidentiality.

## If something goes wrong

If we find that merchant or buyer data was exposed, we tell affected merchants without undue delay, say what happened and what to do, and fix the cause. Subscribers to [status](https://wavepay.t3ratech.co.zw/status.html) see service incidents as they happen.
