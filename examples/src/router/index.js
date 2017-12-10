import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => { require(['../components/home'], resolve) }
    },
    {
      path: '/loading-icon',
      name: 'loadingIcon',
      component: resolve => { require(['../components/loadingIcon'], resolve) }
    },
    {
      path: '/icon',
      name: 'icon',
      component: resolve => { require(['../components/icon'], resolve) }
    },
    {
      path: '/card',
      name: 'card',
      component: resolve => { require(['../components/card'], resolve) }
    },
    {
      path: '/scroller',
      name: 'scroller',
      component: resolve => { require(['../components/scroller'], resolve) }
    },
    {
      path: '/container',
      name: 'container',
      component: resolve => { require(['../components/container'], resolve) }
    },
    {
      path: '/section',
      name: 'section',
      component: resolve => { require(['../components/section'], resolve) }
    },
    {
      path: '/btn',
      name: 'btn',
      component: resolve => { require(['../components/btn'], resolve) }
    },
    {
      path: '/link',
      name: 'link',
      component: resolve => { require(['../components/link'], resolve) }
    },
    {
      path: '/image',
      name: 'image',
      component: resolve => { require(['../components/image'], resolve) }
    }
  ]
})

export default router
