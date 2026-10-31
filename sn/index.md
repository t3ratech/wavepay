# WavePay — mari nemalayisensi ezvirongwa

> Tambira EcoCash, makadhi nePayPal neAPI imwe. Nyoresa nechikumbiro chimwe, edza nemari yekunyepedzera, wobva waenda pamhepo nemalayisensi nekudzosera mari.

Now with crypto, subscriptions and your own PayPal account

# Bhadharwa zvirongwa zvako kuburikidza *nenzira dzese dzinoshandiswa nevatengi vako*

API imwe yeEcoCash, OneMoney, InnBucks, ZimSwitch, makadhi nePayPal. Nyoresa nechikumbiro chimwe, edza nemari yekunyepedzera, wobva waenda pamhepo nemalayisensi, zvibhadharo zvenguva nekudzosera mari zvakabatanidzwa.

[Tanga mahara](https://wavepay.t3ratech.co.zw/pricing.html#register) [Verenga zvinyorwa](https://wavepay.t3ratech.co.zw/docs.html) [Kumaejenti](https://wavepay.t3ratech.co.zw/skill.md)

- Hurongwa hwemahara, hapana kadhi inodiwa
- A fee that falls as you grow
- REST neMCP

**20**payment methods

**25**zvibhadharo zvemahara pamwedzi

**2%→0.4%**usage fee, falling with volume

**15**mitauro

Nzira dzekubhadhara

## Nzira dzese dzinogona kunge dzine mutengi

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · zvichauya

Zvauchawana

## Kubhadhara ndiko kuri nyore. WavePay ndiyo yese yasara.

### Peji rekubhadhara nechikumbiro chechikwama

Tumira vatengi kupeji rekubhadhara, kana kuti tumira chikumbiro cheEcoCash zvakananga kufoni yavo.

### Malayisensi akabatanidzwa

Kodzero dzakasainwa, makiyi emalayisensi neemail, kuvhura midziyo nekudzorerwa. App yako inongoongorora isina internet.

### Zvibhadharo zvenguva nezvechikamu

Hurongwa hunodzokororwa, tenga zvino bhadhara gare gare nekadhi, uye nguva yakajeka yekunonoka kusati kwapera kupinda.

### Kudzosera mari nekubvisa

Kudzosera mari yese kana chikamu kuburikidza nemupi wesevhisi, nerekodhi yewakazviita uye nei.

### Nzvimbo chaiyo yekuyedza

Kiyi yekuyedza padivi pekiyi yako chaiyo, simulator, nekufamba kwenguva kuti uone kuvandudzwa.

### Yakagadzirirwa maejenti

skill.md, OpenAPI, sevha yeMCP nezvishandiso zveWebMCP, kuti AI igone kugadzirira kubhadhara pamusoro pako.

Zvinoshanda sei

## Zvikumbiro zvitatu kubva pachiro kusvika wabhadharwa

1

### Nyoresa

Chikumbiro chimwe chinodzosa kiyi chaiyo nekiyi yekuyedza. Hurongwa hwemahara, hunoshanda pakarepo.

2

### Tengesa

Gadzira kubhadhara uwane lonko repeji, kana kutumira chikumbiro chechikwama kufoni.

3

### Pedzisa

Webhook yakasainwa kana kubvunza zvinosimbisa mari. Kiyi yerayisensi inotumirwa neemail pachayo.

Kuvagadziri

## Tanga necurl. Pedzisa nekiyi yerayisensi.

Muenzaniso wese mumagwaro unotanga wamhanya musandbox nekiyi yekuyedza, kuti ukwanise kukanganisa uchichengeteka.

[Vhura mareferenzi eAPI](https://wavepay.t3ratech.co.zw/docs.html)

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

Mitengo

## Mutengo unotsamira pazvibhadharo, kwete pakucheka

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Mahara

$0 nekusingaperi

Zvibhadharo 25 mumazuva 30

- Saiti 1
- Nzira yese yekubhadhara iri kushanda
- Webhooks dzakasainwa
- Bhuku rezvibhadharo

[Nyoresa mahara](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Starter

$15 pamwedzi

Zvibhadharo 100 mumazuva 30

- Saiti 3
- Makuponi nemipiro
- Webhooks nebhuku

[Tora Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 pamwedzi

Zvibhadharo 500 mumazuva 30

- Saiti 10
- Zvese zviri muStarter
- Mutsetse werutsigiro rwekutanga

[Tora Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$149 pamwedzi

2,500 payments per 30 days

- 30 sites
- Everything in Growth
- Priority support

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Enterprise

From $499 pamwedzi

Custom volume and an SLA

- Unlimited sites
- Everything in Scale
- Onboarding and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

[After the included payments a small percentage applies and falls as your volume grows. See the full price list.](https://wavepay.t3ratech.co.zw/pricing.html)

Mibvunzo

## Mhinduro usati wabvunza

Ndinogona kutambira nzira dzekubhadhara dzipi?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Munotora muhuwandu hwekutengesa kwangu here?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Ndinogona kuyedza ndisina mari chaiyo here?

Hongu. Kunyoresa kunokupa kiyi yekuyedza inoshandisa simulator. Haimborasa kumupi wesevhisi uye haiverengwi muhurongwa hwako.

Vatengi vanowana sei rayisensi yavo?

Mubhadharo kana wapera, WavePay inotumira kiyi yerayisensi neemail, uye app yako inogona kusimbisa kodzero yakasainwa isina internet.

Ejenti yeAI inogona kushandisa WavePay here?

Hongu. Iratidze skill.md, gwaro reOpenAPI kana sevha yeMCP. Ejenti inogona kunyoresa, kuisa mitengo, kubhadharisa nekuenzanisa isina browser.

Nzira dzekutevera

## Mhinduro dzezvauri kuvaka

### Nzira dzekubhadhara

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Mhando yechirongwa chako

[Zvowedzera zvebrowser](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Mitambo](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Maapp](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [Maapi](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Mabot](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Mibvunzo nenzira dzekutevera

[Mibvunzo](https://wavepay.t3ratech.co.zw/faq.html), [Zvibhadharo zvenguva](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Tenga zvino, bhadhara gare gare](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Mararamiro ekuyedza](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Nzira dzekutevera](https://wavepay.t3ratech.co.zw/learn.html)

## Wagadzirira kutambira mubhadharo wako wekutanga here?

Nyoresa nechikumbiro chimwe. Hapana kadhi, hapana runhare.

[Tanga mahara](https://wavepay.t3ratech.co.zw/pricing.html#register)[Verenga zvinyorwa](https://wavepay.t3ratech.co.zw/docs.html)
