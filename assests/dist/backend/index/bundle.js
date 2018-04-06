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

module.exports = "<div class=\"v-table\">\r\n  <h3>{{title}}</h3>\r\n  <table class=\"table table-striped table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th v-for=\"(thead, index) in thead_list\" :key=\"index\">{{thead.text}}</th>\r\n        <th>操作</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr v-for=\"(trow, trowIndex) in trow_list\">\r\n        <th scope=\"row\">{{ trowIndex + 1 }}</th>\r\n        <td v-for=\"(thead, tdataIndex) in thead_list\">\r\n          {{trow[thead.header]}}\r\n        </td>\r\n        <td>\r\n          <a @click=\"showPop(trow)\" href=\"javascript:void(0);\">编辑</a>\r\n          <a @click=\"deleteItem(trowIndex)\" href=\"javascript:void(0);\">删除</a>\r\n        </td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>";

/***/ }),

/***/ "Be++":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-table', {
    template: __webpack_require__("99qs"),
    props: {
        thead_list: {
            type: Array,
            default: [{}]
        },
        trow_list: {
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
        showPop: function showPop(trow) {
            this.$emit('show_pop', trow);
        },
        deleteItem: function deleteItem(trowIndex) {
            this.$emit('delete_item', trowIndex);
        }
    }
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

/***/ "IoXs":
/***/ (function(module, exports) {

module.exports = "<form class=\"v-form\">\r\n    <div class=\"form-group\" v-for=\"(item, index) in input_list\" :key=\"index\">\r\n        <label for=\"\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <!-- <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleFormControlTextarea1\">Example textarea</label>\r\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\r\n    </div>\r\n    <div class=\"form-group form-check\">\r\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button> -->\r\n</form>";

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("k105");
__webpack_require__("lu7r");
__webpack_require__("Xvv4");
__webpack_require__("Be++");
__webpack_require__("roO6");

/***/ }),

/***/ "Q3No":
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\r\n    <form class=\"v-form\">\r\n        <div class=\"form-group\">\r\n            <label for=\"cate-name\">分类名称</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cate-name\" placeholder=\"请输入分类名称\" v-model=\"cate_name\">\r\n            <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"brand-name\">品牌名称</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"brand-name\" placeholder=\"请输入分类名称\" v-model=\"brand_name\">\r\n            <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"brand-intro\">品牌介绍</label>\r\n            <textarea class=\"form-control\" rows=\"3\" id=\"brand-intro\" placeholder=\"请输入分类名称\" v-model=\"brand_intro\"></textarea>\r\n            <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n        </div>\r\n        <div class=\"form-group form-check\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"is-show\" v-model=\"is_show\">\r\n            <label class=\"form-check-label\" for=\"is-show\">是否显示</label>\r\n        </div>\r\n        <div class=\"form-group form-button\"><button type=\"submit\" class=\"btn btn-primary\">添加</button></div>\r\n    </form>\r\n    <v-table :title=\"'分类设置'\" :thead_list=\"thead_list\" :trow_list=\"trow_list\" @show_pop=\"showPop\" @delete_item=\"deleteItem\"></v-table>\r\n</div>";

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
            slide_index: 0, // 默认0
            slide_list: [{
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
        console.log(this.slide_list);
    },

    methods: {
        toggleSlide: function toggleSlide(index) {
            this.slide_index = index;
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

/***/ "iVtf":
/***/ (function(module, exports) {

module.exports = "<div id=\"slide\">\r\n    <ul>\r\n        <li v-for=\"(item, index) in slide_list\" :class=\"index === slide_index ? 'active': ''\" @click=\"toggleSlide(index)\" :key=\"index\">{{item.text}}</li>\r\n    </ul>\r\n</div>";

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
        slide_index: {
            type: Number,
            default: 0
        },
        slide_list: {
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
            this.$emit('toggle_slide', index);
        }
    }
});

/***/ }),

/***/ "roO6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-form', {
    template: __webpack_require__("IoXs"),
    props: {},
    data: function data() {
        return {};
    },

    methods: {}
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
            thead_list: [{
                header: 'cate_name',
                text: '分类名称'
            }, {
                header: 'brand_name',
                text: '品牌名称'
            }, {
                header: 'brand_intro',
                text: '品牌介绍'
            }],
            trow_list: [],
            cate_name: '',
            brand_name: '',
            brand_intro: '',
            is_show: true
        };
    },
    mounted: function mounted() {
        this.getInitData();
    },

    methods: {
        showPop: function showPop(trow) {
            console.log(trow);
        },
        deleteItem: function deleteItem(trowIndex) {
            console.log(trowIndex);
        },
        getInitData: function getInitData() {
            var _this = this;
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success: function success(res) {
                    console.log(res);
                    _this.trow_list = res.data;
                },
                error: function error(err) {
                    console.log(err);
                }
            });
        }
    }
});

/***/ }),

/***/ "yAOn":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"clearfix\">\r\n    <div class=\"header-left\">\r\n        <a href=\"#\">Admin</a>\r\n    </div>\r\n    <div class=\"header-right\">\r\n        <ul>\r\n            <li>消息</li>\r\n            <li>设置</li>\r\n        </ul>\r\n    </div>\r\n</header>";

/***/ })

/******/ });