import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import reg from '../components/register.vue'
import payment from '../components/payment.vue'
Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
