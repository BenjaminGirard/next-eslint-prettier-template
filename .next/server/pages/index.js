"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/navbar/index.tsx":
/*!*************************************!*\
  !*** ./components/navbar/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": () => (/* binding */ Nav),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n// Note: Uncomment import lines during working with JSX Compiler.\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n\n\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Nav, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SideMenu, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Menu\"\n                }, void 0, false, {\n                    fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"#\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"#\",\n                        children: \"Gallery\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"#\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {}, void 0, false, {\n                fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/components/navbar/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\nconst Nav = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex; // <---------- required\n`;\nconst SideMenu = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  padding: 5px;\n  background: #aacdd2;\n  flex: none;\n `;\n//\nconst Links = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\npadding: 5px;\n  background: #ddf9c4;\n  flex: none\n`;\nconst Link = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().a)`\npadding: 0 5px\n`;\nconst Spacer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\nbackground: #fff9c4;\n  flex: 1 // <----------------- to fill empty navbar space\n`;\nconst UserMenu = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\npadding: 5px;\n  background: #bbdefb;\n  flex: none\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUVBQWlFO0FBQ2pFLDZCQUE2QjtBQUM3QixvQ0FBb0M7QUFFcEM7QUFBdUM7QUFFdkMsTUFBTUMsTUFBTSxHQUFHLElBQW1CO0lBQ2hDLHFCQUNFLDhEQUFDQyxHQUFHOzswQkFDRiw4REFBQ0MsUUFBUTswQkFDUCw0RUFBQ0MsUUFBTTs4QkFBQyxNQUFJOzs7Ozs2QkFBUzs7Ozs7eUJBQ1o7MEJBQ1gsOERBQUNDLEtBQUc7O2tDQUNGLDhEQUFDQyxJQUFJO3dCQUFDQyxJQUFJLEVBQUMsR0FBRztrQ0FBQyxNQUFJOzs7OztpQ0FBTztrQ0FDMUIsOERBQUNELElBQUk7d0JBQUNDLElBQUksRUFBQyxHQUFHO2tDQUFDLFNBQU87Ozs7O2lDQUFPO2tDQUM3Qiw4REFBQ0QsSUFBSTt3QkFBQ0MsSUFBSSxFQUFDLEdBQUc7a0NBQUMsT0FBSzs7Ozs7aUNBQU87Ozs7Ozt5QkFDdkI7MEJBQ04sOERBQUNDLE1BQU07Ozs7eUJBQUU7MEJBQ1QsOERBQUNDLFFBQVE7O2tDQUNQLDhEQUFDTCxRQUFNO2tDQUFDLE9BQUs7Ozs7O2lDQUFTO2tDQUN0Qiw4REFBQ0EsUUFBTTtrQ0FBQyxTQUFPOzs7OztpQ0FBUzs7Ozs7O3lCQUNmOzs7Ozs7aUJBQ1AsQ0FDTjtDQUNIO0FBRU0sTUFBTUYsR0FBRyxHQUFHRiw4REFBVSxDQUFDOzs7Ozs7QUFNOUIsQ0FBQyxDQUFDO0FBRUYsTUFBTUcsUUFBUSxHQUFHSCw4REFBVSxDQUFDOzs7O0NBSTNCLENBQUM7QUFDRixFQUFFO0FBQ0YsTUFBTVUsS0FBSyxHQUFHViw4REFBVSxDQUFDOzs7O0FBSXpCLENBQUM7QUFFRCxNQUFNTSxJQUFJLEdBQUdOLDREQUFRLENBQUM7O0FBRXRCLENBQUM7QUFFRCxNQUFNUSxNQUFNLEdBQUdSLDhEQUFVLENBQUM7OztBQUcxQixDQUFDO0FBRUQsTUFBTVMsUUFBUSxHQUFHVCw4REFBVSxDQUFDOzs7O0FBSTVCLENBQUM7QUFFRCxpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1kcml2ZW4tcC8uL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4LnRzeD8zODc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6IFVuY29tbWVudCBpbXBvcnQgbGluZXMgZHVyaW5nIHdvcmtpbmcgd2l0aCBKU1ggQ29tcGlsZXIuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZiYXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8U2lkZU1lbnU+XG4gICAgICAgIDxidXR0b24+TWVudTwvYnV0dG9uPlxuICAgICAgPC9TaWRlTWVudT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9JyMnPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9JyMnPkdhbGxlcnk8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9JyMnPkFib3V0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BhY2VyLz5cbiAgICAgIDxVc2VyTWVudT5cbiAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgIDwvVXNlck1lbnU+XG4gICAgPC9OYXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4OyAvLyA8LS0tLS0tLS0tLSByZXF1aXJlZFxuYDtcblxuY29uc3QgU2lkZU1lbnUgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNhYWNkZDI7XG4gIGZsZXg6IG5vbmU7XG4gYDtcbi8vXG5jb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXG5wYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkZGY5YzQ7XG4gIGZsZXg6IG5vbmVcbmA7XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbnBhZGRpbmc6IDAgNXB4XG5gO1xuXG5jb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YFxuYmFja2dyb3VuZDogI2ZmZjljNDtcbiAgZmxleDogMSAvLyA8LS0tLS0tLS0tLS0tLS0tLS0gdG8gZmlsbCBlbXB0eSBuYXZiYXIgc3BhY2VcbmA7XG5cbmNvbnN0IFVzZXJNZW51ID0gc3R5bGVkLmRpdmBcbnBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2JiZGVmYjtcbiAgZmxleDogbm9uZVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk5hdmJhciIsIk5hdiIsIlNpZGVNZW51IiwiYnV0dG9uIiwiZGl2IiwiTGluayIsImhyZWYiLCJTcGFjZXIiLCJVc2VyTWVudSIsIkxpbmtzIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/navbar */ \"./components/navbar/index.tsx\");\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/benjamingirard/perso/next-eslint-prettier-template/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ3VDO0FBRXZDLE1BQU1DLElBQUksR0FBYSxJQUFNO0lBQzNCLHFCQUNFLDhEQUFDRCx5REFBTTs7OztpQkFBRSxDQUNWO0NBQ0Y7QUFFRCxpRUFBZUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtZHJpdmVuLXAvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnY29tcG9uZW50cy9uYXZiYXInO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();