import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Base from '../views/Base.vue'
import Home from '../components/Home.vue'
import Posts from '../views/Posts.vue'
import Meta from '../views/Meta.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
      },
      {
        path: '/about/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue')
      }
    ]
  },
  {
    path: '/a',
    name: 'yield',
    children: [

    ]
  },
  {
    path: '/meta',
    component: Meta,
    children: [
      {
        path: '/',
        name: 'site',
        component: () => import(/* webpackChunkName: "about" */ '@/components/site/Site.vue')
      }
    ]
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    children: [
      // for every post/child, create a route
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
