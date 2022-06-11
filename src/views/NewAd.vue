<template>
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
                            
                            <button v-if="lang == 'sr'" type="submit" class="" @click="add()">Dodaj</button>
                            <button v-else type="submit" class="" @click="add()">Add</button>
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
                current_user: '',
                pet_name: '',
                description: '',
                phone_number: '',
                error: '',
                lost_pets: []
            }
        },
        created() {
            this.lang = this.$route.fullPath.split('/')[1];
            this.current_user = localStorage.getItem('currentUser');
            this.error = localStorage.getItem('add_error');

            if(this.error == '') {
                this.error = ''
            }

            if(localStorage.getItem('lost_pets') == null) {
                localStorage.setItem('lost_pets', JSON.stringify([]));
            }
            else{
                this.lost_pets = JSON.parse(localStorage.getItem('lost_pets'));
            }
        },
        methods: {
            add() {
                if(this.current_user != '') {
                    let lost_pet = {
                        name: this.pet_name,
                        description: this.description,
                        phone_number: this.phone_number,
                        comments: [],
                        author: this.current_user
                    }

                    this.lost_pets.push(lost_pet);
                    localStorage.setItem('lost_pets', JSON.stringify(this.lost_pets));
                    this.error = '';
                    localStorage.setItem('add_error', '');

                    if(this.lang == 'sr') {
                        this.$router.push('/sr/o_nama');
                    }
                    else {
                        this.$router.push('/en/about');
                    }
                }
                else {
                    this.error = this.lang == 'sr' ? 'Niste ulogovani!' : 'You are not logged in!';
                    localStorage.setItem('add_error', this.error);
                }
            }
        }
    }
</script>
