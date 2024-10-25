import 'boxicons/css/boxicons.css'; // Importa o CSS do Boxicons

export default defineNuxtPlugin((nuxtApp) => {
  // O plugin só está aqui para garantir que o CSS seja carregado
  console.log('Boxicons loaded successfully!');
});