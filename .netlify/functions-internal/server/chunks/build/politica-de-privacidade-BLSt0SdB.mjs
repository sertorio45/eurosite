import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'mysql2/promise';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/politica-de-privacidade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const politicaDePrivacidade = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { politicaDePrivacidade as default };
//# sourceMappingURL=politica-de-privacidade-BLSt0SdB.mjs.map
