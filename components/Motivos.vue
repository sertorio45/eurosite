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
                    <NuxtImg src="girl.webp" alt="" class="girl-img" width="650px"/>
            </div>

            <div class="col-md-6 col-sm-12 container-motivos">
                 <div class="row text-center g-0">
                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt="">
                      <h3 class="h5 fw-bold">Parceria com grandes empresas</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt="">
                      <h3 class="h5 fw-bold">Material didático atualizado</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt="">
                      <h3 class="h5 fw-bold">Aplique o que você aprendeu</h3>
                    </div>
                  </div>
                  </div>

                  <div class="col-6">
                    <div class="card">
                    <div class="card-body">
                      <img src="https://placeholder.com/150x150" class="rounded-circle my-3" alt="">
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
    margin-top: -300px;
    margin-left: 30px;
}

.container-motivos {
  margin-left: 300px;
}

@media (max-width: 576px) { 
  .girl-img {
    position: sticky;
    margin: 30px 0px 30px 0px;
    justify-content: center;
    width: 100%;
}

.container-motivos {
  margin-left: 0;
  
}

 }

</style>
