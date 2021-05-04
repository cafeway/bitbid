import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import reg from '../components/register.vue'
import activate from '../components/activation.vue'
import dash from '../components/dashboard.vue'
import admin from '../components/admin.vue'
import search from '../components/localdbsearch.vue'
import reset from '../components/resetpassword.vue'
import refferals from '../components/refferals'
import profile from '../components/profile'
import userData from '../components/sharesdash.vue'
import invest from '../components/invest.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/invest',
      name: invest,
      component: invest
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
      path: '/reset',
      name: 'reset',
      component: reset
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
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: reg
    },
    {
      path: '/login',
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
