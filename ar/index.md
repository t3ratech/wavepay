# WavePay — مدفوعات وتراخيص للبرمجيات

> اقبل EcoCash والبطاقات وPayPal عبر واجهة برمجية واحدة. سجّل بطلب واحد، وجرّب بأموال وهمية، ثم انطلق مع التراخيص والاشتراكات والمبالغ المستردة.

الآن مع الاشتراكات والدفع بالتقسيط و2Checkout

# احصل على أجر برنامجك عبر *كل وسيلة دفع يملكها عملاؤك*

واجهة برمجية واحدة لـ EcoCash وOneMoney وInnBucks وZimSwitch والبطاقات وPayPal. سجّل بطلب واحد، وجرّب بأموال وهمية، ثم انطلق مع تراخيص واشتراكات ومبالغ مستردة مدمجة.

[ابدأ مجانًا](https://wavepay.t3ratech.co.zw/pricing.html#register) [اقرأ الوثائق](https://wavepay.t3ratech.co.zw/docs.html) [للوكلاء](https://wavepay.t3ratech.co.zw/skill.md)

- خطة مجانية دون بطاقة
- لا عمولة نسبية على مبيعاتك
- REST وMCP

**9**وسائل دفع

**25**دفعات مجانية شهريًا

**0%**رسوم على مبيعاتك

**15**لغة

وسائل الدفع

## كل وسيلة قد يملكها المشتري

محافظ محلية لزيمبابوي، وبطاقات وPayPal لبقية العالم. تعرض نقطة مزودي الخدمة دائمًا ما هو مفعّل اليوم.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · قريبًا

ما تحصل عليه

## الدفع هو الجزء السهل. وWavePay هو كل ما عداه.

### دفع مُستضاف وطلب على المحفظة

أرسل المشترين إلى صفحة مُستضافة، أو أرسل طلب EcoCash مباشرة إلى هواتفهم.

### تراخيص مدمجة

استحقاقات موقّعة ومفاتيح ترخيص بالبريد وتفعيل للأجهزة واستعادة. يتحقق تطبيقك دون اتصال.

### الاشتراكات والتقسيط

خطط متكررة، واشترِ الآن وادفع لاحقًا بالبطاقة، ومهلة تأخير واضحة قبل انتهاء الوصول.

### المبالغ المستردة والعكس

استرداد كامل أو جزئي عبر المزود، مع سجل بمن أجراه ولماذا.

### بيئة اختبار حقيقية

مفتاح اختبار بجانب مفتاحك الفعلي، ومحاكي، وسفر عبر الزمن لرؤية التجديد يحدث.

### مصمم للوكلاء

skill.md وOpenAPI وخادم MCP وأدوات WebMCP، ليتمكن الذكاء الاصطناعي من إعداد الدفع نيابةً عنك.

كيف يعمل

## ثلاثة طلبات من الصفر إلى الدفع

1

### سجّل

طلب واحد يعيد مفتاحًا فعليًا ومفتاح اختبار. خطة مجانية تعمل فورًا.

2

### بِع

أنشئ عملية دفع واحصل على رابط مُستضاف، أو أرسل طلبًا إلى هاتف.

3

### سوِّ

يؤكد webhook موقّع أو استعلام وصول المال. يُرسل مفتاح الترخيص تلقائيًا.

للمطورين

## ابدأ بـ curl. وانتهِ بمفتاح ترخيص.

يُشغَّل كل مثال في الوثائق أولًا في بيئة الاختبار بمفتاح اختبار، فيمكنك التجربة بأمان.

[افتح مرجع الواجهة البرمجية](https://wavepay.t3ratech.co.zw/docs.html)

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

الأسعار

## التسعير حسب المدفوعات لا حسب العمولة

خطط شهرية ثابتة. يفرض مزودو الدفع رسومهم الخاصة إضافةً إلى ذلك.

### مجاني

$0 للأبد

25 دفعة كل 30 يومًا

- موقع واحد
- كل وسيلة دفع مفعّلة
- Webhooks موقّعة
- سجل المدفوعات

[سجّل مجانًا](https://wavepay.t3ratech.co.zw/pricing.html#register)

الأكثر طلبًا

### Basic

$9 شهريًا

250 دفعة كل 30 يومًا

- 3 مواقع
- قسائم وعروض
- Webhooks وسجل

[اختر Basic](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Pro

$29 شهريًا

2500 دفعة كل 30 يومًا

- 10 مواقع
- كل ما في Basic
- طابور دعم ذو أولوية

[اختر Pro](https://wavepay.t3ratech.co.zw/pricing.html#register)

أسئلة

## إجابات قبل أن تسأل

ما وسائل الدفع التي يمكنني قبولها؟

EcoCash وOneMoney وInnBucks وTelecash وO'mari وZimSwitch عبر Paynow؛ وVisa وMastercard وPayPal للمشترين الدوليين. 2Checkout جاهز ويُفعَّل عندما يوافق المزود على حسابنا.

هل تأخذون نسبة من مبيعاتي؟

لا. الخطط أسعار شهرية ثابتة بحسب المدفوعات المعالجة. ويفرض مزودو الدفع رسومهم الخاصة.

هل يمكنني الاختبار دون مال حقيقي؟

نعم. يمنحك التسجيل مفتاح اختبار يستخدم محاكيًا. لا يصل إلى أي مزود ولا يُحتسب ضمن خطتك.

كيف يحصل المشترون على ترخيصهم؟

عند تسوية الدفعة ترسل WavePay مفتاح ترخيص بالبريد، ويمكن لتطبيقك التحقق من الاستحقاق الموقّع دون اتصال.

هل يمكن لوكيل ذكاء اصطناعي استخدام WavePay؟

نعم. وجّهه إلى skill.md أو مستند OpenAPI أو خادم MCP. يستطيع الوكيل التسجيل وتحديد الأسعار والتحصيل والمطابقة دون متصفح.

الأدلة

## إجابات لما تبنيه

### وسائل الدفع

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### نوع برنامجك

[إضافات المتصفح](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [الألعاب](https://wavepay.t3ratech.co.zw/payments-for-games.html), [التطبيقات](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [الواجهات البرمجية](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [الروبوتات](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### أسئلة وأدلة

[الأسئلة الشائعة](https://wavepay.t3ratech.co.zw/faq.html), [الاشتراكات](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [اشترِ الآن وادفع لاحقًا](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [وضع الاختبار](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [الأدلة](https://wavepay.t3ratech.co.zw/learn.html)

## هل أنت مستعد لقبول أول دفعة؟

سجّل بطلب واحد. دون بطاقة ودون مكالمة.

[ابدأ مجانًا](https://wavepay.t3ratech.co.zw/pricing.html#register)[اقرأ الوثائق](https://wavepay.t3ratech.co.zw/docs.html)
