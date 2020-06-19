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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\car\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1y45027-0"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;grid-gap:30px 10px;font-size:16px;@media only screen and (max-width:1200px){grid-template-columns:repeat(3,1fr);font-size:16px;}@media only screen and (max-width:900px){grid-template-columns:repeat(2,1fr);font-size:16px;}@media only screen and (max-width:600px){grid-template-columns:repeat(1,1fr);}"]);
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
            lineNumber: 56,
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
          lineNumber: 66,
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
        lineNumber: 76,
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
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, word.Name, __jsx(_components_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleChange,
    value: wordID,
    type: "word",
    title: "Wyb\xF3r worda",
    options: words,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, " ", lists));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsIndvcmQiLCJmaW5kIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImFycmF5T2ZJdGVtcyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiY29tcGFyZURhdGVGdW5jIiwibGlzdHMiLCJtYXAiLCJpIiwiaXNQcmFjdGljZSIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwicGxhY2VzIiwiZGF0ZSIsInRoZW9yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdYQUFmO0tBQU1GLFM7QUFrQk4sSUFBSUcsS0FBSyxHQUFHLENBQ1I7QUFBRUMsTUFBSSxFQUFFLFVBQVI7QUFBb0JDLElBQUUsRUFBRTtBQUF4QixDQURRLEVBRVI7QUFBRUQsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FGUSxFQUdSO0FBQUVELE1BQUksRUFBRSxPQUFSO0FBQWlCQyxJQUFFLEVBQUU7QUFBckIsQ0FIUSxFQUlSO0FBQUVELE1BQUksRUFBRSxrQkFBUjtBQUE0QkMsSUFBRSxFQUFFO0FBQWhDLENBSlEsRUFLUjtBQUFFRCxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsSUFBRSxFQUFFO0FBQXRCLENBTFEsRUFNUjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtB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S0FDS2IsSUFBSSxDQUFDK0IsSUFEVixFQUVJLE1BQUMsMERBQUQ7QUFDSSxZQUFRLEVBQUVULFlBRGQ7QUFFSSxTQUFLLEVBQUV2QixNQUZYO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFJSSxTQUFLLEVBQUMsZ0JBSlY7QUFLSSxXQUFPLEVBQUVMLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFZSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFhaUIsS0FBYixDQVpKLENBREo7QUFnQkgsQ0FwRUQ7O0dBQU1kLEs7OztBQW1GU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI2MjBiNmZkM2YzMzE2M2Q5Y2IyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgY29tcGFyZURhdGVGdW5jIGZyb20gXCIuLi9jdXN0b21GdW5jdGlvbnMvY29tcGFyZURhdGVGdW5jXCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDMwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIH1cclxuYDtcclxubGV0IHdvcmRzID0gW1xyXG4gICAgeyBuYW1lOiBcIkthdG93aWNlXCIsIGlkOiA0NSB9LFxyXG4gICAgeyBuYW1lOiBcIkTEhWJyb3dhIEfDs3JuaWN6YVwiLCBpZDogNDYgfSxcclxuICAgIHsgbmFtZTogXCJUeWNoeVwiLCBpZDogNDcgfSxcclxuICAgIHsgbmFtZTogXCJKYXN0cnrEmWJpZSB6ZHLDs2pcIiwgaWQ6IDQ4IH0sXHJcbiAgICB7IG5hbWU6IFwiUnlibmlrXCIsIGlkOiA0OSB9LFxyXG4gICAgeyBuYW1lOiBcIkJ5dG9tXCIsIGlkOiA1MCB9LFxyXG4gICAgeyBuYW1lOiBcIkJpZWxza28tQmlhxYJhXCIsIGlkOiA1MSB9LFxyXG5dO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyByZXNEYXRhLCB3b3JkSUQgfSkgPT4ge1xyXG4gICAgY29uc3Qgd29yZCA9IHdvcmRzLmZpbmQoKHdvcmQpID0+IHtcclxuICAgICAgICByZXR1cm4gd29yZC5pZCA9PSB3b3JkSUQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShyZXNEYXRhKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEocmVzRGF0YSk7XHJcbiAgICB9LCBbcmVzRGF0YV0pO1xyXG5cclxuICAgIGxldCBhcnJheU9mSXRlbXMgPSBPYmplY3QuZW50cmllcyhkYXRhKS5zb3J0KGNvbXBhcmVEYXRlRnVuYyk7XHJcblxyXG4gICAgbGV0IGxpc3RzID0gYXJyYXlPZkl0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgaXNQcmFjdGljZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaVsxXS5tYXAoKGUsIGVpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5wcmFjdGljZSkge1xyXG4gICAgICAgICAgICAgICAgaXNQcmFjdGljZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZXM9e2UucHJhY3RpY2VbMF0ucGxhY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiUHJha3R5a2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlLnByYWN0aWNlWzBdLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLnRoZW9yeSlcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlcz17ZS50aGVvcnkucGxhY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiVGVvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZS50aGVvcnkuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGlzUHJhY3RpY2U9e2lzUHJhY3RpY2V9IGtleT17aW5kZXh9IGRheT17aVswXX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wZXJzaXN0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBldmVudC50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZiYXI+XHJcbiAgICAgICAgICAgICAgICB7d29yZC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmRJRH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXeWLDs3Igd29yZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPiB7bGlzdHN9PC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGN0eC5xdWVyeS5pZCA/IGN0eC5xdWVyeS5pZCA6IChjdHgucXVlcnkuaWQgPSA0OCk7XHJcblxyXG4gICAgbGV0IHJlc0RhdGEgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9JHtjdHgucXVlcnkuaWR9JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYDtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJlc0RhdGEgPSB7IC4uLnJlc0RhdGEsIC4uLmpzb24udGVybXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyByZXNEYXRhLCB3b3JkSUQ6IGN0eC5xdWVyeS5pZCB9IH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=