<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Rota atual
const route = useRoute();

// Referência para o post e artigos relacionados
const post = ref({});
const relatedPosts = ref([]);

// Uso de useAsyncData para buscar os dados
const { data: posts } = useAsyncData('posts', () => $fetch('/api/posts'));

// Computada para encontrar o post atual e artigos relacionados
const currentPost = computed(() => {
  if (posts.value) {
    return posts.value.find((p) => p.slug === route.params.slug) || {};
  }
  return {};
});

const otherPosts = computed(() => {
  if (posts.value) {
    return posts.value.filter((p) => p.slug !== route.params.slug).slice(0, 3);
  }
  return [];
});

// Atualizando os valores do post e artigos relacionados
post.value = currentPost.value;
relatedPosts.value = otherPosts.value;
</script>

<template>
  <section class="bg-light py-5 text-center">
    <div>
      <a href="/" style="text-decoration: none;">Página inicial</a> / <span>{{ post.title }}</span>
    </div>
  </section>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-8 text-center">
            <h1 class="my-4">{{ post.title }}</h1>

            <div class="my-5">
              <NuxtImg 
                :src="post.image" 
                class="card-img-top img-fluid"
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                :placeholder="[500, 500, 75, 5]" 
                width="600" 
                height="350" 
                loading="eager" 
                quality="80" 
              />
            </div>
            <p class="mt-5 px-5" v-html="post.content"></p>
          </div>
          <div class="col-sm-4">
            <div class="card p-4 sticky-card">
              <a href="javascript:history.back()" class="btn btn-primary mb-4 justify-content-end">Voltar</a>
              <h3 class="mt-4">Mais artigos</h3>
              <hr class="hr hr-blurry" />
              <div v-for="relatedPost in relatedPosts" :key="relatedPost.slug" class="text-left">
                <NuxtLink :href="`/blog/${relatedPost.slug}`">{{ relatedPost.title }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.card {
  margin: 0px !important;
}

.sticky-card {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
</style>
