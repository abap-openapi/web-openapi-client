"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_tabledescr_clas_mjs"],{

/***/ "../output/cl_abap_tabledescr.clas.mjs":
/*!*********************************************!*\
  !*** ../output/cl_abap_tabledescr.clas.mjs ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_tabledescr\": () => (/* binding */ cl_abap_tabledescr)\n/* harmony export */ });\nconst {cl_abap_typedescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_typedescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_typedescr.clas.mjs */ \"../output/cl_abap_typedescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_tabledescr.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_tabledescr extends cl_abap_typedescr {\n  async create(INPUT) {\n    return cl_abap_tabledescr.create(INPUT);\n  }\n  static async create(INPUT) {\n    let ref = new abap.types.ABAPObject();\n    let type = new abap.types.ABAPObject();\n    if (INPUT && INPUT.type) {type.set(INPUT.type);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return ref;\n  }\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.lo_type = new abap.types.ABAPObject();\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let lv_dummy = new abap.types.Integer();\n    lv_dummy = data.getRowType();\n    this.lo_type.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({data: lv_dummy}));\n    return this;\n  }\n  async get_table_line_type() {\n    let type = new abap.types.ABAPObject();\n    type.set(this.lo_type);\n    return type;\n  }\n}\nabap.Classes['CL_ABAP_TABLEDESCR'] = cl_abap_tabledescr;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_tabledescr.clas.mjs?");

/***/ })

}]);