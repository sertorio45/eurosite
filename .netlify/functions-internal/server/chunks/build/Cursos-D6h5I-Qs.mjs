import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "Cursos",
  __ssrInlineRender: true,
  setup(__props) {
    const allowedCourseIds = [6, 8, 21, 29, 17, 18];
    const capitalizeTitle = (title) => {
      if (!title)
        return "";
      return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };
    const { data: courses, pending, error } = useAsyncData("courses", async () => {
      const response = await $fetch("/api/postsCursos");
      return response.map((course) => ({
        ...course,
        title: capitalizeTitle(course.title)
      }));
    });
    const lastThreeCourses = computed(
      () => {
        var _a;
        return ((_a = courses.value) == null ? void 0 : _a.filter((course) => allowedCourseIds.includes(course.id))) || [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))} data-v-c143da0f><div class="container my-5 py-0 py-lg-5 py-md-5 py-sm-4 min-vh-100 justify-content-center" data-v-c143da0f><div class="row justify-content-center align-items-center g-3 text-center" data-v-c143da0f><h1 data-v-c143da0f>Nossos cursos</h1><p data-v-c143da0f> Os cursos profissionalizantes Euro Anglo foram elaborados para voc\xEA que deseja se preparar para o mercado de trabalho ou adquirir novos conhecimentos. Criamos uma metodologia que relaciona a teoria e a pr\xE1tica, simulando situa\xE7\xF5es que acontecem diariamente nas empresas, para que voc\xEA aprenda a resolv\xEA-las. </p></div>`);
      if (lastThreeCourses.value.length > 0) {
        _push(`<div class="row text-center justify-content-center align-items-center g-2 g-lg-3 my-4" data-v-c143da0f><!--[-->`);
        ssrRenderList(lastThreeCourses.value, (course, index) => {
          _push(`<div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-v-c143da0f><div class="card cursos-card" data-v-c143da0f><div class="img-container" data-v-c143da0f>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: course.image,
            class: "card-img-top img-fluid",
            alt: course.title || "Imagem do course",
            densities: "x1 x2",
            placeholder: [900, 500, 75, 5],
            width: "900",
            height: "500",
            loading: "lazy",
            fit: "cover"
          }, null, _parent));
          _push(`</div><div class="card-body py-4" data-v-c143da0f><h4 class="my-4" data-v-c143da0f>${ssrInterpolate(course.title)}</h4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "card-text mt-auto",
            to: `/cursos/${course.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Mais informa\xE7\xF5es`);
              } else {
                return [
                  createTextVNode("Mais informa\xE7\xF5es")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="row text-center justify-content-center align-items-center g-1 my-4" data-v-c143da0f><!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-v-c143da0f><div class="card cursos-card" data-v-c143da0f><div class="img-container" data-v-c143da0f><div class="placeholder-glow w-100" data-v-c143da0f><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 400 300&#39;%3E%3Crect width=&#39;100%25&#39; height=&#39;100%25&#39; fill=&#39;%23e0e0e0&#39;/%3E%3C/svg%3E" alt="Imagem Placeholder" class="card-img-top img-fluid placeholder" data-v-c143da0f></div></div><div class="card-body d-flex flex-column" data-v-c143da0f><h1 class="placeholder-glow" data-v-c143da0f><span class="placeholder col-12" data-v-c143da0f></span></h1><p class="card-text placeholder-glow" data-v-c143da0f><span class="placeholder col-12" data-v-c143da0f></span></p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="text-center mt-4" data-v-c143da0f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/cursos",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Veja todos os cursos`);
          } else {
            return [
              createTextVNode("Veja todos os cursos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cursos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c143da0f"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Cursos-D6h5I-Qs.mjs.map
