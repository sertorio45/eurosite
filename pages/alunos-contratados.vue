<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <!-- Loop pelos posts com opção de carregar mais -->
          <div class="col-xs-12 col-sm-6 mb-30 my-3" v-for="AlunosContratados in displayedPosts" :key="AlunosContratados.id">
            <div class="hall-image event-box d-flex">
              <!-- Imagem do Aluno -->
              <div class="thumb pull-left">
                <NuxtImg :src="AlunosContratados.image" alt="Imagem do Aluno" class="rounded" width="350px" format="webp"/>
              </div>

              <!-- Conteúdo -->
              <div class="event-content w-100 px-3 align-content-center">
                <div class="align-container">
                  <div class="align-inner">
                    <h4 class="text-capitalize">
                      {{ capitalizeTitle(AlunosContratados.title) }}
                    </h4>
                    <p>{{ AlunosContratados.resumo }}</p>
                    <!-- Empresa ou outro conteúdo -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Botão para carregar mais artigos -->
        <div class="text-center mt-4">
          <button v-if="displayedPosts.length < AlunosContratados.length" @click="loadMorePosts" class="btn btn-primary" :disabled="isLoading">
            <span v-if="isLoading" class="mx-2">Carregando</span>
            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-if="!isLoading">Carregar mais</span>
          </button>
        </div>
      </div>
    </section>
    <hr class="border border-1 opacity-50">
    <Cursos />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'default-breadcrumb',
  });

// Defina a interface para os dados dos AlunosContratados
interface AlunosContratados {
  id: number;
  title: string;
  image: string;
  resumo: string;
  cidade: string;
  dia: string;
  slug: string;
}

// Declare os arrays com o tipo correto
const AlunosContratados = ref<AlunosContratados[]>([]);
const displayedPosts = ref<AlunosContratados[]>([]);
const postsPerPage = 6;
const isLoading = ref(false);

// Função para carregar mais AlunosContratados
const loadMorePosts = async () => {
  isLoading.value = true;
  const nextPosts = AlunosContratados.value.slice(displayedPosts.value.length, displayedPosts.value.length + postsPerPage);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula um tempo de carregamento
  displayedPosts.value.push(...nextPosts);
  isLoading.value = false;
};

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title: string) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// Carrega os AlunosContratados iniciais ao montar o componente
onMounted(async () => {
  const response = await $fetch('/api/postsAlunosContratados');
  AlunosContratados.value = response as AlunosContratados[]; // Cast explícito para o tipo
  loadMorePosts();
});
</script>

<style scoped>
.hall-image {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.event-box {
  display: flex;
  align-items: center;
  padding: 10px;
}

.event-content {
  display: flex;
  align-items: center;
}

.align-container {
  display: flex;
  justify-content: center;
  height: 100%;
}

.align-inner {
  text-align: left;
}

.text-capitalize {
  text-transform: capitalize;
}

.mb-30 {
  margin-bottom: 30px;
}
</style>
