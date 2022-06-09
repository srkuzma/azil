<template>
  <div class="animals">
    <section class="contact_section layout_padding2">
      <div class="container layout_padding3">
        <div class="row justify-content-center">
          <div class="animal-container">
            <h1 class="uppercase">{{animalTypePlural}}</h1>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div class="row justify-content-center padd">
          <span class="padr">Sortiranje:</span>

          <select
            name=""
            id=""
            @change="change()"
            class="margr"
            v-model="sortiranje"
          >

            <option v-if="lang == 'sr'" value="n">Naziv</option>
            <option v-else value="n">Name</option>
            <option v-if="lang == 'sr'" value="g">Godine</option>
            <option v-else value="g">Age</option>
          </select>

          <button class="btn my-2 my-sm-0 magnifier" @click="sort()"></button>
        </div>

        <div class="row justify-content-center padd">
          <span class="padr">Pretraga:</span>
          <select name="" id="" v-model="pretraga">
            <option v-if="lang == 'sr'" value="n">Naziv</option>
            <option v-else value="n">Name</option>
            <option v-if="lang == 'sr'" value="g">Godine</option>
            <option v-else value="g">Age</option>
          </select>
        </div>

        <div class="row justify-content-center">
          <div class="custom_nav-container">
            <div class="form-inline search">
              <input type="search" :placeholder = "(lang == 'sr')? 'Pretraži': 'Search'" v-model="input" />
              <button
                class="btn my-2 my-sm-0 nav_search-btn"
                @click="search()"
              ></button>
            </div>
          </div>
        </div>

        <div
          v-if="stanje == 'sortName'"
          class="row images justify-content-center"
        >
          <div
            v-for="animal in animalsName"
            :key="animal.ime"
            class="col-md-8 col-xs-10 grid"
          >
            <div class="image-container">
              <img :src="animal.src" alt="" class="image img-center" @click="go(animal.ime)" />
              <div class="middle">
                <div class="text">{{ animal.ime }}</div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="stanje == 'sortAge'"
          class="row images justify-content-center"
        >
          <div
            v-for="animal in animalsAge"
            :key="animal.ime"
            class="col-md-8 col-xs-10 grid"
          >
            <div class="image-container">
              <img :src="animal.src" alt="" class="image img-center" @click="go(animal.ime)">
              <div class="middle">
                <div class="text">{{ animal.ime }}</div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="stanje == 'searchName'"
          class="row images justify-content-center"
        >
          <div
            v-for="animal in animalsFilteredName"
            :key="animal.ime"
            class="col-md-8 col-xs-10 grid"
          >
            <div class="image-container">
              <img :src="animal.src" alt="" class="image img-center" @click="go(animal.ime)">
              <div class="middle">
                <div class="text">{{ animal.ime }}</div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="stanje == 'searchAge'"
          class="row images justify-content-center"
        >
          <div
            v-for="animal in animalsFilteredAge"
            :key="animal.ime"
            class="col-md-8 col-xs-12 grid"
          >
            <div class="image-container">
              <img :src="animal.src" alt="" class="image img-center" @click="go(animal.ime)">
              <div class="middle">
                <div class="text">{{ animal.ime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import animals from "../data/animals.js";
export default {
  name: "Animals",
  data() {
    return {
      animals: [],
      animalsName: [],
      animalsAge: [],
      animalsFilteredName: [],
      animalsFilteredAge: [],
      sortiranje: "n",
      pretraga: "n",
      input: "",
      lang: "",
      stanje: "sortName",
      animalType: "",
      animalTypePlural: ""
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1]
    if (this.lang == "") 
      this.lang = "sr";
    let route = this.$route.fullPath.split("/")
    this.animalTypePlural = route[route.length - 1];

    if (this.animalTypePlural == "psi" || this.animalTypePlural == "dogs")
      this.animalType = "pas";
    if (this.animalTypePlural == "macke" || this.animalTypePlural == "cats"){
      this.animalType = "macka";
      this.animalTypePlural = "mačke";
    }
      
    if (this.animalTypePlural == "ptice" || this.animalTypePlural == "birds")
      this.animalType = "ptica";

    this.animalsName = animals
      .filter((animal) => animal.vrsta == this.animalType)
      .sort(function (a, b) {
        return a.ime.localeCompare(b.ime);
      });
    this.animalsAge = animals
      .filter((animal) => animal.vrsta == this.animalType)
      .sort(function (a, b) {
        return a.godine - b.godine;
      });

    this.animalsFilteredName = this.animalsName;
    this.animalsFilteredAge = this.animalsAge;
  },
  methods: {
    search() {
      if (this.pretraga == "n") {
        this.stanje = "searchName";
        this.animalsFilteredName = this.animalsName.filter((animal) =>
          animal.ime.includes(this.input)
        );
      } else {
        this.stanje = "searchAge";
        this.animalsFilteredAge = this.animalsAge.filter(
          (animal) => animal.godine == this.input
        );
      }
    },
    sort() {
      if (this.sortiranje == "n") {
        this.stanje = "sortName";
      } 
      else {
        this.stanje = "sortAge";
      }
    },
    go(name){
      let route = this.$route.fullPath;
      this.$router.push(route + "/" + name)
    }
  },
  watch: {
    $route() {
        this.$router.go(0);
    }
  },
};
</script>