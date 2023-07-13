<script setup>
</script>

<template>

<section id="contact">
  <h3> </h3>
  <h3> </h3>
  <div class="overlay"></div>

  <div class="container">

    <div class="section-title">
        <h2 style="color: azure;">Contáctame</h2>
      </div>
    

    <div class="row contact-info section-header wow fadeInUp">
      <div class="col-md-4">
        <div class="contact-address">
            <a href="" class="ii1"><i><v-icon name="md-locationon" class="i1" scale="1.7" fill="white"/></i></a>
          <h3>Dirección</h3>
          <address class="wow fadeInUp" data-wow-delay="0.4s">
            <p>Av. Los Chasquis y Oriente<br>Multifamiliares Bellavista <br>Ambato-Ecuador
            </p>
          </address>
        </div>
      </div>

      <div class="col-md-4">
        <div class="contact-phone">
            <a href="" class="ii1"><i><v-icon name="fa-phone-alt" class="i1" scale="1.7" fill="white"/></i></a>
          <h3>Contacto</h3>
          <p><a href="tel:+593 984740238">+593 984 740 238</a></p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="Email">
         <a href="" class="ii1"><i><v-icon name="hi-solid-mail" class="i1" scale="1.7" fill="white"/></i></a>
          <h3>Email</h3>
          <p><a href="mailto:mperez8246@uta.edu.ec">mperez8246@uta.edu.ec</a></p>
        </div>
      </div>
    </div>

    <div class="map space-set section-header wow fadeInUp">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d496.82952848834947!2d-78.6219676572421!3d-1.247211656751007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1675970155110!5m2!1ses-419!2sec"
        width="100%" height="100%" style="border: 0" allowfullscreen="" loading="Beautiful" zoom="15"></iframe>
    </div>
      </div>
</section>



</template>


<style scoped>

.ii1 {

font-size: 18px;
  display: inline-block;
  background: #0563bb;
  color: #fff;
  line-height: 1;
  padding:9px 0;
  margin-right: 10px;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  transition: 0.3s;
  align-content: center;
  align-items: center;
  align-self: center;
  margin: 20px;
 
}

.ii1:hover {
  background: #fca311;
  color: #fff;
  text-decoration: none;
}

/*---------------------------------------
  CONTACT             
-----------------------------------------*/

#contact {
  background: url('../images/contact-bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  z-index: 0;
}
#contact .overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.438);
  z-index: -1;
}

#contact {
  padding: 60px 0;
}

#contact .contact-info {
  margin-bottom: 20px;
  text-align: center;
}


#contact .section-header h3 {
  
  color: #c59a6d;
}

#contact .section-header h3::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ffffff;
  bottom: 1px;
  left: calc(50% - 60px);
}

#contact .section-header h3::after {
  content: '';
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #5a8ebe;
  bottom: 0;
  left: calc(50% - 20px);
}



#contact .contact-info .tel {
  
  color: #fca311;
}

#contact .contact-info address,
#contact .contact-info p {
  margin-bottom: 0;
  color: #ffffff;
}

#contact .contact-info h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
}

#contact .contact-info a {
  color: #ffffff;
}

#contact .contact-info a:hover {
  color: #fca311;
}


#contact .map {
  margin-left: auto;
  width: 100%;
  height: 400px;
  border: 5px solid #fca311;
}


</style>