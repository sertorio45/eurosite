import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "Cursos",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    const lastThreeCourses = computed(() => courses.value.slice(0, 3));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))} data-v-2ce08c22><div class="container my-5 py-5 min-vh-100 justify-content-center" data-v-2ce08c22><div class="row justify-content-center align-items-center g-3 text-center" data-v-2ce08c22><h1 data-v-2ce08c22>Nossos cursos</h1><p data-v-2ce08c22> Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens. </p></div>`);
      if (lastThreeCourses.value.length > 0) {
        _push(`<div class="row text-center justify-content-center align-items-center g-1 my-4" data-v-2ce08c22><!--[-->`);
        ssrRenderList(lastThreeCourses.value, (course, index) => {
          _push(`<div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-v-2ce08c22><div class="card cursos-card h-100 d-flex flex-column" data-v-2ce08c22><div class="img-container" data-v-2ce08c22><img${ssrRenderAttr("src", course.image)} class="card-img-top img-fluid"${ssrRenderAttr("alt", course.title || "Imagem do curso")} loading="lazy" data-v-2ce08c22></div><div class="card-body d-flex flex-column" data-v-2ce08c22><h3 data-v-2ce08c22>${ssrInterpolate(course.title)}</h3>`);
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
        _push(`<div class="row text-center justify-content-center align-items-center g-1 my-4" data-v-2ce08c22><!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-v-2ce08c22><div class="card cursos-card d-flex flex-column" data-v-2ce08c22><div class="img-container" data-v-2ce08c22><div class="placeholder-glow w-100" data-v-2ce08c22><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 400 300&#39;%3E%3Crect width=&#39;100%25&#39; height=&#39;100%25&#39; fill=&#39;%23e0e0e0&#39;/%3E%3C/svg%3E" alt="Imagem Placeholder" class="card-img-top img-fluid" data-v-2ce08c22></div></div><div class="card-body d-flex flex-column" data-v-2ce08c22><h1 class="placeholder-glow" data-v-2ce08c22><span class="placeholder col-12" data-v-2ce08c22></span></h1><p class="card-text placeholder-glow" data-v-2ce08c22><span class="placeholder col-12" data-v-2ce08c22></span></p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="text-center mt-4" data-v-2ce08c22>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ce08c22"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Cursos-C3rIh1Ep.mjs.map
