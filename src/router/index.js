import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

  
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/:tipo/:modalidade',
        name: 'curso',
        props: true,
        component: () => import('../views/CursoView.vue')
      }
    ]
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
