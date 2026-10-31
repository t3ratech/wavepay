# WavePay — pagos y licencias para software

> Acepta EcoCash, tarjetas y PayPal con una sola API. Regístrate en una solicitud, prueba con dinero ficticio y pasa a producción con licencias, suscripciones y reembolsos.

Ahora con suscripciones, pagos a plazos y 2Checkout

# Cobra por tu software en *todos los medios de pago que usan tus clientes*

Una API para EcoCash, OneMoney, InnBucks, ZimSwitch, tarjetas y PayPal. Regístrate en una solicitud, prueba con dinero ficticio y pasa a producción con licencias, suscripciones y reembolsos incluidos.

[Empieza gratis](https://wavepay.t3ratech.co.zw/pricing.html#register) [Leer la documentación](https://wavepay.t3ratech.co.zw/docs.html) [Para agentes](https://wavepay.t3ratech.co.zw/skill.md)

- Plan gratuito, sin tarjeta
- Sin comisión sobre tus ventas
- REST y MCP

**9**medios de pago

**25**pagos gratis al mes

**0%**de comisión sobre tus ventas

**15**idiomas

Medios de pago

## Todos los medios que un comprador puede tener

Carteras móviles locales para Zimbabue, tarjetas y PayPal para el resto. El punto de acceso de proveedores siempre indica qué está activo hoy.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · próximamente

Qué obtienes

## Cobrar es la parte fácil. WavePay es el resto.

### Pago alojado y solicitud a la cartera

Envía a los compradores a una página alojada o lanza una solicitud de EcoCash directamente a su teléfono.

### Licencias integradas

Derechos firmados, claves de licencia por correo, activación de dispositivos y recuperación. Tu aplicación verifica sin conexión.

### Suscripciones y pagos a plazos

Planes recurrentes, compra ahora y paga después con tarjeta, y un plazo claro de demora antes de que termine el acceso.

### Reembolsos y reversiones

Reembolsos totales o parciales a través del proveedor, con constancia de quién lo hizo y por qué.

### Un entorno de pruebas real

Una clave de prueba junto a tu clave real, un simulador y viaje en el tiempo para ver una renovación.

### Hecho para agentes

skill.md, OpenAPI, un servidor MCP y herramientas WebMCP: una IA puede configurar el pago por ti.

Cómo funciona

## Tres solicitudes de cero a cobrado

1

### Registrarte

Una solicitud devuelve una clave real y una clave de prueba. Plan gratuito, activo al instante.

2

### Vender

Crea un pago y obtén una URL alojada, o lanza una solicitud a un teléfono.

3

### Liquidar

Un webhook firmado o una consulta confirma el dinero. La clave de licencia se envía sola.

Para desarrolladores

## Empieza con curl. Termina con una clave de licencia.

Cada ejemplo de la documentación se ejecuta primero en el entorno de pruebas con una clave de prueba, así puedes romper cosas sin riesgo.

[Abrir la referencia de la API](https://wavepay.t3ratech.co.zw/docs.html)

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

Precios

## Precio por pagos procesados, no por comisión

Planes mensuales fijos. Los proveedores de pago cobran sus propias tarifas aparte.

### Gratis

$0 para siempre

25 pagos cada 30 días

- 1 sitio
- Todos los medios de pago activos
- Webhooks firmados
- Registro de pagos

[Regístrate gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)

El más elegido

### Basic

$9 al mes

250 pagos cada 30 días

- 3 sitios
- Cupones y promociones
- Webhooks y registro

[Elegir Basic](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Pro

$29 al mes

2500 pagos cada 30 días

- 10 sitios
- Todo lo de Basic
- Cola de soporte prioritaria

[Elegir Pro](https://wavepay.t3ratech.co.zw/pricing.html#register)

Preguntas

## Respuestas antes de que preguntes

¿Qué medios de pago puedo aceptar?

EcoCash, OneMoney, InnBucks, Telecash, O'mari y ZimSwitch mediante Paynow; Visa, Mastercard y PayPal para compradores internacionales. 2Checkout está construido y se activa cuando el proveedor apruebe nuestra cuenta.

¿Cobráis un porcentaje de mis ventas?

No. Los planes son precios mensuales fijos según los pagos procesados. Los proveedores de pago cobran sus propias tarifas.

¿Puedo probar sin dinero real?

Sí. El registro te da una clave de prueba que usa un simulador. Nunca llega a un proveedor y no cuenta para tu plan.

¿Cómo reciben los compradores su licencia?

Cuando un pago se liquida, WavePay envía una clave de licencia por correo y tu aplicación puede verificar el derecho firmado sin conexión.

¿Puede un agente de IA usar WavePay?

Sí. Indícale skill.md, el documento OpenAPI o el servidor MCP. Un agente puede registrarse, fijar precios, cobrar y conciliar sin navegador.

Guías

## Respuestas para lo que estás construyendo

### Medios de pago

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Tu tipo de software

[Extensiones de navegador](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Juegos](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Aplicaciones](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [APIs](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bots](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Preguntas y guías

[Preguntas frecuentes](https://wavepay.t3ratech.co.zw/faq.html), [Suscripciones](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Compra ahora, paga después](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Modo de prueba](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Guías](https://wavepay.t3ratech.co.zw/learn.html)

## ¿Listo para cobrar tu primer pago?

Regístrate en una solicitud. Sin tarjeta, sin llamadas.

[Empieza gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)[Leer la documentación](https://wavepay.t3ratech.co.zw/docs.html)
