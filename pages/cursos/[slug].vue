<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';

// Definindo interfaces para o curso, conteúdo e média salarial
interface CourseContent {
  id: number;
  conteudo: string;
}

interface CourseSalary {
  id: number;
  cargo: string;
  salario: string;
}

interface Course {
  id: number;
  title: string;
  image: string;
  date: string;
  metodologia: string;
  mercadotrabalho: string;
  ativo: boolean;
  subtitulo: string;
  video: string;
  slug: string;
  contents: CourseContent[];
  salaries: CourseSalary[];
}

// Referências e estados
const courses = ref<Course[]>([]);
const displayedCourses = ref<Course[]>([]);
const randomStudentNumber = ref<number>(0);

// Computada para pegar o curso correspondente
const currentCourse = computed(() => displayedCourses.value[0] || null);

// Estado da tab ativa
const activeTab = ref<string>('');

// Gerar um número aleatório entre 2.000 e 8.000 e armazenar localmente
const generateRandomNumber = () => {
  const storedNumber = sessionStorage.getItem('randomStudentNumber');
  if (storedNumber) {
    randomStudentNumber.value = parseInt(storedNumber, 10);
  } else {
    randomStudentNumber.value = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
    sessionStorage.setItem('randomStudentNumber', randomStudentNumber.value.toString());
  }
};

// Pegando o slug da rota
const route = useRoute();
const slug = route.params.slug as string;

// Carrega os cursos usando useAsyncData
const { data: coursesData, error } = useAsyncData<Course[]>(
  'courses',
  () => $fetch('/api/postsCursos')
);

if (error.value) {
  console.error('Erro ao carregar cursos:', error.value);
}

// Atualiza os dados com base no slug quando carregados
if (coursesData.value) {
  courses.value = coursesData.value;
  const cursoCorrespondente = courses.value.find((curso) => curso.slug === slug);
  if (cursoCorrespondente) {
    displayedCourses.value = [cursoCorrespondente];

    // Define a primeira tab ativa por padrão
    if (cursoCorrespondente.salaries.length) {
      activeTab.value = 'media-salarial';
    } else if (cursoCorrespondente.contents.length) {
      activeTab.value = 'conteudo';
    } else if (cursoCorrespondente.mercadotrabalho) {
      activeTab.value = 'mercado-de-trabalho';
    } else if (cursoCorrespondente.metodologia) {
      activeTab.value = 'metodologia';
    }
  } else {
    console.warn('Curso correspondente não encontrado para o slug:', slug);
  }
}

// Gera o número aleatório no lado do cliente
if (process.client) {
  generateRandomNumber();
}
</script>

<template>
<section class="bg-light py-5 text-center">
  <div>
    <NuxtLink to="/" style="text-decoration: none;">Página inicial</NuxtLink> / <NuxtLink href="/cursos" style="text-decoration: none;">Cursos</NuxtLink> / <span>{{ currentCourse?.title }}</span>
  </div>
</section>

<section class="py-5">
  <div class="container">
    <div class="row py-5 my-5">
      <!-- Título do curso -->
      <div class="col-sm-6 text-center">
        <div class="pt-30">
          <h2 v-if="currentCourse" class="mb-5" style="color: #b92027; font-size: 36px;">{{ currentCourse.title }}</h2>
          <h2 v-else class="placeholder-glow">
            <span class="placeholder col-6"></span>
          </h2>
        </div>
        <div>
          <h2 v-if="currentCourse" class="mb-5">A MELHOR QUALIDADE COM A MELHOR ESTRUTURA</h2>
          <p v-if="currentCourse" class="h5">Estude na melhor escola do interior paulista.</p>
          <span id="numbers">
            <b v-if="currentCourse">+ de {{ randomStudentNumber }}</b>
            <br />
            <span v-if="currentCourse">Alunos formados nesse curso</span>
          </span>
        </div>
      </div>

      <!-- Vídeo ou imagem do curso -->
      <div class="col-sm-6 text-center">
        <div v-if="currentCourse?.video" class="ratio ratio-16x9">
          <iframe 
            :src="currentCourse.video" 
            class="rounded shadow">
          </iframe>
        </div>
        <div v-else-if="currentCourse?.image">
          <NuxtImg 
            :src="currentCourse.image" 
            :alt="currentCourse.title" 
            class="rounded shadow"
            loading="lazy" 
            :placeholder="15"
            height="400px"
            width="500px"
            fit="cover"
            densities="x1 x2"
          />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
#numbers {
  font-size: 30px;
}

.placeholder {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.placeholder-glow .placeholder {
  animation: glow 1.5s ease-in-out infinite;
}

.custom-image {
  width: 100%;
  height: auto;
  max-height: 700px;
  object-fit: cover;
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
