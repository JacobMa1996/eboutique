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

module.exports = "<div class=\"v-table\">\n  <h3>{{title}}</h3>\n  <table class=\"table table-striped table-dark\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th v-for=\"(thead, index) in theadList\" :key=\"index\">{{thead.text}}</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"(trow, trowIndex) in trowList\">\n        <th scope=\"row\">{{ trowIndex + 1 }}</th>\n        <td v-for=\"(thead, tdataIndex) in theadList\">\n          {{trow[thead.header]}}\n        </td>\n        <td>\n          <a @click=\"_showPop(trow)\" href=\"javascript:void(0);\">编辑</a>\n          <a @click=\"_deleteItem(trowIndex)\" href=\"javascript:void(0);\">删除</a>\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>";

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

    methods: {
        _showPop: function _showPop(trow) {
            this.$emit('showPop', trow);
        },
        _deleteItem: function _deleteItem(trowIndex) {
            this.$emit('deleteItem', trowIndex);
        }
    }
});

/***/ }),

/***/ "DAap":
/***/ (function(module, exports) {

module.exports = "<a :href=\"href\" :target=\"target || _blank\" :class=\"['v-btn', display_type]\" @click=\"click()\">{{display_text}}</a>\n";

/***/ }),

/***/ "IKnA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("k105");
__webpack_require__("lu7r");
__webpack_require__("Xvv4");
__webpack_require__("Be++");

/***/ }),

/***/ "Q3No":
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\n    <v-table :title=\"'分类设置'\" :theadList=\"theadList\" :trowList=\"trowList\" @showPop=\"showPop\" @deleteItem=\"deleteItem\"></v-table>\n</div>";

/***/ }),

/***/ "Slqw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("IKnA");

__webpack_require__("PYZg");

__webpack_require__("xzc0");

new Vue({
    el: '#admin',
    data: function data() {
        return {
            slideIndex: 0, // 默认0
            slideList: [{
                index: 0,
                text: '分类设置'
            }, {
                index: 1,
                text: '审核设置'
            }, {
                index: 2,
                text: '数据分析'
            }]
        };
    },
    mounted: function mounted() {
        console.log(this.slideList);
    },

    methods: {}
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

/***/ "iVtf":
/***/ (function(module, exports) {

module.exports = "<div id=\"slide\">\n    <ul>\n        <li v-for=\"(item, index) in slideList\" :class=\"index === slideIndex ? 'active': ''\" @click=\"toggleSlide(index)\" :key=\"index\">{{item.text}}</li>\n    </ul>\n</div>";

/***/ }),

/***/ "k105":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-header', {
    template: __webpack_require__("yAOn"),
    props: {},
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ "lu7r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-slide', {
    template: __webpack_require__("iVtf"),
    props: {
        slideIndex: {
            type: Number,
            default: 0
        },
        slideList: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        toggleSlide: function toggleSlide(index) {
            this.slideIndex = index;
        }
    }
});

/***/ }),

/***/ "xzc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
            }],
            trowList: [{
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }]
        };
    },

    methods: {
        showPop: function showPop(trow) {
            console.log(trow);
        },
        deleteItem: function deleteItem(trowIndex) {
            console.log(trowIndex);
        }
    }
});

/***/ }),

/***/ "yAOn":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"clearfix\">\n    <div class=\"header-left\">\n        <a href=\"#\">Admin</a>\n    </div>\n    <div class=\"header-right\">\n        <ul>\n            <li>消息</li>\n            <li>设置</li>\n        </ul>\n    </div>\n</header>";

/***/ })

/******/ });