import { _ as _sfc_main$1 } from './NuxtImg-CP6STrL9.mjs';
import { _ as __nuxt_component_1 } from './Cursos-C3rIh1Ep.mjs';
import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
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
import './nuxt-link-DRGY1ko4.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "alunos-contratados",
  __ssrInlineRender: true,
  setup(__props) {
    const AlunosContratados = ref([]);
    const displayedPosts = ref([]);
    const isLoading = ref(false);
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Cursos = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5edfee4c><section class="py-5" data-v-5edfee4c><div class="container my-5" data-v-5edfee4c><div class="row" data-v-5edfee4c><!--[-->`);
      ssrRenderList(displayedPosts.value, (AlunosContratados2) => {
        _push(`<div class="col-xs-12 col-sm-6 mb-30 my-3" data-v-5edfee4c><div class="hall-image event-box d-flex" data-v-5edfee4c><div class="thumb pull-left" data-v-5edfee4c>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: AlunosContratados2.image,
          alt: "Imagem do Aluno",
          class: "rounded",
          width: "350px",
          format: "webp"
        }, null, _parent));
        _push(`</div><div class="event-content w-100 px-3 align-content-center" data-v-5edfee4c><div class="align-container" data-v-5edfee4c><div class="align-inner" data-v-5edfee4c><h4 class="text-capitalize" data-v-5edfee4c>${ssrInterpolate(capitalizeTitle(AlunosContratados2.title))}</h4><p data-v-5edfee4c>${ssrInterpolate(AlunosContratados2.resumo)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-4" data-v-5edfee4c>`);
      if (displayedPosts.value.length < AlunosContratados.value.length) {
        _push(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-5edfee4c>`);
        if (isLoading.value) {
          _push(`<span class="mx-2" data-v-5edfee4c>Carregando</span>`);
        } else {
          _push(`<!---->`);
        }
        if (isLoading.value) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-5edfee4c></span>`);
        } else {
          _push(`<!---->`);
        }
        if (!isLoading.value) {
          _push(`<span data-v-5edfee4c>Carregar mais</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><hr class="border border-1 opacity-50" data-v-5edfee4c>`);
      _push(ssrRenderComponent(_component_Cursos, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/alunos-contratados.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alunosContratados = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5edfee4c"]]);

export { alunosContratados as default };
//# sourceMappingURL=alunos-contratados-DPJ0euC7.mjs.map
