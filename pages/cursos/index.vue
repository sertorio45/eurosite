<template>
  <section class="py-5">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h2>A melhor qualificação para você.</h2>
        <p>
          Conheça nossos cursos profissionalizantes que oferecem a melhor qualificação para o mercado de trabalho.
        </p>
      </div>

      <!-- Exibindo os cursos -->
      <div class="row text-center justify-content-center align-items-center g-3 my-4">
        <div v-for="(curso, index) in displayedCourses" :key="curso.id" class="col-lg-4 col-md-4 col-sm-12 mb-4">
          <div class="card cursos-card h-100 d-flex flex-column">
            <div class="img-container">
              <NuxtImg :src="curso.image" class="card-img-top img-fluid" :alt="curso.title || 'Imagem do curso'" />
            </div>
            <div class="card-body d-flex flex-column">
              <h3>{{ curso.title }}</h3>
              <p>{{ curso.description }}</p>
              <NuxtLink class="card-text mt-auto" :to="`/cursos/${curso.slug}`">Mais informações</NuxtLink>
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
import { ref, onMounted } from 'vue';

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

// Simulação de carregamento dos cursos
onMounted(async () => {
  try {
    const response = await $fetch('/api/postsCursos'); // Substitua pela API real
    courses.value = response; // Carrega os cursos da API
    displayedCourses.value = courses.value.slice(0, coursesPerPage); // Mostra os primeiros 8 cursos
  } catch (error) {
    console.error('Erro ao carregar cursos:', error);
  }
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
</style>
