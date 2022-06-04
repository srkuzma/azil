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
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="medicine.html"> Medicine </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="buy.html"> Online Buy </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="news.html"> News </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact us</a>
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

  .title:hover {
    color: deepskyblue !important;
  }

</style>
