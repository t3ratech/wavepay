# WavePay — Zahlungen und Lizenzen für Software

> Nehmen Sie EcoCash, Karten und PayPal mit einer API an. In einer Anfrage registrieren, mit Spielgeld testen und dann mit Lizenzen, Abos und Erstattungen live gehen.

Jetzt mit Abos, Ratenzahlung und 2Checkout

# Lassen Sie sich für Ihre Software bezahlen auf *jedem Weg, den Ihre Kunden nutzen*

Eine API für EcoCash, OneMoney, InnBucks, ZimSwitch, Karten und PayPal. In einer Anfrage registrieren, mit Spielgeld testen und mit eingebauten Lizenzen, Abos und Erstattungen live gehen.

[Kostenlos starten](https://wavepay.t3ratech.co.zw/pricing.html#register) [Dokumentation lesen](https://wavepay.t3ratech.co.zw/docs.html) [Für Agenten](https://wavepay.t3ratech.co.zw/skill.md)

- Kostenloser Tarif, keine Karte nötig
- Keine prozentuale Gebühr auf Ihre Umsätze
- REST und MCP

**9**Zahlungsarten

**25**kostenlose Zahlungen pro Monat

**0%**Gebühr auf Ihre Umsätze

**15**Sprachen

Zahlungsarten

## Jede Zahlungsart, die ein Käufer haben könnte

Lokale Wallets für Simbabwe, Karten und PayPal für alle anderen. Der Anbieter-Endpunkt zeigt immer, was heute aktiv ist.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · demnächst

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

Feste Monatspläne. Die Zahlungsanbieter berechnen ihre eigenen Gebühren zusätzlich.

### Kostenlos

$0 für immer

25 Zahlungen pro 30 Tage

- 1 Website
- Jede aktive Zahlungsart
- Signierte Webhooks
- Zahlungsjournal

[Kostenlos registrieren](https://wavepay.t3ratech.co.zw/pricing.html#register)

Am beliebtesten

### Starter

$15 pro Monat

100 Zahlungen pro 30 Tage

- 3 Websites
- Gutscheine und Aktionen
- Webhooks und Journal

[Starter wählen](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Growth

$49 pro Monat

500 Zahlungen pro 30 Tage

- 10 Websites
- Alles aus Starter
- Priorisierte Support-Warteschlange

[Growth wählen](https://wavepay.t3ratech.co.zw/pricing.html#register)

Fragen

## Antworten, bevor Sie fragen

Welche Zahlungsarten kann ich annehmen?

EcoCash, OneMoney, InnBucks, Telecash, O'mari und ZimSwitch über Paynow; Visa, Mastercard und PayPal für internationale Käufer. 2Checkout ist gebaut und wird aktiviert, sobald der Anbieter unser Konto freigibt.

Nehmen Sie einen Prozentsatz meiner Umsätze?

Nein. Die Pläne sind feste Monatspreise nach verarbeiteten Zahlungen. Die Zahlungsanbieter berechnen ihre eigenen Gebühren.

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
