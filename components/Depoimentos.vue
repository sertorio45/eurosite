<template>
  <div>
    <section class="py-5 justify-content-center align-content-center bg-light">
       <div class="container py-5"> 
          <div class="row gy-5 gx-5">
            <div class="col-sm-12 col-md-6 align-content-center">
              <h1>
                Depoimentos
              </h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                quando um impressor desconhecido pegou uma bandeja de tipos. 
              </p>
              <ButtonAtendimentoRapido valor="Atendimento rápido" />
            </div>
            <div class="col-sm-12 col-md-6">
              <div id="testimonialCarousel" class="rounded p-5 bg-primary-degrade d-flex text-light carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex">
                      <div class="col-6 text-center d-flex justify-items-center align-items-center">
                        <NuxtImg src="https://placeholder.com/400x400" class="rounded-circle img-fluid"/>
                      </div>
                      <div class="col-6">
                        <h3>NOME ALUNO 1</h3>
                        <p>Depoimento do aluno 1</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex">
                      <div class="col-6 text-center d-flex justify-items-center align-items-center">
                        <NuxtImg src="https://placeholder.com/400x400" class="rounded-circle img-fluid"/>
                      </div>
                      <div class="col-6">
                        <h3>NOME ALUNO 2</h3>
                        <p>Depoimento do aluno 2</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex">
                      <div class="col-6 text-center d-flex justify-items-center align-items-center">
                        <NuxtImg src="https://placeholder.com/400x400" class="rounded-circle img-fluid"/>
                      </div>
                      <div class="col-6">
                        <h3>NOME ALUNO 3</h3>
                        <p>Depoimento do aluno 3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Ícones de navegação posicionados fixamente com absolute -->
                <div style="position: absolute; top: 50%; left: 0; transform: translateY(-50%);">
                  <i class="bx bx-left-arrow-alt" style="font-size: 2.5em; color: white;" data-bs-target="#testimonialCarousel" data-bs-slide="prev"></i>
                </div>
                <div style="position: absolute; top: 50%; right: 0; transform: translateY(-50%);">
                  <i class="bx bx-right-arrow-alt" style="font-size: 2.5em; color: white;" data-bs-target="#testimonialCarousel" data-bs-slide="next"></i>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>