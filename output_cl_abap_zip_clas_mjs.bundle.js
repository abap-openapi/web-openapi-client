"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_zip_clas_mjs"],{

/***/ "../output/cl_abap_zip.clas.mjs":
/*!**************************************!*\
  !*** ../output/cl_abap_zip.clas.mjs ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_zip\": () => (/* binding */ cl_abap_zip)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_zip.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_zip {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.files = new abap.types.Table(new abap.types.Structure({name: new abap.types.String()}, \"cl_abap_zip=>t_file\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    return this;\n  }\n  async get(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let content = new abap.types.XString();\n    if (INPUT && INPUT.content) {content = INPUT.content;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async add(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let content = new abap.types.XString();\n    if (INPUT && INPUT.content) {content.set(INPUT.content);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async load(INPUT) {\n    let zip = new abap.types.XString();\n    if (INPUT && INPUT.zip) {zip.set(INPUT.zip);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async save() {\n    let val = new abap.types.XString();\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n}\nabap.Classes['CL_ABAP_ZIP'] = cl_abap_zip;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_zip.clas.mjs?");

/***/ })

}]);