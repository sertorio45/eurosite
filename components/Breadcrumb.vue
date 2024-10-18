<template>
  <div class="breadcrumbs-title parallax overlay dark-5 blank-space bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="breadcrumbs-menu ptb-150">
            <!-- Título do topo dinâmico -->
            <h1 class="l-height">{{ pageTitle }}</h1>
            
            <!-- Breadcrumbs -->
            <nav aria-label="breadcrumb">
              <ul class="clearfix">
                <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item mx-1">
                  <NuxtLink to="/">Início</NuxtLink>
                  <i v-if="index < breadcrumbs.length - 1" class="zmdi zmdi-chevron-right"></i>
                </li>
                <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                  <NuxtLink v-if="crumb.path" :to="crumb.path">{{ crumb.name }}</NuxtLink>
                  <span v-else class="px-1">{{ crumb.name }}</span>
                  <!-- Adiciona um ícone se não for o último breadcrumb -->
                   <i v-if="index < breadcrumbs.length - 1" class="zmdi zmdi-chevron-left"></i>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

// Obtém a rota atual
const route = useRoute()

// Função para gerar o título da página com base na rota atual
const pageTitle = computed(() => {
  const lastSegment = route.path.split('/').filter(Boolean).pop() || 'Home'
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
})

// Função para gerar os breadcrumbs
const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean) // Remove partes vazias da URL
  return paths.map((segment, index) => {
    const path = `/${paths.slice(0, index + 1).join('/')}`
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitaliza a primeira letra
      path: index === paths.length - 1 ? null : path,           // Desabilita o link no último item
    }
  })
})
</script>
<style scoped>
.breadcrumbs-title {
  background-color: var(--v-primary-base); /* Substitui a imagem por uma cor de fundo */
  background-position: 0 0;
  padding-top: 100px;
  padding-bottom: 100px;
}

.breadcrumbs-menu h1 {
  color: white;
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 20px;
}

.breadcrumbs-menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs-menu li {
  font-size: 16px;
  color: white;
  margin-right: 10px;
}

.breadcrumbs-menu li a {
  color: white;
  text-decoration: none;
}

.breadcrumbs-menu li span {
  color: #ccc;
}

.zmdi-chevron-right {
  color: white;
  margin: 0 10px;
}
</style>

