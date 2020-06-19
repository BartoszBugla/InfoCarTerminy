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


var _s = $RefreshSig$();

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

  console.log(data); // let arrayOfItems = Object.values(data);
  // let dates = Object.keys(data);
  // let lists = arrayOfItems.map((i, index) => {
  //     const items = i.map((e, eindex) => {
  //         if (e.practice) {
  //             return (
  //                 <ListItem key={eindex}>
  //                     {" "}
  //                     <b>Praktyka</b> : {e.practice[0].date}
  //                 </ListItem>
  //             );
  //         }
  //         if (e.theory) return <ListItem key={eindex}> Teoria: {e.theory.date}</ListItem>;
  //     });
  //     return (
  //         <List key={index} day={dates[index]}>
  //             {items}
  //         </List>
  //     );
  // });
  // const handleChange = (event) => {
  //     Router.push({
  //         pathname: "/",
  //         query: { id: event.target.value },
  //     });
  // };
  // for (let i = 6; i < 12; i++) {}
  // return (
  //     <div>
  //         Jastrzebie zdrój
  //         <Select
  //             onChange={handleChange}
  //             value={wordID}
  //             type="number"
  //             title="wybór worda"
  //             lastNumber="50"
  //         />
  //         {lists}
  //     </div>
  // );

  return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3b3JkcyIsIm5hbWUiLCJpZCIsImluZGV4IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGVybXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxJQUFFLEVBQUU7QUFBaEMsQ0FBRCxDQUFaOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsRUFEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCQyxTQUFLLG1HQUMwRkQsQ0FEMUYsc0JBQUwsQ0FHS0UsSUFITCxDQUdVLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSFYsRUFJS0YsSUFKTCxDQUlVLFVBQUNFLElBQUQ7QUFBQSxhQUFVTCxPQUFPLGlDQUFNRCxJQUFOLEdBQWVNLElBQUksQ0FBQ0MsS0FBcEIsRUFBakI7QUFBQSxLQUpWO0FBS0g7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaLEVBVGdCLENBVWhCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQU8sSUFBUDtBQUNILENBckRELEMsQ0F1REE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7R0FwRU1GLEs7O0FBc0VTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjk0MDA2YmFkZTRhZDQ5NjIzN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxubGV0IHdvcmRzID0gW3sgbmFtZTogXCJqYXN0cnrEmWJpZSB6ZHLDs2pcIiwgaWQ6IDQ4IH1dO1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vaW5mby1jYXIucGwvc2VydmljZXMvd29yZC9hamF4L2dldFNjaGVkdWxlP3dvcmRJZD00OCZleGFtQ2F0ZWdvcnk9QiZtb250aD0yMDIwLTAke2l9Jl89MTU5MTg2MzU2MjI0MmBcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiBzZXREYXRhKHsgLi4uZGF0YSwgLi4uanNvbi50ZXJtcyB9KSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGxldCBhcnJheU9mSXRlbXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgLy8gbGV0IGRhdGVzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcblxyXG4gICAgLy8gbGV0IGxpc3RzID0gYXJyYXlPZkl0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBpdGVtcyA9IGkubWFwKChlLCBlaW5kZXgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGUucHJhY3RpY2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17ZWluZGV4fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8Yj5QcmFrdHlrYTwvYj4gOiB7ZS5wcmFjdGljZVswXS5kYXRlfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGlmIChlLnRoZW9yeSkgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2VpbmRleH0+IFRlb3JpYToge2UudGhlb3J5LmRhdGV9PC9MaXN0SXRlbT47XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICAgIDxMaXN0IGtleT17aW5kZXh9IGRheT17ZGF0ZXNbaW5kZXhdfT5cclxuICAgIC8vICAgICAgICAgICAgIHtpdGVtc31cclxuICAgIC8vICAgICAgICAgPC9MaXN0PlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgIFJvdXRlci5wdXNoKHtcclxuICAgIC8vICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgLy8gICAgICAgICBxdWVyeTogeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7fVxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICBKYXN0cnplYmllIHpkcsOzalxyXG4gICAgLy8gICAgICAgICA8U2VsZWN0XHJcbiAgICAvLyAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgLy8gICAgICAgICAgICAgdmFsdWU9e3dvcmRJRH1cclxuICAgIC8vICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU9XCJ3eWLDs3Igd29yZGFcIlxyXG4gICAgLy8gICAgICAgICAgICAgbGFzdE51bWJlcj1cIjUwXCJcclxuICAgIC8vICAgICAgICAgLz5cclxuICAgIC8vICAgICAgICAge2xpc3RzfVxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLy8gaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4vLyAgICAgbGV0IHJlc0RhdGEgPSB7fTtcclxuXHJcbi8vICAgICBsZXQgbG9vcERhdGEgPSB7fTtcclxuLy8gICAgIGZvciAobGV0IGkgPSA2OyBpIDwgMTI7IGkrKykge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4vLyAgICAgICAgICAgICBgaHR0cHM6Ly9pbmZvLWNhci5wbC9zZXJ2aWNlcy93b3JkL2FqYXgvZ2V0U2NoZWR1bGU/d29yZElkPTQ4JmV4YW1DYXRlZ29yeT1CJm1vbnRoPTIwMjAtMCR7aX0mXz0xNTkxODYzNTYyMjQyYFxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICAgICAgbG9vcERhdGEgPSB7IC4uLmxvb3BEYXRhLCAuLi5qc29uLnRlcm1zIH07XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHsgcmVzRGF0YSwgd29yZElEOiBjdHgucXVlcnkuaWQgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9