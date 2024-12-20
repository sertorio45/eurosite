<template>
  <div>
    <section class="py-5 justify-content-center align-content-center bg-light">
      <div class="container py-5">
        <div class="row gy-5 gx-5">
          <div class="col-sm-12 col-md-12 col-lg-4 align-content-center">
            <h1>Depoimentos</h1>
            <p>
              Confira os depoimentos de nossos alunos e como a Euro Anglo tem transformado vidas com cursos de alta qualidade e encaminhamento profissional.
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
                        placeholder="15"
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
      "Olá, meu nome é Rafael. Eu estudo na escola Euro Anglo e faço o curso de Informática Kids. Aqui eu aprendi muitas coisas como fazer pesquisas que estão me ajudando muito mais nos meus trabalhos escolares.",
    imagem: "/img/depoimentos/rafael.jpg",
  },
  {
    nome: "Renata",
    texto:
      "Olá, meu nome é Renata e eu faço o curso de Administração aqui na Euro Anglo. Os professores são qualificados, o material didático é super atualizado. Eu super recomendo o curso. Vem pra Euro Anglo!",
    imagem: "/img/depoimentos/renata.jpg",
  },
  {
    nome: "Nícolas",
    texto:
      "Oi. Meu nome é Nícolas, e eu fiz o curso de Informática Profissional da Euro Anglo. Atualmente eu trabalho em uma clínica odontológica. Eu faço parte, faça parte você também!",
    imagem: "/img/depoimentos/nicolas.jpg",
  },
  {
    nome: "Giovana",
    texto:
      "Olá, meu nome é Giovana. Graças à qualificação e o projeto de encaminhamento ao mercado de trabalho, conquistei uma vaga no mercado de trabalho. Eu faço parte, faça parte você também!",
    imagem: "/img/depoimentos/giovana.jpg",
  },
  {
    nome: "Tiago",
    texto:
      "Olá! Meu nome é Tiago, sou aluno do curso de Auxiliar Veterinário. O curso tem me ajudado bastante. Eu recomendo a Euro Anglo. Eu faço parte, faça parte você também!",
    imagem: "/img/depoimentos/tiago.jpg",
  },
  {
    nome: "Ana Beatriz",
    texto:
      "Olá, meu nome é Ana Beatriz. Estou gostando bastante do curso de Administração. A formação profissional traz um diferencial competitivo. Eu faço parte, faça parte você também!",
    imagem: "/img/depoimentos/ana-beatriz.jpg",
  },
  {
    nome: "Saul",
    texto:
      "Olá, meu nome é Saul. No curso de Administração, aprendo a gerenciar empresas e me preparo para o mercado de trabalho. Eu faço parte da Euro Anglo, venha fazer parte você também!",
    imagem: "/img/depoimentos/saul.jpg",
  },
  {
    nome: "Ana Paula",
    texto:
      "Olá, meu nome é Ana Paula. Participo do projeto de encaminhamento profissional, Euro Jobs. Com a qualificação, conquistei uma vaga de trabalho. Eu faço parte, faça parte você também!",
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
