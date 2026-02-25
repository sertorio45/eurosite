import { _ as _sfc_main$4 } from './NuxtImg-EInSGp_T.mjs';
import { _ as _sfc_main$6 } from './Icon-5pRBvot5.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './Cursos-D6h5I-Qs.mjs';
import { _ as __nuxt_component_2 } from './Wins-Bupx8_L5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { _ as _sfc_main$5 } from './Depoimentos-BC1lBlV6.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
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
import 'vue-router';
import './AtendimentoRapido-ByznP_h0.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$4;
  const _component_Icon = _sfc_main$6;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container my-5"><div class="row"><div class="col"><div id="banners-desktop" class="carousel slide d-none d-md-block" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "d-block w-100",
    src: "/img/banners-rotativos/bolsas-desktop.webp",
    densities: "x1 x2",
    placeholder: "",
    width: "1920",
    loading: "eager",
    fit: "cover"
  }, null, _parent));
  _push(`</div><div class="carousel-item">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/banners-rotativos/cursos-gratuitos-desktop.webp",
    class: "d-block w-100",
    densities: "x1 x2",
    placeholder: "",
    width: "1920",
    loading: "eager",
    fit: "cover"
  }, null, _parent));
  _push(`</div><div class="carousel-item">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/banners-rotativos/mercado-de-trabalho.webp",
    class: "d-block w-100",
    densities: "x1 x2",
    placeholder: "",
    width: "1920",
    loading: "eager",
    fit: "cover"
  }, null, _parent));
  _push(`</div></div><button class="carousel-control-prev" type="button" data-bs-target="#banners-desktop" data-bs-slide="prev"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-left-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#banners-desktop" data-bs-slide="next"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-right-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Next</span></button></div><div id="banners-mobile" class="carousel slide d-block d-md-none" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/banners-rotativos/bolsas-mobile.webp",
    class: "d-block w-100",
    alt: "Banner Mobile",
    fit: "cover",
    loading: "eager",
    width: "100%",
    placeholder: ""
  }, null, _parent));
  _push(`</div><div class="carousel-item">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/banners-rotativos/cursos-gratuitos-mobile.webp",
    class: "d-block w-100",
    alt: "Banner Mobile 2",
    fit: "cover",
    loading: "eager",
    width: "100%",
    placeholder: ""
  }, null, _parent));
  _push(`</div><div class="carousel-item">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/banners-rotativos/mercado-de-trabalho-mobile.webp",
    class: "d-block w-100",
    alt: "Banner Mobile 2",
    fit: "cover",
    loading: "eager",
    width: "100%",
    placeholder: ""
  }, null, _parent));
  _push(`</div></div><button class="carousel-control-prev" type="button" data-bs-target="#banners-mobile" data-bs-slide="prev"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-left-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#banners-mobile" data-bs-slide="next"><span aria-hidden="true">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-right-arrow-circle",
    fontSize: "3em"
  }, null, _parent));
  _push(`</span><span class="visually-hidden">Next</span></button></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banners.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const anoFundacao = 2006;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Motivos",
  __ssrInlineRender: true,
  setup(__props) {
    const anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
    const anoEmpresa = computed(() => anoAtual - anoFundacao);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="my-5 py-5"><div class="container"><div class="row"><div class="col-md-3 col-sm-12"><h2>MOTIVOS PARA ESCOLHER A EURO ANGLO</h2><p> Todos os alunos que se formam na Euro Anglo Cursos tem garantia de sucesso profissional, pois nossos cursos sempre est\xE3o atualizados com o mercado atual. </p>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/girl.webp",
        alt: "Motivos para fazer um curso com a Euro Anglo Cursos",
        class: "girl-img d-none d-sm-block",
        width: "100%",
        sizes: "sm:400px md:500px lg:500px",
        placeholder: 15,
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="col-md-6 col-sm-12 container-motivos"><div class="row text-center g-2 g-lg-3 g-sm-1 g-md-2"><div class="col-6"><div class="card"><div class="card-body">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/motivos/parcerias.webp",
        alt: "Aprenda cursos e trabalhe para grandes empresas",
        class: "rounded-circle shadow p-4 mb-4 bg-white",
        width: "100px",
        sizes: "lg:100vw md:100vw",
        loading: "lazy",
        placeholder: 15
      }, null, _parent));
      _push(`<h3 class="h6 fw-bold">Grandes parcerias</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/motivos/material.webp",
        alt: "Material did\xE1tico de \xFAltima gera\xE7\xE3o.",
        class: "rounded-circle shadow p-4 mb-4 bg-white",
        width: "100px",
        sizes: "lg:100vw md:100vw",
        loading: "lazy",
        placeholder: 15
      }, null, _parent));
      _push(`<h3 class="h6 fw-bold">Material did\xE1tico</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/motivos/aprendizado.webp",
        alt: "Aprenda cursos e trabalhe para grandes empresas",
        class: "rounded-circle shadow p-4 mb-4 bg-white",
        width: "100px",
        sizes: "lg:100vw md:100vw",
        loading: "lazy",
        placeholder: 15
      }, null, _parent));
      _push(`<h3 class="h6 fw-bold">Aprenda na pr\xE1tica</h3></div></div></div><div class="col-6"><div class="card"><div class="card-body">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/motivos/hist\xF3ria.webp",
        alt: "Aprenda cursos e trabalhe para grandes empresas",
        class: "rounded-circle shadow p-4 mb-4 bg-white",
        width: "100px",
        sizes: "lg:100vw md:100vw",
        loading: "lazy",
        placeholder: 15
      }, null, _parent));
      _push(`<h3 class="h6 fw-bold">${ssrInterpolate(anoEmpresa.value)} anos de hist\xF3ria</h3></div></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Motivos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BlogFixed",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: posts } = useAsyncData("posts", () => $fetch("/api/posts"));
    const lastThreePosts = computed(() => {
      var _a;
      return ((_a = posts == null ? void 0 : posts.value) == null ? void 0 : _a.slice(0, 3)) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary py-5" }, _attrs))} data-v-3aee775a><div class="container my-5" data-v-3aee775a><h2 class="text-center mb-5 text-light" data-v-3aee775a>Blog</h2><div class="row justify-items-center" data-v-3aee775a><!--[-->`);
      ssrRenderList(lastThreePosts.value, (post) => {
        _push(`<div class="col-md-4 my-3" data-v-3aee775a><div class="card blog-card h-100" data-v-3aee775a>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.image,
          class: "card-img-top img-fluid",
          alt: "Imagem do post",
          densities: "x1 x2",
          placeholder: [500, 500, 75, 5],
          width: "500",
          height: "500",
          loading: "lazy",
          quality: "80"
        }, null, _parent));
        _push(`<div class="card-body" data-v-3aee775a><h4 class="card-title mt-2" data-v-3aee775a>${ssrInterpolate(post.title)}</h4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary",
          to: `/blog/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ver artigo`);
            } else {
              return [
                createTextVNode("Ver artigo")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogFixed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3aee775a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Banners = __nuxt_component_0;
  const _component_Cursos = __nuxt_component_1;
  const _component_Wins = __nuxt_component_2;
  const _component_Motivos = _sfc_main$2;
  const _component_BlogFixed = __nuxt_component_4;
  const _component_Depoimentos = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-fd146756>`);
  _push(ssrRenderComponent(_component_Banners, null, null, _parent));
  _push(ssrRenderComponent(_component_Cursos, null, null, _parent));
  _push(ssrRenderComponent(_component_Wins, null, null, _parent));
  _push(ssrRenderComponent(_component_Motivos, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogFixed, null, null, _parent));
  _push(ssrRenderComponent(_component_Depoimentos, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fd146756"]]);

export { index as default };
//# sourceMappingURL=index-qsUMIRJI.mjs.map
