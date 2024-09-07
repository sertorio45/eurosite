<template>
  <ContentLoader
    class="skeleton-loader"
    viewBox="0 0 300 100"
    :speed="2"
    :backgroundColor="'#f3f3f3'"
    :foregroundColor="'#000000'"
  >
    <rect x="0" y="0" rx="0" ry="0" :width="width" :height="height"/>
    
  </ContentLoader>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ContentLoader } from 'vue-content-loader'

const width = ref('100%')
const height = ref('100%')

const updateDimensions = () => {
  const container = document.querySelector('.skeleton-loader-container') as HTMLElement
  if (container) {
    width.value = `${container.offsetWidth}`
    height.value = `${container.offsetHeight}`
  }
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)
})

</script>

<style scoped>

</style>
