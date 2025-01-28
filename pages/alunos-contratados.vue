<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <!-- Loop pelos posts filtrados com opção de carregar mais -->
          <div
            class="col-xs-12 col-sm-6 mb-30 my-3"
            v-for="AlunosContratados in displayedPosts"
            :key="AlunosContratados.id"
          >
            <div class="hall-image event-box d-flex">
              <!-- Imagem do Aluno -->
              <div class="thumb pull-left">
                <NuxtImg
                  :src="AlunosContratados.image"
                  :alt="AlunosContratados.slug"
                  class="img-fluid"
                  densities="x1 x2 x3"
                  :placeholder="15"
                  width="500"
                  loading="lazy"
                  fit="cover"
                  @click="openLightbox(AlunosContratados.image)"
                  style="cursor: pointer"
                />
              </div>

              <!-- Conteúdo -->
              <div class="event-content w-100 px-3 align-content-center">
                <div class="align-container">
                  <div class="align-inner">
                    <h4 class="text-capitalize">
                      {{ capitalizeTitle(AlunosContratados.title) }}
                    </h4>
                    <p>{{ AlunosContratados.resumo }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botão para carregar mais artigos -->
        <div class="text-center mt-4">
          <button
            v-if="displayedPosts.length < filteredPosts.length"
            @click="loadMorePosts"
            class="btn btn-primary"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="mx-2">Carregando</span>
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span v-if="!isLoading">Carregar mais</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="[selectedImage]"
      @hide="lightboxVisible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

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
  ativo: number;
}

// Declare os arrays com o tipo correto
const AlunosContratados = ref<AlunosContratados[]>([]);
const displayedPosts = ref<AlunosContratados[]>([]);
const postsPerPage = 6;
const isLoading = ref(false);

// Lightbox state
const lightboxVisible = ref(false);
const selectedImage = ref('');

// Função para abrir o lightbox
const openLightbox = (image: string) => {
  selectedImage.value = image;
  lightboxVisible.value = true;
};

// Computed para filtrar os posts com "ativo: 1"
const filteredPosts = computed(() => {
  return AlunosContratados.value.filter(post => post.ativo === 1);
});

// Função para carregar mais AlunosContratados
const loadMorePosts = async () => {
  isLoading.value = true;
  const nextPosts = filteredPosts.value.slice(
    displayedPosts.value.length,
    displayedPosts.value.length + postsPerPage
  );
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simula um tempo de carregamento
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
