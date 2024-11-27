import { _ as _sfc_main$2 } from './NuxtImg-CP6STrL9.mjs';
import { _ as _sfc_main$3 } from './Icon-5pRBvot5.mjs';
import { useSSRContext, defineComponent, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
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
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormContato",
  __ssrInlineRender: true,
  setup(__props) {
    const contactName = ref("");
    const contactEmail = ref("");
    const contactNumber = ref("");
    const contactCidade = ref("");
    const contactMessage = ref("");
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    const showSuggestions = ref(false);
    const emailDomains = ref(["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com", "empresa.com.br", "empresa.com"]);
    useNuxtApp();
    const getSuggestedEmail = (domain) => `${contactEmail.value.split("@")[0]}@${domain}`;
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
      _push(`<form class="custom-input needs-validation" id="contact_form" autocomplete="off" novalidate><div class="row gx-1 gy-1"><div class="col-md-6"><input${ssrRenderAttr("value", contactName.value)} type="text" class="form-control" name="nome" id="contact_name" placeholder="Nome" required aria-required="true" aria-label="Nome"></div><div class="col-md-6"><input${ssrRenderAttr("value", contactEmail.value)} type="email" class="form-control" name="email" id="contact_email" placeholder="Email" required aria-required="true" aria-label="Email" list="email_suggestions">`);
      if (showSuggestions.value) {
        _push(`<datalist id="email_suggestions"><!--[-->`);
        ssrRenderList(emailDomains.value, (domain) => {
          _push(`<option${ssrRenderAttr("value", getSuggestedEmail(domain))}></option>`);
        });
        _push(`<!--]--></datalist>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-6"><input${ssrRenderAttr("value", contactNumber.value)} type="tel" class="form-control" name="telefone" id="contact_number" placeholder="Telefone" required aria-required="true" aria-label="Telefone" maxlength="15"></div><div class="col-md-6"><select class="form-select" name="cidade" id="contact_cidade" required aria-required="true" aria-label="Cidade"><option value="" disabled selected>Selecione a cidade:</option><option value="Campinas"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "Campinas") : ssrLooseEqual(contactCidade.value, "Campinas")) ? " selected" : ""}>Campinas</option><option value="Ribeirao"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "Ribeirao") : ssrLooseEqual(contactCidade.value, "Ribeirao")) ? " selected" : ""}>Ribeir\xE3o Preto</option><option value="SaoJoseDosCampos"${ssrIncludeBooleanAttr(Array.isArray(contactCidade.value) ? ssrLooseContain(contactCidade.value, "SaoJoseDosCampos") : ssrLooseEqual(contactCidade.value, "SaoJoseDosCampos")) ? " selected" : ""}>S\xE3o Jos\xE9 dos Campos</option></select></div><div class="col-12"><textarea class="form-control" name="mensagem" id="contact_message" rows="3" placeholder="Mensagem" required aria-required="true" aria-label="Mensagem">${ssrInterpolate(contactMessage.value)}</textarea></div><div class="col-12"><button class="btn btn-primary w-100" type="submit" name="submit" id="enviar"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/FormContato.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contato",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$2;
      const _component_Icon = _sfc_main$3;
      const _component_FormsFormContato = _sfc_main$1;
      _push(`<!--[--><div class="contact-area section-padding" data-v-b4721d84><div class="container min-vh-100" data-v-b4721d84><div class="row align-items-center justify-items-center py-5" data-v-b4721d84><div class="col-md-6 mb-3 text-center" data-v-b4721d84><div data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/woman-contact.webp",
        width: "400px"
      }, null, _parent));
      _push(`</div><div class="mt-3" data-v-b4721d84><a href="#" data-v-b4721d84>Veja onde est\xE1 nossas unidades</a></div><a href="#unidades" data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-chevrons-down",
        color: "var(--bs-primary)",
        fontSize: "3em"
      }, null, _parent));
      _push(`</a></div><div class="col-md-6 mb-3" data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_FormsFormContato, null, null, _parent));
      _push(`</div></div></div></div><section class="location-cards section-padding bg-primary" id="unidades" data-v-b4721d84><div class="container my-5" data-v-b4721d84><h2 class="text-center mb-5 text-light" data-v-b4721d84>Encontre a unidade mais pr\xF3xima</h2><div class="row" data-v-b4721d84><div class="col-md-4 mb-4" data-v-b4721d84><div class="card text-center" data-v-b4721d84><div class="card-body" data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-b4721d84>Campinas</h5><a href="#" class="btn btn-link" data-v-b4721d84>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-b4721d84><div class="card text-center" data-v-b4721d84><div class="card-body" data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-b4721d84>Ribeir\xE3o Preto</h5><a href="#" class="btn btn-link" data-v-b4721d84>Ver localiza\xE7\xE3o</a></div></div></div><div class="col-md-4 mb-4" data-v-b4721d84><div class="card text-center" data-v-b4721d84><div class="card-body" data-v-b4721d84>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bx-map",
        fontSize: "5em",
        class: "icon-card",
        color: "var(--bs-primary)"
      }, null, _parent));
      _push(`<h5 class="card-title mt-3" data-v-b4721d84>S\xE3o Jos\xE9 dos Campos</h5><a href="#" class="btn btn-link" data-v-b4721d84>Ver localiza\xE7\xE3o</a></div></div></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4721d84"]]);

export { contato as default };
//# sourceMappingURL=contato-Bm9F-HzB.mjs.map
