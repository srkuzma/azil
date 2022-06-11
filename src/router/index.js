import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animals from '../views/Animals.vue'
import Animal from '../views/Animal.vue'
import LostPets from '../views/LostPets.vue'
import NewAd from '../views/NewAd.vue'
import MyAccount from '../views/MyAccount.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import Comments from '../views/Comments.vue'

// import HomeLang from '../views/HomeLang.vue'

const routes = [
  {
    path: '/en',
    name: 'home_en',
    component: Home
  },
  {
    path: '/sr',
    name: 'home_sr',
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sr/zivotinje/:zivotinja',
    name: 'animals_sr',
    component: Animals
  },
  {
    path: '/sr/zivotinje/:zivotinja/:ime',
    name: 'animal_sr',
    component: Animal
  },
  {
    path: '/sr/izgubljeni_ljubimci',
    name: 'lost_pets_sr',
    component: LostPets
  },
  {
    path: '/sr/dodaj_oglas',
    name: 'new_ad_sr',
    component: NewAd
  },
  {
    path: '/sr/moj_nalog',
    name: 'my_account_sr',
    component: MyAccount
  },
  {
    path: '/sr/o_nama',
    name: 'about_sr',
    component: AboutView
  },
  {
    path: '/en/animals/:animal',
    name: 'animals_en',
    component: Animals
  },
  {
    path: '/en/animals/:animal/:name',
    name: 'animal_en',
    component: Animal
  },
  {
    path: '/en/lost_pets',
    name: 'lost_pets_en',
    component: LostPets
  },
  {
    path: '/en/new_ad',
    name: 'new_ad_en',
    component: NewAd
  },
  {
    path: '/en/my_account',
    name: 'my_account_en',
    component: MyAccount
  },
  {
    path: '/en/about',
    name: 'about_en',
    component: AboutView
  },
  {
    path: '/sr/prijava',
    name: 'login_sr',
    component: LoginView
  },
  {
    path: '/en/login',
    name: 'login_en',
    component: LoginView
  },
  {
    path: '/sr/komentari/:lost_pet_id',
    name: 'comments_sr',
    component: Comments
  },
  {
    path: '/en/comments/:lost_pet_id',
    name: 'comments_en',
    component: Comments
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
