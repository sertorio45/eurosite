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
        <div class="col-md-6">
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
        <div class="col-md-6">
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
          />
        </div>
      </div>

      <div class="row gy-2 g-2 mt-2">
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
        <div class="col-md-6">
          <select
            v-model="formArea"
            class="form-select"
            name="area"
            id="form_area"
            required
            aria-required="true"
            aria-label="Área de Interesse"
          >
            <option disabled value="">Selecione a área de interesse:</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Comercial">Comercial</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div class="row gy-2 mt-2">
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
        <div class="col-12">
          <button class="btn btn-primary w-100" type="submit" name="submit" id="enviar" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviando...
            </span>
            <span v-else>Enviar</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app'; 

// Referências dos campos do formulário
const formName = ref('');
const formEmail = ref('');
const formCidade = ref('');
const formArea = ref('');
const formMessage = ref('');
const isSubmitting = ref(false);
const errorMessage = ref(''); 
const successMessage = ref(''); 

const nuxtApp = useNuxtApp(); 

// Função para validar o email
const validateEmail = () => {
  const email = formEmail.value;
  if (!email.includes('@')) {
    errorMessage.value = 'Por favor, insira um email válido contendo @.';
  } else {
    errorMessage.value = '';
  }
};

// Função para validar o formulário
const isFormValid = () => {
  return (
    formName.value.trim() !== '' &&
    formEmail.value.trim() !== '' &&
    formCidade.value.trim() !== '' &&
    formArea.value.trim() !== '' &&
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
    const formData = new FormData();
    formData.append('nome', formName.value);
    formData.append('email', formEmail.value);
    formData.append('cidade', formCidade.value);
    formData.append('area', formArea.value);
    formData.append('mensagem', formMessage.value);

    // Enviar os dados para o servidor que lida com o envio do e-mail
    const response = await fetch('/api/ouvidoria', {
      method: 'POST',
      body: formData,
    });

    // Verifica o status da resposta e trata de forma apropriada
    if (response.status === 404) {
      throw new Error('Rota não encontrada. Verifique o backend.');
    }

    if (response.ok) {
      successMessage.value = 'Mensagem enviada com sucesso!';
      resetForm();
      setTimeout(() => { successMessage.value = ''; }, 3000);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao enviar o formulário.');
    }
  } catch (error: any) {
    // Tratamento do erro desconhecido
    errorMessage.value = error instanceof Error ? error.message : String(error);
    setTimeout(() => { errorMessage.value = ''; }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};

// Função para resetar o formulário
const resetForm = () => {
  formName.value = '';
  formEmail.value = '';
  formCidade.value = '';
  formArea.value = '';
  formMessage.value = '';
};
</script>
