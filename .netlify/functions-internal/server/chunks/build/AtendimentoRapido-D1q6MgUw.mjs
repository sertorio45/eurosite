import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AtendimentoRapido",
  __ssrInlineRender: true,
  props: {
    valor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-425f651c><button class="btn btn-primary" data-v-425f651c>Atendimento r\xE1pido</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/AtendimentoRapido.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-425f651c"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=AtendimentoRapido-D1q6MgUw.mjs.map
