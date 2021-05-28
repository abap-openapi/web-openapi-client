/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_matcher_clas_mjs"],{

/***/ "../output/cl_abap_matcher.clas.mjs":
/*!******************************************!*\
  !*** ../output/cl_abap_matcher.clas.mjs ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_matcher\": () => (/* binding */ cl_abap_matcher)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_matcher.clas.abap\nclass cl_abap_matcher {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_pattern = new abap.types.String();\n    this.mv_text = new abap.types.String();\n    this.mv_ignore_case = new abap.types.Character();\n    let pattern = new abap.types.Character();\n    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}\n    let ignore_case = new abap.types.Character();\n    if (INPUT && INPUT.ignore_case) {ignore_case.set(INPUT.ignore_case);}\n    let text = new abap.types.Character();\n    if (INPUT && INPUT.text) {text = INPUT.text;}\n    this.mv_pattern.set(pattern);\n    this.mv_text.set(text);\n    this.mv_ignore_case.set(ignore_case);\n    return this;\n  }\n  async find_all() {\n    let rt_matches = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}))}));\n    if (abap.compare.eq(this.mv_ignore_case, abap.builtin.abap_true)) {\n      abap.statements.find(this.mv_text, {regex: this.mv_pattern, first: false, ignoringCase: true, results: rt_matches});\n    } else {\n      abap.statements.find(this.mv_text, {regex: this.mv_pattern, first: false, results: rt_matches});\n    }\n    return rt_matches;\n  }\n}\nabap.Classes['CL_ABAP_MATCHER'] = cl_abap_matcher;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_matcher.clas.mjs?");

/***/ })

}]);