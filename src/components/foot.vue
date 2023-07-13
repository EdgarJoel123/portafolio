<script setup>
</script>


<template>
  <section id="footer">
    <div class="container">
      <div class="social-links">
        <a href="https://api.whatsapp.com/send?phone=593989353272&text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n"
          class="whatsapp" target="_blank"><i><v-icon name="bi-whatsapp" class="i1" scale="1" /></i></a>
        <a href="https://www.instagram.com/joel_44sanchez24/" class="instagram" target="_blank"><i><v-icon
              name="co-instagram" class="i1" scale="1" /></i></a>
        <a href="https://www.facebook.com/edgarjoel.sanchez.12/" class="facebook" target="_blank"><i><v-icon
              name="bi-facebook" class="i1" scale="1" /></i></a>
        <a href="https://github.com/EdgarJoel123" class="github" target="_blank"><i><v-icon
              name="co-github" class="i1" scale="1" /></i></a>
        <a href="https://www.linkedin.com/in/edgar-sanchez-lascano-ba8179213/" class="linkedin" target="_blank"><i><v-icon name="bi-linkedin" class="i1" scale="1" /></i></a>
      </div>

      <div class="copyright">
        &copy; Copyright <strong><span>Edgar Sánchez</span></strong>. All Rights Reserved
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
  background:#083a63;
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