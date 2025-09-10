<template>
  <div>
    <a
      href="https://api.whatsapp.com/send?phone=16991213522&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minhas%20d%C3%BAvidas."
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary d-flex align-items-center justify-content-center"
    >
      Atendimento rápido
    </a>
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

</style>
