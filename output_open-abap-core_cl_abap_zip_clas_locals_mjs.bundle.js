"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_abap_zip_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_abap_zip.clas.locals.mjs"
/*!************************************************************!*\
  !*** ../output/open-abap-core/cl_abap_zip.clas.locals.mjs ***!
  \************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_stream: () => (/* binding */ lcl_stream)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
// cl_abap_zip.clas.locals_imp.abap
class lcl_stream {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_ZIP-LCL_STREAM';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"CRC32_MAP": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "CRC32_MAP1": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "CRC32_MAP2": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "CRC32_MAP3": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"APPEND": {"visibility": "U", "parameters": {"IV_XSTR": {"type": () => {return new abap.types.Hex();}, "is_optional": " ", "parm_kind": "I", "type_name": "XSequenceType"}}},
  "GET": {"visibility": "U", "parameters": {"RV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "XStringType"}}},
  "APPEND_DATE": {"visibility": "U", "parameters": {"IV_DATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "is_optional": " ", "parm_kind": "I", "type_name": "DateType"}}},
  "APPEND_TIME": {"visibility": "U", "parameters": {"IV_TIME": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "is_optional": " ", "parm_kind": "I", "type_name": "TimeType"}}},
  "APPEND_INT4": {"visibility": "U", "parameters": {"IV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "APPEND_INT2": {"visibility": "U", "parameters": {"IV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "APPEND_CRC": {"visibility": "U", "parameters": {"RV_CRC": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "R", "type_name": "XStringType"}, "IV_LITTLE_ENDIAN": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " ", "parm_kind": "I", "type_name": "CharacterType"}, "IV_XSTRING": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "XStringType"}}},
  "READ_INT2": {"visibility": "U", "is_class": "X", "parameters": {"RV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "R", "type_name": "IntegerType"}, "IV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "XStringType"}, "IV_OFFSET": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}},
  "READ_INT4": {"visibility": "U", "is_class": "X", "parameters": {"RV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "R", "type_name": "IntegerType"}, "IV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " ", "parm_kind": "I", "type_name": "XStringType"}, "IV_OFFSET": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " ", "parm_kind": "I", "type_name": "IntegerType"}}}};
  #crc32_map;
  #crc32_map1;
  #crc32_map2;
  #crc32_map3;
  #mv_xstr;
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
      "append": this.append.bind(this),
      "get": this.get.bind(this),
      "append_date": this.append_date.bind(this),
      "append_time": this.append_time.bind(this),
      "append_int4": this.append_int4.bind(this),
      "append_int2": this.append_int2.bind(this),
      "append_crc": this.append_crc.bind(this),
    };
    this.crc32_map = lcl_stream.crc32_map;
    this.FRIENDS_ACCESS_INSTANCE["crc32_map"] = this.crc32_map;
    this.crc32_map1 = lcl_stream.crc32_map1;
    this.FRIENDS_ACCESS_INSTANCE["crc32_map1"] = this.crc32_map1;
    this.crc32_map2 = lcl_stream.crc32_map2;
    this.FRIENDS_ACCESS_INSTANCE["crc32_map2"] = this.crc32_map2;
    this.crc32_map3 = lcl_stream.crc32_map3;
    this.FRIENDS_ACCESS_INSTANCE["crc32_map3"] = this.crc32_map3;
    this.#mv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    this.FRIENDS_ACCESS_INSTANCE["mv_xstr"] = this.#mv_xstr;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async append(INPUT) {
    let iv_xstr = INPUT?.iv_xstr;
    abap.statements.concatenate({source: [this.#mv_xstr, iv_xstr], target: this.#mv_xstr, byteMode: true});
  }
  async read_int2(INPUT) {
    return lcl_stream.read_int2(INPUT);
  }
  static async read_int2(INPUT) {
    let rv_int = new abap.types.Integer({qualifiedName: "I"});
    let iv_xstr = INPUT?.iv_xstr;
    if (iv_xstr?.getQualifiedName === undefined || iv_xstr.getQualifiedName() !== "XSTRING") { iv_xstr = undefined; }
    if (iv_xstr === undefined) { iv_xstr = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.iv_xstr); }
    let iv_offset = INPUT?.iv_offset;
    if (iv_offset?.getQualifiedName === undefined || iv_offset.getQualifiedName() !== "I") { iv_offset = undefined; }
    if (iv_offset === undefined) { iv_offset = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_offset); }
    let lv_byte = new abap.types.Hex();
    let lv_val = new abap.types.Integer({qualifiedName: "I"});
    let lv_factor = new abap.types.Integer({qualifiedName: "I"});
    lv_factor.set(1);
    let lv_pos = new abap.types.Integer({qualifiedName: "I"});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique1 = new abap.types.Integer().set(abap.IntegerFactory.get(2)).get();
    for (let unique2 = 0; unique2 < unique1; unique2++) {
      abap.builtin.sy.get().index.set(unique2 + 1);
      lv_pos.set(abap.operators.minus(abap.operators.add(iv_offset,abap.builtin.sy.get().index),abap.IntegerFactory.get(1)));
      lv_byte.set(iv_xstr.getOffset({offset: lv_pos, length: 1}));
      lv_val.set(lv_byte);
      rv_int.set(abap.operators.add(rv_int,abap.operators.multiply(lv_val,lv_factor)));
      lv_factor.set(abap.operators.multiply(lv_factor,new abap.types.Integer().set(256)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return rv_int;
  }
  async read_int4(INPUT) {
    return lcl_stream.read_int4(INPUT);
  }
  static async read_int4(INPUT) {
    let rv_int = new abap.types.Integer({qualifiedName: "I"});
    let iv_xstr = INPUT?.iv_xstr;
    if (iv_xstr?.getQualifiedName === undefined || iv_xstr.getQualifiedName() !== "XSTRING") { iv_xstr = undefined; }
    if (iv_xstr === undefined) { iv_xstr = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.iv_xstr); }
    let iv_offset = INPUT?.iv_offset;
    if (iv_offset?.getQualifiedName === undefined || iv_offset.getQualifiedName() !== "I") { iv_offset = undefined; }
    if (iv_offset === undefined) { iv_offset = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_offset); }
    let lv_hex = new abap.types.Hex({length: 4});
    let lv_pos = new abap.types.Integer({qualifiedName: "I"});
    lv_pos.set(abap.operators.add(iv_offset,abap.IntegerFactory.get(3)));
    new abap.OffsetLength(lv_hex, {length: 1}).set(iv_xstr.getOffset({offset: lv_pos, length: 1}));
    lv_pos.set(abap.operators.add(iv_offset,abap.IntegerFactory.get(2)));
    new abap.OffsetLength(lv_hex, {offset: 1, length: 1}).set(iv_xstr.getOffset({offset: lv_pos, length: 1}));
    lv_pos.set(abap.operators.add(iv_offset,abap.IntegerFactory.get(1)));
    new abap.OffsetLength(lv_hex, {offset: 2, length: 1}).set(iv_xstr.getOffset({offset: lv_pos, length: 1}));
    new abap.OffsetLength(lv_hex, {offset: 3, length: 1}).set(iv_xstr.getOffset({offset: iv_offset, length: 1}));
    rv_int.set(lv_hex);
    return rv_int;
  }
  async get(INPUT) {
    let rv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    rv_xstr.set(this.#mv_xstr);
    return rv_xstr;
  }
  async append_date(INPUT) {
    let iv_date = INPUT?.iv_date;
    if (iv_date?.getQualifiedName === undefined || iv_date.getQualifiedName() !== "D") { iv_date = undefined; }
    if (iv_date === undefined) { iv_date = new abap.types.Date({qualifiedName: "D"}).set(INPUT.iv_date); }
    await this.append_int2({iv_int: abap.operators.add(abap.operators.add(abap.operators.multiply(abap.operators.minus(iv_date.getOffset({length: 4}),new abap.types.Integer().set(1980)),new abap.types.Integer().set(512)),abap.operators.multiply(iv_date.getOffset({offset: 4, length: 2}),abap.IntegerFactory.get(32))),iv_date.getOffset({offset: 6, length: 2}))});
  }
  async append_time(INPUT) {
    let iv_time = INPUT?.iv_time;
    if (iv_time?.getQualifiedName === undefined || iv_time.getQualifiedName() !== "T") { iv_time = undefined; }
    if (iv_time === undefined) { iv_time = new abap.types.Time({qualifiedName: "T"}).set(INPUT.iv_time); }
    await this.append_int2({iv_int: abap.operators.add(abap.operators.add(abap.operators.multiply(iv_time.getOffset({length: 2}),new abap.types.Integer().set(2048)),abap.operators.multiply(iv_time.getOffset({offset: 2, length: 2}),abap.IntegerFactory.get(32))),abap.operators.div(iv_time.getOffset({offset: 4, length: 2}),abap.IntegerFactory.get(2)))});
  }
  async append_int2(INPUT) {
    let iv_int = INPUT?.iv_int;
    if (iv_int?.getQualifiedName === undefined || iv_int.getQualifiedName() !== "I") { iv_int = undefined; }
    if (iv_int === undefined) { iv_int = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_int); }
    let lv_hex = new abap.types.Hex({length: 2});
    lv_hex.set(iv_int);
    abap.statements.shift(lv_hex, {direction: 'LEFT',circular: true,mode: 'BYTE'});
    await this.append({iv_xstr: lv_hex});
  }
  async append_int4(INPUT) {
    let iv_int = INPUT?.iv_int;
    if (iv_int?.getQualifiedName === undefined || iv_int.getQualifiedName() !== "I") { iv_int = undefined; }
    if (iv_int === undefined) { iv_int = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_int); }
    let lv_hex = new abap.types.Hex({length: 4});
    lv_hex.set(iv_int);
    abap.statements.concatenate({source: [lv_hex.getOffset({offset: 3, length: 1}), lv_hex.getOffset({offset: 2, length: 1}), lv_hex.getOffset({offset: 1, length: 1}), lv_hex.getOffset({length: 1})], target: lv_hex, byteMode: true});
    await this.append({iv_xstr: lv_hex});
  }
  async append_crc(INPUT) {
    let rv_crc = new abap.types.XString({qualifiedName: "XSTRING"});
    let iv_little_endian = INPUT?.iv_little_endian;
    if (iv_little_endian?.getQualifiedName === undefined || iv_little_endian.getQualifiedName() !== "ABAP_BOOL") { iv_little_endian = undefined; }
    if (iv_little_endian === undefined) { iv_little_endian = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_little_endian); }
    let iv_xstring = INPUT?.iv_xstring;
    if (iv_xstring?.getQualifiedName === undefined || iv_xstring.getQualifiedName() !== "XSTRING") { iv_xstring = undefined; }
    if (iv_xstring === undefined) { iv_xstring = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.iv_xstring); }
    let magic_nr = new abap.types.Hex({length: 4});
    magic_nr.set('EDB88320');
    let mffffffff = new abap.types.Hex({length: 4});
    mffffffff.set('FFFFFFFF');
    let m7fffffff = new abap.types.Hex({length: 4});
    m7fffffff.set('7FFFFFFF');
    let cindex = new abap.types.Hex({length: 4});
    let low_bit = new abap.types.Hex({length: 4});
    let len = new abap.types.Integer({qualifiedName: "I"});
    let words = new abap.types.Integer({qualifiedName: "I"});
    let offset = new abap.types.Integer({qualifiedName: "I"});
    let idx = new abap.types.Integer({qualifiedName: "I"});
    let crc = new abap.types.Hex({length: 4});
    crc.set(mffffffff);
    let x4 = new abap.types.Hex({length: 4});
    let x1 = new abap.types.Hex();
    if (abap.compare.eq(abap.builtin.xstrlen({val: lcl_stream.crc32_map}), abap.IntegerFactory.get(0))) {
      const indexBackup1 = abap.builtin.sy.get().index.get();
      const unique3 = new abap.types.Integer().set(new abap.types.Integer().set(256)).get();
      for (let unique4 = 0; unique4 < unique3; unique4++) {
        abap.builtin.sy.get().index.set(unique4 + 1);
        cindex.set(abap.operators.minus(abap.builtin.sy.get().index,abap.IntegerFactory.get(1)));
        const indexBackup2 = abap.builtin.sy.get().index.get();
        const unique5 = new abap.types.Integer().set(abap.IntegerFactory.get(8)).get();
        for (let unique6 = 0; unique6 < unique5; unique6++) {
          abap.builtin.sy.get().index.set(unique6 + 1);
          low_bit.set(abap.CharacterFactory.get(8, '00000001'));
          low_bit.set(abap.operators.bitand(cindex,low_bit));
          cindex.set(abap.operators.div(cindex,abap.IntegerFactory.get(2)));
          cindex.set(abap.operators.bitand(cindex,m7fffffff));
          if (abap.compare.initial(low_bit) === false) {
            cindex.set(abap.operators.bitxor(cindex,magic_nr));
          }
        }
        abap.builtin.sy.get().index.set(indexBackup2);
        abap.statements.concatenate({source: [lcl_stream.crc32_map, cindex.getOffset({offset: 3, length: 1}), cindex.getOffset({offset: 2, length: 1}), cindex.getOffset({offset: 1, length: 1}), cindex.getOffset({length: 1})], target: lcl_stream.crc32_map, byteMode: true});
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      const indexBackup3 = abap.builtin.sy.get().index.get();
      const unique7 = new abap.types.Integer().set(new abap.types.Integer().set(256)).get();
      for (let unique8 = 0; unique8 < unique7; unique8++) {
        abap.builtin.sy.get().index.set(unique8 + 1);
        idx.set(abap.operators.multiply(abap.operators.minus(abap.builtin.sy.get().index,abap.IntegerFactory.get(1)),abap.IntegerFactory.get(4)));
        x4.set(lcl_stream.crc32_map.getOffset({offset: idx, length: 4}));
        idx.set(abap.operators.multiply(x4.getOffset({length: 1}),abap.IntegerFactory.get(4)));
        x4.set(abap.operators.bitxor(x4.getOffset({offset: 1, length: 3}),lcl_stream.crc32_map.getOffset({offset: idx, length: 4})));
        abap.statements.concatenate({source: [lcl_stream.crc32_map1, x4], target: lcl_stream.crc32_map1, byteMode: true});
        idx.set(abap.operators.multiply(x4.getOffset({length: 1}),abap.IntegerFactory.get(4)));
        x4.set(abap.operators.bitxor(x4.getOffset({offset: 1, length: 3}),lcl_stream.crc32_map.getOffset({offset: idx, length: 4})));
        abap.statements.concatenate({source: [lcl_stream.crc32_map2, x4], target: lcl_stream.crc32_map2, byteMode: true});
        idx.set(abap.operators.multiply(x4.getOffset({length: 1}),abap.IntegerFactory.get(4)));
        x4.set(abap.operators.bitxor(x4.getOffset({offset: 1, length: 3}),lcl_stream.crc32_map.getOffset({offset: idx, length: 4})));
        abap.statements.concatenate({source: [lcl_stream.crc32_map3, x4], target: lcl_stream.crc32_map3, byteMode: true});
      }
      abap.builtin.sy.get().index.set(indexBackup3);
    }
    len.set(abap.builtin.xstrlen({val: iv_xstring}));
    words.set(abap.operators.div(len,abap.IntegerFactory.get(4)));
    const indexBackup4 = abap.builtin.sy.get().index.get();
    const unique9 = new abap.types.Integer().set(words).get();
    for (let unique10 = 0; unique10 < unique9; unique10++) {
      abap.builtin.sy.get().index.set(unique10 + 1);
      crc.set(abap.operators.bitxor(crc,iv_xstring.getOffset({offset: offset, length: 4})));
      idx.set(abap.operators.multiply(crc.getOffset({length: 1}),abap.IntegerFactory.get(4)));
      x4.set(lcl_stream.crc32_map3.getOffset({offset: idx, length: 4}));
      idx.set(abap.operators.multiply(crc.getOffset({offset: 1, length: 1}),abap.IntegerFactory.get(4)));
      x4.set(abap.operators.bitxor(x4,lcl_stream.crc32_map2.getOffset({offset: idx, length: 4})));
      idx.set(abap.operators.multiply(crc.getOffset({offset: 2, length: 1}),abap.IntegerFactory.get(4)));
      x4.set(abap.operators.bitxor(x4,lcl_stream.crc32_map1.getOffset({offset: idx, length: 4})));
      idx.set(abap.operators.multiply(crc.getOffset({offset: 3, length: 1}),abap.IntegerFactory.get(4)));
      crc.set(abap.operators.bitxor(x4,lcl_stream.crc32_map.getOffset({offset: idx, length: 4})));
      offset.set(abap.operators.add(offset,abap.IntegerFactory.get(4)));
    }
    abap.builtin.sy.get().index.set(indexBackup4);
    len.set(abap.operators.minus(len,offset));
    const indexBackup5 = abap.builtin.sy.get().index.get();
    const unique11 = new abap.types.Integer().set(len).get();
    for (let unique12 = 0; unique12 < unique11; unique12++) {
      abap.builtin.sy.get().index.set(unique12 + 1);
      x1.set(abap.operators.bitxor(crc.getOffset({length: 1}),iv_xstring.getOffset({offset: offset, length: 1})));
      idx.set(abap.operators.multiply(x1,abap.IntegerFactory.get(4)));
      crc.set(abap.operators.bitxor(crc.getOffset({offset: 1, length: 3}),lcl_stream.crc32_map.getOffset({offset: idx, length: 4})));
      offset.set(abap.operators.add(offset,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup5);
    crc.set(abap.operators.bitxor(crc,mffffffff));
    if (abap.compare.eq(iv_little_endian, abap.builtin.abap_false)) {
      abap.statements.concatenate({source: [crc.getOffset({offset: 3, length: 1}), crc.getOffset({offset: 2, length: 1}), crc.getOffset({offset: 1, length: 1}), crc.getOffset({length: 1})], target: crc, byteMode: true});
    }
    rv_crc.set(crc);
    await this.append({iv_xstr: rv_crc});
    return rv_crc;
  }
}
abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM'] = lcl_stream;
lcl_stream.crc32_map = new abap.types.XString({qualifiedName: "XSTRING"});
lcl_stream.crc32_map1 = new abap.types.XString({qualifiedName: "XSTRING"});
lcl_stream.crc32_map2 = new abap.types.XString({qualifiedName: "XSTRING"});
lcl_stream.crc32_map3 = new abap.types.XString({qualifiedName: "XSTRING"});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_abap_zip_clas_locals_mjs.bundle.js.map