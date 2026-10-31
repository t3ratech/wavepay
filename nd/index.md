# WavePay — inkokhelo lamalayisense ezinhlelo

> Samukela i-EcoCash, amakhadi le-PayPal nge-API eyodwa. Bhalisa ngesicelo esisodwa, linga ngemali yokulingisa, uqale ngamalayisense lokubuyisela imali.

Now with crypto, subscriptions and your own PayPal account

# Khokhelwa izinhlelo zakho nge *yonke indlela abathengi bakho abayisebenzisayo*

I-API eyodwa ye-EcoCash, i-OneMoney, i-InnBucks, i-ZimSwitch, amakhadi le-PayPal. Bhalisa ngesicelo esisodwa, linga ngemali yokulingisa, bese uqala ngamalayisense, ukukhokha ngezikhathi lokubuyisela imali okufakiwe.

[Qala mahala](https://wavepay.t3ratech.co.zw/pricing.html#register) [Funda imibhalo](https://wavepay.t3ratech.co.zw/docs.html) [Kuma-ejenti](https://wavepay.t3ratech.co.zw/skill.md)

- Uhlelo lwamahala, akukho khadi elidingekayo
- A fee that falls as you grow
- I-REST le-MCP

**20**payment methods

**25**izinkokhelo zamahala ngenyanga

**2%→0.4%**usage fee, falling with volume

**15**izilimi

Izindlela zokukhokha

## Zonke izindlela umthengi angaba lazo

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · kuyeza

Okuzakuthola

## Ukukhokha yikhona okulula. I-WavePay yikho konke okuseleyo.

### Ikhasi lokukhokha lesicelo sesikhwama

Thumela abathengi ekhasini lokukhokha, loba uthumele isicelo se-EcoCash ngqo efoyinini labo.

### Amalayisense akhelwe ngaphakathi

Amalungelo asayiniwe, okhiye bamalayisense nge-imeyili, ukusebenzisa amadivayisi lokubuyiselwa. I-app yakho iyahlola ingelayo i-inthanethi.

### Ukukhokha ngezikhathi langezigaba

Izinhlelo eziphindaphindwayo, thenga manje ukhokhe emva kwesikhathi ngekhadi, lesikhathi esicacileyo sokubambezela ukufinyelela kungakapheli.

### Ukubuyisela imali lokuhlehlisa

Ukubuyisela imali yonke loba ingxenye ngomhlinzeki, lerekhodi lokuthi ngubani owakwenzayo lesizatho.

### Indawo yangempela yokulinga

Ukhiye wokulinga eduze kokhiye wakho wangempela, i-simulator, lokuhamba kwesikhathi ukubona ukuvuselelwa.

### Yakhelwe ama-ejenti

I-skill.md, i-OpenAPI, iseva ye-MCP lamathuluzi e-WebMCP, ukuze i-AI ikulungisele ukukhokha.

Isebenza njani

## Izicelo ezintathu ukusuka kunalutho kuze kube khokhelwe

1

### Bhalisa

Isicelo esisodwa sibuyisa ukhiye wangempela lokhiye wokulinga. Uhlelo lwamahala, lusebenza ngokuphangisa.

2

### Thengisa

Dala ukukhokha uthole i-URL yekhasi, loba uthumele isicelo sesikhwama efoyinini.

3

### Qedisa

I-webhook esayiniwe loba ukubuzisisa kuqinisekisa imali. Ukhiye welayisense uthunyelwa ngokuzenzakalelayo nge-imeyili.

Kubakhi

## Qala nge-curl. Qeda ngokhiye welayisense.

Isibonelo ngasinye semibhalo siqala sisebenze endaweni yokulinga ngokhiye wokulinga, ukuze ulingeke uphephile.

[Vula isalathiso se-API](https://wavepay.t3ratech.co.zw/docs.html)

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

Intengo

## Intengo ngokuya ngezinkokhelo, hatshi ngokusikwa

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Mahala

$0 kuze kube nininini

Izinkokhelo ezingu-25 ezinsukwini ezingu-30

- Isayithi eli-1
- Yonke indlela yokukhokha esebenzayo
- Ama-webhook asayiniwe
- Ibhuku lezinkokhelo

[Bhalisa mahala](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 ngenyanga

500 payments per 30 days included

- Ten sites, coupons and promotions
- Subscriptions and instalments (buy now, pay later, BNPL)
- Then 2.25% a payment, falling with volume

[Get Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$499 ngenyanga

2,500 payments per 30 days included

- Unlimited sites
- Priority support and a response-time promise
- Then 1.0% a payment, falling to 0.4%

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

[A plan for the software, plus a small percentage after the included payments that falls as you grow. No quote needed at any volume. See the full price list and the cost chart.](https://wavepay.t3ratech.co.zw/pricing.html)

Imibuzo

## Izimpendulo ungakabuzi

Ngingasamukela zimuphi izindlela zokukhokha?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Niyathatha ipesenti yokuthengisa kwami yini?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Ngingalinga ngaphandle kwemali yangempela yini?

Yebo. Ukubhalisa kukunika ukhiye wokulinga osebenzisa i-simulator. Kawufinyeleli kumhlinzeki kawubalwa kuhlelo lwakho.

Abathengi bayitholaphi ilayisense yabo?

Lapho inkokhelo isiphelile, i-WavePay ithumela ukhiye welayisense nge-imeyili, ne-app yakho ingahlola ilungelo elisayiniweyo ingelayo i-inthanethi.

I-ejenti ye-AI ingasebenzisa i-WavePay yini?

Yebo. Yikhombise i-skill.md, imibhalo ye-OpenAPI loba iseva ye-MCP. I-ejenti ingabhalisa, ibeke intengo, ikhokhise iqathanise ingelayo isiphequluli.

Izikhokhelo

## Izimpendulo zalokho okukhiyayo

### Izindlela zokukhokha

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Uhlobo lohlelo lwakho

[Izengezo zesiphequluli](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Imidlalo](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Ama-app](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [Ama-API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Ama-bot](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Imibuzo lezikhokhelo

[Imibuzo](https://wavepay.t3ratech.co.zw/faq.html), [Ukukhokha ngezikhathi](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Thenga manje, khokha emva kwesikhathi](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Indlela yokulinga](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Izikhokhelo](https://wavepay.t3ratech.co.zw/learn.html)

## Usukulungele ukwamukela inkokhelo yakho yokuqala?

Bhalisa ngesicelo esisodwa. Akukho khadi, akukho mbiko.

[Qala mahala](https://wavepay.t3ratech.co.zw/pricing.html#register)[Funda imibhalo](https://wavepay.t3ratech.co.zw/docs.html)
