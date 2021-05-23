// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Vuesax styles
import 'material-icons/iconfont/material-icons.css'
import 'bootstrap'
import store from './store'
import VueSwal from 'vue-swal'
import LoadScript from 'vue-plugin-load-script'
import firebase from 'firebase'
import Vuex from 'vuex'
import cors from 'cors'
import VueRouter from 'vue-router'
import VueCountdownTimer from 'vuejs-countdown-timer'
import AxiosPlugin from 'vue-axios-cors'
Vue.use(AxiosPlugin)
Vue.use(Vuesax)
Vue.use(VueCountdownTimer)
Vue.use(VueRouter)
Vue.use(LoadScript)
Vue.use(cors)
// Import Bootstrap an BootstrapVue CSS files (order is important)
Vue.use(VueMaterial)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(VueSwal)
Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: 'AIzaSyDaU5o7T-qVgkXGaxchQZ5B5nXs6gHXCrg',
  authDomain: 'hortlite-fibre.firebaseapp.com',
  projectId: 'hortlite-fibre',
  storageBucket: 'hortlite-fibre.appspot.com',
  messagingSenderId: '148676762553',
  appId: '1:148676762553:web:8458eb43b3bc26d0bfb468',
  measurementId: 'G-Q7HPG4XY5V'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
