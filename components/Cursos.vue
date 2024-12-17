<template>
  <section class="py-5">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h1>Nossos cursos</h1>
        <p>
          Os cursos profissionalizantes Euro Anglo foram elaborados para você que deseja se preparar para o mercado de trabalho ou adquirir novos conhecimentos.
          Criamos uma metodologia que relaciona a teoria e a prática, simulando situações que acontecem diariamente nas empresas, para que você aprenda a resolvê-las.
        </p>
      </div>

      <div v-if="lastThreeCourses.length > 0" class="row text-center justify-content-center align-items-center g-1 my-4">
        <div v-for="(course, index) in lastThreeCourses" :key="course.id" class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card cursos-card h-100 d-flex flex-column">
            <div class="img-container">
              <img :src="course.image" class="card-img-top img-fluid" :alt="course.title || 'Imagem do curso'" loading="lazy" />
            </div>
            <div class="card-body d-flex flex-column">
              <h3>{{ course.title }}</h3>
              <NuxtLink class="card-text mt-auto" :to="`/cursos/${course.slug}`">Mais informações</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="row text-center justify-content-center align-items-center g-1 my-4">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="n in 3" :key="n">
          <div class="card cursos-card d-flex flex-column">
            <div class="img-container">
              <div class="placeholder-glow w-100">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23e0e0e0'/%3E%3C/svg%3E" 
                  alt="Imagem Placeholder"
                  class="card-img-top img-fluid" />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h1 class="placeholder-glow">
                <span class="placeholder col-12"></span>
              </h1>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-12"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-4">
        <NuxtLink href="/cursos" class="btn btn-primary">Veja todos os cursos</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const courses = ref([]);

// Computada para pegar os últimos 3 cursos
const lastThreeCourses = computed(() => courses.value.slice(0, 3));

onMounted(async () => {
  try {
    const response = await $fetch('/api/postsCursos');
    
    // Capitalizar títulos diretamente após carregar os dados
    courses.value = response.map((course) => ({
      ...course,
      title: capitalizeTitle(course.title),
    }));
  } catch (error) {
    console.error('Erro ao carregar cursos:', error);
  }
});

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};
</script>

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
  aspect-ratio: 16 / 9; /* Garante proporção padrão para imagens */
  position: relative;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p.card-text {
  color: var(--bs-primary);
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
