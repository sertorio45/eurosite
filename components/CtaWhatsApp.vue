<script setup>
import AtendimentoRapido from './button/AtendimentoRapido.vue';
import Inscricao from './forms/Inscricao.vue';


</script>

<template>
  <section class="bg-primary py-5">
    <div class="container text-white text-center">
      <div class="row d-flex align-items-center justify-content-center g-5 py-2 my-md-4">
        <div class="col-12">
          <h2 class="h1 fw-bold">Garanta o seu futuro profissional.</h2>
          <p class="h4">Fale agora conosco!</p>
        </div>
        <div class="col-12 col-md-10 px-md-2">
          <div class="card-body card py-5 p-lg-5 p-md-5  p-xl-5 p-xxl-5 rounded">
            <Inscricao />
          </div>
        </div>
      </div>
    
    </div>
    
  </section>
</template>



<style scoped>

.card-title {
  font-weight: bold;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 17px;
}

.card-body small {
  display: block;
  margin-bottom: 0.5rem;
  color: #6c757d; /* cinza claro */
}

.card-body {
  padding: 10px;
  border: 1px solid transparent;
  transition: ease-in-out 0.2s;
  border-radius: 0 0 10px 10px;

}
.card-body:hover {
  box-shadow: none;
  background-color: var(--bs-secondary);
}

@media (max-width: 576px) {
  .container {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
