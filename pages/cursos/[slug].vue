<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

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

// Referência para todos os cursos
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

// Carrega os cursos e filtra com base no slug
onMounted(async () => {
  generateRandomNumber();
  try {
    const response = await $fetch<Course[]>('../api/postsCursos');
    courses.value = response;

    // Filtra o curso com base no slug da URL
    const cursoCorrespondente = courses.value.find((curso) => curso.slug === slug);
    
    if (cursoCorrespondente) {
      displayedCourses.value = [cursoCorrespondente];

      // Definir a primeira tab ativa por padrão
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
  } catch (error) {
    console.error('Erro ao carregar cursos:', error);
  }
});
</script>

<template>
<section class="bg-light py-5 text-center">
  <div>
    <a href="/" style="text-decoration: none;">Página inicial</a> / <span>{{ currentCourse?.title }}</span>
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
          <h2 v-else class="placeholder-glow">
            <span class="placeholder col-8"></span>
          </h2>
          <p v-if="currentCourse" class="h5">Estude na melhor escola do interior paulista.</p>
          <p v-else class="placeholder-glow">
            <span class="placeholder col-4"></span>
          </p>
          <span id="numbers">
            <b v-if="currentCourse">+ de {{ randomStudentNumber }}</b>
            <span v-else class="placeholder col-3"></span>
            <br />
            <span v-if="currentCourse">Alunos formados nesse curso</span>
            <span v-else class="placeholder col-5"></span>
          </span>
        </div>
      </div>

      <!-- Vídeo ou imagem do curso -->
      <div class="col-sm-6 text-center">
        <div class="ratio ratio-16x9">
          <iframe 
            v-if="currentCourse?.video" 
            :src="currentCourse.video" 
            class="rounded shadow">
          </iframe>
          <NuxtImg 
            v-else-if="currentCourse?.image" 
            :src="currentCourse.image" 
            alt="Imagem do curso" 
            class="rounded shadow" />
          <div v-else class="placeholder-glow">
            <div class="placeholder col-12" style="height: 100%;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs com informações adicionais -->
    <div v-if="currentCourse?.ativo" class="row">
      <div class="col-sm-8">
        <div>
          <div class="clearfix pt-0">
            <h2>INFORMAÇÕES SOBRE O CURSO</h2>
            <p v-if="currentCourse">{{ currentCourse.subtitulo }}</p>
            <p v-else class="placeholder-glow">
              <span class="placeholder col-8"></span>
            </p>
          </div>

          <ul class="nav nav-tabs mt-5">
            <li class="nav-item" v-if="currentCourse?.salaries.length">
              <a class="nav-link" :class="{ active: activeTab === 'media-salarial' }" @click="activeTab = 'media-salarial'">Média Salarial</a>
            </li>
            <li class="nav-item" v-if="currentCourse?.contents.length">
              <a class="nav-link" :class="{ active: activeTab === 'conteudo' }" @click="activeTab = 'conteudo'">Conteúdo Programático</a>
            </li>
            <li class="nav-item" v-if="currentCourse?.mercadotrabalho">
              <a class="nav-link" :class="{ active: activeTab === 'mercado-de-trabalho' }" @click="activeTab = 'mercado-de-trabalho'">Mercado de Trabalho</a>
            </li>
            <li class="nav-item" v-if="currentCourse?.metodologia">
              <a class="nav-link" :class="{ active: activeTab === 'metodologia' }" @click="activeTab = 'metodologia'">Metodologia</a>
            </li>
          </ul>

          <div class="tab-content p-30">
            <div class="tab-pane fade" id="media-salarial" :class="{ show: activeTab === 'media-salarial', active: activeTab === 'media-salarial' }" v-if="currentCourse?.salaries.length">
              <table class="table table-striped table-borderless mt-2">
                <thead>
                  <tr>
                    <th>Cargo</th>
                    <th>Salário</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="salary in currentCourse.salaries" :key="salary.id">
                    <th style="font-weight: normal">{{ salary.cargo }}</th>
                    <th style="font-weight: normal">R$ {{ salary.salario }}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="conteudo" :class="{ show: activeTab === 'conteudo', active: activeTab === 'conteudo' }" v-if="currentCourse?.contents.length">
              <table class="table table-striped table-borderless">
                <tbody>
                  <tr v-for="content in currentCourse.contents" :key="content.id">
                    <th style="font-weight: normal;">{{ content.conteudo }}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade py-3" id="mercado-de-trabalho" :class="{ show: activeTab === 'mercado-de-trabalho', active: activeTab === 'mercado-de-trabalho' }" v-if="currentCourse?.mercadotrabalho">
              {{ currentCourse.mercadotrabalho }}
            </div>
            <div class="tab-pane fade py-3" id="metodologia" :class="{ show: activeTab === 'metodologia', active: activeTab === 'metodologia' }" v-if="currentCourse?.metodologia">
              {{ currentCourse.metodologia }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div>
          <div class="mb-45">
            <h2 v-if="currentCourse" class="">Gostou do curso? <br /></h2>
            <h2 v-else class="placeholder-glow">
              <span class="placeholder col-6"></span>
            </h2>
            <p v-if="currentCourse" class="h5 mb-5">Então garanta sua vaga.</p>
            <p v-else class="placeholder-glow">
              <span class="placeholder col-4"></span>
            </p>
            <h3 v-if="currentCourse" class="text-primary">INSCREVA-SE AGORA!</h3>
            <h3 v-else class="placeholder-glow">
              <span class="placeholder col-8"></span>
            </h3>
            <hr />
          </div>
          <FormsInscricao />
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