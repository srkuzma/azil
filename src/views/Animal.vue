<template>
  <div class="animal">
    <div class="container layout_padding2 ">
        <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-6 col-lg-4">
                <div class="image-container">
                <img :src="animal.src" alt="" class=" img-center">
                </div>
            </div>
            <div class="col-11 col-sm-10 col-md-6 col-lg-8">
                 <div class="custom_heading-container">
                <b><h2>{{animal.ime}}, {{animal.godine}}</h2></b>
                </div>
                <br>
                <p>{{animal.opis}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import animals from "../data/animals.js";
export default {
  name: "Animal",
  data() {
    return {
      lang: "",
      animal: []
    };
  },
  created() {
      console.log("HERE")
    this.lang = this.$route.fullPath.split("/")[1]
    if (this.lang == "") 
      this.lang = "sr";
    let route = this.$route.fullPath.split("/")
    let name = route[route.length - 1]
    console.log(name);
    this.animal = animals.find(animal => animal.ime == name); 
    
  },
  methods: {
    
  },
  watch: {
    $route() {
        this.$router.go(0);
    }
  },
};
</script>