<template>
  <div class="hero_area">
    <header class="header_section">
      <div class="container">
        
      </div>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <router-link  class="navbar-brand logo" to="/">
            <img src="/images/logo.png" alt="">
            <span v-if= "lang == 'sr'" class="title">
              Azil Badi
            </span>
            <span v-else class="title">
              Asylum Badi
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
                  <router-link v-if="lang == 'sr'" class="nav-link" to="/">Početna</router-link>
                  <router-link v-else class="nav-link" to="/">Home</router-link>
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
                <a href="">
                  <img src="/images/user.png" alt="">
                  <span id="login">
                    Login
                  </span>
                </a>
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
    
  </div>


  <div>
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
    $route (to, from){
        this.lang = this.$route.fullPath.split("/")[1]
        if (this.lang == "") 
          this.lang = "sr"
    }
  } 
}
</script>
