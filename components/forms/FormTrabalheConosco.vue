<template>
  <div>
    <!-- Mensagens de erro e sucesso -->
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <!-- Formulário de Contato -->
    <form class="custom-input" id="contact_form" autocomplete="off" novalidate @submit.prevent="handleSubmit">
      <div class="row gx-1 gy-1">
        <div class="col-md-6">
          <input
            v-model="contactName"
            type="text"
            class="form-control"
            name="nome"
            id="contact_name"
            placeholder="Nome"
            required
            aria-required="true"
            aria-label="Nome"
          />
        </div>
        <div class="col-md-6">
          <input
            v-model="contactEmail"
            type="email"
            class="form-control"
            name="email"
            id="contact_email"
            placeholder="Email"
            required
            aria-required="true"
            aria-label="Email"
            @input="validateEmail"
            @focus="showSuggestions = contactEmail.includes('@')"
            list="email_suggestions"
          />
          <datalist id="email_suggestions" v-if="showSuggestions">
            <option v-for="domain in emailDomains" :key="domain" :value="getSuggestedEmail(domain)"></option>
          </datalist>
        </div>
        <div class="col-md-6">
          <input
            v-model="contactNumber"
            type="tel"
            class="form-control"
            name="telefone"
            id="contact_number"
            placeholder="Telefone"
            required
            aria-required="true"
            aria-label="Telefone"
            maxlength="15"
            @input="applyPhoneMask"
          />
        </div>
        <div class="col-md-6">
          <select v-model="contactCidade" class="form-select" name="cidade" id="contact_cidade" required aria-required="true" aria-label="Cidade">
            <option value="" disabled selected>Selecione a cidade:</option>
            <option value="Campinas">Campinas</option>
            <option value="Ribeirao">Ribeirão Preto</option>
            <option value="SaoJoseDosCampos">São José dos Campos</option>
          </select>
        </div>
        <div class="col-12">
          <textarea
            v-model="contactMessage"
            class="form-control"
            name="mensagem"
            id="contact_message"
            rows="3"
            placeholder="Mensagem"
            required
            aria-required="true"
            aria-label="Mensagem"
          ></textarea>
        </div>
        <!-- Campo de Anexo -->
        <div class="col-12">
          <input
            type="file"
            class="form-control"
            id="contact_curriculo"
            accept=".pdf,.doc,.docx"
            @change="handleFileUpload"
          />
        </div>
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
          <a href="">Política de Privacidade</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';

// Referências dos campos do formulário
const contactName = ref('');
const contactEmail = ref('');
const contactNumber = ref('');
const contactCidade = ref('');
const contactMessage = ref('');
const curriculo = ref<File | null>(null); // Variável para o anexo
const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const showSuggestions = ref(false);
const emailDomains = ref(['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'empresa.com.br', 'empresa.com']);

const nuxtApp = useNuxtApp();

// Função para capturar o arquivo selecionado
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    curriculo.value = target.files[0];
  }
};

const getSuggestedEmail = (domain: string) => `${contactEmail.value.split('@')[0]}@${domain}`;

// Função para validar o email
const validateEmail = () => {
  const email = contactEmail.value;
  if (!email.includes('@')) {
    errorMessage.value = 'Por favor, insira um email válido contendo @.';
    showSuggestions.value = false;
  } else {
    errorMessage.value = '';
    showSuggestions.value = email.endsWith('@');
  }
};

// Watcher para ocultar as sugestões se o email mudar sem @
watch(contactEmail, (newValue) => {
  showSuggestions.value = newValue.endsWith('@');
});

// Função para validar o formulário
const isFormValid = () => {
  return (
    contactName.value.trim() !== '' &&
    contactEmail.value.trim() !== '' &&
    contactNumber.value.trim() !== '' &&
    contactCidade.value.trim() !== '' &&
    contactMessage.value.trim() !== '' &&
    contactEmail.value.includes('@')
  );
};

// Função para enviar o formulário
const handleSubmit = async () => {
  if (!isFormValid()) {
    errorMessage.value = 'Por favor, preencha todos os campos obrigatórios.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 3000);
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const formData = new FormData();
    formData.append('nome', contactName.value);
    formData.append('email', contactEmail.value);
    formData.append('telefone', contactNumber.value);
    formData.append('cidade', contactCidade.value);
    formData.append('mensagem', contactMessage.value);

    // Anexa o arquivo diretamente no FormData
    if (curriculo.value) {
      formData.append('curriculo', curriculo.value, curriculo.value.name);
    }

    // Enviar o e-mail via fetch ou nuxt-mail
    await nuxtApp.$mail.send({
      to: 'giovannistr@gmail.com',
      subject: `Trabalhe Conosco - Euro Anglo Cursos`,
      html: `
        <html>
          <body style='font-family: "Montserrat", sans-serif;'>
            <div style='background-color: #000; text-align: center; padding: 20px 0;'>
              <img src='https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png' alt='Logo da Empresa' style='max-width: 200px;'>
            </div>
            <div style='background-color: #fff; padding: 40px;'>
              <p><strong>Nome:</strong> ${contactName.value}</p>
              <p><strong>Email:</strong> ${contactEmail.value}</p>
              <p><strong>Telefone:</strong> ${contactNumber.value}</p>
              <p><strong>Cidade:</strong> ${contactCidade.value}</p>
              <p><strong>Mensagem:</strong> ${contactMessage.value}</p>
            </div>
          </body>
        </html>
      `,
      attachments: curriculo.value
        ? [
            {
              filename: curriculo.value.name,
              content: await curriculo.value.text(), // Converte para texto ou ArrayBuffer
            },
          ]
        : [],
    });

    successMessage.value = 'Currículo enviado com sucesso!';
    resetForm();
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error) {
    errorMessage.value = 'Houve um problema ao enviar o e-mail. Tente novamente mais tarde.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};

// Função para aplicar máscara no campo de telefone
const applyPhoneMask = () => {
  let phone = contactNumber.value.replace(/\D/g, '').slice(0, 11);

  contactNumber.value = phone.length > 10 ? `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}` : `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
};

// Função para resetar o formulário
const resetForm = () => {
  contactName.value = '';
  contactEmail.value = '';
  contactNumber.value = '';
  contactCidade.value = '';
  contactMessage.value = '';
  curriculo.value = null; // Reseta o anexo
};
</script>
