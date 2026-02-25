import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
    const route = useRoute();
    const { data, pending, error } = useAsyncData("posts", () => $fetch("/api/posts"));
    const post = computed(() => {
      if (error.value || !data.value)
        return { title: "Erro ao carregar", content: "Erro ao carregar conte\xFAdo.", image: "" };
      const currentPost = data.value.find((p) => p.slug === route.params.slug);
      return currentPost || { title: "Carregando...", content: "Carregando conte\xFAdo...", image: "" };
    });
    const latestPosts = computed(() => {
      if (error.value || !data.value)
        return [];
      return data.value.filter((p) => p.slug !== route.params.slug).slice(0, 3) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<!--[--><section class="bg-light py-5 text-center"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/",
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`P\xE1gina inicial`);
          } else {
            return [
              createTextVNode("P\xE1gina inicial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/blog",
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><div><section class="py-5"><div class="container my-5"><div class="row"><div class="col-sm-8 col-md-8 text-justify">`);
      if (!post.value.image) {
        _push(`<div><p>Carregando imagem...</p></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.value.image,
          class: "rounded mb-4 img-fluid",
          alt: post.value.title || "Imagem do post",
          densities: "x1 x2",
          width: "800",
          height: "500",
          loading: "lazy",
          fit: "cover",
          placeholder: 15
        }, null, _parent));
        _push(`</div>`);
      }
      if (post.value.title) {
        _push(`<h1 class="my-4">${ssrInterpolate(post.value.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (post.value.content) {
        _push(`<div class="my-5">${(_a = post.value.content) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-sm-4 col-md-4"><div class="card p-4 sticky-card"><h3 class="mt-4">Mais artigos</h3><hr class="hr hr-blurry"><!--[-->`);
      ssrRenderList(latestPosts.value, (latestPost) => {
        _push(`<div class="text-left d-flex align-items-center">`);
        if (!latestPost.image) {
          _push(`<div><p>Carregando imagem...</p></div>`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: `/blog/${latestPost.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: latestPost.image,
                  class: "m-1 rounded",
                  alt: latestPost.title || "Imagem do post",
                  densities: "x1 x2",
                  width: "75",
                  height: "75",
                  loading: "lazy",
                  fit: "cover",
                  placeholder: [75, 75, 75, 5]
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtImg, {
                    src: latestPost.image,
                    class: "m-1 rounded",
                    alt: latestPost.title || "Imagem do post",
                    densities: "x1 x2",
                    width: "75",
                    height: "75",
                    loading: "lazy",
                    fit: "cover",
                    placeholder: [75, 75, 75, 5]
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        }
        if (latestPost.title) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: `/blog/${latestPost.slug}`,
            class: "latestPost px-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(latestPost.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(latestPost.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div><!--]-->`);
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
//# sourceMappingURL=_slug_-BQQSrX_v.mjs.map
