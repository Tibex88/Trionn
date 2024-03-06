import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/services',
      component: Services
    },
    {
      path: '/work',
      component: Work
    }
  ]
})

export default router