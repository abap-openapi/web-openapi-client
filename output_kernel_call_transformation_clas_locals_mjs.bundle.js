"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_kernel_call_transformation_clas_locals_mjs"],{

/***/ "../output/kernel_call_transformation.clas.locals.mjs":
/*!************************************************************!*\
  !*** ../output/kernel_call_transformation.clas.locals.mjs ***!
  \************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lcl_data_to_xml": () => (/* binding */ lcl_data_to_xml)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// kernel_call_transformation.clas.locals_imp.abap
class lcl_data_to_xml {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async run(INPUT) {
    return lcl_data_to_xml.run(INPUT);
  }
  static async run(INPUT) {
    let rv_xml = new abap.types.String({qualifiedName: "STRING"});
    let iv_ref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
    let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let lo_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let lt_comps = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let ls_compo = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let lv_ref = new abap.types.DataReference(new abap.types.Character(4));
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_table_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character(4), {"withHeader":false}));
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).dereference()})));
    let unique117 = lo_type.get().kind;
    if (abap.compare.eq(unique117, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await abap.statements.cast(lo_struc, lo_type);
      lt_comps.set((await lo_struc.get().get_components()));
      abap.statements.assign({target: fs_any_, source: (iv_ref).dereference()});
      for await (const unique118 of abap.statements.loop(lt_comps)) {
        ls_compo.set(unique118);
        abap.statements.assign({component: ls_compo.get().name, target: fs_field_, source: fs_any_});
        lv_ref.assign(fs_field_.getPointer());
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(abap.builtin.to_upper({val: ls_compo.get().name}))}>`)));
        rv_xml.set(abap.operators.concat(rv_xml,(await this.run({iv_ref: lv_ref}))));
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`</${abap.templateFormatting(abap.builtin.to_upper({val: ls_compo.get().name}))}>`)));
      }
    } else if (abap.compare.eq(unique117, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      rv_xml.set(abap.operators.concat(rv_xml,(iv_ref).dereference()));
    } else if (abap.compare.eq(unique117, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      abap.statements.assign({target: fs_table_, source: (iv_ref).dereference()});
      for await (const unique119 of abap.statements.loop(fs_table_)) {
        fs_any_.assign(unique119);
        lv_ref.assign(fs_any_.getPointer());
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<item>`)));
        rv_xml.set(abap.operators.concat(rv_xml,(await this.run({iv_ref: lv_ref}))));
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`</item>`)));
      }
    } else {
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(20).set('todo,lcl_data_to_xml')));
    }
    return rv_xml;
  }
}
abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_DATA_TO_XML'] = lcl_data_to_xml;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_kernel_call_transformation_clas_locals_mjs.bundle.js.map