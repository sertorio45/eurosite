<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Rota atual
const route = useRoute();

// Fetch de dados com useAsyncData
const { data, error } = useAsyncData('posts', () => $fetch('/api/posts'));

// Dados do post atual e últimos posts
const post = computed(() => {
  return data.value?.find((p) => p.slug === route.params.slug) || {};
});

const latestPosts = computed(() => {
  return (
    data.value
      ?.filter((p) => p.slug !== route.params.slug)
      .slice(0, 3) || []
  );
});
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
          <div class="col-sm-8">
            <h1 class="my-4">{{ post.title }}</h1>
            <NuxtImg 
                :src="post.image" 
                class="rounded"
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                width="750" 
                height="350" 
                loading="eager"
                :placeholder="[750, 350, 75, 15]"
              />
            <p class="mt-5 text-justify" v-html="post.content"></p>
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
                      class=" m-1 rounded"
                      :alt="latestPost.title || 'Imagem do post'" 
                      densities="x1 x2" 
                      width="75" 
                      height="75" 
                      loading="lazy" 
                      :placeholder="[75, 75, 75, 5]"
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
