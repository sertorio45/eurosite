import { _ as _sfc_main$1 } from './NuxtImg-CP6STrL9.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="my-5 py-5"><div class="container"><div class="row"><div class="col-md-3 col-sm-12"><h2>MOTIVOS PARA ESCOLHER A EURO ANGLO</h2><p>Lorem Ipsum\xA0\xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor </p>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "img/girl.webp",
    alt: "",
    class: "girl-img",
    width: "500px"
  }, null, _parent));
  _push(`</div><div class="col-md-6 col-sm-12 container-motivos"><div class="row text-center g-4"><div class="col-6"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="h5 fw-bold">Parceria com grandes empresas</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="h5 fw-bold">Material did\xE1tico atualizado</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="h5 fw-bold">Aplique o que voc\xEA aprendeu</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="h5 fw-bold">Mais de quinze anos de hist\xF3ria</h3></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Motivos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Motivos-BLKyMOFF.mjs.map
