<template>
  <div>
    <section class="my-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <h2>MOTIVOS PARA ESCOLHER A EURO ANGLO</h2>
            <p>
              Todos os alunos que se formam na Euro Anglo Cursos tem garantia de
              sucesso profissional, pois nossos cursos sempre estão atualizados
              com o mercado atual.
            </p>
            <NuxtImg
              src="img/girl.webp"
              alt=""
              class="girl-img d-none d-sm-block"
              width="100%"
              sizes="sm:400px md:500px lg:500px"
            />
          </div>

          <div class="col-md-6 col-sm-12 container-motivos ">
            <div class="row text-center g-2 g-lg-3 g-sm-1 g-md-2">
              <div class="col-6">
                <div class="card">
                  <div class="card-body">
                    <NuxtImg
                      src="img/motivos/parcerias.webp"
                      alt="Aprenda cursos e trabalhe para grandes empresas"
                      class="rounded-circle shadow p-4 mb-4 bg-white"
                      width="100px"
                      sizes="lg:100vw md:100vw"
                    />
                    <h3 class="h6 fw-bold">Grandes parcerias</h3>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="card">
                  <div class="card-body">
                    <NuxtImg
                      src="img/motivos/material.webp"
                      alt="Material didático de última geração."
                      class="rounded-circle shadow p-4 mb-4 bg-white"
                      width="100px"
                      sizes="lg:100vw md:100vw"
                    />
                    <h3 class="h6 fw-bold">Material didático</h3>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="card">
                  <div class="card-body">
                    <NuxtImg
                      src="img/motivos/aprendizado.webp"
                      alt="Aprenda cursos e trabalhe para grandes empresas"
                      class="rounded-circle shadow p-4 mb-4 bg-white"
                      width="100px"
                      sizes="lg:100vw md:100vw"
                    />
                    <h3 class="h6 fw-bold">Aprenda na prática</h3>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="card">
                  <div class="card-body">
                    <NuxtImg
                      src="img/motivos/história.webp"
                      alt="Aprenda cursos e trabalhe para grandes empresas"
                      class="rounded-circle shadow p-4 mb-4 bg-white"
                      width="100px"
                      sizes="lg:100vw md:100vw"
                    />
                    <h3 class="h6 fw-bold">{{ anoEmpresa }} anos de história</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Definir o ano atual dinamicamente
const anoAtual = new Date().getFullYear();
const anoFundacao = 2006;

// Calcular os anos de história
const anoEmpresa = computed(() => anoAtual - anoFundacao);
</script>

<style>
.girl-img {
  position: relative;
  margin-top: -200px;
  margin-left: 40%;
}

.container-motivos {
  margin-left: auto;
}

@media (min-width: 768px) {
  .girl-img {
    position: relative;
    top: -13%;
    right: 33%;
  }
}
@media (min-width: 1024px) {
  .girl-img {
    position: relative;
    top: -15%;
    right: 5%;
  }
}

@media (min-width: 1440px) {
  .girl-img {
    position: relative;
    top: -10%;
    right: -5%;
  }
}
</style>
