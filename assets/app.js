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
