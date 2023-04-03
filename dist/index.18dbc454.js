// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _map = require("./map");
var _worldGeojson = require("../data/world.geojson");
var _worldGeojsonDefault = parcelHelpers.interopDefault(_worldGeojson);
var _laureatesJson = require("../data/laureates.json");
var _laureatesJsonDefault = parcelHelpers.interopDefault(_laureatesJson);
console.log("countries", (0, _worldGeojsonDefault.default));
console.log("laureates", (0, _laureatesJsonDefault.default));
(0, _map.drawMap)((0, _laureatesJsonDefault.default), (0, _worldGeojsonDefault.default));

},{"./map":"kvSuP","../data/laureates.json":"iCjFA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/world.geojson":"5bQcD"}],"kvSuP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawMap", ()=>drawMap);
var _d3Selection = require("d3-selection");
var _d3Geo = require("d3-geo");
var _d3Transition = require("d3-transition");
var _scales = require("./scales");
const drawMap = (laureates, countries)=>{
    // Perform calculations
    laureates.forEach((laureate)=>{
        if (laureate.birth_country !== "") {
            const country = countries.features.find((f)=>f.properties.name === laureate.birth_country);
            if (country.properties.laureates) country.properties.laureates.push(laureate);
            else country.properties["laureates"] = [
                laureate
            ];
        }
    });
    // Dimensions
    const width = 1400;
    const height = 800;
    // Append SVG container
    const svg = (0, _d3Selection.select)("#map").append("svg").attr("viewBox", `0 0 ${width} ${height}`);
    // Define projection
    const projection = (0, _d3Geo.geoEqualEarth)().scale(300).translate([
        width / 2,
        height / 2
    ]);
    // Initialize the path generator
    const geoPathGenerator = (0, _d3Geo.geoPath)().projection(projection);
    // Append country fills
    svg.selectAll(".path-mercator").data(countries.features).join("path").attr("class", "countries path-mercator").attr("d", geoPathGenerator).attr("fill", (d)=>d.properties.laureates ? (0, _scales.getCountryColor)(d.properties.laureates.length) : "#f8fcff").attr("stroke", "#242424").attr("stroke-opacity", 0.5).on("mouseenter", (e, d)=>{
        (0, _d3Selection.select)("#map-tooltip").text(`${d.properties.name}, ${d.properties.laureates ? d.properties.laureates.length : 0} laureates`).transition().style("opacity", 1);
    }).on("mouseleave", ()=>{
        (0, _d3Selection.select)("#map-tooltip").transition().style("opacity", 0);
    });
};

},{"d3-selection":"gn9gd","d3-geo":"01Z75","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./scales":"NYsfE","d3-transition":"4lorl"}],"gn9gd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>(0, _createJsDefault.default));
parcelHelpers.export(exports, "creator", ()=>(0, _creatorJsDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localJsDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherJsDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceJsDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesJsDefault.default));
parcelHelpers.export(exports, "pointer", ()=>(0, _pointerJsDefault.default));
parcelHelpers.export(exports, "pointers", ()=>(0, _pointersJsDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectJsDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllJsDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorJsDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllJsDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _styleJs.styleValue));
parcelHelpers.export(exports, "window", ()=>(0, _windowJsDefault.default));
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _localJs = require("./local.js");
var _localJsDefault = parcelHelpers.interopDefault(_localJs);
var _matcherJs = require("./matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _pointersJs = require("./pointers.js");
var _pointersJsDefault = parcelHelpers.interopDefault(_pointersJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _indexJs = require("./selection/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _selectorJs = require("./selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
var _selectorAllJs = require("./selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
var _styleJs = require("./selection/style.js");
var _windowJs = require("./window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);

},{"./create.js":false,"./creator.js":"a6062","./local.js":false,"./matcher.js":"hovSo","./namespace.js":"a23xG","./namespaces.js":"dDfgS","./pointer.js":false,"./pointers.js":false,"./select.js":"4pqgd","./selectAll.js":false,"./selection/index.js":"fK3Dl","./selector.js":"7VF9r","./selectorAll.js":"2SKTE","./selection/style.js":"GUHZ1","./window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6062":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespacesJs.xhtml) && document.documentElement.namespaceURI === (0, _namespacesJs.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
exports.default = function(name) {
    var fullname = (0, _namespaceJsDefault.default)(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

},{"./namespace.js":"a23xG","./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a23xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
exports.default = function(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return (0, _namespacesJsDefault.default).hasOwnProperty(prefix) ? {
        space: (0, _namespacesJsDefault.default)[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
};

},{"./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDfgS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hovSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher);
exports.default = function(selector) {
    return function() {
        return this.matches(selector);
    };
};
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pqgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new (0, _indexJs.Selection)([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new (0, _indexJs.Selection)([
        [
            selector
        ]
    ], (0, _indexJs.root));
};

},{"./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fK3Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectChildJs = require("./selectChild.js");
var _selectChildJsDefault = parcelHelpers.interopDefault(_selectChildJs);
var _selectChildrenJs = require("./selectChildren.js");
var _selectChildrenJsDefault = parcelHelpers.interopDefault(_selectChildrenJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _enterJs = require("./enter.js");
var _enterJsDefault = parcelHelpers.interopDefault(_enterJs);
var _exitJs = require("./exit.js");
var _exitJsDefault = parcelHelpers.interopDefault(_exitJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _orderJs = require("./order.js");
var _orderJsDefault = parcelHelpers.interopDefault(_orderJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _nodesJs = require("./nodes.js");
var _nodesJsDefault = parcelHelpers.interopDefault(_nodesJs);
var _nodeJs = require("./node.js");
var _nodeJsDefault = parcelHelpers.interopDefault(_nodeJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _classedJs = require("./classed.js");
var _classedJsDefault = parcelHelpers.interopDefault(_classedJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _htmlJs = require("./html.js");
var _htmlJsDefault = parcelHelpers.interopDefault(_htmlJs);
var _raiseJs = require("./raise.js");
var _raiseJsDefault = parcelHelpers.interopDefault(_raiseJs);
var _lowerJs = require("./lower.js");
var _lowerJsDefault = parcelHelpers.interopDefault(_lowerJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _datumJs = require("./datum.js");
var _datumJsDefault = parcelHelpers.interopDefault(_datumJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: (0, _selectChildJsDefault.default),
    selectChildren: (0, _selectChildrenJsDefault.default),
    filter: (0, _filterJsDefault.default),
    data: (0, _dataJsDefault.default),
    enter: (0, _enterJsDefault.default),
    exit: (0, _exitJsDefault.default),
    join: (0, _joinJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: selection_selection,
    order: (0, _orderJsDefault.default),
    sort: (0, _sortJsDefault.default),
    call: (0, _callJsDefault.default),
    nodes: (0, _nodesJsDefault.default),
    node: (0, _nodeJsDefault.default),
    size: (0, _sizeJsDefault.default),
    empty: (0, _emptyJsDefault.default),
    each: (0, _eachJsDefault.default),
    attr: (0, _attrJsDefault.default),
    style: (0, _styleJsDefault.default),
    property: (0, _propertyJsDefault.default),
    classed: (0, _classedJsDefault.default),
    text: (0, _textJsDefault.default),
    html: (0, _htmlJsDefault.default),
    raise: (0, _raiseJsDefault.default),
    lower: (0, _lowerJsDefault.default),
    append: (0, _appendJsDefault.default),
    insert: (0, _insertJsDefault.default),
    remove: (0, _removeJsDefault.default),
    clone: (0, _cloneJsDefault.default),
    datum: (0, _datumJsDefault.default),
    on: (0, _onJsDefault.default),
    dispatch: (0, _dispatchJsDefault.default),
    [Symbol.iterator]: (0, _iteratorJsDefault.default)
};
exports.default = selection;

},{"./select.js":"aK9lB","./selectAll.js":"8U28K","./selectChild.js":"hBGg0","./selectChildren.js":"hnJ1V","./filter.js":"i1GfU","./data.js":"jIP7J","./enter.js":"27tIy","./exit.js":"6ubri","./join.js":"g7QcH","./merge.js":"fXm9Z","./order.js":"cmxvd","./sort.js":"4UUI2","./call.js":"bsAaT","./nodes.js":"jjFrN","./node.js":"gPGkg","./size.js":"coOTw","./empty.js":"8ybxO","./each.js":"9Y1px","./attr.js":"k8cb1","./style.js":"GUHZ1","./property.js":"f4q4V","./classed.js":"jd3ig","./text.js":"dVAdB","./html.js":"egFAg","./raise.js":"4Xi1m","./lower.js":"l1I8n","./append.js":"1GNgv","./insert.js":"3Xphl","./remove.js":"iNsSa","./clone.js":"jfNc9","./datum.js":"lMowl","./on.js":"ktlxw","./dispatch.js":"eZMTj","./iterator.js":"32Fgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aK9lB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
exports.default = function(select) {
    if (typeof select !== "function") select = (0, _selectorJsDefault.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new (0, _indexJs.Selection)(subgroups, this._parents);
};

},{"./index.js":"fK3Dl","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VF9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function none() {}
exports.default = function(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8U28K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return (0, _arrayJsDefault.default)(select.apply(this, arguments));
    };
}
exports.default = function(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = (0, _selectorAllJsDefault.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new (0, _indexJs.Selection)(subgroups, parents);
};

},{"./index.js":"fK3Dl","../array.js":"9WejU","../selectorAll.js":"2SKTE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WejU":[function(require,module,exports) {
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
exports.default = array;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SKTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function empty() {
    return [];
}
exports.default = function(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBGg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
exports.default = function(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
};

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnJ1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
exports.default = function(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
};

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1GfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
exports.default = function(match) {
    if (typeof match !== "function") match = (0, _matcherJsDefault.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, _indexJs.Selection)(subgroups, this._parents);
};

},{"./index.js":"fK3Dl","../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIP7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _enterJs = require("./enter.js");
var _constantJs = require("../constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
exports.default = function(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, _constantJsDefault.default)(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new (0, _indexJs.Selection)(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
};
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

},{"./index.js":"fK3Dl","./enter.js":"27tIy","../constant.js":"1wZol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27tIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new (0, _indexJs.Selection)(this._enter || this._groups.map((0, _sparseJsDefault.default)), this._parents);
};
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juhNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(update) {
    return new Array(update.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wZol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ubri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new (0, _indexJs.Selection)(this._exit || this._groups.map((0, _sparseJsDefault.default)), this._parents);
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7QcH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXm9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, _indexJs.Selection)(merges, this._parents);
};

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmxvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UUI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new (0, _indexJs.Selection)(sortgroups, this._parents).order();
};
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsAaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjFrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPGkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coOTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ybxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return !this.node();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Y1px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8cb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("../namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
exports.default = function(name, value) {
    var fullname = (0, _namespaceJsDefault.default)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

},{"../namespace.js":"a23xG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GUHZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleValue", ()=>styleValue);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
exports.default = function(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, _windowJsDefault.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6di7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4q4V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
exports.default = function(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jd3ig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
exports.default = function(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVAdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egFAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xi1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
exports.default = function() {
    return this.each(raise);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1I8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
exports.default = function() {
    return this.each(lower);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GNgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
exports.default = function(name) {
    var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
};

},{"../creator.js":"a6062","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xphl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}
exports.default = function(name, before) {
    var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorJsDefault.default)(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
};

},{"../creator.js":"a6062","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNsSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
exports.default = function() {
    return this.each(remove);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfNc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
exports.default = function(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMowl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktlxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
exports.default = function(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZMTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = (0, _windowJsDefault.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
exports.default = function(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32Fgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Z75":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>(0, _areaJsDefault.default));
parcelHelpers.export(exports, "geoBounds", ()=>(0, _boundsJsDefault.default));
parcelHelpers.export(exports, "geoCentroid", ()=>(0, _centroidJsDefault.default));
parcelHelpers.export(exports, "geoCircle", ()=>(0, _circleJsDefault.default));
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>(0, _antimeridianJsDefault.default));
parcelHelpers.export(exports, "geoClipCircle", ()=>(0, _circleJsDefault1.default));
parcelHelpers.export(exports, "geoClipExtent", ()=>(0, _extentJsDefault.default)) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>(0, _rectangleJsDefault.default));
parcelHelpers.export(exports, "geoContains", ()=>(0, _containsJsDefault.default));
parcelHelpers.export(exports, "geoDistance", ()=>(0, _distanceJsDefault.default));
parcelHelpers.export(exports, "geoGraticule", ()=>(0, _graticuleJsDefault.default));
parcelHelpers.export(exports, "geoGraticule10", ()=>(0, _graticuleJs.graticule10));
parcelHelpers.export(exports, "geoInterpolate", ()=>(0, _interpolateJsDefault.default));
parcelHelpers.export(exports, "geoLength", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "geoPath", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "geoAlbers", ()=>(0, _albersJsDefault.default));
parcelHelpers.export(exports, "geoAlbersUsa", ()=>(0, _albersUsaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>(0, _azimuthalEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>(0, _azimuthalEqualAreaJs.azimuthalEqualAreaRaw));
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>(0, _azimuthalEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>(0, _azimuthalEquidistantJs.azimuthalEquidistantRaw));
parcelHelpers.export(exports, "geoConicConformal", ()=>(0, _conicConformalJsDefault.default));
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>(0, _conicConformalJs.conicConformalRaw));
parcelHelpers.export(exports, "geoConicEqualArea", ()=>(0, _conicEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>(0, _conicEqualAreaJs.conicEqualAreaRaw));
parcelHelpers.export(exports, "geoConicEquidistant", ()=>(0, _conicEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>(0, _conicEquidistantJs.conicEquidistantRaw));
parcelHelpers.export(exports, "geoEqualEarth", ()=>(0, _equalEarthJsDefault.default));
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>(0, _equalEarthJs.equalEarthRaw));
parcelHelpers.export(exports, "geoEquirectangular", ()=>(0, _equirectangularJsDefault.default));
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>(0, _equirectangularJs.equirectangularRaw));
parcelHelpers.export(exports, "geoGnomonic", ()=>(0, _gnomonicJsDefault.default));
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>(0, _gnomonicJs.gnomonicRaw));
parcelHelpers.export(exports, "geoIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "geoProjection", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "geoProjectionMutator", ()=>(0, _indexJs1.projectionMutator));
parcelHelpers.export(exports, "geoMercator", ()=>(0, _mercatorJsDefault.default));
parcelHelpers.export(exports, "geoMercatorRaw", ()=>(0, _mercatorJs.mercatorRaw));
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>(0, _naturalEarth1JsDefault.default));
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>(0, _naturalEarth1Js.naturalEarth1Raw));
parcelHelpers.export(exports, "geoOrthographic", ()=>(0, _orthographicJsDefault.default));
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>(0, _orthographicJs.orthographicRaw));
parcelHelpers.export(exports, "geoStereographic", ()=>(0, _stereographicJsDefault.default));
parcelHelpers.export(exports, "geoStereographicRaw", ()=>(0, _stereographicJs.stereographicRaw));
parcelHelpers.export(exports, "geoTransverseMercator", ()=>(0, _transverseMercatorJsDefault.default));
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>(0, _transverseMercatorJs.transverseMercatorRaw));
parcelHelpers.export(exports, "geoRotation", ()=>(0, _rotationJsDefault.default));
parcelHelpers.export(exports, "geoStream", ()=>(0, _streamJsDefault.default));
parcelHelpers.export(exports, "geoTransform", ()=>(0, _transformJsDefault.default));
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _circleJs = require("./circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _antimeridianJs = require("./clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs1 = require("./clip/circle.js");
var _circleJsDefault1 = parcelHelpers.interopDefault(_circleJs1);
var _extentJs = require("./clip/extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _rectangleJs = require("./clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _graticuleJs = require("./graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _indexJs = require("./path/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _albersJs = require("./projection/albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _albersUsaJs = require("./projection/albersUsa.js");
var _albersUsaJsDefault = parcelHelpers.interopDefault(_albersUsaJs);
var _azimuthalEqualAreaJs = require("./projection/azimuthalEqualArea.js");
var _azimuthalEqualAreaJsDefault = parcelHelpers.interopDefault(_azimuthalEqualAreaJs);
var _azimuthalEquidistantJs = require("./projection/azimuthalEquidistant.js");
var _azimuthalEquidistantJsDefault = parcelHelpers.interopDefault(_azimuthalEquidistantJs);
var _conicConformalJs = require("./projection/conicConformal.js");
var _conicConformalJsDefault = parcelHelpers.interopDefault(_conicConformalJs);
var _conicEqualAreaJs = require("./projection/conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _conicEquidistantJs = require("./projection/conicEquidistant.js");
var _conicEquidistantJsDefault = parcelHelpers.interopDefault(_conicEquidistantJs);
var _equalEarthJs = require("./projection/equalEarth.js");
var _equalEarthJsDefault = parcelHelpers.interopDefault(_equalEarthJs);
var _equirectangularJs = require("./projection/equirectangular.js");
var _equirectangularJsDefault = parcelHelpers.interopDefault(_equirectangularJs);
var _gnomonicJs = require("./projection/gnomonic.js");
var _gnomonicJsDefault = parcelHelpers.interopDefault(_gnomonicJs);
var _identityJs = require("./projection/identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _indexJs1 = require("./projection/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _mercatorJs = require("./projection/mercator.js");
var _mercatorJsDefault = parcelHelpers.interopDefault(_mercatorJs);
var _naturalEarth1Js = require("./projection/naturalEarth1.js");
var _naturalEarth1JsDefault = parcelHelpers.interopDefault(_naturalEarth1Js);
var _orthographicJs = require("./projection/orthographic.js");
var _orthographicJsDefault = parcelHelpers.interopDefault(_orthographicJs);
var _stereographicJs = require("./projection/stereographic.js");
var _stereographicJsDefault = parcelHelpers.interopDefault(_stereographicJs);
var _transverseMercatorJs = require("./projection/transverseMercator.js");
var _transverseMercatorJsDefault = parcelHelpers.interopDefault(_transverseMercatorJs);
var _rotationJs = require("./rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./area.js":false,"./bounds.js":false,"./centroid.js":false,"./circle.js":"b6BNx","./clip/antimeridian.js":"5Pn7h","./clip/circle.js":"6JGCr","./clip/extent.js":false,"./clip/rectangle.js":"5auAi","./contains.js":false,"./distance.js":false,"./graticule.js":false,"./interpolate.js":false,"./length.js":false,"./path/index.js":"lnhfi","./projection/albers.js":false,"./projection/albersUsa.js":false,"./projection/azimuthalEqualArea.js":false,"./projection/azimuthalEquidistant.js":false,"./projection/conicConformal.js":false,"./projection/conicEqualArea.js":false,"./projection/conicEquidistant.js":false,"./projection/equalEarth.js":"67lWy","./projection/equirectangular.js":false,"./projection/gnomonic.js":false,"./projection/identity.js":false,"./projection/index.js":"gSlbx","./projection/mercator.js":false,"./projection/naturalEarth1.js":false,"./projection/orthographic.js":false,"./projection/stereographic.js":false,"./projection/transverseMercator.js":false,"./rotation.js":"g2pLL","./stream.js":"lpKxD","./transform.js":"AaiPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6BNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Generates a circle centered at [0°, 0°], with a given radius and precision.
parcelHelpers.export(exports, "circleStream", ()=>circleStream);
var _cartesianJs = require("./cartesian.js");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _mathJs = require("./math.js");
var _rotationJs = require("./rotation.js");
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, _mathJs.cos)(radius), sinRadius = (0, _mathJs.sin)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * (0, _mathJs.tau);
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * (0, _mathJs.tau);
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, _cartesianJs.spherical)([
            cosRadius,
            -sinRadius * (0, _mathJs.cos)(t),
            -sinRadius * (0, _mathJs.sin)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = (0, _cartesianJs.cartesian)(point), point[0] -= cosRadius;
    (0, _cartesianJs.cartesianNormalizeInPlace)(point);
    var radius = (0, _mathJs.acos)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + (0, _mathJs.tau) - (0, _mathJs.epsilon)) % (0, _mathJs.tau);
}
exports.default = function() {
    var center = (0, _constantJsDefault.default)([
        0,
        0
    ]), radius = (0, _constantJsDefault.default)(90), precision = (0, _constantJsDefault.default)(6), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= (0, _mathJs.degrees), x[1] *= (0, _mathJs.degrees);
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * (0, _mathJs.radians), p = precision.apply(this, arguments) * (0, _mathJs.radians);
        ring = [];
        rotate = (0, _rotationJs.rotateRadians)(-c[0] * (0, _mathJs.radians), -c[1] * (0, _mathJs.radians), 0).invert;
        circleStream(stream, r, p, 1);
        c = {
            type: "Polygon",
            coordinates: [
                ring
            ]
        };
        ring = rotate = null;
        return c;
    }
    circle.center = function(_) {
        return arguments.length ? (center = typeof _ === "function" ? _ : (0, _constantJsDefault.default)([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : precision;
    };
    return circle;
};

},{"./cartesian.js":"4Lw8W","./constant.js":"1uZ9u","./math.js":"8TMeU","./rotation.js":"g2pLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lw8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spherical", ()=>spherical);
parcelHelpers.export(exports, "cartesian", ()=>cartesian);
parcelHelpers.export(exports, "cartesianDot", ()=>cartesianDot);
parcelHelpers.export(exports, "cartesianCross", ()=>cartesianCross);
// TODO return a
parcelHelpers.export(exports, "cartesianAddInPlace", ()=>cartesianAddInPlace);
parcelHelpers.export(exports, "cartesianScale", ()=>cartesianScale);
// TODO return d
parcelHelpers.export(exports, "cartesianNormalizeInPlace", ()=>cartesianNormalizeInPlace);
var _mathJs = require("./math.js");
function spherical(cartesian) {
    return [
        (0, _mathJs.atan2)(cartesian[1], cartesian[0]),
        (0, _mathJs.asin)(cartesian[2])
    ];
}
function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, _mathJs.cos)(phi);
    return [
        cosPhi * (0, _mathJs.cos)(lambda),
        cosPhi * (0, _mathJs.sin)(lambda),
        (0, _mathJs.sin)(phi)
    ];
}
function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function cartesianNormalizeInPlace(d) {
    var l = (0, _mathJs.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TMeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2);
parcelHelpers.export(exports, "pi", ()=>pi);
parcelHelpers.export(exports, "halfPi", ()=>halfPi);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi);
parcelHelpers.export(exports, "tau", ()=>tau);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "radians", ()=>radians);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "atan", ()=>atan);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "exp", ()=>exp);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "hypot", ()=>hypot);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "tan", ()=>tan);
parcelHelpers.export(exports, "acos", ()=>acos);
parcelHelpers.export(exports, "asin", ()=>asin);
parcelHelpers.export(exports, "haversin", ()=>haversin);
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uZ9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2pLL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotateRadians", ()=>rotateRadians);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _mathJs = require("./math.js");
function rotationIdentity(lambda, phi) {
    if ((0, _mathJs.abs)(lambda) > (0, _mathJs.pi)) lambda -= Math.round(lambda / (0, _mathJs.tau)) * (0, _mathJs.tau);
    return [
        lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= (0, _mathJs.tau)) ? deltaPhi || deltaGamma ? (0, _composeJsDefault.default)(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        lambda += deltaLambda;
        if ((0, _mathJs.abs)(lambda) > (0, _mathJs.pi)) lambda -= Math.round(lambda / (0, _mathJs.tau)) * (0, _mathJs.tau);
        return [
            lambda,
            phi
        ];
    };
}
function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, _mathJs.cos)(deltaPhi), sinDeltaPhi = (0, _mathJs.sin)(deltaPhi), cosDeltaGamma = (0, _mathJs.cos)(deltaGamma), sinDeltaGamma = (0, _mathJs.sin)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
exports.default = function(rotate) {
    rotate = rotateRadians(rotate[0] * (0, _mathJs.radians), rotate[1] * (0, _mathJs.radians), rotate.length > 2 ? rotate[2] * (0, _mathJs.radians) : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
        return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
        return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
    };
    return forward;
};

},{"./compose.js":"lJD5n","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJD5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    function compose(x, y) {
        return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Pn7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
exports.default = (0, _indexJsDefault.default)(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -(0, _mathJs.pi),
    -(0, _mathJs.halfPi)
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi), delta = (0, _mathJs.abs)(lambda1 - lambda0);
            if ((0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon)) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? (0, _mathJs.halfPi) : -(0, _mathJs.halfPi));
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= (0, _mathJs.pi)) {
                if ((0, _mathJs.abs)(lambda0 - sign0) < (0, _mathJs.epsilon)) lambda0 -= sign0 * (0, _mathJs.epsilon); // handle degeneracies
                if ((0, _mathJs.abs)(lambda1 - sign1) < (0, _mathJs.epsilon)) lambda1 -= sign1 * (0, _mathJs.epsilon);
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, _mathJs.sin)(lambda0 - lambda1);
    return (0, _mathJs.abs)(sinLambda0Lambda1) > (0, _mathJs.epsilon) ? (0, _mathJs.atan)(((0, _mathJs.sin)(phi0) * (cosPhi1 = (0, _mathJs.cos)(phi1)) * (0, _mathJs.sin)(lambda1) - (0, _mathJs.sin)(phi1) * (cosPhi0 = (0, _mathJs.cos)(phi0)) * (0, _mathJs.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * (0, _mathJs.halfPi);
        stream.point(-(0, _mathJs.pi), phi);
        stream.point(0, phi);
        stream.point((0, _mathJs.pi), phi);
        stream.point((0, _mathJs.pi), 0);
        stream.point((0, _mathJs.pi), -phi);
        stream.point(0, -phi);
        stream.point(-(0, _mathJs.pi), -phi);
        stream.point(-(0, _mathJs.pi), 0);
        stream.point(-(0, _mathJs.pi), phi);
    } else if ((0, _mathJs.abs)(from[0] - to[0]) > (0, _mathJs.epsilon)) {
        var lambda = from[0] < to[0] ? (0, _mathJs.pi) : -(0, _mathJs.pi);
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

},{"./index.js":"bCtcN","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCtcN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _mathJs = require("../math.js");
var _polygonContainsJs = require("../polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _d3Array = require("d3-array");
exports.default = function(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = (0, _bufferJsDefault.default)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
            },
            polygonEnd: function() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = (0, _d3Array.merge)(segments);
                var startInside = (0, _polygonContainsJsDefault.default)(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
            },
            sphere: function() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
            }
        };
        function point(lambda, phi) {
            if (pointVisible(lambda, phi)) sink.point(lambda, phi);
        }
        function pointLine(lambda, phi) {
            line.point(lambda, phi);
        }
        function lineStart() {
            clip.point = pointLine;
            line.lineStart();
        }
        function lineEnd() {
            clip.point = point;
            line.lineEnd();
        }
        function pointRing(lambda, phi) {
            ring.push([
                lambda,
                phi
            ]);
            ringSink.point(lambda, phi);
        }
        function ringStart() {
            ringSink.lineStart();
            ring = [];
        }
        function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            // No intersections.
            if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                    sink.lineEnd();
                }
                return;
            }
            // Rejoin connected segments.
            // TODO reuse ringBuffer.rejoin()?
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(validSegment));
        }
        return clip;
    };
};
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - a[1]) - ((b = b.x)[0] < 0 ? b[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - b[1]);
}

},{"./buffer.js":"6MwC2","./rejoin.js":"4Cpqb","../math.js":"8TMeU","../polygonContains.js":"k8u1G","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
exports.default = function() {
    var lines = [], line;
    return {
        point: function(x, y, m) {
            line.push([
                x,
                y,
                m
            ]);
        },
        lineStart: function() {
            lines.push(line = []);
        },
        lineEnd: (0, _noopJsDefault.default),
        rejoin: function() {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
        },
        result: function() {
            var result = lines;
            lines = [];
            line = null;
            return result;
        }
    };
};

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bROOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cpqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _mathJs = require("../math.js");
function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
exports.default = function(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function(segment) {
        if ((n = segment.length - 1) <= 0) return;
        var n, p0 = segment[0], p1 = segment[n], x;
        if ((0, _pointEqualJsDefault.default)(p0, p1)) {
            if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
            }
            // handle degenerate cases by moving the point
            p1[0] += 2 * (0, _mathJs.epsilon);
        }
        subject.push(x = new Intersection(p0, segment, null, true));
        clip.push(x.o = new Intersection(p0, null, x, false));
        subject.push(x = new Intersection(p1, segment, null, false));
        clip.push(x.o = new Intersection(p1, null, x, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection);
    link(subject);
    link(clip);
    for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
    var start = subject[0], points, point;
    while(true){
        // Find first unvisited intersection.
        var current = start, isSubject = true;
        while(current.v)if ((current = current.n) === start) return;
        points = current.z;
        stream.lineStart();
        do {
            current.v = current.o.v = true;
            if (current.e) {
                if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                else interpolate(current.x, current.n.x, 1, stream);
                current = current.n;
            } else {
                if (isSubject) {
                    points = current.p.z;
                    for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                } else interpolate(current.x, current.p.x, -1, stream);
                current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
        }while (!current.v);
        stream.lineEnd();
    }
};
function link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}

},{"../pointEqual.js":"5FEbl","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FEbl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("./math.js");
exports.default = function(a, b) {
    return (0, _mathJs.abs)(a[0] - b[0]) < (0, _mathJs.epsilon) && (0, _mathJs.abs)(a[1] - b[1]) < (0, _mathJs.epsilon);
};

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8u1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
function longitude(point) {
    return (0, _mathJs.abs)(point[0]) <= (0, _mathJs.pi) ? point[0] : (0, _mathJs.sign)(point[0]) * (((0, _mathJs.abs)(point[0]) + (0, _mathJs.pi)) % (0, _mathJs.tau) - (0, _mathJs.pi));
}
exports.default = function(polygon, point) {
    var lambda = longitude(point), phi = point[1], sinPhi = (0, _mathJs.sin)(phi), normal = [
        (0, _mathJs.sin)(lambda),
        -(0, _mathJs.cos)(lambda),
        0
    ], angle = 0, winding = 0;
    var sum = new (0, _d3Array.Adder)();
    if (sinPhi === 1) phi = (0, _mathJs.halfPi) + (0, _mathJs.epsilon);
    else if (sinPhi === -1) phi = -(0, _mathJs.halfPi) - (0, _mathJs.epsilon);
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + (0, _mathJs.quarterPi), sinPhi0 = (0, _mathJs.sin)(phi0), cosPhi0 = (0, _mathJs.cos)(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + (0, _mathJs.quarterPi), sinPhi1 = (0, _mathJs.sin)(phi1), cosPhi1 = (0, _mathJs.cos)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > (0, _mathJs.pi), k = sinPhi0 * sinPhi1;
            sum.add((0, _mathJs.atan2)(k * sign * (0, _mathJs.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0, _mathJs.cos)(absDelta)));
            angle += antimeridian ? delta + sign * (0, _mathJs.tau) : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = (0, _cartesianJs.cartesianCross)((0, _cartesianJs.cartesian)(point0), (0, _cartesianJs.cartesian)(point1));
                (0, _cartesianJs.cartesianNormalizeInPlace)(arc);
                var intersection = (0, _cartesianJs.cartesianCross)(normal, arc);
                (0, _cartesianJs.cartesianNormalizeInPlace)(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, _mathJs.asin)(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
            }
        }
    }
    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -(0, _mathJs.epsilon) || angle < (0, _mathJs.epsilon) && sum < -(0, _mathJs.epsilon2)) ^ winding & 1;
};

},{"d3-array":"1yX2W","./cartesian.js":"4Lw8W","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yX2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectJsDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisectJs.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisectJs.bisectLeft));
parcelHelpers.export(exports, "bisectCenter", ()=>(0, _bisectJs.bisectCenter));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorJsDefault.default));
parcelHelpers.export(exports, "blur", ()=>(0, _blurJs.blur));
parcelHelpers.export(exports, "blur2", ()=>(0, _blurJs.blur2));
parcelHelpers.export(exports, "blurImage", ()=>(0, _blurJs.blurImage));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "cross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "cumsum", ()=>(0, _cumsumJsDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationJsDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentJsDefault.default));
parcelHelpers.export(exports, "Adder", ()=>(0, _fsumJs.Adder));
parcelHelpers.export(exports, "fsum", ()=>(0, _fsumJs.fsum));
parcelHelpers.export(exports, "fcumsum", ()=>(0, _fsumJs.fcumsum));
parcelHelpers.export(exports, "group", ()=>(0, _groupJsDefault.default));
parcelHelpers.export(exports, "flatGroup", ()=>(0, _groupJs.flatGroup));
parcelHelpers.export(exports, "flatRollup", ()=>(0, _groupJs.flatRollup));
parcelHelpers.export(exports, "groups", ()=>(0, _groupJs.groups));
parcelHelpers.export(exports, "index", ()=>(0, _groupJs.index));
parcelHelpers.export(exports, "indexes", ()=>(0, _groupJs.indexes));
parcelHelpers.export(exports, "rollup", ()=>(0, _groupJs.rollup));
parcelHelpers.export(exports, "rollups", ()=>(0, _groupJs.rollups));
parcelHelpers.export(exports, "groupSort", ()=>(0, _groupSortJsDefault.default));
parcelHelpers.export(exports, "bin", ()=>(0, _binJsDefault.default)) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>(0, _binJsDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisJsDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottJsDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxIndex", ()=>(0, _maxIndexJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "medianIndex", ()=>(0, _medianJs.medianIndex));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minIndex", ()=>(0, _minIndexJsDefault.default));
parcelHelpers.export(exports, "mode", ()=>(0, _modeJsDefault.default));
parcelHelpers.export(exports, "nice", ()=>(0, _niceJsDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsJsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteJsDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "quantileIndex", ()=>(0, _quantileJs.quantileIndex));
parcelHelpers.export(exports, "quantileSorted", ()=>(0, _quantileJs.quantileSorted));
parcelHelpers.export(exports, "quickselect", ()=>(0, _quickselectJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "rank", ()=>(0, _rankJsDefault.default));
parcelHelpers.export(exports, "least", ()=>(0, _leastJsDefault.default));
parcelHelpers.export(exports, "leastIndex", ()=>(0, _leastIndexJsDefault.default));
parcelHelpers.export(exports, "greatest", ()=>(0, _greatestJsDefault.default));
parcelHelpers.export(exports, "greatestIndex", ()=>(0, _greatestIndexJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default)) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "shuffler", ()=>(0, _shuffleJs.shuffler));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksJsDefault.default));
parcelHelpers.export(exports, "tickIncrement", ()=>(0, _ticksJs.tickIncrement));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticksJs.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "disjoint", ()=>(0, _disjointJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "subset", ()=>(0, _subsetJsDefault.default));
parcelHelpers.export(exports, "superset", ()=>(0, _supersetJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "InternMap", ()=>(0, _internmap.InternMap));
parcelHelpers.export(exports, "InternSet", ()=>(0, _internmap.InternSet));
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _blurJs = require("./blur.js");
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":"2jqf4","./ascending.js":"2iZSL","./bisector.js":"1BY0F","./blur.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":"dpgkj","./deviation.js":false,"./extent.js":false,"./fsum.js":"7NEFi","./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":"6b1uv","./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":"hviMC","./min.js":false,"./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":false,"./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":"iDfKX","./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jqf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft);
parcelHelpers.export(exports, "bisectCenter", ()=>bisectCenter);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
const ascendingBisect = (0, _bisectorJsDefault.default)((0, _ascendingJsDefault.default));
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0, _bisectorJsDefault.default)((0, _numberJsDefault.default)).center;
exports.default = bisectRight;

},{"./ascending.js":"2iZSL","./bisector.js":"1BY0F","./number.js":"imr9T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iZSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
exports.default = ascending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BY0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
function bisector(f) {
    let compare1, compare2, delta;
    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
        compare1 = (0, _ascendingJsDefault.default);
        compare2 = (d, x)=>(0, _ascendingJsDefault.default)(f(d), x);
        delta = (d, x)=>f(d) - x;
    } else {
        compare1 = f === (0, _ascendingJsDefault.default) || f === (0, _descendingJsDefault.default) ? f : zero;
        compare2 = f;
        delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
}
exports.default = bisector;
function zero() {
    return 0;
}

},{"./ascending.js":"2iZSL","./descending.js":"dpgkj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpgkj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
exports.default = descending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imr9T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numbers", ()=>numbers);
function number(x) {
    return x === null ? NaN : +x;
}
exports.default = number;
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NEFi":[function(require,module,exports) {
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adder", ()=>Adder);
parcelHelpers.export(exports, "fsum", ()=>fsum);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6b1uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}
exports.default = max;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hviMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDfKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement);
parcelHelpers.export(exports, "tickStep", ()=>tickStep);
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
        inc = Math.pow(10, -power) / factor;
        i1 = Math.round(start * inc);
        i2 = Math.round(stop * inc);
        if (i1 / inc < start) ++i1;
        if (i2 / inc > stop) --i2;
        inc = -inc;
    } else {
        inc = Math.pow(10, power) * factor;
        i1 = Math.round(start / inc);
        i2 = Math.round(stop / inc);
        if (i1 * inc < start) ++i1;
        if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
    return [
        i1,
        i2,
        inc
    ];
}
function ticks(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [
        start
    ];
    const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks = new Array(n);
    if (reverse) {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) * inc;
    } else {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) * inc;
    }
    return ticks;
}
exports.default = ticks;
function tickIncrement(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JGCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _circleJs = require("../circle.js");
var _mathJs = require("../math.js");
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = function(radius) {
    var cr = (0, _mathJs.cos)(radius), delta = 6 * (0, _mathJs.radians), smallRadius = cr > 0, notHemisphere = (0, _mathJs.abs)(cr) > (0, _mathJs.epsilon); // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        (0, _circleJs.circleStream)(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi) {
        return (0, _mathJs.cos)(lambda) * (0, _mathJs.cos)(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
        var point0, c0, v0, v00, clean; // no intersections
        return {
            lineStart: function() {
                v00 = v0 = false;
                clean = 1;
            },
            point: function(lambda, phi) {
                var point1 = [
                    lambda,
                    phi
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi)), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || (0, _pointEqualJsDefault.default)(point0, point2) || (0, _pointEqualJsDefault.default)(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                    clean = 0;
                    if (v) {
                        // outside going in
                        stream.lineStart();
                        point2 = intersect(point1, point0);
                        stream.point(point2[0], point2[1]);
                    } else {
                        // inside going out
                        point2 = intersect(point0, point1);
                        stream.point(point2[0], point2[1], 2);
                        stream.lineEnd();
                    }
                    point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                    var t;
                    // If the codes for two points are different, or are both zero,
                    // and there this segment intersects with the small circle.
                    if (!(c & c0) && (t = intersect(point1, point0, true))) {
                        clean = 0;
                        if (smallRadius) {
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1]);
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                        } else {
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1], 3);
                        }
                    }
                }
                if (v && (!point0 || !(0, _pointEqualJsDefault.default)(point0, point1))) stream.point(point1[0], point1[1]);
                point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
                if (v0) stream.lineEnd();
                point0 = null;
            },
            // Rejoin first and last segments if there were intersections and the first
            // and last points were visible.
            clean: function() {
                return clean | (v00 && v0) << 1;
            }
        };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
        var pa = (0, _cartesianJs.cartesian)(a), pb = (0, _cartesianJs.cartesian)(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = (0, _cartesianJs.cartesianCross)(pa, pb), n2n2 = (0, _cartesianJs.cartesianDot)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, _cartesianJs.cartesianCross)(n1, n2), A = (0, _cartesianJs.cartesianScale)(n1, c1), B = (0, _cartesianJs.cartesianScale)(n2, c2);
        (0, _cartesianJs.cartesianAddInPlace)(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = (0, _cartesianJs.cartesianDot)(A, u), uu = (0, _cartesianJs.cartesianDot)(u, u), t2 = w * w - uu * ((0, _cartesianJs.cartesianDot)(A, A) - 1);
        if (t2 < 0) return;
        var t = (0, _mathJs.sqrt)(t2), q = (0, _cartesianJs.cartesianScale)(u, (-w - t) / uu);
        (0, _cartesianJs.cartesianAddInPlace)(q, A);
        q = (0, _cartesianJs.spherical)(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = (0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon), meridian = polar || delta < (0, _mathJs.epsilon);
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, _mathJs.abs)(q[0] - lambda0) < (0, _mathJs.epsilon) ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > (0, _mathJs.pi) ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = (0, _cartesianJs.cartesianScale)(u, (-w + t) / uu);
            (0, _cartesianJs.cartesianAddInPlace)(q1, A);
            return [
                q,
                (0, _cartesianJs.spherical)(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
        var r = smallRadius ? radius : (0, _mathJs.pi) - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return (0, _indexJsDefault.default)(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -(0, _mathJs.pi),
        radius - (0, _mathJs.pi)
    ]);
};

},{"../cartesian.js":"4Lw8W","../circle.js":"b6BNx","../math.js":"8TMeU","../pointEqual.js":"5FEbl","./index.js":"bCtcN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5auAi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _d3Array = require("d3-array");
var clipMax = 1e9, clipMin = -clipMax;
function clipRectangle(x0, y0, x1, y1) {
    function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return (0, _mathJs.abs)(p[0] - x0) < (0, _mathJs.epsilon) ? direction > 0 ? 0 : 3 : (0, _mathJs.abs)(p[0] - x1) < (0, _mathJs.epsilon) ? direction > 0 ? 2 : 1 : (0, _mathJs.abs)(p[1] - y0) < (0, _mathJs.epsilon) ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = (0, _bufferJsDefault.default)(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = (0, _d3Array.merge)(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max(clipMin, Math.min(clipMax, x_)),
                    y_ = Math.max(clipMin, Math.min(clipMax, y_))
                ], b = [
                    x = Math.max(clipMin, Math.min(clipMax, x)),
                    y = Math.max(clipMin, Math.min(clipMax, y))
                ];
                if ((0, _lineJsDefault.default)(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}
exports.default = clipRectangle;

},{"../math.js":"8TMeU","./buffer.js":"6MwC2","./line.js":"kBMdG","./rejoin.js":"4Cpqb","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBMdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b, x0, y0, x1, y1) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnhfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _contextJs = require("./context.js");
var _contextJsDefault = parcelHelpers.interopDefault(_contextJs);
var _measureJs = require("./measure.js");
var _measureJsDefault = parcelHelpers.interopDefault(_measureJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
exports.default = function(projection, context) {
    let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            (0, _streamJsDefault.default)(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        (0, _streamJsDefault.default)(object, projectionStream((0, _areaJsDefault.default)));
        return (0, _areaJsDefault.default).result();
    };
    path.measure = function(object) {
        (0, _streamJsDefault.default)(object, projectionStream((0, _measureJsDefault.default)));
        return (0, _measureJsDefault.default).result();
    };
    path.bounds = function(object) {
        (0, _streamJsDefault.default)(object, projectionStream((0, _boundsJsDefault.default)));
        return (0, _boundsJsDefault.default).result();
    };
    path.centroid = function(object) {
        (0, _streamJsDefault.default)(object, projectionStream((0, _centroidJsDefault.default)));
        return (0, _centroidJsDefault.default).result();
    };
    path.projection = function(_) {
        if (!arguments.length) return projection;
        projectionStream = _ == null ? (projection = null, _identityJsDefault.default) : (projection = _).stream;
        return path;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new (0, _stringJsDefault.default)(digits)) : new (0, _contextJsDefault.default)(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    path.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        if (context === null) contextStream = new (0, _stringJsDefault.default)(digits);
        return path;
    };
    return path.projection(projection).digits(digits).context(context);
};

},{"../identity.js":"buAWG","../stream.js":"lpKxD","./area.js":"esEys","./bounds.js":"6inQS","./centroid.js":"hWsH1","./context.js":"bBEPS","./measure.js":"kxo1f","./string.js":"7QFxp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buAWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpKxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
    Feature: function(object, stream) {
        streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)streamGeometry(features[i].geometry, stream);
    }
};
var streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)streamGeometry(geometries[i], stream);
    }
};
function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}
exports.default = function(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
    else streamGeometry(object, stream);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esEys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var areaSum = new (0, _d3Array.Adder)(), areaRingSum = new (0, _d3Array.Adder)(), x00, y00, x0, y0;
var areaStream = {
    point: (0, _noopJsDefault.default),
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: function() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = (0, _noopJsDefault.default);
        areaSum.add((0, _mathJs.abs)(areaRingSum));
        areaRingSum = new (0, _d3Array.Adder)();
    },
    result: function() {
        var area = areaSum / 2;
        areaSum = new (0, _d3Array.Adder)();
        return area;
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
    areaRingSum.add(y0 * x - x0 * y);
    x0 = x, y0 = y;
}
function areaRingEnd() {
    areaPoint(x00, y00);
}
exports.default = areaStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6inQS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: (0, _noopJsDefault.default),
    polygonEnd: (0, _noopJsDefault.default),
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWsH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
// TODO Enforce positive area for exterior, negative area for interior?
var X0 = 0, Y0 = 0, Z0 = 0, X1 = 0, Y1 = 0, Z1 = 0, X2 = 0, Y2 = 0, Z2 = 0, x00, y00, x0, y0;
var centroidStream = {
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
        centroidStream.point = centroidPoint;
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    },
    result: function() {
        var centroid = Z2 ? [
            X2 / Z2,
            Y2 / Z2
        ] : Z1 ? [
            X1 / Z1,
            Y1 / Z1
        ] : Z0 ? [
            X0 / Z0,
            Y0 / Z0
        ] : [
            NaN,
            NaN
        ];
        X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
        return centroid;
    }
};
function centroidPoint(x, y) {
    X0 += x;
    Y0 += y;
    ++Z0;
}
function centroidLineStart() {
    centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
    centroidStream.point = centroidPointLine;
    centroidPoint(x0 = x, y0 = y);
}
function centroidPointLine(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    centroidPoint(x0 = x, y0 = y);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
function centroidRingStart() {
    centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
    centroidPointRing(x00, y00);
}
function centroidPointFirstRing(x, y) {
    centroidStream.point = centroidPointRing;
    centroidPoint(x00 = x0 = x, y00 = y0 = y);
}
function centroidPointRing(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    z = y0 * x - x0 * y;
    X2 += z * (x0 + x);
    Y2 += z * (y0 + y);
    Z2 += z * 3;
    centroidPoint(x0 = x, y0 = y);
}
exports.default = centroidStream;

},{"../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBEPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
function PathContext(context) {
    this._context = context;
}
exports.default = PathContext;
PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, (0, _mathJs.tau));
                break;
        }
    },
    result: (0, _noopJsDefault.default)
};

},{"../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxo1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var lengthSum = new (0, _d3Array.Adder)(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: (0, _noopJsDefault.default),
    lineStart: function() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = (0, _noopJsDefault.default);
    },
    polygonStart: function() {
        lengthRing = true;
    },
    polygonEnd: function() {
        lengthRing = null;
    },
    result: function() {
        var length = +lengthSum;
        lengthSum = new (0, _d3Array.Adder)();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add((0, _mathJs.sqrt)(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
exports.default = lengthStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QFxp":[function(require,module,exports) {
// Simple caching for constant-radius points.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
    constructor(digits){
        this._append = digits == null ? append : appendRound(digits);
        this._radius = 4.5;
        this._ = "";
    }
    pointRadius(_) {
        this._radius = +_;
        return this;
    }
    polygonStart() {
        this._line = 0;
    }
    polygonEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line === 0) this._ += "Z";
        this._point = NaN;
    }
    point(x, y) {
        switch(this._point){
            case 0:
                this._append`M${x},${y}`;
                this._point = 1;
                break;
            case 1:
                this._append`L${x},${y}`;
                break;
            default:
                this._append`M${x},${y}`;
                if (this._radius !== cacheRadius || this._append !== cacheAppend) {
                    const r = this._radius;
                    const s = this._;
                    this._ = ""; // stash the old string so we can cache the circle path fragment
                    this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
                    cacheRadius = r;
                    cacheAppend = this._append;
                    cacheCircle = this._;
                    this._ = s;
                }
                this._ += cacheCircle;
                break;
        }
    }
    result() {
        const result = this._;
        this._ = "";
        return result.length ? result : null;
    }
}
exports.default = PathString;
function append(strings) {
    let i = 1;
    this._ += strings[0];
    for(const j = strings.length; i < j; ++i)this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
    const d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
    if (d > 15) return append;
    if (d !== cacheDigits) {
        const k = 10 ** d;
        cacheDigits = d;
        cacheAppend = function append(strings) {
            let i = 1;
            this._ += strings[0];
            for(const j = strings.length; i < j; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
        };
    }
    return cacheAppend;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67lWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equalEarthRaw", ()=>equalEarthRaw);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
var A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = (0, _mathJs.sqrt)(3) / 2, iterations = 12;
function equalEarthRaw(lambda, phi) {
    var l = (0, _mathJs.asin)(M * (0, _mathJs.sin)(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
        lambda * (0, _mathJs.cos)(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
        l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    ];
}
equalEarthRaw.invert = function(x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for(var i = 0, delta, fy, fpy; i < iterations; ++i){
        fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
        fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if ((0, _mathJs.abs)(delta) < (0, _mathJs.epsilon2)) break;
    }
    return [
        M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / (0, _mathJs.cos)(l),
        (0, _mathJs.asin)((0, _mathJs.sin)(l) / M)
    ];
};
exports.default = function() {
    return (0, _indexJsDefault.default)(equalEarthRaw).scale(177.158);
};

},{"./index.js":"gSlbx","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSlbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectionMutator", ()=>projectionMutator);
var _antimeridianJs = require("../clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs = require("../clip/circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _rectangleJs = require("../clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _composeJs = require("../compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _transformJs = require("../transform.js");
var _fitJs = require("./fit.js");
var _resampleJs = require("./resample.js");
var _resampleJsDefault = parcelHelpers.interopDefault(_resampleJs);
var transformRadians = (0, _transformJs.transformer)({
    point: function(x, y) {
        this.stream.point(x * (0, _mathJs.radians), y * (0, _mathJs.radians));
    }
});
function transformRotate(rotate) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = (0, _mathJs.cos)(alpha), sinAlpha = (0, _mathJs.sin)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function projection(project) {
    return projectionMutator(function() {
        return project;
    })();
}
exports.default = projection;
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = (0, _antimeridianJsDefault.default), x0 = null, y0, x1, y1, postclip = (0, _identityJsDefault.default), delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * (0, _mathJs.radians), point[1] * (0, _mathJs.radians));
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * (0, _mathJs.degrees),
            point[1] * (0, _mathJs.degrees)
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, _circleJsDefault.default)(theta = _ * (0, _mathJs.radians)) : (theta = null, _antimeridianJsDefault.default), reset()) : theta * (0, _mathJs.degrees);
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : (0, _rectangleJsDefault.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * (0, _mathJs.radians), phi = _[1] % 360 * (0, _mathJs.radians), recenter()) : [
            lambda * (0, _mathJs.degrees),
            phi * (0, _mathJs.degrees)
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * (0, _mathJs.radians), deltaPhi = _[1] % 360 * (0, _mathJs.radians), deltaGamma = _.length > 2 ? _[2] % 360 * (0, _mathJs.radians) : 0, recenter()) : [
            deltaLambda * (0, _mathJs.degrees),
            deltaPhi * (0, _mathJs.degrees),
            deltaGamma * (0, _mathJs.degrees)
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, _mathJs.radians), recenter()) : alpha * (0, _mathJs.degrees);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2 = _ * _), reset()) : (0, _mathJs.sqrt)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, _fitJs.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, _fitJs.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, _fitJs.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, _fitJs.fitHeight)(projection, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, _rotationJs.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, _composeJsDefault.default)(project, transform);
        projectRotateTransform = (0, _composeJsDefault.default)(rotate, projectTransform);
        projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}

},{"../clip/antimeridian.js":"5Pn7h","../clip/circle.js":"6JGCr","../clip/rectangle.js":"5auAi","../compose.js":"lJD5n","../identity.js":"buAWG","../math.js":"8TMeU","../rotation.js":"g2pLL","../transform.js":"AaiPA","./fit.js":"fNXsS","./resample.js":"l8WqU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AaiPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformer", ()=>transformer);
exports.default = function(methods) {
    return {
        stream: transformer(methods)
    };
};
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {}
TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNXsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent);
parcelHelpers.export(exports, "fitSize", ()=>fitSize);
parcelHelpers.export(exports, "fitWidth", ()=>fitWidth);
parcelHelpers.export(exports, "fitHeight", ()=>fitHeight);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _boundsJs = require("../path/bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, _streamJsDefault.default)(object, projection.stream((0, _boundsJsDefault.default)));
    fitBounds((0, _boundsJsDefault.default).result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}

},{"../stream.js":"lpKxD","../path/bounds.js":"6inQS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8WqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _mathJs = require("../math.js");
var _transformJs = require("../transform.js");
var maxDepth = 16, cosMinDistance = (0, _mathJs.cos)(30 * (0, _mathJs.radians)); // cos(minimum angular distance)
exports.default = function(project, delta2) {
    return +delta2 ? resample(project, delta2) : resampleNone(project);
};
function resampleNone(project) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = (0, _mathJs.sqrt)(a * a + b * b + c * c), phi2 = (0, _mathJs.asin)(c /= m), lambda2 = (0, _mathJs.abs)((0, _mathJs.abs)(c) - 1) < (0, _mathJs.epsilon) || (0, _mathJs.abs)(lambda0 - lambda1) < (0, _mathJs.epsilon) ? (lambda0 + lambda1) / 2 : (0, _mathJs.atan2)(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || (0, _mathJs.abs)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = (0, _cartesianJs.cartesian)([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}

},{"../cartesian.js":"4Lw8W","../math.js":"8TMeU","../transform.js":"AaiPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NYsfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCountryColor", ()=>getCountryColor);
var _d3Scale = require("d3-scale");
var _d3ScaleChromatic = require("d3-scale-chromatic");
const getCountryColor = (numLaureates)=>{
    const countryColorScale = (0, _d3Scale.scaleSequential)((0, _d3ScaleChromatic.interpolateYlGnBu)).domain([
        0,
        100
    ]);
    return countryColorScale(numLaureates);
};

},{"d3-scale":"UQ8g3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","d3-scale-chromatic":"dfCpU"}],"UQ8g3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>(0, _bandJsDefault.default));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _bandJs.point));
parcelHelpers.export(exports, "scaleIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "scaleLinear", ()=>(0, _linearJsDefault.default));
parcelHelpers.export(exports, "scaleLog", ()=>(0, _logJsDefault.default));
parcelHelpers.export(exports, "scaleSymlog", ()=>(0, _symlogJsDefault.default));
parcelHelpers.export(exports, "scaleOrdinal", ()=>(0, _ordinalJsDefault.default));
parcelHelpers.export(exports, "scaleImplicit", ()=>(0, _ordinalJs.implicit));
parcelHelpers.export(exports, "scalePow", ()=>(0, _powJsDefault.default));
parcelHelpers.export(exports, "scaleSqrt", ()=>(0, _powJs.sqrt));
parcelHelpers.export(exports, "scaleRadial", ()=>(0, _radialJsDefault.default));
parcelHelpers.export(exports, "scaleQuantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "scaleQuantize", ()=>(0, _quantizeJsDefault.default));
parcelHelpers.export(exports, "scaleThreshold", ()=>(0, _thresholdJsDefault.default));
parcelHelpers.export(exports, "scaleTime", ()=>(0, _timeJsDefault.default));
parcelHelpers.export(exports, "scaleUtc", ()=>(0, _utcTimeJsDefault.default));
parcelHelpers.export(exports, "scaleSequential", ()=>(0, _sequentialJsDefault.default));
parcelHelpers.export(exports, "scaleSequentialLog", ()=>(0, _sequentialJs.sequentialLog));
parcelHelpers.export(exports, "scaleSequentialPow", ()=>(0, _sequentialJs.sequentialPow));
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>(0, _sequentialJs.sequentialSqrt));
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>(0, _sequentialJs.sequentialSymlog));
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>(0, _sequentialQuantileJsDefault.default));
parcelHelpers.export(exports, "scaleDiverging", ()=>(0, _divergingJsDefault.default));
parcelHelpers.export(exports, "scaleDivergingLog", ()=>(0, _divergingJs.divergingLog));
parcelHelpers.export(exports, "scaleDivergingPow", ()=>(0, _divergingJs.divergingPow));
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>(0, _divergingJs.divergingSqrt));
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>(0, _divergingJs.divergingSymlog));
parcelHelpers.export(exports, "tickFormat", ()=>(0, _tickFormatJsDefault.default));
var _bandJs = require("./band.js");
var _bandJsDefault = parcelHelpers.interopDefault(_bandJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _linearJs = require("./linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _logJs = require("./log.js");
var _logJsDefault = parcelHelpers.interopDefault(_logJs);
var _symlogJs = require("./symlog.js");
var _symlogJsDefault = parcelHelpers.interopDefault(_symlogJs);
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
var _powJs = require("./pow.js");
var _powJsDefault = parcelHelpers.interopDefault(_powJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _thresholdJs = require("./threshold.js");
var _thresholdJsDefault = parcelHelpers.interopDefault(_thresholdJs);
var _timeJs = require("./time.js");
var _timeJsDefault = parcelHelpers.interopDefault(_timeJs);
var _utcTimeJs = require("./utcTime.js");
var _utcTimeJsDefault = parcelHelpers.interopDefault(_utcTimeJs);
var _sequentialJs = require("./sequential.js");
var _sequentialJsDefault = parcelHelpers.interopDefault(_sequentialJs);
var _sequentialQuantileJs = require("./sequentialQuantile.js");
var _sequentialQuantileJsDefault = parcelHelpers.interopDefault(_sequentialQuantileJs);
var _divergingJs = require("./diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);

},{"./band.js":false,"./identity.js":false,"./linear.js":"lob4K","./log.js":"z4t8s","./symlog.js":"4KiG8","./ordinal.js":false,"./pow.js":"jVG8A","./radial.js":false,"./quantile.js":false,"./quantize.js":false,"./threshold.js":false,"./time.js":false,"./utcTime.js":false,"./sequential.js":"aMNy9","./sequentialQuantile.js":false,"./diverging.js":false,"./tickFormat.js":"ahQef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lob4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearish", ()=>linearish);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, _d3Array.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, _tickFormatJsDefault.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, _d3Array.tickIncrement)(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = (0, _continuousJsDefault.default)();
    scale.copy = function() {
        return (0, _continuousJs.copy)(scale, linear());
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return linearish(scale);
}
exports.default = linear;

},{"d3-array":"1yX2W","./continuous.js":"1LsCM","./init.js":"kp8lc","./tickFormat.js":"ahQef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LsCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "transformer", ()=>transformer);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, _constantJsDefault.default)(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, _d3Array.bisect)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = (0, _d3Interpolate.interpolate), transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), (0, _d3Interpolate.interpolateNumber))))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, (0, _numberJsDefault.default)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = (0, _d3Interpolate.interpolateRound), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
exports.default = continuous;

},{"d3-array":"1yX2W","d3-interpolate":"6jJyi","./constant.js":"kIv0D","./number.js":"k9Lyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jJyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "interpolateArray", ()=>(0, _arrayJsDefault.default));
parcelHelpers.export(exports, "interpolateBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "interpolateDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "interpolateDiscrete", ()=>(0, _discreteJsDefault.default));
parcelHelpers.export(exports, "interpolateHue", ()=>(0, _hueJsDefault.default));
parcelHelpers.export(exports, "interpolateNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "interpolateNumberArray", ()=>(0, _numberArrayJsDefault.default));
parcelHelpers.export(exports, "interpolateObject", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "interpolateRound", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "interpolateString", ()=>(0, _stringJsDefault.default));
parcelHelpers.export(exports, "interpolateTransformCss", ()=>(0, _indexJs.interpolateTransformCss));
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>(0, _indexJs.interpolateTransformSvg));
parcelHelpers.export(exports, "interpolateZoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "interpolateRgb", ()=>(0, _rgbJsDefault.default));
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>(0, _rgbJs.rgbBasis));
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>(0, _rgbJs.rgbBasisClosed));
parcelHelpers.export(exports, "interpolateHsl", ()=>(0, _hslJsDefault.default));
parcelHelpers.export(exports, "interpolateHslLong", ()=>(0, _hslJs.hslLong));
parcelHelpers.export(exports, "interpolateLab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "interpolateHcl", ()=>(0, _hclJsDefault.default));
parcelHelpers.export(exports, "interpolateHclLong", ()=>(0, _hclJs.hclLong));
parcelHelpers.export(exports, "interpolateCubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>(0, _cubehelixJs.cubehelixLong));
parcelHelpers.export(exports, "piecewise", ()=>(0, _piecewiseJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":"2GpMq","./array.js":"bQXK0","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./date.js":"cCKgJ","./discrete.js":false,"./hue.js":false,"./number.js":"fZAq5","./numberArray.js":"l29YZ","./object.js":"hdyKg","./round.js":"8lHW7","./string.js":"Qre8m","./transform/index.js":"jDBQO","./zoom.js":false,"./rgb.js":"gHrgo","./hsl.js":false,"./lab.js":false,"./hcl.js":false,"./cubehelix.js":false,"./piecewise.js":false,"./quantize.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GpMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, _constantJsDefault.default)(b) : (t === "number" ? (0, _numberJsDefault.default) : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgbJsDefault.default) : (0, _stringJsDefault.default) : b instanceof (0, _d3Color.color) ? (0, _rgbJsDefault.default) : b instanceof Date ? (0, _dateJsDefault.default) : (0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : Array.isArray(b) ? (0, _arrayJs.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, _objectJsDefault.default) : (0, _numberJsDefault.default))(a, b);
};

},{"d3-color":"grhaa","./rgb.js":"gHrgo","./array.js":"bQXK0","./date.js":"cCKgJ","./number.js":"fZAq5","./object.js":"hdyKg","./string.js":"Qre8m","./constant.js":"aXv76","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grhaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "rgb", ()=>(0, _colorJs.rgb));
parcelHelpers.export(exports, "hsl", ()=>(0, _colorJs.hsl));
parcelHelpers.export(exports, "lab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "hcl", ()=>(0, _labJs.hcl));
parcelHelpers.export(exports, "lch", ()=>(0, _labJs.lch));
parcelHelpers.export(exports, "gray", ()=>(0, _labJs.gray));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"cNCyv","./lab.js":false,"./cubehelix.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNCyv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "darker", ()=>darker);
parcelHelpers.export(exports, "brighter", ()=>brighter);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert);
parcelHelpers.export(exports, "rgb", ()=>rgb);
parcelHelpers.export(exports, "Rgb", ()=>Rgb);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, _defineJsDefault.default)(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
exports.default = color;
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Rgb, rgb, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Hsl, hsl, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"avQOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avQOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
exports.default = function(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
};
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHrgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = function rgbGamma(y) {
    var color = (0, _colorJs.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, _d3Color.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline((0, _basisJsDefault.default));
var rgbBasisClosed = rgbSpline((0, _basisClosedJsDefault.default));

},{"d3-color":"grhaa","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./color.js":"1eZq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enhcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
exports.default = function(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdZAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basisJs = require("./basis.js");
exports.default = function(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, _basisJs.basis)((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"./basis.js":"enhcL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eZq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue);
parcelHelpers.export(exports, "gamma", ()=>gamma);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
exports.default = nogamma;

},{"./constant.js":"aXv76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXv76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQXK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genericArray", ()=>genericArray);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    return ((0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : genericArray)(a, b);
};
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, _valueJsDefault.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"2GpMq","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l29YZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray);
exports.default = function(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
};
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCKgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdyKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
exports.default = function(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = (0, _valueJsDefault.default)(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
};

},{"./value.js":"2GpMq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Qre8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
exports.default = function(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, _numberJsDefault.default)(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
};

},{"./number.js":"fZAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lHW7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDBQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg);
var _numberJs = require("../number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _parseJs = require("./parse.js");
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, _numberJsDefault.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, _numberJsDefault.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform((0, _parseJs.parseCss), "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform((0, _parseJs.parseSvg), ", ", ")", ")");

},{"../number.js":"fZAq5","./parse.js":"dwvtF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwvtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, _decomposeJs.identity) : (0, _decomposeJsDefault.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return 0, _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return 0, _decomposeJs.identity;
    value = value.matrix;
    return (0, _decomposeJsDefault.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"7Ejbr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ejbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
exports.default = function(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIv0D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constants(x) {
    return function() {
        return x;
    };
}
exports.default = constants;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9Lyx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function number(x) {
    return +x;
}
exports.default = number;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kp8lc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahQef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
function tickFormat(start, stop, count, specifier) {
    var step = (0, _d3Array.tickStep)(start, stop, count), precision;
    specifier = (0, _d3Format.formatSpecifier)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionPrefix)(step, value))) specifier.precision = precision;
            return (0, _d3Format.formatPrefix)(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return (0, _d3Format.format)(specifier);
}
exports.default = tickFormat;

},{"d3-array":"1yX2W","d3-format":"4XOv2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XOv2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDefaultLocale", ()=>(0, _defaultLocaleJsDefault.default));
parcelHelpers.export(exports, "format", ()=>(0, _defaultLocaleJs.format));
parcelHelpers.export(exports, "formatPrefix", ()=>(0, _defaultLocaleJs.formatPrefix));
parcelHelpers.export(exports, "formatLocale", ()=>(0, _localeJsDefault.default));
parcelHelpers.export(exports, "formatSpecifier", ()=>(0, _formatSpecifierJsDefault.default));
parcelHelpers.export(exports, "FormatSpecifier", ()=>(0, _formatSpecifierJs.FormatSpecifier));
parcelHelpers.export(exports, "precisionFixed", ()=>(0, _precisionFixedJsDefault.default));
parcelHelpers.export(exports, "precisionPrefix", ()=>(0, _precisionPrefixJsDefault.default));
parcelHelpers.export(exports, "precisionRound", ()=>(0, _precisionRoundJsDefault.default));
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _precisionFixedJs = require("./precisionFixed.js");
var _precisionFixedJsDefault = parcelHelpers.interopDefault(_precisionFixedJs);
var _precisionPrefixJs = require("./precisionPrefix.js");
var _precisionPrefixJsDefault = parcelHelpers.interopDefault(_precisionPrefixJs);
var _precisionRoundJs = require("./precisionRound.js");
var _precisionRoundJsDefault = parcelHelpers.interopDefault(_precisionRoundJs);

},{"./defaultLocale.js":"g4Ai7","./locale.js":"8sic5","./formatSpecifier.js":"4gfsY","./precisionFixed.js":"kCBOH","./precisionPrefix.js":"anfJX","./precisionRound.js":"djznD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4Ai7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "formatPrefix", ()=>formatPrefix);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = (0, _localeJsDefault.default)(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"8sic5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sic5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
var _formatGroupJs = require("./formatGroup.js");
var _formatGroupJsDefault = parcelHelpers.interopDefault(_formatGroupJs);
var _formatNumeralsJs = require("./formatNumerals.js");
var _formatNumeralsJsDefault = parcelHelpers.interopDefault(_formatNumeralsJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _formatTrimJs = require("./formatTrim.js");
var _formatTrimJsDefault = parcelHelpers.interopDefault(_formatTrimJs);
var _formatTypesJs = require("./formatTypes.js");
var _formatTypesJsDefault = parcelHelpers.interopDefault(_formatTypesJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
exports.default = function(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? (0, _identityJsDefault.default) : (0, _formatGroupJsDefault.default)(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? (0, _identityJsDefault.default) : (0, _formatNumeralsJsDefault.default)(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, _formatSpecifierJsDefault.default)(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!(0, _formatTypesJsDefault.default)[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = (0, _formatTypesJsDefault.default)[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, _formatTrimJsDefault.default)(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + (0, _formatPrefixAutoJs.prefixExponent) / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, _formatSpecifierJsDefault.default)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, _exponentJsDefault.default)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
};

},{"./exponent.js":"7L05r","./formatGroup.js":"97wNI","./formatNumerals.js":"bnEku","./formatSpecifier.js":"4gfsY","./formatTrim.js":"cGiOx","./formatTypes.js":"aVp9c","./formatPrefixAuto.js":"lOwtK","./identity.js":"9nHXj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7L05r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x) {
    return x = (0, _formatDecimalJs.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkS16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
parcelHelpers.export(exports, "formatDecimalParts", ()=>formatDecimalParts);
exports.default = function(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
};
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97wNI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnEku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gfsY":[function(require,module,exports) {
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormatSpecifier", ()=>FormatSpecifier);
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
exports.default = formatSpecifier;
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGiOx":[function(require,module,exports) {
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVp9c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
var _formatDecimalJsDefault = parcelHelpers.interopDefault(_formatDecimalJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _formatPrefixAutoJsDefault = parcelHelpers.interopDefault(_formatPrefixAutoJs);
var _formatRoundedJs = require("./formatRounded.js");
var _formatRoundedJsDefault = parcelHelpers.interopDefault(_formatRoundedJs);
exports.default = {
    "%": (x, p)=>(x * 100).toFixed(p),
    "b": (x)=>Math.round(x).toString(2),
    "c": (x)=>x + "",
    "d": (0, _formatDecimalJsDefault.default),
    "e": (x, p)=>x.toExponential(p),
    "f": (x, p)=>x.toFixed(p),
    "g": (x, p)=>x.toPrecision(p),
    "o": (x)=>Math.round(x).toString(8),
    "p": (x, p)=>(0, _formatRoundedJsDefault.default)(x * 100, p),
    "r": (0, _formatRoundedJsDefault.default),
    "s": (0, _formatPrefixAutoJsDefault.default),
    "X": (x)=>Math.round(x).toString(16).toUpperCase(),
    "x": (x)=>Math.round(x).toString(16)
};

},{"./formatDecimal.js":"fkS16","./formatPrefixAuto.js":"lOwtK","./formatRounded.js":"gq71u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOwtK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefixExponent", ()=>prefixExponent);
var _formatDecimalJs = require("./formatDecimal.js");
var prefixExponent;
exports.default = function(x, p) {
    var d = (0, _formatDecimalJs.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimalJs.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gq71u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x, p) {
    var d = (0, _formatDecimalJs.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nHXj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCBOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step) {
    return Math.max(0, -(0, _exponentJsDefault.default)(Math.abs(step)));
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"anfJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponentJsDefault.default)(value) / 3))) * 3 - (0, _exponentJsDefault.default)(Math.abs(step)));
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djznD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, _exponentJsDefault.default)(max) - (0, _exponentJsDefault.default)(step)) + 1;
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"z4t8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loggish", ()=>loggish);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x);
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base);
}
function reflect(f) {
    return (x, k)=>-f(-x, k);
}
function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else transform(transformLog, transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i)for(k = 1; k < base; ++k){
                t = i < 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i <= j; ++i)for(k = base - 1; k >= 1; --k){
                t = i > 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            if (z.length * 2 < n) z = (0, _d3Array.ticks)(u, v, n);
        } else z = (0, _d3Array.ticks)(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = (0, _d3Format.formatSpecifier)(specifier)).precision == null) specifier.trim = true;
            specifier = (0, _d3Format.format)(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain((0, _niceJsDefault.default)(domain(), {
            floor: (x)=>pows(Math.floor(logs(x))),
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function log() {
    const scale = loggish((0, _continuousJs.transformer)()).domain([
        1,
        10
    ]);
    scale.copy = ()=>(0, _continuousJs.copy)(scale, log()).base(scale.base());
    (0, _initJs.initRange).apply(scale, arguments);
    return scale;
}
exports.default = log;

},{"d3-array":"1yX2W","d3-format":"4XOv2","./nice.js":"kAVeE","./continuous.js":"1LsCM","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAVeE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
exports.default = nice;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KiG8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "symlogish", ()=>symlogish);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return (0, _linearJs.linearish)(scale);
}
function symlog() {
    var scale = symlogish((0, _continuousJs.transformer)());
    scale.copy = function() {
        return (0, _continuousJs.copy)(scale, symlog()).constant(scale.constant());
    };
    return (0, _initJs.initRange).apply(scale, arguments);
}
exports.default = symlog;

},{"./linear.js":"lob4K","./continuous.js":"1LsCM","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVG8A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "powish", ()=>powish);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function powish(transform) {
    var scale = transform((0, _continuousJs.identity), (0, _continuousJs.identity)), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform((0, _continuousJs.identity), (0, _continuousJs.identity)) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return (0, _linearJs.linearish)(scale);
}
function pow() {
    var scale = powish((0, _continuousJs.transformer)());
    scale.copy = function() {
        return (0, _continuousJs.copy)(scale, pow()).exponent(scale.exponent());
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return scale;
}
exports.default = pow;
function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
}

},{"./linear.js":"lob4K","./continuous.js":"1LsCM","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMNy9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "sequentialLog", ()=>sequentialLog);
parcelHelpers.export(exports, "sequentialSymlog", ()=>sequentialSymlog);
parcelHelpers.export(exports, "sequentialPow", ()=>sequentialPow);
parcelHelpers.export(exports, "sequentialSqrt", ()=>sequentialSqrt);
var _d3Interpolate = require("d3-interpolate");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _logJs = require("./log.js");
var _symlogJs = require("./symlog.js");
var _powJs = require("./pow.js");
function transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = (0, _continuousJs.identity), clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range((0, _d3Interpolate.interpolate));
    scale.rangeRound = range((0, _d3Interpolate.interpolateRound));
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
    var scale = (0, _linearJs.linearish)(transformer()((0, _continuousJs.identity)));
    scale.copy = function() {
        return copy(scale, sequential());
    };
    return (0, _initJs.initInterpolator).apply(scale, arguments);
}
exports.default = sequential;
function sequentialLog() {
    var scale = (0, _logJs.loggish)(transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return copy(scale, sequentialLog()).base(scale.base());
    };
    return (0, _initJs.initInterpolator).apply(scale, arguments);
}
function sequentialSymlog() {
    var scale = (0, _symlogJs.symlogish)(transformer());
    scale.copy = function() {
        return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return (0, _initJs.initInterpolator).apply(scale, arguments);
}
function sequentialPow() {
    var scale = (0, _powJs.powish)(transformer());
    scale.copy = function() {
        return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return (0, _initJs.initInterpolator).apply(scale, arguments);
}
function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
}

},{"d3-interpolate":"6jJyi","./continuous.js":"1LsCM","./init.js":"kp8lc","./linear.js":"lob4K","./log.js":"z4t8s","./symlog.js":"4KiG8","./pow.js":"jVG8A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfCpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schemeCategory10", ()=>(0, _category10JsDefault.default));
parcelHelpers.export(exports, "schemeAccent", ()=>(0, _accentJsDefault.default));
parcelHelpers.export(exports, "schemeDark2", ()=>(0, _dark2JsDefault.default));
parcelHelpers.export(exports, "schemePaired", ()=>(0, _pairedJsDefault.default));
parcelHelpers.export(exports, "schemePastel1", ()=>(0, _pastel1JsDefault.default));
parcelHelpers.export(exports, "schemePastel2", ()=>(0, _pastel2JsDefault.default));
parcelHelpers.export(exports, "schemeSet1", ()=>(0, _set1JsDefault.default));
parcelHelpers.export(exports, "schemeSet2", ()=>(0, _set2JsDefault.default));
parcelHelpers.export(exports, "schemeSet3", ()=>(0, _set3JsDefault.default));
parcelHelpers.export(exports, "schemeTableau10", ()=>(0, _tableau10JsDefault.default));
parcelHelpers.export(exports, "interpolateBrBG", ()=>(0, _brBGJsDefault.default));
parcelHelpers.export(exports, "schemeBrBG", ()=>(0, _brBGJs.scheme));
parcelHelpers.export(exports, "interpolatePRGn", ()=>(0, _prgnJsDefault.default));
parcelHelpers.export(exports, "schemePRGn", ()=>(0, _prgnJs.scheme));
parcelHelpers.export(exports, "interpolatePiYG", ()=>(0, _piYGJsDefault.default));
parcelHelpers.export(exports, "schemePiYG", ()=>(0, _piYGJs.scheme));
parcelHelpers.export(exports, "interpolatePuOr", ()=>(0, _puOrJsDefault.default));
parcelHelpers.export(exports, "schemePuOr", ()=>(0, _puOrJs.scheme));
parcelHelpers.export(exports, "interpolateRdBu", ()=>(0, _rdBuJsDefault.default));
parcelHelpers.export(exports, "schemeRdBu", ()=>(0, _rdBuJs.scheme));
parcelHelpers.export(exports, "interpolateRdGy", ()=>(0, _rdGyJsDefault.default));
parcelHelpers.export(exports, "schemeRdGy", ()=>(0, _rdGyJs.scheme));
parcelHelpers.export(exports, "interpolateRdYlBu", ()=>(0, _rdYlBuJsDefault.default));
parcelHelpers.export(exports, "schemeRdYlBu", ()=>(0, _rdYlBuJs.scheme));
parcelHelpers.export(exports, "interpolateRdYlGn", ()=>(0, _rdYlGnJsDefault.default));
parcelHelpers.export(exports, "schemeRdYlGn", ()=>(0, _rdYlGnJs.scheme));
parcelHelpers.export(exports, "interpolateSpectral", ()=>(0, _spectralJsDefault.default));
parcelHelpers.export(exports, "schemeSpectral", ()=>(0, _spectralJs.scheme));
parcelHelpers.export(exports, "interpolateBuGn", ()=>(0, _buGnJsDefault.default));
parcelHelpers.export(exports, "schemeBuGn", ()=>(0, _buGnJs.scheme));
parcelHelpers.export(exports, "interpolateBuPu", ()=>(0, _buPuJsDefault.default));
parcelHelpers.export(exports, "schemeBuPu", ()=>(0, _buPuJs.scheme));
parcelHelpers.export(exports, "interpolateGnBu", ()=>(0, _gnBuJsDefault.default));
parcelHelpers.export(exports, "schemeGnBu", ()=>(0, _gnBuJs.scheme));
parcelHelpers.export(exports, "interpolateOrRd", ()=>(0, _orRdJsDefault.default));
parcelHelpers.export(exports, "schemeOrRd", ()=>(0, _orRdJs.scheme));
parcelHelpers.export(exports, "interpolatePuBuGn", ()=>(0, _puBuGnJsDefault.default));
parcelHelpers.export(exports, "schemePuBuGn", ()=>(0, _puBuGnJs.scheme));
parcelHelpers.export(exports, "interpolatePuBu", ()=>(0, _puBuJsDefault.default));
parcelHelpers.export(exports, "schemePuBu", ()=>(0, _puBuJs.scheme));
parcelHelpers.export(exports, "interpolatePuRd", ()=>(0, _puRdJsDefault.default));
parcelHelpers.export(exports, "schemePuRd", ()=>(0, _puRdJs.scheme));
parcelHelpers.export(exports, "interpolateRdPu", ()=>(0, _rdPuJsDefault.default));
parcelHelpers.export(exports, "schemeRdPu", ()=>(0, _rdPuJs.scheme));
parcelHelpers.export(exports, "interpolateYlGnBu", ()=>(0, _ylGnBuJsDefault.default));
parcelHelpers.export(exports, "schemeYlGnBu", ()=>(0, _ylGnBuJs.scheme));
parcelHelpers.export(exports, "interpolateYlGn", ()=>(0, _ylGnJsDefault.default));
parcelHelpers.export(exports, "schemeYlGn", ()=>(0, _ylGnJs.scheme));
parcelHelpers.export(exports, "interpolateYlOrBr", ()=>(0, _ylOrBrJsDefault.default));
parcelHelpers.export(exports, "schemeYlOrBr", ()=>(0, _ylOrBrJs.scheme));
parcelHelpers.export(exports, "interpolateYlOrRd", ()=>(0, _ylOrRdJsDefault.default));
parcelHelpers.export(exports, "schemeYlOrRd", ()=>(0, _ylOrRdJs.scheme));
parcelHelpers.export(exports, "interpolateBlues", ()=>(0, _bluesJsDefault.default));
parcelHelpers.export(exports, "schemeBlues", ()=>(0, _bluesJs.scheme));
parcelHelpers.export(exports, "interpolateGreens", ()=>(0, _greensJsDefault.default));
parcelHelpers.export(exports, "schemeGreens", ()=>(0, _greensJs.scheme));
parcelHelpers.export(exports, "interpolateGreys", ()=>(0, _greysJsDefault.default));
parcelHelpers.export(exports, "schemeGreys", ()=>(0, _greysJs.scheme));
parcelHelpers.export(exports, "interpolatePurples", ()=>(0, _purplesJsDefault.default));
parcelHelpers.export(exports, "schemePurples", ()=>(0, _purplesJs.scheme));
parcelHelpers.export(exports, "interpolateReds", ()=>(0, _redsJsDefault.default));
parcelHelpers.export(exports, "schemeReds", ()=>(0, _redsJs.scheme));
parcelHelpers.export(exports, "interpolateOranges", ()=>(0, _orangesJsDefault.default));
parcelHelpers.export(exports, "schemeOranges", ()=>(0, _orangesJs.scheme));
parcelHelpers.export(exports, "interpolateCividis", ()=>(0, _cividisJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixDefault", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateRainbow", ()=>(0, _rainbowJsDefault.default));
parcelHelpers.export(exports, "interpolateWarm", ()=>(0, _rainbowJs.warm));
parcelHelpers.export(exports, "interpolateCool", ()=>(0, _rainbowJs.cool));
parcelHelpers.export(exports, "interpolateSinebow", ()=>(0, _sinebowJsDefault.default));
parcelHelpers.export(exports, "interpolateTurbo", ()=>(0, _turboJsDefault.default));
parcelHelpers.export(exports, "interpolateViridis", ()=>(0, _viridisJsDefault.default));
parcelHelpers.export(exports, "interpolateMagma", ()=>(0, _viridisJs.magma));
parcelHelpers.export(exports, "interpolateInferno", ()=>(0, _viridisJs.inferno));
parcelHelpers.export(exports, "interpolatePlasma", ()=>(0, _viridisJs.plasma));
var _category10Js = require("./categorical/category10.js");
var _category10JsDefault = parcelHelpers.interopDefault(_category10Js);
var _accentJs = require("./categorical/Accent.js");
var _accentJsDefault = parcelHelpers.interopDefault(_accentJs);
var _dark2Js = require("./categorical/Dark2.js");
var _dark2JsDefault = parcelHelpers.interopDefault(_dark2Js);
var _pairedJs = require("./categorical/Paired.js");
var _pairedJsDefault = parcelHelpers.interopDefault(_pairedJs);
var _pastel1Js = require("./categorical/Pastel1.js");
var _pastel1JsDefault = parcelHelpers.interopDefault(_pastel1Js);
var _pastel2Js = require("./categorical/Pastel2.js");
var _pastel2JsDefault = parcelHelpers.interopDefault(_pastel2Js);
var _set1Js = require("./categorical/Set1.js");
var _set1JsDefault = parcelHelpers.interopDefault(_set1Js);
var _set2Js = require("./categorical/Set2.js");
var _set2JsDefault = parcelHelpers.interopDefault(_set2Js);
var _set3Js = require("./categorical/Set3.js");
var _set3JsDefault = parcelHelpers.interopDefault(_set3Js);
var _tableau10Js = require("./categorical/Tableau10.js");
var _tableau10JsDefault = parcelHelpers.interopDefault(_tableau10Js);
var _brBGJs = require("./diverging/BrBG.js");
var _brBGJsDefault = parcelHelpers.interopDefault(_brBGJs);
var _prgnJs = require("./diverging/PRGn.js");
var _prgnJsDefault = parcelHelpers.interopDefault(_prgnJs);
var _piYGJs = require("./diverging/PiYG.js");
var _piYGJsDefault = parcelHelpers.interopDefault(_piYGJs);
var _puOrJs = require("./diverging/PuOr.js");
var _puOrJsDefault = parcelHelpers.interopDefault(_puOrJs);
var _rdBuJs = require("./diverging/RdBu.js");
var _rdBuJsDefault = parcelHelpers.interopDefault(_rdBuJs);
var _rdGyJs = require("./diverging/RdGy.js");
var _rdGyJsDefault = parcelHelpers.interopDefault(_rdGyJs);
var _rdYlBuJs = require("./diverging/RdYlBu.js");
var _rdYlBuJsDefault = parcelHelpers.interopDefault(_rdYlBuJs);
var _rdYlGnJs = require("./diverging/RdYlGn.js");
var _rdYlGnJsDefault = parcelHelpers.interopDefault(_rdYlGnJs);
var _spectralJs = require("./diverging/Spectral.js");
var _spectralJsDefault = parcelHelpers.interopDefault(_spectralJs);
var _buGnJs = require("./sequential-multi/BuGn.js");
var _buGnJsDefault = parcelHelpers.interopDefault(_buGnJs);
var _buPuJs = require("./sequential-multi/BuPu.js");
var _buPuJsDefault = parcelHelpers.interopDefault(_buPuJs);
var _gnBuJs = require("./sequential-multi/GnBu.js");
var _gnBuJsDefault = parcelHelpers.interopDefault(_gnBuJs);
var _orRdJs = require("./sequential-multi/OrRd.js");
var _orRdJsDefault = parcelHelpers.interopDefault(_orRdJs);
var _puBuGnJs = require("./sequential-multi/PuBuGn.js");
var _puBuGnJsDefault = parcelHelpers.interopDefault(_puBuGnJs);
var _puBuJs = require("./sequential-multi/PuBu.js");
var _puBuJsDefault = parcelHelpers.interopDefault(_puBuJs);
var _puRdJs = require("./sequential-multi/PuRd.js");
var _puRdJsDefault = parcelHelpers.interopDefault(_puRdJs);
var _rdPuJs = require("./sequential-multi/RdPu.js");
var _rdPuJsDefault = parcelHelpers.interopDefault(_rdPuJs);
var _ylGnBuJs = require("./sequential-multi/YlGnBu.js");
var _ylGnBuJsDefault = parcelHelpers.interopDefault(_ylGnBuJs);
var _ylGnJs = require("./sequential-multi/YlGn.js");
var _ylGnJsDefault = parcelHelpers.interopDefault(_ylGnJs);
var _ylOrBrJs = require("./sequential-multi/YlOrBr.js");
var _ylOrBrJsDefault = parcelHelpers.interopDefault(_ylOrBrJs);
var _ylOrRdJs = require("./sequential-multi/YlOrRd.js");
var _ylOrRdJsDefault = parcelHelpers.interopDefault(_ylOrRdJs);
var _bluesJs = require("./sequential-single/Blues.js");
var _bluesJsDefault = parcelHelpers.interopDefault(_bluesJs);
var _greensJs = require("./sequential-single/Greens.js");
var _greensJsDefault = parcelHelpers.interopDefault(_greensJs);
var _greysJs = require("./sequential-single/Greys.js");
var _greysJsDefault = parcelHelpers.interopDefault(_greysJs);
var _purplesJs = require("./sequential-single/Purples.js");
var _purplesJsDefault = parcelHelpers.interopDefault(_purplesJs);
var _redsJs = require("./sequential-single/Reds.js");
var _redsJsDefault = parcelHelpers.interopDefault(_redsJs);
var _orangesJs = require("./sequential-single/Oranges.js");
var _orangesJsDefault = parcelHelpers.interopDefault(_orangesJs);
var _cividisJs = require("./sequential-multi/cividis.js");
var _cividisJsDefault = parcelHelpers.interopDefault(_cividisJs);
var _cubehelixJs = require("./sequential-multi/cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _rainbowJs = require("./sequential-multi/rainbow.js");
var _rainbowJsDefault = parcelHelpers.interopDefault(_rainbowJs);
var _sinebowJs = require("./sequential-multi/sinebow.js");
var _sinebowJsDefault = parcelHelpers.interopDefault(_sinebowJs);
var _turboJs = require("./sequential-multi/turbo.js");
var _turboJsDefault = parcelHelpers.interopDefault(_turboJs);
var _viridisJs = require("./sequential-multi/viridis.js");
var _viridisJsDefault = parcelHelpers.interopDefault(_viridisJs);

},{"./categorical/category10.js":false,"./categorical/Accent.js":false,"./categorical/Dark2.js":false,"./categorical/Paired.js":false,"./categorical/Pastel1.js":false,"./categorical/Pastel2.js":false,"./categorical/Set1.js":false,"./categorical/Set2.js":false,"./categorical/Set3.js":false,"./categorical/Tableau10.js":false,"./diverging/BrBG.js":false,"./diverging/PRGn.js":false,"./diverging/PiYG.js":false,"./diverging/PuOr.js":false,"./diverging/RdBu.js":false,"./diverging/RdGy.js":false,"./diverging/RdYlBu.js":false,"./diverging/RdYlGn.js":false,"./diverging/Spectral.js":false,"./sequential-multi/BuGn.js":false,"./sequential-multi/BuPu.js":false,"./sequential-multi/GnBu.js":"964kK","./sequential-multi/OrRd.js":false,"./sequential-multi/PuBuGn.js":"9kVx1","./sequential-multi/PuBu.js":"43RCM","./sequential-multi/PuRd.js":false,"./sequential-multi/RdPu.js":false,"./sequential-multi/YlGnBu.js":"3VnM6","./sequential-multi/YlGn.js":false,"./sequential-multi/YlOrBr.js":false,"./sequential-multi/YlOrRd.js":false,"./sequential-single/Blues.js":"1pzBn","./sequential-single/Greens.js":false,"./sequential-single/Greys.js":false,"./sequential-single/Purples.js":false,"./sequential-single/Reds.js":false,"./sequential-single/Oranges.js":false,"./sequential-multi/cividis.js":"2gM4s","./sequential-multi/cubehelix.js":false,"./sequential-multi/rainbow.js":false,"./sequential-multi/sinebow.js":false,"./sequential-multi/turbo.js":"6GvRp","./sequential-multi/viridis.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"964kK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiYm8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"289bX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
exports.default = (scheme)=>(0, _d3Interpolate.interpolateRgbBasis)(scheme[scheme.length - 1]);

},{"d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kVx1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43RCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VnM6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pzBn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gM4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GvRp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lorl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "active", ()=>(0, _activeJsDefault.default));
parcelHelpers.export(exports, "interrupt", ()=>(0, _interruptJsDefault.default));
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"heX1u","./transition/index.js":"h2Srb","./active.js":false,"./interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heX1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
(0, _d3Selection.selection).prototype.interrupt = (0, _interruptJsDefault.default);
(0, _d3Selection.selection).prototype.transition = (0, _transitionJsDefault.default);

},{"d3-selection":"gn9gd","./interrupt.js":"ecsW0","./transition.js":"aZzEX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecsW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
exports.default = function(name) {
    return this.each(function() {
        (0, _interruptJsDefault.default)(this, name);
    });
};

},{"../interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3g05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./transition/schedule.js");
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > (0, _scheduleJs.STARTING) && schedule.state < (0, _scheduleJs.ENDING);
        schedule.state = (0, _scheduleJs.ENDED);
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
};

},{"./transition/schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"de74c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED);
parcelHelpers.export(exports, "STARTING", ()=>STARTING);
parcelHelpers.export(exports, "STARTED", ()=>STARTED);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING);
parcelHelpers.export(exports, "ENDING", ()=>ENDING);
parcelHelpers.export(exports, "ENDED", ()=>ENDED);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "get", ()=>get);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
exports.default = function(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
};
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, _d3Timer.timeout)(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, _d3Timer.timeout)(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

},{"d3-dispatch":"5WtHO","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WtHO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>(0, _dispatchJsDefault.default));
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"8Hmyd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hmyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TEss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>(0, _timerJs.now));
parcelHelpers.export(exports, "timer", ()=>(0, _timerJs.timer));
parcelHelpers.export(exports, "timerFlush", ()=>(0, _timerJs.timerFlush));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeoutJsDefault.default));
parcelHelpers.export(exports, "interval", ()=>(0, _intervalJsDefault.default));
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"bfF2F","./timeout.js":"ioM7O","./interval.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfF2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioM7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback, delay, time) {
    var t = new (0, _timerJs.Timer);
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
};

},{"./timer.js":"bfF2F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZzEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, _d3Ease.easeCubicInOut)
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
exports.default = function(name) {
    var id, timing;
    if (name instanceof (0, _indexJs.Transition)) id = name._id, name = name._name;
    else id = (0, _indexJs.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, _scheduleJsDefault.default)(node, name, id, i, group, timing || inherit(node, id));
    }
    return new (0, _indexJs.Transition)(groups, this._parents, name, id);
};

},{"../transition/index.js":"h2Srb","../transition/schedule.js":"de74c","d3-ease":"8sCNl","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2Srb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "newId", ()=>newId);
var _d3Selection = require("d3-selection");
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _attrTweenJs = require("./attrTween.js");
var _attrTweenJsDefault = parcelHelpers.interopDefault(_attrTweenJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _easeJs = require("./ease.js");
var _easeJsDefault = parcelHelpers.interopDefault(_easeJs);
var _easeVaryingJs = require("./easeVarying.js");
var _easeVaryingJsDefault = parcelHelpers.interopDefault(_easeVaryingJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _styleTweenJs = require("./styleTween.js");
var _styleTweenJsDefault = parcelHelpers.interopDefault(_styleTweenJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _textTweenJs = require("./textTween.js");
var _textTweenJsDefault = parcelHelpers.interopDefault(_textTweenJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
var _tweenJs = require("./tween.js");
var _tweenJsDefault = parcelHelpers.interopDefault(_tweenJs);
var _endJs = require("./end.js");
var _endJsDefault = parcelHelpers.interopDefault(_endJs);
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, _d3Selection.selection)().transition(name);
}
exports.default = transition;
function newId() {
    return ++id;
}
var selection_prototype = (0, _d3Selection.selection).prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: (0, _filterJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: (0, _selectionJsDefault.default),
    transition: (0, _transitionJsDefault.default),
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: (0, _onJsDefault.default),
    attr: (0, _attrJsDefault.default),
    attrTween: (0, _attrTweenJsDefault.default),
    style: (0, _styleJsDefault.default),
    styleTween: (0, _styleTweenJsDefault.default),
    text: (0, _textJsDefault.default),
    textTween: (0, _textTweenJsDefault.default),
    remove: (0, _removeJsDefault.default),
    tween: (0, _tweenJsDefault.default),
    delay: (0, _delayJsDefault.default),
    duration: (0, _durationJsDefault.default),
    ease: (0, _easeJsDefault.default),
    easeVarying: (0, _easeVaryingJsDefault.default),
    end: (0, _endJsDefault.default),
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"gn9gd","./attr.js":"9UgA3","./attrTween.js":"1hMpn","./delay.js":"2BzOF","./duration.js":"ei298","./ease.js":"lCGHM","./easeVarying.js":"aju4f","./filter.js":"d3Uia","./merge.js":"9odBi","./on.js":"3XrBC","./remove.js":"aZLkz","./select.js":"bgUUX","./selectAll.js":"lqPi4","./selection.js":"iWTRA","./style.js":"44QDP","./styleTween.js":"42AvL","./text.js":"6mGEx","./textTween.js":"kqC5z","./transition.js":"50tVR","./tween.js":"1Kbbg","./end.js":"ev0ir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UgA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
exports.default = function(name, value) {
    var fullname = (0, _d3Selection.namespace)(name), i = fullname === "transform" ? (0, _d3Interpolate.interpolateTransformSvg) : (0, _interpolateJsDefault.default);
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tweenJs.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kbbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
exports.default = function(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, _scheduleJs.get)(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, _scheduleJs.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, _scheduleJs.get)(node, id).value[name];
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69lgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = function(a, b) {
    var c;
    return (typeof b === "number" ? (0, _d3Interpolate.interpolateNumber) : b instanceof (0, _d3Color.color) ? (0, _d3Interpolate.interpolateRgb) : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : (0, _d3Interpolate.interpolateString))(a, b);
};

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hMpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, _d3Selection.namespace)(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BzOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        (0, _scheduleJs.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.init)(this, id).delay = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).delay;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ei298":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        (0, _scheduleJs.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.set)(this, id).duration = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).duration;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCGHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, _scheduleJs.set)(this, id).ease = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : (0, _scheduleJs.get)(this.node(), id).ease;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aju4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, _scheduleJs.set)(this, id).ease = v;
    };
}
exports.default = function(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Uia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
exports.default = function(match) {
    if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, _indexJs.Transition)(subgroups, this._parents, this._name, this._id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9odBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, _indexJs.Transition)(merges, this._parents, this._name, this._id);
};

},{"./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XrBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? (0, _scheduleJs.init) : (0, _scheduleJs.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
exports.default = function(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, _scheduleJs.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZLkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
exports.default = function() {
    return this.on("end.remove", removeFunction(this._id));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgUUX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, _d3Selection.selector)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            (0, _scheduleJsDefault.default)(subgroup[i], name, id, i, subgroup, (0, _scheduleJs.get)(node, id));
        }
    }
    return new (0, _indexJs.Transition)(subgroups, this._parents, name, id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqPi4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, _scheduleJs.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, _scheduleJsDefault.default)(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new (0, _indexJs.Transition)(subgroups, parents, name, id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWTRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var Selection = (0, _d3Selection.selection).prototype.constructor;
exports.default = function() {
    return new Selection(this._groups, this._parents);
};

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44QDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
exports.default = function(name, value, priority) {
    var i = (name += "") === "transform" ? (0, _d3Interpolate.interpolateTransformCss) : (0, _interpolateJsDefault.default);
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tweenJs.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./schedule.js":"de74c","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42AvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mGEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweenJs = require("./tween.js");
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
exports.default = function(value) {
    return this.tween("text", typeof value === "function" ? textFunction((0, _tweenJs.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

},{"./tween.js":"1Kbbg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqC5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50tVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function() {
    var name = this._name, id0 = this._id, id1 = (0, _indexJs.newId)();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = (0, _scheduleJs.get)(node, id0);
            (0, _scheduleJsDefault.default)(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new (0, _indexJs.Transition)(groups, this._parents, name, id1);
};

},{"./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ev0ir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
exports.default = function() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sCNl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>(0, _linearJs.linear));
parcelHelpers.export(exports, "easeQuad", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeQuadIn", ()=>(0, _quadJs.quadIn));
parcelHelpers.export(exports, "easeQuadOut", ()=>(0, _quadJs.quadOut));
parcelHelpers.export(exports, "easeQuadInOut", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeCubic", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easeCubicIn", ()=>(0, _cubicJs.cubicIn));
parcelHelpers.export(exports, "easeCubicOut", ()=>(0, _cubicJs.cubicOut));
parcelHelpers.export(exports, "easeCubicInOut", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easePoly", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easePolyIn", ()=>(0, _polyJs.polyIn));
parcelHelpers.export(exports, "easePolyOut", ()=>(0, _polyJs.polyOut));
parcelHelpers.export(exports, "easePolyInOut", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easeSin", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeSinIn", ()=>(0, _sinJs.sinIn));
parcelHelpers.export(exports, "easeSinOut", ()=>(0, _sinJs.sinOut));
parcelHelpers.export(exports, "easeSinInOut", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeExp", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeExpIn", ()=>(0, _expJs.expIn));
parcelHelpers.export(exports, "easeExpOut", ()=>(0, _expJs.expOut));
parcelHelpers.export(exports, "easeExpInOut", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeCircle", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeCircleIn", ()=>(0, _circleJs.circleIn));
parcelHelpers.export(exports, "easeCircleOut", ()=>(0, _circleJs.circleOut));
parcelHelpers.export(exports, "easeCircleInOut", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeBounce", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceIn", ()=>(0, _bounceJs.bounceIn));
parcelHelpers.export(exports, "easeBounceOut", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceInOut", ()=>(0, _bounceJs.bounceInOut));
parcelHelpers.export(exports, "easeBack", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeBackIn", ()=>(0, _backJs.backIn));
parcelHelpers.export(exports, "easeBackOut", ()=>(0, _backJs.backOut));
parcelHelpers.export(exports, "easeBackInOut", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeElastic", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticIn", ()=>(0, _elasticJs.elasticIn));
parcelHelpers.export(exports, "easeElasticOut", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticInOut", ()=>(0, _elasticJs.elasticInOut));
var _linearJs = require("./linear.js");
var _quadJs = require("./quad.js");
var _cubicJs = require("./cubic.js");
var _polyJs = require("./poly.js");
var _sinJs = require("./sin.js");
var _expJs = require("./exp.js");
var _circleJs = require("./circle.js");
var _bounceJs = require("./bounce.js");
var _backJs = require("./back.js");
var _elasticJs = require("./elastic.js");

},{"./linear.js":false,"./quad.js":false,"./cubic.js":"cGjk7","./poly.js":false,"./sin.js":false,"./exp.js":false,"./circle.js":false,"./bounce.js":false,"./back.js":false,"./elastic.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGjk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCjFA":[function(require,module,exports) {
module.exports = JSON.parse('[{"year":1901,"category":"Chemistry","motivation":"in recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions","prize_share":"1/1","laureate_type":"Individual","name":"Jacobus Henricus van \'t Hoff","birth_date":"1852-08-30","birth_city":"Rotterdam","birth_country":"Netherlands","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1901,"category":"Literature","motivation":"in special recognition of his poetic composition, which gives evidence of lofty idealism, artistic perfection and a rare combination of the qualities of both heart and intellect","prize_share":"1/1","laureate_type":"Individual","name":"Sully Prudhomme","birth_date":"1839-03-16","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1901,"category":"Medicine","motivation":"for his work on serum therapy, especially its application against diphtheria, by which he has opened a new road in the domain of medical science and thereby placed in the hands of the physician a victorious weapon against illness and deaths","prize_share":"1/1","laureate_type":"Individual","name":"Emil Adolf von Behring","birth_date":"1854-03-15","birth_city":"Hansdorf (Lawice)","birth_country":"Poland","sex":"Male","organization_name":"Marburg University","organization_city":"Marburg","organization_country":"Germany"},{"year":1901,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Jean Henry Dunant","birth_date":"1828-05-08","birth_city":"Geneva","birth_country":"Switzerland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1901,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Fr\xe9d\xe9ric Passy","birth_date":"1822-05-20","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1901,"category":"Physics","motivation":"in recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him","prize_share":"1/1","laureate_type":"Individual","name":"Wilhelm Conrad R\xf6ntgen","birth_date":"1845-03-27","birth_city":"Lennep (Remscheid)","birth_country":"Germany","sex":"Male","organization_name":"Munich University","organization_city":"Munich","organization_country":"Germany"},{"year":1902,"category":"Chemistry","motivation":"in recognition of the extraordinary services he has rendered by his work on sugar and purine syntheses","prize_share":"1/1","laureate_type":"Individual","name":"Hermann Emil Fischer","birth_date":"1852-10-09","birth_city":"Euskirchen","birth_country":"Germany","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1902,"category":"Literature","motivation":"the greatest living master of the art of historical writing, with special reference to his monumental work, A history of Rome","prize_share":"1/1","laureate_type":"Individual","name":"Christian Matthias Theodor Mommsen","birth_date":"1817-11-30","birth_city":"Garding","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1902,"category":"Medicine","motivation":"for his work on malaria, by which he has shown how it enters the organism and thereby has laid the foundation for successful research on this disease and methods of combating it","prize_share":"1/1","laureate_type":"Individual","name":"Ronald Ross","birth_date":"1857-05-13","birth_city":"Almora","birth_country":"India","sex":"Male","organization_name":"University College","organization_city":"Liverpool","organization_country":"United Kingdom"},{"year":1902,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"\xc9lie Ducommun","birth_date":"1833-02-19","birth_city":"Geneva","birth_country":"Switzerland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1902,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Charles Albert Gobat","birth_date":"1843-05-21","birth_city":"Tramelan","birth_country":"Switzerland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1902,"category":"Physics","motivation":"in recognition of the extraordinary service they rendered by their researches into the influence of magnetism upon radiation phenomena","prize_share":"1/2","laureate_type":"Individual","name":"Hendrik Antoon Lorentz","birth_date":"1853-07-18","birth_city":"Arnhem","birth_country":"Netherlands","sex":"Male","organization_name":"Leiden University","organization_city":"Leiden","organization_country":"Netherlands"},{"year":1902,"category":"Physics","motivation":"in recognition of the extraordinary service they rendered by their researches into the influence of magnetism upon radiation phenomena","prize_share":"1/2","laureate_type":"Individual","name":"Pieter Zeeman","birth_date":"1865-05-25","birth_city":"Zonnemaire","birth_country":"Netherlands","sex":"Male","organization_name":"Amsterdam University","organization_city":"Amsterdam","organization_country":"Netherlands"},{"year":1903,"category":"Chemistry","motivation":"in recognition of the extraordinary services he has rendered to the advancement of chemistry by his electrolytic theory of dissociation","prize_share":"1/1","laureate_type":"Individual","name":"Svante August Arrhenius","birth_date":"1859-02-19","birth_city":"Vik","birth_country":"Sweden","sex":"Male","organization_name":"Stockholm University","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1903,"category":"Literature","motivation":"as a tribute to his noble, magnificent and versatile poetry, which has always been distinguished by both the freshness of its inspiration and the rare purity of its spirit","prize_share":"1/1","laureate_type":"Individual","name":"Bj\xf8rnstjerne Martinus Bj\xf8rnson","birth_date":"1832-12-08","birth_city":"Kvikne","birth_country":"Norway","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1903,"category":"Medicine","motivation":"in recognition of his contribution to the treatment of diseases, especially lupus vulgaris, with concentrated light radiation, whereby he has opened a new avenue for medical science","prize_share":"1/1","laureate_type":"Individual","name":"Niels Ryberg Finsen","birth_date":"1860-12-15","birth_city":"Thorshavn","birth_country":"Denmark","sex":"Male","organization_name":"Finsen Medical Light Institute","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1903,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"William Randal Cremer","birth_date":"1828-03-18","birth_city":"Fareham","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1903,"category":"Physics","motivation":"in recognition of the extraordinary services he has rendered by his discovery of spontaneous radioactivity","prize_share":"2/4","laureate_type":"Individual","name":"Antoine Henri Becquerel","birth_date":"1852-12-15","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"\xc9cole Polytechnique","organization_city":"Paris","organization_country":"France"},{"year":1903,"category":"Physics","motivation":"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel","prize_share":"1/4","laureate_type":"Individual","name":"Pierre Curie","birth_date":"1859-05-15","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"\xc9cole municipale de physique et de chimie industrielles (Municipal School of Industrial Physics and Chemistry)","organization_city":"Paris","organization_country":"France"},{"year":1903,"category":"Physics","motivation":"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel","prize_share":"1/4","laureate_type":"Individual","name":"Marie Curie, n\xe9e Sklodowska","birth_date":"1867-11-07","birth_city":"Warsaw","birth_country":"Poland","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1904,"category":"Chemistry","motivation":"in recognition of his services in the discovery of the inert gaseous elements in air, and his determination of their place in the periodic system","prize_share":"1/1","laureate_type":"Individual","name":"Sir William Ramsay","birth_date":"1852-10-02","birth_city":"Glasgow","birth_country":"United Kingdom","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":1904,"category":"Literature","motivation":"in recognition of the fresh originality and true inspiration of his poetic production, which faithfully reflects the natural scenery and native spirit of his people, and, in addition, his significant work as a Proven&ccedil;al philologist","prize_share":"1/2","laureate_type":"Individual","name":"Fr\xe9d\xe9ric Mistral","birth_date":"1830-09-08","birth_city":"Maillane","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1904,"category":"Literature","motivation":"in recognition of the numerous and brilliant compositions which, in an individual and original manner, have revived the great traditions of the Spanish drama","prize_share":"1/2","laureate_type":"Individual","name":"Jos\xe9 Echegaray y Eizaguirre","birth_date":"1832-04-19","birth_city":"Madrid","birth_country":"Spain","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1904,"category":"Medicine","motivation":"in recognition of his work on the physiology of digestion, through which knowledge on vital aspects of the subject has been transformed and enlarged","prize_share":"1/1","laureate_type":"Individual","name":"Ivan Petrovich Pavlov","birth_date":"1849-09-14","birth_city":"Ryazan","birth_country":"Russia","sex":"Male","organization_name":"Military Medical Academy","organization_city":"St. Petersburg","organization_country":"Russia"},{"year":1904,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Institut de droit international (Institute of International Law)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1904,"category":"Physics","motivation":"for his investigations of the densities of the most important gases and for his discovery of argon in connection with these studies","prize_share":"1/1","laureate_type":"Individual","name":"Lord Rayleigh (John William Strutt)","birth_date":"1842-11-12","birth_city":"Langford Grove, Maldon, Essex","birth_country":"United Kingdom","sex":"Male","organization_name":"Royal Institution of Great Britain","organization_city":"London","organization_country":"United Kingdom"},{"year":1905,"category":"Chemistry","motivation":"in recognition of his services in the advancement of organic chemistry and the chemical industry, through his work on organic dyes and hydroaromatic compounds","prize_share":"1/1","laureate_type":"Individual","name":"Johann Friedrich Wilhelm Adolf von Baeyer","birth_date":"1835-10-31","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"Munich University","organization_city":"Munich","organization_country":"Germany"},{"year":1905,"category":"Literature","motivation":"because of his outstanding merits as an epic writer","prize_share":"1/1","laureate_type":"Individual","name":"Henryk Sienkiewicz","birth_date":"1846-05-05","birth_city":"Wola Okrzejska","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1905,"category":"Medicine","motivation":"for his investigations and discoveries in relation to tuberculosis","prize_share":"1/1","laureate_type":"Individual","name":"Robert Koch","birth_date":"1843-12-11","birth_city":"Clausthal (Clausthal-Zellerfeld)","birth_country":"Germany","sex":"Male","organization_name":"Institute for Infectious Diseases","organization_city":"Berlin","organization_country":"Germany"},{"year":1905,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Baroness Bertha Sophie Felicita von Suttner, n\xe9e Countess Kinsky von Chinic und Tettau","birth_date":"1843-06-09","birth_city":"Prague","birth_country":"Czech Republic","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1905,"category":"Physics","motivation":"for his work on cathode rays","prize_share":"1/1","laureate_type":"Individual","name":"Philipp Eduard Anton von Lenard","birth_date":"1862-06-07","birth_city":"Pressburg (Bratislava)","birth_country":"Slovakia","sex":"Male","organization_name":"Kiel University","organization_city":"Kiel","organization_country":"Germany"},{"year":1906,"category":"Chemistry","motivation":"in recognition of the great services rendered by him in his investigation and isolation of the element fluorine, and for the adoption in the service of science of the electric furnace called after him","prize_share":"1/1","laureate_type":"Individual","name":"Henri Moissan","birth_date":"1852-09-28","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1906,"category":"Literature","motivation":"not only in consideration of his deep learning and critical research, but above all as a tribute to the creative energy, freshness of style, and lyrical force which characterize his poetic masterpieces","prize_share":"1/1","laureate_type":"Individual","name":"Giosu\xe8 Carducci","birth_date":"1835-07-27","birth_city":"Val di Castello","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1906,"category":"Medicine","motivation":"in recognition of their work on the structure of the nervous system","prize_share":"1/2","laureate_type":"Individual","name":"Camillo Golgi","birth_date":"1843-07-07","birth_city":"Corteno","birth_country":"Italy","sex":"Male","organization_name":"Pavia University","organization_city":"Pavia","organization_country":"Italy"},{"year":1906,"category":"Medicine","motivation":"in recognition of their work on the structure of the nervous system","prize_share":"1/2","laureate_type":"Individual","name":"Santiago Ram\xf3n y Cajal","birth_date":"1852-05-01","birth_city":"Petilla de Arag\xf3","birth_country":"Spain","sex":"Male","organization_name":"Madrid University","organization_city":"Madrid","organization_country":"Spain"},{"year":1906,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Theodore Roosevelt","birth_date":"1858-10-27","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1906,"category":"Physics","motivation":"in recognition of the great merits of his theoretical and experimental investigations on the conduction of electricity by gases","prize_share":"1/1","laureate_type":"Individual","name":"Joseph John Thomson","birth_date":"1856-12-18","birth_city":"Cheetham Hill, near Manchester","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1907,"category":"Chemistry","motivation":"for his biochemical researches and his discovery of cell-free fermentation","prize_share":"1/1","laureate_type":"Individual","name":"Eduard Buchner","birth_date":"1860-05-20","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Landwirtschaftliche Hochschule (Agricultural College)","organization_city":"Berlin","organization_country":"Germany"},{"year":1907,"category":"Literature","motivation":"in consideration of the power of observation, originality of imagination, virility of ideas and remarkable talent for narration which characterize the creations of this world-famous author","prize_share":"1/1","laureate_type":"Individual","name":"Rudyard Kipling","birth_date":"1865-12-30","birth_city":"Bombay","birth_country":"India","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1907,"category":"Medicine","motivation":"in recognition of his work on the role played by protozoa in causing diseases","prize_share":"1/1","laureate_type":"Individual","name":"Charles Louis Alphonse Laveran","birth_date":"1845-06-18","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":1907,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Ernesto Teodoro Moneta","birth_date":"1833-09-20","birth_city":"Milan","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1907,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Louis Renault","birth_date":"1843-05-21","birth_city":"Autun","birth_country":"France","sex":"Male","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1907,"category":"Physics","motivation":"for his optical precision instruments and the spectroscopic and metrological investigations carried out with their aid","prize_share":"1/1","laureate_type":"Individual","name":"Albert Abraham Michelson","birth_date":"1852-12-19","birth_city":"Strelno (Strzelno)","birth_country":"Poland","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1908,"category":"Chemistry","motivation":"for his investigations into the disintegration of the elements, and the chemistry of radioactive substances","prize_share":"1/1","laureate_type":"Individual","name":"Ernest Rutherford","birth_date":"1871-08-30","birth_city":"Nelson","birth_country":"New Zealand","sex":"Male","organization_name":"Victoria University","organization_city":"Manchester","organization_country":"United Kingdom"},{"year":1908,"category":"Literature","motivation":"in recognition of his earnest search for truth, his penetrating power of thought, his wide range of vision, and the warmth and strength in presentation with which in his numerous works he has vindicated and developed an idealistic philosophy of life","prize_share":"1/1","laureate_type":"Individual","name":"Rudolf Christoph Eucken","birth_date":"1846-01-05","birth_city":"Aurich","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1908,"category":"Medicine","motivation":"in recognition of their work on immunity","prize_share":"1/2","laureate_type":"Individual","name":"Ilya Ilyich Mechnikov","birth_date":"1845-05-15","birth_city":"Kharkov (Kharkiv)","birth_country":"Ukraine","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":1908,"category":"Medicine","motivation":"in recognition of their work on immunity","prize_share":"1/2","laureate_type":"Individual","name":"Paul Ehrlich","birth_date":"1854-03-14","birth_city":"Strehlen (Strzelin)","birth_country":"Poland","sex":"Male","organization_name":"Goettingen University","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1908,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Klas Pontus Arnoldson","birth_date":"1844-10-27","birth_city":"Gothenburg","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1908,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Fredrik Bajer","birth_date":"1837-04-21","birth_city":"N\xe6stved","birth_country":"Denmark","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1908,"category":"Physics","motivation":"for his method of reproducing colours photographically based on the phenomenon of interference","prize_share":"1/1","laureate_type":"Individual","name":"Gabriel Lippmann","birth_date":"1845-08-16","birth_city":"Hollerich","birth_country":"Luxembourg","sex":"Male","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1909,"category":"Chemistry","motivation":"in recognition of his work on catalysis and for his investigations into the fundamental principles governing chemical equilibria and rates of reaction","prize_share":"1/1","laureate_type":"Individual","name":"Wilhelm Ostwald","birth_date":"1853-09-02","birth_city":"Riga","birth_country":"Latvia","sex":"Male","organization_name":"Leipzig University","organization_city":"Leipzig","organization_country":"Germany"},{"year":1909,"category":"Literature","motivation":"in appreciation of the lofty idealism, vivid imagination and spiritual perception that characterize her writings","prize_share":"1/1","laureate_type":"Individual","name":"Selma Ottilia Lovisa Lagerl\xf6f","birth_date":"1858-11-20","birth_city":"M\xe5rbacka","birth_country":"Sweden","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1909,"category":"Medicine","motivation":"for his work on the physiology, pathology and surgery of the thyroid gland","prize_share":"1/1","laureate_type":"Individual","name":"Emil Theodor Kocher","birth_date":"1841-08-25","birth_city":"Berne","birth_country":"Switzerland","sex":"Male","organization_name":"Berne University","organization_city":"Berne","organization_country":"Switzerland"},{"year":1909,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Auguste Marie Fran\xe7ois Beernaert","birth_date":"1829-07-26","birth_city":"Ostend","birth_country":"Belgium","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1909,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Paul Henri Benjamin Balluet d\'Estournelles de Constant, Baron de Constant de Rebecque","birth_date":"1852-11-22","birth_city":"La Fl\xe8che","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1909,"category":"Physics","motivation":"in recognition of their contributions to the development of wireless telegraphy","prize_share":"1/2","laureate_type":"Individual","name":"Guglielmo Marconi","birth_date":"1874-04-25","birth_city":"Bologna","birth_country":"Italy","sex":"Male","organization_name":"Marconi Wireless Telegraph Co. Ltd.","organization_city":"London","organization_country":"United Kingdom"},{"year":1909,"category":"Physics","motivation":"in recognition of their contributions to the development of wireless telegraphy","prize_share":"1/2","laureate_type":"Individual","name":"Karl Ferdinand Braun","birth_date":"1850-06-06","birth_city":"Fulda","birth_country":"Germany","sex":"Male","organization_name":"Strasbourg University","organization_city":"Strasbourg","organization_country":"France"},{"year":1910,"category":"Chemistry","motivation":"in recognition of his services to organic chemistry and the chemical industry by his pioneer work in the field of alicyclic compounds","prize_share":"1/1","laureate_type":"Individual","name":"Otto Wallach","birth_date":"1847-03-27","birth_city":"Koenigsberg (Kaliningrad)","birth_country":"Russia","sex":"Male","organization_name":"Goettingen University","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1910,"category":"Literature","motivation":"as a tribute to the consummate artistry, permeated with idealism, which he has demonstrated during his long productive career as a lyric poet, dramatist, novelist and writer of world-renowned short stories","prize_share":"1/1","laureate_type":"Individual","name":"Paul Johann Ludwig Heyse","birth_date":"1830-03-15","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1910,"category":"Medicine","motivation":"in recognition of the contributions to our knowledge of cell chemistry made through his work on proteins, including the nucleic substances","prize_share":"1/1","laureate_type":"Individual","name":"Albrecht Kossel","birth_date":"1853-09-16","birth_city":"Rostock","birth_country":"Germany","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1910,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Bureau international permanent de la Paix (Permanent International Peace Bureau)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1910,"category":"Physics","motivation":"for his work on the equation of state for gases and liquids","prize_share":"1/1","laureate_type":"Individual","name":"Johannes Diderik van der Waals","birth_date":"1837-11-23","birth_city":"Leiden","birth_country":"Netherlands","sex":"Male","organization_name":"Amsterdam University","organization_city":"Amsterdam","organization_country":"Netherlands"},{"year":1911,"category":"Chemistry","motivation":"in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element","prize_share":"1/1","laureate_type":"Individual","name":"Marie Curie, n\xe9e Sklodowska","birth_date":"1867-11-07","birth_city":"Warsaw","birth_country":"Poland","sex":"Female","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1911,"category":"Literature","motivation":"in appreciation of his many-sided literary activities, and especially of his dramatic works, which are distinguished by a wealth of imagination and by a poetic fancy, which reveals, sometimes in the guise of a fairy tale, a deep inspiration, while in a mysterious way they appeal to the readers\' own feelings and stimulate their imaginations","prize_share":"1/1","laureate_type":"Individual","name":"Count Maurice (Mooris) Polidore Marie Bernhard Maeterlinck","birth_date":"1862-08-29","birth_city":"Ghent","birth_country":"Belgium","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1911,"category":"Medicine","motivation":"for his work on the dioptrics of the eye","prize_share":"1/1","laureate_type":"Individual","name":"Allvar Gullstrand","birth_date":"1862-06-05","birth_city":"Landskrona","birth_country":"Sweden","sex":"Male","organization_name":"Uppsala University","organization_city":"Uppsala","organization_country":"Sweden"},{"year":1911,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Tobias Michael Carel Asser","birth_date":"1838-04-28","birth_city":"Amsterdam","birth_country":"Netherlands","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1911,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Alfred Hermann Fried","birth_date":"1864-11-11","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1911,"category":"Physics","motivation":"for his discoveries regarding the laws governing the radiation of heat","prize_share":"1/1","laureate_type":"Individual","name":"Wilhelm Wien","birth_date":"1864-01-13","birth_city":"Gaffken (Parusnoye)","birth_country":"Russia","sex":"Male","organization_name":"W\xfcrzburg University","organization_city":"W\xfcrzburg","organization_country":"Germany"},{"year":1912,"category":"Chemistry","motivation":"for the discovery of the so-called Grignard reagent, which in recent years has greatly advanced the progress of organic chemistry","prize_share":"1/2","laureate_type":"Individual","name":"Victor Grignard","birth_date":"1871-05-06","birth_city":"Cherbourg","birth_country":"France","sex":"Male","organization_name":"Nancy University","organization_city":"Nancy","organization_country":"France"},{"year":1912,"category":"Chemistry","motivation":"for his method of hydrogenating organic compounds in the presence of finely disintegrated metals whereby the progress of organic chemistry has been greatly advanced in recent years","prize_share":"1/2","laureate_type":"Individual","name":"Paul Sabatier","birth_date":"1854-11-05","birth_city":"Carcassonne","birth_country":"France","sex":"Male","organization_name":"Toulouse University","organization_city":"Toulouse","organization_country":"France"},{"year":1912,"category":"Literature","motivation":"primarily in recognition of his fruitful, varied and outstanding production in the realm of dramatic art","prize_share":"1/1","laureate_type":"Individual","name":"Gerhart Johann Robert Hauptmann","birth_date":"1862-11-15","birth_city":"Bad Salzbrunn","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1912,"category":"Medicine","motivation":"in recognition of his work on vascular suture and the transplantation of blood vessels and organs","prize_share":"1/1","laureate_type":"Individual","name":"Alexis Carrel","birth_date":"1873-06-28","birth_city":"Sainte-Foy-l\xe8s-Lyon","birth_country":"France","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"New York, NY","organization_country":"United States"},{"year":1912,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Elihu Root","birth_date":"1845-02-15","birth_city":"Clinton, NY","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1912,"category":"Physics","motivation":"for his invention of automatic regulators for use in conjunction with gas accumulators for illuminating lighthouses and buoys","prize_share":"1/1","laureate_type":"Individual","name":"Nils Gustaf Dal\xe9n","birth_date":"1869-11-30","birth_city":"Stenstorp","birth_country":"Sweden","sex":"Male","organization_name":"Swedish Gas-Accumulator Co.","organization_city":"Liding\xf6-Stockholm","organization_country":"Sweden"},{"year":1913,"category":"Chemistry","motivation":"in recognition of his work on the linkage of atoms in molecules by which he has thrown new light on earlier investigations and opened up new fields of research especially in inorganic chemistry","prize_share":"1/1","laureate_type":"Individual","name":"Alfred Werner","birth_date":"1866-12-12","birth_city":"Mulhouse","birth_country":"France","sex":"Male","organization_name":"University of Zurich","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1913,"category":"Literature","motivation":"because of his profoundly sensitive, fresh and beautiful verse, by which, with consummate skill, he has made his poetic thought, expressed in his own English words, a part of the literature of the West","prize_share":"1/1","laureate_type":"Individual","name":"Rabindranath Tagore","birth_date":"1861-05-07","birth_city":"Calcutta","birth_country":"India","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1913,"category":"Medicine","motivation":"in recognition of his work on anaphylaxis","prize_share":"1/1","laureate_type":"Individual","name":"Charles Robert Richet","birth_date":"1850-08-26","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1913,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Henri La Fontaine","birth_date":"1854-04-22","birth_city":"Brussels","birth_country":"Belgium","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1913,"category":"Physics","motivation":"for his investigations on the properties of matter at low temperatures which led, inter alia, to the production of liquid helium","prize_share":"1/1","laureate_type":"Individual","name":"Heike Kamerlingh Onnes","birth_date":"1853-09-21","birth_city":"Groningen","birth_country":"Netherlands","sex":"Male","organization_name":"Leiden University","organization_city":"Leiden","organization_country":"Netherlands"},{"year":1914,"category":"Chemistry","motivation":"in recognition of his accurate determinations of the atomic weight of a large number of chemical elements","prize_share":"1/1","laureate_type":"Individual","name":"Theodore William Richards","birth_date":"1868-01-31","birth_city":"Germantown, PA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1914,"category":"Medicine","motivation":"for his work on the physiology and pathology of the vestibular apparatus","prize_share":"1/1","laureate_type":"Individual","name":"Robert B\xe1r\xe1ny","birth_date":"1876-04-22","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Vienna University","organization_city":"Vienna","organization_country":"Austria"},{"year":1914,"category":"Physics","motivation":"for his discovery of the diffraction of X-rays by crystals","prize_share":"1/1","laureate_type":"Individual","name":"Max von Laue","birth_date":"1879-10-09","birth_city":"Pfaffendorf","birth_country":"Germany","sex":"Male","organization_name":"Frankfurt-on-the-Main University","organization_city":"Frankfurt-on-the-Main","organization_country":"Germany"},{"year":1915,"category":"Chemistry","motivation":"for his researches on plant pigments, especially chlorophyll","prize_share":"1/1","laureate_type":"Individual","name":"Richard Martin Willst\xe4tter","birth_date":"1872-08-13","birth_city":"Karlsruhe","birth_country":"Germany","sex":"Male","organization_name":"Munich University","organization_city":"Munich","organization_country":"Germany"},{"year":1915,"category":"Literature","motivation":"as a tribute to the lofty idealism of his literary production and to the sympathy and love of truth with which he has described different types of human beings","prize_share":"1/1","laureate_type":"Individual","name":"Romain Rolland","birth_date":"1866-01-29","birth_city":"Clamecy","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1915,"category":"Physics","motivation":"for their services in the analysis of crystal structure by means of X-rays","prize_share":"1/2","laureate_type":"Individual","name":"Sir William Henry Bragg","birth_date":"1862-07-02","birth_city":"Wigton","birth_country":"United Kingdom","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":1915,"category":"Physics","motivation":"for their services in the analysis of crystal structure by means of X-rays","prize_share":"1/2","laureate_type":"Individual","name":"William Lawrence Bragg","birth_date":"1890-03-31","birth_city":"Adelaide","birth_country":"Australia","sex":"Male","organization_name":"Victoria University","organization_city":"Manchester","organization_country":"United Kingdom"},{"year":1916,"category":"Literature","motivation":"in recognition of his significance as the leading representative of a new era in our literature","prize_share":"1/1","laureate_type":"Individual","name":"Carl Gustaf Verner von Heidenstam","birth_date":"1859-07-06","birth_city":"Olshammar","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1917,"category":"Literature","motivation":"for his varied and rich poetry, which is inspired by lofty ideals","prize_share":"1/2","laureate_type":"Individual","name":"Karl Adolph Gjellerup","birth_date":"1857-06-02","birth_city":"Roholte","birth_country":"Denmark","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1917,"category":"Literature","motivation":"for his authentic descriptions of present-day life in Denmark","prize_share":"1/2","laureate_type":"Individual","name":"Henrik Pontoppidan","birth_date":"1857-07-24","birth_city":"Fredericia","birth_country":"Denmark","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1917,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Comit\xe9 international de la Croix Rouge (International Committee of the Red Cross)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1917,"category":"Physics","motivation":"for his discovery of the characteristic R&ouml;ntgen radiation of the elements","prize_share":"1/1","laureate_type":"Individual","name":"Charles Glover Barkla","birth_date":"1877-06-07","birth_city":"Widnes","birth_country":"United Kingdom","sex":"Male","organization_name":"Edinburgh University","organization_city":"Edinburgh","organization_country":"United Kingdom"},{"year":1918,"category":"Chemistry","motivation":"for the synthesis of ammonia from its elements","prize_share":"1/1","laureate_type":"Individual","name":"Fritz Haber","birth_date":"1868-12-09","birth_city":"Breslau (Wroclaw)","birth_country":"Poland","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Fritz-Haber-Institut) f\xfcr physikalische Chemie und Electrochemie","organization_city":"Berlin-Dahlem","organization_country":"Germany"},{"year":1918,"category":"Physics","motivation":"in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta","prize_share":"1/1","laureate_type":"Individual","name":"Max Karl Ernst Ludwig Planck","birth_date":"1858-04-23","birth_city":"Kiel","birth_country":"Germany","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1919,"category":"Literature","motivation":"in special appreciation of his epic, Olympian Spring","prize_share":"1/1","laureate_type":"Individual","name":"Carl Friedrich Georg Spitteler","birth_date":"1845-04-24","birth_city":"Liestal","birth_country":"Switzerland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1919,"category":"Medicine","motivation":"for his discoveries relating to immunity","prize_share":"1/1","laureate_type":"Individual","name":"Jules Bordet","birth_date":"1870-06-13","birth_city":"Soignies","birth_country":"Belgium","sex":"Male","organization_name":"Brussels University","organization_city":"Brussels","organization_country":"Belgium"},{"year":1919,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Thomas Woodrow Wilson","birth_date":"1856-12-28","birth_city":"Staunton, VA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1919,"category":"Physics","motivation":"for his discovery of the Doppler effect in canal rays and the splitting of spectral lines in electric fields","prize_share":"1/1","laureate_type":"Individual","name":"Johannes Stark","birth_date":"1874-04-15","birth_city":"Schickenhof","birth_country":"Germany","sex":"Male","organization_name":"Greifswald University","organization_city":"Greifswald","organization_country":"Germany"},{"year":1920,"category":"Chemistry","motivation":"in recognition of his work in thermochemistry","prize_share":"1/1","laureate_type":"Individual","name":"Walther Hermann Nernst","birth_date":"1864-06-25","birth_city":"Briesen","birth_country":"Germany","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1920,"category":"Literature","motivation":"for his monumental work, Growth of the Soil","prize_share":"1/1","laureate_type":"Individual","name":"Knut Pedersen Hamsun","birth_date":"1859-08-04","birth_city":"Lom","birth_country":"Norway","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1920,"category":"Medicine","motivation":"for his discovery of the capillary motor regulating mechanism","prize_share":"1/1","laureate_type":"Individual","name":"Schack August Steenberg Krogh","birth_date":"1874-11-15","birth_city":"Gren\xe5","birth_country":"Denmark","sex":"Male","organization_name":"Copenhagen University","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1920,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"L\xe9on Victor Auguste Bourgeois","birth_date":"1851-05-21","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1920,"category":"Physics","motivation":"in recognition of the service he has rendered to precision measurements in Physics by his discovery of anomalies in nickel steel alloys","prize_share":"1/1","laureate_type":"Individual","name":"Charles Edouard Guillaume","birth_date":"1861-02-15","birth_city":"Fleurier","birth_country":"Switzerland","sex":"Male","organization_name":"Bureau International des Poids et Mesures (International Bureau of Weights and Measures)","organization_city":"S\xe8vres","organization_country":"France"},{"year":1921,"category":"Chemistry","motivation":"for his contributions to our knowledge of the chemistry of radioactive substances, and his investigations into the origin and nature of isotopes","prize_share":"1/1","laureate_type":"Individual","name":"Frederick Soddy","birth_date":"1877-09-02","birth_city":"Eastbourne","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1921,"category":"Literature","motivation":"in recognition of his brilliant literary achievements, characterized as they are by a nobility of style, a profound human sympathy, grace, and a true Gallic temperament","prize_share":"1/1","laureate_type":"Individual","name":"Anatole France","birth_date":"1844-04-16","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1921,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Karl Hjalmar Branting","birth_date":"1860-11-23","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1921,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Christian Lous Lange","birth_date":"1869-09-17","birth_city":"Stavanger","birth_country":"Norway","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1921,"category":"Physics","motivation":"for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect","prize_share":"1/1","laureate_type":"Individual","name":"Albert Einstein","birth_date":"1879-03-14","birth_city":"Ulm","birth_country":"Germany","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\xfcr Physik","organization_city":"Berlin","organization_country":"Germany"},{"year":1922,"category":"Chemistry","motivation":"for his discovery, by means of his mass spectrograph, of isotopes, in a large number of non-radioactive elements, and for his enunciation of the whole-number rule","prize_share":"1/1","laureate_type":"Individual","name":"Francis William Aston","birth_date":"1877-09-01","birth_city":"Harborne","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1922,"category":"Literature","motivation":"for the happy manner in which he has continued the illustrious traditions of the Spanish drama","prize_share":"1/1","laureate_type":"Individual","name":"Jacinto Benavente","birth_date":"1866-08-12","birth_city":"Madrid","birth_country":"Spain","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1922,"category":"Medicine","motivation":"for his discovery relating to the production of heat in the muscle","prize_share":"1/2","laureate_type":"Individual","name":"Archibald Vivian Hill","birth_date":"1886-09-26","birth_city":"Bristol","birth_country":"United Kingdom","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1922,"category":"Medicine","motivation":"for his discovery of the fixed relationship between the consumption of oxygen and the metabolism of lactic acid in the muscle","prize_share":"1/2","laureate_type":"Individual","name":"Otto Fritz Meyerhof","birth_date":"1884-04-12","birth_city":"Hanover","birth_country":"Germany","sex":"Male","organization_name":"Kiel University","organization_city":"Kiel","organization_country":"Germany"},{"year":1922,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Fridtjof Nansen","birth_date":"1861-10-10","birth_city":"Kristiania (Oslo)","birth_country":"Norway","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1922,"category":"Physics","motivation":"for his services in the investigation of the structure of atoms and of the radiation emanating from them","prize_share":"1/1","laureate_type":"Individual","name":"Niels Henrik David Bohr","birth_date":"1885-10-07","birth_city":"Copenhagen","birth_country":"Denmark","sex":"Male","organization_name":"Copenhagen University","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1923,"category":"Chemistry","motivation":"for his invention of the method of micro-analysis of organic substances","prize_share":"1/1","laureate_type":"Individual","name":"Fritz Pregl","birth_date":"1869-09-03","birth_city":"Laibach (Ljubljana)","birth_country":"Slovenia","sex":"Male","organization_name":"Graz University","organization_city":"Graz","organization_country":"Austria"},{"year":1923,"category":"Literature","motivation":"for his always inspired poetry, which in a highly artistic form gives expression to the spirit of a whole nation","prize_share":"1/1","laureate_type":"Individual","name":"William Butler Yeats","birth_date":"1865-06-13","birth_city":"Dublin","birth_country":"Ireland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1923,"category":"Medicine","motivation":"for the discovery of insulin","prize_share":"1/2","laureate_type":"Individual","name":"Frederick Grant Banting","birth_date":"1891-11-14","birth_city":"Alliston","birth_country":"Canada","sex":"Male","organization_name":"University of Toronto","organization_city":"Toronto","organization_country":"Canada"},{"year":1923,"category":"Medicine","motivation":"for the discovery of insulin","prize_share":"1/2","laureate_type":"Individual","name":"John James Rickard Macleod","birth_date":"1876-09-06","birth_city":"Cluny","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Toronto","organization_city":"Toronto","organization_country":"Canada"},{"year":1923,"category":"Physics","motivation":"for his work on the elementary charge of electricity and on the photoelectric effect","prize_share":"1/1","laureate_type":"Individual","name":"Robert Andrews Millikan","birth_date":"1868-03-22","birth_city":"Morrison, IL","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1924,"category":"Literature","motivation":"for his great national epic, The Peasants","prize_share":"1/1","laureate_type":"Individual","name":"Wladyslaw Stanislaw Reymont","birth_date":"1867-05-07","birth_city":"Kobiele Wielkie","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1924,"category":"Medicine","motivation":"for his discovery of the mechanism of the electrocardiogram","prize_share":"1/1","laureate_type":"Individual","name":"Willem Einthoven","birth_date":"1860-05-21","birth_city":"Semarang","birth_country":"Indonesia","sex":"Male","organization_name":"Leiden University","organization_city":"Leiden","organization_country":"Netherlands"},{"year":1924,"category":"Physics","motivation":"for his discoveries and research in the field of X-ray spectroscopy","prize_share":"1/1","laureate_type":"Individual","name":"Karl Manne Georg Siegbahn","birth_date":"1886-12-03","birth_city":"Lund","birth_country":"Sweden","sex":"Male","organization_name":"Uppsala University","organization_city":"Uppsala","organization_country":"Sweden"},{"year":1925,"category":"Chemistry","motivation":"for his demonstration of the heterogenous nature of colloid solutions and for the methods he used, which have since become fundamental in modern colloid chemistry","prize_share":"1/1","laureate_type":"Individual","name":"Richard Adolf Zsigmondy","birth_date":"1865-04-01","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Goettingen University","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1925,"category":"Literature","motivation":"for his work which is marked by both idealism and humanity, its stimulating satire often being infused with a singular poetic beauty","prize_share":"1/1","laureate_type":"Individual","name":"George Bernard Shaw","birth_date":"1856-07-26","birth_city":"Dublin","birth_country":"Ireland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1925,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Sir Austen Chamberlain","birth_date":"1863-10-16","birth_city":"Birmingham","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1925,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Charles Gates Dawes","birth_date":"1865-08-27","birth_city":"Marietta, OH","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1925,"category":"Physics","motivation":"for their discovery of the laws governing the impact of an electron upon an atom","prize_share":"1/2","laureate_type":"Individual","name":"James Franck","birth_date":"1882-08-26","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"Goettingen University","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1925,"category":"Physics","motivation":"for their discovery of the laws governing the impact of an electron upon an atom","prize_share":"1/2","laureate_type":"Individual","name":"Gustav Ludwig Hertz","birth_date":"1887-07-22","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"Halle University","organization_city":"Halle","organization_country":"Germany"},{"year":1926,"category":"Chemistry","motivation":"for his work on disperse systems","prize_share":"1/1","laureate_type":"Individual","name":"The (Theodor) Svedberg","birth_date":"1884-08-30","birth_city":"Fler\xe4ng","birth_country":"Sweden","sex":"Male","organization_name":"Uppsala University","organization_city":"Uppsala","organization_country":"Sweden"},{"year":1926,"category":"Literature","motivation":"for her idealistically inspired writings which with plastic clarity picture the life on her native island and with depth and sympathy deal with human problems in general","prize_share":"1/1","laureate_type":"Individual","name":"Grazia Deledda","birth_date":"1871-09-27","birth_city":"Nuoro, Sardinia","birth_country":"Italy","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1926,"category":"Medicine","motivation":"for his discovery of the Spiroptera carcinoma","prize_share":"1/1","laureate_type":"Individual","name":"Johannes Andreas Grib Fibiger","birth_date":"1867-04-23","birth_city":"Silkeborg","birth_country":"Denmark","sex":"Male","organization_name":"Copenhagen University","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1926,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Aristide Briand","birth_date":"1862-03-28","birth_city":"Nantes","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1926,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Gustav Stresemann","birth_date":"1878-05-10","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1926,"category":"Physics","motivation":"for his work on the discontinuous structure of matter, and especially for his discovery of sedimentation equilibrium","prize_share":"1/1","laureate_type":"Individual","name":"Jean Baptiste Perrin","birth_date":"1870-09-30","birth_city":"Lille","birth_country":"France","sex":"Male","organization_name":"Sorbonne University","organization_city":"Paris","organization_country":"France"},{"year":1927,"category":"Chemistry","motivation":"for his investigations of the constitution of the bile acids and related substances","prize_share":"1/1","laureate_type":"Individual","name":"Heinrich Otto Wieland","birth_date":"1877-06-04","birth_city":"Pforzheim","birth_country":"Germany","sex":"Male","organization_name":"Munich University","organization_city":"Munich","organization_country":"Germany"},{"year":1927,"category":"Literature","motivation":"in recognition of his rich and vitalizing ideas and the brilliant skill with which they have been presented","prize_share":"1/1","laureate_type":"Individual","name":"Henri Bergson","birth_date":"1859-10-18","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1927,"category":"Medicine","motivation":"for his discovery of the therapeutic value of malaria inoculation in the treatment of dementia paralytica","prize_share":"1/1","laureate_type":"Individual","name":"Julius Wagner-Jauregg","birth_date":"1857-03-07","birth_city":"Wels","birth_country":"Austria","sex":"Male","organization_name":"Vienna University","organization_city":"Vienna","organization_country":"Austria"},{"year":1927,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Ferdinand Buisson","birth_date":"1841-12-20","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1927,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Ludwig Quidde","birth_date":"1858-03-23","birth_city":"Bremen","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1927,"category":"Physics","motivation":"for his discovery of the effect named after him","prize_share":"1/2","laureate_type":"Individual","name":"Arthur Holly Compton","birth_date":"1892-09-10","birth_city":"Wooster, OH","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1927,"category":"Physics","motivation":"for his method of making the paths of electrically charged particles visible by condensation of vapour","prize_share":"1/2","laureate_type":"Individual","name":"Charles Thomson Rees Wilson","birth_date":"1869-02-14","birth_city":"Glencorse","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1928,"category":"Chemistry","motivation":"for the services rendered through his research into the constitution of the sterols and their connection with the vitamins","prize_share":"1/1","laureate_type":"Individual","name":"Adolf Otto Reinhold Windaus","birth_date":"1876-12-25","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"Goettingen University","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1928,"category":"Literature","motivation":"principally for her powerful descriptions of Northern life during the Middle Ages","prize_share":"1/1","laureate_type":"Individual","name":"Sigrid Undset","birth_date":"1882-05-20","birth_city":"Kalundborg","birth_country":"Denmark","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1928,"category":"Medicine","motivation":"for his work on typhus","prize_share":"1/1","laureate_type":"Individual","name":"Charles Jules Henri Nicolle","birth_date":"1866-09-21","birth_city":"Rouen","birth_country":"France","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Tunis","organization_country":""},{"year":1928,"category":"Physics","motivation":"for his work on the thermionic phenomenon and especially for the discovery of the law named after him","prize_share":"1/1","laureate_type":"Individual","name":"Owen Willans Richardson","birth_date":"1879-04-26","birth_city":"Dewsbury","birth_country":"United Kingdom","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1929,"category":"Chemistry","motivation":"for their investigations on the fermentation of sugar and fermentative enzymes","prize_share":"1/2","laureate_type":"Individual","name":"Arthur Harden","birth_date":"1865-10-12","birth_city":"Manchester","birth_country":"United Kingdom","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1929,"category":"Chemistry","motivation":"for their investigations on the fermentation of sugar and fermentative enzymes","prize_share":"1/2","laureate_type":"Individual","name":"Hans Karl August Simon von Euler-Chelpin","birth_date":"1873-02-15","birth_city":"Augsburg","birth_country":"Germany","sex":"Male","organization_name":"Stockholm University","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1929,"category":"Literature","motivation":"principally for his great novel, Buddenbrooks, which has won steadily increased recognition as one of the classic works of contemporary literature","prize_share":"1/1","laureate_type":"Individual","name":"Thomas Mann","birth_date":"1875-06-06","birth_city":"L\xfcbeck","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1929,"category":"Medicine","motivation":"for his discovery of the antineuritic vitamin","prize_share":"1/2","laureate_type":"Individual","name":"Christiaan Eijkman","birth_date":"1858-08-11","birth_city":"Nijkerk","birth_country":"Netherlands","sex":"Male","organization_name":"Utrecht University","organization_city":"Utrecht","organization_country":"Netherlands"},{"year":1929,"category":"Medicine","motivation":"for his discovery of the growth-stimulating vitamins","prize_share":"1/2","laureate_type":"Individual","name":"Sir Frederick Gowland Hopkins","birth_date":"1861-06-20","birth_city":"Eastbourne","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1929,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Frank Billings Kellogg","birth_date":"1856-12-22","birth_city":"Potsdam, NY","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1929,"category":"Physics","motivation":"for his discovery of the wave nature of electrons","prize_share":"1/1","laureate_type":"Individual","name":"Prince Louis-Victor Pierre Raymond de Broglie","birth_date":"1892-08-15","birth_city":"Dieppe","birth_country":"France","sex":"Male","organization_name":"Sorbonne University, Institut Henri Poincar\xe9","organization_city":"Paris","organization_country":"France"},{"year":1930,"category":"Chemistry","motivation":"for his researches into the constitution of haemin and chlorophyll and especially for his synthesis of haemin","prize_share":"1/1","laureate_type":"Individual","name":"Hans Fischer","birth_date":"1881-07-27","birth_city":"Hoechst","birth_country":"Germany","sex":"Male","organization_name":"Technische Hochschule (Institute of Technology)","organization_city":"Munich","organization_country":"Germany"},{"year":1930,"category":"Literature","motivation":"for his vigorous and graphic art of description and his ability to create, with wit and humour, new types of characters","prize_share":"1/1","laureate_type":"Individual","name":"Sinclair Lewis","birth_date":"1885-02-07","birth_city":"Sauk Centre, MN","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1930,"category":"Medicine","motivation":"for his discovery of human blood groups","prize_share":"1/1","laureate_type":"Individual","name":"Karl Landsteiner","birth_date":"1868-06-14","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"New York, NY","organization_country":"United States"},{"year":1930,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Lars Olof Jonathan (Nathan) S\xf6derblom","birth_date":"1866-01-15","birth_city":"Tr\xf6n\xf6","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1930,"category":"Physics","motivation":"for his work on the scattering of light and for the discovery of the effect named after him","prize_share":"1/1","laureate_type":"Individual","name":"Sir Chandrasekhara Venkata Raman","birth_date":"1888-11-07","birth_city":"Tiruchirappalli","birth_country":"India","sex":"Male","organization_name":"Calcutta University","organization_city":"Calcutta","organization_country":"India"},{"year":1931,"category":"Chemistry","motivation":"in recognition of their contributions to the invention and development of chemical high pressure methods","prize_share":"1/2","laureate_type":"Individual","name":"Carl Bosch","birth_date":"1874-08-27","birth_city":"Cologne","birth_country":"Germany","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1931,"category":"Chemistry","motivation":"in recognition of their contributions to the invention and development of chemical high pressure methods","prize_share":"1/2","laureate_type":"Individual","name":"Friedrich Bergius","birth_date":"1884-10-11","birth_city":"Goldschmieden, near Breslau","birth_country":"Poland","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1931,"category":"Literature","motivation":"The poetry of Erik Axel Karlfeldt","prize_share":"1/1","laureate_type":"Individual","name":"Erik Axel Karlfeldt","birth_date":"1864-07-20","birth_city":"Karlbo","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1931,"category":"Medicine","motivation":"for his discovery of the nature and mode of action of the respiratory enzyme","prize_share":"1/1","laureate_type":"Individual","name":"Otto Heinrich Warburg","birth_date":"1883-10-08","birth_city":"Freiburg im Breisgau","birth_country":"Germany","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\xfcr Biologie","organization_city":"Berlin-Dahlem","organization_country":"Germany"},{"year":1931,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Jane Addams","birth_date":"1860-09-06","birth_city":"Cedarville, IL","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1931,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Nicholas Murray Butler","birth_date":"1862-04-02","birth_city":"Elizabeth, NJ","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1932,"category":"Chemistry","motivation":"for his discoveries and investigations in surface chemistry","prize_share":"1/1","laureate_type":"Individual","name":"Irving Langmuir","birth_date":"1881-01-31","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"General Electric Company","organization_city":"Schenectady, NY","organization_country":"United States"},{"year":1932,"category":"Literature","motivation":"for his distinguished art of narration which takes its highest form in The Forsyte Saga","prize_share":"1/1","laureate_type":"Individual","name":"John Galsworthy","birth_date":"1867-08-14","birth_city":"Kingston Hill","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1932,"category":"Medicine","motivation":"for their discoveries regarding the functions of neurons","prize_share":"1/2","laureate_type":"Individual","name":"Sir Charles Scott Sherrington","birth_date":"1857-11-27","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1932,"category":"Medicine","motivation":"for their discoveries regarding the functions of neurons","prize_share":"1/2","laureate_type":"Individual","name":"Edgar Douglas Adrian","birth_date":"1889-11-30","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1932,"category":"Physics","motivation":"for the creation of quantum mechanics, the application of which has, inter alia, led to the discovery of the allotropic forms of hydrogen","prize_share":"1/1","laureate_type":"Individual","name":"Werner Karl Heisenberg","birth_date":"1901-12-05","birth_city":"W\xfcrzburg","birth_country":"Germany","sex":"Male","organization_name":"Leipzig University","organization_city":"Leipzig","organization_country":"Germany"},{"year":1933,"category":"Literature","motivation":"for the strict artistry with which he has carried on the classical Russian traditions in prose writing","prize_share":"1/1","laureate_type":"Individual","name":"Ivan Alekseyevich Bunin","birth_date":"1870-10-22","birth_city":"Voronezh","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1933,"category":"Medicine","motivation":"for his discoveries concerning the role played by the chromosome in heredity","prize_share":"1/1","laureate_type":"Individual","name":"Thomas Hunt Morgan","birth_date":"1866-09-25","birth_city":"Lexington, KY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1933,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Sir Norman Angell (Ralph Lane)","birth_date":"1872-12-26","birth_city":"Holbeach","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1933,"category":"Physics","motivation":"for the discovery of new productive forms of atomic theory","prize_share":"1/2","laureate_type":"Individual","name":"Erwin Schr\xf6dinger","birth_date":"1887-08-12","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1933,"category":"Physics","motivation":"for the discovery of new productive forms of atomic theory","prize_share":"1/2","laureate_type":"Individual","name":"Paul Adrien Maurice Dirac","birth_date":"1902-08-08","birth_city":"Bristol","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1934,"category":"Chemistry","motivation":"for his discovery of heavy hydrogen","prize_share":"1/1","laureate_type":"Individual","name":"Harold Clayton Urey","birth_date":"1893-04-29","birth_city":"Walkerton, IN","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1934,"category":"Literature","motivation":"for his bold and ingenious revival of dramatic and scenic art","prize_share":"1/1","laureate_type":"Individual","name":"Luigi Pirandello","birth_date":"1867-06-28","birth_city":"Agrigento, Sicily","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1934,"category":"Medicine","motivation":"for their discoveries concerning liver therapy in cases of anaemia","prize_share":"1/3","laureate_type":"Individual","name":"George Hoyt Whipple","birth_date":"1878-08-28","birth_city":"Ashland, NH","birth_country":"United States","sex":"Male","organization_name":"University of Rochester","organization_city":"Rochester, NY","organization_country":"United States"},{"year":1934,"category":"Medicine","motivation":"for their discoveries concerning liver therapy in cases of anaemia","prize_share":"1/3","laureate_type":"Individual","name":"George Richards Minot","birth_date":"1885-12-02","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1934,"category":"Medicine","motivation":"for their discoveries concerning liver therapy in cases of anaemia","prize_share":"1/3","laureate_type":"Individual","name":"William Parry Murphy","birth_date":"1892-02-06","birth_city":"Stoughton, WI","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1934,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Arthur Henderson","birth_date":"1863-09-13","birth_city":"Glasgow","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1935,"category":"Chemistry","motivation":"in recognition of their synthesis of new radioactive elements","prize_share":"1/2","laureate_type":"Individual","name":"Fr\xe9d\xe9ric Joliot","birth_date":"1900-03-19","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Institut du Radium","organization_city":"Paris","organization_country":"France"},{"year":1935,"category":"Chemistry","motivation":"in recognition of their synthesis of new radioactive elements","prize_share":"1/2","laureate_type":"Individual","name":"Ir\xe8ne Joliot-Curie","birth_date":"1897-09-12","birth_city":"Paris","birth_country":"France","sex":"Female","organization_name":"Institut du Radium","organization_city":"Paris","organization_country":"France"},{"year":1935,"category":"Medicine","motivation":"for his discovery of the organizer effect in embryonic development","prize_share":"1/1","laureate_type":"Individual","name":"Hans Spemann","birth_date":"1869-06-27","birth_city":"Stuttgart","birth_country":"Germany","sex":"Male","organization_name":"University of Freiburg im Breisgau","organization_city":"Breisgau","organization_country":"Germany"},{"year":1935,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Carl von Ossietzky","birth_date":"1889-10-03","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1935,"category":"Physics","motivation":"for the discovery of the neutron","prize_share":"1/1","laureate_type":"Individual","name":"James Chadwick","birth_date":"1891-10-20","birth_city":"Manchester","birth_country":"United Kingdom","sex":"Male","organization_name":"Liverpool University","organization_city":"Liverpool","organization_country":"United Kingdom"},{"year":1936,"category":"Chemistry","motivation":"for his contributions to our knowledge of molecular structure through his investigations on dipole moments and on the diffraction of X-rays and electrons in gases","prize_share":"1/1","laureate_type":"Individual","name":"Petrus (Peter) Josephus Wilhelmus Debye","birth_date":"1884-03-24","birth_city":"Maastricht","birth_country":"Netherlands","sex":"Male","organization_name":"Berlin University","organization_city":"Berlin","organization_country":"Germany"},{"year":1936,"category":"Literature","motivation":"for the power, honesty and deep-felt emotions of his dramatic works, which embody an original concept of tragedy","prize_share":"1/1","laureate_type":"Individual","name":"Eugene Gladstone O\'Neill","birth_date":"1888-10-16","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1936,"category":"Medicine","motivation":"for their discoveries relating to chemical transmission of nerve impulses","prize_share":"1/2","laureate_type":"Individual","name":"Sir Henry Hallett Dale","birth_date":"1875-06-09","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"National Institute for Medical Research","organization_city":"London","organization_country":"United Kingdom"},{"year":1936,"category":"Medicine","motivation":"for their discoveries relating to chemical transmission of nerve impulses","prize_share":"1/2","laureate_type":"Individual","name":"Otto Loewi","birth_date":"1873-06-03","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"Graz University","organization_city":"Graz","organization_country":"Austria"},{"year":1936,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Carlos Saavedra Lamas","birth_date":"1878-11-01","birth_city":"Buenos Aires","birth_country":"Argentina","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1936,"category":"Physics","motivation":"for his discovery of cosmic radiation","prize_share":"1/2","laureate_type":"Individual","name":"Victor Franz Hess","birth_date":"1883-06-24","birth_city":"Peggau","birth_country":"Austria","sex":"Male","organization_name":"Innsbruck University","organization_city":"Innsbruck","organization_country":"Austria"},{"year":1936,"category":"Physics","motivation":"for his discovery of the positron","prize_share":"1/2","laureate_type":"Individual","name":"Carl David Anderson","birth_date":"1905-09-03","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1937,"category":"Chemistry","motivation":"for his investigations on carbohydrates and vitamin C","prize_share":"1/2","laureate_type":"Individual","name":"Walter Norman Haworth","birth_date":"1883-03-19","birth_city":"Chorley","birth_country":"United Kingdom","sex":"Male","organization_name":"Birmingham University","organization_city":"Birmingham","organization_country":"United Kingdom"},{"year":1937,"category":"Chemistry","motivation":"for his investigations on carotenoids, flavins and vitamins A and B2","prize_share":"1/2","laureate_type":"Individual","name":"Paul Karrer","birth_date":"1889-04-21","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"University of Zurich","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1937,"category":"Literature","motivation":"for the artistic power and truth with which he has depicted human conflict as well as some fundamental aspects of contemporary life in his novel-cycle Les Thibault","prize_share":"1/1","laureate_type":"Individual","name":"Roger Martin du Gard","birth_date":"1881-03-23","birth_city":"Neuilly-sur-Seine","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1937,"category":"Medicine","motivation":"for his discoveries in connection with the biological combustion processes, with special reference to vitamin C and the catalysis of fumaric acid","prize_share":"1/1","laureate_type":"Individual","name":"Albert von Szent-Gy\xf6rgyi Nagyr\xe1polt","birth_date":"1893-09-16","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"Szeged University","organization_city":"Szeged","organization_country":"Hungary"},{"year":1937,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Cecil of Chelwood, Viscount (Lord Edgar Algernon Robert Gascoyne Cecil)","birth_date":"1864-09-14","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1937,"category":"Physics","motivation":"for their experimental discovery of the diffraction of electrons by crystals","prize_share":"1/2","laureate_type":"Individual","name":"Clinton Joseph Davisson","birth_date":"1881-10-22","birth_city":"Bloomington, IL","birth_country":"United States","sex":"Male","organization_name":"Bell Telephone Laboratories","organization_city":"New York, NY","organization_country":"United States"},{"year":1937,"category":"Physics","motivation":"for their experimental discovery of the diffraction of electrons by crystals","prize_share":"1/2","laureate_type":"Individual","name":"George Paget Thomson","birth_date":"1892-05-03","birth_city":"Cambridge","birth_country":"United Kingdom","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1938,"category":"Chemistry","motivation":"for his work on carotenoids and vitamins","prize_share":"1/1","laureate_type":"Individual","name":"Richard Kuhn","birth_date":"1900-12-03","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Max-Planck Institut) f\xfcr Medizinische Forschung","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1938,"category":"Literature","motivation":"for her rich and truly epic descriptions of peasant life in China and for her biographical masterpieces","prize_share":"1/1","laureate_type":"Individual","name":"Pearl Buck","birth_date":"1892-06-26","birth_city":"Hillsboro, WV","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1938,"category":"Medicine","motivation":"for the discovery of the role played by the sinus and aortic mechanisms in the regulation of respiration","prize_share":"1/1","laureate_type":"Individual","name":"Corneille Jean Fran\xe7ois Heymans","birth_date":"1892-03-28","birth_city":"Ghent","birth_country":"Belgium","sex":"Male","organization_name":"Ghent University","organization_city":"Ghent","organization_country":"Belgium"},{"year":1938,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Office international Nansen pour les R\xe9fugi\xe9s (Nansen International Office for Refugees)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1938,"category":"Physics","motivation":"for his demonstrations of the existence of new radioactive elements produced by neutron irradiation, and for his related discovery of nuclear reactions brought about by slow neutrons","prize_share":"1/1","laureate_type":"Individual","name":"Enrico Fermi","birth_date":"1901-09-29","birth_city":"Rome","birth_country":"Italy","sex":"Male","organization_name":"Rome University","organization_city":"Rome","organization_country":"Italy"},{"year":1939,"category":"Chemistry","motivation":"for his work on sex hormones","prize_share":"1/2","laureate_type":"Individual","name":"Adolf Friedrich Johann Butenandt","birth_date":"1903-03-24","birth_city":"Bremerhaven-Lehe","birth_country":"Germany","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Max-Planck-Institut) f\xfcr Biochemie","organization_city":"Berlin-Dahlem","organization_country":"Germany"},{"year":1939,"category":"Chemistry","motivation":"for his work on polymethylenes and higher terpenes","prize_share":"1/2","laureate_type":"Individual","name":"Leopold Ruzicka","birth_date":"1887-09-13","birth_city":"Vukovar","birth_country":"Croatia","sex":"Male","organization_name":"Eidgen\xf6ssische Technische Hochschule (Swiss Federal Institute of Technology)","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1939,"category":"Literature","motivation":"for his deep understanding of his country\'s peasantry and the exquisite art with which he has portrayed their way of life and their relationship with Nature","prize_share":"1/1","laureate_type":"Individual","name":"Frans Eemil Sillanp\xe4\xe4","birth_date":"1888-09-16","birth_city":"H\xe4meenkyr\xf6","birth_country":"Finland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1939,"category":"Medicine","motivation":"for the discovery of the antibacterial effects of prontosil","prize_share":"1/1","laureate_type":"Individual","name":"Gerhard Domagk","birth_date":"1895-10-30","birth_city":"Lagow","birth_country":"Poland","sex":"Male","organization_name":"Munster University","organization_city":"Munster","organization_country":"Germany"},{"year":1939,"category":"Physics","motivation":"for the invention and development of the cyclotron and for results obtained with it, especially with regard to artificial radioactive elements","prize_share":"1/1","laureate_type":"Individual","name":"Ernest Orlando Lawrence","birth_date":"1901-08-08","birth_city":"Canton, SD","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1943,"category":"Chemistry","motivation":"for his work on the use of isotopes as tracers in the study of chemical processes","prize_share":"1/1","laureate_type":"Individual","name":"George de Hevesy","birth_date":"1885-08-01","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"Stockholm University","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1943,"category":"Medicine","motivation":"for his discovery of vitamin K","prize_share":"1/2","laureate_type":"Individual","name":"Henrik Carl Peter Dam","birth_date":"1895-02-21","birth_city":"Copenhagen","birth_country":"Denmark","sex":"Male","organization_name":"Polytechnic Institute","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1943,"category":"Medicine","motivation":"for his discovery of the chemical nature of vitamin K","prize_share":"1/2","laureate_type":"Individual","name":"Edward Adelbert Doisy","birth_date":"1893-11-13","birth_city":"Hume, IL","birth_country":"United States","sex":"Male","organization_name":"Saint Louis University","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":1943,"category":"Physics","motivation":"for his contribution to the development of the molecular ray method and his discovery of the magnetic moment of the proton","prize_share":"1/1","laureate_type":"Individual","name":"Otto Stern","birth_date":"1888-02-17","birth_city":"Sorau (Zory)","birth_country":"Poland","sex":"Male","organization_name":"Carnegie Institute of Technology","organization_city":"Pittsburgh, PA","organization_country":"United States"},{"year":1944,"category":"Chemistry","motivation":"for his discovery of the fission of heavy nuclei","prize_share":"1/1","laureate_type":"Individual","name":"Otto Hahn","birth_date":"1879-03-08","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"Kaiser-Wilhelm-Institut (now Max-Planck Institut) f\xfcr Chemie","organization_city":"Berlin-Dahlem","organization_country":"Germany"},{"year":1944,"category":"Literature","motivation":"for the rare strength and fertility of his poetic imagination with which is combined an intellectual curiosity of wide scope and a bold, freshly creative style","prize_share":"1/1","laureate_type":"Individual","name":"Johannes Vilhelm Jensen","birth_date":"1873-01-20","birth_city":"Fars\xf8","birth_country":"Denmark","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1944,"category":"Medicine","motivation":"for their discoveries relating to the highly differentiated functions of single nerve fibres","prize_share":"1/2","laureate_type":"Individual","name":"Joseph Erlanger","birth_date":"1874-01-05","birth_city":"San Francisco, CA","birth_country":"United States","sex":"Male","organization_name":"Washington University","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":1944,"category":"Medicine","motivation":"for their discoveries relating to the highly differentiated functions of single nerve fibres","prize_share":"1/2","laureate_type":"Individual","name":"Herbert Spencer Gasser","birth_date":"1888-07-05","birth_city":"Platteville, WI","birth_country":"United States","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"New York, NY","organization_country":"United States"},{"year":1944,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Comit\xe9 international de la Croix Rouge (International Committee of the Red Cross)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1944,"category":"Physics","motivation":"for his resonance method for recording the magnetic properties of atomic nuclei","prize_share":"1/1","laureate_type":"Individual","name":"Isidor Isaac Rabi","birth_date":"1898-07-29","birth_city":"Rymanow","birth_country":"Poland","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1945,"category":"Chemistry","motivation":"for his research and inventions in agricultural and nutrition chemistry, especially for his fodder preservation method","prize_share":"1/1","laureate_type":"Individual","name":"Artturi Ilmari Virtanen","birth_date":"1895-01-15","birth_city":"Helsinki","birth_country":"Finland","sex":"Male","organization_name":"University of Helsinki","organization_city":"Helsinki","organization_country":"Finland"},{"year":1945,"category":"Literature","motivation":"for her lyric poetry which, inspired by powerful emotions, has made her name a symbol of the idealistic aspirations of the entire Latin American world","prize_share":"1/1","laureate_type":"Individual","name":"Gabriela Mistral","birth_date":"1889-04-07","birth_city":"Vicu\xf1a","birth_country":"Chile","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1945,"category":"Medicine","motivation":"for the discovery of penicillin and its curative effect in various infectious diseases","prize_share":"1/3","laureate_type":"Individual","name":"Sir Alexander Fleming","birth_date":"1881-08-06","birth_city":"Lochfield","birth_country":"United Kingdom","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1945,"category":"Medicine","motivation":"for the discovery of penicillin and its curative effect in various infectious diseases","prize_share":"1/3","laureate_type":"Individual","name":"Ernst Boris Chain","birth_date":"1906-06-19","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1945,"category":"Medicine","motivation":"for the discovery of penicillin and its curative effect in various infectious diseases","prize_share":"1/3","laureate_type":"Individual","name":"Sir Howard Walter Florey","birth_date":"1898-09-24","birth_city":"Adelaide","birth_country":"Australia","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1945,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Cordell Hull","birth_date":"1871-10-02","birth_city":"Olympus, TN","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1945,"category":"Physics","motivation":"for the discovery of the Exclusion Principle, also called the Pauli Principle","prize_share":"1/1","laureate_type":"Individual","name":"Wolfgang Pauli","birth_date":"1900-04-25","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1946,"category":"Chemistry","motivation":"for his discovery that enzymes can be crystallized","prize_share":"2/4","laureate_type":"Individual","name":"James Batcheller Sumner","birth_date":"1887-11-19","birth_city":"Canton, MA","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1946,"category":"Chemistry","motivation":"for their preparation of enzymes and virus proteins in a pure form","prize_share":"1/4","laureate_type":"Individual","name":"John Howard Northrop","birth_date":"1891-07-05","birth_city":"Yonkers, NY","birth_country":"United States","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1946,"category":"Chemistry","motivation":"for their preparation of enzymes and virus proteins in a pure form","prize_share":"1/4","laureate_type":"Individual","name":"Wendell Meredith Stanley","birth_date":"1904-08-16","birth_city":"Ridgeville, IN","birth_country":"United States","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1946,"category":"Literature","motivation":"for his inspired writings which, while growing in boldness and penetration, exemplify the classical humanitarian ideals and high qualities of style","prize_share":"1/1","laureate_type":"Individual","name":"Hermann Hesse","birth_date":"1877-07-02","birth_city":"Calw","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1946,"category":"Medicine","motivation":"for the discovery of the production of mutations by means of X-ray irradiation","prize_share":"1/1","laureate_type":"Individual","name":"Hermann Joseph Muller","birth_date":"1890-12-21","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Indiana University","organization_city":"Bloomington, IN","organization_country":"United States"},{"year":1946,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Emily Greene Balch","birth_date":"1867-01-08","birth_city":"Jamaica Plain, MA (Boston)","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1946,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"John Raleigh Mott","birth_date":"1865-05-25","birth_city":"Livingston Manor, NY","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1946,"category":"Physics","motivation":"for the invention of an apparatus to produce extremely high pressures, and for the discoveries he made therewith in the field of high pressure physics","prize_share":"1/1","laureate_type":"Individual","name":"Percy Williams Bridgman","birth_date":"1882-04-21","birth_city":"Cambridge, MA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1947,"category":"Chemistry","motivation":"for his investigations on plant products of biological importance, especially the alkaloids","prize_share":"1/1","laureate_type":"Individual","name":"Sir Robert Robinson","birth_date":"1886-09-13","birth_city":"Rufford, near Chesterfield","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1947,"category":"Literature","motivation":"for his comprehensive and artistically significant writings, in which human problems and conditions have been presented with a fearless love of truth and keen psychological insight","prize_share":"1/1","laureate_type":"Individual","name":"Andr\xe9 Paul Guillaume Gide","birth_date":"1869-11-22","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1947,"category":"Medicine","motivation":"for their discovery of the course of the catalytic conversion of glycogen","prize_share":"1/4","laureate_type":"Individual","name":"Carl Ferdinand Cori","birth_date":"1896-12-05","birth_city":"Prague","birth_country":"Czech Republic","sex":"Male","organization_name":"Washington University","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":1947,"category":"Medicine","motivation":"for their discovery of the course of the catalytic conversion of glycogen","prize_share":"1/4","laureate_type":"Individual","name":"Gerty Theresa Cori, n\xe9e Radnitz","birth_date":"1896-08-15","birth_city":"Prague","birth_country":"Czech Republic","sex":"Female","organization_name":"Washington University","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":1947,"category":"Medicine","motivation":"for his discovery of the part played by the hormone of the anterior pituitary lobe in the metabolism of sugar","prize_share":"2/4","laureate_type":"Individual","name":"Bernardo Alberto Houssay","birth_date":"1887-04-10","birth_city":"Buenos Aires","birth_country":"Argentina","sex":"Male","organization_name":"Instituto de Biologia y Medicina Experimental (Institute for Biology and Experimental Medicine)","organization_city":"Buenos Aires","organization_country":"Argentina"},{"year":1947,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Organization","name":"Friends Service Council (The Quakers)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1947,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Organization","name":"American Friends Service Committee (The Quakers)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1947,"category":"Physics","motivation":"for his investigations of the physics of the upper atmosphere especially for the discovery of the so-called Appleton layer","prize_share":"1/1","laureate_type":"Individual","name":"Sir Edward Victor Appleton","birth_date":"1892-09-06","birth_city":"Bradford","birth_country":"United Kingdom","sex":"Male","organization_name":"Department of Scientific and Industrial Research","organization_city":"London","organization_country":"United Kingdom"},{"year":1948,"category":"Chemistry","motivation":"for his research on electrophoresis and adsorption analysis, especially for his discoveries concerning the complex nature of the serum proteins","prize_share":"1/1","laureate_type":"Individual","name":"Arne Wilhelm Kaurin Tiselius","birth_date":"1902-08-10","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"Uppsala University","organization_city":"Uppsala","organization_country":"Sweden"},{"year":1948,"category":"Literature","motivation":"for his outstanding, pioneer contribution to present-day poetry","prize_share":"1/1","laureate_type":"Individual","name":"Thomas Stearns Eliot","birth_date":"1888-09-26","birth_city":"St. Louis, MO","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1948,"category":"Medicine","motivation":"for his discovery of the high efficiency of DDT as a contact poison against several arthropods","prize_share":"1/1","laureate_type":"Individual","name":"Paul Hermann M\xfcller","birth_date":"1899-01-12","birth_city":"Olten","birth_country":"Switzerland","sex":"Male","organization_name":"Laboratorium der Farben-Fabriken J.R. Geigy A.G. (Laboratory of the J.R. Geigy Dye-Factory Co.)","organization_city":"Basel","organization_country":"Switzerland"},{"year":1948,"category":"Physics","motivation":"for his development of the Wilson cloud chamber method, and his discoveries therewith in the fields of nuclear physics and cosmic radiation","prize_share":"1/1","laureate_type":"Individual","name":"Patrick Maynard Stuart Blackett","birth_date":"1897-11-18","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Victoria University","organization_city":"Manchester","organization_country":"United Kingdom"},{"year":1949,"category":"Chemistry","motivation":"for his contributions in the field of chemical thermodynamics, particularly concerning the behaviour of substances at extremely low temperatures","prize_share":"1/1","laureate_type":"Individual","name":"William Francis Giauque","birth_date":"1895-05-12","birth_city":"Niagara Falls","birth_country":"Canada","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1949,"category":"Literature","motivation":"for his powerful and artistically unique contribution to the modern American novel","prize_share":"1/1","laureate_type":"Individual","name":"William Faulkner","birth_date":"1897-09-25","birth_city":"New Albany, MS","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1949,"category":"Medicine","motivation":"for his discovery of the functional organization of the interbrain as a coordinator of the activities of the internal organs","prize_share":"1/2","laureate_type":"Individual","name":"Walter Rudolf Hess","birth_date":"1881-03-17","birth_city":"Frauenfeld","birth_country":"Switzerland","sex":"Male","organization_name":"University of Zurich","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1949,"category":"Medicine","motivation":"for his discovery of the therapeutic value of leucotomy in certain psychoses","prize_share":"1/2","laureate_type":"Individual","name":"Antonio Caetano de Abreu Freire Egas Moniz","birth_date":"1874-11-29","birth_city":"Avanca","birth_country":"Portugal","sex":"Male","organization_name":"University of Lisbon","organization_city":"Lisbon","organization_country":"Portugal"},{"year":1949,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Lord (John) Boyd Orr of Brechin","birth_date":"1880-09-23","birth_city":"Kilmaurs","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1949,"category":"Physics","motivation":"for his prediction of the existence of mesons on the basis of theoretical work on nuclear forces","prize_share":"1/1","laureate_type":"Individual","name":"Hideki Yukawa","birth_date":"1907-01-23","birth_city":"Tokyo","birth_country":"Japan","sex":"Male","organization_name":"Kyoto Imperial University","organization_city":"Kyoto","organization_country":"Japan"},{"year":1950,"category":"Chemistry","motivation":"for their discovery and development of the diene synthesis","prize_share":"1/2","laureate_type":"Individual","name":"Otto Paul Hermann Diels","birth_date":"1876-01-23","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"Kiel University","organization_city":"Kiel","organization_country":"Germany"},{"year":1950,"category":"Chemistry","motivation":"for their discovery and development of the diene synthesis","prize_share":"1/2","laureate_type":"Individual","name":"Kurt Alder","birth_date":"1902-07-10","birth_city":"K\xf6nigsh\xfctte (Chorz\xf3w)","birth_country":"Poland","sex":"Male","organization_name":"Cologne University","organization_city":"Cologne","organization_country":"Germany"},{"year":1950,"category":"Literature","motivation":"in recognition of his varied and significant writings in which he champions humanitarian ideals and freedom of thought","prize_share":"1/1","laureate_type":"Individual","name":"Earl (Bertrand Arthur William) Russell","birth_date":"1872-05-18","birth_city":"Trelleck","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1950,"category":"Medicine","motivation":"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects","prize_share":"1/3","laureate_type":"Individual","name":"Edward Calvin Kendall","birth_date":"1886-03-08","birth_city":"South Norwalk, CT","birth_country":"United States","sex":"Male","organization_name":"Mayo Clinic","organization_city":"Rochester, MN","organization_country":"United States"},{"year":1950,"category":"Medicine","motivation":"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects","prize_share":"1/3","laureate_type":"Individual","name":"Tadeus Reichstein","birth_date":"1897-07-20","birth_city":"Wloclawek","birth_country":"Poland","sex":"Male","organization_name":"Basel University","organization_city":"Basel","organization_country":"Switzerland"},{"year":1950,"category":"Medicine","motivation":"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects","prize_share":"1/3","laureate_type":"Individual","name":"Philip Showalter Hench","birth_date":"1896-02-28","birth_city":"Pittsburgh, PA","birth_country":"United States","sex":"Male","organization_name":"Mayo Clinic","organization_city":"Rochester, MN","organization_country":"United States"},{"year":1950,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Ralph Bunche","birth_date":"1904-08-07","birth_city":"Detroit, MI","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1950,"category":"Physics","motivation":"for his development of the photographic method of studying nuclear processes and his discoveries regarding mesons made with this method","prize_share":"1/1","laureate_type":"Individual","name":"Cecil Frank Powell","birth_date":"1903-12-05","birth_city":"Tonbridge","birth_country":"United Kingdom","sex":"Male","organization_name":"Bristol University","organization_city":"Bristol","organization_country":"United Kingdom"},{"year":1951,"category":"Chemistry","motivation":"for their discoveries in the chemistry of the transuranium elements","prize_share":"1/2","laureate_type":"Individual","name":"Edwin Mattison McMillan","birth_date":"1907-09-18","birth_city":"Redondo Beach, CA","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1951,"category":"Chemistry","motivation":"for their discoveries in the chemistry of the transuranium elements","prize_share":"1/2","laureate_type":"Individual","name":"Glenn Theodore Seaborg","birth_date":"1912-04-19","birth_city":"Ishpeming, MI","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1951,"category":"Literature","motivation":"for the artistic vigour and true independence of mind with which he endeavours in his poetry to find answers to the eternal questions confronting mankind","prize_share":"1/1","laureate_type":"Individual","name":"P\xe4r Fabian Lagerkvist","birth_date":"1891-05-23","birth_city":"V\xe4xj\xf6","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1951,"category":"Medicine","motivation":"for his discoveries concerning yellow fever and how to combat it","prize_share":"1/1","laureate_type":"Individual","name":"Max Theiler","birth_date":"1899-01-30","birth_city":"Pretoria","birth_country":"South Africa","sex":"Male","organization_name":"Laboratories of the Division of Medicine and Public Health, Rockefeller Foundation","organization_city":"New York, NY","organization_country":"United States"},{"year":1951,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"L\xe9on Jouhaux","birth_date":"1879-07-01","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1951,"category":"Physics","motivation":"for their pioneer work on the transmutation of atomic nuclei by artificially accelerated atomic particles","prize_share":"1/2","laureate_type":"Individual","name":"Sir John Douglas Cockcroft","birth_date":"1897-05-27","birth_city":"Todmorden","birth_country":"United Kingdom","sex":"Male","organization_name":"Atomic Energy Research Establishment","organization_city":"Harwell, Berkshire","organization_country":"United Kingdom"},{"year":1951,"category":"Physics","motivation":"for their pioneer work on the transmutation of atomic nuclei by artificially accelerated atomic particles","prize_share":"1/2","laureate_type":"Individual","name":"Ernest Thomas Sinton Walton","birth_date":"1903-10-06","birth_city":"Dungarvan","birth_country":"Ireland","sex":"Male","organization_name":"Trinity College","organization_city":"Dublin","organization_country":"Ireland"},{"year":1952,"category":"Chemistry","motivation":"for their invention of partition chromatography","prize_share":"1/2","laureate_type":"Individual","name":"Archer John Porter Martin","birth_date":"1910-03-01","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"National Institute for Medical Research","organization_city":"London","organization_country":"United Kingdom"},{"year":1952,"category":"Chemistry","motivation":"for their invention of partition chromatography","prize_share":"1/2","laureate_type":"Individual","name":"Richard Laurence Millington Synge","birth_date":"1914-10-28","birth_city":"Liverpool","birth_country":"United Kingdom","sex":"Male","organization_name":"Rowett Research Institute","organization_city":"Bucksburn (Scotland)","organization_country":"United Kingdom"},{"year":1952,"category":"Literature","motivation":"for the deep spiritual insight and the artistic intensity with which he has in his novels penetrated the drama of human life","prize_share":"1/1","laureate_type":"Individual","name":"Fran\xe7ois Mauriac","birth_date":"1885-10-11","birth_city":"Bordeaux","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1952,"category":"Medicine","motivation":"for his discovery of streptomycin, the first antibiotic effective against tuberculosis","prize_share":"1/1","laureate_type":"Individual","name":"Selman Abraham Waksman","birth_date":"1888-07-22","birth_city":"Priluka (Nova Pryluka)","birth_country":"Ukraine","sex":"Male","organization_name":"Rutgers University","organization_city":"New Brunswick, NJ","organization_country":"United States"},{"year":1952,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Albert Schweitzer","birth_date":"1875-01-14","birth_city":"Kaysersberg","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1952,"category":"Physics","motivation":"for their development of new methods for nuclear magnetic precision measurements and discoveries in connection therewith","prize_share":"1/2","laureate_type":"Individual","name":"Felix Bloch","birth_date":"1905-10-23","birth_city":"Zurich","birth_country":"Switzerland","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1952,"category":"Physics","motivation":"for their development of new methods for nuclear magnetic precision measurements and discoveries in connection therewith","prize_share":"1/2","laureate_type":"Individual","name":"Edward Mills Purcell","birth_date":"1912-08-30","birth_city":"Taylorville, IL","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1953,"category":"Chemistry","motivation":"for his discoveries in the field of macromolecular chemistry","prize_share":"1/1","laureate_type":"Individual","name":"Hermann Staudinger","birth_date":"1881-03-23","birth_city":"Worms","birth_country":"Germany","sex":"Male","organization_name":"University of Freiburg","organization_city":"Breisgau","organization_country":"Germany"},{"year":1953,"category":"Literature","motivation":"for his mastery of historical and biographical description as well as for brilliant oratory in defending exalted human values","prize_share":"1/1","laureate_type":"Individual","name":"Sir Winston Leonard Spencer Churchill","birth_date":"1874-11-30","birth_city":"Woodstock","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1953,"category":"Medicine","motivation":"for his discovery of the citric acid cycle","prize_share":"1/2","laureate_type":"Individual","name":"Hans Adolf Krebs","birth_date":"1900-08-25","birth_city":"Hildesheim","birth_country":"Germany","sex":"Male","organization_name":"Sheffield University","organization_city":"Sheffield","organization_country":"United Kingdom"},{"year":1953,"category":"Medicine","motivation":"for his discovery of co-enzyme A and its importance for intermediary metabolism","prize_share":"1/2","laureate_type":"Individual","name":"Fritz Albert Lipmann","birth_date":"1899-06-12","birth_city":"Koenigsberg (Kaliningrad)","birth_country":"Russia","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":1953,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"George Catlett Marshall","birth_date":"1880-12-31","birth_city":"Uniontown, PA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1953,"category":"Physics","motivation":"for his demonstration of the phase contrast method, especially for his invention of the phase contrast microscope","prize_share":"1/1","laureate_type":"Individual","name":"Frits Zernike","birth_date":"1888-07-16","birth_city":"Amsterdam","birth_country":"Netherlands","sex":"Male","organization_name":"Groningen University","organization_city":"Groningen","organization_country":"Netherlands"},{"year":1954,"category":"Chemistry","motivation":"for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances","prize_share":"1/1","laureate_type":"Individual","name":"Linus Carl Pauling","birth_date":"1901-02-28","birth_city":"Portland, OR","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1954,"category":"Literature","motivation":"for his mastery of the art of narrative, most recently demonstrated in The Old Man and the Sea, and for the influence that he has exerted on contemporary style","prize_share":"1/1","laureate_type":"Individual","name":"Ernest Miller Hemingway","birth_date":"1899-07-21","birth_city":"Oak Park, IL","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1954,"category":"Medicine","motivation":"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue","prize_share":"1/3","laureate_type":"Individual","name":"John Franklin Enders","birth_date":"1897-02-10","birth_city":"West Hartford, CT","birth_country":"United States","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":1954,"category":"Medicine","motivation":"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue","prize_share":"1/3","laureate_type":"Individual","name":"Thomas Huckle Weller","birth_date":"1915-06-15","birth_city":"Ann Arbor, MI","birth_country":"United States","sex":"Male","organization_name":"Research Division of Infectious Diseases, Children\'s Medical Center","organization_city":"Boston, MA","organization_country":"United States"},{"year":1954,"category":"Medicine","motivation":"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue","prize_share":"1/3","laureate_type":"Individual","name":"Frederick Chapman Robbins","birth_date":"1916-08-25","birth_city":"Auburn, AL","birth_country":"United States","sex":"Male","organization_name":"Western Reserve University","organization_city":"Cleveland, OH","organization_country":"United States"},{"year":1954,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Office of the United Nations High Commissioner for Refugees (UNHCR)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1954,"category":"Physics","motivation":"for his fundamental research in quantum mechanics, especially for his statistical interpretation of the wavefunction","prize_share":"1/2","laureate_type":"Individual","name":"Max Born","birth_date":"1882-12-11","birth_city":"Breslau (Wroclaw)","birth_country":"Poland","sex":"Male","organization_name":"Edinburgh University","organization_city":"Edinburgh","organization_country":"United Kingdom"},{"year":1954,"category":"Physics","motivation":"for the coincidence method and his discoveries made therewith","prize_share":"1/2","laureate_type":"Individual","name":"Walther Bothe","birth_date":"1891-01-08","birth_city":"Oranienburg","birth_country":"Germany","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1955,"category":"Chemistry","motivation":"for his work on biochemically important sulphur compounds, especially for the first synthesis of a polypeptide hormone","prize_share":"1/1","laureate_type":"Individual","name":"Vincent du Vigneaud","birth_date":"1901-05-18","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1955,"category":"Literature","motivation":"for his vivid epic power which has renewed the great narrative art of Iceland","prize_share":"1/1","laureate_type":"Individual","name":"Halld\xf3r Kiljan Laxness","birth_date":"1902-04-23","birth_city":"Reykjavik","birth_country":"Iceland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1955,"category":"Medicine","motivation":"for his discoveries concerning the nature and mode of action of oxidation enzymes","prize_share":"1/1","laureate_type":"Individual","name":"Axel Hugo Theodor Theorell","birth_date":"1903-07-06","birth_city":"Link\xf6ping","birth_country":"Sweden","sex":"Male","organization_name":"Karolinska Institutet, Nobel Medical Institute","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1955,"category":"Physics","motivation":"for his discoveries concerning the fine structure of the hydrogen spectrum","prize_share":"1/2","laureate_type":"Individual","name":"Willis Eugene Lamb","birth_date":"1913-07-12","birth_city":"Los Angeles, CA","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1955,"category":"Physics","motivation":"for his precision determination of the magnetic moment of the electron","prize_share":"1/2","laureate_type":"Individual","name":"Polykarp Kusch","birth_date":"1911-01-26","birth_city":"Blankenburg","birth_country":"Germany","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1956,"category":"Chemistry","motivation":"for their researches into the mechanism of chemical reactions","prize_share":"1/2","laureate_type":"Individual","name":"Sir Cyril Norman Hinshelwood","birth_date":"1897-05-19","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1956,"category":"Chemistry","motivation":"for their researches into the mechanism of chemical reactions","prize_share":"1/2","laureate_type":"Individual","name":"Nikolay Nikolaevich Semenov","birth_date":"1896-04-03","birth_city":"Saratov","birth_country":"Russia","sex":"Male","organization_name":"Institute for Chemical Physics of the Academy of Sciences of the USSR","organization_city":"Moscow","organization_country":"Russia"},{"year":1956,"category":"Literature","motivation":"for his lyrical poetry, which in Spanish language constitutes an example of high spirit and artistical purity","prize_share":"1/1","laureate_type":"Individual","name":"Juan Ram\xf3n Jim\xe9nez","birth_date":"1881-12-24","birth_city":"Moguer","birth_country":"Spain","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1956,"category":"Medicine","motivation":"for their discoveries concerning heart catheterization and pathological changes in the circulatory system","prize_share":"1/3","laureate_type":"Individual","name":"Andr\xe9 Fr\xe9d\xe9ric Cournand","birth_date":"1895-09-24","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Columbia University Division, Cardio-Pulmonary Laboratory, Bellevue Hospital","organization_city":"New York, NY","organization_country":"United States"},{"year":1956,"category":"Medicine","motivation":"for their discoveries concerning heart catheterization and pathological changes in the circulatory system","prize_share":"1/3","laureate_type":"Individual","name":"Werner Forssmann","birth_date":"1904-08-29","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"Mainz University","organization_city":"Mainz","organization_country":"Germany"},{"year":1956,"category":"Medicine","motivation":"for their discoveries concerning heart catheterization and pathological changes in the circulatory system","prize_share":"1/3","laureate_type":"Individual","name":"Dickinson W. Richards","birth_date":"1895-10-30","birth_city":"Orange, NJ","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1956,"category":"Physics","motivation":"for their researches on semiconductors and their discovery of the transistor effect","prize_share":"1/3","laureate_type":"Individual","name":"William Bradford Shockley","birth_date":"1910-02-13","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Semiconductor Laboratory of Beckman Instruments, Inc.","organization_city":"Mountain View, CA","organization_country":"United States"},{"year":1956,"category":"Physics","motivation":"for their researches on semiconductors and their discovery of the transistor effect","prize_share":"1/3","laureate_type":"Individual","name":"John Bardeen","birth_date":"1908-05-23","birth_city":"Madison, WI","birth_country":"United States","sex":"Male","organization_name":"University of Illinois","organization_city":"Urbana, IL","organization_country":"United States"},{"year":1956,"category":"Physics","motivation":"for their researches on semiconductors and their discovery of the transistor effect","prize_share":"1/3","laureate_type":"Individual","name":"Walter Houser Brattain","birth_date":"1902-02-10","birth_city":"Amoy","birth_country":"China","sex":"Male","organization_name":"Bell Telephone Laboratories","organization_city":"Murray Hill, NJ","organization_country":"United States"},{"year":1957,"category":"Chemistry","motivation":"for his work on nucleotides and nucleotide co-enzymes","prize_share":"1/1","laureate_type":"Individual","name":"Lord (Alexander R.) Todd","birth_date":"1907-10-02","birth_city":"Glasgow","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1957,"category":"Literature","motivation":"for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times","prize_share":"1/1","laureate_type":"Individual","name":"Albert Camus","birth_date":"1913-11-07","birth_city":"Mondovi","birth_country":"Algeria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1957,"category":"Medicine","motivation":"for his discoveries relating to synthetic compounds that inhibit the action of certain body substances, and especially their action on the vascular system and the skeletal muscles","prize_share":"1/1","laureate_type":"Individual","name":"Daniel Bovet","birth_date":"1907-03-23","birth_city":"Neuch\xe2tel","birth_country":"Switzerland","sex":"Male","organization_name":"Istituto Superiore di Sanit\xe0 (Chief Institute of Public Health)","organization_city":"Rome","organization_country":"Italy"},{"year":1957,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Lester Bowles Pearson","birth_date":"1897-04-23","birth_city":"Toronto","birth_country":"Canada","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1957,"category":"Physics","motivation":"for their penetrating investigation of the so-called parity laws which has led to important discoveries regarding the elementary particles","prize_share":"1/2","laureate_type":"Individual","name":"Chen Ning Yang","birth_date":"1922-09-22","birth_city":"Hofei, Anhwei","birth_country":"China","sex":"Male","organization_name":"Institute for Advanced Study","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1957,"category":"Physics","motivation":"for their penetrating investigation of the so-called parity laws which has led to important discoveries regarding the elementary particles","prize_share":"1/2","laureate_type":"Individual","name":"Tsung-Dao (T.D.) Lee","birth_date":"1926-11-24","birth_city":"Shanghai","birth_country":"China","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1958,"category":"Chemistry","motivation":"for his work on the structure of proteins, especially that of insulin","prize_share":"1/1","laureate_type":"Individual","name":"Frederick Sanger","birth_date":"1918-08-13","birth_city":"Rendcombe","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1958,"category":"Literature","motivation":"for his important achievement both in contemporary lyrical poetry and in the field of the great Russian epic tradition","prize_share":"1/1","laureate_type":"Individual","name":"Boris Leonidovich Pasternak","birth_date":"1890-02-10","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1958,"category":"Medicine","motivation":"for their discovery that genes act by regulating definite chemical events","prize_share":"1/4","laureate_type":"Individual","name":"George Wells Beadle","birth_date":"1903-10-22","birth_city":"Wahoo, NE","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1958,"category":"Medicine","motivation":"for their discovery that genes act by regulating definite chemical events","prize_share":"1/4","laureate_type":"Individual","name":"Edward Lawrie Tatum","birth_date":"1909-12-14","birth_city":"Boulder, CO","birth_country":"United States","sex":"Male","organization_name":"Rockefeller Institute for Medical Research","organization_city":"New York, NY","organization_country":"United States"},{"year":1958,"category":"Medicine","motivation":"for his discoveries concerning genetic recombination and the organization of the genetic material of bacteria","prize_share":"2/4","laureate_type":"Individual","name":"Joshua Lederberg","birth_date":"1925-05-23","birth_city":"Montclair, NJ","birth_country":"United States","sex":"Male","organization_name":"University of Wisconsin","organization_city":"Madison, WI","organization_country":"United States"},{"year":1958,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Georges Pire","birth_date":"1910-02-10","birth_city":"Dinant","birth_country":"Belgium","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1958,"category":"Physics","motivation":"for the discovery and the interpretation of the Cherenkov effect","prize_share":"1/3","laureate_type":"Individual","name":"Pavel Alekseyevich Cherenkov","birth_date":"1904-07-28","birth_city":"Novaya Chigla","birth_country":"Russia","sex":"Male","organization_name":"P.N. Lebedev Physical Institute","organization_city":"Moscow","organization_country":"Russia"},{"year":1958,"category":"Physics","motivation":"for the discovery and the interpretation of the Cherenkov effect","prize_share":"1/3","laureate_type":"Individual","name":"Igor Yevgenyevich Tamm","birth_date":"1895-07-08","birth_city":"Vladivostok","birth_country":"Russia","sex":"Male","organization_name":"University of Moscow","organization_city":"Moscow","organization_country":"Russia"},{"year":1958,"category":"Physics","motivation":"for the discovery and the interpretation of the Cherenkov effect","prize_share":"1/3","laureate_type":"Individual","name":"Il\xb4ja Mikhailovich Frank","birth_date":"1908-10-23","birth_city":"Leningrad (Saint Petersburg)","birth_country":"Russia","sex":"Male","organization_name":"University of Moscow","organization_city":"Moscow","organization_country":"Russia"},{"year":1959,"category":"Chemistry","motivation":"for his discovery and development of the polarographic methods of analysis","prize_share":"1/1","laureate_type":"Individual","name":"Jaroslav Heyrovsky","birth_date":"1890-12-20","birth_city":"Prague","birth_country":"Czech Republic","sex":"Male","organization_name":"Polarographic Institute of the Czechoslovak Academy of Science","organization_city":"Prague","organization_country":"Czech Republic"},{"year":1959,"category":"Literature","motivation":"for his lyrical poetry, which with classical fire expresses the tragic experience of life in our own times","prize_share":"1/1","laureate_type":"Individual","name":"Salvatore Quasimodo","birth_date":"1901-08-20","birth_city":"Modica","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1959,"category":"Medicine","motivation":"for their discovery of the mechanisms in the biological synthesis of ribonucleic acid and deoxyribonucleic acid","prize_share":"1/2","laureate_type":"Individual","name":"Severo Ochoa","birth_date":"1905-09-24","birth_city":"Luarca","birth_country":"Spain","sex":"Male","organization_name":"New York University, College of Medicine","organization_city":"New York, NY","organization_country":"United States"},{"year":1959,"category":"Medicine","motivation":"for their discovery of the mechanisms in the biological synthesis of ribonucleic acid and deoxyribonucleic acid","prize_share":"1/2","laureate_type":"Individual","name":"Arthur Kornberg","birth_date":"1918-03-03","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1959,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Philip J. Noel-Baker","birth_date":"1889-11-01","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1959,"category":"Physics","motivation":"for their discovery of the antiproton","prize_share":"1/2","laureate_type":"Individual","name":"Emilio Gino Segr\xe8","birth_date":"1905-02-01","birth_city":"Tivoli","birth_country":"Italy","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1959,"category":"Physics","motivation":"for their discovery of the antiproton","prize_share":"1/2","laureate_type":"Individual","name":"Owen Chamberlain","birth_date":"1920-07-10","birth_city":"San Francisco, CA","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1960,"category":"Chemistry","motivation":"for his method to use carbon-14 for age determination in archaeology, geology, geophysics, and other branches of science","prize_share":"1/1","laureate_type":"Individual","name":"Willard Frank Libby","birth_date":"1908-12-17","birth_city":"Grand Valley, CO","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":1960,"category":"Literature","motivation":"for the soaring flight and the evocative imagery of his poetry which in a visionary fashion reflects the conditions of our time","prize_share":"1/1","laureate_type":"Individual","name":"Saint-John Perse","birth_date":"1887-05-31","birth_city":"Pointe-\xe0-Pitre","birth_country":"Guadeloupe","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1960,"category":"Medicine","motivation":"for discovery of acquired immunological tolerance","prize_share":"1/2","laureate_type":"Individual","name":"Sir Frank Macfarlane Burnet","birth_date":"1899-09-03","birth_city":"Traralgon","birth_country":"Australia","sex":"Male","organization_name":"Walter and Eliza Hall Institute for Medical Research","organization_city":"Melbourne","organization_country":"Australia"},{"year":1960,"category":"Medicine","motivation":"for discovery of acquired immunological tolerance","prize_share":"1/2","laureate_type":"Individual","name":"Peter Brian Medawar","birth_date":"1915-02-28","birth_city":"Rio de Janeiro","birth_country":"Brazil","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":1960,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Albert John Lutuli","birth_date":"1898-00-00","birth_city":"Bulawayo","birth_country":"Zimbabwe","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1960,"category":"Physics","motivation":"for the invention of the bubble chamber","prize_share":"1/1","laureate_type":"Individual","name":"Donald Arthur Glaser","birth_date":"1926-09-21","birth_city":"Cleveland, OH","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1961,"category":"Chemistry","motivation":"for his research on the carbon dioxide assimilation in plants","prize_share":"1/1","laureate_type":"Individual","name":"Melvin Calvin","birth_date":"1911-04-08","birth_city":"St. Paul, MN","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1961,"category":"Literature","motivation":"for the epic force with which he has traced themes and depicted human destinies drawn from the history of his country","prize_share":"1/1","laureate_type":"Individual","name":"Ivo Andric","birth_date":"1892-10-10","birth_city":"Dolac","birth_country":"Bosnia and Herzegovina","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1961,"category":"Medicine","motivation":"for his discoveries of the physical mechanism of stimulation within the cochlea","prize_share":"1/1","laureate_type":"Individual","name":"Georg von B\xe9k\xe9sy","birth_date":"1899-06-03","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1961,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Dag Hjalmar Agne Carl Hammarskj\xf6ld","birth_date":"1905-07-29","birth_city":"J\xf6nk\xf6ping","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1961,"category":"Physics","motivation":"for his pioneering studies of electron scattering in atomic nuclei and for his thereby achieved discoveries concerning the structure of the nucleons","prize_share":"1/2","laureate_type":"Individual","name":"Robert Hofstadter","birth_date":"1915-02-05","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1961,"category":"Physics","motivation":"for his researches concerning the resonance absorption of gamma radiation and his discovery in this connection of the effect which bears his name","prize_share":"1/2","laureate_type":"Individual","name":"Rudolf Ludwig M\xf6ssbauer","birth_date":"1929-01-31","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Technical University","organization_city":"Munich","organization_country":"Germany"},{"year":1962,"category":"Chemistry","motivation":"for their studies of the structures of globular proteins","prize_share":"1/2","laureate_type":"Individual","name":"Max Ferdinand Perutz","birth_date":"1914-05-19","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1962,"category":"Chemistry","motivation":"for their studies of the structures of globular proteins","prize_share":"1/2","laureate_type":"Individual","name":"John Cowdery Kendrew","birth_date":"1917-03-24","birth_city":"Oxford","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1962,"category":"Literature","motivation":"for his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception","prize_share":"1/1","laureate_type":"Individual","name":"John Steinbeck","birth_date":"1902-02-27","birth_city":"Salinas, CA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1962,"category":"Medicine","motivation":"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material","prize_share":"1/3","laureate_type":"Individual","name":"Francis Harry Compton Crick","birth_date":"1916-06-08","birth_city":"Northampton","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1962,"category":"Medicine","motivation":"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material","prize_share":"1/3","laureate_type":"Individual","name":"James Dewey Watson","birth_date":"1928-04-06","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1962,"category":"Medicine","motivation":"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material","prize_share":"1/3","laureate_type":"Individual","name":"Maurice Hugh Frederick Wilkins","birth_date":"1916-12-15","birth_city":"Pongaroa","birth_country":"New Zealand","sex":"Male","organization_name":"London University","organization_city":"London","organization_country":"United Kingdom"},{"year":1962,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Linus Carl Pauling","birth_date":"1901-02-28","birth_city":"Portland, OR","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1962,"category":"Physics","motivation":"for his pioneering theories for condensed matter, especially liquid helium","prize_share":"1/1","laureate_type":"Individual","name":"Lev Davidovich Landau","birth_date":"1908-01-22","birth_city":"Baku","birth_country":"Azerbaijan","sex":"Male","organization_name":"Academy of Sciences","organization_city":"Moscow","organization_country":"Russia"},{"year":1963,"category":"Chemistry","motivation":"for their discoveries in the field of the chemistry and technology of high polymers","prize_share":"1/2","laureate_type":"Individual","name":"Karl Ziegler","birth_date":"1898-11-26","birth_city":"Helsa","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Kohlenforschung (Max-Planck-Institute for Carbon Research)","organization_city":"M\xfclheim/Ruhr","organization_country":"Germany"},{"year":1963,"category":"Chemistry","motivation":"for their discoveries in the field of the chemistry and technology of high polymers","prize_share":"1/2","laureate_type":"Individual","name":"Giulio Natta","birth_date":"1903-02-26","birth_city":"Imperia","birth_country":"Italy","sex":"Male","organization_name":"Institute of Technology","organization_city":"Milan","organization_country":"Italy"},{"year":1963,"category":"Literature","motivation":"for his eminent lyrical writing, inspired by a deep feeling for the Hellenic world of culture","prize_share":"1/1","laureate_type":"Individual","name":"Giorgos Seferis","birth_date":"1900-03-13","birth_city":"Smyrna (Izmir)","birth_country":"Turkey","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1963,"category":"Medicine","motivation":"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane","prize_share":"1/3","laureate_type":"Individual","name":"Sir John Carew Eccles","birth_date":"1903-01-27","birth_city":"Melbourne","birth_country":"Australia","sex":"Male","organization_name":"Australian National University","organization_city":"Canberra","organization_country":"Australia"},{"year":1963,"category":"Medicine","motivation":"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane","prize_share":"1/3","laureate_type":"Individual","name":"Alan Lloyd Hodgkin","birth_date":"1914-02-05","birth_city":"Banbury","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1963,"category":"Medicine","motivation":"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane","prize_share":"1/3","laureate_type":"Individual","name":"Andrew Fielding Huxley","birth_date":"1917-11-22","birth_city":"Hampstead","birth_country":"United Kingdom","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":1963,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Organization","name":"Comit\xe9 international de la Croix Rouge (International Committee of the Red Cross)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1963,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Organization","name":"Ligue des Soci\xe9t\xe9s de la Croix-Rouge (League of Red Cross Societies)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1963,"category":"Physics","motivation":"for his contributions to the theory of the atomic nucleus and the elementary particles, particularly through the discovery and application of fundamental symmetry principles","prize_share":"2/4","laureate_type":"Individual","name":"Eugene Paul Wigner","birth_date":"1902-11-17","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1963,"category":"Physics","motivation":"for their discoveries concerning nuclear shell structure","prize_share":"1/4","laureate_type":"Individual","name":"Maria Goeppert Mayer","birth_date":"1906-06-28","birth_city":"Kattowitz (Katowice)","birth_country":"Poland","sex":"Female","organization_name":"University of California","organization_city":"San Diego, CA","organization_country":"United States"},{"year":1963,"category":"Physics","motivation":"for their discoveries concerning nuclear shell structure","prize_share":"1/4","laureate_type":"Individual","name":"J. Hans D. Jensen","birth_date":"1907-06-25","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1964,"category":"Chemistry","motivation":"for her determinations by X-ray techniques of the structures of important biochemical substances","prize_share":"1/1","laureate_type":"Individual","name":"Dorothy Crowfoot Hodgkin","birth_date":"1910-05-12","birth_city":"Cairo","birth_country":"Egypt","sex":"Female","organization_name":"University of Oxford, Royal Society","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1964,"category":"Literature","motivation":"for his work which, rich in ideas and filled with the spirit of freedom and the quest for truth, has exerted a far-reaching influence on our age","prize_share":"1/1","laureate_type":"Individual","name":"Jean-Paul Sartre","birth_date":"1905-06-21","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1964,"category":"Medicine","motivation":"for their discoveries concerning the mechanism and regulation of the cholesterol and fatty acid metabolism","prize_share":"1/2","laureate_type":"Individual","name":"Konrad Bloch","birth_date":"1912-01-21","birth_city":"Neisse (Nysa)","birth_country":"Poland","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1964,"category":"Medicine","motivation":"for their discoveries concerning the mechanism and regulation of the cholesterol and fatty acid metabolism","prize_share":"1/2","laureate_type":"Individual","name":"Feodor Lynen","birth_date":"1911-04-06","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Zellchemie","organization_city":"Munich","organization_country":"Germany"},{"year":1964,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Martin Luther King Jr.","birth_date":"1929-01-15","birth_city":"Atlanta, GA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1964,"category":"Physics","motivation":"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle","prize_share":"2/4","laureate_type":"Individual","name":"Charles Hard Townes","birth_date":"1915-07-28","birth_city":"Greenville, SC","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1964,"category":"Physics","motivation":"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle","prize_share":"1/4","laureate_type":"Individual","name":"Nicolay Gennadiyevich Basov","birth_date":"1922-12-14","birth_city":"Usman","birth_country":"Russia","sex":"Male","organization_name":"P.N. Lebedev Physical Institute","organization_city":"Moscow","organization_country":"Russia"},{"year":1964,"category":"Physics","motivation":"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle","prize_share":"1/4","laureate_type":"Individual","name":"Aleksandr Mikhailovich Prokhorov","birth_date":"1916-07-11","birth_city":"Atherton","birth_country":"Australia","sex":"Male","organization_name":"P.N. Lebedev Physical Institute","organization_city":"Moscow","organization_country":"Russia"},{"year":1965,"category":"Chemistry","motivation":"for his outstanding achievements in the art of organic synthesis","prize_share":"1/1","laureate_type":"Individual","name":"Robert Burns Woodward","birth_date":"1917-04-10","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1965,"category":"Literature","motivation":"for the artistic power and integrity with which, in his epic of the Don, he has given expression to a historic phase in the life of the Russian people","prize_share":"1/1","laureate_type":"Individual","name":"Mikhail Aleksandrovich Sholokhov","birth_date":"1905-05-24","birth_city":"Veshenskaya","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1965,"category":"Medicine","motivation":"for their discoveries concerning genetic control of enzyme and virus synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Fran\xe7ois Jacob","birth_date":"1920-06-17","birth_city":"Nancy","birth_country":"France","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":1965,"category":"Medicine","motivation":"for their discoveries concerning genetic control of enzyme and virus synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Andr\xe9 Lwoff","birth_date":"1902-05-08","birth_city":"Ainay-le-Ch\xe2teau","birth_country":"France","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":1965,"category":"Medicine","motivation":"for their discoveries concerning genetic control of enzyme and virus synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Jacques Monod","birth_date":"1910-02-09","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":1965,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"United Nations Children\'s Fund (UNICEF)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1965,"category":"Physics","motivation":"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles","prize_share":"1/3","laureate_type":"Individual","name":"Sin-Itiro Tomonaga","birth_date":"1906-03-31","birth_city":"Kyoto","birth_country":"Japan","sex":"Male","organization_name":"Tokyo University of Education","organization_city":"Tokyo","organization_country":"Japan"},{"year":1965,"category":"Physics","motivation":"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles","prize_share":"1/3","laureate_type":"Individual","name":"Julian Schwinger","birth_date":"1918-02-12","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1965,"category":"Physics","motivation":"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles","prize_share":"1/3","laureate_type":"Individual","name":"Richard P. Feynman","birth_date":"1918-05-11","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1966,"category":"Chemistry","motivation":"for his fundamental work concerning chemical bonds and the electronic structure of molecules by the molecular orbital method","prize_share":"1/1","laureate_type":"Individual","name":"Robert S. Mulliken","birth_date":"1896-06-07","birth_city":"Newburyport, MA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1966,"category":"Literature","motivation":"for his profoundly characteristic narrative art with motifs from the life of the Jewish people","prize_share":"1/2","laureate_type":"Individual","name":"Shmuel Yosef Agnon","birth_date":"1888-07-17","birth_city":"Buczacz (Buchach)","birth_country":"Ukraine","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1966,"category":"Literature","motivation":"for her outstanding lyrical and dramatic writing, which interprets Israel\'s destiny with touching strength","prize_share":"1/2","laureate_type":"Individual","name":"Nelly Sachs","birth_date":"1891-12-10","birth_city":"Berlin","birth_country":"Germany","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1966,"category":"Medicine","motivation":"for his discovery of tumour-inducing viruses","prize_share":"1/2","laureate_type":"Individual","name":"Peyton Rous","birth_date":"1879-10-05","birth_city":"Baltimore, MD","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1966,"category":"Medicine","motivation":"for his discoveries concerning hormonal treatment of prostatic cancer","prize_share":"1/2","laureate_type":"Individual","name":"Charles Brenton Huggins","birth_date":"1901-09-22","birth_city":"Halifax","birth_country":"Canada","sex":"Male","organization_name":"University of Chicago, Ben May Laboratory for Cancer Research","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1966,"category":"Physics","motivation":"for the discovery and development of optical methods for studying Hertzian resonances in atoms","prize_share":"1/1","laureate_type":"Individual","name":"Alfred Kastler","birth_date":"1902-05-03","birth_city":"Guebwiller","birth_country":"France","sex":"Male","organization_name":"\xc9cole Normale Sup\xe9rieure","organization_city":"Paris","organization_country":"France"},{"year":1967,"category":"Chemistry","motivation":"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy","prize_share":"2/4","laureate_type":"Individual","name":"Manfred Eigen","birth_date":"1927-05-09","birth_city":"Bochum","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Physikalische Chemie","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1967,"category":"Chemistry","motivation":"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy","prize_share":"1/4","laureate_type":"Individual","name":"Ronald George Wreyford Norrish","birth_date":"1897-11-09","birth_city":"Cambridge","birth_country":"United Kingdom","sex":"Male","organization_name":"Institute of Physical Chemistry","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1967,"category":"Chemistry","motivation":"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy","prize_share":"1/4","laureate_type":"Individual","name":"George Porter","birth_date":"1920-12-06","birth_city":"Stainforth","birth_country":"United Kingdom","sex":"Male","organization_name":"Royal Institution of Great Britain","organization_city":"London","organization_country":"United Kingdom"},{"year":1967,"category":"Literature","motivation":"for his vivid literary achievement, deep-rooted in the national traits and traditions of Indian peoples of Latin America","prize_share":"1/1","laureate_type":"Individual","name":"Miguel Angel Asturias","birth_date":"1899-10-19","birth_city":"Guatemala City","birth_country":"Guatemala","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1967,"category":"Medicine","motivation":"for their discoveries concerning the primary physiological and chemical visual processes in the eye","prize_share":"1/3","laureate_type":"Individual","name":"Ragnar Granit","birth_date":"1900-10-30","birth_city":"Helsinki","birth_country":"Finland","sex":"Male","organization_name":"Karolinska Institutet","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1967,"category":"Medicine","motivation":"for their discoveries concerning the primary physiological and chemical visual processes in the eye","prize_share":"1/3","laureate_type":"Individual","name":"Haldan Keffer Hartline","birth_date":"1903-12-22","birth_city":"Bloomsburg, PA","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1967,"category":"Medicine","motivation":"for their discoveries concerning the primary physiological and chemical visual processes in the eye","prize_share":"1/3","laureate_type":"Individual","name":"George Wald","birth_date":"1906-11-18","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1967,"category":"Physics","motivation":"for his contributions to the theory of nuclear reactions, especially his discoveries concerning the energy production in stars","prize_share":"1/1","laureate_type":"Individual","name":"Hans Albrecht Bethe","birth_date":"1906-07-02","birth_city":"Strassburg (Strasbourg)","birth_country":"France","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1968,"category":"Chemistry","motivation":"for the discovery of the reciprocal relations bearing his name, which are fundamental for the thermodynamics of irreversible processes","prize_share":"1/1","laureate_type":"Individual","name":"Lars Onsager","birth_date":"1903-11-27","birth_city":"Kristiania (Oslo)","birth_country":"Norway","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":1968,"category":"Literature","motivation":"for his narrative mastery, which with great sensibility expresses the essence of the Japanese mind","prize_share":"1/1","laureate_type":"Individual","name":"Yasunari Kawabata","birth_date":"1899-06-11","birth_city":"Osaka","birth_country":"Japan","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1968,"category":"Medicine","motivation":"for their interpretation of the genetic code and its function in protein synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Robert W. Holley","birth_date":"1922-01-28","birth_city":"Urbana, IL","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1968,"category":"Medicine","motivation":"for their interpretation of the genetic code and its function in protein synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Har Gobind Khorana","birth_date":"1922-01-09","birth_city":"Raipur","birth_country":"India","sex":"Male","organization_name":"University of Wisconsin","organization_city":"Madison, WI","organization_country":"United States"},{"year":1968,"category":"Medicine","motivation":"for their interpretation of the genetic code and its function in protein synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Marshall W. Nirenberg","birth_date":"1927-04-10","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"National Institutes of Health","organization_city":"Bethesda, MD","organization_country":"United States"},{"year":1968,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Ren\xe9 Cassin","birth_date":"1887-10-05","birth_city":"Bayonne","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1968,"category":"Physics","motivation":"for his decisive contributions to elementary particle physics, in particular the discovery of a large number of resonance states, made possible through his development of the technique of using hydrogen bubble chamber and data analysis","prize_share":"1/1","laureate_type":"Individual","name":"Luis Walter Alvarez","birth_date":"1911-06-13","birth_city":"San Francisco, CA","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1969,"category":"Chemistry","motivation":"for their contributions to the development of the concept of conformation and its application in chemistry","prize_share":"1/2","laureate_type":"Individual","name":"Derek H. R. Barton","birth_date":"1918-09-08","birth_city":"Gravesend","birth_country":"United Kingdom","sex":"Male","organization_name":"Imperial College","organization_city":"London","organization_country":"United Kingdom"},{"year":1969,"category":"Chemistry","motivation":"for their contributions to the development of the concept of conformation and its application in chemistry","prize_share":"1/2","laureate_type":"Individual","name":"Odd Hassel","birth_date":"1897-05-17","birth_city":"Kristiania (Oslo)","birth_country":"Norway","sex":"Male","organization_name":"University of Oslo","organization_city":"Oslo","organization_country":"Norway"},{"year":1969,"category":"Economics","motivation":"for having developed and applied dynamic models for the analysis of economic processes","prize_share":"1/2","laureate_type":"Individual","name":"Ragnar Frisch","birth_date":"1895-03-03","birth_city":"Oslo","birth_country":"Norway","sex":"Male","organization_name":"University of Oslo","organization_city":"Oslo","organization_country":"Norway"},{"year":1969,"category":"Economics","motivation":"for having developed and applied dynamic models for the analysis of economic processes","prize_share":"1/2","laureate_type":"Individual","name":"Jan Tinbergen","birth_date":"1903-04-12","birth_city":"the Hague","birth_country":"Netherlands","sex":"Male","organization_name":"The Netherlands School of Economics","organization_city":"Rotterdam","organization_country":"Netherlands"},{"year":1969,"category":"Literature","motivation":"for his writing, which - in new forms for the novel and drama - in the destitution of modern man acquires its elevation","prize_share":"1/1","laureate_type":"Individual","name":"Samuel Beckett","birth_date":"1906-04-13","birth_city":"Dublin","birth_country":"Ireland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1969,"category":"Medicine","motivation":"for their discoveries concerning the replication mechanism and the genetic structure of viruses","prize_share":"1/3","laureate_type":"Individual","name":"Max Delbr\xfcck","birth_date":"1906-09-04","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1969,"category":"Medicine","motivation":"for their discoveries concerning the replication mechanism and the genetic structure of viruses","prize_share":"1/3","laureate_type":"Individual","name":"Alfred D. Hershey","birth_date":"1908-12-04","birth_city":"Owosso, MI","birth_country":"United States","sex":"Male","organization_name":"Carnegie Institution of Washington","organization_city":"Long Island, New York, NY","organization_country":"United States"},{"year":1969,"category":"Medicine","motivation":"for their discoveries concerning the replication mechanism and the genetic structure of viruses","prize_share":"1/3","laureate_type":"Individual","name":"Salvador E. Luria","birth_date":"1912-08-13","birth_city":"Torino","birth_country":"Italy","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1969,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"International Labour Organization (I.L.O.)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1969,"category":"Physics","motivation":"for his contributions and discoveries concerning the classification of elementary particles and their interactions","prize_share":"1/1","laureate_type":"Individual","name":"Murray Gell-Mann","birth_date":"1929-09-15","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1970,"category":"Chemistry","motivation":"for his discovery of sugar nucleotides and their role in the biosynthesis of carbohydrates","prize_share":"1/1","laureate_type":"Individual","name":"Luis F. Leloir","birth_date":"1906-09-06","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Institute for Biochemical Research","organization_city":"Buenos Aires","organization_country":"Argentina"},{"year":1970,"category":"Economics","motivation":"for the scientific work through which he has developed static and dynamic economic theory and actively contributed to raising the level of analysis in economic science","prize_share":"1/1","laureate_type":"Individual","name":"Paul A. Samuelson","birth_date":"1915-05-15","birth_city":"Gary, IN","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1970,"category":"Literature","motivation":"for the ethical force with which he has pursued the indispensable traditions of Russian literature","prize_share":"1/1","laureate_type":"Individual","name":"Aleksandr Isayevich Solzhenitsyn","birth_date":"1918-12-11","birth_city":"Kislovodsk","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1970,"category":"Medicine","motivation":"for their discoveries concerning the humoral transmittors in the nerve terminals and the mechanism for their storage, release and inactivation","prize_share":"1/3","laureate_type":"Individual","name":"Sir Bernard Katz","birth_date":"1911-03-26","birth_city":"Leipzig","birth_country":"Germany","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":1970,"category":"Medicine","motivation":"for their discoveries concerning the humoral transmittors in the nerve terminals and the mechanism for their storage, release and inactivation","prize_share":"1/3","laureate_type":"Individual","name":"Ulf von Euler","birth_date":"1905-02-07","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"Karolinska Institutet","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1970,"category":"Medicine","motivation":"for their discoveries concerning the humoral transmittors in the nerve terminals and the mechanism for their storage, release and inactivation","prize_share":"1/3","laureate_type":"Individual","name":"Julius Axelrod","birth_date":"1912-05-30","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"National Institutes of Health","organization_city":"Bethesda, MD","organization_country":"United States"},{"year":1970,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Norman E. Borlaug","birth_date":"1914-03-25","birth_city":"Cresco, IA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1970,"category":"Physics","motivation":"for fundamental work and discoveries in magnetohydro-dynamics with fruitful applications in different parts of plasma physics","prize_share":"1/2","laureate_type":"Individual","name":"Hannes Olof G\xf6sta Alfv\xe9n","birth_date":"1908-05-30","birth_city":"Norrk\xf6ping","birth_country":"Sweden","sex":"Male","organization_name":"Royal Institute of Technology","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1970,"category":"Physics","motivation":"for fundamental work and discoveries concerning antiferromagnetism and ferrimagnetism which have led to important applications in solid state physics","prize_share":"1/2","laureate_type":"Individual","name":"Louis Eug\xe8ne F\xe9lix N\xe9el","birth_date":"1904-11-22","birth_city":"Lyon","birth_country":"France","sex":"Male","organization_name":"University of Grenoble","organization_city":"Grenoble","organization_country":"France"},{"year":1971,"category":"Chemistry","motivation":"for his contributions to the knowledge of electronic structure and geometry of molecules, particularly free radicals","prize_share":"1/1","laureate_type":"Individual","name":"Gerhard Herzberg","birth_date":"1904-12-25","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"National Research Council of Canada","organization_city":"Ottawa","organization_country":"Canada"},{"year":1971,"category":"Economics","motivation":"for his empirically founded interpretation of economic growth which has led to new and deepened insight into the economic and social structure and process of development","prize_share":"1/1","laureate_type":"Individual","name":"Simon Kuznets","birth_date":"1901-04-30","birth_city":"Pinsk","birth_country":"Belarus","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1971,"category":"Literature","motivation":"for a poetry that with the action of an elemental force brings alive a continent\'s destiny and dreams","prize_share":"1/1","laureate_type":"Individual","name":"Pablo Neruda","birth_date":"1904-07-12","birth_city":"Parral","birth_country":"Chile","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1971,"category":"Medicine","motivation":"for his discoveries concerning the mechanisms of the action of hormones","prize_share":"1/1","laureate_type":"Individual","name":"Earl W. Sutherland, Jr.","birth_date":"1915-11-19","birth_city":"Burlingame, KS","birth_country":"United States","sex":"Male","organization_name":"Vanderbilt University","organization_city":"Nashville, TN","organization_country":"United States"},{"year":1971,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Willy Brandt","birth_date":"1913-12-18","birth_city":"L\xfcbeck","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1971,"category":"Physics","motivation":"for his invention and development of the holographic method","prize_share":"1/1","laureate_type":"Individual","name":"Dennis Gabor","birth_date":"1900-06-05","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"Imperial College","organization_city":"London","organization_country":"United Kingdom"},{"year":1972,"category":"Chemistry","motivation":"for his work on ribonuclease, especially concerning the connection between the amino acid sequence and the biologically active conformation","prize_share":"2/4","laureate_type":"Individual","name":"Christian B. Anfinsen","birth_date":"1916-03-26","birth_city":"Monessen, PA","birth_country":"United States","sex":"Male","organization_name":"National Institutes of Health","organization_city":"Bethesda, MD","organization_country":"United States"},{"year":1972,"category":"Chemistry","motivation":"for their contribution to the understanding of the connection between chemical structure and catalytic activity of the active centre of the ribonuclease molecule","prize_share":"1/4","laureate_type":"Individual","name":"Stanford Moore","birth_date":"1913-09-04","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1972,"category":"Chemistry","motivation":"for their contribution to the understanding of the connection between chemical structure and catalytic activity of the active centre of the ribonuclease molecule","prize_share":"1/4","laureate_type":"Individual","name":"William H. Stein","birth_date":"1911-06-25","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1972,"category":"Economics","motivation":"for their pioneering contributions to general economic equilibrium theory and welfare theory","prize_share":"1/2","laureate_type":"Individual","name":"John R. Hicks","birth_date":"1904-04-08","birth_city":"Warwick","birth_country":"United Kingdom","sex":"Male","organization_name":"All Souls College","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1972,"category":"Economics","motivation":"for their pioneering contributions to general economic equilibrium theory and welfare theory","prize_share":"1/2","laureate_type":"Individual","name":"Kenneth J. Arrow","birth_date":"1921-08-23","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1972,"category":"Literature","motivation":"for his writing which through its combination of a broad perspective on his time and a sensitive skill in characterization has contributed to a renewal of German literature","prize_share":"1/1","laureate_type":"Individual","name":"Heinrich B\xf6ll","birth_date":"1917-12-21","birth_city":"Cologne","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1972,"category":"Medicine","motivation":"for their discoveries concerning the chemical structure of antibodies","prize_share":"1/2","laureate_type":"Individual","name":"Gerald M. Edelman","birth_date":"1929-07-01","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1972,"category":"Medicine","motivation":"for their discoveries concerning the chemical structure of antibodies","prize_share":"1/2","laureate_type":"Individual","name":"Rodney R. Porter","birth_date":"1917-10-08","birth_city":"Newton-le-Willows","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1972,"category":"Physics","motivation":"for their jointly developed theory of superconductivity, usually called the BCS-theory","prize_share":"1/3","laureate_type":"Individual","name":"John Bardeen","birth_date":"1908-05-23","birth_city":"Madison, WI","birth_country":"United States","sex":"Male","organization_name":"University of Illinois","organization_city":"Urbana, IL","organization_country":"United States"},{"year":1972,"category":"Physics","motivation":"for their jointly developed theory of superconductivity, usually called the BCS-theory","prize_share":"1/3","laureate_type":"Individual","name":"Leon Neil Cooper","birth_date":"1930-02-28","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Brown University","organization_city":"Providence, RI","organization_country":"United States"},{"year":1972,"category":"Physics","motivation":"for their jointly developed theory of superconductivity, usually called the BCS-theory","prize_share":"1/3","laureate_type":"Individual","name":"John Robert Schrieffer","birth_date":"1931-05-31","birth_city":"Oak Park, IL","birth_country":"United States","sex":"Male","organization_name":"University of Pennsylvania","organization_city":"Philadelphia, PA","organization_country":"United States"},{"year":1973,"category":"Chemistry","motivation":"for their pioneering work, performed independently, on the chemistry of the organometallic, so called sandwich compounds","prize_share":"1/2","laureate_type":"Individual","name":"Ernst Otto Fischer","birth_date":"1918-11-10","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Technical University","organization_city":"Munich","organization_country":"Germany"},{"year":1973,"category":"Chemistry","motivation":"for their pioneering work, performed independently, on the chemistry of the organometallic, so called sandwich compounds","prize_share":"1/2","laureate_type":"Individual","name":"Geoffrey Wilkinson","birth_date":"1921-07-14","birth_city":"Todmorden","birth_country":"United Kingdom","sex":"Male","organization_name":"Imperial College","organization_city":"London","organization_country":"United Kingdom"},{"year":1973,"category":"Economics","motivation":"for the development of the input-output method and for its application to important economic problems","prize_share":"1/1","laureate_type":"Individual","name":"Wassily Leontief","birth_date":"1906-08-05","birth_city":"St. Petersburg","birth_country":"Russia","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1973,"category":"Literature","motivation":"for an epic and psychological narrative art which has introduced a new continent into literature","prize_share":"1/1","laureate_type":"Individual","name":"Patrick White","birth_date":"1912-05-28","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1973,"category":"Medicine","motivation":"for their discoveries concerning organization and elicitation of individual and social behaviour patterns","prize_share":"1/3","laureate_type":"Individual","name":"Karl von Frisch","birth_date":"1886-11-20","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Zoologisches Institut der Universit\xe4t M\xfcnchen","organization_city":"Munich","organization_country":"Germany"},{"year":1973,"category":"Medicine","motivation":"for their discoveries concerning organization and elicitation of individual and social behaviour patterns","prize_share":"1/3","laureate_type":"Individual","name":"Konrad Lorenz","birth_date":"1903-11-07","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Konrad-Lorenz-Institut der \xd6sterreichischen Akademie der Wissen\xadschaften, Forschungsstelle f\xfcr Ethologie","organization_city":"Altenberg; Gr\xfcnau im Almtal","organization_country":"Austria"},{"year":1973,"category":"Medicine","motivation":"for their discoveries concerning organization and elicitation of individual and social behaviour patterns","prize_share":"1/3","laureate_type":"Individual","name":"Nikolaas Tinbergen","birth_date":"1907-04-15","birth_city":"the Hague","birth_country":"Netherlands","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":1973,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Organization","name":"Le Duc Tho","birth_date":"1911-10-14","birth_city":"Nam Ha province","birth_country":"Vietnam","sex":"Male","organization_name":"","organization_city":"","organization_country":"Vietnam"},{"year":1973,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Henry A. Kissinger","birth_date":"1923-05-27","birth_city":"F\xfcrth","birth_country":"Germany","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1973,"category":"Physics","motivation":"for their experimental discoveries regarding tunneling phenomena in semiconductors and superconductors, respectively","prize_share":"1/4","laureate_type":"Individual","name":"Leo Esaki","birth_date":"1925-03-12","birth_city":"Osaka","birth_country":"Japan","sex":"Male","organization_name":"IBM Thomas J. Watson Research Center","organization_city":"Yorktown Heights, NY","organization_country":"United States"},{"year":1973,"category":"Physics","motivation":"for their experimental discoveries regarding tunneling phenomena in semiconductors and superconductors, respectively","prize_share":"1/4","laureate_type":"Individual","name":"Ivar Giaever","birth_date":"1929-04-05","birth_city":"Bergen","birth_country":"Norway","sex":"Male","organization_name":"General Electric Company","organization_city":"Schenectady, NY","organization_country":"United States"},{"year":1973,"category":"Physics","motivation":"for his theoretical predictions of the properties of a supercurrent through a tunnel barrier, in particular those phenomena which are generally known as the Josephson effects","prize_share":"2/4","laureate_type":"Individual","name":"Brian David Josephson","birth_date":"1940-01-04","birth_city":"Cardiff","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1974,"category":"Chemistry","motivation":"for his fundamental achievements, both theoretical and experimental, in the physical chemistry of the macromolecules","prize_share":"1/1","laureate_type":"Individual","name":"Paul J. Flory","birth_date":"1910-06-19","birth_city":"Sterling, IL","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1974,"category":"Economics","motivation":"for their pioneering work in the theory of money and economic fluctuations and for their penetrating analysis of the interdependence of economic, social and institutional phenomena","prize_share":"1/2","laureate_type":"Individual","name":"Gunnar Myrdal","birth_date":"1898-12-06","birth_city":"Skattungbyn","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Economics","motivation":"for their pioneering work in the theory of money and economic fluctuations and for their penetrating analysis of the interdependence of economic, social and institutional phenomena","prize_share":"1/2","laureate_type":"Individual","name":"Friedrich August von Hayek","birth_date":"1899-05-08","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Literature","motivation":"for a narrative art, far-seeing in lands and ages, in the service of freedom","prize_share":"1/2","laureate_type":"Individual","name":"Eyvind Johnson","birth_date":"1900-07-29","birth_city":"Svartbj\xf6rnsbyn","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Literature","motivation":"for writings that catch the dewdrop and reflect the cosmos","prize_share":"1/2","laureate_type":"Individual","name":"Harry Martinson","birth_date":"1904-05-06","birth_city":"J\xe4msh\xf6g","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Medicine","motivation":"for their discoveries concerning the structural and functional organization of the cell","prize_share":"1/3","laureate_type":"Individual","name":"Albert Claude","birth_date":"1898-08-24","birth_city":"Longlier","birth_country":"Belgium","sex":"Male","organization_name":"Universit\xe9 Catholique de Louvain","organization_city":"Louvain","organization_country":"Belgium"},{"year":1974,"category":"Medicine","motivation":"for their discoveries concerning the structural and functional organization of the cell","prize_share":"1/3","laureate_type":"Individual","name":"Christian de Duve","birth_date":"1917-10-02","birth_city":"Thames Ditton","birth_country":"United Kingdom","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1974,"category":"Medicine","motivation":"for their discoveries concerning the structural and functional organization of the cell","prize_share":"1/3","laureate_type":"Individual","name":"George E. Palade","birth_date":"1912-11-19","birth_city":"Iasi","birth_country":"Romania","sex":"Male","organization_name":"Yale University, School of Medicine","organization_city":"New Haven, CT","organization_country":"United States"},{"year":1974,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Se\xe1n MacBride","birth_date":"1904-01-26","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Eisaku Sato","birth_date":"1901-03-27","birth_city":"Tabuse","birth_country":"Japan","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1974,"category":"Physics","motivation":"for their pioneering research in radio astrophysics: Ryle for his observations and inventions, in particular of the aperture synthesis technique, and Hewish for his decisive role in the discovery of pulsars","prize_share":"1/2","laureate_type":"Individual","name":"Sir Martin Ryle","birth_date":"1918-09-27","birth_city":"Brighton","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1974,"category":"Physics","motivation":"for their pioneering research in radio astrophysics: Ryle for his observations and inventions, in particular of the aperture synthesis technique, and Hewish for his decisive role in the discovery of pulsars","prize_share":"1/2","laureate_type":"Individual","name":"Antony Hewish","birth_date":"1924-05-11","birth_city":"Fowey","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1975,"category":"Chemistry","motivation":"for his work on the stereochemistry of enzyme-catalyzed reactions","prize_share":"1/2","laureate_type":"Individual","name":"John Warcup Cornforth","birth_date":"1917-09-07","birth_city":"Sydney","birth_country":"Australia","sex":"Male","organization_name":"University of Sussex","organization_city":"Brighton","organization_country":"United Kingdom"},{"year":1975,"category":"Chemistry","motivation":"for his research into the stereochemistry of organic molecules and reactions","prize_share":"1/2","laureate_type":"Individual","name":"Vladimir Prelog","birth_date":"1906-07-23","birth_city":"Sarajevo","birth_country":"Bosnia and Herzegovina","sex":"Male","organization_name":"Eidgen\xf6ssische Technische Hochschule (Swiss Federal Institute of Technology)","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1975,"category":"Economics","motivation":"for their contributions to the theory of optimum allocation of resources","prize_share":"1/2","laureate_type":"Individual","name":"Leonid Vitaliyevich Kantorovich","birth_date":"1912-01-19","birth_city":"St. Petersburg","birth_country":"Russia","sex":"Male","organization_name":"Academy of Sciences","organization_city":"Moscow","organization_country":"Russia"},{"year":1975,"category":"Economics","motivation":"for their contributions to the theory of optimum allocation of resources","prize_share":"1/2","laureate_type":"Individual","name":"Tjalling C. Koopmans","birth_date":"1910-08-28","birth_city":"s Graveland","birth_country":"Netherlands","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":1975,"category":"Literature","motivation":"for his distinctive poetry which, with great artistic sensitivity, has interpreted human values under the sign of an outlook on life with no illusions","prize_share":"1/1","laureate_type":"Individual","name":"Eugenio Montale","birth_date":"1896-10-12","birth_city":"Genoa","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1975,"category":"Medicine","motivation":"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell","prize_share":"1/3","laureate_type":"Individual","name":"David Baltimore","birth_date":"1938-03-07","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1975,"category":"Medicine","motivation":"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell","prize_share":"1/3","laureate_type":"Individual","name":"Renato Dulbecco","birth_date":"1914-02-22","birth_city":"Catanzaro","birth_country":"Italy","sex":"Male","organization_name":"Imperial Cancer Research Fund Laboratory","organization_city":"London","organization_country":"United Kingdom"},{"year":1975,"category":"Medicine","motivation":"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell","prize_share":"1/3","laureate_type":"Individual","name":"Howard Martin Temin","birth_date":"1934-12-10","birth_city":"Philadelphia, PA","birth_country":"United States","sex":"Male","organization_name":"University of Wisconsin","organization_city":"Madison, WI","organization_country":"United States"},{"year":1975,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Andrei Dmitrievich Sakharov","birth_date":"1921-05-21","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1975,"category":"Physics","motivation":"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection","prize_share":"1/3","laureate_type":"Individual","name":"Aage Niels Bohr","birth_date":"1922-06-19","birth_city":"Copenhagen","birth_country":"Denmark","sex":"Male","organization_name":"Niels Bohr Institute","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1975,"category":"Physics","motivation":"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection","prize_share":"1/3","laureate_type":"Individual","name":"Ben Roy Mottelson","birth_date":"1926-07-09","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Nordita","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":1975,"category":"Physics","motivation":"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection","prize_share":"1/3","laureate_type":"Individual","name":"Leo James Rainwater","birth_date":"1917-12-09","birth_city":"Council, ID","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1976,"category":"Chemistry","motivation":"for his studies on the structure of boranes illuminating problems of chemical bonding","prize_share":"1/1","laureate_type":"Individual","name":"William N. Lipscomb","birth_date":"1919-12-09","birth_city":"Cleveland, OH","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1976,"category":"Economics","motivation":"for his achievements in the fields of consumption analysis, monetary history and theory and for his demonstration of the complexity of stabilization policy","prize_share":"1/1","laureate_type":"Individual","name":"Milton Friedman","birth_date":"1912-07-31","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1976,"category":"Literature","motivation":"for the human understanding and subtle analysis of contemporary culture that are combined in his work","prize_share":"1/1","laureate_type":"Individual","name":"Saul Bellow","birth_date":"1915-06-10","birth_city":"Montreal","birth_country":"Canada","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1976,"category":"Medicine","motivation":"for their discoveries concerning new mechanisms for the origin and dissemination of infectious diseases","prize_share":"1/2","laureate_type":"Individual","name":"Baruch S. Blumberg","birth_date":"1925-07-28","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"The Institute for Cancer Research","organization_city":"Philadelphia, PA","organization_country":"United States"},{"year":1976,"category":"Medicine","motivation":"for their discoveries concerning new mechanisms for the origin and dissemination of infectious diseases","prize_share":"1/2","laureate_type":"Individual","name":"D. Carleton Gajdusek","birth_date":"1923-09-09","birth_city":"Yonkers, NY","birth_country":"United States","sex":"Male","organization_name":"National Institutes of Health","organization_city":"Bethesda, MD","organization_country":"United States"},{"year":1976,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Betty Williams","birth_date":"1943-05-22","birth_city":"Belfast","birth_country":"United Kingdom","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1976,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Mairead Corrigan","birth_date":"1944-01-27","birth_city":"Belfast","birth_country":"United Kingdom","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1976,"category":"Physics","motivation":"for their pioneering work in the discovery of a heavy elementary particle of a new kind","prize_share":"1/2","laureate_type":"Individual","name":"Burton Richter","birth_date":"1931-03-22","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford Linear Accelerator Center","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1976,"category":"Physics","motivation":"for their pioneering work in the discovery of a heavy elementary particle of a new kind","prize_share":"1/2","laureate_type":"Individual","name":"Samuel Chao Chung Ting","birth_date":"1936-01-27","birth_city":"Ann Arbor, MI","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1977,"category":"Chemistry","motivation":"for his contributions to non-equilibrium thermodynamics, particularly the theory of dissipative structures","prize_share":"1/1","laureate_type":"Individual","name":"Ilya Prigogine","birth_date":"1917-01-25","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"Universit\xe9 Libre de Bruxelles","organization_city":"Brussels","organization_country":"Belgium"},{"year":1977,"category":"Economics","motivation":"for their pathbreaking contribution to the theory of international trade and international capital movements","prize_share":"1/2","laureate_type":"Individual","name":"Bertil Ohlin","birth_date":"1899-04-23","birth_city":"Klippan","birth_country":"Sweden","sex":"Male","organization_name":"Stockholm School of Economics","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1977,"category":"Economics","motivation":"for their pathbreaking contribution to the theory of international trade and international capital movements","prize_share":"1/2","laureate_type":"Individual","name":"James E. Meade","birth_date":"1907-06-23","birth_city":"Swanage","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1977,"category":"Literature","motivation":"for a creative poetic writing which illuminates man\'s condition in the cosmos and in present-day society, at the same time representing the great renewal of the traditions of Spanish poetry between the wars","prize_share":"1/1","laureate_type":"Individual","name":"Vicente Aleixandre","birth_date":"1898-04-26","birth_city":"Sevilla","birth_country":"Spain","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1977,"category":"Medicine","motivation":"for their discoveries concerning the peptide hormone production of the brain","prize_share":"1/4","laureate_type":"Individual","name":"Roger Guillemin","birth_date":"1924-01-11","birth_city":"Dijon","birth_country":"France","sex":"Male","organization_name":"The Salk Institute","organization_city":"San Diego, CA","organization_country":"United States"},{"year":1977,"category":"Medicine","motivation":"for their discoveries concerning the peptide hormone production of the brain","prize_share":"1/4","laureate_type":"Individual","name":"Andrew V. Schally","birth_date":"1926-11-30","birth_city":"Wilno (Vilnius)","birth_country":"Lithuania","sex":"Male","organization_name":"Veterans Administration Hospital","organization_city":"New Orleans, LA","organization_country":"United States"},{"year":1977,"category":"Medicine","motivation":"for the development of radioimmunoassays of peptide hormones","prize_share":"2/4","laureate_type":"Individual","name":"Rosalyn Yalow","birth_date":"1921-07-19","birth_city":"New York, NY","birth_country":"United States","sex":"Female","organization_name":"Veterans Administration Hospital","organization_city":"Bronx, NY","organization_country":"United States"},{"year":1977,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Amnesty International","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1977,"category":"Physics","motivation":"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems","prize_share":"1/3","laureate_type":"Individual","name":"Philip Warren Anderson","birth_date":"1923-12-13","birth_city":"Indianapolis, IN","birth_country":"United States","sex":"Male","organization_name":"Bell Telephone Laboratories","organization_city":"Murray Hill, NJ","organization_country":"United States"},{"year":1977,"category":"Physics","motivation":"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems","prize_share":"1/3","laureate_type":"Individual","name":"Sir Nevill Francis Mott","birth_date":"1905-09-30","birth_city":"Leeds","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1977,"category":"Physics","motivation":"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems","prize_share":"1/3","laureate_type":"Individual","name":"John Hasbrouck van Vleck","birth_date":"1899-03-13","birth_city":"Middletown, CT","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1978,"category":"Chemistry","motivation":"for his contribution to the understanding of biological energy transfer through the formulation of the chemiosmotic theory","prize_share":"1/1","laureate_type":"Individual","name":"Peter D. Mitchell","birth_date":"1920-09-29","birth_city":"Mitcham","birth_country":"United Kingdom","sex":"Male","organization_name":"Glynn Research Laboratories","organization_city":"Bodmin","organization_country":"United Kingdom"},{"year":1978,"category":"Economics","motivation":"for his pioneering research into the decision-making process within economic organizations","prize_share":"1/1","laureate_type":"Individual","name":"Herbert A. Simon","birth_date":"1916-06-15","birth_city":"Milwaukee, WI","birth_country":"United States","sex":"Male","organization_name":"Carnegie Mellon University","organization_city":"Pittsburgh, PA","organization_country":"United States"},{"year":1978,"category":"Literature","motivation":"for his impassioned narrative art which, with roots in a Polish-Jewish cultural tradition, brings universal human conditions to life","prize_share":"1/1","laureate_type":"Individual","name":"Isaac Bashevis Singer","birth_date":"1904-07-14","birth_city":"Leoncin","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1978,"category":"Medicine","motivation":"for the discovery of restriction enzymes and their application to problems of molecular genetics","prize_share":"1/3","laureate_type":"Individual","name":"Werner Arber","birth_date":"1929-06-03","birth_city":"Gr\xe4nichen","birth_country":"Switzerland","sex":"Male","organization_name":"Biozentrum der Universit\xe4t","organization_city":"Basel","organization_country":"Switzerland"},{"year":1978,"category":"Medicine","motivation":"for the discovery of restriction enzymes and their application to problems of molecular genetics","prize_share":"1/3","laureate_type":"Individual","name":"Daniel Nathans","birth_date":"1928-10-30","birth_city":"Wilmington, DE","birth_country":"United States","sex":"Male","organization_name":"Johns Hopkins University School of Medicine","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":1978,"category":"Medicine","motivation":"for the discovery of restriction enzymes and their application to problems of molecular genetics","prize_share":"1/3","laureate_type":"Individual","name":"Hamilton O. Smith","birth_date":"1931-08-23","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Johns Hopkins University School of Medicine","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":1978,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Mohamed Anwar al-Sadat","birth_date":"1918-12-25","birth_city":"Mit Abu al-Kawm","birth_country":"Egypt","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1978,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Menachem Begin","birth_date":"1913-08-16","birth_city":"Brest Litovsk","birth_country":"Belarus","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1978,"category":"Physics","motivation":"for his basic inventions and discoveries in the area of low-temperature physics","prize_share":"2/4","laureate_type":"Individual","name":"Pyotr Leonidovich Kapitsa","birth_date":"1894-07-09","birth_city":"Kronshtadt","birth_country":"Russia","sex":"Male","organization_name":"Academy of Sciences","organization_city":"Moscow","organization_country":"Russia"},{"year":1978,"category":"Physics","motivation":"for their discovery of cosmic microwave background radiation","prize_share":"1/4","laureate_type":"Individual","name":"Arno Allan Penzias","birth_date":"1933-04-26","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Bell Laboratories","organization_city":"Holmdel, NJ","organization_country":"United States"},{"year":1978,"category":"Physics","motivation":"for their discovery of cosmic microwave background radiation","prize_share":"1/4","laureate_type":"Individual","name":"Robert Woodrow Wilson","birth_date":"1936-01-10","birth_city":"Houston, TX","birth_country":"United States","sex":"Male","organization_name":"Bell Laboratories","organization_city":"Holmdel, NJ","organization_country":"United States"},{"year":1979,"category":"Chemistry","motivation":"for their development of the use of boron- and phosphorus-containing compounds, respectively, into important reagents in organic synthesis","prize_share":"1/2","laureate_type":"Individual","name":"Herbert C. Brown","birth_date":"1912-05-22","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Purdue University","organization_city":"West Lafayette, IN","organization_country":"United States"},{"year":1979,"category":"Chemistry","motivation":"for their development of the use of boron- and phosphorus-containing compounds, respectively, into important reagents in organic synthesis","prize_share":"1/2","laureate_type":"Individual","name":"Georg Wittig","birth_date":"1897-06-16","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"University of Heidelberg","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1979,"category":"Economics","motivation":"for their pioneering research into economic development research with particular consideration of the problems of developing countries","prize_share":"1/2","laureate_type":"Individual","name":"Theodore W. Schultz","birth_date":"1902-04-30","birth_city":"Arlington, SD","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1979,"category":"Economics","motivation":"for their pioneering research into economic development research with particular consideration of the problems of developing countries","prize_share":"1/2","laureate_type":"Individual","name":"Sir Arthur Lewis","birth_date":"1915-01-23","birth_city":"Castries","birth_country":"Saint Lucia","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1979,"category":"Literature","motivation":"for his poetry, which, against the background of Greek tradition, depicts with sensuous strength and intellectual clear-sightedness modern man\'s struggle for freedom and creativeness","prize_share":"1/1","laureate_type":"Individual","name":"Odysseus Elytis","birth_date":"1911-11-02","birth_city":"Ir\xe1klion","birth_country":"Greece","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1979,"category":"Medicine","motivation":"for the development of computer assisted tomography","prize_share":"1/2","laureate_type":"Individual","name":"Allan M. Cormack","birth_date":"1924-02-23","birth_city":"Johannesburg","birth_country":"South Africa","sex":"Male","organization_name":"Tufts University","organization_city":"Medford, MA","organization_country":"United States"},{"year":1979,"category":"Medicine","motivation":"for the development of computer assisted tomography","prize_share":"1/2","laureate_type":"Individual","name":"Godfrey N. Hounsfield","birth_date":"1919-08-28","birth_city":"Newark","birth_country":"United Kingdom","sex":"Male","organization_name":"Central Research Laboratories, EMI","organization_city":"London","organization_country":"United Kingdom"},{"year":1979,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Mother Teresa","birth_date":"1910-08-26","birth_city":"Uskup (Skopje)","birth_country":"Macedonia","sex":"Female","organization_name":"","organization_city":"","organization_country":"India"},{"year":1979,"category":"Physics","motivation":"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current","prize_share":"1/3","laureate_type":"Individual","name":"Sheldon Lee Glashow","birth_date":"1932-12-05","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University, Lyman Laboratory","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1979,"category":"Physics","motivation":"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current","prize_share":"1/3","laureate_type":"Individual","name":"Abdus Salam","birth_date":"1926-01-29","birth_city":"Jhang Maghi&#257;na","birth_country":"Pakistan","sex":"Male","organization_name":"International Centre for Theoretical Physics","organization_city":"Trieste","organization_country":"Italy"},{"year":1979,"category":"Physics","motivation":"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current","prize_share":"1/3","laureate_type":"Individual","name":"Steven Weinberg","birth_date":"1933-05-03","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1980,"category":"Chemistry","motivation":"for their contributions concerning the determination of base sequences in nucleic acids","prize_share":"1/4","laureate_type":"Individual","name":"Frederick Sanger","birth_date":"1918-08-13","birth_city":"Rendcombe","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1980,"category":"Chemistry","motivation":"for his fundamental studies of the biochemistry of nucleic acids, with particular regard to recombinant-DNA","prize_share":"2/4","laureate_type":"Individual","name":"Paul Berg","birth_date":"1926-06-30","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1980,"category":"Chemistry","motivation":"for their contributions concerning the determination of base sequences in nucleic acids","prize_share":"1/4","laureate_type":"Individual","name":"Walter Gilbert","birth_date":"1932-03-21","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"Harvard University, Biological Laboratories","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1980,"category":"Economics","motivation":"for the creation of econometric models and the application to the analysis of economic fluctuations and economic policies","prize_share":"1/1","laureate_type":"Individual","name":"Lawrence R. Klein","birth_date":"1920-09-14","birth_city":"Omaha, NE","birth_country":"United States","sex":"Male","organization_name":"University of Pennsylvania","organization_city":"Philadelphia, PA","organization_country":"United States"},{"year":1980,"category":"Literature","motivation":"who with uncompromising clear-sightedness voices man\'s exposed condition in a world of severe conflicts","prize_share":"1/1","laureate_type":"Individual","name":"Czeslaw Milosz","birth_date":"1911-06-30","birth_city":"Šeteniai","birth_country":"Lithuania","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1980,"category":"Medicine","motivation":"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions","prize_share":"1/3","laureate_type":"Individual","name":"Baruj Benacerraf","birth_date":"1920-10-29","birth_city":"Caracas","birth_country":"Venezuela","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":1980,"category":"Medicine","motivation":"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions","prize_share":"1/3","laureate_type":"Individual","name":"Jean Dausset","birth_date":"1916-10-19","birth_city":"Toulouse","birth_country":"France","sex":"Male","organization_name":"Universit\xe9 de Paris, Laboratoire Immuno-H\xe9matologie","organization_city":"Paris","organization_country":"France"},{"year":1980,"category":"Medicine","motivation":"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions","prize_share":"1/3","laureate_type":"Individual","name":"George D. Snell","birth_date":"1903-12-19","birth_city":"Bradford, MA","birth_country":"United States","sex":"Male","organization_name":"Jackson Laboratory","organization_city":"Bar Harbor, ME","organization_country":"United States"},{"year":1980,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Adolfo P\xe9rez Esquivel","birth_date":"1931-11-26","birth_city":"Buenos Aires","birth_country":"Argentina","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1980,"category":"Physics","motivation":"for the discovery of violations of fundamental symmetry principles in the decay of neutral K-mesons","prize_share":"1/2","laureate_type":"Individual","name":"James Watson Cronin","birth_date":"1931-09-29","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1980,"category":"Physics","motivation":"for the discovery of violations of fundamental symmetry principles in the decay of neutral K-mesons","prize_share":"1/2","laureate_type":"Individual","name":"Val Logsdon Fitch","birth_date":"1923-03-10","birth_city":"Merriman, NE","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1981,"category":"Chemistry","motivation":"for their theories, developed independently, concerning the course of chemical reactions","prize_share":"1/2","laureate_type":"Individual","name":"Kenichi Fukui","birth_date":"1918-10-04","birth_city":"Nara","birth_country":"Japan","sex":"Male","organization_name":"Kyoto University","organization_city":"Kyoto","organization_country":"Japan"},{"year":1981,"category":"Chemistry","motivation":"for their theories, developed independently, concerning the course of chemical reactions","prize_share":"1/2","laureate_type":"Individual","name":"Roald Hoffmann","birth_date":"1937-07-18","birth_city":"Zloczov","birth_country":"Ukraine","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1981,"category":"Economics","motivation":"for his analysis of financial markets and their relations to expenditure decisions, employment, production and prices","prize_share":"1/1","laureate_type":"Individual","name":"James Tobin","birth_date":"1918-03-05","birth_city":"Champaign, IL","birth_country":"United States","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":1981,"category":"Literature","motivation":"for writings marked by a broad outlook, a wealth of ideas and artistic power","prize_share":"1/1","laureate_type":"Individual","name":"Elias Canetti","birth_date":"1905-07-25","birth_city":"Ruse","birth_country":"Bulgaria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1981,"category":"Medicine","motivation":"for his discoveries concerning the functional specialization of the cerebral hemispheres","prize_share":"2/4","laureate_type":"Individual","name":"Roger W. Sperry","birth_date":"1913-08-20","birth_city":"Hartford, CT","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1981,"category":"Medicine","motivation":"for their discoveries concerning information processing in the visual system","prize_share":"1/4","laureate_type":"Individual","name":"David H. Hubel","birth_date":"1926-02-27","birth_city":"Windsor, ON","birth_country":"Canada","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":1981,"category":"Medicine","motivation":"for their discoveries concerning information processing in the visual system","prize_share":"1/4","laureate_type":"Individual","name":"Torsten N. Wiesel","birth_date":"1924-06-03","birth_city":"Uppsala","birth_country":"Sweden","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":1981,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"Office of the United Nations High Commissioner for Refugees (UNHCR)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1981,"category":"Physics","motivation":"for their contribution to the development of laser spectroscopy","prize_share":"1/4","laureate_type":"Individual","name":"Nicolaas Bloembergen","birth_date":"1920-03-11","birth_city":"Dordrecht","birth_country":"Netherlands","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1981,"category":"Physics","motivation":"for their contribution to the development of laser spectroscopy","prize_share":"1/4","laureate_type":"Individual","name":"Arthur Leonard Schawlow","birth_date":"1921-05-05","birth_city":"Mount Verno, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1981,"category":"Physics","motivation":"for his contribution to the development of high-resolution electron spectroscopy","prize_share":"2/4","laureate_type":"Individual","name":"Kai M. Siegbahn","birth_date":"1918-04-20","birth_city":"Lund","birth_country":"Sweden","sex":"Male","organization_name":"Uppsala University","organization_city":"Uppsala","organization_country":"Sweden"},{"year":1982,"category":"Chemistry","motivation":"for his development of crystallographic electron microscopy and his structural elucidation of biologically important nucleic acid-protein complexes","prize_share":"1/1","laureate_type":"Individual","name":"Aaron Klug","birth_date":"1926-08-11","birth_city":"Zelvas","birth_country":"Lithuania","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1982,"category":"Economics","motivation":"for his seminal studies of industrial structures, functioning of markets and causes and effects of public regulation","prize_share":"1/1","laureate_type":"Individual","name":"George J. Stigler","birth_date":"1911-01-17","birth_city":"Renton, WA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1982,"category":"Literature","motivation":"for his novels and short stories, in which the fantastic and the realistic are combined in a richly composed world of imagination, reflecting a continent\'s life and conflicts","prize_share":"1/1","laureate_type":"Individual","name":"Gabriel Garc\xeda M\xe1rquez","birth_date":"1927-03-06","birth_city":"Aracataca","birth_country":"Colombia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1982,"category":"Medicine","motivation":"for their discoveries concerning prostaglandins and related biologically active substances","prize_share":"1/3","laureate_type":"Individual","name":"Sune K. Bergstr\xf6m","birth_date":"1916-01-10","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"Karolinska Institutet","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1982,"category":"Medicine","motivation":"for their discoveries concerning prostaglandins and related biologically active substances","prize_share":"1/3","laureate_type":"Individual","name":"Bengt I. Samuelsson","birth_date":"1934-05-21","birth_city":"Halmstad","birth_country":"Sweden","sex":"Male","organization_name":"Karolinska Institutet","organization_city":"Stockholm","organization_country":"Sweden"},{"year":1982,"category":"Medicine","motivation":"for their discoveries concerning prostaglandins and related biologically active substances","prize_share":"1/3","laureate_type":"Individual","name":"John R. Vane","birth_date":"1927-03-29","birth_city":"Tardebigg","birth_country":"United Kingdom","sex":"Male","organization_name":"The Wellcome Research Laboratories","organization_city":"Beckenham","organization_country":"United Kingdom"},{"year":1982,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Alva Myrdal","birth_date":"1902-01-31","birth_city":"Uppsala","birth_country":"Sweden","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1982,"category":"Peace","motivation":"","prize_share":"1/2","laureate_type":"Individual","name":"Alfonso Garc\xeda Robles","birth_date":"1911-03-20","birth_city":"Zamora","birth_country":"Mexico","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1982,"category":"Physics","motivation":"for his theory for critical phenomena in connection with phase transitions","prize_share":"1/1","laureate_type":"Individual","name":"Kenneth G. Wilson","birth_date":"1936-06-08","birth_city":"Waltham, MA","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1983,"category":"Chemistry","motivation":"for his work on the mechanisms of electron transfer reactions, especially in metal complexes","prize_share":"1/1","laureate_type":"Individual","name":"Henry Taube","birth_date":"1915-11-30","birth_city":"Neudorf","birth_country":"Canada","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1983,"category":"Economics","motivation":"for having incorporated new analytical methods into economic theory and for his rigorous reformulation of the theory of general equilibrium","prize_share":"1/1","laureate_type":"Individual","name":"Gerard Debreu","birth_date":"1921-07-04","birth_city":"Calais","birth_country":"France","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1983,"category":"Literature","motivation":"for his novels which, with the perspicuity of realistic narrative art and the diversity and universality of myth, illuminate the human condition in the world of today","prize_share":"1/1","laureate_type":"Individual","name":"William Golding","birth_date":"1911-09-19","birth_city":"St. Columb Minor","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1983,"category":"Medicine","motivation":"for her discovery of mobile genetic elements","prize_share":"1/1","laureate_type":"Individual","name":"Barbara McClintock","birth_date":"1902-06-16","birth_city":"Hartford, CT","birth_country":"United States","sex":"Female","organization_name":"Cold Spring Harbor Laboratory","organization_city":"Cold Spring Harbor, NY","organization_country":"United States"},{"year":1983,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Lech Walesa","birth_date":"1943-09-29","birth_city":"Popowo","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1983,"category":"Physics","motivation":"for his theoretical studies of the physical processes of importance to the structure and evolution of the stars","prize_share":"1/2","laureate_type":"Individual","name":"Subramanyan Chandrasekhar","birth_date":"1910-10-19","birth_city":"Lahore","birth_country":"Pakistan","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1983,"category":"Physics","motivation":"for his theoretical and experimental studies of the nuclear reactions of importance in the formation of the chemical elements in the universe","prize_share":"1/2","laureate_type":"Individual","name":"William Alfred Fowler","birth_date":"1911-08-09","birth_city":"Pittsburgh, PA","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1984,"category":"Chemistry","motivation":"for his development of methodology for chemical synthesis on a solid matrix","prize_share":"1/1","laureate_type":"Individual","name":"Robert Bruce Merrifield","birth_date":"1921-07-15","birth_city":"Fort Worth, TX","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1984,"category":"Economics","motivation":"for having made fundamental contributions to the development of systems of national accounts and hence greatly improved the basis for empirical economic analysis","prize_share":"1/1","laureate_type":"Individual","name":"Richard Stone","birth_date":"1913-08-30","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1984,"category":"Literature","motivation":"for his poetry which endowed with freshness, sensuality and rich inventiveness provides a liberating image of the indomitable spirit and versatility of man","prize_share":"1/1","laureate_type":"Individual","name":"Jaroslav Seifert","birth_date":"1901-09-23","birth_city":"Prague","birth_country":"Czech Republic","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1984,"category":"Medicine","motivation":"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies","prize_share":"1/3","laureate_type":"Individual","name":"Niels K. Jerne","birth_date":"1911-12-23","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Basel Institute for Immunology","organization_city":"Basel","organization_country":"Switzerland"},{"year":1984,"category":"Medicine","motivation":"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies","prize_share":"1/3","laureate_type":"Individual","name":"Georges J.F. K\xf6hler","birth_date":"1946-04-17","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Basel Institute for Immunology","organization_city":"Basel","organization_country":"Switzerland"},{"year":1984,"category":"Medicine","motivation":"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies","prize_share":"1/3","laureate_type":"Individual","name":"C\xe9sar Milstein","birth_date":"1927-10-08","birth_city":"Bahia Blanca","birth_country":"Argentina","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1984,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Desmond Mpilo Tutu","birth_date":"1931-10-07","birth_city":"Klerksdorp","birth_country":"South Africa","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1984,"category":"Physics","motivation":"for their decisive contributions to the large project, which led to the discovery of the field particles W and Z, communicators of weak interaction","prize_share":"1/2","laureate_type":"Individual","name":"Carlo Rubbia","birth_date":"1934-03-31","birth_city":"Gorizia","birth_country":"Italy","sex":"Male","organization_name":"CERN","organization_city":"Geneva","organization_country":"Switzerland"},{"year":1984,"category":"Physics","motivation":"for their decisive contributions to the large project, which led to the discovery of the field particles W and Z, communicators of weak interaction","prize_share":"1/2","laureate_type":"Individual","name":"Simon van der Meer","birth_date":"1925-11-24","birth_city":"the Hague","birth_country":"Netherlands","sex":"Male","organization_name":"CERN","organization_city":"Geneva","organization_country":"Switzerland"},{"year":1985,"category":"Chemistry","motivation":"for their outstanding achievements in the development of direct methods for the determination of crystal structures","prize_share":"1/2","laureate_type":"Individual","name":"Herbert A. Hauptman","birth_date":"1917-02-14","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"The Medical Foundation of Buffalo","organization_city":"Buffalo, NY","organization_country":"United States"},{"year":1985,"category":"Chemistry","motivation":"for their outstanding achievements in the development of direct methods for the determination of crystal structures","prize_share":"1/2","laureate_type":"Individual","name":"Jerome Karle","birth_date":"1918-06-18","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"US Naval Research Laboratory","organization_city":"Washington, DC","organization_country":"United States"},{"year":1985,"category":"Economics","motivation":"for his pioneering analyses of saving and of financial markets","prize_share":"1/1","laureate_type":"Individual","name":"Franco Modigliani","birth_date":"1918-06-18","birth_city":"Rome","birth_country":"Italy","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1985,"category":"Literature","motivation":"who in his novel combines the poet\'s and the painter\'s creativeness with a deepened awareness of time in the depiction of the human condition","prize_share":"1/1","laureate_type":"Individual","name":"Claude Simon","birth_date":"1913-10-10","birth_city":"Tananarive (Antananarivo)","birth_country":"Madagascar","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1985,"category":"Medicine","motivation":"for their discoveries concerning the regulation of cholesterol metabolism","prize_share":"1/2","laureate_type":"Individual","name":"Michael S. Brown","birth_date":"1941-04-13","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University of Texas Southwestern Medical Center at Dallas","organization_city":"Dallas, TX","organization_country":"United States"},{"year":1985,"category":"Medicine","motivation":"for their discoveries concerning the regulation of cholesterol metabolism","prize_share":"1/2","laureate_type":"Individual","name":"Joseph L. Goldstein","birth_date":"1940-04-18","birth_city":"Sumter, SC","birth_country":"United States","sex":"Male","organization_name":"University of Texas Southwestern Medical Center at Dallas","organization_city":"Dallas, TX","organization_country":"United States"},{"year":1985,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"International Physicians for the Prevention of Nuclear War","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1985,"category":"Physics","motivation":"for the discovery of the quantized Hall effect","prize_share":"1/1","laureate_type":"Individual","name":"Klaus von Klitzing","birth_date":"1943-06-28","birth_city":"Schroda","birth_country":"Poland","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Festk\xf6rperforschung","organization_city":"Stuttgart","organization_country":"Germany"},{"year":1986,"category":"Chemistry","motivation":"for their contributions concerning the dynamics of chemical elementary processes","prize_share":"1/3","laureate_type":"Individual","name":"Dudley R. Herschbach","birth_date":"1932-06-18","birth_city":"San Jos\xe9, CA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1986,"category":"Chemistry","motivation":"for their contributions concerning the dynamics of chemical elementary processes","prize_share":"1/3","laureate_type":"Individual","name":"Yuan T. Lee","birth_date":"1936-11-19","birth_city":"Hsinchu","birth_country":"Taiwan","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1986,"category":"Chemistry","motivation":"for their contributions concerning the dynamics of chemical elementary processes","prize_share":"1/3","laureate_type":"Individual","name":"John C. Polanyi","birth_date":"1929-01-23","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"University of Toronto","organization_city":"Toronto","organization_country":"Canada"},{"year":1986,"category":"Economics","motivation":"for his development of the contractual and constitutional bases for the theory of economic and political decision-making","prize_share":"1/1","laureate_type":"Individual","name":"James M. Buchanan Jr.","birth_date":"1919-10-03","birth_city":"Murfreesboro, TN","birth_country":"United States","sex":"Male","organization_name":"Center for Study of Public Choice","organization_city":"Fairfax, VA","organization_country":"United States"},{"year":1986,"category":"Literature","motivation":"who in a wide cultural perspective and with poetic overtones fashions the drama of existence","prize_share":"1/1","laureate_type":"Individual","name":"Wole Soyinka","birth_date":"1934-07-13","birth_city":"Abeokuta","birth_country":"Nigeria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1986,"category":"Medicine","motivation":"for their discoveries of growth factors","prize_share":"1/2","laureate_type":"Individual","name":"Stanley Cohen","birth_date":"1922-11-17","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"Vanderbilt University School of Medicine","organization_city":"Nashville, TN","organization_country":"United States"},{"year":1986,"category":"Medicine","motivation":"for their discoveries of growth factors","prize_share":"1/2","laureate_type":"Individual","name":"Rita Levi-Montalcini","birth_date":"1909-04-22","birth_city":"Turin","birth_country":"Italy","sex":"Female","organization_name":"Institute of Cell Biology of the C.N.R.","organization_city":"Rome","organization_country":"Italy"},{"year":1986,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Individual","name":"Elie Wiesel","birth_date":"1928-09-30","birth_city":"Sighet","birth_country":"Romania","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1986,"category":"Physics","motivation":"for his fundamental work in electron optics, and for the design of the first electron microscope","prize_share":"2/4","laureate_type":"Individual","name":"Ernst Ruska","birth_date":"1906-12-25","birth_city":"Heidelberg","birth_country":"Germany","sex":"Male","organization_name":"Fritz-Haber-Institut der Max-Planck-Gesellschaft","organization_city":"Berlin","organization_country":"Germany"},{"year":1986,"category":"Physics","motivation":"for their design of the scanning tunneling microscope","prize_share":"1/4","laureate_type":"Individual","name":"Gerd Binnig","birth_date":"1947-07-20","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"IBM Zurich Research Laboratory","organization_city":"R\xfcschlikon","organization_country":"Switzerland"},{"year":1986,"category":"Physics","motivation":"for their design of the scanning tunneling microscope","prize_share":"1/4","laureate_type":"Individual","name":"Heinrich Rohrer","birth_date":"1933-06-06","birth_city":"Buchs","birth_country":"Switzerland","sex":"Male","organization_name":"IBM Zurich Research Laboratory","organization_city":"R\xfcschlikon","organization_country":"Switzerland"},{"year":1987,"category":"Chemistry","motivation":"for their development and use of molecules with structure-specific interactions of high selectivity","prize_share":"1/3","laureate_type":"Individual","name":"Donald J. Cram","birth_date":"1919-04-22","birth_city":"Chester, VT","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":1987,"category":"Chemistry","motivation":"for their development and use of molecules with structure-specific interactions of high selectivity","prize_share":"1/3","laureate_type":"Individual","name":"Jean-Marie Lehn","birth_date":"1939-09-30","birth_city":"Rosheim","birth_country":"France","sex":"Male","organization_name":"Universit\xe9 Louis Pasteur","organization_city":"Strasbourg","organization_country":"France"},{"year":1987,"category":"Chemistry","motivation":"for their development and use of molecules with structure-specific interactions of high selectivity","prize_share":"1/3","laureate_type":"Individual","name":"Charles J. Pedersen","birth_date":"1904-10-03","birth_city":"Pusan","birth_country":"South Korea","sex":"Male","organization_name":"Du Pont","organization_city":"Wilmington, DE","organization_country":"United States"},{"year":1987,"category":"Economics","motivation":"for his contributions to the theory of economic growth","prize_share":"1/1","laureate_type":"Individual","name":"Robert M. Solow","birth_date":"1924-08-23","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1987,"category":"Literature","motivation":"for an all-embracing authorship, imbued with clarity of thought and poetic intensity","prize_share":"1/1","laureate_type":"Individual","name":"Joseph Brodsky","birth_date":"1940-05-24","birth_city":"Leningrad (Saint Petersburg)","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1987,"category":"Medicine","motivation":"for his discovery of the genetic principle for generation of antibody diversity","prize_share":"1/1","laureate_type":"Individual","name":"Susumu Tonegawa","birth_date":"1939-09-06","birth_city":"Nagoya","birth_country":"Japan","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1987,"category":"Peace","motivation":"for his work for peace in Central America, efforts which led to the accord signed in Guatemala on August 7 this year","prize_share":"1/1","laureate_type":"Individual","name":"Oscar Arias S\xe1nchez","birth_date":"1941-09-13","birth_city":"Heredia","birth_country":"Costa Rica","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1987,"category":"Physics","motivation":"for their important break-through in the discovery of superconductivity in ceramic materials","prize_share":"1/2","laureate_type":"Individual","name":"J. Georg Bednorz","birth_date":"1950-05-16","birth_city":"Neuenkirchen","birth_country":"Germany","sex":"Male","organization_name":"IBM Zurich Research Laboratory","organization_city":"R\xfcschlikon","organization_country":"Switzerland"},{"year":1987,"category":"Physics","motivation":"for their important break-through in the discovery of superconductivity in ceramic materials","prize_share":"1/2","laureate_type":"Individual","name":"K. Alexander M\xfcller","birth_date":"1927-04-20","birth_city":"Basel","birth_country":"Switzerland","sex":"Male","organization_name":"IBM Zurich Research Laboratory","organization_city":"R\xfcschlikon","organization_country":"Switzerland"},{"year":1988,"category":"Chemistry","motivation":"for the determination of the three-dimensional structure of a photosynthetic reaction centre","prize_share":"1/3","laureate_type":"Individual","name":"Johann Deisenhofer","birth_date":"1943-09-30","birth_city":"Zusamaltheim","birth_country":"Germany","sex":"Male","organization_name":"University of Texas Southwestern Medical Center at Dallas","organization_city":"Dallas, TX","organization_country":"United States"},{"year":1988,"category":"Chemistry","motivation":"for the determination of the three-dimensional structure of a photosynthetic reaction centre","prize_share":"1/3","laureate_type":"Individual","name":"Robert Huber","birth_date":"1937-02-20","birth_city":"Munich","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Biochemie","organization_city":"Martinsried","organization_country":"Germany"},{"year":1988,"category":"Chemistry","motivation":"for the determination of the three-dimensional structure of a photosynthetic reaction centre","prize_share":"1/3","laureate_type":"Individual","name":"Hartmut Michel","birth_date":"1948-07-18","birth_city":"Ludwigsburg","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Biophysik","organization_city":"Frankfurt-on-the-Main","organization_country":"Germany"},{"year":1988,"category":"Economics","motivation":"for his pioneering contributions to the theory of markets and efficient utilization of resources","prize_share":"1/1","laureate_type":"Individual","name":"Maurice Allais","birth_date":"1911-05-31","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"\xc9cole Nationale Sup\xe9rieur des Mines de Paris","organization_city":"Paris","organization_country":"France"},{"year":1988,"category":"Literature","motivation":"who, through works rich in nuance - now clear-sightedly realistic, now evocatively ambiguous - has formed an Arabian narrative art that applies to all mankind","prize_share":"1/1","laureate_type":"Individual","name":"Naguib Mahfouz","birth_date":"1911-12-11","birth_city":"Cairo","birth_country":"Egypt","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1988,"category":"Medicine","motivation":"for their discoveries of important principles for drug treatment","prize_share":"1/3","laureate_type":"Individual","name":"Sir James W. Black","birth_date":"1924-06-14","birth_city":"Uddingston","birth_country":"United Kingdom","sex":"Male","organization_name":"London University, King\'s College Hospital Medical School","organization_city":"London","organization_country":"United Kingdom"},{"year":1988,"category":"Medicine","motivation":"for their discoveries of important principles for drug treatment","prize_share":"1/3","laureate_type":"Individual","name":"Gertrude B. Elion","birth_date":"1918-01-23","birth_city":"New York, NY","birth_country":"United States","sex":"Female","organization_name":"Wellcome Research Laboratories","organization_city":"Research Triangle Park, NC","organization_country":"United States"},{"year":1988,"category":"Medicine","motivation":"for their discoveries of important principles for drug treatment","prize_share":"1/3","laureate_type":"Individual","name":"George H. Hitchings","birth_date":"1905-04-18","birth_city":"Hoquiam, WA","birth_country":"United States","sex":"Male","organization_name":"Wellcome Research Laboratories","organization_city":"Research Triangle Park, NC","organization_country":"United States"},{"year":1988,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"United Nations Peacekeeping Forces","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1988,"category":"Physics","motivation":"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino","prize_share":"1/3","laureate_type":"Individual","name":"Leon M. Lederman","birth_date":"1922-07-15","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Fermi National Accelerator Laboratory","organization_city":"Batavia, IL","organization_country":"United States"},{"year":1988,"category":"Physics","motivation":"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino","prize_share":"1/3","laureate_type":"Individual","name":"Melvin Schwartz","birth_date":"1932-11-02","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Digital Pathways, Inc.","organization_city":"Mountain View, CA","organization_country":"United States"},{"year":1988,"category":"Physics","motivation":"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino","prize_share":"1/3","laureate_type":"Individual","name":"Jack Steinberger","birth_date":"1921-05-25","birth_city":"Bad Kissingen","birth_country":"Germany","sex":"Male","organization_name":"CERN","organization_city":"Geneva","organization_country":"Switzerland"},{"year":1989,"category":"Chemistry","motivation":"for their discovery of catalytic properties of RNA","prize_share":"1/2","laureate_type":"Individual","name":"Sidney Altman","birth_date":"1939-05-07","birth_city":"Montreal","birth_country":"Canada","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":1989,"category":"Chemistry","motivation":"for their discovery of catalytic properties of RNA","prize_share":"1/2","laureate_type":"Individual","name":"Thomas R. Cech","birth_date":"1947-12-08","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"University of Colorado","organization_city":"Boulder, CO","organization_country":"United States"},{"year":1989,"category":"Economics","motivation":"for his clarification of the probability theory foundations of econometrics and his analyses of simultaneous economic structures","prize_share":"1/1","laureate_type":"Individual","name":"Trygve Haavelmo","birth_date":"1911-12-13","birth_city":"Skedsmo","birth_country":"Norway","sex":"Male","organization_name":"University of Oslo","organization_city":"Oslo","organization_country":"Norway"},{"year":1989,"category":"Literature","motivation":"for a rich and intensive prose, which with restrained compassion forms a challenging vision of man\'s vulnerability","prize_share":"1/1","laureate_type":"Individual","name":"Camilo Jos\xe9 Cela","birth_date":"1916-05-11","birth_city":"Iria Flavia","birth_country":"Spain","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1989,"category":"Medicine","motivation":"for their discovery of the cellular origin of retroviral oncogenes","prize_share":"1/2","laureate_type":"Individual","name":"J. Michael Bishop","birth_date":"1936-02-22","birth_city":"York, PA","birth_country":"United States","sex":"Male","organization_name":"University of California School of Medicine","organization_city":"San Francisco, CA","organization_country":"United States"},{"year":1989,"category":"Medicine","motivation":"for their discovery of the cellular origin of retroviral oncogenes","prize_share":"1/2","laureate_type":"Individual","name":"Harold E. Varmus","birth_date":"1939-12-18","birth_city":"Oceanside, NY","birth_country":"United States","sex":"Male","organization_name":"University of California School of Medicine","organization_city":"San Francisco, CA","organization_country":"United States"},{"year":1989,"category":"Peace","motivation":"","prize_share":"1/1","laureate_type":"Organization","name":"The 14th Dalai Lama (Tenzin Gyatso)","birth_date":"1935-07-06","birth_city":"Taktser","birth_country":"China","sex":"Male","organization_name":"","organization_city":"","organization_country":"Tibet"},{"year":1989,"category":"Physics","motivation":"for the invention of the separated oscillatory fields method and its use in the hydrogen maser and other atomic clocks","prize_share":"2/4","laureate_type":"Individual","name":"Norman F. Ramsey","birth_date":"1915-08-27","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1989,"category":"Physics","motivation":"for the development of the ion trap technique","prize_share":"1/4","laureate_type":"Individual","name":"Hans G. Dehmelt","birth_date":"1922-09-09","birth_city":"G\xf6rlitz","birth_country":"Germany","sex":"Male","organization_name":"University of Washington","organization_city":"Seattle, WA","organization_country":"United States"},{"year":1989,"category":"Physics","motivation":"for the development of the ion trap technique","prize_share":"1/4","laureate_type":"Individual","name":"Wolfgang Paul","birth_date":"1913-08-10","birth_city":"Lorenzkirch","birth_country":"Germany","sex":"Male","organization_name":"University of Bonn","organization_city":"Bonn","organization_country":"Germany"},{"year":1990,"category":"Chemistry","motivation":"for his development of the theory and methodology of organic synthesis","prize_share":"1/1","laureate_type":"Individual","name":"Elias James Corey","birth_date":"1928-07-12","birth_city":"Methuen, MA","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1990,"category":"Economics","motivation":"for their pioneering work in the theory of financial economics","prize_share":"1/3","laureate_type":"Individual","name":"Harry M. Markowitz","birth_date":"1927-08-24","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"City University of New York","organization_city":"New York, NY","organization_country":"United States"},{"year":1990,"category":"Economics","motivation":"for their pioneering work in the theory of financial economics","prize_share":"1/3","laureate_type":"Individual","name":"Merton H. Miller","birth_date":"1923-05-16","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1990,"category":"Economics","motivation":"for their pioneering work in the theory of financial economics","prize_share":"1/3","laureate_type":"Individual","name":"William F. Sharpe","birth_date":"1934-06-16","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1990,"category":"Literature","motivation":"for impassioned writing with wide horizons, characterized by sensuous intelligence and humanistic integrity","prize_share":"1/1","laureate_type":"Individual","name":"Octavio Paz","birth_date":"1914-03-31","birth_city":"Mexico City","birth_country":"Mexico","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1990,"category":"Medicine","motivation":"for their discoveries concerning organ and cell transplantation in the treatment of human disease","prize_share":"1/2","laureate_type":"Individual","name":"Joseph E. Murray","birth_date":"1919-04-01","birth_city":"Milford, MA","birth_country":"United States","sex":"Male","organization_name":"Brigham and Women\'s Hospital","organization_city":"Boston, MA","organization_country":"United States"},{"year":1990,"category":"Medicine","motivation":"for their discoveries concerning organ and cell transplantation in the treatment of human disease","prize_share":"1/2","laureate_type":"Individual","name":"E. Donnall Thomas","birth_date":"1920-03-15","birth_city":"Mart, TX","birth_country":"United States","sex":"Male","organization_name":"Fred Hutchinson Cancer Research Center","organization_city":"Seattle, WA","organization_country":"United States"},{"year":1990,"category":"Peace","motivation":"for his leading role in the peace process which today characterizes important parts of the international community","prize_share":"1/1","laureate_type":"Individual","name":"Mikhail Sergeyevich Gorbachev","birth_date":"1931-03-02","birth_city":"Privolnoye","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1990,"category":"Physics","motivation":"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics","prize_share":"1/3","laureate_type":"Individual","name":"Jerome I. Friedman","birth_date":"1930-03-28","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1990,"category":"Physics","motivation":"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics","prize_share":"1/3","laureate_type":"Individual","name":"Henry W. Kendall","birth_date":"1926-12-09","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1990,"category":"Physics","motivation":"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics","prize_share":"1/3","laureate_type":"Individual","name":"Richard E. Taylor","birth_date":"1929-11-02","birth_city":"Medicine Hat, Alberta","birth_country":"Canada","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1991,"category":"Chemistry","motivation":"for his contributions to the development of the methodology of high resolution nuclear magnetic resonance (NMR) spectroscopy","prize_share":"1/1","laureate_type":"Individual","name":"Richard R. Ernst","birth_date":"1933-08-14","birth_city":"Winterthur","birth_country":"Switzerland","sex":"Male","organization_name":"Eidgen\xf6ssische Technische Hochschule (Swiss Federal Institute of Technology)","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1991,"category":"Economics","motivation":"for his discovery and clarification of the significance of transaction costs and property rights for the institutional structure and functioning of the economy","prize_share":"1/1","laureate_type":"Individual","name":"Ronald H. Coase","birth_date":"1910-12-29","birth_city":"Willesden","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1991,"category":"Literature","motivation":"who through her magnificent epic writing has - in the words of Alfred Nobel - been of very great benefit to humanity","prize_share":"1/1","laureate_type":"Individual","name":"Nadine Gordimer","birth_date":"1923-11-20","birth_city":"Springs","birth_country":"South Africa","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1991,"category":"Medicine","motivation":"for their discoveries concerning the function of single ion channels in cells","prize_share":"1/2","laureate_type":"Individual","name":"Erwin Neher","birth_date":"1944-03-20","birth_city":"Landsberg","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Biophysikalische Chemie","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":1991,"category":"Medicine","motivation":"for their discoveries concerning the function of single ion channels in cells","prize_share":"1/2","laureate_type":"Individual","name":"Bert Sakmann","birth_date":"1942-06-12","birth_city":"Stuttgart","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr medizinische Forschung","organization_city":"Heidelberg","organization_country":"Germany"},{"year":1991,"category":"Peace","motivation":"for her non-violent struggle for democracy and human rights","prize_share":"1/1","laureate_type":"Organization","name":"Aung San Suu Kyi","birth_date":"1945-06-19","birth_city":"Rangoon (Yangon)","birth_country":"Burma","sex":"Female","organization_name":"","organization_city":"","organization_country":"Myanmar"},{"year":1991,"category":"Physics","motivation":"for discovering that methods developed for studying order phenomena in simple systems can be generalized to more complex forms of matter, in particular to liquid crystals and polymers","prize_share":"1/1","laureate_type":"Individual","name":"Pierre-Gilles de Gennes","birth_date":"1932-10-24","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"Coll\xe8ge de France","organization_city":"Paris","organization_country":"France"},{"year":1992,"category":"Chemistry","motivation":"for his contributions to the theory of electron transfer reactions in chemical systems","prize_share":"1/1","laureate_type":"Individual","name":"Rudolph A. Marcus","birth_date":"1923-07-21","birth_city":"Montreal","birth_country":"Canada","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1992,"category":"Economics","motivation":"for having extended the domain of microeconomic analysis to a wide range of human behaviour and interaction, including nonmarket behaviour","prize_share":"1/1","laureate_type":"Individual","name":"Gary S. Becker","birth_date":"1930-12-02","birth_city":"Pottsville, PA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1992,"category":"Literature","motivation":"for a poetic oeuvre of great luminosity, sustained by a historical vision, the outcome of a multicultural commitment","prize_share":"1/1","laureate_type":"Individual","name":"Derek Walcott","birth_date":"1930-01-23","birth_city":"Castries","birth_country":"Saint Lucia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1992,"category":"Medicine","motivation":"for their discoveries concerning reversible protein phosphorylation as a biological regulatory mechanism","prize_share":"1/2","laureate_type":"Individual","name":"Edmond H. Fischer","birth_date":"1920-04-06","birth_city":"Shanghai","birth_country":"China","sex":"Male","organization_name":"University of Washington","organization_city":"Seattle, WA","organization_country":"United States"},{"year":1992,"category":"Medicine","motivation":"for their discoveries concerning reversible protein phosphorylation as a biological regulatory mechanism","prize_share":"1/2","laureate_type":"Individual","name":"Edwin G. Krebs","birth_date":"1918-06-06","birth_city":"Lansing, IA","birth_country":"United States","sex":"Male","organization_name":"University of Washington","organization_city":"Seattle, WA","organization_country":"United States"},{"year":1992,"category":"Peace","motivation":"in recognition of her work for social justice and ethno-cultural reconciliation based on respect for the rights of indigenous peoples","prize_share":"1/1","laureate_type":"Individual","name":"Rigoberta Mench\xfa Tum","birth_date":"1959-01-09","birth_city":"Aldea Chimel","birth_country":"Guatemala","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1992,"category":"Physics","motivation":"for his invention and development of particle detectors, in particular the multiwire proportional chamber","prize_share":"1/1","laureate_type":"Individual","name":"Georges Charpak","birth_date":"1924-08-01","birth_city":"Dabrovica","birth_country":"Poland","sex":"Male","organization_name":"\xc9cole Sup\xe9rieure de Physique et Chimie","organization_city":"Paris","organization_country":"France"},{"year":1993,"category":"Chemistry","motivation":"for contributions to the developments of methods within DNA-based chemistry; for his invention of the polymerase chain reaction (PCR) method","prize_share":"1/2","laureate_type":"Individual","name":"Kary B. Mullis","birth_date":"1944-12-28","birth_city":"Lenoir, NC","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"La Jolla, CA","organization_country":"United States"},{"year":1993,"category":"Chemistry","motivation":"for contributions to the developments of methods within DNA-based chemistry; for his fundamental contributions to the establishment of oligonucleotide-based, site-directed mutagenesis and its development for protein studies","prize_share":"1/2","laureate_type":"Individual","name":"Michael Smith","birth_date":"1932-04-26","birth_city":"Blackpool","birth_country":"United Kingdom","sex":"Male","organization_name":"University of British Columbia","organization_city":"Vancouver","organization_country":"Canada"},{"year":1993,"category":"Economics","motivation":"for having renewed research in economic history by applying economic theory and quantitative methods in order to explain economic and institutional change","prize_share":"1/2","laureate_type":"Individual","name":"Robert W. Fogel","birth_date":"1927-07-01","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1993,"category":"Economics","motivation":"for having renewed research in economic history by applying economic theory and quantitative methods in order to explain economic and institutional change","prize_share":"1/2","laureate_type":"Individual","name":"Douglass C. North","birth_date":"1920-11-05","birth_city":"Cambridge, MA","birth_country":"United States","sex":"Male","organization_name":"Washington University","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":1993,"category":"Literature","motivation":"who in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality","prize_share":"1/1","laureate_type":"Individual","name":"Toni Morrison","birth_date":"1931-02-18","birth_city":"Lorain, OH","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1993,"category":"Medicine","motivation":"for their discoveries of split genes","prize_share":"1/2","laureate_type":"Individual","name":"Richard J. Roberts","birth_date":"1943-09-06","birth_city":"Derby","birth_country":"United Kingdom","sex":"Male","organization_name":"New England Biolabs","organization_city":"Beverly, MA","organization_country":"United States"},{"year":1993,"category":"Medicine","motivation":"for their discoveries of split genes","prize_share":"1/2","laureate_type":"Individual","name":"Phillip A. Sharp","birth_date":"1944-06-06","birth_city":"Falmouth, KY","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT), Center for Cancer Research","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1993,"category":"Peace","motivation":"for their work for the peaceful termination of the apartheid regime, and for laying the foundations for a new democratic South Africa","prize_share":"1/2","laureate_type":"Individual","name":"Nelson Mandela","birth_date":"1918-07-18","birth_city":"Qunu","birth_country":"South Africa","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1993,"category":"Peace","motivation":"for their work for the peaceful termination of the apartheid regime, and for laying the foundations for a new democratic South Africa","prize_share":"1/2","laureate_type":"Individual","name":"Frederik Willem de Klerk","birth_date":"1936-03-18","birth_city":"Johannesburg","birth_country":"South Africa","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1993,"category":"Physics","motivation":"for the discovery of a new type of pulsar, a discovery that has opened up new possibilities for the study of gravitation","prize_share":"1/2","laureate_type":"Individual","name":"Russell A. Hulse","birth_date":"1950-11-28","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1993,"category":"Physics","motivation":"for the discovery of a new type of pulsar, a discovery that has opened up new possibilities for the study of gravitation","prize_share":"1/2","laureate_type":"Individual","name":"Joseph H. Taylor Jr.","birth_date":"1941-03-29","birth_city":"Philadelphia, PA","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1994,"category":"Chemistry","motivation":"for his contribution to carbocation chemistry","prize_share":"1/1","laureate_type":"Individual","name":"George A. Olah","birth_date":"1927-05-22","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"University of Southern California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":1994,"category":"Economics","motivation":"for their pioneering analysis of equilibria in the theory of non-cooperative games","prize_share":"1/3","laureate_type":"Individual","name":"John C. Harsanyi","birth_date":"1920-05-29","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":1994,"category":"Economics","motivation":"for their pioneering analysis of equilibria in the theory of non-cooperative games","prize_share":"1/3","laureate_type":"Individual","name":"John F. Nash Jr.","birth_date":"1928-06-13","birth_city":"Bluefield, WV","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1994,"category":"Economics","motivation":"for their pioneering analysis of equilibria in the theory of non-cooperative games","prize_share":"1/3","laureate_type":"Individual","name":"Reinhard Selten","birth_date":"1930-10-05","birth_city":"Breslau (Wroclaw)","birth_country":"Poland","sex":"Male","organization_name":"Rheinische Friedrich-Wilhelms-Universit\xe4t","organization_city":"Bonn","organization_country":"Germany"},{"year":1994,"category":"Literature","motivation":"who with poetic force creates an imagined world, where life and myth condense to form a disconcerting picture of the human predicament today","prize_share":"1/1","laureate_type":"Individual","name":"Kenzaburo Oe","birth_date":"1935-01-31","birth_city":"Uchiko","birth_country":"Japan","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1994,"category":"Medicine","motivation":"for their discovery of G-proteins and the role of these proteins in signal transduction in cells","prize_share":"1/2","laureate_type":"Individual","name":"Alfred G. Gilman","birth_date":"1941-07-01","birth_city":"New Haven, CT","birth_country":"United States","sex":"Male","organization_name":"University of Texas Southwestern Medical Center at Dallas","organization_city":"Dallas, TX","organization_country":"United States"},{"year":1994,"category":"Medicine","motivation":"for their discovery of G-proteins and the role of these proteins in signal transduction in cells","prize_share":"1/2","laureate_type":"Individual","name":"Martin Rodbell","birth_date":"1925-12-01","birth_city":"Baltimore, MD","birth_country":"United States","sex":"Male","organization_name":"National Institute of Environmental Health Sciences","organization_city":"Research Triangle Park, NC","organization_country":"United States"},{"year":1994,"category":"Peace","motivation":"for their efforts to create peace in the Middle East","prize_share":"1/3","laureate_type":"Individual","name":"Yasser Arafat","birth_date":"1929-08-24","birth_city":"Cairo","birth_country":"Egypt","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1994,"category":"Peace","motivation":"for their efforts to create peace in the Middle East","prize_share":"1/3","laureate_type":"Individual","name":"Shimon Peres","birth_date":"1923-08-16","birth_city":"Vishneva","birth_country":"Belarus","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1994,"category":"Peace","motivation":"for their efforts to create peace in the Middle East","prize_share":"1/3","laureate_type":"Individual","name":"Yitzhak Rabin","birth_date":"1922-03-01","birth_city":"Jerusalem","birth_country":"Israel","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1994,"category":"Physics","motivation":"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter; for the development of neutron spectroscopy","prize_share":"1/2","laureate_type":"Individual","name":"Bertram N. Brockhouse","birth_date":"1918-07-15","birth_city":"Lethbridge, Alberta","birth_country":"Canada","sex":"Male","organization_name":"McMaster University","organization_city":"Hamilton, Ontario","organization_country":"Canada"},{"year":1994,"category":"Physics","motivation":"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter; for the development of the neutron diffraction technique","prize_share":"1/2","laureate_type":"Individual","name":"Clifford G. Shull","birth_date":"1915-09-23","birth_city":"Pittsburgh, PA","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1995,"category":"Chemistry","motivation":"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone","prize_share":"1/3","laureate_type":"Individual","name":"Paul J. Crutzen","birth_date":"1933-12-03","birth_city":"Amsterdam","birth_country":"Netherlands","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Chemie","organization_city":"Mainz","organization_country":"Germany"},{"year":1995,"category":"Chemistry","motivation":"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone","prize_share":"1/3","laureate_type":"Individual","name":"Mario J. Molina","birth_date":"1943-03-19","birth_city":"Mexico City","birth_country":"Mexico","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1995,"category":"Chemistry","motivation":"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone","prize_share":"1/3","laureate_type":"Individual","name":"F. Sherwood Rowland","birth_date":"1927-06-28","birth_city":"Delaware, OH","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Irvine, CA","organization_country":"United States"},{"year":1995,"category":"Economics","motivation":"for having developed and applied the hypothesis of rational expectations, and thereby having transformed macroeconomic analysis and deepened our understanding of economic policy","prize_share":"1/1","laureate_type":"Individual","name":"Robert E. Lucas Jr.","birth_date":"1937-09-15","birth_city":"Yakima, WA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":1995,"category":"Literature","motivation":"for works of lyrical beauty and ethical depth, which exalt everyday miracles and the living past","prize_share":"1/1","laureate_type":"Individual","name":"Seamus Heaney","birth_date":"1939-04-13","birth_city":"Casteld\xe0wson","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1995,"category":"Medicine","motivation":"for their discoveries concerning the genetic control of early embryonic development","prize_share":"1/3","laureate_type":"Individual","name":"Edward B. Lewis","birth_date":"1918-05-20","birth_city":"Wilkes-Barre, PA","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1995,"category":"Medicine","motivation":"for their discoveries concerning the genetic control of early embryonic development","prize_share":"1/3","laureate_type":"Individual","name":"Christiane N\xfcsslein-Volhard","birth_date":"1942-10-20","birth_city":"Magdeburg","birth_country":"Germany","sex":"Female","organization_name":"Max-Planck-Institut f\xfcr Entwicklungsbiologie","organization_city":"T\xfcbingen","organization_country":"Germany"},{"year":1995,"category":"Medicine","motivation":"for their discoveries concerning the genetic control of early embryonic development","prize_share":"1/3","laureate_type":"Individual","name":"Eric F. Wieschaus","birth_date":"1947-06-08","birth_city":"South Bend, IN","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1995,"category":"Peace","motivation":"for their efforts to diminish the part played by nuclear arms in international politics and, in the longer run, to eliminate such arms","prize_share":"1/2","laureate_type":"Organization","name":"Pugwash Conferences on Science and World Affairs","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1995,"category":"Peace","motivation":"for their efforts to diminish the part played by nuclear arms in international politics and, in the longer run, to eliminate such arms","prize_share":"1/2","laureate_type":"Individual","name":"Joseph Rotblat","birth_date":"1908-11-04","birth_city":"Warsaw","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1995,"category":"Physics","motivation":"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter; for the discovery of the tau lepton","prize_share":"1/2","laureate_type":"Individual","name":"Martin L. Perl","birth_date":"1927-06-24","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1995,"category":"Physics","motivation":"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter; for the detection of the neutrino","prize_share":"1/2","laureate_type":"Individual","name":"Frederick Reines","birth_date":"1918-03-16","birth_city":"Paterson, NJ","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Irvine, CA","organization_country":"United States"},{"year":1996,"category":"Chemistry","motivation":"for their discovery of fullerenes","prize_share":"1/3","laureate_type":"Individual","name":"Robert F. Curl Jr.","birth_date":"1933-08-23","birth_city":"Alice, TX","birth_country":"United States","sex":"Male","organization_name":"Rice University","organization_city":"Houston, TX","organization_country":"United States"},{"year":1996,"category":"Chemistry","motivation":"for their discovery of fullerenes","prize_share":"1/3","laureate_type":"Individual","name":"Sir Harold W. Kroto","birth_date":"1939-10-07","birth_city":"Wisbech","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Sussex","organization_city":"Brighton","organization_country":"United Kingdom"},{"year":1996,"category":"Chemistry","motivation":"for their discovery of fullerenes","prize_share":"1/3","laureate_type":"Individual","name":"Richard E. Smalley","birth_date":"1943-06-06","birth_city":"Akron, OH","birth_country":"United States","sex":"Male","organization_name":"Rice University","organization_city":"Houston, TX","organization_country":"United States"},{"year":1996,"category":"Economics","motivation":"for their fundamental contributions to the economic theory of incentives under asymmetric information","prize_share":"1/2","laureate_type":"Individual","name":"James A. Mirrlees","birth_date":"1936-07-05","birth_city":"Minnigaff","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1996,"category":"Economics","motivation":"for their fundamental contributions to the economic theory of incentives under asymmetric information","prize_share":"1/2","laureate_type":"Individual","name":"William Vickrey","birth_date":"1914-06-21","birth_city":"Victoria, BC","birth_country":"Canada","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1996,"category":"Literature","motivation":"for poetry that with ironic precision allows the historical and biological context to come to light in fragments of human reality","prize_share":"1/1","laureate_type":"Individual","name":"Wislawa Szymborska","birth_date":"1923-07-02","birth_city":"Bnin (K\xf3rnik)","birth_country":"Poland","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1996,"category":"Medicine","motivation":"for their discoveries concerning the specificity of the cell mediated immune defence","prize_share":"1/2","laureate_type":"Individual","name":"Peter C. Doherty","birth_date":"1940-10-15","birth_city":"Brisbane","birth_country":"Australia","sex":"Male","organization_name":"St. Jude Children\'s Research Hospital","organization_city":"Memphis, TN","organization_country":"United States"},{"year":1996,"category":"Medicine","motivation":"for their discoveries concerning the specificity of the cell mediated immune defence","prize_share":"1/2","laureate_type":"Individual","name":"Rolf M. Zinkernagel","birth_date":"1944-01-06","birth_city":"Basel","birth_country":"Switzerland","sex":"Male","organization_name":"University of Zurich, Institute of Experimental Immunology","organization_city":"Zurich","organization_country":"Switzerland"},{"year":1996,"category":"Peace","motivation":"for their work towards a just and peaceful solution to the conflict in East Timor","prize_share":"1/2","laureate_type":"Individual","name":"Carlos Filipe Ximenes Belo","birth_date":"1948-02-03","birth_city":"Wailacama","birth_country":"Timor-Leste","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1996,"category":"Peace","motivation":"for their work towards a just and peaceful solution to the conflict in East Timor","prize_share":"1/2","laureate_type":"Individual","name":"Jos\xe9 Ramos-Horta","birth_date":"1949-12-26","birth_city":"Dili","birth_country":"Timor-Leste","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1996,"category":"Physics","motivation":"for their discovery of superfluidity in helium-3","prize_share":"1/3","laureate_type":"Individual","name":"David M. Lee","birth_date":"1931-01-20","birth_city":"Rye, NY","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1996,"category":"Physics","motivation":"for their discovery of superfluidity in helium-3","prize_share":"1/3","laureate_type":"Individual","name":"Douglas D. Osheroff","birth_date":"1945-08-01","birth_city":"Aberdeen, WA","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1996,"category":"Physics","motivation":"for their discovery of superfluidity in helium-3","prize_share":"1/3","laureate_type":"Individual","name":"Robert C. Richardson","birth_date":"1937-06-26","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"Cornell University","organization_city":"Ithaca, NY","organization_country":"United States"},{"year":1997,"category":"Chemistry","motivation":"for their elucidation of the enzymatic mechanism underlying the synthesis of adenosine triphosphate (ATP)","prize_share":"1/4","laureate_type":"Individual","name":"Paul D. Boyer","birth_date":"1918-07-31","birth_city":"Provo, UT","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":1997,"category":"Chemistry","motivation":"for their elucidation of the enzymatic mechanism underlying the synthesis of adenosine triphosphate (ATP)","prize_share":"1/4","laureate_type":"Individual","name":"John E. Walker","birth_date":"1941-01-07","birth_city":"Halifax","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1997,"category":"Chemistry","motivation":"for the first discovery of an ion-transporting enzyme, Na+, K+ -ATPase","prize_share":"2/4","laureate_type":"Individual","name":"Jens C. Skou","birth_date":"1918-10-08","birth_city":"Lemvig","birth_country":"Denmark","sex":"Male","organization_name":"Aarhus University","organization_city":"Aarhus","organization_country":"Denmark"},{"year":1997,"category":"Economics","motivation":"for a new method to determine the value of derivatives","prize_share":"1/2","laureate_type":"Individual","name":"Robert C. Merton","birth_date":"1944-07-31","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":1997,"category":"Economics","motivation":"for a new method to determine the value of derivatives","prize_share":"1/2","laureate_type":"Individual","name":"Myron S. Scholes","birth_date":"1941-07-01","birth_city":"Timmins, ON","birth_country":"Canada","sex":"Male","organization_name":"Long Term Capital Management","organization_city":"Greenwich, CT","organization_country":"United States"},{"year":1997,"category":"Literature","motivation":"who emulates the jesters of the Middle Ages in scourging authority and upholding the dignity of the downtrodden","prize_share":"1/1","laureate_type":"Individual","name":"Dario Fo","birth_date":"1926-03-24","birth_city":"Leggiuno-Sangiano","birth_country":"Italy","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1997,"category":"Medicine","motivation":"for his discovery of Prions - a new biological principle of infection","prize_share":"1/1","laureate_type":"Individual","name":"Stanley B. Prusiner","birth_date":"1942-05-28","birth_city":"Des Moines, IA","birth_country":"United States","sex":"Male","organization_name":"University of California School of Medicine","organization_city":"San Francisco, CA","organization_country":"United States"},{"year":1997,"category":"Peace","motivation":"for their work for the banning and clearing of anti-personnel mines","prize_share":"1/2","laureate_type":"Organization","name":"International Campaign to Ban Landmines (ICBL)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1997,"category":"Peace","motivation":"for their work for the banning and clearing of anti-personnel mines","prize_share":"1/2","laureate_type":"Individual","name":"Jody Williams","birth_date":"1950-10-09","birth_city":"Putney, VT","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":1997,"category":"Physics","motivation":"for development of methods to cool and trap atoms with laser light","prize_share":"1/3","laureate_type":"Individual","name":"Steven Chu","birth_date":"1948-02-28","birth_city":"St. Louis, MO","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1997,"category":"Physics","motivation":"for development of methods to cool and trap atoms with laser light","prize_share":"1/3","laureate_type":"Individual","name":"Claude Cohen-Tannoudji","birth_date":"1933-04-01","birth_city":"Constantine","birth_country":"Algeria","sex":"Male","organization_name":"Coll\xe8ge de France","organization_city":"Paris","organization_country":"France"},{"year":1997,"category":"Physics","motivation":"for development of methods to cool and trap atoms with laser light","prize_share":"1/3","laureate_type":"Individual","name":"William D. Phillips","birth_date":"1948-11-05","birth_city":"Wilkes-Barre, PA","birth_country":"United States","sex":"Male","organization_name":"National Institute of Standards and Technology","organization_city":"Gaithersburg, MD","organization_country":"United States"},{"year":1998,"category":"Chemistry","motivation":"for his development of the density-functional theory","prize_share":"1/2","laureate_type":"Individual","name":"Walter Kohn","birth_date":"1923-03-09","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"University of California","organization_city":"Santa Barbara, CA","organization_country":"United States"},{"year":1998,"category":"Chemistry","motivation":"for his development of computational methods in quantum chemistry","prize_share":"1/2","laureate_type":"Individual","name":"John A. Pople","birth_date":"1925-10-31","birth_city":"Burnham-on-Sea","birth_country":"United Kingdom","sex":"Male","organization_name":"Northwestern University","organization_city":"Evanston, IL","organization_country":"United States"},{"year":1998,"category":"Economics","motivation":"for his contributions to welfare economics","prize_share":"1/1","laureate_type":"Individual","name":"Amartya Sen","birth_date":"1933-11-03","birth_city":"Santiniketan","birth_country":"India","sex":"Male","organization_name":"Trinity College","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":1998,"category":"Literature","motivation":"who with parables sustained by imagination, compassion and irony continually enables us once again to apprehend an elusory reality","prize_share":"1/1","laureate_type":"Individual","name":"Jos\xe9 Saramago","birth_date":"1922-11-16","birth_city":"Azinhaga","birth_country":"Portugal","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1998,"category":"Medicine","motivation":"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system","prize_share":"1/3","laureate_type":"Individual","name":"Robert F. Furchgott","birth_date":"1916-06-04","birth_city":"Charleston, SC","birth_country":"United States","sex":"Male","organization_name":"SUNY Health Science Center","organization_city":"Brooklyn, NY","organization_country":"United States"},{"year":1998,"category":"Medicine","motivation":"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system","prize_share":"1/3","laureate_type":"Individual","name":"Louis J. Ignarro","birth_date":"1941-05-31","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"University of California School of Medicine","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":1998,"category":"Medicine","motivation":"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system","prize_share":"1/3","laureate_type":"Individual","name":"Ferid Murad","birth_date":"1936-09-14","birth_city":"Whiting, IN","birth_country":"United States","sex":"Male","organization_name":"University of Texas Medical School at Houston","organization_city":"Houston, TX","organization_country":"United States"},{"year":1998,"category":"Peace","motivation":"for their efforts to find a peaceful solution to the conflict in Northern Ireland","prize_share":"1/2","laureate_type":"Individual","name":"John Hume","birth_date":"1937-01-18","birth_city":"Londonderry","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1998,"category":"Peace","motivation":"for their efforts to find a peaceful solution to the conflict in Northern Ireland","prize_share":"1/2","laureate_type":"Individual","name":"David Trimble","birth_date":"1944-10-15","birth_city":"Belfast","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1998,"category":"Physics","motivation":"for their discovery of a new form of quantum fluid with fractionally charged excitations","prize_share":"1/3","laureate_type":"Individual","name":"Robert B. Laughlin","birth_date":"1950-11-01","birth_city":"Visalia, CA","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":1998,"category":"Physics","motivation":"for their discovery of a new form of quantum fluid with fractionally charged excitations","prize_share":"1/3","laureate_type":"Individual","name":"Horst L. St\xf6rmer","birth_date":"1949-04-06","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1998,"category":"Physics","motivation":"for their discovery of a new form of quantum fluid with fractionally charged excitations","prize_share":"1/3","laureate_type":"Individual","name":"Daniel C. Tsui","birth_date":"1939-02-28","birth_city":"Henan","birth_country":"China","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":1999,"category":"Chemistry","motivation":"for his studies of the transition states of chemical reactions using femtosecond spectroscopy","prize_share":"1/1","laureate_type":"Individual","name":"Ahmed H. Zewail","birth_date":"1946-02-26","birth_city":"Damanhur","birth_country":"Egypt","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":1999,"category":"Economics","motivation":"for his analysis of monetary and fiscal policy under different exchange rate regimes and his analysis of optimum currency areas","prize_share":"1/1","laureate_type":"Individual","name":"Robert A. Mundell","birth_date":"1932-10-24","birth_city":"Kingston, ON","birth_country":"Canada","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":1999,"category":"Literature","motivation":"whose frolicsome black fables portray the forgotten face of history","prize_share":"1/1","laureate_type":"Individual","name":"G\xfcnter Grass","birth_date":"1927-10-16","birth_city":"Danzig (Gdansk)","birth_country":"Poland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":1999,"category":"Medicine","motivation":"for the discovery that proteins have intrinsic signals that govern their transport and localization in the cell","prize_share":"1/1","laureate_type":"Individual","name":"G\xfcnter Blobel","birth_date":"1936-05-21","birth_city":"Waltersdorf (Niegoslawice)","birth_country":"Poland","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":1999,"category":"Peace","motivation":"in recognition of the organization\'s pioneering humanitarian work on several continents","prize_share":"1/1","laureate_type":"Organization","name":"M\xe9decins Sans Fronti\xe8res","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":1999,"category":"Physics","motivation":"for elucidating the quantum structure of electroweak interactions in physics","prize_share":"1/2","laureate_type":"Individual","name":"Gerardus \'t Hooft","birth_date":"1946-07-05","birth_city":"Den Helder","birth_country":"Netherlands","sex":"Male","organization_name":"Utrecht University","organization_city":"Utrecht","organization_country":"Netherlands"},{"year":1999,"category":"Physics","motivation":"for elucidating the quantum structure of electroweak interactions in physics","prize_share":"1/2","laureate_type":"Individual","name":"Martinus J.G. Veltman","birth_date":"1931-06-27","birth_city":"Waalwijk","birth_country":"Netherlands","sex":"Male","organization_name":"","organization_city":"Bilthoven","organization_country":"Netherlands"},{"year":2000,"category":"Chemistry","motivation":"for the discovery and development of conductive polymers","prize_share":"1/3","laureate_type":"Individual","name":"Alan J. Heeger","birth_date":"1936-01-22","birth_city":"Sioux City, IA","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Santa Barbara, CA","organization_country":"United States"},{"year":2000,"category":"Chemistry","motivation":"for the discovery and development of conductive polymers","prize_share":"1/3","laureate_type":"Individual","name":"Alan G. MacDiarmid","birth_date":"1927-04-14","birth_city":"Masterton","birth_country":"New Zealand","sex":"Male","organization_name":"University of Pennsylvania","organization_city":"Philadelphia, PA","organization_country":"United States"},{"year":2000,"category":"Chemistry","motivation":"for the discovery and development of conductive polymers","prize_share":"1/3","laureate_type":"Individual","name":"Hideki Shirakawa","birth_date":"1936-08-20","birth_city":"Tokyo","birth_country":"Japan","sex":"Male","organization_name":"University of Tsukuba","organization_city":"Tokyo","organization_country":"Japan"},{"year":2000,"category":"Economics","motivation":"for his development of theory and methods for analyzing selective samples","prize_share":"1/2","laureate_type":"Individual","name":"James J. Heckman","birth_date":"1944-04-19","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2000,"category":"Economics","motivation":"for his development of theory and methods for analyzing discrete choice","prize_share":"1/2","laureate_type":"Individual","name":"Daniel L. McFadden","birth_date":"1937-07-29","birth_city":"Raleigh, NC","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2000,"category":"Literature","motivation":"for an \xe6uvre of universal validity, bitter insights and linguistic ingenuity, which has opened new paths for the Chinese novel and drama","prize_share":"1/1","laureate_type":"Individual","name":"Gao Xingjian","birth_date":"1940-01-04","birth_city":"Ganzhou","birth_country":"China","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2000,"category":"Medicine","motivation":"for their discoveries concerning signal transduction in the nervous system","prize_share":"1/3","laureate_type":"Individual","name":"Arvid Carlsson","birth_date":"1923-01-25","birth_city":"Uppsala","birth_country":"Sweden","sex":"Male","organization_name":"G\xf6teborg University","organization_city":"Gothenburg","organization_country":"Sweden"},{"year":2000,"category":"Medicine","motivation":"for their discoveries concerning signal transduction in the nervous system","prize_share":"1/3","laureate_type":"Individual","name":"Paul Greengard","birth_date":"1925-12-11","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":2000,"category":"Medicine","motivation":"for their discoveries concerning signal transduction in the nervous system","prize_share":"1/3","laureate_type":"Individual","name":"Eric R. Kandel","birth_date":"1929-11-07","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2000,"category":"Peace","motivation":"for his work for democracy and human rights in South Korea and in East Asia in general, and for peace and reconciliation with North Korea in particular","prize_share":"1/1","laureate_type":"Individual","name":"Kim Dae-jung","birth_date":"1925-12-03","birth_city":"Mokpo","birth_country":"South Korea","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2000,"category":"Physics","motivation":"for basic work on information and communication technology; for developing semiconductor heterostructures used in high-speed- and opto-electronics","prize_share":"1/4","laureate_type":"Individual","name":"Zhores I. Alferov","birth_date":"1930-03-15","birth_city":"Vitebsk, Belorussia","birth_country":"Belarus","sex":"Male","organization_name":"A.F. Ioffe Physico-Technical Institute","organization_city":"St. Petersburg","organization_country":"Russia"},{"year":2000,"category":"Physics","motivation":"for basic work on information and communication technology; for developing semiconductor heterostructures used in high-speed- and opto-electronics","prize_share":"1/4","laureate_type":"Individual","name":"Herbert Kroemer","birth_date":"1928-08-25","birth_city":"Weimar","birth_country":"Germany","sex":"Male","organization_name":"University of California","organization_city":"Santa Barbara, CA","organization_country":"United States"},{"year":2000,"category":"Physics","motivation":"for basic work on information and communication technology; for his part in the invention of the integrated circuit","prize_share":"2/4","laureate_type":"Individual","name":"Jack S. Kilby","birth_date":"1923-11-08","birth_city":"Jefferson City, MO","birth_country":"United States","sex":"Male","organization_name":"Texas Instruments","organization_city":"Dallas, TX","organization_country":"United States"},{"year":2001,"category":"Chemistry","motivation":"for their work on chirally catalysed hydrogenation reactions","prize_share":"1/4","laureate_type":"Individual","name":"William S. Knowles","birth_date":"1917-06-01","birth_city":"Taunton, MA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"St. Louis, MO","organization_country":"United States"},{"year":2001,"category":"Chemistry","motivation":"for their work on chirally catalysed hydrogenation reactions","prize_share":"1/4","laureate_type":"Individual","name":"Ryoji Noyori","birth_date":"1938-09-03","birth_city":"Kobe","birth_country":"Japan","sex":"Male","organization_name":"Nagoya University","organization_city":"Nagoya","organization_country":"Japan"},{"year":2001,"category":"Chemistry","motivation":"for his work on chirally catalysed oxidation reactions","prize_share":"2/4","laureate_type":"Individual","name":"K. Barry Sharpless","birth_date":"1941-04-28","birth_city":"Philadelphia, PA","birth_country":"United States","sex":"Male","organization_name":"The Scripps Research Institute","organization_city":"La Jolla, CA","organization_country":"United States"},{"year":2001,"category":"Economics","motivation":"for their analyses of markets with asymmetric information","prize_share":"1/3","laureate_type":"Individual","name":"George A. Akerlof","birth_date":"1940-06-17","birth_city":"New Haven, CT","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2001,"category":"Economics","motivation":"for their analyses of markets with asymmetric information","prize_share":"1/3","laureate_type":"Individual","name":"A. Michael Spence","birth_date":"1943-00-00","birth_city":"Montclair, NJ","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2001,"category":"Economics","motivation":"for their analyses of markets with asymmetric information","prize_share":"1/3","laureate_type":"Individual","name":"Joseph E. Stiglitz","birth_date":"1943-02-09","birth_city":"Gary, IN","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2001,"category":"Literature","motivation":"for having united perceptive narrative and incorruptible scrutiny in works that compel us to see the presence of suppressed histories","prize_share":"1/1","laureate_type":"Individual","name":"Sir Vidiadhar Surajprasad Naipaul","birth_date":"1932-08-17","birth_city":"Chaguanas","birth_country":"Trinidad and Tobago","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2001,"category":"Medicine","motivation":"for their discoveries of key regulators of the cell cycle","prize_share":"1/3","laureate_type":"Individual","name":"Leland H. Hartwell","birth_date":"1939-10-30","birth_city":"Los Angeles, CA","birth_country":"United States","sex":"Male","organization_name":"Fred Hutchinson Cancer Research Center","organization_city":"Seattle, WA","organization_country":"United States"},{"year":2001,"category":"Medicine","motivation":"for their discoveries of key regulators of the cell cycle","prize_share":"1/3","laureate_type":"Individual","name":"Tim Hunt","birth_date":"1943-02-19","birth_city":"Neston","birth_country":"United Kingdom","sex":"Male","organization_name":"Imperial Cancer Research Fund","organization_city":"London","organization_country":"United Kingdom"},{"year":2001,"category":"Medicine","motivation":"for their discoveries of key regulators of the cell cycle","prize_share":"1/3","laureate_type":"Individual","name":"Sir Paul M. Nurse","birth_date":"1949-01-25","birth_city":"Norwich","birth_country":"United Kingdom","sex":"Male","organization_name":"Imperial Cancer Research Fund","organization_city":"London","organization_country":"United Kingdom"},{"year":2001,"category":"Peace","motivation":"for their work for a better organized and more peaceful world","prize_share":"1/2","laureate_type":"Organization","name":"United Nations (U.N.)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2001,"category":"Peace","motivation":"for their work for a better organized and more peaceful world","prize_share":"1/2","laureate_type":"Individual","name":"Kofi Annan","birth_date":"1938-04-08","birth_city":"Kumasi","birth_country":"Ghana","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2001,"category":"Physics","motivation":"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates","prize_share":"1/3","laureate_type":"Individual","name":"Eric A. Cornell","birth_date":"1961-12-19","birth_city":"Palo Alto, CA","birth_country":"United States","sex":"Male","organization_name":"University of Colorado, JILA","organization_city":"Boulder, CO","organization_country":"United States"},{"year":2001,"category":"Physics","motivation":"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates","prize_share":"1/3","laureate_type":"Individual","name":"Wolfgang Ketterle","birth_date":"1957-10-21","birth_city":"Heidelberg","birth_country":"Germany","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2001,"category":"Physics","motivation":"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates","prize_share":"1/3","laureate_type":"Individual","name":"Carl E. Wieman","birth_date":"1951-03-26","birth_city":"Corvallis, OR","birth_country":"United States","sex":"Male","organization_name":"University of Colorado, JILA","organization_city":"Boulder, CO","organization_country":"United States"},{"year":2002,"category":"Chemistry","motivation":"for their development of soft desorption ionisation methods for mass spectrometric analyses of biological macromolecules","prize_share":"1/4","laureate_type":"Individual","name":"John B. Fenn","birth_date":"1917-06-15","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Virginia Commonwealth University","organization_city":"Richmond, VA","organization_country":"United States"},{"year":2002,"category":"Chemistry","motivation":"for their development of soft desorption ionisation methods for mass spectrometric analyses of biological macromolecules","prize_share":"1/4","laureate_type":"Individual","name":"Koichi Tanaka","birth_date":"1959-08-03","birth_city":"Toyama City","birth_country":"Japan","sex":"Male","organization_name":"Shimadzu Corp.","organization_city":"Kyoto","organization_country":"Japan"},{"year":2002,"category":"Chemistry","motivation":"for his development of nuclear magnetic resonance spectroscopy for determining the three-dimensional structure of biological macromolecules in solution","prize_share":"2/4","laureate_type":"Individual","name":"Kurt W\xfcthrich","birth_date":"1938-10-04","birth_city":"Aarberg","birth_country":"Switzerland","sex":"Male","organization_name":"Eidgen\xf6ssische Technische Hochschule (Swiss Federal Institute of Technology)","organization_city":"Zurich","organization_country":"Switzerland"},{"year":2002,"category":"Economics","motivation":"for having integrated insights from psychological research into economic science, especially concerning human judgment and decision-making under uncertainty","prize_share":"1/2","laureate_type":"Individual","name":"Daniel Kahneman","birth_date":"1934-03-05","birth_city":"Tel Aviv","birth_country":"Israel","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2002,"category":"Economics","motivation":"for having established laboratory experiments as a tool in empirical economic analysis, especially in the study of alternative market mechanisms","prize_share":"1/2","laureate_type":"Individual","name":"Vernon L. Smith","birth_date":"1927-01-01","birth_city":"Wichita, KS","birth_country":"United States","sex":"Male","organization_name":"George Mason University","organization_city":"Fairfax, VA","organization_country":"United States"},{"year":2002,"category":"Literature","motivation":"for writing that upholds the fragile experience of the individual against the barbaric arbitrariness of history","prize_share":"1/1","laureate_type":"Individual","name":"Imre Kert\xe9sz","birth_date":"1929-11-09","birth_city":"Budapest","birth_country":"Hungary","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2002,"category":"Medicine","motivation":"for their discoveries concerning genetic regulation of organ development and programmed cell death\'","prize_share":"1/3","laureate_type":"Individual","name":"Sydney Brenner","birth_date":"1927-01-13","birth_city":"Germiston","birth_country":"South Africa","sex":"Male","organization_name":"The Molecular Sciences Institute","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2002,"category":"Medicine","motivation":"for their discoveries concerning genetic regulation of organ development and programmed cell death\'","prize_share":"1/3","laureate_type":"Individual","name":"H. Robert Horvitz","birth_date":"1947-05-08","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2002,"category":"Medicine","motivation":"for their discoveries concerning genetic regulation of organ development and programmed cell death\'","prize_share":"1/3","laureate_type":"Individual","name":"John E. Sulston","birth_date":"1942-03-27","birth_city":"Cambridge","birth_country":"United Kingdom","sex":"Male","organization_name":"The Wellcome Trust Sanger Institute","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2002,"category":"Peace","motivation":"for his decades of untiring effort to find peaceful solutions to international conflicts, to advance democracy and human rights, and to promote economic and social development","prize_share":"1/1","laureate_type":"Individual","name":"Jimmy Carter","birth_date":"1924-10-01","birth_city":"Plains, GA","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2002,"category":"Physics","motivation":"for pioneering contributions to astrophysics, in particular for the detection of cosmic neutrinos","prize_share":"1/4","laureate_type":"Individual","name":"Raymond Davis Jr.","birth_date":"1914-10-14","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"University of Pennsylvania","organization_city":"Philadelphia, PA","organization_country":"United States"},{"year":2002,"category":"Physics","motivation":"for pioneering contributions to astrophysics, in particular for the detection of cosmic neutrinos","prize_share":"1/4","laureate_type":"Individual","name":"Masatoshi Koshiba","birth_date":"1926-09-19","birth_city":"Toyohashi","birth_country":"Japan","sex":"Male","organization_name":"University of Tokyo","organization_city":"Tokyo","organization_country":"Japan"},{"year":2002,"category":"Physics","motivation":"for pioneering contributions to astrophysics, which have led to the discovery of cosmic X-ray sources","prize_share":"2/4","laureate_type":"Individual","name":"Riccardo Giacconi","birth_date":"1931-10-06","birth_city":"Genoa","birth_country":"Italy","sex":"Male","organization_name":"Associated Universities Inc.","organization_city":"Washington, DC","organization_country":"United States"},{"year":2003,"category":"Chemistry","motivation":"for discoveries concerning channels in cell membranes; for the discovery of water channels","prize_share":"1/2","laureate_type":"Individual","name":"Peter Agre","birth_date":"1949-01-30","birth_city":"Northfield, MN","birth_country":"United States","sex":"Male","organization_name":"Johns Hopkins University School of Medicine","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":2003,"category":"Chemistry","motivation":"for discoveries concerning channels in cell membranes; for structural and mechanistic studies of ion channels","prize_share":"1/2","laureate_type":"Individual","name":"Roderick MacKinnon","birth_date":"1956-02-19","birth_city":"Burlington, MA","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":2003,"category":"Economics","motivation":"for methods of analyzing economic time series with time-varying volatility (ARCH)","prize_share":"1/2","laureate_type":"Individual","name":"Robert F. Engle III","birth_date":"1942-11-10","birth_city":"Syracuse, NY","birth_country":"United States","sex":"Male","organization_name":"New York University","organization_city":"New York, NY","organization_country":"United States"},{"year":2003,"category":"Economics","motivation":"for methods of analyzing economic time series with common trends (cointegration)","prize_share":"1/2","laureate_type":"Individual","name":"Clive W.J. Granger","birth_date":"1934-09-04","birth_city":"Swansea","birth_country":"United Kingdom","sex":"Male","organization_name":"University of California","organization_city":"San Diego, CA","organization_country":"United States"},{"year":2003,"category":"Literature","motivation":"who in innumerable guises portrays the surprising involvement of the outsider","prize_share":"1/1","laureate_type":"Individual","name":"John M. Coetzee","birth_date":"1940-02-09","birth_city":"Cape Town","birth_country":"South Africa","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2003,"category":"Medicine","motivation":"for their discoveries concerning magnetic resonance imaging","prize_share":"1/2","laureate_type":"Individual","name":"Paul C. Lauterbur","birth_date":"1929-05-06","birth_city":"Sidney, OH","birth_country":"United States","sex":"Male","organization_name":"University of Illinois","organization_city":"Urbana, IL","organization_country":"United States"},{"year":2003,"category":"Medicine","motivation":"for their discoveries concerning magnetic resonance imaging","prize_share":"1/2","laureate_type":"Individual","name":"Sir Peter Mansfield","birth_date":"1933-10-09","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Nottingham, School of Physics and Astronomy","organization_city":"Nottingham","organization_country":"United Kingdom"},{"year":2003,"category":"Peace","motivation":"for her efforts for democracy and human rights. She has focused especially on the struggle for the rights of women and children","prize_share":"1/1","laureate_type":"Individual","name":"Shirin Ebadi","birth_date":"1947-06-21","birth_city":"Hamadan","birth_country":"Iran","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2003,"category":"Physics","motivation":"for pioneering contributions to the theory of superconductors and superfluids","prize_share":"1/3","laureate_type":"Individual","name":"Alexei A. Abrikosov","birth_date":"1928-06-25","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"Argonne National Laboratory","organization_city":"Argonne, IL","organization_country":"United States"},{"year":2003,"category":"Physics","motivation":"for pioneering contributions to the theory of superconductors and superfluids","prize_share":"1/3","laureate_type":"Individual","name":"Vitaly L. Ginzburg","birth_date":"1916-10-04","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"P.N. Lebedev Physical Institute","organization_city":"Moscow","organization_country":"Russia"},{"year":2003,"category":"Physics","motivation":"for pioneering contributions to the theory of superconductors and superfluids","prize_share":"1/3","laureate_type":"Individual","name":"Anthony J. Leggett","birth_date":"1938-03-26","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Illinois","organization_city":"Urbana, IL","organization_country":"United States"},{"year":2004,"category":"Chemistry","motivation":"for the discovery of ubiquitin-mediated protein degradation","prize_share":"1/3","laureate_type":"Individual","name":"Aaron Ciechanover","birth_date":"1947-10-01","birth_city":"Haifa","birth_country":"Israel","sex":"Male","organization_name":"Technion - Israel Institute of Technology","organization_city":"Haifa","organization_country":"Israel"},{"year":2004,"category":"Chemistry","motivation":"for the discovery of ubiquitin-mediated protein degradation","prize_share":"1/3","laureate_type":"Individual","name":"Avram Hershko","birth_date":"1937-12-31","birth_city":"Karcag","birth_country":"Hungary","sex":"Male","organization_name":"Technion - Israel Institute of Technology","organization_city":"Haifa","organization_country":"Israel"},{"year":2004,"category":"Chemistry","motivation":"for the discovery of ubiquitin-mediated protein degradation","prize_share":"1/3","laureate_type":"Individual","name":"Irwin Rose","birth_date":"1926-07-16","birth_city":"Brooklyn, NY","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Irvine, CA","organization_country":"United States"},{"year":2004,"category":"Economics","motivation":"for their contributions to dynamic macroeconomics: the time consistency of economic policy and the driving forces behind business cycles","prize_share":"1/2","laureate_type":"Individual","name":"Finn E. Kydland","birth_date":"1943-12-01","birth_city":"Gjesdal","birth_country":"Norway","sex":"Male","organization_name":"Carnegie Mellon University","organization_city":"Pittsburgh, PA","organization_country":"United States"},{"year":2004,"category":"Economics","motivation":"for their contributions to dynamic macroeconomics: the time consistency of economic policy and the driving forces behind business cycles","prize_share":"1/2","laureate_type":"Individual","name":"Edward C. Prescott","birth_date":"1940-12-26","birth_city":"Glens Falls, NY","birth_country":"United States","sex":"Male","organization_name":"Arizona State University","organization_city":"Tempe, AZ","organization_country":"United States"},{"year":2004,"category":"Literature","motivation":"for her musical flow of voices and counter-voices in novels and plays that with extraordinary linguistic zeal reveal the absurdity of society\'s clich&eacute;s and their subjugating power","prize_share":"1/1","laureate_type":"Individual","name":"Elfriede Jelinek","birth_date":"1946-10-20","birth_city":"M\xfcrzzuschlag","birth_country":"Austria","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2004,"category":"Medicine","motivation":"for their discoveries of odorant receptors and the organization of the olfactory system","prize_share":"1/2","laureate_type":"Individual","name":"Richard Axel","birth_date":"1946-07-02","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2004,"category":"Medicine","motivation":"for their discoveries of odorant receptors and the organization of the olfactory system","prize_share":"1/2","laureate_type":"Individual","name":"Linda B. Buck","birth_date":"1947-01-29","birth_city":"Seattle, WA","birth_country":"United States","sex":"Female","organization_name":"Fred Hutchinson Cancer Research Center","organization_city":"Seattle, WA","organization_country":"United States"},{"year":2004,"category":"Peace","motivation":"for her contribution to sustainable development, democracy and peace","prize_share":"1/1","laureate_type":"Individual","name":"Wangari Muta Maathai","birth_date":"1940-04-01","birth_city":"Nyeri","birth_country":"Kenya","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2004,"category":"Physics","motivation":"for the discovery of asymptotic freedom in the theory of the strong interaction","prize_share":"1/3","laureate_type":"Individual","name":"David J. Gross","birth_date":"1941-02-19","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"University of California, Kavli Institute for Theoretical Physics","organization_city":"Santa Barbara, CA","organization_country":"United States"},{"year":2004,"category":"Physics","motivation":"for the discovery of asymptotic freedom in the theory of the strong interaction","prize_share":"1/3","laureate_type":"Individual","name":"H. David Politzer","birth_date":"1949-08-31","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":2004,"category":"Physics","motivation":"for the discovery of asymptotic freedom in the theory of the strong interaction","prize_share":"1/3","laureate_type":"Individual","name":"Frank Wilczek","birth_date":"1951-05-15","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2005,"category":"Chemistry","motivation":"for the development of the metathesis method in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Yves Chauvin","birth_date":"1930-10-10","birth_city":"Menin","birth_country":"Belgium","sex":"Male","organization_name":"Institut Fran\xe7ais du P\xe9trole","organization_city":"Rueil-Malmaison","organization_country":"France"},{"year":2005,"category":"Chemistry","motivation":"for the development of the metathesis method in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Robert H. Grubbs","birth_date":"1942-02-27","birth_city":"Possum Trot, KY","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":2005,"category":"Chemistry","motivation":"for the development of the metathesis method in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Richard R. Schrock","birth_date":"1945-01-04","birth_city":"Berne, IN","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2005,"category":"Economics","motivation":"for having enhanced our understanding of conflict and cooperation through game-theory analysis","prize_share":"1/2","laureate_type":"Individual","name":"Robert J. Aumann","birth_date":"1930-06-08","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"University of Jerusalem, Center for RationalityHebrew","organization_city":"Jerusalem","organization_country":"Israel"},{"year":2005,"category":"Economics","motivation":"for having enhanced our understanding of conflict and cooperation through game-theory analysis","prize_share":"1/2","laureate_type":"Individual","name":"Thomas C. Schelling","birth_date":"1921-04-14","birth_city":"Oakland, CA","birth_country":"United States","sex":"Male","organization_name":"University of Maryland, Department of Economics and School of Public Policy","organization_city":"College Park, MD","organization_country":"United States"},{"year":2005,"category":"Literature","motivation":"who in his plays uncovers the precipice under everyday prattle and forces entry into oppression\'s closed rooms","prize_share":"1/1","laureate_type":"Individual","name":"Harold Pinter","birth_date":"1930-10-10","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2005,"category":"Medicine","motivation":"for their discovery of the bacterium Helicobacter pylori and its role in gastritis and peptic ulcer disease","prize_share":"1/2","laureate_type":"Individual","name":"Barry J. Marshall","birth_date":"1951-09-30","birth_city":"Kalgoorlie","birth_country":"Australia","sex":"Male","organization_name":"NHMRC Helicobacter pylori Research Laboratory, QEII Medical Centre","organization_city":"Nedlands","organization_country":"Australia"},{"year":2005,"category":"Medicine","motivation":"for their discovery of the bacterium Helicobacter pylori and its role in gastritis and peptic ulcer disease","prize_share":"1/2","laureate_type":"Individual","name":"J. Robin Warren","birth_date":"1937-06-11","birth_city":"Adelaide","birth_country":"Australia","sex":"Male","organization_name":"","organization_city":"Perth","organization_country":"Australia"},{"year":2005,"category":"Peace","motivation":"for their efforts to prevent nuclear energy from being used for military purposes and to ensure that nuclear energy for peaceful purposes is used in the safest possible way","prize_share":"1/2","laureate_type":"Organization","name":"International Atomic Energy Agency (IAEA)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2005,"category":"Peace","motivation":"for their efforts to prevent nuclear energy from being used for military purposes and to ensure that nuclear energy for peaceful purposes is used in the safest possible way","prize_share":"1/2","laureate_type":"Individual","name":"Mohamed ElBaradei","birth_date":"1942-06-17","birth_city":"Cairo","birth_country":"Egypt","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2005,"category":"Physics","motivation":"for his contribution to the quantum theory of optical coherence","prize_share":"2/4","laureate_type":"Individual","name":"Roy J. Glauber","birth_date":"1925-09-01","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2005,"category":"Physics","motivation":"for their contributions to the development of laser-based precision spectroscopy, including the optical frequency comb technique","prize_share":"1/4","laureate_type":"Individual","name":"John L. Hall","birth_date":"1934-08-21","birth_city":"Denver, CO","birth_country":"United States","sex":"Male","organization_name":"University of Colorado, JILA","organization_city":"Boulder, CO","organization_country":"United States"},{"year":2005,"category":"Physics","motivation":"for their contributions to the development of laser-based precision spectroscopy, including the optical frequency comb technique","prize_share":"1/4","laureate_type":"Individual","name":"Theodor W. H\xe4nsch","birth_date":"1941-10-30","birth_city":"Heidelberg","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Quantenoptik","organization_city":"Garching","organization_country":"Germany"},{"year":2006,"category":"Chemistry","motivation":"for his studies of the molecular basis of eukaryotic transcription","prize_share":"1/1","laureate_type":"Individual","name":"Roger D. Kornberg","birth_date":"1947-04-24","birth_city":"St. Louis, MO","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2006,"category":"Economics","motivation":"for his analysis of intertemporal tradeoffs in macroeconomic policy","prize_share":"1/1","laureate_type":"Individual","name":"Edmund S. Phelps","birth_date":"1933-07-26","birth_city":"Evanston, IL","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2006,"category":"Literature","motivation":"who in the quest for the melancholic soul of his native city has discovered new symbols for the clash and interlacing of cultures","prize_share":"1/1","laureate_type":"Individual","name":"Orhan Pamuk","birth_date":"1952-06-07","birth_city":"Istanbul","birth_country":"Turkey","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2006,"category":"Medicine","motivation":"for their discovery of RNA interference - gene silencing by double-stranded RNA","prize_share":"1/2","laureate_type":"Individual","name":"Andrew Z. Fire","birth_date":"1959-04-27","birth_city":"Stanford, CA","birth_country":"United States","sex":"Male","organization_name":"Stanford University School of Medicine","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2006,"category":"Medicine","motivation":"for their discovery of RNA interference - gene silencing by double-stranded RNA","prize_share":"1/2","laureate_type":"Individual","name":"Craig C. Mello","birth_date":"1960-10-19","birth_city":"New Haven, CT","birth_country":"United States","sex":"Male","organization_name":"University of Massachusetts Medical School","organization_city":"Worcester, MA","organization_country":"United States"},{"year":2006,"category":"Peace","motivation":"for their efforts to create economic and social development from below","prize_share":"1/2","laureate_type":"Organization","name":"Grameen Bank","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2006,"category":"Peace","motivation":"for their efforts to create economic and social development from below","prize_share":"1/2","laureate_type":"Individual","name":"Muhammad Yunus","birth_date":"1940-06-28","birth_city":"Chittagong","birth_country":"Bangladesh","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2006,"category":"Physics","motivation":"for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation","prize_share":"1/2","laureate_type":"Individual","name":"John C. Mather","birth_date":"1946-08-07","birth_city":"Roanoke, VA","birth_country":"United States","sex":"Male","organization_name":"NASA Goddard Space Flight Center","organization_city":"Greenbelt, MD","organization_country":"United States"},{"year":2006,"category":"Physics","motivation":"for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation","prize_share":"1/2","laureate_type":"Individual","name":"George F. Smoot","birth_date":"1945-02-20","birth_city":"Yukon, FL","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2007,"category":"Chemistry","motivation":"for his studies of chemical processes on solid surfaces","prize_share":"1/1","laureate_type":"Individual","name":"Gerhard Ertl","birth_date":"1936-10-10","birth_city":"Bad Cannstatt","birth_country":"Germany","sex":"Male","organization_name":"Fritz-Haber-Institut der Max-Planck-Gesellschaft","organization_city":"Berlin","organization_country":"Germany"},{"year":2007,"category":"Economics","motivation":"for having laid the foundations of mechanism design theory","prize_share":"1/3","laureate_type":"Individual","name":"Leonid Hurwicz","birth_date":"1917-08-21","birth_city":"Moscow","birth_country":"Russia","sex":"Male","organization_name":"University of Minnesota","organization_city":"Minneapolis, MN","organization_country":"United States"},{"year":2007,"category":"Economics","motivation":"for having laid the foundations of mechanism design theory","prize_share":"1/3","laureate_type":"Individual","name":"Eric S. Maskin","birth_date":"1950-12-12","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Institute for Advanced Study","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2007,"category":"Economics","motivation":"for having laid the foundations of mechanism design theory","prize_share":"1/3","laureate_type":"Individual","name":"Roger B. Myerson","birth_date":"1951-03-29","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2007,"category":"Literature","motivation":"that epicist of the female experience, who with scepticism, fire and visionary power has subjected a divided civilisation to scrutiny","prize_share":"1/1","laureate_type":"Individual","name":"Doris Lessing","birth_date":"1919-10-22","birth_city":"Kermanshah","birth_country":"Iran","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2007,"category":"Medicine","motivation":"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells","prize_share":"1/3","laureate_type":"Individual","name":"Mario R. Capecchi","birth_date":"1937-10-06","birth_city":"Verona","birth_country":"Italy","sex":"Male","organization_name":"University of Utah","organization_city":"Salt Lake City, UT","organization_country":"United States"},{"year":2007,"category":"Medicine","motivation":"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells","prize_share":"1/3","laureate_type":"Individual","name":"Sir Martin J. Evans","birth_date":"1941-01-01","birth_city":"Stroud","birth_country":"United Kingdom","sex":"Male","organization_name":"Cardiff University","organization_city":"Cardiff","organization_country":"United Kingdom"},{"year":2007,"category":"Medicine","motivation":"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells","prize_share":"1/3","laureate_type":"Individual","name":"Oliver Smithies","birth_date":"1925-06-23","birth_city":"Halifax","birth_country":"United Kingdom","sex":"Male","organization_name":"University of North Carolina","organization_city":"Chapel Hill, NC","organization_country":"United States"},{"year":2007,"category":"Peace","motivation":"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change","prize_share":"1/2","laureate_type":"Organization","name":"Intergovernmental Panel on Climate Change (IPCC)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2007,"category":"Peace","motivation":"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change","prize_share":"1/2","laureate_type":"Individual","name":"Albert Arnold (Al) Gore Jr.","birth_date":"1948-03-31","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2007,"category":"Physics","motivation":"for the discovery of Giant Magnetoresistance","prize_share":"1/2","laureate_type":"Individual","name":"Albert Fert","birth_date":"1938-03-07","birth_city":"Carcassonne","birth_country":"France","sex":"Male","organization_name":"Universit&eacute; Paris-Sud","organization_city":"Orsay","organization_country":"France"},{"year":2007,"category":"Physics","motivation":"for the discovery of Giant Magnetoresistance","prize_share":"1/2","laureate_type":"Individual","name":"Peter Gr\xfcnberg","birth_date":"1939-05-18","birth_city":"Plzen","birth_country":"Czech Republic","sex":"Male","organization_name":"Forschungszentrum J&uuml;lich","organization_city":"J&uuml;lich","organization_country":"Germany"},{"year":2008,"category":"Chemistry","motivation":"for the discovery and development of the green fluorescent protein, GFP","prize_share":"1/3","laureate_type":"Individual","name":"Osamu Shimomura","birth_date":"1928-08-27","birth_city":"Kyoto","birth_country":"Japan","sex":"Male","organization_name":"Marine Biological Laboratory (MBL)","organization_city":"Woods Hole, MA","organization_country":"United States"},{"year":2008,"category":"Chemistry","motivation":"for the discovery and development of the green fluorescent protein, GFP","prize_share":"1/3","laureate_type":"Individual","name":"Martin Chalfie","birth_date":"1947-01-15","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2008,"category":"Chemistry","motivation":"for the discovery and development of the green fluorescent protein, GFP","prize_share":"1/3","laureate_type":"Individual","name":"Roger Y. Tsien","birth_date":"1952-02-01","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"San Diego, CA","organization_country":"United States"},{"year":2008,"category":"Economics","motivation":"for his analysis of trade patterns and location of economic activity","prize_share":"1/1","laureate_type":"Individual","name":"Paul Krugman","birth_date":"1953-02-28","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2008,"category":"Literature","motivation":"author of new departures, poetic adventure and sensual ecstasy, explorer of a humanity beyond and below the reigning civilization","prize_share":"1/1","laureate_type":"Individual","name":"Jean-Marie Gustave Le Cl\xe9zio","birth_date":"1940-04-13","birth_city":"Nice","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2008,"category":"Medicine","motivation":"for his discovery of human papilloma viruses causing cervical cancer","prize_share":"2/4","laureate_type":"Individual","name":"Harald zur Hausen","birth_date":"1936-03-11","birth_city":"Gelsenkirchen","birth_country":"Germany","sex":"Male","organization_name":"German Cancer Research Center","organization_city":"Heidelberg","organization_country":"Germany"},{"year":2008,"category":"Medicine","motivation":"for their discovery of human immunodeficiency virus","prize_share":"1/4","laureate_type":"Individual","name":"Fran\xe7oise Barr\xe9-Sinoussi","birth_date":"1947-07-30","birth_city":"Paris","birth_country":"France","sex":"Female","organization_name":"Regulation of Retroviral Infections Unit, Virology Department, Institut Pasteur","organization_city":"Paris","organization_country":"France"},{"year":2008,"category":"Medicine","motivation":"for their discovery of human immunodeficiency virus","prize_share":"1/4","laureate_type":"Individual","name":"Luc Montagnier","birth_date":"1932-08-18","birth_city":"Chabris","birth_country":"France","sex":"Male","organization_name":"World Foundation for AIDS Research and Prevention","organization_city":"Paris","organization_country":"France"},{"year":2008,"category":"Peace","motivation":"for his important efforts, on several continents and over more than three decades, to resolve international conflicts","prize_share":"1/1","laureate_type":"Individual","name":"Martti Ahtisaari","birth_date":"1937-06-23","birth_city":"Viipuri (Vyborg)","birth_country":"Finland","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2008,"category":"Physics","motivation":"for the discovery of the mechanism of spontaneous broken symmetry in subatomic physics","prize_share":"2/4","laureate_type":"Individual","name":"Yoichiro Nambu","birth_date":"1921-01-18","birth_city":"Tokyo","birth_country":"Japan","sex":"Male","organization_name":"Enrico Fermi Institute, University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2008,"category":"Physics","motivation":"for the discovery of the origin of the broken symmetry which predicts the existence of at least three families of quarks in nature","prize_share":"1/4","laureate_type":"Individual","name":"Makoto Kobayashi","birth_date":"1944-04-07","birth_city":"Nagoya","birth_country":"Japan","sex":"Male","organization_name":"High Energy Accelerator Research Organization (KEK)","organization_city":"Tsukuba","organization_country":"Japan"},{"year":2008,"category":"Physics","motivation":"for the discovery of the origin of the broken symmetry which predicts the existence of at least three families of quarks in nature","prize_share":"1/4","laureate_type":"Individual","name":"Toshihide Maskawa","birth_date":"1940-02-07","birth_city":"Nagoya","birth_country":"Japan","sex":"Male","organization_name":"Kyoto Sangyo University","organization_city":"Kyoto","organization_country":"Japan"},{"year":2009,"category":"Chemistry","motivation":"for studies of the structure and function of the ribosome","prize_share":"1/3","laureate_type":"Individual","name":"Venkatraman Ramakrishnan","birth_date":"","birth_city":"Chidambaram, Tamil Nadu","birth_country":"India","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2009,"category":"Chemistry","motivation":"for studies of the structure and function of the ribosome","prize_share":"1/3","laureate_type":"Individual","name":"Thomas A. Steitz","birth_date":"1940-08-23","birth_city":"Milwaukee, WI","birth_country":"United States","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":2009,"category":"Chemistry","motivation":"for studies of the structure and function of the ribosome","prize_share":"1/3","laureate_type":"Individual","name":"Ada E. Yonath","birth_date":"1939-06-22","birth_city":"Jerusalem","birth_country":"Israel","sex":"Female","organization_name":"Weizmann Institute of Science","organization_city":"Rehovot","organization_country":"Israel"},{"year":2009,"category":"Economics","motivation":"for her analysis of economic governance, especially the commons","prize_share":"1/2","laureate_type":"Individual","name":"Elinor Ostrom","birth_date":"1933-08-07","birth_city":"Los Angeles, CA","birth_country":"United States","sex":"Female","organization_name":"Indiana University","organization_city":"Bloomington, IN","organization_country":"United States"},{"year":2009,"category":"Economics","motivation":"for his analysis of economic governance, especially the boundaries of the firm","prize_share":"1/2","laureate_type":"Individual","name":"Oliver E. Williamson","birth_date":"1932-09-27","birth_city":"Superior, WI","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2009,"category":"Literature","motivation":"who, with the concentration of poetry and the frankness of prose, depicts the landscape of the dispossessed","prize_share":"1/1","laureate_type":"Individual","name":"Herta M\xfcller","birth_date":"1953-08-17","birth_city":"Nitzkydorf, Banat","birth_country":"Romania","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2009,"category":"Medicine","motivation":"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase","prize_share":"1/3","laureate_type":"Individual","name":"Elizabeth H. Blackburn","birth_date":"1948-11-26","birth_city":"Hobart, Tasmania","birth_country":"Australia","sex":"Female","organization_name":"University of California","organization_city":"San Francisco, CA","organization_country":"United States"},{"year":2009,"category":"Medicine","motivation":"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase","prize_share":"1/3","laureate_type":"Individual","name":"Carol W. Greider","birth_date":"1961-04-15","birth_city":"San Diego, CA","birth_country":"United States","sex":"Female","organization_name":"Johns Hopkins University School of Medicine","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":2009,"category":"Medicine","motivation":"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase","prize_share":"1/3","laureate_type":"Individual","name":"Jack W. Szostak","birth_date":"1952-11-09","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Harvard Medical School","organization_city":"Boston, MA","organization_country":"United States"},{"year":2009,"category":"Peace","motivation":"for his extraordinary efforts to strengthen international diplomacy and cooperation between peoples","prize_share":"1/1","laureate_type":"Individual","name":"Barack H. Obama","birth_date":"1961-08-04","birth_city":"Honolulu, HI","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2009,"category":"Physics","motivation":"for groundbreaking achievements concerning the transmission of light in fibers for optical communication","prize_share":"2/4","laureate_type":"Individual","name":"Charles Kuen Kao","birth_date":"1933-11-04","birth_city":"Shanghai","birth_country":"China","sex":"Male","organization_name":"Standard Telecommunication Laboratories","organization_city":"Harlow","organization_country":"United Kingdom"},{"year":2009,"category":"Physics","motivation":"for the invention of an imaging semiconductor circuit - the CCD sensor","prize_share":"1/4","laureate_type":"Individual","name":"Willard S. Boyle","birth_date":"1924-08-19","birth_city":"Amherst, NS","birth_country":"Canada","sex":"Male","organization_name":"Bell Laboratories","organization_city":"Murray Hill, NJ","organization_country":"United States"},{"year":2009,"category":"Physics","motivation":"for the invention of an imaging semiconductor circuit - the CCD sensor","prize_share":"1/4","laureate_type":"Individual","name":"George E. Smith","birth_date":"1930-05-10","birth_city":"White Plains, NY","birth_country":"United States","sex":"Male","organization_name":"Bell Laboratories","organization_city":"Murray Hill, NJ","organization_country":"United States"},{"year":2010,"category":"Chemistry","motivation":"for palladium-catalyzed cross couplings in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Richard F. Heck","birth_date":"1931-08-15","birth_city":"Springfield, MA","birth_country":"United States","sex":"Male","organization_name":"University of Delaware","organization_city":"","organization_country":"United States"},{"year":2010,"category":"Chemistry","motivation":"for palladium-catalyzed cross couplings in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Ei-ichi Negishi","birth_date":"1935-07-14","birth_city":"Changchun","birth_country":"China","sex":"Male","organization_name":"Purdue University","organization_city":"West Lafayette, IN","organization_country":"United States"},{"year":2010,"category":"Chemistry","motivation":"for palladium-catalyzed cross couplings in organic synthesis","prize_share":"1/3","laureate_type":"Individual","name":"Akira Suzuki","birth_date":"1930-09-12","birth_city":"Mukawa","birth_country":"Japan","sex":"Male","organization_name":"Hokkaido University","organization_city":"Sapporo","organization_country":"Japan"},{"year":2010,"category":"Economics","motivation":"for their analysis of markets with search frictions","prize_share":"1/3","laureate_type":"Individual","name":"Peter A. Diamond","birth_date":"1940-04-29","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2010,"category":"Economics","motivation":"for their analysis of markets with search frictions","prize_share":"1/3","laureate_type":"Individual","name":"Dale T. Mortensen","birth_date":"1939-02-02","birth_city":"Enterprise, OR","birth_country":"United States","sex":"Male","organization_name":"Northwestern University","organization_city":"Evanston, IL","organization_country":"United States"},{"year":2010,"category":"Economics","motivation":"for their analysis of markets with search frictions","prize_share":"1/3","laureate_type":"Individual","name":"Christopher A. Pissarides","birth_date":"1948-02-20","birth_city":"Nicosia","birth_country":"Cyprus","sex":"Male","organization_name":"London School of Economics and Political Science","organization_city":"London","organization_country":"United Kingdom"},{"year":2010,"category":"Literature","motivation":"for his cartography of structures of power and his trenchant images of the individual\'s resistance, revolt, and defeat","prize_share":"1/1","laureate_type":"Individual","name":"Mario Vargas Llosa","birth_date":"1936-03-28","birth_city":"Arequipa","birth_country":"Peru","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2010,"category":"Medicine","motivation":"for the development of in vitro fertilization","prize_share":"1/1","laureate_type":"Individual","name":"Robert G. Edwards","birth_date":"1925-09-27","birth_city":"Batley","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2010,"category":"Peace","motivation":"for his long and non-violent struggle for fundamental human rights in China","prize_share":"1/1","laureate_type":"Individual","name":"Liu Xiaobo","birth_date":"1955-12-28","birth_city":"Changchun","birth_country":"China","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2010,"category":"Physics","motivation":"for groundbreaking experiments regarding the two-dimensional material graphene","prize_share":"1/2","laureate_type":"Individual","name":"Andre Geim","birth_date":"1958-10-21","birth_city":"Sochi","birth_country":"Russia","sex":"Male","organization_name":"University of Manchester","organization_city":"Manchester","organization_country":"United Kingdom"},{"year":2010,"category":"Physics","motivation":"for groundbreaking experiments regarding the two-dimensional material graphene","prize_share":"1/2","laureate_type":"Individual","name":"Konstantin Novoselov","birth_date":"1974-08-23","birth_city":"Nizhny Tagil","birth_country":"Russia","sex":"Male","organization_name":"University of Manchester","organization_city":"Manchester","organization_country":"United Kingdom"},{"year":2011,"category":"Chemistry","motivation":"for the discovery of quasicrystals","prize_share":"1/1","laureate_type":"Individual","name":"Dan Shechtman","birth_date":"1941-01-24","birth_city":"Tel Aviv","birth_country":"Israel","sex":"Male","organization_name":"Technion - Israel Institute of Technology","organization_city":"Haifa","organization_country":"Israel"},{"year":2011,"category":"Economics","motivation":"for their empirical research on cause and effect in the macroeconomy","prize_share":"1/2","laureate_type":"Individual","name":"Thomas J. Sargent","birth_date":"1943-07-19","birth_city":"Pasadena, CA","birth_country":"United States","sex":"Male","organization_name":"New York University","organization_city":"New York, NY","organization_country":"United States"},{"year":2011,"category":"Economics","motivation":"for their empirical research on cause and effect in the macroeconomy","prize_share":"1/2","laureate_type":"Individual","name":"Christopher A. Sims","birth_date":"1942-10-21","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2011,"category":"Literature","motivation":"because, through his condensed, translucent images, he gives us fresh access to reality","prize_share":"1/1","laureate_type":"Individual","name":"Tomas Transtr\xf6mer","birth_date":"1931-04-15","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2011,"category":"Medicine","motivation":"for their discoveries concerning the activation of innate immunity","prize_share":"1/4","laureate_type":"Individual","name":"Bruce A. Beutler","birth_date":"1957-12-29","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"University of Texas Southwestern Medical Center at Dallas","organization_city":"Dallas, TX","organization_country":"United States"},{"year":2011,"category":"Medicine","motivation":"for their discoveries concerning the activation of innate immunity","prize_share":"1/4","laureate_type":"Individual","name":"Jules A. Hoffmann","birth_date":"1941-08-02","birth_city":"Echternach","birth_country":"Luxembourg","sex":"Male","organization_name":"University of Strasbourg","organization_city":"Strasbourg","organization_country":"France"},{"year":2011,"category":"Medicine","motivation":"for his discovery of the dendritic cell and its role in adaptive immunity","prize_share":"2/4","laureate_type":"Individual","name":"Ralph M. Steinman","birth_date":"1943-01-14","birth_city":"Montreal","birth_country":"Canada","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":2011,"category":"Peace","motivation":"for their non-violent struggle for the safety of women and for women&apos;s rights to full participation in peace-building work","prize_share":"1/3","laureate_type":"Individual","name":"Ellen Johnson Sirleaf","birth_date":"1938-10-29","birth_city":"Monrovia","birth_country":"Liberia","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2011,"category":"Peace","motivation":"for their non-violent struggle for the safety of women and for women&apos;s rights to full participation in peace-building work","prize_share":"1/3","laureate_type":"Individual","name":"Leymah Gbowee","birth_date":"1972-02-01","birth_city":"Monrovia","birth_country":"Liberia","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2011,"category":"Peace","motivation":"for their non-violent struggle for the safety of women and for women&apos;s rights to full participation in peace-building work","prize_share":"1/3","laureate_type":"Individual","name":"Tawakkol Karman","birth_date":"1979-02-07","birth_city":"Ta\'izz","birth_country":"Yemen","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2011,"category":"Physics","motivation":"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae","prize_share":"2/4","laureate_type":"Individual","name":"Saul Perlmutter","birth_date":"","birth_city":"Champaign-Urbana, IL","birth_country":"United States","sex":"Male","organization_name":"Lawrence Berkeley National Laboratory","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2011,"category":"Physics","motivation":"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae","prize_share":"1/4","laureate_type":"Individual","name":"Brian P. Schmidt","birth_date":"1967-02-24","birth_city":"Missoula, MT","birth_country":"United States","sex":"Male","organization_name":"Australian National University","organization_city":"Weston Creek","organization_country":"Australia"},{"year":2011,"category":"Physics","motivation":"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae","prize_share":"1/4","laureate_type":"Individual","name":"Adam G. Riess","birth_date":"1969-12-16","birth_city":"Washington, DC","birth_country":"United States","sex":"Male","organization_name":"Johns Hopkins University","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":2012,"category":"Chemistry","motivation":"for studies of G-protein-coupled receptors","prize_share":"1/2","laureate_type":"Individual","name":"Robert J. Lefkowitz","birth_date":"1943-04-15","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Howard Hughes Medical Institute","organization_city":"","organization_country":""},{"year":2012,"category":"Chemistry","motivation":"for studies of G-protein-coupled receptors","prize_share":"1/2","laureate_type":"Individual","name":"Brian K. Kobilka","birth_date":"1955-05-30","birth_city":"Little Falls, MN","birth_country":"United States","sex":"Male","organization_name":"Stanford University School of Medicine","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2012,"category":"Economics","motivation":"for the theory of stable allocations and the practice of market design","prize_share":"1/2","laureate_type":"Individual","name":"Alvin E. Roth","birth_date":"1951-12-18","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2012,"category":"Economics","motivation":"for the theory of stable allocations and the practice of market design","prize_share":"1/2","laureate_type":"Individual","name":"Lloyd S. Shapley","birth_date":"1923-06-02","birth_city":"Cambridge, MA","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":2012,"category":"Literature","motivation":"who with hallucinatory realism merges folk tales, history and the contemporary","prize_share":"1/1","laureate_type":"Individual","name":"Mo Yan","birth_date":"1955-02-02","birth_city":"Gaomi","birth_country":"China","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2012,"category":"Medicine","motivation":"for the discovery that mature cells can be reprogrammed to become pluripotent","prize_share":"1/2","laureate_type":"Individual","name":"Sir John B. Gurdon","birth_date":"1933-10-02","birth_city":"Dippenhall","birth_country":"United Kingdom","sex":"Male","organization_name":"Gurdon Institute","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2012,"category":"Medicine","motivation":"for the discovery that mature cells can be reprogrammed to become pluripotent","prize_share":"1/2","laureate_type":"Individual","name":"Shinya Yamanaka","birth_date":"1962-09-04","birth_city":"Osaka","birth_country":"Japan","sex":"Male","organization_name":"Kyoto University","organization_city":"Kyoto","organization_country":"Japan"},{"year":2012,"category":"Peace","motivation":"for over six decades contributed to the advancement of peace and reconciliation, democracy and human rights in Europe","prize_share":"1/1","laureate_type":"Organization","name":"European Union (EU)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":"Europe"},{"year":2012,"category":"Physics","motivation":"for ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems","prize_share":"1/2","laureate_type":"Individual","name":"Serge Haroche","birth_date":"1944-09-11","birth_city":"Casablanca","birth_country":"Morocco","sex":"Male","organization_name":"Coll\xe8ge de France","organization_city":"Paris","organization_country":"France"},{"year":2012,"category":"Physics","motivation":"for ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems","prize_share":"1/2","laureate_type":"Individual","name":"David J. Wineland","birth_date":"1944-02-24","birth_city":"Milwaukee, WI","birth_country":"United States","sex":"Male","organization_name":"National Institute of Standards and Technology","organization_city":"Boulder, CO","organization_country":"United States"},{"year":2013,"category":"Chemistry","motivation":"for the development of multiscale models for complex chemical systems","prize_share":"1/3","laureate_type":"Individual","name":"Martin Karplus","birth_date":"1930-03-15","birth_city":"Vienna","birth_country":"Austria","sex":"Male","organization_name":"Universit\xe9 de Strasbourg","organization_city":"Strasbourg","organization_country":"France"},{"year":2013,"category":"Chemistry","motivation":"for the development of multiscale models for complex chemical systems","prize_share":"1/3","laureate_type":"Individual","name":"Michael Levitt","birth_date":"1947-05-09","birth_city":"Pretoria","birth_country":"South Africa","sex":"Male","organization_name":"Stanford University School of Medicine","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2013,"category":"Chemistry","motivation":"for the development of multiscale models for complex chemical systems","prize_share":"1/3","laureate_type":"Individual","name":"Arieh Warshel","birth_date":"1940-11-20","birth_city":"Kibbutz Sde-Nahum","birth_country":"Israel","sex":"Male","organization_name":"University of Southern California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":2013,"category":"Economics","motivation":"for their empirical analysis of asset prices","prize_share":"1/3","laureate_type":"Individual","name":"Eugene F. Fama","birth_date":"1939-02-14","birth_city":"Boston, MA","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2013,"category":"Economics","motivation":"for their empirical analysis of asset prices","prize_share":"1/3","laureate_type":"Individual","name":"Lars Peter Hansen","birth_date":"1952-10-26","birth_city":"Urbana, IL","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2013,"category":"Economics","motivation":"for their empirical analysis of asset prices","prize_share":"1/3","laureate_type":"Individual","name":"Robert J. Shiller","birth_date":"1946-03-29","birth_city":"Detroit, MI","birth_country":"United States","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":2013,"category":"Literature","motivation":"master of the contemporary short story","prize_share":"1/1","laureate_type":"Individual","name":"Alice Munro","birth_date":"1931-07-10","birth_city":"Wingham","birth_country":"Canada","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2013,"category":"Medicine","motivation":"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells","prize_share":"1/3","laureate_type":"Individual","name":"James E. Rothman","birth_date":"1950-11-03","birth_city":"Haverhill, MA","birth_country":"United States","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":2013,"category":"Medicine","motivation":"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells","prize_share":"1/3","laureate_type":"Individual","name":"Randy W. Schekman","birth_date":"1948-12-30","birth_city":"St. Paul, MN","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2013,"category":"Medicine","motivation":"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells","prize_share":"1/3","laureate_type":"Individual","name":"Thomas C. S\xfcdhof","birth_date":"1955-12-22","birth_city":"G\xf6ttingen","birth_country":"Germany","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2013,"category":"Peace","motivation":"for its extensive efforts to eliminate chemical weapons","prize_share":"1/1","laureate_type":"Organization","name":"Organisation for the Prohibition of Chemical Weapons (OPCW)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2013,"category":"Physics","motivation":"for the theoretical discovery of a mechanism that contributes to our understanding of the origin of mass of subatomic particles, and which recently was confirmed through the discovery of the predicted fundamental particle, by the ATLAS and CMS experiments at CERN\'s Large Hadron Collider","prize_share":"1/2","laureate_type":"Individual","name":"Fran\xe7ois Englert","birth_date":"1932-11-06","birth_city":"Etterbeek","birth_country":"Belgium","sex":"Male","organization_name":"Universit\xe9 Libre de Bruxelles","organization_city":"Brussels","organization_country":"Belgium"},{"year":2013,"category":"Physics","motivation":"for the theoretical discovery of a mechanism that contributes to our understanding of the origin of mass of subatomic particles, and which recently was confirmed through the discovery of the predicted fundamental particle, by the ATLAS and CMS experiments at CERN\'s Large Hadron Collider","prize_share":"1/2","laureate_type":"Individual","name":"Peter W. Higgs","birth_date":"1929-05-29","birth_city":"Newcastle upon Tyne","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Edinburgh","organization_city":"Edinburgh","organization_country":"United Kingdom"},{"year":2014,"category":"Chemistry","motivation":"for the development of super-resolved fluorescence microscopy","prize_share":"1/3","laureate_type":"Individual","name":"Eric Betzig","birth_date":"1960-01-13","birth_city":"Ann Arbor, MI","birth_country":"United States","sex":"Male","organization_name":"Janelia Research Campus, Howard Hughes Medical Institute","organization_city":"Ashburn, VA","organization_country":"United States"},{"year":2014,"category":"Chemistry","motivation":"for the development of super-resolved fluorescence microscopy","prize_share":"1/3","laureate_type":"Individual","name":"Stefan W. Hell","birth_date":"1962-12-23","birth_city":"Arad","birth_country":"Romania","sex":"Male","organization_name":"Max Planck Institute for Biophysical Chemistry","organization_city":"G\xf6ttingen","organization_country":"Germany"},{"year":2014,"category":"Chemistry","motivation":"for the development of super-resolved fluorescence microscopy","prize_share":"1/3","laureate_type":"Individual","name":"William E. Moerner","birth_date":"1953-06-24","birth_city":"Pleasanton, CA","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2014,"category":"Economics","motivation":"for his analysis of market power and regulation","prize_share":"1/1","laureate_type":"Individual","name":"Jean Tirole","birth_date":"1953-08-09","birth_city":"Troyes","birth_country":"France","sex":"Male","organization_name":"Toulouse School of Economics (TSE)","organization_city":"Toulouse","organization_country":"France"},{"year":2014,"category":"Literature","motivation":"for the art of memory with which he has evoked the most ungraspable human destinies and uncovered the life-world of the occupation","prize_share":"1/1","laureate_type":"Individual","name":"Patrick Modiano","birth_date":"1945-07-30","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2014,"category":"Medicine","motivation":"for their discoveries of cells that constitute a positioning system in the brain","prize_share":"2/4","laureate_type":"Individual","name":"John O\'Keefe","birth_date":"1939-11-18","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University College","organization_city":"London","organization_country":"United Kingdom"},{"year":2014,"category":"Medicine","motivation":"for their discoveries of cells that constitute a positioning system in the brain","prize_share":"1/4","laureate_type":"Individual","name":"May-Britt Moser","birth_date":"1963-01-04","birth_city":"Fosnav\xe5g","birth_country":"Norway","sex":"Female","organization_name":"Norwegian University of Science and Technology (NTNU)","organization_city":"Trondheim","organization_country":"Norway"},{"year":2014,"category":"Medicine","motivation":"for their discoveries of cells that constitute a positioning system in the brain","prize_share":"1/4","laureate_type":"Individual","name":"Edvard I. Moser","birth_date":"1962-04-27","birth_city":"\xc5lesund","birth_country":"Norway","sex":"Male","organization_name":"Norwegian University of Science and Technology (NTNU)","organization_city":"Trondheim","organization_country":"Norway"},{"year":2014,"category":"Peace","motivation":"for their struggle against the suppression of children and young people and for the right of all children to education","prize_share":"1/2","laureate_type":"Individual","name":"Kailash Satyarthi","birth_date":"1954-01-11","birth_city":"Vidisha","birth_country":"India","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2014,"category":"Peace","motivation":"for their struggle against the suppression of children and young people and for the right of all children to education","prize_share":"1/2","laureate_type":"Individual","name":"Malala Yousafzai","birth_date":"1997-07-12","birth_city":"Mingora","birth_country":"Pakistan","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2014,"category":"Physics","motivation":"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources","prize_share":"1/3","laureate_type":"Individual","name":"Isamu Akasaki","birth_date":"1929-01-30","birth_city":"Chiran","birth_country":"Japan","sex":"Male","organization_name":"Meijo University","organization_city":"Nagoya","organization_country":"Japan"},{"year":2014,"category":"Physics","motivation":"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources","prize_share":"1/3","laureate_type":"Individual","name":"Hiroshi Amano","birth_date":"1960-09-11","birth_city":"Hamamatsu","birth_country":"Japan","sex":"Male","organization_name":"Nagoya University","organization_city":"Nagoya","organization_country":"Japan"},{"year":2014,"category":"Physics","motivation":"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources","prize_share":"1/3","laureate_type":"Individual","name":"Shuji Nakamura","birth_date":"1954-05-22","birth_city":"Ikata","birth_country":"Japan","sex":"Male","organization_name":"University of California","organization_city":"Santa Barbara, CA","organization_country":"United States"},{"year":2015,"category":"Chemistry","motivation":"for mechanistic studies of DNA repair","prize_share":"1/3","laureate_type":"Individual","name":"Tomas Lindahl","birth_date":"1938-01-28","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"Francis Crick Institute","organization_city":"Hertfordshire","organization_country":"United Kingdom"},{"year":2015,"category":"Chemistry","motivation":"for mechanistic studies of DNA repair","prize_share":"1/3","laureate_type":"Individual","name":"Paul Modrich","birth_date":"1946-06-13","birth_city":"Raton, NM","birth_country":"United States","sex":"Male","organization_name":"Howard Hughes Medical Institute","organization_city":"Durham, NC","organization_country":"United States"},{"year":2015,"category":"Chemistry","motivation":"for mechanistic studies of DNA repair","prize_share":"1/3","laureate_type":"Individual","name":"Aziz Sancar","birth_date":"1946-09-08","birth_city":"Savur","birth_country":"Turkey","sex":"Male","organization_name":"University of North Carolina","organization_city":"Chapel Hill, NC","organization_country":"United States"},{"year":2015,"category":"Economics","motivation":"for his analysis of consumption, poverty, and welfare","prize_share":"1/1","laureate_type":"Individual","name":"Angus Deaton","birth_date":"1945-10-19","birth_city":"Edinburgh","birth_country":"United Kingdom","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2015,"category":"Literature","motivation":"for her polyphonic writings, a monument to suffering and courage in our time","prize_share":"1/1","laureate_type":"Individual","name":"Svetlana Alexievich","birth_date":"1948-05-31","birth_city":"Ivano-Frankivsk","birth_country":"Ukraine","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2015,"category":"Medicine","motivation":"for their discoveries concerning a novel therapy against infections caused by roundworm parasites","prize_share":"1/4","laureate_type":"Individual","name":"William C. Campbell","birth_date":"1930-06-28","birth_city":"Ramelton","birth_country":"Ireland","sex":"Male","organization_name":"Drew University","organization_city":"Madison, NJ","organization_country":"United States"},{"year":2015,"category":"Medicine","motivation":"for their discoveries concerning a novel therapy against infections caused by roundworm parasites","prize_share":"1/4","laureate_type":"Individual","name":"Satoshi Ōmura","birth_date":"1935-07-12","birth_city":"Yamanashi Prefecture","birth_country":"Japan","sex":"Male","organization_name":"Kitasato University","organization_city":"Tokyo","organization_country":"Japan"},{"year":2015,"category":"Medicine","motivation":"for her discoveries concerning a novel therapy against Malaria","prize_share":"2/4","laureate_type":"Individual","name":"Youyou Tu","birth_date":"1930-12-30","birth_city":"Zhejiang Ningbo","birth_country":"China","sex":"Female","organization_name":"China Academy of Traditional Chinese Medicine","organization_city":"Beijing","organization_country":"China"},{"year":2015,"category":"Peace","motivation":"for its decisive contribution to the building of a pluralistic democracy in Tunisia in the wake of the Jasmine Revolution of 2011","prize_share":"1/1","laureate_type":"Organization","name":"National Dialogue Quartet","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":"Tunisia"},{"year":2015,"category":"Physics","motivation":"for the discovery of neutrino oscillations, which shows that neutrinos have mass","prize_share":"1/2","laureate_type":"Individual","name":"Takaaki Kajita","birth_date":"1959-03-09","birth_city":"Higashimatsuyama","birth_country":"Japan","sex":"Male","organization_name":"University of Tokyo","organization_city":"Kashiwa","organization_country":"Japan"},{"year":2015,"category":"Physics","motivation":"for the discovery of neutrino oscillations, which shows that neutrinos have mass","prize_share":"1/2","laureate_type":"Individual","name":"Arthur B. McDonald","birth_date":"1943-08-29","birth_city":"Sydney","birth_country":"Canada","sex":"Male","organization_name":"Queen\'s University","organization_city":"Kingston","organization_country":"Canada"},{"year":2016,"category":"Chemistry","motivation":"for the design and synthesis of molecular machines","prize_share":"1/3","laureate_type":"Individual","name":"Jean-Pierre Sauvage","birth_date":"1944-10-21","birth_city":"Paris","birth_country":"France","sex":"Male","organization_name":"University of Strasbourg","organization_city":"Strasbourg","organization_country":"France"},{"year":2016,"category":"Chemistry","motivation":"for the design and synthesis of molecular machines","prize_share":"1/3","laureate_type":"Individual","name":"Sir J. Fraser Stoddart","birth_date":"1942-05-24","birth_city":"Edinburgh","birth_country":"United Kingdom","sex":"Male","organization_name":"Northwestern University","organization_city":"Evanston, IL","organization_country":"United States"},{"year":2016,"category":"Chemistry","motivation":"for the design and synthesis of molecular machines","prize_share":"1/3","laureate_type":"Individual","name":"Bernard L. Feringa","birth_date":"1951-05-18","birth_city":"Barger-Compascuum","birth_country":"Netherlands","sex":"Male","organization_name":"University of Groningen","organization_city":"Groningen","organization_country":"Netherlands"},{"year":2016,"category":"Economics","motivation":"for their contributions to contract theory","prize_share":"1/2","laureate_type":"Individual","name":"Oliver Hart","birth_date":"1948-10-09","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2016,"category":"Economics","motivation":"for their contributions to contract theory","prize_share":"1/2","laureate_type":"Individual","name":"Bengt Holmstr\xf6m","birth_date":"1949-04-18","birth_city":"Helsinki","birth_country":"Finland","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2016,"category":"Literature","motivation":"for having created new poetic expressions within the great American song tradition","prize_share":"1/1","laureate_type":"Individual","name":"Bob Dylan","birth_date":"1941-05-24","birth_city":"Duluth, MN","birth_country":"United States","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2016,"category":"Medicine","motivation":"for his discoveries of mechanisms for autophagy","prize_share":"1/1","laureate_type":"Individual","name":"Yoshinori Ohsumi","birth_date":"1945-02-09","birth_city":"Fukuoka","birth_country":"Japan","sex":"Male","organization_name":"Tokyo Institute of Technology","organization_city":"Tokyo","organization_country":"Japan"},{"year":2016,"category":"Peace","motivation":"for his resolute efforts to bring the country\'s more than 50-year-long civil war to an end","prize_share":"1/1","laureate_type":"Individual","name":"Juan Manuel Santos","birth_date":"1951-08-10","birth_city":"Bogot\xe1","birth_country":"Colombia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2016,"category":"Physics","motivation":"for theoretical discoveries of topological phase transitions and topological phases of matter","prize_share":"2/4","laureate_type":"Individual","name":"David J. Thouless","birth_date":"1934-09-21","birth_city":"Bearsden","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Washington","organization_city":"Seattle, WA","organization_country":"United States"},{"year":2016,"category":"Physics","motivation":"for theoretical discoveries of topological phase transitions and topological phases of matter","prize_share":"1/4","laureate_type":"Individual","name":"F. Duncan M. Haldane","birth_date":"1951-09-14","birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2016,"category":"Physics","motivation":"for theoretical discoveries of topological phase transitions and topological phases of matter","prize_share":"1/4","laureate_type":"Individual","name":"J. Michael Kosterlitz","birth_date":"1943-06-22","birth_city":"Aberdeen","birth_country":"United Kingdom","sex":"Male","organization_name":"Brown University","organization_city":"Providence, RI","organization_country":"United States"},{"year":2017,"category":"Chemistry","motivation":"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution.","prize_share":"1/3","laureate_type":"Individual","name":"Jacques Dubochet","birth_date":"1942-06-08","birth_city":"Aigle","birth_country":"Switzerland","sex":"Male","organization_name":"University of Lausanne","organization_city":"Lausanne","organization_country":"Switzerland"},{"year":2017,"category":"Chemistry","motivation":"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution.","prize_share":"1/3","laureate_type":"Individual","name":"Joachim Frank","birth_date":"1940-09-12","birth_city":"Siegen","birth_country":"Germany","sex":"Male","organization_name":"Columbia University","organization_city":"New York, NY","organization_country":"United States"},{"year":2017,"category":"Chemistry","motivation":"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution.","prize_share":"1/3","laureate_type":"Individual","name":"Richard Henderson","birth_date":"1945-07-19","birth_city":"Edinburgh","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2017,"category":"Economics","motivation":"for his contributions to behavioural economics.","prize_share":"1/1","laureate_type":"Individual","name":"Richard H. Thaler","birth_date":"1945-09-12","birth_city":"East Orange, NJ","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2017,"category":"Literature","motivation":"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world.","prize_share":"1/1","laureate_type":"Individual","name":"Kazuo Ishiguro","birth_date":"1954-11-08","birth_city":"Nagasaki","birth_country":"Japan","sex":"Male","organization_name":"","organization_city":"","organization_country":"United Kingdom"},{"year":2017,"category":"Medicine","motivation":"for their discoveries of molecular mechanisms controlling the circadian rhythm.","prize_share":"1/3","laureate_type":"Individual","name":"Jeffrey C. Hall","birth_date":"1945-05-03","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University of Maine","organization_city":"Maine, ME","organization_country":"United States"},{"year":2017,"category":"Medicine","motivation":"for their discoveries of molecular mechanisms controlling the circadian rhythm.","prize_share":"1/3","laureate_type":"Individual","name":"Michael Rosbash","birth_date":"1944-03-07","birth_city":"Kansas City, MO","birth_country":"United States","sex":"Male","organization_name":"Brandeis University","organization_city":"Waltham, MA","organization_country":"United States"},{"year":2017,"category":"Medicine","motivation":"for their discoveries of molecular mechanisms controlling the circadian rhythm.","prize_share":"1/3","laureate_type":"Individual","name":"Michael W. Young","birth_date":"1949-03-28","birth_city":"Miami, FL","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":2017,"category":"Peace","motivation":"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons.","prize_share":"1/1","laureate_type":"Organization","name":"International Campaign to Abolish Nuclear Weapons (ICAN)","birth_date":2007,"birth_city":"","birth_country":"Australia","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2017,"category":"Physics","motivation":"for decisive contributions to the LIGO detector and the observation of gravitational waves.","prize_share":"2/4","laureate_type":"Individual","name":"Rainer Weiss","birth_date":"1932-09-29","birth_city":"Berlin","birth_country":"Germany","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2017,"category":"Physics","motivation":"for decisive contributions to the LIGO detector and the observation of gravitational waves.","prize_share":"1/4","laureate_type":"Individual","name":"Barry C. Barish","birth_date":"1936-01-27","birth_city":"Omaha, NE","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":2017,"category":"Physics","motivation":"for decisive contributions to the LIGO detector and the observation of gravitational waves.","prize_share":"1/4","laureate_type":"Individual","name":"Kip S. Thorne","birth_date":"1940-06-01","birth_city":"Logan, UT","birth_country":"United States","sex":"Male","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":2018,"category":"Chemistry","motivation":"for the directed evolution of enzymes.","prize_share":"2/4","laureate_type":"Individual","name":"Frances H. Arnold","birth_date":"1956-07-25","birth_city":"Pittsburgh, PA","birth_country":"United States","sex":"Female","organization_name":"California Institute of Technology (Caltech)","organization_city":"Pasadena, CA","organization_country":"United States"},{"year":2018,"category":"Chemistry","motivation":"for the phage display of peptides and antibodies.","prize_share":"1/4","laureate_type":"Individual","name":"George P. Smith","birth_date":"1941-03-10","birth_city":"Norwalk, CT","birth_country":"United States","sex":"Male","organization_name":"University of Missouri","organization_city":"Columbia, MO","organization_country":"United States"},{"year":2018,"category":"Chemistry","motivation":"for the phage display of peptides and antibodies.","prize_share":"1/4","laureate_type":"Individual","name":"Sir Gregory P. Winter","birth_date":"1951-04-14","birth_city":"Leicester","birth_country":"United Kingdom","sex":"Male","organization_name":"MRC Laboratory of Molecular Biology","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2018,"category":"Economics","motivation":"for integrating climate change into long-run macroeconomic analysis.","prize_share":"1/2","laureate_type":"Individual","name":"William D. Nordhaus","birth_date":"1941-05-31","birth_city":"Albuquerque, NM","birth_country":"United States","sex":"Male","organization_name":"Yale University","organization_city":"New Haven, CT","organization_country":"United States"},{"year":2018,"category":"Economics","motivation":"for integrating technological innovations into long-run macroeconomic analysis.","prize_share":"1/2","laureate_type":"Individual","name":"Paul M. Romer","birth_date":1955,"birth_city":"Denver, CO","birth_country":"United States","sex":"Male","organization_name":"NYU Stern School of Business","organization_city":"New York, NY","organization_country":"United States"},{"year":2018,"category":"Literature","motivation":"for a narrative imagination that with encyclopedic passion represents the crossing of boundaries as a form of life.","prize_share":"1/1","laureate_type":"Individual","name":"Olga Tokarczuk","birth_date":"1962-01-29","birth_city":"Sulech\xf3w","birth_country":"Poland","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2018,"category":"Medicine","motivation":"for their discovery of cancer therapy by inhibition of negative immune regulation.","prize_share":"1/2","laureate_type":"Individual","name":"James P. Allison","birth_date":"1948-08-07","birth_city":"Alice, TX","birth_country":"United States","sex":"Male","organization_name":"University of Texas MD Anderson Cancer Center","organization_city":"Houston, TX","organization_country":"United States"},{"year":2018,"category":"Medicine","motivation":"for their discovery of cancer therapy by inhibition of negative immune regulation.","prize_share":"1/2","laureate_type":"Individual","name":"Tasuku Honjo","birth_date":"1942-01-27","birth_city":"Kyoto","birth_country":"Japan","sex":"Male","organization_name":"Kyoto University","organization_city":"Kyoto","organization_country":"Japan"},{"year":2018,"category":"Peace","motivation":"for their efforts to end the use of sexual violence as a weapon of war and armed conflict.","prize_share":"1/2","laureate_type":"Individual","name":"Denis Mukwege","birth_date":"1955-03-01","birth_city":"Bukavu","birth_country":"Congo, Republic of the","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2018,"category":"Peace","motivation":"for their efforts to end the use of sexual violence as a weapon of war and armed conflict.","prize_share":"1/2","laureate_type":"Individual","name":"Nadia Murad","birth_date":1993,"birth_city":"Kojo","birth_country":"Iraq","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2018,"category":"Physics","motivation":"“for groundbreaking inventions in the field of laser physics”","prize_share":"2/4","laureate_type":"Individual","name":"Arthur Ashkin","birth_date":"1922-09-02","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Bell Laboratories","organization_city":"Holmdel, NJ","organization_country":"United States"},{"year":2018,"category":"Physics","motivation":"“for groundbreaking inventions in the field of laser physics”","prize_share":"1/4","laureate_type":"Individual","name":"G\xe9rard Mourou","birth_date":"1944-06-22","birth_city":"Albertville","birth_country":"France","sex":"Male","organization_name":"University of Michigan","organization_city":"Ann Arbor, MI","organization_country":"United States"},{"year":2018,"category":"Physics","motivation":"“for groundbreaking inventions in the field of laser physics”","prize_share":"1/4","laureate_type":"Individual","name":"Donna Strickland","birth_date":"1959-05-27","birth_city":"Guelph","birth_country":"Canada","sex":"Female","organization_name":"University of Waterloo","organization_city":"Waterloo","organization_country":"Canada"},{"year":2019,"category":"Chemistry","motivation":"for the development of lithium-ion batteries.","prize_share":"1/3","laureate_type":"Individual","name":"John B. Goodenough","birth_date":"1922-07-25","birth_city":"Jena","birth_country":"Germany","sex":"Male","organization_name":"University of Texas","organization_city":"Austin, TX","organization_country":"United States"},{"year":2019,"category":"Chemistry","motivation":"for the development of lithium-ion batteries.","prize_share":"1/3","laureate_type":"Individual","name":"M. Stanley Whittingham","birth_date":"1941-12-22","birth_city":"Nottingham","birth_country":"United Kingdom","sex":"Male","organization_name":"Binghamton University","organization_city":"New York, NY","organization_country":"United States"},{"year":2019,"category":"Chemistry","motivation":"for the development of lithium-ion batteries.","prize_share":"1/3","laureate_type":"Individual","name":"Akira Yoshino","birth_date":"1948-01-30","birth_city":"Suita","birth_country":"Japan","sex":"Male","organization_name":"Meijo University","organization_city":"Nagoya","organization_country":"Japan"},{"year":2019,"category":"Economics","motivation":"for their experimental approach to alleviating global poverty.","prize_share":"1/3","laureate_type":"Individual","name":"Abhijit Banerjee","birth_date":"1961-02-21","birth_city":"Mumbai","birth_country":"India","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2019,"category":"Economics","motivation":"for their experimental approach to alleviating global poverty.","prize_share":"1/3","laureate_type":"Individual","name":"Esther Duflo","birth_date":"1972-10-25","birth_city":"Paris","birth_country":"France","sex":"Female","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2019,"category":"Economics","motivation":"for their experimental approach to alleviating global poverty.","prize_share":"1/3","laureate_type":"Individual","name":"Michael Kremer","birth_date":"1964-11-12","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Harvard University","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2019,"category":"Literature","motivation":"for an influential work that with linguistic ingenuity has explored the periphery and the specificity of human experience.","prize_share":"1/1","laureate_type":"Individual","name":"Peter Handke","birth_date":"1942-12-06","birth_city":"Griffen","birth_country":"Austria","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2019,"category":"Medicine","motivation":"for their discoveries of how cells sense and adapt to oxygen availability.","prize_share":"1/3","laureate_type":"Individual","name":"William G. Kaelin Jr","birth_date":"1957-11-23","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Howard Hughes Medical Institute","organization_city":"Chevy Chase, MD","organization_country":"United States"},{"year":2019,"category":"Medicine","motivation":"for their discoveries of how cells sense and adapt to oxygen availability.","prize_share":"1/3","laureate_type":"Individual","name":"Sir Peter J. Ratcliffe","birth_date":"1954-05-14","birth_city":"Lancashire","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":2019,"category":"Medicine","motivation":"for their discoveries of how cells sense and adapt to oxygen availability.","prize_share":"1/3","laureate_type":"Individual","name":"Gregg L. Semenza","birth_date":"1956-07-12","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"Johns Hopkins University","organization_city":"Baltimore, MD","organization_country":"United States"},{"year":2019,"category":"Peace","motivation":"for his efforts to achieve peace and international cooperation, and in particular for his decisive initiative to resolve the border conflict with neighbouring Eritrea.","prize_share":"1/1","laureate_type":"Individual","name":"Abiy Ahmed Ali","birth_date":"1976-08-15","birth_city":"Beshasha","birth_country":"Ethiopia","sex":"Male","organization_name":"Prime Minister of the Federal Democratic Republic of Ethiopia","organization_city":"","organization_country":"Ethiopia"},{"year":2019,"category":"Physics","motivation":"“for contributions to our understanding of the evolution of the universe and Earth’s place in the cosmos”","prize_share":"2/4","laureate_type":"Individual","name":"James Peebles","birth_date":"1935-04-25","birth_city":"Winnipeg","birth_country":"Canada","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2019,"category":"Physics","motivation":"“for contributions to our understanding of the evolution of the universe and Earth’s place in the cosmos”","prize_share":"1/4","laureate_type":"Individual","name":"Michel Mayor","birth_date":"1942-01-12","birth_city":"Lausanne","birth_country":"Switzerland","sex":"Male","organization_name":"University of Geneva","organization_city":"Geneva","organization_country":"Switzerland"},{"year":2019,"category":"Physics","motivation":"“for contributions to our understanding of the evolution of the universe and Earth’s place in the cosmos”","prize_share":"1/4","laureate_type":"Individual","name":"Didier Queloz","birth_date":"1966-02-23","birth_city":"Geneva","birth_country":"Switzerland","sex":"Male","organization_name":"University of Cambridge","organization_city":"Cambridge","organization_country":"United Kingdom"},{"year":2020,"category":"Physics","motivation":"“for the discovery that black hole formation is a robust prediction of the general theory of relativity”","prize_share":"1/2","laureate_type":"Individual","name":"Roger Penrose","birth_date":"1931-08-08","birth_city":"Colchester","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Oxford","organization_city":"Oxford","organization_country":"United Kingdom"},{"year":2020,"category":"Physics","motivation":"“for the discovery of a supermassive compact object at the centre of our galaxy”","prize_share":"1/4","laureate_type":"Individual","name":"Reinhard Genzel","birth_date":"1952-03-24","birth_city":"Bad Homburg vor der H\xf6he","birth_country":"Germany","sex":"Male","organization_name":"Max Planck Institute for Extraterrestrial Physics","organization_city":"Garching","organization_country":"Germany"},{"year":2020,"category":"Physics","motivation":"“for the discovery of a supermassive compact object at the centre of our galaxy”","prize_share":"1/4","laureate_type":"Individual","name":"Andrea Ghez","birth_date":"1965-06-16","birth_city":"New York, NY","birth_country":"United States","sex":"Female","organization_name":"University of California","organization_city":"Los Angeles, CA","organization_country":"United States"},{"year":2020,"category":"Chemistry","motivation":"“for the development of a method for genome editing”","prize_share":"1/2","laureate_type":"Individual","name":"Emmanuelle Charpentier","birth_date":"1968-12-11","birth_city":"Juvisy-sur-Orge","birth_country":"France","sex":"Female","organization_name":"Max Planck Unit for the Science of Pathogens","organization_city":"Berlin","organization_country":"Germany"},{"year":2020,"category":"Chemistry","motivation":"“for the development of a method for genome editing”","prize_share":"1/2","laureate_type":"Individual","name":"Jennifer A. Doudna","birth_date":"1964-02-19","birth_city":"Washington, D.C.","birth_country":"United States","sex":"Female","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2020,"category":"Medicine","motivation":"“for the discovery of Hepatitis C virus”","prize_share":"1/3","laureate_type":"Individual","name":"Harvey J. Alter","birth_date":"1935-10-12","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"National Institutes of Health","organization_city":"Bethesda","organization_country":"United States"},{"year":2020,"category":"Medicine","motivation":"“for the discovery of Hepatitis C virus”","prize_share":"1/3","laureate_type":"Individual","name":"Michael Houghton","birth_date":1949,"birth_city":"London","birth_country":"United Kingdom","sex":"Male","organization_name":"University of Alberta","organization_city":"Edmonton","organization_country":"Canada"},{"year":2020,"category":"Medicine","motivation":"“for the discovery of Hepatitis C virus”","prize_share":"1/3","laureate_type":"Individual","name":"Charles M. Rice","birth_date":"1952-08-25","birth_city":"Sacramento, CA","birth_country":"United States","sex":"Male","organization_name":"Rockefeller University","organization_city":"New York, NY","organization_country":"United States"},{"year":2020,"category":"Literature","motivation":"“for her unmistakable poetic voice that with austere beauty makes individual existence universal”","prize_share":"1/1","laureate_type":"Individual","name":"Louise Gl\xfcck","birth_date":"1943-04-22","birth_city":"New York, NY","birth_country":"United States","sex":"Female","organization_name":"","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2020,"category":"Peace","motivation":"“for its efforts to combat hunger, for its contribution to bettering conditions for peace in conflict-affected areas and for acting as a driving force in efforts to prevent the use of hunger as a weapon of war and conflict”","prize_share":"1/1","laureate_type":"Organization","name":"World Food Programme (WFP)","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2020,"category":"Economics","motivation":"“for improvements to auction theory and inventions of new auction formats”","prize_share":"1/2","laureate_type":"Individual","name":"Paul R. Milgrom","birth_date":"1948-04-20","birth_city":"Detroit, MI","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2020,"category":"Economics","motivation":"“for improvements to auction theory and inventions of new auction formats”","prize_share":"1/2","laureate_type":"Individual","name":"Robert B. Wilson","birth_date":"1937-05-16","birth_city":"Geneva, NE","birth_country":"United States","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2021,"category":"Physics","motivation":"“for the physical modelling of Earth’s climate, quantifying variability and reliably predicting global warming”","prize_share":"1/4","laureate_type":"Individual","name":"Syukuro Manabe","birth_date":"1931-09-21","birth_city":"Shingu, Ehime","birth_country":"Japan","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2021,"category":"Physics","motivation":"“for the physical modelling of Earth’s climate, quantifying variability and reliably predicting global warming”","prize_share":"1/4","laureate_type":"Individual","name":"Klaus Hasselmann","birth_date":"1931-10-25","birth_city":"Hamburg","birth_country":"Germany","sex":"Male","organization_name":"Max Planck Institute for Meteorology","organization_city":"Hamburg","organization_country":"Germany"},{"year":2021,"category":"Physics","motivation":"“for the discovery of the interplay of disorder and fluctuations in physical systems from atomic to planetary scales”","prize_share":"1/2","laureate_type":"Individual","name":"Giorgio Parisi","birth_date":"1948-08-04","birth_city":"Rome","birth_country":"Italy","sex":"Male","organization_name":"Sapienza University of Rome","organization_city":"Rome","organization_country":"Italy"},{"year":2021,"category":"Chemistry","motivation":"“for the development of asymmetric organocatalysis”","prize_share":"1/2","laureate_type":"Individual","name":"Benjamin List","birth_date":"1968-01-11","birth_city":"Frankfurt-on-the-Main","birth_country":"Germany","sex":"Male","organization_name":"Max-Planck-Institut f\xfcr Kohlenforschung","organization_city":"M\xfclheim an der Ruhr","organization_country":"Germany"},{"year":2021,"category":"Chemistry","motivation":"“for the development of asymmetric organocatalysis”","prize_share":"1/2","laureate_type":"Individual","name":"David W.C. MacMillan","birth_date":"1968-03-16","birth_city":"Bellshill","birth_country":"United Kingdom","sex":"Male","organization_name":"Princeton University","organization_city":"Princeton, NJ","organization_country":"United States"},{"year":2021,"category":"Medicine","motivation":"“for their discoveries of receptors for temperature and touch”","prize_share":"1/2","laureate_type":"Individual","name":"David Julius","birth_date":"1955-11-04","birth_city":"New York, NY","birth_country":"United States","sex":"Male","organization_name":"University of California","organization_city":"San Francisco, CA","organization_country":"United States"},{"year":2021,"category":"Medicine","motivation":"“for their discoveries of receptors for temperature and touch”","prize_share":"1/2","laureate_type":"Individual","name":"Ardem Patapoutian","birth_date":1967,"birth_city":"Beirut","birth_country":"Lebanon","sex":"Male","organization_name":"Scripps Research","organization_city":"La Jolla, CA","organization_country":"United States"},{"year":2021,"category":"Literature","motivation":"“for his uncompromising and compassionate penetration of the effects of colonialism and the fate of the refugee in the gulf between cultures and continents”","prize_share":"1/1","laureate_type":"Individual","name":"Abdulrazak Gurnah","birth_date":"1948-12-20","birth_city":"Zanzibar City","birth_country":"Tanzania","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2021,"category":"Peace","motivation":"“for their efforts to safeguard freedom of expression, which is a precondition for democracy and lasting peace”","prize_share":"1/2","laureate_type":"Individual","name":"Maria Ressa","birth_date":"1963-10-02","birth_city":"Manila","birth_country":"Philippines","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2021,"category":"Peace","motivation":"“for their efforts to safeguard freedom of expression, which is a precondition for democracy and lasting peace”","prize_share":"1/2","laureate_type":"Individual","name":"Dmitry Andreyevich Muratov","birth_date":1961,"birth_city":"Samara","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2021,"category":"Economics","motivation":"“for his empirical contributions to labour economics”","prize_share":"1/2","laureate_type":"Individual","name":"David Card","birth_date":1956,"birth_city":"Guelph","birth_country":"Canada","sex":"Male","organization_name":"University of California","organization_city":"Berkeley, CA","organization_country":"United States"},{"year":2021,"category":"Economics","motivation":"“for their methodological contributions to the analysis of causal relationships”","prize_share":"1/4","laureate_type":"Individual","name":"Joshua D. Angrist","birth_date":"1960-09-18","birth_city":"Columbus, OH","birth_country":"United States","sex":"Male","organization_name":"Massachusetts Institute of Technology (MIT)","organization_city":"Cambridge, MA","organization_country":"United States"},{"year":2021,"category":"Economics","motivation":"“for their methodological contributions to the analysis of causal relationships”","prize_share":"1/4","laureate_type":"Individual","name":"Guido W. Imbens","birth_date":"1963-09-03","birth_city":"Geldrop","birth_country":"Netherlands","sex":"Male","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2022,"category":"Physics","motivation":"“for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science”","prize_share":"1/3","laureate_type":"Individual","name":"Alain Aspect","birth_date":"1947-06-15","birth_city":"Agen","birth_country":"France","sex":"Male","organization_name":"Institut d’Optique Graduate School – Universit\xe9 Paris-Saclay","organization_city":"Paris","organization_country":"France"},{"year":2022,"category":"Physics","motivation":"“for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science”","prize_share":"1/3","laureate_type":"Individual","name":"John F. Clauser","birth_date":"1942-12-01","birth_city":"Pasadena, CA","birth_country":"United States","sex":"Male","organization_name":"J.F. Clauser & Assoc.","organization_city":"Walnut Creek, CA","organization_country":"United States"},{"year":2022,"category":"Physics","motivation":"“for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science”","prize_share":"1/3","laureate_type":"Individual","name":"Anton Zeilinger","birth_date":"1945-05-20","birth_city":"Ried im Innkreis","birth_country":"Austria","sex":"Male","organization_name":"University of Vienna","organization_city":"Vienna","organization_country":"Austria"},{"year":2022,"category":"Chemistry","motivation":"“for the development of click chemistry and bioorthogonal chemistry”","prize_share":"1/3","laureate_type":"Individual","name":"Carolyn R. Bertozzi","birth_date":"1966-10-10","birth_city":"Boston, MA","birth_country":"United States","sex":"Female","organization_name":"Stanford University","organization_city":"Stanford, CA","organization_country":"United States"},{"year":2022,"category":"Chemistry","motivation":"“for the development of click chemistry and bioorthogonal chemistry”","prize_share":"1/3","laureate_type":"Individual","name":"Morten Meldal","birth_date":1954,"birth_city":"Copenhagen","birth_country":"Denmark","sex":"Male","organization_name":"University of Copenhagen","organization_city":"Copenhagen","organization_country":"Denmark"},{"year":2022,"category":"Chemistry","motivation":"“for the development of click chemistry and bioorthogonal chemistry”","prize_share":"1/3","laureate_type":"Individual","name":"K. Barry Sharpless","birth_date":"1941-04-28","birth_city":"Philadelphia, PA","birth_country":"United States","sex":"Male","organization_name":"Scripps Research","organization_city":"La Jolla, CA","organization_country":"United States"},{"year":2022,"category":"Medicine","motivation":"“for his discoveries concerning the genomes of extinct hominins and human evolution”","prize_share":"1/1","laureate_type":"Individual","name":"Svante P\xe4\xe4bo","birth_date":"1955-04-20","birth_city":"Stockholm","birth_country":"Sweden","sex":"Male","organization_name":"Max Planck Institute for Evolutionary Anthropology","organization_city":"Leipzig","organization_country":"Germany"},{"year":2022,"category":"Literature","motivation":"“for the courage and clinical acuity with which she uncovers the roots, estrangements and collective restraints of personal memory”","prize_share":"1/1","laureate_type":"Individual","name":"Annie Ernaux","birth_date":"1940-09-01","birth_city":"Lillebonne","birth_country":"France","sex":"Female","organization_name":"","organization_city":"","organization_country":""},{"year":2022,"category":"Peace","motivation":"“The Peace Prize laureates represent civil society in their home countries. They have for many years promoted the right to criticise power and protect the fundamental rights of citizens. They have made an outstanding effort to document war crimes, human right abuses and the abuse of power. Together they demonstrate the significance of civil society for peace and democracy”","prize_share":"1/3","laureate_type":"Individual","name":"Ales Bialiatski","birth_date":"1962-09-25","birth_city":"Vyartsilya","birth_country":"Russia","sex":"Male","organization_name":"","organization_city":"","organization_country":""},{"year":2022,"category":"Peace","motivation":"“The Peace Prize laureates represent civil society in their home countries. They have for many years promoted the right to criticise power and protect the fundamental rights of citizens. They have made an outstanding effort to document war crimes, human right abuses and the abuse of power. Together they demonstrate the significance of civil society for peace and democracy”","prize_share":"1/3","laureate_type":"Organization","name":"Memorial","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2022,"category":"Peace","motivation":"“The Peace Prize laureates represent civil society in their home countries. They have for many years promoted the right to criticise power and protect the fundamental rights of citizens. They have made an outstanding effort to document war crimes, human right abuses and the abuse of power. Together they demonstrate the significance of civil society for peace and democracy”","prize_share":"1/3","laureate_type":"Organization","name":"Center for Civil Liberties","birth_date":"","birth_city":"","birth_country":"","sex":"","organization_name":"","organization_city":"","organization_country":""},{"year":2022,"category":"Economics","motivation":"“for research on banks and financial crises”","prize_share":"1/3","laureate_type":"Individual","name":"Ben S. Bernanke","birth_date":"1953-12-13","birth_city":"Augusta, GA","birth_country":"United States","sex":"Male","organization_name":"The Brookings Institution","organization_city":"Washington, D.C.","organization_country":"United States"},{"year":2022,"category":"Economics","motivation":"“for research on banks and financial crises”","prize_share":"1/3","laureate_type":"Individual","name":"Douglas W. Diamond","birth_date":"1953-10-25","birth_city":"Chicago, IL","birth_country":"United States","sex":"Male","organization_name":"University of Chicago","organization_city":"Chicago, IL","organization_country":"United States"},{"year":2022,"category":"Economics","motivation":"“for research on banks and financial crises”","prize_share":"1/3","laureate_type":"Individual","name":"Philip H. Dybvig","birth_date":"1955-05-22","birth_city":"Gainesville, FL","birth_country":"United States","sex":"Male","organization_name":"Washington University","organization_city":"St. Louis, MO","organization_country":"United States"}]');

},{}],"5bQcD":[function(require,module,exports) {
module.exports = JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[74.92,37.24],[74.57,37.03],[72.56,36.82],[71.24,36.13],[71.65,35.42],[71.08,34.06],[69.91,34.04],[70.33,33.33],[69.51,33.03],[69.33,31.94],[66.72,31.21],[66.26,29.85],[62.48,29.41],[60.87,29.86],[61.85,31.02],[60.84,31.5],[60.58,33.07],[60.94,33.52],[60.51,34.14],[61.28,35.61],[62.72,35.25],[63.12,35.86],[64.5,36.28],[64.8,37.12],[66.54,37.37],[67.78,37.19],[69.32,37.12],[70.97,38.47],[71.59,37.9],[71.68,36.68],[73.31,37.46],[74.92,37.24]]]]},"properties":{"name":"Afghanistan"},"id":"AF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[19.44,41.02],[19.37,41.85],[19.65,42.62],[20.07,42.56],[20.59,41.88],[20.82,40.91],[20.98,40.86],[20.01,39.69],[19.29,40.42],[19.44,41.02]]]]},"properties":{"name":"Albania"},"id":"AL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[2.96,36.8],[8.62,36.94],[8.18,36.52],[8.25,34.64],[7.49,33.89],[9.06,32.1],[9.54,30.23],[9.95,27.82],[9.87,26.51],[9.4,26.15],[10.25,24.61],[11.56,24.3],[11.99,23.52],[5.81,19.45],[4.25,19.15],[3.33,18.98],[3.23,19.82],[1.8,20.31],[-4.81,25],[-6.66,26.13],[-8.67,27.29],[-8.67,27.67],[-8.67,28.71],[-3.63,30.97],[-3.82,31.7],[-1.18,32.11],[-1.75,34.75],[-2.21,35.09],[0.95,36.45],[2.96,36.8]]]]},"properties":{"name":"Algeria"},"id":"DZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-170.64,-14.29],[-170.83,-14.33],[-170.56,-14.27],[-170.64,-14.29]]],[[[-169.44,-14.26],[-169.51,-14.28],[-169.54,-14.23],[-169.44,-14.26]]]]},"properties":{"name":"Samoa"},"id":"WS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[1.78,42.57],[1.72,42.51],[1.45,42.6],[1.78,42.57]]]]},"properties":{"name":"Andorra"},"id":"AD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[14,-5.85],[16.58,-5.9],[17.62,-8.1],[19.37,-8],[19.54,-7],[21.78,-7.28],[22.25,-11.21],[23.99,-10.87],[24.02,-13.01],[22,-13],[22,-16.17],[23.48,-17.63],[23.28,-17.66],[20.85,-18.02],[18.45,-17.39],[13.99,-17.42],[13.16,-16.95],[11.75,-17.25],[12.51,-13.43],[13.79,-11.79],[12.98,-9.09],[13.39,-8.39],[12.24,-6.1],[13.18,-5.86],[14,-5.85]]],[[[13.09,-4.66],[12.21,-5.77],[12.03,-5.01],[12.78,-4.39],[13.09,-4.63],[13.09,-4.66]]]]},"properties":{"name":"Angola"},"id":"AO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-61.69,17.02],[-61.89,17.11],[-61.79,17.16],[-61.69,17.02]]],[[[-61.73,17.61],[-61.85,17.58],[-61.87,17.7],[-61.73,17.61]]]]},"properties":{"name":"Antigua and Barbuda"},"id":"AG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[45.08,39.77],[45.82,39.55],[46.18,38.84],[45,39.42],[44.81,39.63],[44.78,39.71],[45.08,39.77]]],[[[45.51,40.61],[45.52,40.67],[45.57,40.63],[45.51,40.61]]],[[[46.57,41.87],[47.77,41.2],[48.58,41.84],[50.37,40.26],[49.49,40.15],[48.89,38.44],[48.02,38.84],[48.36,39.39],[47.98,39.72],[46.54,38.88],[46.54,39.56],[45.6,39.98],[46,40.23],[45.15,41.2],[45.02,41.3],[46.52,41.05],[46.45,41.9],[46.57,41.87]]]]},"properties":{"name":"Azerbaijan"},"id":"AZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-68.26,-52.99],[-68.54,-53.23],[-67.36,-54.03],[-65.14,-54.65],[-66.45,-55.05],[-68.64,-54.79],[-68.62,-52.64],[-68.26,-52.99]]],[[[-65.75,-22.11],[-65.19,-22.09],[-64.59,-22.21],[-64.32,-22.87],[-63.94,-22],[-62.64,-22.24],[-61.01,-23.81],[-57.76,-25.18],[-57.58,-25.55],[-58.6,-27.32],[-55.74,-27.44],[-54.7,-26.44],[-54.6,-25.57],[-53.86,-25.68],[-53.81,-27.13],[-55.77,-28.23],[-57.61,-30.18],[-57.81,-30.75],[-58.2,-32.45],[-58.15,-33.05],[-58.43,-33.1],[-58.53,-33.52],[-58.47,-34.54],[-57.19,-35.32],[-57.38,-35.96],[-56.66,-36.9],[-58.3,-38.49],[-62.38,-38.8],[-62.02,-39.38],[-62.39,-40.9],[-65.13,-40.85],[-65.01,-42.09],[-64.45,-42.45],[-63.75,-42.09],[-63.58,-42.62],[-64.96,-42.67],[-64.3,-42.99],[-65.32,-43.65],[-65.6,-45.02],[-66.95,-45.26],[-67.58,-46],[-66.82,-46.99],[-65.78,-47.19],[-66.24,-47.86],[-65.79,-47.96],[-67.58,-49.03],[-67.9,-49.99],[-69.01,-50.01],[-68.37,-50.15],[-69.41,-51.08],[-68.97,-51.57],[-69.61,-51.63],[-68.99,-51.62],[-68.44,-52.38],[-71.91,-52],[-72.4,-51.51],[-72.29,-50.65],[-73.17,-50.75],[-73.58,-49.54],[-72.56,-48.8],[-72.36,-47.47],[-71.67,-46.68],[-71.78,-45.65],[-71.3,-45.29],[-72.08,-44.77],[-71.11,-44.54],[-71.86,-44.37],[-72.13,-42.29],[-71.73,-42.1],[-71.7,-39.58],[-70.82,-38.57],[-71.19,-36.84],[-70.42,-36.14],[-70.57,-35.25],[-69.81,-34.24],[-70.53,-31.19],[-69.83,-30.19],[-69.66,-28.4],[-68.29,-26.92],[-68.57,-24.77],[-67.34,-24.02],[-67.18,-22.82],[-66.22,-21.78],[-65.75,-22.11]]]]},"properties":{"name":"Argentina"},"id":"AR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[145.11,-40.82],[146.59,-41.19],[148.22,-40.85],[148,-43.23],[147.32,-42.85],[146.92,-43.62],[146.04,-43.5],[144.68,-41.22],[144.7,-40.76],[145.11,-40.82]]],[[[142.51,-10.87],[143.78,-14.41],[144.51,-14.17],[145.32,-14.95],[146.28,-18.88],[148.78,-20.23],[149.66,-22.5],[150.64,-22.34],[150.87,-23.51],[153.18,-25.95],[153.03,-27.18],[153.63,-28.67],[153.05,-31.04],[150.16,-35.94],[149.97,-37.52],[147.76,-37.98],[146.22,-38.71],[146.39,-39.15],[145.45,-38.23],[144.9,-38.5],[144.93,-37.87],[143.54,-38.86],[141.57,-38.42],[139.81,-37.3],[139.82,-36.55],[139.08,-35.68],[139.67,-36.23],[139.1,-35.62],[139.36,-35.37],[138.09,-35.62],[138.51,-35.03],[138.1,-34.14],[137.74,-35.14],[136.83,-35.25],[137.44,-34.93],[137.95,-33.56],[137.77,-32.52],[135.95,-35.01],[135.11,-34.6],[135.51,-34.62],[134.18,-32.49],[131.15,-31.47],[125.97,-32.27],[124.28,-32.99],[123.54,-33.91],[120,-33.93],[117.93,-35.13],[115.01,-34.26],[114.99,-33.52],[115.71,-33.27],[115.74,-31.87],[114.89,-29.2],[113.22,-26.24],[113.86,-26.51],[113.47,-25.54],[114.22,-26.31],[113.39,-24.43],[114.02,-21.85],[114.15,-22.53],[116.71,-20.65],[121.03,-19.59],[122.35,-18.11],[122.17,-17.24],[122.92,-16.42],[123.58,-17.6],[123.6,-16.99],[123.92,-17.2],[123.57,-16.17],[123.73,-16.14],[123.89,-16.38],[123.96,-16.25],[124.24,-16.41],[124.9,-16.42],[124.4,-16.33],[124.43,-16.1],[124.59,-16.11],[124.73,-15.81],[124.4,-15.87],[124.45,-15.49],[125.18,-15.52],[124.83,-15.16],[125.43,-15.14],[125.14,-14.74],[125.61,-14.22],[125.64,-14.64],[126.04,-14.52],[126.02,-13.92],[126.29,-14.23],[126.86,-13.75],[127.42,-13.95],[128.17,-14.7],[128.01,-15.5],[128.53,-14.76],[129.73,-15.2],[129.94,-14.77],[129.37,-14.33],[130.58,-12.4],[132.75,-12.13],[131.98,-11.13],[135.23,-12.29],[135.91,-11.76],[135.67,-12.2],[136.04,-12.47],[136.56,-11.93],[136.98,-12.36],[136.46,-13.25],[135.92,-13.28],[135.46,-14.94],[139.26,-17.34],[140.49,-17.64],[141.43,-16.08],[141.58,-12.99],[141.94,-12.88],[141.59,-12.55],[142.51,-10.87]]]]},"properties":{"name":"Australia"},"id":"AU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[13.83,48.77],[14.7,48.58],[15.03,49.02],[16.95,48.62],[17.17,48.01],[16.45,47.7],[16.51,47.01],[16.11,46.87],[13.72,46.53],[12.13,47],[10.47,46.87],[9.6,47.06],[9.53,47.27],[9.57,47.54],[13.02,47.47],[12.76,48.12],[13.83,48.77]]]]},"properties":{"name":"Austria"},"id":"AT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-73.04,21.14],[-73.69,20.94],[-73.02,21.33],[-73.04,21.14]]],[[[-77.74,24.03],[-77.68,24.3],[-77.57,23.74],[-77.74,24.03]]],[[[-78.19,25.2],[-77.72,24.51],[-78.02,24.27],[-78.44,24.61],[-78.19,25.2]]],[[[-77.92,26.75],[-78.71,26.49],[-78.98,26.7],[-77.92,26.75]]],[[[-77.74,26.91],[-77.04,26.51],[-77.2,25.88],[-77.15,26.55],[-77.74,26.91]]]]},"properties":{"name":"Bahamas, The"},"id":"BS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[50.53,26.23],[50.57,25.81],[50.46,25.97],[50.53,26.23]]]]},"properties":{"name":"Bahrain"},"id":"BH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[90.76,22.06],[90.6,22.78],[90.88,22.46],[90.76,22.06]]],[[[88.43,26.55],[89.74,26.16],[89.85,25.29],[92.41,25.03],[91.16,23.64],[91.61,22.94],[92.28,23.71],[92.6,21.98],[92.26,21.05],[92.32,20.74],[91.7,22.49],[90.83,22.69],[90.59,23.6],[90.27,21.85],[90.02,21.86],[90.07,22.16],[89.93,22],[90,22.48],[89.58,21.7],[89.62,22.32],[89.25,21.64],[89.06,22.12],[88.75,24.22],[88.04,24.68],[89.01,25.29],[88.11,25.84],[88.43,26.55]],[[90.24,22.19],[90.06,21.99],[90.22,22.11],[90.24,22.19]]]]},"properties":{"name":"Bangladesh"},"id":"BD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[45.15,41.2],[46,40.23],[45.6,39.98],[46.54,39.56],[46.54,38.88],[46.18,38.84],[45.82,39.55],[45.08,39.77],[44.78,39.71],[43.66,40.11],[43.46,41.11],[45.02,41.3],[45.15,41.2]],[[45.57,40.63],[45.52,40.67],[45.51,40.61],[45.57,40.63]]]]},"properties":{"name":"Armenia"},"id":"AM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-59.53,13.05],[-59.64,13.33],[-59.43,13.16],[-59.53,13.05]]]]},"properties":{"name":"Barbados"},"id":"BB"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[4.3,51.26],[4.25,51.38],[5.04,51.49],[6.01,50.76],[6.13,50.13],[6.03,50.18],[5.81,49.55],[4.83,50.17],[4.15,49.98],[2.54,51.09],[3.37,51.37],[4.24,51.35],[4.3,51.26]]]]},"properties":{"name":"Belgium"},"id":"BE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-64.78,32.27],[-64.86,32.27],[-64.67,32.38],[-64.78,32.27]]]]},"properties":{"name":"Bermuda"},"id":"BM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[90.47,28.07],[91.66,27.76],[92.07,26.86],[89.64,26.72],[88.92,27.32],[89.59,28.14],[90.47,28.07]]]]},"properties":{"name":"Bhutan"},"id":"BT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-65.19,-22.09],[-65.75,-22.11],[-66.22,-21.78],[-67.18,-22.82],[-67.88,-22.83],[-68.76,-20.41],[-68.44,-19.43],[-69.48,-17.64],[-69.5,-17.51],[-68.82,-16.34],[-69.42,-15.62],[-68.67,-12.5],[-69.57,-10.95],[-68.58,-11.11],[-66.63,-9.91],[-65.38,-9.7],[-64.99,-12.01],[-60.47,-13.81],[-60.16,-16.26],[-58.33,-16.28],[-58.4,-17.25],[-57.52,-18.2],[-58.16,-20.17],[-59.1,-19.35],[-61.74,-19.65],[-62.64,-22.24],[-63.94,-22],[-64.32,-22.87],[-64.59,-22.21],[-65.19,-22.09]]]]},"properties":{"name":"Bolivia"},"id":"BO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[17.65,42.89],[17.58,42.94],[16.14,44.2],[15.79,45.17],[19.04,44.86],[19.62,44.05],[19.23,43.51],[18.46,42.57],[17.65,42.89]]]]},"properties":{"name":"Bosnia and Herzegovina"},"id":"BA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[26.96,-23.75],[25.51,-25.68],[23.01,-25.3],[21.67,-26.86],[20.64,-26.83],[20.81,-25.88],[20,-24.77],[20,-22.01],[20.99,-22],[20.99,-18.32],[23.3,-18],[23.62,-18.49],[25.26,-17.8],[26.17,-19.53],[27.71,-20.51],[28.02,-21.57],[29.37,-22.19],[26.96,-23.75]]]]},"properties":{"name":"Botswana"},"id":"BW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[3.36,-54.46],[3.37,-54.4],[3.48,-54.4],[3.36,-54.46]]]]},"properties":{"name":"Bouvet Island"},"id":"BV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-51.9,-1.48],[-51.89,-1.18],[-51.66,-1.08],[-51.61,-0.73],[-51.2,-0.53],[-51.27,-1.01],[-51.9,-1.48]]],[[[-49.71,-0.23],[-48.37,-0.29],[-48.63,-1.06],[-49.17,-1.61],[-50.58,-1.8],[-50.66,-0.28],[-49.71,-0.23]]],[[[-60.1,5.22],[-60.15,4.52],[-59.57,3.9],[-59.99,2.69],[-59.64,1.73],[-58.81,1.19],[-56.47,1.94],[-55.9,1.89],[-55.97,2.53],[-54.6,2.33],[-52.91,2.2],[-51.68,4.03],[-51.54,4.39],[-51.09,3.91],[-50.68,2.16],[-49.93,1.71],[-49.9,1.17],[-51.26,-0.14],[-51.7,-0.75],[-51.71,-1.03],[-51.92,-1.17],[-51.94,-1.34],[-52.71,-1.6],[-52.21,-1.69],[-50.85,-0.92],[-50.66,-1.77],[-51.34,-1.65],[-51.45,-2.27],[-51.31,-1.76],[-50.85,-2.51],[-50.68,-1.81],[-49.29,-1.71],[-49.49,-2.56],[-48.7,-1.47],[-48.18,-1.47],[-48.5,-1.46],[-48.24,-0.87],[-47.43,-0.58],[-45.33,-1.31],[-45.35,-1.74],[-44.86,-1.43],[-44.36,-2.34],[-44.79,-3.3],[-44.06,-2.41],[-44.34,-2.83],[-43.35,-2.37],[-41.25,-3.02],[-40,-2.85],[-37.17,-4.92],[-35.42,-5.21],[-34.8,-7.63],[-35.29,-9.18],[-37.15,-10.75],[-38.04,-12.63],[-38.49,-13.02],[-38.9,-12.71],[-39.13,-17.68],[-40.97,-21.99],[-42.03,-22.92],[-43.08,-22.67],[-44.66,-23.05],[-44.58,-23.36],[-46.38,-23.87],[-48.21,-25.46],[-48.72,-25.42],[-48.36,-25.58],[-48.8,-26.07],[-48.49,-27.21],[-48.77,-28.52],[-52.07,-32.17],[-50.57,-30.46],[-51.28,-30.01],[-51.27,-30.8],[-53.37,-33.74],[-53.52,-33.15],[-53.09,-32.73],[-53.88,-31.97],[-55.58,-30.85],[-56.01,-31.08],[-56.81,-30.11],[-57.61,-30.18],[-55.77,-28.23],[-53.81,-27.13],[-53.86,-25.68],[-54.6,-25.57],[-54.33,-24.68],[-54.41,-23.92],[-55.41,-23.96],[-55.85,-22.29],[-57.99,-22.09],[-58.16,-20.17],[-57.52,-18.2],[-58.4,-17.25],[-58.33,-16.28],[-60.16,-16.26],[-60.47,-13.81],[-64.99,-12.01],[-65.38,-9.7],[-66.63,-9.91],[-68.58,-11.11],[-69.57,-10.95],[-70.63,-11.01],[-70.51,-9.43],[-72.14,-10],[-72.37,-9.49],[-73.21,-9.41],[-72.96,-8.98],[-74.01,-7.54],[-73.12,-6.45],[-72.85,-5.12],[-70.77,-4.15],[-69.96,-4.24],[-69.38,-1.34],[-70.04,0.59],[-69.12,0.65],[-69.84,1.07],[-69.85,1.71],[-67.91,1.75],[-67.42,2.14],[-66.87,1.22],[-65.52,0.65],[-63.39,2.15],[-64.05,2.48],[-64.8,4.28],[-62.88,3.56],[-62.75,4.03],[-60.99,4.52],[-60.73,5.2],[-60.1,5.22]]]]},"properties":{"name":"Brazil"},"id":"BR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-88.38,18.48],[-88.3,18.48],[-88.21,16.97],[-88.91,15.89],[-89.22,15.89],[-89.14,17.82],[-88.38,18.48]]]]},"properties":{"name":"Belize"},"id":"BZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[72.49,-7.38],[72.36,-7.27],[72.45,-7.23],[72.49,-7.38]]]]},"properties":{"name":"British Indian Ocean Territory"},"id":"IO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[161.55,-10.28],[162.39,-10.84],[161.28,-10.33],[161.55,-10.28]]],[[[159.94,-9.43],[160.83,-9.86],[159.83,-9.8],[159.6,-9.32],[159.94,-9.43]]],[[[160.97,-8.85],[161.38,-9.64],[160.58,-8.33],[160.97,-8.85]]],[[[157.63,-8.24],[157.81,-8.62],[157.21,-8.24],[157.63,-8.24]]],[[[159.85,-8.33],[159.89,-8.57],[158.49,-7.55],[159.85,-8.33]]],[[[157.43,-7.32],[156.94,-7.22],[156.44,-6.64],[157.43,-7.32]]]]},"properties":{"name":"Solomon Islands"},"id":"SB"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-64.42,18.44],[-64.41,18.51],[-64.32,18.51],[-64.42,18.44]]]]},"properties":{"name":"British Virgin Islands"},"id":"VG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[115.22,4.8],[115.34,4.31],[115.03,4.82],[115.15,4.9],[115.22,4.8]]],[[[114.98,4.89],[115.02,4.9],[114.64,4.02],[114.1,4.59],[114.98,4.89]]]]},"properties":{"name":"Brunei"},"id":"BN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[27.88,42.84],[27.45,42.47],[28.01,41.98],[27.39,42.01],[26.36,41.71],[26.29,41.71],[25.29,41.24],[22.94,41.34],[22.37,42.32],[23,43.19],[22.37,43.83],[22.68,44.22],[24.18,43.68],[27.04,44.15],[28.58,43.75],[27.88,42.84]]]]},"properties":{"name":"Bulgaria"},"id":"BG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[97.81,28.34],[98.7,27.54],[98.78,26.64],[98.71,25.86],[97.55,24.74],[97.54,23.94],[98.89,24.16],[98.93,23.19],[99.57,22.94],[99.16,22.16],[99.96,22.05],[100.21,21.43],[101.15,21.57],[100.09,20.35],[100.08,20.35],[98.05,19.81],[97.77,18.57],[97.35,18.56],[98.93,16.39],[98.2,15.07],[99.17,13.73],[99.66,11.83],[98.74,10.35],[98.55,9.98],[98.89,11.7],[97.8,14.88],[97.74,16.56],[97.38,16.49],[96.88,17.45],[96.78,16.7],[96.24,16.8],[95.43,15.73],[95.36,16.14],[94.85,15.78],[94.99,16.25],[94.65,15.85],[94.63,16.34],[94.25,15.96],[94.61,17.55],[93.99,19.46],[93.73,19.93],[93.13,19.84],[93.08,20.55],[92.86,20.12],[92.26,21.05],[92.6,21.98],[93.2,22.26],[93.34,24.08],[94.15,23.86],[95.14,26.61],[96.19,27.27],[97.14,27.09],[96.89,27.61],[97.35,28.22],[97.81,28.34]]]]},"properties":{"name":"Burma"},"id":"MM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[29.23,-3.75],[29.02,-2.74],[29.85,-2.76],[29.95,-2.31],[30.57,-2.4],[30.83,-3.26],[29.42,-4.45],[29.23,-3.75]]]]},"properties":{"name":"Burundi"},"id":"BI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[26.61,55.67],[28.17,56.15],[30.93,55.6],[30.78,54.79],[32.74,53.46],[31.27,53.02],[31.78,52.11],[30.94,52.07],[30.55,51.25],[25.78,51.94],[23.6,51.53],[23.64,52.08],[23.17,52.28],[23.94,52.73],[23.5,53.95],[25.79,54.16],[25.79,54.87],[26.82,55.28],[26.61,55.67]]]]},"properties":{"name":"Belarus"},"id":"BY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[107.49,14.45],[107.55,12.35],[105.85,11.66],[106.2,10.77],[105.1,10.96],[104.45,10.42],[103.62,10.5],[103.56,11.16],[103.13,10.88],[102.92,11.64],[102.38,13.57],[103.18,14.33],[105.21,14.35],[106.06,13.93],[106,14.37],[107.55,14.71],[107.49,14.45]]]]},"properties":{"name":"Cambodia"},"id":"KH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[14.58,12.74],[15.68,9.99],[13.96,9.64],[15.2,8.49],[15.5,7.53],[14.42,6.04],[14.73,4.62],[16.21,2.22],[16.07,1.65],[13.29,2.16],[12.52,2.28],[11.34,2.17],[10.03,2.17],[9.81,2.34],[9.72,3.87],[8.98,4.1],[8.59,4.81],[9.8,6.8],[10.62,7.07],[11.34,6.44],[11.86,7.08],[13.81,11.06],[14.65,11.58],[14.07,13.08],[14.5,13],[14.58,12.74]]]]},"properties":{"name":"Cameroon"},"id":"CM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-127.23,50.64],[-125.45,50.32],[-123.29,48.41],[-125.11,48.73],[-124.81,49.24],[-125.48,48.92],[-125.9,49.44],[-126.54,49.37],[-126.09,49.66],[-127.9,50.11],[-127.41,50.59],[-128.42,50.77],[-127.23,50.64]]],[[[-53.76,48.5],[-52.98,48.6],[-53.95,48.18],[-53.55,47.53],[-52.83,48.1],[-53.27,47.61],[-52.61,47.52],[-53.1,46.64],[-53.62,46.64],[-53.59,47.16],[-54.19,46.82],[-53.87,47.4],[-54.2,47.86],[-55.69,46.86],[-55.98,46.95],[-54.94,47.78],[-55.59,47.4],[-56.17,47.5],[-55.77,47.96],[-56.84,47.52],[-59.41,47.89],[-58.42,48.49],[-59.26,48.48],[-58.4,49.13],[-57.88,48.97],[-58.22,49.39],[-57.7,49.46],[-57.38,50.69],[-55.9,51.63],[-55.41,51.56],[-56.09,51.37],[-55.73,51.08],[-56.85,49.54],[-56.15,50.15],[-55.49,50.01],[-56.13,49.43],[-55.14,49.55],[-55.38,49.04],[-53.78,49.4],[-53.49,49.22],[-54.1,48.81],[-53.76,48.5]],[[-53.76,48.5],[-54.09,48.43],[-54.14,48.36],[-53.76,48.5]]],[[[-85.48,65.79],[-84.92,65.21],[-84.44,65.46],[-81.76,64.5],[-81.99,63.99],[-80.17,63.77],[-81.08,63.45],[-83.07,64.19],[-85.27,63.12],[-85.72,63.72],[-87.19,63.59],[-86.19,64.1],[-86.1,65.53],[-85.48,65.79]]],[[[-95.9,66.95],[-95.22,66.97],[-95.71,67.73],[-95.47,68.06],[-93.55,68.59],[-93.67,68.97],[-94.63,68.76],[-94.3,69.3],[-93.36,69.37],[-96.53,70.13],[-95.79,70.54],[-96.61,70.79],[-96.5,71.28],[-94.61,71.86],[-95.22,71.94],[-93.71,71.76],[-92.97,71.34],[-93.03,70.85],[-91.51,70.17],[-92.92,69.67],[-90.31,69.45],[-91.45,69.35],[-90.44,68.87],[-90.27,68.24],[-89.31,69.25],[-88.05,68.82],[-87.79,68.33],[-88.37,67.96],[-87.51,67.11],[-86.52,67.35],[-85.66,68.73],[-84.53,69.02],[-85.47,69.27],[-85.57,69.86],[-82.26,69.64],[-83.23,69.54],[-81.33,69.18],[-82.06,68.87],[-81.27,68.63],[-82.64,68.5],[-81.24,67.47],[-81.5,67],[-83.4,66.35],[-83.92,66.88],[-84.27,66.72],[-84.37,66.97],[-84.92,67.06],[-84.64,66.98],[-85.23,66.88],[-84.6,66.94],[-83.69,66.19],[-86.78,66.53],[-85.9,66.17],[-87.4,65.32],[-91.43,65.95],[-86.93,65.14],[-88.11,64.14],[-90.12,64.13],[-89.81,63.94],[-90.28,64],[-90.21,63.61],[-92.48,63.81],[-90.63,63.06],[-92.42,62.83],[-91.89,62.6],[-93.62,61.94],[-93.24,61.78],[-93.98,61.46],[-94.82,59.64],[-94.23,58.78],[-94.36,58.22],[-94.14,58.76],[-93.15,58.74],[-92.42,57.34],[-92.88,56.91],[-90.82,57.26],[-85.71,55.63],[-85.12,55.34],[-85.42,54.99],[-82.31,55.15],[-82.3,53.02],[-81.55,52.44],[-81.88,52.19],[-80.44,51.46],[-81.02,51.03],[-80.12,51.3],[-79.33,50.72],[-79.75,51.18],[-79.32,51.66],[-78.85,51.17],[-79.04,51.77],[-78.51,52.46],[-79.05,54.18],[-79.76,54.65],[-77.75,55.3],[-76.53,56.32],[-76.86,57.72],[-78.57,58.64],[-77.77,59.71],[-77.31,59.56],[-77.43,59.91],[-76.76,60.16],[-77.59,60.06],[-77.41,60.54],[-77.83,60.64],[-77.51,60.84],[-78.19,60.79],[-77.47,61.54],[-78.16,62.28],[-77.51,62.56],[-74.57,62.1],[-73.68,62.48],[-72.01,61.68],[-72.3,61.57],[-71.58,61.61],[-71.89,61.43],[-71.39,61.14],[-69.52,61.07],[-69.62,60.07],[-70.95,60.06],[-69.6,59.83],[-69.76,59.32],[-69.23,59.23],[-70.15,58.78],[-69.82,58.59],[-68.36,58.78],[-68.34,58.13],[-69.37,57.77],[-68.4,58.04],[-68,58.58],[-68.13,58.07],[-67.72,58.46],[-67.71,57.92],[-66.39,58.85],[-66.06,58.32],[-65.99,58.9],[-65.32,59.04],[-65.56,59.49],[-64.98,59.38],[-65.53,59.72],[-64.47,60.28],[-64.83,59.99],[-64.17,60.02],[-63.72,59.51],[-64.06,59.38],[-63.36,59.2],[-64.04,59.02],[-62.85,58.69],[-63.59,58.3],[-62.56,58.48],[-63.34,57.98],[-62.45,58.18],[-62.67,57.93],[-61.88,57.63],[-62.55,57.5],[-61.36,57.09],[-61.67,56.62],[-62.57,56.79],[-60.67,55.59],[-60.33,55.78],[-60.68,54.99],[-59.78,55.33],[-59.43,55.14],[-59.94,54.75],[-59.16,55.24],[-59.39,54.98],[-57.35,54.58],[-60.13,53.53],[-60.86,53.79],[-60.1,53.5],[-60.42,53.27],[-57.79,54.07],[-58.18,54.24],[-57.38,54.15],[-57.34,53.44],[-56.46,53.78],[-55.81,53.34],[-56.17,53.03],[-55.76,52.61],[-56.5,52.59],[-55.65,52.44],[-56.2,52.44],[-55.7,52.08],[-56.95,51.42],[-58.63,51.28],[-60.01,50.25],[-66.47,50.26],[-67.38,49.33],[-69.06,48.77],[-71.3,46.74],[-68.21,48.64],[-65,49.22],[-64.22,48.9],[-64.55,48.88],[-64.25,48.49],[-66.84,47.99],[-64.8,47.81],[-65.37,47.09],[-64.8,47.08],[-64.5,46.24],[-62.46,45.61],[-61.92,45.89],[-60.96,45.31],[-64.2,44.58],[-65.48,43.46],[-66.17,43.86],[-65.84,44.58],[-66.19,44.42],[-64.49,45.34],[-64.16,44.98],[-63.36,45.36],[-64.94,45.33],[-64.28,45.8],[-64.75,46.09],[-64.78,45.61],[-67.21,45.18],[-67.8,45.7],[-67.79,47.07],[-69.23,47.47],[-70.88,45.24],[-74.99,44.99],[-76.8,43.63],[-78.72,43.63],[-79.18,43.47],[-78.99,42.82],[-82.7,41.68],[-83.17,42.05],[-82.13,43.59],[-82.54,45.36],[-84.13,46.53],[-88.37,48.31],[-91.42,48.04],[-94.61,48.72],[-95.08,49.36],[-95.15,49],[-122.76,49],[-123.21,49.13],[-122.85,49.44],[-123.24,49.34],[-123.16,49.7],[-123.96,49.51],[-123.53,49.7],[-123.83,50.16],[-123.98,49.8],[-124.77,49.99],[-124.35,50.5],[-125.08,50.32],[-124.81,50.92],[-125.71,50.43],[-126.27,50.63],[-125.62,50.75],[-125.63,51.1],[-126.13,50.68],[-126.56,50.84],[-126.18,50.95],[-127.18,50.93],[-127.03,50.82],[-127.54,51.01],[-126.66,51.19],[-127.79,51.17],[-126.62,51.68],[-127.88,51.67],[-127.17,52.31],[-126.67,51.98],[-126.73,52.37],[-127.19,52.38],[-127.02,52.85],[-128.39,52.29],[-128.13,52.88],[-128.97,53.55],[-127.87,53.24],[-128.81,53.62],[-128.6,54.03],[-129.27,53.38],[-130.05,53.89],[-129.47,54.24],[-130.48,54.36],[-129.96,54.32],[-130.37,54.65],[-129.91,54.61],[-130.17,54.85],[-129.47,55.47],[-130.11,55],[-130.16,55.09],[-129.94,55.28],[-130.1,55.56],[-130.13,55.72],[-130.02,55.91],[-131.82,56.6],[-133.43,58.46],[-135.47,59.8],[-137.48,58.91],[-139.07,60.35],[-141,60.31],[-141,69.64],[-134.31,68.68],[-134.55,69.09],[-132.89,69.65],[-129.4,70.12],[-133.49,68.83],[-132.92,68.69],[-133.35,68.83],[-127.52,70.22],[-128,70.59],[-125.43,69.31],[-124.82,69.71],[-125.2,70],[-124.44,70.15],[-124.5,69.73],[-124.04,69.7],[-124.45,69.37],[-121.68,69.79],[-114.07,68.48],[-115.54,67.92],[-115.1,67.8],[-110.08,68.01],[-108.02,67.29],[-108.62,67.15],[-107.25,66.35],[-107.75,66.92],[-107.08,66.82],[-107.89,68.08],[-106.43,68.15],[-106.47,68.34],[-105.74,68.42],[-105.64,68.63],[-106.54,68.51],[-106.54,68.29],[-107.89,68.27],[-107.6,68.17],[-108.82,68.27],[-106.23,68.94],[-105.49,68.73],[-105.54,68.41],[-104.61,68.24],[-104.5,68.03],[-102.25,67.73],[-98.35,67.8],[-98.62,68.07],[-97.51,67.6],[-97.12,67.79],[-98.71,68.37],[-95.98,68.25],[-96.46,67.48],[-95.33,67.03],[-95.9,66.95]],[[-95.9,66.95],[-96.46,67.06],[-95.63,66.68],[-95.9,66.95]],[[-93.52,63.84],[-92.51,63.82],[-93.78,64.19],[-93.52,63.84]],[[-70.78,48.38],[-69.83,48.17],[-71.05,48.45],[-70.78,48.38]]],[[[-114,72.8],[-114.6,72.6],[-113.03,73.01],[-111.22,72.72],[-111.66,72.28],[-109.78,72.43],[-110.76,72.97],[-109.66,72.92],[-108.62,72.55],[-107.83,71.6],[-107.25,71.9],[-108.29,73.15],[-106.76,73.29],[-105.33,72.75],[-104.36,71.57],[-104.59,71.07],[-101,70.17],[-100.87,69.79],[-103.48,69.69],[-103.02,69.49],[-103.19,69.11],[-102.31,69.5],[-101.75,69.18],[-102.89,68.8],[-105.14,68.9],[-106.6,69.5],[-109.1,68.71],[-113.27,68.45],[-113.52,69.18],[-116.53,69.41],[-117.44,69.99],[-111.49,70.34],[-117.56,70.6],[-118.42,70.99],[-115.06,71.52],[-118.11,71.37],[-117.7,71.67],[-119.13,71.77],[-117.35,72.92],[-114.56,73.38],[-114,72.8]]],[[[-73.35,68.33],[-74.82,69.08],[-76.66,68.7],[-75.59,69.22],[-77.2,69.65],[-76.98,69.94],[-77.63,69.74],[-77.68,70.19],[-79.01,70.68],[-79.59,70.4],[-78.79,69.89],[-81.76,70.12],[-80.95,69.71],[-82.1,70.11],[-83.01,70.3],[-81.71,69.93],[-81.74,69.87],[-82.02,69.87],[-82.14,69.78],[-83.07,70.01],[-85.82,70],[-86.55,70.23],[-86.37,70.53],[-87.92,70.24],[-89.55,71.09],[-87,70.99],[-89.83,71.33],[-90.05,71.95],[-88.41,73.52],[-85.07,73.8],[-86.73,72.72],[-86.24,72.42],[-86.42,72.01],[-84.83,71.27],[-86.82,70.99],[-84.8,70.92],[-84.63,71.67],[-86.05,72.01],[-84.16,72.02],[-85.69,72.89],[-83.95,72.75],[-85.45,73.12],[-83.63,72.98],[-85.19,73.23],[-81.55,73.72],[-80.25,72.73],[-81.38,72.24],[-80.52,72.5],[-80.97,71.88],[-79.67,72.13],[-80.17,72.32],[-79.8,72.5],[-79.01,72.27],[-79.2,71.96],[-77.79,71.79],[-78.87,72.23],[-77,72.13],[-78.56,72.44],[-77.61,72.75],[-75.19,72.49],[-74.95,72.25],[-76.35,71.89],[-74.12,71.98],[-75.39,71.68],[-74.63,71.66],[-75.08,71.18],[-73.75,71.78],[-74.24,71.2],[-73.62,71.58],[-73.38,71.39],[-73.9,71.06],[-73.05,71.27],[-73.38,70.98],[-72.54,71.66],[-71.12,71.26],[-72.57,70.61],[-70.6,71.05],[-71.8,70.43],[-71.16,70.53],[-71.54,70.02],[-69.9,70.88],[-70.5,70.48],[-68.31,70.56],[-70.47,69.84],[-67.79,70.26],[-67.13,69.73],[-70.03,69.54],[-66.8,69.34],[-69.02,69.35],[-68.08,69.22],[-69.03,68.97],[-68.18,69.15],[-67.71,69.02],[-68.56,68.96],[-67.77,68.78],[-69.4,68.86],[-68.04,68.68],[-68.9,68.6],[-68.47,68.61],[-68.71,68.57],[-67.5,68.54],[-67.61,68.38],[-66.71,68.44],[-67.88,68.27],[-67.23,68.36],[-67.01,68.32],[-67.6,68.16],[-67.01,68.29],[-66.77,68.24],[-66.95,68.01],[-66.18,68.02],[-66.73,67.87],[-66.36,67.82],[-65.91,68.16],[-66.01,67.63],[-64.72,67.99],[-65.2,67.65],[-64.51,67.81],[-63.9,67.31],[-64.8,67.36],[-63.96,67.27],[-64.69,67],[-63.11,67.33],[-63.77,66.81],[-62.1,67.05],[-61.26,66.63],[-62.9,66.33],[-61.95,66.02],[-62.97,66.15],[-62.32,65.81],[-63.72,65.68],[-63.32,65.59],[-63.55,64.89],[-65.51,65.74],[-64.36,66.35],[-65.92,65.95],[-65.47,66.39],[-66.07,66.12],[-67.05,66.64],[-67.74,66.57],[-67.28,66.28],[-67.99,66.51],[-67.19,65.91],[-68.85,66.19],[-64.66,64.03],[-64.99,63.82],[-64.53,63.25],[-65.3,63.81],[-64.63,62.9],[-65.25,62.99],[-65.19,62.56],[-66.64,63.37],[-66.55,62.99],[-67.91,63.76],[-67.69,63.37],[-69,63.75],[-65.99,62.24],[-66.07,61.87],[-71.4,63.05],[-72.15,63.45],[-71.23,63.6],[-72.32,63.68],[-73.38,64.27],[-73.3,64.66],[-74.06,64.33],[-74.64,64.9],[-74.99,64.8],[-74.69,64.37],[-75.82,64.61],[-76.67,64.18],[-78.18,64.57],[-77.42,65.46],[-75.77,65.22],[-75.37,64.71],[-75.19,65.1],[-75.95,65.32],[-73.5,65.47],[-74.47,66.15],[-72.26,67.25],[-73.35,68.33]],[[-73.35,68.33],[-73.21,68.38],[-73.32,68.39],[-73.35,68.33]]],[[[-99.8,73.89],[-96.96,73.74],[-98.45,72.87],[-96.52,72.71],[-96.3,72.42],[-96.87,72.04],[-96.49,71.91],[-98.27,71.9],[-98.04,71.53],[-98.73,71.27],[-102.74,72.72],[-102.14,73.09],[-100.41,72.74],[-100.03,72.93],[-100.58,73.17],[-99.77,73.21],[-101.62,73.49],[-100.43,73.41],[-101.12,73.73],[-99.8,73.89]]],[[[-92.64,74.1],[-90.19,73.9],[-92.1,72.74],[-94.32,72.76],[-93.46,72.46],[-94.06,71.98],[-95.21,71.99],[-94.75,72.15],[-95.67,72.81],[-95.67,73.72],[-92.64,74.1]]],[[[-120.15,74.27],[-117.42,74.23],[-115.32,73.48],[-119.14,72.63],[-120.25,72.26],[-120.54,71.52],[-122.78,71.09],[-126,71.97],[-123.77,73.76],[-124.77,74.34],[-120.15,74.27]]],[[[-94.36,75.59],[-93.49,75.26],[-93.47,74.7],[-96.62,74.99],[-94.36,75.59]]],[[[-98.42,76.67],[-97.51,76.19],[-97.94,75.74],[-97.28,75.4],[-98.17,75.33],[-97.58,75.14],[-100.15,74.99],[-100.78,75.35],[-98.95,75.71],[-102.88,75.62],[-101.18,75.78],[-101.91,76.08],[-101.39,76.25],[-102.17,76.24],[-101.89,76.44],[-99.89,75.89],[-99.44,75.97],[-100.15,76.13],[-99.41,76.16],[-100.98,76.5],[-98.42,76.67]]],[[[-108.65,76.81],[-108.08,76.28],[-108.4,76.05],[-107.63,75.99],[-108.02,75.78],[-106.34,76.05],[-105.39,75.64],[-106.01,75.05],[-112.75,74.4],[-114.45,74.67],[-110.91,75.23],[-117.68,75.25],[-115,75.69],[-117.25,75.6],[-114.82,75.88],[-116.73,75.92],[-114.66,76.16],[-115.93,76.29],[-114.9,76.52],[-112.45,76.18],[-111.25,75.52],[-108.9,75.48],[-110.06,75.89],[-109.31,76.11],[-110.39,76.39],[-108.65,76.81]]],[[[-95.66,77.06],[-93.18,76.74],[-93.55,76.39],[-91.41,76.69],[-89.29,76.3],[-91.61,76.26],[-88.95,75.43],[-81.54,75.81],[-79.57,75.45],[-80.44,75.04],[-79.33,74.89],[-81.81,74.46],[-83.51,74.9],[-83.47,74.58],[-84.29,74.5],[-88.5,74.5],[-88.55,74.91],[-91.54,74.65],[-92.49,75.21],[-92.11,75.86],[-93.08,76.36],[-95.38,76.23],[-94.8,76.32],[-96.96,76.73],[-95.66,77.06]]],[[[-116.35,77.54],[-115.39,77.31],[-116.28,77.18],[-115.9,76.69],[-117.1,76.3],[-118.06,76.41],[-117.84,76.82],[-118.97,76.51],[-118.57,76.34],[-119.08,76.08],[-119.65,76.3],[-119.48,75.97],[-119.87,75.86],[-123.04,76.08],[-119.15,77.33],[-116.35,77.54]]],[[[-96.77,78.68],[-94.89,78.1],[-97.1,77.8],[-97.78,78.03],[-96.87,78.13],[-98.41,78.5],[-96.77,78.68]]],[[[-103.59,79.33],[-99.95,78.73],[-98.95,78.06],[-99.91,77.78],[-104.47,78.27],[-105.05,78.49],[-103.32,78.73],[-105.63,79.16],[-103.59,79.33]]],[[[-92.73,81.31],[-88.78,80.13],[-87.68,80.41],[-88.07,80.12],[-86.96,79.9],[-87.46,79.53],[-84.9,79.27],[-87.62,78.65],[-88,78.81],[-87.72,79.08],[-88.16,78.99],[-87.91,78.55],[-88.8,78.61],[-88.82,78.15],[-89.98,78.61],[-89.45,78.16],[-92.06,78.21],[-92.99,78.47],[-91.64,78.55],[-94.29,78.99],[-90.36,79.25],[-95.09,79.27],[-95.78,79.43],[-94.28,79.76],[-95.85,79.65],[-96.8,80.09],[-94.38,79.98],[-94.75,80.08],[-94.08,80.18],[-96.68,80.34],[-93.79,80.53],[-95.53,80.82],[-93.09,81.16],[-94.27,81.35],[-92.73,81.31]]],[[[-70.11,83.11],[-66.3,82.93],[-68.64,82.63],[-64.73,82.9],[-61.08,82.32],[-64.36,81.73],[-69.29,81.72],[-66.61,81.51],[-70.21,81.17],[-64.44,81.48],[-69.43,80.38],[-70.83,80.56],[-70.15,80.19],[-72.42,80.21],[-70.5,80.08],[-71.46,79.9],[-71.18,79.78],[-78.05,79.35],[-74.44,79.06],[-78.89,79.06],[-74.72,78.71],[-76.69,78.51],[-75.06,78.31],[-76.91,78.2],[-75.58,78.11],[-75.92,77.96],[-78.26,78],[-77.72,77.61],[-78.69,77.32],[-81.93,77.68],[-81.17,77.34],[-82.17,77.29],[-81.83,77.16],[-77.78,76.79],[-81.05,76.13],[-80.77,76.42],[-82.73,76.82],[-82.13,76.44],[-89.68,76.57],[-86.74,77.17],[-88.07,77.82],[-84.48,77.29],[-84.61,77.39],[-83.46,77.35],[-83.84,77.46],[-82.32,78.07],[-83.9,77.49],[-84.78,77.52],[-84.43,77.72],[-84.95,77.6],[-85.35,77.73],[-85.05,77.83],[-85.4,77.82],[-84.33,77.9],[-85.68,77.93],[-84.13,78.17],[-84.97,78.2],[-84.64,78.59],[-85.49,78.1],[-87.54,78.14],[-86.86,78.73],[-82.34,78.57],[-83.25,78.83],[-81.48,79.05],[-84.75,79.03],[-83.36,79.05],[-86.49,79.76],[-85.26,79.92],[-86.51,80.3],[-79.9,79.65],[-83.2,80.32],[-78.04,80.57],[-79.96,80.61],[-76.48,80.87],[-78.93,80.88],[-76.75,81.44],[-80.92,80.66],[-85.07,80.51],[-86.74,80.6],[-82.36,81.18],[-87.59,80.63],[-89.47,80.91],[-84.73,81.28],[-89.82,81.01],[-90.35,81.17],[-87.24,81.49],[-91.96,81.66],[-88.08,82.1],[-84.6,81.89],[-86.88,82.2],[-85.05,82.48],[-79.23,81.82],[-82.73,82.4],[-80.58,82.55],[-81.47,82.82],[-78.5,82.68],[-80.43,82.89],[-79.79,82.96],[-75.89,82.59],[-76.23,82.44],[-75.4,82.61],[-77.38,82.99],[-72.63,82.69],[-73.65,82.93],[-70.11,83.11]]]]},"properties":{"name":"Canada"},"id":"CA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-24.37,14.81],[-24.53,14.92],[-24.38,15.05],[-24.37,14.81]]],[[[-23.45,14.98],[-23.68,14.94],[-23.77,15.25],[-23.45,14.98]]],[[[-22.71,16.04],[-22.96,16.09],[-22.8,16.24],[-22.71,16.04]]],[[[-24.03,16.59],[-24.32,16.48],[-24.43,16.64],[-24.03,16.59]]],[[[-25.28,16.91],[-25.33,17.1],[-24.97,17.11],[-25.28,16.91]]]]},"properties":{"name":"Cape Verde"},"id":"CV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-81.1,19.31],[-81.4,19.29],[-81.25,19.35],[-81.1,19.31]]]]},"properties":{"name":"Cayman Islands"},"id":"KY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[19.06,8.58],[18.99,8.96],[20.37,9.11],[21.72,10.64],[22.87,10.92],[23.67,9.87],[23.52,8.71],[25.25,7.85],[27.46,5.02],[25.89,5.19],[22.9,4.82],[22.38,4.13],[20.59,4.41],[19.42,5.13],[18.54,4.34],[18.62,3.48],[16.66,3.53],[16.21,2.22],[14.73,4.62],[14.42,6.04],[15.5,7.53],[18.59,8.04],[19.06,8.58]]]]},"properties":{"name":"Central African Republic"},"id":"CF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[80.27,9.78],[80.82,9.26],[81.13,8.5],[81.36,8.49],[81.88,7.29],[81.66,6.44],[80.59,5.92],[80.05,6.24],[79.7,8.08],[80.05,9.59],[80.61,9.44],[79.93,9.74],[80.27,9.78]]]]},"properties":{"name":"Sri Lanka"},"id":"LK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[14.5,13],[14.07,13.08],[13.63,13.72],[13.47,14.46],[15.49,16.91],[16,20.35],[15.2,21.5],[15,23],[16,23.45],[24,19.5],[24,15.7],[22.94,15.56],[21.83,12.8],[22.47,12.62],[22.87,10.92],[21.72,10.64],[20.37,9.11],[18.99,8.96],[19.06,8.58],[18.59,8.04],[15.5,7.53],[15.2,8.49],[13.96,9.64],[15.68,9.99],[14.58,12.74],[14.5,13]]]]},"properties":{"name":"Chad"},"id":"TD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-68.4,-54.96],[-69.06,-55.06],[-68.21,-55.27],[-68.75,-55.27],[-68.16,-55.4],[-68.05,-55.71],[-68.38,-55.48],[-68.94,-55.46],[-68.78,-55.38],[-68.91,-55.34],[-68.8,-55.19],[-69.43,-55.16],[-69.17,-55.51],[-70.03,-55.16],[-68.4,-54.96]]],[[[-67.78,-54.92],[-67.05,-55.14],[-68.36,-54.94],[-67.78,-54.92]]],[[[-71.26,-54.08],[-71.12,-54.38],[-71.7,-54.16],[-71.26,-54.08]]],[[[-71.67,-53.94],[-71.85,-54.34],[-72.26,-53.94],[-71.67,-53.94]]],[[[-70.44,-53.86],[-70.37,-54.04],[-70.67,-53.93],[-70.52,-54.23],[-70.88,-54.05],[-70.53,-53.56],[-70.44,-53.86]]],[[[-72.91,-53.43],[-72.14,-53.8],[-72.87,-54.14],[-72.73,-53.84],[-73.59,-53.76],[-72.91,-53.43]]],[[[-74.36,-52.95],[-74.75,-52.76],[-73.09,-53.35],[-74.36,-52.95]]],[[[-70.92,-54.71],[-70.77,-54.68],[-70.87,-54.69],[-70.92,-54.71],[-72,-54.46],[-70.13,-54.55],[-70.88,-54.13],[-70.14,-54.43],[-70.06,-54.25],[-69.77,-54.56],[-69.86,-54.28],[-69.24,-54.45],[-69.38,-54.69],[-69.18,-54.58],[-69.16,-54.46],[-68.99,-54.43],[-70.04,-54.1],[-70.18,-53.81],[-69.36,-53.35],[-70.45,-53.37],[-70.1,-52.9],[-70.42,-52.77],[-68.62,-52.64],[-68.64,-54.79],[-70.92,-54.71]]],[[[-74.26,-51.25],[-74.32,-50.92],[-74.19,-51.2],[-74.26,-51.25]]],[[[-74.4,-50.86],[-74.41,-51.09],[-74.96,-50.97],[-74.4,-50.86]]],[[[-74.69,-50.89],[-74.95,-50.73],[-74.75,-50.7],[-74.69,-50.89]]],[[[-74.36,-50.49],[-74.19,-50.85],[-74.67,-50.48],[-74.36,-50.49]]],[[[-75.05,-50.17],[-75.46,-50.36],[-75.4,-50.04],[-75.05,-50.17]]],[[[-75.29,-49.1],[-75.66,-49.22],[-75.36,-48.99],[-75.29,-49.1]]],[[[-74.61,-48.46],[-74.41,-49.73],[-74.77,-50.06],[-74.65,-49.36],[-75.02,-49.9],[-75.47,-49.33],[-74.92,-49.34],[-75.05,-48.8],[-74.61,-48.7],[-75.03,-48.5],[-74.74,-48.12],[-74.61,-48.46]]],[[[-75.24,-48.27],[-75.23,-48.71],[-75.58,-48.09],[-75.24,-48.27]]],[[[-74.93,-48.16],[-75.04,-48.44],[-75.26,-48.07],[-74.93,-48.16]]],[[[-74.46,-45.78],[-74.39,-45.44],[-74.21,-45.64],[-74.46,-45.78]]],[[[-73.65,-45.76],[-73.78,-45.67],[-73.7,-45.44],[-73.65,-45.76]]],[[[-74.02,-45.43],[-73.82,-45.48],[-74.14,-45.58],[-74.02,-45.43]]],[[[-73.98,-45.27],[-73.78,-45.34],[-74.17,-45.25],[-73.98,-45.27]]],[[[-73.85,-45],[-73.73,-45.28],[-74.24,-45.16],[-73.85,-45]]],[[[-74.21,-44.78],[-74.41,-44.63],[-73.87,-44.69],[-74.21,-44.78]]],[[[-72.72,-44.55],[-72.98,-44.61],[-72.83,-44.69],[-73.22,-44.94],[-73.41,-44.82],[-73.21,-44.8],[-73.39,-44.79],[-73.46,-44.64],[-73.23,-44.42],[-72.72,-44.55]]],[[[-73.89,-41.82],[-73.37,-42.25],[-73.82,-42.51],[-73.49,-43.11],[-73.86,-43.4],[-74.41,-43.24],[-73.89,-41.82]]],[[[-69.48,-17.64],[-68.44,-19.43],[-68.76,-20.41],[-67.88,-22.83],[-67.18,-22.82],[-67.34,-24.02],[-68.57,-24.77],[-68.29,-26.92],[-69.66,-28.4],[-69.83,-30.19],[-70.53,-31.19],[-69.81,-34.24],[-70.57,-35.25],[-70.42,-36.14],[-71.19,-36.84],[-70.82,-38.57],[-71.7,-39.58],[-71.73,-42.1],[-72.13,-42.29],[-71.86,-44.37],[-71.11,-44.54],[-72.08,-44.77],[-71.3,-45.29],[-71.78,-45.65],[-71.67,-46.68],[-72.36,-47.47],[-72.56,-48.8],[-73.58,-49.54],[-73.17,-50.75],[-72.29,-50.65],[-72.4,-51.51],[-71.91,-52],[-68.44,-52.38],[-70.81,-52.73],[-71.28,-53.89],[-72.45,-53.4],[-71.8,-53.52],[-71.17,-52.81],[-72.55,-53.07],[-72.19,-53.18],[-72.65,-53.32],[-72.4,-53.54],[-73.22,-53.23],[-71.48,-52.63],[-72.8,-52.54],[-72.98,-53.07],[-73.45,-53.01],[-72.89,-52.52],[-73.69,-52.73],[-73.73,-52.03],[-73.33,-52.22],[-72.99,-52.07],[-72.86,-52.26],[-72.78,-52.06],[-72.94,-52.09],[-72.7,-51.98],[-72.9,-52.46],[-72.47,-51.79],[-73.24,-51.46],[-72.56,-51.78],[-73.28,-51.61],[-72.92,-51.86],[-73.24,-52.09],[-73.39,-51.66],[-73.28,-52.16],[-73.56,-52.05],[-73.64,-51.82],[-73.4,-52.02],[-73.46,-51.69],[-73.91,-51.62],[-73.89,-51.37],[-73.6,-51.62],[-73.71,-51.16],[-74.25,-50.94],[-73.53,-50.71],[-73.72,-50.56],[-73.57,-50.4],[-74.05,-50.83],[-74.29,-50.48],[-73.88,-50.54],[-74.69,-50.2],[-73.87,-50.29],[-74.33,-49.63],[-73.71,-49.76],[-74.11,-49.48],[-73.83,-49.03],[-74.37,-49.43],[-74.02,-48.41],[-74.65,-48.02],[-73.22,-48],[-73.72,-47.53],[-73.93,-47.85],[-74.74,-47.72],[-74.04,-47.62],[-74.53,-47.44],[-73.93,-47.04],[-74.27,-46.79],[-75.01,-46.75],[-74.94,-46.44],[-75.41,-46.93],[-75.72,-46.73],[-74.36,-45.79],[-74.14,-45.81],[-73.97,-46.09],[-74.08,-46.19],[-74.31,-46.25],[-74.49,-46.19],[-74.34,-46.27],[-74.05,-46.2],[-74,-46.29],[-73.85,-46.35],[-74.02,-46.22],[-73.88,-46.14],[-73.76,-46.24],[-73.77,-46.3],[-73.81,-46.39],[-74,-46.56],[-73.91,-46.6],[-73.84,-46.59],[-73.18,-45.67],[-73.59,-45.78],[-73.52,-45.46],[-72.83,-45.42],[-73.39,-44.98],[-73.14,-44.94],[-72.77,-44.75],[-72.61,-44.47],[-73.29,-44.14],[-72.54,-42.56],[-72.85,-42.28],[-72.42,-42.45],[-72.86,-41.91],[-72.31,-41.44],[-73.75,-41.75],[-73.49,-41.52],[-74,-40.97],[-73.22,-39.41],[-73.64,-37.21],[-73.19,-37.14],[-71.44,-32.64],[-71.52,-28.97],[-70.45,-25.36],[-70.62,-23.49],[-70.05,-21.43],[-70.41,-18.35],[-69.5,-17.51],[-69.48,-17.64]],[[-74.07,-46.01],[-74.16,-46.14],[-74.07,-46.1],[-74.07,-46.01]]]]},"properties":{"name":"Chile"},"id":"CL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[110.72,20.06],[111.03,19.64],[110.05,18.38],[108.69,18.51],[108.63,19.28],[109.26,19.9],[110.72,20.06]]],[[[123.38,53.53],[126.1,52.76],[127.53,49.79],[130.67,48.86],[130.99,47.69],[134.74,48.27],[133.12,45.13],[131.86,45.35],[130.95,44.84],[131.31,43.39],[130.41,42.72],[130.6,42.42],[129.91,43.01],[129.71,42.44],[128.06,42],[128.16,41.38],[126.91,41.8],[124.37,40.09],[121.15,38.72],[121.75,39.35],[121.23,39.54],[122.3,40.51],[121.18,40.92],[118.92,39.13],[117.74,39.1],[117.67,38.39],[118.84,38.15],[119.23,37.14],[120.74,37.84],[122.56,37.4],[122.5,36.89],[120.09,36.2],[119.18,34.88],[120.25,34.31],[120.84,32.64],[121.9,31.75],[119.63,32.26],[121.88,30.97],[120.15,30.19],[122.13,29.89],[121.45,29.51],[121.98,29.59],[121.41,29.16],[121.61,28.72],[121.14,28.84],[121.58,28.27],[120.59,28.08],[120.84,27.88],[120.13,26.64],[119.55,26.75],[119.94,26.35],[119.09,26.14],[119.71,25.99],[119.65,25.36],[119.31,25.61],[118.62,24.54],[117.79,24.46],[118.12,24.26],[116.52,23.42],[116.48,22.94],[114.22,22.55],[114.03,22.51],[113.48,23.05],[113.55,22.21],[113.53,22.19],[113.17,22.57],[113.39,22.18],[112.94,21.87],[110.4,21.38],[110.28,20.25],[109.92,20.23],[109.57,21.72],[109.14,21.4],[108.48,21.94],[107.99,21.54],[106.69,22.03],[106.71,22.86],[105.58,23.06],[105.35,23.33],[103.96,22.5],[102.48,22.77],[102.14,22.4],[101.57,22.21],[101.79,21.14],[101.15,21.57],[100.21,21.43],[99.96,22.05],[99.16,22.16],[99.57,22.94],[98.93,23.19],[98.89,24.16],[97.54,23.94],[97.55,24.74],[98.71,25.86],[98.78,26.64],[98.7,27.54],[97.81,28.34],[97.35,28.22],[96.4,28.35],[96.62,28.79],[96.08,29.47],[95.39,29.04],[94.65,29.33],[92.54,27.86],[91.66,27.76],[90.47,28.07],[89.59,28.14],[88.92,27.32],[88.83,28.01],[88.14,27.87],[86.01,27.88],[82.1,30.34],[81.03,30.2],[78.77,31.31],[78.4,32.55],[79.53,32.75],[78.08,35.45],[77.82,35.5],[76.17,35.82],[75.86,36.66],[74.82,37.02],[74.57,37.03],[74.92,37.24],[74.86,38.47],[73.82,38.61],[73.66,39.45],[74.86,40.52],[76.35,40.35],[76.87,41.01],[78.08,41.04],[80.23,42.2],[80.38,43.03],[80.82,43.16],[80.52,44.73],[79.87,44.9],[82.56,45.13],[82.32,45.57],[83.04,47.21],[85.53,47.06],[85.76,48.39],[87.35,49.09],[87.84,49.17],[88.65,48.18],[90.07,47.89],[91.02,46.6],[90.9,45.25],[95.42,44.29],[96.38,42.73],[100.84,42.68],[105.01,41.58],[107.47,42.47],[110.44,42.78],[111.96,43.69],[111.42,44.38],[111.98,45.09],[113.64,44.75],[117.42,46.58],[119.9,46.68],[118.54,47.99],[117.37,47.65],[115.59,47.92],[116.71,49.83],[117.87,49.52],[119.21,50.02],[120.78,52.11],[120.03,52.77],[120.86,53.28],[123.38,53.53]]]]},"properties":{"name":"China"},"id":"CN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[121.73,25.14],[121.84,24.48],[120.72,21.93],[120.11,23.62],[121.01,25.01],[121.73,25.14]]]]},"properties":{"name":"Taiwan"},"id":"TW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[105.7,-10.51],[105.63,-10.44],[105.74,-10.38],[105.7,-10.51]]]]},"properties":{"name":"Christmas Island"},"id":"CX"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[96.86,-12.2],[96.82,-12.18],[96.83,-12.13],[96.86,-12.2]]]]},"properties":{"name":"Cocos (Keeling) Islands"},"id":"CC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-71.56,12.45],[-71.32,11.85],[-71.98,11.66],[-72.49,11.12],[-73.38,9.17],[-72.78,9.08],[-72,7.02],[-70.12,6.98],[-69.25,6.08],[-67.45,6.19],[-67.86,4.56],[-67.29,3.4],[-67.83,2.83],[-67.19,2.39],[-66.87,1.22],[-67.42,2.14],[-67.91,1.75],[-69.85,1.71],[-69.84,1.07],[-69.12,0.65],[-70.04,0.59],[-69.38,-1.34],[-69.96,-4.24],[-70.72,-3.78],[-70.29,-2.51],[-71.7,-2.15],[-72.88,-2.51],[-73.56,-1.37],[-75.29,-0.12],[-77.38,0.38],[-78.59,1.24],[-78.81,1.44],[-78.57,2.43],[-77.74,2.6],[-77.03,3.92],[-77.43,4.03],[-77.34,6.57],[-77.89,7.23],[-77.22,7.94],[-77.37,8.67],[-76.76,7.92],[-76.93,8.57],[-75.63,9.45],[-75.27,10.8],[-74.86,11.13],[-74.39,10.74],[-74.16,11.33],[-73.28,11.3],[-71.56,12.45]]]]},"properties":{"name":"Colombia"},"id":"CO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[44.49,-12.09],[44.51,-12.38],[44.21,-12.16],[44.49,-12.09]]],[[[43.46,-11.94],[43.22,-11.76],[43.28,-11.38],[43.46,-11.94]]]]},"properties":{"name":"Comoros"},"id":"KM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[45.2,-12.85],[45.1,-12.99],[45.08,-12.66],[45.2,-12.85]]]]},"properties":{"name":"Mayotte"},"id":"YT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[12.78,-4.39],[12.03,-5.01],[11.14,-3.93],[11.93,-3.64],[11.57,-2.33],[12.48,-2.33],[12.65,-1.82],[13,-2.37],[13.76,-2.09],[14.11,-2.49],[14.43,-1.89],[14.52,-0.61],[13.85,-0.2],[14.49,0.91],[14.19,1.39],[13.19,1.22],[13.29,2.16],[16.07,1.65],[16.21,2.22],[16.66,3.53],[18.62,3.48],[17.71,-0.54],[16.2,-2.18],[15.89,-3.94],[14.66,-4.91],[14.4,-4.28],[13.41,-4.88],[13.09,-4.63],[12.78,-4.39]]]]},"properties":{"name":"Congo, Republic of the"},"id":"CG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[25.89,5.19],[27.46,5.02],[28.36,4.29],[29.64,4.64],[30.86,3.49],[30.73,2.45],[31.3,2.12],[29.96,0.83],[29.6,-1.39],[29.02,-2.74],[29.23,-3.75],[29.42,-4.45],[29.55,-6.3],[30.77,-8.19],[28.9,-8.48],[28.37,-9.26],[28.7,-10.65],[28.36,-11.55],[29.03,-12.38],[29.81,-12.16],[29.8,-13.45],[29.02,-13.4],[27.2,-11.57],[26.87,-11.97],[26,-11.9],[25.33,-11.19],[24.45,-11.46],[23.99,-10.87],[22.25,-11.21],[21.78,-7.28],[19.54,-7],[19.37,-8],[17.62,-8.1],[16.58,-5.9],[14,-5.85],[13.18,-5.86],[12.21,-5.77],[13.09,-4.66],[13.09,-4.63],[13.41,-4.88],[14.4,-4.28],[14.66,-4.91],[15.89,-3.94],[16.2,-2.18],[17.71,-0.54],[18.62,3.48],[18.54,4.34],[19.42,5.13],[20.59,4.41],[22.38,4.13],[22.9,4.82],[25.89,5.19]]]]},"properties":{"name":"Congo, Democratic Republic of the"},"id":"CD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-157.89,-21.94],[-157.96,-21.9],[-157.92,-21.88],[-157.89,-21.94]]],[[[-159.74,-21.25],[-159.83,-21.2],[-159.75,-21.19],[-159.74,-21.25]]],[[[-157.32,-20.19],[-157.33,-20.13],[-157.31,-20.15],[-157.32,-20.19]]]]},"properties":{"name":"Cook Islands"},"id":"CK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-85.09,11.01],[-83.65,10.92],[-82.56,9.56],[-82.93,9.47],[-82.9,8.03],[-84.74,9.97],[-85.24,10.2],[-85.14,9.59],[-85.66,9.91],[-85.69,11.08],[-85.09,11.01]]]]},"properties":{"name":"Costa Rica"},"id":"CR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[17.3,43.01],[17.65,42.89],[18.46,42.57],[18.5,42.45],[17.3,43.01]]],[[[16.85,43.27],[16.4,43.33],[16.75,43.36],[16.85,43.27]]],[[[14.46,44.91],[14.49,44.61],[14.29,44.91],[14.4,44.92],[14.32,45.17],[14.46,44.91]]],[[[14.76,44.94],[14.43,45.08],[14.54,45.24],[14.76,44.94]]],[[[16.57,46.48],[16.61,46.48],[17.67,45.83],[18.82,45.91],[19.42,45.23],[19.04,44.86],[15.79,45.17],[16.14,44.2],[17.58,42.94],[16.88,43.4],[15.99,43.5],[14.48,45.31],[14.29,45.32],[14.17,44.98],[13.9,44.77],[13.59,45.48],[15.17,45.43],[15.65,46.22],[16.57,46.48]]]]},"properties":{"name":"Croatia"},"id":"HR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-82.55,21.57],[-83.19,21.62],[-82.97,21.94],[-82.55,21.57]]],[[[-82,23.19],[-80.03,22.95],[-74.13,20.19],[-77.72,19.83],[-77.24,20.66],[-78.05,20.7],[-78.75,21.64],[-81.82,22.18],[-82.16,22.4],[-81.65,22.49],[-81.89,22.68],[-82.76,22.7],[-83.37,22.2],[-83.93,22.16],[-84.03,21.91],[-84.95,21.86],[-84.34,22.01],[-84.4,22.33],[-84.08,22.66],[-82,23.19]]]]},"properties":{"name":"Cuba"},"id":"CU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[33.65,35.35],[34.59,35.69],[33.03,34.56],[32.27,35.04],[33.65,35.35]]]]},"properties":{"name":"Cyprus"},"id":"CY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[14.7,48.58],[13.83,48.77],[12.09,50.32],[14.83,50.87],[16.34,50.66],[16.64,50.11],[17.72,50.32],[18.85,49.52],[16.95,48.62],[15.03,49.02],[14.7,48.58]]]]},"properties":{"name":"Czech Republic"},"id":"CZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[2.48,6.34],[1.64,6.22],[1.4,9.43],[0.78,10.38],[0.92,11],[2.4,11.9],[2.84,12.4],[3.6,11.69],[3.86,10.58],[2.79,9.04],[2.72,6.37],[2.48,6.34]]]]},"properties":{"name":"Benin"},"id":"BJ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[10.75,55.48],[10.5,55.03],[9.68,55.5],[10.75,55.48]]],[[[12.57,55.99],[12.07,54.97],[10.87,55.73],[12.57,55.99]]],[[[8.92,56.92],[8.77,56.69],[8.51,56.74],[8.92,56.92]]],[[[9.97,57.07],[10.31,56.98],[10.31,56.75],[9.87,56.65],[10.96,56.44],[9.55,55.71],[9.77,54.89],[9.45,54.83],[8.66,54.91],[8.62,55.43],[8.09,55.55],[8.17,56.65],[8.73,56.48],[8.68,56.62],[9.08,56.81],[9.15,56.7],[9.06,56.57],[9.27,56.63],[9.32,56.53],[9.18,56.92],[9.97,57.07]]],[[[10.43,57.59],[10.34,56.99],[10.01,57.09],[9.12,57.05],[8.67,56.95],[8.42,56.68],[8.59,56.69],[8.55,56.58],[8.24,56.71],[8.62,57.12],[9.39,57.15],[9.95,57.58],[10.65,57.74],[10.43,57.59]]]]},"properties":{"name":"Denmark"},"id":"DK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-61.36,15.2],[-61.45,15.63],[-61.25,15.46],[-61.36,15.2]]]]},"properties":{"name":"Dominica"},"id":"DM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-70.78,19.85],[-69.22,19.36],[-69.63,19.1],[-68.73,18.95],[-68.45,18.36],[-70.69,18.43],[-71.42,17.6],[-71.77,18.04],[-71.75,19.71],[-70.78,19.85]]]]},"properties":{"name":"Dominican Republic"},"id":"DO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-91.22,-0.01],[-90.81,-0.73],[-91.38,-1.03],[-91.08,-0.59],[-91.61,0],[-91.22,-0.01]]],[[[-78.59,1.24],[-77.38,0.38],[-75.29,-0.12],[-75.63,-0.11],[-75.22,-0.97],[-75.56,-1.53],[-78.34,-3.42],[-78.71,-4.58],[-79.05,-5.01],[-79.65,-4.43],[-80.47,-4.44],[-80.34,-3.38],[-79.76,-2.01],[-80.26,-2.74],[-80.89,-2.32],[-80.91,-1.03],[-80.26,-0.63],[-80.06,0.83],[-78.81,1.44],[-78.59,1.24]]]]},"properties":{"name":"Ecuador"},"id":"EC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-89.34,14.42],[-87.75,13.86],[-87.82,13.41],[-88.54,13.19],[-90.1,13.75],[-89.35,14.43],[-89.34,14.42]]]]},"properties":{"name":"El Salvador"},"id":"SV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[10.03,2.17],[11.34,2.17],[11.35,1],[9.8,1],[9.36,1.17],[9.81,2.34],[10.03,2.17]]]]},"properties":{"name":"Equatorial Guinea"},"id":"GQ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[36.54,14.26],[37.29,14.45],[37.57,14.1],[37.91,14.88],[38.45,14.42],[40.23,14.44],[42.4,12.47],[41.79,11.01],[42.94,11],[42.85,10.22],[44.01,9.01],[47.99,8],[44.95,4.9],[43.69,4.89],[41.91,3.98],[40.78,4.29],[39.52,3.41],[35.94,4.62],[34.7,6.68],[32.99,7.92],[33.25,8.46],[34.12,8.58],[34.29,10.55],[34.86,10.73],[35.1,11.83],[36.14,12.71],[36.54,14.26]]]]},"properties":{"name":"Ethiopia"},"id":"ET"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[38.8,17.65],[39.72,15.08],[39.88,15.49],[41.17,14.63],[43.12,12.71],[42.4,12.47],[40.23,14.44],[38.45,14.42],[37.91,14.88],[37.57,14.1],[37.29,14.45],[36.54,14.26],[37,17.07],[38.6,17.99],[38.8,17.65]]]]},"properties":{"name":"Eritrea"},"id":"ER"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[22.99,58.6],[23.33,58.44],[21.99,57.92],[21.83,58.5],[22.99,58.6]]],[[[22.75,59],[23.05,58.84],[22.04,58.94],[22.75,59]]],[[[25.78,59.63],[28.02,59.48],[27.43,58.81],[27.82,57.87],[27.37,57.54],[25.29,58.08],[24.31,57.87],[24.56,58.33],[23.73,58.37],[23.46,59.21],[25.78,59.63]]]]},"properties":{"name":"Estonia"},"id":"EE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-7.05,62.07],[-7.2,62.02],[-7.44,62.14],[-7.05,62.07]]],[[[-6.71,61.94],[-7.23,62.17],[-7.21,62.28],[-6.71,61.94]]],[[[-6.66,62.09],[-7.06,62.31],[-6.6,62.2],[-6.66,62.09]]]]},"properties":{"name":"Faroe Islands"},"id":"FO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-59.21,-51.41],[-60.37,-52.16],[-60.98,-52.06],[-60.18,-51.76],[-60.64,-51.36],[-59.21,-51.41]]],[[[-58.7,-51.34],[-57.73,-51.69],[-59.72,-52.12],[-58.7,-51.34]]]]},"properties":{"name":"Falkland Islands (Islas Malvinas)"},"id":"FK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-37.5,-54.01],[-35.78,-54.77],[-38.03,-54.05],[-37.5,-54.01]]]]},"properties":{"name":"South Georgia South Sandwich Islands"},"id":"GS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[179.96,-16.2],[179.48,-16.7],[179.93,-16.46],[179.9,-16.77],[178.48,-16.78],[179.96,-16.2]]],[[[-179.97,-16.17],[-180,-16.15],[-179.94,-16.13],[-179.97,-16.17]]]]},"properties":{"name":"Fiji"},"id":"FJ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[28.17,69.91],[29.18,69.64],[28.96,69.05],[28.43,68.9],[28.82,68.84],[28.69,68.2],[30.03,67.69],[29.07,66.9],[30.13,65.72],[29.64,64.93],[30.58,64.22],[29.99,63.74],[31.59,62.91],[27.81,60.55],[22.91,59.8],[23.34,60.02],[23.09,60.35],[21.36,60.65],[21.67,61.55],[21.06,62.61],[21.5,63.21],[25.45,64.95],[25.31,65.51],[24.17,65.81],[23.66,66.31],[24.01,66.8],[23.43,67.47],[23.67,67.94],[21.81,68.57],[20.58,69.06],[21.32,69.33],[22.4,68.71],[24.93,68.58],[26.45,69.93],[28.17,69.91]]]]},"properties":{"name":"Finland"},"id":"FI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[20.08,60.35],[19.94,60.04],[19.65,60.26],[20.08,60.35]]]]},"properties":{"name":"Aland Islands"},"id":"AX"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[9.45,42.68],[9.18,41.36],[8.58,42.38],[9.35,43],[9.45,42.68]]],[[[2.54,51.09],[4.15,49.98],[4.83,50.17],[5.81,49.55],[6.36,49.46],[8.23,48.96],[7.59,47.58],[6.99,47.5],[5.97,46.21],[6.79,46.43],[7.04,45.93],[7.13,45.26],[6.62,45.11],[6.98,44.28],[7.66,44.17],[7.53,43.79],[7.44,43.76],[7.42,43.77],[7.39,43.73],[6.17,43.05],[3.96,43.54],[3.08,43.07],[3.18,42.44],[1.72,42.51],[1.78,42.57],[1.45,42.6],[-1.78,43.36],[-1.04,44.68],[-1.25,44.66],[-1.08,45.56],[-0.54,44.9],[-0.78,45.46],[-1.24,45.7],[-1.11,46.32],[-2.13,46.84],[-2.13,47.28],[-1.73,47.21],[-4.37,47.8],[-4.73,48.04],[-4.19,48.3],[-4.78,48.51],[-1.37,48.64],[-1.94,49.72],[0.42,49.45],[0.07,49.53],[1.46,50.12],[1.63,50.88],[2.54,51.09]]]]},"properties":{"name":"France"},"id":"FR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-53.49,5.57],[-52.29,4.94],[-52.04,4.33],[-51.85,4.65],[-51.68,4.03],[-52.91,2.2],[-54.6,2.33],[-54,3.45],[-54.48,4.75],[-54.17,5.35],[-53.94,5.74],[-53.49,5.57]]]]},"properties":{"name":"French Guiana"},"id":"GF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-149.21,-17.73],[-149.18,-17.87],[-149.63,-17.55],[-149.21,-17.73]]],[[[-151.4,-16.89],[-151.48,-16.9],[-151.48,-16.74],[-151.4,-16.89]]],[[[-138.96,-9.74],[-138.81,-9.74],[-139.17,-9.78],[-138.96,-9.74]]],[[[-140.03,-8.9],[-140.19,-8.95],[-140.25,-8.8],[-140.03,-8.9]]]]},"properties":{"name":"French Polynesia"},"id":"PF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[69,-48.8],[69.58,-49.3],[70.57,-49.25],[69.77,-49.39],[70.25,-49.69],[68.8,-49.72],[69,-48.8]]]]},"properties":{"name":"French Southern and Antarctic Lands"},"id":"TF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[42.87,11.59],[43.25,11.47],[42.94,11],[41.79,11.01],[42.4,12.47],[43.12,12.71],[43.41,12.06],[42.51,11.57],[42.87,11.59]]]]},"properties":{"name":"Djibouti"},"id":"DJ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[12.52,2.28],[13.29,2.16],[13.19,1.22],[14.19,1.39],[14.49,0.91],[13.85,-0.2],[14.52,-0.61],[14.43,-1.89],[14.11,-2.49],[13.76,-2.09],[13,-2.37],[12.65,-1.82],[12.48,-2.33],[11.57,-2.33],[11.93,-3.64],[11.14,-3.93],[9.62,-2.38],[8.71,-0.64],[9.3,-0.37],[9.35,0.36],[9.92,0.19],[9.3,0.53],[9.8,1],[11.35,1],[11.34,2.17],[12.52,2.28]]]]},"properties":{"name":"Gabon"},"id":"GA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[41.55,42.41],[40,43.38],[42.85,43.18],[43.91,42.58],[44.93,42.76],[46.45,41.9],[46.52,41.05],[45.02,41.3],[43.46,41.11],[42.83,41.58],[41.53,41.52],[41.55,42.41]]]]},"properties":{"name":"Georgia"},"id":"GE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-16.73,13.45],[-16.2,13.25],[-16.16,13.43],[-15.3,13.49],[-16.14,13.45],[-16.39,13.33],[-16.57,13.59],[-15.07,13.83],[-13.8,13.41],[-15.11,13.6],[-15.29,13.37],[-15.8,13.35],[-15.81,13.16],[-16.75,13.06],[-16.73,13.45]]]]},"properties":{"name":"Gambia, The"},"id":"GM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[34.33,31.26],[34.27,31.22],[34.22,31.32],[34.49,31.6],[34.33,31.26]]],[[[35.28,32.52],[35.55,32.39],[35.48,31.5],[34.88,31.39],[35.28,32.52]],[[35.25,31.79],[35.26,31.79],[35.25,31.81],[35.25,31.79]]]]},"properties":{"name":"Palestine"},"id":"PS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[10.98,54.38],[10.82,53.89],[12.53,54.47],[14.28,53.7],[14.83,50.87],[12.09,50.32],[13.83,48.77],[12.76,48.12],[13.02,47.47],[9.57,47.54],[7.7,47.54],[7.59,47.58],[8.23,48.96],[6.36,49.46],[6.13,50.13],[6.01,50.76],[5.96,51.81],[6.83,51.97],[7.07,52.39],[6.69,52.55],[7.21,53.24],[7.3,53.69],[8.5,53.35],[8.67,53.89],[9.83,53.54],[8.9,53.94],[8.6,54.33],[9.02,54.5],[8.28,54.75],[8.66,54.91],[9.45,54.83],[10.98,54.38]]]]},"properties":{"name":"Germany"},"id":"DE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[0.64,5.85],[0.66,5.75],[0.26,5.76],[-0.8,5.21],[-1.61,5.02],[-2.06,4.73],[-2.93,5.1],[-3.25,6.61],[-2.49,8.2],[-2.69,9.48],[-2.83,11],[-0.15,11.14],[0.73,8.32],[0.53,6.95],[1.2,6.1],[0.69,5.75],[0.63,5.95],[0.51,6.06],[0.41,6.08],[0.37,6.04],[0.26,6.1],[0.21,6.09],[0.36,6.02],[0.42,6.07],[0.49,6.04],[0.61,5.95],[0.64,5.85]]]]},"properties":{"name":"Ghana"},"id":"GH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-5.33,36.16],[-5.34,36.11],[-5.36,36.16],[-5.33,36.16]]]]},"properties":{"name":"Gibraltar"},"id":"GI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[175.59,-1.92],[175.55,-1.82],[175.59,-1.88],[175.59,-1.92]]],[[[175.04,-1.55],[175,-1.53],[175.05,-1.43],[175.04,-1.55]]],[[[173.62,0.13],[173.6,0.21],[173.63,0.22],[173.62,0.13]]],[[[173.02,1.01],[173.08,0.95],[172.98,0.82],[173.02,1.01]]],[[[173.01,1.71],[172.93,1.94],[173.03,1.82],[173.01,1.71]]],[[[172.87,3.06],[172.77,3],[172.75,3.02],[172.87,3.06]]]]},"properties":{"name":"Kiribati"},"id":"KI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[23.86,35.52],[26.29,35.13],[24.75,34.94],[23.52,35.29],[23.86,35.52]]],[[[23.46,38.85],[24.56,37.99],[22.83,38.83],[23.46,38.85]]],[[[26.29,41.71],[26.36,41.71],[26.63,41.35],[26.04,40.74],[23.74,40.75],[24.4,40.15],[23.35,40.25],[23.71,39.91],[22.59,40.48],[23.34,39.18],[22.94,39.36],[23.07,39.04],[22.52,38.86],[24.07,38.2],[24.03,37.65],[23.52,38.04],[22.99,37.88],[23.51,37.43],[22.73,37.57],[23.2,36.43],[22.63,36.8],[22.49,36.39],[22.15,37.02],[21.7,36.82],[21.11,37.85],[21.86,38.34],[23.23,38.15],[22.4,38.45],[21.15,38.3],[20.73,38.8],[21.15,39],[20.01,39.69],[20.98,40.86],[22.94,41.34],[25.29,41.24],[26.29,41.71]]]]},"properties":{"name":"Greece"},"id":"GR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-52.69,69.92],[-51.83,69.63],[-53.57,69.23],[-54.27,69.4],[-53.35,69.58],[-54.99,69.69],[-54.39,69.68],[-54.94,69.85],[-54.23,69.91],[-54.83,70.08],[-54.43,70.31],[-52.69,69.92]]],[[[-23.61,72.83],[-21.93,72.4],[-22.76,72.44],[-22.13,72.27],[-22.56,72.14],[-24.48,72.83],[-23.61,72.83]]],[[[-32.3,83.57],[-25.65,83.29],[-35.62,82.9],[-25.14,83.16],[-24.75,83],[-25.9,82.78],[-21.31,82.61],[-25.07,82.15],[-31.62,82.21],[-29.9,82.09],[-33.1,81.77],[-25.2,81.99],[-27.63,81.49],[-27.33,81.38],[-22.02,81.93],[-22.23,81.47],[-24.51,80.54],[-19.94,81.68],[-20.31,81.45],[-16.7,81.93],[-12.16,81.6],[-16.01,80.73],[-21.25,80.58],[-16.11,80.5],[-20.55,80.11],[-20.33,79.76],[-17.45,80.06],[-19.63,79.66],[-19.87,79.15],[-19.08,79.2],[-21.18,78.81],[-20.91,78.62],[-22.04,77.69],[-19.24,77.76],[-18.96,77.63],[-21.05,77.54],[-18.4,77.34],[-18.31,76.81],[-22.74,76.7],[-19.81,76.23],[-21.98,75.99],[-19.83,75.91],[-19.34,75.4],[-19.88,75.15],[-22.25,75.66],[-20.52,75.14],[-22.44,75.16],[-18.98,74.48],[-22.48,74.31],[-21.82,73.65],[-21.75,74.06],[-20.28,73.88],[-20.5,73.45],[-22.38,73.25],[-24.03,73.7],[-22.18,73.62],[-24.04,73.81],[-24.46,73.54],[-25.69,73.95],[-24.67,73.51],[-27.34,73.49],[-26.39,73.24],[-27.73,73.13],[-25.05,73.08],[-27.39,72.84],[-24.84,72.72],[-24.61,72.52],[-25.91,72.41],[-22.49,71.89],[-23.13,71.63],[-21.9,71.74],[-22.47,71.26],[-21.81,71.51],[-21.69,71.15],[-22.33,71.05],[-21.68,71.07],[-21.93,70.8],[-21.47,70.54],[-22.38,70.44],[-22.51,70.85],[-22.62,70.45],[-23.35,70.44],[-24.74,71.33],[-28.64,72.12],[-27.33,71.71],[-28.47,71.55],[-25.41,71.35],[-28.41,70.98],[-27.91,70.87],[-29.21,70.39],[-26.32,70.37],[-28.54,70.04],[-25.23,70.41],[-22.08,70.13],[-26.36,68.67],[-29.38,68.2],[-31.57,68.07],[-32.49,68.62],[-32.12,67.86],[-33.2,67.69],[-34.72,66.34],[-35.85,66.43],[-35.59,66.11],[-37.19,65.77],[-37.81,66.03],[-37.18,66.34],[-38.11,66.39],[-37.69,66.26],[-38.48,66.01],[-38.24,65.63],[-40.1,65.57],[-39.76,65.24],[-41.16,64.96],[-40.36,64.35],[-41.57,64.27],[-40.57,64.11],[-40.52,63.7],[-41.62,63.79],[-40.75,63.51],[-41.91,63.46],[-41.43,63.13],[-42.17,63.2],[-41.76,62.84],[-43.15,62.76],[-42.16,62.38],[-42.98,62.52],[-42.12,62.01],[-43.08,61.59],[-42.51,61.36],[-43.25,61.34],[-42.63,61.1],[-43.61,61.13],[-42.7,61.06],[-43.53,60.84],[-42.75,60.68],[-44.2,60.59],[-43.14,60.08],[-44.1,60.38],[-45.15,60.07],[-44.47,60.56],[-45.19,60.13],[-44.63,60.73],[-45.98,60.57],[-45.25,60.9],[-46.22,60.75],[-45.2,61.19],[-46.07,60.92],[-45.77,61.33],[-46.86,60.8],[-48.24,60.82],[-47.69,61],[-48.41,60.99],[-47.92,61.32],[-49.3,61.56],[-48.6,61.64],[-49.15,61.72],[-48.76,61.98],[-49.44,61.84],[-48.84,62.08],[-49.67,62],[-49.29,62.17],[-50.32,62.5],[-49.7,63.06],[-50.38,62.78],[-50.15,63.02],[-50.61,63.09],[-50.06,63.23],[-51.11,63.34],[-50.28,63.4],[-51.22,63.44],[-50.5,63.67],[-51.56,63.71],[-50.92,63.93],[-51.6,64.03],[-50.05,64.19],[-51.76,64.18],[-50.17,64.45],[-50.86,64.63],[-49.58,64.34],[-50,64.87],[-50.98,65.22],[-50.64,64.75],[-52.01,64.2],[-52.12,64.72],[-51.25,65.02],[-52.21,64.81],[-52.1,65.24],[-52.56,65.33],[-50.55,65.71],[-52.5,65.39],[-53.27,65.75],[-51.83,66.06],[-53.46,66.03],[-50,66.98],[-53.48,66.1],[-53.12,66.29],[-53.63,66.5],[-52.42,66.55],[-53.45,66.64],[-52.23,66.84],[-53.97,67.07],[-50.35,67.18],[-53.88,67.26],[-52.5,67.77],[-50.07,67.51],[-51.23,67.7],[-50.42,67.84],[-51.06,67.97],[-53.75,67.6],[-53.19,68.04],[-52.06,67.98],[-53.32,68.18],[-50.15,67.93],[-51.43,68.2],[-50.82,68.5],[-53.39,68.33],[-50.87,68.61],[-51.29,68.75],[-51.07,69.13],[-50.21,68.96],[-50.69,69.12],[-50.38,69.34],[-51.12,69.2],[-50.2,69.52],[-50.88,69.49],[-50.21,70.02],[-54.63,70.65],[-50.49,70.51],[-51.95,71.02],[-50.93,70.99],[-51.23,71.14],[-52.25,71.12],[-51.65,71.36],[-52.56,71.17],[-51.35,71.49],[-52.98,71.42],[-51.64,71.71],[-53.25,71.7],[-52.68,72],[-53.32,71.82],[-53.56,72.36],[-53.96,72.32],[-53.4,71.85],[-54.1,71.71],[-53.92,71.44],[-55.91,71.68],[-54.38,72.22],[-55.3,71.93],[-54.68,72.37],[-55.63,72.46],[-54.3,72.48],[-55.7,73.07],[-55.09,73.36],[-56.08,73.65],[-55.61,73.72],[-56.41,74.07],[-56.13,74.28],[-57.33,74.11],[-56.19,74.55],[-58.7,75.35],[-58.21,75.44],[-58.41,75.72],[-60.88,76.15],[-68.5,76.09],[-69.63,76.38],[-67.98,76.68],[-71.38,77.06],[-66.45,77.13],[-69.1,77.27],[-66.06,77.49],[-69.25,77.45],[-73.05,78.16],[-65.98,79.1],[-64.82,79.53],[-65.07,80.01],[-63.78,80.15],[-67.48,80.33],[-63.68,81.14],[-62.79,80.75],[-63.37,81.16],[-61.06,81.12],[-61.31,81.36],[-60.77,81.5],[-61.45,81.75],[-60.81,81.88],[-56.48,81.33],[-59.47,82],[-54.51,82.37],[-53.56,82.12],[-53.63,81.51],[-52.9,82.03],[-49.61,81.64],[-51.07,81.93],[-49.43,81.93],[-51.12,82.49],[-50.32,82.52],[-44.64,81.75],[-44.18,81.83],[-44.93,81.99],[-44.62,82.28],[-42.3,82.22],[-45.77,82.76],[-39.75,82.4],[-46.89,82.96],[-43.39,82.91],[-45.52,83.12],[-42.7,83.27],[-38.57,82.74],[-39.15,82.98],[-36.88,83.15],[-38.86,83.43],[-32.3,83.57]]]]},"properties":{"name":"Greenland"},"id":"GL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-61.75,12],[-61.61,12.23],[-61.63,12.05],[-61.75,12]]],[[[-61.43,12.45],[-61.5,12.44],[-61.43,12.53],[-61.43,12.45]]]]},"properties":{"name":"Grenada"},"id":"GD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-61.35,16.33],[-61.7,15.95],[-61.78,16.33],[-61.35,16.33]]]]},"properties":{"name":"Guadeloupe"},"id":"GP"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[144.71,13.23],[144.66,13.43],[144.88,13.65],[144.71,13.23]]]]},"properties":{"name":"Guam"},"id":"GU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-90.63,13.93],[-92.25,14.55],[-91.73,16.07],[-90.44,16.09],[-91.44,17.24],[-90.98,17.26],[-90.98,17.82],[-89.14,17.82],[-89.22,15.89],[-88.91,15.89],[-88.21,15.72],[-89.35,14.43],[-90.1,13.75],[-90.63,13.93]]]]},"properties":{"name":"Guatemala"},"id":"GT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-13.6,9.73],[-15.02,10.96],[-14.69,11.51],[-13.71,11.72],[-13.71,12.68],[-11.37,12.41],[-10.65,11.89],[-9.16,12.49],[-8.53,11.49],[-8.68,10.97],[-8.29,11.01],[-7.97,10.17],[-7.65,8.38],[-8.2,8.5],[-7.95,8.02],[-8.47,7.56],[-9.49,7.36],[-9.48,8.35],[-10.27,8.49],[-10.7,8.3],[-10.57,9.06],[-11.21,10],[-12.46,9.89],[-13.3,9.03],[-13.6,9.73]]]]},"properties":{"name":"Guinea"},"id":"GN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-59.79,8.34],[-58.47,7.35],[-58.65,6.43],[-58.31,6.89],[-57.2,6.15],[-57.25,5.49],[-58.05,4.01],[-56.47,1.94],[-58.81,1.19],[-59.64,1.73],[-59.99,2.69],[-59.57,3.9],[-60.15,4.52],[-60.1,5.22],[-60.73,5.2],[-61.39,5.94],[-61.13,6.71],[-60.29,7.06],[-60.72,7.54],[-59.83,8.24],[-59.99,8.54],[-59.79,8.34]]]]},"properties":{"name":"Guyana"},"id":"GY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-72.67,19.92],[-71.75,19.71],[-71.77,18.04],[-74.45,18.34],[-74.27,18.67],[-72.35,18.53],[-72.72,19.45],[-73.47,19.69],[-72.67,19.92]]]]},"properties":{"name":"Haiti"},"id":"HT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[73.77,-53.13],[73.47,-53.19],[73.23,-52.99],[73.77,-53.13]]]]},"properties":{"name":"Heard Island and McDonald Islands"},"id":"HM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[12.45,41.9],[12.45,41.91],[12.46,41.9],[12.45,41.9]]]]},"properties":{"name":"Holy See (Vatican City)"},"id":"VA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-85.84,16.01],[-84.26,15.83],[-83.13,14.99],[-83.24,14.98],[-84.91,14.81],[-87.3,12.99],[-87.82,13.41],[-87.75,13.86],[-89.34,14.42],[-89.35,14.43],[-88.21,15.72],[-85.84,16.01]]]]},"properties":{"name":"Honduras"},"id":"HN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[114.25,22.2],[114.12,22.28],[114.2,22.29],[114.25,22.2]]],[[[113.9,22.2],[113.83,22.23],[114.05,22.34],[113.9,22.2]]],[[[114.22,22.47],[114.03,22.51],[114.22,22.55],[114.22,22.47]]]]},"properties":{"name":"Hong Kong"},"id":"HK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[18.82,45.91],[17.67,45.83],[16.61,46.48],[16.11,46.87],[16.51,47.01],[16.45,47.7],[17.17,48.01],[17.25,48.02],[18.66,47.76],[20.66,48.56],[22.15,48.41],[22.89,47.95],[20.73,46.18],[20.26,46.11],[18.82,45.91]]]]},"properties":{"name":"Hungary"},"id":"HU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-15.07,66.14],[-14.34,65.78],[-14.56,65.49],[-13.61,65.51],[-14.03,65.19],[-13.5,65.07],[-14.93,64.26],[-18.71,63.39],[-21.05,63.95],[-22.69,63.81],[-21.51,64.65],[-24.06,64.89],[-21.84,65.03],[-22.56,65.17],[-21.7,65.45],[-24.54,65.5],[-23.23,65.74],[-23.87,65.87],[-23.21,65.84],[-23.82,66.01],[-23.47,66.2],[-22.42,65.85],[-22.94,66.47],[-21.4,66.03],[-21.78,65.77],[-21.08,65.16],[-20.18,66.13],[-19.45,65.73],[-18.78,66.19],[-18.07,65.64],[-18.3,66.17],[-16.59,66.09],[-16.53,66.51],[-14.71,66.37],[-15.07,66.14]]]]},"properties":{"name":"Iceland"},"id":"IS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[78.08,35.45],[79.53,32.75],[78.4,32.55],[78.77,31.31],[81.03,30.2],[80.06,28.84],[82.07,27.91],[83.29,27.34],[84.15,27.51],[85.86,26.57],[88.01,26.36],[88.14,27.87],[88.83,28.01],[88.92,27.32],[89.64,26.72],[92.07,26.86],[91.66,27.76],[92.54,27.86],[94.65,29.33],[95.39,29.04],[96.08,29.47],[96.62,28.79],[96.4,28.35],[97.35,28.22],[96.89,27.61],[97.14,27.09],[96.19,27.27],[95.14,26.61],[94.15,23.86],[93.34,24.08],[93.2,22.26],[92.6,21.98],[92.28,23.71],[91.61,22.94],[91.16,23.64],[92.41,25.03],[89.85,25.29],[89.74,26.16],[88.43,26.55],[88.11,25.84],[89.01,25.29],[88.04,24.68],[88.75,24.22],[89.06,22.12],[89.07,21.61],[88.71,21.57],[88.67,22.2],[88.25,21.55],[88.2,22.16],[87.91,22.42],[88.17,22.09],[86.96,21.38],[87.03,20.67],[86.42,19.98],[85.43,19.89],[82.36,17.1],[82.3,16.58],[80.28,15.7],[79.86,10.29],[79.32,10.28],[78.91,9.48],[79.45,9.15],[78.4,9.09],[77.54,8.07],[76.58,8.88],[73.45,16.06],[72.66,19.87],[72.93,20.77],[72.56,21.38],[73.13,21.75],[72.5,21.98],[72.92,22.27],[72.15,22.28],[72.11,21.2],[70.82,20.7],[68.94,22.29],[70.17,22.55],[70.51,23.1],[69.22,22.84],[68.43,23.43],[68.74,23.84],[68.2,23.77],[68.78,24.33],[71.11,24.42],[69.58,27.17],[70.37,28.02],[71.9,27.96],[74.69,31.05],[74.61,31.88],[75.38,32.21],[74.02,33.19],[74.3,33.98],[73.94,34.65],[76.87,34.66],[77.82,35.5],[78.08,35.45]]]]},"properties":{"name":"India"},"id":"IN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[120.03,-9.38],[120.72,-10.2],[118.93,-9.56],[120.03,-9.38]]],[[[125.16,-9.07],[125.13,-9.44],[124.44,-10.16],[123.49,-10.32],[124.05,-9.34],[124.34,-9.46],[124.45,-9.18],[124.95,-8.95],[125.16,-9.07]]],[[[116.55,-8.78],[115.84,-8.76],[116.39,-8.2],[116.55,-8.78]]],[[[124.58,-8.14],[125.14,-8.33],[124.35,-8.45],[124.58,-8.14]]],[[[118.31,-8.37],[119,-8.31],[119.18,-8.72],[116.75,-9.01],[117.12,-8.38],[117.97,-8.75],[118.28,-8.59],[117.74,-8.15],[118.31,-8.37]]],[[[122.98,-8.15],[122.83,-8.6],[121.77,-8.89],[119.8,-8.72],[120.52,-8.26],[122.29,-8.64],[122.98,-8.15]]],[[[115.5,-8.18],[115.13,-8.85],[114.45,-8.1],[115.5,-8.18]]],[[[126.72,-7.67],[125.77,-8.01],[125.97,-7.66],[126.72,-7.67]]],[[[138.97,-7.56],[138.44,-8.38],[137.64,-8.43],[138.15,-7.51],[138.97,-7.56]]],[[[131.74,-7.21],[131.11,-8],[131.24,-7.48],[131.74,-7.21]]],[[[113.99,-6.88],[113.5,-7.23],[112.69,-7.05],[113.99,-6.88]]],[[[106.16,-6.01],[108.31,-6.26],[108.73,-6.82],[110.39,-6.98],[110.92,-6.41],[112.56,-6.91],[112.85,-7.6],[114.45,-7.8],[114.37,-8.52],[114.62,-8.75],[108.16,-7.78],[105.24,-6.81],[106.16,-6.01]]],[[[134.58,-5.43],[134.73,-5.97],[134.3,-6.03],[134.58,-5.43]]],[[[123.21,-4.7],[122.65,-5.69],[122.9,-4.49],[123.21,-4.7]]],[[[126.99,-3.14],[127.24,-3.62],[126.7,-3.83],[126.02,-3.35],[126.99,-3.14]]],[[[129.81,-2.92],[130.58,-3.13],[130.83,-3.87],[128.17,-3.07],[127.91,-3.54],[128.17,-2.86],[129.81,-2.92]]],[[[107.83,-2.54],[108.27,-2.76],[108.07,-3.24],[107.61,-3.21],[107.83,-2.54]]],[[[133.59,-2.53],[133.5,-2.43],[133.61,-2.48],[133.59,-2.53]]],[[[134.57,-2.45],[134.52,-2.4],[134.57,-2.29],[134.57,-2.45]]],[[[134.37,-2.16],[134.33,-2.09],[134.39,-2],[134.37,-2.16]]],[[[130.19,-2.06],[129.72,-1.89],[130.35,-1.68],[130.19,-2.06]]],[[[125.01,-1.72],[125.32,-1.89],[124.33,-1.88],[125.01,-1.72]]],[[[136.29,-1.69],[136.9,-1.8],[135.42,-1.61],[136.29,-1.69]]],[[[106.09,-1.77],[106.72,-3.1],[105.13,-2.07],[105.57,-1.53],[106.09,-1.77]]],[[[127.88,-1.43],[128.15,-1.68],[127.38,-1.63],[127.88,-1.43]]],[[[133.11,-0.54],[134.11,-0.84],[134.16,-2.32],[135,-3.34],[137.86,-1.47],[141,-2.61],[141.01,-9.13],[139.99,-8.19],[140.15,-7.88],[138.91,-8.3],[139.1,-7.56],[138.66,-7.2],[139.22,-7.16],[138.56,-6.91],[139.19,-6.97],[138.06,-5.41],[134.22,-3.96],[133.64,-3.49],[133.83,-2.96],[132.9,-4.09],[132.82,-3.3],[131.96,-2.78],[133.24,-2.42],[133.68,-2.72],[133.94,-2.1],[132.3,-2.27],[130.96,-1.4],[132.27,-0.38],[133.11,-0.54]]],[[[130.88,-0.02],[131.26,-0.39],[130.21,-0.21],[130.88,-0.02]]],[[[97.53,1.42],[97.81,0.55],[97.11,1.39],[97.53,1.42]]],[[[125.14,1.42],[124.25,0.38],[120.24,0.35],[120.07,-0.61],[120.67,-1.4],[121.62,-0.8],[123.45,-0.84],[121.3,-1.8],[122.9,-4.4],[121.55,-4.75],[120.77,-2.61],[120.2,-2.96],[120.46,-5.62],[119.46,-5.56],[119.51,-3.53],[118.92,-3.57],[118.76,-2.77],[119.86,-0.84],[119.62,-0.01],[120.03,0.71],[120.95,1.34],[123.84,0.83],[124.97,1.69],[125.14,1.42]]],[[[127.89,1.8],[127.79,0.8],[128.73,1.56],[128.21,0.78],[128.91,0.2],[127.88,0.31],[128.4,-0.89],[127.67,-0.23],[127.39,1.05],[128.05,2.2],[127.89,1.8]]],[[[116.05,4.28],[117.59,4.17],[117.83,3.7],[117.03,3.59],[118.1,2.31],[117.87,1.88],[119.01,0.98],[117.89,1.12],[117.62,-0.78],[116.74,-1.02],[116.22,-1.78],[116.6,-2.23],[115.98,-3.59],[114.71,-4.18],[114.48,-3.5],[113.06,-2.99],[111.89,-3.57],[111.75,-2.74],[110.24,-2.98],[110.06,-1.33],[109.27,-0.86],[108.85,0.81],[109.65,2.07],[110.56,0.85],[111.83,1],[112.47,1.57],[114.56,1.43],[116.05,4.28]]],[[[95.74,5.59],[97.52,5.25],[100,2.6],[100.94,1.82],[101.06,2.29],[102.93,0.7],[102.54,0.17],[103.74,0.28],[103.36,-0.7],[104.38,-1.04],[104.88,-2.15],[104.53,-2.77],[104.86,-2.29],[105.61,-2.39],[106.06,-3.03],[105.73,-5.9],[105.27,-5.44],[105.14,-5.8],[104.54,-5.51],[104.56,-5.93],[101.63,-3.25],[100.29,-0.81],[99.14,0.26],[98.77,1.75],[95.53,4.68],[95.23,5.57],[95.74,5.59]]]]},"properties":{"name":"Indonesia"},"id":"ID"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[45,39.42],[46.18,38.84],[46.54,38.88],[47.98,39.72],[48.36,39.39],[48.02,38.84],[48.89,38.44],[49.1,37.64],[51.1,36.73],[53.94,36.8],[53.91,37.35],[57.21,38.28],[59.34,37.54],[60.33,36.66],[61.16,36.65],[61.28,35.61],[60.51,34.14],[60.94,33.52],[60.58,33.07],[60.84,31.5],[61.85,31.02],[60.87,29.86],[61.91,28.55],[62.78,28.27],[62.78,27.26],[63.34,27.12],[63.18,26.63],[61.86,26.23],[61.61,25.2],[57.32,25.77],[56.69,27.15],[54.79,26.49],[53.75,26.71],[51.43,27.94],[50.05,30.21],[49.55,30.01],[48.98,30.51],[48.55,29.96],[47.69,31],[47.86,31.8],[47.43,32.4],[46.11,32.97],[45.4,33.98],[45.8,34.91],[46.35,35.82],[45.41,35.99],[44.79,37.15],[44.03,39.38],[44.81,39.63],[45,39.42]]]]},"properties":{"name":"Iran"},"id":"IR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[45.8,34.91],[45.4,33.98],[46.11,32.97],[47.43,32.4],[47.86,31.8],[47.69,31],[48.55,29.96],[47.94,30.02],[47.93,30.02],[47.17,30.02],[46.55,29.1],[44.72,29.2],[42.08,31.11],[39.2,32.15],[38.79,33.38],[41,34.42],[41.29,36.36],[42.36,37.11],[44.79,37.15],[45.41,35.99],[46.35,35.82],[45.8,34.91]]]]},"properties":{"name":"Iraq"},"id":"IQ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-7.41,54.95],[-8.16,54.44],[-6.27,54.1],[-6.01,52.95],[-6.36,52.18],[-9.23,51.48],[-10.34,51.78],[-9.76,52.15],[-10.46,52.18],[-8.82,52.67],[-9.94,52.56],[-8.94,53.26],[-10.18,53.41],[-9.56,53.86],[-10.11,54.23],[-8.47,54.27],[-8.19,54.63],[-8.8,54.69],[-8.32,55.11],[-6.93,55.24],[-7.25,55.07],[-7.41,54.95]]]]},"properties":{"name":"Ireland"},"id":"IE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[35.26,31.79],[35.25,31.79],[35.25,31.81],[35.26,31.79]]],[[[35.62,33.25],[35.65,32.69],[35.55,32.39],[35.28,32.52],[34.88,31.39],[35.48,31.5],[34.98,29.55],[34.9,29.49],[34.27,31.22],[34.33,31.26],[34.49,31.6],[35.1,33.09],[35.62,33.25]]]]},"properties":{"name":"Israel"},"id":"IL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[15.53,38.14],[15.08,36.65],[12.42,37.8],[13.32,38.22],[15.53,38.14]]],[[[9.51,41.15],[9.57,39.15],[8.41,38.96],[8.19,40.91],[9.51,41.15]]],[[[12.13,47],[13.72,46.53],[13.38,46.3],[13.72,45.6],[12.28,45.47],[12.37,44.25],[13.62,43.55],[14.74,42.09],[16.14,41.91],[15.93,41.48],[18.51,40.14],[18.35,39.79],[16.91,40.45],[16.49,39.77],[17.17,38.96],[16.06,37.92],[15.63,38.01],[16.22,38.91],[15.67,40.03],[11.1,42.39],[10.11,44.01],[8.75,44.43],[7.53,43.79],[7.66,44.17],[6.98,44.28],[6.62,45.11],[7.13,45.26],[7.04,45.93],[7.86,45.92],[8.44,46.46],[9.04,45.84],[9.28,46.5],[10.13,46.23],[10.47,46.87],[12.13,47]],[[12.46,43.9],[12.51,43.99],[12.42,43.96],[12.46,43.9]],[[12.45,41.9],[12.46,41.9],[12.45,41.91],[12.45,41.9]]]]},"properties":{"name":"Italy"},"id":"IT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-4.79,5.17],[-7.53,4.35],[-7.42,5.84],[-8.61,6.51],[-8.47,7.56],[-7.95,8.02],[-8.2,8.5],[-7.65,8.38],[-7.97,10.17],[-6.99,10.15],[-6.24,10.74],[-6.11,10.2],[-5.52,10.44],[-4.7,9.7],[-3.63,9.95],[-2.69,9.48],[-2.49,8.2],[-3.25,6.61],[-2.93,5.1],[-4.79,5.17]]]]},"properties":{"name":"Cote d\'Ivoire"},"id":"CI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-77.13,17.88],[-78.34,18.36],[-76.95,18.39],[-76.22,17.9],[-77.13,17.88]]]]},"properties":{"name":"Jamaica"},"id":"JM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[131.21,33.6],[131.67,33.65],[131.99,32.83],[131.34,31.37],[130.67,31],[130.81,31.68],[130.64,31.18],[130.23,31.25],[130.16,32.01],[130.61,32.79],[130.21,33.17],[130.35,32.66],[129.75,32.56],[129.58,33.35],[130.69,33.94],[131.21,33.6]]],[[[134.22,34.34],[134.75,33.83],[134.19,33.24],[133.6,33.5],[132.8,32.74],[132.37,33.47],[132.02,33.34],[132.9,34.11],[134.22,34.34]]],[[[141.27,41.34],[142.07,39.55],[141.53,38.27],[140.95,38.15],[140.84,35.74],[140.33,35.13],[139.77,34.95],[139.97,35.66],[138.85,34.59],[138.74,35.12],[138.21,34.6],[137.04,34.56],[137.35,34.72],[136.85,35.08],[136.52,34.69],[136.9,34.27],[135.77,33.45],[135.06,33.88],[135.33,34.72],[132.37,34.36],[132.05,33.77],[130.89,33.92],[130.95,34.42],[133.09,35.58],[136.07,35.65],[136.79,37.36],[137.36,37.5],[136.86,37.09],[137.3,36.75],[138.58,37.4],[140.02,39.38],[139.85,40.6],[140.35,41.25],[141.15,40.86],[141.23,41.23],[140.76,41.17],[141.27,41.34]]],[[[142.05,45.4],[143.77,44.09],[144.78,43.91],[145.34,44.34],[145.26,43.31],[145.82,43.37],[143.99,42.91],[143.24,41.92],[141.79,42.61],[140.46,42.57],[140.28,42.25],[141.2,41.8],[140.07,41.42],[139.84,42.62],[140.47,43.37],[141.41,43.29],[141.58,45.23],[142.05,45.4]]]]},"properties":{"name":"Japan"},"id":"JP"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[69.19,55.34],[70.84,55.3],[71.19,54.1],[73.76,54.07],[73.44,53.44],[76.81,54.45],[76.52,53.99],[77.91,53.27],[80.08,50.76],[80.69,51.31],[81.47,50.74],[83.46,51],[85.26,49.59],[86.77,49.79],[87.35,49.09],[85.76,48.39],[85.53,47.06],[83.04,47.21],[82.32,45.57],[82.56,45.13],[79.87,44.9],[80.52,44.73],[80.82,43.16],[80.38,43.03],[80.23,42.2],[79.19,42.8],[74.29,43.22],[73.58,43.04],[73.52,42.41],[71.75,42.82],[70.97,42.25],[69.06,41.38],[68.46,40.6],[67.94,41.18],[66.72,41.17],[66.53,42],[66.03,42],[66.12,43],[64.93,43.74],[62.03,43.48],[58.57,45.57],[56,45],[56,41.33],[54.17,42.34],[53.01,42.14],[52.44,41.74],[52.74,42.71],[51.27,43.15],[50.24,44.58],[51.57,44.51],[50.95,44.86],[51.41,45.37],[53.23,45.34],[52.73,45.55],[53.19,46.71],[51.19,47.11],[49.22,46.35],[48.56,46.56],[49.03,46.78],[48.2,47.7],[47.38,47.69],[46.5,48.42],[47.52,50.44],[48.8,49.94],[48.7,50.59],[50.77,51.77],[53.43,51.49],[54.52,50.53],[54.65,51.04],[55.69,50.53],[56.51,51.08],[58.34,51.16],[59.54,50.48],[61.38,50.78],[61.69,51.27],[60,51.96],[61.06,52.34],[60.69,52.68],[61.1,52.98],[62.12,53],[61.18,53.31],[61.58,53.51],[60.91,53.62],[61.01,53.95],[65.22,54.32],[69.19,55.34]]]]},"properties":{"name":"Kazakhstan"},"id":"KZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[34.96,29.36],[34.98,29.55],[35.48,31.5],[35.55,32.39],[35.65,32.69],[36.84,32.31],[38.79,33.38],[39.2,32.15],[37.01,31.51],[38,30.5],[37.5,30],[36.07,29.19],[34.96,29.36]]]]},"properties":{"name":"Jordan"},"id":"JO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[35.94,4.62],[39.52,3.41],[40.78,4.29],[41.91,3.98],[40.99,2.83],[41,-0.87],[41.56,-1.67],[40.24,-2.66],[39.2,-4.67],[37.61,-3.5],[37.6,-3],[33.92,-1],[33.91,0.1],[35.01,1.9],[34,4.22],[34.39,4.61],[35.94,4.62]]]]},"properties":{"name":"Kenya"},"id":"KE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[130.64,42.41],[130.7,42.29],[129.7,41.65],[129.71,40.83],[127.51,39.72],[127.39,39.2],[128.36,38.63],[126.69,37.83],[125.59,38.03],[125.34,37.67],[124.66,38.12],[125.65,38.63],[125.14,38.8],[125.45,39.58],[124.62,39.59],[124.37,40.09],[126.91,41.8],[128.16,41.38],[128.06,42],[129.71,42.44],[129.91,43.01],[130.6,42.42],[130.64,42.41]]]]},"properties":{"name":"Korea, North"},"id":"KP"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[128.53,38.33],[129.43,37.06],[129.44,35.48],[126.56,34.3],[126.25,35.12],[126.87,36.05],[126.12,36.71],[126.99,36.91],[126.69,37.83],[128.36,38.63],[128.53,38.33]]]]},"properties":{"name":"South Korea"},"id":"KR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[47.93,30.02],[47.94,30.02],[48.17,29.55],[47.71,29.38],[48.42,28.55],[46.55,29.1],[47.17,30.02],[47.93,30.02]]]]},"properties":{"name":"Kuwait"},"id":"KW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[80.23,42.2],[78.08,41.04],[76.87,41.01],[76.35,40.35],[74.86,40.52],[73.66,39.45],[69.31,39.54],[69.54,40.13],[70.98,40.24],[73.17,40.82],[71.69,41.56],[71.42,41.12],[70.19,41.53],[71.28,42.2],[70.97,42.25],[71.75,42.82],[73.52,42.41],[73.58,43.04],[74.29,43.22],[79.19,42.8],[80.23,42.2]]]]},"properties":{"name":"Kyrgyzstan"},"id":"KG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[107.55,14.71],[106,14.37],[106.06,13.93],[105.21,14.35],[105.64,15.66],[104.75,16.53],[104.72,17.5],[103.4,18.43],[102.68,17.82],[102.09,18.21],[100.92,17.57],[101.28,19.56],[100.5,19.53],[100.58,20.16],[100.09,20.35],[101.15,21.57],[101.79,21.14],[101.57,22.21],[102.14,22.4],[102.98,21.74],[103.17,20.85],[104.64,20.66],[104.38,20.44],[104.98,20],[103.88,19.29],[105.19,18.64],[106.69,16.46],[107.46,16.08],[107.18,15.78],[107.7,15.27],[107.55,14.71]]]]},"properties":{"name":"Laos"},"id":"LA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[35.62,33.25],[35.1,33.09],[35.97,34.65],[36.62,34.2],[35.62,33.25]]]]},"properties":{"name":"Lebanon"},"id":"LB"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[27.56,-30.4],[27.01,-29.63],[28.57,-28.61],[29.43,-29.28],[29.17,-29.91],[28.08,-30.65],[27.56,-30.4]]]]},"properties":{"name":"Lesotho"},"id":"LS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[21.07,56.44],[21.73,57.58],[22.61,57.76],[23.79,56.97],[24.41,57.26],[24.31,57.87],[25.29,58.08],[27.37,57.54],[27.86,57.3],[28.17,56.15],[26.61,55.67],[25,56.3],[21.05,56.08],[21.07,56.44]]]]},"properties":{"name":"Latvia"},"id":"LV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-10.81,6.4],[-11.49,6.93],[-10.27,8.49],[-9.48,8.35],[-9.49,7.36],[-8.47,7.56],[-8.61,6.51],[-7.42,5.84],[-7.53,4.35],[-10.81,6.4]]]]},"properties":{"name":"Liberia"},"id":"LR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[9.95,27.82],[9.54,30.23],[10.21,30.73],[10.29,31.69],[11.57,32.44],[11.53,33.17],[15.17,32.4],[15.76,31.39],[19,30.27],[20.06,30.86],[20.08,32.18],[21.62,32.93],[25.15,31.65],[24.71,30.17],[25,22],[25,20],[24,20],[24,19.5],[16,23.45],[15,23],[14.23,22.61],[11.99,23.52],[11.56,24.3],[10.25,24.61],[9.4,26.15],[9.87,26.51],[9.95,27.82]]]]},"properties":{"name":"Libya"},"id":"LY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[9.53,47.27],[9.6,47.06],[9.47,47.06],[9.53,47.27]]]]},"properties":{"name":"Liechtenstein"},"id":"LI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[25,56.3],[26.61,55.67],[26.82,55.28],[25.79,54.87],[25.79,54.16],[23.5,53.95],[22.79,54.36],[22.84,54.9],[21.43,55.25],[21.26,55.25],[21.05,56.08],[25,56.3]]]]},"properties":{"name":"Lithuania"},"id":"LT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[6.03,50.18],[6.13,50.13],[6.36,49.46],[5.81,49.55],[6.03,50.18]]]]},"properties":{"name":"Luxembourg"},"id":"LU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[113.53,22.19],[113.55,22.21],[113.55,22.18],[113.53,22.19]]]]},"properties":{"name":"Macau"},"id":"MO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[49.36,-12.09],[50.43,-15.58],[50.17,-15.98],[49.63,-15.56],[49.79,-16.83],[47.13,-24.93],[45.21,-25.59],[44.02,-24.99],[43.24,-22.28],[44.48,-19.97],[43.94,-17.48],[44.46,-16.18],[46.48,-15.97],[46.34,-15.62],[47.22,-15.45],[47.45,-14.67],[47.43,-15.11],[48,-14.77],[47.91,-13.6],[48.74,-13.43],[48.73,-12.43],[49.36,-12.09]]]]},"properties":{"name":"Madagascar"},"id":"MG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[34.73,-12.1],[34.7,-12.08],[34.72,-12.03],[34.75,-12.04],[34.73,-12.1]]],[[[34.62,-12.04],[34.6,-12.01],[34.63,-12.01],[34.62,-12.04]]],[[[33.13,-9.49],[34.33,-9.73],[34.97,-11.57],[34.38,-12.16],[34.57,-13.34],[35.92,-14.89],[35.81,-16.02],[35.14,-16.55],[35.29,-17.13],[34.26,-15.9],[34.52,-14.57],[33.63,-14.54],[33.22,-14.01],[32.68,-13.61],[33.55,-12.36],[33.25,-10.89],[33.7,-10.56],[32.94,-9.41],[33.13,-9.49]]]]},"properties":{"name":"Malawi"},"id":"MW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[100.65,6.45],[101.14,5.63],[102.1,6.24],[103.41,4.86],[103.44,2.93],[104.28,1.37],[103.96,1.65],[103.51,1.27],[101.28,2.84],[100.13,6.42],[100.65,6.45]]],[[[116.79,6.58],[117.18,6.99],[117.74,6.39],[117.5,5.9],[118.01,6.06],[117.96,5.68],[119.28,5.34],[118.14,4.89],[118.55,4.35],[117.59,4.17],[116.05,4.28],[114.56,1.43],[112.47,1.57],[111.83,1],[110.56,0.85],[109.65,2.07],[111.38,1.34],[111,1.58],[111.44,2.69],[113.01,3.16],[114.1,4.59],[114.64,4.02],[115.02,4.9],[115.03,4.82],[115.34,4.31],[115.22,4.8],[115.15,4.9],[116.76,7.02],[116.79,6.58]]]]},"properties":{"name":"Malaysia"},"id":"MY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[73.18,-0.69],[73.16,-0.68],[73.17,-0.68],[73.18,-0.69]]],[[[73.2,-0.68],[73.19,-0.68],[73.2,-0.67],[73.2,-0.68]]],[[[73.13,-0.67],[73.13,-0.67],[73.12,-0.65],[73.13,-0.67]]],[[[73.23,-0.65],[73.23,-0.63],[73.24,-0.62],[73.23,-0.65]]],[[[73.12,-0.64],[73.09,-0.61],[73.09,-0.58],[73.12,-0.64]]],[[[73.25,-0.61],[73.24,-0.59],[73.25,-0.58],[73.25,-0.61]]]]},"properties":{"name":"Maldives"},"id":"MV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-8.53,11.49],[-9.16,12.49],[-10.65,11.89],[-11.37,12.41],[-12.24,14.76],[-11.49,15.65],[-10.9,15.11],[-9.34,15.7],[-5.5,15.5],[-6.58,25],[-4.81,25],[1.8,20.31],[3.23,19.82],[3.33,18.98],[4.25,19.15],[4.25,18.65],[4.2,16.39],[3.52,15.36],[0.24,14.92],[-0.73,15.08],[-2.47,14.29],[-3.44,13.17],[-3.96,13.5],[-4.42,12.3],[-5.27,11.84],[-5.52,10.44],[-6.11,10.2],[-6.24,10.74],[-6.99,10.15],[-7.97,10.17],[-8.29,11.01],[-8.68,10.97],[-8.53,11.49]]]]},"properties":{"name":"Mali"},"id":"ML"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[14.56,35.82],[14.37,35.85],[14.33,35.98],[14.56,35.82]]],[[[14.27,36.01],[14.18,36.06],[14.34,36.03],[14.27,36.01]]]]},"properties":{"name":"Malta"},"id":"MT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-60.86,14.4],[-61.17,14.88],[-60.94,14.74],[-60.86,14.4]]]]},"properties":{"name":"Martinique"},"id":"MQ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-6.66,26.13],[-4.81,25],[-6.58,25],[-5.5,15.5],[-9.34,15.7],[-10.9,15.11],[-11.49,15.65],[-12.24,14.76],[-14.35,16.64],[-16.28,16.52],[-16.53,16.06],[-16.04,17.73],[-16.51,19.35],[-16.2,20.22],[-16.92,21.16],[-17.05,20.76],[-16.95,21.34],[-15.74,21.34],[-13,21.34],[-13.11,22.89],[-12,23.45],[-12,26],[-8.67,26],[-8.67,27.29],[-6.66,26.13]]]]},"properties":{"name":"Mauritania"},"id":"MR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[57.57,-20.51],[57.3,-20.45],[57.62,-19.99],[57.57,-20.51]]]]},"properties":{"name":"Mauritius"},"id":"MU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-113.05,31.97],[-111.05,31.33],[-106.4,31.75],[-103.38,29.02],[-102.31,29.89],[-101.41,29.77],[-99.51,27.57],[-99.1,26.43],[-97.14,25.97],[-97.89,22.6],[-95.91,18.83],[-94.48,18.15],[-92,18.73],[-91.48,18.44],[-90.45,19.98],[-90.33,21.03],[-87.03,21.59],[-86.77,21.15],[-87.74,19.67],[-87.41,19.58],[-87.85,18.19],[-88.04,18.87],[-88.3,18.48],[-88.38,18.48],[-89.14,17.82],[-90.98,17.82],[-90.98,17.26],[-91.44,17.24],[-90.44,16.09],[-91.73,16.07],[-92.25,14.55],[-92.77,15.17],[-93.93,16.09],[-94.37,16.29],[-94.06,16.04],[-94.72,16.2],[-94.58,16.32],[-94.79,16.26],[-94.86,16.43],[-96.48,15.64],[-97.79,15.97],[-104.98,19.34],[-105.68,20.39],[-105.24,20.57],[-105.54,20.79],[-105.19,21.44],[-105.82,22.66],[-108.04,25.07],[-109.11,25.53],[-108.83,25.8],[-109.39,25.76],[-109.1,26.28],[-110.53,27.37],[-110.51,27.87],[-112.16,28.97],[-113.09,31.23],[-115.03,31.97],[-114.55,30],[-111.56,26.72],[-110.66,24.34],[-109.41,23.47],[-110,22.89],[-112.09,24.76],[-112.4,26.27],[-114.99,27.72],[-113.98,27.7],[-114.31,27.87],[-114.06,28.53],[-115.69,29.77],[-117.12,32.54],[-114.72,32.72],[-113.05,31.97]]]]},"properties":{"name":"Mexico"},"id":"MX"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[7.44,43.76],[7.39,43.73],[7.42,43.77],[7.44,43.76]]]]},"properties":{"name":"Monaco"},"id":"MC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[91.02,46.6],[90.07,47.89],[88.65,48.18],[87.84,49.17],[92.32,50.81],[97.34,49.73],[98.29,50.29],[97.83,51],[98.93,52.14],[102.22,51.33],[102.33,50.57],[102.92,50.32],[106.66,50.34],[108.57,49.33],[110.79,49.15],[114.31,50.28],[116.71,49.83],[115.59,47.92],[117.37,47.65],[118.54,47.99],[119.9,46.68],[117.42,46.58],[113.64,44.75],[111.98,45.09],[111.42,44.38],[111.96,43.69],[110.44,42.78],[107.47,42.47],[105.01,41.58],[100.84,42.68],[96.38,42.73],[95.42,44.29],[90.9,45.25],[91.02,46.6]]]]},"properties":{"name":"Mongolia"},"id":"MN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[28.12,46.85],[26.63,48.26],[27.76,48.45],[29.14,47.99],[29.95,46.81],[30.12,46.39],[28.99,46.48],[28.21,45.45],[28.12,46.85]]]]},"properties":{"name":"Moldova"},"id":"MD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[18.46,42.57],[19.23,43.51],[20.35,42.89],[20.07,42.56],[19.65,42.62],[19.37,41.85],[18.5,42.45],[18.46,42.57]]]]},"properties":{"name":"Montenegro"},"id":"ME"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-62.17,16.67],[-62.24,16.71],[-62.2,16.81],[-62.17,16.67]]]]},"properties":{"name":"Montserrat"},"id":"MS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-9.05,32.73],[-6.81,34.05],[-5.92,35.79],[-5.4,35.92],[-4.42,35.15],[-2.99,35.42],[-2.21,35.09],[-1.75,34.75],[-1.18,32.11],[-3.82,31.7],[-3.63,30.97],[-8.67,28.71],[-8.67,27.67],[-13.17,27.67],[-10.14,29.43],[-9.64,30.17],[-9.81,31.45],[-9.05,32.73]]]]},"properties":{"name":"Morocco"},"id":"MA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[40.5,-11.03],[40.59,-15.48],[39.09,-16.99],[36.84,-17.88],[36.25,-18.89],[34.9,-19.86],[34.62,-19.62],[35.55,-22.23],[35.5,-24.11],[32.81,-25.61],[32.89,-26.85],[32.13,-26.84],[31.97,-25.96],[32.02,-24.46],[31.3,-22.41],[32.49,-21.34],[33.02,-19.94],[32.7,-18.94],[32.99,-17.27],[32.98,-16.71],[30.42,-16.01],[30.42,-15.63],[30.21,-14.98],[33.22,-14.01],[33.63,-14.54],[34.52,-14.57],[34.26,-15.9],[35.29,-17.13],[35.14,-16.55],[35.81,-16.02],[35.92,-14.89],[34.57,-13.34],[34.38,-12.16],[34.97,-11.57],[37.46,-11.73],[40.44,-10.48],[40.5,-11.03]],[[34.6,-12.01],[34.62,-12.04],[34.63,-12.01],[34.6,-12.01]],[[34.72,-12.03],[34.7,-12.08],[34.73,-12.1],[34.75,-12.04],[34.72,-12.03]]]]},"properties":{"name":"Mozambique"},"id":"MZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[56.04,24.94],[56.37,24.98],[57.16,23.94],[58.61,23.63],[59.81,22.23],[58.52,20.41],[57.83,20.22],[57.8,18.97],[56.81,18.75],[56.35,17.93],[55.44,17.83],[55.04,17.02],[53.11,16.64],[52,19],[55,20],[55.67,22],[55.2,22.7],[56.04,24.94]]],[[[56.37,26.38],[56.27,25.64],[56.18,25.65],[56.08,26.07],[56.37,26.38]]]]},"properties":{"name":"Oman"},"id":"OM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[23.28,-17.66],[23.48,-17.63],[24.97,-17.56],[25.26,-17.8],[23.62,-18.49],[23.3,-18],[20.99,-18.32],[20.99,-22],[20,-22.01],[20,-24.77],[20,-28.42],[18.18,-28.91],[17.4,-28.71],[17.06,-28.03],[16.49,-28.58],[15.29,-27.32],[14.51,-22.55],[11.8,-18.08],[11.75,-17.25],[13.16,-16.95],[13.99,-17.42],[18.45,-17.39],[20.85,-18.02],[23.28,-17.66]]]]},"properties":{"name":"Namibia"},"id":"NA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[166.93,-0.55],[166.93,-0.49],[166.96,-0.51],[166.93,-0.55]]]]},"properties":{"name":"Nauru"},"id":"NR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[82.07,27.91],[80.06,28.84],[81.03,30.2],[82.1,30.34],[86.01,27.88],[88.14,27.87],[88.01,26.36],[85.86,26.57],[84.15,27.51],[83.29,27.34],[82.07,27.91]]]]},"properties":{"name":"Nepal"},"id":"NP"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[3.76,51.35],[3.37,51.37],[4.24,51.35],[3.76,51.35]]],[[[5.76,52.42],[5.43,52.26],[5.14,52.38],[5.64,52.6],[5.86,52.54],[5.76,52.42]]],[[[5.42,52.64],[5.05,52.39],[5.04,52.63],[5.42,52.64]]],[[[6.87,53.42],[7.21,53.24],[6.69,52.55],[7.07,52.39],[6.83,51.97],[5.96,51.81],[6.01,50.76],[5.04,51.49],[4.25,51.38],[3.44,51.54],[4.29,51.45],[3.69,51.71],[4.17,51.69],[3.87,51.81],[4.58,52.46],[5.42,52.25],[5.77,52.41],[5.88,52.51],[5.86,52.61],[5.6,52.66],[5.6,52.76],[5.72,52.84],[5.37,52.88],[5.42,52.96],[5.36,53.07],[5.1,52.95],[5.3,52.71],[5.03,52.63],[5.03,52.38],[4.58,52.47],[4.73,52.96],[6.87,53.42]]]]},"properties":{"name":"Netherlands"},"id":"NL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-68.2,12.22],[-68.25,12.02],[-68.42,12.26],[-68.2,12.22]]],[[[-68.97,12.2],[-69.16,12.37],[-68.75,12.04],[-68.97,12.2]]]]},"properties":{"name":"Netherlands Antilles"},"id":"AN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-69.88,12.41],[-70.06,12.54],[-70.06,12.63],[-69.88,12.41]]]]},"properties":{"name":"Aruba"},"id":"AW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[164.32,-20.33],[167.01,-22.32],[165.26,-21.56],[163.99,-20.09],[164.32,-20.33]]]]},"properties":{"name":"New Caledonia"},"id":"NC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[167.42,-16.11],[167.77,-16.54],[167.18,-15.9],[167.42,-16.11]]],[[[166.8,-15.16],[167.06,-14.95],[167.24,-15.52],[166.76,-15.64],[166.59,-14.62],[166.8,-15.16]]]]},"properties":{"name":"Vanuatu"},"id":"VU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[172.86,-40.51],[173.11,-41.31],[174.32,-41],[174.29,-41.75],[172.76,-43.24],[173.09,-43.86],[171.29,-44.34],[170.78,-45.88],[169.01,-46.68],[166.48,-46.01],[168.37,-44.04],[170.79,-42.9],[172.11,-40.89],[172.86,-40.51]]],[[[173.04,-34.44],[173.27,-35.02],[174.32,-35.23],[174.85,-36.85],[175.58,-37.24],[175.35,-36.48],[175.84,-36.75],[175.99,-37.64],[177.16,-38.01],[178.57,-37.71],[177.91,-39.26],[177.05,-39.2],[176.83,-40.18],[175.32,-41.61],[174.59,-41.28],[175.16,-40.1],[173.75,-39.29],[174.59,-38.82],[174.97,-37.75],[174.55,-37.07],[174.89,-37.06],[174.19,-36.5],[174.51,-36.23],[173.91,-35.87],[174.08,-36.41],[173.4,-35.57],[173.66,-35.31],[173.09,-35.21],[172.72,-34.5],[173.04,-34.44]]]]},"properties":{"name":"New Zealand"},"id":"NZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-83.24,14.98],[-83.13,14.99],[-83.83,11.87],[-83.65,10.92],[-85.09,11.01],[-85.69,11.08],[-87.69,12.91],[-87.3,12.99],[-84.91,14.81],[-83.24,14.98]]]]},"properties":{"name":"Nicaragua"},"id":"NI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[4.25,18.65],[4.25,19.15],[5.81,19.45],[11.99,23.52],[14.23,22.61],[15,23],[15.2,21.5],[16,20.35],[15.49,16.91],[13.47,14.46],[13.63,13.72],[12.46,13.07],[10.72,13.39],[9.63,12.8],[7.82,13.35],[6.93,13],[5.87,13.75],[4.14,13.48],[3.6,11.69],[2.84,12.4],[2.4,11.9],[2.14,12.69],[0.99,13.05],[1.29,13.35],[0.6,13.7],[0.24,14.92],[3.52,15.36],[4.2,16.39],[4.25,18.65]]]]},"properties":{"name":"Niger"},"id":"NE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[5.87,13.75],[6.93,13],[7.82,13.35],[9.63,12.8],[10.72,13.39],[12.46,13.07],[13.63,13.72],[14.07,13.08],[14.65,11.58],[13.81,11.06],[11.86,7.08],[11.34,6.44],[10.62,7.07],[9.8,6.8],[8.59,4.81],[6.96,4.73],[7.01,4.37],[6.77,4.77],[6.85,4.35],[6.1,4.27],[5.45,4.92],[5.64,5.54],[5.26,5.44],[5.5,5.62],[4.53,6.3],[2.72,6.37],[2.79,9.04],[3.86,10.58],[3.6,11.69],[4.14,13.48],[5.87,13.75]]]]},"properties":{"name":"Nigeria"},"id":"NG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-169.89,-19.15],[-169.93,-19.02],[-169.82,-18.97],[-169.89,-19.15]]]]},"properties":{"name":"Niue"},"id":"NU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[167.96,-29.08],[167.91,-29.01],[168,-29.03],[167.96,-29.08]]]]},"properties":{"name":"Norfolk Island"},"id":"NF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[13.97,68.24],[14.14,68.24],[13.45,68.07],[13.97,68.24]]],[[[15.03,68.35],[14.2,68.15],[15.17,68.45],[15.03,68.35]]],[[[15.38,68.85],[15.06,68.57],[14.37,68.68],[15.38,68.85]]],[[[15.99,68.75],[15.74,68.53],[16.57,68.65],[14.99,68.25],[15.64,68.95],[15.99,68.75]]],[[[17.64,69.52],[18.07,69.43],[17.88,69.24],[18,69.19],[16.78,69.06],[17.64,69.52]]],[[[18.89,69.69],[18,69.59],[18.69,69.88],[18.89,69.69]]],[[[23.6,70.58],[23.23,70.28],[22.85,70.41],[23.6,70.58]]],[[[23.45,70.78],[22.78,70.52],[21.95,70.65],[23.45,70.78]]],[[[5.34,61.59],[4.94,61.68],[6.76,61.87],[5.15,61.89],[5.15,62.21],[6.36,62.06],[5.92,62.22],[6.31,62.37],[6.54,62.1],[6.39,62.37],[6.7,62.45],[6.87,62.42],[7,62.25],[6.94,62.11],[7.04,62.09],[7.42,62.23],[6.98,62.31],[6.92,62.36],[6.97,62.37],[6.78,62.48],[6.26,62.45],[6.65,62.5],[6.25,62.57],[8.15,62.69],[7.04,62.97],[8.55,62.65],[7.88,63.01],[8.53,62.84],[8.16,63.12],[9.65,63.62],[10.26,63.26],[10.05,63.41],[10.91,63.45],[11.49,64.02],[11.31,64.12],[10.57,63.8],[11.08,63.84],[10.94,63.74],[10.05,63.5],[9.79,63.66],[10.1,63.76],[9.54,63.76],[12.94,65.31],[12.25,65.23],[12.67,65.92],[13.18,65.85],[12.67,66.07],[14.15,66.32],[13.03,66.19],[13.54,66.3],[12.97,66.52],[13.73,66.6],[13.23,66.71],[13.99,66.78],[13.55,66.93],[15.74,67.17],[14.36,67.23],[15.9,67.56],[14.76,67.81],[15.97,68.25],[16.22,67.89],[16.5,67.79],[16.21,68],[16.52,67.95],[16.36,68.03],[16.72,68.07],[16.1,68.28],[16.81,68.13],[16.32,68.37],[17.35,68.17],[17.55,68.52],[16.46,68.51],[17.68,68.65],[17.24,68.75],[17.79,68.76],[17.43,68.91],[18.15,69.15],[18,69.28],[18.26,69.49],[19.44,69.23],[18.94,69.61],[19.76,69.81],[19.68,69.43],[20.3,69.97],[19.95,69.26],[21.31,70.02],[22.1,69.74],[21.8,70.03],[22.1,70.11],[21.3,70.25],[23.31,69.94],[24.73,70.62],[24.25,70.78],[24.59,70.96],[25.91,70.89],[25.07,70.5],[25.23,70.09],[26.57,70.94],[26.5,70.36],[27.03,70.47],[27.65,71.11],[28.55,70.97],[27.65,70.61],[28.3,70.71],[27.85,70.48],[28.34,70.51],[28.04,70.06],[29.04,70.87],[31.08,70.29],[28.61,70.11],[29.67,69.97],[29.49,69.66],[30.85,69.79],[28.96,69.05],[29.18,69.64],[28.17,69.91],[26.45,69.93],[24.93,68.58],[22.4,68.71],[21.32,69.33],[20.58,69.06],[20.1,69.04],[20.35,68.79],[19.94,68.34],[18.09,68.51],[17.88,67.95],[16.73,67.9],[15.47,66.28],[14.5,66.13],[14.49,65.31],[13.66,64.58],[14.12,64.47],[13.99,64.02],[12.14,63.58],[12.12,61.73],[12.86,61.36],[12.21,61],[12.49,60.11],[11.82,59.85],[11.43,58.99],[10.8,59.19],[10.53,59.88],[10.23,59.04],[9.54,59.11],[8.21,58.12],[6.6,58.07],[5.46,58.74],[6.62,59.05],[5.87,59.07],[6.47,59.56],[5.18,59.51],[7.11,60.49],[5.75,59.99],[5.73,60.39],[5.14,60.35],[5.7,60.69],[4.93,60.8],[6.59,61.15],[7.11,60.86],[7.57,61.48],[5.4,61.07],[4.95,61.26],[5.63,61.36],[4.95,61.41],[5.8,61.45],[5.34,61.59]],[[5.34,61.59],[5.35,61.59],[5.28,61.59],[5.34,61.59]]]]},"properties":{"name":"Norway"},"id":"NO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[145.28,14.16],[145.12,14.12],[145.24,14.19],[145.28,14.16]]],[[[145.62,14.91],[145.57,15.01],[145.63,15.08],[145.62,14.91]]],[[[145.74,15.13],[145.68,15.11],[145.82,15.27],[145.74,15.13]]],[[[145.74,18.04],[145.78,18.17],[145.82,18.16],[145.74,18.04]]],[[[145.68,18.72],[145.66,18.81],[145.71,18.77],[145.68,18.72]]]]},"properties":{"name":"Northern Mariana Islands"},"id":"MP"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[163.01,5.26],[162.9,5.31],[163.02,5.38],[163.01,5.26]]],[[[158.3,6.79],[158.12,6.93],[158.32,6.93],[158.3,6.79]]],[[[138.21,9.52],[138.06,9.42],[138.13,9.57],[138.21,9.52]]]]},"properties":{"name":"Micronesia, Federated States of"},"id":"FM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[168.77,7.3],[168.79,7.29],[168.67,7.33],[168.77,7.3]]],[[[168.57,7.4],[168.55,7.42],[168.56,7.47],[168.57,7.4]]],[[[168.97,7.57],[168.94,7.62],[168.97,7.6],[168.97,7.57]]]]},"properties":{"name":"Marshall Islands"},"id":"MH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[134.56,7.37],[134.49,7.44],[134.63,7.73],[134.56,7.37]]]]},"properties":{"name":"Palau"},"id":"PW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[74.82,37.02],[75.86,36.66],[76.17,35.82],[77.82,35.5],[76.87,34.66],[73.94,34.65],[74.3,33.98],[74.02,33.19],[75.38,32.21],[74.61,31.88],[74.69,31.05],[71.9,27.96],[70.37,28.02],[69.58,27.17],[71.11,24.42],[68.78,24.33],[68.2,23.77],[67.49,23.89],[66.36,25.61],[64.65,25.16],[61.61,25.2],[61.86,26.23],[63.18,26.63],[63.34,27.12],[62.78,27.26],[62.78,28.27],[61.91,28.55],[60.87,29.86],[62.48,29.41],[66.26,29.85],[66.72,31.21],[69.33,31.94],[69.51,33.03],[70.33,33.33],[69.91,34.04],[71.08,34.06],[71.65,35.42],[71.24,36.13],[72.56,36.82],[74.57,37.03],[74.82,37.02]]]]},"properties":{"name":"Pakistan"},"id":"PK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-79.46,9.57],[-77.37,8.67],[-77.22,7.94],[-77.89,7.23],[-78.43,8.05],[-78.14,8.4],[-77.78,8.15],[-78.98,9.14],[-80.47,8.21],[-79.99,7.52],[-80.43,7.24],[-81.74,8.16],[-82.9,8.03],[-82.93,9.47],[-82.56,9.56],[-82.24,9],[-81.2,8.78],[-79.46,9.57]]]]},"properties":{"name":"Panama"},"id":"PA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[152.24,-4.21],[152.1,-5.46],[150.47,-6.28],[148.32,-5.68],[149.88,-5.54],[150.09,-5.01],[150.16,-5.55],[150.92,-5.49],[151.68,-4.91],[151.51,-4.2],[152.24,-4.21]]],[[[141.89,-2.97],[144.51,-3.82],[145.74,-4.8],[145.77,-5.49],[147.48,-5.97],[147.87,-6.66],[146.96,-6.75],[147.18,-7.46],[148.14,-8.07],[148.6,-9.08],[149.31,-9.02],[149.22,-9.47],[150.01,-9.63],[149.91,-10.05],[150.88,-10.23],[150.21,-10.7],[147.95,-10.15],[146.09,-8.09],[144.52,-7.5],[144.21,-7.8],[143.66,-7.47],[143.96,-7.98],[143.36,-7.9],[143.61,-8.24],[142.14,-8.23],[143.11,-8.47],[143.33,-9.03],[141.01,-9.13],[141,-2.61],[141.89,-2.97]]]]},"properties":{"name":"Papua New Guinea"},"id":"PG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-54.33,-24.68],[-54.6,-25.57],[-54.7,-26.44],[-55.74,-27.44],[-58.6,-27.32],[-57.58,-25.55],[-57.76,-25.18],[-61.01,-23.81],[-62.64,-22.24],[-61.74,-19.65],[-59.1,-19.35],[-58.16,-20.17],[-57.99,-22.09],[-55.85,-22.29],[-55.41,-23.96],[-54.41,-23.92],[-54.33,-24.68]]]]},"properties":{"name":"Paraguay"},"id":"PY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-78.71,-4.58],[-78.34,-3.42],[-75.56,-1.53],[-75.22,-0.97],[-75.63,-0.11],[-75.29,-0.12],[-73.56,-1.37],[-72.88,-2.51],[-71.7,-2.15],[-70.29,-2.51],[-70.72,-3.78],[-69.96,-4.24],[-70.77,-4.15],[-72.85,-5.12],[-73.12,-6.45],[-74.01,-7.54],[-72.96,-8.98],[-73.21,-9.41],[-72.37,-9.49],[-72.14,-10],[-70.51,-9.43],[-70.63,-11.01],[-69.57,-10.95],[-68.67,-12.5],[-69.42,-15.62],[-68.82,-16.34],[-69.5,-17.51],[-70.41,-18.35],[-75.93,-14.66],[-78.99,-8.23],[-79.98,-6.76],[-81.17,-6.09],[-80.87,-5.65],[-81.29,-4.31],[-80.34,-3.38],[-80.47,-4.44],[-79.65,-4.43],[-79.05,-5.01],[-78.71,-4.58]]]]},"properties":{"name":"Peru"},"id":"PE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[126.05,9.23],[126.59,7.28],[126.19,6.27],[125.65,7.24],[125.41,5.56],[125.26,6.09],[124.19,6.21],[124.27,7.37],[123.68,7.81],[122.83,7.28],[122.62,7.77],[121.92,6.99],[122.22,7.96],[123.38,8.73],[123.82,8.48],[123.67,7.95],[124.73,8.49],[124.8,9],[125.51,9.01],[125.44,9.81],[126.05,9.23]]],[[[124.48,10.05],[124.37,9.63],[123.79,9.73],[124.48,10.05]]],[[[123.56,10.79],[123.01,9.03],[122.45,9.97],[122.95,10.89],[123.56,10.79]]],[[[124.02,11.12],[124.03,10.38],[123.31,9.41],[124.02,11.12]]],[[[119.51,11.34],[119.71,10.5],[117.19,8.33],[119.31,10.58],[119.22,10.96],[119.46,10.72],[119.51,11.34]]],[[[124.64,11.29],[125.03,11.2],[125.01,10.03],[124.29,11.54],[124.64,11.29]]],[[[122.23,11.8],[123.15,11.6],[123.13,11.17],[121.94,10.42],[121.85,11.76],[122.23,11.8]]],[[[124.46,12.52],[125.3,12.46],[125.76,11.01],[124.84,11.47],[124.46,12.52]]],[[[123.67,12.35],[124.08,11.72],[123.53,12.21],[123.16,11.91],[123.24,12.61],[123.67,12.35]]],[[[120.72,13.48],[121.5,13.15],[121.22,12.23],[120.3,13.44],[120.72,13.48]]],[[[121.26,18.57],[122.24,18.51],[122.53,17.1],[121.38,15.33],[121.73,14.17],[122.23,13.9],[122.71,14.34],[123.1,13.67],[123.34,14.09],[123.92,13.79],[123.53,13.58],[124.2,13.06],[124.08,12.54],[122.56,13.94],[122.61,13.16],[121.75,13.96],[120.66,13.77],[120.96,14.64],[120.09,14.79],[119.79,16.32],[120.42,16.16],[120.57,18.49],[121.26,18.57]]]]},"properties":{"name":"Philippines"},"id":"PH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-128.29,-24.41],[-128.34,-24.33],[-128.3,-24.33],[-128.29,-24.41]]]]},"properties":{"name":"Pitcairn Islands"},"id":"PN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[18.85,49.52],[17.72,50.32],[16.64,50.11],[16.34,50.66],[14.83,50.87],[14.28,53.7],[17.9,54.82],[19.8,54.44],[22.79,54.36],[23.5,53.95],[23.94,52.73],[23.17,52.28],[23.64,52.08],[23.6,51.53],[24.11,50.57],[22.56,49.08],[18.85,49.52]]]]},"properties":{"name":"Poland"},"id":"PL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-8.2,41.87],[-6.59,41.95],[-6.19,41.58],[-6.93,41.02],[-7.02,39.67],[-7.53,39.67],[-6.95,39.03],[-7.43,37.25],[-8.99,37.02],[-8.67,38.41],[-9.18,38.42],[-8.98,38.95],[-9.48,38.71],[-8.66,40.69],[-8.75,41.95],[-8.2,41.87]]]]},"properties":{"name":"Portugal"},"id":"PT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-14.52,12.68],[-13.71,12.68],[-13.71,11.72],[-14.69,11.51],[-15.02,10.96],[-15.51,11.34],[-15.03,11.59],[-15.56,11.72],[-15,11.97],[-15.96,11.73],[-15.7,12],[-16.25,11.93],[-16.11,12.33],[-16.72,12.32],[-14.52,12.68]]]]},"properties":{"name":"Guinea-Bissau"},"id":"GW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[124.45,-9.18],[124.34,-9.46],[124.05,-9.34],[124.45,-9.18]]],[[[127.25,-8.48],[125.13,-9.44],[125.16,-9.07],[124.95,-8.95],[127.25,-8.48]]]]},"properties":{"name":"Timor-Leste"},"id":"TL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-67,18.5],[-65.6,18.23],[-67.19,17.93],[-67,18.5]]]]},"properties":{"name":"Puerto Rico"},"id":"PR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[51.52,25.38],[51.22,24.62],[50.83,24.75],[51.04,26.05],[51.57,25.91],[51.52,25.38]]]]},"properties":{"name":"Qatar"},"id":"QA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[55.71,-21],[55.67,-21.37],[55.22,-21.03],[55.71,-21]]]]},"properties":{"name":"Reunion"},"id":"RE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[20.73,46.18],[22.89,47.95],[24.92,47.71],[26.63,48.26],[28.12,46.85],[28.21,45.45],[29.66,45.21],[29.55,44.82],[28.87,44.94],[28.58,43.75],[27.04,44.15],[24.18,43.68],[22.68,44.22],[22.48,44.71],[21.4,44.78],[21.51,45.15],[20.26,46.11],[20.73,46.18]]]]},"properties":{"name":"Romania"},"id":"RO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[143.66,49.31],[143.02,49.14],[142.53,48],[143.09,46.8],[143.49,46.81],[143.47,46.09],[142.71,46.74],[142.08,45.89],[141.85,48.75],[142.27,51.12],[141.64,52.32],[141.77,53.37],[142.8,53.7],[142.39,54.24],[142.7,54.42],[143.29,53.13],[143.22,51.52],[144.75,48.64],[143.66,49.31]],[[143.66,49.31],[143.25,49.38],[143.32,49.31],[143.66,49.31]]],[[[21.43,55.25],[22.84,54.9],[22.79,54.36],[19.8,54.44],[20.4,54.68],[19.87,54.64],[19.97,54.96],[20.94,55.29],[20.53,54.97],[21.09,54.89],[21.26,55.25],[21.43,55.25]]],[[[-179.63,68.91],[-175.46,67.71],[-174.83,67.38],[-175,66.67],[-174.46,66.3],[-173.76,66.45],[-174.65,67.06],[-173.67,67.13],[-171.73,66.96],[-169.69,66.07],[-170.64,65.61],[-171.54,65.83],[-171.12,65.48],[-172.8,65.68],[-172.13,65.09],[-173.2,64.79],[-172.36,64.46],[-173.19,64.25],[-173.41,64.62],[-175.45,64.78],[-176.08,65.47],[-178.56,65.52],[-178.91,65.99],[-178.52,66.4],[-179.7,66.18],[-179.32,65.54],[-180,65.07],[-180,68.98],[-179.63,68.91]]],[[[55.33,73.33],[56.59,73.14],[55.62,72.96],[56.26,72.96],[55.43,72.78],[55.95,72.67],[55.12,72.45],[55.58,72.2],[55.22,71.93],[57.64,70.73],[53.46,70.81],[54.24,71.13],[51.42,71.74],[53.22,72.65],[52.38,72.72],[53.38,72.88],[53.15,73.16],[55.33,73.33]]],[[[139.19,76.07],[140.48,75.64],[141.62,76.01],[141.36,76.18],[145.39,75.52],[143.95,75.03],[142.9,75.13],[142.5,75.36],[142.51,75.45],[143.04,75.67],[142.45,75.71],[142.16,75.38],[142.61,75.1],[143.71,74.94],[139.1,74.65],[136.86,75.35],[137.4,75.35],[136.96,75.6],[137.74,75.75],[137.45,75.95],[139.19,76.07]]],[[[68.27,76.96],[68.86,76.54],[61.29,75.33],[59.15,74.44],[58.18,74.57],[58.74,74.27],[57.26,74.08],[57.72,73.71],[56.56,73.88],[57.61,73.66],[56.72,73.67],[57.25,73.49],[56.76,73.25],[55.91,73.44],[54.22,73.32],[55.18,73.71],[53.63,73.76],[55.87,74.1],[55.07,74.26],[56.98,74.69],[55.83,74.8],[56.68,74.95],[55.8,75.15],[58,75.67],[68.27,76.96]]],[[[104.27,77.68],[106.29,77.36],[104.12,77.09],[107.5,76.92],[106.4,76.51],[111.1,76.76],[113.89,75.85],[113.51,75.53],[112.34,75.85],[113.72,75.41],[105.21,72.76],[110.91,73.7],[109.53,73.77],[110.2,74.02],[112.89,73.96],[113.5,73.33],[113.49,72.96],[113.1,72.85],[113.18,72.72],[113.53,72.63],[114.04,72.6],[113.36,72.69],[113.23,72.74],[113.15,72.83],[113.53,72.96],[113.55,73.24],[114.03,73.34],[113.48,73.5],[118.63,73.57],[118.99,73.49],[118.39,73.24],[119.82,72.94],[126.37,72.35],[127.22,71.39],[127.33,71.9],[126.72,72.39],[127.66,72.35],[131.13,70.73],[132.73,71.94],[133.68,71.43],[135.86,71.64],[137.85,71.11],[138.07,71.57],[139.93,71.48],[139.34,71.95],[140.2,72.2],[139.09,72.23],[141.02,72.59],[140.75,72.89],[146.85,72.35],[144.39,72.17],[146.93,72.31],[144.96,71.96],[145.32,71.66],[147.14,72.32],[149.19,72.22],[150.08,71.88],[148.82,71.67],[152.54,70.84],[159.05,70.87],[160.04,70.41],[159.73,69.83],[161,69.59],[161.41,68.98],[160.85,68.52],[161.58,68.91],[161.45,69.39],[164.01,69.77],[167.79,69.78],[168.28,69.24],[170.61,68.76],[171.03,69.04],[170.12,69.61],[170.47,70.13],[176.11,69.89],[180,68.98],[180,65.07],[178.52,64.59],[176.9,65.08],[176.3,65.05],[177.3,64.83],[174.44,64.69],[177.49,64.76],[179.56,62.62],[179.06,62.28],[176.98,62.87],[177.27,62.57],[172.71,61.43],[170.25,59.91],[169.21,60.62],[166.14,59.82],[166.35,60.49],[164.83,59.78],[163.64,60.05],[163.19,59.05],[161.94,58.07],[162.35,57.68],[163.21,57.84],[162.74,57.36],[163.35,56.2],[162.39,56.4],[161.71,55.5],[162.11,54.76],[160.01,54.14],[160.06,53.09],[158.43,53.02],[158.28,51.94],[156.67,50.88],[155.54,55.3],[155.95,56.67],[156.98,57.41],[156.75,57.73],[158.23,58.02],[161.91,60.42],[163.66,60.87],[164.13,62.28],[165.64,62.45],[163.26,62.54],[162.95,61.81],[163.29,61.66],[160.14,60.58],[160.39,61.03],[159.78,60.94],[159.83,61.26],[160.35,61.95],[157.49,61.8],[154.23,59.88],[154.11,59.46],[155.19,59.36],[154.74,59.13],[151.31,58.84],[151.07,59.11],[152.29,59.23],[149.6,59.77],[148.9,59.24],[142.16,59.07],[135.15,54.86],[136.82,54.65],[136.76,53.77],[137.74,54.32],[137.31,53.53],[138.55,53.99],[138.44,53.51],[138.64,54.3],[139.75,54.31],[141.42,53.29],[140.71,53.11],[141.51,52.21],[140.46,50.71],[140.7,50.09],[140.18,48.45],[135.13,43.5],[133.15,42.68],[131.81,43.33],[130.7,42.29],[130.64,42.41],[130.6,42.42],[130.41,42.72],[131.31,43.39],[130.95,44.84],[131.86,45.35],[133.12,45.13],[134.74,48.27],[130.99,47.69],[130.67,48.86],[127.53,49.79],[126.1,52.76],[123.38,53.53],[120.86,53.28],[120.03,52.77],[120.78,52.11],[119.21,50.02],[117.87,49.52],[116.71,49.83],[114.31,50.28],[110.79,49.15],[108.57,49.33],[106.66,50.34],[102.92,50.32],[102.33,50.57],[102.22,51.33],[98.93,52.14],[97.83,51],[98.29,50.29],[97.34,49.73],[92.32,50.81],[87.84,49.17],[87.35,49.09],[86.77,49.79],[85.26,49.59],[83.46,51],[81.47,50.74],[80.69,51.31],[80.08,50.76],[77.91,53.27],[76.52,53.99],[76.81,54.45],[73.44,53.44],[73.76,54.07],[71.19,54.1],[70.84,55.3],[69.19,55.34],[65.22,54.32],[61.01,53.95],[60.91,53.62],[61.58,53.51],[61.18,53.31],[62.12,53],[61.1,52.98],[60.69,52.68],[61.06,52.34],[60,51.96],[61.69,51.27],[61.38,50.78],[59.54,50.48],[58.34,51.16],[56.51,51.08],[55.69,50.53],[54.65,51.04],[54.52,50.53],[53.43,51.49],[50.77,51.77],[48.7,50.59],[48.8,49.94],[47.52,50.44],[46.5,48.42],[47.38,47.69],[48.2,47.7],[49.03,46.78],[48.56,46.56],[49.22,46.35],[48.71,45.83],[47.38,45.74],[46.68,44.52],[47.41,43.5],[47.7,43.87],[47.46,43.02],[48.58,41.84],[47.77,41.2],[46.57,41.87],[46.45,41.9],[44.93,42.76],[43.91,42.58],[42.85,43.18],[40,43.38],[36.58,45.18],[37.74,45.3],[37.94,46.03],[38.57,46.09],[37.73,46.67],[39.3,47.08],[38.24,47.11],[38.85,47.86],[39.8,47.86],[39.66,48.62],[40.08,48.87],[39.7,49.01],[40.14,49.6],[38.02,49.9],[37.46,50.44],[35.61,50.37],[35.37,51.04],[34.38,51.26],[34.1,51.65],[34.42,51.81],[33.42,52.36],[31.78,52.11],[31.27,53.02],[32.74,53.46],[30.78,54.79],[30.93,55.6],[28.17,56.15],[27.86,57.3],[27.37,57.54],[27.82,57.87],[27.43,58.81],[28.02,59.48],[30.25,59.98],[28.6,60.38],[28.69,60.74],[27.81,60.55],[31.59,62.91],[29.99,63.74],[30.58,64.22],[29.64,64.93],[30.13,65.72],[29.07,66.9],[30.03,67.69],[28.69,68.2],[28.82,68.84],[28.43,68.9],[28.96,69.05],[30.85,69.79],[33.09,69.75],[32.03,69.64],[33.52,69.42],[33.02,68.95],[33.72,69.33],[35.97,69.17],[40.99,67.72],[41.22,66.84],[38.61,66.05],[31.85,67.15],[34.85,65.9],[34.38,65.38],[34.79,64.55],[37.41,63.8],[37.98,64.32],[36.44,64.94],[37.03,65.21],[38.41,64.86],[38.05,64.64],[40.51,64.54],[39.75,65.55],[42.17,66.52],[44.17,65.87],[44.5,66.91],[43.75,67.32],[44.25,68.27],[43.31,68.68],[46.52,68.14],[46.71,67.81],[44.91,67.37],[46.39,66.74],[47.7,66.99],[47.99,67.65],[49.1,67.63],[48.59,67.93],[52.27,68.31],[52.73,68.47],[52.49,68.59],[52.65,68.65],[52.29,68.61],[53.78,68.97],[54.56,68.99],[53.59,68.9],[54.02,68.86],[53.95,68.4],[53.21,68.26],[54.79,68.16],[58.9,69],[59.43,68.75],[59.07,68.42],[59.84,68.37],[60.91,68.9],[60.14,69.57],[60.87,69.86],[64.15,69.54],[68.44,68.22],[69.22,68.96],[66.8,69.57],[67.34,70.75],[66.62,71.05],[68.47,71.82],[69.33,72.95],[71.56,72.91],[72.83,72.71],[72.88,72.28],[71.8,71.47],[72.84,70.87],[72.42,70.27],[72.55,68.98],[73.65,68.46],[71.41,66.97],[71.56,66.65],[68.97,66.8],[72,66.22],[74.74,67.69],[74.33,68.38],[74.64,68.77],[76.59,68.97],[77.32,68.52],[77.09,67.78],[79.04,67.57],[77.46,67.76],[78.17,68.26],[77.63,68.91],[73.75,69.17],[73.52,69.76],[74.31,70.67],[73.02,71.42],[74.96,72.11],[74.83,72.83],[75.72,72.56],[75.24,71.38],[76.92,71.07],[79.11,71],[76.1,71.93],[78.1,71.88],[77.37,72.1],[78.54,72.4],[83.26,71.72],[82.26,71.26],[82.08,70.57],[82.35,70.2],[82.16,70.58],[83.12,70.89],[82.64,70.17],[83.11,70.07],[83.75,70.46],[83.15,71.24],[83.63,71.62],[80.72,72.53],[80.82,72.97],[80.23,73.17],[80.51,73.57],[87.09,73.86],[85.78,73.46],[86.78,72.99],[85.85,73.48],[87.66,73.89],[85.95,74.28],[87.13,74.37],[85.79,74.63],[86.03,74.81],[86.91,74.61],[87.79,75.02],[86.99,75.15],[94.16,75.94],[92.87,75.95],[93.16,76.1],[99.28,76.21],[99.77,76.03],[99.09,75.55],[100.19,75.17],[99.17,75.57],[99.88,76.09],[98.81,76.49],[102.23,76.38],[100.85,76.88],[104.27,77.68]]],[[[102.97,79.33],[102.39,78.83],[103.95,79.13],[105.41,78.56],[99.34,78.02],[101.62,78.98],[100.99,79.06],[101.55,79.35],[102.97,79.33]]],[[[97.61,80.17],[98.03,80.07],[97.19,79.7],[100.02,79.82],[99.04,79.29],[99.94,78.95],[97.3,78.85],[92.85,79.55],[97.61,80.17]]]]},"properties":{"name":"Russia"},"id":"RU"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[29.95,-2.31],[29.85,-2.76],[29.02,-2.74],[29.6,-1.39],[30.48,-1.06],[30.89,-2.08],[30.57,-2.4],[29.95,-2.31]]]]},"properties":{"name":"Rwanda"},"id":"RW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-63.03,18.02],[-63.14,18.06],[-63.01,18.07],[-63.03,18.02]]]]},"properties":{"name":"Saint Barthelemy"},"id":"BL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-5.66,-15.99],[-5.79,-15.99],[-5.7,-15.9],[-5.66,-15.99]]]]},"properties":{"name":"Saint Helena"},"id":"SH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-62.55,17.09],[-62.62,17.11],[-62.6,17.2],[-62.55,17.09]]],[[[-62.7,17.34],[-62.63,17.22],[-62.86,17.37],[-62.7,17.34]]]]},"properties":{"name":"Saint Kitts and Nevis"},"id":"KN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-63.17,18.16],[-62.97,18.27],[-62.99,18.23],[-63.17,18.16]]]]},"properties":{"name":"Anguilla"},"id":"AI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-60.95,13.71],[-61.08,13.88],[-60.93,14.11],[-60.95,13.71]]]]},"properties":{"name":"Saint Lucia"},"id":"LC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-63.01,18.08],[-63.01,18.07],[-63.14,18.06],[-63.01,18.08]]]]},"properties":{"name":"Saint Martin"},"id":"MF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-56.15,46.76],[-56.24,46.76],[-56.17,46.81],[-56.15,46.76]]],[[[-56.27,46.99],[-56.37,46.78],[-56.39,47.12],[-56.27,46.99]]]]},"properties":{"name":"Saint Pierre and Miquelon"},"id":"PM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-61.17,13.13],[-61.28,13.21],[-61.18,13.38],[-61.17,13.13]]]]},"properties":{"name":"Saint Vincent and the Grenadines"},"id":"VC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[12.42,43.96],[12.51,43.99],[12.46,43.9],[12.42,43.96]]]]},"properties":{"name":"San Marino"},"id":"SM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[6.52,0.02],[6.47,0.26],[6.69,0.4],[6.52,0.02]]],[[[7.42,1.56],[7.33,1.61],[7.41,1.7],[7.42,1.56]]]]},"properties":{"name":"Sao Tome and Principe"},"id":"ST"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[44.72,29.2],[46.55,29.1],[48.42,28.55],[48.84,27.62],[50.16,26.66],[49.99,26.02],[50.83,24.75],[51.22,24.62],[51.58,24.26],[52.58,22.94],[55.2,22.7],[55.67,22],[55,20],[52,19],[48.77,18.27],[46.33,15.62],[46.33,16.67],[44.47,17.41],[43.31,17.46],[42.79,16.38],[40.76,19.76],[39.18,21.1],[38.45,23.78],[37.44,24.37],[35.16,28.06],[34.57,28.09],[34.96,29.36],[36.07,29.19],[37.5,30],[38,30.5],[37.01,31.51],[39.2,32.15],[42.08,31.11],[44.72,29.2]]]]},"properties":{"name":"Saudi Arabia"},"id":"SA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-17.15,14.61],[-17.54,14.76],[-16.53,16.06],[-16.28,16.52],[-14.35,16.64],[-12.24,14.76],[-11.37,12.41],[-13.71,12.68],[-14.52,12.68],[-16.72,12.32],[-15.39,12.83],[-16.76,12.56],[-16.75,13.06],[-15.81,13.16],[-15.8,13.35],[-15.29,13.37],[-15.11,13.6],[-13.8,13.41],[-15.07,13.83],[-16.57,13.59],[-16.36,14.17],[-16.78,14.01],[-17.15,14.61]]]]},"properties":{"name":"Senegal"},"id":"SN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[20.07,42.56],[20.35,42.89],[19.23,43.51],[19.62,44.05],[19.04,44.86],[19.42,45.23],[18.82,45.91],[20.26,46.11],[21.51,45.15],[21.4,44.78],[22.48,44.71],[22.68,44.22],[22.37,43.83],[23,43.19],[22.37,42.32],[20.59,41.88],[20.07,42.56]]]]},"properties":{"name":"Serbia"},"id":"RS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[55.54,-4.76],[55.38,-4.63],[55.46,-4.55],[55.54,-4.76]]]]},"properties":{"name":"Seychelles"},"id":"SC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-11.21,10],[-10.57,9.06],[-10.7,8.3],[-10.27,8.49],[-11.49,6.93],[-12.96,7.9],[-13.3,9.03],[-12.46,9.89],[-11.21,10]]]]},"properties":{"name":"Sierra Leone"},"id":"SL"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[103.99,1.38],[103.64,1.32],[103.71,1.43],[103.99,1.38]]]]},"properties":{"name":"Singapore"},"id":"SG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[17.25,48.02],[17.17,48.01],[16.95,48.62],[18.85,49.52],[22.56,49.08],[22.15,48.41],[20.66,48.56],[18.66,47.76],[17.25,48.02]]]]},"properties":{"name":"Slovakia"},"id":"SK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[105.58,23.06],[106.71,22.86],[106.69,22.03],[107.99,21.54],[106.64,21.02],[105.61,18.98],[108.83,15.42],[109.47,12.89],[109.27,11.89],[108,10.7],[107.27,10.38],[106.74,10.67],[106.42,10.31],[106.78,10.08],[106.29,10.25],[106.62,9.81],[106.12,10.24],[106.54,9.58],[105.82,10],[106.19,9.37],[105.02,8.59],[105.11,9.95],[104.45,10.42],[105.1,10.96],[106.2,10.77],[105.85,11.66],[107.55,12.35],[107.49,14.45],[107.55,14.71],[107.7,15.27],[107.18,15.78],[107.46,16.08],[106.69,16.46],[105.19,18.64],[103.88,19.29],[104.98,20],[104.38,20.44],[104.64,20.66],[103.17,20.85],[102.98,21.74],[102.14,22.4],[102.48,22.77],[103.96,22.5],[105.35,23.33],[105.58,23.06]]]]},"properties":{"name":"Vietnam"},"id":"VN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[13.72,46.53],[16.11,46.87],[16.61,46.48],[16.57,46.48],[15.65,46.22],[15.17,45.43],[13.59,45.48],[13.72,45.6],[13.38,46.3],[13.72,46.53]]]]},"properties":{"name":"Slovenia"},"id":"SI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[42.94,11],[43.25,11.47],[44.28,10.45],[44.9,10.42],[50.77,11.98],[51.28,11.84],[51.01,10.44],[51.41,10.45],[50.9,10.32],[50.84,9.43],[47.95,4.46],[43.49,0.65],[41.56,-1.67],[41,-0.87],[40.99,2.83],[41.91,3.98],[43.69,4.89],[44.95,4.9],[47.99,8],[44.01,9.01],[42.85,10.22],[42.94,11]]]]},"properties":{"name":"Somalia"},"id":"SO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[29.89,-22.19],[31.3,-22.41],[32.02,-24.46],[31.97,-25.96],[31.33,-25.75],[30.9,-26.31],[31.16,-27.2],[31.99,-27.32],[32.13,-26.84],[32.89,-26.85],[32.39,-28.54],[27.9,-33.04],[25.7,-34.03],[22.54,-34.01],[20,-34.82],[18.79,-34.09],[18.4,-34.3],[17.85,-32.83],[18.29,-32.62],[18.28,-31.89],[16.49,-28.58],[17.06,-28.03],[17.4,-28.71],[18.18,-28.91],[20,-28.42],[20,-24.77],[20.81,-25.88],[20.64,-26.83],[21.67,-26.86],[23.01,-25.3],[25.51,-25.68],[26.96,-23.75],[29.37,-22.19],[29.89,-22.19]],[[28.57,-28.61],[27.01,-29.63],[27.56,-30.4],[28.08,-30.65],[29.17,-29.91],[29.43,-29.28],[28.57,-28.61]]]]},"properties":{"name":"South Africa"},"id":"ZA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[32.99,-17.27],[32.7,-18.94],[33.02,-19.94],[32.49,-21.34],[31.3,-22.41],[29.89,-22.19],[29.37,-22.19],[28.02,-21.57],[27.71,-20.51],[26.17,-19.53],[25.26,-17.8],[27.04,-17.96],[28.93,-15.97],[30.42,-15.63],[30.42,-16.01],[32.98,-16.71],[32.99,-17.27]]]]},"properties":{"name":"Zimbabwe"},"id":"ZW"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-16.34,28.37],[-16.67,27.98],[-16.91,28.34],[-16.34,28.37]]],[[[3.25,39.73],[3.06,39.26],[2.36,39.56],[3.25,39.73]]],[[[-7.86,43.76],[-1.78,43.36],[1.45,42.6],[1.72,42.51],[3.18,42.44],[3.18,41.87],[0.96,41.03],[0.05,40.04],[-0.34,39.44],[0.21,38.73],[-0.72,37.61],[-2.13,36.73],[-4.4,36.72],[-5.33,36.16],[-5.36,36.16],[-6.04,36.18],[-6.36,36.86],[-7.43,37.25],[-6.95,39.03],[-7.53,39.67],[-7.02,39.67],[-6.93,41.02],[-6.19,41.58],[-6.59,41.95],[-8.2,41.87],[-8.75,41.95],[-9.21,43.15],[-7.86,43.76]]]]},"properties":{"name":"Spain"},"id":"ES"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-15.74,21.34],[-16.95,21.34],[-17.05,20.76],[-16.92,21.94],[-16.49,22.33],[-16.36,22.57],[-16.28,22.9],[-16.16,22.99],[-16.18,23.08],[-16.08,23.32],[-15.77,23.78],[-15.78,23.91],[-16.01,23.67],[-15.84,23.9],[-15.58,24.06],[-15.18,24.49],[-15.03,24.54],[-14.9,24.69],[-14.48,26.17],[-13.57,26.73],[-13.17,27.67],[-8.67,27.67],[-8.67,27.29],[-8.67,26],[-12,26],[-12,23.45],[-13.11,22.89],[-13,21.34],[-15.74,21.34]]]]},"properties":{"name":"Western Sahara"},"id":"EH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[31.45,22],[36.89,22],[37.43,18.86],[38.6,17.99],[37,17.07],[36.54,14.26],[36.14,12.71],[35.1,11.83],[34.86,10.73],[34.29,10.55],[34.12,8.58],[33.25,8.46],[32.99,7.92],[34.7,6.68],[35.94,4.62],[34.39,4.61],[34,4.22],[33.52,3.75],[30.86,3.49],[29.64,4.64],[28.36,4.29],[27.46,5.02],[25.25,7.85],[23.52,8.71],[23.67,9.87],[22.87,10.92],[22.47,12.62],[21.83,12.8],[22.94,15.56],[24,15.7],[24,19.5],[24,20],[25,20],[25,22],[31.45,22]]]]},"properties":{"name":"Sudan"},"id":"SD"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-55.13,5.82],[-54.03,5.82],[-54.17,5.35],[-54.48,4.75],[-54,3.45],[-54.6,2.33],[-55.97,2.53],[-55.9,1.89],[-56.47,1.94],[-58.05,4.01],[-57.25,5.49],[-56.97,6],[-55.13,5.82]]]]},"properties":{"name":"Suriname"},"id":"SR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[23.34,78.2],[23.06,78.02],[24.91,77.75],[22.64,77.25],[22.78,77.55],[20.86,77.46],[21.64,77.91],[20.9,78.11],[23.34,78.2]]],[[[21.5,78.57],[22.27,78.26],[20.12,78.47],[21.5,78.57]]],[[[16.82,79.87],[18.1,79.72],[17.64,79.37],[18.36,79.63],[18.92,79.16],[21.55,78.77],[18.97,78.46],[19.09,78.1],[16.61,76.57],[15.5,76.88],[16.52,77],[13.91,77.53],[16.22,77.43],[14.74,77.66],[17.01,77.93],[13.94,77.72],[13.59,78.05],[17.3,78.42],[16.33,78.45],[16.83,78.67],[15.46,78.45],[15.38,78.84],[13.01,78.2],[12.36,78.48],[13.2,78.54],[11.33,78.96],[12.51,78.91],[11.76,79.08],[12.11,79.3],[11.24,79.09],[10.68,79.54],[13.82,79.88],[12.45,79.57],[14.06,79.26],[13.89,79.54],[14.58,79.8],[16.45,78.9],[15.64,79.83],[16.82,79.87]]],[[[20.04,80.46],[22.23,79.98],[22.89,80.49],[23.36,80.43],[23.1,80.12],[24.84,80.35],[27.24,79.9],[23.51,79.18],[19.64,79.6],[22.31,79.8],[18.77,79.72],[17.78,80.13],[20.04,80.46]]]]},"properties":{"name":"Svalbard"},"id":"SJ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[30.9,-26.31],[31.33,-25.75],[31.97,-25.96],[32.13,-26.84],[31.99,-27.32],[31.16,-27.2],[30.9,-26.31]]]]},"properties":{"name":"Swaziland"},"id":"SZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[21.81,68.57],[23.67,67.94],[23.43,67.47],[24.01,66.8],[23.66,66.31],[24.17,65.81],[21.77,65.72],[22.2,65.55],[21.26,65.34],[21.62,65.14],[21.04,64.82],[21.58,64.44],[20.78,63.87],[18.21,62.78],[17.7,62.99],[18.05,62.6],[17.33,62.49],[17.65,62.23],[17.15,60.95],[19.08,59.76],[17.94,59.34],[17.59,59.81],[17.73,59.44],[16.02,59.49],[17.38,59.25],[18.65,59.32],[16.19,58.63],[16.94,58.48],[16.41,58.47],[16.82,58.2],[16.42,57.89],[16.69,57.47],[15.87,56.09],[14.7,56.16],[14.19,55.39],[12.98,55.4],[12.45,56.3],[12.89,56.64],[11.7,57.7],[11.8,58.32],[11.2,58.4],[11.11,59],[11.43,58.99],[11.82,59.85],[12.49,60.11],[12.21,61],[12.86,61.36],[12.12,61.73],[12.14,63.58],[13.99,64.02],[14.12,64.47],[13.66,64.58],[14.49,65.31],[14.5,66.13],[15.47,66.28],[16.73,67.9],[17.88,67.95],[18.09,68.51],[19.94,68.34],[20.35,68.79],[20.1,69.04],[20.58,69.06],[21.81,68.57]]]]},"properties":{"name":"Sweden"},"id":"SE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[7.7,47.54],[9.57,47.54],[9.53,47.27],[9.47,47.06],[9.6,47.06],[10.47,46.87],[10.13,46.23],[9.28,46.5],[9.04,45.84],[8.44,46.46],[7.86,45.92],[7.04,45.93],[6.79,46.43],[5.97,46.21],[6.99,47.5],[7.59,47.58],[7.7,47.54]]],[[[8.71,47.7],[8.68,47.69],[8.67,47.71],[8.71,47.7]]]]},"properties":{"name":"Switzerland"},"id":"CH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[42.36,37.11],[41.29,36.36],[41,34.42],[38.79,33.38],[36.84,32.31],[35.65,32.69],[35.62,33.25],[36.62,34.2],[35.97,34.65],[35.92,35.93],[36.69,36.24],[36.66,36.83],[42.36,37.11]]]]},"properties":{"name":"Syria"},"id":"SY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[74.92,37.24],[73.31,37.46],[71.68,36.68],[71.59,37.9],[70.97,38.47],[69.32,37.12],[67.78,37.19],[68.38,38.2],[67.44,39.48],[68.54,39.55],[69.01,40.09],[68.6,40.18],[70.42,41.05],[70.8,40.73],[70.38,40.38],[70.98,40.24],[69.54,40.13],[69.31,39.54],[73.66,39.45],[73.82,38.61],[74.86,38.47],[74.92,37.24]]]]},"properties":{"name":"Tajikistan"},"id":"TJ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[100.08,20.35],[100.09,20.35],[100.58,20.16],[100.5,19.53],[101.28,19.56],[100.92,17.57],[102.09,18.21],[102.68,17.82],[103.4,18.43],[104.72,17.5],[104.75,16.53],[105.64,15.66],[105.21,14.35],[103.18,14.33],[102.38,13.57],[102.92,11.64],[102.06,12.57],[100.85,12.68],[100.98,13.46],[100.07,13.42],[100.02,12.19],[99.15,10.37],[99.24,9.25],[99.85,9.3],[100.42,7.16],[102.1,6.24],[101.14,5.63],[100.65,6.45],[100.13,6.42],[98.66,8.38],[98.27,8.27],[98.74,10.35],[99.66,11.83],[99.17,13.73],[98.2,15.07],[98.93,16.39],[97.35,18.56],[97.77,18.57],[98.05,19.81],[100.08,20.35]]]]},"properties":{"name":"Thailand"},"id":"TH"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[1.4,9.43],[1.64,6.22],[1.2,6.1],[0.53,6.95],[0.73,8.32],[-0.15,11.14],[0.92,11],[0.78,10.38],[1.4,9.43]]]]},"properties":{"name":"Togo"},"id":"TG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-171.84,-9.21],[-171.86,-9.21],[-171.85,-9.17],[-171.84,-9.21]]]]},"properties":{"name":"Tokelau"},"id":"TK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-175.15,-21.18],[-175.36,-21.1],[-175.05,-21.14],[-175.15,-21.18]]]]},"properties":{"name":"Tonga"},"id":"TO"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-60.92,10.8],[-61.01,10.14],[-61.92,10.04],[-61.46,10.28],[-61.66,10.71],[-60.92,10.8]]],[[[-60.64,11.2],[-60.85,11.16],[-60.53,11.35],[-60.64,11.2]]]]},"properties":{"name":"Trinidad and Tobago"},"id":"TT"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[56.18,25.65],[56.27,25.64],[56.37,24.98],[56.04,24.94],[55.2,22.7],[52.58,22.94],[51.58,24.26],[54.12,24.14],[56.08,26.07],[56.18,25.65]]]]},"properties":{"name":"United Arab Emirates"},"id":"AE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[9.85,37.14],[10.38,36.72],[11.07,37.05],[10.46,36.12],[11.13,35.24],[10.01,34.17],[11.53,33.17],[11.57,32.44],[10.29,31.69],[10.21,30.73],[9.54,30.23],[9.06,32.1],[7.49,33.89],[8.25,34.64],[8.18,36.52],[8.62,36.94],[9.85,37.14]]]]},"properties":{"name":"Tunisia"},"id":"TN"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[35.1,41.96],[38.36,40.91],[40.15,40.92],[41.53,41.52],[42.83,41.58],[43.46,41.11],[43.66,40.11],[44.78,39.71],[44.81,39.63],[44.03,39.38],[44.79,37.15],[42.36,37.11],[36.66,36.83],[36.69,36.24],[35.92,35.93],[36.02,36.93],[32.81,36.03],[31.05,36.85],[29.68,36.12],[28.45,36.88],[27.38,36.68],[28.33,37.04],[27.25,36.97],[27.6,37.23],[27.19,37.35],[27.27,37.96],[26.28,38.26],[26.37,38.66],[27.16,38.44],[26.73,38.65],[26.95,39.55],[26.07,39.48],[26.71,40.38],[29.94,40.72],[29.17,41.23],[31.23,41.09],[33.33,42.02],[35.1,41.96]]],[[[27.39,42.01],[28.01,41.98],[29.04,41.06],[27.51,40.98],[26.18,40.05],[26.83,40.59],[26.04,40.74],[26.63,41.35],[26.36,41.71],[27.39,42.01]]]]},"properties":{"name":"Turkey"},"id":"TR"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[58.78,42.66],[60.01,42.22],[60.14,41.38],[61.87,41.13],[62.55,39.93],[64.38,38.95],[66.64,38],[66.54,37.37],[64.8,37.12],[64.5,36.28],[63.12,35.86],[62.72,35.25],[61.28,35.61],[61.16,36.65],[60.33,36.66],[59.34,37.54],[57.21,38.28],[53.91,37.35],[53.98,38.92],[53.16,39.18],[53.26,39.66],[53.73,39.52],[53.58,39.97],[53,39.76],[52.72,40.45],[52.92,41.08],[53.75,40.62],[54.73,41.1],[53.8,42.12],[52.95,41.97],[52.88,41.05],[52.44,41.74],[53.01,42.14],[54.17,42.34],[56,41.33],[57.04,41.26],[56.99,41.89],[58.78,42.66]]]]},"properties":{"name":"Turkmenistan"},"id":"TM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-71.66,21.82],[-71.66,21.74],[-71.85,21.85],[-71.66,21.82]]],[[[-71.88,21.85],[-72.03,21.94],[-71.91,21.94],[-71.88,21.85]]]]},"properties":{"name":"Turks and Caicos Islands"},"id":"TC"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[179.22,-8.55],[179.2,-8.46],[179.23,-8.5],[179.22,-8.55]]]]},"properties":{"name":"Tuvalu"},"id":"TV"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[34,4.22],[35.01,1.9],[33.91,0.1],[33.92,-1],[31.68,-1],[30.48,-1.06],[29.6,-1.39],[29.96,0.83],[31.3,2.12],[30.73,2.45],[30.86,3.49],[33.52,3.75],[34,4.22]]]]},"properties":{"name":"Uganda"},"id":"UG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[33.42,52.36],[34.42,51.81],[34.1,51.65],[34.38,51.26],[35.37,51.04],[35.61,50.37],[37.46,50.44],[38.02,49.9],[40.14,49.6],[39.7,49.01],[40.08,48.87],[39.66,48.62],[39.8,47.86],[38.85,47.86],[38.24,47.11],[35.91,46.65],[34.99,46.08],[35.34,46.32],[35.2,46.44],[35.21,46.39],[35.05,46.26],[34.7,46.18],[34.56,45.98],[33.67,46.22],[35.13,45.33],[35.34,45.33],[35.05,45.61],[34.76,46.02],[34.67,46.09],[34.83,46.07],[34.9,45.88],[35.05,45.65],[35.31,45.38],[35.48,45.29],[36.64,45.38],[33.96,44.38],[33.37,44.58],[33.54,45.11],[32.48,45.4],[33.61,46.15],[31.79,46.28],[32.06,46.4],[31.51,46.58],[32.36,46.46],[32.65,46.64],[32.02,46.63],[31.75,47.25],[31.91,46.65],[31.48,46.63],[31.59,46.8],[30.83,46.55],[30.25,45.88],[29.75,45.62],[29.63,45.82],[29.66,45.21],[28.21,45.45],[28.99,46.48],[30.12,46.39],[29.95,46.81],[29.14,47.99],[27.76,48.45],[26.63,48.26],[24.92,47.71],[22.89,47.95],[22.15,48.41],[22.56,49.08],[24.11,50.57],[23.6,51.53],[25.78,51.94],[30.55,51.25],[30.94,52.07],[31.78,52.11],[33.42,52.36]]]]},"properties":{"name":"Ukraine"},"id":"UA"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[20.82,40.91],[20.59,41.88],[22.37,42.32],[22.94,41.34],[20.98,40.86],[20.82,40.91]]]]},"properties":{"name":"Macedonia"},"id":"MK"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[25.32,31.5],[29.07,30.82],[31.03,31.6],[31.92,31.53],[32.14,31.07],[34.22,31.32],[34.27,31.22],[34.9,29.49],[34.25,27.73],[33.24,28.55],[32.57,30.01],[32.34,29.6],[35.81,23.92],[35.48,23.94],[35.67,22.97],[36.89,22],[31.45,22],[25,22],[24.71,30.17],[25.15,31.65],[25.32,31.5]]]]},"properties":{"name":"Egypt"},"id":"EG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-6.35,55.24],[-5.43,54.48],[-6.27,54.1],[-8.16,54.44],[-7.41,54.95],[-7.25,55.07],[-6.35,55.24]]],[[[-5.78,56.51],[-6.37,56.31],[-6.32,56.6],[-5.78,56.51]]],[[[-6.14,57.57],[-5.66,57.2],[-6.79,57.45],[-6.14,57.57]]],[[[-6.2,58.36],[-7.12,57.82],[-7.04,58.23],[-6.2,58.36]]],[[[-3.01,58.63],[-4.44,57.57],[-1.77,57.46],[-3.28,56.36],[-2.58,56.27],[-3.73,56.03],[-1.63,55.58],[-1.3,54.76],[-0.07,54.11],[0.12,53.56],[-0.72,53.7],[0.24,53.4],[0.000037000000134,52.88],[1.68,52.75],[1.59,52.08],[0.38,51.45],[1.41,51.18],[-5.68,50.04],[-4.23,51.19],[-3.03,51.21],[-2.38,51.76],[-3.35,51.38],[-5.25,51.73],[-4.13,52.33],[-4.13,52.91],[-4.76,52.79],[-4.2,53.21],[-2.7,53.35],[-3.11,53.55],[-2.81,54.22],[-3.63,54.51],[-3.04,54.98],[-4.95,54.65],[-5.17,55],[-4.61,55.49],[-4.92,55.7],[-4.88,55.94],[-4.48,55.92],[-4.83,56.11],[-5.3,55.85],[-5.03,56.23],[-5.78,55.3],[-5.12,56.82],[-6.24,56.71],[-5.4,57.11],[-5.82,57.82],[-5.1,57.85],[-5.46,58.08],[-5,58.62],[-3.01,58.63]]],[[[-2.79,58.95],[-3.19,58.91],[-3.35,59.11],[-2.79,58.95]]],[[[-1.3,60.49],[-1.27,59.85],[-1.69,60.28],[-1.3,60.49]]]]},"properties":{"name":"United Kingdom"},"id":"GB"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-2.59,49.42],[-2.67,49.43],[-2.5,49.51],[-2.59,49.42]]]]},"properties":{"name":"Guernsey"},"id":"GG"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-2.01,49.21],[-2.21,49.18],[-2.25,49.25],[-2.01,49.21]]]]},"properties":{"name":"Jersey"},"id":"JE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-4.78,54.06],[-4.35,54.41],[-4.39,54.19],[-4.78,54.06]]]]},"properties":{"name":"Isle of Man"},"id":"IM"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[31.68,-1],[33.92,-1],[37.6,-3],[37.61,-3.5],[39.2,-4.67],[38.78,-6.05],[39.55,-6.99],[39.39,-8.9],[40.44,-10.48],[37.46,-11.73],[34.97,-11.57],[34.33,-9.73],[33.13,-9.49],[32.94,-9.41],[30.77,-8.19],[29.55,-6.3],[29.42,-4.45],[30.83,-3.26],[30.57,-2.4],[30.89,-2.08],[30.48,-1.06],[31.68,-1]]]]},"properties":{"name":"Tanzania"},"id":"TZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-155.01,19.33],[-155.86,19.03],[-155.86,20.27],[-155.16,19.96],[-155.01,19.33]]],[[[-156.47,20.9],[-155.99,20.75],[-156.42,20.59],[-156.47,20.9]]],[[[-157.73,21.41],[-158.1,21.3],[-158.27,21.58],[-157.73,21.41]]],[[[-159.43,21.88],[-159.79,22.06],[-159.35,22.22],[-159.43,21.88]]],[[[-95.08,49.36],[-94.61,48.72],[-91.42,48.04],[-88.37,48.31],[-84.13,46.53],[-82.54,45.36],[-82.13,43.59],[-83.17,42.05],[-82.7,41.68],[-78.99,42.82],[-79.18,43.47],[-78.72,43.63],[-76.8,43.63],[-74.99,44.99],[-70.88,45.24],[-69.23,47.47],[-67.79,47.07],[-67.8,45.7],[-67.21,45.18],[-67.19,44.66],[-68.8,44.58],[-70.73,43.12],[-70.58,42.65],[-71.04,42.31],[-69.94,41.67],[-71.19,41.47],[-71.39,41.81],[-71.51,41.37],[-74,40.71],[-73.96,41.31],[-74.42,39.36],[-74.96,38.92],[-75.56,39.62],[-75.03,40.01],[-75.59,39.65],[-75.04,38.42],[-75.96,37.15],[-75.64,37.96],[-76.36,38.86],[-75.83,39.58],[-76.62,39.25],[-76.31,38.05],[-77.24,38.4],[-77.06,38.91],[-77.32,38.35],[-76.24,37.9],[-76.35,37.62],[-77.13,38.17],[-76.27,37.08],[-77.23,37.3],[-75.99,36.91],[-75.53,35.8],[-75.94,36.72],[-75.79,36.07],[-76.71,36.26],[-76.73,35.94],[-75.72,35.81],[-76.15,35.34],[-77.05,35.53],[-76.47,35.27],[-76.94,34.98],[-76.34,34.89],[-77.43,34.74],[-77.93,33.93],[-78.83,33.73],[-80.47,32.32],[-80.84,32.52],[-81.5,31.13],[-80.03,26.79],[-80.4,25.18],[-81.09,25.12],[-81.74,25.96],[-81.78,26.71],[-82.06,26.54],[-82.66,27.46],[-82.42,27.92],[-82.85,27.86],[-82.63,28.88],[-83.67,29.91],[-85.35,29.68],[-86.26,30.5],[-88.02,30.22],[-88.02,30.7],[-88.13,30.31],[-90.42,30.2],[-89.4,30.05],[-89.75,29.63],[-89.01,29.18],[-89.4,28.93],[-90.18,29.57],[-90.21,29.09],[-91.25,29.24],[-91.84,29.83],[-92.31,29.54],[-93.85,29.99],[-93.86,29.68],[-94.77,29.36],[-94.48,29.56],[-95.06,29.72],[-95.14,29.06],[-96.21,28.49],[-96.64,28.72],[-96.4,28.44],[-97.52,27.87],[-97.41,27.33],[-97.77,27.46],[-97.14,25.97],[-99.1,26.43],[-99.51,27.57],[-101.41,29.77],[-102.31,29.89],[-103.38,29.02],[-106.4,31.75],[-111.05,31.33],[-113.05,31.97],[-114.72,32.72],[-117.12,32.54],[-118.53,34.05],[-120.62,34.57],[-120.61,35.14],[-122.49,37.52],[-122.39,37.82],[-122.01,37.47],[-122.39,37.96],[-122.24,38.06],[-121.42,38.01],[-122.37,38.16],[-122.49,37.83],[-123,38.01],[-124.33,40.27],[-124.04,41.43],[-124.52,42.87],[-123.95,46.18],[-123.16,46.2],[-124,46.32],[-123.8,46.98],[-124.16,46.94],[-124.72,48.4],[-122.75,48.16],[-123.15,47.37],[-122.45,47.77],[-122.88,47.06],[-122.31,47.4],[-122.76,49],[-95.15,49],[-95.08,49.36]]],[[[-156.45,71.26],[-155.59,71.16],[-155.97,70.76],[-155.09,71.15],[-152.25,70.84],[-152.5,70.65],[-152.08,70.57],[-152.63,70.56],[-151.97,70.44],[-143.28,70.12],[-141,69.64],[-141,60.31],[-139.07,60.35],[-137.48,58.91],[-135.47,59.8],[-133.43,58.46],[-131.82,56.6],[-130.02,55.91],[-130.17,55.75],[-130.14,55.54],[-129.99,55.28],[-130.36,54.91],[-130.69,54.76],[-131.01,55],[-130.46,55.33],[-131.06,55.12],[-130.61,55.3],[-131.01,56.11],[-132.16,55.58],[-131.77,56.2],[-133.51,57.19],[-133.06,57.35],[-133.64,57.7],[-133,57.51],[-133.56,57.9],[-133.12,57.86],[-134.05,58.07],[-133.77,58.52],[-134.76,58.38],[-135.34,59.47],[-135.09,58.23],[-135.92,58.38],[-135.77,58.9],[-137.06,59.07],[-136.03,58.39],[-136.65,58.22],[-139.71,59.5],[-139.49,59.98],[-139.29,59.57],[-138.89,59.81],[-139.5,60.03],[-140.4,59.7],[-141.39,60.14],[-143.92,59.99],[-144.94,60.3],[-144.61,60.72],[-145.29,60.35],[-146.65,60.7],[-146.12,60.84],[-146.76,60.96],[-146.3,61.13],[-147.87,60.83],[-147.72,61.28],[-148.7,60.79],[-148.2,60.63],[-148.68,60.45],[-147.94,60.46],[-148.44,59.95],[-149.42,60.12],[-150.91,59.24],[-151.98,59.28],[-150.99,59.78],[-151.88,59.75],[-151.41,60.73],[-149.03,60.85],[-150.06,61.15],[-149.42,61.51],[-153.1,60.29],[-152.58,60.06],[-154.26,59.14],[-153.27,58.85],[-156.55,56.98],[-158.42,56.44],[-158.12,56.23],[-158.51,55.99],[-161.25,55.35],[-161.56,55.62],[-161.97,55.1],[-162.63,55.3],[-162.56,54.96],[-163.36,54.81],[-161.8,55.89],[-160.25,55.77],[-160.35,56.29],[-157.4,57.49],[-157.61,58.09],[-157.14,58.16],[-157.55,58.38],[-156.78,59.15],[-158.19,58.61],[-158.49,59],[-157.99,58.9],[-158.54,59.18],[-158.9,58.4],[-160.33,59.06],[-162.17,58.65],[-161.57,59.1],[-161.99,59.14],[-161.71,59.5],[-162.24,60.06],[-162.15,60.25],[-162.37,60.18],[-161.88,60.7],[-162.57,60.32],[-162.52,59.99],[-164.07,59.82],[-165.43,60.56],[-163.55,60.9],[-165.15,60.93],[-164.82,61.11],[-165.12,61.08],[-165.14,61.26],[-165.16,61.17],[-165.37,61.2],[-165.29,61.25],[-165.15,61.42],[-165.06,61.42],[-165,61.47],[-164.85,61.49],[-164.72,61.63],[-164.76,61.63],[-165.02,61.5],[-165.08,61.43],[-165.16,61.43],[-165.29,61.33],[-165.27,61.31],[-165.31,61.26],[-165.41,61.21],[-165.34,61.16],[-165.39,61.07],[-166.2,61.59],[-165.25,62.45],[-164.64,62.42],[-164.48,62.75],[-164.88,62.84],[-164.41,63.21],[-161.15,63.51],[-160.78,63.87],[-161.53,64.42],[-160.78,64.72],[-162.79,64.34],[-166.12,64.57],[-166.96,65.19],[-166.06,65.26],[-168.13,65.67],[-164.35,66.59],[-163.63,66.57],[-164.19,66.2],[-163.66,66.07],[-161,66.2],[-161.91,66.27],[-162.64,66.87],[-162.34,66.96],[-161.6,66.45],[-160.23,66.4],[-161.51,66.53],[-161.9,66.73],[-161.5,66.98],[-162.35,67.16],[-163.73,67.11],[-164.12,67.61],[-166.83,68.35],[-166.22,68.88],[-163.65,69.11],[-161.94,70.31],[-159.94,70.59],[-159.84,70.27],[-159.29,70.53],[-160.12,70.62],[-159.67,70.8],[-156.45,71.26]]]]},"properties":{"name":"United States"},"id":"US"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-64.76,17.77],[-64.56,17.75],[-64.9,17.68],[-64.76,17.77]]]]},"properties":{"name":"Virgin Islands"},"id":"VI"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-2.83,11],[-2.69,9.48],[-3.63,9.95],[-4.7,9.7],[-5.52,10.44],[-5.27,11.84],[-4.42,12.3],[-3.96,13.5],[-3.44,13.17],[-2.47,14.29],[-0.73,15.08],[0.24,14.92],[0.6,13.7],[1.29,13.35],[0.99,13.05],[2.14,12.69],[2.4,11.9],[0.92,11],[-0.15,11.14],[-2.83,11]]]]},"properties":{"name":"Burkina Faso"},"id":"BF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-57.81,-30.75],[-57.61,-30.18],[-56.81,-30.11],[-56.01,-31.08],[-55.58,-30.85],[-53.88,-31.97],[-53.09,-32.73],[-53.52,-33.15],[-53.37,-33.74],[-54.15,-34.67],[-56.32,-34.91],[-57.12,-34.46],[-57.84,-34.49],[-58.4,-33.93],[-58.36,-33.13],[-58.15,-33.1],[-58.05,-32.93],[-58.2,-32.45],[-57.81,-30.75]]]]},"properties":{"name":"Uruguay"},"id":"UY"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[64.38,38.95],[62.55,39.93],[61.87,41.13],[60.14,41.38],[60.01,42.22],[58.78,42.66],[56.99,41.89],[57.04,41.26],[56,41.33],[56,45],[58.57,45.57],[62.03,43.48],[64.93,43.74],[66.12,43],[66.03,42],[66.53,42],[66.72,41.17],[67.94,41.18],[68.46,40.6],[69.06,41.38],[70.97,42.25],[71.28,42.2],[70.19,41.53],[71.42,41.12],[71.69,41.56],[73.17,40.82],[70.98,40.24],[70.38,40.38],[70.8,40.73],[70.42,41.05],[68.6,40.18],[69.01,40.09],[68.54,39.55],[67.44,39.48],[68.38,38.2],[67.78,37.19],[66.54,37.37],[66.64,38],[64.38,38.95]]]]},"properties":{"name":"Uzbekistan"},"id":"UZ"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-69.77,11.7],[-68.42,11.18],[-68.16,10.5],[-66.24,10.64],[-65.08,10.06],[-63.7,10.49],[-64.26,10.66],[-61.88,10.73],[-62.92,10.53],[-62.62,10.12],[-63.02,10.1],[-60.85,9.44],[-61.6,8.55],[-59.99,8.54],[-59.83,8.24],[-60.72,7.54],[-60.29,7.06],[-61.13,6.71],[-61.39,5.94],[-60.73,5.2],[-60.99,4.52],[-62.75,4.03],[-62.88,3.56],[-64.8,4.28],[-64.05,2.48],[-63.39,2.15],[-65.52,0.65],[-66.87,1.22],[-67.19,2.39],[-67.83,2.83],[-67.29,3.4],[-67.86,4.56],[-67.45,6.19],[-69.25,6.08],[-70.12,6.98],[-72,7.02],[-72.78,9.08],[-73.38,9.17],[-72.49,11.12],[-71.98,11.66],[-71.32,11.85],[-71.97,11.56],[-71.58,10.71],[-72.13,9.81],[-71.62,9.04],[-71.06,9.34],[-71.5,10.96],[-69.8,11.43],[-70.24,11.63],[-70.03,12.2],[-69.77,11.7]]]]},"properties":{"name":"Venezuela"},"id":"VE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-178.04,-14.32],[-178.14,-14.32],[-178.19,-14.24],[-178.04,-14.32]]],[[[-176.16,-13.35],[-176.16,-13.21],[-176.12,-13.26],[-176.16,-13.35]]]]},"properties":{"name":"Wallis and Futuna"},"id":"WF"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-171.43,-14.02],[-172.06,-13.87],[-171.82,-13.81],[-171.43,-14.02]]],[[[-172.29,-13.49],[-172.21,-13.81],[-172.78,-13.53],[-172.29,-13.49]]]]},"properties":{"name":"Samoa"},"id":"WS"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[52.23,15.67],[43.96,12.59],[43.25,13.21],[42.79,16.38],[43.31,17.46],[44.47,17.41],[46.33,16.67],[46.33,15.62],[48.77,18.27],[52,19],[53.11,16.64],[52.3,16.27],[52.23,15.67]]]]},"properties":{"name":"Yemen"},"id":"YE"},{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[24.97,-17.56],[23.48,-17.63],[22,-16.17],[22,-13],[24.02,-13.01],[23.99,-10.87],[24.45,-11.46],[25.33,-11.19],[26,-11.9],[26.87,-11.97],[27.2,-11.57],[29.02,-13.4],[29.8,-13.45],[29.81,-12.16],[29.03,-12.38],[28.36,-11.55],[28.7,-10.65],[28.37,-9.26],[28.9,-8.48],[30.77,-8.19],[32.94,-9.41],[33.7,-10.56],[33.25,-10.89],[33.55,-12.36],[32.68,-13.61],[33.22,-14.01],[30.21,-14.98],[30.42,-15.63],[28.93,-15.97],[27.04,-17.96],[25.26,-17.8],[24.97,-17.56]]]]},"properties":{"name":"Zambia"},"id":"ZM"}]}');

},{}]},["9tRox","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
