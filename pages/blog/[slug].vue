<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Rota atual
const route = useRoute();

// Fetch de dados com useAsyncData
const { data, pending, error } = useAsyncData('posts', () => $fetch('/api/posts'));

// Dados do post atual e últimos posts
const post = computed(() => {
  if (error.value || !data.value) return { title: 'Erro ao carregar', content: 'Erro ao carregar conteúdo.', image: '' };
  const currentPost = data.value.find((p) => p.slug === route.params.slug);
  return currentPost || { title: 'Carregando...', content: 'Carregando conteúdo...', image: '' };
});

const latestPosts = computed(() => {
  if (error.value || !data.value) return [];
  return (
    data.value
      .filter((p) => p.slug !== route.params.slug)
      .slice(0, 3) || []
  );
});
</script>

<template>
  <section class="bg-light py-5 text-center">
    <div>
      <NuxtLink href="/" style="text-decoration: none;">Página inicial</NuxtLink> / <NuxtLink href="/blog" style="text-decoration: none;">Blog</NuxtLink>
    </div>
  </section>
  <div>
    <section class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-8 col-md-8 text-justify">
            <!-- Imagem do Post -->
            <div v-if="!post.image">
              <p>Carregando imagem...</p>
            </div>
            <div v-else>
              <NuxtImg 
                :src="post.image" 
                class="rounded mb-4 img-fluid"
                :alt="post.title || 'Imagem do post'" 
                densities="x1 x2"
                width="800"
                height="500"
                loading="lazy"
                fit="cover"
                :placeholder="[800, 500, 75, 5]"
              />
            </div>

            <!-- Título do Post -->
            <h1 class="my-4" v-if="post.title">{{ post.title }}</h1>

            <!-- Conteúdo do Post -->
            <div class="my-5" v-if="post.content" v-html="post.content"></div>
          </div>

          <!-- Mais artigos -->
          <div class="col-sm-4 col-md-4">
            <div class="card p-4 sticky-card">
              <h3 class="mt-4">Mais artigos</h3>
              <hr class="hr hr-blurry" />
              <div v-for="latestPost in latestPosts" :key="latestPost.slug" class="text-left d-flex align-items-center">
                <!-- Imagem do Post -->
                <div v-if="!latestPost.image">
                  <p>Carregando imagem...</p>
                </div>
                <div v-else>
                  <NuxtLink :href="`/blog/${latestPost.slug}`">
                    <NuxtImg 
                      :src="latestPost.image" 
                      class="m-1 rounded"
                      :alt="latestPost.title || 'Imagem do post'" 
                      densities="x1 x2" 
                      width="75" 
                      height="75" 
                      loading="lazy"
                      fit="cover"
                      :placeholder="[75, 75, 75, 5]"
                    />
                  </NuxtLink>
                </div>

                <!-- Título do Post -->
                <NuxtLink v-if="latestPost.title" :href="`/blog/${latestPost.slug}`" class="latestPost px-2">
                  {{ latestPost.title }}
                </NuxtLink>
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

@media (max-width: 576px) {
  .sticky-card {
    margin-top: 0px !important;
  }
}
</style>