/* WavePay site chrome — prefs (theme/lang), GA4, live status probes.
   No framework; everything here is <10KB and runs after first paint. */

const WAVEPAY_API = "https://t3rnel-wavepay-production.t3ratech.workers.dev";

/* GA4 — set to the property measurement id once created (README: analytics).
   A falsey value makes the loader a no-op, so local previews stay clean. */
const GA4_MEASUREMENT_ID = "G-NBFP6LVCZT";

const LOCALES = {
  en: "English",
  sn: "chiShona",
  nd: "isiNdebele",
};

const I18N = {
  "nav.home":     { en: "Overview", sn: "Mawonekedwe", nd: "Ukubuka" },
  "nav.pricing":  { en: "Pricing", sn: "Mitengo", nd: "Intengo" },
  "nav.docs":     { en: "Docs", sn: "Zvinyorwa", nd: "Amabhuku" },
  "nav.status":   { en: "Status", sn: "Mamiriro", nd: "Isimo" },
  "hero.eyebrow": { en: "Payments for software, anywhere", sn: "Mari yezvirongwa — pasi rose", nd: "Inkokhelo yezinhlelo — kuyo yonke indawo" },
  "hero.title":   { en: "One POST registers you. The next POST is a checkout.", sn: "POST imwe kukunyoresa. Iyotevera inobhadhara.", nd: "I-POST eyodwa iyakubhalisa. Elandelayo iyabhiza." },
  "hero.lede":    { en: "WavePay is the checkout, licensing and settlement rail for software — apps, browser extensions, games, APIs and bots. Buyers pay with what they have: EcoCash, OneMoney, InnBucks, Telecash, O'mari, ZimSwitch, Visa, Mastercard or PayPal.", sn: "WavePay ndiyo nzira yekubhadhara uye licences yezvirongwa. Vanobhadhara nevanacho: EcoCash, OneMoney, InnBucks, ZimSwitch, Visa, Mastercard kana PayPal.", nd: "I-WavePay yisiqephu senkokhelo lelicence yezinhlelo. Abathengi bakhokha ngalokhu abanalo: EcoCash, OneMoney, InnBucks, ZimSwitch, Visa, Mastercard kumbe PayPal." },
  "cta.start":    { en: "Get merchant access", sn: "Tora merchant key", nd: "Thola i-merchant key" },
  "cta.docs":     { en: "Read the docs", sn: "Verenga zvinyorwa", nd: "Funda amabhuku" },
  "price.title":  { en: "Merchant pricing", sn: "Mitengo ye-merchant", nd: "Intengo ye-merchant" },
  "status.title": { en: "Live status", sn: "Mamiriro azvino", nd: "Isimo samanje" },
  "foot.line":    { en: "Built by T3raTech. Ships worldwide; every Zimbabwean rail covered.", sn: "Yakagadzirwa naT3raTech. Inoshanda pasi rose — nzira dzese dzeZimbabwe dzinemo.", nd: "Yenziwe yiT3raTech. Isebenza kuyo yonke indawo — zonke izindlela zeZimbabwe zifakwe." },
};

function cookie(name) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}
function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

/* ---------- theme: cookie → system, applied before paint via inline script ---------- */
function applyTheme(pref) {
  const theme = pref === "light" || pref === "dark" ? pref : "";
  if (theme) document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;
  document.querySelectorAll("[data-theme-choice]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.themeChoice === (pref || "system")));
  });
}
window.__wpTheme = (pref) => { setCookie("wp_theme", pref); applyTheme(pref); };
applyTheme(cookie("wp_theme") || "system");

/* ---------- i18n ---------- */
function applyLang(code) {
  const lang = LOCALES[code] ? code : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const dict = I18N[el.dataset.i18n];
    if (dict) el.textContent = dict[lang] || dict.en;
  });
  document.querySelectorAll("[data-lang-choice]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.langChoice === lang));
  });
}
window.__wpLang = (code) => { setCookie("wp_lang", code); applyLang(code); };

document.addEventListener("DOMContentLoaded", () => {
  const q = new URLSearchParams(location.search).get("lang");
  applyLang(q || cookie("wp_lang") || (navigator.language || "en").split("-")[0]);

  /* GA4 — loaded only for a configured id, never on file:// previews. */
  if (GA4_MEASUREMENT_ID.startsWith("G-") && GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX" && location.protocol === "https:") {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    const gtag = (...a) => window.dataLayer.push(a);
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
  }

  /* Status probes — every probe reports a real HTTP outcome, never assumed. */
  document.querySelectorAll("[data-probe]").forEach(async (el) => {
    const url = el.dataset.probe;
    const pill = el.querySelector(".pill");
    const started = performance.now();
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      const ms = Math.round(performance.now() - started);
      const ok = res.ok;
      if (pill) {
        pill.textContent = ok ? `ok · ${ms}ms` : `${res.status}`;
        pill.className = `pill ${ok ? "ok" : "bad"}`;
      }
      const hint = el.querySelector("[data-probe-detail]");
      if (hint && ok) {
        try {
          const body = await res.clone().json();
          hint.textContent = body.version !== undefined ? `v${body.version}` : (body.service || "200 OK");
        } catch { hint.textContent = "200 OK"; }
      }
    } catch {
      if (pill) { pill.textContent = "down"; pill.className = "pill bad"; }
    }
  });
});
