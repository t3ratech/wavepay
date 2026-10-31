# WavePay — pagamenti e licenze per il software

> Accetta EcoCash, carte e PayPal con una sola API. Registrati in una richiesta, prova con denaro finto e vai in produzione con licenze, abbonamenti e rimborsi.

Ora con abbonamenti, pagamenti rateali e 2Checkout

# Fatti pagare il tuo software su *ogni metodo che i tuoi clienti usano*

Una sola API per EcoCash, OneMoney, InnBucks, ZimSwitch, carte e PayPal. Registrati in una richiesta, prova con denaro finto e vai live con licenze, abbonamenti e rimborsi già inclusi.

[Inizia gratis](https://wavepay.t3ratech.co.zw/pricing.html#register) [Leggi la documentazione](https://wavepay.t3ratech.co.zw/docs.html) [Per gli agenti](https://wavepay.t3ratech.co.zw/skill.md)

- Piano gratuito, senza carta
- Nessuna commissione percentuale sulle tue vendite
- REST e MCP

**9**metodi di pagamento

**25**pagamenti gratuiti al mese

**0%**di commissione sulle tue vendite

**15**lingue

Metodi di pagamento

## Ogni metodo che un acquirente può avere

Portafogli mobili locali per lo Zimbabwe, carte e PayPal per tutti gli altri. L'endpoint dei fornitori indica sempre cosa è attivo oggi.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · in arrivo

Cosa ottieni

## Il checkout è la parte facile. WavePay è tutto il resto.

### Checkout ospitato e richiesta al portafoglio

Manda gli acquirenti a una pagina ospitata, oppure invia una richiesta EcoCash direttamente al loro telefono.

### Licenze integrate

Diritti firmati, chiavi di licenza via e-mail, attivazione dei dispositivi e recupero. La tua app verifica offline.

### Abbonamenti e rate

Piani ricorrenti, paga dopo con carta e un periodo di ritardo chiaro prima che l'accesso termini.

### Rimborsi e storni

Rimborsi totali e parziali tramite il fornitore, con traccia di chi li ha fatti e perché.

### Un vero ambiente di prova

Una chiave di prova accanto a quella live, un simulatore e un viaggio nel tempo per vedere un rinnovo.

### Pensato per gli agenti

skill.md, OpenAPI, un server MCP e strumenti WebMCP: un'IA può configurare il checkout per te.

Come funziona

## Tre richieste da zero a pagato

1

### Registrati

Una richiesta restituisce una chiave live e una di prova. Piano gratuito, attivo subito.

2

### Vendi

Crea un checkout e ottieni un URL ospitato, oppure invia una richiesta a un telefono.

3

### Incassa

Un webhook firmato o un controllo conferma il denaro. La chiave di licenza arriva via e-mail in automatico.

Per gli sviluppatori

## Inizia con curl. Finisci con una chiave di licenza.

Ogni esempio della documentazione gira prima nella sandbox con una chiave di prova, così puoi sbagliare senza rischi.

[Apri il riferimento API](https://wavepay.t3ratech.co.zw/docs.html)

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

Prezzi

## Prezzo per pagamenti elaborati, non per commissione

Piani mensili fissi. I fornitori di pagamento applicano le loro commissioni a parte.

### Gratis

$0 per sempre

25 pagamenti ogni 30 giorni

- 1 sito
- Ogni metodo attivo
- Webhook firmati
- Registro dei pagamenti

[Registrati gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)

Il più scelto

### Starter

$15 al mese

100 pagamenti ogni 30 giorni

- 3 siti
- Coupon e promozioni
- Webhook e registro

[Scegli Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Growth

$49 al mese

500 pagamenti ogni 30 giorni

- 10 siti
- Tutto ciò che c'è in Starter
- Coda di supporto prioritaria

[Scegli Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

Domande

## Risposte prima che tu chieda

Quali metodi di pagamento posso accettare?

EcoCash, OneMoney, InnBucks, Telecash, O'mari e ZimSwitch tramite Paynow; Visa, Mastercard e PayPal per gli acquirenti internazionali. 2Checkout è pronto e si attiva quando il fornitore approverà il nostro account.

Prendete una percentuale sulle mie vendite?

No. I piani sono prezzi mensili fissi in base ai pagamenti elaborati. I fornitori di pagamento applicano le proprie commissioni.

Posso provare senza denaro reale?

Sì. La registrazione ti dà una chiave di prova che usa un simulatore. Non raggiunge mai un fornitore e non conta nel tuo piano.

Come ricevono la licenza gli acquirenti?

Quando un pagamento è regolato, WavePay invia una chiave di licenza via e-mail e la tua app può verificare offline il diritto firmato.

Un agente IA può usare WavePay?

Sì. Indicagli skill.md, il documento OpenAPI o il server MCP. Un agente può registrarsi, fissare i prezzi, incassare e riconciliare senza browser.

Guide

## Risposte per ciò che stai costruendo

### Metodi di pagamento

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Il tuo tipo di software

[Estensioni del browser](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Giochi](https://wavepay.t3ratech.co.zw/payments-for-games.html), [App](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bot](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Domande e guide

[Domande frequenti](https://wavepay.t3ratech.co.zw/faq.html), [Abbonamenti](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Compra ora, paga dopo](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Modalità di prova](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Guide](https://wavepay.t3ratech.co.zw/learn.html)

## Pronto a incassare il tuo primo pagamento?

Registrati in una richiesta. Niente carta, niente telefonate.

[Inizia gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)[Leggi la documentazione](https://wavepay.t3ratech.co.zw/docs.html)
