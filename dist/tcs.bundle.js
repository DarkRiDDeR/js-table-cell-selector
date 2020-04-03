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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);





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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeClass; });
var isEmpty = function isEmpty(value) {
  return value == null || value.length === 0;
};
var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};
var addClass = function addClass(elem, name) {
  elem && elem.classList && elem.classList.add(name);
};
var hasClass = function hasClass(elem, name) {
  return elem && elem.classList && elem.classList.contains(name);
};
var removeClass = function removeClass(elem, name) {
  elem && elem.classList && elem.classList.remove(name);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gOptions", function() { return _gOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableCellSelector; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(0);
/* harmony import */ var _lib_sheetclip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28);












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  onSelect: function onSelect(prevState, cell, coord) {},
  onDeselect: function onDeselect(cell, coord) {},
  onStartSelect: function onStartSelect(e, cell) {},
  onFinishSelect: function onFinishSelect(e) {},
  selectIgnoreClass: true,
  selectClass: 'tcs-select',
  setCellFn: function setCellFn(cell, data, coord) {
    cell.innerText = data;
  },
  tableClass: 'tcs' // class added to table

};

var TableCellSelector = /*#__PURE__*/function () {
  function TableCellSelector(table, options, buffer) {
    var _this = this;

    _classCallCheck(this, TableCellSelector);

    _defineProperty(this, "enableChanging", void 0);

    _defineProperty(this, "enableHotkeys", void 0);

    _defineProperty(this, "obActions", void 0);

    _defineProperty(this, "obBuffer", void 0);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "obEvent", void 0);

    _defineProperty(this, "obTable", void 0);

    _defineProperty(this, "_onKeyDown", function (e) {
      return _this.onKeyDown(e);
    });

    if (_typeof(options) === "object") _extends(_gOptions, options);
    this.enableChanging = _gOptions.enableChanging;
    this.enableHotkeys = _gOptions.enableHotkeys;
    this.obEvent = new _event__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]();
    this.obEvent.startSelect = _gOptions.onStartSelect;
    this.obEvent.finishSelect = _gOptions.onFinishSelect;
    this.obEvent.select = _gOptions.onSelect;
    this.obEvent.deselect = _gOptions.onDeselect;
    this.obSelector = new _selector__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](table, this.obEvent);
    this.obTable = new _table__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"](table, this.obSelector, this.obEvent, this);
    this.obActions = new _actions__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](this.obSelector);
    this.obBuffer = buffer;
    Object(_dom__WEBPACK_IMPORTED_MODULE_15__[/* on */ "e"])(document.body, "keydown", this._onKeyDown);
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
      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c1)) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;

        var _coords = _slicedToArray(coords, 2);

        c1 = _coords[0];
        c2 = _coords[1];
      }

      if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) {
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
      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c1)) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;

        var _coords2 = _slicedToArray(coords, 2);

        c1 = _coords2[0];
        c2 = _coords2[1];
      }

      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) c2 = c1 = this.normalizeCoords(c1);else {
        var _this$normalizeCoords3 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords4 = _slicedToArray(_this$normalizeCoords3, 2);

        c1 = _this$normalizeCoords4[0];
        c2 = _this$normalizeCoords4[1];
      }
      var data = this.obActions.copy(c1, c2);

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_16__[/* SheetClip */ "a"].stringify(data);
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
      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c1)) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isEmpty */ "c"])(coords)) return false;

        var _coords3 = _slicedToArray(coords, 2);

        c1 = _coords3[0];
        c2 = _coords3[1];
      }

      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) c2 = c1 = this.normalizeCoords(c1);else {
        var _this$normalizeCoords5 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords6 = _slicedToArray(_this$normalizeCoords5, 2);

        c1 = _this$normalizeCoords6[0];
        c2 = _this$normalizeCoords6[1];
      }
      var data = this.obActions.cut(c1, c2);

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_16__[/* SheetClip */ "a"].stringify(data);
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

      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) {
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

            if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]) {
              this.obBuffer.paste(function (str) {
                _this2.paste(_lib_sheetclip__WEBPACK_IMPORTED_MODULE_16__[/* SheetClip */ "a"].parse(str));
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
      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c1)) {
        var coords = this.obSelector.getSelectedRectangleCoords();
        if (coords === false) return false;
        c1 = this.normalizeCoords(coords[0]);
      } else if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) {
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

      if (Object(_funcs__WEBPACK_IMPORTED_MODULE_11__[/* isUndef */ "d"])(c2)) {
        c1 = this.normalizeCoords(c1);
      } else {
        var _this$normalizeCoords9 = this.normalizeCoords(c1, c2);

        var _this$normalizeCoords10 = _slicedToArray(_this$normalizeCoords9, 2);

        c1 = _this$normalizeCoords10[0];
        c2 = _this$normalizeCoords10[1];
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
      Object(_dom__WEBPACK_IMPORTED_MODULE_15__[/* off */ "d"])(document.body, "keydown", this._onKeyDown);
      this.deselect();
      this.obTable.destroy();
      delete this.obActions, this.obBuffer, this.obSelector, this.obTable, this;
    }
  }, {
    key: "onStartSelect",
    set: function set(fn) {
      this.obEvent.startSelect = fn;
    }
  }, {
    key: "onSelect",
    set: function set(fn) {
      this.obEvent.select = fn;
    }
  }, {
    key: "onFinishSelect",
    set: function set(fn) {
      this.obEvent.finishSelect = fn;
    }
  }], [{
    key: "Buffer",
    get: function get() {
      return _buffer__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"];
    }
  }]);

  return TableCellSelector;
}();


global.TableCellSelector = TableCellSelector;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var shared = __webpack_require__(34);
var has = __webpack_require__(6);
var uid = __webpack_require__(35);
var NATIVE_SYMBOL = __webpack_require__(39);
var USE_SYMBOL_AS_UID = __webpack_require__(59);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var getOwnPropertyDescriptor = __webpack_require__(29).f;
var createNonEnumerableProperty = __webpack_require__(11);
var redefine = __webpack_require__(15);
var setGlobal = __webpack_require__(33);
var copyConstructorProperties = __webpack_require__(54);
var isForced = __webpack_require__(92);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(12);
var createPropertyDescriptor = __webpack_require__(20);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(50);
var anObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(32);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(31);
var requireObjectCoercible = __webpack_require__(14);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(11);
var has = __webpack_require__(6);
var setGlobal = __webpack_require__(33);
var inspectSource = __webpack_require__(52);
var InternalStateModule = __webpack_require__(21);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(14);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buffer; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Buffer = /*#__PURE__*/function () {
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(90);
var global = __webpack_require__(4);
var isObject = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(11);
var objectHas = __webpack_require__(6);
var sharedKey = __webpack_require__(22);
var hiddenKeys = __webpack_require__(24);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34);
var uid = __webpack_require__(35);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(55);
var global = __webpack_require__(4);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(73);
var stickyHelpers = __webpack_require__(114);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetClip; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);





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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var propertyIsEnumerableModule = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(20);
var toIndexedObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(50);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var classof = __webpack_require__(17);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(11);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(23);
var store = __webpack_require__(53);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(37);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var defineProperties = __webpack_require__(93);
var enumBugKeys = __webpack_require__(37);
var hiddenKeys = __webpack_require__(24);
var html = __webpack_require__(94);
var documentCreateElement = __webpack_require__(51);
var sharedKey = __webpack_require__(22);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(37);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(12).f;
var has = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(13);
var addToUnscopables = __webpack_require__(67);
var Iterators = __webpack_require__(44);
var InternalStateModule = __webpack_require__(21);
var defineIterator = __webpack_require__(68);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $map = __webpack_require__(63).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(108);
var arrayMethodUsesToLength = __webpack_require__(78);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var exec = __webpack_require__(27);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var global = __webpack_require__(4);
var getBuiltIn = __webpack_require__(25);
var IS_PURE = __webpack_require__(23);
var DESCRIPTORS = __webpack_require__(9);
var NATIVE_SYMBOL = __webpack_require__(39);
var USE_SYMBOL_AS_UID = __webpack_require__(59);
var fails = __webpack_require__(3);
var has = __webpack_require__(6);
var isArray = __webpack_require__(60);
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(7);
var toObject = __webpack_require__(16);
var toIndexedObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(32);
var createPropertyDescriptor = __webpack_require__(20);
var nativeObjectCreate = __webpack_require__(40);
var objectKeys = __webpack_require__(41);
var getOwnPropertyNamesModule = __webpack_require__(36);
var getOwnPropertyNamesExternal = __webpack_require__(95);
var getOwnPropertySymbolsModule = __webpack_require__(38);
var getOwnPropertyDescriptorModule = __webpack_require__(29);
var definePropertyModule = __webpack_require__(12);
var propertyIsEnumerableModule = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(11);
var redefine = __webpack_require__(15);
var shared = __webpack_require__(34);
var sharedKey = __webpack_require__(22);
var hiddenKeys = __webpack_require__(24);
var uid = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(5);
var wrappedWellKnownSymbolModule = __webpack_require__(61);
var defineWellKnownSymbol = __webpack_require__(62);
var setToStringTag = __webpack_require__(42);
var InternalStateModule = __webpack_require__(21);
var $forEach = __webpack_require__(63).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(51);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isObject = __webpack_require__(10);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(53);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var setGlobal = __webpack_require__(33);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var ownKeys = __webpack_require__(91);
var getOwnPropertyDescriptorModule = __webpack_require__(29);
var definePropertyModule = __webpack_require__(12);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);

module.exports = global;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIndexedObject = __webpack_require__(13);
var indexOf = __webpack_require__(57).indexOf;
var hiddenKeys = __webpack_require__(24);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(13);
var toLength = __webpack_require__(18);
var toAbsoluteIndex = __webpack_require__(58);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(39);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

exports.f = wellKnownSymbol;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(55);
var has = __webpack_require__(6);
var wrappedWellKnownSymbolModule = __webpack_require__(61);
var defineProperty = __webpack_require__(12).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(96);
var IndexedObject = __webpack_require__(31);
var toObject = __webpack_require__(16);
var toLength = __webpack_require__(18);
var arraySpeciesCreate = __webpack_require__(97);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(9);
var global = __webpack_require__(4);
var has = __webpack_require__(6);
var isObject = __webpack_require__(10);
var defineProperty = __webpack_require__(12).f;
var copyConstructorProperties = __webpack_require__(54);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(62);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var create = __webpack_require__(40);
var definePropertyModule = __webpack_require__(12);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var createIteratorConstructor = __webpack_require__(98);
var getPrototypeOf = __webpack_require__(70);
var setPrototypeOf = __webpack_require__(100);
var setToStringTag = __webpack_require__(42);
var createNonEnumerableProperty = __webpack_require__(11);
var redefine = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(5);
var IS_PURE = __webpack_require__(23);
var Iterators = __webpack_require__(44);
var IteratorsCore = __webpack_require__(69);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(70);
var createNonEnumerableProperty = __webpack_require__(11);
var has = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(5);
var IS_PURE = __webpack_require__(23);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toObject = __webpack_require__(16);
var sharedKey = __webpack_require__(22);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(99);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(45);
var redefine = __webpack_require__(15);
var toString = __webpack_require__(104);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(15);
var anObject = __webpack_require__(7);
var fails = __webpack_require__(3);
var flags = __webpack_require__(73);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(7);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(75).charAt;
var InternalStateModule = __webpack_require__(21);
var defineIterator = __webpack_require__(68);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(14);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var DOMIterables = __webpack_require__(106);
var ArrayIteratorMethods = __webpack_require__(43);
var createNonEnumerableProperty = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var fill = __webpack_require__(107);
var addToUnscopables = __webpack_require__(67);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(3);
var has = __webpack_require__(6);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $trim = __webpack_require__(111).trim;
var forcedStringTrimMethod = __webpack_require__(112);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $indexOf = __webpack_require__(57).indexOf;
var arrayMethodIsStrict = __webpack_require__(113);
var arrayMethodUsesToLength = __webpack_require__(78);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(83);
var isRegExp = __webpack_require__(115);
var anObject = __webpack_require__(7);
var requireObjectCoercible = __webpack_require__(14);
var speciesConstructor = __webpack_require__(116);
var advanceStringIndex = __webpack_require__(84);
var toLength = __webpack_require__(18);
var callRegExpExec = __webpack_require__(85);
var regexpExec = __webpack_require__(27);
var fails = __webpack_require__(3);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
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
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
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
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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
}, !SUPPORTS_Y);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(47);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(5);
var regexpExec = __webpack_require__(27);
var createNonEnumerableProperty = __webpack_require__(11);

var SPECIES = wellKnownSymbol('species');

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

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
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
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(75).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);
var regexpExec = __webpack_require__(27);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Actions = /*#__PURE__*/function () {
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
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].getCellFn(cell, [iy, ix]);
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
          _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].setCellFn(cell, "", [iy, ix]);
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
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].getCellFn(cell, [iy, ix]);

        if (!_this2.obSelector.isIgnoredCell(cell)) {
          _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].setCellFn(cell, "", [iy, ix]);
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
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_4__[/* getElementsByTagNames */ "a"])("td,th", rows[iy]);

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
      var cellVal = _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].getCellFn(cell, coord).trim();

      if (cellVal === "") cellVal = data;else if (data !== "") cellVal += _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].mergePastingGlue + data;

      _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].setCellFn(cell, cellVal, coord);
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
      if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_5__[/* isUndef */ "d"])(c2) && maxY > c2[0]) maxY = c2[0] + 1;

      for (var iy = c1[0]; iy < maxY; iy++) {
        var maxX = c1[1] + data[iy - c1[0]].length;
        if (maxX > countC) maxX = countC;
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_5__[/* isUndef */ "d"])(c2) && maxX > c2[1]) maxX = c2[1] + 1;
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
            cellFn = _app__WEBPACK_IMPORTED_MODULE_3__["_gOptions"].setCellFn;
          }

          var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_4__[/* getElementsByTagNames */ "a"])("td,th", rows[y])[matrix[y][x][2]];

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
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selector; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Selector = /*#__PURE__*/function () {
  function Selector(table, obEvent) {
    _classCallCheck(this, Selector);

    _defineProperty(this, "_countCols", 0);

    _defineProperty(this, "_countRows", 0);

    _defineProperty(this, "_table", void 0);

    _defineProperty(this, "obEvent", void 0);

    _defineProperty(this, "matrix", void 0);

    this._table = table;
    this.obEvent = obEvent;
    this.initSizeMatrix();
  }

  _createClass(Selector, [{
    key: "deselectCell",
    value: function deselectCell(cell) {
      Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* removeClass */ "e"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectClass);
    }
  }, {
    key: "deselectAll",
    value: function deselectAll() {
      var _this = this;

      var length = 0;
      this.goCells(function (cell, coord) {
        if (_this.isSelectedCell(cell)) {
          _this.deselectCell(cell);

          _this.obEvent.deselect(cell, coord);

          length++;
        }
      });
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
        if (c[0] < this.countRows && c[1] < this.countCols) {
          if (this.matrix[c[0]][c[1]][0] < 0) c[0] += this.matrix[c[0]][c[1]][0];
          if (this.matrix[c[0]][c[1]][1] < 0) c[1] += this.matrix[c[0]][c[1]][1];
          var row = this.table.getElementsByTagName("tr")[c[0]];
          return Object(_dom__WEBPACK_IMPORTED_MODULE_11__[/* getElementsByTagNames */ "a"])("td,th", row)[this.matrix[c[0]][c[1]][2]];
        }
      }
    }
  }, {
    key: "getSelectedRectangleCoords",

    /**
     * get coords of selected cells
     * @returns array [[0, 0], [1, 1]] or false
     */
    value: function getSelectedRectangleCoords(sc0, sc1) {
      var _this2 = this;

      var isSelected = false;
      var c1 = Array(2);
      var c2 = Array(2);
      var scIsAr = Array.isArray(sc0) && Array.isArray(sc1);
      this.goCells(function (cell, coord) {
        var _coord = _slicedToArray(coord, 2),
            iy = _coord[0],
            ix = _coord[1];

        if (scIsAr) {
          if ((sc0[0] !== iy || sc0[1] !== _this2.matrix[iy][ix][2]) && (sc1[0] !== iy || sc1[1] !== _this2.matrix[iy][ix][2])) {
            return;
          }
        } else {
          if (!_this2.isSelectedCell(cell)) return;
        }

        isSelected = true;
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(c1[0]) || c1[0] > iy) c1[0] = iy;
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(c1[1]) || c1[1] > ix) c1[1] = ix;
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(c2[0]) || c2[0] < iy) c2[0] = iy;
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(c2[1]) || c2[1] < ix) c2[1] = ix;
      });
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
            if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(this.matrix[iy][ix][0]) && this.matrix[iy][ix][0] < 0) {
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
            if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* isUndef */ "d"])(this.matrix[_iy][_ix][0]) && this.matrix[_iy + 1][_ix][0] < 0) {
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
      var _this3 = this;

      var rows = this.table.getElementsByTagName("tr");
      this._countRows = rows.length;
      this._countCols = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var length = Object(_dom__WEBPACK_IMPORTED_MODULE_11__[/* getElementsByTagNames */ "a"])("td, th", row).length;

          if (length > this.countCols) {
            this._countCols = length;
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

      this.matrix = Array(this.countRows).fill().map(function () {
        return Array(_this3.countCols).fill().map(function () {
          return Array(2);
        });
      });
      var rowCrest = new Array(this.countCols).fill(0);
      var iy = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var row = _step2.value;
          var ix = 0;
          var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_11__[/* getElementsByTagNames */ "a"])("td, th", row);

          var crestFn = function crestFn() {
            while (ix < _this3.countCols && rowCrest[ix]) {
              rowCrest[ix]--;
              _this3.matrix[iy][ix][0] = _this3.matrix[iy - 1][ix][0] || 0 - 1;
              _this3.matrix[iy][ix][1] = _this3.matrix[iy - 1][ix][1];
              ix++;
            }
          };

          for (var itd = 0; itd < cells.length; itd++) {
            var cell = cells[itd];
            var colspan = cell.getAttribute("colspan");
            var rowspan = cell.getAttribute("rowspan");
            if (rowspan > 1) _this3.matrix[iy][ix][0] = 0;
            if (colspan > 1) _this3.matrix[iy][ix][1] = 0;
            crestFn();

            try {
              if (colspan > 1) {
                _this3.matrix[iy][ix][2] = itd;

                for (var i = 0; i > -colspan; i--) {
                  _this3.matrix[iy][ix][1] = i;
                  if (rowspan > 1) rowCrest[ix] = rowspan - 1;
                  ix++;
                }
              } else {
                _this3.matrix[iy][ix][2] = itd;
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

        for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
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
    }
  }, {
    key: "isIgnoredCell",
    value: function isIgnoredCell(cell) {
      var ppn = cell.parentNode.parentNode;
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].ignoreClass) // td
      || Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* hasClass */ "b"])(cell.parentNode, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].ignoreClass) // tr
      || _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].ignoreThead && ppn.tagName === "THEAD" || _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].ignoreTfoot && ppn.tagName === "TFOOT";
    }
  }, {
    key: "isSelectedCell",
    value: function isSelectedCell(cell) {
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectClass);
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
      var _this4 = this;

      var isSelected = false;
      if (c1[0] >= this.countRows || c1[1] >= this.countCols || c2[0] < 0 || c2[1] < 0) return false;
      if (c1[0] < 0) c1[0] = 0;
      if (c1[1] < 0) c1[1] = 0;
      if (c2[0] >= this.countRows) c2[0] = this.countRows - 1;
      if (c2[1] >= this.countCols) c2[1] = this.countCols - 1;

      var _this$getRectangleCoo = this.getRectangleCoords(c1, c2);

      var _this$getRectangleCoo2 = _slicedToArray(_this$getRectangleCoo, 2);

      c1 = _this$getRectangleCoo2[0];
      c2 = _this$getRectangleCoo2[1];
      this.goCells(function (cell, coord) {
        var prevState = Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectClass);

        if (coord[0] < c1[0] || coord[0] > c2[0] || coord[1] < c1[1] || coord[1] > c2[1]) {
          if (prevState) {
            _this4.deselectCell(cell);

            _this4.obEvent.deselect(cell, coord);
          }
        } else {
          var result = _this4.selectCell(cell);

          _this4.obEvent.select(prevState, cell, coord);

          if (!isSelected) isSelected = result;
        }
      });
      return isSelected;
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this5 = this;

      var length = 0;
      this.goCells(function (cell, coord) {
        var prevState = Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectClass);

        var result = _this5.selectCell(cell);

        if (result) {
          _this5.obEvent.select(prevState, cell, coord);

          length++;
        }
      });
      return length;
    }
  }, {
    key: "selectCell",
    value: function selectCell(cell) {
      if (_app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectIgnoreClass || !this.isIgnoredCell(cell)) {
        Object(_funcs__WEBPACK_IMPORTED_MODULE_12__[/* addClass */ "a"])(cell, _app__WEBPACK_IMPORTED_MODULE_10__["_gOptions"].selectClass);
        return true;
      }

      return false;
    }
  }, {
    key: "goCells",
    value: function goCells(fn) {
      var rows = this.table.getElementsByTagName("tr");

      if (rows.length !== this.countRows) {
        this.initSizeMatrix();
      }

      for (var iy = 0; iy < this.countRows; iy++) {
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_11__[/* getElementsByTagNames */ "a"])("td, th", rows[iy]);

        for (var ix = 0; ix < this.countCols; ix++) {
          if (!(this.matrix[iy][ix][0] < 0) && !(this.matrix[iy][ix][1] < 0)) {
            fn(cells[this.matrix[iy][ix][2]], [iy, ix]);
          }
        }
      }
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
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Event = function Event() {
  _classCallCheck(this, Event);

  _defineProperty(this, "startSelect", void 0);

  _defineProperty(this, "finishSelect", void 0);

  _defineProperty(this, "select", void 0);

  _defineProperty(this, "deselect", void 0);
};



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Table = /*#__PURE__*/function () {
  // whether the left mouse button is pressed
  // html table
  // initial coordinate of selection, real table cells
  function Table(table, obSelector, obEvent, obApp) {
    var _this = this;

    _classCallCheck(this, Table);

    _defineProperty(this, "isMouseDown", false);

    _defineProperty(this, "obApp", void 0);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "obEvent", void 0);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "coord0", void 0);

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
      this.obEvent = obEvent;
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
      if (this.isIgnoreMouseDown) return;
      if (_app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].mouseBlockSelection) e.preventDefault();
      if (this.isRightMouseBtn(e)) return true;
      var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getParentTags */ "b"])(e.target, "td,th");
      if (cell === null) return; // not for cell

      this.isMouseDown = true;
      this.obSelector.deselectAll();
      this.obSelector.selectCell(cell);
      this.obEvent.startSelect(e, cell);
      this.coord0 = [cell.parentNode.rowIndex, cell.cellIndex];
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getParentTags */ "b"])(e.target, "td,th");
      if (cell === null) return; // not for cell

      if (!this.isMouseDown) {
        this.isIgnoreMouseDown = this.obSelector.isSelectedCell(cell);
        return;
      }

      var coords = this.obSelector.getSelectedRectangleCoords(this.coord0, [cell.parentNode.rowIndex, cell.cellIndex]);
      if (coords !== false) this.obSelector.select(coords[0], coords[1]);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this._isMouse = true;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this._isMouse = false;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (this.isMouseDown) {
        this.obEvent.finishSelect(e);
        this.isIgnoreMouseDown = true;
      }

      this.isMouseDown = false;
    }
  }, {
    key: "onOutTableClick",
    value: function onOutTableClick() {
      this.isMouseDown = false;

      if (_app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].deselectOutTableClick && !this.isMouse) {
        this.obSelector.deselectAll();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var inspectSource = __webpack_require__(52);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);
var getOwnPropertyNamesModule = __webpack_require__(36);
var getOwnPropertySymbolsModule = __webpack_require__(38);
var anObject = __webpack_require__(7);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(12);
var anObject = __webpack_require__(7);
var objectKeys = __webpack_require__(41);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(13);
var nativeGetOwnPropertyNames = __webpack_require__(36).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(64);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(69).IteratorPrototype;
var create = __webpack_require__(40);
var createPropertyDescriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(42);
var Iterators = __webpack_require__(44);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var aPossiblePrototype = __webpack_require__(101);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var assign = __webpack_require__(103);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(3);
var objectKeys = __webpack_require__(41);
var getOwnPropertySymbolsModule = __webpack_require__(38);
var propertyIsEnumerableModule = __webpack_require__(30);
var toObject = __webpack_require__(16);
var IndexedObject = __webpack_require__(31);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(45);
var classof = __webpack_require__(105);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(45);
var classofRaw = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(16);
var toAbsoluteIndex = __webpack_require__(58);
var toLength = __webpack_require__(18);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(5);
var V8_VERSION = __webpack_require__(109);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var userAgent = __webpack_require__(110);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(14);
var whitespaces = __webpack_require__(80);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var whitespaces = __webpack_require__(80);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(3);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var classof = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(64);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(83);
var anObject = __webpack_require__(7);
var toObject = __webpack_require__(16);
var toLength = __webpack_require__(18);
var toInteger = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(14);
var advanceStringIndex = __webpack_require__(84);
var regExpExec = __webpack_require__(85);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

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
    return nativeReplace.call(replacement, symbols, function (match, ch) {
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