<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'default-breadcrumb',
});

// Cursos carregados
const courses = ref([]);
// Cursos exibidos
const displayedCourses = ref([]);
// Estado de carregamento
const isLoading = ref(false);
// Quantidade de cursos exibidos por vez
const coursesPerPage = 6;

// Função para carregar mais cursos
const loadMoreCourses = () => {
  isLoading.value = true;
  setTimeout(() => {
    const nextCourses = courses.value.slice(displayedCourses.value.length, displayedCourses.value.length + coursesPerPage);
    displayedCourses.value.push(...nextCourses);
    isLoading.value = false;
  }, 1000);
};

// Fetch inicial para carregar cursos
const { data, pending, error } = useAsyncData('courses', async () => {
  const response = await $fetch('api/postsCursos');
  if (Array.isArray(response)) {
    courses.value = response;
    displayedCourses.value = response.slice(0, coursesPerPage);
  }
});
</script>

<template>
  <section class="py-5">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h2>A melhor qualificação para você.</h2>
        <p>
          Conheça nossos cursos profissionalizantes que oferecem a melhor qualificação para o mercado de trabalho.
        </p>
      </div>

      <!-- Exibição dos cursos -->
      <div class="row text-center justify-content-center align-items-center g-3 my-4">
        <template v-if="!pending">
          <!-- Exibindo os cursos -->
          <div
            v-for="(curso, index) in displayedCourses"
            :key="curso.id"
            class="col-lg-4 col-md-4 col-sm-12 mb-4"
          >
            <div class="card cursos-card h-100 d-flex flex-column">
              <div class="img-container">
                <NuxtImg
                  :src="curso.image || '/placeholder.jpg'"
                  class="card-img-top img-fluid"
                  :alt="curso.title || 'Imagem do curso'"
                  densities="x1 x2"
                  width="900"
                  height="500"
                  loading="lazy"
                  quality="80"
                  fit="cover"
                  :placeholder="15"
                />
              </div>
              <div class="card-body align-content-center">
                <h3>{{ curso.title }}</h3>
                <NuxtLink class="card-text mt-auto" :to="`/cursos/${curso.slug}`">
                  Mais informações
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Botão para carregar mais cursos -->
          <div class="text-center mt-4">
            <button
              v-if="displayedCourses.length < courses.length"
              @click="loadMoreCourses"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></span>
              <span v-if="!isLoading">Carregar mais cursos</span>
            </button>
          </div>
        </template>

        <!-- Placeholders enquanto carrega -->
        <template v-else>
          <div
            v-for="n in coursesPerPage"
            :key="n"
            class="col-lg-4 col-md-4 col-sm-12 mb-4"
          >
            <div class="card cursos-card h-100 d-flex flex-column">
              <div class="img-container">
                <NuxtImg
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23e0e0e0'/%3E%3C/svg%3E"
                  alt="Imagem Placeholder"
                  class="card-img-top img-fluid"
                />
              </div>
              <div class="card-body">
                <h3 class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </h3>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-body {
  border-radius: 0 0 10px 10px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cursos-card {
  min-height: 450px;
}

.img-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-primary {
  background-color: var(--bs-primary);
}

.placeholder {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.placeholder-glow .placeholder {
  animation: glow 1.5s ease-in-out infinite;
}

@keyframes glow {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
