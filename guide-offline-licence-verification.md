> WavePay signs each licence entitlement with an Ed25519 private key it never shares, so your app verifies the signature offline against the public key at GET…

HOW IT WORKS

# How offline licence verification works with Ed25519 entitlements

WavePay signs each licence entitlement with an Ed25519 private key it never shares, so your app verifies the signature offline against the public key at GET /v2/licensing/public-key and never needs to call a server to know a licence is genuine.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## The flow

A paid checkout emails a licence key. The device calls POST /v2/licensing/activate with the key and a deviceId and receives a signed entitlement. The app stores it and checks the signature locally.

## Why Ed25519

Verification needs only the public key, which is safe to embed in the app. Forging an entitlement requires the private key, which stays with the issuer.

## What this buys you

An app that works offline, no per-launch licence call to fail, and a trust root you can pin. When a customer loses a key, POST /v2/licensing/recover mails a fresh one.

## What it does not do

An offline check cannot know a licence was revoked after the entitlement was issued; design entitlement lifetimes to match how quickly you need revocation to bite.

## Keep going

- [2Checkout (Verifone) with WavePay: checkout, subscriptions, refunds and notifications](https://wavepay.t3ratech.co.zw/guide-2checkout.html)
- [API reference](https://wavepay.t3ratech.co.zw/docs.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
