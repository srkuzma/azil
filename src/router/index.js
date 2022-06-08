import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DogsView from '../views/DogsView.vue'
import CatsView from '../views/CatsView.vue'
import BirdsView from '../views/BirdsView.vue'
import LostPets from '../views/LostPets.vue'
import NewAd from '../views/NewAd.vue'
import MyAccount from '../views/MyAccount.vue'
import AboutView from '../views/AboutView.vue'
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
    path: '/sr/zivotinje/psi',
    name: 'dogs_sr',
    component: DogsView
  },
  {
    path: '/sr/zivotinje/ptice',
    name: 'birds_sr',
    component: BirdsView
  },
  {
    path: '/sr/zivotinje/macke',
    name: 'cats_sr',
    component: CatsView
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
    path: '/en/animals/dogs',
    name: 'dogs_en',
    component: DogsView
  },
  {
    path: '/en/animals/birds',
    name: 'birds_en',
    component: BirdsView
  },
  {
    path: '/en/animals/cats',
    name: 'cats_en',
    component: CatsView
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
    name: 'my_account',
    component: MyAccount
  },
  {
    path: '/en/about',
    name: 'about_en',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
