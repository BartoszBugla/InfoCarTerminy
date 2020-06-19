webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Select */ "./components/Select.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var words = [{
  name: "jastrzębie zdrój",
  id: 48
}];

var index = function index(_ref) {
  _s();

  var resData = _ref.resData,
      wordID = _ref.wordID;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(resData),
      data = _useState[0],
      setData = _useState[1];

  var arrayOfItems = Object.values(data);
  var dates = Object.keys(data);
  var lists = arrayOfItems.map(function (i, index) {
    var items = i.map(function (e, eindex) {
      if (e.practice) {
        return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: eindex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }
        }, " ", __jsx("b", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }
        }, "Praktyka"), " : ", e.practice[0].date);
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: eindex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 34
        }
      }, " Teoria: ", e.theory.date);
    });
    return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      day: dates[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, items);
  });

  var handleChange = function handleChange(event) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
      pathname: "/",
      query: {
        id: event.target.value
      }
    });
  };

  for (var i = 6; i < 12; i++) {}

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Jastrzebie zdr\xF3j", __jsx(_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: handleChange,
    value: wordID,
    type: "number",
    title: "wyb\xF3r worda",
    lastNumber: "50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), lists);
};

_s(index, "qDbi8jAGavTL4LnicTXk+6krBLQ=");

index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var resData, i, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.query.id ? ctx.query.id : ctx.query.id = 48;
            resData = {};
            i = 6;

          case 3:
            if (!(i < 12)) {
              _context.next = 14;
              break;
            }

            _context.next = 6;
            return fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=".concat(ctx.query.id, "&examCategory=B&month=2020-0").concat(i, "&_=1591863562242"));

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            json = _context.sent;
            resData = _objectSpread(_objectSpread({}, resData), json.terms);

          case 11:
            i++;
            _context.next = 3;
            break;

          case 14:
            return _context.abrupt("return", {
              resData: resData,
              wordID: ctx.query.id
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsid29yZHMiLCJuYW1lIiwiaWQiLCJpbmRleCIsInJlc0RhdGEiLCJ3b3JkSUQiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiYXJyYXlPZkl0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0ZXMiLCJrZXlzIiwibGlzdHMiLCJtYXAiLCJpIiwiaXRlbXMiLCJlIiwiZWluZGV4IiwicHJhY3RpY2UiLCJkYXRlIiwidGhlb3J5IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRhcmdldCIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidGVybXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FBRCxDQUFaOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQ0YsT0FBRCxDQURHO0FBQUEsTUFDNUJHLElBRDRCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUduQyxNQUFJQyxZQUFZ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QUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FXYjtBQUFFWixxQkFBTyxFQUFQQSxPQUFGO0FBQVdDLG9CQUFNLEVBQUUyQixHQUFHLENBQUNKLEtBQUosQ0FBVTFCO0FBQTdCLGFBWGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQTBCZUMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFjMWUwYzZhZjkzM2E5NDkyNDMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCB3b3JkcyA9IFt7IG5hbWU6IFwiamFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9XTtcclxuY29uc3QgaW5kZXggPSAoeyByZXNEYXRhLCB3b3JkSUQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocmVzRGF0YSk7XHJcblxyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XHJcbiAgICBsZXQgZGF0ZXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuXHJcbiAgICBsZXQgbGlzdHMgPSBhcnJheU9mSXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaS5tYXAoKGUsIGVpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5wcmFjdGljZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlByYWt0eWthPC9iPiA6IHtlLnByYWN0aWNlWzBdLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudGhlb3J5KSByZXR1cm4gPExpc3RJdGVtIGtleT17ZWluZGV4fT4gVGVvcmlhOiB7ZS50aGVvcnkuZGF0ZX08L0xpc3RJdGVtPjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3Qga2V5PXtpbmRleH0gZGF5PXtkYXRlc1tpbmRleF19PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBldmVudC50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEphc3RyemViaWUgemRyw7NqXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d29yZElEfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cInd5YsOzciB3b3JkYVwiXHJcbiAgICAgICAgICAgICAgICBsYXN0TnVtYmVyPVwiNTBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7bGlzdHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY3R4LnF1ZXJ5LmlkID8gY3R4LnF1ZXJ5LmlkIDogKGN0eC5xdWVyeS5pZCA9IDQ4KTtcclxuICAgIGxldCByZXNEYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD0ke2N0eC5xdWVyeS5pZH0mZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXNEYXRhID0geyAuLi5yZXNEYXRhLCAuLi5qc29uLnRlcm1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcmVzRGF0YSwgd29yZElEOiBjdHgucXVlcnkuaWQgfTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGN0eC5xdWVyeS5pZCA/IGN0eC5xdWVyeS5pZCA6IChjdHgucXVlcnkuaWQgPSA0OCk7XHJcbiAgICBsZXQgcmVzRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9JHtjdHgucXVlcnkuaWR9JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVzRGF0YSA9IHsgLi4ucmVzRGF0YSwgLi4uanNvbi50ZXJtcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHJlc0RhdGEsIHdvcmRJRDogY3R4LnF1ZXJ5LmlkIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==