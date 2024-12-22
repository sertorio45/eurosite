<template>
<footer class="pt-0 pt-x-0">
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-content-center">
      <!-- Logo e Direitos Reservados -->
      <div class="col-md-2 col-lg-3 py-sm-2">
        <!-- <img src="@/assets/img/logo-footer.svg" alt="Logo EuroAnglo" class="img-fluid mb-2"> -->
        <NuxtImg 
          src="img/logo-footer.svg"
          class="mb-5 mb-lg-0 mb-sm-0 mb-md-0 img-fluid" 
          loading="lazy"
          width="150px"
        />
      </div>

      <!-- Nossas Unidades -->
      <div class="col-md-2">
        <h6 class="fw-bold">Unidades</h6>
        <ul class="list-unstyled">
          <li><NuxtLink to="#">Campinas</NuxtLink></li>
          <li><NuxtLink to="#">Ribeirão Preto</NuxtLink></li>
          <li><NuxtLink to="un">São José dos Campos</NuxtLink></li>
        </ul>
      </div>

      <!-- Mapa do Site -->
      <div class="col-sm-3 col-md-2">
        <h6 class="fw-bold">Mapa do site</h6>
        <ul class="list-unstyled">
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/contato">Contato</NuxtLink></li>
          <li><NuxtLink to="/unidades">Nossa Unidades</NuxtLink></li>
          <li><NuxtLink to="/sobre">Quem somos</NuxtLink></li>
        </ul>
      </div>

      <!-- Links Úteis -->
      <div class="col-md-3 col-lg-2">
        <h6 class="fw-bold">Links úteis</h6>
        <ul class="list-unstyled">
          <li><NuxtLink to="/ouvidoria">Ouvidoria</NuxtLink></li>
          <li><NuxtLink to="/politica-de-privacidade">Política de privacidade</NuxtLink></li>
          <li><NuxtLink to="https://sejafranqueado.euroanglocursos.com.br">Seja franqueado</NuxtLink></li>
          <li><NuxtLink to="/trabalhe-conosco">Trabalhe conosco</NuxtLink></li>
        </ul>
      </div>

      <!-- Redes Sociais e Botão -->
      <div class="col-md-3 col-lg-3 social-links">
        <h6 class="fw-bold">Redes sociais</h6>
          <div class=" ">
            <NuxtLink to="htpps"><Icon icon="bxl-facebook" fontSize="1.7em" color="#fff" class="mx-auto" /></NuxtLink>
            <NuxtLink to="#"><Icon icon="bxl-linkedin" fontSize="1.7em" color="#fff" /></NuxtLink>
            <NuxtLink to="#"><Icon icon="bxl-instagram" fontSize="1.7em" color="#fff" /></NuxtLink>
          </div>
            <ButtonAtendimentoRapido valor="Atendimento rápdio" class="mt-3" />
      </div>
    </div>
  </div>
  <div class="container" id="copyright">
      <div class="row  align-items-center">
        <div class="col-lg-6 col-sm-12 col-md-6 text-md-start text-lg-start text-left">
        <p>Copyright © 2024 - Todos os direitos reservados.</p>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-6 text-md-end text-lg-end text-left">
        <p>Criado e hospedado por:
          <NuxtImg 
            src="https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg" 
            alt="GS Studio" 
            class="mx-1"
            width="90px" 
            sizes="sm:80px md:100vw"
            loading="lazy"
          /> 
        </p>
        </div>
      </div>
    </div>
</footer>

</template>

<script lang="ts" setup>

</script>

<style>

.social-links i {
  background-color: var(--bs-primary);
  padding: 0.3em;
  border-radius: 100px;
  margin: 2px;
}

footer {
  padding-left: 0.1em;
  padding-right: 0.1em;
}

footer a {
  color: #000;
  font-size: 0.9rem;
  text-decoration: none;
}

#copyright {
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  h6 {
    font-size: 0.9em;
  }

  .social-links i {
  background-color: var(--bs-primary);
  padding: 0.2em;
  border-radius: 100px;
  margin: 2px;
  font-size: 20px!important;
}
.social-links .btn-primary {
    padding: .5rem 1rem .5rem 1rem;
    border-radius: 5px;
    border: 0;
    font-size: 0.75em;
}
  
}
@media (min-width: 1024px) {

  
}

@media (min-width: 1440px) {

}
</style>