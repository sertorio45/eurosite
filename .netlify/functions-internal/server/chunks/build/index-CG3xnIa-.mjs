import { _ as _sfc_main$1 } from './NuxtImg-CP6STrL9.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as __nuxt_component_3 } from './Motivos-BLKyMOFF.mjs';
import { ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
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
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    const displayedCourses = ref([]);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Motivos = __nuxt_component_3;
      _push(`<!--[--><section class="py-5" data-v-cc3eabe7><div class="container my-5 py-5 min-vh-100 justify-content-center" data-v-cc3eabe7><div class="row justify-content-center align-items-center g-3 text-center" data-v-cc3eabe7><h1 data-v-cc3eabe7>Nossos Cursos</h1><p data-v-cc3eabe7> Conhe\xE7a nossos cursos profissionalizantes que oferecem a melhor qualifica\xE7\xE3o para o mercado de trabalho. </p></div><div class="row text-center justify-content-center align-items-center g-3 my-4" data-v-cc3eabe7><!--[-->`);
      ssrRenderList(displayedCourses.value, (curso, index2) => {
        _push(`<div class="col-lg-4 col-md-4 col-sm-12 mb-4" data-v-cc3eabe7><div class="card cursos-card h-100 d-flex flex-column" data-v-cc3eabe7><div class="img-container" data-v-cc3eabe7>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: curso.image,
          class: "card-img-top img-fluid",
          alt: curso.title || "Imagem do curso"
        }, null, _parent));
        _push(`</div><div class="card-body d-flex flex-column" data-v-cc3eabe7><h3 data-v-cc3eabe7>${ssrInterpolate(curso.title)}</h3><p data-v-cc3eabe7>${ssrInterpolate(curso.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "card-text mt-auto",
          to: `/cursos/${curso.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Mais informa\xE7\xF5es`);
            } else {
              return [
                createTextVNode("Mais informa\xE7\xF5es")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-4" data-v-cc3eabe7>`);
      if (displayedCourses.value.length < courses.value.length) {
        _push(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-cc3eabe7>`);
        if (isLoading.value) {
          _push(`<span class="mx-2" data-v-cc3eabe7>Carregando</span>`);
        } else {
          _push(`<!---->`);
        }
        if (isLoading.value) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-cc3eabe7></span>`);
        } else {
          _push(`<!---->`);
        }
        if (!isLoading.value) {
          _push(`<span data-v-cc3eabe7>Carregar mais cursos</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Motivos, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cursos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc3eabe7"]]);

export { index as default };
//# sourceMappingURL=index-CG3xnIa-.mjs.map
