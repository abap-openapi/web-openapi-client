"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_abap_conv_codepage_clas_locals_mjs"],{

/***/ "../output/cl_abap_conv_codepage.clas.locals.mjs":
/*!*******************************************************!*\
  !*** ../output/cl_abap_conv_codepage.clas.locals.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lcl_in": () => (/* binding */ lcl_in),
/* harmony export */   "lcl_out": () => (/* binding */ lcl_out)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// cl_abap_conv_codepage.clas.locals_imp.abap
class lcl_in {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_IN"];
  async constructor_(INPUT) {
    this.INTERNAL_TYPE = lcl_in.INTERNAL_TYPE;
    this.IMPLEMENTED_INTERFACES = lcl_in.IMPLEMENTED_INTERFACES;
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_abap_conv_in$convert(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let source = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({input: source, data: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN'] = lcl_in;
class lcl_out {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_OUT"];
  async constructor_(INPUT) {
    this.INTERNAL_TYPE = lcl_out.INTERNAL_TYPE;
    this.IMPLEMENTED_INTERFACES = lcl_out.IMPLEMENTED_INTERFACES;
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_abap_conv_out$convert(INPUT) {
    let result = new abap.types.XString({qualifiedName: "XSTRING"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({data: source, buffer: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT'] = lcl_out;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_abap_conv_codepage_clas_locals_mjs.bundle.js.map