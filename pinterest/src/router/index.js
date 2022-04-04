import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Perfil from '../views/Perfil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    meta: {
      auth: true
    }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }

  },
  {
    path: '/',
    name: 'Home',
    component: Home,

  }
]


const router = new VueRouter({
  routes
})

export default router
