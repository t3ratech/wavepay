# WavePay — सॉफ़्टवेयर के लिए भुगतान और लाइसेंस

> एक API से EcoCash, कार्ड और PayPal स्वीकार करें। एक अनुरोध में पंजीकरण करें, नकली पैसों से परीक्षण करें, फिर लाइसेंस, सदस्यता और रिफ़ंड के साथ लाइव जाएँ।

Now with crypto, subscriptions and your own PayPal account

# अपने सॉफ़्टवेयर का भुगतान पाएँ *हर उस माध्यम से जो आपके ग्राहकों के पास है*

EcoCash, OneMoney, InnBucks, ZimSwitch, कार्ड और PayPal के लिए एक API। एक अनुरोध में पंजीकरण करें, नकली पैसों से परीक्षण करें और लाइसेंस, सदस्यता व रिफ़ंड के साथ लाइव जाएँ।

[मुफ़्त शुरू करें](https://wavepay.t3ratech.co.zw/pricing.html#register) [दस्तावेज़ पढ़ें](https://wavepay.t3ratech.co.zw/docs.html) [एजेंटों के लिए](https://wavepay.t3ratech.co.zw/skill.md)

- मुफ़्त योजना, कार्ड की ज़रूरत नहीं
- A fee that falls as you grow
- REST और MCP

**20**payment methods

**25**प्रति माह मुफ़्त भुगतान

**2%→0.4%**usage fee, falling with volume

**15**भाषाएँ

भुगतान माध्यम

## हर वह माध्यम जो खरीदार के पास हो सकता है

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · जल्द आ रहा है

आपको क्या मिलता है

## चेकआउट आसान हिस्सा है। बाकी सब WavePay है।

### होस्टेड चेकआउट और वॉलेट पुश

खरीदारों को होस्टेड पेज पर भेजें, या EcoCash अनुरोध सीधे उनके फ़ोन पर भेजें।

### लाइसेंसिंग अंतर्निहित

हस्ताक्षरित अधिकार, ईमेल से लाइसेंस कुंजी, डिवाइस सक्रियण और पुनर्प्राप्ति। आपका ऐप ऑफ़लाइन सत्यापित करता है।

### सदस्यता और किस्तें

आवर्ती योजनाएँ, कार्ड पर अभी खरीदें बाद में भुगतान करें, और पहुँच समाप्त होने से पहले स्पष्ट विलंब अवधि।

### रिफ़ंड और उलटाव

प्रदाता के माध्यम से पूर्ण और आंशिक रिफ़ंड, किसने और क्यों किया इसके रिकॉर्ड के साथ।

### असली परीक्षण वातावरण

आपकी लाइव कुंजी के साथ एक परीक्षण कुंजी, एक सिम्युलेटर, और नवीनीकरण होते देखने के लिए समय यात्रा।

### एजेंटों के लिए बना

skill.md, OpenAPI, एक MCP सर्वर और WebMCP टूल, ताकि AI आपके लिए चेकआउट सेट कर सके।

यह कैसे काम करता है

## शून्य से भुगतान तक तीन अनुरोध

1

### पंजीकरण

एक अनुरोध लाइव कुंजी और परीक्षण कुंजी लौटाता है। मुफ़्त योजना, तुरंत चालू।

2

### बिक्री

चेकआउट बनाएँ और होस्टेड URL पाएँ, या फ़ोन पर वॉलेट अनुरोध भेजें।

3

### निपटान

हस्ताक्षरित वेबहुक या पोल पैसे की पुष्टि करता है। लाइसेंस कुंजी अपने आप ईमेल हो जाती है।

डेवलपरों के लिए

## curl से शुरू करें। लाइसेंस कुंजी पर खत्म करें।

दस्तावेज़ का हर उदाहरण पहले परीक्षण कुंजी के साथ सैंडबॉक्स में चलता है, ताकि आप सुरक्षित रूप से प्रयोग कर सकें।

[API संदर्भ खोलें](https://wavepay.t3ratech.co.zw/docs.html)

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

मूल्य

## संसाधित भुगतानों पर मूल्य, कमीशन पर नहीं

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### मुफ़्त

$0 हमेशा

30 दिनों में 25 भुगतान

- 1 साइट
- हर चालू भुगतान माध्यम
- हस्ताक्षरित वेबहुक
- भुगतान बही

[मुफ़्त पंजीकरण](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 प्रति माह

500 payments per 30 days included

- Ten sites, coupons and promotions
- Subscriptions and instalments (buy now, pay later, BNPL)
- Then 2.25% a payment, falling with volume

[Get Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$499 प्रति माह

2,500 payments per 30 days included

- Unlimited sites
- Priority support and a response-time promise
- Then 1.0% a payment, falling to 0.4%

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

[A plan for the software, plus a small percentage after the included payments that falls as you grow. No quote needed at any volume. See the full price list and the cost chart.](https://wavepay.t3ratech.co.zw/pricing.html)

प्रश्न

## आपके पूछने से पहले उत्तर

मैं कौन से भुगतान माध्यम स्वीकार कर सकता हूँ?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

क्या आप मेरी बिक्री का प्रतिशत लेते हैं?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

क्या मैं असली पैसे के बिना परीक्षण कर सकता हूँ?

हाँ। पंजीकरण पर आपको सिम्युलेटर वाली परीक्षण कुंजी मिलती है। वह कभी किसी प्रदाता तक नहीं पहुँचती और आपकी योजना में नहीं गिनी जाती।

खरीदारों को लाइसेंस कैसे मिलता है?

भुगतान निपटते ही WavePay लाइसेंस कुंजी ईमेल करता है, और आपका ऐप हस्ताक्षरित अधिकार को ऑफ़लाइन सत्यापित कर सकता है।

क्या कोई AI एजेंट WavePay इस्तेमाल कर सकता है?

हाँ। उसे skill.md, OpenAPI दस्तावेज़ या MCP सर्वर की ओर इंगित करें। एजेंट बिना ब्राउज़र के पंजीकरण, मूल्य निर्धारण, चेकआउट और मिलान कर सकता है।

गाइड

## आप जो बना रहे हैं उसके उत्तर

### भुगतान माध्यम

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### आपके प्रकार का सॉफ़्टवेयर

[ब्राउज़र एक्सटेंशन](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [गेम](https://wavepay.t3ratech.co.zw/payments-for-games.html), [ऐप](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [बॉट](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### प्रश्न और गाइड

[सवाल-जवाब](https://wavepay.t3ratech.co.zw/faq.html), [सदस्यता](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [अभी खरीदें, बाद में भुगतान करें](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [परीक्षण मोड](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [गाइड](https://wavepay.t3ratech.co.zw/learn.html)

## अपना पहला भुगतान लेने के लिए तैयार?

एक अनुरोध में पंजीकरण करें। न कार्ड, न कॉल।

[मुफ़्त शुरू करें](https://wavepay.t3ratech.co.zw/pricing.html#register)[दस्तावेज़ पढ़ें](https://wavepay.t3ratech.co.zw/docs.html)
