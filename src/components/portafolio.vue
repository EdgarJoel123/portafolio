<script setup></script>

<template>
  <section class="artists-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="section-title">
          <h2>Portafolio</h2>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="../img/artists/p1.jpg"
                class="artists-image img-fluid"
              />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Perez & Salvador
              </p>

              <p>
                <strong>Tecnología:</strong>
                HTML, CSS, JAVASCRIPT
              </p>

              <p>
                <strong>Año:</strong>
                2021
              </p>

              <hr />

              <p class="mb-0">
                <strong>Enlace:</strong>
                <a href="https://github.com/MarceloIPV/Perez-Salvador-Web-Page"><v-icon name="co-github" class="i1" scale="1.4"/>   </a>
                <a href="https://perezsalvador.com/"><v-icon name="fa-firefox-browser" class="i1" scale="1.4"/>  </a>
              </p>
            </div>
          </div>

          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="../img/artists/p2.jpg"
                class="artists-image img-fluid"
              />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Inmobiliaria Baños
              </p>

              <p>
                <strong>Tecnología:</strong>
                Vue JS
              </p>

              <p>
                <strong>Año:</strong>
                2022
              </p>

              <hr />

              <p class="mb-0">
                <strong>Enlace:</strong>
                <a href="https://github.com/MarceloIPV/PaginaWebInmobiliaria" target="_blank"><v-icon name="co-github" class="i1" scale="1.4"/>   </a>
              </p>
              
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="../img/artists/p3.jpg"
                class="artists-image img-fluid"
              />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Muy Pronto P&S
              </p>

              <p>
                <strong>Tecnología:</strong>
                HTML, CSS, JAVASCRIPT
              </p>

              <p>
                <strong>Año:</strong>
                2021
              </p>

              <hr />

              <p class="mb-0">
                <strong>Enlace:</strong>
                <a href="https://github.com/MarceloIPV/Coming-Soon-P-S" target="_blank"><v-icon name="co-github" class="i1" scale="1.4"/>   </a>
              </p>
            </div>
          </div>

          <div class="artists-thumb">
            <img
            src="../img/artists/p4.png"
              class="artists-image img-fluid"
            />

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Gestión de Clínicas
              </p>

              <p>
                <strong>Tecnología:</strong>
                Angular
              </p>

              <p>
                <strong>Año:</strong>
                2020
              </p>

              <hr />

              <p class="mb-0">
                <strong>Enlace:</strong>
                <a href="https://github.com/MarceloIPV/Gestion-Hospitalaria"><v-icon name="co-github" class="i1" scale="1.4"/>   </a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*---------------------------------------
  Portafolio              
-----------------------------------------*/


.artists-section{
  background-color: #fcfcfc;
  color: #fff;
  position: relative;
}

.artists-thumb {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}

.artists-image {
  border-radius: var(--border-radius-medium);
  display: block;
  width: 100%;
}

.artists-thumb:hover .artists-hover {
  transform: translateY(0);
  opacity: 1;
}

.artists-hover {
  background-color: var(--primary-color);
  background-color: rgba(5, 99, 187, 0.75);
  border-radius: var(--border-radius-medium);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  margin: 20px;
  padding: 35px;
  transition: all 0.5s ease;
  transform: translateY(100%);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
}

.artists-hover p strong {
  color: var(--white-color);
  display: inline-block;
  min-width: 80px;
  margin-right: 20px;
}

.artists-hover p a {
  color: var(--secondary-color);
  margin-left: 10px;
}

.artists-hover p a:hover {
  color: #fca311;
}

.artists-hover hr {
  margin: 1.5rem 0;
}

@media only screen and (max-width: 500px) {
      
  .artists-hover hr {
  margin: 2% 0;
}
  .artists-hover p  {
 font-size: 90%;
  margin: 3% 0;
}

.artists-hover {

  margin: 2%;
  padding: 3%;

}


}


@media only screen and (max-width: 278px) {
      
     
      .artists-hover p  {
     font-size: 60%;
      margin: 3% 0;
    }
    
    }

</style>
