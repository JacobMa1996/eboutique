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

/***/ "2r7+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('todo-item', {
    template: __webpack_require__("Gm95"),
    props: ['title']
});

/***/ }),

/***/ "4W77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('v-button', {
    template: __webpack_require__("LZrx"),
    data: function data() {
        return {
            display_text: '按钮'
        };
    }
});

/***/ }),

/***/ "Gm95":
/***/ (function(module, exports) {

module.exports = "<li>\r\n    {{ title }}\r\n    <button v-on:click=\"$emit('remove')\">X</button>\r\n</li>";

/***/ }),

/***/ "IXT4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "LZrx":
/***/ (function(module, exports) {

module.exports = "<div class=\"v-btn\">\r\n    <button v-if=\"\">{{display_text}}</button>\r\n</div>";

/***/ }),

/***/ "PYZg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("2r7+");
__webpack_require__("4W77");

/***/ }),

/***/ "uPCl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("IXT4");

__webpack_require__("/ikZ");

__webpack_require__("PYZg");

// new Vue({
//     el: '#todo-list-example',
//     data: {
//         newTodoText: '',
//         todos: [
//             {
//                 id: 1,
//                 title: 'Do the dishes',
//             },
//             {
//                 id: 2,
//                 title: 'Take out the trash',
//             },
//             {
//                 id: 3,
//                 title: 'Mow the lawn'
//             }
//         ],
//         nextTodoId: 4
//     },
//     methods: {
//         addNewTodo: function () {
//             this.todos.push({
//                 id: this.nextTodoId++,
//                 title: this.newTodoText
//             })
//             this.newTodoText = ''
//         }
//     }
// })

new Vue({
    el: '#div',
    data: function data() {
        return {};
    }
});

/***/ })

/******/ });