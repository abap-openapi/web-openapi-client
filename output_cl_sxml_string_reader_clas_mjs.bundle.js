/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_sxml_string_reader_clas_mjs"],{

/***/ "../output/cl_sxml_string_reader.clas.mjs":
/*!************************************************!*\
  !*** ../output/cl_sxml_string_reader.clas.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_sxml_string_reader\": () => (/* binding */ cl_sxml_string_reader)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_sxml_string_reader_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_sxml_string_reader.clas.locals.mjs */ \"../output/cl_sxml_string_reader.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_sxml_string_reader.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nclass cl_sxml_string_reader {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create(INPUT) {\n    return cl_sxml_string_reader.create(INPUT);\n  }\n  static async create(INPUT) {\n    let reader = new abap.types.ABAPObject();\n    let data = new abap.types.XString();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    let lo_json = new abap.types.ABAPObject();\n    let lt_parsed = new abap.types.Table(new abap.types.Structure({type: new abap.types.Integer(), name: new abap.types.String(), key: new abap.types.String(), value: new abap.types.String()}));\n    let ls_parsed = new abap.types.Structure({type: new abap.types.Integer(), name: new abap.types.String(), key: new abap.types.String(), value: new abap.types.String()});\n    let li_node = new abap.types.ABAPObject();\n    let lt_nodes = new abap.types.Table(new abap.types.ABAPObject());\n    let lt_attributes = new abap.types.Table(new abap.types.ABAPObject());\n    let li_attribute = new abap.types.ABAPObject();\n    lo_json.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER']()).constructor_());\n    lt_parsed.set(await lo_json.get().parse({iv_json: await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({input: data})}));\n    for (const unique56 of abap.statements.loop(lt_parsed)) {\n      ls_parsed.set(unique56);\n      let unique57 = ls_parsed.get().type;\n      if (abap.compare.eq(unique57, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {\n        abap.statements.clear(lt_attributes);\n        if (abap.compare.initial(ls_parsed.get().key) === false) {\n          li_attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: new abap.types.Character({length: 4}).set('name'), value: ls_parsed.get().key, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));\n          abap.statements.append({source: li_attribute, target: lt_attributes});\n        }\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE']()).constructor_({name: ls_parsed.get().name, attributes: lt_attributes}));\n      } else if (abap.compare.eq(unique57, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE']()).constructor_({name: ls_parsed.get().name}));\n      } else if (abap.compare.eq(unique57, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE']()).constructor_({value: ls_parsed.get().value}));\n      } else {\n        abap.statements.assert(abap.compare.eq(constant_1, constant_2));\n      }\n      abap.statements.append({source: li_node, target: lt_nodes});\n    }\n    reader.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER']()).constructor_({it_nodes: lt_nodes}));\n    return reader;\n  }\n}\nabap.Classes['CL_SXML_STRING_READER'] = cl_sxml_string_reader;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_sxml_string_reader.clas.mjs?");

/***/ })

}]);