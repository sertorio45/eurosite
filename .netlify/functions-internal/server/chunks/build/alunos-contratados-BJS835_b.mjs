import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, watchEffect, computed, unref } from 'vue';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import VueEasyLightbox from 'vue-easy-lightbox';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const postsPerPage = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "alunos-contratados",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: alunosContratados2, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("alunosContratados", () => $fetch("/api/postsAlunosContratados"))), __temp = await __temp, __restore(), __temp);
    const displayedPosts = ref([]);
    const lightboxVisible = ref(false);
    const selectedImage = ref("");
    const openLightbox = (image) => {
      selectedImage.value = image;
      lightboxVisible.value = true;
    };
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    watchEffect(() => {
      if (alunosContratados2.value && alunosContratados2.value.length > 0 && displayedPosts.value.length === 0) {
        displayedPosts.value.push(...alunosContratados2.value.slice(0, postsPerPage));
      }
    });
    const errorMessage = computed(() => {
      if (error.value) {
        console.error("Erro ao carregar alunos contratados:", error.value);
        return "Erro ao carregar dados dos alunos contratados. Tente novamente mais tarde.";
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2918a597><section class="py-5" data-v-2918a597><div class="container my-5" data-v-2918a597>`);
      if (errorMessage.value) {
        _push(`<div class="alert alert-danger text-center" role="alert" data-v-2918a597>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row gy-4" data-v-2918a597><!--[-->`);
      ssrRenderList(displayedPosts.value, (aluno) => {
        _push(`<div class="col-12 col-sm-6 col-md-4 mb-30 my-3" data-v-2918a597><div class="hall-image event-box d-flex" data-v-2918a597><div data-v-2918a597>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: aluno.image,
          alt: aluno.title || "Foto do aluno contratado",
          densities: "x1 x2",
          class: "rounded d-block w-100",
          sizes: "100vw sm:100vw md:500vw lg:50vw",
          loading: "lazy",
          fit: "cover",
          placeholder: "",
          width: "400",
          height: "400",
          quality: "60",
          onClick: ($event) => openLightbox(aluno.image),
          style: { "cursor": "pointer" }
        }, null, _parent));
        _push(`</div><div class="event-content w-100 px-2" data-v-2918a597><div class="align-container" data-v-2918a597><div class="align-inner py-4" data-v-2918a597><h4 class="text-capitalize" data-v-2918a597>${ssrInterpolate(capitalizeTitle(aluno.title))}</h4><p data-v-2918a597>${ssrInterpolate(aluno.resumo)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="col-12 col-sm-6 col-md-4 mb-30 my-3" data-v-2918a597><div class="hall-image event-box d-flex" data-v-2918a597><div class="thumb w-100 placeholder-glow" data-v-2918a597><div class="placeholder rounded img-fluid" style="${ssrRenderStyle({ "height": "200px", "background-color": "#e9ecef" })}" data-v-2918a597></div></div><div class="event-content w-100 px-2" data-v-2918a597><div class="align-container" data-v-2918a597><div class="align-inner py-4" data-v-2918a597><h4 class="placeholder-glow" data-v-2918a597><span class="placeholder col-6" data-v-2918a597></span></h4><p class="placeholder-glow" data-v-2918a597><span class="placeholder col-8" data-v-2918a597></span><span class="placeholder col-5" data-v-2918a597></span><span class="placeholder col-7" data-v-2918a597></span></p></div></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center mt-4" data-v-2918a597>`);
      if (unref(alunosContratados2) && displayedPosts.value.length < unref(alunosContratados2).length) {
        _push(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} data-v-2918a597>`);
        if (unref(pending)) {
          _push(`<span class="mx-2" data-v-2918a597>Carregando</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pending)) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-2918a597></span>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(pending)) {
          _push(`<span data-v-2918a597>Carregar mais</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(unref(VueEasyLightbox), {
        visible: lightboxVisible.value,
        imgs: [selectedImage.value],
        onHide: ($event) => lightboxVisible.value = false
      }, null, _parent));
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
const alunosContratados = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2918a597"]]);

export { alunosContratados as default };
//# sourceMappingURL=alunos-contratados-BJS835_b.mjs.map
