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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _lib_sheetclip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);


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
  getCellFn: function getCellFn(cell, coord) {
    return cell.innerText;
  },
  ignoreClass: 'tcs-ignore',
  ignoreTfoot: false,
  ignoreThead: false,
  initHotkeys: true,
  //TODO: mergePasting: true,
  mergePastingGlue: ' ',
  mouseBlockSelection: true,
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

    _defineProperty(this, "obActions", void 0);

    _defineProperty(this, "obBuffer", void 0);

    _defineProperty(this, "obSelector", void 0);

    _defineProperty(this, "obTable", void 0);

    _defineProperty(this, "_onKeyDown", function (e) {
      return _this.onKeyDown(e);
    });

    if (_typeof(options) === "object") _extends(_gOptions, options);
    this.obSelector = new _selector__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](table);
    this.obTable = new _table__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](table, this.obSelector, this);
    this.obActions = new _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.obSelector);
    this.obBuffer = buffer;
    if (_gOptions.initHotkeys) Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* on */ "e"])(document.body, "keydown", this._onKeyDown);
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

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_6__[/* SheetClip */ "a"].stringify(data);
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
        if (Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* isEmpty */ "c"])(coords)) return false;

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

      if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] && data !== false) {
        var str = _lib_sheetclip__WEBPACK_IMPORTED_MODULE_6__[/* SheetClip */ "a"].stringify(data);
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
            if (!_gOptions.enableChanging) break;

            if (this.obBuffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
              this.obBuffer.paste(function (str) {
                _this2.paste(_lib_sheetclip__WEBPACK_IMPORTED_MODULE_6__[/* SheetClip */ "a"].parse(str));
              });
            }

            break;

          case 88:
            // x
            if (!_gOptions.enableChanging) break;
            this.cut();
            break;

          case 46: // delete

          case 8:
            // backspase
            if (!_gOptions.enableChanging) break;
            this.clear();
            break;
        }
      }
    }
    /**
     * paste (data [, c1 [, c2]])
     * @param data - array[][]
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */

  }, {
    key: "paste",
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
      if (_gOptions.initHotkeys) Object(_dom__WEBPACK_IMPORTED_MODULE_5__[/* off */ "d"])(document.body, "keydown", this._onKeyDown);
      this.deselect();
      this.obTable.destroy();
      delete this.obActions, this.obBuffer, this.obSelector, this.obTable, this;
    }
  }], [{
    key: "Buffer",
    get: function get() {
      return _buffer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
    }
  }]);

  return TableCellSelector;
}();


global.TableCellSelector = TableCellSelector;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

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
    _classCallCheck(this, Buffer);

    _defineProperty(this, "fakeElem", void 0);

    _defineProperty(this, "_text", void 0);

    this.container = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* isElement */ "c"])(container) ? container : document.body;
    this.initSelectFake();
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
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.container.appendChild(this.fakeElem);
    }
    /**
     * Can only be called when the combination is pressed Ctrl + V
     * @returns {string}
     */

  }, {
    key: "paste",
    value: function paste(callback) {
      var _this = this;

      this.fakeElem.value = "";
      this.fakeElem.focus();

      var onInput = function onInput(e) {
        _this._text = e.target.value;

        _this.fakeElem.blur();

        Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* off */ "d"])(_this.fakeElem, "input", onInput);
        callback(_this._text);
      };

      Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* on */ "e"])(this.fakeElem, "input", onInput);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetClip; });
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
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
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].getCellFn(cell, [iy, ix]);
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
          _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].setCellFn(cell, "", [iy, ix]);
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
        ar[iy - c1[0]][ix - c1[1]] = _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].getCellFn(cell, [iy, ix]);

        if (!_this2.obSelector.isIgnoredCell(cell)) {
          _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].setCellFn(cell, "", [iy, ix]);
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
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td,th", rows[iy]);

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
      var cellVal = _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].getCellFn(cell, coord).trim();

      if (cellVal === "") cellVal = data;else if (data !== "") cellVal += _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].mergePastingGlue + data;

      _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].setCellFn(cell, cellVal, coord);
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
            cellFn = _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].setCellFn;
          }

          var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td,th", rows[y])[matrix[y][x][2]];

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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selector; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
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
      Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* removeClass */ "d"])(cell, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].selectClass);
    }
  }, {
    key: "deselectAll",
    value: function deselectAll() {
      var length = 0;
      var list = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td,th", this.table);
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
          return Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td,th", row)[this.matrix[c[0]][c[1]][2]];
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
        var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td,th", rows[iy]);

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
          var length = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td, th", row).length;

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
          var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td, th", row);

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
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].ignoreClass) // td
      || Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* hasClass */ "b"])(cell.parentNode, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].ignoreClass) // tr
      || _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].ignoreThead && ppn.tagName === "THEAD" || _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].ignoreTfoot && ppn.tagName === "TFOOT";
    }
  }, {
    key: "isSelectedCell",
    value: function isSelectedCell(cell) {
      return Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* hasClass */ "b"])(cell, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].selectClass);
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

        if (!Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* isEmpty */ "c"])(cell)) {
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
          var cells = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td, th", rows[iy]);

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
      var list = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getElementsByTagNames */ "a"])("td, th", this.table);
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
      if (_app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].selectIgnoreClass || !this.isIgnoredCell(cell)) {
        Object(_funcs__WEBPACK_IMPORTED_MODULE_2__[/* addClass */ "a"])(cell, _app__WEBPACK_IMPORTED_MODULE_0__["_gOptions"].selectClass);
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
/* 7 */
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
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(this.table, "mouseup", this._onMouseUp);
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
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      if (!this.isMouseDown) return false;
      var cell = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* getParentTags */ "b"])(e.target, "td,th");
      if (cell === null) return; // not for cell

      this.obSelector.selectCell(cell); //magic selection

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
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* off */ "d"])(this.table, "mouseup", this._onMouseUp);
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
/* 8 */
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=tcs.bundle.js.map