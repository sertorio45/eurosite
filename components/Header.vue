<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-6 d-flex justify-content-start">
        <p>Alinhado ao início</p>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <span>
          <NuxtLink to="#">Seja Franquiado</NuxtLink> | 
          <NuxtLink to="/ouvidoria">Ouvidoria</NuxtLink> | 
          <NuxtLink to="/trabalhe-conosco">Trabalhe Conosco</NuxtLink>
        </span>
      </div>
    </div>
  </div>
  <div :class="['container-fluid', 'py-2', {'position-fixed top-0 start-0 w-100 fixed-navbar': isScrolled}]">
    <div class="row g-0">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <div class="container p-0">
            <!-- Logo -->
            <NuxtLink to="/" class="navbar-brand">
              <Logo />
            </NuxtLink>

            <!-- Botão de Toggle com Boxicons -->
            <button 
              class="navbar-toggler collapsed d-lg-none"
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <i class="bx bx-menu toggle-icon menu-icon"></i>
              <i class="bx bx-x toggle-icon close-icon"></i>
            </button>

            <!-- Menu Colapsável -->
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link">Página inicial</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/sobre" class="nav-link">Sobre nós</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link">Unidades</NuxtLink>
                </li>
                <li class="nav-item dropdown">
                  <a 
                    class="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    Cursos <i class="bx bx-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                    <li>
                      <NuxtLink class="dropdown-item nav-link" to="/">Serviços residenciais</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item nav-link" to="/">Serviços comerciais</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link">Alunos contratados</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
                </li>
              </ul>
              <!-- Botão WhatsApp -->
              <div class="align-content-end">
                <a href="https://wa.me/5516992842170?text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20ser%20atendido(a)." class="btn btn-primary" target="_blank">Atendimento rápido</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Ativa a classe fixa ao rolar mais de 50 pixels
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-navbar {
  z-index: 1030; /* Valor alto para garantir que a barra fique sobre outros elementos */
  background-color: rgba(255, 255, 255, 0.7); /* Fundo branco com leve transparência */
  backdrop-filter: blur(10px); /* Efeito de blur */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Sombra leve para destacar o menu */
}

.nav-link {
  color: #000000 !important;
  position: relative;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: var(--color-primary) !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler {
  border: none;
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.toggle-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
}

.menu-icon {
  opacity: 1;
  font-size: 50px;
}

.close-icon {
  opacity: 0;
  font-size: 35px;
}

.dropdown-menu {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(25px) !important;
}

@media (max-width: 992px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-collapse .btn.btn-primary {
    margin-top: 10px;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .navbar-toggler {
    display: none; /* Esconde o botão de toggle no desktop */
  }
}
</style>
