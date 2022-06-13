"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_sxml_string_reader_clas_mjs"],{

/***/ "../output/cl_sxml_string_reader.clas.mjs":
/*!************************************************!*\
  !*** ../output/cl_sxml_string_reader.clas.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_sxml_string_reader\": () => (/* binding */ cl_sxml_string_reader)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_sxml_string_reader_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_sxml_string_reader.clas.locals.mjs */ \"../output/cl_sxml_string_reader.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_sxml_string_reader.clas.abap\nclass cl_sxml_string_reader {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create(INPUT) {\n    return cl_sxml_string_reader.create(INPUT);\n  }\n  static async create(INPUT) {\n    let reader = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_READER\"});\n    let data = new abap.types.XString();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    reader.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER']()).constructor_({iv_json: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({input: data}))}));\n    return reader;\n  }\n}\nabap.Classes['CL_SXML_STRING_READER'] = cl_sxml_string_reader;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/cl_sxml_string_reader.clas.mjs?");

/***/ })

}]);