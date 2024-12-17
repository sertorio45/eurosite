<template>
  <section class="py-5 bg-primary text-light">
    <div class="container my-5 py-5 min-vh-100 justify-content-center">
      <div class="row justify-content-center align-items-center g-3 text-center">
        <h1>A melhor estrutura para você</h1>
        <p>
          Oferecemos a melhor estrutura e qualidade de ensino para transformar o futuro de nossos alunos.
        </p>
      </div>

      <div class="row text-center justify-content-center align-items-center g-0 my-4">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <div class="card-body">
              <Icon icon="bx bxs-graduation" fontSize="5em" class="p-2 icon-wins" />
              <h3 class="text-lowercase">+ de {{ numeros.alunosFormados.toLocaleString() }}</h3>
              <p class="card-text">ALUNOS FORMADOS</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <div class="card-body">
              <Icon icon="bx bxs-rocket" fontSize="5em" class="p-2 icon-wins" />
              <h3 class="text-lowercase">+ de {{ numeros.alunosEncaminhados.toLocaleString() }}</h3>
              <p class="card-text">ALUNOS ENCAMINHADOS</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <div class="card-body">
              <Icon icon="bx bxs-heart" fontSize="5em" class="p-2 icon-wins" />
              <h3 class="text-lowercase">{{ numeros.alunosIndicam }}%</h3>
              <p class="card-text">DOS ALUNOS NOS INDICAM</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <div class="card-body">
              <Icon icon="bx bxs-group" fontSize="5em" class="p-2 icon-wins" />
              <h3 class="text-lowercase">{{ numeros.aprovacaoPais }}%</h3>
              <p class="card-text">DA APROVAÇÃO DOS PAIS</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <NuxtLink to="/cursos" class="btn btn-light">Veja todos os cursos</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Tipagem explícita das chaves válidas
type NumerosKeys = 'alunosFormados' | 'alunosEncaminhados' | 'alunosIndicam' | 'aprovacaoPais';

// Estados reativos com tipagem explícita
const numeros = ref<Record<NumerosKeys, number>>({
  alunosFormados: 0,
  alunosEncaminhados: 0,
  alunosIndicam: 0,
  aprovacaoPais: 0,
});

// Valores finais desejados
const valoresFinais: Record<NumerosKeys, number> = {
  alunosFormados: 30000,
  alunosEncaminhados: 2000,
  alunosIndicam: 85,
  aprovacaoPais: 90,
};

// Função para animar a contagem dos números
function animarContagem(key: NumerosKeys, valorFinal: number, tempo = 2000) {
  const step = Math.ceil(valorFinal / (tempo / 16)); // Incremento baseado no tempo
  const intervalo = setInterval(() => {
    if (numeros.value[key] < valorFinal) {
      numeros.value[key] += step;
      if (numeros.value[key] > valorFinal) numeros.value[key] = valorFinal;
    } else {
      clearInterval(intervalo);
    }
  }, 16); // 60fps aproximadamente
}

// Inicia a contagem ao montar o componente
onMounted(() => {
  animarContagem('alunosFormados', valoresFinais.alunosFormados);
  animarContagem('alunosEncaminhados', valoresFinais.alunosEncaminhados);
  animarContagem('alunosIndicam', valoresFinais.alunosIndicam);
  animarContagem('aprovacaoPais', valoresFinais.aprovacaoPais);
});
</script>

<style scoped>
.card-body:hover .icon-wins {
  color: var(--bs-white) !important;
  transition: color 0.3s ease-in-out;
}
</style>
