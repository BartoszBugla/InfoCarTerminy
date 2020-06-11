webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var index = function index(_ref) {
  var respond = _ref.respond;
  var arrayOfItems = Object.values(respond);
  var dates = Object.keys(respond);
  var status = "Brak praktyki";
  var lists = arrayOfItems.map(function (i, index) {
    var items = i.map(function (e, eindex) {
      if (e.practice) {
        status = "Jest egzamin praktyczny!";
        return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: eindex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }
        }, " ", __jsx("b", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }
        }, "Praktyka"), " : ", e.practice[0].date);
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 34
        }
      }, " Teoria: ", e.theory.date);
    });
    return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
      day: dates[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    }, items);
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Jastrzebie zdr\xF3j", lists, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, status));
};

index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var words, respond, i, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            words = [{
              name: "jastrzębie zdrój",
              id: 48
            }];
            respond = {};
            i = 6;

          case 3:
            if (!(i < 12)) {
              _context.next = 14;
              break;
            }

            _context.next = 6;
            return fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=44&examCategory=B&month=2020-0".concat(i, "&_=1591863562242"));

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            json = _context.sent;
            respond = _objectSpread(_objectSpread({}, respond), json.terms);

          case 11:
            i++;
            _context.next = 3;
            break;

          case 14:
            return _context.abrupt("return", {
              respond: respond
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJlc3BvbmQiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJzdGF0dXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImZldGNoIiwicmVzIiwianNvbiIsInRlcm1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzQixNQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxPQUFkLENBQW5CO0FBQ0EsTUFBSUksS0FBSyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUwsT0FBWixDQUFaO0FBQ0EsTUFBSU0sTUFBTSxHQUFHLGVBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUdOLFlBQVksQ0FBQ08sR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUlWLEtBQUosRUFBYztBQUN2QyxRQUFNVyxLQUFLLEdBQUdELENBQUMsQ0FBQ0QsR0FBRixDQUFNLFVBQUNHLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQy9CLFVBQUlELENBQUMsQ0FBQ0UsUUFBTixFQUFnQjtBQUNaUCxjQUFNLEdBQUcsMEJBQVQ7QUFDQSxlQUNJLE1BQUMsNERBQUQ7QUFBVSxhQUFHLEVBQUVNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNLLEdBREwsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLFNBRXVCRCxDQUFDLENBQUNFLFFBQUYsQ0FBVyxDQUFYLEVBQWNDLElBRnJDLENBREo7QUFNSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNJLE1BQU4sRUFBYyxPQUFPLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBb0JKLENBQUMsQ0FBQ0ksTUFBRixDQUFTRCxJQUE3QixDQUFQO0FBQ2pCLEtBWGEsQ0FBZDtBQWFBLFdBQU8sTUFBQyx3REFBRDtBQUFNLFNBQUcsRUFBRVYsS0FBSyxDQUFDTCxLQUFELENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJXLEtBQTFCLENBQVA7QUFDSCxHQWZXLENBQVo7QUFnQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVLSCxLQUZMLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxNQUFKLENBSEosQ0FESjtBQU9ILENBM0JEOztBQTZCQVAsS0FBSyxDQUFDaUIsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGlCQURnQixHQUNSLENBQUM7QUFBRUMsa0JBQUksRUFBRSxrQkFBUjtBQUE0QkMsZ0JBQUUsRUFBRTtBQUFoQyxhQUFELENBRFE7QUFFaEJwQixtQkFGZ0IsR0FFTixFQUZNO0FBR1hTLGFBSFcsR0FHUCxDQUhPOztBQUFBO0FBQUEsa0JBR0pBLENBQUMsR0FBRyxFQUhBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUVZLEtBQUssbUdBQ3dFWixDQUR4RSxzQkFKUDs7QUFBQTtBQUlWYSxlQUpVO0FBQUE7QUFBQSxtQkFPR0EsR0FBRyxDQUFDQyxJQUFKLEVBUEg7O0FBQUE7QUFPVkEsZ0JBUFU7QUFRaEJ2QixtQkFBTyxtQ0FBUUEsT0FBUixHQUFvQnVCLElBQUksQ0FBQ0MsS0FBekIsQ0FBUDs7QUFSZ0I7QUFHSWYsYUFBQyxFQUhMO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQVdiO0FBQUVULHFCQUFPLEVBQVBBO0FBQUYsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdhYzAyYWM2NGMxYzdjODZjNTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHJlc3BvbmQgfSkgPT4ge1xyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC52YWx1ZXMocmVzcG9uZCk7XHJcbiAgICBsZXQgZGF0ZXMgPSBPYmplY3Qua2V5cyhyZXNwb25kKTtcclxuICAgIGxldCBzdGF0dXMgPSBcIkJyYWsgcHJha3R5a2lcIjtcclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBcIkplc3QgZWd6YW1pbiBwcmFrdHljem55IVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlByYWt0eWthPC9iPiA6IHtlLnByYWN0aWNlWzBdLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudGhlb3J5KSByZXR1cm4gPExpc3RJdGVtPiBUZW9yaWE6IHtlLnRoZW9yeS5kYXRlfTwvTGlzdEl0ZW0+O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPExpc3QgZGF5PXtkYXRlc1tpbmRleF19PntpdGVtc308L0xpc3Q+O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEphc3RyemViaWUgemRyw7NqXHJcbiAgICAgICAgICAgIHtsaXN0c31cclxuICAgICAgICAgICAgPHA+e3N0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgbGV0IHdvcmRzID0gW3sgbmFtZTogXCJqYXN0cnrEmWJpZSB6ZHLDs2pcIiwgaWQ6IDQ4IH1dO1xyXG4gICAgbGV0IHJlc3BvbmQgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPTQ0JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVzcG9uZCA9IHsgLi4ucmVzcG9uZCwgLi4uanNvbi50ZXJtcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHJlc3BvbmQgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=