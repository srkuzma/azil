<template>
    <div class="new-ad">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-10 rounded dark-form text-light">
                <form>
                    <div class="form-group">
                        <label for="pet_name">Ime ljubimca</label>
                        <input type="text" class="form-control" id="pet_name" v-model="pet_name">
                    </div>
                    <div class="form-group">
                        <label for="description">Opis</label>
                        <textarea class="form-control" id="description" rows="10" v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="phone_number">Telefon</label>
                        <input type="tel" class="form-control" id="phone_number" v-model="phone_number">
                    </div>
                    <div class="row">
                        <div class="col text-right">
                            <button class="btn btn-primary" @click="add()">Dodaj</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dark-form {
        background-color: #2c2c2c;
        margin-top: 50px;
        padding: 20px;
    }

    .row {
        margin-right: 0;
    }

    .col {
        padding: 0;
    }
</style>

<script>
    export default {
        name: 'NewAd',
        data() {
            return {
                pet_name: '',
                description: '',
                phone_number: ''
            }
        },
        methods: {
            add() {

            }
        }
    }
</script>
