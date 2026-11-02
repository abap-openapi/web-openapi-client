"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_sxml_open_element_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_sxml_open_element.clas.locals.mjs"
/*!*********************************************************************!*\
  !*** ../output/open-abap-core/cl_sxml_open_element.clas.locals.mjs ***!
  \*********************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_attribute: () => (/* binding */ lcl_attribute)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
// cl_sxml_open_element.clas.locals_imp.abap
class lcl_attribute {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_OPEN_ELEMENT-LCL_ATTRIBUTE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_ATTRIBUTE"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~QNAME": {"type": () => {return new abap.types.Structure({
  "name": new abap.types.String({qualifiedName: "STRING"}),
  "namespace": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}}}};
  #mv_value;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_value"] = this.#mv_value;
    if (this.if_sxml_attribute$qname === undefined) this.if_sxml_attribute$qname = new abap.types.Structure({
    "name": new abap.types.String({qualifiedName: "STRING"}),
    "namespace": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    if (this.if_sxml_attribute$prefix === undefined) this.if_sxml_attribute$prefix = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_attribute$value_type === undefined) this.if_sxml_attribute$value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    this.if_sxml_attribute$qname.get().name.set(name);
    this.if_sxml_attribute$prefix.set(prefix);
    this.if_sxml_attribute$qname.get().namespace.set(nsuri);
    this.if_sxml_attribute$value_type.set(abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text);
    this.#mv_value.set(value);
    return this;
  }
  async if_sxml_attribute$get_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    value.set(this.#mv_value);
    return value;
  }
}
abap.Classes['CLAS-CL_SXML_OPEN_ELEMENT-LCL_ATTRIBUTE'] = lcl_attribute;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_sxml_open_element_clas_locals_mjs.bundle.js.map