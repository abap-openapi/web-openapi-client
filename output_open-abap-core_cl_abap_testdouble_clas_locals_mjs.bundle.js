"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_abap_testdouble_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_abap_testdouble.clas.locals.mjs"
/*!*******************************************************************!*\
  !*** ../output/open-abap-core/cl_abap_testdouble.clas.locals.mjs ***!
  \*******************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_arguments: () => (/* binding */ lcl_arguments),
/* harmony export */   lcl_configuration: () => (/* binding */ lcl_configuration),
/* harmony export */   lcl_double: () => (/* binding */ lcl_double),
/* harmony export */   lcl_error: () => (/* binding */ lcl_error),
/* harmony export */   lcl_handle: () => (/* binding */ lcl_handle),
/* harmony export */   lcl_result: () => (/* binding */ lcl_result),
/* harmony export */   lcl_verification: () => (/* binding */ lcl_verification)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
function $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0() { return new abap.types.Structure({
"name": new abap.types.Character(30, {"qualifiedName":"abap_parmname"}),
"kind": new abap.types.Character(1, {"qualifiedName":"abap_parmkind"}),
"supplied": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}),
"ignored": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_arguments=>ty_parameter", undefined, {}, {}); }
function $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1() { return abap.types.TableFactory.construct($t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_arguments=>ty_parameters"); }
function $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_3() { return abap.types.TableFactory.construct(new abap.types.Structure({
"name": new abap.types.Character(30, {"qualifiedName":"name"}),
"kind": new abap.types.Character(1, {"qualifiedName":"kind"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "abap_parmbind", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "abap_parmbind_tab"); }
function $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4() { return new abap.types.Structure({
"name": new abap.types.Character(30, {"qualifiedName":"abap_parmname"}),
"kind": new abap.types.Character(1, {"qualifiedName":"abap_parmkind"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_configuration=>ty_output", undefined, {}, {}); }
function $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_5() { return abap.types.TableFactory.construct($t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, ""); }
// cl_abap_testdouble.clas.locals_imp.abap

class lcl_arguments {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_TESTDOUBLE_ARGUMENTS"];
  static ATTRIBUTES = {"MT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_POSITION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"READ": {"visibility": "I", "exceptions": ["CX_ATD_PARAM_NOT_FOUND"], "parameters": {"RS_PARAMETER": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();}, "is_optional": " ", "parm_kind": "R", "type_name": "StructureType"}, "IV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_parmname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_KIND": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}}},
  "NEXT_POSITION": {"visibility": "I", "parameters": {"RV_POSITION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "R", "type_name": "IntegerType"}}},
  "COPY": {"visibility": "U", "is_class": "X", "parameters": {"RR_COPY": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " ", "parm_kind": "R", "type_name": "DataReference"}, "IV_VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}}}};
  #mv_position;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "read": this.#read.bind(this),
      "next_position": this.#next_position.bind(this),
    };
    this.mt_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();
    this.#mv_position = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_position"] = this.#mv_position;
  }
  async copy(INPUT) {
    return lcl_arguments.copy(INPUT);
  }
  static async copy(INPUT) {
    let rr_copy = new abap.types.DataReference(new abap.types.Character(4));
    let iv_value = INPUT?.iv_value;
    let fs_lg_copy_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.createData(rr_copy,{"like": iv_value});
    abap.statements.assign({target: fs_lg_copy_, source: rr_copy.dereference()});
    fs_lg_copy_.set(iv_value);
    return rr_copy;
  }
  async constructor_(INPUT) {
    let it_parameters = INPUT?.it_parameters;
    if (it_parameters?.getQualifiedName === undefined || it_parameters.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETERS") { it_parameters = undefined; }
    if (it_parameters === undefined) { it_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1().set(INPUT.it_parameters); }
    this.mt_parameters.set(it_parameters);
    return this;
  }
  async #read(INPUT) {
    let rs_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "ABAP_PARMNAME") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.iv_name); }
    let iv_kind = INPUT?.iv_kind;
    if (iv_kind?.getQualifiedName === undefined || iv_kind.getQualifiedName() !== "ABAP_PARMKIND") { iv_kind = undefined; }
    if (iv_kind === undefined) { iv_kind = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"}).set(INPUT.iv_kind); }
    let lv_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"});
    lv_name.set(abap.builtin.to_upper({val: iv_name}));
    abap.statements.readTable(this.mt_parameters,{into: rs_parameter,
      withKey: (i) => {return abap.compare.eq(i.name, lv_name) && abap.compare.eq(i.kind, iv_kind);},
      withKeyValue: [{key: (i) => {return i.name}, value: lv_name},{key: (i) => {return i.kind}, value: iv_kind}],
      usesTableLine: false,
      withKeySimple: {"name": lv_name,"kind": iv_kind}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique1 = await (new abap.Classes['CX_ATD_PARAM_NOT_FOUND']()).constructor_({param_name: lv_name});
      unique1.EXTRA_CX = {"INTERNAL_FILENAME": "cl_abap_testdouble.clas.locals_imp.abap","INTERNAL_LINE": 70};
      throw unique1;
    }
    return rs_parameter;
  }
  async #next_position(INPUT) {
    let rv_position = new abap.types.Integer({qualifiedName: "I"});
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    for await (const unique2 of abap.statements.loop(this.mt_parameters,{from: abap.operators.add(this.#mv_position,abap.IntegerFactory.get(1))})) {
      ls_parameter.set(unique2);
      if (abap.compare.eq(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].importing) || abap.compare.eq(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].changing)) {
        rv_position.set(abap.builtin.sy.get().tabix);
        return rv_position;
      }
    }
    return rv_position;
  }
  async if_abap_testdouble_arguments$get_param_importing(INPUT) {
    let value = new abap.types.DataReference(new abap.types.Character(4));
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    value.set(((await this.#read({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].importing, rs_parameter: 1}))).get().value);
    return value;
  }
  async if_abap_testdouble_arguments$is_importing_param_supplied(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    result.set(((await this.#read({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].importing, rs_parameter: 1}))).get().supplied);
    return result;
  }
  async if_abap_testdouble_arguments$get_param_changing(INPUT) {
    let value = new abap.types.DataReference(new abap.types.Character(4));
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    value.set(((await this.#read({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].changing, rs_parameter: 1}))).get().value);
    return value;
  }
  async if_abap_testdouble_arguments$is_changing_param_supplied(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    result.set(((await this.#read({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].changing, rs_parameter: 1}))).get().supplied);
    return result;
  }
  async if_abap_testdouble_arguments$next_parameter(INPUT) {
    let name = INPUT?.name || new abap.types.Character(30, {"qualifiedName":"abap_parmname"});
    let kind = INPUT?.kind || new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
    let ignore = INPUT?.ignore || new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let lv_position = new abap.types.Integer({qualifiedName: "I"});
    lv_position.set((await this.#next_position({rv_position: 1})));
    if (abap.compare.eq(lv_position, abap.IntegerFactory.get(0))) {
      const unique3 = await (new abap.Classes['CX_ATD_EXCEPTION_CORE']()).constructor_();
      unique3.EXTRA_CX = {"INTERNAL_FILENAME": "cl_abap_testdouble.clas.locals_imp.abap","INTERNAL_LINE": 114};
      throw unique3;
    }
    this.#mv_position.set(lv_position);
    abap.statements.readTable(this.mt_parameters,{index: this.#mv_position,
      into: ls_parameter});
    name.set(ls_parameter.get().name);
    kind.set(ls_parameter.get().kind);
    ignore.set(ls_parameter.get().ignored);
  }
  async if_abap_testdouble_arguments$has_next_parameter(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    result.set(abap.builtin.boolc(abap.compare.gt((await this.#next_position({rv_position: 1})), abap.IntegerFactory.get(0))));
    return result;
  }
  async if_abap_testdouble_arguments$reset_iterator() {
    this.#mv_position.set(abap.IntegerFactory.get(0));
  }
  async if_abap_testdouble_arguments$size_of(INPUT) {
    let size = new abap.types.Integer({qualifiedName: "I"});
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    for await (const unique4 of abap.statements.loop(this.mt_parameters)) {
      ls_parameter.set(unique4);
      if (abap.compare.eq(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].importing) || abap.compare.eq(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].changing)) {
        size.set(abap.operators.add(size,abap.IntegerFactory.get(1)));
      }
    }
    return size;
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS'] = lcl_arguments;
lcl_arguments.ty_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
lcl_arguments.ty_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();
class lcl_error {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"RAISE": {"visibility": "U", "is_class": "X", "exceptions": ["CX_ATD_EXCEPTION_CORE"], "parameters": {"IV_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IV_OBJECT_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_intfname"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}, "IV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}, "IV_PARAMETER_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_parmname"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}, "IV_EXPECTED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": "X", "parm_kind": "I", "type_name": "IntegerType"}, "IV_ACTUAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": "X", "parm_kind": "I", "type_name": "IntegerType"}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async raise(INPUT) {
    return lcl_error.raise(INPUT);
  }
  static async raise(INPUT) {
    let iv_text = INPUT?.iv_text;
    if (iv_text?.getQualifiedName === undefined || iv_text.getQualifiedName() !== "STRING") { iv_text = undefined; }
    if (iv_text === undefined) { iv_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_text); }
    let iv_object_name = new abap.types.Character(30, {"qualifiedName":"abap_intfname"});
    if (INPUT && INPUT.iv_object_name) {iv_object_name.set(INPUT.iv_object_name);}
    let iv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"});
    if (INPUT && INPUT.iv_method_name) {iv_method_name.set(INPUT.iv_method_name);}
    let iv_parameter_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"});
    if (INPUT && INPUT.iv_parameter_name) {iv_parameter_name.set(INPUT.iv_parameter_name);}
    let iv_expected = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_expected) {iv_expected.set(INPUT.iv_expected);}
    let iv_actual = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_actual) {iv_actual.set(INPUT.iv_actual);}
    let lx_error = new abap.types.ABAPObject({qualifiedName: "CX_ATD_EXCEPTION_CORE", RTTIName: "\\CLASS=CX_ATD_EXCEPTION_CORE"});
    lx_error.set(await (new abap.Classes['CX_ATD_EXCEPTION_CORE']()).constructor_({object_name: iv_object_name, method_name: iv_method_name, parameter_name: iv_parameter_name, expected: iv_expected, actual: iv_actual}));
    lx_error.get().message_prefix.set(iv_text);
    throw lx_error.get();
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'] = lcl_error;
class lcl_result {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_RESULT';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_TESTDOUBLE_RESULT"];
  static ATTRIBUTES = {"MO_EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"WRITE": {"visibility": "I", "exceptions": ["CX_ATD_EXCEPTION_CORE"], "parameters": {"IV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_parmname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_KIND": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}}}};
  #mt_parameters;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "write": this.#write.bind(this),
    };
    this.mo_exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    this.#mt_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();
    this.FRIENDS_ACCESS_INSTANCE["mt_parameters"] = this.#mt_parameters;
  }
  async constructor_(INPUT) {
    let it_parameters = INPUT?.it_parameters;
    if (it_parameters?.getQualifiedName === undefined || it_parameters.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETERS") { it_parameters = undefined; }
    if (it_parameters === undefined) { it_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1().set(INPUT.it_parameters); }
    this.#mt_parameters.set(it_parameters);
    return this;
  }
  async #write(INPUT) {
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "ABAP_PARMNAME") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.iv_name); }
    let iv_kind = INPUT?.iv_kind;
    if (iv_kind?.getQualifiedName === undefined || iv_kind.getQualifiedName() !== "ABAP_PARMKIND") { iv_kind = undefined; }
    if (iv_kind === undefined) { iv_kind = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"}).set(INPUT.iv_kind); }
    let iv_value = INPUT?.iv_value;
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let lv_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"});
    let fs_lg_target_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    lv_name.set(abap.builtin.to_upper({val: iv_name}));
    abap.statements.readTable(this.#mt_parameters,{into: ls_parameter,
      withKey: (i) => {return abap.compare.eq(i.name, lv_name) && abap.compare.eq(i.kind, iv_kind);},
      withKeyValue: [{key: (i) => {return i.name}, value: lv_name},{key: (i) => {return i.kind}, value: iv_kind}],
      usesTableLine: false,
      withKeySimple: {"name": lv_name,"kind": iv_kind}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: new abap.types.String().set(`${abap.templateFormatting(lv_name)} is not a parameter of kind ${abap.templateFormatting(iv_kind)} of the method`), iv_parameter_name: lv_name});
    }
    abap.statements.assign({target: fs_lg_target_, source: ls_parameter.get().value.dereference()});
    fs_lg_target_.set(iv_value);
  }
  async if_abap_testdouble_result$set_param_exporting(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.#write({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].exporting, iv_value: value});
  }
  async if_abap_testdouble_result$set_param_changing(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.#write({iv_name: name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].changing, iv_value: value});
  }
  async if_abap_testdouble_result$set_param_returning(INPUT) {
    let value = INPUT?.value;
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    abap.statements.readTable(this.#mt_parameters,{into: ls_parameter,
      withKey: (i) => {return abap.compare.eq(i.kind, abap.Classes['CL_ABAP_OBJECTDESCR'].returning);},
      withKeyValue: [{key: (i) => {return i.kind}, value: abap.Classes['CL_ABAP_OBJECTDESCR'].returning}],
      usesTableLine: false,
      withKeySimple: {"kind": abap.Classes['CL_ABAP_OBJECTDESCR'].returning}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(37, 'The method has no returning parameter')});
    }
    await this.#write({iv_name: ls_parameter.get().name, iv_kind: abap.Classes['CL_ABAP_OBJECTDESCR'].returning, iv_value: value});
  }
  async if_abap_testdouble_result$raise_exception(INPUT) {
    let exception = INPUT?.exception;
    if (exception?.getQualifiedName === undefined || exception.getQualifiedName() !== "CX_ROOT") { exception = undefined; }
    if (exception === undefined) { exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.exception); }
    this.mo_exception.set(exception);
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_RESULT'] = lcl_result;
class lcl_handle {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_HANDLE';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_TESTDOUBLE_HANDLE"];
  static ATTRIBUTES = {};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_abap_testdouble_handle$raise_event(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_METHNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(61, {"qualifiedName":"abap_methname"}).set(INPUT.name); }
    let parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_3();
    if (INPUT && INPUT.parameters) {parameters.set(INPUT.parameters);}
    await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(41, 'raise_event is not supported by open-abap')});
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_HANDLE'] = lcl_handle;
class lcl_configuration {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_CONFIGURATION';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_TESTDOUBLE_CONFIG"];
  static ATTRIBUTES = {"MV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CALLS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_HAS_EXPECTATION": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_EXPECTED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TIMES": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_IGNORE_ALL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_IGNORED": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(30, {"qualifiedName":"abap_parmname"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_OUTPUTS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_5();}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MR_RETURNING": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_ANSWER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_ANSWER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_ANSWER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_MATCHER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_MATCHER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_MATCHER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_CONFIGURED": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"IS_SAME": {"visibility": "I", "parameters": {"RV_SAME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "IS_CONFIGURED": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();}, "is_optional": " ", "parm_kind": "I", "type_name": "StructureType"}, "IS_ACTUAL": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();}, "is_optional": " ", "parm_kind": "I", "type_name": "StructureType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {}},
  "EXPECT": {"visibility": "U", "parameters": {"IV_TIMES": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "REGISTER": {"visibility": "U", "exceptions": ["CX_ATD_EXCEPTION_CORE"], "parameters": {"IV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}}},
  "APPLIES_TO": {"visibility": "U", "exceptions": ["CX_ATD_EXCEPTION_CORE"], "parameters": {"RV_APPLIES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "IV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IO_ARGUMENTS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "HAS_CALLS_LEFT": {"visibility": "U", "parameters": {"RV_LEFT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}}},
  "ANSWER": {"visibility": "U", "exceptions": ["CX_STATIC_CHECK"], "parameters": {"IV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IO_ARGUMENTS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "IT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}, "II_HANDLE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_HANDLE", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_HANDLE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mv_times;
  #mv_ignore_all;
  #mt_ignored;
  #mt_outputs;
  #mr_returning;
  #mo_exception;
  #mi_answer;
  #mi_matcher;
  #mo_configured;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "is_same": this.#is_same.bind(this),
      "expect": this.expect.bind(this),
      "register": this.register.bind(this),
      "applies_to": this.applies_to.bind(this),
      "has_calls_left": this.has_calls_left.bind(this),
      "answer": this.answer.bind(this),
    };
    this.mv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"});
    this.mv_calls = new abap.types.Integer({qualifiedName: "I"});
    this.mv_has_expectation = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_expected = new abap.types.Integer({qualifiedName: "I"});
    this.#mv_times = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_times"] = this.#mv_times;
    this.#mv_ignore_all = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_ignore_all"] = this.#mv_ignore_all;
    this.#mt_ignored = abap.types.TableFactory.construct(new abap.types.Character(30, {"qualifiedName":"abap_parmname"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_ignored"] = this.#mt_ignored;
    this.#mt_outputs = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_5();
    this.FRIENDS_ACCESS_INSTANCE["mt_outputs"] = this.#mt_outputs;
    this.#mr_returning = new abap.types.DataReference(new abap.types.Character(4));
    this.FRIENDS_ACCESS_INSTANCE["mr_returning"] = this.#mr_returning;
    this.#mo_exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    this.FRIENDS_ACCESS_INSTANCE["mo_exception"] = this.#mo_exception;
    this.#mi_answer = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_ANSWER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_ANSWER"});
    this.FRIENDS_ACCESS_INSTANCE["mi_answer"] = this.#mi_answer;
    this.#mi_matcher = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_MATCHER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_MATCHER"});
    this.FRIENDS_ACCESS_INSTANCE["mi_matcher"] = this.#mi_matcher;
    this.#mo_configured = new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"});
    this.FRIENDS_ACCESS_INSTANCE["mo_configured"] = this.#mo_configured;
  }
  async constructor_(INPUT) {
    this.#mv_times.set(abap.IntegerFactory.get(1));
    return this;
  }
  async expect(INPUT) {
    let iv_times = INPUT?.iv_times;
    if (iv_times?.getQualifiedName === undefined || iv_times.getQualifiedName() !== "I") { iv_times = undefined; }
    if (iv_times === undefined) { iv_times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_times); }
    this.mv_has_expectation.set(abap.builtin.abap_true);
    this.mv_expected.set(iv_times);
  }
  async register(INPUT) {
    let iv_method_name = INPUT?.iv_method_name;
    if (iv_method_name?.getQualifiedName === undefined || iv_method_name.getQualifiedName() !== "ABAP_METHNAME") { iv_method_name = undefined; }
    if (iv_method_name === undefined) { iv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"}).set(INPUT.iv_method_name); }
    let it_parameters = INPUT?.it_parameters;
    if (it_parameters?.getQualifiedName === undefined || it_parameters.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETERS") { it_parameters = undefined; }
    if (it_parameters === undefined) { it_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1().set(INPUT.it_parameters); }
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let ls_argument = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let lt_arguments = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();
    let lv_ignored = new abap.types.Character(30, {"qualifiedName":"abap_parmname"});
    let fs_ls_output_ = new abap.types.FieldSymbol($t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4());
    let fs_lg_value_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    this.mv_method_name.set(iv_method_name);
    for await (const unique5 of abap.statements.loop(it_parameters)) {
      ls_parameter.set(unique5);
      if (abap.compare.ne(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].importing) && abap.compare.ne(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].changing)) {
        continue;
      }
      ls_argument.set(ls_parameter);
      abap.statements.assign({target: fs_lg_value_, source: ls_parameter.get().value.dereference()});
      ls_argument.get().value.set((await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS'].copy({iv_value: fs_lg_value_, rr_copy: 1})));
      abap.statements.readTable(this.#mt_ignored,{withKey: (i) => {return abap.compare.eq(i.table_line, ls_parameter.get().name);},
        withKeyValue: [{key: (i) => {return i.table_line}, value: ls_parameter.get().name}],
        usesTableLine: true,
        withKeySimple: {"table_line": ls_parameter.get().name}});
      if (abap.compare.eq(this.#mv_ignore_all, abap.builtin.abap_true) || abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        ls_argument.get().ignored.set(abap.builtin.abap_true);
      }
      abap.statements.append({source: ls_argument, target: lt_arguments});
    }
    this.#mo_configured.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS']()).constructor_({it_parameters: lt_arguments}));
    for await (const unique6 of abap.statements.loop(this.#mt_ignored)) {
      lv_ignored.set(unique6);
      abap.statements.readTable(lt_arguments,{withKey: (i) => {return abap.compare.eq(i.name, lv_ignored);},
        withKeyValue: [{key: (i) => {return i.name}, value: lv_ignored}],
        usesTableLine: false,
        withKeySimple: {"name": lv_ignored}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: new abap.types.String().set(`${abap.templateFormatting(lv_ignored)} is not an importing or changing parameter of ${abap.templateFormatting(iv_method_name)}`), iv_method_name: iv_method_name, iv_parameter_name: lv_ignored});
      }
    }
    for await (const unique7 of abap.statements.loop(this.#mt_outputs)) {
      fs_ls_output_.assign(unique7);
      abap.statements.readTable(it_parameters,{into: ls_parameter,
        withKey: (i) => {return abap.compare.eq(i.name, fs_ls_output_.get().name);},
        withKeyValue: [{key: (i) => {return i.name}, value: fs_ls_output_.get().name}],
        usesTableLine: false,
        withKeySimple: {"name": fs_ls_output_.get().name}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) || (abap.compare.ne(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].exporting) && abap.compare.ne(ls_parameter.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].changing))) {
        await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: new abap.types.String().set(`${abap.templateFormatting(fs_ls_output_.get().name)} is not an exporting or changing parameter of ${abap.templateFormatting(iv_method_name)}`), iv_method_name: iv_method_name, iv_parameter_name: fs_ls_output_.get().name});
      }
      fs_ls_output_.get().kind.set(ls_parameter.get().kind);
    }
    if (abap.compare.initial(this.#mr_returning) === false) {
      abap.statements.readTable(it_parameters,{withKey: (i) => {return abap.compare.eq(i.kind, abap.Classes['CL_ABAP_OBJECTDESCR'].returning);},
        withKeyValue: [{key: (i) => {return i.kind}, value: abap.Classes['CL_ABAP_OBJECTDESCR'].returning}],
        usesTableLine: false,
        withKeySimple: {"kind": abap.Classes['CL_ABAP_OBJECTDESCR'].returning}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: new abap.types.String().set(`${abap.templateFormatting(iv_method_name)} has no returning parameter`), iv_method_name: iv_method_name});
      }
    }
  }
  async applies_to(INPUT) {
    let rv_applies = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let iv_method_name = INPUT?.iv_method_name;
    if (iv_method_name?.getQualifiedName === undefined || iv_method_name.getQualifiedName() !== "ABAP_METHNAME") { iv_method_name = undefined; }
    if (iv_method_name === undefined) { iv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"}).set(INPUT.iv_method_name); }
    let io_arguments = INPUT?.io_arguments;
    if (io_arguments?.getQualifiedName === undefined || io_arguments.getQualifiedName() !== "LCL_ARGUMENTS") { io_arguments = undefined; }
    if (io_arguments === undefined) { io_arguments = new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"}).set(INPUT.io_arguments); }
    let ls_configured = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let ls_actual = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    if (abap.compare.ne(iv_method_name, this.mv_method_name)) {
      rv_applies.set(abap.builtin.abap_false);
      return rv_applies;
    }
    if (abap.compare.initial(this.#mi_matcher) === false) {
      rv_applies.set((await this.#mi_matcher.get().if_abap_testdouble_matcher$matches({method_name: iv_method_name, configured_arguments: this.#mo_configured, actual_arguments: io_arguments, result: 1})));
      return rv_applies;
    }
    rv_applies.set(abap.builtin.abap_true);
    for await (const unique8 of abap.statements.loop(this.#mo_configured.get().mt_parameters,{where: async (I) => {return abap.compare.eq(I.ignored, abap.builtin.abap_false);},topEquals: {"ignored": abap.builtin.abap_false}})) {
      ls_configured.set(unique8);
      abap.statements.readTable(io_arguments.get().mt_parameters,{into: ls_actual,
        withKey: (i) => {return abap.compare.eq(i.name, ls_configured.get().name);},
        withKeyValue: [{key: (i) => {return i.name}, value: ls_configured.get().name}],
        usesTableLine: false,
        withKeySimple: {"name": ls_configured.get().name}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) || abap.compare.eq((await this.#is_same({is_configured: ls_configured, is_actual: ls_actual, rv_same: 1})), abap.builtin.abap_false)) {
        rv_applies.set(abap.builtin.abap_false);
        return rv_applies;
      }
    }
    return rv_applies;
  }
  async #is_same(INPUT) {
    let rv_same = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_configured = INPUT?.is_configured;
    if (is_configured?.getQualifiedName === undefined || is_configured.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETER") { is_configured = undefined; }
    if (is_configured === undefined) { is_configured = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0().set(INPUT.is_configured); }
    let is_actual = INPUT?.is_actual;
    if (is_actual?.getQualifiedName === undefined || is_actual.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETER") { is_actual = undefined; }
    if (is_actual === undefined) { is_actual = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0().set(INPUT.is_actual); }
    let fs_lg_configured_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lg_actual_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_lg_configured_, source: is_configured.get().value.dereference()});
    abap.statements.assign({target: fs_lg_actual_, source: is_actual.get().value.dereference()});
    if (abap.compare.eq(is_configured.get().supplied, abap.builtin.abap_false) && abap.compare.eq(is_actual.get().supplied, abap.builtin.abap_false)) {
      rv_same.set(abap.builtin.abap_true);
    } else if (abap.compare.eq(is_configured.get().supplied, abap.builtin.abap_false)) {
      if (abap.compare.initial(fs_lg_actual_)) {
        rv_same.set(abap.builtin.abap_true);
      }
    } else if (abap.compare.eq(is_actual.get().supplied, abap.builtin.abap_false)) {
      if (abap.compare.initial(fs_lg_configured_)) {
        rv_same.set(abap.builtin.abap_true);
      }
    } else if (abap.compare.eq(fs_lg_configured_, fs_lg_actual_)) {
      rv_same.set(abap.builtin.abap_true);
    }
    return rv_same;
  }
  async has_calls_left(INPUT) {
    let rv_left = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    rv_left.set(abap.builtin.boolc(abap.compare.lt(this.mv_calls, this.#mv_times)));
    return rv_left;
  }
  async answer(INPUT) {
    let iv_method_name = INPUT?.iv_method_name;
    if (iv_method_name?.getQualifiedName === undefined || iv_method_name.getQualifiedName() !== "ABAP_METHNAME") { iv_method_name = undefined; }
    if (iv_method_name === undefined) { iv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"}).set(INPUT.iv_method_name); }
    let io_arguments = INPUT?.io_arguments;
    if (io_arguments?.getQualifiedName === undefined || io_arguments.getQualifiedName() !== "LCL_ARGUMENTS") { io_arguments = undefined; }
    if (io_arguments === undefined) { io_arguments = new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"}).set(INPUT.io_arguments); }
    let it_parameters = INPUT?.it_parameters;
    if (it_parameters?.getQualifiedName === undefined || it_parameters.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETERS") { it_parameters = undefined; }
    if (it_parameters === undefined) { it_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1().set(INPUT.it_parameters); }
    let ii_handle = INPUT?.ii_handle;
    if (ii_handle?.getQualifiedName === undefined || ii_handle.getQualifiedName() !== "IF_ABAP_TESTDOUBLE_HANDLE") { ii_handle = undefined; }
    if (ii_handle === undefined) { ii_handle = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_HANDLE", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_HANDLE"}).set(INPUT.ii_handle); }
    let lo_result = new abap.types.ABAPObject({qualifiedName: "LCL_RESULT", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_RESULT"});
    let li_result = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_RESULT", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_RESULT"});
    let ls_output = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4();
    let fs_lg_value_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    this.mv_calls.set(abap.operators.add(this.mv_calls,abap.IntegerFactory.get(1)));
    if (abap.compare.eq(this.mv_has_expectation, abap.builtin.abap_true) && abap.compare.gt(this.mv_calls, this.mv_expected)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.String().set(`${abap.templateFormatting(this.mv_method_name)} is called ${abap.templateFormatting(this.mv_calls)} times, expected ${abap.templateFormatting(this.mv_expected)}`)});
    }
    lo_result.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_RESULT']()).constructor_({it_parameters: it_parameters}));
    li_result.set(lo_result);
    if (abap.compare.initial(this.#mi_answer) === false) {
      await this.#mi_answer.get().if_abap_testdouble_answer$answer({method_name: iv_method_name, double_handle: ii_handle, arguments: io_arguments, result: li_result});
      if (abap.compare.initial(lo_result.get().mo_exception) === false) {
        throw lo_result.get().mo_exception.get();
      }
      return;
    }
    if (abap.compare.initial(this.#mo_exception) === false) {
      throw this.#mo_exception.get();
    }
    for await (const unique9 of abap.statements.loop(this.#mt_outputs)) {
      ls_output.set(unique9);
      abap.statements.assign({target: fs_lg_value_, source: ls_output.get().value.dereference()});
      if (abap.compare.eq(ls_output.get().kind, abap.Classes['CL_ABAP_OBJECTDESCR'].exporting)) {
        await li_result.get().if_abap_testdouble_result$set_param_exporting({name: ls_output.get().name, value: fs_lg_value_});
      } else {
        await li_result.get().if_abap_testdouble_result$set_param_changing({name: ls_output.get().name, value: fs_lg_value_});
      }
    }
    if (abap.compare.initial(this.#mr_returning) === false) {
      abap.statements.assign({target: fs_lg_value_, source: this.#mr_returning.dereference()});
      await li_result.get().if_abap_testdouble_result$set_param_returning({value: fs_lg_value_});
    }
  }
  async if_abap_testdouble_config$returning(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let value = INPUT?.value;
    if (abap.compare.initial(this.#mo_exception) === false || abap.compare.initial(this.#mi_answer) === false) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(72, 'returning( ) cannot be combined with raise_exception( ) or set_answer( )')});
    }
    this.#mr_returning.set((await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS'].copy({iv_value: value, rr_copy: 1})));
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$set_parameter(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    let ls_output = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4();
    if (abap.compare.initial(this.#mo_exception) === false || abap.compare.initial(this.#mi_answer) === false) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(76, 'set_parameter( ) cannot be combined with raise_exception( ) or set_answer( )')});
    }
    ls_output.get().name.set(abap.builtin.to_upper({val: name}));
    ls_output.get().value.set((await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS'].copy({iv_value: value, rr_copy: 1})));
    abap.statements.append({source: ls_output, target: this.#mt_outputs});
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$raise_exception(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let exception_object = INPUT?.exception_object;
    if (exception_object?.getQualifiedName === undefined || exception_object.getQualifiedName() !== "CX_ROOT") { exception_object = undefined; }
    if (exception_object === undefined) { exception_object = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.exception_object); }
    if (abap.compare.initial(this.#mo_exception) === false || abap.compare.initial(this.#mr_returning) === false || abap.compare.gt(abap.builtin.lines({val: this.#mt_outputs}), abap.IntegerFactory.get(0)) || abap.compare.initial(this.#mi_answer) === false) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(118, 'raise_exception( ) cannot be combined with returning( ), set_parameter( ), set_answer( ) or another raise_exception( )')});
    }
    this.#mo_exception.set(exception_object);
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$raise_event(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_EVNTNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(61, {"qualifiedName":"abap_evntname"}).set(INPUT.name); }
    let parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_3();
    if (INPUT && INPUT.parameters) {parameters.set(INPUT.parameters);}
    await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(41, 'raise_event is not supported by open-abap')});
    return configuration;
  }
  async if_abap_testdouble_config$times(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let number = INPUT?.number;
    if (number?.getQualifiedName === undefined || number.getQualifiedName() !== "I") { number = undefined; }
    if (number === undefined) { number = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.number); }
    if (abap.compare.le(number, abap.IntegerFactory.get(0))) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: new abap.types.String().set(`times( ) needs a number greater than 0, got ${abap.templateFormatting(number)}`), iv_expected: number});
    }
    this.#mv_times.set(number);
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$ignore_parameter(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    abap.statements.append({source: abap.builtin.to_upper({val: name}), target: this.#mt_ignored});
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$ignore_all_parameters(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    this.#mv_ignore_all.set(abap.builtin.abap_true);
    configuration.set(this.me);
    return configuration;
  }
  async if_abap_testdouble_config$and_expect(INPUT) {
    let verification = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_VERIFY", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_VERIFY"});
    verification.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_VERIFICATION']()).constructor_({io_configuration: this.me}));
    return verification;
  }
  async if_abap_testdouble_config$set_answer(INPUT) {
    let answer = INPUT?.answer;
    if (answer?.getQualifiedName === undefined || answer.getQualifiedName() !== "IF_ABAP_TESTDOUBLE_ANSWER") { answer = undefined; }
    if (answer === undefined) { answer = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_ANSWER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_ANSWER"}).set(INPUT.answer); }
    if (abap.compare.initial(this.#mo_exception) === false || abap.compare.initial(this.#mr_returning) === false || abap.compare.gt(abap.builtin.lines({val: this.#mt_outputs}), abap.IntegerFactory.get(0))) {
      await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(90, 'set_answer( ) cannot be combined with returning( ), set_parameter( ) or raise_exception( )')});
    }
    this.#mi_answer.set(answer);
  }
  async if_abap_testdouble_config$set_matcher(INPUT) {
    let configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    let matcher = INPUT?.matcher;
    if (matcher?.getQualifiedName === undefined || matcher.getQualifiedName() !== "IF_ABAP_TESTDOUBLE_MATCHER") { matcher = undefined; }
    if (matcher === undefined) { matcher = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_MATCHER", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_MATCHER"}).set(INPUT.matcher); }
    this.#mi_matcher.set(matcher);
    configuration.set(this.me);
    return configuration;
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_CONFIGURATION'] = lcl_configuration;
lcl_configuration.ty_output = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_4();
class lcl_verification {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_VERIFICATION';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_TESTDOUBLE_VERIFY"];
  static ATTRIBUTES = {"MO_CONFIGURATION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IO_CONFIGURATION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mo_configuration;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mo_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    this.FRIENDS_ACCESS_INSTANCE["mo_configuration"] = this.#mo_configuration;
  }
  async constructor_(INPUT) {
    let io_configuration = INPUT?.io_configuration;
    if (io_configuration?.getQualifiedName === undefined || io_configuration.getQualifiedName() !== "LCL_CONFIGURATION") { io_configuration = undefined; }
    if (io_configuration === undefined) { io_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"}).set(INPUT.io_configuration); }
    this.#mo_configuration.set(io_configuration);
    return this;
  }
  async if_abap_testdouble_verify$is_called_times(INPUT) {
    let times = INPUT?.times;
    if (times?.getQualifiedName === undefined || times.getQualifiedName() !== "I") { times = undefined; }
    if (times === undefined) { times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.times); }
    await this.#mo_configuration.get().expect({iv_times: times});
  }
  async if_abap_testdouble_verify$is_called_once() {
    await this.#mo_configuration.get().expect({iv_times: abap.IntegerFactory.get(1)});
  }
  async if_abap_testdouble_verify$is_never_called() {
    await this.#mo_configuration.get().expect({iv_times: abap.IntegerFactory.get(0)});
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_VERIFICATION'] = lcl_verification;
class lcl_double {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_TESTDOUBLE-LCL_DOUBLE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"GT_DOUBLES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_DOUBLE", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_DOUBLE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MO_OBJECT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_CONFIGURATIONS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_PENDING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_HANDLE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_HANDLE", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_HANDLE"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"DISPATCH": {"visibility": "I", "exceptions": ["CX_STATIC_CHECK"], "parameters": {"IV_METHOD_NAME": {"type": () => {return new abap.types.Character(61, {"qualifiedName":"abap_methname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IT_PARAMETERS": {"type": () => {return $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}}},
  "FIND": {"visibility": "U", "is_class": "X", "exceptions": ["CX_ATD_EXCEPTION_CORE"], "parameters": {"RO_DOUBLE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_DOUBLE", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_DOUBLE"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}, "IO_OBJECT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " ", "parm_kind": "I", "type_name": "GenericObjectReferenceType"}}},
  "INVOKE": {"visibility": "U", "is_class": "X", "exceptions": ["CX_STATIC_CHECK"], "parameters": {"IO_OBJECT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " ", "parm_kind": "I", "type_name": "GenericObjectReferenceType"}, "IV_METHOD_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "INPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_INTERFACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "CONFIGURE_CALL": {"visibility": "U", "parameters": {"RI_CONFIGURATION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}}},
  "VERIFY": {"visibility": "U", "parameters": {}}};
  #gt_doubles;
  #mt_configurations;
  #mo_pending;
  #mi_handle;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "dispatch": this.#dispatch.bind(this),
      "configure_call": this.configure_call.bind(this),
      "verify": this.verify.bind(this),
    };
    this.gt_doubles = lcl_double.gt_doubles;
    this.FRIENDS_ACCESS_INSTANCE["gt_doubles"] = this.gt_doubles;
    this.mo_object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.#mt_configurations = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_configurations"] = this.#mt_configurations;
    this.#mo_pending = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    this.FRIENDS_ACCESS_INSTANCE["mo_pending"] = this.#mo_pending;
    this.#mi_handle = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_HANDLE", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_HANDLE"});
    this.FRIENDS_ACCESS_INSTANCE["mi_handle"] = this.#mi_handle;
  }
  async find(INPUT) {
    return lcl_double.find(INPUT);
  }
  static async find(INPUT) {
    let ro_double = new abap.types.ABAPObject({qualifiedName: "LCL_DOUBLE", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_DOUBLE"});
    let io_object = INPUT?.io_object;
    if (io_object === undefined) { io_object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.io_object); }
    for await (const unique10 of abap.statements.loop(lcl_double.gt_doubles)) {
      ro_double.set(unique10);
      if (abap.compare.eq(ro_double.get().mo_object, io_object)) {
        return ro_double;
      }
    }
    ro_double.clear();
    await abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ERROR'].raise({iv_text: abap.CharacterFactory.get(53, 'The object is not a test double of cl_abap_testdouble')});
    return ro_double;
  }
  async constructor_(INPUT) {
    let iv_interface = INPUT?.iv_interface;
    if (iv_interface?.getQualifiedName === undefined || iv_interface.getQualifiedName() !== "STRING") { iv_interface = undefined; }
    if (iv_interface === undefined) { iv_interface = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_interface); }
    let lv_interface = new abap.types.String({qualifiedName: "STRING"});
    lv_interface.set(iv_interface);
    this.#mi_handle.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_HANDLE']()).constructor_());
    const family = [];
    const visit = (name) => {
        const intf = abap.Classes[name];
        if (intf === undefined || family.some(member => member.name === name)) { return; }
        family.push({name, intf});
        for (const component of intf.IMPLEMENTED_INTERFACES ?? []) { visit(component); }
    };
    visit(lv_interface.get());
    const double = class {
        static INTERNAL_TYPE = "CLAS";
        static INTERNAL_NAME = "CL_ABAP_TESTDOUBLE=>" + lv_interface.get();
        static IMPLEMENTED_INTERFACES = family.map(member => member.name);
        static ATTRIBUTES = {};
        static METHODS = {};
        constructor() { this.INTERNAL_ID = abap.internalIdCounter++; }
        async constructor_() { return this; }
    };
    for (const member of family) {
        for (const [method, meta] of Object.entries(member.intf.METHODS ?? {})) {
            if (meta.is_class === "X") { continue; }
            const target = meta.alias_for ?? (member.name + "~" + method);
            double.prototype[member.name.toLowerCase() + "$" + method.toLowerCase()] = async function (INPUT) {
                return lcl_double.invoke({
                  io_object: new abap.types.ABAPObject().set(this),
                  iv_method_name: new abap.types.String().set(target),
                  input: INPUT ?? {}});
            };
        }
    }
    this.mo_object.set(new double());
    abap.statements.append({source: this.me, target: lcl_double.gt_doubles});
    return this;
  }
  async invoke(INPUT) {
    return lcl_double.invoke(INPUT);
  }
  static async invoke(INPUT) {
    let io_object = INPUT?.io_object;
    if (io_object === undefined) { io_object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.io_object); }
    let iv_method_name = INPUT?.iv_method_name;
    if (iv_method_name?.getQualifiedName === undefined || iv_method_name.getQualifiedName() !== "STRING") { iv_method_name = undefined; }
    if (iv_method_name === undefined) { iv_method_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_method_name); }
    let input = INPUT?.input;
    let lt_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1();
    let ls_parameter = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_0();
    let lv_interface = new abap.types.String({qualifiedName: "STRING"});
    let lv_method = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.split({source: iv_method_name, at: abap.CharacterFactory.get(1, '~'), targets: [lv_interface,lv_method]});
    const generic = ["AnyType", "CLikeType", "CSequenceType", "DataType", "SimpleType",
      "NumericGenericType", "XSequenceType", "XGenericType", "CGenericType", "NGenericType",
      "PGenericType", "GenericObjectReferenceType", "UnknownType", "VoidType"];
    const valueOf = (parameter, actual) => {
        if (actual instanceof abap.types.FieldSymbol) { actual = actual.getPointer(); }
        if (parameter.parm_kind === "R") { return parameter.type(); }
        if (actual !== undefined && (parameter.parm_kind === "E" || parameter.parm_kind === "C")) { return actual; }
        if (generic.includes(parameter.type_name)) { return actual?.clone?.() ?? new abap.types.String(); }
        const formal = parameter.type();
        if (actual === undefined) { return formal; }
        if (parameter.type_name === "TableType" && formal.getRowType?.() instanceof abap.types.Character
            && formal.getRowType().getQualifiedName?.() === undefined) { return actual.clone(); }
        formal.set(actual);
        return formal;
    };
    const meta = abap.Classes[lv_interface.get()]?.METHODS?.[lv_method.get()];
    let returning = undefined;
    for (const [name, parameter] of Object.entries(meta?.parameters ?? {})) {
        const actual = input[name.toLowerCase()];
      ls_parameter.clear();
        ls_parameter.get().name.set(name);
        ls_parameter.get().kind.set(parameter.parm_kind);
        ls_parameter.get().supplied.set(actual === undefined ? "" : "X");
        ls_parameter.get().value.assign(valueOf(parameter, actual));
        if (parameter.parm_kind === "R") { returning = ls_parameter.get().value.getPointer(); }
      abap.statements.append({source: ls_parameter, target: lt_parameters});
    }
    await (await this.find({io_object: io_object, ro_double: 1})).get().FRIENDS_ACCESS_INSTANCE["dispatch"]({iv_method_name: new abap.types.String().set(`${abap.templateFormatting(lv_interface)}~${abap.templateFormatting(lv_method)}`), it_parameters: lt_parameters});
    return returning;
  }
  async #dispatch(INPUT) {
    let iv_method_name = INPUT?.iv_method_name;
    if (iv_method_name?.getQualifiedName === undefined || iv_method_name.getQualifiedName() !== "ABAP_METHNAME") { iv_method_name = undefined; }
    if (iv_method_name === undefined) { iv_method_name = new abap.types.Character(61, {"qualifiedName":"abap_methname"}).set(INPUT.iv_method_name); }
    let it_parameters = INPUT?.it_parameters;
    if (it_parameters?.getQualifiedName === undefined || it_parameters.getQualifiedName() !== "LCL_ARGUMENTS=>TY_PARAMETERS") { it_parameters = undefined; }
    if (it_parameters === undefined) { it_parameters = $t_Y2xfYWJhcF90ZXN0ZG91YmxlLmNsYXMubG9jYWxzLm1qcw_1().set(INPUT.it_parameters); }
    let lo_arguments = new abap.types.ABAPObject({qualifiedName: "LCL_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_ARGUMENTS"});
    let lo_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    let lo_candidate = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    let lo_last = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    if (abap.compare.initial(this.#mo_pending) === false) {
      lo_configuration.set(this.#mo_pending);
      this.#mo_pending.clear();
      await lo_configuration.get().register({iv_method_name: iv_method_name, it_parameters: it_parameters});
      abap.statements.append({source: lo_configuration, target: this.#mt_configurations});
      return;
    }
    lo_arguments.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_ARGUMENTS']()).constructor_({it_parameters: it_parameters}));
    for await (const unique11 of abap.statements.loop(this.#mt_configurations)) {
      lo_candidate.set(unique11);
      if (abap.compare.eq((await lo_candidate.get().applies_to({iv_method_name: iv_method_name, io_arguments: lo_arguments, rv_applies: 1})), abap.builtin.abap_true)) {
        if (abap.compare.eq((await lo_candidate.get().has_calls_left({rv_left: 1})), abap.builtin.abap_true)) {
          lo_configuration.set(lo_candidate);
          break;
        }
        lo_last.set(lo_candidate);
      }
    }
    if (abap.compare.initial(lo_configuration)) {
      lo_configuration.set(lo_last);
    }
    if (abap.compare.initial(lo_configuration)) {
      return;
    }
    await lo_configuration.get().answer({iv_method_name: iv_method_name, io_arguments: lo_arguments, it_parameters: it_parameters, ii_handle: this.#mi_handle});
  }
  async configure_call(INPUT) {
    let ri_configuration = new abap.types.ABAPObject({qualifiedName: "IF_ABAP_TESTDOUBLE_CONFIG", RTTIName: "\\INTERFACE=IF_ABAP_TESTDOUBLE_CONFIG"});
    this.#mo_pending.set(await (new abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_CONFIGURATION']()).constructor_());
    ri_configuration.set(this.#mo_pending);
    return ri_configuration;
  }
  async verify() {
    let lo_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_CONFIGURATION"});
    for await (const unique12 of abap.statements.loop(this.#mt_configurations)) {
      lo_configuration.set(unique12);
      if (abap.compare.eq(lo_configuration.get().mv_has_expectation, abap.builtin.abap_true) && abap.compare.ne(lo_configuration.get().mv_calls, lo_configuration.get().mv_expected)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.String().set(`${abap.templateFormatting(lo_configuration.get().mv_method_name)} is called ${abap.templateFormatting(lo_configuration.get().mv_calls)} times, expected ${abap.templateFormatting(lo_configuration.get().mv_expected)}`)});
      }
    }
  }
}
abap.Classes['CLAS-CL_ABAP_TESTDOUBLE-LCL_DOUBLE'] = lcl_double;
lcl_double.gt_doubles = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_DOUBLE", RTTIName: "\\CLASS-POOL=CL_ABAP_TESTDOUBLE\\CLASS=LCL_DOUBLE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_abap_testdouble_clas_locals_mjs.bundle.js.map