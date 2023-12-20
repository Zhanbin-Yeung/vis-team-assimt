import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/ClassView.vue')
    },
    {
      path: '/publisher',
      name: 'publisher',
      component: () => import('../views/PublisherView.vue')
    },
    {
      path: '/indicator',
      name: 'indicator',
      component: () => import('../views/IndicatorView.vue')
    },

    {
      path: '/classpre',
      name: 'ClassPreview',
      component: () => import('../views/ClassPreview.vue')
    },
  ]
})

export default router
