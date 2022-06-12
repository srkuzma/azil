<template>
  <div class="animal">
    <div class="container layout_padding2">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-md-6 col-lg-4">
          <div class="image-container">
            <img :src="animal.src" alt="" class="img-center" />
          </div>
        </div>
        <div class="col-11 col-sm-10 col-md-6 col-lg-8">
          <div class="custom_heading-container">
            <b
              ><h2>{{ animal.ime }}, {{ animal.godine }}</h2></b
            >
          </div>
          <br />
          <p v-if="lang == 'sr'">{{ animal.opis }}</p>
          <p v-else>{{ animal.opisEn }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <h2 class="video-example-heading">Galerija</h2>
    <div class="m-2">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide v-for="image in images" :key="image">
          <img :src="image" alt="Sample 1" />
        </SplideSlide>
      </Splide>
    </div>
    <br>
    <br>
    <h2 class="video-example-heading">Video</h2>
    <div class="m-2">
      <Splide
        aria-labelledby="video-example-heading"
        :options="options"
        :extensions="extensions"
      >
        <SplideSlide v-for="video in videos" :key="video.video" :data-splide-youtube="video.video">
          <img :src=video.thumb />
        </SplideSlide>
      </Splide> 
    </div>
  </div>
</template>

<style scoped>
@import "@splidejs/vue-splide/css/skyblue";

body {
  font-family: "Poppins", sans-serif;
  padding: 5rem 0;
}
h1 {
  text-align: center;
}
hr {
  width: 200px;
  max-width: 50%;
  margin: 4rem auto;
}
button {
  font-family: inherit;
}
.wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.splide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.splide--nav {
  margin-top: 1rem;
}
</style>


<script>
import animals from "../data/animals.js";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { Video } from "@splidejs/splide-extension-video";
import { defineComponent } from "vue";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
export default {
  name: "Animal",
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const videos = [ 
      {video:'https://www.youtube.com/watch?v=6kGB2yVHKL0', thumb: "/images/thumb1.jpg"},
      {video:'https://www.youtube.com/watch?v=YQDDm9HLkV4',thumb: "/images/thumb2.jpg"},
      {video:'https://www.youtube.com/watch?v=pqvbv2z_fEI',thumb: "/images/thumb3.jpg"},
      {video:'https://www.youtube.com/watch?v=MTRsov46jmk',thumb: "/images/thumb4.jpg"} ];
    const options = {
      rewind     : true,
      heightRatio: 0.5625,
    };
    return {
      videos,
      options,
      extensions: { Video },
    }
  },
  data() {
    return {
      lang: "",
      animal: [],
      images: [],
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1];
    if (this.lang == "") this.lang = "sr";
    let route = this.$route.fullPath.split("/");
    let name = route[route.length - 1];
    this.animal = animals.find((animal) => animal.ime == name);
    this.images = [
      "/images/bernandinac.jfif",
      "/images/labrador.jpg",
      "/images/rotvajler.jpg",
      "/images/buldog.jpg",
      "/images/sijamska.jpg",
      "/images/persijska.jpg",
      "/images/ruska.jpg",
      "/images/macow.jpg",
      "/images/fazan.jpg",
      "/images/orao.jpg",
      "/images/kivi.jpg",
    ];

  },
  methods: {},
  watch: {
    $route() {
      //this.$router.go(0);
    },
  },
};
</script>