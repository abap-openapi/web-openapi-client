/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_ixml_clas_locals_mjs"],{

/***/ "../output/cl_ixml.clas.locals.mjs":
/*!*****************************************!*\
  !*** ../output/cl_ixml.clas.locals.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_document\": () => (/* binding */ lcl_document),\n/* harmony export */   \"lcl_renderer\": () => (/* binding */ lcl_renderer),\n/* harmony export */   \"lcl_ostream\": () => (/* binding */ lcl_ostream),\n/* harmony export */   \"lcl_stream_factory\": () => (/* binding */ lcl_stream_factory)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_ixml.clas.locals_imp.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nclass lcl_document {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_ixml_document$set_encoding(INPUT) {\n    let encoding = new abap.types.ABAPObject();\n    if (INPUT && INPUT.encoding) {encoding = INPUT.encoding;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_ixml_document$set_standalone(INPUT) {\n    let standalone = new abap.types.Character();\n    if (INPUT && INPUT.standalone) {standalone.set(INPUT.standalone);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_ixml_document$set_namespace_prefix(INPUT) {\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_ixml_document$append_child(INPUT) {\n    let new_child = new abap.types.ABAPObject();\n    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_ixml_document$get_first_child() {\n    let child = new abap.types.ABAPObject();\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return child;\n  }\n  async if_ixml_document$create_attribute_ns(INPUT) {\n    let element = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return element;\n  }\n  async if_ixml_document$create_element_ns(INPUT) {\n    let element = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return element;\n  }\n  async if_ixml_document$create_element(INPUT) {\n    let element = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return element;\n  }\n  async if_ixml_document$create_iterator_filtered(INPUT) {\n    let val = new abap.types.ABAPObject();\n    let input = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.input) {input = INPUT.input;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$create_filter_and(INPUT) {\n    let val = new abap.types.Character({length: 4});\n    let filter1 = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.filter1) {filter1 = INPUT.filter1;}\n    let filter2 = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.filter2) {filter2 = INPUT.filter2;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$create_iterator() {\n    let rval = new abap.types.ABAPObject();\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return rval;\n  }\n  async if_ixml_document$create_filter_node_type(INPUT) {\n    let val = new abap.types.Character({length: 4});\n    let typ = new abap.types.String();\n    if (INPUT && INPUT.typ) {typ.set(INPUT.typ);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$create_simple_element_ns(INPUT) {\n    let val = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let parent = new abap.types.String();\n    if (INPUT && INPUT.parent) {parent.set(INPUT.parent);}\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$create_filter_attribute(INPUT) {\n    let val = new abap.types.Character({length: 4});\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$create_simple_element(INPUT) {\n    let val = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let parent = new abap.types.String();\n    if (INPUT && INPUT.parent) {parent.set(INPUT.parent);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$find_from_name(INPUT) {\n    let element = new abap.types.ABAPObject();\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let namespace = new abap.types.String();\n    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return element;\n  }\n  async if_ixml_document$find_from_name_ns(INPUT) {\n    let element = new abap.types.ABAPObject();\n    let depth = new abap.types.Integer();\n    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return element;\n  }\n  async if_ixml_document$find_from_path(INPUT) {\n    let val = new abap.types.ABAPObject();\n    let path = new abap.types.String();\n    if (INPUT && INPUT.path) {path.set(INPUT.path);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$get_elements_by_tag_name_ns(INPUT) {\n    let val = new abap.types.Character({length: 4});\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let namespace = new abap.types.String();\n    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$get_elements_by_tag_name(INPUT) {\n    let val = new abap.types.Character({length: 4});\n    let depth = new abap.types.Integer();\n    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let namespace = new abap.types.String();\n    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_ixml_document$get_root() {\n    let node = new abap.types.ABAPObject();\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return node;\n  }\n  async if_ixml_document$get_root_element() {\n    let root = new abap.types.ABAPObject();\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return root;\n  }\n}\nabap.Classes['CLAS-CL_IXML-LCL_DOCUMENT'] = lcl_document;\nclass lcl_renderer {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_ixml_renderer$render() {\n    return;\n  }\n  async if_ixml_renderer$set_normalizing(INPUT) {\n    let normal = new abap.types.Character();\n    if (INPUT && INPUT.normal) {normal.set(INPUT.normal);}\n    return;\n  }\n}\nabap.Classes['CLAS-CL_IXML-LCL_RENDERER'] = lcl_renderer;\nclass lcl_ostream {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n}\nabap.Classes['CLAS-CL_IXML-LCL_OSTREAM'] = lcl_ostream;\nclass lcl_stream_factory {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_ixml_stream_factory$create_ostream_cstring(INPUT) {\n    let stream = new abap.types.ABAPObject();\n    let xml = new abap.types.String();\n    if (INPUT && INPUT.xml) {xml.set(INPUT.xml);}\n    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_OSTREAM']()).constructor_());\n    INPUT.xml.set(`<?xml version=\"1.0\" encoding=\"utf-16\"?>`);\n    return stream;\n  }\n  async if_ixml_stream_factory$create_istream_string(INPUT) {\n    let stream = new abap.types.ABAPObject();\n    let xml = new abap.types.String();\n    if (INPUT && INPUT.xml) {xml.set(INPUT.xml);}\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n    return stream;\n  }\n}\nabap.Classes['CLAS-CL_IXML-LCL_STREAM_FACTORY'] = lcl_stream_factory;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_ixml.clas.locals.mjs?");

/***/ })

}]);