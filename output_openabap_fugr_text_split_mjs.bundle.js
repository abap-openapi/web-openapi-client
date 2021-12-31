"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_openabap_fugr_text_split_mjs"],{

/***/ "../output/openabap.fugr.text_split.mjs":
/*!**********************************************!*\
  !*** ../output/openabap.fugr.text_split.mjs ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// openabap.fugr.text_split.abap\nconst constant_50 = new abap.types.Integer().set(50);\nasync function text_split(input) {\n  // importing LENGTH undefined\n  let length = input.exporting.length;\n  // importing TEXT undefined\n  let text = input.exporting.text;\n  // exporting LINE undefined\n  let line = input.importing.line;\n  // exporting REST undefined\n  let rest = input.importing.rest;\n  if (abap.compare.lt(abap.builtin.strlen({val: text}), constant_50)) {\n    line.set(text);\n    rest.set(new abap.types.Character({length: 0}).set(''));\n  } else {\n    line.set(text.getOffset({length: 50}));\n    rest.set(text.getOffset({offset: 50}));\n  }\n}\nabap.FunctionModules['TEXT_SPLIT'] = text_split;\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/openabap.fugr.text_split.mjs?");

/***/ })

}]);