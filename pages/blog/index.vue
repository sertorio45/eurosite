<template>
  <section class="py-5">
    <div class="container my-5">
      <div class="row justify-items-center">
        <!-- Loop pelos posts com opção de carregar mais -->
        <div class="col-md-4 mb-4" v-for="post in displayedPosts" :key="post.id">
          <div class="card blog-card h-100">
            <img :src="post.image" class="card-img-top img-fluid" alt="Imagem do post" />
            <div class="card-body">
              <!-- Data já formatada no backend -->
              <small class="text-muted">{{ post.date }}</small>
              <!-- Título com a primeira letra maiúscula -->
              <h5 class="card-title mt-2">{{ capitalizeTitle(post.title) }}</h5>
              <button class="btn btn-primary">Ver artigo</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Botão para carregar mais artigos -->
      <div class="text-center mt-4">
        <button v-if="displayedPosts.length < posts.length" @click="loadMorePosts" class="btn btn-primary" :disabled="isLoading">
          <span v-if="isLoading" class="mx-2">Carregando</span>
          <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-if="!isLoading">Carregar mais artigos</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'default-breadcrumb' // Usa o layout sem breadcrumbs
});

// Referência dos posts
const posts = ref([]);
const displayedPosts = ref([]);
const postsPerPage = 6;
const isLoading = ref(false);

// Função para carregar mais posts
const loadMorePosts = async () => {
  isLoading.value = true;
  const nextPosts = posts.value.slice(displayedPosts.value.length, displayedPosts.value.length + postsPerPage);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula um tempo de carregamento
  displayedPosts.value.push(...nextPosts);
  isLoading.value = false;
};

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// Carrega os posts iniciais ao montar o componente
onMounted(async () => {
  const response = await $fetch('/api/posts');
  posts.value = response;
  loadMorePosts();
});
</script>

<style scoped>
.blog-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.card-body {
  border-radius: 0!important;
  padding: 10px;
  border: 1px solid transparent;
  transition: ease-in-out;
  transition-duration: 0.2s;
}

.card-title {
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
}

.card-body small {
  display: block;
  margin-bottom: 0.5rem;
  color: #6c757d;
}
</style>
