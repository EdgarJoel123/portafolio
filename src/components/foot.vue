<script setup>
</script>


<template>

<section id="footer">
<div class="container">
    <div class="social-links">
        <a href="https://api.whatsapp.com/send?phone=593984740238&text=Hola%21%20Quisiera%20contactarme%20con%20Marcelo%20Perez." class="whatsapp" target="_blank"><i><v-icon name="bi-whatsapp" class="i1" scale="1"/></i></a>   
        <a href="https://www.instagram.com/marce_prez/" class="instagram" target="_blank"><i><v-icon name="co-instagram" class="i1" scale="1"/></i></a>
        <a href="https://web.facebook.com/marcelo.perez.790" class="facebook" target="_blank"><i><v-icon name="bi-facebook" class="i1" scale="1"/></i></a>
        <a href="https://github.com/MarceloIPV" class="github" target="_blank"><i><v-icon name="co-github" class="i1" scale="1"/></i></a>
        <a href="#" class="linkedin" target="_blank"><i><v-icon name="bi-linkedin" class="i1" scale="1"/></i></a>
    </div>

    <div class="copyright">
      &copy; Copyright <strong><span>Marcelo Pérez</span></strong>. All Rights Reserved
    </div>
   
  </div>
</section>

</template>

<style scoped>

#footer {
  background: #f7f8f9;
  color: #45505b;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #0563bb;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #fca311;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
}

#footer .credits {
  font-size: 13px;
}
</style>