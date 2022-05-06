"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_refdescr_clas_mjs"],{

/***/ "../output/cl_abap_refdescr.clas.mjs":
/*!*******************************************!*\
  !*** ../output/cl_abap_refdescr.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_refdescr\": () => (/* binding */ cl_abap_refdescr)\n/* harmony export */ });\nconst {cl_abap_typedescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_typedescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_typedescr.clas.mjs */ \"../output/cl_abap_typedescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_refdescr.clas.abap\nclass cl_abap_refdescr extends cl_abap_typedescr {\n  async constructor_() {\n    await super.constructor_();\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_referenced_type() {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    type.set(await (new abap.Classes['CL_ABAP_TYPEDESCR']()).constructor_());\n    type.get().absolute_name.set(new abap.types.Character({length: 15}).set('CLASS_NAME_TODO'));\n    return type;\n  }\n}\nabap.Classes['CL_ABAP_REFDESCR'] = cl_abap_refdescr;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_refdescr.clas.mjs?");

/***/ })

}]);