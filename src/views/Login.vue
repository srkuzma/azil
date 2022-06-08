<template>
    <!-- contact section -->
  <section class="contact_section layout_padding">
    <!-- <div class="container">
      <div class="row justify-content-center">
        
      </div>
    </div> -->
    <div class="container layout_padding3">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10" id="login-form">
            <div class="custom_heading-container " >
                <h1>
                    Login
                </h1>
            </div>

            <br>
            
            <div class="form_contaier">
            <form>
              <div class="form-group">
                <label for="exampleInputName1">Username</label>
                <input type="text" class="form-control" id="exampleInputName1" v-model="username">
              </div>
              <div class="form-group">
                <label for="exampleInputName1">Password</label>
                <input type="password" class="form-control" id="exampleInputName1" v-model="password">
              </div>

             <div class="error">{{error}}</div>
              
              <button type="submit" class="" @click="login()">Confirm</button>
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

import allUsers from '../data/users.js'

export default {
    name: 'Login',
    data(){
        return {
            users: allUsers,
            username: "",
            password: "",
            lang: ""
        }
    },
    created(){
        this.lang = this.$route.fullPath.split("/")[1]
        if (this.lang == "") 
          this.lang = "sr"
        this.error = localStorage.getItem("error");
        if (!this.error)
            this.error = ""
        console.log(this.users)
    },
    methods: {
        login(){
            let user = this.users.find(user=> user.username == this.username && user.password == this.password);
            if (user) {
                localStorage.setItem("currentUser", user.username);
                this.$router.push("/" + this.lang);
                this.error = "";
                localStorage.setItem("error", this.error);
            }
            else {
                this.error = (this.lang == "sr") ? "Neispravni podaci" : "Incorrect data";
                localStorage.setItem("error", this.error);
            }
        }
    }
}
</script>