/*! This file is created by squirrel */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * Created by Administrator on 2017/6/5.\r\n */\n// Greeter.js\n/*\r\nmodule.exports = function() {\r\n    var greet = document.createElement('div');\r\n    greet.textContent = \"Hi there and greetings!\";\r\n    return greet;\r\n};\r\n\r\n*/\n\nvar config = __webpack_require__(2);\n\nmodule.exports = function () {\n    var greet = document.createElement('div');\n    greet.textContent = config.greetText;\n\n    var s = new Set();\n    var str = '';\n    [2, 3, 5, 4, 5, 2, 2].forEach(function (x) {\n        return s.add(x);\n    });\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var i = _step.value;\n\n            str = str + i;\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    greet.textContent = str;\n\n    return greet;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9lYjg0Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCIsInMiLCJTZXQiLCJzdHIiLCJmb3JFYWNoIiwiYWRkIiwieCIsImkiXSwibWFwcGluZ3MiOiI7O0FBQUE7OztBQUdBO0FBQ0E7Ozs7Ozs7OztBQVNBLElBQUlBLFNBQVMsbUJBQUFDLENBQVEsQ0FBUixDQUFiOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCLFlBQVc7QUFDeEIsUUFBSUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FGLFVBQU1HLFdBQU4sR0FBb0JQLE9BQU9RLFNBQTNCOztBQUVBLFFBQU1DLElBQUksSUFBSUMsR0FBSixFQUFWO0FBQ0EsUUFBSUMsTUFBSSxFQUFSO0FBQ0EsS0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQkMsT0FBdEIsQ0FBOEI7QUFBQSxlQUFLSCxFQUFFSSxHQUFGLENBQU1DLENBQU4sQ0FBTDtBQUFBLEtBQTlCO0FBTndCO0FBQUE7QUFBQTs7QUFBQTtBQU94Qiw2QkFBY0wsQ0FBZCw4SEFBaUI7QUFBQSxnQkFBUk0sQ0FBUTs7QUFDYkosa0JBQUlBLE1BQUlJLENBQVI7QUFDSDtBQVR1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVV4QlgsVUFBTUcsV0FBTixHQUFvQkksR0FBcEI7O0FBRUEsV0FBT1AsS0FBUDtBQUNILENBYkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy82LzUuXHJcbiAqL1xyXG4vLyBHcmVldGVyLmpzXHJcbi8qXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZ3JlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyZWV0LnRleHRDb250ZW50ID0gXCJIaSB0aGVyZSBhbmQgZ3JlZXRpbmdzIVwiO1xyXG4gICAgcmV0dXJuIGdyZWV0O1xyXG59O1xyXG5cclxuKi9cclxuXHJcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qc29uJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmVldC50ZXh0Q29udGVudCA9IGNvbmZpZy5ncmVldFRleHQ7XHJcblxyXG4gICAgY29uc3QgcyA9IG5ldyBTZXQoKTtcclxuICAgIHZhciBzdHI9Jyc7XHJcbiAgICBbMiwgMywgNSwgNCwgNSwgMiwgMl0uZm9yRWFjaCh4ID0+IHMuYWRkKHgpKTtcclxuICAgIGZvciAobGV0IGkgb2Ygcykge1xyXG4gICAgICAgIHN0cj1zdHIraTtcclxuICAgIH1cclxuICAgIGdyZWV0LnRleHRDb250ZW50ID0gc3RyO1xyXG5cclxuICAgIHJldHVybiBncmVldDtcclxufTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9HcmVldGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * Created by Administrator on 2017/6/5.\r\n */\n//main.js\nvar greeter = __webpack_require__(0);\ndocument.getElementById('root').appendChild(greeter());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImdyZWV0ZXIiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7QUFHQTtBQUNBLElBQUlBLFVBQVUsbUJBQUFDLENBQVEsQ0FBUixDQUFkO0FBQ0FDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLENBQTRDSixTQUE1QyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LzYvNS5cclxuICovXHJcbi8vbWFpbi5qc1xyXG52YXIgZ3JlZXRlciA9IHJlcXVpcmUoJy4vR3JlZXRlci5qcycpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZENoaWxkKGdyZWV0ZXIoKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"greetText\": \"Hi there and greetings from JSON!\"\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlnLmpzb24/NGU2OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdyZWV0VGV4dFwiOiBcIkhpIHRoZXJlIGFuZCBncmVldGluZ3MgZnJvbSBKU09OIVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbmZpZy5qc29uXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);