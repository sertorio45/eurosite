<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Rota atual
const route = useRoute();

// Fetch de dados com useLazyFetch
const { data, pending, error } = useLazyFetch('/api/posts');

// Dados do post atual e últimos posts
const post = computed(() => {
  if (!data.value) return {};
  const currentPost = data.value.find((p) => p.slug === route.params.slug);
  return currentPost || { title: 'Carregando...', content: 'Carregando conteúdo...', image: '' };
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
      <a href="/" style="text-decoration: none;">Página inicial</a> / <a href="/blog">Blog</a> / <span v-if="post.title">{{ post.title }}</span>
      <span v-else class="placeholder-glow">
        <span class="placeholder col-6"></span>
      </span>
    </div>
  </section>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-8 text-center">
            <h1 class="my-4" v-if="post.title">{{ post.title }}</h1>
            <h1 v-else class="placeholder-glow">
              <span class="placeholder col-8"></span>
            </h1>

            <div v-if="post.image">
              <NuxtImg 
                :src="post.image" 
                class="rounded"
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2" 
                width="700" 
                height="350" 
                loading="lazy"
                :placeholder="15"
              />
            </div>
            <div v-else class="placeholder-glow">
              <div class="placeholder rounded w-100" style="height: 350px; width: 700px;"></div>
            </div>

            <p class="mt-5 px-5" v-if="post.content" v-html="post.content"></p>
            <p v-else class="placeholder-glow">
              <span class="placeholder col-12"></span>
              <span class="placeholder col-10"></span>
              <span class="placeholder col-8"></span>
            </p>
          </div>

          <div class="col-sm-4">
            <div class="card p-4 sticky-card">
              <a href="javascript:history.back()" class="btn btn-primary mb-4 justify-content-end">Voltar</a>
              <h3 class="mt-4">Mais artigos</h3>
              <hr class="hr hr-blurry" />
              <div v-for="latestPost in latestPosts" :key="latestPost.slug" class="text-left d-flex align-items-center">
                <div v-if="latestPost.image">
                  <NuxtLink :href="`/blog/${latestPost.slug}`">
                    <NuxtImg 
                      :src="latestPost.image" 
                      class="m-1 rounded"
                      :alt="latestPost.title || 'Imagem do post'" 
                      densities="x1 x2" 
                      width="75" 
                      height="75" 
                      loading="lazy" 
                      :placeholder="15"
                    />
                  </NuxtLink>
                </div>
                <div v-else class="placeholder-glow">
                  <div class="placeholder rounded-circle" style="height: 75px; width: 75px;"></div>
                </div>

                <NuxtLink :href="`/blog/${latestPost.slug}`" class="latestPost px-2" v-if="latestPost.title">{{ latestPost.title }}</NuxtLink>
                <span v-else class="placeholder-glow">
                  <span class="placeholder col-6"></span>
                </span>
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
