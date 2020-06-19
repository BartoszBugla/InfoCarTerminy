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
            resData = {};
            i = 6;

          case 2:
            if (!(i < 12)) {
              _context.next = 13;
              break;
            }

            _context.next = 5;
            return fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=".concat(j, "&examCategory=B&month=2020-0").concat(i, "&_=1591863562242"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            json = _context.sent;
            resData = _objectSpread(_objectSpread({}, resData), json.terms);

          case 10:
            i++;
            _context.next = 2;
            break;

          case 13:
            return _context.abrupt("return", {
              resData: resData,
              wordID: ctx.query.id
            });

          case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImoiLCJyZXMiLCJqc29uIiwidGVybXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxNQUFJLEVBQUUsa0JBQVI7QUFBNEJDLElBQUUsRUFBRTtBQUFoQyxDQUFELENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDRixPQUFELENBREc7QUFBQSxNQUM1QkcsSUFENEI7QUFBQSxNQUN0QkMsT0FEc0I7O0FBR25DLE1BQUlDLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNKLElBQWQsQ0FBbkI7QUFDQSxNQUFJSyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTixJQUFaLENBQVo7QUFFQSxNQUFJTyxLQUFLLEdBQUdMLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUliLEtBQUosRUFBYztBQUN2QyxRQUFNYyxLQUFLLEdBQUdELENBQUMsQ0FBQ0QsR0FBRixDQUFNLFVBQUNHLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQy9CLFVBQUlELENBQUMsQ0FBQ0UsUUFBTixFQUFnQjtBQUNaLGVBQ0ksTUFBQyw0REFBRDtBQUFVLGFBQUcsRUFBRUQsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0ssR0FETCxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosU0FFdUJELENBQUMsQ0FBQ0UsUUFBRixDQUFXLENBQVgsRUFBY0MsSUFGckMsQ0FESjtBQU1IOztBQUNELFVBQUlILENBQUMsQ0FBQ0ksTUFBTixFQUFjLE9BQU8sTUFBQyw0REFBRDtBQUFVLFdBQUcsRUFBRUgsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpQ0QsQ0FBQyxDQUFDSSxNQUFGLENBQVNELElBQTFDLENBQVA7QUFDakIsS0FWYSxDQUFkO0FBWUEsV0FDSSxNQUFDLHdEQUFEO0FBQU0sU0FBRyxFQUFFbEIsS0FBWDtBQUFrQixTQUFHLEVBQUVTLEtBQUssQ0FBQ1QsS0FBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tjLEtBREwsQ0FESjtBQUtILEdBbEJXLENBQVo7O0FBbUJBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxHQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFMUIsVUFBRSxFQUFFc0IsS0FBSyxDQUFDSyxNQUFOLENBQWFDO0FBQW5CO0FBRkMsS0FBWjtBQUlILEdBTEQ7O0FBTUEsT0FBSyxJQUFJZCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCLENBQUU7O0FBQy9CLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFSSxNQUFDLDBEQUFEO0FBQ0ksWUFBUSxFQUFFTyxZQURkO0FBRUksU0FBSyxFQUFFbEIsTUFGWDtBQUdJLFFBQUksRUFBQyxRQUhUO0FBSUksU0FBSyxFQUFDLGdCQUpWO0FBS0ksY0FBVSxFQUFDLElBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBU0tTLEtBVEwsQ0FESjtBQWFILENBN0NEOztHQUFNWCxLOztBQStDTkEsS0FBSyxDQUFDNEIsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEI1QixtQkFEZ0IsR0FDTixFQURNO0FBR1hZLGFBSFcsR0FHUCxDQUhPOztBQUFBO0FBQUEsa0JBR0pBLENBQUMsR0FBRyxFQUhBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUVpQixLQUFLLHFFQUMwQ0MsQ0FEMUMseUNBQzBFbEIsQ0FEMUUsc0JBSlA7O0FBQUE7QUFJVm1CLGVBSlU7QUFBQTtBQUFBLG1CQU9HQSxHQUFHLENBQUNDLElBQUosRUFQSDs7QUFBQTtBQU9WQSxnQkFQVTtBQVFoQmhDLG1CQUFPLG1DQUFRQSxPQUFSLEdBQW9CZ0MsSUFBSSxDQUFDQyxLQUF6QixDQUFQOztBQVJnQjtBQUdJckIsYUFBQyxFQUhMO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQVdiO0FBQUVaLHFCQUFPLEVBQVBBLE9BQUY7QUFBV0Msb0JBQU0sRUFBRTJCLEdBQUcsQ0FBQ0osS0FBSixDQUFVMUI7QUFBN0IsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZUMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmIwNDY4ZTVkMDQwODU1NDFhYWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCB3b3JkcyA9IFt7IG5hbWU6IFwiamFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9XTtcclxuY29uc3QgaW5kZXggPSAoeyByZXNEYXRhLCB3b3JkSUQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocmVzRGF0YSk7XHJcblxyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XHJcbiAgICBsZXQgZGF0ZXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuXHJcbiAgICBsZXQgbGlzdHMgPSBhcnJheU9mSXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaS5tYXAoKGUsIGVpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5wcmFjdGljZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlByYWt0eWthPC9iPiA6IHtlLnByYWN0aWNlWzBdLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudGhlb3J5KSByZXR1cm4gPExpc3RJdGVtIGtleT17ZWluZGV4fT4gVGVvcmlhOiB7ZS50aGVvcnkuZGF0ZX08L0xpc3RJdGVtPjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3Qga2V5PXtpbmRleH0gZGF5PXtkYXRlc1tpbmRleF19PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBldmVudC50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEphc3RyemViaWUgemRyw7NqXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d29yZElEfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cInd5YsOzciB3b3JkYVwiXHJcbiAgICAgICAgICAgICAgICBsYXN0TnVtYmVyPVwiNTBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7bGlzdHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgbGV0IHJlc0RhdGEgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD0ke2p9JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVzRGF0YSA9IHsgLi4ucmVzRGF0YSwgLi4uanNvbi50ZXJtcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHJlc0RhdGEsIHdvcmRJRDogY3R4LnF1ZXJ5LmlkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==