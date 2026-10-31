> The same API as MCP tools, plus the machine-readable files agents read. Every mcp and agents operation with parameters, responses and a working example.

API reference

# MCP and agents

The same API as MCP tools, plus the machine-readable files agents read.

MCP endpoint — JSON-RPC 2.0 over HTTP. Tools: wavepay_register, wavepay_providers, wavepay_pricing, wavepay_checkout, wavepay_checkout_status, wavepay_features, wavepay_subscribe, wavepay_bnpl, wavepay_refund, wavepay_test_billing_run, wavepay_catalog

Authentication: None (public)

#### Responses

| Status | Meaning |
| --- | --- |
| 200 | JSON-RPC response |

#### Example

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```
