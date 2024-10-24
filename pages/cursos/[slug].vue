<script lang="ts" setup>
import { ref, onMounted } from 'vue';
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

// Estado da tab ativa
const activeTab = ref<string>('');

// Pegando o slug da rota
const route = useRoute();
const slug = route.params.slug as string;

// Carrega os cursos e filtra com base no slug
onMounted(async () => {
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
  <section class="py-5">
    <div class="container">
      <div class="row py-5 my-5">
        <!-- Título do curso -->
        <div class="col-sm-6 text-center">
          <div class="pt-30" v-for="curso in displayedCourses" :key="curso.id">
            <h2 class="mb-5" style="color: #b92027; font-size: 36px;">{{ curso.title }}</h2>
          </div>
          <div>
            <h2 class="mb-5">A MELHOR QUALIDADE COM A MELHOR ESTRUTURA</h2>
            <p class="h5">Estude na melhor escola do interior paulista.</p>
            <span id="numbers">
              <b>+ de 1.000</b>
              <br />
              Alunos formados nesse curso
            </span>
          </div>
        </div>

        <!-- Vídeo do curso -->
        <div class="col-sm-6 text-center">
          <div v-for="curso in displayedCourses" :key="curso.id" class="ratio ratio-16x9">
            <iframe :src="curso.video" class="rounded shadow"></iframe>
          </div>
        </div>
      </div>

      <!-- Tabs com informações adicionais (somente exibe se o curso estiver ativo) -->
      <div v-if="displayedCourses[0]?.ativo" class="row">
        <div class="col-sm-8">
          <div>
            <div class="clearfix pt-0">
              <h2>INFORMAÇÕES SOBRE O CURSO</h2>
              <div v-for="curso in displayedCourses" :key="curso.id">
                <p>{{ curso.subtitulo }}</p>
              </div>
            </div>

            <ul class="nav nav-tabs mt-5">
              <!-- Tab: Média Salarial -->
              <li class="nav-item" v-if="displayedCourses[0]?.salaries.length">
                <a class="nav-link" :class="{ active: activeTab === 'media-salarial' }" @click="activeTab = 'media-salarial'" href="#media-salarial" data-bs-toggle="tab">Média Salarial</a>
              </li>

              <!-- Tab: Conteúdo Programático -->
              <li class="nav-item" v-if="displayedCourses[0]?.contents.length">
                <a class="nav-link" :class="{ active: activeTab === 'conteudo' }" @click="activeTab = 'conteudo'" href="#conteudo" data-bs-toggle="tab">Conteúdo Programático</a>
              </li>

              <!-- Tab: Mercado de Trabalho -->
              <li class="nav-item" v-if="displayedCourses[0]?.mercadotrabalho">
                <a class="nav-link" :class="{ active: activeTab === 'mercado-de-trabalho' }" @click="activeTab = 'mercado-de-trabalho'" href="#mercado-de-trabalho" data-bs-toggle="tab">Mercado de Trabalho</a>
              </li>

              <!-- Tab: Metodologia -->
              <li class="nav-item" v-if="displayedCourses[0]?.metodologia">
                <a class="nav-link" :class="{ active: activeTab === 'metodologia' }" @click="activeTab = 'metodologia'" href="#metodologia" data-bs-toggle="tab">Metodologia</a>
              </li>
            </ul>

            <div class="tab-content p-30">
              <!-- Tab: Média Salarial -->
              <div class="tab-pane fade" id="media-salarial" :class="{ show: activeTab === 'media-salarial', active: activeTab === 'media-salarial' }" v-if="displayedCourses[0]?.salaries.length">
                <table class="table table-striped table-borderless mt-2">
                  <thead>
                    <tr>
                      <th>Cargo</th>
                      <th>Salário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="salary in displayedCourses[0]?.salaries" :key="salary.id">
                      <th style="font-weight: normal">{{ salary.cargo }}</th>
                      <th style="font-weight: normal">R$ {{ salary.salario }}</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Tab: Conteúdo Programático -->
              <div class="tab-pane fade" id="conteudo" :class="{ show: activeTab === 'conteudo', active: activeTab === 'conteudo' }" v-if="displayedCourses[0]?.contents.length">
                <table class="table table-striped table-borderless">
                  <tbody>
                    <tr v-for="content in displayedCourses[0]?.contents" :key="content.id">
                      <th style="font-weight: normal;">{{ content.conteudo }}</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Tab: Mercado de Trabalho -->
              <div class="tab-pane fade py-3" id="mercado-de-trabalho" :class="{ show: activeTab === 'mercado-de-trabalho', active: activeTab === 'mercado-de-trabalho' }" v-if="displayedCourses[0]?.mercadotrabalho">
                {{ displayedCourses[0]?.mercadotrabalho }}
              </div>

              <!-- Tab: Metodologia -->
              <div class="tab-pane fade py-3" id="metodologia" :class="{ show: activeTab === 'metodologia', active: activeTab === 'metodologia' }" v-if="displayedCourses[0]?.metodologia">
                {{ displayedCourses[0]?.metodologia }}
              </div>
            </div>
          </div>
        </div>

        <!-- Botão para inscrição -->
        <div class="col-sm-4">
          <div>
            <div class="mb-45">
              <h2 class="">Gostou do curso? <br /></h2>
              <p class="h5 mb-5">Então garanta sua vaga.</p>
              <h3 class="text-primary">INSCREVA-SE AGORA!</h3>
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
</style>
