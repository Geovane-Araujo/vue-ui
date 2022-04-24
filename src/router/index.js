import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Drag' }
  },
  {
    path: '/konosuba',
    name: 'Konosuba',
    component: () => import('../views/componentes/menuone/KonosubaUi.vue')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import('../views/componentes/drag/Drag.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
