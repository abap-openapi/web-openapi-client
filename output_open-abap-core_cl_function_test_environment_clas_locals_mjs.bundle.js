"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_function_test_environment_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_function_test_environment.clas.locals.mjs"
/*!*****************************************************************************!*\
  !*** ../output/open-abap-core/cl_function_test_environment.clas.locals.mjs ***!
  \*****************************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_behavior_verification: () => (/* binding */ lcl_behavior_verification),
/* harmony export */   lcl_configuration: () => (/* binding */ lcl_configuration),
/* harmony export */   lcl_double: () => (/* binding */ lcl_double),
/* harmony export */   lcl_input_arguments: () => (/* binding */ lcl_input_arguments),
/* harmony export */   lcl_input_configuration: () => (/* binding */ lcl_input_configuration),
/* harmony export */   lcl_invocation_result: () => (/* binding */ lcl_invocation_result),
/* harmony export */   lcl_output_configuration: () => (/* binding */ lcl_output_configuration),
/* harmony export */   lcl_parameters: () => (/* binding */ lcl_parameters)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
function $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0() { return new abap.types.Structure({
"kind": new abap.types.Character(1, {"qualifiedName":"lcl_parameters=>ty_parameter-kind"}),
"name": new abap.types.Character(30, {"qualifiedName":"abap_parmname"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_parameters=>ty_parameter", undefined, {}, {}); }
function $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_1() { return abap.types.TableFactory.construct($t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_parameters=>ty_parameters"); }
function $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_2() { return new abap.types.Structure({
"importing": new abap.types.Character(1, {}),
"exporting": new abap.types.Character(1, {}),
"changing": new abap.types.Character(1, {}),
"tables": new abap.types.Character(1, {})}, undefined, undefined, {}, {}); }
function $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3() { return new abap.types.Structure({
"name": new abap.types.Character(30, {"qualifiedName":"abap_parmname"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_input_arguments=>ty_name_value", undefined, {}, {}); }
function $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4() { return abap.types.TableFactory.construct($t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, ""); }
// cl_function_test_environment.clas.locals_imp.abap
class lcl_parameters {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_PARAMETERS": {"type": () => {return $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_1();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "GC_KIND": {"type": () => {return $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_2();}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"COPY": {"visibility": "U", "is_class": "X", "parameters": {"RR_COPY": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " ", "parm_kind": "R", "type_name": "DataReference"}, "IV_VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}},
  "SET": {"visibility": "U", "parameters": {"IV_KIND": {"type": () => {return new abap.types.Character();}, "is_optional": " ", "parm_kind": "I", "type_name": "CGenericType"}, "IV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_parmname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "set": this.set.bind(this),
    };
    this.mt_parameters = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_1();
    this.gc_kind = lcl_parameters.gc_kind;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async copy(INPUT) {
    return lcl_parameters.copy(INPUT);
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
  async set(INPUT) {
    let iv_kind = INPUT?.iv_kind;
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "ABAP_PARMNAME") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.iv_name); }
    let iv_value = INPUT?.iv_value;
    let ls_parameter = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
    ls_parameter.get().kind.set(iv_kind);
    ls_parameter.get().name.set(abap.builtin.to_upper({val: iv_name}));
    ls_parameter.get().value.set((await this.copy({iv_value: iv_value, rr_copy: 1})));
    await abap.statements.deleteInternal(this.mt_parameters,{where: async (I) => {return abap.compare.eq(I.kind, ls_parameter.get().kind) && abap.compare.eq(I.name, ls_parameter.get().name);}});
    abap.statements.append({source: ls_parameter, target: this.mt_parameters});
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'] = lcl_parameters;
lcl_parameters.gc_kind = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_2();
lcl_parameters.gc_kind.get().importing.set('I');
lcl_parameters.gc_kind.get().exporting.set('E');
lcl_parameters.gc_kind.get().changing.set('C');
lcl_parameters.gc_kind.get().tables.set('T');
lcl_parameters.ty_parameter = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
lcl_parameters.ty_parameters = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_1();
class lcl_input_arguments {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_ARGUMENTS';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_INPUT_ARGUMENTS"];
  static ATTRIBUTES = {"MT_IMPORTING": {"type": () => {return $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLES": {"type": () => {return $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_CHANGING": {"type": () => {return $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mt_importing = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();
    this.mt_tables = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();
    this.mt_changing = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_4();
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_ftd_input_arguments$get_importing_parameter(INPUT) {
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let ls_row = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    abap.statements.readTable(this.mt_importing,{into: ls_row,
      withKey: (i) => {return abap.compare.eq(i.name, name);},
      withKeyValue: [{key: (i) => {return i.name}, value: name}],
      usesTableLine: false,
      withKeySimple: {"name": name}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique1 = await (new abap.Classes['CX_FTD_PARAMETER_NOT_FOUND']()).constructor_();
      unique1.EXTRA_CX = {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 79};
      throw unique1;
    }
    result.set(ls_row.get().value);
    return result;
  }
  async if_ftd_input_arguments$get_table_parameter(INPUT) {
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let ls_row = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    abap.statements.readTable(this.mt_tables,{into: ls_row,
      withKey: (i) => {return abap.compare.eq(i.name, name);},
      withKeyValue: [{key: (i) => {return i.name}, value: name}],
      usesTableLine: false,
      withKeySimple: {"name": name}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique2 = await (new abap.Classes['CX_FTD_PARAMETER_NOT_FOUND']()).constructor_();
      unique2.EXTRA_CX = {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 88};
      throw unique2;
    }
    result.set(ls_row.get().value);
    return result;
  }
  async if_ftd_input_arguments$get_changing_parameter(INPUT) {
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let ls_row = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    abap.statements.readTable(this.mt_changing,{into: ls_row,
      withKey: (i) => {return abap.compare.eq(i.name, name);},
      withKeyValue: [{key: (i) => {return i.name}, value: name}],
      usesTableLine: false,
      withKeySimple: {"name": name}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique3 = await (new abap.Classes['CX_FTD_PARAMETER_NOT_FOUND']()).constructor_();
      unique3.EXTRA_CX = {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 97};
      throw unique3;
    }
    result.set(ls_row.get().value);
    return result;
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_ARGUMENTS'] = lcl_input_arguments;
lcl_input_arguments.ty_name_value = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
class lcl_output_configuration {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_OUTPUT_CONFIGURATION';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_OUTPUT_CONFIGURATION"];
  static ATTRIBUTES = {"MO_PARAMETERS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mo_parameters = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});
  }
  async constructor_(INPUT) {
    this.mo_parameters.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS']()).constructor_());
    return this;
  }
  async if_ftd_output_configuration$set_exporting_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().exporting, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
  async if_ftd_output_configuration$set_changing_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().changing, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
  async if_ftd_output_configuration$set_table_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().tables, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_OUTPUT_CONFIGURATION'] = lcl_output_configuration;
class lcl_input_configuration {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_CONFIGURATION';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_INPUT_CONFIGURATION"];
  static ATTRIBUTES = {"MO_PARAMETERS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}},
  "MATCHES": {"visibility": "U", "parameters": {"RV_MATCHES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "IO_CALL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mo_parameters;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "matches": this.matches.bind(this),
    };
    this.#mo_parameters = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});
    this.FRIENDS_ACCESS_INSTANCE["mo_parameters"] = this.#mo_parameters;
  }
  async constructor_(INPUT) {
    this.#mo_parameters.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS']()).constructor_());
    return this;
  }
  async matches(INPUT) {
    let rv_matches = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let io_call = INPUT?.io_call;
    if (io_call?.getQualifiedName === undefined || io_call.getQualifiedName() !== "LCL_PARAMETERS") { io_call = undefined; }
    if (io_call === undefined) { io_call = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"}).set(INPUT.io_call); }
    let ls_expected = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
    let ls_actual = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
    let fs_lg_expected_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lg_actual_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    for await (const unique4 of abap.statements.loop(this.#mo_parameters.get().mt_parameters)) {
      ls_expected.set(unique4);
      abap.statements.assign({target: fs_lg_expected_, source: ls_expected.get().value.dereference()});
      abap.statements.readTable(io_call.get().mt_parameters,{into: ls_actual,
        withKey: (i) => {return abap.compare.eq(i.kind, ls_expected.get().kind) && abap.compare.eq(i.name, ls_expected.get().name);},
        withKeyValue: [{key: (i) => {return i.kind}, value: ls_expected.get().kind},{key: (i) => {return i.name}, value: ls_expected.get().name}],
        usesTableLine: false,
        withKeySimple: {"kind": ls_expected.get().kind,"name": ls_expected.get().name}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        if (abap.compare.initial(fs_lg_expected_) === false) {
          return rv_matches;
        }
        continue;
      }
      abap.statements.assign({target: fs_lg_actual_, source: ls_actual.get().value.dereference()});
      if (abap.compare.ne(fs_lg_expected_, fs_lg_actual_)) {
        return rv_matches;
      }
    }
    rv_matches.set(abap.builtin.abap_true);
    return rv_matches;
  }
  async if_ftd_input_configuration$set_importing_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.#mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().importing, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
  async if_ftd_input_configuration$set_changing_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.#mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().changing, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
  async if_ftd_input_configuration$set_table_parameter(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "ABAP_PARMNAME") { name = undefined; }
    if (name === undefined) { name = new abap.types.Character(30, {"qualifiedName":"abap_parmname"}).set(INPUT.name); }
    let value = INPUT?.value;
    await this.#mo_parameters.get().set({iv_kind: abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS'].gc_kind.get().tables, iv_name: name, iv_value: value});
    self.set(this.me);
    return self;
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_CONFIGURATION'] = lcl_input_configuration;
class lcl_invocation_result {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INVOCATION_RESULT';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_INVOCATION_RESULT"];
  static ATTRIBUTES = {"MO_OUTPUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CLASSIC_EXCEPTION": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_excpname"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mo_output = new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});
    this.mv_classic_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"});
    this.mo_exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
  }
  async constructor_(INPUT) {
    this.mo_output.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_OUTPUT_CONFIGURATION']()).constructor_());
    return this;
  }
  async if_ftd_invocation_result$get_output_configuration(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"});
    result.set(this.mo_output);
    return result;
  }
  async if_ftd_invocation_result$raise_classic_exception(INPUT) {
    let classic_exception = INPUT?.classic_exception;
    if (classic_exception?.getQualifiedName === undefined || classic_exception.getQualifiedName() !== "ABAP_EXCPNAME") { classic_exception = undefined; }
    if (classic_exception === undefined) { classic_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"}).set(INPUT.classic_exception); }
    this.mv_classic_exception.set(abap.builtin.to_upper({val: classic_exception}));
  }
  async if_ftd_invocation_result$raise_exception(INPUT) {
    let exception = INPUT?.exception;
    if (exception?.getQualifiedName === undefined || exception.getQualifiedName() !== "CX_ROOT") { exception = undefined; }
    if (exception === undefined) { exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.exception); }
    this.mo_exception.set(exception);
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INVOCATION_RESULT'] = lcl_invocation_result;
class lcl_configuration {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_CONFIGURATION';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_INPUT_CONFIG_SETTER","IF_FTD_OUTPUT_CONFIG_SETTER"];
  static ATTRIBUTES = {"MI_ANSWER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_ANSWER", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_ANSWER"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_OUTPUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CLASSIC_EXCEPTION": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_excpname"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_IGNORE_ALL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_INPUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_INPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INPUT_CONFIGURATION"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_ANSWERED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_TIMES": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_CALLS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"REPLACE_ANSWER": {"visibility": "I", "parameters": {}},
  "APPLIES_TO": {"visibility": "U", "parameters": {"RV_APPLIES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "IO_CALL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "HAS_CALLS_LEFT": {"visibility": "U", "parameters": {"RV_LEFT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}}},
  "COUNT_CALL": {"visibility": "U", "parameters": {}}};
  #mv_ignore_all;
  #mo_input;
  #mv_answered;
  #mv_times;
  #mv_calls;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "replace_answer": this.#replace_answer.bind(this),
      "applies_to": this.applies_to.bind(this),
      "has_calls_left": this.has_calls_left.bind(this),
      "count_call": this.count_call.bind(this),
    };
    this.mi_answer = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_ANSWER", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_ANSWER"});
    this.mo_output = new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});
    this.mv_classic_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"});
    this.mo_exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    this.#mv_ignore_all = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_ignore_all"] = this.#mv_ignore_all;
    this.#mo_input = new abap.types.ABAPObject({qualifiedName: "LCL_INPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INPUT_CONFIGURATION"});
    this.FRIENDS_ACCESS_INSTANCE["mo_input"] = this.#mo_input;
    this.#mv_answered = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_answered"] = this.#mv_answered;
    this.#mv_times = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_times"] = this.#mv_times;
    this.#mv_calls = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_calls"] = this.#mv_calls;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async applies_to(INPUT) {
    let rv_applies = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let io_call = INPUT?.io_call;
    if (io_call?.getQualifiedName === undefined || io_call.getQualifiedName() !== "LCL_PARAMETERS") { io_call = undefined; }
    if (io_call === undefined) { io_call = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"}).set(INPUT.io_call); }
    if (abap.compare.eq(this.#mv_answered, abap.builtin.abap_false)) {
      rv_applies.set(abap.builtin.abap_false);
    } else if (abap.compare.eq(this.#mv_ignore_all, abap.builtin.abap_true)) {
      rv_applies.set(abap.builtin.abap_true);
    } else if (abap.compare.initial(this.#mo_input) === false) {
      rv_applies.set((await this.#mo_input.get().matches({io_call: io_call, rv_matches: 1})));
    }
    return rv_applies;
  }
  async has_calls_left(INPUT) {
    let rv_left = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    rv_left.set(abap.builtin.boolc(abap.compare.eq(this.#mv_times, abap.IntegerFactory.get(0)) || abap.compare.lt(this.#mv_calls, this.#mv_times)));
    return rv_left;
  }
  async count_call() {
    this.#mv_calls.set(abap.operators.add(this.#mv_calls,abap.IntegerFactory.get(1)));
  }
  async #replace_answer() {
    this.mi_answer.clear();
    this.mo_output.clear();
    this.mv_classic_exception.clear();
    this.mo_exception.clear();
    this.#mv_answered.set(abap.builtin.abap_true);
  }
  async if_ftd_input_config_setter$when(INPUT) {
    let output_configuration_setter = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let input_configuration = INPUT?.input_configuration;
    if (input_configuration?.getQualifiedName === undefined || input_configuration.getQualifiedName() !== "IF_FTD_INPUT_CONFIGURATION") { input_configuration = undefined; }
    if (input_configuration === undefined) { input_configuration = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"}).set(INPUT.input_configuration); }
    await abap.statements.cast(this.#mo_input, input_configuration, {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 312});
    output_configuration_setter.set(this.me);
    return output_configuration_setter;
  }
  async if_ftd_input_config_setter$ignore_all_parameters(INPUT) {
    let output_configuration_setter = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    this.#mv_ignore_all.set(abap.builtin.abap_true);
    output_configuration_setter.set(this.me);
    return output_configuration_setter;
  }
  async if_ftd_output_config_setter$then_answer(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let answer = INPUT?.answer;
    if (answer?.getQualifiedName === undefined || answer.getQualifiedName() !== "IF_FTD_INVOCATION_ANSWER") { answer = undefined; }
    if (answer === undefined) { answer = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_ANSWER", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_ANSWER"}).set(INPUT.answer); }
    await this.#replace_answer();
    this.mi_answer.set(answer);
    self.set(this.me);
    return self;
  }
  async if_ftd_output_config_setter$then_set_output(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let output_configuration = INPUT?.output_configuration;
    if (output_configuration?.getQualifiedName === undefined || output_configuration.getQualifiedName() !== "IF_FTD_OUTPUT_CONFIGURATION") { output_configuration = undefined; }
    if (output_configuration === undefined) { output_configuration = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"}).set(INPUT.output_configuration); }
    await this.#replace_answer();
    await abap.statements.cast(this.mo_output, output_configuration, {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 329});
    self.set(this.me);
    return self;
  }
  async if_ftd_output_config_setter$then_raise_classic_exception(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let classic_exception = INPUT?.classic_exception;
    if (classic_exception?.getQualifiedName === undefined || classic_exception.getQualifiedName() !== "ABAP_EXCPNAME") { classic_exception = undefined; }
    if (classic_exception === undefined) { classic_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"}).set(INPUT.classic_exception); }
    await this.#replace_answer();
    this.mv_classic_exception.set(abap.builtin.to_upper({val: classic_exception}));
    self.set(this.me);
    return self;
  }
  async if_ftd_output_config_setter$then_raise_exception(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let exception = INPUT?.exception;
    if (exception?.getQualifiedName === undefined || exception.getQualifiedName() !== "CX_ROOT") { exception = undefined; }
    if (exception === undefined) { exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.exception); }
    await this.#replace_answer();
    this.mo_exception.set(exception);
    self.set(this.me);
    return self;
  }
  async if_ftd_output_config_setter$for_times(INPUT) {
    let self = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIG_SETTER"});
    let times = INPUT?.times;
    if (times?.getQualifiedName === undefined || times.getQualifiedName() !== "I") { times = undefined; }
    if (times === undefined) { times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.times); }
    this.#mv_times.set(times);
    self.set(this.me);
    return self;
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_CONFIGURATION'] = lcl_configuration;
class lcl_behavior_verification {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_BEHAVIOR_VERIFICATION';
  static IMPLEMENTED_INTERFACES = ["IF_FTD_BEHAVIOR_VERIFICATION"];
  static ATTRIBUTES = {"MV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_CALLS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_WITH_INPUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CHECK": {"visibility": "I", "parameters": {"IV_OK": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_EXPECTED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_CALLS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}, "IV_WITH_INPUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}}}};
  #mv_name;
  #mv_calls;
  #mv_with_input;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "check": this.#check.bind(this),
    };
    this.#mv_name = new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});
    this.FRIENDS_ACCESS_INSTANCE["mv_name"] = this.#mv_name;
    this.#mv_calls = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_calls"] = this.#mv_calls;
    this.#mv_with_input = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_with_input"] = this.#mv_with_input;
  }
  async constructor_(INPUT) {
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "SXCO_FM_NAME") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"}).set(INPUT.iv_name); }
    let iv_calls = INPUT?.iv_calls;
    if (iv_calls?.getQualifiedName === undefined || iv_calls.getQualifiedName() !== "I") { iv_calls = undefined; }
    if (iv_calls === undefined) { iv_calls = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_calls); }
    let iv_with_input = INPUT?.iv_with_input;
    if (iv_with_input?.getQualifiedName === undefined || iv_with_input.getQualifiedName() !== "ABAP_BOOL") { iv_with_input = undefined; }
    if (iv_with_input === undefined) { iv_with_input = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_with_input); }
    this.#mv_name.set(iv_name);
    this.#mv_calls.set(iv_calls);
    this.#mv_with_input.set(iv_with_input);
    return this;
  }
  async #check(INPUT) {
    let iv_ok = INPUT?.iv_ok;
    if (iv_ok?.getQualifiedName === undefined || iv_ok.getQualifiedName() !== "ABAP_BOOL") { iv_ok = undefined; }
    if (iv_ok === undefined) { iv_ok = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_ok); }
    let iv_expected = INPUT?.iv_expected;
    if (iv_expected?.getQualifiedName === undefined || iv_expected.getQualifiedName() !== "STRING") { iv_expected = undefined; }
    if (iv_expected === undefined) { iv_expected = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_expected); }
    let lv_message = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(iv_ok, abap.builtin.abap_true)) {
      return;
    }
    lv_message.set(new abap.types.String().set(`${abap.templateFormatting(this.#mv_name)} is called ${abap.templateFormatting(this.#mv_calls)} times`));
    if (abap.compare.eq(this.#mv_with_input, abap.builtin.abap_true)) {
      lv_message.set(new abap.types.String().set(`${abap.templateFormatting(lv_message)} with the input configuration`));
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.String().set(`${abap.templateFormatting(lv_message)}, expected ${abap.templateFormatting(iv_expected)}`)});
  }
  async if_ftd_behavior_verification$is_called_times(INPUT) {
    let times = INPUT?.times;
    if (times?.getQualifiedName === undefined || times.getQualifiedName() !== "I") { times = undefined; }
    if (times === undefined) { times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.times); }
    await this.#check({iv_ok: abap.builtin.boolc(abap.compare.eq(this.#mv_calls, times)), iv_expected: new abap.types.String().set(`${abap.templateFormatting(times)}`)});
  }
  async if_ftd_behavior_verification$is_called_once() {
    await this.if_ftd_behavior_verification$is_called_times({times: abap.IntegerFactory.get(1)});
  }
  async if_ftd_behavior_verification$is_never_called() {
    await this.if_ftd_behavior_verification$is_called_times({times: abap.IntegerFactory.get(0)});
  }
  async if_ftd_behavior_verification$is_called_at_least(INPUT) {
    let times = INPUT?.times;
    if (times?.getQualifiedName === undefined || times.getQualifiedName() !== "I") { times = undefined; }
    if (times === undefined) { times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.times); }
    await this.#check({iv_ok: abap.builtin.boolc(abap.compare.ge(this.#mv_calls, times)), iv_expected: new abap.types.String().set(`at least ${abap.templateFormatting(times)}`)});
  }
  async if_ftd_behavior_verification$is_called_at_least_once() {
    await this.if_ftd_behavior_verification$is_called_at_least({times: abap.IntegerFactory.get(1)});
  }
  async if_ftd_behavior_verification$is_called_at_most(INPUT) {
    let times = INPUT?.times;
    if (times?.getQualifiedName === undefined || times.getQualifiedName() !== "I") { times = undefined; }
    if (times === undefined) { times = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.times); }
    await this.#check({iv_ok: abap.builtin.boolc(abap.compare.le(this.#mv_calls, times)), iv_expected: new abap.types.String().set(`at most ${abap.templateFormatting(times)}`)});
  }
  async if_ftd_behavior_verification$is_called_at_most_once() {
    await this.if_ftd_behavior_verification$is_called_at_most({times: abap.IntegerFactory.get(1)});
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_BEHAVIOR_VERIFICATION'] = lcl_behavior_verification;
class lcl_double {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_DOUBLE';
  static IMPLEMENTED_INTERFACES = ["IF_FUNCTION_TESTDOUBLE"];
  static ATTRIBUTES = {"MV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_CONFIGURATIONS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_CONFIGURATION"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_CALLS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"RECORD": {"visibility": "I", "parameters": {"RO_CALL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}, "FMINPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}},
  "ANSWER": {"visibility": "I", "parameters": {"RO_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_INVOCATION_RESULT", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INVOCATION_RESULT"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}, "FMINPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "II_ANSWER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_ANSWER", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_ANSWER"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "RESPOND": {"visibility": "I", "exceptions": ["CX_STATIC_CHECK"], "parameters": {"FMINPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "IO_OUTPUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "IV_CLASSIC_EXCEPTION": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"abap_excpname"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IO_EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "WRITE_OUTPUT": {"visibility": "I", "parameters": {"FMINPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "IO_OUTPUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_NAME": {"type": () => {return new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}}},
  "INVOKE": {"visibility": "U", "exceptions": ["CX_STATIC_CHECK"], "parameters": {"FMINPUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}}}};
  #mv_name;
  #mt_configurations;
  #mt_calls;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "record": this.#record.bind(this),
      "answer": this.#answer.bind(this),
      "respond": this.#respond.bind(this),
      "write_output": this.#write_output.bind(this),
      "invoke": this.invoke.bind(this),
    };
    this.#mv_name = new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"});
    this.FRIENDS_ACCESS_INSTANCE["mv_name"] = this.#mv_name;
    this.#mt_configurations = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_CONFIGURATION"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_configurations"] = this.#mt_configurations;
    this.#mt_calls = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_calls"] = this.#mt_calls;
  }
  async constructor_(INPUT) {
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "SXCO_FM_NAME") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.Character(30, {"qualifiedName":"SXCO_FM_NAME","ddicName":"SXCO_FM_NAME","description":"Function module name"}).set(INPUT.iv_name); }
    abap.statements.assert(abap.compare.initial(iv_name) === false);
    this.#mv_name.set(iv_name);
    return this;
  }
  async if_function_testdouble$clear() {
    this.#mt_configurations.clear();
    this.#mt_calls.clear();
  }
  async invoke(INPUT) {
    let fminput = INPUT?.fminput;
    let lo_call = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});
    let lo_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_CONFIGURATION"});
    let lo_candidate = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_CONFIGURATION"});
    let lo_result = new abap.types.ABAPObject({qualifiedName: "LCL_INVOCATION_RESULT", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INVOCATION_RESULT"});
    let lo_no_output = new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    lo_call.set((await this.#record({fminput: fminput, ro_call: 1})));
    abap.statements.append({source: lo_call, target: this.#mt_calls});
    lv_index.set(abap.builtin.lines({val: this.#mt_configurations}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique5 = 1;
    while (abap.compare.gt(lv_index, abap.IntegerFactory.get(0))) {
      abap.builtin.sy.get().index.set(unique5++);
      abap.statements.readTable(this.#mt_configurations,{index: lv_index,
        into: lo_candidate});
      if (abap.compare.eq((await lo_candidate.get().applies_to({io_call: lo_call, rv_applies: 1})), abap.builtin.abap_true)) {
        lo_configuration.set(lo_candidate);
        break;
      }
      lv_index.set(abap.operators.minus(lv_index,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.initial(lo_configuration) || abap.compare.eq((await lo_configuration.get().has_calls_left({rv_left: 1})), abap.builtin.abap_false)) {
      await this.#write_output({fminput: fminput, io_output: lo_no_output});
      return;
    }
    await lo_configuration.get().count_call();
    if (abap.compare.initial(lo_configuration.get().mi_answer) === false) {
      lo_result.set((await this.#answer({fminput: fminput, ii_answer: lo_configuration.get().mi_answer, ro_result: 1})));
      await this.#respond({fminput: fminput, io_output: lo_result.get().mo_output, iv_classic_exception: lo_result.get().mv_classic_exception, io_exception: lo_result.get().mo_exception});
    } else {
      await this.#respond({fminput: fminput, io_output: lo_configuration.get().mo_output, iv_classic_exception: lo_configuration.get().mv_classic_exception, io_exception: lo_configuration.get().mo_exception});
    }
  }
  async #respond(INPUT) {
    let fminput = INPUT?.fminput;
    let io_output = INPUT?.io_output;
    if (io_output?.getQualifiedName === undefined || io_output.getQualifiedName() !== "LCL_OUTPUT_CONFIGURATION") { io_output = undefined; }
    if (io_output === undefined) { io_output = new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"}).set(INPUT.io_output); }
    let iv_classic_exception = INPUT?.iv_classic_exception;
    if (iv_classic_exception?.getQualifiedName === undefined || iv_classic_exception.getQualifiedName() !== "ABAP_EXCPNAME") { iv_classic_exception = undefined; }
    if (iv_classic_exception === undefined) { iv_classic_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"}).set(INPUT.iv_classic_exception); }
    let io_exception = INPUT?.io_exception;
    if (io_exception?.getQualifiedName === undefined || io_exception.getQualifiedName() !== "CX_ROOT") { io_exception = undefined; }
    if (io_exception === undefined) { io_exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.io_exception); }
    let lv_exception = new abap.types.Character(30, {"qualifiedName":"abap_excpname"});
    if (abap.compare.initial(io_exception) === false) {
      throw io_exception.get();
    } else if (abap.compare.initial(iv_classic_exception) === false) {
      lv_exception.set(iv_classic_exception);
      throw new abap.ClassicError({classic: lv_exception.get().trimEnd()});
    }
    await this.#write_output({fminput: fminput, io_output: io_output});
  }
  async #record(INPUT) {
    let ro_call = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});
    let fminput = INPUT?.fminput;
    let ls_parameter = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
    let lr_actual = new abap.types.DataReference(new abap.types.Character(4));
    let fs_lg_actual_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    ro_call.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_PARAMETERS']()).constructor_());
    const kinds = {exporting: "I", changing: "C", tables: "T"};
    for (const [group, kind] of Object.entries(kinds)) {
        for (const [name, actual] of Object.entries(fminput?.[group] ?? {})) {
            if (actual === undefined) { continue; }
        ls_parameter.clear();
            ls_parameter.get().kind.set(kind);
            ls_parameter.get().name.set(name.toUpperCase());
            lr_actual.assign(actual instanceof abap.types.FieldSymbol ? actual.getPointer() : actual);
        abap.statements.assign({target: fs_lg_actual_, source: lr_actual.dereference()});
        await ro_call.get().set({iv_kind: ls_parameter.get().kind, iv_name: ls_parameter.get().name, iv_value: fs_lg_actual_});
        }
    }
    return ro_call;
  }
  async #answer(INPUT) {
    let ro_result = new abap.types.ABAPObject({qualifiedName: "LCL_INVOCATION_RESULT", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INVOCATION_RESULT"});
    let fminput = INPUT?.fminput;
    let ii_answer = INPUT?.ii_answer;
    if (ii_answer?.getQualifiedName === undefined || ii_answer.getQualifiedName() !== "IF_FTD_INVOCATION_ANSWER") { ii_answer = undefined; }
    if (ii_answer === undefined) { ii_answer = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_ANSWER", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_ANSWER"}).set(INPUT.ii_answer); }
    let lo_result = new abap.types.ABAPObject({qualifiedName: "LCL_INVOCATION_RESULT", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INVOCATION_RESULT"});
    let li_result = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INVOCATION_RESULT", RTTIName: "\\INTERFACE=IF_FTD_INVOCATION_RESULT"});
    let lo_arguments = new abap.types.ABAPObject({qualifiedName: "LCL_INPUT_ARGUMENTS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INPUT_ARGUMENTS"});
    let li_arguments = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_ARGUMENTS", RTTIName: "\\INTERFACE=IF_FTD_INPUT_ARGUMENTS"});
    let ls_importing = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    let ls_table = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    let ls_changing = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_3();
    lo_result.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INVOCATION_RESULT']()).constructor_());
    li_result.set(lo_result);
    lo_arguments.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_ARGUMENTS']()).constructor_());
    li_arguments.set(lo_arguments);
    for (const importing in fminput?.exporting || []) {
        ls_importing.get().name.set(importing.toUpperCase());
        ls_importing.get().value.pointer = fminput.exporting[importing];
      abap.statements.insertInternal({data: ls_importing, table: lo_arguments.get().mt_importing});
    }
    for (const table in fminput?.tables || []) {
        ls_table.get().name.set(table.toUpperCase());
        ls_table.get().value.pointer = fminput.tables[table];
      abap.statements.insertInternal({data: ls_table, table: lo_arguments.get().mt_tables});
    }
    for (const changing in fminput?.changing || []) {
        ls_changing.get().name.set(changing.toUpperCase());
        ls_changing.get().value.pointer = fminput.changing[changing];
      abap.statements.insertInternal({data: ls_changing, table: lo_arguments.get().mt_changing});
    }
    await ii_answer.get().if_ftd_invocation_answer$answer({arguments: li_arguments, result: li_result});
    ro_result.set(lo_result);
    return ro_result;
  }
  async #write_output(INPUT) {
    let fminput = INPUT?.fminput;
    let io_output = INPUT?.io_output;
    if (io_output?.getQualifiedName === undefined || io_output.getQualifiedName() !== "LCL_OUTPUT_CONFIGURATION") { io_output = undefined; }
    if (io_output === undefined) { io_output = new abap.types.ABAPObject({qualifiedName: "LCL_OUTPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_OUTPUT_CONFIGURATION"}).set(INPUT.io_output); }
    let ls_parameter = $t_Y2xfZnVuY3Rpb25fdGVzdF9lbnZpcm9ubWVudC5jbGFzLmxvY2Fscy5tanM_0();
    for (const target of Object.values(fminput?.importing ?? {})) { target?.clear?.(); }
    if (abap.compare.initial(io_output)) {
      return;
    }
    for await (const unique6 of abap.statements.loop(io_output.get().mo_parameters.get().mt_parameters)) {
      ls_parameter.set(unique6);
      const group = {E: "importing", C: "changing", T: "tables"}[ls_parameter.get().kind.get()];
      const target = fminput?.[group]?.[ls_parameter.get().name.get().trimEnd().toLowerCase()];
      if (target !== undefined) { target.set(ls_parameter.get().value.getPointer()); }
    }
  }
  async if_function_testdouble$configure_call(INPUT) {
    let input_configuration_setter = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIG_SETTER", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIG_SETTER"});
    let lo_configuration = new abap.types.ABAPObject({qualifiedName: "LCL_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_CONFIGURATION"});
    lo_configuration.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_CONFIGURATION']()).constructor_());
    abap.statements.append({source: lo_configuration, target: this.#mt_configurations});
    input_configuration_setter.set(lo_configuration);
    return input_configuration_setter;
  }
  async if_function_testdouble$create_input_configuration(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"});
    result.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_INPUT_CONFIGURATION']()).constructor_());
    return result;
  }
  async if_function_testdouble$create_output_configuration(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "IF_FTD_OUTPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_OUTPUT_CONFIGURATION"});
    result.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_OUTPUT_CONFIGURATION']()).constructor_());
    return result;
  }
  async if_function_testdouble$verify(INPUT) {
    let behavior_verification = new abap.types.ABAPObject({qualifiedName: "IF_FTD_BEHAVIOR_VERIFICATION", RTTIName: "\\INTERFACE=IF_FTD_BEHAVIOR_VERIFICATION"});
    let input_configuration = new abap.types.ABAPObject({qualifiedName: "IF_FTD_INPUT_CONFIGURATION", RTTIName: "\\INTERFACE=IF_FTD_INPUT_CONFIGURATION"});
    if (INPUT && INPUT.input_configuration) {input_configuration.set(INPUT.input_configuration);}
    let lo_input = new abap.types.ABAPObject({qualifiedName: "LCL_INPUT_CONFIGURATION", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_INPUT_CONFIGURATION"});
    let lo_call = new abap.types.ABAPObject({qualifiedName: "LCL_PARAMETERS", RTTIName: "\\CLASS-POOL=CL_FUNCTION_TEST_ENVIRONMENT\\CLASS=LCL_PARAMETERS"});
    let lv_calls = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.initial(input_configuration) === false) {
      await abap.statements.cast(lo_input, input_configuration, {"INTERNAL_FILENAME": "cl_function_test_environment.clas.locals_imp.abap","INTERNAL_LINE": 656});
    }
    for await (const unique7 of abap.statements.loop(this.#mt_calls)) {
      lo_call.set(unique7);
      if (abap.compare.initial(lo_input) || abap.compare.eq((await lo_input.get().matches({io_call: lo_call, rv_matches: 1})), abap.builtin.abap_true)) {
        lv_calls.set(abap.operators.add(lv_calls,abap.IntegerFactory.get(1)));
      }
    }
    behavior_verification.set(await (new abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_BEHAVIOR_VERIFICATION']()).constructor_({iv_name: this.#mv_name, iv_calls: lv_calls, iv_with_input: abap.builtin.boolc(abap.compare.initial(lo_input) === false)}));
    return behavior_verification;
  }
}
abap.Classes['CLAS-CL_FUNCTION_TEST_ENVIRONMENT-LCL_DOUBLE'] = lcl_double;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_function_test_environment_clas_locals_mjs.bundle.js.map