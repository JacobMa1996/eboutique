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

module.exports = "<div class=\"v-table\">\r\n  <h3>{{options.title}}</h3>\r\n  <table class=\"table table-striped table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th v-for=\"(thead, index) in options.thead_list\" :key=\"index\">{{thead.text}}</th>\r\n        <th>操作</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr v-for=\"(trow, trowIndex) in options.trow_list\" :key=\"trow[options.key_id]\">\r\n        <th scope=\"row\">{{ trowIndex + 1 }}</th>\r\n        <td v-for=\"(thead, tdataIndex) in options.thead_list\">\r\n          {{trow[thead.header]}}\r\n        </td>\r\n        <td>\r\n          <a @click=\"showPop(trow)\" href=\"javascript:void(0);\">编辑</a>\r\n          <a @click=\"deleteItem(trowIndex)\" href=\"javascript:void(0);\">删除</a>\r\n        </td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>";

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

module.exports = "<a :href=\"href\" :target=\"target || _blank\" :class=\"['v-btn', display_type]\" @click=\"click()\">{{display_text}}</a>\r\n";

/***/ }),

/***/ "IKnA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IoXs":
/***/ (function(module, exports) {

module.exports = "<form class=\"v-form\">\r\n    <div class=\"\" v-if=\"options.tip\">{{options.tip}}</div>\r\n    <input type=\"hidden\" v-for=\"(item, index) in options.key_id\" :key=\"item.key_id\">\r\n    <div class=\"form-group\" v-for=\"(item, index) in options.input_list\" :key=\"item.header\">\r\n        <label :for=\"item.header\">{{item.label}}</label>\r\n        <input :type=\"item.type\" class=\"form-control\" :id=\"item.header\" :placeholder=\"item.placeholder\" v-model=\"item.value\">\r\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n    </div>\r\n    <div class=\"form-group\" v-for=\"(item, index) in options.textarea_list\" :key=\"item.header\">\r\n        <label :for=\"item.header\">{{item.label}}</label>\r\n        <textarea class=\"form-control\" :id=\"item.header\" :rows=\"item.rows\" v-model=\"item.value\" :placeholder=\"item.placeholder\"></textarea>\r\n    </div>\r\n    <div class=\"form-group form-check\" v-for=\"(item, index) in options.check_list\" :key=\"item.header\">\r\n        <input type=\"checkbox\" class=\"form-check-input\" :id=\"item.header\" v-model=\"item.value\">\r\n        <label class=\"form-check-label\" :for=\"item.header\">{{item.label}}</label>\r\n    </div>\r\n    <button v-if=\"options.button\" @click=\"click\" type=\"button\" class=\"btn btn-primary\">{{options.button.label}}</button>\r\n</form>";

/***/ }),

/***/ "OLaw":
/***/ (function(module, exports) {

module.exports = "<div class=\"v-pop\" v-if=\"options.modal\">\r\n    <!-- Modal -->\r\n    <div class=\"modal-backdrop fade show\"></div>\r\n    <div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">\r\n                        {{options.pop_title}}\r\n                    </h5>\r\n                    <button @click=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <v-form :options=\"options.form_options\"></v-form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button @click=\"close()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">关闭</button>\r\n                    <button @click=\"submit()\" type=\"button\" class=\"btn btn-primary\">保存</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

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

module.exports = "<div class=\"category\">\r\n    <!-- <form class=\"v-form\">\r\n        <div class=\"form-group\">\r\n            <label for=\"cate-name\">分类名称</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cate-name\" placeholder=\"请输入分类名称\" v-model=\"cate_name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"brand-name\">品牌名称</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"brand-name\" placeholder=\"请输入分类名称\" v-model=\"brand_name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"brand-intro\">品牌介绍</label>\r\n            <textarea class=\"form-control\" rows=\"3\" id=\"brand-intro\" placeholder=\"请输入分类名称\" v-model=\"brand_intro\"></textarea>\r\n        </div>\r\n        <div class=\"form-group form-check\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"is-show\" v-model=\"is_show\">\r\n            <label class=\"form-check-label\" for=\"is-show\">是否显示</label>\r\n        </div>\r\n        <div class=\"form-group form-button\"><button @click=\"submit\" type=\"button\" class=\"btn btn-primary\">添加</button></div>\r\n    </form> -->\r\n    <v-form :options=\"form_options\" @submit=\"add\"></v-form>\r\n    <v-table :options=\"table_options\" @show_pop=\"showPop\" @delete_item=\"deleteItem\"></v-table>\r\n    <v-pop :options=\"pop_options\" @submit=\"edit\"></v-pop>\r\n</div>";

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
                key_id: _this.key_id,
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
                key_id: 'cate_id',
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
                    key_id: [{
                        header: 'cate_id',
                        value: ''
                    }],
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
                    console.log(res);
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
                },
                error: function error(err) {
                    console.log(err);
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
            console.log(data);
            // 编辑api
            EB.ajax({
                url: '/api/admin/updateCagetory',
                data: data,
                method: 'post',
                success: function success(res) {
                    _this.getInitData();
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