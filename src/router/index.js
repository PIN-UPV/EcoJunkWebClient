import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
<<<<<<< HEAD
    }, 
    {
      path: '/markinfo',
      name: 'markInfo',
      component: () => import('../views/MarkInfo.vue')
    } 
  ]
=======
    },
    {
      path: '/agreements',
      name: 'agreements',
      component: () => import('../views/Agreements.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormularioAcuerdo.vue')
    },
    {
      path: '/info/:id',
      name: 'info',
      component: () => import('../views/Info.vue')
    }
  ],
  mode: 'history'
>>>>>>> master
})
