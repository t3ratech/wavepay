# WavePay — 软件的支付与许可证服务

> 用一个 API 接收 EcoCash、银行卡和 PayPal。一次请求完成注册，用模拟资金测试，再上线并使用许可证、订阅和退款功能。

Now with crypto, subscriptions and your own PayPal account

# 让你的软件收款覆盖 *买家手里的每一种支付方式*

一个 API 对接 EcoCash、OneMoney、InnBucks、ZimSwitch、银行卡和 PayPal。一次请求注册，用模拟资金测试，上线后内置许可证、订阅和退款。

[免费开始](https://wavepay.t3ratech.co.zw/pricing.html#register) [阅读文档](https://wavepay.t3ratech.co.zw/docs.html) [面向智能体](https://wavepay.t3ratech.co.zw/skill.md)

- 免费方案，无需银行卡
- A fee that falls as you grow
- REST 与 MCP

**20**payment methods

**25**每月免费付款笔数

**2%→0.4%**usage fee, falling with volume

**15**种语言

支付渠道

## 买家可能持有的每一种渠道

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · 即将推出

你将获得

## 结账只是简单的部分，其余都交给 WavePay。

### 托管结账与钱包推送

把买家引导到托管页面，或直接向其手机推送 EcoCash 请求。

### 内置许可证管理

签名授权、邮件发送许可证密钥、设备激活与找回。你的应用可离线验证。

### 订阅与分期

周期性方案、银行卡先买后付，以及访问权限结束前清晰的宽限期。

### 退款与冲正

通过支付提供商进行全额或部分退款，并记录操作人和原因。

### 真正的测试环境

在正式密钥旁提供测试密钥、模拟器，以及可快进时间观察续订的功能。

### 为智能体而建

skill.md、OpenAPI、MCP 服务器和 WebMCP 工具，让 AI 替你配置结账。

工作方式

## 从零到收款只需三次请求

1

### 注册

一次请求返回正式密钥和测试密钥。免费方案，立即可用。

2

### 销售

创建结账并获得托管链接，或向手机推送钱包请求。

3

### 结算

签名的 Webhook 或轮询确认到账，许可证密钥自动通过邮件发出。

面向开发者

## 从 curl 开始，以许可证密钥结束。

文档中的每个示例都先在沙盒中用测试密钥运行，你可以放心试错。

[打开 API 参考](https://wavepay.t3ratech.co.zw/docs.html)

curl MCP JavaScript

```
# 1. register: a live key and a test key, shown once 
curl -sX POST https://wavepay.t3ratech.co.zw/v2/register \
  -H 'content-type: application/json' \
  -d '{"name":"My App","ownerEmail":"you@example.com"}'

# 2. sell: returns a hosted checkout URL 
curl -sX POST https://wavepay.t3ratech.co.zw/v2/checkouts \
  -H 'x-wavepay-service-key: mk_test_… ' \
  -H 'idempotency-key: order-1001' \
  -d '{"productId":"my-app","planId":"pro","provider":"paynow","email":"buyer@example.com"}'
```

```
# any MCP client: https://wavepay.t3ratech.co.zw/mcp 
{ "jsonrpc": "2.0", "id": 1, "method": "tools/call",
  "params": {
    "name": "wavepay_checkout",
    "arguments": { "productId": "my-app", "planId": "pro",
                   "provider": "paynow", "email": "buyer@example.com" } } }

# tools: wavepay_register, wavepay_providers, wavepay_pricing,
#        wavepay_checkout, wavepay_checkout_status, wavepay_subscribe … 
```

```
const res = await fetch("https://wavepay.t3ratech.co.zw/v2/checkouts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-wavepay-service-key": process.env.WAVEPAY_KEY,
    "idempotency-key": crypto.randomUUID(),
  },
  body: JSON.stringify({ productId: "my-app", planId: "pro",
                         provider: "paypal", email: "buyer@example.com" }),
});
const { checkoutUrl, reference } = await res.json();
```

价格

## 按付款笔数计价，而非抽成

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### 免费版

$0 永久

每 30 天 25 笔付款

- 1 个站点
- 所有已启用的支付渠道
- 签名 Webhook
- 付款账本

[免费注册](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 每月

500 payments per 30 days included

- Ten sites, coupons and promotions
- Subscriptions and instalments (buy now, pay later, BNPL)
- Then 2.25% a payment, falling with volume

[Get Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$499 每月

2,500 payments per 30 days included

- Unlimited sites
- Priority support and a response-time promise
- Then 1.0% a payment, falling to 0.4%

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

[A plan for the software, plus a small percentage after the included payments that falls as you grow. No quote needed at any volume. See the full price list and the cost chart.](https://wavepay.t3ratech.co.zw/pricing.html)

问答

## 在你提问之前先给出答案

我可以接受哪些支付方式？

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

你们会抽取我销售额的百分比吗？

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

可以不用真钱进行测试吗？

可以。注册后你会得到使用模拟器的测试密钥，它不会触达任何提供商，也不计入你的方案额度。

买家如何获得许可证？

付款结算后，WavePay 会通过邮件发送许可证密钥，你的应用可离线验证签名授权。

AI 智能体可以使用 WavePay 吗？

可以。让它读取 skill.md、OpenAPI 文档或 MCP 服务器即可。智能体无需浏览器就能完成注册、定价、结账和对账。

指南

## 为你正在构建的产品提供解答

### 支付渠道

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### 你的软件类型

[浏览器扩展](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [游戏](https://wavepay.t3ratech.co.zw/payments-for-games.html), [应用](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [机器人](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### 问答与指南

[常见问题](https://wavepay.t3ratech.co.zw/faq.html), [订阅](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [先买后付](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [测试模式](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [指南](https://wavepay.t3ratech.co.zw/learn.html)

## 准备好收第一笔款了吗？

一次请求注册。无需银行卡，无需通话。

[免费开始](https://wavepay.t3ratech.co.zw/pricing.html#register)[阅读文档](https://wavepay.t3ratech.co.zw/docs.html)
