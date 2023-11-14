// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
var ajax = new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
var TITLE_URL = "https://api.hnpwa.com/v0/news/1.json"; //목록
var container = document.getElementById("root");
var content = document.createElement("div");
/* 목록 보기 눌렀을때 처음페이지가 아니라 글 제목 누른 페이지로 돌아와야한다
어제까지 #38099086 - substring(1) -> 38099086
http://localhost:1234/#38099086

오늘부터
페이지 번호가 계속 바뀐다 - 상태 - (세션 쿠키 - 리덕스)
상세페이지 - 구분 - show
목록페이지 - 구분 - page
http://localhost:1234/#/page/1
http://localhost:1234/#/page/2
http://localhost:1234/#/show/2
http://localhost:1234/#/show/2
*/
var CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

//페이징 처리를 위한 필요한 상태값을 관리하는 객체 (VO같은 느낌)
var store = {
  currentPage: 1,
  totalRecord: 47
};

//에로우 function 방식
getData = function getData(url) {
  //arrow function 으로 처리 - ES6추가된 컨벤션
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

//글 내용을 보려면 글목록 화면에서 제목을 클릭했을 때 (a태그가 발동되었을 때) 상세페이지로 이동
getNewsData = function getNewsData() {
  var newsData = getData(TITLE_URL);
  var newsList = [];
  newsList.push("<ul>");
  for (var i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    //<a> - 상세보기 (글 내용보기로 이동) - #/show/
    // localhost:1234/#/show/2      xxx.substring(7)-Number('2') = Interger.parseInt() 
    newsList.push("\n      <li>\n        <a href = \"#/show/".concat(newsData[i].id, "\">\n          ").concat(newsData[i].title, "( click ").concat(newsData[i].comments_count, " )\n        </a>\n      </li>\n    "));
  }
  newsList.push("</ul>");

  //페이징 처리
  newsList.push("\n    <div>\n      <a href = \"#/page/".concat(store.currentPage > 1 ? store.currentPage - 1 : 1, "\">\uC774\uC804\uD398\uC774\uC9C0</a>\n      <a href = \"#/page/").concat(store.currentPage < 3 ? store.currentPage + 1 : 3, "\">\uB2E4\uC74C\uD398\uC774\uC9C0</a>\n    </div>\n  "));
  container.innerHTML = newsList.join("");
}; //end of getNewsData

newsDetail = function newsDetail() {
  var id = location.hash.substring(7);
  var ncontent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = "\n  <h1>".concat(ncontent.title, "</h1>\n  <div><a href=\"#/page/").concat(store.currentPage, "\">\uBAA9\uB85D\uC73C\uB85C</a></div>\n  ");
}; //end of newsDetail

router = function router() {
  var routerPath = location.hash;
  console.log(routerPath);
  if (routerPath === "") {
    // === : 타입까지 비교
    getNewsData(); //글목록 보기
  } else if (routerPath.indexOf('#/page/') >= 0) {
    // -> #/page/ 이런 형태로 들어와 있으면 이게 0 보다 크면 page라고 하는 해시변경 확인
    /* currentPage에 2페이지, 3페이지 이렇게 들어가 있음 페이지 뒤에 숫자값을 넣으면 됨
    그런데 우리는 아직 추출하지 않았으니 상수로 2를 주어 동작 확인  */
    store.currentPage = Number(routerPath.substring(7)); //현재 페이지값
    getNewsData(); // 글내용 보기
  } else {
    newsDetail(); //글 내용 보기
  }
};

addEventListener("load", function () {});
addEventListener("hashchange", router);
router(); //전처리과정
},{}],"C:/Users/GD/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51291" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/GD/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/news_step7.e31bb0bc.js.map