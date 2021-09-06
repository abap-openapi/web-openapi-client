"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_gdt_conversion_clas_mjs"],{

/***/ "../output/cl_gdt_conversion.clas.mjs":
/*!********************************************!*\
  !*** ../output/cl_gdt_conversion.clas.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_gdt_conversion\": () => (/* binding */ cl_gdt_conversion)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_gdt_conversion.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_gdt_conversion {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async language_code_outbound(INPUT) {\n    return cl_gdt_conversion.language_code_outbound(INPUT);\n  }\n  static async language_code_outbound(INPUT) {\n    let im_value = new abap.types.Character({qualifiedName: \"SPRAS\"});\n    if (INPUT && INPUT.im_value) {im_value.set(INPUT.im_value);}\n    let ex_value = new abap.types.Character({length: 2, qualifiedName: \"LAISO\"});\n    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}\n    let unique46 = im_value;\n    if (abap.compare.eq(unique46, new abap.types.Character({length: 1}).set('E'))) {\n      ex_value.set(new abap.types.Character({length: 2}).set('en'));\n    } else {\n      abap.statements.assert(abap.compare.eq(constant_0, constant_1));\n    }\n  }\n}\nabap.Classes['CL_GDT_CONVERSION'] = cl_gdt_conversion;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_gdt_conversion.clas.mjs?");

/***/ })

}]);