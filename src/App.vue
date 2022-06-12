<template>
  <title>Azil Badi {{ pageName }}</title>
  <div class="hero_area">
    <div id="content">
      <header class="header_section">
        <div class="container">
          <div class="top_contact-container">
            <div class="tel_container">
              <a>
                <img src="/images/telephone-symbol-button.png" alt="" />
                011-576-237
              </a>
            </div>
            <div class="social-container">
              <a href="">
                <img src="/images/fb.png" alt="" class="s-1" />
              </a>
              <a href="">
                <img src="/images/twitter.png" alt="" class="s-2" />
              </a>
              <a href="">
                <img src="/images/instagram.png" alt="" class="s-3" />
              </a>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
            <router-link v-if="lang == 'sr'" class="navbar-brand logo" to="/sr">
              <img src="/images/logo.png" alt="" />
              <span class="title"> Azil Badi </span>
            </router-link>
            <router-link v-else class="navbar-brand logo" to="/en">
              <img src="/images/logo.png" alt="" />
              <span class="title"> Shelter Badi </span>
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div
                class="
                  d-flex
                  flex-column flex-lg-row
                  align-items-center
                  w-100
                  justify-content-between
                "
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <router-link v-if="lang == 'sr'" class="nav-link" to="/sr"
                      >Početna</router-link
                    >
                    <router-link v-else class="nav-link" to="/en"
                      >Home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <div class="dropdown">
                      <a
                        class="dropdown-toggle dropdown-button nav-link"
                        role="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="#"
                      >
                        <span v-if="lang == 'sr'">Životinje</span>
                        <span v-else>Animals</span>
                      </a>

                      <div
                        class="
                          dropdown-menu
                          dark-dropdown
                          text-warning
                          justify-content-begin
                        "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <router-link
                          v-if="lang == 'sr'"
                          class="nav-link"
                          to="/sr/zivotinje/psi"
                          >Psi</router-link
                        >
                        <router-link
                          v-else
                          class="nav-link"
                          to="/en/animals/dogs"
                          >Dogs</router-link
                        >

                        <router-link
                          v-if="lang == 'sr'"
                          class="nav-link"
                          to="/sr/zivotinje/ptice"
                          >Ptice</router-link
                        >
                        <router-link
                          v-else
                          class="nav-link"
                          to="/en/animals/birds"
                          >Birds</router-link
                        >

                        <router-link
                          v-if="lang == 'sr'"
                          class="nav-link"
                          to="/sr/zivotinje/macke"
                          >Mačke</router-link
                        >
                        <router-link
                          v-else
                          class="nav-link"
                          to="/en/animals/cats"
                          >Cats</router-link
                        >
                      </div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="lang == 'sr'"
                      class="nav-link"
                      to="/sr/izgubljeni_ljubimci"
                      >Izgubljeni ljubimci</router-link
                    >
                    <router-link v-else class="nav-link" to="/en/lost_pets"
                      >Lost pets</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="lang == 'sr'"
                      class="nav-link"
                      to="/sr/dodaj_oglas"
                      >Dodaj oglas</router-link
                    >
                    <router-link v-else class="nav-link" to="/en/new_ad"
                      >Add announcement</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="lang == 'sr'"
                      class="nav-link"
                      to="/sr/moj_nalog"
                      >Moj nalog</router-link
                    >
                    <router-link v-else class="nav-link" to="/en/my_account"
                      >Account</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="lang == 'sr'"
                      class="nav-link"
                      to="/sr/o_nama"
                      >O nama</router-link
                    >
                    <router-link v-else class="nav-link" to="/en/about"
                      >About us</router-link
                    >
                  </li>
                </ul>

                <div class="login_btn-contanier">
                  <span v-if="this.user == ''">
                    <router-link v-if="lang == 'sr'" to="/sr/prijava">
                      <img src="/images/user.png" alt="" />
                      <span> Prijava </span>
                    </router-link>
                    <router-link v-else to="/en/login">
                      <img src="/images/user.png" alt="" />
                      <span> Login </span>
                    </router-link>
                  </span>

                  <a v-else class="logout" @click="logout()" href="#">
                    <img src="/images/user.png" alt="" />
                    <span v-if="lang == 'sr'"> Odjava </span>

                    <span v-else> Logout </span>
                  </a>
                </div>
                <div class="flag_btn-contanier">
                  <a href="">
                    <img
                      src="/images/flag_rs.png"
                      alt=""
                      @click="change('sr')"
                    />
                  </a>
                  <a href="">
                    <img
                      src="/images/flag_uk.png"
                      alt=""
                      @click="change('en')"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div id="breadcrumbs" class="m-2 font-weight-bold">
        {{ route }}
      </div>

      <router-view />
    </div>

    <section class="container-fluid footer_section">
      <p v-if="lang == 'sr'">
        &copy; Copyright 2022, Dejan Kovačević i Srđan Kuzmanović
        <br />
        Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta
        u Beogradu
      </p>
      <p v-else>
        &copy; Copyright 2022, Dejan Kovačević and Srđan Kuzmanović
        <br />
        School of Electrical engineering, University of Belgrade
      </p>
    </section>
  </div>
</template>


<style>
@import "./assets/css/bootstrap.css";
@import "./assets/css/responsive.css";
@import "./assets/css/style.css";

.dark-dropdown {
  background-color: #2c2c2c;
  border-color: #2c2c2c;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      lang: "",
      user: "",
      animals: [],
      route: "",
      pageName: "",
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1];
    if (this.lang == "") this.lang = "sr";
    let route = this.$route.fullPath.split("/");
    route = route.slice(2, route.length);

    this.route = route.join(">");

    if (localStorage.getItem("currentUser") == null) {
      localStorage.setItem("currentUser", "");
    }

    this.user = localStorage.getItem("currentUser")
      ? localStorage.getItem("currentUser")
      : "";
  },
  methods: {
    formatStr(name){
       function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      name = capitalizeFirstLetter(name);
      name = name.replace("_", " ");
      if (name == "Zivotinje") name = "Životinje";
      if (name == "Macke") name = "Mačke";
      return name;
    },

    getPageName(route) {
      let name = route[route.length - 1];
      if (route.length > 2){
        return this.formatStr(name);
      }
      else {
        return "";
      }
    },
    logout() {
      localStorage.setItem("currentUser", "");
      this.user = "";
    },
    change(new_lang) {
      let route = this.$route.fullPath.split("/");

      this.pageName = this.getPageName(route);
      console.log(route);

      let new_route = findPair(new_lang, route);

      for (let i = 2; i < route.length; i++) {
        route[i] = this.formatStr(route[i]);
      }

      this.route = route.join(">");

      function findPair(new_lang, route) {
        let curr_lang = route[1];
        let fullPath = route.join("/");

        if (curr_lang == "") {
          curr_lang = "sr";
          fullPath = "/sr";
        }
        if (new_lang == curr_lang) return fullPath;
        else {
          let pairs = [
            { sr: "/sr/moj_nalog", en: "/en/my_account" },
            { sr: "/sr/izgubljeni_ljubimci", en: "/en/lost_pets" },
            { sr: "/sr/o_nama", en: "/en/about" },
            { sr: "/sr/dodaj_oglas", en: "/en/new_ad" },
            { sr: "/sr/prijava", en: "/en/login" },
            { sr: "/sr/zivotinje/macke", en: "/en/animals/cats" },
            { sr: "/sr/zivotinje/psi", en: "/en/animals/dogs" },
            { sr: "/sr/zivotinje/ptice", en: "/en/animals/birds" },
            { sr: "/sr", en: "/en" },
            { sr: "/sr/komentari", en: "/en/comments" },
          ];
          if (curr_lang == "sr") {
            if (route.length == 5){
              let name = route[4];
              let fullPath = route.slice(0, route.length - 1).join("/");
              return pairs.find((pair) => pair.sr == fullPath).en +"/"+ name;
            }
            return pairs.find((pair) => pair.sr == fullPath).en;
          } else {
            if (route.length == 5){
              let name = route[4];
              let fullPath = route.slice(0, route.length - 1).join("/");
              return pairs.find((pair) => pair.en == fullPath).sr +"/"+ name;
            }
            return pairs.find((pair) => pair.en == fullPath).sr;
          }
        }
      }

      this.$router.push(new_route);
    },
  },
  watch: {
    $route() {
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      function formatStr(name) {
        name = capitalizeFirstLetter(name);
        name = name.replace("_", " ");
        if (name == "Zivotinje") name = "Životinje";
        if (name == "Macke") name = "Mačke";
        return name;
      }
      
      let route = this.$route.fullPath.split("/");
      this.pageName = this.getPageName(route);
      for (let i = 2; i < route.length; i++) {
        route[i] = formatStr(route[i]);
      }
      route = route.slice(2, route.length);
      this.route = route.join(">");
      this.lang = this.$route.fullPath.split("/")[1];
      if (this.lang == "") this.lang = "sr";
      this.user = localStorage.getItem("currentUser")
        ? localStorage.getItem("currentUser")
        : "";
    },
  },
};
</script>
