<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';

// Referências dos campos do formulário
const form = ref({
  nome: '',
  idade: '',
  email: '',
  celular: '',
  cidade: '',
  curso: '',
  mensagem: '',
  oque_espera: '',
});

const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const showSuggestions = ref(false);
const emailDomains = ref(['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'empresa.com.br', 'empresa.com']);

const nuxtApp = useNuxtApp();

// Função para aplicar máscara no campo de celular
const applyPhoneMask = () => {
  let phone = form.value.celular.replace(/\D/g, '').slice(0, 11);

  form.value.celular = phone.length > 10
    ? `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
    : `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
};

// Função para obter sugestão de email
const getSuggestedEmail = (domain: string) => `${form.value.email.split('@')[0]}@${domain}`;

// Função para validar o email e exibir sugestões
const validateEmail = () => {
  const email = form.value.email;
  showSuggestions.value = email.includes('@');
};

// Função para validar o formulário
const isFormValid = () => {
  return (
    form.value.nome.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.celular.trim() !== '' &&
    form.value.cidade.trim() !== '' &&
    form.value.mensagem.trim() !== '' &&
    form.value.email.includes('@')
  );
};

// Função para enviar o formulário
const submitForm = async () => {
  const formElement = document.querySelector('form');

  // Verificação de validade do formulário
  if (!formElement || formElement.checkValidity() === false) {
    formElement?.classList.add('was-validated');
    return;
  }

  isSubmitting.value = true;
  formElement.classList.remove('was-validated');

  try {
    // Envio do formulário usando Nuxt Mail
    await (nuxtApp.$mail as any).send({
      subject: `Inscrição para curso - Euro Anglo Cursos`,
      html: `
        <html>
          <body style='font-family: "Montserrat", sans-serif;'>
            <div style='background-color: #000; text-align: center; padding: 20px 0;'>
              <img src='https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png' alt='Logo da Empresa' style='max-width: 200px;'>
            </div>
            <div style='background-color: #fff; padding: 40px;'>
              <p><strong>Nome:</strong> ${form.value.nome}</p>
              <p><strong>Email:</strong> ${form.value.email}</p>
              <p><strong>Celular:</strong> ${form.value.celular}</p>
              <p><strong>Cidade:</strong> ${form.value.cidade}</p>
              <p><strong>Curso:</strong> ${form.value.curso}</p>
              <p><strong>Mensagem:</strong> ${form.value.mensagem}</p>
              <p><strong>O que espera do curso:</strong> ${form.value.oque_espera}</p>
            </div>
          </body>
        </html>
      `,
    });

    successMessage.value = 'Inscrição enviada com sucesso!';
    resetForm(); // Limpa os campos do formulário
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error) {
    errorMessage.value = 'Houve um erro ao enviar a inscrição. Tente novamente mais tarde.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};

// Função para resetar o formulário
const resetForm = () => {
  form.value = {
    nome: '',
    idade: '',
    email: '',
    celular: '',
    cidade: '',
    curso: '',
    mensagem: '',
    oque_espera: '',
  };
  const formElement = document.querySelector('form') as HTMLFormElement;
  formElement.classList.remove('was-validated');
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <!-- Mensagem de Sucesso ou Falha -->
        <div v-if="successMessage" class="alert alert-success" role="alert">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="submitForm" class="needs-validation" novalidate>
          <div class="row g-2">
            <!-- Nome e Celular na mesma linha -->
            <div class="col-md-6 mb-3">
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

            <div class="col-md-6 mb-3">
              <input
                type="text"
                name="celular"
                v-model="form.celular"
                class="form-control"
                placeholder="Celular"
                required
                maxlength="16"
                @input="applyPhoneMask"
              />
              <div class="invalid-feedback">Por favor, informe seu celular.</div>
            </div>
          </div>

          <div class="row g-2">
            <!-- Email e Cidade na mesma linha -->
            <div class="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                v-model="form.email"
                @input="validateEmail"
                class="form-control"
                placeholder="Email"
                required
                list="email_suggestions"
              />
              <!-- Sugestões de redes sociais -->
              <datalist id="email_suggestions" v-if="showSuggestions">
                <option
                  v-for="domain in emailDomains"
                  :key="domain"
                  :value="getSuggestedEmail(domain)"
                ></option>
              </datalist>
              <div class="invalid-feedback">Por favor, informe um email válido.</div>
            </div>

            <div class="col-md-6 mb-3">
              <select
                name="cidade"
                v-model="form.cidade"
                class="form-select"
                required
              >
                <option value="">Cidade...</option>
                <option value="Campinas">Campinas</option>
                <option value="Franca">Franca</option>
                <option value="Piracicaba">Piracicaba</option>
                <option value="Ribeirao">Ribeirão Preto</option>
                <option value="Sorocaba">Sorocaba</option>
              </select>
              <div class="invalid-feedback">Por favor, selecione uma cidade.</div>
            </div>
          </div>

          <!-- Idade -->
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

          <!-- Curso -->
          <div class="mb-3">
            <select
              name="curso"
              v-model="form.curso"
              class="form-select"
              required
            >
              <option value="">Selecione um curso...</option>
              <option value="Administracao">Administração</option>
              <option value="Saude">Saúde</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Euro Kids">Euro Kids</option>
            </select>
            <div class="invalid-feedback">Por favor, selecione um curso.</div>
          </div>

          <!-- Mensagem -->
          <div class="mb-3">
            <textarea
              name="mensagem"
              v-model="form.mensagem"
              rows="3"
              class="form-control"
              placeholder="Mensagem"
            ></textarea>
          </div>

          <!-- O que espera -->
          <div class="mb-3">
            <textarea
              name="oque_espera"
              v-model="form.oque_espera"
              rows="3"
              class="form-control"
              placeholder="O que você espera em fazer esse curso?"
            ></textarea>
          </div>

          <!-- Botão de envio -->
          <button class="btn btn-primary w-100" type="submit" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviando...
            </span>
            <span v-else>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mb-3 {
  margin-bottom: 1.5rem;
}
.alert {
  margin-top: 1rem;
}
</style>
