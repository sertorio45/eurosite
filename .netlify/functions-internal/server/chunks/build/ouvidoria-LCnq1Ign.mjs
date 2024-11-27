import { useSSRContext, defineComponent, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-5pRBvot5.mjs';
import '../runtime.mjs';
import '@netlify/functions';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormOuvidoria",
  __ssrInlineRender: true,
  setup(__props) {
    const formName = ref("");
    const formEmail = ref("");
    const formPhone = ref("");
    const formCidade = ref("");
    const formAssunto = ref("");
    const formMessage = ref("");
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    const showSuggestions = ref(false);
    const emailDomains = ref(["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com", "empresa.com.br", "empresa.com"]);
    useNuxtApp();
    const getSuggestedEmail = (domain) => `${formEmail.value.split("@")[0]}@${domain}`;
    watch(formEmail, (newValue) => {
      showSuggestions.value = newValue.endsWith("@");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (errorMessage.value) {
        _push(`<div class="alert alert-danger" role="alert">${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<div class="alert alert-success" role="alert">${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="custom-input" id="ouvidoria_form" autocomplete="off" novalidate><div class="row gy-2 g-2"><div class="col-md-4"><input${ssrRenderAttr("value", formName.value)} type="text" class="form-control" name="nome" id="form_name" placeholder="Nome" required aria-required="true" aria-label="Nome"></div><div class="col-md-4"><input${ssrRenderAttr("value", formEmail.value)} type="email" class="form-control" name="email" id="form_email" placeholder="Email" required aria-required="true" aria-label="Email" list="email_suggestions">`);
      if (showSuggestions.value) {
        _push(`<datalist id="email_suggestions"><!--[-->`);
        ssrRenderList(emailDomains.value, (domain) => {
          _push(`<option${ssrRenderAttr("value", getSuggestedEmail(domain))}></option>`);
        });
        _push(`<!--]--></datalist>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-4"><input${ssrRenderAttr("value", formPhone.value)} type="tel" class="form-control" name="celular" id="form_phone" placeholder="Celular" required aria-required="true" aria-label="Celular" maxlength="15"></div></div><div class="row gy-0 g-2 mt-0"><div class="col-md-6"><select class="form-select" name="assunto" id="form_assunto" required aria-required="true" aria-label="Assunto"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "") : ssrLooseEqual(formAssunto.value, "")) ? " selected" : ""}>Selecione o assunto:</option><option value="Informacao"${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "Informacao") : ssrLooseEqual(formAssunto.value, "Informacao")) ? " selected" : ""}>Informa\xE7\xE3o</option><option value="Reclamacao"${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "Reclamacao") : ssrLooseEqual(formAssunto.value, "Reclamacao")) ? " selected" : ""}>Reclama\xE7\xE3o</option><option value="Critica"${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "Critica") : ssrLooseEqual(formAssunto.value, "Critica")) ? " selected" : ""}>Cr\xEDtica</option><option value="Sugestao"${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "Sugestao") : ssrLooseEqual(formAssunto.value, "Sugestao")) ? " selected" : ""}>Sugest\xE3o</option><option value="Solicitacao"${ssrIncludeBooleanAttr(Array.isArray(formAssunto.value) ? ssrLooseContain(formAssunto.value, "Solicitacao") : ssrLooseEqual(formAssunto.value, "Solicitacao")) ? " selected" : ""}>Solicita\xE7\xE3o</option></select></div><div class="col-md-6"><select class="form-select" name="cidade" id="form_cidade" required aria-required="true" aria-label="Cidade"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(formCidade.value) ? ssrLooseContain(formCidade.value, "") : ssrLooseEqual(formCidade.value, "")) ? " selected" : ""}>Selecione a cidade:</option><option value="Campinas"${ssrIncludeBooleanAttr(Array.isArray(formCidade.value) ? ssrLooseContain(formCidade.value, "Campinas") : ssrLooseEqual(formCidade.value, "Campinas")) ? " selected" : ""}>Campinas</option><option value="Ribeirao"${ssrIncludeBooleanAttr(Array.isArray(formCidade.value) ? ssrLooseContain(formCidade.value, "Ribeirao") : ssrLooseEqual(formCidade.value, "Ribeirao")) ? " selected" : ""}>Ribeir\xE3o Preto</option><option value="SaoJoseDosCampos"${ssrIncludeBooleanAttr(Array.isArray(formCidade.value) ? ssrLooseContain(formCidade.value, "SaoJoseDosCampos") : ssrLooseEqual(formCidade.value, "SaoJoseDosCampos")) ? " selected" : ""}>S\xE3o Jos\xE9 dos Campos</option></select></div></div><div class="row gy-2 mt-0"><div class="col-12"><textarea class="form-control" name="mensagem" id="form_message" rows="4" placeholder="Mensagem" required aria-required="true" aria-label="Mensagem">${ssrInterpolate(formMessage.value)}</textarea></div></div><div class="row gy-2 mt-2"><div class="col-12"><button class="btn btn-primary w-100" type="submit" name="submit" id="enviar"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}>`);
      if (isSubmitting.value) {
        _push(`<span><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando... </span>`);
      } else {
        _push(`<span>Enviar</span>`);
      }
      _push(`</button></div><span style="${ssrRenderStyle({ "font-size": "0.8em!important" })}" class="my-4"> Ao enviar o formul\xE1rio voc\xEA est\xE1 de acordo com nossa <a href="/politica-privacidade">Pol\xEDtica de Privacidade</a></span></div></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/FormOuvidoria.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ouvidoria",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsFormOuvidoria = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      _push(`<!--[--><div class="ouvidoria-area section-padding d-flex justify-content-center align-items-center" data-v-3335e2ae><div class="container d-flex justify-content-center align-items-center" data-v-3335e2ae><div class="row w-100" data-v-3335e2ae><div class="col-md-6 mb-3 mx-auto" data-v-3335e2ae>`);
      _push(ssrRenderComponent(_component_FormsFormOuvidoria, null, null, _parent));
      _push(`</div></div></div></div><section class="location-cards section-padding bg-primary" id="unidades" data-v-3335e2ae><div class="container" data-v-3335e2ae><h2 class="text-center mb-5 text-light" data-v-3335e2ae>Encontre a unidade mais pr\xF3xima</h2><div class="row" data-v-3335e2ae><div class="col-md-4 mb-4" data-v-3335e2ae><div class="card text-center" data-v-3335e2ae><div class="card-body" data-v-3335e2ae>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-3335e2ae>Campinas</h5><a href="#" class="btn btn-link" data-v-3335e2ae>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-3335e2ae><div class="card text-center" data-v-3335e2ae><div class="card-body" data-v-3335e2ae>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-3335e2ae>Ribeir\xE3o Preto</h5><a href="#" class="btn btn-link" data-v-3335e2ae>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-3335e2ae><div class="card text-center" data-v-3335e2ae><div class="card-body" data-v-3335e2ae>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-3335e2ae>S\xE3o Jos\xE9 dos Campos</h5><a href="#" class="btn btn-link" data-v-3335e2ae>Ver localiza\xE7\xE3o</a></div></div></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ouvidoria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ouvidoria = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3335e2ae"]]);

export { ouvidoria as default };
//# sourceMappingURL=ouvidoria-LCnq1Ign.mjs.map
