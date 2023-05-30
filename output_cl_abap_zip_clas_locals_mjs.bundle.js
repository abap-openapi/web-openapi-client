"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_zip_clas_locals_mjs"],{

/***/ "../output/cl_abap_zip.clas.locals.mjs":
/*!*********************************************!*\
  !*** ../output/cl_abap_zip.clas.locals.mjs ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_stream: () => (/* binding */ lcl_stream)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// cl_abap_zip.clas.locals_imp.abap
class lcl_stream {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_ZIP-LCL_STREAM';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"CRC32_MAP": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"APPEND": {"visibility": "U", "parameters": {"IV_XSTR": {"type": () => {return new abap.types.Hex();}, "is_optional": " "}}},
  "GET": {"visibility": "U", "parameters": {"RV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}},
  "APPEND_DATE": {"visibility": "U", "parameters": {"IV_DATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "is_optional": " "}}},
  "APPEND_TIME": {"visibility": "U", "parameters": {"IV_TIME": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "is_optional": " "}}},
  "APPEND_INT4": {"visibility": "U", "parameters": {"IV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "APPEND_INT2": {"visibility": "U", "parameters": {"IV_INT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "APPEND_CRC": {"visibility": "U", "parameters": {"RV_CRC": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "IV_XSTRING": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.crc32_map = lcl_stream.crc32_map;
    this.mv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async append(INPUT) {
    let iv_xstr = new abap.types.Hex();
    if (INPUT && INPUT.iv_xstr) {iv_xstr = INPUT.iv_xstr;}
    abap.statements.concatenate({source: [this.mv_xstr, iv_xstr], target: this.mv_xstr});
  }
  async get() {
    let rv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    rv_xstr.set(this.mv_xstr);
    return rv_xstr;
  }
  async append_date(INPUT) {
    let iv_date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.iv_date) {iv_date.set(INPUT.iv_date);}
  }
  async append_time(INPUT) {
    let iv_time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.iv_time) {iv_time.set(INPUT.iv_time);}
  }
  async append_int2(INPUT) {
    let iv_int = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}
    let lv_hex = new abap.types.Hex();
    lv_hex.set(iv_int);
    await this.append({iv_xstr: lv_hex});
  }
  async append_int4(INPUT) {
    let iv_int = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}
    let lv_hex = new abap.types.Hex({length: 2});
    lv_hex.set(iv_int);
    await this.append({iv_xstr: lv_hex});
  }
  async append_crc(INPUT) {
    let rv_crc = new abap.types.XString({qualifiedName: "XSTRING"});
    let iv_xstring = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.iv_xstring) {iv_xstring.set(INPUT.iv_xstring);}
    let magic_nr = new abap.types.Hex({length: 4});
    magic_nr.set('EDB88320');
    let mffffffff = new abap.types.Hex({length: 4});
    mffffffff.set('FFFFFFFF');
    let m7fffffff = new abap.types.Hex({length: 4});
    m7fffffff.set('7FFFFFFF');
    let m00ffffff = new abap.types.Hex({length: 4});
    m00ffffff.set('00FFFFFF');
    let m000000ff = new abap.types.Hex({length: 4});
    m000000ff.set('000000FF');
    let m000000 = new abap.types.Hex({length: 3});
    m000000.set('000000');
    let cindex = new abap.types.Hex({length: 4});
    let low_bit = new abap.types.Hex({length: 4});
    let len = new abap.types.Integer({qualifiedName: "I"});
    let nindex = new abap.types.Integer({qualifiedName: "I"});
    let crc = new abap.types.Hex({length: 4});
    crc.set(mffffffff);
    let x4 = new abap.types.Hex({length: 4});
    let idx = new abap.types.Hex({length: 4});
    if (abap.compare.eq(abap.builtin.xstrlen({val: lcl_stream.crc32_map}), new abap.types.Integer().set(0))) {
      const indexBackup1 = abap.builtin.sy.get().index.get();
      const unique71 = new abap.types.Integer().set(256).get();
      for (let unique72 = 0; unique72 < unique71; unique72++) {
        abap.builtin.sy.get().index.set(unique72 + 1);
        cindex.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));
        const indexBackup2 = abap.builtin.sy.get().index.get();
        const unique73 = new abap.types.Integer().set(8).get();
        for (let unique74 = 0; unique74 < unique73; unique74++) {
          abap.builtin.sy.get().index.set(unique74 + 1);
          low_bit.set(new abap.types.Character(8).set('00000001'));
          low_bit.set(abap.operators.bitand(cindex,low_bit));
          cindex.set(abap.operators.div(cindex,new abap.types.Integer().set(2)));
          cindex.set(abap.operators.bitand(cindex,m7fffffff));
          if (abap.compare.initial(low_bit) === false) {
            cindex.set(abap.operators.bitxor(cindex,magic_nr));
          }
        }
        abap.builtin.sy.get().index.set(indexBackup2);
        abap.statements.concatenate({source: [lcl_stream.crc32_map, cindex], target: lcl_stream.crc32_map});
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    }
    len.set(abap.builtin.xstrlen({val: iv_xstring}));
    const indexBackup3 = abap.builtin.sy.get().index.get();
    const unique75 = len.get();
    for (let unique76 = 0; unique76 < unique75; unique76++) {
      abap.builtin.sy.get().index.set(unique76 + 1);
      nindex.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));
      abap.statements.concatenate({source: [m000000, iv_xstring.getOffset({offset: nindex, length: 1})], target: idx});
      idx.set(abap.operators.bitand(abap.operators.bitxor(crc,idx),m000000ff));
      idx.set(abap.operators.multiply(idx,new abap.types.Integer().set(4)));
      x4.set(lcl_stream.crc32_map.getOffset({offset: idx, length: 4}));
      crc.set(abap.operators.div(crc,new abap.types.Integer().set(256)));
      crc.set(abap.operators.bitand(crc,m00ffffff));
      crc.set(abap.operators.bitxor(x4,crc));
    }
    abap.builtin.sy.get().index.set(indexBackup3);
    crc.set(abap.operators.bitxor(crc,mffffffff));
    rv_crc.set(crc);
    await this.append({iv_xstr: rv_crc});
    return rv_crc;
  }
}
abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM'] = lcl_stream;
lcl_stream.crc32_map = new abap.types.XString({qualifiedName: "XSTRING"});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_abap_zip_clas_locals_mjs.bundle.js.map