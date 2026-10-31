> Every WavePay error code with its HTTP status and what it means.

API reference

# Errors

Every error is JSON, `{ "error": { "code": "…" } }`, with the HTTP status below.

| Code | HTTP | Meaning |
| --- | --- | --- |
| `INVALID_AMOUNT` | 400 | See the operation that returned it. |
| `INVALID_CURRENCY` | 400 | See the operation that returned it. |
| `INVALID_OTP` | 400 | See the operation that returned it. |
| `INVALID_REQUEST` | 400 | The request is malformed or a field is missing or not allowed. |
| `PROMO_CODE_INVALID` | 400 | See the operation that returned it. |
| `PROOF_EXPIRED` | 400 | See the operation that returned it. |
| `SETTLEMENT_PROVIDER_UNSUPPORTED` | 400 | That provider cannot be connected as your own account. |
| `INVALID_DEVICE_PROOF` | 401 | See the operation that returned it. |
| `PROVIDER_SIGNATURE_INVALID` | 401 | See the operation that returned it. |
| `SERVICE_UNAUTHORIZED` | 401 | The x-wavepay-service-key header is missing, wrong or revoked. |
| `UNAUTHORIZED` | 401 | Missing or wrong credentials. |
| `CHARGE_DECLINED` | 402 | See the operation that returned it. |
| `CHECKOUT_ASSOCIATION_DENIED` | 403 | See the operation that returned it. |
| `FEATURE_DISABLED` | 403 | See the operation that returned it. |
| `LICENSE_REVOKED` | 403 | See the operation that returned it. |
| `LIVE_KEY_REQUIRED` | 403 | A test key cannot do this; use your live key. |
| `MERCHANT_SCOPE` | 403 | Your key may not touch this resource (it belongs to another merchant, or the route needs the global key). |
| `MERCHANT_SCOPE_REQUIRED` | 403 | This route needs a merchant key, not the global key. |
| `NOT_A_TEST_KEY` | 403 | See the operation that returned it. |
| `RESERVATION_ASSOCIATION_DENIED` | 403 | See the operation that returned it. |
| `ACTIVATION_NOT_FOUND` | 404 | See the operation that returned it. |
| `BNPL_NOT_FOUND` | 404 | See the operation that returned it. |
| `COUPON_NOT_FOUND` | 404 | See the operation that returned it. |
| `KEY_NOT_FOUND` | 404 | See the operation that returned it. |
| `LICENSE_NOT_FOUND` | 404 | See the operation that returned it. |
| `MERCHANT_NOT_FOUND` | 404 | See the operation that returned it. |
| `PAYMENT_NOT_FOUND` | 404 | See the operation that returned it. |
| `PLAN_NOT_FOUND` | 404 | See the operation that returned it. |
| `PRODUCT_NOT_FOUND` | 404 | See the operation that returned it. |
| `PROMOTION_NOT_FOUND` | 404 | See the operation that returned it. |
| `RECOVERY_NOT_FOUND` | 404 | See the operation that returned it. |
| `SITE_NOT_FOUND` | 404 | See the operation that returned it. |
| `SUBSCRIPTION_NOT_FOUND` | 404 | See the operation that returned it. |
| `UNKNOWN_CHECKOUT` | 404 | See the operation that returned it. |
| `UNKNOWN_LICENSE` | 404 | See the operation that returned it. |
| `COLLECTION_NOT_SUPPORTED` | 409 | See the operation that returned it. |
| `COUPON_ALREADY_REDEEMED` | 409 | See the operation that returned it. |
| `COUPON_NOT_REDEEMABLE` | 409 | See the operation that returned it. |
| `ENTITLEMENT_UNAVAILABLE` | 409 | See the operation that returned it. |
| `IDEMPOTENCY_CONFLICT` | 409 | The same Idempotency-Key was used with a different request. |
| `LICENSE_ACTIVATION_LIMIT_REACHED` | 409 | See the operation that returned it. |
| `LICENSE_NOT_READY` | 409 | See the operation that returned it. |
| `LICENSING_DISABLED` | 409 | See the operation that returned it. |
| `MERCHANT_ALREADY_REGISTERED` | 409 | That owner email already has a merchant. |
| `NO_CONTACT` | 409 | See the operation that returned it. |
| `NOT_A_TEST_PAYMENT` | 409 | See the operation that returned it. |
| `OTP_UNSUPPORTED` | 409 | See the operation that returned it. |
| `PAYMENT_NOT_APPROVED` | 409 | See the operation that returned it. |
| `PAYMENT_NOT_READY` | 409 | See the operation that returned it. |
| `PAYMENT_NOT_REFUNDABLE` | 409 | See the operation that returned it. |
| `PAYMENT_REPLAY` | 409 | See the operation that returned it. |
| `PLAN_NOT_RECURRING` | 409 | See the operation that returned it. |
| `PROMO_CODE_EXHAUSTED` | 409 | See the operation that returned it. |
| `PROMO_CODE_REVOKED` | 409 | See the operation that returned it. |
| `PROMOTION_NOT_ACTIVE` | 409 | See the operation that returned it. |
| `PROVIDER_DISABLED` | 409 | That provider is not enabled on this deployment, or the merchant's account for it cannot be used. |
| `REFUND_EXCEEDS_PAYMENT` | 409 | See the operation that returned it. |
| `REFUND_REFUSED` | 409 | See the operation that returned it. |
| `REFUND_UNSUPPORTED` | 409 | See the operation that returned it. |
| `RESERVATION_STATE_CONFLICT` | 409 | See the operation that returned it. |
| `RESERVATION_UNAVAILABLE` | 409 | See the operation that returned it. |
| `SUBSCRIPTION_NOT_ACTIVE` | 409 | See the operation that returned it. |
| `TRANSFER_ALREADY_USED` | 409 | That transaction already settled a payment. |
| `CREDENTIALS_REJECTED` | 422 | The provider refused the credentials you connected. |
| `ENVIRONMENT_MISMATCH` | 422 | Sandbox credentials on a live deployment, or the reverse. |
| `PAYMENT_MISMATCH` | 422 | The payment, amount or address does not match what was asked for. |
| `MERCHANT_LIMIT_REACHED` | 429 | The Free plan's monthly allowance is used. Paid plans are never refused: they are charged by usage. |
| `RATE_LIMITED` | 429 | Too many requests; wait and retry. |
| `PROVIDER_AUTH_FAILED` | 502 | See the operation that returned it. |
| `PROVIDER_RESPONSE_INVALID` | 502 | See the operation that returned it. |
| `PROVIDER_UNAVAILABLE` | 502 | The provider could not be reached; retry. |
| `CONFIGURATION_ERROR` | 503 | See the operation that returned it. |
| `CRYPTO_BUSY` | 503 | Every payable amount for that coin is taken by open payments; retry shortly. |
| `RATE_UNAVAILABLE` | 503 | No crypto price newer than ten minutes for that coin; retry shortly. |
| `SETTLEMENT_ACCOUNT_UNUSABLE` | 503 | Your connected account's credentials stopped working; reconnect it. The payment is refused, never paid to anyone else. |
