# WavePay — pagamentos e licenças para software

> Aceite EcoCash, cartões e PayPal com uma só API. Registe-se num pedido, teste com dinheiro fictício e passe para produção com licenças, subscrições e reembolsos.

Now with crypto, subscriptions and your own PayPal account

# Seja pago pelo seu software em *todos os meios que os seus clientes usam*

Uma API para EcoCash, OneMoney, InnBucks, ZimSwitch, cartões e PayPal. Registe-se num pedido, teste com dinheiro fictício e passe para produção com licenças, subscrições e reembolsos incluídos.

[Começar grátis](https://wavepay.t3ratech.co.zw/pricing.html#register) [Ler a documentação](https://wavepay.t3ratech.co.zw/docs.html) [Para agentes](https://wavepay.t3ratech.co.zw/skill.md)

- Plano gratuito, sem cartão
- A fee that falls as you grow
- REST e MCP

**20**payment methods

**25**pagamentos gratuitos por mês

**2%→0.4%**usage fee, falling with volume

**15**idiomas

Meios de pagamento

## Todos os meios que um cliente pode ter

Zimbabwean wallets, cards, PayPal and eleven crypto rails. The providers endpoint always says what is live today.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal Bitcoin Ethereum Solana BNB Litecoin Dogecoin Tron USDT USDC 2Checkout · em breve

O que recebe

## O checkout é a parte fácil. A WavePay trata do resto.

### Checkout alojado e pedido na carteira

Envie os clientes para uma página alojada ou envie um pedido EcoCash diretamente para o telemóvel.

### Licenciamento integrado

Direitos assinados, chaves de licença por e-mail, ativação de dispositivos e recuperação. A sua aplicação verifica offline.

### Subscrições e prestações

Planos recorrentes, compre agora e pague depois com cartão, e um prazo claro de atraso antes de terminar o acesso.

### Reembolsos e estornos

Reembolsos totais ou parciais através do fornecedor, com registo de quem os fez e porquê.

### Um ambiente de teste real

Uma chave de teste ao lado da chave de produção, um simulador e viagem no tempo para ver uma renovação acontecer.

### Feito para agentes

skill.md, OpenAPI, um servidor MCP e ferramentas WebMCP: uma IA pode configurar o checkout por si.

Como funciona

## Três pedidos do zero ao pagamento

1

### Registar

Um pedido devolve uma chave de produção e uma chave de teste. Plano gratuito, ativo de imediato.

2

### Vender

Crie um checkout e obtenha um URL alojado, ou envie um pedido para um telemóvel.

3

### Liquidar

Um webhook assinado ou uma consulta confirma o dinheiro. A chave de licença é enviada automaticamente.

Para programadores

## Comece com curl. Termine com uma chave de licença.

Todos os exemplos da documentação correm primeiro no ambiente de testes com uma chave de teste, para poder errar em segurança.

[Abrir a referência da API](https://wavepay.t3ratech.co.zw/docs.html)

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

Preços

## Preço por pagamentos processados, não por comissão

A plan for the software, plus a small percentage that falls as your volume grows. Provider fees are paid to the provider at cost.

### Grátis

$0 para sempre

25 pagamentos por 30 dias

- 1 site
- Todos os meios de pagamento ativos
- Webhooks assinados
- Registo de pagamentos

[Registar grátis](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Starter

$15 por mês

100 pagamentos por 30 dias

- 3 sites
- Cupões e promoções
- Webhooks e registo

[Escolher Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

Recommended

### Growth

$49 por mês

500 pagamentos por 30 dias

- 10 sites
- Tudo o que está no Starter
- Fila de suporte prioritária

[Escolher Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Scale

$149 por mês

2,500 payments per 30 days

- 30 sites
- Everything in Growth
- Priority support

[Get Scale](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Enterprise

From $499 por mês

Custom volume and an SLA

- Unlimited sites
- Everything in Scale
- Onboarding and an SLA

[Talk to us](mailto:support@t3ratech.co.zw?subject=WavePay%20Enterprise)

[After the included payments a small percentage applies and falls as your volume grows. See the full price list.](https://wavepay.t3ratech.co.zw/pricing.html)

Perguntas

## Respostas antes de perguntar

Que meios de pagamento posso aceitar?

EcoCash, OneMoney, InnBucks, Telecash, O'mari and ZimSwitch through Paynow; Visa, Mastercard and PayPal; and crypto on eleven rails (Bitcoin, Ethereum, Solana, BNB, Litecoin, Dogecoin, Tron, USDT, USDC). 2Checkout is built and switches on when the provider approves our account.

Cobram uma percentagem das minhas vendas?

Only after your plan's included payments, and the percentage falls as your volume grows (from 2% down to 0.4%, with a small minimum per payment). Provider fees are paid to the provider at cost with no WavePay markup.

Posso testar sem dinheiro real?

Sim. O registo dá-lhe uma chave de teste que usa um simulador. Nunca chega a um fornecedor e não conta para o seu plano.

Como recebem os compradores a licença?

Quando um pagamento é liquidado, a WavePay envia uma chave de licença por e-mail e a sua aplicação pode verificar offline o direito assinado.

Um agente de IA pode usar a WavePay?

Sim. Indique-lhe o skill.md, o documento OpenAPI ou o servidor MCP. Um agente pode registar-se, definir preços, cobrar e reconciliar sem navegador.

Guias

## Respostas para o que está a construir

### Meios de pagamento

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### O seu tipo de software

[Extensões de navegador](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Jogos](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Aplicações](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [APIs](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bots](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Perguntas e guias

[Perguntas frequentes](https://wavepay.t3ratech.co.zw/faq.html), [Subscrições](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Compre agora, pague depois](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Modo de teste](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Guias](https://wavepay.t3ratech.co.zw/learn.html)

## Pronto para receber o primeiro pagamento?

Registo num pedido. Sem cartão, sem chamada.

[Começar grátis](https://wavepay.t3ratech.co.zw/pricing.html#register)[Ler a documentação](https://wavepay.t3ratech.co.zw/docs.html)
