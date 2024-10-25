<template>
<footer class="pt-5">
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-content-center">
      <!-- Logo e Direitos Reservados -->
      <div class="col-md-3 p-0 m-0">
        <!-- <img src="@/assets/img/logo-footer.svg" alt="Logo EuroAnglo" class="img-fluid mb-2"> -->
        <NuxtImg src="img/logo-footer.svg" width="200px" />
      </div>

      <!-- Nossas Unidades -->
      <div class="col-md-2 mb-4">
        <h5 class="fw-bold">Nossas Unidades</h5>
        <ul class="list-unstyled">
          <li><a href="#">Campinas</a></li>
          <li><a href="#">Franca</a></li>
          <li><a href="#">Ribeirão Preto</a></li>
          <li><a href="#">São José dos Campos</a></li>
        </ul>
      </div>

      <!-- Mapa do Site -->
      <div class="col-md-2 mb-4">
        <h5 class="fw-bold">Mapa do site</h5>
        <ul class="list-unstyled">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Nossa Unidades</a></li>
          <li><a href="#">Quem somos</a></li>
        </ul>
      </div>

      <!-- Links Úteis -->
      <div class="col-md-2 mb-4">
        <h5 class="fw-bold">Links úteis</h5>
        <ul class="list-unstyled">
          <li><a href="#">Ouvidoria</a></li>
          <li><a href="#">Política de privacidade</a></li>
          <li><a href="#">Seja franqueado</a></li>
          <li><a href="#">Trabalhe conosco</a></li>
        </ul>
      </div>

      <!-- Redes Sociais e Botão -->
      <div class="col-md-3 mb-4">
        <h5 class="fw-bold">Redes sociais</h5>
        <a href="#"><Icon icon="bx blx-instagram" /></a>
        <a href="#"><i class="bi bi-linkedin fs-4 me-2 text-dark"></i></a>
        <a href="#"><i class="bi bi-facebook fs-4"></i></a>
        <div class="mt-3">
          <ButtonAtendimentoRapido valor="Atendimento rápdio" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-6 text-start">
        <p>Copyright © 2024 - Todos os direitos reservados.</p>
        </div>
        <div class="col-6 text-end justify-content-center">
        <p>Criado e hospedado por: <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg" alt="GS Studio" class="img-fluid mx-1" width="100px"/></p>
        </div>
      </div>
    </div>
</footer>

</template>

<script lang="ts" setup>

</script>

<style>
footer a {
  color: #000;
  font-size: 14px;
  text-decoration: none;
}
</style>