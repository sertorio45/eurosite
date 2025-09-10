<script lang="ts" setup>
import { ref, computed } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

definePageMeta({
  layout: 'default-breadcrumb',
});

// Defina a interface para os dados dos AlunosContratados
interface AlunoContratado {
  id: number;
  title: string;
  image: string;
  resumo: string;
  cidade: string;
  dia: string;
  slug: string;
  ativo: number;
}

// Use useAsyncData para carregar os dados
const { data: alunosContratados, pending, error } = await useAsyncData<AlunoContratado[]>('alunosContratados', () => $fetch('/api/postsAlunosContratados'));

// Estado para paginação
const displayedPosts = ref<AlunoContratado[]>([]);
const postsPerPage = 6;

// Lightbox state
const lightboxVisible = ref(false);
const selectedImage = ref('');

// Função para carregar mais posts
const loadMorePosts = () => {
  if (!alunosContratados.value) return;
  const nextPosts = alunosContratados.value.slice(
    displayedPosts.value.length,
    displayedPosts.value.length + postsPerPage
  );
  displayedPosts.value.push(...nextPosts);
};

// Função para abrir o lightbox
const openLightbox = (image: string) => {
  selectedImage.value = image;
  lightboxVisible.value = true;
};

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title: string) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// Carrega os posts iniciais quando os dados estão disponíveis
watchEffect(() => {
  if (alunosContratados.value && alunosContratados.value.length > 0 && displayedPosts.value.length === 0) {
    displayedPosts.value.push(...alunosContratados.value.slice(0, postsPerPage));
  }
});

// Computed para mostrar mensagem de erro se houver
const errorMessage = computed(() => {
  if (error.value) {
    console.error('Erro ao carregar alunos contratados:', error.value);
    return 'Erro ao carregar dados dos alunos contratados. Tente novamente mais tarde.';
  }
  return null;
});
</script>

<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <!-- Mensagem de erro -->
        <div v-if="errorMessage" class="alert alert-danger text-center" role="alert">
          {{ errorMessage }}
        </div>

        <div class="row gy-4">
          <!-- Loop pelos posts filtrados com opção de carregar mais -->
          <div
            class="col-12 col-sm-6 col-md-4 mb-30 my-3"
            v-for="aluno in displayedPosts"
            :key="aluno.id"
          >
            <div class="hall-image event-box d-flex">
              <!-- Imagem do Aluno -->
              <div>
                <NuxtImg
                  :src="aluno.image"
                  :alt="aluno.title || 'Foto do aluno contratado'"
                  densities="x1 x2"
                  class="rounded d-block w-100"
                  sizes="100vw sm:100vw md:500vw lg:50vw"
                  loading="lazy"
                  fit="cover"
                  placeholder
                  width="400"
                  height="400"
                  quality="60"
                  @click="openLightbox(aluno.image)"
                  style="cursor: pointer"
                />
              </div>

              <!-- Conteúdo -->
              <div class="event-content w-100 px-2">
                <div class="align-container">
                  <div class="align-inner py-4">
                    <h4 class="text-capitalize">
                      {{ capitalizeTitle(aluno.title) }}
                    </h4>
                    <p>{{ aluno.resumo }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Placeholder Cards durante carregamento -->
          <template v-if="pending">
            <div 
              class="col-12 col-sm-6 col-md-4 mb-30 my-3" 
              v-for="n in 3" 
              :key="`placeholder-${n}`"
            >
              <div class="hall-image event-box d-flex">
                <div class="thumb w-100 placeholder-glow">
                  <div class="placeholder rounded img-fluid" style="height: 200px; background-color: #e9ecef;"></div>
                </div>
                <div class="event-content w-100 px-2">
                  <div class="align-container">
                    <div class="align-inner py-4">
                      <h4 class="placeholder-glow">
                        <span class="placeholder col-6"></span>
                      </h4>
                      <p class="placeholder-glow">
                        <span class="placeholder col-8"></span>
                        <span class="placeholder col-5"></span>
                        <span class="placeholder col-7"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Botão para carregar mais artigos -->
        <div class="text-center mt-4">
          <button
            v-if="alunosContratados && displayedPosts.length < alunosContratados.length"
            @click="loadMorePosts"
            class="btn btn-primary"
            :disabled="pending"
          >
            <span v-if="pending" class="mx-2">Carregando</span>
            <span
              v-if="pending"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span v-if="!pending">Carregar mais</span>
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
