import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import reg from '../components/register.vue'
import activate from '../components/activation.vue'
import dash from '../components/dashboard.vue'
import hello from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'name',
      component: hello
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
