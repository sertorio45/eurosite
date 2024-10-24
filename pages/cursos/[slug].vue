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

      <!-- Tabs com informações adicionais -->
      <div class="row">
        <div class="col-sm-8">
          <div>
            <div class="clearfix pt-0">
              <h2>INFORMAÇÕES SOBRE O CURSO</h2>
              <div v-for="curso in displayedCourses" :key="curso.id">
                <p>{{ curso.subtitulo }}</p>
              </div>
            </div>

            <ul class="nav nav-tabs mt-5">
              <li class="nav-item">
                <a class="nav-link active" href="#media-salarial" data-bs-toggle="tab">Média Salarial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#conteudo" data-bs-toggle="tab">Conteúdo Programático</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mercado-de-trabalho" data-bs-toggle="tab">Mercado de Trabalho</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#metodologia" data-bs-toggle="tab">Metodologia</a>
              </li>
            </ul>

            <div class="tab-content p-30">
              <!-- Tab: Média Salarial -->
              <div class="tab-pane fade show active" id="media-salarial">
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
              <div class="tab-pane fade" id="conteudo">
                <table class="table table-striped table-borderless">
                  <tbody>
                    <tr v-for="content in displayedCourses[0]?.contents" :key="content.id">
                      <th style="font-weight: normal;">{{ content.conteudo }}</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Tab: Mercado de Trabalho -->
              <div class="tab-pane fade py-3" id="mercado-de-trabalho">
                {{ displayedCourses[0]?.mercadotrabalho }}
              </div>

              <!-- Tab: Metodologia -->
              <div class="tab-pane fade py-3" id="metodologia">
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
