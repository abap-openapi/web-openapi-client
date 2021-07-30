"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cx_static_check_clas_mjs"],{

/***/ "../output/cx_static_check.clas.mjs":
/*!******************************************!*\
  !*** ../output/cx_static_check.clas.mjs ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cx_static_check\": () => (/* binding */ cx_static_check)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cx_static_check.clas.abap\nclass cx_static_check extends cx_root {\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    let previous = new abap.types.ABAPObject();\n    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}\n    \n    return this;\n  }\n}\nabap.Classes['CX_STATIC_CHECK'] = cx_static_check;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cx_static_check.clas.mjs?");

/***/ })

}]);