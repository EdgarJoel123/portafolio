<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top header" id="header">
    <div class="container">
      <a class="navbar-brand logo-image" href="http://localhost:5173/#inicio">
        <img class="logo-img" src="../img/3_sobre_mi.png" alt="alternative" />
      </a>
      <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right"
        type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i><v-icon name="px-menu" scale="1.3" /> </i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto text-uppercase">
          <li class="nav-item">
            <a class="nav-link" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Sobre mi</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#portafolio">Portafolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contactame">Contáctame</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section id="inicio">
    <cabecera></cabecera>
  </section>

  <section id="about">
    <Sobremi></Sobremi>
  </section>

  <section id="portafolio">
    <Portafolio></Portafolio>
  </section>

  <section id="contactame">
    <contacto></contacto>
  </section>

  <section>
    <foot></foot>
  </section>
</template>

<style scoped>
.header {
  background: rgb(26, 51, 104);
  border-bottom: 1px solid rgba(12, 11, 9, 0.6);
  transition: all 0.5s;
}

.header.header-scrolled {
  top: 0;
  background: rgba(131, 164, 255, 0.644);
  border-bottom: 1px solid #00199694;
}

.logo-image {
  display: flex;
  align-items: center;
}

.logo-img {
  max-width: 100%; /* El logotipo se ajustará al tamaño del contenedor */
  height: auto; /* Esto mantendrá la proporción original */
  object-fit: contain; /* Ajusta cómo la imagen se adapta al espacio */
  margin-right: 10px; /* Agrega margen para separar el logo del texto si es necesario */
}


</style>

<script setup>
import cabecera from "../components/cabecera.vue";
import despedida from "../components/despedida.vue";
import Sobremi from "../components/sobremi.vue";
import Portafolio from "../components/portafolio.vue";
import foot from "../components/foot.vue";
import contacto from "../components/contacto.vue";


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let intViewportWidth = window.innerWidth;
  if (
    document.body.scrollTop > 30 ||
    (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
  ) {
    document.getElementById("header").classList.add("topbar-scrolled");
    document.getElementById("header").classList.add("header-scrolled");
  } else if (
    document.body.scrollTop < 30 ||
    (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
  ) {
    document.getElementById("header").classList.remove("topbar-scrolled");
    document.getElementById("header").classList.remove("header-scrolled");
  }
}
</script>
