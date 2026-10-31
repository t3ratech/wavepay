# Connect WavePay to Claude Code, Codex CLI, Gemini CLI…

> Add WavePay's Model Context Protocol (MCP) server to Claude Code, OpenAI Codex CLI, Gemini CLI, Qwen Code, Grok Build, Devin CLI, OpenClaw, DeepSeek, OpenCode, Goose…

INTEGRATIONS

# Connect WavePay to Claude Code, Codex CLI, Gemini CLI, OpenClaw, Cursor, Windsurf and more

Add WavePay's Model Context Protocol (MCP) server to Claude Code, OpenAI Codex CLI, Gemini CLI, Qwen Code, Grok Build, Devin CLI, OpenClaw, DeepSeek, OpenCode, Goose, OpenHands, jcode, Cursor, Windsurf, Zed, Cline, Kilo Code and any other MCP client with one command or config block.

[Start free](https://wavepay.t3ratech.co.zw/pricing.html)[API reference](https://wavepay.t3ratech.co.zw/docs/index.html)

Updated 2026-10-31 · every command below comes from that client's own documentation or a published guide; the badge says which. Client behaviour changes between versions, so run the client's `--help` if a flag is rejected.

## The endpoint

One streamable-HTTP MCP server for registration, providers, pricing, checkout, status and the catalogue: `https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp`. It speaks JSON-RPC 2.0 (`tools/list`, `tools/call`) and needs no OAuth: an agent registers itself with `wavepay_register` and receives a live key and a test key.

```
curl -sX POST https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## Coding agents (CLI)

### Claude Code Vendor docs

```
claude mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

[Source](https://docs.claude.com/en/docs/claude-code/mcp)

### OpenAI Codex CLI Vendor docs

```
codex mcp add wavepay --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

```
# or in ~/.codex/config.toml
[mcp_servers.wavepay]
url = "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp"
```

[Source](https://developers.openai.com/codex/mcp)

### Gemini CLI Vendor or community guide

```
gemini mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

[Source](https://docs.trunk.io/use-mcp-server/configuration/gemini-cli)

### Qwen Code Vendor docs

```
qwen mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

[Source](https://qwenlm.github.io/qwen-code-docs/en/developers/tools/mcp-server/)

### Grok Build (xAI grok CLI, grok bot) Vendor docs

```
grok mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

```
grok mcp doctor wavepay
```

[Source](https://docs.x.ai/build/features/mcp-servers)

### Devin CLI Vendor docs

```
devin mcp add wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

[Source](https://docs.devin.ai/cli/extensibility/mcp/configuration)

### OpenClaw Vendor docs

```
openclaw mcp add wavepay --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp --transport streamable-http
```

```
openclaw mcp doctor wavepay --probe
```

[Source](https://docs.openclaw.ai/tools/mcp)

### DeepSeek TUI / DeepSeek harness Vendor or community guide

```
deepseek-tui mcp add --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

```
# config file: ~/.deepseek/mcp.json (override with DEEPSEEK_MCP_CONFIG); run deepseek-tui mcp --help for the name argument
```

[Source](https://raw.githubusercontent.com/Hmbown/DeepSeek-TUI/main/docs/MCP.md)

### OpenCode Vendor docs

```
// opencode.json
{ "mcp": { "wavepay": { "type": "remote", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

[Source](https://opencode.ai/docs/mcp-servers)

### Goose Vendor or community guide

```
goose configure   # Add Extension → Remote Extension (Streaming HTTP) → paste https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
# or ~/.config/goose/config.yaml
extensions:
  wavepay:
    type: streamable_http
    uri: https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
    enabled: true
```

[Source](https://block.github.io/goose/docs/getting-started/using-extensions)

### OpenHands Vendor docs

```
# config.toml (local OpenHands)
[mcp]
shttp_servers = ["https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp"]
```

[Source](https://docs.openhands.dev/openhands/usage/settings/mcp-settings)

### jcode Vendor or community guide

```
# jcode reads stdio servers from .claude/mcp.json or ~/.claude/mcp.json; bridge the remote endpoint:
{ "servers": { "wavepay": { "command": "npx", "args": ["-y", "mcp-remote", "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp"] } } }
```

[Source](https://github.com/kelison/jcode)

### Aider No confirmed MCP client

Aider has no confirmed native MCP client. Use WavePay's REST API directly (POST /v2/register, POST /v2/checkouts) from your repo, or call it through another MCP client.

[Source](https://aider.chat/)

## IDEs and editor agents

### Cursor Vendor or community guide

```
// ~/.cursor/mcp.json (or .cursor/mcp.json in a project)
{ "mcpServers": { "wavepay": { "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

[Source](https://cursor.com/docs/context/mcp)

### Windsurf Vendor or community guide

```
// ~/.codeium/windsurf/mcp_config.json  (the key is serverUrl, not url)
{ "mcpServers": { "wavepay": { "serverUrl": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

[Source](https://docs.windsurf.com/windsurf/cascade/mcp)

### Zed Vendor docs

```
// settings.json
{ "context_servers": { "wavepay": { "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

```
# older Zed: use the bridge command npx -y mcp-remote https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp
```

[Source](https://zed.dev/docs/ai/mcp)

### Cline Vendor or community guide

```
// cline_mcp_settings.json (CLI: ~/.cline/mcp.json)  — type is case-sensitive
{ "mcpServers": { "wavepay": { "type": "streamableHttp", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

[Source](https://docs.cline.bot/mcp/configuring-mcp-servers)

### Kilo Code Vendor docs

```
// kilo.jsonc
{ "mcp": { "wavepay": { "type": "remote", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }
```

```
# or Settings → MCP → Add Server → Remote (HTTP)
```

[Source](https://kilo.ai/docs/features/mcp/using-mcp-in-kilo-code)

## Always-on agents and assistants

### Meta Muse No confirmed MCP client

Add the remote MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp in the assistant's tools or connectors settings if it offers one; otherwise call the REST API.

[Source](https://market-pulse.t3ratech.co.zw/directory)

### Claude Duet and other Claude clients Vendor or community guide

Settings → Connectors → Add custom connector → https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

[Source](https://support.claude.com/)

### ChatGPT (developer mode connectors) Vendor or community guide

Settings → Connectors → create a connector with the MCP server URL https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

[Source](https://platform.openai.com/docs/mcp)

## Every other MCP client

Any MCP client — including Cline, Kilo Code, Roo Code, Continue, Amp, Crush, Warp, JetBrains AI Assistant, Visual Studio Code Copilot Chat, Claude Desktop, LM Studio, Open WebUI, LibreChat, AutoGPT, OpenManus and agent frameworks (LangChain, LlamaIndex, CrewAI, Mastra, Vercel AI SDK, OpenAI Agents SDK) — needs only the streamable-HTTP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp (JSON-RPC 2.0, tools/list and tools/call). Where a client only speaks stdio, bridge it with: npx -y mcp-remote https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp.

## Questions

How do I connect WavePay to Claude Code?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. claude mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to OpenAI Codex CLI?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. codex mcp add wavepay --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to Gemini CLI?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. gemini mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to Qwen Code?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. qwen mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to Grok Build (xAI grok CLI, grok bot)?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. grok mcp add --transport http wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to Devin CLI?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. devin mcp add wavepay https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to OpenClaw?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. openclaw mcp add wavepay --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp --transport streamable-http

How do I connect WavePay to DeepSeek TUI / DeepSeek harness?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. deepseek-tui mcp add --url https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to OpenCode?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // opencode.json { "mcp": { "wavepay": { "type": "remote", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Goose?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. goose configure # Add Extension → Remote Extension (Streaming HTTP) → paste https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp # or ~/.config/goose/config.yaml extensions: wavepay: type: streamable_http uri: https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp enabled: true

How do I connect WavePay to OpenHands?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. # config.toml (local OpenHands) [mcp] shttp_servers = ["https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp"]

How do I connect WavePay to jcode?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. # jcode reads stdio servers from .claude/mcp.json or ~/.claude/mcp.json; bridge the remote endpoint: { "servers": { "wavepay": { "command": "npx", "args": ["-y", "mcp-remote", "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp"] } } }

How do I connect WavePay to Aider?

Aider has no confirmed native MCP client. Use WavePay's REST API directly (POST /v2/register, POST /v2/checkouts) from your repo, or call it through another MCP client.

How do I connect WavePay to Cursor?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // ~/.cursor/mcp.json (or .cursor/mcp.json in a project) { "mcpServers": { "wavepay": { "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Windsurf?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // ~/.codeium/windsurf/mcp_config.json (the key is serverUrl, not url) { "mcpServers": { "wavepay": { "serverUrl": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Zed?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // settings.json { "context_servers": { "wavepay": { "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Cline?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // cline_mcp_settings.json (CLI: ~/.cline/mcp.json) — type is case-sensitive { "mcpServers": { "wavepay": { "type": "streamableHttp", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Kilo Code?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. // kilo.jsonc { "mcp": { "wavepay": { "type": "remote", "url": "https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp" } } }

How do I connect WavePay to Meta Muse?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. Add the remote MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp in the assistant's tools or connectors settings if it offers one; otherwise call the REST API.

How do I connect WavePay to Claude Duet and other Claude clients?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. Settings → Connectors → Add custom connector → https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

How do I connect WavePay to ChatGPT (developer mode connectors)?

Use the WavePay MCP endpoint https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp. Settings → Connectors → create a connector with the MCP server URL https://t3rnel-wavepay-production.t3ratech.workers.dev/mcp

[API reference](https://wavepay.t3ratech.co.zw/docs/index.html) · [skill.md](https://wavepay.t3ratech.co.zw/skill.md) · [llms.txt](https://wavepay.t3ratech.co.zw/llms.txt) · [Directory of AI agents and harnesses on Market Pulse](https://market-pulse.t3ratech.co.zw/directory)

## On this page

## At a glance

- Free to start: 25 payments a month
- A test key with fake money
- Provider fees paid at cost, no markup
- Your own account: the money lands with you

## Start in one request

Register, get a live key and a test key, and take a test payment in minutes.

[See plans](https://wavepay.t3ratech.co.zw/pricing.html)

## Share this page
