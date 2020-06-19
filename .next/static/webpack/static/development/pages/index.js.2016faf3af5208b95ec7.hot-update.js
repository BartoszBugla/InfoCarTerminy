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
    var resData, j, loopData, i, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resData = [];
            j = 0;

          case 2:
            if (!(j < 50)) {
              _context.next = 20;
              break;
            }

            loopData = {};
            i = 6;

          case 5:
            if (!(i < 12)) {
              _context.next = 16;
              break;
            }

            _context.next = 8;
            return fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=".concat(j, "&examCategory=B&month=2020-0").concat(i, "&_=1591863562242"));

          case 8:
            res = _context.sent;
            _context.next = 11;
            return res.json();

          case 11:
            json = _context.sent;
            loopData = _objectSpread(_objectSpread({}, loopData), json.terms);

          case 13:
            i++;
            _context.next = 5;
            break;

          case 16:
            resData.push(loopData);

          case 17:
            j++;
            _context.next = 2;
            break;

          case 20:
            return _context.abrupt("return", {
              resData: resData,
              wordID: ctx.query.id
            });

          case 21:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJqIiwibG9vcERhdGEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ0ZXJtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFDO0FBQUVDLE1BQUksRUFBRSxrQkFBUjtBQUE0QkMsSUFBRSxFQUFFO0FBQWhDLENBQUQsQ0FBWjs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUNGLE9BQUQsQ0FERztBQUFBLE1BQzVCRyxJQUQ0QjtBQUFBLE1BQ3RCQyxPQURzQjs7QUFHbkMsTUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osSUFBZCxDQUFuQjtBQUNBLE1BQUlLLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxJQUFQLENBQVlOLElBQVosQ0FBWjtBQUVBLE1BQUlPLEtBQUssR0FBR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNDLENBQUQsRUFBSWIsS0FBSixFQUFjO0FBQ3ZDLFFBQU1jLEtBQUssR0FBR0QsQ0FBQyxDQUFDRCxHQUFGLENBQU0sVUFBQ0csQ0FBRCxFQUFJQyxNQUFKLEVBQWU7QUFDL0IsVUFBSUQsQ0FBQyxDQUFDRSxRQUFOLEVBQWdCO0FBQ1osZUFDSSxNQUFDLDREQUFEO0FBQVUsYUFBRyxFQUFFRCxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSyxHQURMLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixTQUV1QkQsQ0FBQyxDQUFDRSxRQUFGLENBQVcsQ0FBWCxFQUFjQyxJQUZyQyxDQURKO0FBTUg7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDSSxNQUFOLEVBQWMsT0FBTyxNQUFDLDREQUFEO0FBQVUsV0FBRyxFQUFFSCxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWlDRCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsSUFBMUMsQ0FBUDtBQUNqQixLQVZhLENBQWQ7QUFZQSxXQUNJLE1BQUMsd0RBQUQ7QUFBTSxTQUFHLEVBQUVsQixLQUFYO0FBQWtCLFNBQUcsRUFBRVMsS0FBSyxDQUFDVCxLQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2MsS0FETCxDQURKO0FBS0gsR0FsQlcsQ0FBWjs7QUFtQkEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLEdBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUUxQixVQUFFLEVBQUVzQixLQUFLLENBQUNLLE1BQU4sQ0FBYUM7QUFBbkI7QUFGQyxLQUFaO0FBSUgsR0FMRDs7QUFNQSxPQUFLLElBQUlkLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkIsQ0FBRTs7QUFDL0IsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVJLE1BQUMsMERBQUQ7QUFDSSxZQUFRLEVBQUVPLFlBRGQ7QUFFSSxTQUFLLEVBQUVsQixNQUZYO0FBR0ksUUFBSSxFQUFDLFFBSFQ7QUFJSSxTQUFLLEVBQUMsZ0JBSlY7QUFLSSxjQUFVLEVBQUMsSUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTS1MsS0FUTCxDQURKO0FBYUgsQ0E3Q0Q7O0dBQU1YLEs7O0FBK0NOQSxLQUFLLENBQUM0QixlQUFOO0FBQUEsK0xBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQjVCLG1CQURnQixHQUNOLEVBRE07QUFFWDZCLGFBRlcsR0FFUCxDQUZPOztBQUFBO0FBQUEsa0JBRUpBLENBQUMsR0FBRyxFQUZBO0FBQUE7QUFBQTtBQUFBOztBQUdaQyxvQkFIWSxHQUdELEVBSEM7QUFJUGxCLGFBSk8sR0FJSCxDQUpHOztBQUFBO0FBQUEsa0JBSUFBLENBQUMsR0FBRyxFQUpKO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBS01tQixLQUFLLHFFQUMwQ0YsQ0FEMUMseUNBQzBFakIsQ0FEMUUsc0JBTFg7O0FBQUE7QUFLTm9CLGVBTE07QUFBQTtBQUFBLG1CQVFPQSxHQUFHLENBQUNDLElBQUosRUFSUDs7QUFBQTtBQVFOQSxnQkFSTTtBQVNaSCxvQkFBUSxtQ0FBUUEsUUFBUixHQUFxQkcsSUFBSSxDQUFDQyxLQUExQixDQUFSOztBQVRZO0FBSVF0QixhQUFDLEVBSlQ7QUFBQTtBQUFBOztBQUFBO0FBV2hCWixtQkFBTyxDQUFDc0IsSUFBUixDQUFhUSxRQUFiOztBQVhnQjtBQUVJRCxhQUFDLEVBRkw7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBY2I7QUFBRTdCLHFCQUFPLEVBQVBBLE9BQUY7QUFBV0Msb0JBQU0sRUFBRTJCLEdBQUcsQ0FBQ0osS0FBSixDQUFVMUI7QUFBN0IsYUFkYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQmVDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yMDE2ZmFmM2FmNTIwOGI5NWVjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5sZXQgd29yZHMgPSBbeyBuYW1lOiBcImphc3RyesSZYmllIHpkcsOzalwiLCBpZDogNDggfV07XHJcbmNvbnN0IGluZGV4ID0gKHsgcmVzRGF0YSwgd29yZElEIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHJlc0RhdGEpO1xyXG5cclxuICAgIGxldCBhcnJheU9mSXRlbXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgbGV0IGRhdGVzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcblxyXG4gICAgbGV0IGxpc3RzID0gYXJyYXlPZkl0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGkubWFwKChlLCBlaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucHJhY3RpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17ZWluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5QcmFrdHlrYTwvYj4gOiB7ZS5wcmFjdGljZVswXS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLnRoZW9yeSkgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+IFRlb3JpYToge2UudGhlb3J5LmRhdGV9PC9MaXN0SXRlbT47XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGtleT17aW5kZXh9IGRheT17ZGF0ZXNbaW5kZXhdfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBKYXN0cnplYmllIHpkcsOzalxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dvcmRJRH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ3eWLDs3Igd29yZGFcIlxyXG4gICAgICAgICAgICAgICAgbGFzdE51bWJlcj1cIjUwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2xpc3RzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGxldCByZXNEYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDUwOyBqKyspIHtcclxuICAgICAgICBsZXQgbG9vcERhdGEgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPSR7an0mZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBsb29wRGF0YSA9IHsgLi4ubG9vcERhdGEsIC4uLmpzb24udGVybXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzRGF0YS5wdXNoKGxvb3BEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyByZXNEYXRhLCB3b3JkSUQ6IGN0eC5xdWVyeS5pZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=