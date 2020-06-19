module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\components\\List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "List__Container",
  componentId: "sc-1xrqefn-0"
})(["background-color:", ";padding:0;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.35);border-radius:5px;height:100%;color:white;padding:10px;"], props => props.isPractice ? "#692692" : "#405cc1");
const Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "List__Table",
  componentId: "sc-1xrqefn-1"
})(["width:100%;th{padding-bottom:5px;text-align:left;border-bottom:1px solid #ddd;}td{height:20px;vertical-align:bottom;}"]);
const P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "List__P",
  componentId: "sc-1xrqefn-2"
})(["font-size:1.2em;margin:5px 0px;font-weight:700;"]);

const List = ({
  isPractice,
  day,
  children
}) => {
  return __jsx(Container, {
    isPractice: isPractice,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(P, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, day), __jsx(Table, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Egzamin"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Godzina"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Miejsca")), children));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customFunctions_getHour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customFunctions/getHour */ "./customFunctions/getHour.js");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\components\\ListItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Test = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr.withConfig({
  displayName: "ListItem__Test",
  componentId: "kwxudb-0"
})(["list-style:none;padding:2px;"]);

const listItem = ({
  type,
  places,
  date
}) => {
  if (type === "Praktyka") {
    return __jsx(Test, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, type)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, Object(_customFunctions_getHour__WEBPACK_IMPORTED_MODULE_2__["default"])(date)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, places));
  } else {
    return __jsx(Test, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, type), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, Object(_customFunctions_getHour__WEBPACK_IMPORTED_MODULE_2__["default"])(date)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, places));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (listItem);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Navbar__Container",
  componentId: "sc-1a6fkb7-0"
})(["display:flex;align-items:left;flex-direction:column;padding:25px;margin-bottom:20px;color:white;background-color:#405cc1;"]);
function Navbar({
  children
}) {
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, children);
}

/***/ }),

/***/ "./components/Select.js":
/*!******************************!*\
  !*** ./components/Select.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\components\\Select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "Select__Container",
  componentId: "sc-1frpenq-0"
})(["width:120px;"]);
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "sc-1frpenq-1"
})(["width:200px;text-align-last:center;height:25px;border-radius:5px;font-size:16px;overflow:scroll;&::-webkit-scrollbar{width:1px;}"]); // type = [number,word]
// options if word
// divider if number
// startNumber = 0,
// lastNumber

const Select = (_ref) => {
  let {
    type,
    title,
    options = [],
    divider = 1,
    startNumber = 1,
    lastNumber = 1
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "title", "options", "divider", "startNumber", "lastNumber"]);

  let Items = [];

  switch (type) {
    case "number":
      for (let i = startNumber; i <= lastNumber / divider; i++) {
        Items.push(__jsx("option", {
          key: i,
          value: i * divider,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }
        }, i * divider));
      }

      break;

    case "word":
      Items = options.map((item, index) => {
        return __jsx("option", {
          key: item.id,
          value: item.id,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }
        }, item.name);
      });
      break;
  }

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, title), __jsx(StyledSelect, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), Items));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./customFunctions/compareDateFunc.js":
/*!********************************************!*\
  !*** ./customFunctions/compareDateFunc.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const compareDateFunc = (a, b) => {
  a = a[0].split("-").join("");
  b = b[0].split("-").join("");
  return a - b;
};

/* harmony default export */ __webpack_exports__["default"] = (compareDateFunc);

/***/ }),

/***/ "./customFunctions/getHour.js":
/*!************************************!*\
  !*** ./customFunctions/getHour.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getHour = date => {
  const splited = date.split(" ");
  return splited[1];
};

/* harmony default export */ __webpack_exports__["default"] = (getHour);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Select */ "./components/Select.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _customFunctions_compareDateFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customFunctions/compareDateFunc */ "./customFunctions/compareDateFunc.js");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1y45027-0"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;grid-gap:30px 10px;font-size:16px;@media only screen and (max-width:1200px){grid-template-columns:repeat(3,1fr);font-size:16px;}@media only screen and (max-width:900px){grid-template-columns:repeat(2,1fr);font-size:16px;}@media only screen and (max-width:600px){grid-template-columns:repeat(1,1fr);}"]);
let words = [{
  name: "Katowice",
  id: 45
}, {
  name: "Dąbrowa Górnicza",
  id: 46
}, {
  name: "Tychy",
  id: 47
}, {
  name: "Jastrzębie zdrój",
  id: 48
}, {
  name: "Rybnik",
  id: 49
}, {
  name: "Bytom",
  id: 50
}, {
  name: "Bielsko-Biała",
  id: 51
}];

const index = ({
  resData,
  wordID
}) => {
  const word = words.find(word => {
    return word.id == wordID;
  });
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(resData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setData(resData);
  }, [resData]);
  let arrayOfItems = Object.entries(data).sort(_customFunctions_compareDateFunc__WEBPACK_IMPORTED_MODULE_7__["default"]);
  let lists = arrayOfItems.map((i, index) => {
    let isPractice = false;
    const items = i[1].map((e, eindex) => {
      if (e.practice) {
        isPractice = true;
        return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          places: e.practice[0].places,
          type: "Praktyka",
          date: e.practice[0].date,
          key: eindex,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }
        });
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        places: e.theory.places,
        type: "Teoria",
        date: e.theory.date,
        key: eindex,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      });
    });
    return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isPractice: isPractice,
      key: index,
      day: i[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, items);
  });

  const handleChange = event => {
    event.persist();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
      pathname: "/",
      query: {
        id: event.target.value
      }
    });
  };

  for (let i = 6; i < 12; i++) {}

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, word.name, __jsx(_components_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleChange,
    value: wordID,
    type: "word",
    title: "Wyb\xF3r worda",
    options: words,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })), __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, " ", lists));
};

async function getServerSideProps(ctx) {
  ctx.query.id ? ctx.query.id : ctx.query.id = 48;
  let resData = {};

  for (let i = 6; i < 12; i++) {
    const url = `https://info-car.pl/services/word/ajax/getSchedule?wordId=${ctx.query.id}&examCategory=B&month=2020-0${i}&_=1591863562242`;
    const res = await fetch(url);
    const json = await res.json();
    resData = _objectSpread(_objectSpread({}, resData), json.terms);
  }

  return {
    props: {
      resData,
      wordID: ctx.query.id
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bartosz\Desktop\car\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY3VzdG9tRnVuY3Rpb25zL2NvbXBhcmVEYXRlRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9jdXN0b21GdW5jdGlvbnMvZ2V0SG91ci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJpc1ByYWN0aWNlIiwiVGFibGUiLCJ0YWJsZSIsIlAiLCJwIiwiTGlzdCIsImRheSIsImNoaWxkcmVuIiwiVGVzdCIsInRyIiwibGlzdEl0ZW0iLCJ0eXBlIiwicGxhY2VzIiwiZGF0ZSIsImdldEhvdXIiLCJuYXYiLCJOYXZiYXIiLCJsYWJlbCIsIlN0eWxlZFNlbGVjdCIsInNlbGVjdCIsIlNlbGVjdCIsInRpdGxlIiwib3B0aW9ucyIsImRpdmlkZXIiLCJzdGFydE51bWJlciIsImxhc3ROdW1iZXIiLCJJdGVtcyIsImkiLCJwdXNoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJuYW1lIiwiY29tcGFyZURhdGVGdW5jIiwiYSIsImIiLCJzcGxpdCIsImpvaW4iLCJzcGxpdGVkIiwiZGl2Iiwid29yZHMiLCJyZXNEYXRhIiwid29yZElEIiwid29yZCIsImZpbmQiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXJyYXlPZkl0ZW1zIiwiT2JqZWN0IiwiZW50cmllcyIsInNvcnQiLCJsaXN0cyIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwidGhlb3J5IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwidGVybXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQSxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsNklBQ1VDLEtBQUQsSUFBWUEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CLFNBQW5CLEdBQStCLFNBRHBE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RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc1ByYWN0aWNlID8gXCIjNjkyNjkyXCIgOiBcIiM0MDVjYzFcIil9O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgTGlzdCA9ICh7IGlzUHJhY3RpY2UsIGRheSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGlzUHJhY3RpY2U9e2lzUHJhY3RpY2V9PlxyXG4gICAgICAgICAgICA8UD57ZGF5fTwvUD5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FZ3phbWluPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+R29kemluYTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1pZWpzY2E8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZ2V0SG91ciBmcm9tIFwiLi4vY3VzdG9tRnVuY3Rpb25zL2dldEhvdXJcIjtcclxuY29uc3QgVGVzdCA9IHN0eWxlZC50cmBcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbmA7XHJcbmNvbnN0IGxpc3RJdGVtID0gKHsgdHlwZSwgcGxhY2VzLCBkYXRlIH0pID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlByYWt0eWthXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGVzdD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57dHlwZX08L2I+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntnZXRIb3VyKGRhdGUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3BsYWNlc308L3RkPlxyXG4gICAgICAgICAgICA8L1Rlc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRlc3Q+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Z2V0SG91cihkYXRlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGFjZXN9PC90ZD5cclxuICAgICAgICAgICAgPC9UZXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0SXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm5hdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDVjYzE7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxhYmVsYFxyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4vLyB0eXBlID0gW251bWJlcix3b3JkXVxyXG4vLyBvcHRpb25zIGlmIHdvcmRcclxuLy8gZGl2aWRlciBpZiBudW1iZXJcclxuLy8gc3RhcnROdW1iZXIgPSAwLFxyXG4vLyBsYXN0TnVtYmVyXHJcbmNvbnN0IFNlbGVjdCA9ICh7XHJcbiAgICB0eXBlLFxyXG4gICAgdGl0bGUsXHJcbiAgICBvcHRpb25zID0gW10sXHJcbiAgICBkaXZpZGVyID0gMSxcclxuICAgIHN0YXJ0TnVtYmVyID0gMSxcclxuICAgIGxhc3ROdW1iZXIgPSAxLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgbGV0IEl0ZW1zID0gW107XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnROdW1iZXI7IGkgPD0gbGFzdE51bWJlciAvIGRpdmlkZXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgSXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2kgKiBkaXZpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgKiBkaXZpZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwid29yZFwiOlxyXG4gICAgICAgICAgICBJdGVtcyA9IG9wdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgPFN0eWxlZFNlbGVjdCB7Li4ucHJvcHN9PntJdGVtc308L1N0eWxlZFNlbGVjdD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuIiwiY29uc3QgY29tcGFyZURhdGVGdW5jID0gKGEsIGIpID0+IHtcclxuICAgIGEgPSBhWzBdLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xyXG4gICAgYiA9IGJbMF0uc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gYSAtIGI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlRGF0ZUZ1bmM7XHJcbiIsImNvbnN0IGdldEhvdXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3Qgc3BsaXRlZCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gICAgcmV0dXJuIHNwbGl0ZWRbMV07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldEhvdXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBjb21wYXJlRGF0ZUZ1bmMgZnJvbSBcIi4uL2N1c3RvbUZ1bmN0aW9ucy9jb21wYXJlRGF0ZUZ1bmNcIjtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWdhcDogMzBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgfVxyXG5gO1xyXG5sZXQgd29yZHMgPSBbXHJcbiAgICB7IG5hbWU6IFwiS2F0b3dpY2VcIiwgaWQ6IDQ1IH0sXHJcbiAgICB7IG5hbWU6IFwiRMSFYnJvd2EgR8Ozcm5pY3phXCIsIGlkOiA0NiB9LFxyXG4gICAgeyBuYW1lOiBcIlR5Y2h5XCIsIGlkOiA0NyB9LFxyXG4gICAgeyBuYW1lOiBcIkphc3RyesSZYmllIHpkcsOzalwiLCBpZDogNDggfSxcclxuICAgIHsgbmFtZTogXCJSeWJuaWtcIiwgaWQ6IDQ5IH0sXHJcbiAgICB7IG5hbWU6IFwiQnl0b21cIiwgaWQ6IDUwIH0sXHJcbiAgICB7IG5hbWU6IFwiQmllbHNrby1CaWHFgmFcIiwgaWQ6IDUxIH0sXHJcbl07XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHJlc0RhdGEsIHdvcmRJRCB9KSA9PiB7XHJcbiAgICBjb25zdCB3b3JkID0gd29yZHMuZmluZCgod29yZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB3b3JkLmlkID09IHdvcmRJRDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHJlc0RhdGEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShyZXNEYXRhKTtcclxuICAgIH0sIFtyZXNEYXRhXSk7XHJcblxyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnNvcnQoY29tcGFyZURhdGVGdW5jKTtcclxuXHJcbiAgICBsZXQgbGlzdHMgPSBhcnJheU9mSXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1ByYWN0aWNlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpWzFdLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ByYWN0aWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlcz17ZS5wcmFjdGljZVswXS5wbGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJQcmFrdHlrYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2UucHJhY3RpY2VbMF0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudGhlb3J5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzPXtlLnRoZW9yeS5wbGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJUZW9yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlLnRoZW9yeS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3QgaXNQcmFjdGljZT17aXNQcmFjdGljZX0ga2V5PXtpbmRleH0gZGF5PXtpWzBdfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhcj5cclxuICAgICAgICAgICAgICAgIHt3b3JkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZElEfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIld5YsOzciB3b3JkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+IHtsaXN0c308L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gICAgY3R4LnF1ZXJ5LmlkID8gY3R4LnF1ZXJ5LmlkIDogKGN0eC5xdWVyeS5pZCA9IDQ4KTtcclxuXHJcbiAgICBsZXQgcmVzRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD0ke2N0eC5xdWVyeS5pZH0mZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVzRGF0YSA9IHsgLi4ucmVzRGF0YSwgLi4uanNvbi50ZXJtcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHJlc0RhdGEsIHdvcmRJRDogY3R4LnF1ZXJ5LmlkIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==