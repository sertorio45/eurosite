<!-- components/Icon.vue -->

<template>
  <i :class="`bx ${icon}`" :style="computedStyle"></i>
</template>

<script setup>
import { computed } from 'vue';

// Definindo as props
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  style: {
    type: Object,
    default: () => ({ color: '#000', fontSize: '60px' })
  }
});

// Computed para juntar os estilos padrão com os fornecidos
const computedStyle = computed(() => ({
  color: props.style.color,
  fontSize: props.style.fontSize,
  ...props.style,
}));
</script>

