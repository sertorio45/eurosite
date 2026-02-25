import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inscricao",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      nome: "",
      idade: "",
      email: "",
      celular: "",
      cidade: "",
      curso: "",
      mensagem: "",
      oque_espera: ""
    });
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    const showSuggestions = ref(false);
    const emailDomains = ref(["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com", "empresa.com.br", "empresa.com"]);
    useNuxtApp();
    const getSuggestedEmail = (domain) => `${form.value.email.split("@")[0]}@${domain}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f326b192><div class="row justify-content-center" data-v-f326b192><div class="col-lg-12" data-v-f326b192>`);
      if (successMessage.value) {
        _push(`<div class="alert alert-success" role="alert" data-v-f326b192>${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="alert alert-danger" role="alert" data-v-f326b192>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="needs-validation" novalidate data-v-f326b192><div class="row g-2" data-v-f326b192><div class="col-md-6 mb-3" data-v-f326b192><input type="text" name="nome"${ssrRenderAttr("value", form.value.nome)} class="form-control" placeholder="Nome" required data-v-f326b192><div class="invalid-feedback" data-v-f326b192>Por favor, informe seu nome.</div></div><div class="col-md-6 mb-3" data-v-f326b192><input type="text" name="celular"${ssrRenderAttr("value", form.value.celular)} class="form-control" placeholder="Celular" required maxlength="16" data-v-f326b192><div class="invalid-feedback" data-v-f326b192>Por favor, informe seu celular.</div></div></div><div class="row g-2" data-v-f326b192><div class="col-md-6 mb-3" data-v-f326b192><input type="email" name="email"${ssrRenderAttr("value", form.value.email)} class="form-control" placeholder="Email" required list="email_suggestions" data-v-f326b192>`);
      if (showSuggestions.value) {
        _push(`<datalist id="email_suggestions" data-v-f326b192><!--[-->`);
        ssrRenderList(emailDomains.value, (domain) => {
          _push(`<option${ssrRenderAttr("value", getSuggestedEmail(domain))} data-v-f326b192></option>`);
        });
        _push(`<!--]--></datalist>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="invalid-feedback" data-v-f326b192>Por favor, informe um email v\xE1lido.</div></div><div class="col-md-6 mb-3" data-v-f326b192><select name="cidade" class="form-select" required data-v-f326b192><option value="" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "") : ssrLooseEqual(form.value.cidade, "")) ? " selected" : ""}>Cidade...</option><option value="Campinas" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Campinas") : ssrLooseEqual(form.value.cidade, "Campinas")) ? " selected" : ""}>Campinas</option><option value="Franca" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Franca") : ssrLooseEqual(form.value.cidade, "Franca")) ? " selected" : ""}>Franca</option><option value="Piracicaba" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Piracicaba") : ssrLooseEqual(form.value.cidade, "Piracicaba")) ? " selected" : ""}>Piracicaba</option><option value="Ribeirao" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Ribeirao") : ssrLooseEqual(form.value.cidade, "Ribeirao")) ? " selected" : ""}>Ribeir\xE3o Preto</option><option value="Sorocaba" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Sorocaba") : ssrLooseEqual(form.value.cidade, "Sorocaba")) ? " selected" : ""}>Sorocaba</option></select><div class="invalid-feedback" data-v-f326b192>Por favor, selecione uma cidade.</div></div></div><div class="mb-3" data-v-f326b192><input type="number" min="10" max="100" name="idade"${ssrRenderAttr("value", form.value.idade)} class="form-control" placeholder="Idade" required data-v-f326b192><div class="invalid-feedback" data-v-f326b192>Por favor, informe uma idade entre 10 e 100.</div></div><div class="mb-3" data-v-f326b192><select name="curso" class="form-select" required data-v-f326b192><option value="" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "") : ssrLooseEqual(form.value.curso, "")) ? " selected" : ""}>Selecione um \xE1rea...</option><option value="Administracao" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Administracao") : ssrLooseEqual(form.value.curso, "Administracao")) ? " selected" : ""}>Administra\xE7\xE3o</option><option value="Saude" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Saude") : ssrLooseEqual(form.value.curso, "Saude")) ? " selected" : ""}>Sa\xFAde</option><option value="Tecnologia" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Tecnologia") : ssrLooseEqual(form.value.curso, "Tecnologia")) ? " selected" : ""}>Tecnologia</option><option value="Idiomas" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Idiomas") : ssrLooseEqual(form.value.curso, "Idiomas")) ? " selected" : ""}>Idiomas</option><option value="Euro Kids" data-v-f326b192${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Euro Kids") : ssrLooseEqual(form.value.curso, "Euro Kids")) ? " selected" : ""}>Euro Kids</option></select><div class="invalid-feedback" data-v-f326b192>Por favor, selecione um curso.</div></div><div class="mb-3" data-v-f326b192><textarea name="mensagem" rows="3" class="form-control" placeholder="Mensagem" data-v-f326b192>${ssrInterpolate(form.value.mensagem)}</textarea></div><div class="mb-3" data-v-f326b192><textarea name="oque_espera" rows="3" class="form-control" placeholder="O que voc\xEA espera em fazer esse curso?" data-v-f326b192>${ssrInterpolate(form.value.oque_espera)}</textarea></div><button class="btn btn-primary w-100" type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-f326b192>`);
      if (isSubmitting.value) {
        _push(`<span data-v-f326b192><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-f326b192></span> Enviando... </span>`);
      } else {
        _push(`<span data-v-f326b192>Enviar</span>`);
      }
      _push(`</button></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/Inscricao.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Inscricao = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f326b192"]]);

export { Inscricao as I };
//# sourceMappingURL=Inscricao-DsdPG7OE.mjs.map
