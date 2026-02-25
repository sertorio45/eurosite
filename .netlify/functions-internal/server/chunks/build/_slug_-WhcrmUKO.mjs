import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-EInSGp_T.mjs';
import { I as Inscricao } from './Inscricao-DsdPG7OE.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './index-C2merokO.mjs';
import '@unhead/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    const displayedCourses = ref([]);
    const randomStudentNumber = ref(0);
    const currentCourse = computed(() => displayedCourses.value[0] || null);
    const activeTab = ref("");
    const generateRandomNumber = () => {
      randomStudentNumber.value = Math.floor(Math.random() * (8e3 - 2e3 + 1)) + 2e3;
    };
    const route = useRoute();
    const slug = route.params.slug;
    const { data: coursesData, error } = useAsyncData(
      "courses",
      () => $fetch("/api/postsCursos")
    );
    if (error.value) {
      console.error("Erro ao carregar cursos:", error.value);
    }
    if (coursesData.value) {
      courses.value = coursesData.value;
      const cursoCorrespondente = courses.value.find((curso) => curso.slug === slug);
      if (cursoCorrespondente) {
        displayedCourses.value = [cursoCorrespondente];
        if (cursoCorrespondente.salaries.length) {
          activeTab.value = "media-salarial";
        } else if (cursoCorrespondente.contents.length) {
          activeTab.value = "conteudo";
        } else if (cursoCorrespondente.mercadotrabalho) {
          activeTab.value = "mercado-de-trabalho";
        } else if (cursoCorrespondente.metodologia) {
          activeTab.value = "metodologia";
        }
      } else {
        console.warn("Curso correspondente n\xE3o encontrado para o slug:", slug);
      }
    }
    watch(
      () => route.params.slug,
      () => {
        generateRandomNumber();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      const _component_FormsInscricao = Inscricao;
      _push(`<!--[--><section class="bg-light py-5 text-center" data-v-c7f9426b><div data-v-c7f9426b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`P\xE1gina inicial`);
          } else {
            return [
              createTextVNode("P\xE1gina inicial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/cursos",
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cursos`);
          } else {
            return [
              createTextVNode("Cursos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span data-v-c7f9426b>${ssrInterpolate((_a = currentCourse.value) == null ? void 0 : _a.title)}</span></div></section><section class="py-5" data-v-c7f9426b><div class="container" data-v-c7f9426b><div class="row py-5 my-5" data-v-c7f9426b><div class="col-sm-6 text-center" data-v-c7f9426b><div class="pt-30" data-v-c7f9426b>`);
      if (currentCourse.value) {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#b92027!important", "font-size": "36px!important", "margin-bottom": "3vh" })}" data-v-c7f9426b>${ssrInterpolate(currentCourse.value.title)}</h2>`);
      } else {
        _push(`<h2 class="placeholder-glow" style="${ssrRenderStyle({ "color": "#b92027!important", "font-size": "36px!important", "margin-bottom": "3vh" })}" data-v-c7f9426b><span class="placeholder col-6" data-v-c7f9426b></span></h2>`);
      }
      _push(`</div><div data-v-c7f9426b>`);
      if (currentCourse.value) {
        _push(`<h2 class="mb-5" data-v-c7f9426b>A MELHOR ESTRUTURA PARA VOC\xCA</h2>`);
      } else {
        _push(`<h2 class="placeholder-glow" data-v-c7f9426b><span class="placeholder col-8" data-v-c7f9426b></span></h2>`);
      }
      if (currentCourse.value) {
        _push(`<p class="h5" data-v-c7f9426b>Estude na melhor escola do interior paulista.</p>`);
      } else {
        _push(`<p class="placeholder-glow h5" data-v-c7f9426b><span class="placeholder col-4" data-v-c7f9426b></span></p>`);
      }
      _push(`<span id="numbers" data-v-c7f9426b>`);
      if (currentCourse.value) {
        _push(`<b data-v-c7f9426b>+ de ${ssrInterpolate(randomStudentNumber.value)}</b>`);
      } else {
        _push(`<span class="placeholder col-3" data-v-c7f9426b></span>`);
      }
      _push(`<br data-v-c7f9426b><p data-v-c7f9426b>Alunos formados nesse curso</p></span></div></div><div class="col-sm-6 text-center" data-v-c7f9426b><div class="ratio ratio-16x9" data-v-c7f9426b>`);
      if ((_b = currentCourse.value) == null ? void 0 : _b.video) {
        _push(`<iframe${ssrRenderAttr("src", currentCourse.value.video)} class="rounded shadow" data-v-c7f9426b></iframe>`);
      } else if ((_c = currentCourse.value) == null ? void 0 : _c.image) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: currentCourse.value.image,
          alt: currentCourse.value.title,
          class: "rounded shadow img-fluid",
          fit: "cover",
          loading: "lazy",
          placeholder: 15,
          width: "700",
          height: "400",
          sizes: "700px sm:100 md:100px lg:900"
        }, null, _parent));
      } else {
        _push(`<div class="placeholder-glow" data-v-c7f9426b><div class="placeholder col-12" style="${ssrRenderStyle({ "height": "100%" })}" data-v-c7f9426b></div></div>`);
      }
      _push(`</div></div></div>`);
      if ((_d = currentCourse.value) == null ? void 0 : _d.ativo) {
        _push(`<div class="row" data-v-c7f9426b><div class="col-sm-8" data-v-c7f9426b><div data-v-c7f9426b><div class="clearfix pt-0" data-v-c7f9426b><h2 data-v-c7f9426b>INFORMA\xC7\xD5ES SOBRE O CURSO</h2>`);
        if (currentCourse.value) {
          _push(`<p class="" data-v-c7f9426b>${ssrInterpolate(currentCourse.value.subtitulo)}</p>`);
        } else {
          _push(`<p class="placeholder-glow" data-v-c7f9426b><span class="placeholder col-8" data-v-c7f9426b></span></p>`);
        }
        _push(`</div><ul class="nav nav-tabs mt-5" data-v-c7f9426b>`);
        if ((_e = currentCourse.value) == null ? void 0 : _e.salaries.length) {
          _push(`<li class="nav-item" data-v-c7f9426b><a class="${ssrRenderClass([{ active: activeTab.value === "media-salarial" }, "nav-link"])}" data-v-c7f9426b>M\xE9dia Salarial</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_f = currentCourse.value) == null ? void 0 : _f.contents.length) {
          _push(`<li class="nav-item" data-v-c7f9426b><a class="${ssrRenderClass([{ active: activeTab.value === "conteudo" }, "nav-link"])}" data-v-c7f9426b>Conte\xFAdo Program\xE1tico</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_g = currentCourse.value) == null ? void 0 : _g.mercadotrabalho) {
          _push(`<li class="nav-item" data-v-c7f9426b><a class="${ssrRenderClass([{ active: activeTab.value === "mercado-de-trabalho" }, "nav-link"])}" data-v-c7f9426b>Mercado de Trabalho</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_h = currentCourse.value) == null ? void 0 : _h.metodologia) {
          _push(`<li class="nav-item" data-v-c7f9426b><a class="${ssrRenderClass([{ active: activeTab.value === "metodologia" }, "nav-link"])}" data-v-c7f9426b>Metodologia</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><div class="tab-content p-30" data-v-c7f9426b>`);
        if ((_i = currentCourse.value) == null ? void 0 : _i.salaries.length) {
          _push(`<div id="media-salarial" class="${ssrRenderClass([{ show: activeTab.value === "media-salarial", active: activeTab.value === "media-salarial" }, "tab-pane fade"])}" data-v-c7f9426b><table class="table table-striped table-borderless mt-2" data-v-c7f9426b><thead data-v-c7f9426b><tr data-v-c7f9426b><th data-v-c7f9426b>Cargo</th><th data-v-c7f9426b>Sal\xE1rio</th></tr></thead><tbody data-v-c7f9426b><!--[-->`);
          ssrRenderList(currentCourse.value.salaries, (salary) => {
            _push(`<tr data-v-c7f9426b><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-c7f9426b>${ssrInterpolate(salary.cargo)}</th><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-c7f9426b>R$ ${ssrInterpolate(salary.salario)}</th></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_j = currentCourse.value) == null ? void 0 : _j.contents.length) {
          _push(`<div id="conteudo" class="${ssrRenderClass([{ show: activeTab.value === "conteudo", active: activeTab.value === "conteudo" }, "tab-pane fade"])}" data-v-c7f9426b><table class="table table-striped table-borderless" data-v-c7f9426b><tbody data-v-c7f9426b><!--[-->`);
          ssrRenderList(currentCourse.value.contents, (content) => {
            _push(`<tr data-v-c7f9426b><th style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-c7f9426b>${ssrInterpolate(content.conteudo)}</th></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_k = currentCourse.value) == null ? void 0 : _k.mercadotrabalho) {
          _push(`<div id="mercado-de-trabalho" class="${ssrRenderClass([{ show: activeTab.value === "mercado-de-trabalho", active: activeTab.value === "mercado-de-trabalho" }, "tab-pane fade py-3"])}" data-v-c7f9426b>${ssrInterpolate(currentCourse.value.mercadotrabalho)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_l = currentCourse.value) == null ? void 0 : _l.metodologia) {
          _push(`<div id="metodologia" class="${ssrRenderClass([{ show: activeTab.value === "metodologia", active: activeTab.value === "metodologia" }, "tab-pane fade py-3"])}" data-v-c7f9426b>${ssrInterpolate(currentCourse.value.metodologia)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="col-sm-4" data-v-c7f9426b><div data-v-c7f9426b><div class="mb-45" data-v-c7f9426b>`);
        if (currentCourse.value) {
          _push(`<h2 class="" data-v-c7f9426b>Gostou do curso? <br data-v-c7f9426b></h2>`);
        } else {
          _push(`<h2 class="placeholder-glow" data-v-c7f9426b><span class="placeholder col-6" data-v-c7f9426b></span></h2>`);
        }
        if (currentCourse.value) {
          _push(`<p class="h5 mb-5" data-v-c7f9426b>Ent\xE3o garanta sua vaga.</p>`);
        } else {
          _push(`<p class="placeholder-glow" data-v-c7f9426b><span class="placeholder col-4" data-v-c7f9426b></span></p>`);
        }
        if (currentCourse.value) {
          _push(`<h3 class="text-primary" data-v-c7f9426b>INSCREVA-SE AGORA!</h3>`);
        } else {
          _push(`<h3 class="placeholder-glow" data-v-c7f9426b><span class="placeholder col-8" data-v-c7f9426b></span></h3>`);
        }
        _push(`<hr data-v-c7f9426b></div>`);
        _push(ssrRenderComponent(_component_FormsInscricao, null, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cursos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7f9426b"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-WhcrmUKO.mjs.map
