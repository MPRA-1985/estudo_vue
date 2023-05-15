import { createRouter, createWebHistory } from 'vue-router'
import CurtaMediaView from '../views/CurtaMediaView.vue'

const routes = [

  {
    path: '/',
    name: 'curta-template',
    component: CurtaMediaView,
    children: [

      { 
        path: '', 
        name: 'home', 
        component: () => import('../views/HomeView.vue') 
      },

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
