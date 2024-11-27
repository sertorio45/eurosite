import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import '@netlify/functions';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
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

const _sfc_main = {
  __name: "ui-kit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ed6f54e5><div class="container my-5" data-v-ed6f54e5><section id="tipografia" class="mb-5" data-v-ed6f54e5><h2 class="mb-4 text-center" data-v-ed6f54e5>Tipografia</h2><p class="text-center text-muted mb-4" data-v-ed6f54e5>Fonte utilizada: <strong data-v-ed6f54e5>Helvetica Neue</strong>, Arial, sans-serif</p><div data-v-ed6f54e5><h1 data-v-ed6f54e5>Heading 1 - h1</h1><h2 data-v-ed6f54e5>Heading 2 - h2</h2><h3 data-v-ed6f54e5>Heading 3 - h3</h3><h4 data-v-ed6f54e5>Heading 4 - h4</h4><h5 data-v-ed6f54e5>Heading 5 - h5</h5><h6 data-v-ed6f54e5>Heading 6 - h6</h6><p data-v-ed6f54e5>Este \xE9 um par\xE1grafo de exemplo, adequado para textos corridos. Utiliza a fonte principal do site.</p><p class="lead" data-v-ed6f54e5>Este \xE9 um par\xE1grafo com a classe <code data-v-ed6f54e5>.lead</code>, ideal para introdu\xE7\xF5es e destaques.</p></div></section><section id="cores" class="mb-5" data-v-ed6f54e5><h2 class="mb-4 text-center" data-v-ed6f54e5>Cores</h2><div class="row text-center" data-v-ed6f54e5><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-white rounded-3 shadow-sm bg-primary" data-v-ed6f54e5><h5 data-v-ed6f54e5>Prim\xE1ria</h5></div></div><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-white rounded-3 shadow-sm bg-secondary" data-v-ed6f54e5><h5 data-v-ed6f54e5>Secund\xE1ria</h5></div></div><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-white rounded-3 shadow-sm bg-success" data-v-ed6f54e5><h5 data-v-ed6f54e5>Sucesso</h5></div></div><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-white rounded-3 shadow-sm bg-danger" data-v-ed6f54e5><h5 data-v-ed6f54e5>Perigo</h5></div></div><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-dark rounded-3 shadow-sm bg-warning" data-v-ed6f54e5><h5 data-v-ed6f54e5>Aviso</h5></div></div><div class="col-lg-4 col-md-6 mb-4" data-v-ed6f54e5><div class="p-4 text-white rounded-3 shadow-sm bg-info" data-v-ed6f54e5><h5 data-v-ed6f54e5>Informa\xE7\xE3o</h5></div></div></div></section><section id="componentes" class="mb-5" data-v-ed6f54e5><h2 class="mb-4 text-center" data-v-ed6f54e5>Componentes Adicionais</h2><div class="text-center" data-v-ed6f54e5><button class="btn btn-primary me-2" data-v-ed6f54e5>Bot\xE3o Prim\xE1rio</button><button class="btn btn-secondary" data-v-ed6f54e5>Bot\xE3o Secund\xE1rio</button></div><div class="mt-4" data-v-ed6f54e5><div class="alert alert-primary" role="alert" data-v-ed6f54e5> Este \xE9 um alerta de exemplo. Utilize alertas para mensagens importantes. </div></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-kit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uiKit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed6f54e5"]]);

export { uiKit as default };
//# sourceMappingURL=ui-kit-CCsZqBcs.mjs.map
