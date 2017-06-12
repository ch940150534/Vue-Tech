import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../page/home/'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../page/login/'], resolve)
    },
     {
      path: '/register',
      name: 'register',
      component: resolve => require(['../page/register/'], resolve)
    },
  ]
})
