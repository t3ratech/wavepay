# WavePay — pagamentos e licenças para software

> Aceite EcoCash, cartões e PayPal com uma só API. Registe-se num pedido, teste com dinheiro fictício e passe para produção com licenças, subscrições e reembolsos.

Agora com subscrições, pagamentos em prestações e 2Checkout

# Seja pago pelo seu software em *todos os meios que os seus clientes usam*

Uma API para EcoCash, OneMoney, InnBucks, ZimSwitch, cartões e PayPal. Registe-se num pedido, teste com dinheiro fictício e passe para produção com licenças, subscrições e reembolsos incluídos.

[Começar grátis](https://wavepay.t3ratech.co.zw/pricing.html#register) [Ler a documentação](https://wavepay.t3ratech.co.zw/docs.html) [Para agentes](https://wavepay.t3ratech.co.zw/skill.md)

- Plano gratuito, sem cartão
- Sem comissão sobre as suas vendas
- REST e MCP

**9**meios de pagamento

**25**pagamentos gratuitos por mês

**0%**de taxa sobre as suas vendas

**15**idiomas

Meios de pagamento

## Todos os meios que um cliente pode ter

Carteiras móveis locais para o Zimbabué, cartões e PayPal para o resto do mundo. O ponto de acesso dos fornecedores indica sempre o que está ativo hoje.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · em breve

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

Planos mensais fixos. Os fornecedores de pagamento cobram as suas próprias taxas.

### Grátis

$0 para sempre

25 pagamentos por 30 dias

- 1 site
- Todos os meios de pagamento ativos
- Webhooks assinados
- Registo de pagamentos

[Registar grátis](https://wavepay.t3ratech.co.zw/pricing.html#register)

Mais popular

### Basic

$9 por mês

250 pagamentos por 30 dias

- 3 sites
- Cupões e promoções
- Webhooks e registo

[Escolher Basic](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Pro

$29 por mês

2500 pagamentos por 30 dias

- 10 sites
- Tudo o que está no Basic
- Fila de suporte prioritária

[Escolher Pro](https://wavepay.t3ratech.co.zw/pricing.html#register)

Perguntas

## Respostas antes de perguntar

Que meios de pagamento posso aceitar?

EcoCash, OneMoney, InnBucks, Telecash, O'mari e ZimSwitch através da Paynow; Visa, Mastercard e PayPal para compradores internacionais. O 2Checkout está construído e ativa-se quando o fornecedor aprovar a nossa conta.

Cobram uma percentagem das minhas vendas?

Não. Os planos são preços mensais fixos conforme os pagamentos processados. Os fornecedores de pagamento cobram as suas próprias taxas.

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
