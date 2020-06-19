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

  console.log(data);
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
            lineNumber: 25,
            columnNumber: 21
          }
        }, " ", __jsx("b", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }
        }, "Praktyka"), " : ", e.practice[0].date);
      }

      if (e.theory) return __jsx(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: eindex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
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
        lineNumber: 35,
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
      lineNumber: 48,
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
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGVybXMiLCJjb25zb2xlIiwibG9nIiwiYXJyYXlPZkl0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0ZXMiLCJrZXlzIiwibGlzdHMiLCJtYXAiLCJpdGVtcyIsImUiLCJlaW5kZXgiLCJwcmFjdGljZSIsImRhdGUiLCJ0aGVvcnkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJ3b3JkSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FBRCxDQUFaOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsRUFEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCQyxTQUFLLG1HQUMwRkQsQ0FEMUYsc0JBQUwsQ0FHS0UsSUFITCxDQUdVLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSFYsRUFJS0YsSUFKTCxDQUlVLFVBQUNFLElBQUQ7QUFBQSxhQUFVTCxPQUFPLGlDQUFNRCxJQUFOLEdBQWVNLElBQUksQ0FBQ0MsS0FBcEIsRUFBakI7QUFBQSxLQUpWO0FBS0g7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0EsTUFBSVUsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osSUFBZCxDQUFuQjtBQUNBLE1BQUlhLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxJQUFQLENBQVlkLElBQVosQ0FBWjtBQUVBLE1BQUllLEtBQUssR0FBR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNkLENBQUQsRUFBSUosS0FBSixFQUFjO0FBQ3ZDLFFBQU1tQixLQUFLLEdBQUdmLENBQUMsQ0FBQ2MsR0FBRixDQUFNLFVBQUNFLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQy9CLFVBQUlELENBQUMsQ0FBQ0UsUUFBTixFQUFnQjtBQUNaLGVBQ0ksTUFBQyw0REFBRDtBQUFVLGFBQUcsRUFBRUQsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0ssR0FETCxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosU0FFdUJELENBQUMsQ0FBQ0UsUUFBRixDQUFXLENBQVgsRUFBY0MsSUFGckMsQ0FESjtBQU1IOztBQUNELFVBQUlILENBQUMsQ0FBQ0ksTUFBTixFQUFjLE9BQU8sTUFBQyw0REFBRDtBQUFVLFdBQUcsRUFBRUgsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpQ0QsQ0FBQyxDQUFDSSxNQUFGLENBQVNELElBQTFDLENBQVA7QUFDakIsS0FWYSxDQUFkO0FBWUEsV0FDSSxNQUFDLHdEQUFEO0FBQU0sU0FBRyxFQUFFdkIsS0FBWDtBQUFrQixTQUFHLEVBQUVlLEtBQUssQ0FBQ2YsS0FBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ttQixLQURMLENBREo7QUFLSCxHQWxCVyxDQUFaOztBQW1CQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUJDLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsR0FERjtBQUVSQyxXQUFLLEVBQUU7QUFBRS9CLFVBQUUsRUFBRTJCLEtBQUssQ0FBQ0ssTUFBTixDQUFhQztBQUFuQjtBQUZDLEtBQVo7QUFJSCxHQUxEOztBQU1BLE9BQUssSUFBSTVCLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsRUFBcEIsRUFBd0JBLEVBQUMsRUFBekIsRUFBNkIsQ0FBRTs7QUFDL0IsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVJLE1BQUMsMERBQUQ7QUFDSSxZQUFRLEVBQUVxQixZQURkO0FBRUksU0FBSyxFQUFFUSxNQUZYO0FBR0ksUUFBSSxFQUFDLFFBSFQ7QUFJSSxTQUFLLEVBQUMsZ0JBSlY7QUFLSSxjQUFVLEVBQUMsSUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTS2hCLEtBVEwsQ0FESjtBQWFILENBcERELEMsQ0FzREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7R0FuRU1qQixLOztBQXFFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmEyZmIyMTYyZTg4MDVjZTY4NTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCB3b3JkcyA9IFt7IG5hbWU6IFwiamFzdHJ6xJliaWUgemRyw7NqXCIsIGlkOiA0OCB9XTtcclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9NDgmZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4gc2V0RGF0YSh7IC4uLmRhdGEsIC4uLmpzb24udGVybXMgfSkpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBsZXQgYXJyYXlPZkl0ZW1zID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuICAgIGxldCBkYXRlcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG5cclxuICAgIGxldCBsaXN0cyA9IGFycmF5T2ZJdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpLm1hcCgoZSwgZWluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnByYWN0aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+UHJha3R5a2E8L2I+IDoge2UucHJhY3RpY2VbMF0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50aGVvcnkpIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtlaW5kZXh9PiBUZW9yaWE6IHtlLnRoZW9yeS5kYXRlfTwvTGlzdEl0ZW0+O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e2luZGV4fSBkYXk9e2RhdGVzW2luZGV4XX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSmFzdHJ6ZWJpZSB6ZHLDs2pcclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkSUR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwid3liw7NyIHdvcmRhXCJcclxuICAgICAgICAgICAgICAgIGxhc3ROdW1iZXI9XCI1MFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtsaXN0c31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBpbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbi8vICAgICBsZXQgcmVzRGF0YSA9IHt9O1xyXG5cclxuLy8gICAgIGxldCBsb29wRGF0YSA9IHt9O1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbi8vICAgICAgICAgICAgIGBodHRwczovL2luZm8tY2FyLnBsL3NlcnZpY2VzL3dvcmQvYWpheC9nZXRTY2hlZHVsZT93b3JkSWQ9NDgmZXhhbUNhdGVnb3J5PUImbW9udGg9MjAyMC0wJHtpfSZfPTE1OTE4NjM1NjIyNDJgXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAgICAgICBsb29wRGF0YSA9IHsgLi4ubG9vcERhdGEsIC4uLmpzb24udGVybXMgfTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4geyByZXNEYXRhLCB3b3JkSUQ6IGN0eC5xdWVyeS5pZCB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=