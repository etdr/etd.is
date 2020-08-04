import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Base from '../views/Base.vue'
import Home from '../components/Home.vue'
import Yield from '@/views/Yield.vue'
import Posts from '../views/Posts.vue'
import Metaa from '../views/Metaa.vue'
import Post from '@/components/posts/Post.vue'

import Site from '@/components/site/Site.vue'

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
        path: '/about/background',
        name: 'background',
        component: () => import(/* webpackChunkName: "about" */ '../components/Background.vue')
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
    component: Yield,
    children: [
      {
        path: '/',
        name: 'yield-index',
        component: () => import(/* webpackChunkName: "yield-index" */ '@/components/yield/Index.vue')
      },
      {
        path: 'developer',
        name: 'yield-js',
        component: () => import(/* webpackChunkName: "yield-js" */ '@/components/yield/JS.vue')
        // redirect: { name: 'yield-index' }
      },
      {
        path: 'data-scientist',
        name: 'yield-ds',
        component: () => import(/* webpackChunkName: "yield-ds" */ '@/components/yield/Data.vue')
        // redirect: { name: 'yield-index' }
      },
      {
        path: 'quasiacademecian',
        name: 'yield-thesis',
        component: () => import(/* webpackChunkName: "yield-thesis" */ '@/components/yield/Thesis.vue')
        // redirect: { name: 'yield-index' }
      },
      {
        path: 'musician',
        name: 'yield-music',
        component: () => import(/* webpackChunkName: "yield-music" */ '@/components/yield/Music.vue'),
        redirect: { name: 'yield-index' }
      },
      {
        path: 'dabbler',
        name: 'yield-misc',
        component: () => import(/* webpackChunkName: "yield-misc" */ '@/components/yield/Misc.vue'),
        redirect: { name: 'yield-index' }
      }
    ]
  },
  {
    path: '/meta',
    component: Metaa,
    children: [
      {
        path: '/',
        name: 'site',
        // component: () => import(/* webpackChunkName: "about" */ '@/components/site/Site.vue')
        component: Site
      }
    ]
  },
  {
    path: '/posts',
    component: Posts,
    // children: require.context('@/assets/posts', true, /\.md$/).keys().map((filename: string) => {
    //   return ({
    //     path: '/' + filename.replace(/\.md$/, '').replace(/\.\//, ''),
    //     name: 'post-' + filename,
    //     component: () => import('@/assets/posts/' + filename.replace(/\.md$/, ''))
    //   })
    // })
    children: [
      {
        path: '/',
        name: 'posts-index',
        component: () => import(/* webpackChunkName: "posts-index" */ '@/components/posts/Index.vue')

      },
      {
        path: ':filename',
        props: true,
        // component: () => import(/* webpackChunkName: "post" */ '@/components/posts/Post.vue')
        component: Post
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
