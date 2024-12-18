<template>
  <div>
    <section class="my-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12">
                <h2>MOTIVOS PARA ESCOLHER A EURO ANGLO</h2>
                  <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                    e vem sendo utilizado desde o século XVI, quando um impressor
                  </p>
                    <NuxtImg src="img/girl.webp" alt="" class="girl-img" width="500px"/>
            </div>

            <div class="col-md-6 col-sm-12 container-motivos">
                 <div class="row text-center g-0">
                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <NuxtImg src="img/motivos/parcerias.webp" alt="Aprenda cursos e trabalhe para grandes empresas" class="rounded-circle shadow p-4 mb-4 bg-white" width="150px" />
                      <h3 class="h5 fw-bold">Parceria com grandes empresas</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <NuxtImg src="img/motivos/material.webp" alt="Material didático de última geração." class="rounded-circle shadow p-4 mb-4 bg-white" width="150px"/>
                      <h3 class="h5 fw-bold">Material didático atualizado</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <NuxtImg src="img/motivos/aprendizado.webp" alt="Aprenda cursos e trabalhe para grandes empresas" class="rounded-circle shadow p-4 mb-4 bg-white" width="150px"/>
                      <h3 class="h5 fw-bold">Aplique o que você aprendeu</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <NuxtImg src="img/motivos/história.webp" alt="Aprenda cursos e trabalhe para grandes empresas" class="rounded-circle shadow p-4 mb-4 bg-white" width="150px"/>
                      <h3 class="h5 fw-bold">Mais de quinze anos de história</h3>
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
</style>
