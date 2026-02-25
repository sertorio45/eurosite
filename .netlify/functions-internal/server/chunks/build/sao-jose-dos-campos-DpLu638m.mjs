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
  __name: "sao-jose-dos-campos",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    ref([]);
    const sjcImages = ref([]);
    const lightboxImages = ref([]);
    const visible = ref(false);
    const currentImageIndex = ref(0);
    const openLightbox = (index, city) => {
      {
        lightboxImages.value = sjcImages.value.map((image) => `/unidades/saojosedoscampos/${image}`);
      }
      currentImageIndex.value = index;
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_Wins = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b71deaac><section class="py-5" data-v-b71deaac><div class="container my-5" data-v-b71deaac><div class="row align-items-center" data-v-b71deaac><div class="col-md-5" data-v-b71deaac><div id="carouselSJC" class="carousel slide mt-5" data-bs-ride="carousel" data-v-b71deaac><div class="carousel-inner" data-v-b71deaac><!--[-->`);
      ssrRenderList(sjcImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-b71deaac>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/saojosedoscampos/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index + 1}`,
          onClick: ($event) => openLightbox(index),
          densities: "x1 x2",
          placeholder: "",
          width: "500px",
          height: "600px",
          fit: "cover",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselSJC" data-bs-slide="prev" data-v-b71deaac><span class="carousel-control-prev-icon" aria-hidden="true" data-v-b71deaac></span><span class="visually-hidden" data-v-b71deaac>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselSJC" data-bs-slide="next" data-v-b71deaac><span class="carousel-control-next-icon" aria-hidden="true" data-v-b71deaac></span><span class="visually-hidden" data-v-b71deaac>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-b71deaac><div class="profile-info pt-4" data-v-b71deaac><h1 class="text-capitalize" data-v-b71deaac>S\xE3o Jos\xE9 dos Campos</h1><div class="contact-info mt-4" data-v-b71deaac><ul class="list-unstyled mb-3" data-v-b71deaac><li data-v-b71deaac><p data-v-b71deaac><strong data-v-b71deaac>Telefone:</strong> (16) 99121-3522</p></li><li data-v-b71deaac><p data-v-b71deaac><strong data-v-b71deaac>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-b71deaac>diretoria@euroanglocursos.com.br</a></p></li><li data-v-b71deaac><p data-v-b71deaac><strong data-v-b71deaac>Local:</strong> R. Vila\xE7a, 51 - Centro, S\xE3o Jos\xE9 dos Campos - SP, 12210-000</p></li><li class="map-link" data-v-b71deaac><a href="https://www.google.com/maps/dir//R.+Vila%C3%A7a,+51+-+Centro,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12210-000/@-23.180531,-45.9672419,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc4b851743c8e3:0x4eab92541b98fe46!2m2!1d-45.8848675!2d-23.1805583?entry=ttu&amp;g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" data-v-b71deaac><i class="bx bx-map-alt mr-2" data-v-b71deaac></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-b71deaac><p class="mb-2" data-v-b71deaac><strong data-v-b71deaac>Siga-nos:</strong></p><a href="https://m.facebook.com/euroanglosjc/" target="_blank" class="mr-3" data-v-b71deaac>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/eurosjc/" target="_blank" data-v-b71deaac>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidades/sao-jose-dos-campos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saoJoseDosCampos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b71deaac"]]);

export { saoJoseDosCampos as default };
//# sourceMappingURL=sao-jose-dos-campos-DpLu638m.mjs.map
