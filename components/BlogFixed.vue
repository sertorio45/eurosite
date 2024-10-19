<template>
  <section class="bg-primary py-5">
    <div class="container my-5">
      <h2 class="text-center mb-5 text-light">Blog</h2>
      <div class="row justify-items-center">
        <!-- Loop pelos últimos 3 posts -->
        <div class="col-md-4" v-for="post in lastThreePosts" :key="post.slug">
          <div class="card blog-card h-100">
            <img :src="post.image" class="card-img-top img-fluid" alt="Imagem do post" />
            <div class="card-body">
              <!-- Data já formatada no backend -->
              <small class="text-muted">{{ post.date }}</small>
              <!-- Título com a primeira letra maiúscula -->
              <h5 class="card-title mt-2">{{ capitalizeTitle(post.title) }}</h5>
              <!-- Link dinâmico para o slug -->
              <NuxtLink class="btn btn-primary" :to="`/blog/${post.slug}`">Ver artigo</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

// Referência dos posts
const posts = ref([]);

// Computada para pegar os últimos 3 posts
const lastThreePosts = computed(() => {
  return posts.value.slice(0, 3);
});

// Função para capitalizar a primeira letra do título
const capitalizeTitle = (title) => {
  if (!title) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

onMounted(async () => {
  const response = await $fetch('/api/posts');
  posts.value = response; // posts já formatados com a data correta
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

.card-title {
  font-weight: bold;
  /* Limita o título a 2 linhas */
  display: -webkit-box;
  line-clamp: 2;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
}

.card-body small {
  display: block;
  margin-bottom: 0.5rem;
  color: #6c757d; /* cinza claro */
}

.card-body {
  padding: 10px;
  border: 1px solid transparent;
  transition: ease-in-out 0.2s;
}
</style>
