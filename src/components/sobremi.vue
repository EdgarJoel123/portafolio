<script>
export default {
  mounted() {
    this.myFunction();
  },
  methods: {
    myFunction() {
      let skilsContent = document.querySelector(".skills-content");

      if (skilsContent) {
        let progress = document.querySelectorAll(
          ".progress .progress-bar",
          true
        );

        console.log(progress);

        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      }
    },
  },
};
</script>

<template>
  <section id="about" class="about">
    <!-- ======= About Me ======= -->
    <div class="about-me container">
      <div class="section-title">
        <h2>Sobre Mi</h2>
      </div>

      <!-- Details 1 -->
      <div id="details" class="basic-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-7">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="../img/details-1.png"
                  alt="alternative"
                />
              </div>
              <!-- end of image-container -->
            </div>
            <!-- end of col -->

            <div class="col-lg-6 col-xl-5">
              <div class="text-container ">

                <h3>Hola soy Marcelo Pérez</h3>

            <p>
            Soy estudiante de Ingeniería de Software en la Universidad Técnica de Ambato, apasionado por el diseño y creación de aplicaciones web y moviles, además de poseer conocimiento en distintos leguajes de programación como: Java, Python, C#, C++.</p>

            <p>Como Ingeniero de profesión estoy capacitado para dar soluciones optimas, precisas y eficientes a problemas y requerimientos presentes.</p>

            <p> Aquí abajo podrás encontrar información adicional sobre mis estudios realizados, cursos de capacitación y experiencia profesional.</p>


          <a class="btn-solid-reg" href="#contact">Curriculum  <v-icon name="hi-download" scale="1.2 " class="i1"/></a>
        
              </div>
              <!-- end of text-container -->
            </div>
            <!-- end of col -->
          </div>
          <!-- end of row -->
        </div>
        <!-- end of container -->
      </div>
      <!-- end of basic-1 -->
      <!-- end of details 1 -->
    </div>
    <!-- End About Me -->

    <!-- End Counts -->

    <!-- ======= Skills  ======= -->
    <div class="skills container">
      <div class="section-title">
        <h2>Habilidades</h2>
      </div>

      <div class="row skills-content">
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill">Java <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">C# <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">C++ <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">kottlin <i class="val">65%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Flutter <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">SQL <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

        
        </div>

        <div class="col-lg-6">

          
          <div class="progress">
            <span class="skill">HTML <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">css <i class="val">70%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JAVASCRIPT <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          
          <div class="progress">
            <span class="skill">React <i class="val">45%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Vue <i class="val">55%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Angular <i class="val">50%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Skills -->

    <!-- ======= Interests ======= -->
    <div class="interests container">
      <div class="section-title">
        <h2>Intereses</h2>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
            <i style="color: #4233ff;" ><v-icon name="md-designservices-round" class="i1" scale="1.3"/></i>
            <h3>Diseño UI/UX</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i style="color: #ffbb2c;" ><v-icon name="fa-vr-cardboard" class="i1" scale="1.3"/></i>
            <h3>Realidad Virtual</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i style="color: #11dbcf;" ><v-icon name="si-adobephotoshop" class="i1" scale="1.3"/></i>
            <h3>Photoshop</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
            <i style="color: #b2904f;" ><v-icon name="si-strapi" class="i1" scale="1.3"/></i>
            <h3>Api's</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #ffbb2c;" ><v-icon name="ri-music-2-fill" class="i1" scale="1.3"/></i>
            <h3>Música</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #47aeff;" ><v-icon name="si-youtubegaming" class="i1" scale="1.3"/></i>
            <h3>Video Juegos</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #b2904f;" ><v-icon name="si-antdesign" class="i1" scale="1.3"/></i>
            <h3>Modelismo</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #11dbcf;" ><v-icon name="gi-soccer-ball" class="i1" scale="1.3"/></i>
            <h3>Futbol</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #4233ff;" ><v-icon name="gi-rally-the-troops" class="i1" scale="1.3"/></i>
            <h3>Rally</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #ff5828;" ><v-icon name="bi-camera2" class="i1" scale="1.3"/></i>
            <h3>Fotografia</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i  style="color: #b20969;" ><v-icon name="gi-commercial-airplane" class="i1" scale="1.3"/></i>
            <h3>Viajes</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i style="color: #e361ff;" ><v-icon name="la-language-solid" class="i1" scale="1.3"/></i>
            <h3>Idiomas</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- End Interests -->
  </section>
  <!-- End About Section -->
</template>

<style scoped>
#about {
  font-family: "Open Sans", sans-serif;
  background-color: #040404;
  color: #fff;
  position: relative;
  background: transparent;
}

#about::before {
  content: "";
  position: fixed;
  background: #040404 url("../img/bg.jpg") top right no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.836);
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: -1;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/

.basic-1 {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}

.basic-1 .image-container {
  margin-bottom: 4rem;
}

.basic-1 h3 {
  margin-bottom: 1.75rem;
  font-weight: 700;
  font-size: 26px;
}

.basic-1 p {
  margin-bottom: 2rem;
  font-size: 18px;
  text-align: justify;
  text-justify: auto;
 
}

.basic-1 .btn-solid-reg{
  padding-top: 2%;
  padding-bottom: 2%;
}



.about-me .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #18d26e;
}

.about-me .content ul {
  list-style: none;
  padding: 0;
}

.about-me .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about-me .content ul strong {
  margin-right: 10px;
}

.about-me .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #18d26e;
  line-height: 0;
}

.about-me .content p:last-child {
  margin-bottom: 0;
}


/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/
.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
  
}

.skills .progress .skill {
  padding: 10px 0;
  margin: 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: rgba(255, 255, 255, 0.2);
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: #18d26e;
}

/*--------------------------------------------------------------
# Interests
--------------------------------------------------------------*/

.interests{
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  padding-bottom: 5%;
}
.interests .icon-box {
  display: flex;
  align-items: center;
  padding: 20px ;
  background: rgba(255, 255, 255, 0.08);
  transition: ease-in-out 0.3s;
}

.interests .icon-box i {
  padding-right: 10px;
  line-height: 1;
  
}

.interests .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
  color: #fff;
}

.interests .icon-box:hover   {
  background: rgba(255, 255, 255, 0.12);
  
}

.interests .icon-box:hover .i1  {
  
  --c:#fca311;
  color:var(--c);
}


.section-title h2 {

  color:var(--light);
 
}


</style>
