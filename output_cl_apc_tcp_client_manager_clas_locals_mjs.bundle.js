"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["output_cl_apc_tcp_client_manager_clas_locals_mjs"],{

/***/ "../output/cl_apc_tcp_client_manager.clas.locals.mjs":
/*!***********************************************************!*\
  !*** ../output/cl_apc_tcp_client_manager.clas.locals.mjs ***!
  \***********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_client: () => (/* binding */ lcl_client),
/* harmony export */   lcl_message: () => (/* binding */ lcl_message)
/* harmony export */ });
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "../output/cx_root.clas.mjs"));
// cl_apc_tcp_client_manager.clas.locals_imp.abap
class lcl_message {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE';
  static IMPLEMENTED_INTERFACES = ["IF_APC_WSP_MESSAGE"];
  static ATTRIBUTES = {"MV_DATA": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mv_data = new abap.types.XString({qualifiedName: "XSTRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_apc_wsp_message$get_binary() {
    let rv_binary = new abap.types.XString({qualifiedName: "XSTRING"});
    rv_binary.set(this.mv_data);
    return rv_binary;
  }
  async if_apc_wsp_message$get_text() {
    let r_message = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.CharacterFactory.get(4, 'todo')));
    return r_message;
  }
  async if_apc_wsp_message$set_binary(INPUT) {
    let iv_binary = INPUT?.iv_binary;
    this.mv_data.set(iv_binary);
  }
}
abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE'] = lcl_message;
class lcl_client {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT';
  static IMPLEMENTED_INTERFACES = ["IF_APC_WSP_CLIENT","IF_APC_WSP_MESSAGE_MANAGER"];
  static ATTRIBUTES = {"MV_HOST": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_PORT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_HANDLER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER", RTTIName: "\\INTERFACE=IF_APC_WSP_EVENT_HANDLER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_PROTOCOL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_HOST": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_PORT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IO_HANDLER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER", RTTIName: "\\INTERFACE=IF_APC_WSP_EVENT_HANDLER"});}, "is_optional": " "}, "IV_PROTOCOL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.mv_host = new abap.types.String({qualifiedName: "STRING"});
    this.mv_port = new abap.types.Integer({qualifiedName: "I"});
    this.mo_handler = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER", RTTIName: "\\INTERFACE=IF_APC_WSP_EVENT_HANDLER"});
    this.mv_protocol = new abap.types.Integer({qualifiedName: "I"});
  }
  async constructor_(INPUT) {
    let iv_host = INPUT?.iv_host;
    if (iv_host?.getQualifiedName === undefined || iv_host.getQualifiedName() !== "STRING") { iv_host = undefined; }
    if (iv_host === undefined) { iv_host = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_host); }
    let iv_port = INPUT?.iv_port;
    if (iv_port?.getQualifiedName === undefined || iv_port.getQualifiedName() !== "I") { iv_port = undefined; }
    if (iv_port === undefined) { iv_port = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_port); }
    let io_handler = INPUT?.io_handler;
    if (io_handler?.getQualifiedName === undefined || io_handler.getQualifiedName() !== "IF_APC_WSP_EVENT_HANDLER") { io_handler = undefined; }
    if (io_handler === undefined) { io_handler = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER", RTTIName: "\\INTERFACE=IF_APC_WSP_EVENT_HANDLER"}).set(INPUT.io_handler); }
    let iv_protocol = INPUT?.iv_protocol;
    if (iv_protocol?.getQualifiedName === undefined || iv_protocol.getQualifiedName() !== "I") { iv_protocol = undefined; }
    if (iv_protocol === undefined) { iv_protocol = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_protocol); }
    abap.statements.assert(abap.compare.initial(iv_host) === false);
    abap.statements.assert(abap.compare.initial(iv_port) === false);
    abap.statements.assert(abap.compare.initial(io_handler) === false);
    this.mv_host.set(iv_host);
    this.mv_port.set(iv_port);
    this.mo_handler.set(io_handler);
    this.mv_protocol.set(iv_protocol);
    return this;
  }
  async if_apc_wsp_client$connect() {
    let lv_tls = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    lv_tls.set(abap.builtin.boolc(abap.compare.eq(this.mv_protocol, abap.Classes['CL_APC_TCP_CLIENT_MANAGER'].co_protocol_type_tcps)));
    const connect = lv_tls.get() === "X" ? await __webpack_require__.e(/*! import() */ "_9db4").then(__webpack_require__.t.bind(__webpack_require__, /*! tls */ "?9db4", 19)) : await __webpack_require__.e(/*! import() */ "_4f35").then(__webpack_require__.t.bind(__webpack_require__, /*! net */ "?4f35", 19));
    this.client = connect.connect({ port: this.mv_port.get(), host: this.mv_host.get(), servername: this.mv_host.get()}, () => {this.mo_handler.get().if_apc_wsp_event_handler$on_open();});
    this.client.on("data", async (data) => {
        const msg = await (new lcl_message().constructor_());
        await msg.if_apc_wsp_message$set_binary({iv_binary: data.toString("hex").toUpperCase()});
        await this.mo_handler.get().if_apc_wsp_event_handler$on_message({i_message: msg});
    });
    this.client.on("end",   async () => {this.mo_handler.get().if_apc_wsp_event_handler$on_close({"i_reason": "connection closed"});});
    this.client.on("error", async (e) => {console.dir("IF_APC_WSP_CLIENT~CONNECT"); console.dir(e); this.mo_handler.get().if_apc_wsp_event_handler$on_error({"i_reason": e.toString()});});
    await new Promise(resolve => this.client.once("connect", resolve));
  }
  async if_apc_wsp_client$close() {
    this.client.destroy();
  }
  async if_apc_wsp_client$get_message_manager() {
    let ri_manager = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE_MANAGER", RTTIName: "\\INTERFACE=IF_APC_WSP_MESSAGE_MANAGER"});
    ri_manager.set(this.me);
    return ri_manager;
  }
  async if_apc_wsp_message_manager$create_message() {
    let ri_message = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE", RTTIName: "\\INTERFACE=IF_APC_WSP_MESSAGE"});
    ri_message.set(await (new abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE']()).constructor_());
    return ri_message;
  }
  async if_apc_wsp_message_manager$send(INPUT) {
    let ii_message = INPUT?.ii_message;
    if (ii_message?.getQualifiedName === undefined || ii_message.getQualifiedName() !== "IF_APC_WSP_MESSAGE") { ii_message = undefined; }
    if (ii_message === undefined) { ii_message = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE", RTTIName: "\\INTERFACE=IF_APC_WSP_MESSAGE"}).set(INPUT.ii_message); }
    const val = await ii_message.get().if_apc_wsp_message$get_binary();
    this.client.write(Buffer.from(val.get(), "hex"), "binary");
  }
}
abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT'] = lcl_client;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_apc_tcp_client_manager_clas_locals_mjs.bundle.js.map