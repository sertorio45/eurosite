import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';
import { useRoute } from 'vue-router';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-c097cf71><div class="row justify-content-center" data-v-c097cf71><div class="col-lg-12" data-v-c097cf71>`);
      if (successMessage.value) {
        _push(`<div class="alert alert-success" role="alert" data-v-c097cf71>${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="alert alert-danger" role="alert" data-v-c097cf71>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="needs-validation" novalidate data-v-c097cf71><div class="row g-2" data-v-c097cf71><div class="col-md-6 mb-3" data-v-c097cf71><input type="text" name="nome"${ssrRenderAttr("value", form.value.nome)} class="form-control" placeholder="Nome" required data-v-c097cf71><div class="invalid-feedback" data-v-c097cf71>Por favor, informe seu nome.</div></div><div class="col-md-6 mb-3" data-v-c097cf71><input type="text" name="celular"${ssrRenderAttr("value", form.value.celular)} class="form-control" placeholder="Celular" required maxlength="16" data-v-c097cf71><div class="invalid-feedback" data-v-c097cf71>Por favor, informe seu celular.</div></div></div><div class="row g-2" data-v-c097cf71><div class="col-md-6 mb-3" data-v-c097cf71><input type="email" name="email"${ssrRenderAttr("value", form.value.email)} class="form-control" placeholder="Email" required list="email_suggestions" data-v-c097cf71>`);
      if (showSuggestions.value) {
        _push(`<datalist id="email_suggestions" data-v-c097cf71><!--[-->`);
        ssrRenderList(emailDomains.value, (domain) => {
          _push(`<option${ssrRenderAttr("value", getSuggestedEmail(domain))} data-v-c097cf71></option>`);
        });
        _push(`<!--]--></datalist>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="invalid-feedback" data-v-c097cf71>Por favor, informe um email v\xE1lido.</div></div><div class="col-md-6 mb-3" data-v-c097cf71><select name="cidade" class="form-select" required data-v-c097cf71><option value="" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "") : ssrLooseEqual(form.value.cidade, "")) ? " selected" : ""}>Cidade...</option><option value="Campinas" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Campinas") : ssrLooseEqual(form.value.cidade, "Campinas")) ? " selected" : ""}>Campinas</option><option value="Franca" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Franca") : ssrLooseEqual(form.value.cidade, "Franca")) ? " selected" : ""}>Franca</option><option value="Piracicaba" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Piracicaba") : ssrLooseEqual(form.value.cidade, "Piracicaba")) ? " selected" : ""}>Piracicaba</option><option value="Ribeirao" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Ribeirao") : ssrLooseEqual(form.value.cidade, "Ribeirao")) ? " selected" : ""}>Ribeir\xE3o Preto</option><option value="Sorocaba" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.cidade) ? ssrLooseContain(form.value.cidade, "Sorocaba") : ssrLooseEqual(form.value.cidade, "Sorocaba")) ? " selected" : ""}>Sorocaba</option></select><div class="invalid-feedback" data-v-c097cf71>Por favor, selecione uma cidade.</div></div></div><div class="mb-3" data-v-c097cf71><input type="number" min="10" max="100" name="idade"${ssrRenderAttr("value", form.value.idade)} class="form-control" placeholder="Idade" required data-v-c097cf71><div class="invalid-feedback" data-v-c097cf71>Por favor, informe uma idade entre 10 e 100.</div></div><div class="mb-3" data-v-c097cf71><select name="curso" class="form-select" required data-v-c097cf71><option value="" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "") : ssrLooseEqual(form.value.curso, "")) ? " selected" : ""}>Selecione um curso...</option><option value="Administracao" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Administracao") : ssrLooseEqual(form.value.curso, "Administracao")) ? " selected" : ""}>Administra\xE7\xE3o</option><option value="Saude" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Saude") : ssrLooseEqual(form.value.curso, "Saude")) ? " selected" : ""}>Sa\xFAde</option><option value="Tecnologia" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Tecnologia") : ssrLooseEqual(form.value.curso, "Tecnologia")) ? " selected" : ""}>Tecnologia</option><option value="Idiomas" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Idiomas") : ssrLooseEqual(form.value.curso, "Idiomas")) ? " selected" : ""}>Idiomas</option><option value="Euro Kids" data-v-c097cf71${ssrIncludeBooleanAttr(Array.isArray(form.value.curso) ? ssrLooseContain(form.value.curso, "Euro Kids") : ssrLooseEqual(form.value.curso, "Euro Kids")) ? " selected" : ""}>Euro Kids</option></select><div class="invalid-feedback" data-v-c097cf71>Por favor, selecione um curso.</div></div><div class="mb-3" data-v-c097cf71><textarea name="mensagem" rows="3" class="form-control" placeholder="Mensagem" data-v-c097cf71>${ssrInterpolate(form.value.mensagem)}</textarea></div><div class="mb-3" data-v-c097cf71><textarea name="oque_espera" rows="3" class="form-control" placeholder="O que voc\xEA espera em fazer esse curso?" data-v-c097cf71>${ssrInterpolate(form.value.oque_espera)}</textarea></div><button class="btn btn-primary w-100" type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-c097cf71>`);
      if (isSubmitting.value) {
        _push(`<span data-v-c097cf71><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-c097cf71></span> Enviando... </span>`);
      } else {
        _push(`<span data-v-c097cf71>Enviar</span>`);
      }
      _push(`</button></form></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/Inscricao.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c097cf71"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const displayedCourses = ref([]);
    const activeTab = ref("");
    const route = useRoute();
    route.params.slug;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_FormsInscricao = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))} data-v-2fc941f6><div class="container" data-v-2fc941f6><div class="row py-5 my-5" data-v-2fc941f6><div class="col-sm-6 text-center" data-v-2fc941f6><!--[-->`);
      ssrRenderList(displayedCourses.value, (curso) => {
        _push(`<div class="pt-30" data-v-2fc941f6><h2 class="mb-5" style="${ssrRenderStyle({ "color": "#b92027", "font-size": "36px" })}" data-v-2fc941f6>${ssrInterpolate(curso.title)}</h2></div>`);
      });
      _push(`<!--]--><div data-v-2fc941f6><h2 class="mb-5" data-v-2fc941f6>A MELHOR QUALIDADE COM A MELHOR ESTRUTURA</h2><p class="h5" data-v-2fc941f6>Estude na melhor escola do interior paulista.</p><span id="numbers" data-v-2fc941f6><b data-v-2fc941f6>+ de 1.000</b><br data-v-2fc941f6> Alunos formados nesse curso </span></div></div><div class="col-sm-6 text-center" data-v-2fc941f6><!--[-->`);
      ssrRenderList(displayedCourses.value, (curso) => {
        _push(`<div class="ratio ratio-16x9" data-v-2fc941f6><iframe${ssrRenderAttr("src", curso.video)} class="rounded shadow" data-v-2fc941f6></iframe></div>`);
      });
      _push(`<!--]--></div></div>`);
      if ((_a = displayedCourses.value[0]) == null ? void 0 : _a.ativo) {
        _push(`<div class="row" data-v-2fc941f6><div class="col-sm-8" data-v-2fc941f6><div data-v-2fc941f6><div class="clearfix pt-0" data-v-2fc941f6><h2 data-v-2fc941f6>INFORMA\xC7\xD5ES SOBRE O CURSO</h2><!--[-->`);
        ssrRenderList(displayedCourses.value, (curso) => {
          _push(`<div data-v-2fc941f6><p data-v-2fc941f6>${ssrInterpolate(curso.subtitulo)}</p></div>`);
        });
        _push(`<!--]--></div><ul class="nav nav-tabs mt-5" data-v-2fc941f6>`);
        if ((_b = displayedCourses.value[0]) == null ? void 0 : _b.salaries.length) {
          _push(`<li class="nav-item" data-v-2fc941f6><a class="${ssrRenderClass([{ active: activeTab.value === "media-salarial" }, "nav-link"])}" href="#media-salarial" data-bs-toggle="tab" data-v-2fc941f6>M\xE9dia Salarial</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = displayedCourses.value[0]) == null ? void 0 : _c.contents.length) {
          _push(`<li class="nav-item" data-v-2fc941f6><a class="${ssrRenderClass([{ active: activeTab.value === "conteudo" }, "nav-link"])}" href="#conteudo" data-bs-toggle="tab" data-v-2fc941f6>Conte\xFAdo Program\xE1tico</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = displayedCourses.value[0]) == null ? void 0 : _d.mercadotrabalho) {
          _push(`<li class="nav-item" data-v-2fc941f6><a class="${ssrRenderClass([{ active: activeTab.value === "mercado-de-trabalho" }, "nav-link"])}" href="#mercado-de-trabalho" data-bs-toggle="tab" data-v-2fc941f6>Mercado de Trabalho</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_e = displayedCourses.value[0]) == null ? void 0 : _e.metodologia) {
          _push(`<li class="nav-item" data-v-2fc941f6><a class="${ssrRenderClass([{ active: activeTab.value === "metodologia" }, "nav-link"])}" href="#metodologia" data-bs-toggle="tab" data-v-2fc941f6>Metodologia</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><div class="tab-content p-30" data-v-2fc941f6>`);
        if ((_f = displayedCourses.value[0]) == null ? void 0 : _f.salaries.length) {
          _push(`<div id="media-salarial" class="${ssrRenderClass([{ show: activeTab.value === "media-salarial", active: activeTab.value === "media-salarial" }, "tab-pane fade"])}" data-v-2fc941f6><table class="table table-striped table-borderless mt-2" data-v-2fc941f6><thead data-v-2fc941f6><tr data-v-2fc941f6><th data-v-2fc941f6>Cargo</th><th data-v-2fc941f6>Sal\xE1rio</th></tr></thead><tbody data-v-2fc941f6><!--[-->`);
          ssrRenderList((_g = displayedCourses.value[0]) == null ? void 0 : _g.salaries, (salary) => {
            _push(`<tr data-v-2fc941f6><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-2fc941f6>${ssrInterpolate(salary.cargo)}</th><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-2fc941f6>R$ ${ssrInterpolate(salary.salario)}</th></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_h = displayedCourses.value[0]) == null ? void 0 : _h.contents.length) {
          _push(`<div id="conteudo" class="${ssrRenderClass([{ show: activeTab.value === "conteudo", active: activeTab.value === "conteudo" }, "tab-pane fade"])}" data-v-2fc941f6><table class="table table-striped table-borderless" data-v-2fc941f6><tbody data-v-2fc941f6><!--[-->`);
          ssrRenderList((_i = displayedCourses.value[0]) == null ? void 0 : _i.contents, (content) => {
            _push(`<tr data-v-2fc941f6><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-2fc941f6>${ssrInterpolate(content.conteudo)}</th></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_j = displayedCourses.value[0]) == null ? void 0 : _j.mercadotrabalho) {
          _push(`<div id="mercado-de-trabalho" class="${ssrRenderClass([{ show: activeTab.value === "mercado-de-trabalho", active: activeTab.value === "mercado-de-trabalho" }, "tab-pane fade py-3"])}" data-v-2fc941f6>${ssrInterpolate((_k = displayedCourses.value[0]) == null ? void 0 : _k.mercadotrabalho)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_l = displayedCourses.value[0]) == null ? void 0 : _l.metodologia) {
          _push(`<div id="metodologia" class="${ssrRenderClass([{ show: activeTab.value === "metodologia", active: activeTab.value === "metodologia" }, "tab-pane fade py-3"])}" data-v-2fc941f6>${ssrInterpolate((_m = displayedCourses.value[0]) == null ? void 0 : _m.metodologia)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="col-sm-4" data-v-2fc941f6><div data-v-2fc941f6><div class="mb-45" data-v-2fc941f6><h2 class="" data-v-2fc941f6>Gostou do curso? <br data-v-2fc941f6></h2><p class="h5 mb-5" data-v-2fc941f6>Ent\xE3o garanta sua vaga.</p><h3 class="text-primary" data-v-2fc941f6>INSCREVA-SE AGORA!</h3><hr data-v-2fc941f6></div>`);
        _push(ssrRenderComponent(_component_FormsInscricao, null, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cursos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fc941f6"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BEFvdksh.mjs.map
