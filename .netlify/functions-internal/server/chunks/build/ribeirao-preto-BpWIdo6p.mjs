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
  __name: "ribeirao-preto",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const rpImages = ref([]);
    ref([]);
    const lightboxImages = ref([]);
    const visible = ref(false);
    const currentImageIndex = ref(0);
    const openLightbox = (index, city) => {
      {
        lightboxImages.value = rpImages.value.map((image) => `/unidades/ribeirao-preto/${image}`);
      }
      currentImageIndex.value = index;
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_Wins = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1f3ccbb8><section class="py-5" data-v-1f3ccbb8><div class="container my-5" data-v-1f3ccbb8><div class="row align-items-center" data-v-1f3ccbb8><div class="col-md-5 py-5" data-v-1f3ccbb8><div id="carouselRibeirao" class="carousel slide" data-bs-ride="carousel" data-v-1f3ccbb8><div class="carousel-inner" data-v-1f3ccbb8><!--[-->`);
      ssrRenderList(rpImages.value, (image, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}" data-v-1f3ccbb8>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/unidades/ribeirao-preto/${image}`,
          class: "d-block w-100",
          alt: `Imagem ${index + 1}`,
          onClick: ($event) => openLightbox(index),
          densities: "x1 x2",
          placeholder: "",
          width: "500px",
          fit: "cover",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="prev" data-v-1f3ccbb8><span class="carousel-control-prev-icon" aria-hidden="true" data-v-1f3ccbb8></span><span class="visually-hidden" data-v-1f3ccbb8>Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselRibeirao" data-bs-slide="next" data-v-1f3ccbb8><span class="carousel-control-next-icon" aria-hidden="true" data-v-1f3ccbb8></span><span class="visually-hidden" data-v-1f3ccbb8>Pr\xF3ximo</span></button></div></div><div class="col-md-7" data-v-1f3ccbb8><div class="profile-info pt-4" data-v-1f3ccbb8><h1 class="text-capitalize" data-v-1f3ccbb8>Ribeir\xE3o Preto</h1><div class="contact-info mt-4" data-v-1f3ccbb8><ul class="list-unstyled mb-3" data-v-1f3ccbb8><li data-v-1f3ccbb8><p data-v-1f3ccbb8><strong data-v-1f3ccbb8>Telefone:</strong> (16) 99121-3522</p></li><li data-v-1f3ccbb8><p data-v-1f3ccbb8><strong data-v-1f3ccbb8>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br" data-v-1f3ccbb8>diretoria@euroanglocursos.com.br</a></p></li><li data-v-1f3ccbb8><p data-v-1f3ccbb8><strong data-v-1f3ccbb8>Local:</strong> Rua: Amador Bueno, 774, Centro</p></li><li class="map-link" data-v-1f3ccbb8><a href="https://www.google.com/maps?q=R.+Duque+de+Caxias,+349+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-020" target="_blank" data-v-1f3ccbb8><i class="bx bx-map-alt mr-2" data-v-1f3ccbb8></i> Visualize o mapa completo </a></li></ul><div class="social-icons text-left" data-v-1f3ccbb8><p class="mb-2" data-v-1f3ccbb8><strong data-v-1f3ccbb8>Siga-nos:</strong></p><a href="https://www.facebook.com/EscolaEuroAnglo" target="_blank" class="mr-3" data-v-1f3ccbb8>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook-circle",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/euroanglorp/" target="_blank" data-v-1f3ccbb8>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidades/ribeirao-preto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ribeiraoPreto = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f3ccbb8"]]);

export { ribeiraoPreto as default };
//# sourceMappingURL=ribeirao-preto-BpWIdo6p.mjs.map
