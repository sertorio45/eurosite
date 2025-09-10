<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row align-items-center">
          <!-- Seção para Campinas -->
          <div class="col-md-5 py-5">
            <!-- Galeria aqui -->
            <div id="carouselGallery" class="carousel slide mt-5" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div v-for="(image, index) in campinasImages" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <NuxtImg
                    :src="`/unidades/campinas/${image}`"
                    class="d-block w-100"
                    :alt="`Imagem ${index + 1}`"
                    @click="openLightbox(index, 'campinas')"
                    placeholder
                    fit="cover"
                    width="500px"
                    densities="x1 x2"
                    loading="lazy"
                  />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
          <div class="col-md-7">
            <div class="profile-info pt-4">
              <h1 class="text-capitalize">Campinas</h1>

              <div class="contact-info mt-4">
                <ul class="list-unstyled mb-3">
                  <li>
                    <p><strong>Telefone:</strong> (16) 99121-3522</p>
                  </li>
                  <li>
                    <p><strong>Email:</strong> <a href="mailto:diretoria@euroanglocursos.com.br">diretoria@euroanglocursos.com.br</a></p>
                  </li>
                  <li>
                    <p><strong>Local:</strong> Rua: Barão do Jaguara, 888 - Centro</p>
                  </li>
                  <li class="map-link">
                    <a href="https://www.google.com/maps/place/Rua+Bar%C3%A3o+de+Jaguara,+888+-+Conceicao,+Campinas+-+SP,+13015-000/@-22.9066732,-47.0599737,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cf4ad11fbe0f:0x271ea2117594ca25!8m2!3d-22.9066732!4d-47.057785" target="_blank">
                      <i class="bx bx-map-alt mr-2"></i> Visualize o mapa completo
                    </a>
                  </li>
                </ul>

                <div class="social-icons text-left">
                  <p class="mb-2"><strong>Siga-nos:</strong></p>
                  <a href="https://www.facebook.com/euroanglocampinas" target="_blank" class="mr-3">
                    <Icon icon="bx bxl-facebook-circle" class="social-icon" />
                  </a>
                  <a href="https://www.instagram.com/euroanglocampinas" target="_blank">
                    <Icon icon="bx bxl-instagram-alt" class="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Wins />

    <!-- Lightbox para imagens -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxImages"
      :index="currentImageIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

definePageMeta({
  layout: 'default-breadcrumb',
  });

const campinasImages = ref<string[]>([]);
const rpImages = ref<string[]>([]);
const sjcImages = ref<string[]>([]);
const lightboxImages = ref<string[]>([]);
const visible = ref(false);
const currentImageIndex = ref(0);

onMounted(async () => {
  try {
    // Importa todas as imagens de todas as pastas de cidades
    const files = await import.meta.glob('/public/unidades/campinas/*.{jpg,png,jpeg,gif,webp}');

    // Armazena imagens por cidade
    Object.keys(files).forEach((file) => {
      const pathParts = file.split('/');
      const city = pathParts[pathParts.length - 2]; // Identifica a cidade pela pasta
      const imageName = pathParts[pathParts.length - 1];

      if (city === 'campinas') {
        campinasImages.value.push(imageName);
      } else if (city === 'ribeirao-preto') {
        rpImages.value.push(imageName);
      } else if (city === 'saojosedoscampos') {
        sjcImages.value.push(imageName);
      }
    });
  } catch (error) {
    console.error('Erro ao carregar imagens:', error);
  }
});

// Função para abrir o lightbox de acordo com a cidade
const openLightbox = (index: number, city: string) => {
  if (city === 'campinas') {
    lightboxImages.value = campinasImages.value.map(image => `/unidades/campinas/${image}`);
  } else if (city === 'ribeirao-preto') {
    lightboxImages.value = rpImages.value.map(image => `/unidades/ribeirao-preto/${image}`);
  } else if (city === 'saojosedoscampos') {
    lightboxImages.value = sjcImages.value.map(image => `/unidades/saojosedoscampos/${image}`);
  }

  currentImageIndex.value = index;
  visible.value = true;
};
</script>

<style scoped>
.social-icon {
  background-color: var(--bs-primary);
  border-radius: 100%;
  color: #ffffff!important;
  padding: 5px;
  margin-right: 5px;
}

.profile-info {
  padding-top: 1rem;
}
.contact-info ul {
  list-style-type: none;
  padding: 0;
}
.map-link a {
  color: var(--bs-primary);
  text-decoration: none;
}
.map-link a:hover {
  text-decoration: underline;
}
.social-icons a {
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #007bff;
}
.carousel-inner img {
  border-radius: 10px;
  height: 400px; /* Define uma altura fixa para todas as imagens */
  object-fit: cover; /* Garante que as imagens sejam ajustadas corretamente */
}
</style>
