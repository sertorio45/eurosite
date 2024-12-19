<template>
  <section class="py-5">
    <div class="container my-5">
      <div class="row justify-items-center">
        <!-- Loop pelos posts -->
        <div class="col-md-4 mb-4" v-for="post in displayedPosts" :key="post.id">
          <div class="card blog-card h-100">
            <NuxtImg 
                :src="post.image" 
                class="card-img-top img-fluid" alt="Imagem do post" 
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                :placeholder="15" 
                width="500" 
                height="500" 
                loading="lazy" 
                quality="80" 
                fit="cover"
            />
            <div class="card-body">

              <!-- Título com a primeira letra maiúscula -->
              <h5 class="card-title mt-2">{{ capitalizeTitle(post.title) }}</h5>
              <NuxtLink class="btn btn-primary" :to="`/blog/${post.slug}`">Ver artigo</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Botão para carregar mais artigos -->
      <div class="text-center mt-4" v-if="displayedPosts.length < posts.length">
        <button @click="loadMorePosts" class="btn btn-primary">
          Carregar mais artigos
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'default-breadcrumb' // Usa o layout sem breadcrumbs
});

// Uso de useAsyncData para buscar os posts
const { data: posts } = useAsyncData('posts', () => $fetch('/api/posts'));

// Referências e estado
const displayedPosts = ref([]);
const postsPerPage = 6;

// Inicializa os primeiros posts ao carregar os dados
posts.value && displayedPosts.value.push(...posts.value.slice(0, postsPerPage));

// Função para carregar mais posts
const loadMorePosts = () => {
  const nextPosts = posts.value.slice(displayedPosts.value.length, displayedPosts.value.length + postsPerPage);
  displayedPosts.value.push(...nextPosts);
};

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};
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
  border-radius: 0 !important;
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
