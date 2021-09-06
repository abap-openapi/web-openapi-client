"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_regex_clas_mjs"],{

/***/ "../output/cl_abap_regex.clas.mjs":
/*!****************************************!*\
  !*** ../output/cl_abap_regex.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_regex\": () => (/* binding */ cl_abap_regex)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_regex.clas.abap\nclass cl_abap_regex {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_pattern = new abap.types.String();\n    this.mv_ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let pattern = new abap.types.Character();\n    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}\n    let ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.ignore_case) {ignore_case.set(INPUT.ignore_case);}\n    this.mv_pattern.set(pattern);\n    this.mv_ignore_case.set(ignore_case);\n    return this;\n  }\n  async create_matcher(INPUT) {\n    let ro_matcher = new abap.types.ABAPObject();\n    let text = new abap.types.Character();\n    if (INPUT && INPUT.text) {text = INPUT.text;}\n    ro_matcher.set(await (new abap.Classes['CL_ABAP_MATCHER']()).constructor_({pattern: this.mv_pattern, ignore_case: this.mv_ignore_case, text: text}));\n    return ro_matcher;\n  }\n}\nabap.Classes['CL_ABAP_REGEX'] = cl_abap_regex;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_regex.clas.mjs?");

/***/ })

}]);