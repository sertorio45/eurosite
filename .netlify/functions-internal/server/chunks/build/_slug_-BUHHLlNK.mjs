import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-CP6STrL9.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-C2merokO.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const post = ref({});
    const relatedPosts = ref([]);
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-5"><div class="container my-5"><div class="row"><div class="col-sm-8 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`In\xEDcio`);
          } else {
            return [
              createTextVNode("In\xEDcio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="my-4">${ssrInterpolate(post.value.title)}</h1><small>Postado em: ${ssrInterpolate(post.value.date)}</small><div class="my-5">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: post.value.image || "https://placeholder.com/150x150",
        alt: "Imagem do artigo",
        class: "img-fluid",
        quality: "75"
      }, null, _parent));
      _push(`</div><p class="mt-5 px-5">${(_a = post.value.content) != null ? _a : ""}</p></div><div class="col-sm-4"><div class="card p-4 sticky-card"><a href="javascript:history.back()" class="btn btn-primary mb-4 justify-content-end">Voltar</a><h3 class="mt-4">Mais artigos</h3><hr class="hr hr-blurry"><!--[-->`);
      ssrRenderList(relatedPosts.value, (relatedPost) => {
        _push(`<div class="text-left">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: `/blog/${relatedPost.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(relatedPost.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(relatedPost.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BUHHLlNK.mjs.map
