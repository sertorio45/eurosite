<template>
  <div>

    <div class="container my-5">
      <!-- Seção de Tipografia -->
      <section id="tipografia" class="mb-5">
        <h2 class="mb-4 text-center">Tipografia</h2>
        <p class="text-center text-muted mb-4">Fonte utilizada: <strong>Helvetica Neue</strong>, Arial, sans-serif</p>
        <div>
          
          <h1>Heading 1 - h1</h1>
          <h2>Heading 2 - h2</h2>
          <h3>Heading 3 - h3</h3>
          <h4>Heading 4 - h4</h4>
          <h5>Heading 5 - h5</h5>
          <h6>Heading 6 - h6</h6>
          <p>Este é um parágrafo de exemplo, adequado para textos corridos. Utiliza a fonte principal do site.</p>
          <p class="lead">Este é um parágrafo com a classe <code>.lead</code>, ideal para introduções e destaques.</p>
        </div>
      </section>

      <!-- Seção de Cores -->
      <section id="cores" class="mb-5">
        <h2 class="mb-4 text-center">Cores</h2>
        <div class="row text-center">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-white rounded-3 shadow-sm bg-primary">
              <h5>Primária</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-white rounded-3 shadow-sm bg-secondary">
              <h5>Secundária</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-white rounded-3 shadow-sm bg-success">
              <h5>Sucesso</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-white rounded-3 shadow-sm bg-danger">
              <h5>Perigo</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-dark rounded-3 shadow-sm bg-warning">
              <h5>Aviso</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="p-4 text-white rounded-3 shadow-sm bg-info">
              <h5>Informação</h5>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção de Componentes Adicionais -->
      <section id="componentes" class="mb-5">
        <h2 class="mb-4 text-center">Componentes Adicionais</h2>
        <div class="text-center">
          <button class="btn btn-primary me-2">Botão Primário</button>
          <button class="btn btn-secondary">Botão Secundário</button>
        </div>
        <div class="mt-4">
          <div class="alert alert-primary" role="alert">
            Este é um alerta de exemplo. Utilize alertas para mensagens importantes.
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Se necessário, adicionar scripts aqui.
</script>

<style scoped>
/* Estilos para a página, visando um design clean e moderno */
.color-card {
  min-height: 150px;
  border: none;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

h2 {
  font-weight: 500;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  font-size: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.alert {
  font-size: 0.9rem;
}
</style>
