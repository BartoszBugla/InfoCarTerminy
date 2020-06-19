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
    var resData, loopData, i, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resData = {};
            loopData = {};
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
            loopData = _objectSpread(_objectSpread({}, loopData), json.terms);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJsaXN0cyIsIm1hcCIsImkiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb29wRGF0YSIsImZldGNoIiwicmVzIiwianNvbiIsInRlcm1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FBRCxDQUFaOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQ0YsT0FBRCxDQURHO0FBQUEsTUFDNUJHLElBRDRCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUduQyxNQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixJQUFkLENBQW5CO0FBQ0EsTUFBSUssS0FBSyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWU4sSUFBWixDQUFaO0FBRUEsTUFBSU8sS0FBSyxHQUFHTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFJYixLQUFKLEVBQWM7QUFDdkMsUUFBTWMsS0FBSyxHQUFHRCxDQUFDLENBQUNELEdBQUYsQ0FBTSxVQUFDRyxDQUFELEVBQUlDLE1BQUosRUFBZTtBQUMvQixVQUFJRCxDQUFDLENBQUNFLFFBQU4sRUFBZ0I7QUFDWixlQUNJLE1BQUMsNERBQUQ7QUFBVSxhQUFHLEVBQUVELE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNLLEdBREwsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLFNBRXVCRCxDQUFDLENBQUNFLFFBQUYsQ0FBVyxDQUFYLEVBQWNDLElBRnJDLENBREo7QUFNSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNJLE1BQU4sRUFBYyxPQUFPLE1BQUMsNERBQUQ7QUFBVSxXQUFHLEVBQUVILE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBaUNELENBQUMsQ0FBQ0ksTUFBRixDQUFTRCxJQUExQyxDQUFQO0FBQ2pCLEtBVmEsQ0FBZDtBQVlBLFdBQ0ksTUFBQyx3REFBRDtBQUFNLFNBQUcsRUFBRWxCLEtBQVg7QUFBa0IsU0FBRyxFQUFFUyxLQUFLLENBQUNULEtBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLYyxLQURMLENBREo7QUFLSCxHQWxCVyxDQUFaOztBQW1CQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUJDLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsR0FERjtBQUVSQyxXQUFLLEVBQUU7QUFBRTFCLFVBQUUsRUFBRXNCLEtBQUssQ0FBQ0ssTUFBTixDQUFhQztBQUFuQjtBQUZDLEtBQVo7QUFJSCxHQUxEOztBQU1BLE9BQUssSUFBSWQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QixDQUFFOztBQUMvQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUksTUFBQywwREFBRDtBQUNJLFlBQVEsRUFBRU8sWUFEZDtBQUVJLFNBQUssRUFBRWxCLE1BRlg7QUFHSSxRQUFJLEVBQUMsUUFIVDtBQUlJLFNBQUssRUFBQyxnQkFKVjtBQUtJLGNBQVUsRUFBQyxJQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNLUyxLQVRMLENBREo7QUFhSCxDQTdDRDs7R0FBTVgsSzs7QUErQ05BLEtBQUssQ0FBQzRCLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCNUIsbUJBRGdCLEdBQ04sRUFETTtBQUdoQjZCLG9CQUhnQixHQUdMLEVBSEs7QUFJWGpCLGFBSlcsR0FJUCxDQUpPOztBQUFBO0FBQUEsa0JBSUpBLENBQUMsR0FBRyxFQUpBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBS0VrQixLQUFLLG1HQUN3RWxCLENBRHhFLHNCQUxQOztBQUFBO0FBS1ZtQixlQUxVO0FBQUE7QUFBQSxtQkFRR0EsR0FBRyxDQUFDQyxJQUFKLEVBUkg7O0FBQUE7QUFRVkEsZ0JBUlU7QUFTaEJILG9CQUFRLG1DQUFRQSxRQUFSLEdBQXFCRyxJQUFJLENBQUNDLEtBQTFCLENBQVI7O0FBVGdCO0FBSUlyQixhQUFDLEVBSkw7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBWWI7QUFBRVoscUJBQU8sRUFBUEEsT0FBRjtBQUFXQyxvQkFBTSxFQUFFMkIsR0FBRyxDQUFDSixLQUFKLENBQVUxQjtBQUE3QixhQVphOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVlQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjRlMTE0ZDk5N2Q3YmZhN2QyY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxubGV0IHdvcmRzID0gW3sgbmFtZTogXCJqYXN0cnrEmWJpZSB6ZHLDs2pcIiwgaWQ6IDQ4IH1dO1xyXG5jb25zdCBpbmRleCA9ICh7IHJlc0RhdGEsIHdvcmRJRCB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShyZXNEYXRhKTtcclxuXHJcbiAgICBsZXQgYXJyYXlPZkl0ZW1zID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuICAgIGxldCBkYXRlcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG5cclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+UHJha3R5a2E8L2I+IDoge2UucHJhY3RpY2VbMF0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50aGVvcnkpIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PiBUZW9yaWE6IHtlLnRoZW9yeS5kYXRlfTwvTGlzdEl0ZW0+O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e2luZGV4fSBkYXk9e2RhdGVzW2luZGV4XX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSmFzdHJ6ZWJpZSB6ZHLDs2pcclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkSUR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwid3liw7NyIHdvcmRhXCJcclxuICAgICAgICAgICAgICAgIGxhc3ROdW1iZXI9XCI1MFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtsaXN0c31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBsZXQgcmVzRGF0YSA9IHt9O1xyXG5cclxuICAgIGxldCBsb29wRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9NDgmZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBsb29wRGF0YSA9IHsgLi4ubG9vcERhdGEsIC4uLmpzb24udGVybXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyByZXNEYXRhLCB3b3JkSUQ6IGN0eC5xdWVyeS5pZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=