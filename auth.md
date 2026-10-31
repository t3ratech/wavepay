# Authentication and agent registration

T3rnel WavePay authenticates API calls with API keys. An agent registers itself and gets keys immediately: there is no OAuth authorization server, no email round-trip and no human approval.

## Register

```
POST https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/register
Content-Type: application/json

{ "name": "<your product>", "ownerEmail": "<an inbox you read>" }
```

The reply carries `merchantId`, a live key (`mk_live_…`) and a test key (`mk_test_…`). **Both are shown once.** Store them as secrets.

## Use the key

Send it on every merchant call:

```
x-wavepay-service-key: mk_test_…
```

Test keys use the simulator and move no money. Live keys take real payments within the limits of the merchant's plan.

## Limits

* Registration is limited to 5 per client per day.
* Checkout creation, polling and recovery are rate limited per client; a 429 carries the wait.
* Subscriptions, instalments, refunds and saved cards are feature flags: test keys can use all of them, live keys only those switched on for the deployment (`GET https://t3rnel-wavepay-production.t3ratech.workers.dev/v2/features`).

## Machine-readable

* Protected-resource metadata: https://wavepay.t3ratech.co.zw/.well-known/oauth-protected-resource
* OpenAPI: https://wavepay.t3ratech.co.zw/openapi.json
* MCP: https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp (card at https://wavepay.t3ratech.co.zw/.well-known/mcp/server-card.json)
* Skill: https://wavepay.t3ratech.co.zw/skill.md
