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
      <div class="row gx-2 gy-2 m-0">
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
            v-model="contactCell"
            type="tel"
            class="form-control"
            name="celular"
            id="contact_number"
            placeholder="Celular"
            required
            aria-required="true"
            aria-label="Celular"
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
            ref="fileInput"
            type="file"
            class="form-control"
            id="contact_curriculo"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            @change="handleFileUpload"
          />
          <small class="form-text text-muted">Apenas arquivos .pdf, .doc, .docx, .jpg, .jpeg, .png são permitidos.</small>
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
const contactName = ref<string>('');
const contactEmail = ref<string>('');
const contactCell = ref<string>('');
const contactCidade = ref<string>('');
const contactMessage = ref<string>('');
const curriculo = ref<File | null>(null) as Ref<File | null>;
const isSubmitting = ref<boolean>(false);
const errorMessage = ref<string>('');
const successMessage = ref<string>('');
const showSuggestions = ref<boolean>(false); // Para controlar exibição das sugestões
const fileInput = ref<HTMLInputElement | null>(null); // Para resetar o input de arquivo

// Lista de domínios de e-mail
const emailDomains = ref<string[]>([
  'gmail.com', 
  'hotmail.com', 
  'yahoo.com', 
  'outlook.com', 
  'icloud.com', 
  'empresa.com.br', 
  'empresa.com'
]);

const nuxtApp = useNuxtApp();

// Função para capturar o arquivo selecionado
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    curriculo.value = target.files[0];
  }
};

// Função para obter sugestões de e-mails
const getSuggestedEmail = (domain: string) => {
  return `${contactEmail.value.split('@')[0]}@${domain}`;
};

// Função para validar o e-mail
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

// Watcher para ocultar as sugestões se o e-mail mudar sem @
watch(contactEmail, (newValue) => {
  showSuggestions.value = newValue.endsWith('@');
});

// Função para validar o formulário
const isFormValid = () => {
  const isCellValid = contactCell.value.replace(/\D/g, '').length === 11; // 2 dígitos do DDD + 9 dígitos do número
  if (!isCellValid) {
    errorMessage.value = 'Por favor, insira um número de celular válido com DDD.';
    return false;
  }
  return (
    contactName.value.trim() !== '' &&
    contactEmail.value.trim() !== '' &&
    contactCell.value.trim() !== '' &&
    contactCidade.value.trim() !== '' &&
    contactMessage.value.trim() !== '' &&
    contactEmail.value.includes('@') &&
    isCellValid
  );
};

// Função para enviar o formulário
const handleSubmit = async () => {
  if (!isFormValid()) {
    errorMessage.value = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 3000);
    return;
  }

  if (isSubmitting.value) {
    return; // Evita múltiplos envios
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Inicializar array de attachments com tipo explícito
    let attachments: { filename: string; content: string; encoding: string; contentType?: string }[] = [];

    // Verificar se curriculo.value existe e é um File válido
    if (curriculo.value && curriculo.value instanceof File) {
  const reader = new FileReader();
  await new Promise<void>((resolve, reject) => {
    reader.onload = () => {
      const base64Data = reader.result?.toString().split(',')[1]; // Pegar apenas a parte base64
      if (base64Data) {
        attachments.push({
          filename: (curriculo.value as File).name,  // Type assertion para garantir que curriculo.value é um File
          content: base64Data,
          encoding: 'base64',
          contentType: (curriculo.value as File).type,  // Type assertion para garantir que curriculo.value é um File
        });
      }
      resolve();
    };
    reader.onerror = reject;

    // Ler o arquivo como base64
    reader.readAsDataURL(curriculo.value as File); // Type assertion aqui também
  });
} else {
  console.error("O valor de curriculo não é um arquivo válido (File).");
}


    // Enviar o e-mail usando Nuxt Mail
    await nuxtApp.$mail.send({
      to: 'giovannistr@gmail.com',
      subject: 'Trabalhe Conosco - Euro Anglo Cursos',
      html: `
        <html>
          <body style='font-family: "Montserrat", sans-serif;'>
            <div style='background-color: #000; text-align: center; padding: 20px 0;'>
              <img src='https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png' alt='Logo da Empresa' style='max-width: 200px;'>
            </div>
            <div style='background-color: #fff; padding: 40px;'>
              <p><strong>Nome:</strong> ${contactName.value}</p>
              <p><strong>Email:</strong> ${contactEmail.value}</p>
              <p><strong>Celular:</strong> ${contactCell.value}</p>
              <p><strong>Cidade:</strong> ${contactCidade.value}</p>
              <p><strong>Mensagem:</strong> ${contactMessage.value}</p>
            </div>
          </body>
        </html>
      `,
      attachments,
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

// Função para aplicar máscara no campo de celular
const applyPhoneMask = () => {
  let phone = contactCell.value.replace(/\D/g, '').slice(0, 11);

  contactCell.value = phone.length > 10 
    ? `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}` 
    : `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
};

// Função para resetar o formulário
const resetForm = () => {
  contactName.value = '';
  contactEmail.value = '';
  contactCell.value = '';
  contactCidade.value = '';
  contactMessage.value = '';
  curriculo.value = null; // Reseta o anexo
  if (fileInput.value) {
    fileInput.value.value = ''; // Resetar o input de arquivo
  }
};
</script>
