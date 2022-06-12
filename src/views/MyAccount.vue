<template>
    <section class="contact_section layout_padding">
        <div class="row justify-content-center">
            <div class="col text-center text-dark justify-content-center animal-container">
                <h1 v-if="lang == 'sr'" class="text-center">
                    MOJI OGLASI
                </h1>
                <h1 v-else class="text-center">
                    MY ADS
                </h1>
            </div>
        </div>

        <br>

        <div class="container-fluid layout_padding3">
            <div class="row">
                <div v-for="lost_pet in lost_pets" :key="lost_pet.name" class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="col-12">
                        <div>
                            <h2 class="announcement-title">
                                {{ lost_pet.obj.name }}
                            </h2>
                        </div>

                        <div class="announcement">
                            <div class="row">
                                <div class="col">
                                    <h3>
                                        {{ lost_pet.obj.description }}
                                    </h3>
                                </div>
                            </div>

                            <br>

                            <div class="row">
                                <div class="col">
                                    <h4>
                                        <div class="row">
                                            <div class="col-7 justify-content-start phone-number">
                                                <img src="/images/ad_phone_number.png" alt="">
                                                {{ lost_pet.obj.phone_number }}
                                            </div>
                                            <div class="col-5 text-right">
                                                <form>
                                                    <button v-if="lang == 'sr'" class="more" @click="remove(lost_pet.id)">Obrisi</button>
                                                    <button v-else class="more" @click="remove(lost_pet.id)">Delete</button>
                                                </form>
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

        <div class="row justify-content-center">
            <div class="col text-center text-dark justify-content-center animal-container">
                <h1 v-if="lang == 'sr'" class="text-center">
                    MOJI KOMENTARI
                </h1>
                <h1 v-else class="text-center">
                    MY COMMENTS
                </h1>
            </div>
        </div>

        <br>

        <div class="container-fluid layout_padding3">
            <div v-for="(comment, index) in comments" :key="index" class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 comment-div">
                    <div class="col-12">
                        <div class="comment">
                            <div class="row">
                                <div class="col">
                                    <h3>
                                        {{ comment.text }}
                                    </h3>
                                </div>
                            </div>

                            <br>

                            <div class="row">
                                <div class="col">
                                    <h4>
                                        {{ comment.ad }}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

    img {
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

    .comment-div {
        padding: 0;
    }

    .comment{
        background-color: rgb(246, 246, 246);
        padding: 2% 2%;
        border: 1px solid gray;
        margin-bottom: 35px;
    }
</style>

<script>
    export default {
        name: 'LostPets',
        data() {
            return {
                lost_pets: [],
                lang: '',
                current_user: '',
                comments: []
            }
        },
        created() {
            this.lang = this.$route.fullPath.split('/')[1];
            this.current_user = localStorage.getItem('currentUser');
            let lost_pets = [];
            
            if (localStorage.getItem('lost_pets'))
                lost_pets = JSON.parse(localStorage.getItem('lost_pets'));
            
            for(let i = 0; i < lost_pets.length; i++) {
                if(lost_pets[i].author == this.current_user) {
                    this.lost_pets.push(
                        {
                            obj: lost_pets[i],
                            id: i
                        }
                    )
                }

                let comments = lost_pets[i].comments;

                for(let j = 0; j < comments.length; j++) {
                    if(comments[j].author == this.current_user) {
                        let comment = {
                            ad: lost_pets[i].name,
                            text: comments[j].text
                        }

                        this.comments.push(comment)
                    }
                }
            }
        },
        methods: {
            remove(id) {
                let lost_pets = JSON.parse(localStorage.getItem('lost_pets'));
                lost_pets.splice(id, 1)
                localStorage.setItem('lost_pets', JSON.stringify(lost_pets))
            }
        }
    }
</script>
