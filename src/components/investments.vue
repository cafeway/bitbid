/* eslint-disable camelcase */
<template>
  <div class="container">
  <table class="table table-bordered" style="padding-top:200px;">
  <thead>
    <tr>
      <th scope="col">Amount Earned</th>
      <th scope="col">Status</th>
       <th scope="col">Clock</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="inv in investments" :key="inv.id" >
      <th scope="row">{{inv.amount}}</th>
      <td v-if="inv.state == 'matured' && inv.cashed == false" class="table-warning">{{inv.state}}
      <div>
      <button class="btn btn-primary" @click="withdraw(inv.id)">Cashout</button>
      </div>
      </td>
        <td v-if="inv.state == 'running'" class="table-danger">{{inv.state}}</td>
        <td v-if="inv.state == 'matured' && inv.cashed == true" class="table-success">Cashout Successfull</td>
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
    withdraw: function (id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', id).where('cashed', '==', false).get().then(snapshot => {
        snapshot.forEach(doc => {
          let DocId = doc.id
          db.collection('users').doc(this.user.data.email).collection('investments').doc(DocId).update({
            cashed: true
          })
          db.collection('users').doc(this.user.data.email).collection('investments').doc(DocId).get().then(snapshot => {
            let data = snapshot.data()
            let amount = data.amount
            var balance = amount + this.wallet_balance
            db.collection('users').doc(this.user.data.email).update({
              wallet_balance: balance
            })
          })
        })
      })
    },
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
