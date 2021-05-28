/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_random_clas_mjs"],{

/***/ "../output/cl_abap_random.clas.mjs":
/*!*****************************************!*\
  !*** ../output/cl_abap_random.clas.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_random\": () => (/* binding */ cl_abap_random)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_random.clas.abap\nclass cl_abap_random {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create() {\n    return cl_abap_random.create();\n  }\n  static async create() {\n    let ro_random = new abap.types.ABAPObject();\n    ro_random.set(await (new abap.Classes['CL_ABAP_RANDOM']()).constructor_());\n    return ro_random;\n  }\n  async int_() {\n    let rv_integer = new abap.types.Integer();\n    rv_integer.set(Math.floor(Math.random() * 2147483647));\n    return rv_integer;\n  }\n}\nabap.Classes['CL_ABAP_RANDOM'] = cl_abap_random;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_random.clas.mjs?");

/***/ })

}]);