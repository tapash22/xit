import Vue from 'vue'
import VueRouter from 'vue-router'
import Client from '../views/Client.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'client',
    component: Client,
    redirect:'/home',
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'features',
        name: 'features',
        component: () => import(/* webpackChunkName: "features" */ '../views/Features.vue')
      },
      {
        path: 'works',
        name: 'works',
        component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue')
      },
      {
        path: 'ourteam',
        name: 'ourteam',
        component: () => import(/* webpackChunkName: "ourteam" */ '../views/OurTeam.vue')
      },
      {
        path: 'testimonials',
        name: 'testimonials',
        component: () => import(/* webpackChunkName: "testimonials" */ '../views/Testimonials.vue')
      },
      {
        path: 'downloads',
        name: 'downloads',
        component: () => import(/* webpackChunkName: "downloads" */ '../views/Downloads.vue')
      }

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
