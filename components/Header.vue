<template>
<section class="bg-primary py-3 text-light d-flex justify-content-center">
  <div class="container">
    <div class="row">
      <div class="col-6 d-flex justify-content-start">
       <a href=""><Icon icon="bx bxl-instagram" color="#ffffff" font-size="1.5em" class="social-icon"></Icon></a>
       <a href=""><Icon icon="bx bxl-facebook" color="#ffffff" font-size="1.5em" class="social-icon"></Icon></a>
       <a href=""><Icon icon="bx bxl-linkedin" color="#ffffff" font-size="1.5em" class="social-icon"></Icon></a>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <span>
          <NuxtLink to="#" class="text-light">Seja Franquiado</NuxtLink> | 
          <NuxtLink to="/ouvidoria" class="text-light">Ouvidoria</NuxtLink> | 
          <NuxtLink to="/trabalhe-conosco" class="text-light">Trabalhe Conosco</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</section>


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
                  <NuxtLink to="/unidades" class="nav-link">Unidades</NuxtLink>
                </li>
               <Dropdown />
                <li class="nav-item">
                  <NuxtLink to="/alunos-contratados" class="nav-link">Alunos contratados</NuxtLink>
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
import { useRouter } from 'vue-router';

const goToCursos = () => {
  router.push('/cursos');
};
const router = useRouter();

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

