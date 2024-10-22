<template>
  <div>
    <!-- Mensagens de erro e sucesso -->
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <!-- Formulário de Ouvidoria -->
    <form class="custom-input" id="ouvidoria_form" autocomplete="off" novalidate @submit.prevent="handleSubmit">
      <div class="row gy-2 g-2">
        <!-- Nome, Email e Celular na mesma linha -->
        <div class="col-md-4">
          <input
            v-model="formName"
            type="text"
            class="form-control"
            name="nome"
            id="form_name"
            placeholder="Nome"
            required
            aria-required="true"
            aria-label="Nome"
          />
        </div>
        <div class="col-md-4">
          <input
            v-model="formEmail"
            type="email"
            class="form-control"
            name="email"
            id="form_email"
            placeholder="Email"
            required
            aria-required="true"
            aria-label="Email"
            @input="validateEmail"
            @focus="showSuggestions = formEmail.includes('@')"
            list="email_suggestions"
          />
          <datalist id="email_suggestions" v-if="showSuggestions">
            <option v-for="domain in emailDomains" :key="domain" :value="getSuggestedEmail(domain)"></option>
          </datalist>
        </div>
        <div class="col-md-4">
          <input
            v-model="formPhone"
            type="tel"
            class="form-control"
            name="celular"
            id="form_phone"
            placeholder="Celular"
            required
            aria-required="true"
            aria-label="Celular"
            maxlength="15"
            @input="applyPhoneMask"
          />
        </div>
      </div>

      <div class="row gy-0 g-2 mt-0">
        <!-- Assunto e Cidade na mesma linha -->
        <div class="col-md-6">
          <select
            v-model="formAssunto"
            class="form-select"
            name="assunto"
            id="form_assunto"
            required
            aria-required="true"
            aria-label="Assunto"
          >
            <option disabled value="">Selecione o assunto:</option>
            <option value="Informacao">Informação</option>
            <option value="Reclamacao">Reclamação</option>
            <option value="Critica">Crítica</option>
            <option value="Sugestao">Sugestão</option>
            <option value="Solicitacao">Solicitação</option>
          </select>
        </div>
        <div class="col-md-6">
          <select
            v-model="formCidade"
            class="form-select"
            name="cidade"
            id="form_cidade"
            required
            aria-required="true"
            aria-label="Cidade"
          >
            <option disabled value="">Selecione a cidade:</option>
            <option value="Campinas">Campinas</option>
            <option value="Ribeirao">Ribeirão Preto</option>
            <option value="SaoJoseDosCampos">São José dos Campos</option>
          </select>
        </div>
      </div>

      <!-- Mensagem abaixo -->
      <div class="row gy-2 mt-0">
        <div class="col-12">
          <textarea
            v-model="formMessage"
            class="form-control"
            name="mensagem"
            id="form_message"
            rows="4"
            placeholder="Mensagem"
            required
            aria-required="true"
            aria-label="Mensagem"
          ></textarea>
        </div>
      </div>

      <div class="row gy-2 mt-2">
        <div class="col-12">
          <button class="btn btn-primary w-100" type="submit" name="submit" id="enviar" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviando...
            </span>
            <span v-else>Enviar</span>
          </button>
        </div>
        <span style="font-size: 0.8em!important;" class="my-4">
          Ao enviar o formulário você está de acordo com nossa
          <a href="/politica-privacidade">Política de Privacidade</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useNuxtApp } from '#app'; 

// Referências dos campos do formulário
const formName = ref('');
const formEmail = ref('');
const formPhone = ref('');
const formCidade = ref('');
const formAssunto = ref('');
const formMessage = ref('');
const isSubmitting = ref(false);
const errorMessage = ref(''); 
const successMessage = ref(''); 
const showSuggestions = ref(false); 
const emailDomains = ref(['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'empresa.com.br', 'empresa.com']);

const nuxtApp = useNuxtApp(); 

const getSuggestedEmail = (domain: string) => `${formEmail.value.split('@')[0]}@${domain}`;

// Função para validar o email
const validateEmail = () => {
  const email = formEmail.value;
  if (!email.includes('@')) {
    errorMessage.value = 'Por favor, insira um email válido contendo @.';
    showSuggestions.value = false;
  } else {
    errorMessage.value = '';
    showSuggestions.value = email.endsWith('@');
  }
};

// Watcher para ocultar as sugestões se o email mudar sem @
watch(formEmail, (newValue) => {
  showSuggestions.value = newValue.endsWith('@');
});

// Função para validar o formulário
const isFormValid = () => {
  return (
    formName.value.trim() !== '' &&
    formEmail.value.trim() !== '' &&
    formPhone.value.trim() !== '' &&
    formCidade.value.trim() !== '' &&
    formAssunto.value.trim() !== '' &&
    formMessage.value.trim() !== '' &&
    formEmail.value.includes('@')
  );
};

// Função para enviar o formulário
const handleSubmit = async () => {
  if (!isFormValid()) {
    errorMessage.value = 'Por favor, preencha todos os campos obrigatórios.';
    setTimeout(() => { errorMessage.value = ''; }, 3000);
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    await (nuxtApp.$mail as any).send({
      subject: `Ouvidoria - Novo Contato`,
      html: `
        <html>
          <body style='font-family: "Montserrat", sans-serif;'>
            <div style='background-color: #000; text-align: center; padding: 20px 0;'>
              <img src='https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png' alt='Logo da Empresa' style='max-width: 200px;'>
            </div>
            <div style='background-color: #fff; padding: 40px;'>
              <p><strong>Nome:</strong> ${formName.value}</p>
              <p><strong>Email:</strong> ${formEmail.value}</p>
              <p><strong>Celular:</strong> ${formPhone.value}</p>
              <p><strong>Cidade:</strong> ${formCidade.value}</p>
              <p><strong>Assunto:</strong> ${formAssunto.value}</p>
              <p><strong>Mensagem:</strong> ${formMessage.value}</p>
            </div>
          </body>
        </html>
      `,
    });

    successMessage.value = 'Mensagem enviada com sucesso!';
    resetForm(); 
    setTimeout(() => { successMessage.value = ''; }, 3000);
  } catch (error) {
    errorMessage.value = 'Houve um problema ao enviar o e-mail. Tente novamente mais tarde.';
    setTimeout(() => { errorMessage.value = ''; }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};

// Função para aplicar máscara no campo de celular
const applyPhoneMask = () => {
  let phone = formPhone.value.replace(/\D/g, '').slice(0, 11);

  formPhone.value = phone.length > 10
    ? `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
    : `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
};

// Função para resetar o formulário
const resetForm = () => {
  formName.value = '';
  formEmail.value = '';
  formPhone.value = '';
  formCidade.value = '';
  formAssunto.value = '';
  formMessage.value = '';
};
</script>
