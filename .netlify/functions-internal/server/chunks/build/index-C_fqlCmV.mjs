import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as __nuxt_component_1 } from './Cursos-D6h5I-Qs.mjs';
import { ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: posts } = useAsyncData("posts", () => $fetch("/api/posts"));
    const displayedPosts = ref([]);
    posts.value && displayedPosts.value.push(...posts.value.slice(0, postsPerPage));
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Cursos = __nuxt_component_1;
      _push(`<!--[--><section class="py-5" data-v-6c4dedda><div class="container my-5" data-v-6c4dedda><div class="row justify-items-center" data-v-6c4dedda><!--[-->`);
      ssrRenderList(displayedPosts.value, (post) => {
        _push(`<div class="col-md-4 mb-4" data-v-6c4dedda><div class="card blog-card h-100" data-v-6c4dedda>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.image,
          class: "card-img-top img-fluid",
          alt: "Imagem do post",
          densities: "x1 x2",
          placeholder: "",
          width: "500",
          height: "500",
          loading: "lazy",
          quality: "50",
          fit: "cover"
        }, null, _parent));
        _push(`<div class="card-body" data-v-6c4dedda><h4 class="card-title mt-2" data-v-6c4dedda>${ssrInterpolate(capitalizeTitle(post.title))}</h4>`);
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
      _push(`<!--]--></div>`);
      if (displayedPosts.value.length < unref(posts).length) {
        _push(`<div class="text-center mt-4" data-v-6c4dedda><button class="btn btn-primary" data-v-6c4dedda> Carregar mais artigos </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_Cursos, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6c4dedda"]]);

export { index as default };
//# sourceMappingURL=index-C_fqlCmV.mjs.map
