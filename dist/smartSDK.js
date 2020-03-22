/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fn = __webpack_require__(/*! ../src/modules/fn */ "./src/modules/fn.js");

var JDSMART = /*#__PURE__*/function () {
  function JDSMART() {
    _classCallCheck(this, JDSMART);

    this.io = null;
    this.JSBridge = null;
    this.readyCallback = null;
  }

  _createClass(JDSMART, [{
    key: "init",
    value: function init(config) {
      this.JSBridge = config.bridge;
      this.JSBridge.init(function (msg, callback) {});
      this.newAllModule(config.bridge);
      document.getElementById('smartInit').innerHTML = "1234";

      if (this.readyCallback) {
        document.getElementById('smartInit').innerHTML = "1234---";
        this.readyCallback();
      } //   document.getElementById('smartInit').innerHTML = JSON.stringify(config)+ "567899"

    }
  }, {
    key: "newAllModule",
    value: function newAllModule(jsb) {
      this.io = new Fn(jsb);
      document.getElementById('smartInit').innerHTML = JSON.stringify(this.io) + "---====";
    }
  }, {
    key: "ready",
    value: function ready(fn) {
      this.readyCallback = fn;
    }
  }]);

  return JDSMART;
}();

window.JDSMART = new JDSMART();
document.addEventListener('JDSmartBridgeReady', function onReady(ev) {
  document.getElementById('brg').innerHTML = '桥文件' + JSON.stringify(ev.bridge);
  window.JDSMART.init({
    'bridge': ev.bridge
  });
});
module.exports = window.JDSMART;

/***/ }),

/***/ "./src/modules/fn.js":
/*!***************************!*\
  !*** ./src/modules/fn.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fn = /*#__PURE__*/function () {
  function Fn(JSBridge) {
    _classCallCheck(this, Fn);

    this.JSBridge = JSBridge;
    document.getElementById('brg').innerHTML = 'fn' + JSON.stringify(JSBridge);
  }

  _createClass(Fn, [{
    key: "getSnapshot",
    value: function getSnapshot(suc, faild) {
      document.getElementById('getSnapshot').innerHTML = "进入快照";
      document.getElementById('brg').innerHTML = '快照' + JSON.stringify(this.JSBridge);
      this.JSBridge.send({
        type: 'getSnapshot'
      }, function (result) {
        document.getElementById('getSnapshot').innerHTML = "快照返回" + JSON.stringify(result);

        if (result.status != 0) {
          if (faild) faild(result.error);
        } else {
          suc(result.result);
        }
      });
    }
  }]);

  return Fn;
}();

module.exports = Fn;

/***/ })

/******/ });
//# sourceMappingURL=smartSDK.js.map