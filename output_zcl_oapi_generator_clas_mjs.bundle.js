"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_zcl_oapi_generator_clas_mjs"],{

/***/ "../output/zcl_oapi_generator.clas.mjs":
/*!*********************************************!*\
  !*** ../output/zcl_oapi_generator.clas.mjs ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zcl_oapi_generator\": () => (/* binding */ zcl_oapi_generator)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// zcl_oapi_generator.clas.abap\nclass zcl_oapi_generator {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async generate_v1(INPUT) {\n    return zcl_oapi_generator.generate_v1(INPUT);\n  }\n  static async generate_v1(INPUT) {\n    let rs_result = new abap.types.Structure({clas: new abap.types.String(), intf: new abap.types.String()}, \"zcl_oapi_main=>ty_result\");\n    let is_input = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_main=>class_name\"}), interface_name: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_main=>interface_name\"}), json: new abap.types.String()}, \"zcl_oapi_main=>ty_input\");\n    if (INPUT && INPUT.is_input) {is_input.set(INPUT.is_input);}\n    let lo_generator = new abap.types.ABAPObject({qualifiedName: \"ZCL_OAPI_MAIN\"});\n    lo_generator.set(await (new abap.Classes['ZCL_OAPI_MAIN']()).constructor_());\n    rs_result.set((await lo_generator.get().run({is_input: is_input})));\n    return rs_result;\n  }\n  async generate_v2(INPUT) {\n    return zcl_oapi_generator.generate_v2(INPUT);\n  }\n  static async generate_v2(INPUT) {\n    let rs_result = new abap.types.Structure({clas_icf_serv: new abap.types.String(), clas_icf_impl: new abap.types.String(), clas_client: new abap.types.String(), intf: new abap.types.String()}, \"zcl_oapi_generator_v2=>ty_result\");\n    let is_input = new abap.types.Structure({clas_icf_serv: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_generator_v2=>clas_icf_serv\"}), clas_icf_impl: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_generator_v2=>clas_icf_impl\"}), clas_client: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_generator_v2=>clas_client\"}), intf: new abap.types.Character({length: 30, qualifiedName: \"zcl_oapi_generator_v2=>intf\"}), openapi_json: new abap.types.String()}, \"zcl_oapi_generator_v2=>ty_input\");\n    if (INPUT && INPUT.is_input) {is_input.set(INPUT.is_input);}\n    let lo_generator = new abap.types.ABAPObject({qualifiedName: \"ZCL_OAPI_GENERATOR_V2\"});\n    lo_generator.set(await (new abap.Classes['ZCL_OAPI_GENERATOR_V2']()).constructor_());\n    rs_result.set((await lo_generator.get().run({is_input: is_input})));\n    return rs_result;\n  }\n}\nabap.Classes['ZCL_OAPI_GENERATOR'] = zcl_oapi_generator;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/zcl_oapi_generator.clas.mjs?");

/***/ })

}]);