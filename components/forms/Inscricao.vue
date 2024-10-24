<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <form @submit.prevent="submitForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <input
                type="text"
                name="nome"
                v-model="form.nome"
                class="form-control"
                placeholder="Nome"
                required
              />
              <div class="invalid-feedback">Por favor, informe seu nome.</div>
            </div>

            <div class="mb-3">
              <input
                type="number"
                min="10"
                max="100"
                name="idade"
                v-model="form.idade"
                class="form-control"
                placeholder="Idade"
                required
              />
              <div class="invalid-feedback">Por favor, informe uma idade entre 10 e 100.</div>
            </div>

            <div class="mb-3">
              <input
                type="email"
                name="email"
                v-model="form.email"
                class="form-control"
                placeholder="Email"
                required
              />
              <div class="invalid-feedback">Por favor, informe um email válido.</div>
            </div>

            <div class="mb-3">
              <input
                type="text"
                name="telefone"
                v-model="form.telefone"
                class="form-control"
                placeholder="Telefone"
                required
                maxlength="16"
              />
              <div class="invalid-feedback">Por favor, informe seu telefone.</div>
            </div>

            <div class="mb-3">
              <label for="cidade" class="form-label">Selecione a cidade:</label>
              <select
                name="cidade"
                v-model="form.cidade"
                class="form-select"
                required
              >
                <option value="">Selecione...</option>
                <option value="Campinas">Campinas</option>
                <option value="Franca">Franca</option>
                <option value="Piracicaba">Piracicaba</option>
                <option value="Ribeirao">Ribeirão Preto</option>
                <option value="Sorocaba">Sorocaba</option>
              </select>
              <div class="invalid-feedback">Por favor, selecione uma cidade.</div>
            </div>

            <div class="mb-3">
              <label for="curso" class="form-label">Em qual área você gostaria de especializar?</label>
              <select
                name="curso"
                v-model="form.curso"
                class="form-select"
                required
              >
                <option value="">Selecione...</option>
                <option value="Administracao">Administração</option>
                <option value="Saude">Saúde</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Idiomas">Idiomas</option>
                <option value="Euro Kids">Euro Kids</option>
              </select>
              <div class="invalid-feedback">Por favor, selecione um curso.</div>
            </div>

            <div class="mb-3">
              <textarea
                name="mensagem"
                v-model="form.mensagem"
                rows="3"
                class="form-control"
                placeholder="Mensagem"
              ></textarea>
            </div>

            <div class="mb-3">
              <textarea
                name="oque_espera"
                v-model="form.oque_espera"
                rows="3"
                class="form-control"
                placeholder="O que você espera em fazer esse curso?"
              ></textarea>
            </div>

            <button class="btn btn-primary w-100" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: '',
        idade: '',
        email: '',
        telefone: '',
        cidade: '',
        curso: '',
        mensagem: '',
        oque_espera: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Validação do formulário antes de enviar
      const form = this.$el.querySelector('form');
      if (form.checkValidity() === false) {
        form.classList.add('was-validated');
      } else {
        // Ações ao enviar o formulário
        alert('Formulário enviado com sucesso!');
      }
    },
  },
};
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1.5rem;
}
</style>
