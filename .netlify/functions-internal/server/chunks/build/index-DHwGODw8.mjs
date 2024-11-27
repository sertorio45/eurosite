import { _ as _sfc_main$3 } from './Icon-5pRBvot5.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './Cursos-D9E2GdTH.mjs';
import { _ as __nuxt_component_1$1 } from './Wins-BfMTXwLz.mjs';
import { _ as __nuxt_component_3 } from './Motivos-BLKyMOFF.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as __nuxt_component_2 } from './Depoimentos-Av3gkaRl.mjs';
import '../runtime.mjs';
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
import './NuxtImg-CP6STrL9.mjs';
import './index-C2merokO.mjs';
import './AtendimentoRapido-D1q6MgUw.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container my-5"><div class="row"><div class="col"><div id="banners" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://www.euroanglocursos.com.br/assets/img/slider/hall-dos-contratados2.jpg" class="d-block w-100" alt=""></div><div class="carousel-item"><img src="https://placeholder.com/1920x780" class="d-block w-100" alt=""></div><div class="carousel-item"><img src="https://placeholder.com/1920x780" class="d-block w-100" alt=""></div><div class="carousel-item"><img src="https://placeholder.com/1920x780" class="d-block w-100" alt=""></div></div><button class="carousel-control-prev" type="button" data-bs-target="#banners" data-bs-slide="prev"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-left-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#banners" data-bs-slide="next"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-right-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Next</span></button></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banners.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "BlogFixed",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    const lastThreePosts = computed(() => {
      return posts.value.slice(0, 3);
    });
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary py-5" }, _attrs))} data-v-c2a09b22><div class="container my-5" data-v-c2a09b22><h2 class="text-center mb-5 text-light" data-v-c2a09b22>Blog</h2><div class="row justify-items-center" data-v-c2a09b22><!--[-->`);
      ssrRenderList(lastThreePosts.value, (post) => {
        _push(`<div class="col-md-4" data-v-c2a09b22><div class="card blog-card h-100" data-v-c2a09b22><img${ssrRenderAttr("src", post.image)} class="card-img-top img-fluid" alt="Imagem do post" lazy="loading" data-v-c2a09b22><div class="card-body" data-v-c2a09b22><small class="text-muted" data-v-c2a09b22>${ssrInterpolate(post.date)}</small><h5 class="card-title mt-2" data-v-c2a09b22>${ssrInterpolate(capitalizeTitle(post.title))}</h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary",
          to: `/blog/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ver artigo`);
            } else {
              return [
                createTextVNode("Ver artigo")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogFixed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c2a09b22"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Banners = __nuxt_component_0;
  const _component_Cursos = __nuxt_component_1;
  const _component_Wins = __nuxt_component_1$1;
  const _component_Motivos = __nuxt_component_3;
  const _component_BlogFixed = __nuxt_component_4;
  const _component_Depoimentos = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-fd146756>`);
  _push(ssrRenderComponent(_component_Banners, null, null, _parent));
  _push(ssrRenderComponent(_component_Cursos, null, null, _parent));
  _push(ssrRenderComponent(_component_Wins, null, null, _parent));
  _push(ssrRenderComponent(_component_Motivos, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogFixed, null, null, _parent));
  _push(ssrRenderComponent(_component_Depoimentos, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fd146756"]]);

export { index as default };
//# sourceMappingURL=index-DHwGODw8.mjs.map
