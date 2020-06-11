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
  }, lists, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInJlc3BvbmQiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJzdGF0dXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImZldGNoIiwicmVzIiwianNvbiIsInRlcm1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzQixNQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxPQUFkLENBQW5CO0FBQ0EsTUFBSUksS0FBSyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUwsT0FBWixDQUFaO0FBQ0EsTUFBSU0sTUFBTSxHQUFHLGVBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUdOLFlBQVksQ0FBQ08sR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUlWLEtBQUosRUFBYztBQUN2QyxRQUFNVyxLQUFLLEdBQUdELENBQUMsQ0FBQ0QsR0FBRixDQUFNLFVBQUNHLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQy9CLFVBQUlELENBQUMsQ0FBQ0UsUUFBTixFQUFnQjtBQUNaUCxjQUFNLEdBQUcsMEJBQVQ7QUFDQSxlQUFPLE1BQUMsNERBQUQ7QUFBVSxhQUFHLEVBQUVNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBbUNELENBQUMsQ0FBQ0UsUUFBRixDQUFXLENBQVgsRUFBY0MsSUFBakQsQ0FBUDtBQUNIOztBQUNELFVBQUlILENBQUMsQ0FBQ0ksTUFBTixFQUFjLE9BQU8sTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFvQkosQ0FBQyxDQUFDSSxNQUFGLENBQVNELElBQTdCLENBQVA7QUFDakIsS0FOYSxDQUFkO0FBUUEsV0FBTyxNQUFDLHdEQUFEO0FBQU0sU0FBRyxFQUFFVixLQUFLLENBQUNMLEtBQUQsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlcsS0FBMUIsQ0FBUDtBQUNILEdBVlcsQ0FBWjtBQVdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSCxLQURMLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxNQUFKLENBRkosQ0FESjtBQU1ILENBckJEOztBQXVCQVAsS0FBSyxDQUFDaUIsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGlCQURnQixHQUNSLENBQUM7QUFBRUMsa0JBQUksRUFBRSxrQkFBUjtBQUE0QkMsZ0JBQUUsRUFBRTtBQUFoQyxhQUFELENBRFE7QUFFaEJwQixtQkFGZ0IsR0FFTixFQUZNO0FBR1hTLGFBSFcsR0FHUCxDQUhPOztBQUFBO0FBQUEsa0JBR0pBLENBQUMsR0FBRyxFQUhBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUVZLEtBQUssbUdBQ3dFWixDQUR4RSxzQkFKUDs7QUFBQTtBQUlWYSxlQUpVO0FBQUE7QUFBQSxtQkFPR0EsR0FBRyxDQUFDQyxJQUFKLEVBUEg7O0FBQUE7QUFPVkEsZ0JBUFU7QUFRaEJ2QixtQkFBTyxtQ0FBUUEsT0FBUixHQUFvQnVCLElBQUksQ0FBQ0MsS0FBekIsQ0FBUDs7QUFSZ0I7QUFHSWYsYUFBQyxFQUhMO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQVdiO0FBQUVULHFCQUFPLEVBQVBBO0FBQUYsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI0YjliMzM1ZjI2ZDMxY2E5YzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHJlc3BvbmQgfSkgPT4ge1xyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC52YWx1ZXMocmVzcG9uZCk7XHJcbiAgICBsZXQgZGF0ZXMgPSBPYmplY3Qua2V5cyhyZXNwb25kKTtcclxuICAgIGxldCBzdGF0dXMgPSBcIkJyYWsgcHJha3R5a2lcIjtcclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBcIkplc3QgZWd6YW1pbiBwcmFrdHljem55IVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+UHJha3R5a2EgOiB7ZS5wcmFjdGljZVswXS5kYXRlfTwvTGlzdEl0ZW0+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLnRoZW9yeSkgcmV0dXJuIDxMaXN0SXRlbT4gVGVvcmlhOiB7ZS50aGVvcnkuZGF0ZX08L0xpc3RJdGVtPjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxMaXN0IGRheT17ZGF0ZXNbaW5kZXhdfT57aXRlbXN9PC9MaXN0PjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGlzdHN9XHJcbiAgICAgICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGxldCB3b3JkcyA9IFt7IG5hbWU6IFwiamFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9XTtcclxuICAgIGxldCByZXNwb25kID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD00OCZleGFtQ2F0ZWdvcnk9QiZtb250aD0yMDIwLTAke2l9Jl89MTU5MTg2MzU2MjI0MmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJlc3BvbmQgPSB7IC4uLnJlc3BvbmQsIC4uLmpzb24udGVybXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyByZXNwb25kIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9