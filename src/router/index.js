import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SellFormView from '../views/SellFormView.vue'
import DetailsView from '@/views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sell-form',
      name: 'sell-form',
      component: SellFormView
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsView
    }
  ]
})

export default router
