<template>
  <form class="custom-input" id="contact_form" autocomplete="off" novalidate @submit.prevent="handleSubmit">
    <div class="row gx-1 gy-1">
      <div class="col-md-6">
        <input v-model="contactName" type="text" class="form-control" name="nome" id="contact_name" placeholder="Nome" required>
      </div>
      <div class="col-md-6">
        <input v-model="contactEmail" type="email" class="form-control" name="email" id="contact_email" placeholder="Email" required>
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
          maxlength="15"
          @input="applyPhoneMask"
        >
      </div>
      <div class="col-md-6">
        <select v-model="contactCidade" class="form-select" name="cidade" id="contact_cidade">
          <option value="" disabled selected>Selecione a cidade:</option>
          <option value="Campinas">Campinas</option>
          <option value="Ribeirao">Ribeirão Preto</option>
          <option value="SaoJoseDosCampos">São José dos Campos</option>
        </select>
      </div>
      <div class="col-12">
        <textarea v-model="contactMessage" class="form-control" name="mensagem" id="contact_message" rows="3" placeholder="Mensagem"></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-primary w-100" type="submit" name="submit" id="enviar">Enviar</button>
      </div>
      <div class="msg"></div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const contactName = ref('');
const contactEmail = ref('');
const contactNumber = ref('');
const contactCidade = ref('');
const contactMessage = ref('');

const handleSubmit = () => {
  console.log({
    nome: contactName.value,
    email: contactEmail.value,
    telefone: contactNumber.value,
    cidade: contactCidade.value,
    mensagem: contactMessage.value
  });
  // Aqui você pode adicionar lógica para enviar os dados para o backend
};

const applyPhoneMask = () => {
  let phone = contactNumber.value.replace(/\D/g, '');

  // Limitando para no máximo 11 dígitos
  phone = phone.slice(0, 11);

  // Aplicando máscara (XX) XXXXX-XXXX
  if (phone.length > 10) {
    contactNumber.value = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  } else {
    contactNumber.value = `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
  }
};
</script>

<style scoped>
.contact-area {
  padding: 50px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
}

.custom-input input,
.custom-input select,
.custom-input textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.custom-input button.btn {
  width: 100%;
  padding: 10px;
  background-color: var(--bs-primary);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.custom-input button.btn:hover {
  background-color: var(--bs-secondary);
}

.form-control,
.form-select {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.row.gx-1 {
  --bs-gutter-x: 0.5rem;
}

.row.gy-1 {
  --bs-gutter-y: 0.5rem;
}
</style>
