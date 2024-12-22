<template>
  <div>
    <section class="py-5 justify-content-center align-content-center bg-light">
      <div class="container py-5">
        <div class="row gy-5 gx-5">
          <div class="col-sm-12 col-md-12 col-lg-4 align-content-center">
            <h1>Depoimentos</h1>
            <p>
              Confira os depoimentos de nossos alunos e como a Euro Anglo Cursos tem transformado vidas com ensino de alta qualidade e encaminhamento profissional.
            </p>
            <ButtonAtendimentoRapido valor="Atendimento rápido" />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-8">
            <div
              id="testimonialCarousel"
              class="rounded p-5 bg-primary-degrade d-flex text-light carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="(depoimento, index) in depoimentos"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <div class="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                    <div class="col-12 col-md-5 col-lg-4 mb-3 mb-md-0 text-center">
                      <NuxtImg
                        :src="depoimento.imagem"
                        :alt="`Foto de ${depoimento.nome}`"
                        class="rounded-circle img-fluid"
                        width="150px"
                        loading="lazy"
                        :placeholder="15"
                        fit="cover"
                      />
                    </div>
                    <div class="col-12 col-md-7 col-lg-8 px-3">
                      <h3 class="mb-2">{{ depoimento.nome }}</h3>
                      <p class="mb-0">{{ depoimento.texto }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Ícones de navegação -->
              <div class="carousel-controls">
                <i
                  class="bx bx-left-arrow-alt control-prev"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide="prev"
                ></i>
                <i
                  class="bx bx-right-arrow-alt control-next"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide="next"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const depoimentos = [
  {
    nome: "Rafael",
    texto:
      "Olá, meu nome é Rafael. Estudo na Euro Anglo Cursos e faço Informática Kids. Aprendi muitas habilidades que ajudam nos trabalhos escolares. Faça parte você também!",
    imagem: "/img/depoimentos/rafael.jpg",
  },
  {
    nome: "Renata",
    texto:
      "Meu nome é Renata. Faço Administração na Euro Anglo Cursos. Professores qualificados e material atualizado. Recomendo muito. Venha para Euro Anglo!",
    imagem: "/img/depoimentos/renata.jpg",
  },
  {
    nome: "Nícolas",
    texto:
      "Oi, sou Nícolas. Fiz Informática Profissional na Euro Anglo Cursos e trabalho em uma clínica odontológica. Faça parte você também!",
    imagem: "/img/depoimentos/nicolas.jpg",
  },
  {
    nome: "Giovana",
    texto:
      "Olá, sou Giovana. Graças à Euro Anglo Cursos e ao projeto de encaminhamento profissional, conquistei uma vaga no mercado. Venha fazer parte!",
    imagem: "/img/depoimentos/giovana.jpg",
  },
  {
    nome: "Tiago",
    texto:
      "Olá! Sou Tiago, aluno do curso de Auxiliar Veterinário na Euro Anglo Cursos. O aprendizado tem sido incrível. Eu recomendo, venha fazer parte!",
    imagem: "/img/depoimentos/tiago.jpg",
  },
  {
    nome: "Ana Beatriz",
    texto:
      "Oi, sou Ana Beatriz. Estou adorando o curso de Administração na Euro Anglo Cursos. A formação profissional traz diferenciais competitivos. Venha também!",
    imagem: "/img/depoimentos/ana-beatriz.jpg",
  },
  {
    nome: "Saul",
    texto:
      "Olá, sou Saul. No curso de Administração da Euro Anglo Cursos, aprendo a gerenciar empresas e me preparo para o mercado. Venha fazer parte!",
    imagem: "/img/depoimentos/saul.jpg",
  },
  {
    nome: "Ana Paula",
    texto:
      "Olá, sou Ana Paula. Participo do Euro Jobs da Euro Anglo Cursos e conquistei uma vaga de trabalho. Faça parte desse projeto também!",
    imagem: "/img/depoimentos/ana-paula.jpg",
  },
];
</script>

<style>
.carousel-item {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

/* Ajustes para responsividade */
#testimonialCarousel {
  height: auto;
}

.carousel-inner {
  display: flex;
  align-items: center;
}

/* Controles */
.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-controls .control-prev,
.carousel-controls .control-next {
  font-size: 2.5em;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .carousel-item .col-md-7 {
    padding-left: 0;
  }
  .carousel-item img {
    margin: 0 auto;
  }
}
</style>
