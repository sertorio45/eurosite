<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row gy-4">
          <!-- Loop pelos posts filtrados com opção de carregar mais -->
          <div
            class="col-12 col-sm-6 col-md-4 mb-30 my-3"
            v-for="AlunosContratados in displayedPosts"
            :key="AlunosContratados.id"
          >
            <div class="hall-image event-box d-flex">
              <!-- Imagem do Aluno -->
              <div class="thumb w-100">
                <NuxtImg
                  :src="AlunosContratados.image"
                  :alt="AlunosContratados.slug"
                  densities="x1 x2"
                  :placeholder="15"
                  class="rounded"
                  sizes="sm:100vw md:300px lg:400px"
                  loading="lazy"
                  fit="cover"
                  @click="openLightbox(AlunosContratados.image)"
                  style="cursor: pointer"
                />
              </div>

              <!-- Conteúdo -->
              <div class="event-content w-100 px-2">
                <div class="align-container">
                  <div class="align-inner py-4">
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
  display: flex;
  flex-direction: column; /* Adiciona suporte para stack em telas pequenas */
}

.event-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os elementos no início em telas pequenas */
  padding: 10px;
}

.event-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

/* Responsividade adicional */
@media (max-width: 768px) {
  .hall-image {
    flex-direction: column; /* Alinha os itens em coluna para dispositivos menores */
    text-align: center; /* Centraliza o conteúdo */
  }

  .thumb {
    margin-bottom: 15px; /* Espaçamento entre a imagem e o conteúdo */
  }

  .event-content {
    padding: 10px 0; /* Reduz padding no conteúdo */
  }

  .event-box {
    padding: 15px; /* Reduz o espaçamento da caixa em telas pequenas */
  }
}
</style>
