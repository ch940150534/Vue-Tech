import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home'
import login from '@/page/login'
import forget from '@/page/forget'



Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    }
  ]
})
