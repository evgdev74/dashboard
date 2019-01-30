import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/'
import Category from './components/Category/'
import About from './components/About.vue'
import Login from './components/Sesion/Login.vue'
import Registered from './components/Sesion/Registered.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: Category
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    }
  ]
})
