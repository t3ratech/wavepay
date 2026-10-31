# WavePay — ソフトウェアの決済とライセンス

> 1つのAPIでEcoCash、カード、PayPalに対応。1回のリクエストで登録し、擬似資金でテストして、ライセンス・定期課金・返金とともに本番へ。

Now with crypto, subscriptions and your own PayPal account

# あなたのソフトウェアの代金を *購入者が持つあらゆる決済手段で受け取る*

EcoCash、OneMoney、InnBucks、ZimSwitch、カード、PayPalを1つのAPIで。1回のリクエストで登録し、擬似資金でテストし、ライセンス・定期課金・返金が組み込まれた状態で本番へ。

[無料で始める](https://wavepay.t3ratech.co.zw/pricing.html#register) [ドキュメントを読む](https://wavepay.t3ratech.co.zw/docs.html) [エージェント向け](https://wavepay.t3ratech.co.zw/skill.md)

- 無料プラン、カード不要
- A fee that falls as you grow
- RESTとMCP

**20**payment methods

**25**毎月の無料決済数

**2%→0.4%**usage fee, falling with volume

**15**言語

決済手段

## 購入者が持ちうるあらゆる手段に対応

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · 近日対応

できること

## 決済は簡単な部分です。残りはWavePayが担います。

### ホスト型チェックアウトとウォレット請求

購入者をホスト型ページへ誘導するか、EcoCashの請求を直接スマートフォンへ送信します。

### ライセンス管理を内蔵

署名付き権利、メールでのライセンスキー送付、デバイス認証と復旧。アプリはオフラインで検証できます。

### 定期課金と分割払い

継続課金プラン、カードでの後払い、アクセス終了前の明確な猶予期間。

### 返金と取消

プロバイダー経由で全額・一部返金を行い、誰がなぜ実施したかを記録します。

### 本物のテスト環境

本番キーの隣にテストキー、シミュレーター、そして更新を確認できるタイムトラベル機能。

### エージェント向けに設計

skill.md、OpenAPI、MCPサーバー、WebMCPツールにより、AIがチェックアウトを設定できます。

仕組み

## 3回のリクエストで、ゼロから入金まで

1

### 登録

1回のリクエストで本番キーとテストキーが返ります。無料プランですぐに利用できます。

2

### 販売

チェックアウトを作成してホスト型URLを取得するか、スマートフォンへウォレット請求を送ります。

3

### 精算

署名付きWebhookまたはポーリングで入金を確認し、ライセンスキーは自動でメール送信されます。

開発者向け

## curlで始めて、ライセンスキーで終える。

ドキュメントのすべての例は、まずテストキーを使ってサンドボックスで動作するため、安心して試せます。

[APIリファレンスを開く](https://wavepay.t3ratech.co.zw/docs.html)

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

料金

## 手数料ではなく、決済件数で決まる料金

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### 無料

$0 ずっと

30日あたり25件の決済

- 1サイト
- 有効なすべての決済手段
- 署名付きWebhook
- 決済台帳

[無料で登録](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Starter

$15 月額

30日あたり100件の決済

- 3サイト
- クーポンとプロモーション
- Webhookと台帳

[Starterを選ぶ](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 月額

30日あたり500件の決済

- 10サイト
- Starterのすべて
- 優先サポート窓口

[Growthを選ぶ](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$149 月額

2,500 payments per 30 days

- 30 sites
- Everything in Growth
- Priority support

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Enterprise

From $499 月額

Custom volume and an SLA

- Unlimited sites
- Everything in Scale
- Onboarding and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

[After the included payments a small percentage applies and falls as your volume grows. See the full price list.](https://wavepay.t3ratech.co.zw/pricing.html)

よくある質問

## 聞かれる前にお答えします

どの決済手段を受け付けられますか？

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

売上の何パーセントかを受け取りますか？

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

本物のお金なしでテストできますか？

はい。登録するとシミュレーターを使うテストキーが発行されます。プロバイダーには届かず、プランの件数にも数えられません。

購入者はどうやってライセンスを受け取りますか？

決済が完了すると、WavePayがライセンスキーをメールで送信し、アプリは署名付き権利をオフラインで検証できます。

AIエージェントはWavePayを使えますか？

はい。skill.md、OpenAPIドキュメント、MCPサーバーを案内してください。エージェントはブラウザなしで登録、価格設定、決済、照合ができます。

ガイド

## 作っているものに合わせた答え

### 決済手段

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### あなたのソフトウェアの種類

[ブラウザ拡張機能](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [ゲーム](https://wavepay.t3ratech.co.zw/payments-for-games.html), [アプリ](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [ボット](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### 質問とガイド

[よくある質問](https://wavepay.t3ratech.co.zw/faq.html), [定期課金](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [後払い](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [テストモード](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [ガイド](https://wavepay.t3ratech.co.zw/learn.html)

## 最初の支払いを受け取る準備はできましたか？

1回のリクエストで登録。カードも電話も不要です。

[無料で始める](https://wavepay.t3ratech.co.zw/pricing.html#register)[ドキュメントを読む](https://wavepay.t3ratech.co.zw/docs.html)
