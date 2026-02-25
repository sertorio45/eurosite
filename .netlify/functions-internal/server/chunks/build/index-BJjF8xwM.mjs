import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { _ as _sfc_main$2 } from './Icon-5pRBvot5.mjs';
import { _ as __nuxt_component_2 } from './Wins-Bupx8_L5.mjs';
import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import VueEasyLightbox from 'vue-easy-lightbox';
import { _ as _export_sfc } from './server.mjs';
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
import './nuxt-link-DRGY1ko4.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const campinasImages = ref([]);
    const rpImages = ref([]);
    const sjcImages = ref([]);
    const lightboxImages = ref([]);
    const visible = ref(false);
    const currentImageIndex = ref(0);
    const openLightbox = (index2, city) => {
      if (city === "campinas") {
        lightboxImages.value = campinasImages.value.map((image) => `/unidades/campinas/${image}`);
      } else if (city === "ribeirao-preto") {
        lightboxImages.value = rpImages.value.map((image) => `/unidades/ribeirao-preto/${image}`);
      } else if (city === "saojosedoscampos") {
        lightboxImages.value = sjcImages.value.map((image) => `/unidades/saojosedoscampos/${image}`);
      }
      currentImageIndex.value = index2;
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_Wins = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-35a9652b><section class="py-5" data-v-35a9652b><div class="container my-5" data-v-35a9652b><div class="row align-items-center" data-v-35a9652b><div class="col-md-5 py-5" data-v-35a9652b><div id="carouselGallery" class="carousel slide mt-5" data-bs-ride="carousel" data-v-35a9652b><div class="carousel-inner" data-v-35a9652b><!--[-->`);
      ssrRenderList(campinasImages.value, (image, index2) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index2 === 0 }])}" data-v-35a9652b>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/campinas/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index2 + 1}`,
          onClick: ($event) => openLightbox(index2, "campinas"),
          placeholder: 15,
          fit: "cover",
          width: "500px",
          densities: "x1 x2",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev" data-v-35a9652b><span class="carousel-control-prev-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next" data-v-35a9652b><span class="carousel-control-next-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-35a9652b><div class="profile-info pt-4" data-v-35a9652b><h1 class="text-capitalize" data-v-35a9652b>Campinas</h1><div class="contact-info mt-4" data-v-35a9652b><ul class="list-unstyled mb-3" data-v-35a9652b><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Telefone:</strong> (16) 99121-3522</p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-35a9652b>diretoria@euroanglocursos.com.br</a></p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Local:</strong> Rua: Bar\xE3o do Jaguara, 888 - Centro</p></li><li class="map-link" data-v-35a9652b><a href="https://www.google.com/maps/place/Rua+Bar%C3%A3o+de+Jaguara,+888+-+Conceicao,+Campinas+-+SP,+13015-000/@-22.9066732,-47.0599737,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cf4ad11fbe0f:0x271ea2117594ca25!8m2!3d-22.9066732!4d-47.057785" target="_blank" data-v-35a9652b><i class="bx bx-map-alt mr-2" data-v-35a9652b></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-35a9652b><p class="mb-2" data-v-35a9652b><strong data-v-35a9652b>Siga-nos:</strong></p><a href="https://www.facebook.com/euroanglocampinas" target="_blank" class="mr-3" data-v-35a9652b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglocampinas" target="_blank" data-v-35a9652b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram-alt",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div></div></div></div></div><hr class="border border-1 opacity-50" data-v-35a9652b><div class="row align-items-center" data-v-35a9652b><div class="col-md-5 py-5" data-v-35a9652b><div id="carouselRibeirao" class="carousel slide" data-bs-ride="carousel" data-v-35a9652b><div class="carousel-inner" data-v-35a9652b><!--[-->`);
      ssrRenderList(rpImages.value, (image, index2) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index2 === 0 }])}" data-v-35a9652b>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/ribeirao-preto/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index2 + 1}`,
          onClick: ($event) => openLightbox(index2, "ribeirao-preto"),
          densities: "x1 x2",
          placeholder: 15,
          width: "500px",
          fit: "cover",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="prev" data-v-35a9652b><span class="carousel-control-prev-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="next" data-v-35a9652b><span class="carousel-control-next-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-35a9652b><div class="profile-info pt-4" data-v-35a9652b><h1 class="text-capitalize" data-v-35a9652b>Ribeir\xE3o Preto</h1><div class="contact-info mt-4" data-v-35a9652b><ul class="list-unstyled mb-3" data-v-35a9652b><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Telefone:</strong> (16) 99121-3522</p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-35a9652b>diretoria@euroanglocursos.com.br</a></p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Local:</strong> Rua: Amador Bueno, 774, Centro</p></li><li class="map-link" data-v-35a9652b><a href="https://www.google.com/maps?q=R.+Duque+de+Caxias,+349+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-020" target="_blank" data-v-35a9652b><i class="bx bx-map-alt mr-2" data-v-35a9652b></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-35a9652b><p class="mb-2" data-v-35a9652b><strong data-v-35a9652b>Siga-nos:</strong></p><a href="https://www.facebook.com/EscolaEuroAnglo" target="_blank" class="mr-3" data-v-35a9652b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglorp/" target="_blank" data-v-35a9652b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram-alt",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div></div></div></div></div><hr class="border border-1 opacity-50" data-v-35a9652b><div class="row align-items-center" data-v-35a9652b><div class="col-md-5" data-v-35a9652b><div id="carouselSJC" class="carousel slide mt-5" data-bs-ride="carousel" data-v-35a9652b><div class="carousel-inner" data-v-35a9652b><!--[-->`);
      ssrRenderList(sjcImages.value, (image, index2) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index2 === 0 }])}" data-v-35a9652b>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/saojosedoscampos/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index2 + 1}`,
          onClick: ($event) => openLightbox(index2, "saojosedoscampos"),
          densities: "x1 x2",
          placeholder: "",
          width: "500px",
          fit: "cover",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselSJC" data-bs-slide="prev" data-v-35a9652b><span class="carousel-control-prev-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselSJC" data-bs-slide="next" data-v-35a9652b><span class="carousel-control-next-icon" aria-hidden="true" data-v-35a9652b></span><span class="visually-hidden" data-v-35a9652b>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-35a9652b><div class="profile-info pt-4" data-v-35a9652b><h1 class="text-capitalize" data-v-35a9652b>S\xE3o Jos\xE9 dos Campos</h1><div class="contact-info mt-4" data-v-35a9652b><ul class="list-unstyled mb-3" data-v-35a9652b><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Telefone:</strong> (16) 99121-3522</p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-35a9652b>diretoria@euroanglocursos.com.br</a></p></li><li data-v-35a9652b><p data-v-35a9652b><strong data-v-35a9652b>Local:</strong> R. Vila\xE7a, 51 - Centro, S\xE3o Jos\xE9 dos Campos - SP, 12210-000</p></li><li class="map-link" data-v-35a9652b><a href="https://www.google.com/maps/dir//R.+Vila%C3%A7a,+51+-+Centro,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12210-000/@-23.180531,-45.9672419,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc4b851743c8e3:0x4eab92541b98fe46!2m2!1d-45.8848675!2d-23.1805583?entry=ttu&amp;g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" data-v-35a9652b><i class="bx bx-map-alt mr-2" data-v-35a9652b></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-35a9652b><p class="mb-2" data-v-35a9652b><strong data-v-35a9652b>Siga-nos:</strong></p><a href="https://m.facebook.com/euroanglosjc/" target="_blank" class="mr-3" data-v-35a9652b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/eurosjc/" target="_blank" data-v-35a9652b>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidades/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35a9652b"]]);

export { index as default };
//# sourceMappingURL=index-BJjF8xwM.mjs.map
