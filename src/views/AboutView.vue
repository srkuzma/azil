<template>
  <div class="about">
    <section class="contact_section layout_padding2">
      <div class="container layout_padding3">
        <div class="row">
          <div class="custom_heading-container">
            <h2 v-if="lang == 'sr'">O NAMA</h2>
            <h2 v-else>ABOUT</h2>
          </div>
        </div>
        <br />
        <br />

        <span  v-if="lang == 'sr'">
          Azil Badi je osnovan 1997. godine uz pomoć i podršku Crvenog krsta i od tada obavlja misiju zaštite životinja sa područja Beograda. Izdvaja se po tome što je jedini azil u Srbiji sa odeljkom za ptice. Trenutno u azilu boravi oko 200 životinja. Badi je dobitnik brojnih nagrada i priznanja, uključujući i Oktobarsku povelju grada Beograda za humanost iz 2017.
        </span>

        <span v-else>
Asylum Buddy was founded in 1997 with the help and support of the Red Cross, and since then it has been performing the mission of protecting animals from the area of Belgrade. It stands out because it is the only shelter in Serbia with a section for birds. About 200 animals are currently in the shelter. Buddy is the winner of numerous awards and recognitions, including the October Charter of the City of Belgrade for Humanity from 2017.    </span>
        
        <br />
        <br />

        <div class="row images justify-content-center">
          <div class="col-md-8 col-xs-12 grid">
            <div class="image-container-about">
              <img src="/images/shelter1.jpg" alt="" class="image img-center" />
            </div>
          </div>
          <div class="col-md-8 col-xs-12 grid">
            <div class="image-container-about">
              <img src="/images/shelter3.jpg" alt="" class="image img-center" />
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div class="row justify-content-center">
          <div class="contact-container">
            <h3 v-if="lang == 'sr'">Mapa</h3>
            <h3 v-else>Map</h3>
          </div>
          
        </div>

        <br>

        <div class="row justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.0244831566233!2d20.33396031532583!3d44.80068967909872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fc5f7eca1fd%3A0x3a616dc7568c9315!2sSur%C4%8Dinska%20225v!5e0!3m2!1ssr!2srs!4v1654777960152!5m2!1ssr!2srs"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
        </div>
        <br />
        <br>
        <div class="row justify-content-center">
          <div class="contact-container">
            <h3 v-if="lang == 'sr'">Kontakt</h3>
            <h3 v-else>Contact</h3>
          </div>
          <br />
          <br />
          <br>
          
        </div>
        <div class="row justify-content-center">
            011-576-237
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Animal",
  data() {
    return {
      lang: "",
      animal: []
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1]
    if (this.lang == "") 
      this.lang = "sr";
  }
};
</script>