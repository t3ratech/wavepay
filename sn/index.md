# WavePay — mari nemalayisensi ezvirongwa

> Tambira EcoCash, makadhi nePayPal neAPI imwe. Nyoresa nechikumbiro chimwe, edza nemari yekunyepedzera, wobva waenda pamhepo nemalayisensi nekudzosera mari.

Zvino nezvibhadharo zvenguva, kubhadhara nechikamu ne2Checkout

# Bhadharwa zvirongwa zvako kuburikidza *nenzira dzese dzinoshandiswa nevatengi vako*

API imwe yeEcoCash, OneMoney, InnBucks, ZimSwitch, makadhi nePayPal. Nyoresa nechikumbiro chimwe, edza nemari yekunyepedzera, wobva waenda pamhepo nemalayisensi, zvibhadharo zvenguva nekudzosera mari zvakabatanidzwa.

[Tanga mahara](https://wavepay.t3ratech.co.zw/pricing.html#register) [Verenga zvinyorwa](https://wavepay.t3ratech.co.zw/docs.html) [Kumaejenti](https://wavepay.t3ratech.co.zw/skill.md)

- Hurongwa hwemahara, hapana kadhi inodiwa
- Hapana muripo wepeadzo pakutengesa kwako
- REST neMCP

**9**nzira dzekubhadhara

**25**zvibhadharo zvemahara pamwedzi

**0%**muripo pakutengesa kwako

**15**mitauro

Nzira dzekubhadhara

## Nzira dzese dzinogona kunge dzine mutengi

Zvikwama zvemunharaunda yeZimbabwe, makadhi nePayPal kune vamwe. Chiteshi chevanopa masevhisi chinogara chichiratidza zviri kushanda nhasi.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · zvichauya

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

Hurongwa hwemwedzi hune mutengo wakatemwa. Vanopa masevhisi ekubhadhara vanobhadharisa mari yavo vega.

### Mahara

$0 nekusingaperi

Zvibhadharo 25 mumazuva 30

- Saiti 1
- Nzira yese yekubhadhara iri kushanda
- Webhooks dzakasainwa
- Bhuku rezvibhadharo

[Nyoresa mahara](https://wavepay.t3ratech.co.zw/pricing.html#register)

Hwunonyanyosarudzwa

### Starter

$15 pamwedzi

Zvibhadharo 100 mumazuva 30

- Saiti 3
- Makuponi nemipiro
- Webhooks nebhuku

[Tora Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Growth

$49 pamwedzi

Zvibhadharo 500 mumazuva 30

- Saiti 10
- Zvese zviri muStarter
- Mutsetse werutsigiro rwekutanga

[Tora Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

Mibvunzo

## Mhinduro usati wabvunza

Ndinogona kutambira nzira dzekubhadhara dzipi?

EcoCash, OneMoney, InnBucks, Telecash, O'mari neZimSwitch kuburikidza nePaynow; Visa, Mastercard nePayPal kuvatengi vekunze. 2Checkout yakagadzirwa uye ichavhurwa kana mupi wesevhisi achibvumidza account yedu.

Munotora muhuwandu hwekutengesa kwangu here?

Kwete. Hurongwa hwemwedzi hune mutengo wakatemwa unotsamira pazvibhadharo zvakagadziriswa. Vanopa masevhisi ekubhadhara vanobhadharisa mari yavo vega.

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
