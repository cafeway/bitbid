import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import reg from '../components/register.vue'
import activate from '../components/activation.vue'
import dash from '../components/dashboard.vue'
import admin from '../components/admin.vue'
import search from '../components/localdbsearch.vue'
import refferals from '../components/refferals'
import profile from '../components/profile'
import userData from '../components/sharesdash.vue'
import help from '@/components/help.vue'
import invest from '../components/investments.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/investments',
      name: 'investments',
      component: invest
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/info',
      name: 'profile',
      component: userData
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/refs',
      name: 'refs',
      component: refferals
    },
    {
      path: '/notthere',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: reg
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/activate',
      name: 'activate',
      component: activate
    },
    {
      path: '/dash',
      name: 'dash',
      component: dash
    }
  ]
})
