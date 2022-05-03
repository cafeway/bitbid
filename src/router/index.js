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
import main from '../components/main.vue'
import btc from '../components/btc.vue'
import landing from '../components/landingpage.vue'
import packages from '../components/packages.vue'
import downlines from '../components/downlines.vue'
import users from '../components/useraccounts.vue'
import cashouts from '../components/cashouts.vue'
import verified from '../components/verifieddeposits.vue'
import withdrawal from '../components/withdraw.vue'
import transactions from '../components/transactions.vue'
import logs from '../components/transationsLogs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/transactionHistory',
      name: 'logs',
      component: logs
    },
    {
      path: '/transactions',
      name: 'transaction',
      component: transactions
    },
    {
      path: '/withdrawal',
      name: 'main',
      component: withdrawal
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/cashouts',
      name: 'cashouts',
      component: cashouts
    },
    {
      path: '/verified',
      name: 'verfied',
      component: verified
    },
    {
      path: '/downlines',
      name: 'affiliates',
      component: downlines
    },
    {
      path: '/packages',
      name: 'packages',
      component: packages
    },
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
      name: 'info',
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
      path: '/affiliate',
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
      path: '/landing',
      name: 'landing',
      component: landing
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
    },
    {
      path: '/address/:amount',
      name: 'payment',
      component: btc
    }
  ]
})
