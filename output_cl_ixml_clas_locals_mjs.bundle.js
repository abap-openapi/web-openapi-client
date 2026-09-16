"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_ixml_clas_locals_mjs"],{

/***/ "../output/cl_ixml.clas.locals.mjs"
/*!*****************************************!*\
  !*** ../output/cl_ixml.clas.locals.mjs ***!
  \*****************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_document: () => (/* binding */ lcl_document),
/* harmony export */   lcl_encoding: () => (/* binding */ lcl_encoding),
/* harmony export */   lcl_escape: () => (/* binding */ lcl_escape),
/* harmony export */   lcl_istream: () => (/* binding */ lcl_istream),
/* harmony export */   lcl_named_node_map: () => (/* binding */ lcl_named_node_map),
/* harmony export */   lcl_node: () => (/* binding */ lcl_node),
/* harmony export */   lcl_node_iterator: () => (/* binding */ lcl_node_iterator),
/* harmony export */   lcl_node_list: () => (/* binding */ lcl_node_list),
/* harmony export */   lcl_ostream: () => (/* binding */ lcl_ostream),
/* harmony export */   lcl_parser: () => (/* binding */ lcl_parser),
/* harmony export */   lcl_renderer: () => (/* binding */ lcl_renderer),
/* harmony export */   lcl_stream_factory: () => (/* binding */ lcl_stream_factory)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// cl_ixml.clas.locals_imp.abap
class lcl_escape {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_ESCAPE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"UNESCAPE_REFERENCES": {"visibility": "I", "parameters": {"RV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "REFERENCE_TO_CHAR": {"visibility": "I", "parameters": {"RV_CHAR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "IV_NUMBER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "UNESCAPE_VALUE": {"visibility": "U", "parameters": {"RV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "ESCAPE_VALUE": {"visibility": "U", "parameters": {"RV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}}};
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
  async unescape_value(INPUT) {
    return lcl_escape.unescape_value(INPUT);
  }
  static async unescape_value(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_value = INPUT?.iv_value;
    if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "STRING") { iv_value = undefined; }
    if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_value); }
    rv_value.set(iv_value);
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(1, '<'), of: abap.CharacterFactory.get(4, '&lt;')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(1, '>'), of: abap.CharacterFactory.get(4, '&gt;')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(1, '"'), of: abap.CharacterFactory.get(6, '&quot;')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.String().set(`'`), of: abap.CharacterFactory.get(6, '&apos;')});
    rv_value.set((await this.unescape_references({iv_value: rv_value, rv_value: 1})));
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(1, '&'), of: abap.CharacterFactory.get(5, '&amp;')});
    return rv_value;
  }
  async unescape_references(INPUT) {
    return lcl_escape.unescape_references(INPUT);
  }
  static async unescape_references(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_value = INPUT?.iv_value;
    if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "STRING") { iv_value = undefined; }
    if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_value); }
    let lt_parts = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_part = new abap.types.String({qualifiedName: "STRING"});
    let lv_char = new abap.types.String({qualifiedName: "STRING"});
    let lv_tail = new abap.types.String({qualifiedName: "STRING"});
    let lv_number = new abap.types.String({qualifiedName: "STRING"});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    rv_value.set(iv_value);
    if (abap.compare.ns(rv_value, abap.CharacterFactory.get(2, '&#'))) {
      return rv_value;
    }
    abap.statements.split({source: rv_value, at: abap.CharacterFactory.get(2, '&#'), table: lt_parts});
    rv_value.clear();
    for await (const unique293 of abap.statements.loop(lt_parts)) {
      lv_part.set(unique293);
      if (abap.compare.eq(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
        rv_value.set(lv_part);
        continue;
      }
      lv_char.clear();
      abap.statements.find(lv_part, {find: abap.CharacterFactory.get(1, ';'), first: true, offset: lv_offset});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) && abap.compare.gt(lv_offset, abap.IntegerFactory.get(0))) {
        lv_number.set(lv_part.getOffset({length: lv_offset}));
        lv_char.set((await this.reference_to_char({iv_number: lv_number, rv_char: 1})));
      }
      if (abap.compare.initial(lv_char)) {
        abap.statements.concatenate({source: [rv_value, abap.CharacterFactory.get(2, '&#'), lv_part], target: rv_value, respectingBlanks: true});
      } else {
        lv_tail.set(lv_part.getOffset({offset: lv_offset}));
        abap.statements.shift(lv_tail, {direction: 'LEFT',places: abap.IntegerFactory.get(1)});
        abap.statements.concatenate({source: [rv_value, lv_char, lv_tail], target: rv_value, respectingBlanks: true});
      }
    }
    return rv_value;
  }
  async reference_to_char(INPUT) {
    return lcl_escape.reference_to_char(INPUT);
  }
  static async reference_to_char(INPUT) {
    let rv_char = new abap.types.String({qualifiedName: "STRING"});
    let iv_number = INPUT?.iv_number;
    if (iv_number?.getQualifiedName === undefined || iv_number.getQualifiedName() !== "STRING") { iv_number = undefined; }
    if (iv_number === undefined) { iv_number = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_number); }
    let lv_text = new abap.types.String({qualifiedName: "STRING"});
    let lv_digit = new abap.types.String({qualifiedName: "STRING"});
    let lv_hex = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_value = new abap.types.Integer({qualifiedName: "I"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let lv_pos = new abap.types.Integer({qualifiedName: "I"});
    lv_text.set(iv_number);
    abap.statements.translate(lv_text, "UPPER");
    if (abap.compare.eq(lv_text.getOffset({length: 1}), abap.CharacterFactory.get(1, 'X'))) {
      lv_hex.set(abap.builtin.abap_true);
      abap.statements.shift(lv_text, {direction: 'LEFT',places: abap.IntegerFactory.get(1)});
      if (abap.compare.initial(lv_text)) {
        return rv_char;
      }
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique294 = 1;
    while (abap.compare.lt(lv_pos, abap.builtin.strlen({val: lv_text}))) {
      abap.builtin.sy.get().index.set(unique294++);
      lv_digit.set(lv_text.getOffset({offset: lv_pos, length: 1}));
      if (abap.compare.eq(lv_hex, abap.builtin.abap_true)) {
        abap.statements.find(abap.CharacterFactory.get(16, '0123456789ABCDEF'), {find: lv_digit, first: true, offset: lv_index});
      } else {
        abap.statements.find(abap.CharacterFactory.get(10, '0123456789'), {find: lv_digit, first: true, offset: lv_index});
      }
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return rv_char;
      }
      if (abap.compare.eq(lv_hex, abap.builtin.abap_true)) {
        lv_value.set(abap.operators.add(abap.operators.multiply(lv_value,abap.IntegerFactory.get(16)),lv_index));
      } else {
        lv_value.set(abap.operators.add(abap.operators.multiply(lv_value,abap.IntegerFactory.get(10)),lv_index));
      }
      if (abap.compare.gt(lv_value, new abap.types.Integer().set(65535))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return rv_char;
      }
      lv_pos.set(abap.operators.add(lv_pos,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.eq(lv_value, abap.IntegerFactory.get(0))) {
      return rv_char;
    }
    if (abap.compare.eq(lv_value, abap.IntegerFactory.get(32))) {
      rv_char.set(new abap.types.String().set(` `));
    } else {
      rv_char.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: lv_value, char: 1})));
    }
    return rv_char;
  }
  async escape_value(INPUT) {
    return lcl_escape.escape_value(INPUT);
  }
  static async escape_value(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_value = INPUT?.iv_value;
    if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "STRING") { iv_value = undefined; }
    if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_value); }
    rv_value.set(iv_value);
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(5, '&amp;'), of: abap.CharacterFactory.get(1, '&')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(4, '&lt;'), of: abap.CharacterFactory.get(1, '<')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(4, '&gt;'), of: abap.CharacterFactory.get(1, '>')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(6, '&quot;'), of: abap.CharacterFactory.get(1, '"')});
    abap.statements.replace({target: rv_value, all: true, with: abap.CharacterFactory.get(6, '&apos;'), of: new abap.types.String().set(`'`)});
    return rv_value;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'] = lcl_escape;
class lcl_node_iterator {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_NODE_ITERATOR';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NODE_ITERATOR"];
  static ATTRIBUTES = {"MV_POINTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_LIST": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_LIST": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");}, "is_optional": " ", "parm_kind": "I", "type_name": "TableType"}}}};
  #mv_pointer;
  #mt_list;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mv_pointer = new abap.types.Integer({qualifiedName: "I"});
    this.FRIENDS_ACCESS_INSTANCE["mv_pointer"] = this.#mv_pointer;
    this.#mt_list = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
    this.FRIENDS_ACCESS_INSTANCE["mt_list"] = this.#mt_list;
  }
  async constructor_(INPUT) {
    let it_list = INPUT?.it_list;
    if (it_list?.getQualifiedName === undefined || it_list.getQualifiedName() !== "LCL_NODE_ITERATOR=>TY_LIST") { it_list = undefined; }
    if (it_list === undefined) { it_list = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list").set(INPUT.it_list); }
    this.#mt_list.set(it_list);
    this.#mv_pointer.set(abap.IntegerFactory.get(1));
    return this;
  }
  async if_ixml_node_iterator$reset() {
    this.#mv_pointer.set(abap.IntegerFactory.get(1));
  }
  async if_ixml_node_iterator$get_next(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    abap.statements.readTable(this.#mt_list,{index: this.#mv_pointer,
      into: rval});
    this.#mv_pointer.set(abap.operators.add(this.#mv_pointer,abap.IntegerFactory.get(1)));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR'] = lcl_node_iterator;
lcl_node_iterator.ty_list = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
class lcl_encoding {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_ENCODING';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ENCODING"];
  static ATTRIBUTES = {"IF_IXML_ENCODING~CO_NONE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_ENCODING~CO_BIG_ENDIAN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_ENCODING~CO_PLATFORM_ENDIAN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.if_ixml_encoding$co_none = abap.Classes['IF_IXML_ENCODING'].if_ixml_encoding$co_none;
    this.if_ixml_encoding$co_big_endian = abap.Classes['IF_IXML_ENCODING'].if_ixml_encoding$co_big_endian;
    this.if_ixml_encoding$co_platform_endian = abap.Classes['IF_IXML_ENCODING'].if_ixml_encoding$co_platform_endian;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_ixml_encoding$set_character_set(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let charset = INPUT?.charset;
    if (charset?.getQualifiedName === undefined || charset.getQualifiedName() !== "STRING") { charset = undefined; }
    if (charset === undefined) { charset = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.charset); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_encoding$get_byte_order(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_encoding$get_character_set(INPUT) {
    let rval = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ENCODING'] = lcl_encoding;
lcl_encoding.if_ixml_encoding$co_none = new abap.types.Integer({qualifiedName: "I"});
lcl_encoding.if_ixml_encoding$co_none.set(0);
lcl_encoding.if_ixml_encoding$co_big_endian = new abap.types.Integer({qualifiedName: "I"});
lcl_encoding.if_ixml_encoding$co_big_endian.set(1);
lcl_encoding.if_ixml_encoding$co_platform_endian = new abap.types.Integer({qualifiedName: "I"});
lcl_encoding.if_ixml_encoding$co_platform_endian.set(4);
class lcl_named_node_map {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_NAMED_NODE_MAP';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NAMED_NODE_MAP"];
  static ATTRIBUTES = {"MT_LIST": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
  #mt_list;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mt_list = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_list"] = this.#mt_list;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_ixml_named_node_map$get_item(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let index = INPUT?.index;
    if (index?.getQualifiedName === undefined || index.getQualifiedName() !== "I") { index = undefined; }
    if (index === undefined) { index = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.index); }
    abap.statements.readTable(this.#mt_list,{index: index,
      into: rval});
    return rval;
  }
  async if_ixml_named_node_map$create_iterator(INPUT) {
    let iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    iterator.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: this.#mt_list}));
    return iterator;
  }
  async if_ixml_named_node_map$get_length(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    val.set(abap.builtin.lines({val: this.#mt_list}));
    return val;
  }
  async if_ixml_named_node_map$get_named_item_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    for await (const unique295 of abap.statements.loop(this.#mt_list)) {
      li_node.set(unique295);
      if (abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), name)) {
        val.set(li_node);
        return val;
      }
    }
    return val;
  }
  async if_ixml_named_node_map$get_named_item(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    val.set((await this.if_ixml_named_node_map$get_named_item_ns({name: name, val: 1})));
    return val;
  }
  async if_ixml_named_node_map$remove_named_item(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    for await (const unique296 of abap.statements.loop(this.#mt_list)) {
      li_node.set(unique296);
      if (abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), name)) {
        lv_index.set(abap.builtin.sy.get().tabix);
        break;
      }
    }
    if (abap.compare.gt(lv_index, abap.IntegerFactory.get(0))) {
      await abap.statements.deleteInternal(this.#mt_list,{index: lv_index});
    }
  }
  async if_ixml_named_node_map$set_named_item_ns(INPUT) {
    let node = INPUT?.node;
    if (node?.getQualifiedName === undefined || node.getQualifiedName() !== "IF_IXML_NODE") { node = undefined; }
    if (node === undefined) { node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.node); }
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    for await (const unique297 of abap.statements.loop(this.#mt_list)) {
      li_node.set(unique297);
      lv_index.set(abap.builtin.sy.get().tabix);
      if (abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), (await node.get().if_ixml_node$get_name({val: 1})))) {
        abap.statements.modifyInternal(this.#mt_list,{index: lv_index,from: node});
        return;
      }
    }
    abap.statements.append({source: node, target: this.#mt_list});
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NAMED_NODE_MAP'] = lcl_named_node_map;
class lcl_node_list {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_NODE_LIST';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NODE_LIST","IF_IXML_NODE_COLLECTION"];
  static ATTRIBUTES = {"MT_LIST": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"APPEND": {"visibility": "U", "parameters": {"II_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "REMOVE": {"visibility": "U", "parameters": {"II_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "INSERT": {"visibility": "U", "parameters": {"II_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "II_REF": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mt_list;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "append": this.append.bind(this),
      "remove": this.remove.bind(this),
      "insert": this.insert.bind(this),
    };
    this.#mt_list = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.FRIENDS_ACCESS_INSTANCE["mt_list"] = this.#mt_list;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async append(INPUT) {
    let ii_node = INPUT?.ii_node;
    if (ii_node?.getQualifiedName === undefined || ii_node.getQualifiedName() !== "IF_IXML_NODE") { ii_node = undefined; }
    if (ii_node === undefined) { ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ii_node); }
    abap.statements.assert(abap.compare.initial(ii_node) === false);
    abap.statements.append({source: ii_node, target: this.#mt_list});
  }
  async remove(INPUT) {
    let ii_node = INPUT?.ii_node;
    if (ii_node?.getQualifiedName === undefined || ii_node.getQualifiedName() !== "IF_IXML_NODE") { ii_node = undefined; }
    if (ii_node === undefined) { ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ii_node); }
    abap.statements.readTable(this.#mt_list,{withKey: (i) => {return abap.compare.eq(i.table_line, ii_node);},
      withKeyValue: [{key: (i) => {return i.table_line}, value: ii_node}],
      usesTableLine: true,
      withKeySimple: {"table_line": ii_node}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.statements.deleteInternal(this.#mt_list,{index: abap.builtin.sy.get().tabix});
    }
  }
  async insert(INPUT) {
    let ii_node = INPUT?.ii_node;
    if (ii_node?.getQualifiedName === undefined || ii_node.getQualifiedName() !== "IF_IXML_NODE") { ii_node = undefined; }
    if (ii_node === undefined) { ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ii_node); }
    let ii_ref = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    if (INPUT && INPUT.ii_ref) {ii_ref.set(INPUT.ii_ref);}
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.initial(ii_node) === false);
    if (abap.compare.initial(ii_ref) === false) {
      abap.statements.readTable(this.#mt_list,{withKey: (i) => {return abap.compare.eq(i.table_line, ii_ref);},
        withKeyValue: [{key: (i) => {return i.table_line}, value: ii_ref}],
        usesTableLine: true,
        withKeySimple: {"table_line": ii_ref}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        lv_index.set(abap.builtin.sy.get().tabix);
      }
    }
    if (abap.compare.gt(lv_index, abap.IntegerFactory.get(0))) {
      abap.statements.insertInternal({data: ii_node, index: lv_index, table: this.#mt_list});
    } else {
      abap.statements.append({source: ii_node, target: this.#mt_list});
    }
  }
  async if_ixml_node_list$get_length(INPUT) {
    let length = new abap.types.Integer({qualifiedName: "I"});
    length.set(abap.builtin.lines({val: this.#mt_list}));
    return length;
  }
  async if_ixml_node_list$create_iterator(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: this.#mt_list}));
    return rval;
  }
  async if_ixml_node_list$get_item(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let index = INPUT?.index;
    if (index?.getQualifiedName === undefined || index.getQualifiedName() !== "I") { index = undefined; }
    if (index === undefined) { index = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.index); }
    abap.statements.readTable(this.#mt_list,{index: index,
      into: val});
    return val;
  }
  async if_ixml_node_list$create_rev_iterator_filtered(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let filter = INPUT?.filter;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_node_collection$get_length(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    rval.set(abap.builtin.lines({val: this.#mt_list}));
    return rval;
  }
  async if_ixml_node_collection$create_iterator(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: this.#mt_list}));
    return rval;
  }
  async if_ixml_node_collection$get_item(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let index = INPUT?.index;
    if (index?.getQualifiedName === undefined || index.getQualifiedName() !== "I") { index = undefined; }
    if (index === undefined) { index = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.index); }
    abap.statements.readTable(this.#mt_list,{index: index,
      into: rval});
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST'] = lcl_node_list;
class lcl_node {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ELEMENT","IF_IXML_TEXT","IF_IXML_ATTRIBUTE","IF_IXML_NODE","IF_IXML_NODE","IF_IXML_NODE"];
  static ATTRIBUTES = {"MV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_NAMESPACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_CHILDREN": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_ATTRIBUTES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_IXML_NODE~CO_NODE_DOCUMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_ELEMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_TEXT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_CDATA_SECTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"HAS_DIRECT_TEXT": {"visibility": "I", "parameters": {"RV_HAS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "R", "type_name": "CharacterType"}}},
  "COLLECT_SUBTREE": {"visibility": "I", "parameters": {"CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");}, "is_optional": " ", "parm_kind": "C", "type_name": "TableType"}}},
  "COLLECT_ELEMENTS_BY_TAG_NAME": {"visibility": "I", "parameters": {"IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IV_NAMESPACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IV_URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IO_LIST": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "URI_OF_PREFIX": {"visibility": "I", "parameters": {"RV_URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "StringType"}, "IV_PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "ATTRIBUTE_NODE": {"visibility": "I", "parameters": {"RI_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}, "IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IV_URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"II_PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "SET_PARENT": {"visibility": "U", "parameters": {"II_PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}},
  "GET_PARENT": {"visibility": "U", "parameters": {"RI_PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "R", "type_name": "ObjectReferenceType"}}}};
  #mv_name;
  #mv_namespace;
  #mv_value;
  #mo_children;
  #mi_parent;
  #mi_attributes;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "has_direct_text": this.#has_direct_text.bind(this),
      "collect_subtree": this.#collect_subtree.bind(this),
      "collect_elements_by_tag_name": this.#collect_elements_by_tag_name.bind(this),
      "uri_of_prefix": this.#uri_of_prefix.bind(this),
      "attribute_node": this.#attribute_node.bind(this),
      "set_parent": this.set_parent.bind(this),
      "get_parent": this.get_parent.bind(this),
    };
    this.#mv_name = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_name"] = this.#mv_name;
    this.#mv_namespace = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_namespace"] = this.#mv_namespace;
    this.#mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_value"] = this.#mv_value;
    this.#mo_children = new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"});
    this.FRIENDS_ACCESS_INSTANCE["mo_children"] = this.#mo_children;
    this.#mi_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    this.FRIENDS_ACCESS_INSTANCE["mi_parent"] = this.#mi_parent;
    this.#mi_attributes = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    this.FRIENDS_ACCESS_INSTANCE["mi_attributes"] = this.#mi_attributes;
    this.if_ixml_node$co_node_document = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_document;
    this.if_ixml_node$co_node_element = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_element;
    this.if_ixml_node$co_node_text = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_text;
    this.if_ixml_node$co_node_cdata_section = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_cdata_section;
    this.if_ixml_element$remove_child = this.if_ixml_node$remove_child;
    this.if_ixml_element$create_iterator_filtered = this.if_ixml_node$create_iterator_filtered;
    this.if_ixml_element$create_filter_name = this.if_ixml_node$create_filter_name;
    this.if_ixml_element$create_filter_parent = this.if_ixml_node$create_filter_parent;
    this.if_ixml_element$get_namespace_uri = this.if_ixml_node$get_namespace_uri;
    this.if_ixml_element$query_interface = this.if_ixml_node$query_interface;
    this.if_ixml_node$co_node_document = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_document;
    this.if_ixml_node$co_node_element = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_element;
    this.if_ixml_node$co_node_text = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_text;
    this.if_ixml_node$co_node_cdata_section = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_cdata_section;
    this.if_ixml_text$get_value = this.if_ixml_node$get_value;
    this.if_ixml_text$set_value = this.if_ixml_node$set_value;
    this.if_ixml_node$co_node_document = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_document;
    this.if_ixml_node$co_node_element = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_element;
    this.if_ixml_node$co_node_text = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_text;
    this.if_ixml_node$co_node_cdata_section = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_cdata_section;
    this.if_ixml_attribute$get_value = this.if_ixml_node$get_value;
    this.if_ixml_attribute$set_value = this.if_ixml_node$set_value;
    this.if_ixml_attribute$get_name = this.if_ixml_node$get_name;
    this.if_ixml_attribute$set_name = this.if_ixml_node$set_name;
  }
  async if_ixml_node$create_filter_name(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$create_filter_parent(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let filter_parent = INPUT?.filter_parent;
    if (filter_parent?.getQualifiedName === undefined || filter_parent.getQualifiedName() !== "IF_IXML_NODE_FILTER") { filter_parent = undefined; }
    if (filter_parent === undefined) { filter_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"}).set(INPUT.filter_parent); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async get_parent(INPUT) {
    let ri_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    ri_parent.set(this.#mi_parent);
    return ri_parent;
  }
  async set_parent(INPUT) {
    let ii_parent = INPUT?.ii_parent;
    if (ii_parent?.getQualifiedName === undefined || ii_parent.getQualifiedName() !== "IF_IXML_NODE") { ii_parent = undefined; }
    if (ii_parent === undefined) { ii_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ii_parent); }
    this.#mi_parent.set(ii_parent);
  }
  async if_ixml_node$num_children(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    rval.set((await this.#mo_children.get().if_ixml_node_list$get_length({length: 1})));
    return rval;
  }
  async constructor_(INPUT) {
    let ii_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    if (INPUT && INPUT.ii_parent) {ii_parent.set(INPUT.ii_parent);}
    this.#mo_children.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST']()).constructor_());
    this.#mi_attributes.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NAMED_NODE_MAP']()).constructor_());
    this.#mi_parent.set(ii_parent);
    if (abap.compare.initial(this.#mi_parent) === false) {
      await ii_parent.get().if_ixml_node$append_child({new_child: this.me});
    }
    return this;
  }
  async if_ixml_node$get_height(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$get_gid(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$insert_child(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let ref_child = INPUT?.ref_child;
    if (ref_child?.getQualifiedName === undefined || ref_child.getQualifiedName() !== "IF_IXML_NODE") { ref_child = undefined; }
    if (ref_child === undefined) { ref_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ref_child); }
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let li_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    rval.set(abap.IntegerFactory.get(4));
    if (abap.compare.initial(new_child)) {
      return rval;
    }
    if (abap.compare.initial(ref_child) === false && abap.compare.ne((await ref_child.get().if_ixml_node$get_parent({val: 1})), this.me)) {
      return rval;
    }
    if (abap.compare.eq(new_child, ref_child)) {
      rval.set(abap.IntegerFactory.get(0));
      return rval;
    }
    await abap.statements.cast(lo_node, new_child);
    li_parent.set((await lo_node.get().get_parent({ri_parent: 1})));
    if (abap.compare.initial(li_parent) === false) {
      await li_parent.get().if_ixml_node$remove_child({child: new_child});
    }
    await lo_node.get().set_parent({ii_parent: this.me});
    await this.#mo_children.get().insert({ii_node: new_child, ii_ref: ref_child});
    rval.set(abap.IntegerFactory.get(0));
    return rval;
  }
  async if_ixml_node$clone(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lo_clone = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let lo_attr = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let li_attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_iter = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    lo_clone.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    lo_clone.get().#mv_name.set(this.#mv_name);
    lo_clone.get().#mv_namespace.set(this.#mv_namespace);
    lo_clone.get().#mv_value.set(this.#mv_value);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique298 = (await this.#mi_attributes.get().if_ixml_named_node_map$get_length({val: 1})).get();
    for (let unique299 = 0; unique299 < unique298; unique299++) {
      abap.builtin.sy.get().index.set(unique299 + 1);
      lv_index.set(abap.builtin.sy.get().index);
      li_attr.set((await this.#mi_attributes.get().if_ixml_named_node_map$get_item({index: lv_index, rval: 1})));
      lo_attr.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
      lo_attr.get().#mv_name.set((await li_attr.get().if_ixml_node$get_name({val: 1})));
      lo_attr.get().#mv_value.set((await li_attr.get().if_ixml_node$get_value({val: 1})));
      await lo_clone.get().#mi_attributes.get().if_ixml_named_node_map$set_named_item_ns({node: lo_attr});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    li_iter.set((await this.#mo_children.get().if_ixml_node_list$create_iterator({rval: 1})));
    const indexBackup2 = abap.builtin.sy.get().index.get();
    let unique300 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique300++);
      li_child.set((await li_iter.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_child)) {
        break;
      }
      await lo_clone.get().if_ixml_node$append_child({new_child: (await li_child.get().if_ixml_node$clone({rval: 1}))});
    }
    abap.builtin.sy.get().index.set(indexBackup2);
    rval.set(lo_clone);
    return rval;
  }
  async if_ixml_node$create_iterator_filtered(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let filter = INPUT?.filter;
    if (filter?.getQualifiedName === undefined || filter.getQualifiedName() !== "IF_IXML_NODE_FILTER") { filter = undefined; }
    if (filter === undefined) { filter = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"}).set(INPUT.filter); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$get_column(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$create_filter_name_ns(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_element$get_attribute_node_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_IXML_ATTRIBUTE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    await abap.statements.cast(val, (await this.#attribute_node({iv_name: name, iv_uri: uri, ri_node: 1})));
    return val;
  }
  async if_ixml_node$get_next(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (abap.compare.initial(this.#mi_parent)) {
      return rval;
    }
    li_iterator.set((await (await this.#mi_parent.get().if_ixml_node$get_children({val: 1})).get().if_ixml_node_list$create_iterator({rval: 1})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique301 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique301++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_node)) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return rval;
      }
      if (abap.compare.eq(lv_found, abap.builtin.abap_true)) {
        rval.set(li_node);
        abap.builtin.sy.get().index.set(indexBackup1);
        return rval;
      }
      if (abap.compare.eq(li_node, this.me)) {
        lv_found.set(abap.builtin.abap_true);
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return rval;
  }
  async if_ixml_node$get_namespace_prefix(INPUT) {
    let rv_prefix = new abap.types.String({qualifiedName: "STRING"});
    rv_prefix.set(this.#mv_namespace);
    return rv_prefix;
  }
  async if_ixml_node$get_namespace_uri(INPUT) {
    let rval = new abap.types.String({qualifiedName: "STRING"});
    rval.set((await this.#uri_of_prefix({iv_prefix: this.#mv_namespace, rv_uri: 1})));
    return rval;
  }
  async #uri_of_prefix(INPUT) {
    let rv_uri = new abap.types.String({qualifiedName: "STRING"});
    let iv_prefix = INPUT?.iv_prefix;
    if (iv_prefix?.getQualifiedName === undefined || iv_prefix.getQualifiedName() !== "STRING") { iv_prefix = undefined; }
    if (iv_prefix === undefined) { iv_prefix = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_prefix); }
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    let li_attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    if (abap.compare.initial(iv_prefix)) {
      lv_name.set(abap.CharacterFactory.get(5, 'xmlns'));
    } else {
      abap.statements.concatenate({source: [abap.CharacterFactory.get(6, 'xmlns:'), iv_prefix], target: lv_name});
    }
    li_node.set(this.me);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique302 = 1;
    while (abap.compare.initial(li_node) === false) {
      abap.builtin.sy.get().index.set(unique302++);
      li_map.set((await li_node.get().if_ixml_node$get_attributes({map: 1})));
      if (abap.compare.initial(li_map) === false) {
        li_attr.set((await li_map.get().if_ixml_named_node_map$get_named_item({name: lv_name, val: 1})));
        if (abap.compare.initial(li_attr) === false) {
          rv_uri.set((await li_attr.get().if_ixml_node$get_value({val: 1})));
          abap.builtin.sy.get().index.set(indexBackup1);
          return rv_uri;
        }
      }
      li_node.set((await li_node.get().if_ixml_node$get_parent({val: 1})));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return rv_uri;
  }
  async if_ixml_element$get_attributes(INPUT) {
    let attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    attr.set((await this.if_ixml_node$get_attributes({map: 1})));
    return attr;
  }
  async if_ixml_element$get_next(INPUT) {
    let next = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    await abap.statements.cast(next, (await this.if_ixml_node$get_next({rval: 1})));
    return next;
  }
  async if_ixml_element$get_name(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    name.set(this.#mv_name);
    return name;
  }
  async if_ixml_element$append_child(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let new_parent = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    await abap.statements.cast(new_parent, (await lo_node.get().get_parent({ri_parent: 1})));
    if (abap.compare.initial(new_parent) === false) {
      await new_parent.get().if_ixml_node$remove_child({child: lo_node});
    }
    await lo_node.get().set_parent({ii_parent: this.me});
    await this.#mo_children.get().append({ii_node: new_child});
    return rc;
  }
  async if_ixml_element$clone(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    val.set((await this.if_ixml_node$clone({rval: 1})));
    return val;
  }
  async if_ixml_element$create_filter_node_type(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let node_types = INPUT?.node_types;
    if (node_types?.getQualifiedName === undefined || node_types.getQualifiedName() !== "I") { node_types = undefined; }
    if (node_types === undefined) { node_types = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.node_types); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_element$remove_attribute_ns(INPUT) {
    let foo = INPUT?.foo;
    if (foo?.getQualifiedName === undefined || foo.getQualifiedName() !== "STRING") { foo = undefined; }
    if (foo === undefined) { foo = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.foo); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_ixml_element$create_iterator(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
    await this.#collect_subtree({ct_nodes: lt_nodes});
    val.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: lt_nodes}));
    return val;
  }
  async #collect_subtree(INPUT) {
    let ct_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
    if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    abap.statements.append({source: this.me, target: ct_nodes});
    li_iterator.set((await this.#mo_children.get().if_ixml_node_list$create_iterator({rval: 1})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique303 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique303++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_node)) {
        break;
      }
      await abap.statements.cast(lo_node, li_node);
      await lo_node.get().#collect_subtree({ct_nodes: ct_nodes});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_ixml_element$find_from_name_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let li_top = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    abap.statements.append({source: this.me, target: lt_nodes});
    for await (const unique304 of abap.statements.loop(lt_nodes)) {
      li_top.set(unique304);
      li_children.set((await li_top.get().if_ixml_node$get_children({val: 1})));
      li_iterator.set((await li_children.get().if_ixml_node_list$create_iterator({rval: 1})));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique305 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique305++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
        if (abap.compare.initial(li_node)) {
          break;
        }
        if (abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), name)) {
          await abap.statements.cast(val, li_node);
          abap.builtin.sy.get().index.set(indexBackup1);
          return val;
        }
        abap.statements.append({source: li_node, target: lt_nodes});
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    }
    return val;
  }
  async if_ixml_element$find_from_name(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    val.set((await this.if_ixml_element$find_from_name_ns({name: name, depth: depth, namespace: namespace, val: 1})));
    return val;
  }
  async if_ixml_element$get_attribute_node(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_IXML_ATTRIBUTE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    await abap.statements.cast(val, (await this.#attribute_node({iv_name: name, ri_node: 1})));
    return val;
  }
  async if_ixml_element$get_attribute_ns(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    li_node.set((await this.#attribute_node({iv_name: name, iv_uri: uri, ri_node: 1})));
    if (abap.compare.initial(li_node) === false) {
      val.set((await li_node.get().if_ixml_node$get_value({val: 1})));
    }
    return val;
  }
  async #attribute_node(INPUT) {
    let ri_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    let iv_uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_uri) {iv_uri.set(INPUT.iv_uri);}
    let li_map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_prefix = new abap.types.String({qualifiedName: "STRING"});
    let lv_local = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    li_map.set((await this.if_ixml_node$get_attributes({map: 1})));
    if (abap.compare.initial(iv_uri)) {
      ri_node.set((await li_map.get().if_ixml_named_node_map$get_named_item_ns({name: iv_name, val: 1})));
      return ri_node;
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique306 = (await li_map.get().if_ixml_named_node_map$get_length({val: 1})).get();
    for (let unique307 = 0; unique307 < unique306; unique307++) {
      abap.builtin.sy.get().index.set(unique307 + 1);
      lv_index.set(abap.builtin.sy.get().index);
      li_node.set((await li_map.get().if_ixml_named_node_map$get_item({index: lv_index, rval: 1})));
      lv_name.set((await li_node.get().if_ixml_node$get_name({val: 1})));
      if (abap.compare.ns(lv_name, abap.CharacterFactory.get(1, ':'))) {
        continue;
      }
      abap.statements.split({source: lv_name, at: abap.CharacterFactory.get(1, ':'), targets: [lv_prefix,lv_local]});
      if (abap.compare.eq(lv_local, iv_name) && abap.compare.eq((await this.#uri_of_prefix({iv_prefix: lv_prefix, rv_uri: 1})), iv_uri)) {
        ri_node.set(li_node);
        abap.builtin.sy.get().index.set(indexBackup1);
        return ri_node;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return ri_node;
  }
  async if_ixml_element$get_attribute(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    val.set((await this.if_ixml_element$get_attribute_ns({name: name, val: 1})));
    return val;
  }
  async if_ixml_element$get_children(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    val.set((await this.if_ixml_node$get_children({val: 1})));
    return val;
  }
  async if_ixml_element$get_elements_by_tag_name(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    if (INPUT === undefined || INPUT.namespace === undefined) {namespace = abap.CharacterFactory.get(1, '');}
    let lo_list = new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"});
    lo_list.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST']()).constructor_());
    await this.#collect_elements_by_tag_name({iv_name: name, iv_namespace: namespace, iv_uri: abap.CharacterFactory.get(1, ''), io_list: lo_list});
    val.set(lo_list);
    return val;
  }
  async if_ixml_element$get_elements_by_tag_name_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let lo_list = new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"});
    lo_list.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST']()).constructor_());
    await this.#collect_elements_by_tag_name({iv_name: name, iv_namespace: abap.CharacterFactory.get(1, ''), iv_uri: uri, io_list: lo_list});
    val.set(lo_list);
    return val;
  }
  async if_ixml_element$get_first_child(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    val.set((await this.if_ixml_node$get_first_child({node: 1})));
    return val;
  }
  async if_ixml_element$get_value(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.if_ixml_node$get_value({val: 1})));
    return val;
  }
  async if_ixml_element$remove_attribute(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    await (await this.if_ixml_node$get_attributes({map: 1})).get().if_ixml_named_node_map$remove_named_item({name: name});
  }
  async if_ixml_element$remove_node() {
    await this.if_ixml_node$remove_node();
  }
  async #has_direct_text(INPUT) {
    let rv_has = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    let li_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    rv_has.set(abap.builtin.abap_false);
    if (abap.compare.initial(this.#mv_value) === false) {
      rv_has.set(abap.builtin.abap_true);
      return rv_has;
    }
    li_children.set((await this.if_ixml_node$get_children({val: 1})));
    if (abap.compare.ne((await li_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(1))) {
      return rv_has;
    }
    li_child.set((await li_children.get().if_ixml_node_list$get_item({index: abap.IntegerFactory.get(1), val: 1})));
    if (abap.compare.eq((await li_child.get().if_ixml_node$get_name({val: 1})), abap.CharacterFactory.get(5, '#text'))) {
      rv_has.set(abap.builtin.abap_true);
    }
    return rv_has;
  }
  async #collect_elements_by_tag_name(INPUT) {
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    let iv_namespace = INPUT?.iv_namespace;
    if (iv_namespace?.getQualifiedName === undefined || iv_namespace.getQualifiedName() !== "STRING") { iv_namespace = undefined; }
    if (iv_namespace === undefined) { iv_namespace = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_namespace); }
    let iv_uri = INPUT?.iv_uri;
    if (iv_uri?.getQualifiedName === undefined || iv_uri.getQualifiedName() !== "STRING") { iv_uri = undefined; }
    if (iv_uri === undefined) { iv_uri = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_uri); }
    let io_list = INPUT?.io_list;
    if (io_list?.getQualifiedName === undefined || io_list.getQualifiedName() !== "LCL_NODE_LIST") { io_list = undefined; }
    if (io_list === undefined) { io_list = new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE_LIST"}).set(INPUT.io_list); }
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let lv_matches = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    li_iterator.set((await this.#mo_children.get().if_ixml_node_list$create_iterator({rval: 1})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique308 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique308++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_node)) {
        break;
      }
      if (abap.compare.ne((await li_node.get().if_ixml_node$get_name({val: 1})), abap.CharacterFactory.get(5, '#text'))) {
        lv_matches.set(abap.builtin.boolc(abap.compare.eq(iv_name, abap.CharacterFactory.get(1, '*')) || abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), iv_name)));
        if (abap.compare.eq(lv_matches, abap.builtin.abap_true) && (abap.compare.initial(iv_namespace) || abap.compare.eq(iv_namespace, abap.CharacterFactory.get(1, '*')) || abap.compare.eq((await li_node.get().if_ixml_node$get_namespace({val: 1})), iv_namespace)) && (abap.compare.initial(iv_uri) || abap.compare.eq(iv_uri, abap.CharacterFactory.get(1, '*')) || abap.compare.eq((await li_node.get().if_ixml_node$get_namespace({val: 1})), iv_uri) || abap.compare.eq((await li_node.get().if_ixml_node$get_namespace_uri({rval: 1})), iv_uri))) {
          await io_list.get().append({ii_node: li_node});
        }
      }
      await abap.statements.cast(lo_node, li_node);
      await lo_node.get().#collect_elements_by_tag_name({iv_name: iv_name, iv_namespace: iv_namespace, iv_uri: iv_uri, io_list: io_list});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_ixml_element$render(INPUT) {
    let ostream = INPUT?.ostream;
    if (ostream?.getQualifiedName === undefined || ostream.getQualifiedName() !== "IF_IXML_OSTREAM") { ostream = undefined; }
    if (ostream === undefined) { ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"}).set(INPUT.ostream); }
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    let lv_attributes = new abap.types.String({qualifiedName: "STRING"});
    let lv_ns = new abap.types.String({qualifiedName: "STRING"});
    li_iterator.set((await this.#mi_attributes.get().if_ixml_named_node_map$create_iterator({iterator: 1})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique309 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique309++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_node)) {
        break;
      }
      lv_ns.set((await li_node.get().if_ixml_node$get_namespace_prefix({rv_prefix: 1})));
      if (abap.compare.initial(lv_ns) === false) {
        lv_ns.set(abap.operators.concat(lv_ns,abap.CharacterFactory.get(1, ':')));
      }
      lv_attributes.set(abap.operators.concat(lv_attributes,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(lv_ns,abap.operators.concat((await li_node.get().if_ixml_node$get_name({val: 1})),abap.operators.concat(abap.CharacterFactory.get(2, '="'),abap.operators.concat((await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].escape_value({iv_value: (await li_node.get().if_ixml_node$get_value({val: 1})), rv_value: 1})),abap.CharacterFactory.get(1, '"'))))))));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    lv_ns.clear();
    if (abap.compare.initial(this.#mv_namespace) === false) {
      lv_ns.set(abap.operators.concat(this.#mv_namespace,abap.CharacterFactory.get(1, ':')));
    }
    li_children.set((await this.if_ixml_node$get_children({val: 1})));
    if (abap.compare.ne(this.#mv_name, abap.CharacterFactory.get(5, '#text')) && abap.compare.eq((await ostream.get().if_ixml_ostream$get_pretty_print({rval: 1})), abap.builtin.abap_true)) {
      await ostream.get().if_ixml_ostream$write_string({string: (abap.builtin.repeat({val: new abap.types.String().set(` `), occ: (await ostream.get().if_ixml_ostream$get_indent({rval: 1}))}))});
    }
    if (abap.compare.ne(this.#mv_name, abap.CharacterFactory.get(5, '#text'))) {
      await ostream.get().if_ixml_ostream$write_string({string: abap.operators.concat(abap.CharacterFactory.get(1, '<'),abap.operators.concat(lv_ns,abap.operators.concat(this.#mv_name,lv_attributes)))});
      if (abap.compare.gt((await li_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(0)) || abap.compare.initial(this.#mv_value) === false) {
        await ostream.get().if_ixml_ostream$write_string({string: abap.CharacterFactory.get(1, '>')});
      }
    }
    if (abap.compare.eq((await ostream.get().if_ixml_ostream$get_pretty_print({rval: 1})), abap.builtin.abap_true) && abap.compare.eq((await this.if_ixml_node$is_leaf({val: 1})), abap.builtin.abap_false) && abap.compare.eq((await this.#has_direct_text({rv_has: 1})), abap.builtin.abap_false)) {
      await ostream.get().if_ixml_ostream$write_string({string: new abap.types.String().set(`\n`)});
    }
    await ostream.get().if_ixml_ostream$set_indent({indent: abap.operators.add((await ostream.get().if_ixml_ostream$get_indent({rval: 1})),abap.IntegerFactory.get(1))});
    li_iterator.set((await li_children.get().if_ixml_node_list$create_iterator({rval: 1})));
    const indexBackup2 = abap.builtin.sy.get().index.get();
    let unique310 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique310++);
      await abap.statements.cast(li_element, (await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
      if (abap.compare.initial(li_element)) {
        break;
      }
      await li_element.get().if_ixml_element$render({ostream: ostream});
    }
    abap.builtin.sy.get().index.set(indexBackup2);
    await ostream.get().if_ixml_ostream$set_indent({indent: abap.operators.minus((await ostream.get().if_ixml_ostream$get_indent({rval: 1})),abap.IntegerFactory.get(1))});
    if (abap.compare.gt((await li_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(0)) || abap.compare.initial(this.#mv_value) === false) {
      await ostream.get().if_ixml_ostream$write_string({string: (await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].escape_value({iv_value: this.#mv_value, rv_value: 1}))});
      if (abap.compare.ne(this.#mv_name, abap.CharacterFactory.get(5, '#text'))) {
        if (abap.compare.eq((await ostream.get().if_ixml_ostream$get_pretty_print({rval: 1})), abap.builtin.abap_true) && abap.compare.eq((await this.#has_direct_text({rv_has: 1})), abap.builtin.abap_false)) {
          await ostream.get().if_ixml_ostream$write_string({string: (abap.builtin.repeat({val: new abap.types.String().set(` `), occ: (await ostream.get().if_ixml_ostream$get_indent({rval: 1}))}))});
        }
        await ostream.get().if_ixml_ostream$write_string({string: abap.operators.concat(abap.CharacterFactory.get(2, '</'),abap.operators.concat(lv_ns,abap.operators.concat(this.#mv_name,abap.CharacterFactory.get(1, '>'))))});
      }
    } else {
      await ostream.get().if_ixml_ostream$write_string({string: abap.CharacterFactory.get(2, '/>')});
    }
    if (abap.compare.eq((await ostream.get().if_ixml_ostream$get_pretty_print({rval: 1})), abap.builtin.abap_true) && abap.compare.ne(this.#mv_name, abap.CharacterFactory.get(5, '#text'))) {
      await ostream.get().if_ixml_ostream$write_string({string: new abap.types.String().set(`\n`)});
    }
  }
  async if_ixml_element$set_attribute_node_ns(INPUT) {
    let new_attr = INPUT?.new_attr;
    if (new_attr?.getQualifiedName === undefined || new_attr.getQualifiedName() !== "IF_IXML_ATTRIBUTE") { new_attr = undefined; }
    if (new_attr === undefined) { new_attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_IXML_ATTRIBUTE"}).set(INPUT.new_attr); }
    await this.#mi_attributes.get().if_ixml_named_node_map$set_named_item_ns({node: new_attr});
  }
  async if_ixml_element$set_attribute(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    await this.if_ixml_element$set_attribute_ns({name: name, value: value});
    return rval;
  }
  async if_ixml_element$set_attribute_ns(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let lo_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await lo_node.get().if_ixml_node$set_name({name: name});
    await lo_node.get().if_ixml_node$set_value({value: value});
    await lo_node.get().if_ixml_node$set_namespace_prefix({val: prefix});
    await this.#mi_attributes.get().if_ixml_named_node_map$set_named_item_ns({node: lo_node});
  }
  async if_ixml_element$set_value(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "I"});
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    await this.if_ixml_node$set_value({value: value});
    return rc;
  }
  async if_ixml_node$set_namespace_prefix(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    this.#mv_namespace.set(val);
  }
  async if_ixml_node$append_child(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    lo_node.get().#mi_parent.set(this.me);
    await this.#mo_children.get().append({ii_node: new_child});
    return rval;
  }
  async if_ixml_node$get_attributes(INPUT) {
    let map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    map.set(this.#mi_attributes);
    return map;
  }
  async if_ixml_node$get_first_child(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    node.set((await this.#mo_children.get().if_ixml_node_list$get_item({index: abap.IntegerFactory.get(1), val: 1})));
    return node;
  }
  async if_ixml_node$get_children(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    val.set(this.#mo_children);
    return val;
  }
  async if_ixml_node$query_interface(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_UNKNOWN", RTTIName: "\\INTERFACE=IF_IXML_UNKNOWN"});
    let iid = INPUT?.iid;
    if (iid?.getQualifiedName === undefined || iid.getQualifiedName() !== "I") { iid = undefined; }
    if (iid === undefined) { iid = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iid); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$remove_node() {
    if (abap.compare.initial(this.#mi_parent) === false) {
      await this.#mi_parent.get().if_ixml_node$remove_child({child: this.me});
      this.#mi_parent.clear();
    }
  }
  async if_ixml_node$get_parent(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    val.set(this.#mi_parent);
    return val;
  }
  async if_ixml_node$replace_child(INPUT) {
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let old_child = INPUT?.old_child;
    if (old_child?.getQualifiedName === undefined || old_child.getQualifiedName() !== "IF_IXML_NODE") { old_child = undefined; }
    if (old_child === undefined) { old_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.old_child); }
    if (abap.compare.initial(new_child) || abap.compare.initial(old_child)) {
      return;
    }
    if (abap.compare.ne((await old_child.get().if_ixml_node$get_parent({val: 1})), this.me)) {
      return;
    }
    if (abap.compare.eq(new_child, old_child)) {
      return;
    }
    await this.if_ixml_node$insert_child({new_child: new_child, ref_child: old_child});
    await this.if_ixml_node$remove_child({child: old_child});
  }
  async if_ixml_node$get_name(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.#mv_name);
    return val;
  }
  async if_ixml_node$get_depth(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_max = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq((await this.#mo_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(0))) {
      val.set(abap.IntegerFactory.get(0));
    } else {
      li_iterator.set((await this.#mo_children.get().if_ixml_node_list$create_iterator({rval: 1})));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique311 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique311++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
        if (abap.compare.initial(li_node)) {
          break;
        }
        if (abap.compare.gt((await li_node.get().if_ixml_node$get_depth({val: 1})), lv_max)) {
          lv_max.set((await li_node.get().if_ixml_node$get_depth({val: 1})));
        }
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      val.set(abap.operators.add(lv_max,abap.IntegerFactory.get(1)));
    }
    return val;
  }
  async if_ixml_node$is_leaf(INPUT) {
    let val = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    val.set(abap.builtin.boolc(abap.compare.eq((await this.#mo_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(0))));
    return val;
  }
  async if_ixml_node$get_namespace(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.#mv_namespace);
    return val;
  }
  async if_ixml_node$get_value(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_max = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq((await this.#mo_children.get().if_ixml_node_list$get_length({length: 1})), abap.IntegerFactory.get(0))) {
      val.set(this.#mv_value);
    } else {
      li_iterator.set((await this.#mo_children.get().if_ixml_node_list$create_iterator({rval: 1})));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique312 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique312++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
        if (abap.compare.initial(li_node)) {
          break;
        }
        val.set(abap.operators.concat(val,(await li_node.get().if_ixml_node$get_value({val: 1}))));
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    }
    return val;
  }
  async if_ixml_node$get_type(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_node$set_name(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    this.#mv_name.set(name);
  }
  async if_ixml_node$remove_child(INPUT) {
    let child = INPUT?.child;
    if (child?.getQualifiedName === undefined || child.getQualifiedName() !== "IF_IXML_NODE") { child = undefined; }
    if (child === undefined) { child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.child); }
    await this.#mo_children.get().remove({ii_node: child});
  }
  async if_ixml_node$set_value(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    this.#mv_value.set(value);
    this.#mo_children.clear();
    this.#mo_children.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST']()).constructor_());
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE'] = lcl_node;
lcl_node.if_ixml_node$co_node_document = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_document.set(1);
lcl_node.if_ixml_node$co_node_element = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_element.set(4);
lcl_node.if_ixml_node$co_node_text = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_text.set(16);
lcl_node.if_ixml_node$co_node_cdata_section = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_cdata_section.set(32);
lcl_node.if_ixml_node$co_node_document = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_document.set(1);
lcl_node.if_ixml_node$co_node_element = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_element.set(4);
lcl_node.if_ixml_node$co_node_text = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_text.set(16);
lcl_node.if_ixml_node$co_node_cdata_section = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_cdata_section.set(32);
lcl_node.if_ixml_node$co_node_document = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_document.set(1);
lcl_node.if_ixml_node$co_node_element = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_element.set(4);
lcl_node.if_ixml_node$co_node_text = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_text.set(16);
lcl_node.if_ixml_node$co_node_cdata_section = new abap.types.Integer({qualifiedName: "I"});
lcl_node.if_ixml_node$co_node_cdata_section.set(32);
class lcl_document {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_DOCUMENT';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_DOCUMENT","IF_IXML_NODE"];
  static ATTRIBUTES = {"MI_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_STANDALONE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_IXML_NODE~CO_NODE_DOCUMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_ELEMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_TEXT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_CDATA_SECTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  #mi_node;
  #mv_standalone;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mi_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    this.FRIENDS_ACCESS_INSTANCE["mi_node"] = this.#mi_node;
    this.#mv_standalone = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.FRIENDS_ACCESS_INSTANCE["mv_standalone"] = this.#mv_standalone;
    this.if_ixml_node$co_node_document = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_document;
    this.if_ixml_node$co_node_element = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_element;
    this.if_ixml_node$co_node_text = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_text;
    this.if_ixml_node$co_node_cdata_section = abap.Classes['IF_IXML_NODE'].if_ixml_node$co_node_cdata_section;
    this.if_ixml_document$create_filter_name_ns = this.if_ixml_node$create_filter_name_ns;
    this.if_ixml_document$create_filter_name = this.if_ixml_node$create_filter_name;
    this.if_ixml_document$append_child = this.if_ixml_node$append_child;
    this.if_ixml_document$create_filter_parent = this.if_ixml_node$create_filter_parent;
  }
  async if_ixml_node$create_filter_name(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$create_filter_parent(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let filter_parent = INPUT?.filter_parent;
    if (filter_parent?.getQualifiedName === undefined || filter_parent.getQualifiedName() !== "IF_IXML_NODE_FILTER") { filter_parent = undefined; }
    if (filter_parent === undefined) { filter_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"}).set(INPUT.filter_parent); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$num_children(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    rval.set((await this.#mi_node.get().if_ixml_node$num_children({rval: 1})));
    return rval;
  }
  async constructor_(INPUT) {
    this.#mi_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await this.#mi_node.get().if_ixml_node$set_name({name: abap.CharacterFactory.get(9, '#document')});
    return this;
  }
  async if_ixml_node$get_height(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$get_gid(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$insert_child(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let ref_child = INPUT?.ref_child;
    if (ref_child?.getQualifiedName === undefined || ref_child.getQualifiedName() !== "IF_IXML_NODE") { ref_child = undefined; }
    if (ref_child === undefined) { ref_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ref_child); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$clone(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    rval.set((await this.#mi_node.get().if_ixml_node$clone({rval: 1})));
    return rval;
  }
  async if_ixml_node$create_iterator_filtered(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let filter = INPUT?.filter;
    if (filter?.getQualifiedName === undefined || filter.getQualifiedName() !== "IF_IXML_NODE_FILTER") { filter = undefined; }
    if (filter === undefined) { filter = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"}).set(INPUT.filter); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$get_column(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$create_filter_name_ns(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_node$get_namespace_prefix(INPUT) {
    let rv_prefix = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rv_prefix;
  }
  async if_ixml_node$get_next(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    return rval;
    // removed by dead control flow

  }
  async if_ixml_node$get_namespace_uri(INPUT) {
    let rval = new abap.types.String({qualifiedName: "STRING"});
    rval.set((await this.#mi_node.get().if_ixml_node$get_namespace_uri({rval: 1})));
    return rval;
  }
  async if_ixml_node$append_child(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    await lo_node.get().set_parent({ii_parent: this.me});
    await this.#mi_node.get().if_ixml_node$append_child({new_child: new_child});
    return rval;
  }
  async if_ixml_node$set_namespace_prefix(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    await this.#mi_node.get().if_ixml_node$set_namespace_prefix({val: val});
  }
  async if_ixml_node$get_attributes(INPUT) {
    let map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP", RTTIName: "\\INTERFACE=IF_IXML_NAMED_NODE_MAP"});
    map.set((await this.#mi_node.get().if_ixml_node$get_attributes({map: 1})));
    return map;
  }
  async if_ixml_node$get_first_child(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    node.set((await this.#mi_node.get().if_ixml_node$get_first_child({node: 1})));
    return node;
  }
  async if_ixml_node$get_children(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    val.set((await this.#mi_node.get().if_ixml_node$get_children({val: 1})));
    return val;
  }
  async if_ixml_node$query_interface(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_UNKNOWN", RTTIName: "\\INTERFACE=IF_IXML_UNKNOWN"});
    let iid = INPUT?.iid;
    if (iid?.getQualifiedName === undefined || iid.getQualifiedName() !== "I") { iid = undefined; }
    if (iid === undefined) { iid = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iid); }
    await this.#mi_node.get().if_ixml_node$query_interface({iid: iid});
    return rval;
  }
  async if_ixml_node$remove_node() {
    await this.#mi_node.get().if_ixml_node$remove_node();
  }
  async if_ixml_node$get_parent(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    val.set((await this.#mi_node.get().if_ixml_node$get_parent({val: 1})));
    return val;
  }
  async if_ixml_node$replace_child(INPUT) {
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    let old_child = INPUT?.old_child;
    if (old_child?.getQualifiedName === undefined || old_child.getQualifiedName() !== "IF_IXML_NODE") { old_child = undefined; }
    if (old_child === undefined) { old_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.old_child); }
    await this.#mi_node.get().if_ixml_node$replace_child({new_child: new_child, old_child: old_child});
  }
  async if_ixml_node$get_name(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.#mi_node.get().if_ixml_node$get_name({val: 1})));
    return val;
  }
  async if_ixml_node$get_depth(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    val.set((await this.#mi_node.get().if_ixml_node$get_depth({val: 1})));
    return val;
  }
  async if_ixml_node$is_leaf(INPUT) {
    let val = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    val.set((await this.#mi_node.get().if_ixml_node$is_leaf({val: 1})));
    return val;
  }
  async if_ixml_node$get_namespace(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.#mi_node.get().if_ixml_node$get_namespace({val: 1})));
    return val;
  }
  async if_ixml_node$get_value(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.#mi_node.get().if_ixml_node$get_value({val: 1})));
    return val;
  }
  async if_ixml_node$get_type(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.#mi_node.get().if_ixml_node$get_type({val: 1})));
    return val;
  }
  async if_ixml_node$set_name(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    await this.#mi_node.get().if_ixml_node$set_name({name: name});
  }
  async if_ixml_node$remove_child(INPUT) {
    let child = INPUT?.child;
    if (child?.getQualifiedName === undefined || child.getQualifiedName() !== "IF_IXML_NODE") { child = undefined; }
    if (child === undefined) { child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.child); }
    await this.#mi_node.get().if_ixml_node$remove_child({child: child});
  }
  async if_ixml_node$set_value(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    await this.#mi_node.get().if_ixml_node$set_value({value: value});
    return rval;
  }
  async if_ixml_document$set_encoding(INPUT) {
    let encoding = INPUT?.encoding;
    if (encoding === undefined) { encoding = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.encoding); }
    return;
  }
  async if_ixml_document$set_standalone(INPUT) {
    let standalone = INPUT?.standalone;
    if (standalone?.getQualifiedName === undefined || standalone.getQualifiedName() !== "ABAP_BOOL") { standalone = undefined; }
    if (standalone === undefined) { standalone = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.standalone); }
    this.#mv_standalone.set(standalone);
  }
  async if_ixml_document$get_standalone(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    rval.set(this.#mv_standalone);
    return rval;
  }
  async if_ixml_document$set_namespace_prefix(INPUT) {
    let prefix = INPUT?.prefix;
    if (prefix?.getQualifiedName === undefined || prefix.getQualifiedName() !== "STRING") { prefix = undefined; }
    if (prefix === undefined) { prefix = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.prefix); }
    return;
  }
  async if_ixml_document$append_child(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let new_child = INPUT?.new_child;
    if (new_child?.getQualifiedName === undefined || new_child.getQualifiedName() !== "IF_IXML_NODE") { new_child = undefined; }
    if (new_child === undefined) { new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.new_child); }
    await this.if_ixml_node$append_child({new_child: new_child});
    return rval;
  }
  async if_ixml_document$get_first_child(INPUT) {
    let child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    li_iterator.set((await (await this.#mi_node.get().if_ixml_node$get_children({val: 1})).get().if_ixml_node_list$create_iterator({rval: 1})));
    child.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique313 = 1;
    while (abap.compare.initial(child) === false && abap.compare.eq((await child.get().if_ixml_node$get_name({val: 1})), new abap.types.String().set(`#text`))) {
      abap.builtin.sy.get().index.set(unique313++);
      child.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return child;
  }
  async if_ixml_document$create_attribute_ns(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_IXML_ATTRIBUTE"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await rval.get().if_ixml_node$set_name({name: name});
    await rval.get().if_ixml_node$set_namespace_prefix({val: prefix});
    return rval;
  }
  async if_ixml_document$create_element_ns(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    element.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await element.get().if_ixml_node$set_name({name: name});
    await element.get().if_ixml_node$set_namespace_prefix({val: prefix});
    return element;
  }
  async if_ixml_document$create_element(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    element.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await element.get().if_ixml_node$set_name({name: name});
    return element;
  }
  async if_ixml_document$create_iterator_filtered(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let filter = INPUT?.filter;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_document$set_declaration(INPUT) {
    let declaration = INPUT?.declaration;
    if (declaration?.getQualifiedName === undefined || declaration.getQualifiedName() !== "ABAP_BOOL") { declaration = undefined; }
    if (declaration === undefined) { declaration = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.declaration); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_ixml_document$create_filter_and(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let filter1 = INPUT?.filter1;
    let filter2 = INPUT?.filter2;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_document$create_iterator(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_document$create_filter_node_type(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let node_types = INPUT?.node_types;
    if (node_types?.getQualifiedName === undefined || node_types.getQualifiedName() !== "I") { node_types = undefined; }
    if (node_types === undefined) { node_types = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.node_types); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_document$create_simple_element_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let parent = INPUT?.parent;
    if (parent?.getQualifiedName === undefined || parent.getQualifiedName() !== "IF_IXML_NODE") { parent = undefined; }
    if (parent === undefined) { parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.parent); }
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    val.set((await this.if_ixml_document$create_simple_element({name: name, parent: parent, val: 1})));
    await abap.statements.cast(li_node, val);
    await li_node.get().if_ixml_node$set_namespace_prefix({val: prefix});
    return val;
  }
  async if_ixml_document$create_filter_attribute(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return val;
  }
  async if_ixml_document$create_simple_element(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let parent = INPUT?.parent;
    if (parent?.getQualifiedName === undefined || parent.getQualifiedName() !== "IF_IXML_NODE") { parent = undefined; }
    if (parent === undefined) { parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.parent); }
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    val.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: parent}));
    await val.get().if_ixml_node$set_name({name: name});
    await val.get().if_ixml_node$set_value({value: value});
    return val;
  }
  async if_ixml_document$find_from_name(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    element.set((await this.#mi_node.get().if_ixml_element$find_from_name_ns({name: name, depth: depth, namespace: namespace, val: 1})));
    return element;
  }
  async if_ixml_document$find_from_name_ns(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    element.set((await this.#mi_node.get().if_ixml_element$find_from_name_ns({name: name, depth: depth, namespace: abap.CharacterFactory.get(1, ''), val: 1})));
    return element;
  }
  async if_ixml_document$find_from_path(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let path = INPUT?.path;
    if (path?.getQualifiedName === undefined || path.getQualifiedName() !== "STRING") { path = undefined; }
    if (path === undefined) { path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.path); }
    let lt_names = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let li_current = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST", RTTIName: "\\INTERFACE=IF_IXML_NODE_LIST"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    li_current.set(this.#mi_node);
    abap.statements.split({source: path, at: abap.CharacterFactory.get(1, '/'), table: lt_names});
    for await (const unique314 of abap.statements.loop(lt_names)) {
      lv_name.set(unique314);
      if (abap.compare.initial(lv_name)) {
        continue;
      }
      lv_found.set(abap.builtin.abap_false);
      li_children.set((await li_current.get().if_ixml_node$get_children({val: 1})));
      li_iterator.set((await li_children.get().if_ixml_node_list$create_iterator({rval: 1})));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique315 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique315++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next({rval: 1})));
        if (abap.compare.initial(li_node)) {
          break;
        }
        if (abap.compare.eq((await li_node.get().if_ixml_node$get_name({val: 1})), lv_name)) {
          li_current.set(li_node);
          lv_found.set(abap.builtin.abap_true);
          break;
        }
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      if (abap.compare.eq(lv_found, abap.builtin.abap_false)) {
        return val;
      }
    }
    if (abap.compare.eq(lv_found, abap.builtin.abap_true)) {
      await abap.statements.cast(val, li_current);
    }
    return val;
  }
  async if_ixml_document$get_elements_by_tag_name_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let lv_namespace = new abap.types.String({qualifiedName: "STRING"});
    lv_namespace.set(uri);
    if (abap.compare.initial(lv_namespace)) {
      lv_namespace.set(namespace);
    }
    val.set((await this.#mi_node.get().if_ixml_element$get_elements_by_tag_name_ns({name: name, uri: lv_namespace, val: 1})));
    return val;
  }
  async if_ixml_document$get_elements_by_tag_name(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    val.set((await this.#mi_node.get().if_ixml_element$get_elements_by_tag_name({name: name, namespace: namespace, val: 1})));
    return val;
  }
  async if_ixml_document$get_root(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    node.set(this.#mi_node);
    return node;
  }
  async if_ixml_document$get_root_element(INPUT) {
    let root = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    await abap.statements.cast(root, (await this.if_ixml_document$get_first_child({child: 1})));
    return root;
  }
  async if_ixml_document$create_text(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_TEXT", RTTIName: "\\INTERFACE=IF_IXML_TEXT"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await rval.get().if_ixml_node$set_name({name: abap.CharacterFactory.get(5, '#text')});
    await rval.get().if_ixml_node$set_value({value: string});
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_DOCUMENT'] = lcl_document;
lcl_document.if_ixml_node$co_node_document = new abap.types.Integer({qualifiedName: "I"});
lcl_document.if_ixml_node$co_node_document.set(1);
lcl_document.if_ixml_node$co_node_element = new abap.types.Integer({qualifiedName: "I"});
lcl_document.if_ixml_node$co_node_element.set(4);
lcl_document.if_ixml_node$co_node_text = new abap.types.Integer({qualifiedName: "I"});
lcl_document.if_ixml_node$co_node_text.set(16);
lcl_document.if_ixml_node$co_node_cdata_section = new abap.types.Integer({qualifiedName: "I"});
lcl_document.if_ixml_node$co_node_cdata_section.set(32);
class lcl_renderer {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_RENDERER';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_RENDERER"];
  static ATTRIBUTES = {"MI_OSTREAM": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_DOCUMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"OSTREAM": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "DOCUMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mi_ostream;
  #mi_document;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.#mi_ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});
    this.FRIENDS_ACCESS_INSTANCE["mi_ostream"] = this.#mi_ostream;
    this.#mi_document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});
    this.FRIENDS_ACCESS_INSTANCE["mi_document"] = this.#mi_document;
  }
  async constructor_(INPUT) {
    let ostream = INPUT?.ostream;
    if (ostream?.getQualifiedName === undefined || ostream.getQualifiedName() !== "IF_IXML_OSTREAM") { ostream = undefined; }
    if (ostream === undefined) { ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"}).set(INPUT.ostream); }
    let document = INPUT?.document;
    if (document?.getQualifiedName === undefined || document.getQualifiedName() !== "IF_IXML_DOCUMENT") { document = undefined; }
    if (document === undefined) { document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"}).set(INPUT.document); }
    this.#mi_ostream.set(ostream);
    this.#mi_document.set(document);
    return this;
  }
  async if_ixml_renderer$render(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let li_root = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});
    let lv_standalone = new abap.types.String({qualifiedName: "STRING"});
    let lo_stream = new abap.types.ABAPObject({qualifiedName: "LCL_OSTREAM", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_OSTREAM"});
    if (abap.compare.eq((await this.#mi_document.get().if_ixml_document$get_standalone({rval: 1})), abap.builtin.abap_true)) {
      lv_standalone.set(new abap.types.String().set(` standalone="yes"`));
    }
    await abap.statements.cast(lo_stream, this.#mi_ostream);
    if (abap.compare.eq(lo_stream.get().mv_hex, abap.builtin.abap_true)) {
      await this.#mi_ostream.get().if_ixml_ostream$write_string({string: new abap.types.String().set(`<?xml version="1.0" encoding="utf-8"${abap.templateFormatting(lv_standalone)}?>`)});
    } else {
      await this.#mi_ostream.get().if_ixml_ostream$write_string({string: new abap.types.String().set(`<?xml version="1.0" encoding="utf-16"${abap.templateFormatting(lv_standalone)}?>`)});
    }
    if (abap.compare.eq(lo_stream.get().mv_pretty_print, abap.builtin.abap_true)) {
      await this.#mi_ostream.get().if_ixml_ostream$write_string({string: new abap.types.String().set(`\n`)});
    }
    li_root.set((await this.#mi_document.get().if_ixml_document$get_root_element({root: 1})));
    if (abap.compare.initial(li_root)) {
      return rval;
    }
    await li_root.get().if_ixml_element$render({ostream: this.#mi_ostream});
    return rval;
  }
  async if_ixml_renderer$set_normalizing(INPUT) {
    let normal = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.normal) {normal.set(INPUT.normal);}
    if (INPUT === undefined || INPUT.normal === undefined) {normal = abap.builtin.abap_true;}
    await this.#mi_ostream.get().if_ixml_ostream$set_pretty_print({pretty_print: normal});
  }
}
abap.Classes['CLAS-CL_IXML-LCL_RENDERER'] = lcl_renderer;
class lcl_ostream {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_OSTREAM';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_OSTREAM"];
  static ATTRIBUTES = {"MV_STRING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_HEX": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PRETTY_PRINT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INDENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mv_string = new abap.types.String({qualifiedName: "STRING"});
    this.mv_hex = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_pretty_print = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_indent = new abap.types.Integer({qualifiedName: "I"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_ixml_ostream$write_string(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    let lo_obj = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE", RTTIName: "\\CLASS=CL_ABAP_CONV_OUT_CE"});
    let lv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    if (abap.compare.eq(this.mv_hex, abap.builtin.abap_true)) {
      await (await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({ret: 1})).get().convert({data: string, n: abap.builtin.strlen({val: string}), buffer: lv_xstr});
      this.mv_string.set(abap.operators.concat(this.mv_string,lv_xstr));
    } else {
      this.mv_string.set(abap.operators.concat(this.mv_string,string));
    }
    return rval;
  }
  async if_ixml_ostream$set_pretty_print(INPUT) {
    let pretty_print = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.pretty_print) {pretty_print.set(INPUT.pretty_print);}
    if (INPUT === undefined || INPUT.pretty_print === undefined) {pretty_print = abap.builtin.abap_true;}
    this.mv_pretty_print.set(pretty_print);
  }
  async if_ixml_ostream$get_pretty_print(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN","description":""});
    rval.set(this.mv_pretty_print);
    return rval;
  }
  async if_ixml_ostream$set_indent(INPUT) {
    let indent = INPUT?.indent;
    if (indent?.getQualifiedName === undefined || indent.getQualifiedName() !== "I") { indent = undefined; }
    if (indent === undefined) { indent = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.indent); }
    this.mv_indent.set(indent);
  }
  async if_ixml_ostream$get_indent(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    rval.set(this.mv_indent);
    return rval;
  }
  async if_ixml_ostream$set_encoding(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN","description":""});
    let encoding = INPUT?.encoding;
    if (encoding?.getQualifiedName === undefined || encoding.getQualifiedName() !== "IF_IXML_ENCODING") { encoding = undefined; }
    if (encoding === undefined) { encoding = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ENCODING", RTTIName: "\\INTERFACE=IF_IXML_ENCODING"}).set(INPUT.encoding); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_ostream$get_encoding(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ENCODING", RTTIName: "\\INTERFACE=IF_IXML_ENCODING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_ostream$get_num_written_raw(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_OSTREAM'] = lcl_ostream;
class lcl_istream {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_ISTREAM';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ISTREAM","IF_IXML_STREAM"];
  static ATTRIBUTES = {"MV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_IXML_ISTREAM~DTD_ALLOWED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_ISTREAM~DTD_RESTRICTED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_ISTREAM~DTD_PROHIBITED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mv_xml = new abap.types.String({qualifiedName: "STRING"});
    this.if_ixml_istream$dtd_allowed = abap.Classes['IF_IXML_ISTREAM'].if_ixml_istream$dtd_allowed;
    this.if_ixml_istream$dtd_restricted = abap.Classes['IF_IXML_ISTREAM'].if_ixml_istream$dtd_restricted;
    this.if_ixml_istream$dtd_prohibited = abap.Classes['IF_IXML_ISTREAM'].if_ixml_istream$dtd_prohibited;
    this.if_ixml_istream$get_encoding = this.if_ixml_stream$get_encoding;
  }
  async if_ixml_stream$get_encoding(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ENCODING", RTTIName: "\\INTERFACE=IF_IXML_ENCODING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async constructor_(INPUT) {
    let iv_xml = INPUT?.iv_xml;
    if (iv_xml?.getQualifiedName === undefined || iv_xml.getQualifiedName() !== "STRING") { iv_xml = undefined; }
    if (iv_xml === undefined) { iv_xml = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_xml); }
    this.mv_xml.set(iv_xml);
    return this;
  }
  async if_ixml_istream$close() {
    return;
  }
  async if_ixml_istream$set_dtd_restriction(INPUT) {
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (INPUT === undefined || INPUT.level === undefined) {level = abap.Classes['IF_IXML_ISTREAM'].if_ixml_istream$dtd_restricted;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
  }
  async if_ixml_istream$get_dtd_restriction(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ISTREAM'] = lcl_istream;
lcl_istream.if_ixml_istream$dtd_allowed = new abap.types.Integer({qualifiedName: "I"});
lcl_istream.if_ixml_istream$dtd_allowed.set(0);
lcl_istream.if_ixml_istream$dtd_restricted = new abap.types.Integer({qualifiedName: "I"});
lcl_istream.if_ixml_istream$dtd_restricted.set(1);
lcl_istream.if_ixml_istream$dtd_prohibited = new abap.types.Integer({qualifiedName: "I"});
lcl_istream.if_ixml_istream$dtd_prohibited.set(2);
class lcl_stream_factory {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_STREAM_FACTORY';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_STREAM_FACTORY"];
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
  async if_ixml_stream_factory$create_ostream_uri(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});
    let public_id = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.public_id) {public_id.set(INPUT.public_id);}
    let system_id = INPUT?.system_id;
    if (system_id?.getQualifiedName === undefined || system_id.getQualifiedName() !== "STRING") { system_id = undefined; }
    if (system_id === undefined) { system_id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.system_id); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_stream_factory$create_ostream_itable(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});
    let table = INPUT?.table;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_stream_factory$create_istream_cstring(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return rval;
  }
  async if_ixml_stream_factory$create_ostream_cstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_OSTREAM']()).constructor_());
    stream.get().mv_string = INPUT.string;
    return stream;
  }
  async if_ixml_stream_factory$create_ostream_xstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM", RTTIName: "\\INTERFACE=IF_IXML_OSTREAM"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "XSTRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.string); }
    let lo_stream = new abap.types.ABAPObject({qualifiedName: "LCL_OSTREAM", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_OSTREAM"});
    lo_stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_OSTREAM']()).constructor_());
    stream.set(lo_stream);
    lo_stream.get().mv_hex.set(abap.builtin.abap_true);
    stream.get().mv_string = INPUT.string;
    return stream;
  }
  async if_ixml_stream_factory$create_istream_xstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "XSTRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.string); }
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_ISTREAM']()).constructor_({iv_xml: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({source: string, output: 1}))}));
    return stream;
  }
  async if_ixml_stream_factory$create_istream_string(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_ISTREAM']()).constructor_({iv_xml: string}));
    return stream;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_STREAM_FACTORY'] = lcl_stream_factory;
class lcl_parser {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_IXML-LCL_PARSER';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_PARSER"];
  static ATTRIBUTES = {"MI_ISTREAM": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_DOCUMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LC_REGEX_TAG": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": "X", "is_class": "X"},
  "LC_REGEX_ATTR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": "X", "is_class": "X"},
  "C_CDATA_LENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": "X", "is_class": "X"},
  "IF_IXML_PARSER~CO_NO_VALIDATION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_PARSER~CO_VALIDATE_IF_DTD": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"PARSE_ATTRIBUTES": {"visibility": "I", "parameters": {"II_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "IV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "StringType"}, "IS_MATCH": {"type": () => {return new abap.types.Structure({
  "line": new abap.types.Integer({qualifiedName: "I"}),
  "offset": new abap.types.Integer({qualifiedName: "I"}),
  "length": new abap.types.Integer({qualifiedName: "I"}),
  "submatches": abap.types.TableFactory.construct(new abap.types.Structure({
  "offset": new abap.types.Integer({qualifiedName: "I"}),
  "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});}, "is_optional": " ", "parm_kind": "I", "type_name": "StructureType"}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"ISTREAM": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}, "DOCUMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});}, "is_optional": " ", "parm_kind": "I", "type_name": "ObjectReferenceType"}}}};
  #mi_istream;
  #mi_document;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "parse_attributes": this.#parse_attributes.bind(this),
    };
    this.#mi_istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
    this.FRIENDS_ACCESS_INSTANCE["mi_istream"] = this.#mi_istream;
    this.#mi_document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});
    this.FRIENDS_ACCESS_INSTANCE["mi_document"] = this.#mi_document;
    this.if_ixml_parser$co_no_validation = abap.Classes['IF_IXML_PARSER'].if_ixml_parser$co_no_validation;
    this.if_ixml_parser$co_validate_if_dtd = abap.Classes['IF_IXML_PARSER'].if_ixml_parser$co_validate_if_dtd;
    this.lc_regex_tag = lcl_parser.lc_regex_tag;
    this.lc_regex_attr = lcl_parser.lc_regex_attr;
    this.c_cdata_length = lcl_parser.c_cdata_length;
  }
  async constructor_(INPUT) {
    let istream = INPUT?.istream;
    if (istream?.getQualifiedName === undefined || istream.getQualifiedName() !== "IF_IXML_ISTREAM") { istream = undefined; }
    if (istream === undefined) { istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"}).set(INPUT.istream); }
    let document = INPUT?.document;
    if (document?.getQualifiedName === undefined || document.getQualifiedName() !== "IF_IXML_DOCUMENT") { document = undefined; }
    if (document === undefined) { document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"}).set(INPUT.document); }
    this.#mi_istream.set(istream);
    this.#mi_document.set(document);
    return this;
  }
  async if_ixml_parser$set_validating(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let mode = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.mode) {mode.set(INPUT.mode);}
    abap.statements.assert(abap.compare.eq(mode, abap.Classes['IF_IXML_PARSER'].if_ixml_parser$co_no_validation));
    rval.set(abap.builtin.abap_true);
    return rval;
  }
  async if_ixml_parser$parse(INPUT) {
    let subrc = new abap.types.Integer({qualifiedName: "I"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    let lv_rest = new abap.types.String({qualifiedName: "STRING"});
    let lv_whitespace = new abap.types.String({qualifiedName: "STRING"});
    let lv_in_element = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_bom = new abap.types.Character(1, {});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_subset = new abap.types.Integer({qualifiedName: "I"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_namespace = new abap.types.String({qualifiedName: "STRING"});
    let lv_tag = new abap.types.String({qualifiedName: "STRING"});
    let ls_match = new abap.types.Structure({
    "line": new abap.types.Integer({qualifiedName: "I"}),
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"}),
    "submatches": abap.types.TableFactory.construct(new abap.types.Structure({
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let ls_submatch = new abap.types.Structure({
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
    let lo_parent = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE", RTTIName: "\\CLASS-POOL=CL_IXML\\CLASS=LCL_NODE"});
    await abap.statements.cast(lo_parent, (await this.#mi_document.get().if_ixml_document$get_root({node: 1})));
    stream.set(this.#mi_istream);
    lv_xml.set(stream.get().mv_xml);
    lv_whitespace.set((await abap.Classes['CL_ABAP_CHAR_UTILITIES'].get_simple_spaces_for_cur_cp({s_str: 1})));
    lv_bom.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].uccpi({uccp: new abap.types.Integer().set(65279), char: 1})));
    if (abap.compare.initial(lv_xml) === false && abap.compare.eq(lv_xml.getOffset({length: 1}), lv_bom)) {
      lv_xml.set(lv_xml.getOffset({offset: 1}));
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique316 = 1;
    while (abap.compare.initial(lv_xml) === false) {
      abap.builtin.sy.get().index.set(unique316++);
      lo_node.clear();
      if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(3, '<?*'))) {
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(2, '?>'), first: true, offset: lv_offset});
        abap.statements.assert(abap.compare.gt(lv_offset, abap.IntegerFactory.get(0)));
        lv_offset.set(abap.operators.add(lv_offset,abap.IntegerFactory.get(2)));
        lv_in_element.set(abap.builtin.abap_false);
      } else if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(10, '<!DOCTYPE*'))) {
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(1, '>'), first: true, offset: lv_offset});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(1, '['), first: true, offset: lv_subset});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) && abap.compare.lt(lv_subset, lv_offset)) {
          abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(2, ']>'), first: true, offset: lv_offset});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
          lv_offset.set(abap.operators.add(lv_offset,abap.IntegerFactory.get(2)));
        } else {
          lv_offset.set(abap.operators.add(lv_offset,abap.IntegerFactory.get(1)));
        }
        lv_in_element.set(abap.builtin.abap_false);
      } else if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(10, '<![CDATA[*'))) {
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(3, ']]>'), first: true, offset: lv_offset});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        lv_length.set(abap.operators.minus(lv_offset,lcl_parser.c_cdata_length));
        lv_value.set(lv_xml.getOffset({offset: lcl_parser.c_cdata_length}));
        lv_value.set(lv_value.getOffset({length: lv_length}));
        lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: lo_parent}));
        await lo_node.get().if_ixml_node$set_name({name: abap.CharacterFactory.get(5, '#text')});
        await lo_node.get().if_ixml_node$set_value({value: lv_value});
        lv_offset.set(abap.operators.add(lv_offset,abap.IntegerFactory.get(3)));
        lv_in_element.set(abap.builtin.abap_false);
      } else if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(5, '<!--*'))) {
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(3, '-->'), first: true, offset: lv_offset});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        lv_offset.set(abap.operators.add(lv_offset,abap.IntegerFactory.get(3)));
        lv_in_element.set(abap.builtin.abap_false);
      } else if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(2, '<*'))) {
        abap.statements.find(lv_xml, {regex: lcl_parser.lc_regex_tag, first: true, results: ls_match});
        abap.statements.assert(abap.compare.eq(ls_match.get().offset, abap.IntegerFactory.get(0)));
        lv_tag.set(lv_xml.getOffset({length: ls_match.get().length}));
        abap.statements.readTable(ls_match.get().submatches,{index: abap.IntegerFactory.get(1),
          into: ls_submatch});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        lv_name.set(lv_xml.getOffset({offset: ls_submatch.get().offset, length: ls_submatch.get().length}));
        if (abap.compare.cp(lv_xml, abap.CharacterFactory.get(3, '</*'))) {
          await abap.statements.cast(lo_parent, (await lo_parent.get().if_ixml_node$get_parent({val: 1})));
          lv_in_element.set(abap.builtin.abap_false);
        } else {
          lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: lo_parent}));
          if (abap.compare.ca(lv_name, abap.CharacterFactory.get(1, ':'))) {
            abap.statements.split({source: lv_name, at: abap.CharacterFactory.get(1, ':'), targets: [lv_namespace,lv_name]});
            await lo_node.get().if_ixml_node$set_namespace_prefix({val: lv_namespace});
          }
          await lo_node.get().if_ixml_node$set_name({name: lv_name});
          if (abap.compare.np(lv_tag, abap.CharacterFactory.get(3, '*/>'))) {
            lo_parent.set(lo_node);
            lv_in_element.set(abap.builtin.abap_true);
          } else {
            lv_in_element.set(abap.builtin.abap_false);
          }
        }
        await this.#parse_attributes({ii_node: lo_node, iv_xml: lv_xml, is_match: ls_match});
        lv_offset.set(ls_match.get().length);
      } else {
        abap.statements.find(lv_xml, {find: abap.CharacterFactory.get(1, '<'), first: true, offset: lv_offset});
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          lv_offset.set(abap.builtin.strlen({val: lv_xml}));
        }
        lv_value.set(lv_xml.getOffset({length: lv_offset}));
        lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: lo_parent}));
        await lo_node.get().if_ixml_node$set_name({name: abap.CharacterFactory.get(5, '#text')});
        await lo_node.get().if_ixml_node$set_value({value: (await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].unescape_value({iv_value: lv_value, rv_value: 1}))});
        lv_in_element.set(abap.builtin.abap_false);
      }
      lv_xml.set(lv_xml.getOffset({offset: lv_offset}));
      lv_rest.set(lv_xml);
      abap.statements.shift(lv_rest, {direction: 'LEFT',deletingLeading: lv_whitespace});
      if (abap.compare.initial(lv_rest) || abap.compare.eq(lv_rest.getOffset({length: 1}), abap.CharacterFactory.get(1, '<'))) {
        if (abap.compare.eq(lv_in_element, abap.builtin.abap_true) && abap.compare.cp(lv_rest, abap.CharacterFactory.get(3, '</*')) && abap.compare.ne(lv_rest, lv_xml)) {
          lv_in_element.set(abap.builtin.abap_false);
        } else {
          lv_xml.set(lv_rest);
        }
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return subrc;
  }
  async #parse_attributes(INPUT) {
    let ii_node = INPUT?.ii_node;
    if (ii_node?.getQualifiedName === undefined || ii_node.getQualifiedName() !== "IF_IXML_NODE") { ii_node = undefined; }
    if (ii_node === undefined) { ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"}).set(INPUT.ii_node); }
    let iv_xml = INPUT?.iv_xml;
    if (iv_xml?.getQualifiedName === undefined || iv_xml.getQualifiedName() !== "STRING") { iv_xml = undefined; }
    if (iv_xml === undefined) { iv_xml = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_xml); }
    let is_match = INPUT?.is_match;
    if (is_match?.getQualifiedName === undefined || is_match.getQualifiedName() !== "MATCH_RESULT") { is_match = undefined; }
    if (is_match === undefined) { is_match = new abap.types.Structure({
    "line": new abap.types.Integer({qualifiedName: "I"}),
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"}),
    "submatches": abap.types.TableFactory.construct(new abap.types.Structure({
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}).set(INPUT.is_match); }
    let ls_submatch = new abap.types.Structure({
    "offset": new abap.types.Integer({qualifiedName: "I"}),
    "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_dquoted = new abap.types.String({qualifiedName: "STRING"});
    let lv_squoted = new abap.types.String({qualifiedName: "STRING"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq(abap.builtin.lines({val: is_match.get().submatches}), abap.IntegerFactory.get(1))) {
      return;
    }
    lv_xml.set(iv_xml.getOffset({length: is_match.get().length}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique317 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique317++);
      abap.statements.find(lv_xml, {regex: lcl_parser.lc_regex_attr, first: true, offset: lv_offset, length: lv_length, submatches: [lv_name,lv_dquoted,lv_squoted]});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return;
      }
      if (abap.compare.initial(lv_dquoted)) {
        lv_value.set(lv_squoted);
      } else {
        lv_value.set(lv_dquoted);
      }
      li_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
      await li_node.get().if_ixml_node$set_name({name: lv_name});
      await li_node.get().if_ixml_node$set_value({value: (await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].unescape_value({iv_value: lv_value, rv_value: 1}))});
      await (await ii_node.get().if_ixml_node$get_attributes({map: 1})).get().if_ixml_named_node_map$set_named_item_ns({node: li_node});
      lv_offset.set(abap.operators.add(lv_offset,lv_length));
      lv_xml.set(lv_xml.getOffset({offset: lv_offset}));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_ixml_parser$set_normalizing(INPUT) {
    let normal = INPUT?.normal;
    if (normal?.getQualifiedName === undefined || normal.getQualifiedName() !== "ABAP_BOOL") { normal = undefined; }
    if (normal === undefined) { normal = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.normal); }
    return;
  }
  async if_ixml_parser$num_errors(INPUT) {
    let errors = new abap.types.Integer({qualifiedName: "I"});
    return errors;
    // removed by dead control flow

  }
  async if_ixml_parser$add_strip_space_element() {
    return;
  }
  async if_ixml_parser$get_error(INPUT) {
    let error = new abap.types.ABAPObject({qualifiedName: "IF_IXML_PARSE_ERROR", RTTIName: "\\INTERFACE=IF_IXML_PARSE_ERROR"});
    let index = INPUT?.index;
    if (index?.getQualifiedName === undefined || index.getQualifiedName() !== "I") { index = undefined; }
    if (index === undefined) { index = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.index); }
    let min_severity = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.min_severity) {min_severity.set(INPUT.min_severity);}
    if (INPUT === undefined || INPUT.min_severity === undefined) {min_severity = abap.Classes['IF_IXML_PARSE_ERROR'].if_ixml_parse_error$co_error;}
    return error;
    // removed by dead control flow

  }
}
abap.Classes['CLAS-CL_IXML-LCL_PARSER'] = lcl_parser;
lcl_parser.lc_regex_tag = new abap.types.String({qualifiedName: "STRING"});
lcl_parser.lc_regex_tag.set('<\\/?([\\w:.\\-]+)(\\s+[\\w:.\\-]+\\s*=\\s*("[^"]*"|\'[^\']*\'))*\\s*\\/?>');
lcl_parser.lc_regex_attr = new abap.types.String({qualifiedName: "STRING"});
lcl_parser.lc_regex_attr.set('([\\w:.\\-]+)\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')');
lcl_parser.c_cdata_length = new abap.types.Integer({qualifiedName: "I"});
lcl_parser.c_cdata_length.set(9);
lcl_parser.if_ixml_parser$co_no_validation = new abap.types.Integer({qualifiedName: "I"});
lcl_parser.if_ixml_parser$co_no_validation.set(0);
lcl_parser.if_ixml_parser$co_validate_if_dtd = new abap.types.Integer({qualifiedName: "I"});
lcl_parser.if_ixml_parser$co_validate_if_dtd.set(2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_cl_ixml_clas_locals_mjs.bundle.js.map