import 'boxicons/css/boxicons.min.css'; // Importa o CSS do Boxicons
import 'boxicons/fonts/boxicons.woff2'; // Importa o CSS do Boxicons

export default defineNuxtPlugin((nuxtApp) => {
  // O plugin só está aqui para garantir que o CSS seja carregado
  console.log('Boxicons loaded successfully!');
});