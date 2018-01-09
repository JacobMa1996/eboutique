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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "uPCl");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/ikZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DAap":
/***/ (function(module, exports) {

module.exports = "<a :href=\"href\" :target=\"target || _blank\" :class=\"['v-btn', display_type]\" @click=\"click()\">{{display_text}}</a>\r\n";

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Xvv4");

/***/ }),

/***/ "Xvv4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-btn', {
    template: __webpack_require__("DAap"),
    props: {
        options: {}
    },
    data: function data() {
        var data = this.options;
        return {
            display_text: data.display_text || '未命名按钮',
            display_type: data.display_type || 'button',
            href: data.href || undefined,
            target: data.target || '_blank'
        };
    },

    methods: {
        click: function click() {
            this.options.click && this.options.click();
        }
    }
});

/***/ }),

/***/ "uPCl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("PYZg");

__webpack_require__("/ikZ");

$('.container').css({ 'min-height': common.pageWidthHeight().pageHeight - 240 });

new Vue({
    el: '#div',
    data: {
        actions: {
            display_text: '按钮',
            display_type: 'link',
            click: function click() {
                console.log(1);
            }
            // href: '#', 
            // target: '_self'

        }
    }
});

/***/ })

/******/ });