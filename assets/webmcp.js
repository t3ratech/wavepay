/*
 * WebMCP: tells an AI agent in the browser what this site can do, as tools it can call.
 *
 * Browsers that implement the WebMCP API expose `modelContext`; each tool below is registered with a
 * name, a description, a JSON-Schema input and an execute function. Nothing happens in browsers
 * without it. The tools call the same public API the documentation describes, on the same origin.
 */
(function () {
  "use strict";
  var DOCS = { api: "docs.html#api", checkout: "docs.html#checkout", webhooks: "docs.html#webhooks", mcp: "docs.html#mcp", errors: "docs.html#errors", pricing: "pricing.html", providers: "docs.html#providers", status: "status.html", guides: "learn.html" };

  function result(value, isError) {
    return { content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }], isError: Boolean(isError) };
  }

  function tools(origin, doFetch, navigate) {
    function call(method, path, body) {
      var init = { method: method, headers: { accept: "application/json" } };
      if (body !== undefined) { init.headers["content-type"] = "application/json"; init.body = JSON.stringify(body); }
      return doFetch(origin + path, init).then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (data) { return result(data, !response.ok); });
      }, function (error) { return result("Network error: " + (error && error.message ? error.message : "request failed"), true); });
    }
    return [
      {
        name: "wavepay_list_payment_rails",
        description: "List the payment rails WavePay offers (EcoCash, OneMoney, InnBucks, ZimSwitch, cards, PayPal, 2Checkout and more), each marked live or not yet live.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true },
        execute: function () { return call("GET", "/v2/site/providers"); },
      },
      {
        name: "wavepay_get_pricing",
        description: "Get the plans, prices and promotions for a product id sold through WavePay.",
        inputSchema: { type: "object", properties: { productId: { type: "string", description: "The product id, for example t3rnel-browser" } }, required: ["productId"], additionalProperties: false },
        annotations: { readOnlyHint: true },
        execute: function (args) { return call("GET", "/v2/pricing?productId=" + encodeURIComponent(String(args && args.productId || ""))); },
      },
      {
        name: "wavepay_open_documentation",
        description: "Open a part of the WavePay documentation in this tab. Topics: " + Object.keys(DOCS).join(", ") + ".",
        inputSchema: { type: "object", properties: { topic: { type: "string", enum: Object.keys(DOCS) } }, required: ["topic"], additionalProperties: false },
        annotations: { readOnlyHint: true },
        execute: function (args) {
          var target = DOCS[args && args.topic];
          if (!target) return Promise.resolve(result("Unknown topic. Choose one of: " + Object.keys(DOCS).join(", "), true));
          navigate("/" + target);
          return Promise.resolve(result("Opening /" + target));
        },
      },
      {
        name: "wavepay_register_merchant",
        description: "Register a merchant account. Returns a merchantId plus a live key and a test key, each shown once. Free tier, no card needed. Rate limited to five registrations a day per client; ask the user before calling.",
        inputSchema: { type: "object", properties: { name: { type: "string", description: "The product or business name" }, ownerEmail: { type: "string", format: "email", description: "An inbox the owner reads" } }, required: ["name", "ownerEmail"], additionalProperties: false },
        annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },
        execute: function (args) { return call("POST", "/v2/register", { name: args && args.name, ownerEmail: args && args.ownerEmail }); },
      },
    ];
  }

  function register(context, origin, doFetch, navigate) {
    var registered = [];
    tools(origin, doFetch, navigate).forEach(function (tool) {
      try { context.registerTool(tool); registered.push(tool.name); } catch (error) { /* a tool the browser refuses is skipped, not fatal */ }
    });
    return registered;
  }

  var api = { tools: tools, register: register, DOCS: DOCS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (typeof document === "undefined") return;

  window.WavePayWebMCP = api;
  var attempts = 0;
  (function attach() {
    var context = document.modelContext || (navigator && navigator.modelContext);
    if (context && typeof context.registerTool === "function") {
      register(context, window.WAVEPAY_API || location.origin, window.fetch.bind(window), function (path) { location.assign(path); });
      return;
    }
    // An agent runtime may attach the API just after load.
    if (attempts++ < 20) setTimeout(attach, 150);
  })();
})();
