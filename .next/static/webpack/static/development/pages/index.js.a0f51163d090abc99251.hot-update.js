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
            lineNumber: 58,
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
          lineNumber: 68,
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
        lineNumber: 78,
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
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 95,
      columnNumber: 17
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, " ", lists), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwicmVzRGF0YSIsIndvcmRJRCIsIndvcmQiLCJmaW5kIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImFycmF5T2ZJdGVtcyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiY29tcGFyZURhdGVGdW5jIiwibGlzdHMiLCJtYXAiLCJpIiwiaXNQcmFjdGljZSIsIml0ZW1zIiwiZSIsImVpbmRleCIsInByYWN0aWNlIiwicGxhY2VzIiwiZGF0ZSIsInRoZW9yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb1lBQWY7S0FBTUYsUztBQW1CTixJQUFJRyxLQUFLLEdBQUcsQ0FDUjtBQUFFQyxNQUFJLEVBQUUsVUFBUjtBQUFvQkMsSUFBRSxFQUFFO0FBQXhCLENBRFEsRUFFUjtBQUFFRCxNQUFJLEVBQUUsa0JBQVI7QUFBNEJDLElBQUUsRUFBRTtBQUFoQyxDQUZRLEVBR1I7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLElBQUUsRUFBRTtBQUFyQixDQUhRLEVBSVI7QUFBRUQsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FKUSxFQUtSO0FBQUVELE1BQUksRUFBRSxRQUFSO0FBQWtCQyxJQUFFLEVBQUU7QUFBdEIsQ0FMUSxFQU1SO0FBQUVELE1BQUksRUFBRSxPQUFSO0FB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QUNLYixJQUFJLENBQUNMLElBRFYsRUFFSSxNQUFDLDBEQUFEO0FBQ0ksWUFBUSxFQUFFMkIsWUFEZDtBQUVJLFNBQUssRUFBRXZCLE1BRlg7QUFHSSxRQUFJLEVBQUMsTUFIVDtBQUlJLFNBQUssRUFBQyxnQkFKVjtBQUtJLFdBQU8sRUFBRUwsS0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQVlJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWFpQixLQUFiLENBWkosRUFjSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURKO0FBa0JILENBdEVEOztHQUFNZCxLOzs7QUFxRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hMGY1MTE2M2QwOTBhYmM5OTI1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IGNvbXBhcmVEYXRlRnVuYyBmcm9tIFwiLi4vY3VzdG9tRnVuY3Rpb25zL2NvbXBhcmVEYXRlRnVuY1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgIGdyaWQtZ2FwOiAzMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICB9XHJcbmA7XHJcbmxldCB3b3JkcyA9IFtcclxuICAgIHsgbmFtZTogXCJLYXRvd2ljZVwiLCBpZDogNDUgfSxcclxuICAgIHsgbmFtZTogXCJExIVicm93YSBHw7NybmljemFcIiwgaWQ6IDQ2IH0sXHJcbiAgICB7IG5hbWU6IFwiVHljaHlcIiwgaWQ6IDQ3IH0sXHJcbiAgICB7IG5hbWU6IFwiSmFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9LFxyXG4gICAgeyBuYW1lOiBcIlJ5Ym5pa1wiLCBpZDogNDkgfSxcclxuICAgIHsgbmFtZTogXCJCeXRvbVwiLCBpZDogNTAgfSxcclxuICAgIHsgbmFtZTogXCJCaWVsc2tvLUJpYcWCYVwiLCBpZDogNTEgfSxcclxuXTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgcmVzRGF0YSwgd29yZElEIH0pID0+IHtcclxuICAgIGNvbnN0IHdvcmQgPSB3b3Jkcy5maW5kKCh3b3JkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmQuaWQgPT0gd29yZElEO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocmVzRGF0YSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlc0RhdGEpO1xyXG4gICAgfSwgW3Jlc0RhdGFdKTtcclxuXHJcbiAgICBsZXQgYXJyYXlPZkl0ZW1zID0gT2JqZWN0LmVudHJpZXMoZGF0YSkuc29ydChjb21wYXJlRGF0ZUZ1bmMpO1xyXG5cclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGlzUHJhY3RpY2UgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGlbMV0ubWFwKChlLCBlaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucHJhY3RpY2UpIHtcclxuICAgICAgICAgICAgICAgIGlzUHJhY3RpY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzPXtlLnByYWN0aWNlWzBdLnBsYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlByYWt0eWthXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZS5wcmFjdGljZVswXS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50aGVvcnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZXM9e2UudGhlb3J5LnBsYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlRlb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2UudGhlb3J5LmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBpc1ByYWN0aWNlPXtpc1ByYWN0aWNlfSBrZXk9e2luZGV4fSBkYXk9e2lbMF19PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyPlxyXG4gICAgICAgICAgICAgICAge3dvcmQubmFtZX1cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV3liw7NyIHdvcmRhXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj4ge2xpc3RzfTwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBjdHgucXVlcnkuaWQgPyBjdHgucXVlcnkuaWQgOiAoY3R4LnF1ZXJ5LmlkID0gNDgpO1xyXG5cclxuICAgIGxldCByZXNEYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPSR7Y3R4LnF1ZXJ5LmlkfSZleGFtQ2F0ZWdvcnk9QiZtb250aD0yMDIwLTAke2l9Jl89MTU5MTg2MzU2MjI0MmA7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXNEYXRhID0geyAuLi5yZXNEYXRhLCAuLi5qc29uLnRlcm1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcmVzRGF0YSwgd29yZElEOiBjdHgucXVlcnkuaWQgfSB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9