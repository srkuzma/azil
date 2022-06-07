<template>
  <div class="hero_area">
    <header class="header_section">
      <div class="container">
        
      </div>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <router-link  class="navbar-brand logo" to="/">
            <img src="images/logo.png" alt="">
            <span class="title">
              Azil Badi
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
                  <router-link class="nav-link" to="/">Pocetna</router-link>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="dropdown-toggle dropdown-button nav-link" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                      Zivotinje
                    </a>

                    <div class="dropdown-menu dark-dropdown text-warning justify-content-begin" aria-labelledby="dropdownMenuButton">
                        <router-link class="nav-link" to="/zivotinje/psi">Psi</router-link>
                        <router-link class="nav-link" to="/zivotinje/ptice">Ptice</router-link>
                        <router-link class="nav-link" to="/zivotinje/macke">Macke</router-link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/izgubljeni_ljubimci">Izgubljeni ljubimci</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/dodaj_oglas">Dodaj oglas</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/moj_nalog">Moj nalog</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/o_nama">O nama</router-link>
                </li>
              </ul>
              <form class="form-inline ">
                <input type="search" placeholder="Search">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
              <div class="login_btn-contanier ml-0 ml-lg-5">
                <a href="">
                  <img src="images/user.png" alt="">
                  <span>
                    Login
                  </span>
                </a>
              </div>
              <div class="flag_btn-contanier ml-0 ml-lg-5">
                <a href="">
                  <img src="images/flag_rs.png" alt="">
                </a>
                <a href="">
                  <img src="images/flag_uk.png" alt="">
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
  @import './assets/css/style.scss';

  .dark-dropdown {
    background-color: #2c2c2c;
    border-color: #2c2c2c;
  }

</style>
