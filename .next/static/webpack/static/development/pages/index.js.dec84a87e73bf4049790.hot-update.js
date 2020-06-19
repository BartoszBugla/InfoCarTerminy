webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ "./components/Select.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var words = [{
  name: "jastrzębie zdrój",
  id: 48
}];

var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  for (var i = 6; i < 12; i++) {
    fetch("https://info-car.pl/services/word/ajax/getSchedule?wordId=48&examCategory=B&month=2020-0".concat(i, "&_=1591863562242")).then(function (res) {
      return res.json();
    }).then(function (json) {
      return setData(_objectSpread(_objectSpread({}, data), json.terms));
    });
  }

  var arrayOfItems = Object.values(data);
  var dates = Object.keys(data);
  var lists = arrayOfItems.map(function (i, index) {
    var items = i.map(function (e, eindex) {
      if (e.practice) {
        return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: eindex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }
        }, " ", __jsx("b", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }
        }, "Praktyka"), " : ", e.practice[0].date);
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: eindex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 34
        }
      }, " Teoria: ", e.theory.date);
    });
    return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      day: dates[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, items);
  });

  var handleChange = function handleChange(event) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
      pathname: "/",
      query: {
        id: event.target.value
      }
    });
  };

  for (var _i = 6; _i < 12; _i++) {}

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Jastrzebie zdr\xF3j", __jsx(_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleChange,
    value: wordID,
    type: "number",
    title: "wyb\xF3r worda",
    lastNumber: "50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), lists);
}; // index.getInitialProps = async (ctx) => {
//     let resData = {};
//     let loopData = {};
//     for (let i = 6; i < 12; i++) {
//         const res = await fetch(
//             `https://info-car.pl/services/word/ajax/getSchedule?wordId=48&examCategory=B&month=2020-0${i}&_=1591863562242`
//         );
//         const json = await res.json();
//         loopData = { ...loopData, ...json.terms };
//     }
//     return { resData, wordID: ctx.query.id };
// };


_s(index, "lif/WApPZI6pT1W4YSJwxeyij3U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGVybXMiLCJhcnJheU9mSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRlcyIsImtleXMiLCJsaXN0cyIsIm1hcCIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwiZGF0ZSIsInRoZW9yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndvcmRJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxNQUFJLEVBQUUsa0JBQVI7QUFBNEJDLElBQUUsRUFBRTtBQUFoQyxDQUFELENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxFQURoQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUVoQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekJDLFNBQUssbUdBQzBGRCxDQUQxRixzQkFBTCxDQUdLRSxJQUhMLENBR1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FIVixFQUlLRixJQUpMLENBSVUsVUFBQ0UsSUFBRDtBQUFBLGFBQVVMLE9BQU8saUNBQU1ELElBQU4sR0FBZU0sSUFBSSxDQUFDQyxLQUFwQixFQUFqQjtBQUFBLEtBSlY7QUFLSDs7QUFDRCxNQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVixJQUFkLENBQW5CO0FBQ0EsTUFBSVcsS0FBSyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWVosSUFBWixDQUFaO0FBRUEsTUFBSWEsS0FBSyxHQUFHTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBQ1osQ0FBRCxFQUFJSixLQUFKLEVBQWM7QUFDdkMsUUFBTWlCLEtBQUssR0FBR2IsQ0FBQyxDQUFDWSxHQUFGLENBQU0sVUFBQ0UsQ0FBRCxFQUFJQyxNQUFKLEVBQWU7QUFDL0IsVUFBSUQsQ0FBQyxDQUFDRSxRQUFOLEVBQWdCO0FBQ1osZUFDSSxNQUFDLDREQUFEO0FBQVUsYUFBRyxFQUFFRCxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSyxHQURMLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixTQUV1QkQsQ0FBQyxDQUFDRSxRQUFGLENBQVcsQ0FBWCxFQUFjQyxJQUZyQyxDQURKO0FBTUg7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDSSxNQUFOLEVBQWMsT0FBTyxNQUFDLDREQUFEO0FBQVUsV0FBRyxFQUFFSCxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWlDRCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsSUFBMUMsQ0FBUDtBQUNqQixLQVZhLENBQWQ7QUFZQSxXQUNJLE1BQUMsd0RBQUQ7QUFBTSxTQUFHLEVBQUVyQixLQUFYO0FBQWtCLFNBQUcsRUFBRWEsS0FBSyxDQUFDYixLQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2lCLEtBREwsQ0FESjtBQUtILEdBbEJXLENBQVo7O0FBbUJBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxHQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFN0IsVUFBRSxFQUFFeUIsS0FBSyxDQUFDSyxNQUFOLENBQWFDO0FBQW5CO0FBRkMsS0FBWjtBQUlILEdBTEQ7O0FBTUEsT0FBSyxJQUFJMUIsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxFQUFwQixFQUF3QkEsRUFBQyxFQUF6QixFQUE2QixDQUFFOztBQUMvQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUksTUFBQywwREFBRDtBQUNJLFlBQVEsRUFBRW1CLFlBRGQ7QUFFSSxTQUFLLEVBQUVRLE1BRlg7QUFHSSxRQUFJLEVBQUMsUUFIVDtBQUlJLFNBQUssRUFBQyxnQkFKVjtBQUtJLGNBQVUsRUFBQyxJQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNLaEIsS0FUTCxDQURKO0FBYUgsQ0FuREQsQyxDQXFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztHQWxFTWYsSzs7QUFvRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZWM4NGE4N2U3M2JmNDA0OTc5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5sZXQgd29yZHMgPSBbeyBuYW1lOiBcImphc3RyesSZYmllIHpkcsOzalwiLCBpZDogNDggfV07XHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPTQ4JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHNldERhdGEoeyAuLi5kYXRhLCAuLi5qc29uLnRlcm1zIH0pKTtcclxuICAgIH1cclxuICAgIGxldCBhcnJheU9mSXRlbXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgbGV0IGRhdGVzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcblxyXG4gICAgbGV0IGxpc3RzID0gYXJyYXlPZkl0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGkubWFwKChlLCBlaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucHJhY3RpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17ZWluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5QcmFrdHlrYTwvYj4gOiB7ZS5wcmFjdGljZVswXS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLnRoZW9yeSkgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+IFRlb3JpYToge2UudGhlb3J5LmRhdGV9PC9MaXN0SXRlbT47XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGtleT17aW5kZXh9IGRheT17ZGF0ZXNbaW5kZXhdfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBKYXN0cnplYmllIHpkcsOzalxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dvcmRJRH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ3eWLDs3Igd29yZGFcIlxyXG4gICAgICAgICAgICAgICAgbGFzdE51bWJlcj1cIjUwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2xpc3RzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuLy8gICAgIGxldCByZXNEYXRhID0ge307XHJcblxyXG4vLyAgICAgbGV0IGxvb3BEYXRhID0ge307XHJcbi8vICAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuLy8gICAgICAgICAgICAgYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD00OCZleGFtQ2F0ZWdvcnk9QiZtb250aD0yMDIwLTAke2l9Jl89MTU5MTg2MzU2MjI0MmBcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgICAgICAgIGxvb3BEYXRhID0geyAuLi5sb29wRGF0YSwgLi4uanNvbi50ZXJtcyB9O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiB7IHJlc0RhdGEsIHdvcmRJRDogY3R4LnF1ZXJ5LmlkIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==