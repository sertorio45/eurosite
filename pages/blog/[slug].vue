<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// Referência dos posts
const post = ref({});
const relatedPosts = ref([]);
const route = useRoute();

onMounted(async () => {
  try {
    // Ajustando para buscar todos os posts e filtrar pelo slug
    const response = await $fetch('/api/posts');
    const posts = response;
    if (posts && posts.length > 0) {
      post.value = posts.find((p) => p.slug === route.params.slug);

      // Buscando mais artigos relacionados
      relatedPosts.value = posts.filter((p) => p.slug !== route.params.slug).slice(0, 3);
    }
  } catch (error) {
    console.error('Erro ao buscar dados do post:', error);
  }
});
</script>

<template>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-8 text-center">
            <NuxtLink to="/">Início</NuxtLink>
            <h1 class="my-4">{{ post.title }}</h1>
            <small>Postado em: {{ post.date }}</small>

            <div class="my-5"><NuxtImg :src="post.image || 'https://placeholder.com/150x150'" alt="Imagem do artigo" class="img-fluid" quality="50"/></div>
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
