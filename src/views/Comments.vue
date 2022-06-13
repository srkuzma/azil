<template>
    <section class="contact_section layout_padding">
        <div class="container-fluid layout_padding3">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 lost-pet-div">
                    <div class="col-12">
                        <div>
                            <h2 class="announcement-title">
                                {{ lost_pet.name }}
                            </h2>
                        </div>

                        <div class="announcement">
                            <div class="row">
                                <div class="col">
                                    <h3>
                                        {{ lost_pet.description }}
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
                                                {{ lost_pet.phone_number }}
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
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 text-right">
                <button v-if="lang == 'sr'" class="pdf" @click="pdf()">Uzmi PDF</button>
                <button v-else class="pdf" @click="pdf()">Get PDF</button>
            </div>
        </div>

        <br>

        <div class="row justify-content-center">
            <div class="col text-center text-dark custom_heading-container justify-content-center">
                <h1 v-if="lang == 'sr'" class="text-center">
                    KOMENTARI
                </h1>
                <h1 v-else class="text-center">
                    COMMENTS
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
                                        {{ comment.author }}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 comment-div">
                <div class="col-12">
                    <div class="comment">
                        <div class="form_contaier">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" id="comment" rows="10" v-model="comment"></textarea>
                                </div>
                                
                                <button v-if="lang == 'sr'" type="submit" class="" @click="add()">Dodaj</button>
                                <button v-else type="submit" class="" @click="add()">Add</button>
                            </form>
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

    .comment-div {
        padding: 0;
    }

    .lost-pet-div {
        padding: 0;
    }

    .comment{
        background-color: rgb(246, 246, 246);
        padding: 2% 2%;
        border: 1px solid gray;
        margin-bottom: 35px;
    }

    img {
        height: 40px;
        width: 40px;
    }

    #comment {
        height: 100px;
    }

    .announcement{
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

    .phone-number {
        padding: 0;
    }

    .pdf {
        display: inline-block;
        background-color: #121313;
        border: 1px solid #121313;
        color: #ffffff;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0;
        font-size: 20px;
    }

    .pdf:hover {
        background-color: white;
        color: #121313;
    }
</style>

<script>
    export default {
        name: 'Comments',
        data() {
            return {
                lost_pet: null,
                lang: '',
                comment: '',
                comments: []
            }
        },
        created() {
            this.lang = this.$route.fullPath.split('/')[1];
            let id = parseInt(this.$route.fullPath.split('/')[3])
            if (localStorage.getItem('lost_pets'))
                this.lost_pet = JSON.parse(localStorage.getItem('lost_pets'))[id]
            this.comments = this.lost_pet.comments
        },
        methods: {
            add() {
                let current_user = localStorage.getItem('currentUser');

                let comment = {
                    author: current_user,
                    text: this.comment
                }

                let id = parseInt(this.$route.fullPath.split('/')[3])
                let lost_pets = JSON.parse(localStorage.getItem('lost_pets'))
                lost_pets[id].comments.push(comment)
                localStorage.setItem('lost_pets', JSON.stringify(lost_pets))
            },
            pdf() {
                let HTML_Width = $(".lost-pet-div").width();
                let HTML_Height = $(".lost-pet-div").height();
                let top_left_margin = 15;
                let PDF_Width = HTML_Width + (top_left_margin * 2);
                let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
                let canvas_image_width = HTML_Width;
                let canvas_image_height = HTML_Height;
                let lost_pet = this.lost_pet
                var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

                html2canvas($(".lost-pet-div")[0]).then(function (canvas) {
                    let imgData = canvas.toDataURL("image/jpeg", 1.0);
                    let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
                    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

                    for (var i = 1; i <= totalPDFPages; i++) { 
                        pdf.addPage(PDF_Width, PDF_Height);
                        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
                    }
                    
                    pdf.save(lost_pet.name + ".pdf");
                });
            }
        },
        
    }
</script>

