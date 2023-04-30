var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// ../../node_modules/.pnpm/@remix-run+dev@1.15.0_@remix-run+serve@1.15.0/node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_react3 = require("@vercel/analytics/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Analytics, {})
    ] })
  ] });
}

// app/routes/_app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => App2,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_remix = require("@vercel/remix"), import_jsx_runtime3 = require("react/jsx-runtime"), loader = async () => (0, import_remix.json)({ ok: !0 });
function App2() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Outlet, {});
}

// app/routes/_app.edge.tsx
var app_edge_exports = {};
__export(app_edge_exports, {
  default: () => Edge
});
var import_jsx_runtime4 = require("react/jsx-runtime");
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "Welcome to Remix@Edge" }) });
}

// app/routes/hello.tsx
var hello_exports = {};
__export(hello_exports, {
  config: () => config,
  default: () => Index
});
var import_jsx_runtime5 = require("react/jsx-runtime"), config = { runtime: "edge" };
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Welcome to Remix" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }) })
    ] })
  ] });
}

// app/routes/resources+/edge.ts
var edge_exports = {};
__export(edge_exports, {
  config: () => config2,
  loader: () => loader2
});
var import_remix2 = require("@vercel/remix"), config2 = { runtime: "edge" };
async function loader2() {
  return (0, import_remix2.json)({ ok: !0 });
}

// app/routes/_app.index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index2
});
var import_jsx_runtime6 = require("react/jsx-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "Welcome to Remix" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }) })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "140da108", entry: { module: "/build/entry.client-CMWUFOFV.js", imports: ["/build/_shared/chunk-Y75L6P3S.js", "/build/_shared/chunk-KPJXDEMN.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TX6S6FTW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app": { id: "routes/_app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_app-7SFYS3LS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.edge": { id: "routes/_app.edge", parentId: "routes/_app", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.edge-ID7NCIJR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.index/index": { id: "routes/_app.index/index", parentId: "routes/_app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_app.index/index-D7PDPP6O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/hello": { id: "routes/hello", parentId: "root", path: "hello", index: void 0, caseSensitive: void 0, module: "/build/routes/hello-LLL6UE72.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources+/edge": { id: "routes/resources+/edge", parentId: "root", path: "resources/edge", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/edge-KYVDZ6DP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-140DA108.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !0, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !0, v2_normalizeFormMethod: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_app": {
    id: "routes/_app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/_app.edge": {
    id: "routes/_app.edge",
    parentId: "routes/_app",
    path: "edge",
    index: void 0,
    caseSensitive: void 0,
    module: app_edge_exports
  },
  "routes/hello": {
    id: "routes/hello",
    parentId: "root",
    path: "hello",
    index: void 0,
    caseSensitive: void 0,
    module: hello_exports
  },
  "routes/resources+/edge": {
    id: "routes/resources+/edge",
    parentId: "root",
    path: "resources/edge",
    index: void 0,
    caseSensitive: void 0,
    module: edge_exports
  },
  "routes/_app.index/index": {
    id: "routes/_app.index/index",
    parentId: "routes/_app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
