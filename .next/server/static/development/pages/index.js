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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__Container",
  componentId: "sc-17u96dy-0"
})(["width:100%;background-color:black;position:absolute;bottom:0;color:white;"]);

const Footer = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Chuj ci w dupe ola"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1jmhwxr-0"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;grid-gap:30px 10px;font-size:16px;margin:10px;@media only screen and (max-width:1200px){grid-template-columns:repeat(3,1fr);font-size:16px;}@media only screen and (max-width:900px){grid-template-columns:repeat(2,1fr);font-size:16px;}@media only screen and (max-width:600px){grid-template-columns:repeat(1,1fr);}"]);
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
            lineNumber: 59,
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
          lineNumber: 69,
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
        lineNumber: 79,
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
    style: {
      minHeight: "100vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 96,
      columnNumber: 17
    }
  })), __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, " ", lists), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }));
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

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY3VzdG9tRnVuY3Rpb25zL2NvbXBhcmVEYXRlRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9jdXN0b21GdW5jdGlvbnMvZ2V0SG91ci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJpc1ByYWN0aWNlIiwiVGFibGUiLCJ0YWJsZSIsIlAiLCJwIiwiTGlzdCIsImRheSIsImNoaWxkcmVuIiwiVGVzdCIsInRyIiwibGlzdEl0ZW0iLCJ0eXBlIiwicGxhY2VzIiwiZGF0ZSIsImdldEhvdXIiLCJuYXYiLCJOYXZiYXIiLCJsYWJlbCIsIlN0eWxlZFNlbGVjdCIsInNlbGVjdCIsIlNlbGVjdCIsInRpdGxlIiwib3B0aW9ucyIsImRpdmlkZXIiLCJzdGFydE51bWJlciIsImxhc3ROdW1iZXIiLCJJdGVtcyIsImkiLCJwdXNoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJuYW1lIiwiZGl2IiwiRm9vdGVyIiwiY29tcGFyZURhdGVGdW5jIiwiYSIsImIiLCJzcGxpdCIsImpvaW4iLCJzcGxpdGVkIiwid29yZHMiLCJyZXNEYXRhIiwid29yZElEIiwid29yZCIsImZpbmQiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXJyYXlPZkl0ZW1zIiwiT2JqZWN0IiwiZW50cmllcyIsInNvcnQiLCJsaXN0cyIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwidGhlb3J5IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsInRhcmdldCIsInZhbHVlIiwibWluSGVpZ2h0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwidGVybXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQSxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEs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SWhCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsVUFBTTZDLEdBQUcsR0FBSSw2REFBNERELEdBQUcsQ0FBQ0wsS0FBSixDQUFVbEMsRUFBRywrQkFBOEJMLENBQUUsa0JBQXRIO0FBQ0EsVUFBTThDLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBdkI7QUFDQSxVQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBQ0FoQyxXQUFPLG1DQUFRQSxPQUFSLEdBQW9CZ0MsSUFBSSxDQUFDQyxLQUF6QixDQUFQO0FBQ0g7O0FBRUQsU0FBTztBQUFFN0UsU0FBSyxFQUFFO0FBQUU0QyxhQUFGO0FBQVdDLFlBQU0sRUFBRTJCLEdBQUcsQ0FBQ0wsS0FBSixDQUFVbEM7QUFBN0I7QUFBVCxHQUFQO0FBQ0g7QUFDY0Qsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNQcmFjdGljZSA/IFwiIzY5MjY5MlwiIDogXCIjNDA1Y2MxXCIpfTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG4gICAgdGQge1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYDtcclxuXHJcbmNvbnN0IExpc3QgPSAoeyBpc1ByYWN0aWNlLCBkYXksIGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc1ByYWN0aWNlPXtpc1ByYWN0aWNlfT5cclxuICAgICAgICAgICAgPFA+e2RheX08L1A+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RWd6YW1pbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkdvZHppbmE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NaWVqc2NhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGdldEhvdXIgZnJvbSBcIi4uL2N1c3RvbUZ1bmN0aW9ucy9nZXRIb3VyXCI7XHJcbmNvbnN0IFRlc3QgPSBzdHlsZWQudHJgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5gO1xyXG5jb25zdCBsaXN0SXRlbSA9ICh7IHR5cGUsIHBsYWNlcywgZGF0ZSB9KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQcmFrdHlrYVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRlc3Q+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e3R5cGV9PC9iPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Z2V0SG91cihkYXRlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGFjZXN9PC90ZD5cclxuICAgICAgICAgICAgPC9UZXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUZXN0PlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2dldEhvdXIoZGF0ZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57cGxhY2VzfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvVGVzdD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdEl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1Y2MxO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5sYWJlbGBcclxuICAgIHdpZHRoOiAxMjBweDtcclxuYDtcclxuY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuLy8gdHlwZSA9IFtudW1iZXIsd29yZF1cclxuLy8gb3B0aW9ucyBpZiB3b3JkXHJcbi8vIGRpdmlkZXIgaWYgbnVtYmVyXHJcbi8vIHN0YXJ0TnVtYmVyID0gMCxcclxuLy8gbGFzdE51bWJlclxyXG5jb25zdCBTZWxlY3QgPSAoe1xyXG4gICAgdHlwZSxcclxuICAgIHRpdGxlLFxyXG4gICAgb3B0aW9ucyA9IFtdLFxyXG4gICAgZGl2aWRlciA9IDEsXHJcbiAgICBzdGFydE51bWJlciA9IDEsXHJcbiAgICBsYXN0TnVtYmVyID0gMSxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGxldCBJdGVtcyA9IFtdO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0TnVtYmVyOyBpIDw9IGxhc3ROdW1iZXIgLyBkaXZpZGVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIEl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpICogZGl2aWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpICogZGl2aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIndvcmRcIjpcclxuICAgICAgICAgICAgSXRlbXMgPSBvcHRpb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxTdHlsZWRTZWxlY3Qgey4uLnByb3BzfT57SXRlbXN9PC9TdHlsZWRTZWxlY3Q+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxwPkNodWogY2kgdyBkdXBlIG9sYTwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IGNvbXBhcmVEYXRlRnVuYyA9IChhLCBiKSA9PiB7XHJcbiAgICBhID0gYVswXS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcclxuICAgIGIgPSBiWzBdLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xyXG4gICAgcmV0dXJuIGEgLSBiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZURhdGVGdW5jO1xyXG4iLCJjb25zdCBnZXRIb3VyID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHNwbGl0ZWQgPSBkYXRlLnNwbGl0KFwiIFwiKTtcclxuICAgIHJldHVybiBzcGxpdGVkWzFdO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRIb3VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgY29tcGFyZURhdGVGdW5jIGZyb20gXCIuLi9jdXN0b21GdW5jdGlvbnMvY29tcGFyZURhdGVGdW5jXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDMwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICB9XHJcbmA7XHJcbmxldCB3b3JkcyA9IFtcclxuICAgIHsgbmFtZTogXCJLYXRvd2ljZVwiLCBpZDogNDUgfSxcclxuICAgIHsgbmFtZTogXCJExIVicm93YSBHw7NybmljemFcIiwgaWQ6IDQ2IH0sXHJcbiAgICB7IG5hbWU6IFwiVHljaHlcIiwgaWQ6IDQ3IH0sXHJcbiAgICB7IG5hbWU6IFwiSmFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9LFxyXG4gICAgeyBuYW1lOiBcIlJ5Ym5pa1wiLCBpZDogNDkgfSxcclxuICAgIHsgbmFtZTogXCJCeXRvbVwiLCBpZDogNTAgfSxcclxuICAgIHsgbmFtZTogXCJCaWVsc2tvLUJpYcWCYVwiLCBpZDogNTEgfSxcclxuXTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgcmVzRGF0YSwgd29yZElEIH0pID0+IHtcclxuICAgIGNvbnN0IHdvcmQgPSB3b3Jkcy5maW5kKCh3b3JkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmQuaWQgPT0gd29yZElEO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocmVzRGF0YSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlc0RhdGEpO1xyXG4gICAgfSwgW3Jlc0RhdGFdKTtcclxuXHJcbiAgICBsZXQgYXJyYXlPZkl0ZW1zID0gT2JqZWN0LmVudHJpZXMoZGF0YSkuc29ydChjb21wYXJlRGF0ZUZ1bmMpO1xyXG5cclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGlzUHJhY3RpY2UgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGlbMV0ubWFwKChlLCBlaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucHJhY3RpY2UpIHtcclxuICAgICAgICAgICAgICAgIGlzUHJhY3RpY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzPXtlLnByYWN0aWNlWzBdLnBsYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlByYWt0eWthXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZS5wcmFjdGljZVswXS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50aGVvcnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZXM9e2UudGhlb3J5LnBsYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlRlb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2UudGhlb3J5LmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBpc1ByYWN0aWNlPXtpc1ByYWN0aWNlfSBrZXk9e2luZGV4fSBkYXk9e2lbMF19PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgICA8TmF2YmFyPlxyXG4gICAgICAgICAgICAgICAge3dvcmQubmFtZX1cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV3liw7NyIHdvcmRhXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj4ge2xpc3RzfTwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBjdHgucXVlcnkuaWQgPyBjdHgucXVlcnkuaWQgOiAoY3R4LnF1ZXJ5LmlkID0gNDgpO1xyXG5cclxuICAgIGxldCByZXNEYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPSR7Y3R4LnF1ZXJ5LmlkfSZleGFtQ2F0ZWdvcnk9QiZtb250aD0yMDIwLTAke2l9Jl89MTU5MTg2MzU2MjI0MmA7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXNEYXRhID0geyAuLi5yZXNEYXRhLCAuLi5qc29uLnRlcm1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcmVzRGF0YSwgd29yZElEOiBjdHgucXVlcnkuaWQgfSB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9