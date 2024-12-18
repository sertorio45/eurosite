<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// Rota atual
const route = useRoute();
const post = ref({});
const latestPosts = ref([]);

// Fetch de dados na rota atual
const fetchPostData = async () => {
  try {
    const { data } = await useFetch('/api/posts');
    const posts = data.value || [];
    post.value = posts.find((p) => p.slug === route.params.slug) || {};
    latestPosts.value = posts
      .filter((p) => p.slug !== route.params.slug)
      .slice(0, 3); // Limita aos 3 últimos artigos
  } catch (error) {
    console.error('Erro ao carregar os posts:', error);
  }
};

// Atualiza os dados ao carregar ou alterar a rota
watch(
  () => route.params.slug,
  () => {
    fetchPostData();
  },
  { immediate: true }
);
</script>

<template>
  <section class="bg-light py-5 text-center">
    <div>
      <a href="/" style="text-decoration: none;">Página inicial</a> / <a href="/blog">Blog</a> / <span>{{ post.title }}</span>
    </div>
  </section>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-8 text-center">
            <h1 class="my-4">{{ post.title }}</h1>
            <NuxtImg 
                :src="post.image" 
                class="rounded"
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                width="700" 
                height="450" 
                loading="eager"
                :preload="post.image"
              />
            <p class="mt-5 px-5" v-html="post.content"></p>
          </div>
          <div class="col-sm-4">
            <div class="card p-4 sticky-card">
              <a href="javascript:history.back()" class="btn btn-primary mb-4 justify-content-end">Voltar</a>
              <h3 class="mt-4">Mais artigos</h3>
              <hr class="hr hr-blurry" />
              <div v-for="latestPost in latestPosts" :key="latestPost.slug" class="text-left d-flex align-items-center">
                <NuxtLink :href="`/blog/${latestPost.slug}`" >
                  <NuxtImg 
                      :src="latestPost.image" 
                      class=" m-1"
                      :alt="latestPost.title || 'Imagem do post'" 
                      densities="x1 x2" 
                      width="75" 
                      height="75" 
                      loading="lazy" 
                      :placeholder="[75, 75, 50, 5]" 
                    /> 
                </NuxtLink>
                <NuxtLink :href="`/blog/${latestPost.slug}`" class="latestPost px-2">{{ latestPost.title }}</NuxtLink>
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
  top: 15%;
}

.latestPost {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-decoration: none;
  color: var(--bs-black);
}
</style>
