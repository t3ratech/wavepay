# WavePay — pembayaran dan lisensi untuk perangkat lunak

> Terima EcoCash, kartu, dan PayPal dengan satu API. Daftar dalam satu permintaan, uji dengan uang palsu, lalu aktifkan lisensi, langganan, dan pengembalian dana.

Kini dengan langganan, cicilan, dan 2Checkout

# Dapatkan bayaran untuk perangkat lunak Anda lewat *setiap metode yang dimiliki pembeli Anda*

Satu API untuk EcoCash, OneMoney, InnBucks, ZimSwitch, kartu, dan PayPal. Daftar dalam satu permintaan, uji dengan uang palsu, lalu aktifkan dengan lisensi, langganan, dan pengembalian dana bawaan.

[Mulai gratis](https://wavepay.t3ratech.co.zw/pricing.html#register) [Baca dokumentasi](https://wavepay.t3ratech.co.zw/docs.html) [Untuk agen](https://wavepay.t3ratech.co.zw/skill.md)

- Paket gratis, tanpa kartu
- Tanpa biaya persentase atas penjualan Anda
- REST dan MCP

**9**metode pembayaran

**25**pembayaran gratis per bulan

**0%**biaya atas penjualan Anda

**15**bahasa

Metode pembayaran

## Setiap metode yang mungkin dimiliki pembeli

Dompet lokal untuk Zimbabwe, kartu dan PayPal untuk lainnya. Endpoint penyedia selalu menunjukkan apa yang aktif hari ini.

EcoCash OneMoney InnBucks Telecash O'mari ZimSwitch Visa Mastercard PayPal 2Checkout · segera hadir

Yang Anda dapatkan

## Checkout adalah bagian yang mudah. WavePay mengurus sisanya.

### Checkout terhosting dan dorongan dompet

Arahkan pembeli ke halaman terhosting, atau kirim permintaan EcoCash langsung ke ponsel mereka.

### Lisensi bawaan

Hak bertanda tangan, kunci lisensi lewat email, aktivasi perangkat, dan pemulihan. Aplikasi Anda memverifikasi secara luring.

### Langganan dan cicilan

Paket berulang, beli sekarang bayar nanti dengan kartu, dan masa tunggakan yang jelas sebelum akses berakhir.

### Pengembalian dana dan pembatalan

Pengembalian penuh dan sebagian lewat penyedia, dengan catatan siapa yang melakukannya dan mengapa.

### Lingkungan uji yang nyata

Kunci uji di samping kunci langsung, simulator, dan perjalanan waktu untuk melihat perpanjangan terjadi.

### Dibuat untuk agen

skill.md, OpenAPI, server MCP, dan alat WebMCP, sehingga AI dapat menyiapkan checkout untuk Anda.

Cara kerjanya

## Tiga permintaan dari nol hingga terbayar

1

### Daftar

Satu permintaan mengembalikan kunci langsung dan kunci uji. Paket gratis, langsung aktif.

2

### Jual

Buat checkout dan dapatkan URL terhosting, atau kirim permintaan dompet ke ponsel.

3

### Selesaikan

Webhook bertanda tangan atau polling mengonfirmasi uang masuk. Kunci lisensi dikirim otomatis lewat email.

Untuk pengembang

## Mulai dengan curl. Akhiri dengan kunci lisensi.

Setiap contoh dalam dokumentasi dijalankan lebih dulu di sandbox dengan kunci uji, sehingga Anda bisa mencoba dengan aman.

[Buka referensi API](https://wavepay.t3ratech.co.zw/docs.html)

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

Harga

## Harga berdasarkan pembayaran, bukan potongan

Paket bulanan tetap. Penyedia pembayaran mengenakan biayanya sendiri secara terpisah.

### Gratis

$0 selamanya

25 pembayaran per 30 hari

- 1 situs
- Semua metode pembayaran aktif
- Webhook bertanda tangan
- Buku pembayaran

[Daftar gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)

Paling populer

### Starter

$15 per bulan

100 pembayaran per 30 hari

- 3 situs
- Kupon dan promosi
- Webhook dan buku pembayaran

[Pilih Starter](https://wavepay.t3ratech.co.zw/pricing.html#register)

### Growth

$49 per bulan

500 pembayaran per 30 hari

- 10 situs
- Semua yang ada di Starter
- Antrean dukungan prioritas

[Pilih Growth](https://wavepay.t3ratech.co.zw/pricing.html#register)

Pertanyaan

## Jawaban sebelum Anda bertanya

Metode pembayaran apa yang bisa saya terima?

EcoCash, OneMoney, InnBucks, Telecash, O'mari, dan ZimSwitch lewat Paynow; Visa, Mastercard, dan PayPal untuk pembeli internasional. 2Checkout sudah dibangun dan akan aktif setelah penyedia menyetujui akun kami.

Apakah Anda mengambil persentase dari penjualan saya?

Tidak. Paket adalah harga bulanan tetap berdasarkan pembayaran yang diproses. Penyedia pembayaran mengenakan biayanya sendiri.

Bisakah saya menguji tanpa uang sungguhan?

Bisa. Pendaftaran memberi Anda kunci uji yang memakai simulator. Kunci itu tidak pernah menjangkau penyedia dan tidak dihitung dalam paket Anda.

Bagaimana pembeli mendapatkan lisensinya?

Saat pembayaran selesai, WavePay mengirim kunci lisensi lewat email, dan aplikasi Anda dapat memverifikasi hak bertanda tangan secara luring.

Bisakah agen AI menggunakan WavePay?

Bisa. Arahkan ke skill.md, dokumen OpenAPI, atau server MCP. Agen dapat mendaftar, menentukan harga, melakukan checkout, dan merekonsiliasi tanpa peramban.

Panduan

## Jawaban untuk apa yang Anda bangun

### Metode pembayaran

[EcoCash](https://wavepay.t3ratech.co.zw/accept-ecocash-payments.html), [OneMoney, InnBucks, Telecash, O'mari, ZimSwitch](https://wavepay.t3ratech.co.zw/accept-zimbabwe-wallet-payments.html), [Visa, Mastercard, PayPal](https://wavepay.t3ratech.co.zw/accept-card-and-paypal-payments.html)

### Jenis perangkat lunak Anda

[Ekstensi peramban](https://wavepay.t3ratech.co.zw/payments-for-browser-extensions.html), [Gim](https://wavepay.t3ratech.co.zw/payments-for-games.html), [Aplikasi](https://wavepay.t3ratech.co.zw/payments-for-apps.html), [API](https://wavepay.t3ratech.co.zw/payments-for-apis.html), [Bot](https://wavepay.t3ratech.co.zw/payments-for-bots.html)

### Pertanyaan dan panduan

[Tanya jawab](https://wavepay.t3ratech.co.zw/faq.html), [Langganan](https://wavepay.t3ratech.co.zw/guide-recurring-payments.html), [Beli sekarang, bayar nanti](https://wavepay.t3ratech.co.zw/guide-buy-now-pay-later.html), [Mode uji](https://wavepay.t3ratech.co.zw/guide-test-mode.html), [Panduan](https://wavepay.t3ratech.co.zw/learn.html)

## Siap menerima pembayaran pertama Anda?

Daftar dalam satu permintaan. Tanpa kartu, tanpa telepon.

[Mulai gratis](https://wavepay.t3ratech.co.zw/pricing.html#register)[Baca dokumentasi](https://wavepay.t3ratech.co.zw/docs.html)
