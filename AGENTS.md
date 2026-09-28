# AGENTS.md — WavePay

> What this service is, and the rules for operating it autonomously. Canonical
> machine onboarding lives at https://wavepay.t3ratech.co.zw/skill.md.

## What this is

WavePay is a checkout, licensing and settlement API for software. One
integration reaches Zimbabwean wallet rails (EcoCash, OneMoney, InnBucks,
Telecash, O'mari, ZimSwitch) and international rails (Visa, Mastercard,
PayPal). A merchant registers itself with one POST — no browser, no OAuth
dance, no email round-trip.

This site is the human surface; the API is at
`https://t3rnel-wavepay-production.t3ratech.workers.dev`.

## Interfaces (in preference order)

| Interface | Where | Auth |
|---|---|---|
| MCP (Streamable HTTP) | `POST https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp` | none for `wavepay_register`; key for the rest |
| REST | `https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/*` | `x-wavepay-service-key: mk_live_…` |
| OpenAPI | `https://wavepay.t3ratech.co.zw/openapi.json` | — |
| Agent card | `https://wavepay.t3ratech.co.zw/.well-known/agent-card.json` | — |

Register a merchant without human help:

```
POST /v2/register { "name": "<your product>", "ownerEmail": "<operator inbox>" }
→ { "merchantId": "mer_…", "key": "mk_live_…", "planId": "free" }
```

## Permissions

- Allowed: every public read (`/v2/providers`, `/v2/pricing`,
  `/v2/checkouts`, status polls), `wavepay_register` unsigned, every
  merchant-scoped call once keyed.
- Never: create checkouts against sites not bound to your merchant
  (`MERCHANT_SCOPE`), retry `409 MERCHANT_ALREADY_REGISTERED` to force a new
  account, or poll status faster than your checkout's lifecycle needs —
  `GET /v2/checkouts/:ref/status` is cheap; abuse is not free.

## Sequences that matter

- Before writing, call `GET /v2/internal/merchant/catalog` — it is the
  sign-in check and it returns the live prices you may sell.
- Webhooks: verify `x-wavepay-signature` as `hex_hmac_sha256(secret,
  t.raw_body)` and enforce the 300s replay window — the spec is in
  `docs.html` and `openapi.json`.
- `mk_test_*` keys settle through `POST /v2/test/settle` without touching a
  provider — use them for every integration test, never live keys.

## Identity and errors

- Errors are JSON `{ error: "<CODE>", message: "<what happened>" }` and carry
  the right status — 401 bad key, 403 scope, 409 duplicate, 422 invalid input.
- A bad key is refused loudly, never silently downgraded to anonymous.
- Payment references (`pay_…`) are your reconciliation handles — persist them.

## What we will never do

Hold card numbers (providers do), auto-extend a quota after settlement
fails, or log a plaintext key — keys are SHA-256 stored and shown once.
