<template>
  <section class="py-5">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h2>A melhor qualificação para você.</h2>
        <p>
          Conheça nossos cursos profissionalizantes que oferecem a melhor qualificação para o mercado de trabalho.
        </p>
      </div>

      <!-- Exibindo os cursos ou placeholders -->
      <div class="row text-center justify-content-center align-items-center g-3 my-4">
        <div v-if="courses.length > 0" v-for="(curso, index) in displayedCourses" :key="curso.id" class="col-lg-4 col-md-4 col-sm-12 mb-4">
          <div class="card cursos-card h-100 d-flex flex-column">
            <div class="img-container">
              <NuxtImg :src="curso.image" class="card-img-top img-fluid" :alt="curso.title || 'Imagem do curso'" densities="x1 x2" :placeholder="[900, 500, 75, 5]" width="900" height="500" loading="lazy" quality="80" />
            </div>
            <div class="card-body align-content-center">
              <h3>{{ curso.title }}</h3>
              <NuxtLink class="card-text mt-auto" :to="`/cursos/${curso.slug}`">Mais informações</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Placeholders enquanto os cursos são carregados -->
        <div v-else v-for="n in coursesPerPage" :key="n" class="col-lg-4 col-md-4 col-sm-12 mb-4">
          <div class="card cursos-card h-100 d-flex flex-column">
            <div class="img-container">
              <div class="placeholder-glow w-100">
                <NuxtImg 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23e0e0e0'/%3E%3C/svg%3E" 
                  alt="Imagem Placeholder"
                  class="card-img-top img-fluid" />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h3 class="placeholder-glow">
                <span class="placeholder col-12"></span>
              </h3>
              <p class="placeholder-glow">
                <span class="placeholder col-12"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão para carregar mais cursos -->
      <div class="text-center mt-4">
        <button v-if="displayedCourses.length < courses.length" @click="loadMoreCourses" class="btn btn-primary" :disabled="isLoading">
          <span v-if="isLoading" class="mx-2">Carregando</span>
          <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-if="!isLoading">Carregar mais cursos</span>
        </button>
      </div>
    </div>
  </section>

  <Motivos/>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useAsyncData } from '#app';

definePageMeta({
  layout: 'default-breadcrumb',
});

// Referência para todos os cursos
const courses = ref([]);

// Quantidade de cursos para exibir inicialmente
const coursesPerPage = 6;
const displayedCourses = ref([]);
const isLoading = ref(false);

// Função para carregar mais cursos
const loadMoreCourses = () => {
  isLoading.value = true;
  setTimeout(() => {
    const nextCourses = courses.value.slice(displayedCourses.value.length, displayedCourses.value.length + coursesPerPage);
    displayedCourses.value.push(...nextCourses);
    isLoading.value = false;
  }, 1000); // Simula um tempo de carregamento
};

// Carregando os cursos com useAsyncData
const { data, pending, error } = useAsyncData('courses', async () => {
  const response = await $fetch('/api/postsCursos');
  // Certifique-se de que a resposta é um array
  return Array.isArray(response) ? response : [];
});

// Atualizar os cursos e os exibidos inicialmente
watch(data, (newData) => {
  courses.value = newData || [];
  displayedCourses.value = courses.value.slice(0, coursesPerPage);
});
</script>


<style scoped>
.card-body {
  border-radius: 0 0 10px 10px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Organiza o conteúdo do card em colunas */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cursos-card {
  min-height: 450px; /* Define a altura mínima para garantir que os cards tenham o mesmo tamanho */
}

.img-container {
  width: 100%;
  padding-top: 60%; /* Define a altura para manter a proporção */
  position: relative;
  overflow: hidden;
}

.card-img-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: initial;
}

p.card-text {
  color: var(--bs-primary);
}

.text-center {
  margin-top: 20px;
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
