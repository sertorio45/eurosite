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
  __name: "campinas",
  __ssrInlineRender: true,
  setup(__props) {
    const campinasImages = ref([]);
    ref([]);
    ref([]);
    const lightboxImages = ref([]);
    const visible = ref(false);
    const currentImageIndex = ref(0);
    const openLightbox = (index, city) => {
      {
        lightboxImages.value = campinasImages.value.map((image) => `/unidades/campinas/${image}`);
      }
      currentImageIndex.value = index;
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_Wins = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d37ac0af><section class="py-5" data-v-d37ac0af><div class="container my-5" data-v-d37ac0af><div class="row align-items-center" data-v-d37ac0af><div class="col-md-5 py-5" data-v-d37ac0af><div id="carouselGallery" class="carousel slide mt-5" data-bs-ride="carousel" data-v-d37ac0af><div class="carousel-inner" data-v-d37ac0af><!--[-->`);
      ssrRenderList(campinasImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-d37ac0af>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/campinas/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index + 1}`,
          onClick: ($event) => openLightbox(index),
          placeholder: "",
          fit: "cover",
          width: "500px",
          densities: "x1 x2",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev" data-v-d37ac0af><span class="carousel-control-prev-icon" aria-hidden="true" data-v-d37ac0af></span><span class="visually-hidden" data-v-d37ac0af>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next" data-v-d37ac0af><span class="carousel-control-next-icon" aria-hidden="true" data-v-d37ac0af></span><span class="visually-hidden" data-v-d37ac0af>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-d37ac0af><div class="profile-info pt-4" data-v-d37ac0af><h1 class="text-capitalize" data-v-d37ac0af>Campinas</h1><div class="contact-info mt-4" data-v-d37ac0af><ul class="list-unstyled mb-3" data-v-d37ac0af><li data-v-d37ac0af><p data-v-d37ac0af><strong data-v-d37ac0af>Telefone:</strong> (16) 99121-3522</p></li><li data-v-d37ac0af><p data-v-d37ac0af><strong data-v-d37ac0af>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-d37ac0af>diretoria@euroanglocursos.com.br</a></p></li><li data-v-d37ac0af><p data-v-d37ac0af><strong data-v-d37ac0af>Local:</strong> Rua: Bar\xE3o do Jaguara, 888 - Centro</p></li><li class="map-link" data-v-d37ac0af><a href="https://www.google.com/maps/place/Rua+Bar%C3%A3o+de+Jaguara,+888+-+Conceicao,+Campinas+-+SP,+13015-000/@-22.9066732,-47.0599737,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cf4ad11fbe0f:0x271ea2117594ca25!8m2!3d-22.9066732!4d-47.057785" target="_blank" data-v-d37ac0af><i class="bx bx-map-alt mr-2" data-v-d37ac0af></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-d37ac0af><p class="mb-2" data-v-d37ac0af><strong data-v-d37ac0af>Siga-nos:</strong></p><a href="https://www.facebook.com/euroanglocampinas" target="_blank" class="mr-3" data-v-d37ac0af>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglocampinas" target="_blank" data-v-d37ac0af>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidades/campinas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const campinas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d37ac0af"]]);

export { campinas as default };
//# sourceMappingURL=campinas-nZoRGjwU.mjs.map
