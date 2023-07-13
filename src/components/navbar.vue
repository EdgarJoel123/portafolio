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

<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top header" id="header">
    <div class="container">
      <a class="navbar-brand logo-image" href="index.html"
        ><img src="../img/logo.svg" alt="alternative"
      /></a>
      <button
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        class="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i><v-icon name="px-menu" scale="1.3" /> </i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto text-uppercase">
          <li class="nav-item">
            <a class="nav-link" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
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

  <section>
    <contacto></contacto>
  </section>

  <section>
    <foot></foot>
  </section>

</template>

<style scoped>
.header {
  background: rgba(12, 11, 9, 0.6);
  border-bottom: 1px solid rgba(12, 11, 9, 0.6);
  transition: all 0.5s;
}

.header.header-scrolled {
  top: 0;
  background: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #37332a;
}
</style>
