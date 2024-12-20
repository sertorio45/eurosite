<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col">

          <!-- Carousel para Desktop e Tablet -->
          <div id="banners-desktop" class="carousel slide d-none d-md-block" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <NuxtImg src="/img/banners-rotativos/bolsas-desktop.webp" class="d-block w-100" alt="Banner Desktop" fit="cover"  loading="eager" width="100%" />
              </div>
              <div class="carousel-item">
                <NuxtImg src="/img/banners-rotativos/cursos-gratuitos-desktop.webp" class="d-block w-100" alt="Banner Desktop 2" fit="cover" placeholder="15" loading="eager" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banners-desktop" data-bs-slide="prev">
              <span aria-hidden="true"><Icon icon="bx bxs-left-arrow-circle" fontSize="3em"/></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banners-desktop" data-bs-slide="next">
              <span aria-hidden="true"><Icon icon="bx bxs-right-arrow-circle" fontSize="3em"/></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <!-- Carousel para Mobile -->
          <div id="banners-mobile" class="carousel slide d-block d-md-none" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <NuxtImg src="/img/banners-rotativos/bolsas-mobile.webp" class="d-block w-100" alt="Banner Mobile" fit="cover" placeholder="15" loading="eager" />
              </div>
              <div class="carousel-item">
                <NuxtImg src="/img/banners-rotativos/cursos-gratuitos-mobile.webp" class="d-block w-100" alt="Banner Mobile 2" fit="cover" placeholder="15" loading="eager" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banners-mobile" data-bs-slide="prev">
              <span aria-hidden="true"><Icon icon="bx bxs-left-arrow-circle" fontSize="3em"/></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banners-mobile" data-bs-slide="next">
              <span aria-hidden="true"><Icon icon="bx bxs-right-arrow-circle" fontSize="3em"/></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
#banners-desktop .carousel-inner,
#banners-mobile .carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 0;
  border-radius: 10px;
}
</style>
