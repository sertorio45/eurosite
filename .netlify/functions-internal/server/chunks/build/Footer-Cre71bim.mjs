import { _ as _sfc_main$4 } from './Icon-5pRBvot5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$5 } from './NuxtImg-CP6STrL9.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, createVNode, defineComponent, mergeProps, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { useRouter } from 'vue-router';
import { _ as __nuxt_component_2$1 } from './AtendimentoRapido-D1q6MgUw.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/logotipo.svg",
    width: "185px"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    const goToCursos = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-item dropdown" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link dropdown-toggle",
        to: "/cursos",
        id: "navbarDropdown",
        role: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: goToCursos
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cursos <i class="bx bx-chevron-down"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Cursos "),
              createVNode("i", { class: "bx bx-chevron-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="dropdown-menu px-4" aria-labelledby="navbarDropdown"><!--[-->`);
      ssrRenderList(courses.value, (course) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "dropdown-item nav-link",
          to: `/cursos/${course.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(course.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(course.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const isScrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = __nuxt_component_2;
      const _component_Dropdown = _sfc_main$2;
      _push(`<!--[--><section class="bg-primary py-3 text-light d-flex justify-content-center"><div class="container"><div class="row"><div class="col-6 d-flex justify-content-start"><a href="">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-instagram",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-facebook",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxl-linkedin",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div><div class="col-6 d-flex justify-content-end"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Seja Franquiado`);
          } else {
            return [
              createTextVNode("Seja Franquiado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` | `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ouvidoria",
        class: "text-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ouvidoria`);
          } else {
            return [
              createTextVNode("Ouvidoria")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` | `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/trabalhe-conosco",
        class: "text-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trabalhe Conosco`);
          } else {
            return [
              createTextVNode("Trabalhe Conosco")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div></section><div class="${ssrRenderClass(["container-fluid", "py-2", { "position-fixed top-0 start-0 w-100 fixed-navbar": isScrolled.value }])}"><div class="row g-0"><div class="col-12"><nav class="navbar navbar-expand-lg navbar-light w-100"><div class="container p-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bx bx-menu toggle-icon menu-icon"></i><i class="bx bx-x toggle-icon close-icon"></i></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link"
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
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sobre",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sobre n\xF3s`);
          } else {
            return [
              createTextVNode("Sobre n\xF3s")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/unidades",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Unidades`);
          } else {
            return [
              createTextVNode("Unidades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      _push(ssrRenderComponent(_component_Dropdown, null, null, _parent));
      _push(`<li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alunos-contratados",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Alunos contratados`);
          } else {
            return [
              createTextVNode("Alunos contratados")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato`);
          } else {
            return [
              createTextVNode("Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="align-content-end"><a href="https://wa.me/5516992842170?text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20ser%20atendido(a)." class="btn btn-primary" target="_blank">Atendimento r\xE1pido</a></div></div></div></nav></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$5;
  const _component_Icon = _sfc_main$4;
  const _component_ButtonAtendimentoRapido = __nuxt_component_2$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pt-5" }, _attrs))}><div class="container py-5"><div class="row d-flex justify-content-center align-content-center"><div class="col-md-3 p-0 m-0">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "img/logo-footer.svg",
    width: "200px"
  }, null, _parent));
  _push(`</div><div class="col-md-2 mb-4"><h5 class="fw-bold">Nossas Unidades</h5><ul class="list-unstyled"><li><a href="#">Campinas</a></li><li><a href="#">Franca</a></li><li><a href="#">Ribeir\xE3o Preto</a></li><li><a href="#">S\xE3o Jos\xE9 dos Campos</a></li></ul></div><div class="col-md-2 mb-4"><h5 class="fw-bold">Mapa do site</h5><ul class="list-unstyled"><li><a href="#">Blog</a></li><li><a href="#">Contato</a></li><li><a href="#">Nossa Unidades</a></li><li><a href="#">Quem somos</a></li></ul></div><div class="col-md-2 mb-4"><h5 class="fw-bold">Links \xFAteis</h5><ul class="list-unstyled"><li><a href="#">Ouvidoria</a></li><li><a href="#">Pol\xEDtica de privacidade</a></li><li><a href="#">Seja franqueado</a></li><li><a href="#">Trabalhe conosco</a></li></ul></div><div class="col-md-3 mb-4"><h5 class="fw-bold">Redes sociais</h5><a href="#">`);
  _push(ssrRenderComponent(_component_Icon, { icon: "bx blx-instagram" }, null, _parent));
  _push(`</a><a href="#"><i class="bi bi-linkedin fs-4 me-2 text-dark"></i></a><a href="#"><i class="bi bi-facebook fs-4"></i></a><div class="mt-3">`);
  _push(ssrRenderComponent(_component_ButtonAtendimentoRapido, { valor: "Atendimento r\xE1pdio" }, null, _parent));
  _push(`</div></div></div></div><div class="container"><div class="row d-flex justify-content-between"><div class="col-6 text-start"><p>Copyright \xA9 2024 - Todos os direitos reservados.</p></div><div class="col-6 text-end justify-content-center"><p>Criado e hospedado por: `);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg",
    alt: "GS Studio",
    class: "img-fluid mx-1",
    width: "100px"
  }, null, _parent));
  _push(`</p></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Footer-Cre71bim.mjs.map
