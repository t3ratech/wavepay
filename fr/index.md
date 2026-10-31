# WavePay — paiement et licences pour logiciels

> Acceptez EcoCash, cartes et PayPal avec une API. Inscrivez-vous en une requête, testez avec de l'argent fictif, puis passez en production avec licences et remboursements.

Now with crypto, subscriptions and your own PayPal account

# Soyez payé pour votre logiciel sur *chaque moyen de paiement de vos clients*

Une seule API pour EcoCash, OneMoney, InnBucks, ZimSwitch, les cartes et PayPal. Inscription en une requête, tests avec de l'argent fictif, puis mise en production avec licences, abonnements et remboursements intégrés.

[Commencer gratuitement](https://wavepay.t3ratech.co.zw/pricing.html#register) [Lire la documentation](https://wavepay.t3ratech.co.zw/docs.html) [Pour les agents](https://wavepay.t3ratech.co.zw/skill.md)

- Offre gratuite, sans carte bancaire
- A fee that falls as you grow
- REST et MCP

**20**payment methods

**25**paiements gratuits par mois

**2%→0.4%**usage fee, falling with volume

**15**langues

Moyens de paiement

## Tous les moyens que vos clients possèdent

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · bientôt

Ce que vous obtenez

## Le paiement est la partie facile. WavePay s'occupe du reste.

### Paiement hébergé et demande mobile

Envoyez vos clients vers une page hébergée, ou déclenchez une demande EcoCash directement sur leur téléphone.

### Licences intégrées

Droits signés, clés de licence par e-mail, activation d'appareils et récupération. Votre application vérifie hors ligne.

### Abonnements et paiements échelonnés

Formules récurrentes, payer plus tard par carte, et un délai de retard clair avant la fin de l'accès.

### Remboursements et annulations

Remboursements totaux ou partiels via le fournisseur, avec trace de qui l'a fait et pourquoi.

### Un vrai environnement de test

Une clé de test à côté de votre clé de production, un simulateur et un voyage dans le temps pour voir un renouvellement.

### Conçu pour les agents

skill.md, OpenAPI, un serveur MCP et des outils WebMCP : une IA peut configurer le paiement pour vous.

Comment ça marche

## Trois requêtes, de zéro au paiement

1

### S'inscrire

Une requête renvoie une clé de production et une clé de test. Offre gratuite, active immédiatement.

2

### Vendre

Créez un paiement et obtenez une URL hébergée, ou envoyez une demande à un téléphone.

3

### Encaisser

Un webhook signé ou une interrogation confirme l'argent. La clé de licence est envoyée automatiquement.

Pour les développeurs

## Commencez avec curl. Terminez avec une clé de licence.

Chaque exemple de la documentation s'exécute d'abord dans le bac à sable avec une clé de test : vous pouvez tout casser sans risque.

[Ouvrir la référence de l'API](https://wavepay.t3ratech.co.zw/docs.html)

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

Tarifs

## Un prix au volume de paiements, pas une commission

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Gratuit

$0 pour toujours

25 paiements par période de 30 jours

- 1 site
- Tous les moyens de paiement actifs
- Webhooks signés
- Journal des paiements

[S'inscrire gratuitement](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 par mois

500 payments per 30 days included

- Ten sites, coupons and promotions
- Subscriptions and instalments (buy now, pay later, BNPL)
- Then 2.25% a payment, falling with volume

[Get Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$499 par mois

2,500 payments per 30 days included

- Unlimited sites
- Priority support and a response-time promise
- Then 1.0% a payment, falling to 0.4%

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

[A plan for the software, plus a small percentage after the included payments that falls as you grow. No quote needed at any volume. See the full price list and the cost chart.](https://wavepay.t3ratech.co.zw/pricing.html)

Questions

## Les réponses avant la question

Quels moyens de paiement puis-je accepter ?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Prélevez-vous un pourcentage sur mes ventes ?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Puis-je tester sans argent réel ?

Oui. L'inscription vous donne une clé de test qui utilise un simulateur. Elle n'atteint jamais un fournisseur et ne compte pas dans votre forfait.

Comment les acheteurs reçoivent-ils leur licence ?

Quand un paiement est réglé, WavePay envoie une clé de licence par e-mail, et votre application peut vérifier hors ligne le droit signé.

Un agent IA peut-il utiliser WavePay ?

Oui. Indiquez-lui skill.md, le document OpenAPI ou le serveur MCP. Un agent peut s'inscrire, fixer les prix, encaisser et rapprocher sans navigateur.

Guides

## Des réponses pour ce que vous construisez

### Moyens de paiement

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Votre type de logiciel

[Extensions de navigateur](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Jeux](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Applications](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bots](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Questions et guides

[FAQ](https://wavepay.t3ratech.co.zw/faq.html), [Abonnements](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Payer plus tard](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Mode test](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Guides](https://wavepay.t3ratech.co.zw/learn.html)

## Prêt à encaisser votre premier paiement ?

Inscription en une requête. Sans carte, sans appel.

[Commencer gratuitement](https://wavepay.t3ratech.co.zw/pricing.html#register)[Lire la documentation](https://wavepay.t3ratech.co.zw/docs.html)
