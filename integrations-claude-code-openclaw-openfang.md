# Integrate WavePay from Claude Code, OpenClaw, OpenFang or a…

> Any MCP client can use WavePay by adding the endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp; Claude Code adds it with one command, and a plain API…

USE CASE

# Integrate WavePay from Claude Code, OpenClaw, OpenFang or a plain API client

Any MCP client can use WavePay by adding the endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp; Claude Code adds it with one command, and a plain API client needs only POST /v2/register and POST /v2/checkouts.

Updated 2026-10-30 · by T3raTech · Free: 25 payments per 30 days, $0; Starter: 100 payments per 30 days for $15/month; Growth (recommended): 500 payments per 30 days for $49/month; Scale: 2,500 payments per 30 days for $149/month; Enterprise: custom volume from $499/month

## The flow

1. Claude Code: claude mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
2. OpenClaw, OpenFang and other MCP clients: register the same streamable-HTTP endpoint, https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp, in the client's MCP server settings.
3. Plain HTTP: curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register -H 'content-type: application/json' -d '{"name":"My app","ownerEmail":"you@example.com"}'
4. Then test: use the mk_test_ key from the response to create a checkout with fake money, and read the result from GET /v2/checkouts/<reference>/status.

## Questions

## Do I need an account first?

No. POST /v2/register creates the merchant and returns both keys.

## Is there a test mode?

Yes: the mk_test_ key uses the same routes and settles through a simulator.

## Keep going

- [How to charge for a browser extension](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html)
- [How to take payments in a game](https://wavepay.t3ratech.co.zw/payments-for-games.html)
- [Accept EcoCash payments in your software](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html)
- [FAQ](https://wavepay.t3ratech.co.zw/faq.html)
