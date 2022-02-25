"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_codepage_clas_mjs"],{

/***/ "../output/cl_abap_codepage.clas.mjs":
/*!*******************************************!*\
  !*** ../output/cl_abap_codepage.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_codepage\": () => (/* binding */ cl_abap_codepage)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_codepage.clas.abap\nclass cl_abap_codepage {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async convert_to(INPUT) {\n    return cl_abap_codepage.convert_to(INPUT);\n  }\n  static async convert_to(INPUT) {\n    let output = new abap.types.XString();\n    let source = new abap.types.String();\n    if (INPUT && INPUT.source) {source.set(INPUT.source);}\n    let conv = new abap.types.ABAPObject();\n    conv.set(await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')}));\n    await conv.get().convert({data: source, buffer: output});\n    return output;\n  }\n  async convert_from(INPUT) {\n    return cl_abap_codepage.convert_from(INPUT);\n  }\n  static async convert_from(INPUT) {\n    let output = new abap.types.String();\n    let input = new abap.types.XString();\n    if (INPUT && INPUT.input) {input.set(INPUT.input);}\n    let conv = new abap.types.ABAPObject();\n    let data = new abap.types.String();\n    conv.set(await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')}));\n    await conv.get().convert({input: input, data: output});\n    return output;\n  }\n  async sap_codepage(INPUT) {\n    return cl_abap_codepage.sap_codepage(INPUT);\n  }\n  static async sap_codepage(INPUT) {\n    let codepage = new abap.types.Character({length: 20, qualifiedName: \"abap_encoding\"});\n    let encoding = new abap.types.String();\n    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}\n    abap.statements.assert(abap.compare.eq(encoding, new abap.types.Character({length: 8}).set('UTF-16LE')));\n    codepage.set(new abap.types.Character({length: 4}).set('4103'));\n    return codepage;\n  }\n}\nabap.Classes['CL_ABAP_CODEPAGE'] = cl_abap_codepage;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_codepage.clas.mjs?");

/***/ })

}]);