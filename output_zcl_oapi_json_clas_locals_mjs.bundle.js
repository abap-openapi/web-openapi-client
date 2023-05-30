"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_zcl_oapi_json_clas_locals_mjs"],{

/***/ "../output/zcl_oapi_json.clas.locals.mjs":
/*!***********************************************!*\
  !*** ../output/zcl_oapi_json.clas.locals.mjs ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_parser: () => (/* binding */ lcl_parser),
/* harmony export */   lcl_stack: () => (/* binding */ lcl_stack)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// zcl_oapi_json.clas.locals_def.abap
// zcl_oapi_json.clas.locals_imp.abap
class lcl_stack {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_OAPI_JSON-LCL_STACK';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"PUSH": {"visibility": "U", "parameters": {"IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "POP": {"visibility": "U", "parameters": {"RV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_ARRAY": {"visibility": "U", "parameters": {"RV_ARRAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "GET_AND_INCREASE_INDEX": {"visibility": "U", "parameters": {"RV_INDEX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_FULL_NAME": {"visibility": "U", "parameters": {"RV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async push(INPUT) {
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_type) {iv_type.set(INPUT.iv_type);}
    let ls_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    ls_data.get().name.set(iv_name);
    ls_data.get().is_array.set(abap.builtin.boolc(abap.compare.eq(iv_type, new abap.types.Character(5).set('array'))));
    abap.statements.append({source: ls_data, target: this.mt_data});
  }
  async is_array() {
    let rv_array = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let ls_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    abap.statements.readTable(this.mt_data,{index: lv_index,
      into: ls_data});
    rv_array.set(ls_data.get().is_array);
    return rv_array;
  }
  async get_and_increase_index() {
    let rv_index = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_ls_data_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data"));
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    abap.statements.readTable(this.mt_data,{index: lv_index,
      assigning: fs_ls_data_});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      fs_ls_data_.get().array_index.set(abap.operators.add(fs_ls_data_.get().array_index,new abap.types.Integer().set(1)));
      rv_index.set(fs_ls_data_.get().array_index);
      rv_index.set(abap.builtin.condense({val: rv_index}));
    }
    return rv_index;
  }
  async pop() {
    let rv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let ls_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    if (abap.compare.gt(lv_index, new abap.types.Integer().set(0))) {
      abap.statements.readTable(this.mt_data,{index: lv_index,
        into: ls_data});
      rv_name.set(ls_data.get().name);
      await abap.statements.deleteInternal(this.mt_data,{index: lv_index});
    }
    return rv_name;
  }
  async get_full_name() {
    let rv_path = new abap.types.String({qualifiedName: "STRING"});
    let ls_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    for await (const unique17 of abap.statements.loop(this.mt_data)) {
      ls_data.set(unique17);
      rv_path.set(abap.operators.concat(rv_path,ls_data.get().name));
    }
    return rv_path;
  }
}
abap.Classes['CLAS-ZCL_OAPI_JSON-LCL_STACK'] = lcl_stack;
lcl_stack.ty_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), "is_array": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "array_index": new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
class lcl_parser {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_OAPI_JSON-LCL_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"PARSE": {"visibility": "U", "parameters": {"RT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"parent": new abap.types.String({qualifiedName: "TY_DATA-PARENT"}), "name": new abap.types.String({qualifiedName: "TY_DATA-NAME"}), "full_name": new abap.types.String({qualifiedName: "TY_DATA-FULL_NAME"}), "value": new abap.types.String({qualifiedName: "TY_DATA-VALUE"})}, "ty_data"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_data_tt");}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async parse(INPUT) {
    let rt_data = abap.types.TableFactory.construct(new abap.types.Structure({"parent": new abap.types.String({qualifiedName: "TY_DATA-PARENT"}), "name": new abap.types.String({qualifiedName: "TY_DATA-NAME"}), "full_name": new abap.types.String({qualifiedName: "TY_DATA-FULL_NAME"}), "value": new abap.types.String({qualifiedName: "TY_DATA-VALUE"})}, "ty_data"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_data_tt");
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let li_next = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let li_reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"});
    let li_close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_CLOSE_ELEMENT"});
    let li_open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_OPEN_ELEMENT"});
    let lt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let li_value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE", RTTIName: "\\INTERFACE=IF_SXML_VALUE_NODE"});
    let lv_push = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lo_stack = new abap.types.ABAPObject({qualifiedName: "LCL_STACK", RTTIName: "\\CLASS-POOL=ZCL_OAPI_JSON\\CLASS=LCL_STACK"});
    let ls_data = new abap.types.Structure({"parent": new abap.types.String({qualifiedName: "TY_DATA-PARENT"}), "name": new abap.types.String({qualifiedName: "TY_DATA-NAME"}), "full_name": new abap.types.String({qualifiedName: "TY_DATA-FULL_NAME"}), "value": new abap.types.String({qualifiedName: "TY_DATA-VALUE"})}, "ty_data");
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    lo_stack.set(await (new abap.Classes['CLAS-ZCL_OAPI_JSON-LCL_STACK']()).constructor_());
    li_reader.set((await abap.Classes['CL_SXML_STRING_READER'].create({data: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_to({source: iv_json}))})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique18 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique18++);
      li_node.set((await li_reader.get().if_sxml_reader$read_next_node()));
      if (abap.compare.initial(li_node)) {
        break;
      }
      abap.statements.append({source: li_node, target: lt_nodes});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    for await (const unique19 of abap.statements.loop(lt_nodes)) {
      li_node.set(unique19);
      lv_index.set(abap.builtin.sy.get().tabix);
      let unique20 = li_node.get().if_sxml_node$type;
      if (abap.compare.eq(unique20, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        await abap.statements.cast(li_open, li_node);
        lt_attributes.set((await li_open.get().if_sxml_open_element$get_attributes()));
        abap.statements.readTable(lt_attributes,{index: new abap.types.Integer().set(1),
          into: li_attribute});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
          lv_push.set((await li_attribute.get().if_sxml_attribute$get_value()));
        } else if (abap.compare.eq((await lo_stack.get().is_array()), abap.builtin.abap_true)) {
          lv_push.set((await lo_stack.get().get_and_increase_index()));
        }
        if (abap.compare.initial(lv_push) === false) {
          abap.statements.clear(ls_data);
          ls_data.get().parent.set((await lo_stack.get().get_full_name()));
          ls_data.get().name.set(lv_push);
          ls_data.get().full_name.set(abap.operators.concat(ls_data.get().parent,ls_data.get().name));
          lv_index.set(abap.operators.add(lv_index,new abap.types.Integer().set(1)));
          abap.statements.readTable(lt_nodes,{index: lv_index,
            into: li_next});
          if (abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0)) && abap.compare.eq(li_next.get().if_sxml_node$type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
            await abap.statements.cast(li_value, li_next);
            ls_data.get().value.set((await li_value.get().if_sxml_value_node$get_value()));
          }
          abap.statements.append({source: ls_data, target: rt_data});
          await lo_stack.get().push({iv_name: lv_push, iv_type: li_open.get().if_sxml_open_element$qname.get().name});
        }
        if (abap.compare.eq(li_open.get().if_sxml_open_element$qname.get().name, new abap.types.Character(6).set('object')) || abap.compare.eq(li_open.get().if_sxml_open_element$qname.get().name, new abap.types.Character(5).set('array'))) {
          abap.statements.clear(ls_data);
          ls_data.get().parent.set((await lo_stack.get().get_full_name()));
          ls_data.get().name.set(new abap.types.Character(1).set('/'));
          ls_data.get().full_name.set(abap.operators.concat(ls_data.get().parent,ls_data.get().name));
          abap.statements.append({source: ls_data, target: rt_data});
          await lo_stack.get().push({iv_name: new abap.types.Character(1).set('/'), iv_type: li_open.get().if_sxml_open_element$qname.get().name});
        }
      } else if (abap.compare.eq(unique20, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        await abap.statements.cast(li_close, li_node);
        lv_name.set((await lo_stack.get().pop()));
        if (abap.compare.eq(lv_name, new abap.types.Character(1).set('/'))) {
          await lo_stack.get().pop();
        }
      }
    }
    return rt_data;
  }
}
abap.Classes['CLAS-ZCL_OAPI_JSON-LCL_PARSER'] = lcl_parser;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_zcl_oapi_json_clas_locals_mjs.bundle.js.map