<template>
  <div class="contact-area section-padding">
    <div class="container min-vh-100">
      <div class="row align-items-center justify-items-center py-5">
        <div class="col-md-6 mb-3 text-center">
          <div><NuxtImg src="woman-contact.webp" width="400px" /></div>
          <div class="mt-3"><a href="#">Veja onde está nossas unidades</a></div>
          <a href="#unidades"><Icon icon="bx bx-chevrons-down" color="var(--bs-primary)" fontSize="3em" /></a>
        </div>
        <div class="col-md-6 mb-3">
          <FormsFormContato />
        </div>
      </div>
    </div>
  </div>

  <section class="location-cards section-padding bg-primary" id="unidades">
    <div class="container my-5">
      <h2 class="text-center mb-5 text-light">Encontre a unidade mais próxima</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <Icon icon="bx bx-map" fontSize="5em" class="icon-card" color="var(--bs-primary)"/>
              <h5 class="card-title mt-3">Campinas</h5>
              <a href="#" class="btn btn-link">Ver localização</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <Icon icon="bx bx-map" fontSize="5em" class="icon-card" color="var(--bs-primary)"/>
              <h5 class="card-title mt-3">Ribeirão Preto</h5>
              <a href="#" class="btn btn-link">Ver localização</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <Icon icon="bx bx-map" fontSize="5em" class="icon-card" color="var(--bs-primary)"/>
              <h5 class="card-title mt-3">São José dos Campos</h5>
              <a href="#" class="btn btn-link">Ver localização</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta ({
  layout: 'default-breadcrumb' // Usa o layout sem breadcrumbs
});
</script>

<style scoped>
.contact-area {
  padding: 50px 0;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.location-cards {
  padding: 50px 0;
}

.icon-card {
  color: var(--bs-lightprimary); /* Cor inicial */
  transition: color 0.2s ease-in-out; /* Transição suave para a cor */
}

.card-body:hover .icon-card {
  color: var(--bs-light) !important; /* Cor ao passar o mouse */
}

.btn-link {
  color: var(--bs-primary);
  text-decoration: none;
}

.btn-link:hover {
  text-decoration: underline;
}
</style>
