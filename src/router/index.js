/*
 * @Author: sheep669
 * @Description: 路由
 * @Date: 2022-09-19 20:40:42
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('../views/classify/index.vue')
  },
  {
    path: '/we',
    name: 'we',
    component: () => import('../views/we/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
