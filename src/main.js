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
import 'bootstrap'
import store from './store'
import VueSwal from 'vue-swal'
import LoadScript from 'vue-plugin-load-script'
import firebase from 'firebase'
import Vuex from 'vuex'
import cors from 'cors'
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
const configOptions = {
  apiKey: 'AIzaSyCOV7DEnom-HdWz3mO-CGtSX_at2rBZBtU',
  authDomain: 'hustlebidders.firebaseapp.com',
  projectId: 'hustlebidders',
  storageBucket: 'hustlebidders.appspot.com',
  messagingSenderId: '1045831540548',
  appId: '1:1045831540548:web:e9be5fd96b6240c3fe4111',
  measurementId: 'G-EQC5JY6CQ7'
}
firebase.initializeApp(configOptions)
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
