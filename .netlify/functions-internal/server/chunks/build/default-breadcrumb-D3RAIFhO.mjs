import { _ as _sfc_main$1$1, a as __nuxt_component_1$1 } from './Footer-Cre71bim.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import './Icon-5pRBvot5.mjs';
import './NuxtImg-CP6STrL9.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import './AtendimentoRapido-D1q6MgUw.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const pageTitle = computed(() => {
      const lastSegment = route.path.split("/").filter(Boolean).pop() || "In\xEDcio";
      return decodeURIComponent(lastSegment).split("-").map((word) => word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1).toLocaleLowerCase("pt-BR")).join(" ");
    });
    const breadcrumbs = computed(() => {
      const paths = route.path.split("/").filter(Boolean);
      return paths.map((segment, index) => {
        const path = `/${paths.slice(0, index + 1).join("/")}`;
        const name = decodeURIComponent(segment).split("-").map((word) => word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1).toLocaleLowerCase("pt-BR")).join(" ");
        return {
          name,
          // Capitaliza a primeira letra de cada palavra
          path: index === paths.length - 1 ? null : path
          // Desabilita o link no último item
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumbs-title parallax overlay dark-5 blank-space bg-primary text-center" }, _attrs))} data-v-fe3ec480><div class="container" data-v-fe3ec480><div class="row" data-v-fe3ec480><div class="col-xs-12" data-v-fe3ec480><div class="breadcrumbs-menu" data-v-fe3ec480><h1 class="l-height text-center" data-v-fe3ec480>${ssrInterpolate(pageTitle.value)}</h1><nav aria-label="breadcrumb" data-v-fe3ec480><ul class="clearfix justify-content-center" data-v-fe3ec480><li class="breadcrumb-item" data-v-fe3ec480>`);
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
      if (breadcrumbs.value.length > 0) {
        _push(`<i class="zmdi zmdi-chevron-right" data-v-fe3ec480></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><!--[-->`);
      ssrRenderList(breadcrumbs.value, (crumb, index) => {
        _push(`<li class="breadcrumb-item" data-v-fe3ec480>`);
        if (crumb.path) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: crumb.path,
            class: "link-tow"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(crumb.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(crumb.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="link-tow" data-v-fe3ec480>${ssrInterpolate(crumb.name)}</span>`);
        }
        if (index < breadcrumbs.value.length - 1) {
          _push(`<i class="zmdi zmdi-chevron-right" data-v-fe3ec480></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe3ec480"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1$1;
  const _component_Breadcrumb = __nuxt_component_1;
  const _component_Footer = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumb, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default-breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const defaultBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { defaultBreadcrumb as default };
//# sourceMappingURL=default-breadcrumb-D3RAIFhO.mjs.map
