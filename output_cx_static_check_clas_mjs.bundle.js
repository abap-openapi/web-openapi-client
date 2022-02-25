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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cx_static_check\": () => (/* binding */ cx_static_check)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cx_static_check.clas.abap\nclass cx_static_check extends cx_root {\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    let textid = new abap.types.Structure({msgid: new abap.types.String(), msgno: new abap.types.String(), attr1: new abap.types.String(), attr2: new abap.types.String(), attr3: new abap.types.String(), attr4: new abap.types.String()});\n    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}\n    let previous = new abap.types.ABAPObject();\n    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}\n    let msgv1 = new abap.types.Character();\n    if (INPUT && INPUT.msgv1) {msgv1.set(INPUT.msgv1);}\n    let msgv2 = new abap.types.Character();\n    if (INPUT && INPUT.msgv2) {msgv2.set(INPUT.msgv2);}\n    let msgv3 = new abap.types.Character();\n    if (INPUT && INPUT.msgv3) {msgv3.set(INPUT.msgv3);}\n    let msgv4 = new abap.types.Character();\n    if (INPUT && INPUT.msgv4) {msgv4.set(INPUT.msgv4);}\n    \n    return this;\n  }\n}\nabap.Classes['CX_STATIC_CHECK'] = cx_static_check;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/cx_static_check.clas.mjs?");

/***/ })

}]);