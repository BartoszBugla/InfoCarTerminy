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
            lineNumber: 13,
            columnNumber: 24
          }
        }, "Praktyka : ", e.practice[0].date);
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 34
        }
      }, " Teoria: ", e.theory.date);
    });
    return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
      day: dates[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }
    }, items);
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Jastrzebie zdr\xF3j", lists, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
            return fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=48&examCategory=B&month=2020-0".concat(i, "&_=1591863562242"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJlc3BvbmQiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJzdGF0dXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImZldGNoIiwicmVzIiwianNvbiIsInRlcm1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzQixNQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxPQUFkLENBQW5CO0FBQ0EsTUFBSUksS0FBSyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUwsT0FBWixDQUFaO0FBQ0EsTUFBSU0sTUFBTSxHQUFHLGVBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUdOLFlBQVksQ0FBQ08sR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUlWLEtBQUosRUFBYztBQUN2QyxRQUFNVyxLQUFLLEdBQUdELENBQUMsQ0FBQ0QsR0FBRixDQUFNLFVBQUNHLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQy9CLFVBQUlELENBQUMsQ0FBQ0UsUUFBTixFQUFnQjtBQUNaUCxjQUFNLEdBQUcsMEJBQVQ7QUFDQSxlQUFPLE1BQUMsNERBQUQ7QUFBVSxhQUFHLEVBQUVNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBbUNELENBQUMsQ0FBQ0UsUUFBRixDQUFXLENBQVgsRUFBY0MsSUFBakQsQ0FBUDtBQUNIOztBQUNELFVBQUlILENBQUMsQ0FBQ0ksTUFBTixFQUFjLE9BQU8sTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFvQkosQ0FBQyxDQUFDSSxNQUFGLENBQVNELElBQTdCLENBQVA7QUFDakIsS0FOYSxDQUFkO0FBUUEsV0FBTyxNQUFDLHdEQUFEO0FBQU0sU0FBRyxFQUFFVixLQUFLLENBQUNMLEtBQUQsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlcsS0FBMUIsQ0FBUDtBQUNILEdBVlcsQ0FBWjtBQVdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFS0gsS0FGTCxFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUQsTUFBSixDQUhKLENBREo7QUFPSCxDQXRCRDs7QUF3QkFQLEtBQUssQ0FBQ2lCLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxpQkFEZ0IsR0FDUixDQUFDO0FBQUVDLGtCQUFJLEVBQUUsa0JBQVI7QUFBNEJDLGdCQUFFLEVBQUU7QUFBaEMsYUFBRCxDQURRO0FBRWhCcEIsbUJBRmdCLEdBRU4sRUFGTTtBQUdYUyxhQUhXLEdBR1AsQ0FITzs7QUFBQTtBQUFBLGtCQUdKQSxDQUFDLEdBQUcsRUFIQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUlFWSxLQUFLLG1HQUN3RVosQ0FEeEUsc0JBSlA7O0FBQUE7QUFJVmEsZUFKVTtBQUFBO0FBQUEsbUJBT0dBLEdBQUcsQ0FBQ0MsSUFBSixFQVBIOztBQUFBO0FBT1ZBLGdCQVBVO0FBUWhCdkIsbUJBQU8sbUNBQVFBLE9BQVIsR0FBb0J1QixJQUFJLENBQUNDLEtBQXpCLENBQVA7O0FBUmdCO0FBR0lmLGFBQUMsRUFITDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FXYjtBQUFFVCxxQkFBTyxFQUFQQTtBQUFGLGFBWGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWVELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44ZDQ0NjFiOGZmZDQ5NjA1Y2FmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyByZXNwb25kIH0pID0+IHtcclxuICAgIGxldCBhcnJheU9mSXRlbXMgPSBPYmplY3QudmFsdWVzKHJlc3BvbmQpO1xyXG4gICAgbGV0IGRhdGVzID0gT2JqZWN0LmtleXMocmVzcG9uZCk7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJCcmFrIHByYWt0eWtpXCI7XHJcbiAgICBsZXQgbGlzdHMgPSBhcnJheU9mSXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaS5tYXAoKGUsIGVpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5wcmFjdGljZSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gXCJKZXN0IGVnemFtaW4gcHJha3R5Y3pueSFcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PlByYWt0eWthIDoge2UucHJhY3RpY2VbMF0uZGF0ZX08L0xpc3RJdGVtPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50aGVvcnkpIHJldHVybiA8TGlzdEl0ZW0+IFRlb3JpYToge2UudGhlb3J5LmRhdGV9PC9MaXN0SXRlbT47XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8TGlzdCBkYXk9e2RhdGVzW2luZGV4XX0+e2l0ZW1zfTwvTGlzdD47XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSmFzdHJ6ZWJpZSB6ZHLDs2pcclxuICAgICAgICAgICAge2xpc3RzfVxyXG4gICAgICAgICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBsZXQgd29yZHMgPSBbeyBuYW1lOiBcImphc3RyesSZYmllIHpkcsOzalwiLCBpZDogNDggfV07XHJcbiAgICBsZXQgcmVzcG9uZCA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9NDgmZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXNwb25kID0geyAuLi5yZXNwb25kLCAuLi5qc29uLnRlcm1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcmVzcG9uZCB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==