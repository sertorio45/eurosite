<template>
  <div>
    <button class="btn btn-primary">Atendimento rápido</button>
  </div>
</template>

<script lang="ts" setup>
// Definindo a prop 'valor' como uma string
defineProps({
  valor: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
