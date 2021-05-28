/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_structdescr_clas_mjs"],{

/***/ "../output/cl_abap_structdescr.clas.mjs":
/*!**********************************************!*\
  !*** ../output/cl_abap_structdescr.clas.mjs ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_structdescr\": () => (/* binding */ cl_abap_structdescr)\n/* harmony export */ });\nconst {cl_abap_typedescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_typedescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_typedescr.clas.mjs */ \"../output/cl_abap_typedescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_abap_structdescr.clas.abap\nclass cl_abap_structdescr extends cl_abap_typedescr {\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.gt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject(), as_include: new abap.types.Character()}));\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let lv_name = new abap.types.String();\n    let ls_component = new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject(), as_include: new abap.types.Character()});\n    let fs_fs_ = new abap.types.FieldSymbol();\n    for (const name of Object.keys(INPUT.data.value)) {\n        lv_name.set(name.toUpperCase());\n      abap.statements.clear(ls_component);\n      ls_component.get().name.set(lv_name);\n      abap.statements.assign({component: lv_name, target: fs_fs_, source: data});\n      ls_component.get().type.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({data: fs_fs_}));\n      abap.statements.append({source: ls_component, target: this.gt_components});\n    }\n    return this;\n  }\n  async get_components() {\n    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject(), as_include: new abap.types.Character()}));\n    components.set(this.gt_components);\n    return components;\n  }\n}\nabap.Classes['CL_ABAP_STRUCTDESCR'] = cl_abap_structdescr;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_abap_structdescr.clas.mjs?");

/***/ })

}]);