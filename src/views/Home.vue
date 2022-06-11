<template>
  <!-- header section strats -->
  <div class="home">
    <div class="container layout_padding3">
      <div class="row ">
        <div class="col ">
          <div class="custom_heading-container layout_padding2 ">
          <h2 >OGLASI</h2>
        </div>
        </div>
        
      </div>

      <div class="row justify-content-center">
        <div
          v-for="pet in lost_pets"
          :key="pet.name"
          class="col-xl-3 col-lg-10 m-4 ads"
        >
          <div class="custom_heading-container">
            <h2>{{ pet.name }}</h2>
          </div>

          <br />

          <p>{{ pet.description }}</p>

          <br />

          <p>{{ pet.phone_number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      lang: "",
      lost_pets: [],
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1];
    if (this.lang == "") this.lang = "sr";

    this.lost_pets = JSON.parse(localStorage.getItem("lost_pets"));

    if(this.lost_pets.length >= 3)
      this.lost_pets = this.lost_pets.slice(
        this.lost_pets.length - 3,
        this.lost_pets.length
      );
      this.lost_pets.reverse();
  },
};
</script>