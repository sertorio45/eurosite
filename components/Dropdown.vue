<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Definindo interface para curso
interface Course {
  id: number;
  title: string;
  slug: string;
}

const courses = ref<Course[]>([]);

// Função para buscar cursos
onMounted(async () => {
  try {
    const response = await $fetch<Course[]>('/api/postsCursos'); // Certifique-se de que a rota esteja correta
    courses.value = response;
  } catch (error) {
    console.error('Erro ao carregar cursos:', error);
  }
});

// Função para navegação (opcional)
const goToCursos = () => {
  // Navegação customizada, se necessário
};
</script>

<template>
  <li class="nav-item dropdown">
    <NuxtLink 
      class="nav-link dropdown-toggle" 
      to="/cursos"
      id="navbarDropdown" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
      @click.native.prevent="goToCursos"
    >
      Cursos <i class="bx bx-chevron-down"></i>
    </NuxtLink>
    <ul class="dropdown-menu px-4" aria-labelledby="navbarDropdown">
      <li v-for="course in courses" :key="course.id">
        <NuxtLink 
          class="dropdown-item nav-link" 
          :to="`/cursos/${course.slug}`"
        >
          {{ course.title }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

