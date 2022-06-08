<template>
      <!-- contact section -->
    <section class="contact_section layout_padding">
        <div class="container layout_padding3">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10" id="login-form">
                <div class="custom_heading-container">
                    <h2 v-if="lang == 'sr'">
                        DODAJ OGLAS
                    </h2>
                    <h2 v-else>
                        ADD ANNOUNCEMENT
                    </h2>
                </div>

                <br>
                
                <div class="form_contaier">
                <form>
                <div class="form-group">
                    <label v-if="lang == 'sr'" for="pet_name">Ime ljubimca</label>
                    <label v-else for="pet_name">Pet name</label>
                    <input type="text" class="form-control" id="pet_name" v-model="pet_name">
                </div>
                <div class="form-group">
                    <label v-if="lang == 'sr'" for="description">Opis</label>
                    <label v-else for="description">Description</label>
                    <textarea class="form-control" id="description" rows="10" v-model="description"></textarea>
                </div>
                <div class="form-group">
                    <label v-if="lang == 'sr'" for="phone_number">Telefon</label>
                    <label v-else for="phone_number">Phone number</label>
                    <input type="tel" class="form-control" id="phone_number" v-model="phone_number">
                </div>

                <div class="error">{{error}}</div>
                
                <button type="submit" class="" @click="login()">Dodaj</button>
                </form>
            </div>
            </div>
            
        </div>
        </div>
    </section>
</template>

<style scoped>
    .error {
        color: red
    }
</style>

<script>
    export default {
        name: 'NewAd',
        data() {
            return {
                lang: '',
                pet_name: '',
                description: '',
                phone_number: ''
            }
        },
        created() {
            this.lang = this.$route.fullPath.split('/')[1];
        },
        methods: {
            add() {

            }
        }
    }
</script>
