<template>
  <div class="container py-2">
    <div class="row">
      <div class="col-6 d-flex justify-content-start">
        <p>Alinhado ao início</p>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <p>Seja Franqueado | Ouvidoria | Trabalhe Conosco</p>
      </div>
    </div>
    <div class="row g-0"> <!-- Adicionado g-0 para remover margem -->
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <div class="container-fluid p-0">
            <!-- Logo -->
            <NuxtLink to="/" class="navbar-brand ">
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
                  <NuxtLink to="/" class="nav-link">Sobre nós</NuxtLink>
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
             
              <div class="align-content-end"><a href="https://wa.me/5516992842170?text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20ser%20atendido(a)." class="btn btn-primary" target="_blank">Atendimento rápido</a></div>
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
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

.custom-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 5px 0;
  z-index: 1000;
  transition: background-color 0.3s, backdrop-filter 0.3s, padding 0.3s ease-in-out;
  background-color: transparent;
  backdrop-filter: none;
}

.custom-header.scrolled {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(25px);
  padding: 10px 0;
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

::v-deep .navbar-toggler:not(.collapsed) .menu-icon {
  opacity: 0;
}

::v-deep .navbar-toggler:not(.collapsed) .close-icon {
  opacity: 1;
}

::v-deep .navbar-toggler.collapsed .menu-icon {
  opacity: 1;
}

::v-deep .navbar-toggler.collapsed .close-icon {
  opacity: 0;
}

.dropdown-menu {
  background-color: rgba(255, 255, 255, 0.5) !important;
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
