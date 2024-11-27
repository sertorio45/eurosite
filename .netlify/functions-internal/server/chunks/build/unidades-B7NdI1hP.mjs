import { _ as _sfc_main$1 } from './Icon-5pRBvot5.mjs';
import { _ as __nuxt_component_1 } from './Wins-BfMTXwLz.mjs';
import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import VueEasyLightbox from 'vue-easy-lightbox';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-DRGY1ko4.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "unidades",
  __ssrInlineRender: true,
  setup(__props) {
    const campinasImages = ref([]);
    const rpImages = ref([]);
    const sjcImages = ref([]);
    const lightboxImages = ref([]);
    const visible = ref(false);
    const currentImageIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_Wins = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4a77e30c><section class="py-5" data-v-4a77e30c><div class="container my-5" data-v-4a77e30c><div class="row align-items-center" data-v-4a77e30c><div class="col-md-5 py-5" data-v-4a77e30c><div id="carouselGallery" class="carousel slide mt-5" data-bs-ride="carousel" data-v-4a77e30c><div class="carousel-inner" data-v-4a77e30c><!--[-->`);
      ssrRenderList(campinasImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-4a77e30c><img${ssrRenderAttr("src", `/unidades/campinas/${image}`)} class="d-block w-100"${ssrRenderAttr("alt", `Imagem ${index + 1}`)} data-v-4a77e30c></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev" data-v-4a77e30c><span class="carousel-control-prev-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next" data-v-4a77e30c><span class="carousel-control-next-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-4a77e30c><div class="profile-info pt-4" data-v-4a77e30c><h1 class="text-capitalize" data-v-4a77e30c>Campinas</h1><div class="contact-info mt-4" data-v-4a77e30c><ul class="list-unstyled mb-3" data-v-4a77e30c><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Telefone:</strong> (19) 3305-2525</p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Email:</strong> <a href="mailto:campinas@euroanglocursos.com.br" data-v-4a77e30c>campinas@euroanglocursos.com.br</a></p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Local:</strong> Rua: Bar\xE3o do Jaguara, 888 - Centro</p></li><li class="map-link" data-v-4a77e30c><a href="https://www.google.com/maps/place/Rua+Bar%C3%A3o+de+Jaguara,+888+-+Conceicao,+Campinas+-+SP,+13015-000/@-22.9066732,-47.0599737,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cf4ad11fbe0f:0x271ea2117594ca25!8m2!3d-22.9066732!4d-47.057785" target="_blank" data-v-4a77e30c><i class="bx bx-map-alt mr-2" data-v-4a77e30c></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-4a77e30c><p class="mb-2" data-v-4a77e30c><strong data-v-4a77e30c>Siga-nos:</strong></p><a href="https://www.facebook.com/euroanglocampinas" target="_blank" class="mr-3" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglocampinas" target="_blank" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram-alt",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div></div></div></div></div><hr class="border border-1 opacity-50" data-v-4a77e30c><div class="row align-items-center" data-v-4a77e30c><div class="col-md-5 py-5" data-v-4a77e30c><div id="carouselRibeirao" class="carousel slide" data-bs-ride="carousel" data-v-4a77e30c><div class="carousel-inner" data-v-4a77e30c><!--[-->`);
      ssrRenderList(rpImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-4a77e30c><img${ssrRenderAttr("src", `/unidades/ribeirao-preto/${image}`)} class="d-block w-100"${ssrRenderAttr("alt", `Imagem ${index + 1}`)} data-v-4a77e30c></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="prev" data-v-4a77e30c><span class="carousel-control-prev-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="next" data-v-4a77e30c><span class="carousel-control-next-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-4a77e30c><div class="profile-info pt-4" data-v-4a77e30c><h1 class="text-capitalize" data-v-4a77e30c>Ribeir\xE3o Preto</h1><div class="contact-info mt-4" data-v-4a77e30c><ul class="list-unstyled mb-3" data-v-4a77e30c><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Telefone:</strong> (16) 3625-3925</p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Email:</strong> <a href="mailto:escolas@euroanglocursos.com.br" data-v-4a77e30c>escolas@euroanglocursos.com.br</a></p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Local:</strong> Rua: Duque de Caxias, 349 - Centro</p></li><li class="map-link" data-v-4a77e30c><a href="https://www.google.com/maps?q=R.+Duque+de+Caxias,+349+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-020" target="_blank" data-v-4a77e30c><i class="bx bx-map-alt mr-2" data-v-4a77e30c></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-4a77e30c><p class="mb-2" data-v-4a77e30c><strong data-v-4a77e30c>Siga-nos:</strong></p><a href="https://www.facebook.com/EscolaEuroAnglo" target="_blank" class="mr-3" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglorp/" target="_blank" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram-alt",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div></div></div></div></div><hr class="border border-1 opacity-50" data-v-4a77e30c><div class="row align-items-center" data-v-4a77e30c><div class="col-md-5" data-v-4a77e30c><div id="carouselSJC" class="carousel slide mt-5" data-bs-ride="carousel" data-v-4a77e30c><div class="carousel-inner" data-v-4a77e30c><!--[-->`);
      ssrRenderList(sjcImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-4a77e30c><img${ssrRenderAttr("src", `/unidades/saojosedoscampos/${image}`)} class="d-block w-100"${ssrRenderAttr("alt", `Imagem ${index + 1}`)} data-v-4a77e30c></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselSJC" data-bs-slide="prev" data-v-4a77e30c><span class="carousel-control-prev-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselSJC" data-bs-slide="next" data-v-4a77e30c><span class="carousel-control-next-icon" aria-hidden="true" data-v-4a77e30c></span><span class="visually-hidden" data-v-4a77e30c>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-4a77e30c><div class="profile-info pt-4" data-v-4a77e30c><h1 class="text-capitalize" data-v-4a77e30c>S\xE3o Jos\xE9 dos Campos</h1><div class="contact-info mt-4" data-v-4a77e30c><ul class="list-unstyled mb-3" data-v-4a77e30c><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Telefone:</strong> (12) 99792-8277</p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Email:</strong> <a href="mailto:saojosedoscampos@euroanglocursos.com.br" data-v-4a77e30c>saojosedoscampos@euroanglocursos.com.br</a></p></li><li data-v-4a77e30c><p data-v-4a77e30c><strong data-v-4a77e30c>Local:</strong> R. Vila\xE7a, 51 - Centro, S\xE3o Jos\xE9 dos Campos - SP, 12210-000</p></li><li class="map-link" data-v-4a77e30c><a href="https://www.google.com/maps/dir//R.+Vila%C3%A7a,+51+-+Centro,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12210-000/@-23.180531,-45.9672419,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc4b851743c8e3:0x4eab92541b98fe46!2m2!1d-45.8848675!2d-23.1805583?entry=ttu&amp;g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" data-v-4a77e30c><i class="bx bx-map-alt mr-2" data-v-4a77e30c></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-4a77e30c><p class="mb-2" data-v-4a77e30c><strong data-v-4a77e30c>Siga-nos:</strong></p><a href="https://m.facebook.com/euroanglosjc/" target="_blank" class="mr-3" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/eurosjc/" target="_blank" data-v-4a77e30c>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram-alt",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Wins, null, null, _parent));
      _push(ssrRenderComponent(unref(VueEasyLightbox), {
        visible: visible.value,
        imgs: lightboxImages.value,
        index: currentImageIndex.value,
        onHide: ($event) => visible.value = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unidades = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a77e30c"]]);

export { unidades as default };
//# sourceMappingURL=unidades-B7NdI1hP.mjs.map
