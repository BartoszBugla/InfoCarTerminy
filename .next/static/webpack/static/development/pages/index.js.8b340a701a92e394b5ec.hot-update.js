webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Select */ "./components/Select.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _customFunctions_compareDateFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customFunctions/compareDateFunc */ "./customFunctions/compareDateFunc.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1jmhwxr-0"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;grid-gap:30px 10px;font-size:16px;margin:10px;@media only screen and (max-width:1200px){grid-template-columns:repeat(3,1fr);font-size:16px;}@media only screen and (max-width:900px){grid-template-columns:repeat(2,1fr);font-size:16px;}@media only screen and (max-width:600px){grid-template-columns:repeat(1,1fr);}"]);
_c = Container;
var words = [{
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

var index = function index(_ref) {
  _s();

  var resData = _ref.resData,
      wordID = _ref.wordID;
  var word = words.find(function (word) {
    return word.id == wordID;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(resData),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setData(resData);
  }, [resData]);
  var arrayOfItems = Object.entries(data).sort(_customFunctions_compareDateFunc__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var lists = arrayOfItems.map(function (i, index) {
    var isPractice = false;
    var items = i[1].map(function (e, eindex) {
      if (e.practice) {
        isPractice = true;
        return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          places: e.practice[0].places,
          type: "Praktyka",
          date: e.practice[0].date,
          key: eindex,
          __self: _this,
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
        __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, items);
  });

  var handleChange = function handleChange(event) {
    event.persist();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
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
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, " ", lists), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }));
};

_s(index, "/9d1ulKdt+/z8a6abzRUs7MKTUE=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (index);

var _c;

$RefreshReg$(_c, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsIndvcmQiLCJmaW5kIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImFycmF5T2ZJdGVtcyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiY29tcGFyZURhdGVGdW5jIiwibGlzdHMiLCJtYXAiLCJpIiwiaXNQcmFjdGljZSIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwicGxhY2VzIiwiZGF0ZSIsInRoZW9yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb1lBQWY7S0FBTUYsUztBQW9CTixJQUFJRyxLQUFLLEdBQUcsQ0FDUjtBQUFFQyxNQUFJLEVBQUUsVUFBUjtBQUFvQkMsSUFBRSxFQUFFO0FBQXhCLENBRFEsRUFFUjtBQUFFRCxNQUFJLEVBQUUsa0JBQVI7QUFBNEJDLElBQUUsRUFBRTtBQUFoQyxDQUZRLEVBR1I7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLElBQUUsRUFBRTtBQUFyQixDQUhRLEVBSVI7QUFBRUQsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FKUSxFQUtSO0FBQUVELE1BQUksRUFBRSxRQUFSO0FBQWtCQyxJQUFFLEVBQUU7QUFBdEIsQ0FMUSxFQU1SO0FBQUVELE1BQUksRUFBRSxPQUFSO0FB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QUNLYixJQUFJLENBQUNMLElBRFYsRUFFSSxNQUFDLDBEQUFEO0FBQ0ksWUFBUSxFQUFFMkIsWUFEZDtBQUVJLFNBQUssRUFBRXZCLE1BRlg7QUFHSSxRQUFJLEVBQUMsTUFIVDtBQUlJLFNBQUssRUFBQyxnQkFKVjtBQUtJLFdBQU8sRUFBRUwsS0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQVlJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWFpQixLQUFiLENBWkosRUFjSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURKO0FBa0JILENBdEVEOztHQUFNZCxLOzs7QUFxRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44YjM0MGE3MDFhOTJlMzk0YjVlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IGNvbXBhcmVEYXRlRnVuYyBmcm9tIFwiLi4vY3VzdG9tRnVuY3Rpb25zL2NvbXBhcmVEYXRlRnVuY1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgIGdyaWQtZ2FwOiAzMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgfVxyXG5gO1xyXG5sZXQgd29yZHMgPSBbXHJcbiAgICB7IG5hbWU6IFwiS2F0b3dpY2VcIiwgaWQ6IDQ1IH0sXHJcbiAgICB7IG5hbWU6IFwiRMSFYnJvd2EgR8Ozcm5pY3phXCIsIGlkOiA0NiB9LFxyXG4gICAgeyBuYW1lOiBcIlR5Y2h5XCIsIGlkOiA0NyB9LFxyXG4gICAgeyBuYW1lOiBcIkphc3RyesSZYmllIHpkcsOzalwiLCBpZDogNDggfSxcclxuICAgIHsgbmFtZTogXCJSeWJuaWtcIiwgaWQ6IDQ5IH0sXHJcbiAgICB7IG5hbWU6IFwiQnl0b21cIiwgaWQ6IDUwIH0sXHJcbiAgICB7IG5hbWU6IFwiQmllbHNrby1CaWHFgmFcIiwgaWQ6IDUxIH0sXHJcbl07XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHJlc0RhdGEsIHdvcmRJRCB9KSA9PiB7XHJcbiAgICBjb25zdCB3b3JkID0gd29yZHMuZmluZCgod29yZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB3b3JkLmlkID09IHdvcmRJRDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHJlc0RhdGEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShyZXNEYXRhKTtcclxuICAgIH0sIFtyZXNEYXRhXSk7XHJcblxyXG4gICAgbGV0IGFycmF5T2ZJdGVtcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnNvcnQoY29tcGFyZURhdGVGdW5jKTtcclxuXHJcbiAgICBsZXQgbGlzdHMgPSBhcnJheU9mSXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1ByYWN0aWNlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpWzFdLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ByYWN0aWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlcz17ZS5wcmFjdGljZVswXS5wbGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJQcmFrdHlrYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2UucHJhY3RpY2VbMF0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudGhlb3J5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzPXtlLnRoZW9yeS5wbGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJUZW9yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlLnRoZW9yeS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3QgaXNQcmFjdGljZT17aXNQcmFjdGljZX0ga2V5PXtpbmRleH0gZGF5PXtpWzBdfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhcj5cclxuICAgICAgICAgICAgICAgIHt3b3JkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZElEfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIld5YsOzciB3b3JkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+IHtsaXN0c308L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gICAgY3R4LnF1ZXJ5LmlkID8gY3R4LnF1ZXJ5LmlkIDogKGN0eC5xdWVyeS5pZCA9IDQ4KTtcclxuXHJcbiAgICBsZXQgcmVzRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD0ke2N0eC5xdWVyeS5pZH0mZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVzRGF0YSA9IHsgLi4ucmVzRGF0YSwgLi4uanNvbi50ZXJtcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHJlc0RhdGEsIHdvcmRJRDogY3R4LnF1ZXJ5LmlkIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==