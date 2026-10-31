# WavePay — malipo na leseni kwa programu

> Pokea EcoCash, kadi na PayPal kwa API moja. Jisajili kwa ombi moja, jaribu kwa pesa bandia, kisha anza kutumia leseni, usajili na marejesho.

Now with crypto, subscriptions and your own PayPal account

# Lipwa kwa programu yako kupitia *kila njia ambayo wateja wako wanatumia*

API moja kwa EcoCash, OneMoney, InnBucks, ZimSwitch, kadi na PayPal. Jisajili kwa ombi moja, jaribu kwa pesa bandia, kisha anza na leseni, usajili na marejesho vilivyojengwa ndani.

[Anza bila malipo](https://wavepay.t3ratech.co.zw/pricing.html#register) [Soma nyaraka](https://wavepay.t3ratech.co.zw/docs.html) [Kwa mawakala](https://wavepay.t3ratech.co.zw/skill.md)

- Mpango bure, bila kadi
- A fee that falls as you grow
- REST na MCP

**20**payment methods

**25**malipo ya bure kwa mwezi

**2%→0.4%**usage fee, falling with volume

**15**lugha

Njia za malipo

## Kila njia ambayo mnunuzi anaweza kuwa nayo

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · inakuja

Unachopata

## Malipo ni sehemu rahisi. WavePay ni yote yaliyobaki.

### Malipo ya ukurasa na ombi la pochi

Wapeleke wanunuzi kwenye ukurasa wa malipo, au tuma ombi la EcoCash moja kwa moja kwenye simu yao.

### Leseni zimejengwa ndani

Haki zilizotiwa saini, funguo za leseni kwa barua pepe, uwezeshaji wa vifaa na urejeshaji. Programu yako inathibitisha bila mtandao.

### Usajili na malipo ya awamu

Mipango ya kujirudia, nunua sasa lipa baadaye kwa kadi, na muda wazi wa kuchelewa kabla ya ufikiaji kuisha.

### Marejesho na ubatilishaji

Marejesho kamili na sehemu kupitia mtoa huduma, pamoja na kumbukumbu ya nani alifanya na kwa nini.

### Mazingira halisi ya majaribio

Ufunguo wa majaribio kando ya ufunguo wako halisi, kiigaji, na kusafiri wakati kuona upyaishaji ukitokea.

### Imejengwa kwa mawakala

skill.md, OpenAPI, seva ya MCP na zana za WebMCP, ili AI iweze kuweka malipo kwa ajili yako.

Jinsi inavyofanya kazi

## Maombi matatu kutoka sifuri hadi kulipwa

1

### Jisajili

Ombi moja linarudisha ufunguo halisi na wa majaribio. Mpango bure, unafanya kazi mara moja.

2

### Uza

Unda malipo upate kiungo cha ukurasa, au tuma ombi la pochi kwenye simu.

3

### Kamilisha

Webhook iliyotiwa saini au uchunguzi unathibitisha pesa. Ufunguo wa leseni hutumwa kiotomatiki.

Kwa wasanidi

## Anza na curl. Malizia na ufunguo wa leseni.

Kila mfano katika nyaraka unaendeshwa kwanza kwenye mazingira ya majaribio na ufunguo wa majaribio, ili uweze kukosea salama.

[Fungua marejeo ya API](https://wavepay.t3ratech.co.zw/docs.html)

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

Bei

## Bei kwa malipo yaliyochakatwa, si kwa makato

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Bure

$0 milele

Malipo 25 kwa siku 30

- Tovuti 1
- Kila njia ya malipo iliyo hai
- Webhooks zilizotiwa saini
- Daftari la malipo

[Jisajili bure](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Starter

$15 kwa mwezi

Malipo 100 kwa siku 30

- Tovuti 3
- Kuponi na ofa
- Webhooks na daftari

[Chagua Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 kwa mwezi

Malipo 500 kwa siku 30

- Tovuti 10
- Kila kitu cha Starter
- Foleni ya msaada wa kipaumbele

[Chagua Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$149 kwa mwezi

2,500 payments per 30 days

- 30 sites
- Everything in Growth
- Priority support

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Enterprise

From $499 kwa mwezi

Custom volume and an SLA

- Unlimited sites
- Everything in Scale
- Onboarding and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

[After the included payments a small percentage applies and falls as your volume grows. See the full price list.](https://wavepay.t3ratech.co.zw/pricing.html)

Maswali

## Majibu kabla hujauliza

Ninaweza kupokea njia gani za malipo?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Mnachukua asilimia ya mauzo yangu?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Naweza kujaribu bila pesa halisi?

Ndiyo. Usajili hukupa ufunguo wa majaribio unaotumia kiigaji. Haufiki kwa mtoa huduma wala haujumuishwi kwenye mpango wako.

Wanunuzi wanapataje leseni yao?

Malipo yakikamilika, WavePay hutuma ufunguo wa leseni kwa barua pepe, na programu yako inaweza kuthibitisha haki iliyotiwa saini bila mtandao.

Wakala wa AI anaweza kutumia WavePay?

Ndiyo. Mwelekeze kwenye skill.md, hati ya OpenAPI au seva ya MCP. Wakala anaweza kujisajili, kupanga bei, kupokea malipo na kulinganisha bila kivinjari.

Miongozo

## Majibu kwa unachojenga

### Njia za malipo

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Aina yako ya programu

[Viendelezi vya kivinjari](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Michezo](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Programu](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Boti](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Maswali na miongozo

[Maswali](https://wavepay.t3ratech.co.zw/faq.html), [Usajili](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Nunua sasa, lipa baadaye](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Hali ya majaribio](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Miongozo](https://wavepay.t3ratech.co.zw/learn.html)

## Tayari kupokea malipo yako ya kwanza?

Jisajili kwa ombi moja. Bila kadi, bila simu.

[Anza bila malipo](https://wavepay.t3ratech.co.zw/pricing.html#register)[Soma nyaraka](https://wavepay.t3ratech.co.zw/docs.html)
