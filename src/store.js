import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import createPersistedState from 'vuex-persistedstate'
import firebase from 'firebase'
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    sharesAvail: 0,
    bidtime: 0,
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userinfo (state) {
      return state.userinfo
    },
    getAvailableShares (state) {
      return state.sharesAvail
    }

  },
  mutations: {
    ...vuexfireMutations,
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_USER (state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        })
      } else {
        commit('SET_USER', null)
      }
    },
    bindAvailShares: firestoreAction(({bindFirestoreRef}) => {
      return bindFirestoreRef('sharesAvail', firebase.firestore.collection('shares').doc('available'))
    })
  }
})
