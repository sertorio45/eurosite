<template>
  <div class="breadcrumbs-title parallax overlay dark-5 blank-space bg-primary text-center">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="breadcrumbs-menu">
            <!-- Título do topo dinâmico -->
            <h1 class="l-height text-center">{{ pageTitle }}</h1>
            
            <!-- Breadcrumbs -->
            <nav aria-label="breadcrumb">
              <ul class="clearfix justify-content-center">
                <li class="breadcrumb-item">
                  <NuxtLink to="/">Início</NuxtLink>
                  <i v-if="breadcrumbs.length > 0" class="zmdi zmdi-chevron-right"></i>
                </li>
                <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                  <NuxtLink v-if="crumb.path" :to="crumb.path" class="link-tow">{{ crumb.name }}</NuxtLink>
                  <span v-else class="link-tow">{{ crumb.name }}</span>
                  <!-- Adiciona um ícone se não for o último breadcrumb -->
                  <i v-if="index < breadcrumbs.length - 1" class="zmdi zmdi-chevron-right"></i>
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
import { computed } from 'vue'

// Obtém a rota atual
const route = useRoute()

// Função para gerar o título da página com base na rota atual
const pageTitle = computed(() => {
  const lastSegment = route.path.split('/').filter(Boolean).pop() || 'Início'
  return decodeURIComponent(lastSegment)
    .split('-')
    .map(word => word.charAt(0).toLocaleUpperCase('pt-BR') + word.slice(1).toLocaleLowerCase('pt-BR'))
    .join(' ')
})

// Função para gerar os breadcrumbs
const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean) // Remove partes vazias da URL
  return paths.map((segment, index) => {
    const path = `/${paths.slice(0, index + 1).join('/')}`
    const name = decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toLocaleUpperCase('pt-BR') + word.slice(1).toLocaleLowerCase('pt-BR'))
      .join(' ')
    return {
      name, // Capitaliza a primeira letra de cada palavra
      path: index === paths.length - 1 ? null : path, // Desabilita o link no último item
    }
  })
})
</script>

<style scoped>
.link-tow {
  margin-left: 5px !important;
}
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
  text-align: center;
}

.breadcrumbs-menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}

.breadcrumbs-menu li {
  font-size: 16px;
  color: white;
}

.breadcrumbs-menu li a {
  color: white;
  text-decoration: none;
}

.breadcrumbs-menu li span {
  color: #ccc;
  text-align: center;
}

.zmdi-chevron-right {
  color: white;
  margin: 0 5px;
}
</style>
