/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_http_client_clas_locals_mjs"],{

/***/ "../output/cl_http_client.clas.locals.mjs":
/*!************************************************!*\
  !*** ../output/cl_http_client.clas.locals.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_response\": () => (/* binding */ lcl_response),\n/* harmony export */   \"lcl_request\": () => (/* binding */ lcl_request)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"../output/cx_root.clas.mjs\"));\n// cl_http_client.clas.locals_imp.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_2 = new abap.types.Integer().set(2);\nclass lcl_response {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.status = new abap.types.Integer();\n    this.cdata = new abap.types.String();\n    return this;\n  }\n  async if_http_response$get_header_field(INPUT) {\n    let value = new abap.types.String();\n    let field = new abap.types.String();\n    if (INPUT && INPUT.field) {field.set(INPUT.field);}\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n    return value;\n  }\n  async if_http_response$get_header_fields(INPUT) {\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    if (INPUT && INPUT.fields) {fields = INPUT.fields;}\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_http_response$get_status(INPUT) {\n    let code = new abap.types.Integer();\n    if (INPUT && INPUT.code) {code = INPUT.code;}\n    let reason = new abap.types.String();\n    if (INPUT && INPUT.reason) {reason = INPUT.reason;}\n    code.set(this.status);\n  }\n  async if_http_response$get_cdata() {\n    let data = new abap.types.String();\n    data.set(this.cdata);\n    return data;\n  }\n  async if_http_response$get_content_type() {\n    let val = new abap.types.String();\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async if_http_response$get_data() {\n    let val = new abap.types.XString();\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n}\nabap.Classes['CLAS-CL_HTTP_CLIENT-LCL_RESPONSE'] = lcl_response;\nclass lcl_request {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_method = new abap.types.String();\n    this.mv_body = new abap.types.String();\n    this.mt_headers = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    this.mt_form_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    let uri = new abap.types.String();\n    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}\n    let ls_header = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()});\n    ls_header.get().name.set(new abap.types.Character({length: 12}).set('~request_uri'));\n    ls_header.get().value.set(uri);\n    abap.statements.append({source: ls_header, target: this.mt_headers});\n    return this;\n  }\n  async if_http_request$set_form_fields(INPUT) {\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    if (INPUT && INPUT.fields) {fields.set(INPUT.fields);}\n    this.mt_form_fields.set(fields);\n  }\n  async if_http_request$get_form_fields(INPUT) {\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    if (INPUT && INPUT.fields) {fields = INPUT.fields;}\n    fields.set(this.mt_form_fields);\n  }\n  async if_http_request$set_header_field(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let value = new abap.types.String();\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    let ls_header = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()});\n    let fs_ls_header_ = new abap.types.FieldSymbol();\n    abap.statements.readTable(this.mt_headers,{assigning: fs_ls_header_,withKey: (i) => {return abap.compare.eq(i.name, abap.builtin.to_lower({val: name}));}});\n    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {\n      fs_ls_header_.get().value.set(value);\n    } else {\n      ls_header.get().name.set(abap.builtin.to_lower({val: name}));\n      ls_header.get().value.set(value);\n      abap.statements.append({source: ls_header, target: this.mt_headers});\n    }\n  }\n  async if_http_request$get_header_field(INPUT) {\n    let value = new abap.types.String();\n    let field = new abap.types.String();\n    if (INPUT && INPUT.field) {field.set(INPUT.field);}\n    let ls_header = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()});\n    abap.statements.readTable(this.mt_headers,{into: ls_header,withKey: (i) => {return abap.compare.eq(i.name, abap.builtin.to_lower({val: field}));}});\n    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {\n      value.set(ls_header.get().value);\n    }\n    return value;\n  }\n  async if_http_request$set_method(INPUT) {\n    let meth = new abap.types.String();\n    if (INPUT && INPUT.meth) {meth.set(INPUT.meth);}\n    this.mv_method.set(meth);\n  }\n  async if_http_request$get_method() {\n    let meth = new abap.types.String();\n    meth.set(this.mv_method);\n    return meth;\n  }\n  async if_http_request$set_version(INPUT) {\n    let version = new abap.types.String();\n    if (INPUT && INPUT.version) {version.set(INPUT.version);}\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_http_request$set_data(INPUT) {\n    let data = new abap.types.XString();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_http_request$set_cdata(INPUT) {\n    let data = new abap.types.String();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    this.mv_body.set(data);\n  }\n  async if_http_request$get_cdata() {\n    let data = new abap.types.String();\n    data.set(this.mv_body);\n    return data;\n  }\n  async if_http_request$set_form_field(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let value = new abap.types.String();\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    let ls_field = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()});\n    ls_field.get().name.set(name);\n    ls_field.get().value.set(value);\n    abap.statements.append({source: ls_field, target: this.mt_form_fields});\n  }\n  async if_http_request$get_header_fields(INPUT) {\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}));\n    if (INPUT && INPUT.fields) {fields = INPUT.fields;}\n    fields.set(this.mt_headers);\n  }\n}\nabap.Classes['CLAS-CL_HTTP_CLIENT-LCL_REQUEST'] = lcl_request;\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://web/../output/cl_http_client.clas.locals.mjs?");

/***/ })

}]);