import { _ as _sfc_main$1 } from './Icon-5pRBvot5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wins",
  __ssrInlineRender: true,
  setup(__props) {
    const numeros = ref({
      alunosFormados: 0,
      alunosEncaminhados: 0,
      alunosIndicam: 0,
      aprovacaoPais: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5 bg-primary text-light align-content-center" }, _attrs))} data-v-31dfef9e><div class="container my-5 py-5 justify-content-center" data-v-31dfef9e><div class="row justify-content-center align-items-center g-3 text-center" data-v-31dfef9e><h1 data-v-31dfef9e>A melhor estrutura para voc\xEA</h1><p data-v-31dfef9e> Oferecemos a melhor estrutura e qualidade de ensino para transformar o futuro de nossos alunos. </p></div><div class="row text-center justify-content-center align-items-center my-4" data-v-31dfef9e><div class="col-lg-3 col-md-6 col-sm-12 mb-4" data-v-31dfef9e><div class="card" data-v-31dfef9e><div class="card-body" data-v-31dfef9e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-graduation",
        fontSize: "5em",
        class: "p-2 icon-wins"
      }, null, _parent));
      _push(`<h3 class="text-lowercase" data-v-31dfef9e>+ de ${ssrInterpolate(numeros.value.alunosFormados.toLocaleString())}</h3><p class="card-text" data-v-31dfef9e>ALUNOS FORMADOS</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4" data-v-31dfef9e><div class="card" data-v-31dfef9e><div class="card-body" data-v-31dfef9e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-rocket",
        fontSize: "5em",
        class: "p-2 icon-wins"
      }, null, _parent));
      _push(`<h3 class="text-lowercase" data-v-31dfef9e>+ de ${ssrInterpolate(numeros.value.alunosEncaminhados.toLocaleString())}</h3><p class="card-text" data-v-31dfef9e>ALUNOS ENCAMINHADOS</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4" data-v-31dfef9e><div class="card" data-v-31dfef9e><div class="card-body" data-v-31dfef9e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-heart",
        fontSize: "5em",
        class: "p-2 icon-wins"
      }, null, _parent));
      _push(`<h3 class="text-lowercase" data-v-31dfef9e>${ssrInterpolate(numeros.value.alunosIndicam)}%</h3><p class="card-text" data-v-31dfef9e>DOS ALUNOS NOS INDICAM</p></div></div></div><div class="col-lg-3 col-md-6 col-sm-12 mb-4" data-v-31dfef9e><div class="card" data-v-31dfef9e><div class="card-body" data-v-31dfef9e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-group",
        fontSize: "5em",
        class: "p-2 icon-wins"
      }, null, _parent));
      _push(`<h3 class="text-lowercase" data-v-31dfef9e>${ssrInterpolate(numeros.value.aprovacaoPais)}%</h3><p class="card-text" data-v-31dfef9e>DA APROVA\xC7\xC3O DOS PAIS</p></div></div></div></div><div class="text-center" data-v-31dfef9e>`);
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wins.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31dfef9e"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Wins-Bupx8_L5.mjs.map
