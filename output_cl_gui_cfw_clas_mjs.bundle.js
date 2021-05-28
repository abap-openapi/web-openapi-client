/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_gui_cfw_clas_mjs"],{

/***/ "../output/cl_gui_cfw.clas.mjs":
/*!*************************************!*\
  !*** ../output/cl_gui_cfw.clas.mjs ***!
  \*************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_gui_cfw\": () => (/* binding */ cl_gui_cfw)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_gui_cfw.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_gui_cfw {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async compute_pixel_from_metric(INPUT) {\n    return cl_gui_cfw.compute_pixel_from_metric(INPUT);\n  }\n  static async compute_pixel_from_metric(INPUT) {\n    let val = new abap.types.Integer();\n    let x_or_y = new abap.types.Character();\n    if (INPUT && INPUT.x_or_y) {x_or_y.set(INPUT.x_or_y);}\n    let in_ = new abap.types.Integer();\n    if (INPUT && INPUT.in_) {in_.set(INPUT.in_);}\n    val.set(constant_1);\n    return val;\n  }\n}\nabap.Classes['CL_GUI_CFW'] = cl_gui_cfw;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_gui_cfw.clas.mjs?");

/***/ })

}]);