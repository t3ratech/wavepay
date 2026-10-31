/* WavePay site behaviour: theme, language navigation, menus, scroll reveal, live status probes.
   Plain script, no framework. The pages are complete without it; this only adds comfort. */

(function () {
  "use strict";

  function cookie(name) {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  }
  function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=31536000; SameSite=Lax";
  }

  /* ---------- theme: light, dark or follow the system. The inline head script applies it before paint. ---------- */
  function applyTheme(pref) {
    var theme = pref === "light" || pref === "dark" ? pref : "";
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
    document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === (pref || "system")));
    });
  }
  document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
    button.addEventListener("click", function () {
      var pref = button.dataset.themeChoice;
      setCookie("wp_theme", pref);
      applyTheme(pref);
    });
  });
  applyTheme(cookie("wp_theme") || "system");

  /* ---------- language: each language is its own page, so choosing one goes there ---------- */
  document.querySelectorAll("select[data-lang-nav]").forEach(function (select) {
    select.addEventListener("change", function () {
      setCookie("wp_lang", select.options[select.selectedIndex].dataset.code || "");
      location.assign(select.value);
    });
  });

  /* ---------- menus: one open at a time, Escape and outside click close ---------- */
  var menus = Array.prototype.slice.call(document.querySelectorAll("details.menu, details.burger"));
  menus.forEach(function (menu) {
    menu.addEventListener("toggle", function () {
      if (menu.open) menus.forEach(function (other) { if (other !== menu) other.open = false; });
    });
  });
  document.addEventListener("click", function (event) {
    menus.forEach(function (menu) { if (menu.open && !menu.contains(event.target)) menu.open = false; });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    menus.forEach(function (menu) {
      if (menu.open) { menu.open = false; var summary = menu.querySelector("summary"); if (summary) summary.focus(); }
    });
  });

  /* ---------- scroll reveal: content is visible without JS; this only adds a soft entrance ---------- */
  var reveal = document.querySelectorAll(".reveal");
  if (reveal.length && "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); seen.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(function (el) { seen.observe(el); });
    // Failsafe: if the observer never reports (a hidden tab, an unusual viewport), show everything anyway.
    setTimeout(function () { reveal.forEach(function (el) { el.classList.add("in"); }); }, 2500);
  } else {
    reveal.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- status probes: each one reports a real HTTP outcome, never an assumed one ---------- */
  document.querySelectorAll("[data-probe]").forEach(function (el) {
    var pill = el.querySelector(".pill");
    var hint = el.querySelector("[data-probe-detail]");
    var started = performance.now();
    fetch(el.dataset.probe, { signal: AbortSignal.timeout(8000) }).then(function (res) {
      var ms = Math.round(performance.now() - started);
      if (pill) { pill.textContent = res.ok ? "ok · " + ms + "ms" : String(res.status); pill.className = "pill " + (res.ok ? "ok" : "bad"); }
      if (hint && res.ok) {
        res.clone().json().then(function (body) {
          hint.textContent = body.version !== undefined ? "v" + body.version : (body.service || "200 OK");
        }, function () { hint.textContent = "200 OK"; });
      }
    }, function () {
      if (pill) { pill.textContent = "down"; pill.className = "pill bad"; }
    });
  });
})();

/* ---- Search: one static index, matched in the browser; opens with "/" or the header button ---- */
(() => {
  const dialog = document.querySelector("[data-search-dialog]");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const input = dialog.querySelector("[data-search-input]");
  const list = dialog.querySelector("[data-search-results]");
  let index = null;
  let selected = -1;
  const load = () => index ? Promise.resolve(index) : fetch("/search-index.json").then((r) => r.json()).then((d) => (index = d));
  const score = (entry, words) => {
    let s = 0;
    for (const w of words) {
      if (entry.t.toLowerCase().includes(w)) s += 10;
      if (entry.h.toLowerCase().includes(w)) s += 4;
      if (entry.d.toLowerCase().includes(w)) s += 3;
      if (entry.x.toLowerCase().includes(w)) s += 1;
    }
    return words.every((w) => (entry.t + entry.h + entry.d + entry.x).toLowerCase().includes(w)) ? s : 0;
  };
  const render = (hits) => {
    selected = -1;
    list.textContent = "";
    if (!hits.length) {
      const li = document.createElement("li");
      li.className = "search-empty";
      li.textContent = input.value.trim() ? "Nothing found. Try fewer words." : "Type to search guides, docs and the API.";
      list.append(li);
      return;
    }
    for (const h of hits) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = h.u;
      const t = document.createElement("strong");
      t.textContent = h.t;
      const d = document.createElement("small");
      d.textContent = h.d;
      a.append(t, d);
      li.append(a);
      list.append(li);
    }
  };
  const run = () => load().then((data) => {
    const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    render(words.length ? data.map((e) => [score(e, words), e]).filter(([s]) => s > 0).sort((a, b) => b[0] - a[0]).slice(0, 8).map(([, e]) => e) : []);
  });
  const open = () => { dialog.showModal(); input.focus(); run(); };
  document.querySelectorAll("[data-search-open]").forEach((b) => b.addEventListener("click", open));
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName ?? "") && !dialog.open) { e.preventDefault(); open(); }
  });
  input.addEventListener("input", run);
  input.addEventListener("keydown", (e) => {
    const links = [...list.querySelectorAll("a")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      selected = (selected + (e.key === "ArrowDown" ? 1 : -1) + links.length) % Math.max(links.length, 1);
      links[selected]?.focus();
    }
    if (e.key === "Enter" && links[0] && selected < 0) { e.preventDefault(); location.href = links[0].href; }
  });
  list.addEventListener("keydown", (e) => {
    const links = [...list.querySelectorAll("a")];
    const i = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); links[Math.min(i + 1, links.length - 1)]?.focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); (i <= 0 ? input : links[i - 1]).focus(); }
  });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
})();

/* ---- Code blocks: a labelled header with a copy button, added to every <pre><code> ---- */
document.querySelectorAll("pre > code").forEach((code) => {
  const pre = code.parentElement;
  if (pre.closest(".code-block") || pre.closest(".mock")) return;
  const text = code.textContent ?? "";
  const label = /^\s*(curl|\$|#)/.test(text) ? "shell" : /^\s*[{[]/.test(text) ? "json" : "code";
  const box = document.createElement("div");
  box.className = "code-block";
  const head = document.createElement("header");
  const name = document.createElement("span");
  name.textContent = label;
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Copy";
  button.addEventListener("click", () => navigator.clipboard?.writeText(text).then(() => { button.textContent = "Copied"; setTimeout(() => { button.textContent = "Copy"; }, 1500); }));
  head.append(name, button);
  pre.replaceWith(box);
  box.append(head, pre);
});

/* ---- The language dropdown closes when focus or a click leaves it, and on Escape ---- */
document.querySelectorAll(".lang-dd, .menu").forEach((d) => {
  document.addEventListener("click", (e) => { if (!d.contains(e.target)) d.removeAttribute("open"); });
  d.addEventListener("keydown", (e) => { if (e.key === "Escape") { d.removeAttribute("open"); d.querySelector("summary")?.focus(); } });
});

/* ---- Pricing: monthly / annual switch (annual is ten months for twelve; the struck figure is twelve months) ---- */
document.querySelectorAll(".billing-switch").forEach((sw) => {
  const root = document.querySelector("[data-billing-root]");
  if (!root) return;
  sw.querySelectorAll("button[data-billing]").forEach((b) => b.addEventListener("click", () => {
    const annual = b.dataset.billing === "annual";
    sw.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    root.querySelectorAll(".price .m").forEach((e) => { e.hidden = annual; });
    root.querySelectorAll(".price .a").forEach((e) => { e.hidden = !annual; });
  }));
});
