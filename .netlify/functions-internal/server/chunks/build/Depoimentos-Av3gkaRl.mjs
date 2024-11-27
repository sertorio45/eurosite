import { _ as __nuxt_component_2$1 } from './AtendimentoRapido-D1q6MgUw.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ButtonAtendimentoRapido = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-5 justify-content-center align-content-center bg-light"><div class="container py-5"><div class="row gy-5 gx-5"><div class="col-sm-12 col-md-6 align-content-center"><h1> Depoimentos </h1><p> Lorem Ipsum\xA0\xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos. </p>`);
  _push(ssrRenderComponent(_component_ButtonAtendimentoRapido, { valor: "Atendimento r\xE1pido" }, null, _parent));
  _push(`</div><div class="col-sm-12 col-md-6"><div id="testimonialCarousel" class="rounded p-5 bg-primary-degrade d-flex text-light carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><div class="d-flex"><div class="col-6 text-center d-flex justify-items-center align-items-center"><img src="https://placeholder.com/400x400" class="rounded-circle img-fluid"></div><div class="col-6"><h3>NOME ALUNO 1</h3><p>Depoimento do aluno 1</p></div></div></div><div class="carousel-item"><div class="d-flex"><div class="col-6 text-center d-flex justify-items-center align-items-center"><img src="https://placeholder.com/400x400" class="rounded-circle img-fluid"></div><div class="col-6"><h3>NOME ALUNO 2</h3><p>Depoimento do aluno 2</p></div></div></div><div class="carousel-item"><div class="d-flex"><div class="col-6 text-center d-flex justify-items-center align-items-center"><img src="https://placeholder.com/400x400" class="rounded-circle img-fluid"></div><div class="col-6"><h3>NOME ALUNO 3</h3><p>Depoimento do aluno 3</p></div></div></div></div><div style="${ssrRenderStyle({ "position": "absolute", "top": "50%", "left": "0", "transform": "translateY(-50%)" })}"><i class="bx bx-left-arrow-alt" style="${ssrRenderStyle({ "font-size": "2.5em", "color": "white" })}" data-bs-target="#testimonialCarousel" data-bs-slide="prev"></i></div><div style="${ssrRenderStyle({ "position": "absolute", "top": "50%", "right": "0", "transform": "translateY(-50%)" })}"><i class="bx bx-right-arrow-alt" style="${ssrRenderStyle({ "font-size": "2.5em", "color": "white" })}" data-bs-target="#testimonialCarousel" data-bs-slide="next"></i></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Depoimentos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Depoimentos-Av3gkaRl.mjs.map
