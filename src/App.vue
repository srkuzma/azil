<template>
  <div class="hero_area">
    <header class="header_section">
      <div class="container">
        <div class="top_contact-container">
          <div class="tel_container">
            <a href="">
              <img src="/images/telephone-symbol-button.png" alt=""> Call : +01 1234567890
            </a>
          </div>
          <div class="social-container">
            <a href="">
              <img src="/images/fb.png" alt="" class="s-1">
            </a>
            <a href="">
              <img src="/images/twitter.png" alt="" class="s-2">
            </a>
            <a href="">
              <img src="/images/instagram.png" alt="" class="s-3">
            </a>
          </div>
        </div>
      </div>      

      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <router-link v-if="lang == 'sr'" class="navbar-brand logo" to="/sr">
            <img src="/images/logo.png" alt="">
            <span class="title">
              Azil Badi
            </span>
          </router-link>
          <router-link v-else class="navbar-brand logo" to="/en">
            <img src="/images/logo.png" alt="">
            <span class="title">
              Shelter Badi
            </span>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <router-link v-if="lang == 'sr'" class="nav-link" to="/sr">Početna</router-link>
                  <router-link v-else class="nav-link" to="/eb">Home</router-link>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="dropdown-toggle dropdown-button nav-link" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                      <span v-if="lang == 'sr'">Životinje</span>
                      <span v-else>Animals</span>
                    </a>

                    <div class="dropdown-menu dark-dropdown text-warning justify-content-begin" aria-labelledby="dropdownMenuButton">
                        <router-link v-if="lang == 'sr'" class="nav-link" to="/sr/zivotinje/psi">Psi</router-link>
                        <router-link v-else class="nav-link" to="/en/animals/dogs">Dogs</router-link>

                        <router-link v-if="lang == 'sr'" class="nav-link" to="/sr/zivotinje/ptice">Ptice</router-link>
                        <router-link v-else class="nav-link" to="/en/animals/birds">Birds</router-link>

                        <router-link v-if="lang == 'sr'" class="nav-link" to="/sr/zivotinje/macke">Mačke</router-link>
                        <router-link v-else class="nav-link" to="/en/animals/cats">Cats</router-link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link v-if= "lang == 'sr'" class="nav-link" to="/sr/izgubljeni_ljubimci">Izgubljeni ljubimci</router-link>
                  <router-link v-else class="nav-link" to="/en/lost_pets">Lost pets</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if= "lang == 'sr'" class="nav-link" to="/sr/dodaj_oglas">Dodaj oglas</router-link>
                  <router-link v-else class="nav-link" to="/en/new_ad">Add announcement</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if= "lang == 'sr'" class="nav-link" to="/sr/moj_nalog">Moj nalog</router-link>
                  <router-link v-else class="nav-link" to="/en/my_account">Account</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if= "lang == 'sr'" class="nav-link" to="/sr/o_nama">O nama</router-link>
                  <router-link v-else class="nav-link" to="/en/about">About us</router-link>
                </li>
              </ul>
              <form class="form-inline ">
                <input type="search" placeholder="Search">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
              <div class="login_btn-contanier ml-0 ml-lg-5">
                <router-link v-if= "lang == 'sr'" to="/sr/login">
                  <img src="/images/user.png" alt="">
                  <span>
                    Login
                  </span>
                  
                </router-link>
                <router-link v-else to="/en/login">
                  <img src="/images/user.png" alt="">
                  <span>
                    Login
                  </span>
                </router-link>
              </div>
              <div class="flag_btn-contanier ml-0 ml-lg-5">
                <a href="">
                  <img src="/images/flag_rs.png" alt="" @click="change('sr')">
                </a>
                <a href="">
                  <img src="/images/flag_uk.png" alt="" @click="change('en')">
                </a>
              </div>
                
              
            </div>
          </div>

        </nav>
      </div>
    </header>


  <router-view/>

  <section class="container-fluid footer_section">
    <p>
      &copy; Copyright 2022, Dejan Kovačević i Srđan Kuzmanović
      <br>
      Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu
    </p>
  </section>  
  </div>

  
  
  

  
</template>


<style>

  @import './assets/css/bootstrap.css';
  @import './assets/css/responsive.css';
  @import './assets/css/style.css';

  .dark-dropdown {
    background-color: #2c2c2c;
    border-color: #2c2c2c;
  }

</style>

<script>
export default {
  name: 'App',
  data(){
    return {
      lang: ""
    }
  },
  created(){
    this.lang = this.$route.fullPath.split("/")[1];
    if (this.lang == "") 
      this.lang = "sr"
  },
  methods: {
    change(new_lang){
      let route = this.$route.fullPath.split("/");

      function findPair(new_lang, route){
        let curr_lang = route[1];
        let fullPath = route.join("/");
        if (curr_lang == "") {
          curr_lang = "sr"
          fullPath =  "/sr"
        }
        if (new_lang == curr_lang)
          return fullPath
        else {
          let pairs = [
            {sr:"/sr/moj_nalog", en:"/en/my_account"},
            {sr:"/sr/izgubljeni_ljubimci", en:"/en/lost_pets"},
            {sr:"/sr/o_nama", en:"/en/about"},
            {sr:"/sr/dodaj_oglas", en:"/en/new_ad"},
            {sr:"/sr/login", en:"/en/login"},
            {sr:"/sr", en:"/en"}];
          if (curr_lang == "sr"){
            return pairs.find(pair => pair.sr == fullPath).en;
          }
          else {
            return pairs.find(pair => pair.en == fullPath).sr;
          }
        }
      }
      
      let new_route = findPair(new_lang, route)
      this.$router.push(new_route)
    }
  },
  watch:{
    $route (){
        this.lang = this.$route.fullPath.split("/")[1]
        if (this.lang == "") 
          this.lang = "sr"
    }
  } 
}
</script>
