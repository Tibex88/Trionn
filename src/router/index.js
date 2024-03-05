import { createRouter, createWebHistory } from 'vue-router'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Serivces from '../views/Services.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Work
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router