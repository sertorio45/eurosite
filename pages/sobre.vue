<template>
  <div class="about-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4">
          <NuxtImg src="img/sobre/fachada-campinas.webp" width="600px" alt="Sobre a Empresa" class="rounded img-fluid"/>
        </div>
        <div class="col-md-6 mb-4 align-content-center">
          <h1 class="mb-5">Quem Somos</h1>
          <p class="lead">
            Desde 2008, estamos comprometidos com a transformação de vidas por meio de <strong>cursos profissionalizantes</strong> de alta qualidade. Fundada em Ribeirão Preto, nossa instituição se tornou referência em <em>educação profissional</em>, capacitando milhares de brasileiros para o mercado de trabalho com uma educação acessível e de excelência.
          </p>
          <p>
            Com unidades em expansão pelo Brasil, nossa missão é oferecer o melhor conteúdo educacional para quem busca qualificação profissional e sucesso em suas carreiras.
          </p>
          <a href="/cursos" class="btn btn-primary">Nossos Cursos</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Missão, Visão e Valores -->
  <section class="values-area section-padding bg-primary">
    <div class="container my-5 text-center text-light">
      <h2 class="text-center text-light mb-3">Comprometimento com a Educação</h2>
      <p class="px-5 mx-5 mb-5">Nós somos comprometidos a leva uma educação de qualidade para todos os nossos alunos, segurança em nossas unidades, computadores e sistemas de última geração. Tudo de melhor para você ou seu filho.</p>

      <!-- Missão -->
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="card card-hover text-center bg-light text-dark">
            <div class="card-body p-4">
              <div class="icon-circle mb-3"><Icon icon="bx bx-target-lock" fontSize="5em" class="icon-standard" color="#ffffff"/></div>
              <h4>Missão</h4>
              <p>
                Nossa missão é transformar vidas por meio de <strong>cursos profissionalizantes</strong>, oferecendo oportunidades de crescimento pessoal e profissional. Acreditamos que a educação é a chave para desbloquear o potencial de nossos alunos e contribuir para o desenvolvimento socioeconômico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Visão -->
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="card card-hover text-center bg-light text-dark">
            <div class="card-body p-4">
              <div class="icon-circle mb-3"><Icon icon="bx bx-show" fontSize="5em" class="icon-standard" color="#ffffff"/></div>
              <h4>Visão</h4>
              <p>
                Ser a referência nacional em <strong>educação profissional</strong>, conhecida por inovar e oferecer soluções educacionais de alta qualidade que impactam diretamente na empregabilidade de nossos alunos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Valores -->
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="card card-hover text-center bg-light text-dark">
            <div class="card-body p-4">
              <div class="icon-circle mb-3"><Icon icon="bx bx-heart" fontSize="5em" class="icon-standard" color="#ffffff"/></div>
              <h4>Valores</h4>
              <p>
                Nosso trabalho é orientado por princípios sólidos: ética, respeito e responsabilidade. Valorizamos a transparência e a confiança em todos os nossos relacionamentos, seja com alunos, colaboradores ou parceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Depoimentos -->
  <Depoimentos />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default-breadcrumb',
  });
</script>

<style scoped>
.about-area {
  padding: 50px 0;
}

.values-area {
  padding: 60px 0;
  background-color: var(--bs-light);
}

.section-padding {
  padding: 60px 0;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: var(--bs-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.icon-standard {
  color: #ffffff;
}

.icon {
  transition: color 0.3s ease;
}

.card-body:hover .icon-standard {
  color: #ffffff !important;
}

blockquote {
  font-size: 1.1em;
  border-left: 5px solid var(--bs-primary);
  padding-left: 15px;
}

.blockquote-footer {
  margin-top: 10px;
  font-size: 0.9em;
  color: var(--bs-secondary);
}
</style>
