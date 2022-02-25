"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_openabap_fugr_docu_get_mjs"],{

/***/ "../output/openabap.fugr.docu_get.mjs":
/*!********************************************!*\
  !*** ../output/openabap.fugr.docu_get.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// openabap.fugr.docu_get.abap\nconst constant_1 = new abap.types.Integer().set(1);\nasync function docu_get(input) {\n  // importing ID undefined\n  let id = input.exporting.id;\n  // importing LANGU undefined\n  let langu = input.exporting.langu;\n  // importing OBJECT undefined\n  let object = input.exporting.object;\n  // importing TYP undefined\n  let typ = input.exporting.typ;\n  // tables LINE TLINE\n  let line = input.tables.line;\n  abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));\n}\nabap.FunctionModules['DOCU_GET'] = docu_get;\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/openabap.fugr.docu_get.mjs?");

/***/ })

}]);