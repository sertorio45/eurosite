import { _ as _sfc_main$2 } from './NuxtImg-EInSGp_T.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$3 } from './Depoimentos-BC1lBlV6.mjs';
import { useSSRContext, ref, unref, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { I as Inscricao } from './Inscricao-DsdPG7OE.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
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
import './AtendimentoRapido-ByznP_h0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main$1 = {
  __name: "CtaWhatsApp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary py-5" }, _attrs))} data-v-37446849><div class="container text-white text-center" data-v-37446849><div class="row d-flex align-items-center justify-content-center g-5 py-2 my-md-4" data-v-37446849><div class="col-12" data-v-37446849><h2 class="h1 fw-bold" data-v-37446849>Garanta o seu futuro profissional.</h2><p class="h4" data-v-37446849>Fale agora conosco!</p></div><div class="col-12 col-md-10 px-md-2" data-v-37446849><div class="card-body card py-5 p-lg-5 p-md-5 p-xl-5 p-xxl-5 rounded" data-v-37446849>`);
      _push(ssrRenderComponent(Inscricao, null, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaWhatsApp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-37446849"]]);
const coursesPerPage = 6;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    const displayedCourses = ref([]);
    const isLoading = ref(false);
    const { data, pending, error } = useAsyncData("courses", async () => {
      const response = await $fetch("/api/postsCursos");
      if (Array.isArray(response)) {
        courses.value = response;
        displayedCourses.value = response.slice(0, coursesPerPage);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Depoimentos = _sfc_main$3;
      const _component_CtaWhatsApp = __nuxt_component_3;
      _push(`<!--[--><section class="py-5" data-v-867414b4><div class="container my-5 py-5 min-vh-100 justify-content-center" data-v-867414b4><div class="row justify-content-center align-items-center g-3 text-center" data-v-867414b4><h2 data-v-867414b4>A melhor qualifica\xE7\xE3o para voc\xEA.</h2><p data-v-867414b4> Conhe\xE7a nossos cursos profissionalizantes que oferecem a melhor qualifica\xE7\xE3o para o mercado de trabalho. </p></div><div class="row text-center justify-content-center align-items-center g-3 my-4" data-v-867414b4>`);
      if (!unref(pending)) {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(displayedCourses.value, (curso, index2) => {
          _push(`<div class="col-lg-4 col-md-4 col-sm-12 mb-4" data-v-867414b4><div class="card cursos-card h-100 d-flex flex-column" data-v-867414b4><div class="img-container" data-v-867414b4>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: curso.image || "/placeholder.jpg",
            class: "card-img-top img-fluid",
            alt: curso.title || "Imagem do curso",
            densities: "x1 x2",
            placeholder: [900, 500, 75, 5],
            width: "900",
            height: "500",
            loading: "lazy",
            fit: "cover"
          }, null, _parent));
          _push(`</div><div class="card-body align-content-center" data-v-867414b4><h4 data-v-867414b4>${ssrInterpolate(curso.title)}</h4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "card-text mt-auto",
            to: `/cursos/${curso.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Mais informa\xE7\xF5es `);
              } else {
                return [
                  createTextVNode(" Mais informa\xE7\xF5es ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--><div class="text-center mt-4" data-v-867414b4>`);
        if (displayedCourses.value.length < courses.value.length) {
          _push(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-867414b4>`);
          if (isLoading.value) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" data-v-867414b4></span>`);
          } else {
            _push(`<!---->`);
          }
          if (!isLoading.value) {
            _push(`<span data-v-867414b4>Carregar mais cursos</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(coursesPerPage, (n) => {
          _push(`<div class="col-lg-4 col-md-4 col-sm-12 mb-4" data-v-867414b4><div class="card cursos-card h-100 d-flex flex-column" data-v-867414b4><div class="img-container" data-v-867414b4>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23e0e0e0'/%3E%3C/svg%3E",
            alt: "Imagem Placeholder",
            class: "card-img-top img-fluid"
          }, null, _parent));
          _push(`</div><div class="card-body" data-v-867414b4><h3 class="placeholder-glow" data-v-867414b4><span class="placeholder col-12" data-v-867414b4></span></h3><p class="placeholder-glow" data-v-867414b4><span class="placeholder col-12" data-v-867414b4></span></p></div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Depoimentos, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaWhatsApp, null, null, _parent));
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-867414b4"]]);

export { index as default };
//# sourceMappingURL=index-C7ZNO8rE.mjs.map
