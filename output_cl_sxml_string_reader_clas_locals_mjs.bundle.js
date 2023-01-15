"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_sxml_string_reader_clas_locals_mjs"],{

/***/ "../output/cl_sxml_string_reader.clas.locals.mjs":
/*!*******************************************************!*\
  !*** ../output/cl_sxml_string_reader.clas.locals.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lcl_attribute": () => (/* binding */ lcl_attribute),
/* harmony export */   "lcl_close_node": () => (/* binding */ lcl_close_node),
/* harmony export */   "lcl_json_parser": () => (/* binding */ lcl_json_parser),
/* harmony export */   "lcl_open_node": () => (/* binding */ lcl_open_node),
/* harmony export */   "lcl_reader": () => (/* binding */ lcl_reader),
/* harmony export */   "lcl_value_node": () => (/* binding */ lcl_value_node)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// cl_sxml_string_reader.clas.locals_imp.abap
class lcl_json_parser {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_nodes = new abap.types.Table(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
    return this;
  }
  async parse(INPUT) {
    let rt_nodes = new abap.types.Table(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    abap.statements.clear(this.mt_nodes);
    await this.traverse({iv_json: iv_json});
    rt_nodes.set(this.mt_nodes);
    return rt_nodes;
  }
  async append(INPUT) {
    let iv_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    if (INPUT && INPUT.iv_type) {iv_type.set(INPUT.iv_type);}
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}
    let ls_node = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node");
    ls_node.get().type.set(iv_type);
    ls_node.get().name.set(iv_name);
    ls_node.get().key.set(iv_key);
    ls_node.get().value.set(iv_value);
    abap.statements.append({source: ls_node, target: this.mt_nodes});
  }
  async traverse(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    let lv_error = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_error_message = new abap.types.String({qualifiedName: "STRING"});
    let lv_xml_offset = new abap.types.Integer({qualifiedName: "I"});
    let parsed;
    try {
        parsed = JSON.parse(iv_json.get());
    } catch(e) {
        lv_error_message.set(e.message);
        lv_error.set("X")
    }
    if (abap.compare.eq(lv_error, abap.builtin.abap_true)) {
      abap.statements.find(lv_error_message, {regex: new abap.types.Character(15).set(' position (\\d+)'), submatches: [lv_xml_offset]});
      throw await (new abap.Classes['CX_SXML_PARSE_ERROR']()).constructor_({xml_offset: lv_xml_offset});
    }
    lv_type.set(Array.isArray(parsed) ? "array" : typeof parsed);
    if (parsed === null) lv_type.set("null");
    let unique145 = lv_type;
    if (abap.compare.eq(unique145, new abap.types.Character(6).set('object'))) {
      await this.traverse_object({iv_json: iv_json, iv_key: iv_key});
    } else if (abap.compare.eq(unique145, new abap.types.Character(5).set('array'))) {
      await this.traverse_array({iv_json: iv_json, iv_key: iv_key});
    } else if (abap.compare.eq(unique145, new abap.types.Character(6).set('string')) || abap.compare.eq(unique145, new abap.types.Character(7).set('boolean')) || abap.compare.eq(unique145, new abap.types.Character(6).set('number')) || abap.compare.eq(unique145, new abap.types.Character(4).set('null'))) {
      await this.traverse_basic({iv_json: iv_json, iv_key: iv_key});
    } else {
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(2), new abap.types.Character(4).set('todo')));
    }
  }
  async traverse_basic(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    let parsed = JSON.parse(iv_json.get());
    lv_type.set(typeof parsed);
    if (parsed === null) lv_type.set("null");
    let unique146 = lv_type;
    if (abap.compare.eq(unique146, new abap.types.Character(6).set('string'))) {
      lv_type.set(new abap.types.Character(3).set('str'));
    } else if (abap.compare.eq(unique146, new abap.types.Character(6).set('number'))) {
      lv_type.set(new abap.types.Character(3).set('num'));
    } else if (abap.compare.eq(unique146, new abap.types.Character(7).set('boolean'))) {
      lv_type.set(new abap.types.Character(4).set('bool'));
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: lv_type, iv_key: iv_key});
    if (abap.compare.ne(lv_type, new abap.types.Character(4).set('null'))) {
      if (abap.compare.eq(lv_type, new abap.types.Character(3).set('str'))) {
        await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: abap.builtin.substring({val: iv_json, off: new abap.types.Integer().set(1), len: abap.operators.minus(abap.builtin.strlen({val: iv_json}),new abap.types.Integer().set(2))})});
      } else {
        await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: iv_json});
      }
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: lv_type});
  }
  async traverse_array(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let parsed = JSON.parse(iv_json.get());
    lv_length.set(parsed.length);
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character(5).set('array'), iv_key: iv_key});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique147 = lv_length.get();
    for (let unique148 = 0; unique148 < unique147; unique148++) {
      abap.builtin.sy.get().index.set(unique148 + 1);
      lv_index.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));
      lv_value.set(JSON.stringify(parsed[lv_index.get()]));
      await this.traverse({iv_json: lv_value});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character(5).set('array')});
  }
  async traverse_object(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lt_keys = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_key = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let parsed = JSON.parse(iv_json.get());
    Object.keys(parsed).forEach(k => lt_keys.append(k));
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character(6).set('object'), iv_key: iv_key});
    for await (const unique149 of abap.statements.loop(lt_keys)) {
      lv_key.set(unique149);
      lv_value.set(JSON.stringify(parsed[lv_key.get()]));
      await this.traverse({iv_json: lv_value, iv_key: lv_key});
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character(6).set('object')});
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER'] = lcl_json_parser;
lcl_json_parser.ty_node = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node");
lcl_json_parser.ty_nodes = new abap.types.Table(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
class lcl_attribute {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_ATTRIBUTE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.if_sxml_attribute$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})});
    this.if_sxml_attribute$value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    this.if_sxml_attribute$qname.get().name.set(name);
    this.if_sxml_attribute$value_type.set(value_type);
    this.mv_value.set(value);
    return this;
  }
  async if_sxml_attribute$get_value() {
    let value = new abap.types.String({qualifiedName: "STRING"});
    value.set(this.mv_value);
    return value;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE'] = lcl_attribute;
class lcl_open_node {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_OPEN_ELEMENT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    this.if_sxml_open_element$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})});
    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    if (INPUT && INPUT.attributes) {attributes.set(INPUT.attributes);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open);
    this.if_sxml_open_element$qname.get().name.set(name);
    this.mt_attributes.set(attributes);
    return this;
  }
  async if_sxml_open_element$get_attributes() {
    let attr = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    attr.set(this.mt_attributes);
    return attr;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE'] = lcl_open_node;
class lcl_close_node {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_CLOSE_ELEMENT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.if_sxml_close_element$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})});
    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);
    this.if_sxml_close_element$qname.get().name.set(name);
    return this;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE'] = lcl_close_node;
class lcl_value_node {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_VALUE_NODE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);
    this.mv_value.set(value);
    return this;
  }
  async if_sxml_value_node$get_value() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.mv_value);
    return val;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE'] = lcl_value_node;
class lcl_reader {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_READER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_json = new abap.types.String({qualifiedName: "STRING"});
    this.mt_nodes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");
    this.mv_pointer = new abap.types.Integer({qualifiedName: "I"});
    this.if_sxml_reader$node_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    this.if_sxml_reader$name = new abap.types.String({qualifiedName: "STRING"});
    this.if_sxml_reader$value = new abap.types.String({qualifiedName: "STRING"});
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    this.mv_json.set(iv_json);
    return this;
  }
  async initialize() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER"});
    let lt_parsed = new abap.types.Table(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
    let ls_parsed = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node");
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    let lt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"});
    if (abap.compare.initial(this.mv_json)) {
      return;
    }
    lo_json.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER']()).constructor_());
    lt_parsed.set((await lo_json.get().parse({iv_json: this.mv_json})));
    for await (const unique150 of abap.statements.loop(lt_parsed)) {
      ls_parsed.set(unique150);
      let unique151 = ls_parsed.get().type;
      if (abap.compare.eq(unique151, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        abap.statements.clear(lt_attributes);
        if (abap.compare.initial(ls_parsed.get().key) === false) {
          li_attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: new abap.types.Character(4).set('name'), value: ls_parsed.get().key, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));
          abap.statements.append({source: li_attribute, target: lt_attributes});
        }
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE']()).constructor_({name: ls_parsed.get().name, attributes: lt_attributes}));
      } else if (abap.compare.eq(unique151, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE']()).constructor_({name: ls_parsed.get().name}));
      } else if (abap.compare.eq(unique151, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE']()).constructor_({value: ls_parsed.get().value}));
      } else {
        abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Integer().set(2)));
      }
      abap.statements.append({source: li_node, target: this.mt_nodes});
    }
    abap.statements.clear(this.mv_json);
    this.mv_pointer.set(new abap.types.Integer().set(1));
  }
  async if_sxml_reader$next_attribute(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_sxml_reader$next_node(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    if (INPUT === undefined || INPUT.value_type === undefined) {value_type = abap.Classes['IF_SXML_VALUE'].co_vt_text;}
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    let open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT"});
    let close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT"});
    let value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE"});
    await this.initialize();
    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,into: node});
    this.mv_pointer.set(abap.operators.add(this.mv_pointer,new abap.types.Integer().set(1)));
    this.if_sxml_reader$node_type.set(node.get().if_sxml_node$type);
    abap.statements.clear(this.if_sxml_reader$name);
    let unique152 = this.if_sxml_reader$node_type;
    if (abap.compare.eq(unique152, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
      await abap.statements.cast(open, node);
      this.if_sxml_reader$name.set(open.get().if_sxml_open_element$qname.get().name);
    } else if (abap.compare.eq(unique152, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
      await abap.statements.cast(close, node);
      this.if_sxml_reader$name.set(close.get().if_sxml_close_element$qname.get().name);
    }
  }
  async if_sxml_reader$skip_node(INPUT) {
    let writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER"});
    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}
  }
  async if_sxml_reader$read_next_node() {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    await this.initialize();
    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,into: node});
    this.mv_pointer.set(abap.operators.add(this.mv_pointer,new abap.types.Integer().set(1)));
    return node;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER'] = lcl_reader;
lcl_reader.ty_nodes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_sxml_string_reader_clas_locals_mjs.bundle.js.map