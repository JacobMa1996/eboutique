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
/******/ 	return __webpack_require__(__webpack_require__.s = "Slqw");
/******/ })
/************************************************************************/
/******/ ({

/***/ "99qs":
/***/ (function(module, exports) {

module.exports = "<div class=\"v-table\">\r\n    <h3>{{title}}</h3>\r\n    <table class=\"table table-striped table-dark\">\r\n        <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th v-for=\"(thead, index) in theadList\" :key=\"index\">{{thead.text}}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr v-for=\"(trow, trowIndex) in trowList\">\r\n              <th scope=\"row\">{{ trowIndex + 1 }}</th>\r\n              <td v-for=\"(thead, tdataIndex) in theadList\">\r\n                {{trow[thead.header]}}\r\n              </td>\r\n            </tr>\r\n            \r\n        </tbody>\r\n    </table>\r\n</div>";

/***/ }),

/***/ "Be++":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-table', {
    template: __webpack_require__("99qs"),
    props: {
        theadList: {
            type: Array,
            default: [{}]
        },
        trowList: {
            type: Array,
            defalut: [{}]
        },
        title: {
            type: String,
            default: '表格标题'
        }
    },
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ "DAap":
/***/ (function(module, exports) {

module.exports = "<a :href=\"href\" :target=\"target || _blank\" :class=\"['v-btn', display_type]\" @click=\"click()\">{{display_text}}</a>\r\n";

/***/ }),

/***/ "IKnA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Xvv4");
__webpack_require__("Be++");

/***/ }),

/***/ "Q3No":
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\r\n    <v-table :title=\"'分类设置'\" :theadList=\"theadList\" :trowList=\"trowList\"></v-table>\r\n</div>";

/***/ }),

/***/ "Slqw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("IKnA");

__webpack_require__("xzc0");

var vm = new Vue({
    el: '#admin',
    data: function data() {
        return {
            slideIndex: 0, // 默认0
            slideList: [{
                id: 0,
                text: '分类设置'
            }, {
                id: 1,
                text: '审核设置'
            }, {
                id: 2,
                text: '数据分析'
            }]
        };
    },

    methods: {
        toggleSlide: function toggleSlide(index) {
            this.slideIndex = index;
        }
    }
});

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

/***/ "xzc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("PYZg");

Vue.component('category', {
    template: __webpack_require__("Q3No"),
    props: {},
    data: function data() {
        return {
            theadList: [{
                header: 'cateName',
                text: '分类名称'
            }, {
                header: 'brandName',
                text: '品牌名称'
            }, {
                header: 'brandIntro',
                text: '品牌介绍'
            }, {
                header: 'handle',
                text: '操作'
            }],
            trowList: [{
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }]
        };
    },

    methods: {}
});

/***/ })

/******/ });