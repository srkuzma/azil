<template>
  <!-- header section strats -->
  <div class="home">
    <div class="container-fluid layout_padding3">
      <div class="row">
        <div class="col">
          <div class="custom_heading-container layout_padding2">
            <h2>BLOG</h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-5 col-12 contact_section blog m-4" id="news-form">
          <div class="custom_heading-container">
            <h2 v-if="lang == 'sr'">Život zabave turista nije za lavove</h2>
            <h2 v-else>The life of tourist entertainment is not for lions</h2>
          </div>
          <br />
          <img src="/images/lav.jpg" alt="" class="m-2">
          <p  v-if="lang == 'sr'">Novi trendovi šetanja lavova i maženja njihovih mladunaca uzrokuje im životni vek patnje. Učešćem u ovim atrakcijama turisti pomažu u financiranju njihovog neprekidnog mučenja.Lavovi su neverovatne životinje, veličanstvene i smrtonosne – i mogu razumjeti zašto se turisti koji nisu dovoljno informirani žele zbližiti s njima. Tragična je činjenica da je njihov veliki interes za pripitomljavanjem divljih životinja pokrenuo potražnju za ovom surovom industrijom. U divljini možete opaziti koje je njihovo pravo ponašanje i svedočiti šta je to što čini lavove kraljevima džungle koji nama inspirišu strahopoštovanje.</p>
          <p  v-else>New trends in lions walking and cuddling their cubs are causing them a lifetime of suffering. By participating in these attractions, tourists help finance their constant torture. Lions are amazing animals, magnificent and deadly - and I can understand why tourists who are not well informed want to get closer to them. It is a tragic fact that their great interest in domesticating wild animals has triggered the demand for this cruel industry. In the wild, you can see what their real behavior is and witness what makes lions kings of the jungle that inspire awe in us.</p>

        </div>

        <div class="col-xl-5 col-12 contact_section blog m-4" id="news-form">
          <div class="custom_heading-container">
            <h2 v-if="lang == 'sr'">Važnosti zaštite afričkih planinskih gorila</h2>
            <h2 v-else>The importance of protecting African mountain gorillas</h2>
          </div>
          <br />
          <img src="/images/gorila.jpg" alt="" class="m-2">
          <p  v-if="lang == 'sr'">Planinske gorile koje su popularizovale afričke vulkanske padine imaju nekoliko prirodnih predatora, ali ipak su postale najugroženiji tip gorila zbog štetnih ljudskih aktivnosti krivolova, građanskog rata i uništavanja njihovog prirodnog staništa. Trenutno je njihovo stanište ograničeno na zaštičene nacionalne parkove u dva regiona Afrike. Jedna grupa gorila živi u Nacionalnom parku Bwindi Impenetrable u Ugandi, a druga grupa se prostire na tri nacionalna parka u planinskom području Virungas u Demokratskoj Republici Kongo, Ugandi i Ruandi.</p>
          <p  v-else>Mountain gorillas that popularized African volcanic slopes have several natural predators, but they have nevertheless become the most endangered type of gorilla due to harmful human poaching activities, civil war and destruction of their natural habitat. Currently, their habitat is limited to protected national parks in two regions of Africa. One group of gorillas lives in Bwindi Impenetrable National Park in Uganda, and the other group covers three national parks in the Virungas Mountains in the Democratic Republic of Congo, Uganda and Rwanda.</p>

        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="custom_heading-container layout_padding2">
            <h2 v-if="lang == 'sr'">NOVE ŽIVOTINJE</h2>
             <h2 v-else>NEW ANIMALS</h2>
          </div>
        </div>
      </div>

      <div
        class="row justify-content-center"
      >
        <div
          v-for="animal in newAnimals"
          :key="animal.ime"
          class="col-xl-3 col-sm-10  m-2"
        >
          <div class="image-container">
            <img
              :src="animal.src" @click="lang == 'sr' ? go(animal.sr):go(animal.en)"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="custom_heading-container layout_padding2">
            <h2 v-if="lang == 'sr'">NOVI OGLASI</h2>
             <h2 v-else>NEW ANNOUNCEMENTS</h2>
          </div>
        </div>
      </div>

      <div class="container-fluid layout_padding3">
        <div class="row">
          <div
            v-for="(pet, id) in pets"
            :key="pet.name"
            class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12"
          >
            <div class="col-12">
              <div>
                <h2 class="announcement-title">
                  {{ pet.name }}
                </h2>
              </div>

              <div class="announcement">
                <div class="row">
                  <div class="col">
                    <h3>
                      {{ pet.description }}
                    </h3>
                  </div>
                </div>

                <br />

                <div class="row">
                  <div class="col">
                    <h4>
                      <div class="row">
                        <div class="col-7 justify-content-start phone-number">
                          <img src="/images/ad_phone_number.png" alt="">
                          {{ pet.phone_number }}
                        </div>
                        <div class="col-5 text-right">
                          <button
                            v-if="lang == 'sr'"
                            class="more"
                            @click="more(id)"
                          >
                            Komentari
                          </button>
                          <button v-else class="more" @click="more(id)">
                            Comments
                          </button>
                        </div>
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin: auto;
}

.announcement {
  background-color: rgb(246, 246, 246);
  padding: 2% 2%;
  border: 1px solid gray;
  margin-bottom: 35px;
}

.announcement-title {
  background-color: #57a1cf;
  padding: 2% 4%;
  border: 1px solid gray;
  margin: 0;
  color: white;
  width: 40%;
}

.announcement img {
  height: 40px;
  width: 40px;
}

.more {
  display: inline-block;
  background-color: #121313;
  border: 1px solid #121313;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0;
  font-size: 20px;
}

.more:hover {
  background-color: white;
  color: #121313;
}

.phone-number {
  padding: 0;
}

.container {
  padding: 0 !important;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      lang: "",
      pets: [],
      newAnimals: []
    };
  },
  created() {
    this.lang = this.$route.fullPath.split("/")[1];
    this.newAnimals = [
      {src:"/images/fazan.jpg" , sr:"/sr/zivotinje/ptice/Spira", en: "/en/animals/birds/Spira"},
      {src:"/images/labrador.jpg", sr:"/sr/zivotinje/psi/Doni", en: "/en/animals/dogs/Doni"},
      {src:"/images/orao.jpg" , sr:"/sr/zivotinje/ptice/Beli", en: "/en/animals/birds/Beli"}
    ]
    
    if (this.lang == "") this.lang = "sr";

    if (localStorage.getItem("lost_pets"))
      this.pets = JSON.parse(localStorage.getItem("lost_pets"));

    if (this.pets.length >= 3)
      this.pets = this.pets.slice(this.pets.length - 3, this.pets.length);
    this.pets.reverse();
  },
  methods: {
    more(id) {
      if (this.lang == "sr") {
        this.$router.push("komentari/" + id);
      } else {
        this.$router.push("comments/" + id);
      }
    },
    go(path){
      this.$router.push(path)
    }
  },
};
</script>