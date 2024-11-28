import { useSSRContext, defineComponent, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-5pRBvot5.mjs';
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
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormTrabalheConosco",
  __ssrInlineRender: true,
  setup(__props) {
    const contactName = ref("");
    const contactEmail = ref("");
    const contactCell = ref("");
    const contactCidade = ref("");
    const contactMessage = ref("");
    ref(null);
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    const showSuggestions = ref(false);
    ref(null);
    const emailDomains = ref([
      "gmail.com",
      "hotmail.com",
      "yahoo.com",
      "outlook.com",
      "icloud.com",
      "empresa.com.br",
      "empresa.com"
    ]);
    useNuxtApp();
    const getSuggestedEmail = (domain) => {
      return `${contactEmail.value.split("@")[0]}@${domain}`;
    };
    watch(contactEmail, (newValue) => {
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
      _push(`<form class="custom-input" id="contact_form" autocomplete="off" novalidate><div class="row gx-2 gy-2 m-0"><div class="col-md-6"><input${ssrRenderAttr("value", contactName.value)} type="text" class="form-control" name="nome" id="contact_name" placeholder="Nome" required aria-required="true" aria-label="Nome"></div><div class="col-md-6"><input${ssrRenderAttr("value", contactEmail.value)} type="email" class="form-control" name="email" id="contact_email" placeholder="Email" required aria-required="true" aria-label="Email" list="email_suggestions">`);
      if (showSuggestions.value) {
        _push(`<datalist id="email_suggestions"><!--[-->`);
        ssrRenderList(emailDomains.value, (domain) => {
          _push(`<option${ssrRenderAttr("value", getSuggestedEmail(domain))}></option>`);
        });
        _push(`<!--]--></datalist>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-6"><input${ssrRenderAttr("value", contactCell.value)} type="tel" class="form-control" name="celular" id="contact_number" placeholder="Celular" required aria-required="true" aria-label="Celular" maxlength="15"></div><div class="col-md-6"><select class="form-select" name="cidade" id="contact_cidade" required aria-required="true" aria-label="Cidade"><option value="" disabled selected>Selecione a cidade:</option><option value="Campinas"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "Campinas") : ssrLooseEqual(contactCidade.value, "Campinas")) ? " selected" : ""}>Campinas</option><option value="Ribeirao"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "Ribeirao") : ssrLooseEqual(contactCidade.value, "Ribeirao")) ? " selected" : ""}>Ribeir\xE3o Preto</option><option value="SaoJoseDosCampos"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "SaoJoseDosCampos") : ssrLooseEqual(contactCidade.value, "SaoJoseDosCampos")) ? " selected" : ""}>S\xE3o Jos\xE9 dos Campos</option></select></div><div class="col-12"><textarea class="form-control" name="mensagem" id="contact_message" rows="3" placeholder="Mensagem" required aria-required="true" aria-label="Mensagem">${ssrInterpolate(contactMessage.value)}</textarea></div><div class="col-12"><input type="file" class="form-control" id="contact_curriculo" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><small class="form-text text-muted">Apenas arquivos .pdf, .doc, .docx, .jpg, .jpeg, .png s\xE3o permitidos.</small></div><div class="col-12"><button class="btn btn-primary w-100" type="submit" name="submit" id="enviar"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}>`);
      if (isSubmitting.value) {
        _push(`<span><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando... </span>`);
      } else {
        _push(`<span>Enviar</span>`);
      }
      _push(`</button></div><span style="${ssrRenderStyle({ "font-size": "0.8em!important" })}" class="my-4"> Ao enviar o formul\xE1rio voc\xEA est\xE1 de acordo com nossa <a href="">Pol\xEDtica de Privacidade</a></span></div></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/FormTrabalheConosco.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trabalhe-conosco",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsFormTrabalheConosco = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      _push(`<!--[--><div class="trabalhe-conosco-area section-padding d-flex justify-content-center align-items-center" data-v-85ddbc2e><div class="container d-flex justify-content-center align-items-center" data-v-85ddbc2e><div class="row w-100" data-v-85ddbc2e><div class="col-md-6 mb-3 mx-auto" data-v-85ddbc2e>`);
      _push(ssrRenderComponent(_component_FormsFormTrabalheConosco, null, null, _parent));
      _push(`</div></div></div></div><section class="location-cards section-padding bg-primary" id="unidades" data-v-85ddbc2e><div class="container my-5" data-v-85ddbc2e><h2 class="text-center mb-5 text-light" data-v-85ddbc2e>Encontre a unidade mais pr\xF3xima</h2><div class="row" data-v-85ddbc2e><div class="col-md-4 mb-4" data-v-85ddbc2e><div class="card text-center" data-v-85ddbc2e><div class="card-body" data-v-85ddbc2e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-85ddbc2e>Campinas</h5><a href="#" class="btn btn-link" data-v-85ddbc2e>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-85ddbc2e><div class="card text-center" data-v-85ddbc2e><div class="card-body" data-v-85ddbc2e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-85ddbc2e>Ribeir\xE3o Preto</h5><a href="#" class="btn btn-link" data-v-85ddbc2e>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-85ddbc2e><div class="card text-center" data-v-85ddbc2e><div class="card-body" data-v-85ddbc2e>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-85ddbc2e>S\xE3o Jos\xE9 dos Campos</h5><a href="#" class="btn btn-link" data-v-85ddbc2e>Ver localiza\xE7\xE3o</a></div></div></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trabalhe-conosco.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trabalheConosco = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85ddbc2e"]]);

export { trabalheConosco as default };
//# sourceMappingURL=trabalhe-conosco-6--vFs0S.mjs.map
