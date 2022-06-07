import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DogsView from '../views/DogsView.vue'
import CatsView from '../views/CatsView.vue'
import BirdsView from '../views/BirdsView.vue'
import LostPets from '../views/LostPets.vue'
import NewAd from '../views/NewAd.vue'
import MyAccount from '../views/MyAccount.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/zivotinje/psi',
    name: 'dogs',
    component: DogsView
  },
  {
    path: '/zivotinje/ptice',
    name: 'birds',
    component: BirdsView
  },
  {
    path: '/zivotinje/macke',
    name: 'cats',
    component: CatsView
  },
  {
    path: '/izgubljeni_ljubimci',
    name: 'lost_pets',
    component: LostPets
  },
  {
    path: '/dodaj_oglas',
    name: 'new_ad',
    component: NewAd
  },
  {
    path: '/moj_nalog',
    name: 'my_account',
    component: MyAccount
  },
  {
    path: '/o_nama',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
