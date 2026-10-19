"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_sxml_string_reader_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_sxml_string_reader.clas.locals.mjs"
/*!**********************************************************************!*\
  !*** ../output/open-abap-core/cl_sxml_string_reader.clas.locals.mjs ***!
  \**********************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_attribute: () => (/* binding */ lcl_attribute),
/* harmony export */   lcl_close_node: () => (/* binding */ lcl_close_node),
/* harmony export */   lcl_json_parser: () => (/* binding */ lcl_json_parser),
/* harmony export */   lcl_open_node: () => (/* binding */ lcl_open_node),
/* harmony export */   lcl_reader: () => (/* binding */ lcl_reader),
/* harmony export */   lcl_value_node: () => (/* binding */ lcl_value_node),
/* harmony export */   lcl_xml_parser: () => (/* binding */ lcl_xml_parser)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_0() { return new abap.types.Structure({
"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}),
"name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}),
"key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}),
"has_key": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}),
"value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1() { return abap.types.TableFactory.construct($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_0(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes"); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3() { return new abap.types.Structure({
"name": new abap.types.String({qualifiedName: "STRING"}),
"namespace": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_4() { return new abap.types.Structure({
"name": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ELEMENT-NAME"}),
"local_name": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ELEMENT-LOCAL_NAME"}),
"prefix": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ELEMENT-PREFIX"}),
"nsuri": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ELEMENT-NSURI"}),
"has_child": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "lcl_xml_parser=>ty_element", undefined, {}, {}); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_5() { return abap.types.TableFactory.construct($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_4(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, ""); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_6() { return new abap.types.Structure({
"depth": new abap.types.Integer({qualifiedName: "LCL_XML_PARSER=>TY_BINDING-DEPTH"}),
"prefix": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_BINDING-PREFIX"}),
"nsuri": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_BINDING-NSURI"}),
"previous": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_BINDING-PREVIOUS"}),
"had_previous": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "lcl_xml_parser=>ty_binding", undefined, {}, {}); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_7() { return abap.types.TableFactory.construct($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_6(), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, ""); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8() { return new abap.types.Structure({
"prefix": new abap.types.String({qualifiedName: "IF_SXML_NAMED=>NSBINDING-PREFIX"}),
"nsuri": new abap.types.String({qualifiedName: "IF_SXML_NAMED=>NSBINDING-NSURI"})}, "if_sxml_named=>nsbinding", undefined, {}, {}); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_9() { return abap.types.TableFactory.construct($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8(), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["PREFIX"]},"secondary":[]}, ""); }
function $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10() { return new abap.types.Structure({
"kind": new abap.types.Integer({qualifiedName: "LCL_XML_PARSER=>TY_ITEM-KIND"}),
"name": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ITEM-NAME"}),
"prefix": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ITEM-PREFIX"}),
"nsuri": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ITEM-NSURI"}),
"value": new abap.types.String({qualifiedName: "LCL_XML_PARSER=>TY_ITEM-VALUE"}),
"attrs": abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes")}, "lcl_xml_parser=>ty_item", undefined, {}, {}); }
// cl_sxml_string_reader.clas.locals_imp.abap
class lcl_json_parser {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_NODES": {"type": () => {return new abap.types.DataReference($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1());}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"APPEND": {"visibility": "I", "parameters": {"IV_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}, "IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "IV_HAS_KEY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}}},
  "TRAVERSE": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "IV_HAS_KEY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}}},
  "TRAVERSE_OBJECT": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "IV_HAS_KEY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}}},
  "TRAVERSE_ARRAY": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " ", "parm_kind": "I", "type_name": "AnyType"}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "IV_HAS_KEY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}}},
  "PARSE": {"visibility": "U", "parameters": {"IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IT_NODES": {"type": () => {return new abap.types.DataReference($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1());}, "is_optional": " ", "parm_kind": "I", "type_name": "DataReference"}}}};
  #mt_nodes;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "append": this.#append.bind(this),
      "traverse": this.#traverse.bind(this),
      "traverse_object": this.#traverse_object.bind(this),
      "traverse_array": this.#traverse_array.bind(this),
      "parse": this.parse.bind(this),
    };
    this.#mt_nodes = new abap.types.DataReference($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1());
    this.FRIENDS_ACCESS_INSTANCE["mt_nodes"] = this.#mt_nodes;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async parse(INPUT) {
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let it_nodes = INPUT?.it_nodes;
    if (it_nodes === undefined) { it_nodes = new abap.types.DataReference($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1()).set(INPUT.it_nodes); }
    let lv_error = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_error_message = new abap.types.String({qualifiedName: "STRING"});
    let lv_xml_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_json = new abap.types.Integer({qualifiedName: "I"});
    try {
        lv_json = {value: JSON.parse(iv_json.get())};
    } catch(e) {
        lv_error_message.set(e.message);
        lv_error.set("X")
    }
    if (abap.compare.eq(lv_error, abap.builtin.abap_true)) {
      abap.statements.find(lv_error_message, {regex: abap.CharacterFactory.get(15, ' position (\\d+)'), submatches: [lv_xml_offset]});
      const unique1 = await (new abap.Classes['CX_SXML_PARSE_ERROR']()).constructor_({xml_offset: lv_xml_offset});
      unique1.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sxml_string_reader.clas.locals_imp.abap","INTERNAL_LINE": 69};
      throw unique1;
    }
    const text = iv_json.get();
    let pos = 0;
    const skip = () => { while (pos < text.length && " \t\n\r".includes(text[pos])) { pos++; } };
    const strRe = /"(?:[^"\\]|\\.)*"/y;
    const litRe = /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null/y;
    const str = () => { strRe.lastIndex = pos; const m = strRe.exec(text); pos = strRe.lastIndex; return JSON.parse(m[0]); };
    const val = () => {
        skip();
        const c = text[pos];
        if (c === "{") {
            pos++; const pairs = []; skip();
            if (text[pos] === "}") { pos++; return {pairs}; }
            for (;;) { skip(); const k = str(); skip(); pos++; pairs.push([k, val()]); skip(); if (text[pos++] === "}") { return {pairs}; } }
        }
        if (c === "[") {
            pos++; const items = []; skip();
            if (text[pos] === "]") { pos++; return items; }
            for (;;) { items.push(val()); skip(); if (text[pos++] === "]") { return items; } }
        }
        if (c === "\"") { return str(); }
        litRe.lastIndex = pos; const m = litRe.exec(text); pos = litRe.lastIndex;
        return m[0] === "true" ? true : m[0] === "false" ? false : m[0] === "null" ? null : {num: m[0]};
    };
    lv_json = {value: val()};
    this.#mt_nodes.set(it_nodes);
    this.#mt_nodes.dereference().clear();
    await this.#traverse({iv_json: lv_json});
  }
  async #append(INPUT) {
    let iv_type = INPUT?.iv_type;
    if (iv_type?.getQualifiedName === undefined || iv_type.getQualifiedName() !== "IF_SXML_NODE=>NODE_TYPE") { iv_type = undefined; }
    if (iv_type === undefined) { iv_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}).set(INPUT.iv_type); }
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_has_key = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_has_key) {iv_has_key.set(INPUT.iv_has_key);}
    if (INPUT === undefined || INPUT.iv_has_key === undefined) {iv_has_key = abap.builtin.abap_false;}
    let iv_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}
    let ls_node = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_0();
    ls_node.get().type.set(iv_type);
    ls_node.get().name.set(iv_name);
    ls_node.get().key.set(iv_key);
    ls_node.get().has_key.set(iv_has_key);
    ls_node.get().value.set(iv_value);
    abap.statements.append({source: ls_node, target: this.#mt_nodes.dereference()});
  }
  async #traverse(INPUT) {
    let iv_json = INPUT?.iv_json;
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_has_key = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_has_key) {iv_has_key.set(INPUT.iv_has_key);}
    if (INPUT === undefined || INPUT.iv_has_key === undefined) {iv_has_key = abap.builtin.abap_false;}
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    lv_type.set(Array.isArray(iv_json.value) ? "array" : typeof iv_json.value);
    if (iv_json.value === null) lv_type.set("null");
    else if (iv_json.value.num !== undefined) lv_type.set("number");
    let unique2 = lv_type;
    if (abap.compare.eq(unique2, abap.CharacterFactory.get(6, 'object'))) {
      await this.#traverse_object({iv_json: iv_json, iv_key: iv_key, iv_has_key: iv_has_key});
    } else if (abap.compare.eq(unique2, abap.CharacterFactory.get(5, 'array'))) {
      await this.#traverse_array({iv_json: iv_json, iv_key: iv_key, iv_has_key: iv_has_key});
    } else if (abap.compare.eq(unique2, abap.CharacterFactory.get(6, 'string')) || abap.compare.eq(unique2, abap.CharacterFactory.get(7, 'boolean')) || abap.compare.eq(unique2, abap.CharacterFactory.get(6, 'number')) || abap.compare.eq(unique2, abap.CharacterFactory.get(4, 'null'))) {
      iv_json = iv_json.value !== null && iv_json.value.num !== undefined ? iv_json.value.num : iv_json.value + "";
      let unique3 = lv_type;
      if (abap.compare.eq(unique3, abap.CharacterFactory.get(6, 'string'))) {
        lv_type.set(abap.CharacterFactory.get(3, 'str'));
      } else if (abap.compare.eq(unique3, abap.CharacterFactory.get(6, 'number'))) {
        lv_type.set(abap.CharacterFactory.get(3, 'num'));
      } else if (abap.compare.eq(unique3, abap.CharacterFactory.get(7, 'boolean'))) {
        lv_type.set(abap.CharacterFactory.get(4, 'bool'));
      }
      await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: lv_type, iv_key: iv_key, iv_has_key: iv_has_key});
      if (abap.compare.ne(lv_type, abap.CharacterFactory.get(4, 'null'))) {
        await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: iv_json});
      }
      await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: lv_type});
    } else {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(2), abap.CharacterFactory.get(4, 'todo')));
    }
  }
  async #traverse_array(INPUT) {
    let iv_json = INPUT?.iv_json;
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_has_key = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_has_key) {iv_has_key.set(INPUT.iv_has_key);}
    if (INPUT === undefined || INPUT.iv_has_key === undefined) {iv_has_key = abap.builtin.abap_false;}
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let parsed = iv_json.value;
    lv_length.set(parsed.length);
    await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: abap.CharacterFactory.get(5, 'array'), iv_key: iv_key, iv_has_key: iv_has_key});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique4 = new abap.types.Integer().set(lv_length).get();
    for (let unique5 = 0; unique5 < unique4; unique5++) {
      abap.builtin.sy.get().index.set(unique5 + 1);
      lv_index.set(abap.operators.minus(abap.builtin.sy.get().index,abap.IntegerFactory.get(1)));
      lv_value = {value: parsed[lv_index.get()]};
      await this.#traverse({iv_json: lv_value});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: abap.CharacterFactory.get(5, 'array')});
  }
  async #traverse_object(INPUT) {
    let iv_json = INPUT?.iv_json;
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_has_key = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_has_key) {iv_has_key.set(INPUT.iv_has_key);}
    if (INPUT === undefined || INPUT.iv_has_key === undefined) {iv_has_key = abap.builtin.abap_false;}
    let lv_key = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let parsed = iv_json.value;
    await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: abap.CharacterFactory.get(6, 'object'), iv_key: iv_key, iv_has_key: iv_has_key});
    for (const [k, v] of parsed.pairs) {
        lv_key.set(k);
        lv_value = {value: v};
      await this.#traverse({iv_json: lv_value, iv_key: lv_key, iv_has_key: abap.builtin.abap_true});
    };
    await this.#append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: abap.CharacterFactory.get(6, 'object')});
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER'] = lcl_json_parser;
lcl_json_parser.ty_node = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_0();
lcl_json_parser.ty_nodes = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1();
class lcl_attribute {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_ATTRIBUTE"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~QNAME": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}}};
  #mv_value;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_value"] = this.#mv_value;
    if (this.if_sxml_attribute$qname === undefined) this.if_sxml_attribute$qname = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();
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
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    let value_type = INPUT?.value_type;
    if (value_type?.getQualifiedName === undefined || value_type.getQualifiedName() !== "IF_SXML_VALUE=>VALUE_TYPE") { value_type = undefined; }
    if (value_type === undefined) { value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"}).set(INPUT.value_type); }
    this.if_sxml_attribute$qname.get().name.set(name);
    this.if_sxml_attribute$prefix.set(prefix);
    this.if_sxml_attribute$qname.get().namespace.set(nsuri);
    this.if_sxml_attribute$value_type.set(value_type);
    this.#mv_value.set(value);
    return this;
  }
  async if_sxml_attribute$get_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    value.set(this.#mv_value);
    return value;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE'] = lcl_attribute;
class lcl_open_node {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_OPEN_ELEMENT","IF_SXML_NODE"];
  static ATTRIBUTES = {"MT_ATTRIBUTES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_OPEN_ELEMENT~QNAME": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_OPEN_ELEMENT~PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_INITIAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "ATTRIBUTES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");}, "is_optional": "X", "parm_kind": "I", "type_name": "TableType"}}}};
  #mt_attributes;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    this.FRIENDS_ACCESS_INSTANCE["mt_attributes"] = this.#mt_attributes;
    if (this.if_sxml_open_element$qname === undefined) this.if_sxml_open_element$qname = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();
    if (this.if_sxml_open_element$prefix === undefined) this.if_sxml_open_element$prefix = new abap.types.String({qualifiedName: "STRING"});
    this.if_sxml_node$co_nt_initial = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_initial;
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    let attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    if (INPUT && INPUT.attributes) {attributes.set(INPUT.attributes);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open);
    this.if_sxml_open_element$qname.get().name.set(name);
    this.if_sxml_open_element$prefix.set(prefix);
    this.if_sxml_open_element$qname.get().namespace.set(nsuri);
    this.#mt_attributes.set(attributes);
    return this;
  }
  async if_sxml_open_element$get_attribute_value(INPUT) {
    let value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE", RTTIName: "\\INTERFACE=IF_SXML_VALUE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return value;
  }
  async if_sxml_open_element$get_attributes(INPUT) {
    let attr = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    attr.set(this.#mt_attributes);
    return attr;
  }
  async if_sxml_open_element$set_prefix(INPUT) {
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_sxml_open_element$set_attribute(INPUT) {
    let attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return attribute;
  }
  async if_sxml_open_element$set_attributes(INPUT) {
    let attributes = INPUT?.attributes;
    if (attributes?.getQualifiedName === undefined || attributes.getQualifiedName() !== "IF_SXML_ATTRIBUTE=>ATTRIBUTES") { attributes = undefined; }
    if (attributes === undefined) { attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes").set(INPUT.attributes); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE'] = lcl_open_node;
lcl_open_node.if_sxml_node$co_nt_initial = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_initial.set(0);
lcl_open_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_element_open.set(1);
lcl_open_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_element_close.set(2);
lcl_open_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_value.set(4);
lcl_open_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_attribute.set(32);
lcl_open_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_final.set(128);
class lcl_close_node {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_CLOSE_ELEMENT","IF_SXML_NODE"];
  static ATTRIBUTES = {"IF_SXML_CLOSE_ELEMENT~QNAME": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_INITIAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    if (this.if_sxml_close_element$qname === undefined) this.if_sxml_close_element$qname = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_3();
    this.if_sxml_node$co_nt_initial = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_initial;
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);
    this.if_sxml_close_element$qname.get().name.set(name);
    this.if_sxml_close_element$qname.get().namespace.set(nsuri);
    return this;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE'] = lcl_close_node;
lcl_close_node.if_sxml_node$co_nt_initial = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_initial.set(0);
lcl_close_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_element_open.set(1);
lcl_close_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_element_close.set(2);
lcl_close_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_value.set(4);
lcl_close_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_attribute.set(32);
lcl_close_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_final.set(128);
class lcl_value_node {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_VALUE_NODE","IF_SXML_NODE"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_INITIAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}}};
  #mv_value;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_value"] = this.#mv_value;
    this.if_sxml_node$co_nt_initial = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_initial;
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);
    this.#mv_value.set(value);
    return this;
  }
  async if_sxml_value_node$get_value_raw(INPUT) {
    let value = new abap.types.XString({qualifiedName: "XSTRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return value;
  }
  async if_sxml_value_node$set_value(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_sxml_value_node$set_value_raw(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "XSTRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.value); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_sxml_value_node$get_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    value.set(this.#mv_value);
    return value;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE'] = lcl_value_node;
lcl_value_node.if_sxml_node$co_nt_initial = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_initial.set(0);
lcl_value_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_element_open.set(1);
lcl_value_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_element_close.set(2);
lcl_value_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_value.set(4);
lcl_value_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_attribute.set(32);
lcl_value_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_final.set(128);
class lcl_xml_parser {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_XML_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MV_SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_BYTES": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_BINARY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_LENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_POS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_DONE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_PENDING_CLOSE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_ELEMENTS": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_5();}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_BINDINGS": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_7();}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_CURRENT": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_9();}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"FAIL": {"visibility": "I", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"REASON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "STARTS": {"visibility": "I", "parameters": {"YES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "NEEDLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "TAKE_NAME": {"visibility": "I", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}}},
  "WHITESPACE": {"visibility": "I", "parameters": {}},
  "DECODE": {"visibility": "I", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"DECODED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "RAW": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "LOOKUP": {"visibility": "I", "parameters": {"NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "RESTORE": {"visibility": "I", "parameters": {"DEPTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "AT": {"visibility": "I", "parameters": {"C": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lcl_xml_parser=>ty_char"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}, "POS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "PIECE": {"visibility": "I", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "BEGIN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}, "LENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "REPLACED": {"visibility": "I", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "PART": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "XStringType"}, "BEGIN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "SEEK": {"visibility": "I", "parameters": {"FOUND": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "R", "type_name": "IntegerType"}, "SUB": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "OFF": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "StringType"}, "BYTES": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "XStringType"}, "BINARY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}}},
  "NEXT": {"visibility": "U", "exceptions": ["CX_SXML_PARSE_ERROR"], "parameters": {"ITEM": {"type": () => {return $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10();}, "is_optional": " ", "parm_kind": "R", "type_name": "StructureType"}}}};
  #mv_source;
  #mv_bytes;
  #mv_binary;
  #mv_length;
  #mv_pos;
  #mv_done;
  #mv_pending_close;
  #mt_elements;
  #mt_bindings;
  #mt_current;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "fail": this.#fail.bind(this),
      "starts": this.#starts.bind(this),
      "take_name": this.#take_name.bind(this),
      "whitespace": this.#whitespace.bind(this),
      "decode": this.#decode.bind(this),
      "lookup": this.#lookup.bind(this),
      "restore": this.#restore.bind(this),
      "at": this.#at.bind(this),
      "piece": this.#piece.bind(this),
      "replaced": this.#replaced.bind(this),
      "seek": this.#seek.bind(this),
      "next": this.next.bind(this),
    };
    this.#mv_source = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_source"] = this.#mv_source;
    this.#mv_bytes = new abap.types.XString({qualifiedName: "XSTRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_bytes"] = this.#mv_bytes;
    this.#mv_binary = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_binary"] = this.#mv_binary;
    this.#mv_length = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_length"] = this.#mv_length;
    this.#mv_pos = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_pos"] = this.#mv_pos;
    this.#mv_done = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_done"] = this.#mv_done;
    this.#mv_pending_close = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_pending_close"] = this.#mv_pending_close;
    this.#mt_elements = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_5();
    this.FRIENDS_ACCESS_INSTANCE["mt_elements"] = this.#mt_elements;
    this.#mt_bindings = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_7();
    this.FRIENDS_ACCESS_INSTANCE["mt_bindings"] = this.#mt_bindings;
    this.#mt_current = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_9();
    this.FRIENDS_ACCESS_INSTANCE["mt_current"] = this.#mt_current;
  }
  async constructor_(INPUT) {
    let source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let bytes = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.bytes) {bytes.set(INPUT.bytes);}
    let binary = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.binary) {binary.set(INPUT.binary);}
    if (INPUT === undefined || INPUT.binary === undefined) {binary = abap.builtin.abap_false;}
    if (abap.compare.eq(binary, abap.builtin.abap_true)) {
      this.#mv_binary.set(abap.builtin.abap_true);
      this.#mv_bytes.set(bytes);
      this.#mv_length.set(abap.builtin.xstrlen({val: bytes}));
      return this;
    }
    this.#mv_source.set(source);
    this.#mv_length.set(abap.builtin.strlen({val: source}));
    return this;
  }
  async #at(INPUT) {
    let c = new abap.types.Character(1, {"qualifiedName":"lcl_xml_parser=>ty_char"});
    let pos = INPUT?.pos;
    if (pos?.getQualifiedName === undefined || pos.getQualifiedName() !== "I") { pos = undefined; }
    if (pos === undefined) { pos = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.pos); }
    let $byte = new abap.types.Hex();
    let code = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq(this.#mv_binary, abap.builtin.abap_false)) {
      c.set(this.#mv_source.getOffset({offset: pos, length: 1}));
      return c;
    }
    $byte.set(this.#mv_bytes.getOffset({offset: pos, length: 1}));
    code.set($byte);
    if (abap.compare.lt(code, abap.IntegerFactory.get(128))) {
      c.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: code, char: 1})));
    } else {
      c.set(abap.CharacterFactory.get(1, 'x'));
    }
    return c;
  }
  async #piece(INPUT) {
    let text = new abap.types.String({qualifiedName: "STRING"});
    let begin = INPUT?.begin;
    if (begin?.getQualifiedName === undefined || begin.getQualifiedName() !== "I") { begin = undefined; }
    if (begin === undefined) { begin = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.begin); }
    let length = INPUT?.length;
    if (length?.getQualifiedName === undefined || length.getQualifiedName() !== "I") { length = undefined; }
    if (length === undefined) { length = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.length); }
    let part = new abap.types.XString({qualifiedName: "XSTRING"});
    if (abap.compare.eq(this.#mv_binary, abap.builtin.abap_false)) {
      text.set(this.#mv_source.getOffset({offset: begin, length: length}));
      return text;
    }
    if (abap.compare.gt(length, abap.IntegerFactory.get(0))) {
      part.set(this.#mv_bytes.getOffset({offset: begin, length: length}));
      try {
        text.set((await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({source: part, output: 1})));
      } catch (e) {
        if ((abap.Classes['CX_SY_CONVERSION_CODEPAGE'] && e instanceof abap.Classes['CX_SY_CONVERSION_CODEPAGE'])) {
          text.set((await this.#replaced({part: part, begin: begin, text: 1})));
        } else {
          throw e;
        }
      }
    }
    return text;
  }
  async #replaced(INPUT) {
    let text = new abap.types.String({qualifiedName: "STRING"});
    let part = INPUT?.part;
    if (part?.getQualifiedName === undefined || part.getQualifiedName() !== "XSTRING") { part = undefined; }
    if (part === undefined) { part = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.part); }
    let begin = INPUT?.begin;
    if (begin?.getQualifiedName === undefined || begin.getQualifiedName() !== "I") { begin = undefined; }
    if (begin === undefined) { begin = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.begin); }
    let pos = new abap.types.Integer({qualifiedName: "I"});
    let lead = new abap.types.Hex();
    let code = new abap.types.Integer({qualifiedName: "I"});
    let size = new abap.types.Integer({qualifiedName: "I"});
    let good = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let chunk = new abap.types.XString({qualifiedName: "XSTRING"});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique6 = 1;
    while (abap.compare.lt(pos, abap.builtin.xstrlen({val: part}))) {
      abap.builtin.sy.get().index.set(unique6++);
      lead.set(part.getOffset({offset: pos, length: 1}));
      code.set(lead);
      if (abap.compare.lt(code, abap.IntegerFactory.get(128))) {
        size.set(abap.IntegerFactory.get(1));
      } else if (abap.compare.eq(code, abap.IntegerFactory.get(192)) || abap.compare.eq(code, abap.IntegerFactory.get(193))) {
        size.set(abap.IntegerFactory.get(-2));
      } else if (abap.compare.ge(code, abap.IntegerFactory.get(194)) && abap.compare.le(code, new abap.types.Integer().set(223))) {
        size.set(abap.IntegerFactory.get(2));
      } else if (abap.compare.ge(code, new abap.types.Integer().set(224)) && abap.compare.le(code, new abap.types.Integer().set(239))) {
        size.set(abap.IntegerFactory.get(3));
      } else if (abap.compare.ge(code, new abap.types.Integer().set(240)) && abap.compare.le(code, new abap.types.Integer().set(244))) {
        size.set(abap.IntegerFactory.get(4));
      } else {
        size.set(abap.IntegerFactory.get(0));
      }
      if (abap.compare.eq(size, abap.IntegerFactory.get(-2)) && abap.compare.le(abap.operators.add(pos,abap.IntegerFactory.get(2)), abap.builtin.xstrlen({val: part}))) {
        text.set(abap.operators.concat(text,(await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: new abap.types.Integer().set(65533), char: 1}))));
        pos.set(abap.operators.add(pos,abap.IntegerFactory.get(2)));
        continue;
      }
      if (abap.compare.gt(size, abap.IntegerFactory.get(1)) && abap.compare.gt(abap.operators.add(pos,size), abap.builtin.xstrlen({val: part}))) {
        this.#mv_pos.set(abap.operators.add(begin,abap.builtin.xstrlen({val: part})));
        await this.#fail({reason: abap.CharacterFactory.get(22, 'invalid UTF-8 sequence')});
      }
      good.set(abap.builtin.boolc(abap.compare.gt(size, abap.IntegerFactory.get(0)) && abap.compare.le(abap.operators.add(pos,size), abap.builtin.xstrlen({val: part}))));
      if (abap.compare.eq(good, abap.builtin.abap_true) && abap.compare.gt(size, abap.IntegerFactory.get(1))) {
        try {
          chunk.set(part.getOffset({offset: pos, length: size}));
          text.set(abap.operators.concat(text,(await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({source: chunk, output: 1}))));
        } catch (e) {
          if ((abap.Classes['CX_SY_CONVERSION_CODEPAGE'] && e instanceof abap.Classes['CX_SY_CONVERSION_CODEPAGE'])) {
            good.set(abap.builtin.abap_false);
          } else {
            throw e;
          }
        }
      } else if (abap.compare.eq(good, abap.builtin.abap_true)) {
        chunk.set(part.getOffset({offset: pos, length: 1}));
        text.set(abap.operators.concat(text,(await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({source: chunk, output: 1}))));
      }
      if (abap.compare.eq(good, abap.builtin.abap_true)) {
        pos.set(abap.operators.add(pos,size));
      } else {
        text.set(abap.operators.concat(text,(await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: new abap.types.Integer().set(65533), char: 1}))));
        pos.set(abap.operators.add(pos,abap.IntegerFactory.get(1)));
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return text;
  }
  async #seek(INPUT) {
    let found = new abap.types.Integer({qualifiedName: "I"});
    let sub = INPUT?.sub;
    if (sub?.getQualifiedName === undefined || sub.getQualifiedName() !== "STRING") { sub = undefined; }
    if (sub === undefined) { sub = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.sub); }
    let off = INPUT?.off;
    if (off?.getQualifiedName === undefined || off.getQualifiedName() !== "I") { off = undefined; }
    if (off === undefined) { off = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.off); }
    let needle = new abap.types.XString({qualifiedName: "XSTRING"});
    if (abap.compare.eq(this.#mv_binary, abap.builtin.abap_false)) {
      found.set(abap.builtin.find({val: this.#mv_source, sub: sub, off: off}));
      return found;
    }
    needle.set((await abap.Classes['CL_ABAP_CODEPAGE'].convert_to({source: sub, output: 1})));
    abap.statements.find(this.#mv_bytes, {find: needle, byteMode: true, sectionOffset: off, offset: found});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      found.set(abap.IntegerFactory.get(-1));
    }
    return found;
  }
  async #fail(INPUT) {
    let reason = INPUT?.reason;
    if (reason?.getQualifiedName === undefined || reason.getQualifiedName() !== "STRING") { reason = undefined; }
    if (reason === undefined) { reason = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.reason); }
    let error = new abap.types.ABAPObject({qualifiedName: "CX_SXML_PARSE_ERROR", RTTIName: "\\CLASS=CX_SXML_PARSE_ERROR"});
    error.set(await (new abap.Classes['CX_SXML_PARSE_ERROR']()).constructor_({xml_offset: this.#mv_pos}));
    error.get().error_text.set(reason);
    error.get().rawstring.set(abap.operators.concat([abap.CharacterFactory.get(34, 'Error while parsing an XML stream:'),new abap.types.String().set(` `),reason,abap.CharacterFactory.get(1, '.')]));
    throw error.get();
  }
  async #starts(INPUT) {
    let yes = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let needle = INPUT?.needle;
    if (needle?.getQualifiedName === undefined || needle.getQualifiedName() !== "STRING") { needle = undefined; }
    if (needle === undefined) { needle = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.needle); }
    let n = new abap.types.Integer({qualifiedName: "I"});
    let k = new abap.types.Integer({qualifiedName: "I"});
    n.set(abap.builtin.strlen({val: needle}));
    if (abap.compare.gt(abap.operators.add(this.#mv_pos,n), this.#mv_length)) {
      return yes;
    }
    if (abap.compare.eq(this.#mv_binary, abap.builtin.abap_false)) {
      if (abap.compare.eq(this.#mv_source.getOffset({offset: this.#mv_pos, length: n}), needle)) {
        yes.set(abap.builtin.abap_true);
      }
      return yes;
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique7 = 1;
    while (abap.compare.lt(k, n)) {
      abap.builtin.sy.get().index.set(unique7++);
      if (abap.compare.ne((await this.#at({pos: abap.operators.add(this.#mv_pos,k), c: 1})), needle.getOffset({offset: k, length: 1}))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return yes;
      }
      k.set(abap.operators.add(k,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    yes.set(abap.builtin.abap_true);
    return yes;
  }
  async #whitespace() {
    let c = new abap.types.Character(1, {});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique8 = 1;
    while (abap.compare.lt(this.#mv_pos, this.#mv_length)) {
      abap.builtin.sy.get().index.set(unique8++);
      c.set((await this.#at({pos: this.#mv_pos, c: 1})));
      let unique9 = c;
      if (abap.compare.eq(unique9, abap.builtin.space) || abap.compare.eq(unique9, abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab) || abap.compare.eq(unique9, abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline) || abap.compare.eq(unique9, abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf.getOffset({length: 1}))) {
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
      } else {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async #take_name(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    let begin = new abap.types.Integer({qualifiedName: "I"});
    let c = new abap.types.Character(1, {});
    let length = new abap.types.Integer({qualifiedName: "I"});
    begin.set(this.#mv_pos);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique10 = 1;
    while (abap.compare.lt(this.#mv_pos, this.#mv_length)) {
      abap.builtin.sy.get().index.set(unique10++);
      c.set((await this.#at({pos: this.#mv_pos, c: 1})));
      if (abap.compare.eq(c, abap.builtin.space) || abap.compare.eq(c, abap.CharacterFactory.get(1, '/')) || abap.compare.eq(c, abap.CharacterFactory.get(1, '>')) || abap.compare.eq(c, abap.CharacterFactory.get(1, '=')) || abap.compare.eq(c, abap.CharacterFactory.get(1, '?')) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf.getOffset({length: 1}))) {
        break;
      }
      this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.eq(begin, this.#mv_pos)) {
      await this.#fail({reason: abap.CharacterFactory.get(23, 'document not wellformed')});
    }
    length.set(abap.operators.minus(this.#mv_pos,begin));
    name.set((await this.#piece({begin: begin, length: length, text: 1})));
    c.set(name.getOffset({length: 1}));
    if ((abap.compare.ge(c, abap.CharacterFactory.get(1, '0')) && abap.compare.le(c, abap.CharacterFactory.get(1, '9'))) || abap.compare.eq(c, abap.CharacterFactory.get(1, '.')) || abap.compare.eq(c, abap.CharacterFactory.get(1, '-'))) {
      await this.#fail({reason: abap.CharacterFactory.get(27, 'invalid character after \'<\'')});
    }
    return name;
  }
  async #lookup(INPUT) {
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    let prefix = INPUT?.prefix;
    if (prefix?.getQualifiedName === undefined || prefix.getQualifiedName() !== "STRING") { prefix = undefined; }
    if (prefix === undefined) { prefix = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.prefix); }
    let current = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8();
    if (abap.compare.eq(prefix, abap.CharacterFactory.get(3, 'xml'))) {
      nsuri.set(abap.CharacterFactory.get(36, 'http://www.w3.org/XML/1998/namespace'));
      return nsuri;
    }
    abap.statements.readTable(this.#mt_current,{withTableKey: true,
      into: current,
      withKey: (i) => {return abap.compare.eq(i.prefix, prefix);},
      withKeyValue: [{key: (i) => {return i.prefix}, value: prefix}],
      usesTableLine: false,
      withKeySimple: {"prefix": prefix}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      nsuri.set(current.get().nsuri);
    }
    return nsuri;
  }
  async #restore(INPUT) {
    let depth = INPUT?.depth;
    if (depth?.getQualifiedName === undefined || depth.getQualifiedName() !== "I") { depth = undefined; }
    if (depth === undefined) { depth = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.depth); }
    let binding = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_6();
    let current = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8();
    let last = new abap.types.Integer({qualifiedName: "I"});
    last.set(abap.builtin.lines({val: this.#mt_bindings}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique11 = 1;
    while (abap.compare.gt(last, abap.IntegerFactory.get(0))) {
      abap.builtin.sy.get().index.set(unique11++);
      abap.statements.readTable(this.#mt_bindings,{index: last,
        into: binding});
      if (abap.compare.ne(binding.get().depth, depth)) {
        break;
      }
      await abap.statements.deleteInternal(this.#mt_bindings,{index: last});
      await abap.statements.deleteInternal(this.#mt_current,{where: async (I) => {return abap.compare.eq(I.prefix, binding.get().prefix);}});
      if (abap.compare.eq(binding.get().had_previous, abap.builtin.abap_true)) {
        current.get().prefix.set(binding.get().prefix);
        current.get().nsuri.set(binding.get().previous);
        abap.statements.insertInternal({data: current, table: this.#mt_current});
      }
      last.set(abap.operators.minus(last,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async #decode(INPUT) {
    let decoded = new abap.types.String({qualifiedName: "STRING"});
    let raw = INPUT?.raw;
    if (raw?.getQualifiedName === undefined || raw.getQualifiedName() !== "STRING") { raw = undefined; }
    if (raw === undefined) { raw = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.raw); }
    let pos = new abap.types.Integer({qualifiedName: "I"});
    let begin = new abap.types.Integer({qualifiedName: "I"});
    let n = new abap.types.Integer({qualifiedName: "I"});
    let code = new abap.types.Integer({qualifiedName: "I"});
    let digit = new abap.types.Integer({qualifiedName: "I"});
    let base = new abap.types.Integer({qualifiedName: "I"});
    let entity = new abap.types.String({qualifiedName: "STRING"});
    let part = new abap.types.String({qualifiedName: "STRING"});
    let parts = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let c = new abap.types.Character(1, {});
    let length = new abap.types.Integer({qualifiedName: "I"});
    let chars = new abap.types.String({qualifiedName: "STRING"});
    chars.set('0123456789ABCDEF');
    n.set(abap.builtin.strlen({val: raw}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique12 = 1;
    while (abap.compare.lt(pos, n)) {
      abap.builtin.sy.get().index.set(unique12++);
      if (abap.compare.ne(raw.getOffset({offset: pos, length: 1}), abap.CharacterFactory.get(1, '&'))) {
        begin.set(pos);
        const indexBackup2 = abap.builtin.sy.get().index.get();
        let unique13 = 1;
        while (abap.compare.lt(pos, n) && abap.compare.ne(raw.getOffset({offset: pos, length: 1}), abap.CharacterFactory.get(1, '&'))) {
          abap.builtin.sy.get().index.set(unique13++);
          pos.set(abap.operators.add(pos,abap.IntegerFactory.get(1)));
        }
        abap.builtin.sy.get().index.set(indexBackup2);
        length.set(abap.operators.minus(pos,begin));
        part.set(raw.getOffset({offset: begin, length: length}));
        abap.statements.append({source: part, target: parts});
        continue;
      }
      pos.set(abap.operators.add(pos,abap.IntegerFactory.get(1)));
      begin.set(pos);
      const indexBackup3 = abap.builtin.sy.get().index.get();
      let unique14 = 1;
      while (abap.compare.lt(pos, n) && abap.compare.ne(raw.getOffset({offset: pos, length: 1}), abap.CharacterFactory.get(1, ';'))) {
        abap.builtin.sy.get().index.set(unique14++);
        pos.set(abap.operators.add(pos,abap.IntegerFactory.get(1)));
      }
      abap.builtin.sy.get().index.set(indexBackup3);
      if (abap.compare.eq(pos, n)) {
        await this.#fail({reason: abap.CharacterFactory.get(41, 'unresolveable entity reference in content')});
      }
      length.set(abap.operators.minus(pos,begin));
      entity.set(raw.getOffset({offset: begin, length: length}));
      pos.set(abap.operators.add(pos,abap.IntegerFactory.get(1)));
      let unique15 = entity;
      if (abap.compare.eq(unique15, abap.CharacterFactory.get(3, 'amp'))) {
        part.set(abap.CharacterFactory.get(1, '&'));
      } else if (abap.compare.eq(unique15, abap.CharacterFactory.get(2, 'lt'))) {
        part.set(abap.CharacterFactory.get(1, '<'));
      } else if (abap.compare.eq(unique15, abap.CharacterFactory.get(2, 'gt'))) {
        part.set(abap.CharacterFactory.get(1, '>'));
      } else if (abap.compare.eq(unique15, abap.CharacterFactory.get(4, 'quot'))) {
        part.set(abap.CharacterFactory.get(1, '"'));
      } else if (abap.compare.eq(unique15, abap.CharacterFactory.get(4, 'apos'))) {
        part.set(abap.CharacterFactory.get(1, '\''));
      } else {
        if (abap.compare.ne(entity.getOffset({length: 1}), abap.CharacterFactory.get(1, '#')) || abap.compare.lt(abap.builtin.strlen({val: entity}), abap.IntegerFactory.get(2))) {
          await this.#fail({reason: abap.CharacterFactory.get(41, 'unresolveable entity reference in content')});
        }
        base.set(abap.IntegerFactory.get(10));
        begin.set(abap.IntegerFactory.get(1));
        if (abap.compare.eq(entity.getOffset({offset: 1, length: 1}), abap.CharacterFactory.get(1, 'x')) || abap.compare.eq(entity.getOffset({offset: 1, length: 1}), abap.CharacterFactory.get(1, 'X'))) {
          base.set(abap.IntegerFactory.get(16));
          begin.set(abap.IntegerFactory.get(2));
        }
        code.set(abap.IntegerFactory.get(0));
        const indexBackup4 = abap.builtin.sy.get().index.get();
        let unique16 = 1;
        while (abap.compare.lt(begin, abap.builtin.strlen({val: entity}))) {
          abap.builtin.sy.get().index.set(unique16++);
          c.set(entity.getOffset({offset: begin, length: 1}));
          abap.statements.translate(c, "UPPER");
          abap.statements.find(chars, {find: c, offset: digit});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) || abap.compare.ge(digit, base)) {
            await this.#fail({reason: abap.CharacterFactory.get(41, 'unresolveable entity reference in content')});
          }
          if (abap.compare.gt(code, abap.operators.div(abap.operators.minus(new abap.types.Integer().set(1114111),digit),base))) {
            await this.#fail({reason: abap.CharacterFactory.get(21, 'illegal charref value')});
          }
          code.set(abap.operators.add(abap.operators.multiply(code,base),digit));
          begin.set(abap.operators.add(begin,abap.IntegerFactory.get(1)));
        }
        abap.builtin.sy.get().index.set(indexBackup4);
        if (abap.compare.gt(code, new abap.types.Integer().set(1114111)) || (abap.compare.ge(code, new abap.types.Integer().set(55296)) && abap.compare.le(code, new abap.types.Integer().set(57343)))) {
          await this.#fail({reason: abap.CharacterFactory.get(21, 'illegal charref value')});
        }
        part.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: code, char: 1})));
      }
      abap.statements.append({source: part, target: parts});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    abap.statements.concatenate({source: [parts], target: decoded, lines: true, respectingBlanks: true});
    return decoded;
  }
  async next(INPUT) {
    let item = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10();
    let begin = new abap.types.Integer({qualifiedName: "I"});
    let i = new abap.types.Integer({qualifiedName: "I"});
    let j = new abap.types.Integer({qualifiedName: "I"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    let attr_name = new abap.types.String({qualifiedName: "STRING"});
    let attr_value = new abap.types.String({qualifiedName: "STRING"});
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    let attr_nsuri = new abap.types.String({qualifiedName: "STRING"});
    let local_name = new abap.types.String({qualifiedName: "STRING"});
    let quote = new abap.types.Character(1, {});
    let quote_text = new abap.types.String({qualifiedName: "STRING"});
    let element = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_4();
    let binding = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_6();
    let current = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8();
    let attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let attrs = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let names = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let values = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_depth = new abap.types.Integer({qualifiedName: "I"});
    let close_at = new abap.types.Integer({qualifiedName: "I"});
    let length = new abap.types.Integer({qualifiedName: "I"});
    let only_space = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let has_entity = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let c = new abap.types.Character(1, {});
    let c2 = new abap.types.Character(1, {});
    let found = new abap.types.Integer({qualifiedName: "I"});
    let spaces = new abap.types.String({qualifiedName: "STRING"});
    let fs_parent_ = new abap.types.FieldSymbol($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_4());
    if (abap.compare.eq(this.#mv_done, abap.builtin.abap_true)) {
      item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final);
      return item;
    }
    if (abap.compare.eq(this.#mv_pending_close, abap.builtin.abap_true)) {
      this.#mv_pending_close.set(abap.builtin.abap_false);
      abap.statements.readTable(this.#mt_elements,{index: abap.builtin.lines({val: this.#mt_elements}),
        into: element});
      item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);
      item.get().name.set(element.get().local_name);
      item.get().prefix.set(element.get().prefix);
      item.get().nsuri.set(element.get().nsuri);
      lv_depth.set(abap.builtin.lines({val: this.#mt_elements}));
      await abap.statements.deleteInternal(this.#mt_elements,{index: lv_depth});
      await this.#restore({depth: lv_depth});
      if (abap.compare.initial(this.#mt_elements)) {
        this.#mv_done.set(abap.builtin.abap_true);
      }
      return item;
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique17 = 1;
    while (abap.compare.lt(this.#mv_pos, this.#mv_length)) {
      abap.builtin.sy.get().index.set(unique17++);
      c.clear();
      c2.clear();
      c.set((await this.#at({pos: this.#mv_pos, c: 1})));
      if (abap.compare.eq(c, abap.CharacterFactory.get(1, '<')) && abap.compare.lt(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)), this.#mv_length)) {
        i.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
        c2.set((await this.#at({pos: i, c: 1})));
      }
      if (abap.compare.eq(c, abap.CharacterFactory.get(1, '<')) && abap.compare.eq(c2, abap.CharacterFactory.get(1, '?'))) {
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(2)));
        found.set((await this.#seek({sub: abap.CharacterFactory.get(2, '?>'), off: this.#mv_pos, found: 1})));
        if (abap.compare.lt(found, abap.IntegerFactory.get(0))) {
          this.#mv_pos.set(this.#mv_length);
          await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
        }
        this.#mv_pos.set(abap.operators.add(found,abap.IntegerFactory.get(2)));
        continue;
      }
      if (abap.compare.eq(c2, abap.CharacterFactory.get(1, '!')) && abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(4, '<!--'), yes: 1})), abap.builtin.abap_true)) {
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(4)));
        found.set((await this.#seek({sub: abap.CharacterFactory.get(2, '--'), off: this.#mv_pos, found: 1})));
        if (abap.compare.lt(found, abap.IntegerFactory.get(0))) {
          this.#mv_pos.set(this.#mv_length);
          await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
        }
        this.#mv_pos.set(found);
        if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(3, '-->'), yes: 1})), abap.builtin.abap_false)) {
          await this.#fail({reason: abap.CharacterFactory.get(13, '-- in comment')});
        }
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(3)));
        continue;
      }
      if (abap.compare.eq(c2, abap.CharacterFactory.get(1, '!')) && abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(9, '<![CDATA['), yes: 1})), abap.builtin.abap_true)) {
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(9)));
        begin.set(this.#mv_pos);
        found.set((await this.#seek({sub: abap.CharacterFactory.get(3, ']]>'), off: this.#mv_pos, found: 1})));
        if (abap.compare.lt(found, abap.IntegerFactory.get(0))) {
          this.#mv_pos.set(this.#mv_length);
          await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
        }
        this.#mv_pos.set(found);
        item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);
        length.set(abap.operators.minus(this.#mv_pos,begin));
        item.get().value.set((await this.#piece({begin: begin, length: length, text: 1})));
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(3)));
        abap.builtin.sy.get().index.set(indexBackup1);
        return item;
      }
      if (abap.compare.eq(c2, abap.CharacterFactory.get(1, '!'))) {
        await this.#fail({reason: abap.CharacterFactory.get(30, '\'<!--\' or \'<![CDATA[\' expected')});
      }
      if (abap.compare.eq(c, abap.CharacterFactory.get(1, '<')) && abap.compare.eq(c2, abap.CharacterFactory.get(1, '/'))) {
        close_at.set(this.#mv_pos);
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(2)));
        name.set((await this.#take_name({name: 1})));
        await this.#whitespace();
        if (abap.compare.eq(this.#mv_pos, this.#mv_length)) {
          await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
        }
        if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(1, '>'), yes: 1})), abap.builtin.abap_false)) {
          await this.#fail({reason: abap.CharacterFactory.get(23, 'document not wellformed')});
        }
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
        lv_depth.set(abap.builtin.lines({val: this.#mt_elements}));
        if (abap.compare.eq(lv_depth, abap.IntegerFactory.get(0))) {
          await this.#fail({reason: abap.CharacterFactory.get(23, 'document not wellformed')});
        }
        abap.statements.readTable(this.#mt_elements,{index: lv_depth,
          into: element});
        if (abap.compare.ne(element.get().name, name)) {
          this.#mv_pos.set(close_at);
          await this.#fail({reason: abap.CharacterFactory.get(23, 'document not wellformed')});
        }
        item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);
        item.get().name.set(element.get().local_name);
        item.get().prefix.set(element.get().prefix);
        item.get().nsuri.set(element.get().nsuri);
        await abap.statements.deleteInternal(this.#mt_elements,{index: lv_depth});
        await this.#restore({depth: lv_depth});
        if (abap.compare.initial(this.#mt_elements)) {
          this.#mv_done.set(abap.builtin.abap_true);
        }
        abap.builtin.sy.get().index.set(indexBackup1);
        return item;
      }
      if (abap.compare.eq(c, abap.CharacterFactory.get(1, '<'))) {
        this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
        name.set((await this.#take_name({name: 1})));
        attrs.clear();
        names.clear();
        values.clear();
        lv_depth.set(abap.operators.add(abap.builtin.lines({val: this.#mt_elements}),abap.IntegerFactory.get(1)));
        const indexBackup2 = abap.builtin.sy.get().index.get();
        let unique18 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique18++);
          await this.#whitespace();
          if (abap.compare.eq(this.#mv_pos, this.#mv_length)) {
            await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
          }
          if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(2, '/>'), yes: 1})), abap.builtin.abap_true)) {
            this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(2)));
            this.#mv_pending_close.set(abap.builtin.abap_true);
            break;
          }
          if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(1, '>'), yes: 1})), abap.builtin.abap_true)) {
            this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
            break;
          }
          attr_name.set((await this.#take_name({name: 1})));
          await this.#whitespace();
          if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(1, '='), yes: 1})), abap.builtin.abap_false)) {
            await this.#fail({reason: abap.CharacterFactory.get(23, 'document not wellformed')});
          }
          this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
          await this.#whitespace();
          if (abap.compare.eq(this.#mv_pos, this.#mv_length)) {
            await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
          }
          quote.set((await this.#at({pos: this.#mv_pos, c: 1})));
          if (abap.compare.ne(quote, abap.CharacterFactory.get(1, '"')) && abap.compare.ne(quote, abap.CharacterFactory.get(1, '\''))) {
            await this.#fail({reason: abap.CharacterFactory.get(27, 'opening \'"\' or \'\'\' expected')});
          }
          this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
          begin.set(this.#mv_pos);
          quote_text.set(quote);
          found.set((await this.#seek({sub: quote_text, off: this.#mv_pos, found: 1})));
          if (abap.compare.lt(found, abap.IntegerFactory.get(0))) {
            found.set((await this.#seek({sub: abap.CharacterFactory.get(1, '<'), off: this.#mv_pos, found: 1})));
            if (abap.compare.ge(found, abap.IntegerFactory.get(0))) {
              this.#mv_pos.set(found);
              await this.#fail({reason: abap.CharacterFactory.get(20, 'closing \'"\' expected')});
            }
            this.#mv_pos.set(this.#mv_length);
            await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
          }
          length.set(abap.operators.minus(found,begin));
          attr_value.set((await this.#piece({begin: begin, length: length, text: 1})));
          if (abap.compare.ge(abap.builtin.find({val: attr_value, sub: abap.CharacterFactory.get(1, '<')}), abap.IntegerFactory.get(0))) {
            this.#mv_pos.set(begin);
            await this.#fail({reason: abap.CharacterFactory.get(20, 'closing \'"\' expected')});
          }
          this.#mv_pos.set(found);
          has_entity.set(abap.builtin.abap_false);
          if (abap.compare.ge(abap.builtin.find({val: attr_value, sub: abap.CharacterFactory.get(1, '&')}), abap.IntegerFactory.get(0))) {
            has_entity.set(abap.builtin.abap_true);
          }
          if (abap.compare.eq(has_entity, abap.builtin.abap_true)) {
            attr_value.set((await this.#decode({raw: attr_value, decoded: 1})));
          }
          this.#mv_pos.set(abap.operators.add(this.#mv_pos,abap.IntegerFactory.get(1)));
          if (abap.compare.eq(attr_name, abap.CharacterFactory.get(5, 'xmlns')) || (abap.compare.ge(abap.builtin.strlen({val: attr_name}), abap.IntegerFactory.get(6)) && abap.compare.eq(attr_name.getOffset({length: 6}), abap.CharacterFactory.get(6, 'xmlns:')))) {
            binding.clear();
            binding.get().depth.set(lv_depth);
            if (abap.compare.ne(attr_name, abap.CharacterFactory.get(5, 'xmlns'))) {
              binding.get().prefix.set(attr_name.getOffset({offset: 6}));
            }
            binding.get().nsuri.set(attr_value);
            abap.statements.readTable(this.#mt_current,{withTableKey: true,
              into: current,
              withKey: (i) => {return abap.compare.eq(i.prefix, binding.get().prefix);},
              withKeyValue: [{key: (i) => {return i.prefix}, value: binding.get().prefix}],
              usesTableLine: false,
              withKeySimple: {"prefix": binding.get().prefix}});
            if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              binding.get().had_previous.set(abap.builtin.abap_true);
              binding.get().previous.set(current.get().nsuri);
              await abap.statements.deleteInternal(this.#mt_current,{where: async (I) => {return abap.compare.eq(I.prefix, binding.get().prefix);}});
            }
            abap.statements.append({source: binding, target: this.#mt_bindings});
            current.get().prefix.set(binding.get().prefix);
            current.get().nsuri.set(binding.get().nsuri);
            abap.statements.insertInternal({data: current, table: this.#mt_current});
          } else {
            abap.statements.append({source: attr_name, target: names});
            abap.statements.append({source: attr_value, target: values});
          }
        }
        abap.builtin.sy.get().index.set(indexBackup2);
        element.clear();
        element.get().name.set(name);
        abap.statements.split({source: name, at: abap.CharacterFactory.get(1, ':'), targets: [prefix,local_name]});
        if (abap.compare.initial(local_name)) {
          local_name.set(name);
          prefix.clear();
        }
        element.get().local_name.set(local_name);
        element.get().prefix.set(prefix);
        element.get().nsuri.set((await this.#lookup({prefix: prefix, nsuri: 1})));
        if (abap.compare.initial(prefix) === false && abap.compare.initial(element.get().nsuri)) {
          await this.#fail({reason: abap.CharacterFactory.get(27, 'undeclared namespace prefix')});
        }
        if (abap.compare.gt(lv_depth, abap.IntegerFactory.get(1))) {
          i.set(abap.operators.minus(lv_depth,abap.IntegerFactory.get(1)));
          abap.statements.readTable(this.#mt_elements,{index: i,
            assigning: fs_parent_});
          fs_parent_.get().has_child.set(abap.builtin.abap_true);
        }
        abap.statements.append({source: element, target: this.#mt_elements});
        for await (const unique19 of abap.statements.loop(names)) {
          attr_name.set(unique19);
          i.set(abap.builtin.sy.get().tabix);
          abap.statements.readTable(values,{index: i,
            into: attr_value});
          abap.statements.split({source: attr_name, at: abap.CharacterFactory.get(1, ':'), targets: [prefix,local_name]});
          if (abap.compare.initial(local_name)) {
            local_name.set(attr_name);
            prefix.clear();
          }
          attr_nsuri.clear();
          if (abap.compare.initial(prefix) === false) {
            attr_nsuri.set((await this.#lookup({prefix: prefix, nsuri: 1})));
            if (abap.compare.initial(attr_nsuri)) {
              await this.#fail({reason: abap.CharacterFactory.get(27, 'undeclared namespace prefix')});
            }
          }
          attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: local_name, prefix: prefix, nsuri: attr_nsuri, value: attr_value, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));
          abap.statements.append({source: attribute, target: attrs});
        }
        item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open);
        item.get().name.set(element.get().local_name);
        item.get().prefix.set(element.get().prefix);
        item.get().nsuri.set(element.get().nsuri);
        item.get().attrs.set(attrs);
        abap.builtin.sy.get().index.set(indexBackup1);
        return item;
      }
      begin.set(this.#mv_pos);
      found.set((await this.#seek({sub: abap.CharacterFactory.get(1, '<'), off: this.#mv_pos, found: 1})));
      if (abap.compare.lt(found, abap.IntegerFactory.get(0))) {
        this.#mv_pos.set(this.#mv_length);
      } else {
        this.#mv_pos.set(found);
      }
      length.set(abap.operators.minus(this.#mv_pos,begin));
      name.set((await this.#piece({begin: begin, length: length, text: 1})));
      spaces.set(abap.operators.concat([new abap.types.String().set(` `),abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab,abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline,abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf.getOffset({length: 1})]));
      only_space.set(abap.builtin.abap_false);
      if (abap.compare.co(name, spaces)) {
        only_space.set(abap.builtin.abap_true);
      }
      has_entity.set(abap.builtin.abap_false);
      if (abap.compare.ge(abap.builtin.find({val: name, sub: abap.CharacterFactory.get(1, '&')}), abap.IntegerFactory.get(0))) {
        has_entity.set(abap.builtin.abap_true);
      }
      if (abap.compare.initial(this.#mt_elements)) {
        continue;
      }
      length.set(abap.operators.minus(this.#mv_pos,begin));
      if (abap.compare.eq(length, abap.IntegerFactory.get(0))) {
        continue;
      }
      if (abap.compare.eq(this.#mv_pos, this.#mv_length)) {
        await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
      }
      if (abap.compare.eq(only_space, abap.builtin.abap_true)) {
        if (abap.compare.eq((await this.#starts({needle: abap.CharacterFactory.get(2, '</'), yes: 1})), abap.builtin.abap_false)) {
          continue;
        }
        abap.statements.readTable(this.#mt_elements,{index: abap.builtin.lines({val: this.#mt_elements}),
          into: element});
        if (abap.compare.eq(element.get().has_child, abap.builtin.abap_true)) {
          continue;
        }
      }
      item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);
      if (abap.compare.eq(has_entity, abap.builtin.abap_true)) {
        item.get().value.set((await this.#decode({raw: name, decoded: 1})));
      } else {
        item.get().value.set(name);
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      return item;
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.initial(this.#mt_elements) === false) {
      await this.#fail({reason: abap.CharacterFactory.get(13, '<EOF> reached')});
    }
    if (abap.compare.eq(this.#mv_length, abap.IntegerFactory.get(0))) {
      await this.#fail({reason: abap.CharacterFactory.get(30, 'BOM / charset detection failed')});
    }
    this.#mv_done.set(abap.builtin.abap_true);
    item.get().kind.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final);
    return item;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_XML_PARSER'] = lcl_xml_parser;
lcl_xml_parser.ty_item = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10();
lcl_xml_parser.ty_element = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_4();
lcl_xml_parser.ty_binding = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_6();
lcl_xml_parser.ty_char = new abap.types.Character(1, {"qualifiedName":"lcl_xml_parser=>ty_char"});
class lcl_reader {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_READER';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_READER"];
  static ATTRIBUTES = {"MV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_XML": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_XML_PARSER", RTTIName: "\\CLASS-POOL=CL_SXML_STRING_READER\\CLASS=LCL_XML_PARSER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_XML_ATTRS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_XML_ATTR": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_POINTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~NODE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~NSURI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~VALUE_RAW": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~CO_OPT_NORMALIZING": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_READER~CO_OPT_KEEP_WHITESPACE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_READER~CO_OPT_ASXML": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_READER~CO_OPT_SEP_MEMBER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"INITIALIZE": {"visibility": "I", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IV_BYTES": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": "X", "parm_kind": "I", "type_name": "XStringType"}, "IV_UTF8": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": "X", "parm_kind": "I", "type_name": "CharacterType"}}}};
  #mv_json;
  #mo_xml;
  #mt_xml_attrs;
  #mv_xml_attr;
  #mt_nodes;
  #mv_pointer;
  #mv_initialized;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "initialize": this.#initialize.bind(this),
    };
    this.#mv_json = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_json"] = this.#mv_json;
    this.#mo_xml = new abap.types.ABAPObject({qualifiedName: "LCL_XML_PARSER", RTTIName: "\\CLASS-POOL=CL_SXML_STRING_READER\\CLASS=LCL_XML_PARSER"});
    this.FRIENDS_ACCESS_INSTANCE["mo_xml"] = this.#mo_xml;
    this.#mt_xml_attrs = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    this.FRIENDS_ACCESS_INSTANCE["mt_xml_attrs"] = this.#mt_xml_attrs;
    this.#mv_xml_attr = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_xml_attr"] = this.#mv_xml_attr;
    this.#mt_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");
    this.FRIENDS_ACCESS_INSTANCE["mt_nodes"] = this.#mt_nodes;
    this.#mv_pointer = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_pointer"] = this.#mv_pointer;
    this.#mv_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_initialized"] = this.#mv_initialized;
    this.if_sxml_reader$co_opt_normalizing = abap.Classes['IF_SXML_READER'].if_sxml_reader$co_opt_normalizing;
    this.if_sxml_reader$co_opt_keep_whitespace = abap.Classes['IF_SXML_READER'].if_sxml_reader$co_opt_keep_whitespace;
    this.if_sxml_reader$co_opt_asxml = abap.Classes['IF_SXML_READER'].if_sxml_reader$co_opt_asxml;
    this.if_sxml_reader$co_opt_sep_member = abap.Classes['IF_SXML_READER'].if_sxml_reader$co_opt_sep_member;
    if (this.if_sxml_reader$node_type === undefined) this.if_sxml_reader$node_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    if (this.if_sxml_reader$name === undefined) this.if_sxml_reader$name = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_reader$prefix === undefined) this.if_sxml_reader$prefix = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_reader$nsuri === undefined) this.if_sxml_reader$nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_reader$value_type === undefined) this.if_sxml_reader$value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (this.if_sxml_reader$value === undefined) this.if_sxml_reader$value = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_reader$value_raw === undefined) this.if_sxml_reader$value_raw = new abap.types.XString({qualifiedName: "XSTRING"});
  }
  async if_sxml_reader$current_node() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_sxml_reader$read_current_node(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return node;
  }
  async if_sxml_reader$get_nsuri_by_prefix(INPUT) {
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    let prefix = INPUT?.prefix;
    if (prefix?.getQualifiedName === undefined || prefix.getQualifiedName() !== "STRING") { prefix = undefined; }
    if (prefix === undefined) { prefix = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.prefix); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return nsuri;
  }
  async if_sxml_reader$get_prefix_by_nsuri(INPUT) {
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    let nsuri = INPUT?.nsuri;
    if (nsuri?.getQualifiedName === undefined || nsuri.getQualifiedName() !== "STRING") { nsuri = undefined; }
    if (nsuri === undefined) { nsuri = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.nsuri); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return prefix;
  }
  async if_sxml_reader$get_nsbindings(INPUT) {
    let nsbindings = abap.types.TableFactory.construct($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_8(), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["PREFIX"]},"secondary":[]}, "if_sxml_named=>nsbindings");
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return nsbindings;
  }
  async if_sxml_reader$get_path(INPUT) {
    let path = abap.types.TableFactory.construct(new abap.types.Structure({
    "qname": new abap.types.Structure({
    "name": new abap.types.String({qualifiedName: "IF_SXML_NAMED=>PATHNODE-QNAME-NAME"}),
    "namespace": new abap.types.String({qualifiedName: "IF_SXML_NAMED=>PATHNODE-QNAME-NAMESPACE"})}, "if_sxml_named=>pathnode-qname", undefined, {}, {}),
    "prefix": new abap.types.String({qualifiedName: "IF_SXML_NAMED=>PATHNODE-PREFIX"}),
    "child_position": new abap.types.Integer({qualifiedName: "IF_SXML_NAMED=>PATHNODE-CHILD_POSITION"})}, "if_sxml_named=>pathnode", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_named=>path");
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return path;
  }
  async constructor_(INPUT) {
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let iv_bytes = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.iv_bytes) {iv_bytes.set(INPUT.iv_bytes);}
    let iv_utf8 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_utf8) {iv_utf8.set(INPUT.iv_utf8);}
    if (INPUT === undefined || INPUT.iv_utf8 === undefined) {iv_utf8 = abap.builtin.abap_false;}
    let first = new abap.types.Integer({qualifiedName: "I"});
    let size = new abap.types.Integer({qualifiedName: "I"});
    let c = new abap.types.Character(1, {});
    if (abap.compare.eq(iv_utf8, abap.builtin.abap_true)) {
      this.#mo_xml.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_XML_PARSER']()).constructor_({bytes: iv_bytes, binary: abap.builtin.abap_true}));
      this.#mv_initialized.set(abap.builtin.abap_false);
      return this;
    }
    this.#mv_json.set(iv_json);
    size.set(abap.builtin.strlen({val: iv_json}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique20 = 1;
    while (abap.compare.lt(first, size)) {
      abap.builtin.sy.get().index.set(unique20++);
      c.set(iv_json.getOffset({offset: first, length: 1}));
      if (abap.compare.eq(c, abap.builtin.space) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab) || abap.compare.eq(c, abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf.getOffset({length: 1}))) {
        first.set(abap.operators.add(first,abap.IntegerFactory.get(1)));
      } else {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.initial(iv_json) || (abap.compare.lt(first, size) && abap.compare.eq(iv_json.getOffset({offset: first, length: 1}), abap.CharacterFactory.get(1, '<')))) {
      this.#mo_xml.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_XML_PARSER']()).constructor_({source: iv_json}));
      this.#mv_json.clear();
    }
    this.#mv_initialized.set(abap.builtin.abap_false);
    return this;
  }
  async if_sxml_reader$set_option(INPUT) {
    let option = INPUT?.option;
    if (option?.getQualifiedName === undefined || option.getQualifiedName() !== "I") { option = undefined; }
    if (option === undefined) { option = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.option); }
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async #initialize() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=CL_SXML_STRING_READER\\CLASS=LCL_JSON_PARSER"});
    let lt_parsed = new abap.types.DataReference($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_1());
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let lt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let fs_ls_parsed_ = new abap.types.FieldSymbol($t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_0());
    abap.statements.assert(abap.compare.eq(this.#mv_initialized, abap.builtin.abap_false));
    this.#mv_initialized.set(abap.builtin.abap_true);
    lo_json.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER']()).constructor_());
    abap.statements.createData(lt_parsed);
    await lo_json.get().parse({iv_json: this.#mv_json, it_nodes: lt_parsed});
    lo_json.clear();
    for await (const unique21 of abap.statements.loop(lt_parsed.dereference())) {
      fs_ls_parsed_.assign(unique21);
      let unique22 = fs_ls_parsed_.get().type;
      if (abap.compare.eq(unique22, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        lt_attributes.clear();
        if (abap.compare.eq(fs_ls_parsed_.get().has_key, abap.builtin.abap_true)) {
          li_attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: abap.CharacterFactory.get(4, 'name'), value: fs_ls_parsed_.get().key, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));
          abap.statements.append({source: li_attribute, target: lt_attributes});
        }
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE']()).constructor_({name: fs_ls_parsed_.get().name, attributes: lt_attributes}));
      } else if (abap.compare.eq(unique22, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE']()).constructor_({name: fs_ls_parsed_.get().name}));
      } else if (abap.compare.eq(unique22, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE']()).constructor_({value: fs_ls_parsed_.get().value}));
      } else {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(2)));
      }
      abap.statements.append({source: li_node, target: this.#mt_nodes});
    }
    this.#mv_json.clear();
    this.#mv_pointer.set(abap.IntegerFactory.get(1));
  }
  async if_sxml_reader$next_attribute(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    let attr = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    this.#mv_xml_attr.set(abap.operators.add(this.#mv_xml_attr,abap.IntegerFactory.get(1)));
    abap.statements.readTable(this.#mt_xml_attrs,{index: this.#mv_xml_attr,
      into: attr});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      this.if_sxml_reader$node_type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute);
      this.if_sxml_reader$name.set(attr.get().if_sxml_attribute$qname.get().name);
      this.if_sxml_reader$prefix.set(attr.get().if_sxml_attribute$prefix);
      this.if_sxml_reader$nsuri.set(attr.get().if_sxml_attribute$qname.get().namespace);
      this.if_sxml_reader$value.set((await attr.get().if_sxml_attribute$get_value({value: 1})));
      this.if_sxml_reader$value_type.set(abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text);
    } else {
      this.if_sxml_reader$node_type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final);
    }
  }
  async if_sxml_reader$next_node(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    if (INPUT === undefined || INPUT.value_type === undefined) {value_type = abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text;}
    let xml = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10();
    if (abap.compare.initial(this.#mo_xml) === false) {
      xml.set((await this.#mo_xml.get().next({item: 1})));
      this.if_sxml_reader$node_type.set(xml.get().kind);
      if (abap.compare.eq(xml.get().kind, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final)) {
        return;
      }
      this.if_sxml_reader$name.set(xml.get().name);
      this.if_sxml_reader$prefix.set(xml.get().prefix);
      this.if_sxml_reader$nsuri.set(xml.get().nsuri);
      this.#mt_xml_attrs.clear();
      this.#mv_xml_attr.set(abap.IntegerFactory.get(0));
      if (abap.compare.eq(xml.get().kind, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        this.#mt_xml_attrs.set(xml.get().attrs);
      } else if (abap.compare.eq(xml.get().kind, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        this.if_sxml_reader$value.set(xml.get().value);
        this.if_sxml_reader$value_type.set(abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text);
      }
      return;
    }
    await this.if_sxml_reader$read_next_node();
  }
  async if_sxml_reader$skip_node(INPUT) {
    let writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"});
    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.initial(this.#mo_xml) || abap.compare.ne(this.if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
      return;
    }
    level.set(abap.IntegerFactory.get(1));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique23 = 1;
    while (abap.compare.gt(level, abap.IntegerFactory.get(0))) {
      abap.builtin.sy.get().index.set(unique23++);
      await this.if_sxml_reader$next_node();
      if (abap.compare.eq(this.if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        level.set(abap.operators.add(level,abap.IntegerFactory.get(1)));
      } else if (abap.compare.eq(this.if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        level.set(abap.operators.minus(level,abap.IntegerFactory.get(1)));
      } else if (abap.compare.eq(this.if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final)) {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_sxml_reader$read_next_node(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let xml = $t_Y2xfc3htbF9zdHJpbmdfcmVhZGVyLmNsYXMubG9jYWxzLm1qcw_10();
    let open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_OPEN_ELEMENT"});
    let close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_CLOSE_ELEMENT"});
    let value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE", RTTIName: "\\INTERFACE=IF_SXML_VALUE_NODE"});
    let attr = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let attrs = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    if (abap.compare.initial(this.#mo_xml) === false) {
      xml.set((await this.#mo_xml.get().next({item: 1})));
      this.if_sxml_reader$node_type.set(xml.get().kind);
      if (abap.compare.eq(xml.get().kind, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final)) {
        return node;
      }
      this.if_sxml_reader$name.set(xml.get().name);
      this.if_sxml_reader$prefix.set(xml.get().prefix);
      this.if_sxml_reader$nsuri.set(xml.get().nsuri);
      this.#mt_xml_attrs.clear();
      this.#mv_xml_attr.set(abap.IntegerFactory.get(0));
      let unique24 = xml.get().kind;
      if (abap.compare.eq(unique24, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        this.#mt_xml_attrs.set(xml.get().attrs);
        node.set(await (new abap.Classes['CL_SXML_OPEN_ELEMENT']()).constructor_({name: xml.get().name, prefix: xml.get().prefix, nsuri: xml.get().nsuri, attributes: xml.get().attrs}));
      } else if (abap.compare.eq(unique24, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        node.set(await (new abap.Classes['CL_SXML_CLOSE_ELEMENT']()).constructor_({name: xml.get().name, nsuri: xml.get().nsuri}));
      } else if (abap.compare.eq(unique24, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        this.if_sxml_reader$value.set(xml.get().value);
        this.if_sxml_reader$value_type.set(abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text);
        node.set(await (new abap.Classes['CL_SXML_VALUE']()).constructor_({value: xml.get().value}));
      }
      return node;
    }
    if (abap.compare.eq(this.#mv_initialized, abap.builtin.abap_false)) {
      await this.#initialize();
    }
    abap.statements.readTable(this.#mt_nodes,{index: this.#mv_pointer,
      into: node});
    this.#mv_pointer.set(abap.operators.add(this.#mv_pointer,abap.IntegerFactory.get(1)));
    if (abap.compare.initial(node) === false) {
      this.if_sxml_reader$node_type.set(node.get().if_sxml_node$type);
      let unique25 = this.if_sxml_reader$node_type;
      if (abap.compare.eq(unique25, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        await abap.statements.cast(open, node, {"INTERNAL_FILENAME": "cl_sxml_string_reader.clas.locals_imp.abap","INTERNAL_LINE": 1306});
        this.if_sxml_reader$name.set(open.get().if_sxml_open_element$qname.get().name);
        attrs.set((await open.get().if_sxml_open_element$get_attributes({attr: 1})));
        abap.statements.readTable(attrs,{index: abap.IntegerFactory.get(1),
          into: attr});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          this.if_sxml_reader$value.set((await attr.get().if_sxml_attribute$get_value({value: 1})));
        }
      } else if (abap.compare.eq(unique25, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        await abap.statements.cast(close, node, {"INTERNAL_FILENAME": "cl_sxml_string_reader.clas.locals_imp.abap","INTERNAL_LINE": 1315});
        this.if_sxml_reader$name.set(close.get().if_sxml_close_element$qname.get().name);
        this.if_sxml_reader$value.clear();
      } else if (abap.compare.eq(unique25, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        await abap.statements.cast(value, node, {"INTERNAL_FILENAME": "cl_sxml_string_reader.clas.locals_imp.abap","INTERNAL_LINE": 1319});
        this.if_sxml_reader$value.set((await value.get().if_sxml_value_node$get_value({value: 1})));
      } else {
        this.if_sxml_reader$name.clear();
      }
    }
    return node;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER'] = lcl_reader;
lcl_reader.if_sxml_reader$co_opt_normalizing = new abap.types.Integer({qualifiedName: "I"});
lcl_reader.if_sxml_reader$co_opt_normalizing.set(1);
lcl_reader.if_sxml_reader$co_opt_keep_whitespace = new abap.types.Integer({qualifiedName: "I"});
lcl_reader.if_sxml_reader$co_opt_keep_whitespace.set(2);
lcl_reader.if_sxml_reader$co_opt_asxml = new abap.types.Integer({qualifiedName: "I"});
lcl_reader.if_sxml_reader$co_opt_asxml.set(3);
lcl_reader.if_sxml_reader$co_opt_sep_member = new abap.types.Integer({qualifiedName: "I"});
lcl_reader.if_sxml_reader$co_opt_sep_member.set(4);
lcl_reader.ty_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_sxml_string_reader_clas_locals_mjs.bundle.js.map