import { _ as _sfc_main$1 } from './AtendimentoRapido-ByznP_h0.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-EInSGp_T.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Depoimentos",
  __ssrInlineRender: true,
  setup(__props) {
    const depoimentos = [
      {
        nome: "Rafael",
        texto: "Ol\xE1, meu nome \xE9 Rafael. Estudo na Euro Anglo Cursos e fa\xE7o Inform\xE1tica Kids. Aprendi muitas habilidades que ajudam nos trabalhos escolares. Fa\xE7a parte voc\xEA tamb\xE9m!",
        imagem: "/img/depoimentos/rafael.jpg"
      },
      {
        nome: "Renata",
        texto: "Meu nome \xE9 Renata. Fa\xE7o Administra\xE7\xE3o na Euro Anglo Cursos. Professores qualificados e material atualizado. Recomendo muito. Venha para Euro Anglo!",
        imagem: "/img/depoimentos/renata.jpg"
      },
      {
        nome: "N\xEDcolas",
        texto: "Oi, sou N\xEDcolas. Fiz Inform\xE1tica Profissional na Euro Anglo Cursos e trabalho em uma cl\xEDnica odontol\xF3gica. Fa\xE7a parte voc\xEA tamb\xE9m!",
        imagem: "/img/depoimentos/nicolas.jpg"
      },
      {
        nome: "Giovana",
        texto: "Ol\xE1, sou Giovana. Gra\xE7as \xE0 Euro Anglo Cursos e ao projeto de encaminhamento profissional, conquistei uma vaga no mercado. Venha fazer parte!",
        imagem: "/img/depoimentos/giovana.jpg"
      },
      {
        nome: "Tiago",
        texto: "Ol\xE1! Sou Tiago, aluno do curso de Auxiliar Veterin\xE1rio na Euro Anglo Cursos. O aprendizado tem sido incr\xEDvel. Eu recomendo, venha fazer parte!",
        imagem: "/img/depoimentos/tiago.jpg"
      },
      {
        nome: "Ana Beatriz",
        texto: "Oi, sou Ana Beatriz. Estou adorando o curso de Administra\xE7\xE3o na Euro Anglo Cursos. A forma\xE7\xE3o profissional traz diferenciais competitivos. Venha tamb\xE9m!",
        imagem: "/img/depoimentos/ana-beatriz.jpg"
      },
      {
        nome: "Saul",
        texto: "Ol\xE1, sou Saul. No curso de Administra\xE7\xE3o da Euro Anglo Cursos, aprendo a gerenciar empresas e me preparo para o mercado. Venha fazer parte!",
        imagem: "/img/depoimentos/saul.jpg"
      },
      {
        nome: "Ana Paula",
        texto: "Ol\xE1, sou Ana Paula. Participo do Euro Jobs da Euro Anglo Cursos e conquistei uma vaga de trabalho. Fa\xE7a parte desse projeto tamb\xE9m!",
        imagem: "/img/depoimentos/ana-paula.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonAtendimentoRapido = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-5 justify-content-center align-content-center bg-light"><div class="container py-5"><div class="row gy-5 gx-5"><div class="col-sm-12 col-md-12 col-lg-4 align-content-center"><h1>Depoimentos</h1><p> Confira os depoimentos de nossos alunos e como a Euro Anglo Cursos tem transformado vidas com ensino de alta qualidade e encaminhamento profissional. </p>`);
      _push(ssrRenderComponent(_component_ButtonAtendimentoRapido, { valor: "Atendimento r\xE1pido" }, null, _parent));
      _push(`</div><div class="col-sm-12 col-md-12 col-lg-8"><div id="testimonialCarousel" class="rounded p-5 bg-primary-degrade d-flex text-light carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><!--[-->`);
      ssrRenderList(depoimentos, (depoimento, index) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", { active: index === 0 }])}"><div class="d-flex flex-column flex-md-row align-items-center text-center text-md-start"><div class="col-12 col-md-5 col-lg-4 mb-3 mb-md-0 text-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: depoimento.imagem,
          alt: `Foto de ${depoimento.nome}`,
          class: "rounded-circle img-fluid",
          width: "150px",
          loading: "lazy",
          placeholder: 15,
          fit: "cover"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-7 col-lg-8 px-3"><h3 class="mb-2">${ssrInterpolate(depoimento.nome)}</h3><p class="mb-0">${ssrInterpolate(depoimento.texto)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="carousel-controls"><i class="bx bx-left-arrow-alt control-prev" data-bs-target="#testimonialCarousel" data-bs-slide="prev"></i><i class="bx bx-right-arrow-alt control-next" data-bs-target="#testimonialCarousel" data-bs-slide="next"></i></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Depoimentos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Depoimentos-BC1lBlV6.mjs.map
