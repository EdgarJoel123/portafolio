<script >
 export default {
    data() {
      return { arr: ["Hello", "From", "Vue Writer"] };
    },
  };
</script>

<template>

<section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Marcelo Pérez</h1>

      <p>Soy <span><VueWriter :array="['Desarrollador', 'Diseñador UI/UX']" :eraseSpeed="50" :typeSpeed="100"  /></span></p>

      <div class="social-links">
        <a href="https://api.whatsapp.com/send?phone=593984740238&text=Hola%21%20Quisiera%20contactarme%20con%20Marcelo%20Perez." class="whatsapp" target="_blank"><i><v-icon name="bi-whatsapp" class="i1" scale="2"/></i></a>   
        <a href="https://www.instagram.com/marce_prez/" class="instagram" target="_blank"><i><v-icon name="co-instagram" class="i1" scale="2"/></i></a>
        <a href="https://web.facebook.com/marcelo.perez.790" class="facebook" target="_blank"><i><v-icon name="bi-facebook" class="i1" scale="2"/></i></a>
        <a href="https://github.com/MarceloIPV" class="github" target="_blank"><i><v-icon name="co-github" class="i1" scale="2"/></i></a>
        <a href="#" class="linkedin" target="_blank"><i><v-icon name="bi-linkedin" class="i1" scale="2"/></i></a>
      </div>
    </div>
</section><!-- End Hero -->

</template>

<style scoped>

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background: url("../img/hero-bg.jpg") top right no-repeat;
  background-size: cover;
  position: relative;
  z-index: 3;
}

@media (min-width: 992px) {
  #hero {
    padding-left: 160px;
  }
}

#hero:before {
  content: "";
  background: rgba(0, 0, 0, 0.671);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

#hero h1 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  color: #fca311;
  z-index: 1;
}

#hero p {
  color: #e5e5e5;
  margin: 15px 0 0 0;
  font-size: 26px;
  font-family: "Poppins", sans-serif;
  z-index: 1;
}

#hero p span {
  color: #fca311;
  letter-spacing: 1px;
  z-index: 1;
}

#hero .social-links {
  margin-top: 30px;
  z-index: 1;
}

#hero .social-links a {
  font-size: 24px;
  display: inline-block;
  color: #edede9;
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
  z-index: 1;
}

#hero .social-links a:hover {
  color: #0563bb;
  z-index: 1;
}

@media (max-width: 992px) {
  #hero {
    text-align: center;
  }

  #hero h1 {
    font-size: 32px;
    line-height: 36px;
  }

  #hero p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
  }
}



</style>

