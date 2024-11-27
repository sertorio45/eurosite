<template>
  <section class="py-5">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h1>Nossos cursos</h1>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ipsum sobreviveu não
          só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década
          de 60, quando a Letraset lançou decalques contendo passagens.
        </p>
      </div>

      <div v-if="lastThreeCourses.length > 0" class="row text-center justify-content-center align-items-center g-1 my-4">
        <div v-for="(course, index) in lastThreeCourses" :key="course.id" class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card cursos-card h-100 d-flex flex-column">
            <div class="img-container">
              <img :src="course.image" class="card-img-top img-fluid" :alt="course.title || 'Imagem do curso'" lazy="loading"/>
            </div>
            <div class="card-body d-flex flex-column">
              <h3>{{ course.title }}</h3>
              <NuxtLink class="card-text mt-auto" :to="`/cursos/${course.slug}`">Mais informações</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center">
        <p>Carregando cursos...</p>
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
  padding: 50px;
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
  object-position: right;
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
