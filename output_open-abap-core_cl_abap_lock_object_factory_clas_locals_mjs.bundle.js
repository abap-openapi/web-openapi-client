"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_open-abap-core_cl_abap_lock_object_factory_clas_locals_mjs"],{

/***/ "../output/open-abap-core/cl_abap_lock_object_factory.clas.locals.mjs"
/*!****************************************************************************!*\
  !*** ../output/open-abap-core/cl_abap_lock_object_factory.clas.locals.mjs ***!
  \****************************************************************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_lock_object: () => (/* binding */ lcl_lock_object)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/open-abap-core/cx_root.clas.mjs"));
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_0() { return new abap.types.Structure({
"write_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"shared_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"exclusive_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"optimistic_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"promote_optimistic_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"check_write_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"check_shared_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"check_exclusive_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"}),
"check_promote_optimistic_lock": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"})}, undefined, undefined, {}, {}); }
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_1() { return new abap.types.Structure({
"no_update_program": new abap.types.Numc({qualifiedName: "if_abap_lock_object=>tv_scope"}),
"update_program": new abap.types.Numc({qualifiedName: "if_abap_lock_object=>tv_scope"}),
"interactive_and_update_program": new abap.types.Numc({qualifiedName: "if_abap_lock_object=>tv_scope"})}, undefined, undefined, {}, {}); }
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_2() { return new abap.types.Structure({
"yes": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_synchronous"}),
"no": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_synchronous"})}, undefined, undefined, {}, {}); }
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_3() { return new abap.types.Structure({
"no": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_wait"}),
"yes": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_wait"})}, undefined, undefined, {}, {}); }
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_5() { return abap.types.TableFactory.construct(new abap.types.Structure({
"table_name": new abap.types.Character(30, {"qualifiedName":"if_abap_lock_object=>tv_table_name","ddicName":"TABNAME","description":"TABNAME"}),
"mode": new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_mode"})}, "if_abap_lock_object=>ts_table_mode", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_NAME"]},"secondary":[]}, "if_abap_lock_object=>tt_table_mode"); }
function $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_7() { return abap.types.TableFactory.construct(new abap.types.Structure({
"name": new abap.types.Character(30, {"qualifiedName":"if_abap_lock_object=>tv_parameter_name"}),
"value": new abap.types.DataReference(new abap.types.Character(4))}, "if_abap_lock_object=>ts_parameter", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "if_abap_lock_object=>tt_parameter"); }
// cl_abap_lock_object_factory.clas.locals_imp.abap
class lcl_lock_object {
  static STATIC_SUPER = undefined;
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_LOCK_OBJECT_FACTORY-LCL_LOCK_OBJECT';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_LOCK_OBJECT"];
  static ATTRIBUTES = {"IF_ABAP_LOCK_OBJECT~CS_MODE": {"type": () => {return $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_0();}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_ABAP_LOCK_OBJECT~CS_SCOPE": {"type": () => {return $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_1();}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_ABAP_LOCK_OBJECT~CS_SYNCHRONOUS": {"type": () => {return $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_2();}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_ABAP_LOCK_OBJECT~CS_WAIT": {"type": () => {return $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_3();}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.if_abap_lock_object$cs_mode = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_mode;
    this.if_abap_lock_object$cs_scope = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_scope;
    this.if_abap_lock_object$cs_synchronous = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_synchronous;
    this.if_abap_lock_object$cs_wait = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_wait;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_abap_lock_object$enqueue(INPUT) {
    let it_table_mode = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_5();
    if (INPUT && INPUT.it_table_mode) {it_table_mode.set(INPUT.it_table_mode);}
    let it_parameter = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_7();
    if (INPUT && INPUT.it_parameter) {it_parameter.set(INPUT.it_parameter);}
    let _scope = new abap.types.Numc({qualifiedName: "if_abap_lock_object=>tv_scope"});
    if (INPUT && INPUT._scope) {_scope.set(INPUT._scope);}
    if (INPUT === undefined || INPUT._scope === undefined) {_scope = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_scope.get().update_program;}
    let _wait = new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_wait"});
    if (INPUT && INPUT._wait) {_wait.set(INPUT._wait);}
    if (INPUT === undefined || INPUT._wait === undefined) {_wait = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_wait.get().no;}
    return;
  }
  async if_abap_lock_object$dequeue(INPUT) {
    let it_table_mode = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_5();
    if (INPUT && INPUT.it_table_mode) {it_table_mode.set(INPUT.it_table_mode);}
    let it_parameter = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_7();
    if (INPUT && INPUT.it_parameter) {it_parameter.set(INPUT.it_parameter);}
    let _scope = new abap.types.Numc({qualifiedName: "if_abap_lock_object=>tv_scope"});
    if (INPUT && INPUT._scope) {_scope.set(INPUT._scope);}
    if (INPUT === undefined || INPUT._scope === undefined) {_scope = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_scope.get().interactive_and_update_program;}
    let _synchronous = new abap.types.Character(1, {"qualifiedName":"if_abap_lock_object=>tv_synchronous"});
    if (INPUT && INPUT._synchronous) {_synchronous.set(INPUT._synchronous);}
    if (INPUT === undefined || INPUT._synchronous === undefined) {_synchronous = abap.Classes['IF_ABAP_LOCK_OBJECT'].if_abap_lock_object$cs_synchronous.get().no;}
    return;
  }
}
abap.Classes['CLAS-CL_ABAP_LOCK_OBJECT_FACTORY-LCL_LOCK_OBJECT'] = lcl_lock_object;
lcl_lock_object.if_abap_lock_object$cs_mode = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_0();
lcl_lock_object.if_abap_lock_object$cs_mode.get().write_lock.set('E');
lcl_lock_object.if_abap_lock_object$cs_mode.get().shared_lock.set('S');
lcl_lock_object.if_abap_lock_object$cs_mode.get().exclusive_lock.set('X');
lcl_lock_object.if_abap_lock_object$cs_mode.get().optimistic_lock.set('O');
lcl_lock_object.if_abap_lock_object$cs_mode.get().promote_optimistic_lock.set('R');
lcl_lock_object.if_abap_lock_object$cs_mode.get().check_write_lock.set('V');
lcl_lock_object.if_abap_lock_object$cs_mode.get().check_shared_lock.set('W');
lcl_lock_object.if_abap_lock_object$cs_mode.get().check_exclusive_lock.set('U');
lcl_lock_object.if_abap_lock_object$cs_mode.get().check_promote_optimistic_lock.set('C');
lcl_lock_object.if_abap_lock_object$cs_scope = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_1();
lcl_lock_object.if_abap_lock_object$cs_scope.get().no_update_program.set('1');
lcl_lock_object.if_abap_lock_object$cs_scope.get().update_program.set('2');
lcl_lock_object.if_abap_lock_object$cs_scope.get().interactive_and_update_program.set('3');
lcl_lock_object.if_abap_lock_object$cs_synchronous = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_2();
lcl_lock_object.if_abap_lock_object$cs_synchronous.get().yes.set('X');
lcl_lock_object.if_abap_lock_object$cs_synchronous.get().no.set('');
lcl_lock_object.if_abap_lock_object$cs_wait = $t_Y2xfYWJhcF9sb2NrX29iamVjdF9mYWN0b3J5LmNsYXMubG9jYWxzLm1qcw_3();
lcl_lock_object.if_abap_lock_object$cs_wait.get().no.set('');
lcl_lock_object.if_abap_lock_object$cs_wait.get().yes.set('X');

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }

}]);
//# sourceMappingURL=output_open-abap-core_cl_abap_lock_object_factory_clas_locals_mjs.bundle.js.map