<template>
  <div class="whatsapp-button">
    <a
      href="https://api.whatsapp.com/send?phone=15991712882&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minhas%20d%C3%BAvidas."
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-success d-flex align-items-center justify-content-center"
    >
      <i class="bx bxl-whatsapp bx-tada"></i>
    </a>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-button a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-color:transparent;
  background-color: rgb(6, 167, 46); /* Cor verde original do WhatsApp */
  color: #fff;
  font-size: 2.5rem!important;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.whatsapp-button a:hover {
  transform: scale(1.1);
  background-color: rgba(2, 96, 36, 0.948)!important;
}
</style>
