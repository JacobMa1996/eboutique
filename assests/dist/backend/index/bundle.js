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

module.exports = "<div class=\"v-table\">\n  <h3>{{options.title}}</h3>\n  <table class=\"table table-striped table-dark\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th v-for=\"(thead, index) in options.thead_list\" :key=\"index\">{{thead.text}}</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"(trow, trowIndex) in options.trow_list\" :key=\"trowIndex\">\n        <th scope=\"row\">{{ trowIndex + 1 }}</th>\n        <td v-for=\"(thead, tdataIndex) in options.thead_list\">\n          {{trow[thead.header]}}\n        </td>\n        <td>\n          <a @click=\"showPop(trow)\" href=\"javascript:void(0);\">编辑</a>\n          <a @click=\"deleteItem(trowIndex)\" href=\"javascript:void(0);\">删除</a>\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>";

/***/ }),

/***/ "Be++":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
thead_list: {
    type: Array,
    default: () => {
        return [{}]
    }
},
trow_list: {
    type: Array,
    defalut: () => {
        return [{}]
    }
},
title: {
    type: String,
    default: '表格标题'
},
key_id: {
    type: String
}
*/

Vue.component('v-table', {
    template: __webpack_require__("99qs"),
    props: {
        options: {}
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

module.exports = "<a :href=\"href\" :target=\"target || _blank\" :class=\"['v-btn', display_type]\" @click=\"click()\">{{display_text}}</a>\n";

/***/ }),

/***/ "IKnA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IoXs":
/***/ (function(module, exports) {

module.exports = "<form class=\"v-form\">\n    <div class=\"\" v-if=\"options.tip\">{{options.tip}}</div>\n    <div class=\"form-group\" v-for=\"(item, index) in options.input_list\" :key=\"item.header\">\n        <label :for=\"item.header\">{{item.label}}</label>\n        <input :type=\"item.type\" class=\"form-control\" :id=\"item.header\" :placeholder=\"item.placeholder\" v-model=\"item.value\">\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\" v-for=\"(item, index) in options.textarea_list\" :key=\"item.header\">\n        <label :for=\"item.header\">{{item.label}}</label>\n        <textarea class=\"form-control\" :id=\"item.header\" :rows=\"item.rows\" v-model=\"item.value\" :placeholder=\"item.placeholder\"></textarea>\n    </div>\n    <div class=\"form-group form-check\" v-for=\"(item, index) in options.check_list\" :key=\"item.header\">\n        <input type=\"checkbox\" class=\"form-check-input\" :id=\"item.header\" v-model=\"item.value\">\n        <label class=\"form-check-label\" :for=\"item.header\">{{item.label}}</label>\n    </div>\n    <button v-if=\"options.button\" @click=\"click\" type=\"button\" class=\"btn btn-primary\">{{options.button.label}}</button>\n</form>";

/***/ }),

/***/ "OLaw":
/***/ (function(module, exports) {

module.exports = "<div class=\"v-pop\" v-if=\"options.modal\">\n    <!-- Modal -->\n    <div class=\"modal-backdrop fade show\"></div>\n    <div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        {{options.pop_title}}\n                    </h5>\n                    <button @click=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <v-form :options=\"options.form_options\"></v-form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button @click=\"close()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">关闭</button>\n                    <button @click=\"submit()\" type=\"button\" class=\"btn btn-primary\">保存</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("k105");
__webpack_require__("lu7r");
__webpack_require__("Xvv4");
__webpack_require__("Be++");
__webpack_require__("roO6");
__webpack_require__("gaxK");

/***/ }),

/***/ "Q3No":
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\n    <!-- <form class=\"v-form\">\n        <div class=\"form-group\">\n            <label for=\"cate-name\">分类名称</label>\n            <input type=\"text\" class=\"form-control\" id=\"cate-name\" placeholder=\"请输入分类名称\" v-model=\"cate_name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"brand-name\">品牌名称</label>\n            <input type=\"text\" class=\"form-control\" id=\"brand-name\" placeholder=\"请输入分类名称\" v-model=\"brand_name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"brand-intro\">品牌介绍</label>\n            <textarea class=\"form-control\" rows=\"3\" id=\"brand-intro\" placeholder=\"请输入分类名称\" v-model=\"brand_intro\"></textarea>\n        </div>\n        <div class=\"form-group form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"is-show\" v-model=\"is_show\">\n            <label class=\"form-check-label\" for=\"is-show\">是否显示</label>\n        </div>\n        <div class=\"form-group form-button\"><button @click=\"submit\" type=\"button\" class=\"btn btn-primary\">添加</button></div>\n    </form> -->\n    <v-form :options=\"form_options\" @submit=\"add\"></v-form>\n    <v-table :options=\"table_options\" @show_pop=\"showPop\" @delete_item=\"deleteItem\"></v-table>\n    <v-pop :options=\"pop_options\" @submit=\"edit\"></v-pop>\n</div>";

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

/***/ "gaxK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-pop', {
    template: __webpack_require__("OLaw"),
    props: {
        options: {}

    },
    data: function data() {
        return {};
    },

    methods: {
        close: function close() {
            this.options.modal = false;
        },
        submit: function submit() {
            this.$emit('submit', this.options.form_options);
            this.options.modal = false;
        }
    }
});

/***/ }),

/***/ "iVtf":
/***/ (function(module, exports) {

module.exports = "<div id=\"slide\">\n    <ul>\n        <li v-for=\"(item, index) in slide_list\" :class=\"index === slide_index ? 'active': ''\" @click=\"toggleSlide(index)\" :key=\"index\">{{item.text}}</li>\n    </ul>\n</div>";

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


/**
 * tip: {
    type: String,
    default: null
},
input_list: {
    type: Array,
    default: null
},
textarea_list: {
    type: Array,
    default: null
},
check_list: {
    type: Array,
    default: null
},
button: {
    type: Object,
    default: null
}
 */

Vue.component('v-form', {
    template: __webpack_require__("IoXs"),
    props: {
        options: {}
    },
    data: function data() {
        return {};
    },

    methods: {
        click: function click() {
            var _this = this;
            var data = {
                tip: _this.options.tip,
                input_list: _this.options.input_list,
                textarea_list: _this.options.textarea_list,
                check_list: _this.options.check_list,
                button: _this.options.button
            };
            this.$emit('submit', data);
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
        var _this = this;
        return {
            title: '分类',
            // table
            table_options: {
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
                trow_list: []
            },

            // form
            form_options: {
                input_list: [{
                    label: '分类名称',
                    header: 'cate_name',
                    placeholder: '请输入分类名称',
                    value: ''
                }, {
                    label: '品牌名称',
                    header: 'brand_name',
                    placeholder: '请输入品牌名称',
                    value: ''
                }],
                textarea_list: [{
                    label: '品牌介绍',
                    header: 'brand_intro',
                    rows: '3',
                    placeholder: '请输入品牌介绍',
                    value: ''
                }],
                check_list: [{
                    label: '是否显示',
                    header: 'is_show',
                    value: true
                }],
                button: {
                    label: '添加'
                }
            },
            pop_options: {
                modal: false,
                pop_title: '编辑分类',
                form_options: {
                    input_list: [{
                        label: '分类名称',
                        header: 'cate_name',
                        placeholder: '请输入分类名称',
                        value: ''
                    }, {
                        label: '品牌名称',
                        header: 'brand_name',
                        placeholder: '请输入品牌名称',
                        value: ''
                    }],
                    textarea_list: [{
                        label: '品牌介绍',
                        header: 'brand_intro',
                        rows: '3',
                        placeholder: '请输入品牌介绍',
                        value: ''
                    }],
                    check_list: [{
                        label: '是否显示',
                        header: 'is_show',
                        value: true
                    }]
                }
            }
        };
    },
    mounted: function mounted() {
        this.getInitData();
    },

    methods: {
        showPop: function showPop(trow) {
            var _this = this;
            var obj = _this.pop_options.form_options;
            for (var item in obj) {
                if (obj[item] instanceof Array) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = obj[item][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var key = _step.value;

                            key.value = trow[key.header];
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }
            this.pop_options.modal = true;
        },
        deleteItem: function deleteItem(trowIndex) {
            var _this = this;
            var cateId = _this.table_options.trow_list[trowIndex].cate_id;
            var data = {
                cateId: cateId
            };
            EB.ajax({
                url: '/api/admin/deleteCategory',
                data: data,
                method: 'post',
                success: function success(res) {
                    _this.getInitData();
                },
                error: function error(err) {
                    console.log(err);
                }
            });
        },
        getInitData: function getInitData() {
            var _this = this;
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success: function success(res) {
                    _this.table_options.trow_list = res.data;
                },
                error: function error(err) {
                    console.log(err);
                }
            });
        },
        add: function add(obj) {
            var _this = this;
            var data = {};
            for (var item in obj) {
                if (obj[item] instanceof Array) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = obj[item][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var key = _step2.value;

                            data[key.header] = key.value;
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }
            var ajaxData = {
                cateName: data.cate_name,
                brandName: data.brand_name,
                brandIntro: data.brand_intro,
                isShow: data.is_show ? '1' : '0'
            };
            EB.ajax({
                url: '/api/admin/addCategory',
                data: ajaxData,
                method: 'post',
                success: function success(res) {
                    _this.getInitData();
                }
            });
        },
        edit: function edit(obj) {
            var _this = this;
            var data = {};
            for (var item in obj) {
                if (obj[item] instanceof Array) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = obj[item][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var key = _step3.value;

                            data[key.header] = key.value;
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
            }
            // 编辑api
        }
    }
});

/***/ }),

/***/ "yAOn":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"clearfix\">\n    <div class=\"header-left\">\n        <a href=\"#\">Admin</a>\n    </div>\n    <div class=\"header-right\">\n        <ul>\n            <li>消息</li>\n            <li>设置</li>\n        </ul>\n    </div>\n</header>";

/***/ })

/******/ });