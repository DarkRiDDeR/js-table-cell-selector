(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParentTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getElementsByTagNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return off; });
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);


var getParentTags = function getParentTags(elem, list) {
  var tagNames = list.toLowerCase().split(',').map(function (e) {
    return e.trim();
  });
  if (tagNames.indexOf(elem.tagName.toLowerCase()) > -1) return elem;

  for (; elem && elem !== document; elem = elem.parentNode) {
    if (tagNames.indexOf(elem.tagName.toLowerCase()) > -1) return elem;
  }

  return null;
};
var isElement = function isElement(elem) {
  return elem instanceof Element || elem instanceof HTMLDocument;
};
/**
 * get elements by tag names. Function: getElementsByTagNames(list [,obj])
 * @param list of tag names. Example "td, th"
 * @param obj - parent element
 * @returns array elements
 */

var getElementsByTagNames = function getElementsByTagNames(list, obj) {
  if (!obj) obj = document;
  var tagNames = list.split(',');
  var resultArray = new Array();

  for (var i = 0; i < tagNames.length; i++) {
    var tags = obj.getElementsByTagName(tagNames[i].trim());

    for (var j = 0; j < tags.length; j++) {
      resultArray.push(tags[j]);
    }
  }

  var testNode = resultArray[0];
  if (!testNode) return [];

  if (testNode.sourceIndex) {
    resultArray.sort(function (a, b) {
      return a.sourceIndex - b.sourceIndex;
    });
  } else if (testNode.compareDocumentPosition) {
    resultArray.sort(function (a, b) {
      return 3 - (a.compareDocumentPosition(b) & 6);
    });
  }

  return resultArray;
};
var on = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
var off = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gOptions", function() { return _gOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableCellSelector; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _lib_sheetclip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27);







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var _gOptions = {
  deselectOutTableClick: true,
  enableChanging: false,
  enableHotkeys: true,
  getCellFn: function getCellFn(cell, coord) {
    return cell.innerText;
  },
  ignoreClass: 'tcs-ignore',
  ignoreTfoot: false,
  ignoreThead: false,
  //TODO: mergePasting: true,
  mergePastingGlue: ' ',
  mouseBlockSelection: true,
  onSelect: function onSelect(e, cell) {},
  onStartSelect: function onStartSelect(e, cell) {},
  onFinishSelect: function onFinishSelect(e) {},
  selectIgnoreClass: true,
  selectClass: 'tcs-select',
  setCellFn: function setCellFn(cell, data, coord) {
    cell.innerText = data;
  },
  tableClass: 'tcs' // class added to table
  //frozen option:  usingSizeMatrix: true, // !!! for tables with merged cells, enabling is mandatory. Shutdown optimizes performance for simple tables.

};

var TableCellSelector =
/*#__PURE__*/
function () {
  function TableCellSelector(table, options, buffer) {
    var _this = this;

    _classCallCheck(this, TableCellSelector);

    _defineProperty(this, "enableChanging", void 0);

    _defineProperty(this, "enableHotkeys", void 0);

    _defineProperty(this, "obActions", void 0);

    _defineProperty(this, "obBuffer", void 0);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "obTable", void 0);

    _defineProperty(this, "_onKeyDown", function (e) {
      return _this.onKeyDown(e);
    });

    if (_typeof(options) === "object") _extends(_gOptions, options);
    this.enableChanging = _gOptions.enableChanging;
    this.enableHotkeys = _gOptions.enableHotkeys;
    this.obSelector = new _selector__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"](table);
    this.obTable = new _table__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](table, this.obSelector, this);
    this.obTable.onStartSelect = _gOptions.onStartSelect;
    this.obTable.onFinishSelect = _gOptions.onFinishSelect;
    this.obTable.onSelect = _gOptions.onSelect;
    this.obActions = new _actions__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.obSelector);
    this.obBuffer = buffer;
    Object(_dom__WEBPACK_IMPORTED_MODULE_9__[/* on */ "e"])(document.body, "keydown", this._onKeyDown);
  }

  _createClass(TableCellSelector, [{
    key: "clear",

    /**
     * clear ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */
    value: function clear(c1, c2) {
      if (c1 === undefined) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;

        var _coords = _slicedToArray(coords, 2);

        c1 = _coords[0];
        c2 = _coords[1];
      }

      if (c2 !== undefined) {
        var _this$normalizeCoords = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords2 = _slicedToArray(_this$normalizeCoords, 2);

        c1 = _this$normalizeCoords2[0];
        c2 = _this$normalizeCoords2[1];
      } else c2 = c1 = this.normalizeCoords(c1);

      this.obActions.clear(c1, c2);
      return true;
    }
    /**
     * copy ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {array[][] | false}
     */

  }, {
    key: "copy",
    value: function copy(c1, c2) {
      if (c1 === undefined) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;

        var _coords2 = _slicedToArray(coords, 2);

        c1 = _coords2[0];
        c2 = _coords2[1];
      }

      if (c2 !== undefined) {
        var _this$normalizeCoords3 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords4 = _slicedToArray(_this$normalizeCoords3, 2);

        c1 = _this$normalizeCoords4[0];
        c2 = _this$normalizeCoords4[1];
      } else c2 = c1 = this.normalizeCoords(c1);

      var data = this.obActions.copy(c1, c2);

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_10__[/* SheetClip */ "a"].stringify(data);
        this.obBuffer.copy(str);
      }

      return data;
    }
    /**
     * cut ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {array[][] | false}
     */

  }, {
    key: "cut",
    value: function cut(c1, c2) {
      if (c1 === undefined) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* isEmpty */ "c"])(coords)) return false;

        var _coords3 = _slicedToArray(coords, 2);

        c1 = _coords3[0];
        c2 = _coords3[1];
      }

      if (c2 !== undefined) {
        var _this$normalizeCoords5 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords6 = _slicedToArray(_this$normalizeCoords5, 2);

        c1 = _this$normalizeCoords6[0];
        c2 = _this$normalizeCoords6[1];
      } else c2 = c1 = this.normalizeCoords(c1);

      var data = this.obActions.cut(c1, c2);

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_10__[/* SheetClip */ "a"].stringify(data);
        this.obBuffer.copy(str);
      }

      return data;
    }
    /**
     *
     * @returns {number}
     */

  }, {
    key: "deselect",
    value: function deselect() {
      return this.obSelector.deselectAll();
    }
    /**
     *
     * @returns {array[] | false}
     */

  }, {
    key: "getCoords",
    value: function getCoords() {
      return this.obSelector.getSelectedRectangleCoords();
    }
    /**
     * initialize or re-initialize the size matrix
     */

  }, {
    key: "initSizeMatrix",
    value: function initSizeMatrix() {
      this.obSelector.initSizeMatrix();
    }
    /**
     * (c1 [, c2])
     * @param c1
     * @param c2
     * @returns {array[][] or array[]}
     */

  }, {
    key: "normalizeCoords",
    value: function normalizeCoords(c1, c2) {
      // normalize
      c1[0] = parseInt(c1[0]) || 0;
      c1[1] = parseInt(c1[1]) || 0;

      if (c2 === undefined) {
        return c1;
      } else {
        c2[0] = parseInt(c2[0]) || 0;
        c2[1] = parseInt(c2[1]) || 0;
        var temp;

        if (c1[0] > c2[0]) {
          temp = c2[0];
          c2[0] = c1[0];
          c1[0] = temp;
        }

        if (c1[1] > c2[1]) {
          temp = c2[1];
          c2[1] = c1[1];
          c1[1] = temp;
        }

        return [c1, c2];
      } // throw new Error("Invalid coordinate");

    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this2 = this;

      if (!this.enableHotkeys) return;
      e = e || window.event;
      var key = e.which || e.keyCode; // keyCode detection

      var ctrl = e.ctrlKey ? e.ctrlKey : key === 17; // ctrl detection

      if (this.obTable.isMouse && ctrl) {
        switch (key) {
          case 65:
            // a
            e.preventDefault();
            this.selectAll();
            break;

          case 67:
            // c
            this.copy();
            break;

          case 86:
            // v
            if (!this.enableChanging) break;

            if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]) {
              this.obBuffer.paste(function (str) {
                _this2.paste(_lib_sheetclip__WEBPACK_IMPORTED_MODULE_10__[/* SheetClip */ "a"].parse(str));
              });
            }

            break;

          case 88:
            // x
            if (!this.enableChanging) break;
            this.cut();
            break;

          case 46: // delete

          case 8:
            // backspase
            if (!this.enableChanging) break;
            this.clear();
            break;
        }
      }
    }
  }, {
    key: "paste",

    /**
     * paste (data [, c1 [, c2]])
     * @param data - array[][]
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */
    value: function paste(data, c1, c2) {
      if (c1 === undefined) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;
        c1 = this.normalizeCoords(coords[0]);
      } else if (c2 !== undefined) {
        var _this$normalizeCoords7 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords8 = _slicedToArray(_this$normalizeCoords7, 2);

        c1 = _this$normalizeCoords8[0];
        c2 = _this$normalizeCoords8[1];

        var _this$obSelector$getR = this.obSelector.getRectangleCoords(c1, c2);

        var _this$obSelector$getR2 = _slicedToArray(_this$obSelector$getR, 2);

        c1 = _this$obSelector$getR2[0];
        c2 = _this$obSelector$getR2[1];
      }

      this.obActions.paste(data, c1, c2);
      return true;
    }
    /**
     * select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */

  }, {
    key: "select",
    value: function select(c1, c2) {
      this.obSelector.deselectAll();

      if (c2 !== undefined) {
        var _this$normalizeCoords9 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords10 = _slicedToArray(_this$normalizeCoords9, 2);

        c1 = _this$normalizeCoords10[0];
        c2 = _this$normalizeCoords10[1];
      } else {
        c1 = this.normalizeCoords(c1);
      }

      return this.obSelector.select(c1, c2);
    }
    /**
     *
     * @returns {number}
     */

  }, {
    key: "selectAll",
    value: function selectAll() {
      return this.obSelector.selectAll();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object(_dom__WEBPACK_IMPORTED_MODULE_9__[/* off */ "d"])(document.body, "keydown", this._onKeyDown);
      this.deselect();
      this.obTable.destroy();
      delete this.obActions, this.obBuffer, this.obSelector, this.obTable, this;
    }
  }, {
    key: "onStartSelect",
    set: function set(fn) {
      this.obTable.onStartSelect = fn;
    }
  }, {
    key: "onSelect",
    set: function set(fn) {
      this.obTable.onSelect = fn;
    }
  }, {
    key: "onFinishSelect",
    set: function set(fn) {
      this.obTable.onFinishSelect = fn;
    }
  }], [{
    key: "Buffer",
    get: function get() {
      return _buffer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
    }
  }]);

  return TableCellSelector;
}();


global.TableCellSelector = TableCellSelector;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeClass; });
var isEmpty = function isEmpty(value) {
  return value == null || value.length === 0;
};
var addClass = function addClass(elem, name) {
  elem.classList.add(name);
};
var hasClass = function hasClass(elem, name) {
  return elem.classList.contains(name);
};
var removeClass = function removeClass(elem, name) {
  elem.classList.remove(name);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(19);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(62);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var hide = __webpack_require__(6);
var has = __webpack_require__(8);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(19).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(43);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buffer; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Buffer =
/*#__PURE__*/
function () {
  function Buffer(container) {
    var _this = this;

    _classCallCheck(this, Buffer);

    _defineProperty(this, "fakeElem", void 0);

    _defineProperty(this, "_onScroll", function (e) {
      return _this.onScroll(e);
    });

    _defineProperty(this, "_text", void 0);

    this.container = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* isElement */ "c"])(container) ? container : document.body;
    this.initSelectFake();
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* on */ "e"])(window, "scroll", this._onScroll);
  }
  /**
   * Executes the copy operation based on the current selection.
   */


  _createClass(Buffer, [{
    key: "copy",
    value: function copy(text) {
      try {
        this._text = text;
        this.fakeElem.value = text;
        this.fakeElem.select();
        this.fakeElem.setSelectionRange(0, text.length);
        return document.execCommand("cut");
      } catch (err) {
        return false;
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */

  }, {
    key: "initSelectFake",
    value: function initSelectFake() {
      var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
      this.container.appendChild(this.fakeElem);
    }
  }, {
    key: "onScroll",
    value: function onScroll(e) {
      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = yPosition + "px";
    }
    /**
     * Can only be called when the combination is pressed Ctrl + V
     * @returns {string}
     */

  }, {
    key: "paste",
    value: function paste(callback) {
      var _this2 = this;

      this.fakeElem.value = "";
      this.fakeElem.focus();

      var onInput = function onInput(e) {
        _this2._text = e.target.value;

        _this2.fakeElem.blur();

        Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* off */ "d"])(_this2.fakeElem, "input", onInput);
        callback(_this2._text);
      };

      Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* on */ "e"])(this.fakeElem, "input", onInput);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.removeChild(this.fakeElem);
      this.fakeElem = null;
      Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* off */ "d"])(window, "scroll", this._onScroll);
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    }
  }]);

  return Buffer;
}();



/***/ }),
/* 19 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetClip; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);



/**
 * SheetClip - Spreadsheet Clipboard Parser
 * version 0.2
 *
 * This tiny library transforms JavaScript arrays to strings that are pasteable by LibreOffice, OpenOffice,
 * Google Docs and Microsoft Excel.
 *
 * Copyright 2012, Marcin Warpechowski
 * Licensed under the MIT license.
 * http://github.com/warpech/sheetclip/
 */

/**
 * js-table-cell-selector
 * jslint white: true
 * to ES6 module
 */
function countQuotes(str) {
  return str.split('"').length - 1;
}

var SheetClip = {
  parse: function parse(str) {
    var r,
        rlen,
        rows,
        arr = [],
        a = 0,
        c,
        clen,
        multiline,
        last;
    rows = str.split('\n');

    if (rows.length > 1 && rows[rows.length - 1] === '') {
      rows.pop();
    }

    for (r = 0, rlen = rows.length; r < rlen; r += 1) {
      rows[r] = rows[r].split('\t');

      for (c = 0, clen = rows[r].length; c < clen; c += 1) {
        if (!arr[a]) {
          arr[a] = [];
        }

        if (multiline && c === 0) {
          last = arr[a].length - 1;
          arr[a][last] = arr[a][last] + '\n' + rows[r][0];

          if (multiline && countQuotes(rows[r][0]) & 1) {
            //& 1 is a bitwise way of performing mod 2
            multiline = false;
            arr[a][last] = arr[a][last].substring(0, arr[a][last].length - 1).replace(/""/g, '"');
          }
        } else {
          if (c === clen - 1 && rows[r][c].indexOf('"') === 0 && countQuotes(rows[r][c]) & 1) {
            arr[a].push(rows[r][c].substring(1).replace(/""/g, '"'));
            multiline = true;
          } else {
            arr[a].push(rows[r][c].replace(/""/g, '"'));
            multiline = false;
          }
        }
      }

      if (!multiline) {
        a += 1;
      }
    }

    return arr;
  },
  stringify: function stringify(arr) {
    var r,
        rlen,
        c,
        clen,
        str = '',
        val;

    for (r = 0, rlen = arr.length; r < rlen; r += 1) {
      for (c = 0, clen = arr[r].length; c < clen; c += 1) {
        if (c > 0) {
          str += '\t';
        }

        val = arr[r][c];

        if (typeof val === 'string') {
          if (val.indexOf('\n') > -1) {
            str += '"' + val.replace(/"/g, '""') + '"';
          } else {
            str += val;
          }
        } else if (val === null || val === void 0) {
          //void 0 resolves to undefined
          str += '';
        } else {
          str += val;
        }
      }

      str += '\n';
    }

    return str;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(19);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(82);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(59);
var getKeys = __webpack_require__(16);
var redefine = __webpack_require__(15);
var global = __webpack_require__(4);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(30);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(40)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(64);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(40)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(66).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(65)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46)('asyncIterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(19);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(11);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(15);
var META = __webpack_require__(70).KEY;
var $fails = __webpack_require__(5);
var shared = __webpack_require__(28);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(14);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(46);
var enumKeys = __webpack_require__(71);
var isArray = __webpack_require__(72);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(21);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(73);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(43);
var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(13);

$export($export.P, 'Array', { fill: __webpack_require__(75) });

__webpack_require__(38)('fill');


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(78);
var anObject = __webpack_require__(7);
var speciesConstructor = __webpack_require__(79);
var advanceStringIndex = __webpack_require__(52);
var toLength = __webpack_require__(24);
var callRegExpExec = __webpack_require__(53);
var regexpExec = __webpack_require__(36);
var fails = __webpack_require__(5);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(54)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(80)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(81);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(83);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(6);
var fails = __webpack_require__(5);
var defined = __webpack_require__(23);
var wks = __webpack_require__(3);
var regexpExec = __webpack_require__(36);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Actions =
/*#__PURE__*/
function () {
  function Actions(obSelector) {
    _classCallCheck(this, Actions);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "table", void 0);

    this.obSelector = obSelector;
    this.table = this.obSelector.table;
  }
  /**
   * Function: copy (c1, c2)
   * @param c1
   * @param c2
   * @returns {array[][]}
   */


  _createClass(Actions, [{
    key: "copy",
    value: function copy(c1, c2) {
      var ar = Array(c2[0] - c1[0] + 1).fill().map(function () {
        return Array(c2[1] - c1[1] + 1);
      });
      this.iterateCells(c1, c2, function (iy, ix, cell) {
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].getCellFn(cell, [iy, ix]);
      });
      return ar;
    }
    /**
     * Function: clear (c1, c2)
     * @param c1
     * @param c2
     */

  }, {
    key: "clear",
    value: function clear(c1, c2) {
      var _this = this;

      this.iterateCells(c1, c2, function (iy, ix, cell) {
        if (!_this.obSelector.isIgnoredCell(cell)) {
          _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].setCellFn(cell, "", [iy, ix]);
        }
      });
    }
    /**
     * Function: cut (c1, c2)
     * @param c1
     * @param c2
     * @returns {array[][]}
     */

  }, {
    key: "cut",
    value: function cut(c1, c2) {
      var _this2 = this;

      var ar = Array(c2[0] - c1[0] + 1).fill().map(function () {
        return Array(c2[1] - c1[1] + 1);
      });
      this.iterateCells(c1, c2, function (iy, ix, cell) {
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].getCellFn(cell, [iy, ix]);

        if (!_this2.obSelector.isIgnoredCell(cell)) {
          _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].setCellFn(cell, "", [iy, ix]);
        }
      });
      return ar;
    }
  }, {
    key: "iterateCells",
    value: function iterateCells(c1, c2, callbackFn) {
      var matrix = this.obSelector.sizeMatrix;
      var rows = this.table.getElementsByTagName("tr");

      for (var iy = c1[0]; iy <= c2[0]; iy++) {
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_2__[/* getElementsByTagNames */ "a"])("td,th", rows[iy]);

        for (var ix = c1[1]; ix <= c2[1]; ix++) {
          if (!(matrix[iy][ix][0] < 0) && !(matrix[iy][ix][1] < 0)) {
            callbackFn(iy, ix, cells[matrix[iy][ix][2]]);
          }
        }
      }
    }
  }, {
    key: "mergeWithCell",
    value: function mergeWithCell(cell, data, coord) {
      var cellVal = _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].getCellFn(cell, coord).trim();

      if (cellVal === "") cellVal = data;else if (data !== "") cellVal += _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].mergePastingGlue + data;

      _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].setCellFn(cell, cellVal, coord);
    }
  }, {
    key: "paste",
    value: function paste(data, c1, c2) {
      var matrix = this.obSelector.sizeMatrix;
      var rows = this.table.getElementsByTagName("tr");
      var countR = this.obSelector.countRows;
      var countC = this.obSelector.countCols;
      var maxY = c1[0] + data.length;
      if (maxY > countR) maxY = countR;
      if (c2 !== undefined && maxY > c2[0]) maxY = c2[0] + 1;

      for (var iy = c1[0]; iy < maxY; iy++) {
        var maxX = c1[1] + data[iy - c1[0]].length;
        if (maxX > countC) maxX = countC;
        if (c2 !== undefined && maxX > c2[1]) maxX = c2[1] + 1;
        var cellFn = void 0;

        for (var ix = c1[1]; ix < maxX; ix++) {
          var y = iy;
          var x = ix;

          if (matrix[iy][ix][1] < 0 || matrix[iy][ix][0] < 0) {
            if (matrix[iy][ix][0] < 0) y += matrix[iy][ix][0];
            if (matrix[iy][ix][1] < 0) x += matrix[iy][ix][1];
            if (y < c1[0] || x < c1[1]) continue;
            cellFn = this.mergeWithCell;
          } else {
            cellFn = _app__WEBPACK_IMPORTED_MODULE_1__["_gOptions"].setCellFn;
          }

          var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_2__[/* getElementsByTagNames */ "a"])("td,th", rows[y])[matrix[y][x][2]];

          if (!this.obSelector.isIgnoredCell(cell)) {
            cellFn(cell, data[iy - c1[0]][ix - c1[1]], [y, x]);
          }
        }
      }
    }
  }]);

  return Actions;
}();



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selector; });
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Selector =
/*#__PURE__*/
function () {
  function Selector(table) {
    _classCallCheck(this, Selector);

    _defineProperty(this, "_countCols", 0);

    _defineProperty(this, "_countRows", 0);

    _defineProperty(this, "_table", void 0);

    _defineProperty(this, "matrix", void 0);

    this._table = table;
    /*if (_gOptions.usingSizeMatrix) */

    this.initSizeMatrix();
  }

  _createClass(Selector, [{
    key: "deselectCell",
    value: function deselectCell(cell) {
      Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* removeClass */ "d"])(cell, _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].selectClass);
    }
  }, {
    key: "deselectAll",
    value: function deselectAll() {
      var length = 0;
      var list = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td,th", this.table);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cell = _step.value;

          if (this.isSelectedCell(cell)) {
            this.deselectCell(cell);
            length++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return length;
    }
    /**
     *
     * @param c - coordinate cell. Example [0, 0]
     */

  }, {
    key: "getCell",
    value: function getCell(c) {
      if (c[0] >= 0 && c[1] >= 0) {
        //if (_gOptions.usingSizeMatrix) {
        if (c[0] < this.countRows && c[1] < this.countCols) {
          if (this.matrix[c[0]][c[1]][0] < 0) c[0] += this.matrix[c[0]][c[1]][0];
          if (this.matrix[c[0]][c[1]][1] < 0) c[1] += this.matrix[c[0]][c[1]][1];
          var row = this.table.getElementsByTagName("tr")[c[0]];
          return Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td,th", row)[this.matrix[c[0]][c[1]][2]];
        }
        /*} else {
            let rows = this.table.getElementsByTagName("tr");
            for (let iy = 0; iy < rows.length; iy++) {
                if (c[0] != iy) continue;
                let cols = rows[iy].getElementsByTagName("td");
                for (let ix = 0; ix < cols.length; ix++) {
                    if (c[1] != ix) continue;
                    return cols[ix];
                }
            }
        }*/

      }
    }
  }, {
    key: "getSelectedRectangleCoords",

    /**
     * get coords of selected cells
     * @returns array [[0, 0], [1, 1]] or false
     */
    value: function getSelectedRectangleCoords() {
      var isSelected = false;
      var c1 = Array(2);
      var c2 = Array(2); //if (_gOptions.usingSizeMatrix) {
      // get extreme points

      var rows = this.table.getElementsByTagName("tr");

      for (var iy = 0; iy < this.countRows; iy++) {
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td,th", rows[iy]);

        for (var ix = 0; ix < this.countCols; ix++) {
          if (!(this.matrix[iy][ix][0] < 0) && !(this.matrix[iy][ix][1] < 0) && this.isSelectedCell(cells[this.matrix[iy][ix][2]])) {
            isSelected = true;
            if (c1[0] === undefined || c1[0] > iy) c1[0] = iy;
            if (c1[1] === undefined || c1[1] > ix) c1[1] = ix;
            if (c2[0] === undefined || c2[0] < iy) c2[0] = iy;
            if (c2[1] === undefined || c2[1] < ix) c2[1] = ix;
          }
        }
      }
      /*} else {
          let rows = this.table.getElementsByTagName("tr");
          for (let iy = 0; iy < rows.length; iy++) {
              let cols = rows[iy].getElementsByTagName("td");
              for (let ix = 0; ix < cols.length; ix++) {
                  if(this.isSelectedCell(cols[ix]))
                  {
                      isSelected = true;
                        if (c1[0] === undefined || iy < c1[0]) c1[0] = iy;
                      if (c2[0] === undefined || iy > c2[0]) c2[0] = iy;
                        if (c1[1] === undefined || ix < c1[1]) c1[1] = ix;
                      if (c2[1] === undefined || ix > c2[1]) c2[1] = ix;
                  }
              }
          }
      }*/


      return isSelected ? [c1, c2] : false;
    }
  }, {
    key: "getRectangleCoords",
    value: function getRectangleCoords(c1, c2) {
      // magic ))
      var loop = true;

      while (loop) {
        loop = false; // min y

        for (var iy = c1[0]; iy <= c1[0]; iy++) {
          for (var ix = c1[1]; ix <= c2[1]; ix++) {
            if (this.matrix[iy][ix][0] !== undefined && this.matrix[iy][ix][0] < 0) {
              c1[0] += this.matrix[iy][ix][0];
              iy += this.matrix[iy][ix][0] - 1;
              loop = true;
              break;
            }
          }
        } // max y


        for (var _iy = c2[0]; _iy <= c2[0]; _iy++) {
          if (c2[0] + 1 == this.countRows) continue;

          for (var _ix = c1[1]; _ix <= c2[1]; _ix++) {
            if (this.matrix[_iy][_ix][0] !== undefined && this.matrix[_iy + 1][_ix][0] < 0) {
              c2[0]++;
              loop = true;
              break;
            }
          }
        } // min x


        for (var _iy2 = c1[0]; _iy2 <= c2[0]; _iy2++) {
          if (this.matrix[_iy2][c1[1]][1] < 0) {
            c1[1] += this.matrix[_iy2][c1[1]][1];
            _iy2 = c1[0] - 1;
            loop = true; // break;
          }
        } // max x


        for (var _iy3 = c1[0]; _iy3 <= c2[0]; _iy3++) {
          if (c2[1] + 1 == this.countCols) continue;

          if (this.matrix[_iy3][c2[1] + 1][1] < 0) {
            c2[1]++;
            _iy3 = c1[0] - 1;
            loop = true; // break;
          }
        }
      }

      return [c1, c2];
    }
  }, {
    key: "initSizeMatrix",
    value: function initSizeMatrix() {
      var _this = this;

      var rows = this.table.getElementsByTagName("tr");
      this._countRows = rows.length;
      this._countCols = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;
          var length = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td, th", row).length;

          if (length > this.countCols) {
            this._countCols = length;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.matrix = Array(this.countRows).fill().map(function () {
        return Array(_this.countCols).fill().map(function () {
          return Array(2);
        });
      });
      var rowCrest = new Array(this.countCols).fill(0);
      var iy = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var row = _step3.value;
          var ix = 0;
          var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td, th", row);

          var crestFn = function crestFn() {
            while (ix < _this.countCols && rowCrest[ix]) {
              rowCrest[ix]--;
              _this.matrix[iy][ix][0] = _this.matrix[iy - 1][ix][0] || 0 - 1;
              _this.matrix[iy][ix][1] = _this.matrix[iy - 1][ix][1];
              ix++;
            }
          };

          for (var itd = 0; itd < cells.length; itd++) {
            var cell = cells[itd];
            var colspan = cell.getAttribute("colspan");
            var rowspan = cell.getAttribute("rowspan");
            if (rowspan > 1) _this.matrix[iy][ix][0] = 0;
            if (colspan > 1) _this.matrix[iy][ix][1] = 0;
            crestFn();

            try {
              if (colspan > 1) {
                _this.matrix[iy][ix][2] = itd;

                for (var i = 0; i > -colspan; i--) {
                  _this.matrix[iy][ix][1] = i;
                  if (rowspan > 1) rowCrest[ix] = rowspan - 1;
                  ix++;
                }
              } else {
                _this.matrix[iy][ix][2] = itd;
                if (rowspan > 1) rowCrest[ix] = rowspan - 1;
                ix++;
              }
            } catch (e) {
              console.error("Error: going beyond the size matrix. " + e);
            }
          }

          crestFn();
          iy++;
        };

        for (var _iterator3 = rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "isIgnoredCell",
    value: function isIgnoredCell(cell) {
      var ppn = cell.parentNode.parentNode;
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].ignoreClass) // td
      || Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* hasClass */ "b"])(cell.parentNode, _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].ignoreClass) // tr
      || _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].ignoreThead && ppn.tagName === "THEAD" || _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].ignoreTfoot && ppn.tagName === "TFOOT";
    }
  }, {
    key: "isSelectedCell",
    value: function isSelectedCell(cell) {
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].selectClass);
    }
    /**
     * select cells. Fn: select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */

  }, {
    key: "select",
    value: function select(c1, c2) {
      if (c2 === undefined || c1[0] == c2[0] && c1[1] == c2[1]) {
        // normalize
        var cell = this.getCell(c1);

        if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* isEmpty */ "c"])(cell)) {
          return this.selectCell(cell);
        }
      } else {
        var isSelected = false; //if (_gOptions.usingSizeMatrix) {

        if (c1[0] >= this.countRows || c1[1] >= this.countCols || c2[0] < 0 || c2[1] < 0) return false;
        if (c1[0] < 0) c1[0] = 0;
        if (c1[1] < 0) c1[1] = 0;
        if (c2[0] >= this.countRows) c2[0] = this.countRows - 1;
        if (c2[1] >= this.countCols) c2[1] = this.countCols - 1;

        var _this$getRectangleCoo = this.getRectangleCoords(c1, c2);

        var _this$getRectangleCoo2 = _slicedToArray(_this$getRectangleCoo, 2);

        c1 = _this$getRectangleCoo2[0];
        c2 = _this$getRectangleCoo2[1];
        var rows = this.table.getElementsByTagName("tr");

        for (var iy = c1[0]; iy <= c2[0]; iy++) {
          var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td, th", rows[iy]);

          for (var ix = c1[1]; ix <= c2[1]; ix++) {
            if (!(this.matrix[iy][ix][0] < 0) && !(this.matrix[iy][ix][1] < 0)) {
              var result = this.selectCell(cells[this.matrix[iy][ix][2]]);
              if (!isSelected) isSelected = result;
            }
          }
        }
        /*} else {
              let rows = this.table.getElementsByTagName("tr");
            for (let iy = 0; iy < rows.length; iy++) {
                if (iy < c1[0] || iy > c2[0]) continue;
                let cols = rows[iy].getElementsByTagName("td");
                for (let ix = 0; ix < cols.length; ix++) {
                    if (ix < c1[1] || ix > c2[1]) continue;
                    let result = this.selectCell(cols[ix]);
                    if (!isSelected) isSelected = result;
                }
            }
        }*/


        return isSelected;
      }

      return false;
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var length = 0;
      var list = Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* getElementsByTagNames */ "a"])("td, th", this.table);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var cell = _step4.value;

          if (this.selectCell(cell)) {
            length++;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return length;
    }
  }, {
    key: "selectCell",
    value: function selectCell(cell) {
      if (_app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].selectIgnoreClass || !this.isIgnoredCell(cell)) {
        Object(_funcs__WEBPACK_IMPORTED_MODULE_6__[/* addClass */ "a"])(cell, _app__WEBPACK_IMPORTED_MODULE_4__["_gOptions"].selectClass);
        return true;
      }

      return false;
    }
  }, {
    key: "countCols",
    get: function get() {
      return this._countCols;
    }
  }, {
    key: "countRows",
    get: function get() {
      return this._countRows;
    }
  }, {
    key: "sizeMatrix",
    get: function get() {
      return this.matrix;
    }
  }, {
    key: "table",
    get: function get() {
      return this._table;
    }
  }]);

  return Selector;
}();



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Table =
/*#__PURE__*/
function () {
  // whether the left mouse button is pressed
  // html table
  function Table(table, obSelector, obApp) {
    var _this = this;

    _classCallCheck(this, Table);

    _defineProperty(this, "isMouseDown", false);

    _defineProperty(this, "obApp", void 0);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "onStartSelect", void 0);

    _defineProperty(this, "onSelect", void 0);

    _defineProperty(this, "onFinishSelect", void 0);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "_isMouse", false);

    _defineProperty(this, "_onMouseOver", function (e) {
      return _this.onMouseOver(e);
    });

    _defineProperty(this, "_onMouseDown", function (e) {
      return _this.onMouseDown(e);
    });

    _defineProperty(this, "_onMouseEnter", function (e) {
      return _this.onMouseEnter(e);
    });

    _defineProperty(this, "_onMouseLeave", function (e) {
      return _this.onMouseLeave(e);
    });

    _defineProperty(this, "_onMouseUp", function (e) {
      return _this.onMouseUp(e);
    });

    _defineProperty(this, "_onOutTableClick", function (e) {
      return _this.onOutTableClick(e);
    });

    if (Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* isElement */ "c"])(table) && table.tagName === "TABLE") {
      this.table = table; // DOM element table

      this.obApp = obApp;
      this.obSelector = obSelector;
      Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* addClass */ "a"])(this.table, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].tableClass);
      this.addEvents();
    } else {
      throw new Error("Мodule must be initialized to Table");
    }
  }

  _createClass(Table, [{
    key: "addEvents",
    value: function addEvents() {
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table, "mouseover", this._onMouseOver);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table, "mousedown", this._onMouseDown);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table, "mouseenter", this._onMouseEnter);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table, "mouseleave", this._onMouseLeave);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(document.body, "mouseup", this._onMouseUp);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table.ownerDocument, "click", this._onOutTableClick); // click outside the table
    }
  }, {
    key: "isRightMouseBtn",
    value: function isRightMouseBtn(e) {
      var isRightMB;
      e = e || window.event;
      if ("which" in e) // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3;else if ("button" in e) // IE, Opera
        isRightMB = e.button == 2;
      return isRightMB;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      if (_app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].mouseBlockSelection) e.preventDefault();
      if (this.isRightMouseBtn(e)) return true;
      var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getParentTags */ "b"])(e.target, "td,th");
      if (cell === null) return; // not for cell

      this.isMouseDown = true;
      this.obSelector.deselectAll();
      this.obSelector.selectCell(cell);
      this.onStartSelect(e, cell);
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      if (!this.isMouseDown) return false;
      var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getParentTags */ "b"])(e.target, "td,th");
      if (cell === null) return; // not for cell

      !this.obSelector.isSelectedCell(cell) && this.obSelector.selectCell(cell) && this.onSelect(e, cell); //magic selection

      var coords = this.obSelector.getSelectedRectangleCoords();
      if (coords !== false) this.obSelector.select(coords[0], coords[1]);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(e) {
      this._isMouse = true;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      this._isMouse = false;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (this.isMouseDown) this.onFinishSelect(e);
      this.isMouseDown = false;
    }
  }, {
    key: "onOutTableClick",
    value: function onOutTableClick(e) {
      this.isMouseDown = false;

      if (_app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].deselectOutTableClick && !this.isMouse) {
        this.obSelector.deselectAll();
      }
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table, "mouseover", this._onMouseOver);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table, "mousedown", this._onMouseDown);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table, "mouseenter", this._onMouseEnter);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table, "mouseleave", this._onMouseLeave);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(document.body, "mouseup", this._onMouseUp);
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table.ownerDocument, "click", this._onOutTableClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* removeClass */ "d"])(this.table, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].tableClass);
      this.removeEvents();
    }
  }, {
    key: "isMouse",
    get: function get() {
      return this._isMouse;
    }
  }]);

  return Table;
}();



/***/ }),
/* 58 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(38);
var step = __webpack_require__(60);
var Iterators = __webpack_require__(30);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(30);
var $iterCreate = __webpack_require__(63);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(67);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(24);
var toAbsoluteIndex = __webpack_require__(44);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(17);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(17);
var IObject = __webpack_require__(41);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(8);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(5)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(49).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(21);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(17);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(24);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(13);
var aFunction = __webpack_require__(31);
var toObject = __webpack_require__(17);
var fails = __webpack_require__(5);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(77)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(10);
var cof = __webpack_require__(22);
var MATCH = __webpack_require__(3)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(31);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(7);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(36);
__webpack_require__(13)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(7);
var toObject = __webpack_require__(17);
var toLength = __webpack_require__(24);
var toInteger = __webpack_require__(25);
var advanceStringIndex = __webpack_require__(52);
var regExpExec = __webpack_require__(53);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(54)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=tcs.bundle.js.map