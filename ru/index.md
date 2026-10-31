# WavePay — платежи и лицензии для программ

> Принимайте EcoCash, карты и PayPal через один API. Зарегистрируйтесь одним запросом, проверьте на тестовых деньгах и запускайтесь с лицензиями, подписками и возвратами.

Now with crypto, subscriptions and your own PayPal account

# Получайте деньги за свою программу через *любой способ оплаты ваших покупателей*

Один API для EcoCash, OneMoney, InnBucks, ZimSwitch, карт и PayPal. Регистрация одним запросом, тесты на условных деньгах и запуск со встроенными лицензиями, подписками и возвратами.

[Начать бесплатно](https://wavepay.t3ratech.co.zw/pricing.html#register) [Читать документацию](https://wavepay.t3ratech.co.zw/docs.html) [Для агентов](https://wavepay.t3ratech.co.zw/skill.md)

- Бесплатный тариф, без карты
- A fee that falls as you grow
- REST и MCP

**20**payment methods

**25**бесплатных платежей в месяц

**2%→0.4%**usage fee, falling with volume

**15**языков

Способы оплаты

## Все способы, которые могут быть у покупателя

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · скоро

Что вы получаете

## Оплата — самая простая часть. Остальное — WavePay.

### Страница оплаты и запрос в кошелёк

Отправляйте покупателей на страницу оплаты или присылайте запрос EcoCash прямо на телефон.

### Лицензирование встроено

Подписанные права, лицензионные ключи по почте, активация устройств и восстановление. Приложение проверяет всё офлайн.

### Подписки и рассрочка

Регулярные тарифы, «заплатить позже» по карте и понятный срок просрочки до окончания доступа.

### Возвраты и отмены

Полные и частичные возвраты через провайдера с записью о том, кто и почему их сделал.

### Настоящая тестовая среда

Тестовый ключ рядом с боевым, симулятор и перемотка времени, чтобы увидеть продление.

### Создано для агентов

skill.md, OpenAPI, MCP-сервер и инструменты WebMCP: ИИ может настроить оплату за вас.

Как это работает

## Три запроса от нуля до оплаты

1

### Регистрация

Один запрос возвращает боевой и тестовый ключи. Бесплатный тариф работает сразу.

2

### Продажа

Создайте платёж и получите ссылку на страницу оплаты или отправьте запрос в кошелёк на телефон.

3

### Расчёт

Подписанный вебхук или опрос подтверждает поступление. Лицензионный ключ отправляется автоматически.

Разработчикам

## Начните с curl. Закончите лицензионным ключом.

Каждый пример в документации сначала запускается в песочнице с тестовым ключом, так что можно безопасно экспериментировать.

[Открыть справочник API](https://wavepay.t3ratech.co.zw/docs.html)

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

Цены

## Цена за обработанные платежи, а не процент

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Бесплатный

$0 навсегда

25 платежей за 30 дней

- 1 сайт
- Все включённые способы оплаты
- Подписанные вебхуки
- Журнал платежей

[Зарегистрироваться бесплатно](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Starter

$15 в месяц

100 платежей за 30 дней

- 3 сайта
- Купоны и акции
- Вебхуки и журнал

[Выбрать Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 в месяц

500 платежей за 30 дней

- 10 сайтов
- Всё из Starter
- Приоритетная очередь поддержки

[Выбрать Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$149 в месяц

2,500 payments per 30 days

- 30 sites
- Everything in Growth
- Priority support

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Enterprise

From $499 в месяц

Custom volume and an SLA

- Unlimited sites
- Everything in Scale
- Onboarding and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

[After the included payments a small percentage applies and falls as your volume grows. See the full price list.](https://wavepay.t3ratech.co.zw/pricing.html)

Вопросы

## Ответы, пока вы не спросили

Какие способы оплаты я могу принимать?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Вы берёте процент с моих продаж?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Можно ли тестировать без реальных денег?

Да. При регистрации вы получаете тестовый ключ, работающий через симулятор. Он никогда не обращается к провайдеру и не учитывается в тарифе.

Как покупатели получают лицензию?

Когда платёж проведён, WavePay отправляет лицензионный ключ по почте, а ваше приложение может проверить подписанное право офлайн.

Может ли ИИ-агент пользоваться WavePay?

Да. Укажите ему skill.md, документ OpenAPI или MCP-сервер. Агент может зарегистрироваться, назначить цены, принять оплату и сверить данные без браузера.

Руководства

## Ответы для того, что вы создаёте

### Способы оплаты

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Ваш тип программы

[Расширения браузера](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Игры](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Приложения](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Боты](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Вопросы и руководства

[Вопросы и ответы](https://wavepay.t3ratech.co.zw/faq.html), [Подписки](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Купить сейчас, заплатить позже](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Тестовый режим](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Руководства](https://wavepay.t3ratech.co.zw/learn.html)

## Готовы принять первый платёж?

Регистрация одним запросом. Без карты и без звонков.

[Начать бесплатно](https://wavepay.t3ratech.co.zw/pricing.html#register)[Читать документацию](https://wavepay.t3ratech.co.zw/docs.html)
