# WavePay — Zahlungen und Lizenzen für Software

> Nehmen Sie EcoCash, Karten und PayPal mit einer API an. In einer Anfrage registrieren, mit Spielgeld testen und dann mit Lizenzen, Abos und Erstattungen live gehen.

Now with crypto, subscriptions and your own PayPal account

# Lassen Sie sich für Ihre Software bezahlen auf *jedem Weg, den Ihre Kunden nutzen*

Eine API für EcoCash, OneMoney, InnBucks, ZimSwitch, Karten und PayPal. In einer Anfrage registrieren, mit Spielgeld testen und mit eingebauten Lizenzen, Abos und Erstattungen live gehen.

[Kostenlos starten](https://wavepay.t3ratech.co.zw/pricing.html#register) [Dokumentation lesen](https://wavepay.t3ratech.co.zw/docs.html) [Für Agenten](https://wavepay.t3ratech.co.zw/skill.md)

- Kostenloser Tarif, keine Karte nötig
- A fee that falls as you grow
- REST und MCP

**20**payment methods

**25**kostenlose Zahlungen pro Monat

**2%→0.4%**usage fee, falling with volume

**15**Sprachen

Zahlungsarten

## Jede Zahlungsart, die ein Käufer haben könnte

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · demnächst

Was Sie bekommen

## Der Checkout ist der leichte Teil. WavePay ist der Rest.

### Gehosteter Checkout und Wallet-Anfrage

Schicken Sie Käufer auf eine gehostete Seite oder senden Sie eine EcoCash-Anfrage direkt aufs Handy.

### Lizenzierung eingebaut

Signierte Berechtigungen, Lizenzschlüssel per E-Mail, Geräteaktivierung und Wiederherstellung. Ihre App prüft offline.

### Abos und Ratenzahlung

Wiederkehrende Pläne, Kartenzahlung später und eine klare Verzugsfrist, bevor der Zugang endet.

### Erstattungen und Rückbuchungen

Volle und teilweise Erstattungen über den Anbieter, mit Nachweis, wer sie warum veranlasst hat.

### Eine echte Testumgebung

Ein Testschlüssel neben Ihrem Live-Schlüssel, ein Simulator und Zeitreise, um eine Verlängerung zu beobachten.

### Für Agenten gebaut

skill.md, OpenAPI, ein MCP-Server und WebMCP-Werkzeuge: Eine KI kann den Checkout für Sie einrichten.

So funktioniert es

## Drei Anfragen von null bis bezahlt

1

### Registrieren

Eine Anfrage liefert einen Live- und einen Testschlüssel. Kostenloser Tarif, sofort aktiv.

2

### Verkaufen

Erstellen Sie einen Checkout und erhalten Sie eine gehostete URL oder senden Sie eine Wallet-Anfrage ans Handy.

3

### Abwickeln

Ein signierter Webhook oder eine Abfrage bestätigt das Geld. Der Lizenzschlüssel geht automatisch per E-Mail raus.

Für Entwickler

## Mit curl anfangen. Mit einem Lizenzschlüssel enden.

Jedes Beispiel der Dokumentation läuft zuerst mit einem Testschlüssel in der Sandbox, damit Sie gefahrlos ausprobieren können.

[API-Referenz öffnen](https://wavepay.t3ratech.co.zw/docs.html)

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

Preise

## Preis nach Zahlungen, nicht nach Provision

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Kostenlos

$0 für immer

25 Zahlungen pro 30 Tage

- 1 Website
- Jede aktive Zahlungsart
- Signierte Webhooks
- Zahlungsjournal

[Kostenlos registrieren](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 pro Monat

500 payments per 30 days included

- Ten sites, coupons and promotions
- Subscriptions and instalments (buy now, pay later, BNPL)
- Then 2.25% a payment, falling with volume

[Get Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$499 pro Monat

2,500 payments per 30 days included

- Unlimited sites
- Priority support and a response-time promise
- Then 1.0% a payment, falling to 0.4%

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

[A plan for the software, plus a small percentage after the included payments that falls as you grow. No quote needed at any volume. See the full price list and the cost chart.](https://wavepay.t3ratech.co.zw/pricing.html)

Fragen

## Antworten, bevor Sie fragen

Welche Zahlungsarten kann ich annehmen?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Nehmen Sie einen Prozentsatz meiner Umsätze?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Kann ich ohne echtes Geld testen?

Ja. Die Registrierung gibt Ihnen einen Testschlüssel mit Simulator. Er erreicht nie einen Anbieter und zählt nicht auf Ihren Plan.

Wie erhalten Käufer ihre Lizenz?

Sobald eine Zahlung abgewickelt ist, sendet WavePay einen Lizenzschlüssel per E-Mail, und Ihre App kann die signierte Berechtigung offline prüfen.

Kann ein KI-Agent WavePay nutzen?

Ja. Verweisen Sie ihn auf skill.md, das OpenAPI-Dokument oder den MCP-Server. Ein Agent kann sich registrieren, Preise setzen, kassieren und abgleichen, ganz ohne Browser.

Anleitungen

## Antworten für das, was Sie bauen

### Zahlungsarten

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Ihre Art von Software

[Browser-Erweiterungen](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Spiele](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Apps](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [APIs](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bots](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Fragen und Anleitungen

[FAQ](https://wavepay.t3ratech.co.zw/faq.html), [Abonnements](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Jetzt kaufen, später zahlen](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Testmodus](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Anleitungen](https://wavepay.t3ratech.co.zw/learn.html)

## Bereit für Ihre erste Zahlung?

In einer Anfrage registrieren. Keine Karte, kein Anruf.

[Kostenlos starten](https://wavepay.t3ratech.co.zw/pricing.html#register)[Dokumentation lesen](https://wavepay.t3ratech.co.zw/docs.html)
