# Payment infrastructure for AI agents: MCP payment tools and a…

> WavePay is payment infrastructure for AI agents: skill.md is the whole onboarding, POST /mcp exposes registration, providers, pricing, checkout and status as MCP…

USE CASE

# Payment infrastructure for AI agents: MCP payment tools and a one-file onboarding

WavePay is payment infrastructure for AI agents: skill.md is the whole onboarding, POST /mcp exposes registration, providers, pricing, checkout and status as MCP tools, and an agent can register, check out and reconcile with no browser, OAuth flow or email round-trip.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth: 500 payments per 30 days for $49/month

## The flow

1. MCP payment tools: wavepay_register, wavepay_providers, wavepay_pricing, wavepay_checkout, wavepay_checkout_status, wavepay_catalog at POST /mcp.
2. Machine-readable: /llms.txt, /llms-full.txt, /skill.md, /openapi.json, /pricing.json and /.well-known/ai-catalog.json.
3. No humans in the loop: registration returns a live key and a test key in one call; the test key runs the whole flow with fake money.
4. Agents can pay too: crypto rails (GET /v2/crypto/rails) need no account, only a wallet.

## Questions

## Can an agent register by itself?

Yes. POST /v2/register with a name and an email returns the keys in one response.

## Where is the machine-readable price list?

/pricing.json, also served live at GET /v2/price-list.

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
