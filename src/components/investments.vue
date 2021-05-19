/* eslint-disable camelcase */
<template>
  <div class="container">
  <table class="table table-bordered" style="padding-top:200px;">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>
      <th scope="col">Timer</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="inv in investments" :key="inv.id" >
      <th scope="row">{{inv.id}}</th>
      <td>{{inv.amount}}</td>
      <td>{{inv.state}}</td>
      <td>
                                       <vue-countdown-timer
      @start_callback="startCallBack(inv.id)"
      @end_callback="endCallBack(inv.id)"
      :start-time="inv.startdate"
      :end-time="inv.stopdate"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="''"
      label-position="begin"
      :end-text="'Investment matured'"
      :day-txt="':'"
      :hour-txt="':'"
      :minutes-txt="':'"
      :seconds-txt="''">
    </vue-countdown-timer>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      investments: [],
      balance: 0
    }
  },
  mounted: function () {
    let db = firebase.firestore()
    this.balance = 0
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.balance = data.wallet_balance
    })
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.investments.push(doc.data())
      })
    })
  },
  methods: {
    startCallBack: function (id) {
      console.log(id)
    },
    // eslint-disable-next-line camelcase
    endCallBack: function (bid_id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
        snapshot.forEach(doc => {
          let db = firebase.firestore()
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let ifmatured = snapshot.data().matured
            if (ifmatured) {
              console.log(snapshot.data().state)
            } else {
              console.log('......')
              db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                state: 'matured'
              })
            }
          })
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
