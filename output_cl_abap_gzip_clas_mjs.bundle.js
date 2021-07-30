"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_gzip_clas_mjs"],{

/***/ "../output/cl_abap_gzip.clas.mjs":
/*!***************************************!*\
  !*** ../output/cl_abap_gzip.clas.mjs ***!
  \***************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_gzip\": () => (/* binding */ cl_abap_gzip)\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_gzip.clas.abap\nclass cl_abap_gzip {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async decompress_binary(INPUT) {\n    return cl_abap_gzip.decompress_binary(INPUT);\n  }\n  static async decompress_binary(INPUT) {\n    let gzip_in = new abap.types.XString();\n    if (INPUT && INPUT.gzip_in) {gzip_in.set(INPUT.gzip_in);}\n    let raw_out = new abap.types.XString();\n    if (INPUT && INPUT.raw_out) {raw_out = INPUT.raw_out;}\n    let raw_out_len = new abap.types.Integer();\n    if (INPUT && INPUT.raw_out_len) {raw_out_len = INPUT.raw_out_len;}\n    const zlib = await __webpack_require__.e(/*! import() */ \"_c508\").then(__webpack_require__.t.bind(__webpack_require__, /*! zlib */ \"?c508\", 19));\n    const buf = Buffer.from(gzip_in.get(), \"hex\");\n    const decompress = zlib.inflateRawSync(buf).toString(\"hex\").toUpperCase();\n    raw_out.set(decompress);\n    raw_out_len.set(abap.builtin.xstrlen({val: raw_out}));\n  }\n  async compress_binary(INPUT) {\n    return cl_abap_gzip.compress_binary(INPUT);\n  }\n  static async compress_binary(INPUT) {\n    let raw_in = new abap.types.XString();\n    if (INPUT && INPUT.raw_in) {raw_in.set(INPUT.raw_in);}\n    let gzip_out = new abap.types.XString();\n    if (INPUT && INPUT.gzip_out) {gzip_out = INPUT.gzip_out;}\n    let gzip_out_len = new abap.types.Integer();\n    if (INPUT && INPUT.gzip_out_len) {gzip_out_len = INPUT.gzip_out_len;}\n    const zlib = await __webpack_require__.e(/*! import() */ \"_c508\").then(__webpack_require__.t.bind(__webpack_require__, /*! zlib */ \"?c508\", 19));\n    const buf = Buffer.from(raw_in.get(), \"hex\");\n    const gzi = zlib.deflateRawSync(buf).toString(\"hex\").toUpperCase();\n    gzip_out.set(gzi);\n    gzip_out_len.set(abap.builtin.xstrlen({val: gzip_out}));\n  }\n}\nabap.Classes['CL_ABAP_GZIP'] = cl_abap_gzip;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_gzip.clas.mjs?");

/***/ })

}]);