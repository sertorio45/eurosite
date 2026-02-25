import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

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
      _push(`<div${ssrRenderAttrs(_attrs)}><a href="https://api.whatsapp.com/send?phone=16991213522&amp;text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minhas%20d%C3%BAvidas." target="_blank" rel="noopener noreferrer" class="btn btn-primary d-flex align-items-center justify-content-center"> Atendimento r\xE1pido </a></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/AtendimentoRapido.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AtendimentoRapido-ByznP_h0.mjs.map
