import { _ as _sfc_main$5 } from './Icon-5pRBvot5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _sfc_main$4 } from './NuxtImg-EInSGp_T.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, withAsyncContext, unref, toDisplayString, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-yG4vkbd8.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$3 } from './AtendimentoRapido-ByznP_h0.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: courses, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "courses",
      () => $fetch("/api/postsCursos")
      // Certifique-se de que a rota esteja correta
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.error("Erro ao carregar cursos:", error.value);
    }
    const goToCursos = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
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
      ssrRenderList(unref(courses), (course) => {
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
      const _component_Icon = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$4;
      const _component_Dropdown = _sfc_main$2;
      _push(`<!--[--><header class="bg-primary py-3 text-light d-flex justify-content-center" id="head1" data-v-b81c3b61><div class="container" data-v-b81c3b61><div class="row p-1" data-v-b81c3b61><div class="col-2 col-lg-6 d-flex justify-content-start p-0" data-v-b81c3b61><a href="https://www.linkedin.com/company/euro-anglo" data-v-b81c3b61>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bxl-instagram",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.facebook.com/franquiaseuroanglo" data-v-b81c3b61>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bxl-facebook",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/company/euroanglocursos/" data-v-b81c3b61>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bxl-linkedin",
        color: "#ffffff",
        "font-size": "1.5em",
        class: "social-icon"
      }, null, _parent));
      _push(`</a></div><div class="col-10 col-lg-6 d-flex justify-content-end links-header1 p-0 align-items-center" data-v-b81c3b61><span data-v-b81c3b61>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ouvidoria",
        class: "text-light link-menu"
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
        class: "text-light link-menu"
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
      _push(`</span></div></div></div></header><header id="head2" data-v-b81c3b61><div class="${ssrRenderClass(["container-fluid", "py-2", { "position-fixed top-0 start-0 w-100 fixed-navbar": isScrolled.value }])}" data-v-b81c3b61><div class="row g-0" data-v-b81c3b61><div class="col-12" data-v-b81c3b61><nav class="navbar navbar-expand-lg navbar-light w-100" data-v-b81c3b61><div class="container p-0" data-v-b81c3b61>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logotipo.svg",
              width: "185px",
              placeholder: 15,
              loading: "lazy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/logotipo.svg",
                width: "185px",
                placeholder: 15,
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-b81c3b61><i class="bx bx-menu toggle-icon menu-icon" data-v-b81c3b61></i><i class="bx bx-x toggle-icon close-icon" data-v-b81c3b61></i></button><div class="collapse navbar-collapse mt-4 mt-lg-2 mt-md-2" id="navbarNav" data-v-b81c3b61><ul class="navbar-nav mx-auto" data-v-b81c3b61><li class="nav-item" data-v-b81c3b61>`);
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
      _push(`</li><li class="nav-item" data-v-b81c3b61>`);
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
      _push(`</li><li class="nav-item" data-v-b81c3b61>`);
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
      _push(`<li class="nav-item" data-v-b81c3b61>`);
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
      _push(`</li><li class="nav-item" data-v-b81c3b61>`);
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
      _push(`</li><li class="nav-item" data-v-b81c3b61>`);
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
      _push(`</li></ul><div class="align-content-end" data-v-b81c3b61>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></div></div></nav></div></div></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b81c3b61"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$5;
      const _component_ButtonAtendimentoRapido = _sfc_main$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pt-0 pt-x-0" }, _attrs))}><div class="container py-5"><div class="row d-flex justify-content-center align-content-center"><div class="col-md-2 col-lg-3 py-sm-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "img/logo-footer.svg",
        class: "mb-5 mb-lg-0 mb-sm-0 mb-md-0 img-fluid",
        loading: "lazy",
        width: "150px"
      }, null, _parent));
      _push(`</div><div class="col-md-2"><h6 class="fw-bold">Unidades</h6><ul class="list-unstyled"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/unidades/campinas" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Campinas`);
          } else {
            return [
              createTextVNode("Campinas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/unidades/ribeirao-preto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ribeir\xE3o Preto`);
          } else {
            return [
              createTextVNode("Ribeir\xE3o Preto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/unidades/sao-jose-dos-campos" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`S\xE3o Jos\xE9 dos Campos`);
          } else {
            return [
              createTextVNode("S\xE3o Jos\xE9 dos Campos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col-sm-3 col-md-2"><h6 class="fw-bold">Mapa do site</h6><ul class="list-unstyled"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contato" }, {
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/unidades" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nossa Unidades`);
          } else {
            return [
              createTextVNode("Nossa Unidades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sobre" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quem somos`);
          } else {
            return [
              createTextVNode("Quem somos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col-md-3 col-lg-2"><h6 class="fw-bold">Links \xFAteis</h6><ul class="list-unstyled"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ouvidoria" }, {
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/politica-de-privacidade" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de privacidade`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de privacidade")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/trabalhe-conosco" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trabalhe conosco`);
          } else {
            return [
              createTextVNode("Trabalhe conosco")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col-md-3 col-lg-3 social-links"><h6 class="fw-bold">Redes sociais</h6><div class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "bxl-facebook",
              fontSize: "1.7em",
              color: "#fff",
              class: "mx-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                icon: "bxl-facebook",
                fontSize: "1.7em",
                color: "#fff",
                class: "mx-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "bxl-linkedin",
              fontSize: "1.7em",
              color: "#fff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                icon: "bxl-linkedin",
                fontSize: "1.7em",
                color: "#fff"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              icon: "bxl-instagram",
              fontSize: "1.7em",
              color: "#fff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                icon: "bxl-instagram",
                fontSize: "1.7em",
                color: "#fff"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ButtonAtendimentoRapido, {
        valor: "Atendimento r\xE1pdio",
        class: "mt-3"
      }, null, _parent));
      _push(`</div></div></div><div class="container" id="copyright"><div class="row align-items-center"><div class="col-lg-6 col-sm-12 col-md-6 text-md-start text-lg-start text-left"><p id="copyright-text"></p></div><div class="col-lg-6 col-sm-12 col-md-6 text-md-end text-lg-end text-left"><p>Criado e hospedado por: `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "gs-studio.svg",
        alt: "GS Studio",
        class: "mx-1",
        width: "90px",
        sizes: "sm:80px md:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`</p></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
//# sourceMappingURL=Footer-DJ4P2bKU.mjs.map
