<script setup>
import { ref, computed } from 'vue';

// Uso de useAsyncData para buscar os posts da API
const { data: posts } = useAsyncData('posts', () => $fetch('/api/posts'));

// Computada para pegar os últimos 3 posts
const lastThreePosts = computed(() => {
  return posts?.value?.slice(0, 3) || [];
});
</script>

<template>
  <section class="bg-primary py-5">
    <div class="container my-5">
      <h2 class="text-center mb-5 text-light">Blog</h2>
      <div class="row justify-items-center">
        <!-- Loop pelos últimos 3 posts -->
        <div class="col-md-4 my-3" v-for="post in lastThreePosts" :key="post.slug">
          <div class="card blog-card h-100">
            <NuxtImg 
                :src="post.image" 
                class="card-img-top img-fluid" alt="Imagem do post" 
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                :placeholder="[500, 500, 75, 5]" 
                width="500" 
                height="500" 
                loading="lazy" 
                quality="80" 
            />
            <div class="card-body">
              <!-- Título do post -->
              <h4 class="card-title mt-2">{{ post.title }}</h4>
              <!-- Link dinâmico para o slug -->
              <NuxtLink class="btn btn-primary" :to="`/blog/${post.slug}`">Ver artigo</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.card-body {
    border-radius: 0 0 10px 10px;
}

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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 17px;
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

@media (max-width: 576px) {
  .container {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
