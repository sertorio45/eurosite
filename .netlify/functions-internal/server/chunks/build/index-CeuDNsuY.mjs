import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    const displayedPosts = ref([]);
    const isLoading = ref(false);
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))} data-v-7b2092fb><div class="container my-5" data-v-7b2092fb><div class="row justify-items-center" data-v-7b2092fb><!--[-->`);
      ssrRenderList(displayedPosts.value, (post) => {
        _push(`<div class="col-md-4 mb-4" data-v-7b2092fb><div class="card blog-card h-100" data-v-7b2092fb><img${ssrRenderAttr("src", post.image)} class="card-img-top img-fluid" alt="Imagem do post" data-v-7b2092fb><div class="card-body" data-v-7b2092fb><small class="text-muted" data-v-7b2092fb>${ssrInterpolate(post.date)}</small><h5 class="card-title mt-2" data-v-7b2092fb>${ssrInterpolate(capitalizeTitle(post.title))}</h5>`);
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
      _push(`<!--]--></div><div class="text-center mt-4" data-v-7b2092fb>`);
      if (displayedPosts.value.length < posts.value.length) {
        _push(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-7b2092fb>`);
        if (isLoading.value) {
          _push(`<span class="mx-2" data-v-7b2092fb>Carregando</span>`);
        } else {
          _push(`<!---->`);
        }
        if (isLoading.value) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-7b2092fb></span>`);
        } else {
          _push(`<!---->`);
        }
        if (!isLoading.value) {
          _push(`<span data-v-7b2092fb>Carregar mais artigos</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b2092fb"]]);

export { index as default };
//# sourceMappingURL=index-CeuDNsuY.mjs.map
