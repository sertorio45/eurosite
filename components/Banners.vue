<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col">

          <!-- Carousel -->
          <div id="banners" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.euroanglocursos.com.br/assets/img/slider/hall-dos-contratados2.jpg" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="https://placeholder.com/1920x780" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="https://placeholder.com/1920x780" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="https://placeholder.com/1920x780" class="d-block w-100" alt="">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banners" data-bs-slide="prev">
              <span aria-hidden="true"><Icon icon="bx bxs-left-arrow-circle" fontSize="3em"/></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banners" data-bs-slide="next">
              <!-- <span aria-hidden="true">
                <Icon icon="bx bxs-right-arrow-circle" fontSize="3em"/>
              </span> -->
              <span aria-hidden="true">
                <Icon icon="bx bxs-right-arrow-circle" fontSize="3em"/>
              </span>
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
#banners .carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 0;
  border-radius: 10px;
}
</style>
