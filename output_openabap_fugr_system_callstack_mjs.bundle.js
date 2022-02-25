"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_openabap_fugr_system_callstack_mjs"],{

/***/ "../output/openabap.fugr.system_callstack.mjs":
/*!****************************************************!*\
  !*** ../output/openabap.fugr.system_callstack.mjs ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// openabap.fugr.system_callstack.abap\nasync function system_callstack(input) {\n  // exporting CALLSTACK ABAP_CALLSTACK\n  let callstack = input.importing.callstack;\n  let fs_fs_ = new abap.types.FieldSymbol();\n  fs_fs_.assign(callstack.appendInitial());\n  fs_fs_.get().mainprogram.set(new abap.types.Character({length: 5}).set('ZTODO'));\n  fs_fs_.get().include.set(new abap.types.Character({length: 5}).set('ZTODO'));\n  fs_fs_.get().line.set(new abap.types.Character({length: 3}).set('123'));\n}\nabap.FunctionModules['SYSTEM_CALLSTACK'] = system_callstack;\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://web/../output/openabap.fugr.system_callstack.mjs?");

/***/ })

}]);