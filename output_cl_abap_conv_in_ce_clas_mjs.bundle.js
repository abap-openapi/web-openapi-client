/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_conv_in_ce_clas_mjs"],{

/***/ "../output/cl_abap_conv_in_ce.clas.mjs":
/*!*********************************************!*\
  !*** ../output/cl_abap_conv_in_ce.clas.mjs ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_conv_in_ce\": () => (/* binding */ cl_abap_conv_in_ce)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_conv_in_ce.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_conv_in_ce {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_input = new abap.types.XString();\n    this.mv_js_encoding = new abap.types.String();\n    return this;\n  }\n  async create(INPUT) {\n    return cl_abap_conv_in_ce.create(INPUT);\n  }\n  static async create(INPUT) {\n    let ret = new abap.types.ABAPObject();\n    let encoding = new abap.types.Character({length: 20});\n    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}\n    if (INPUT === undefined || INPUT.encoding === undefined) {encoding = new abap.types.Character({length: 5}).set('UTF-8');}\n    let input = new abap.types.XString();\n    if (INPUT && INPUT.input) {input.set(INPUT.input);}\n    ret.set(await (new abap.Classes['CL_ABAP_CONV_IN_CE']()).constructor_());\n    let unique44 = encoding;\n    if (abap.compare.eq(unique44, new abap.types.Character({length: 5}).set('UTF-8'))) {\n      ret.get().mv_js_encoding.set(new abap.types.Character({length: 4}).set('utf8'));\n    } else if (abap.compare.eq(unique44, new abap.types.Character({length: 4}).set('4103'))) {\n      ret.get().mv_js_encoding.set(new abap.types.Character({length: 7}).set('utf16le'));\n    } else {\n      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));\n    }\n    ret.get().mv_input.set(input);\n    return ret;\n  }\n  async convert(INPUT) {\n    let input = new abap.types.XString();\n    if (INPUT && INPUT.input) {input.set(INPUT.input);}\n    let n = new abap.types.Integer();\n    if (INPUT && INPUT.n) {n.set(INPUT.n);}\n    let data = new abap.types.String();\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    if (abap.compare.initial(input)) {\n      return;\n    }\n    let result = Buffer.from(input.get(), \"hex\").toString(this.mv_js_encoding.get());\n    data.set(result);\n  }\n  async read(INPUT) {\n    let n = new abap.types.Integer();\n    if (INPUT && INPUT.n) {n.set(INPUT.n);}\n    let data = new abap.types.String();\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    await this.convert({input: this.mv_input, n: n, data: data});\n  }\n}\nabap.Classes['CL_ABAP_CONV_IN_CE'] = cl_abap_conv_in_ce;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_conv_in_ce.clas.mjs?");

/***/ })

}]);