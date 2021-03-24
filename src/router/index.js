import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import auth from '@/components/auth.vue'
import home from '@/components/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
