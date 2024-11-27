import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5 bg-primary text-light" }, _attrs))}><div class="container my-5 py-5 min-vh-100 justify-content-center"><div class="row justify-content-center align-items-center g-3 text-center"><h1>A melhor estrutura para voc\xEA</h1><p> Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens. </p></div><div class="row text-center justify-content-center align-items-center g-0 my-4"><div class="col-lg-3 col-md-6 col-sm-12 mb-4"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="text-lowercase">+ de 30.000</h3><p class="card-text">ALUNOS FORMADOS</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="text-lowercase">+ de 2000</h3><p class="card-text">ALUNOS ENCAMINHADOS</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="text-lowercase">+ de 85%</h3><p class="card-text">DOS ALUNOS NOS INDICAM</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4"><div class="card"><div class="card-body"><img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt=""><h3 class="text-lowercase">+ de 90%</h3><p class="card-text">DA APROVA\xC7\xC3O DOS PAIS</p></div></div></div></div><div class="text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/cursos",
    class: "btn btn-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Veja todos os cursos`);
      } else {
        return [
          createTextVNode("Veja todos os cursos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wins.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Wins-BfMTXwLz.mjs.map
