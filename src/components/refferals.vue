<template>
<div class="container">
 <div class="row">
   <div class="col-md-12 text-centered" style="
   padding-top:70px;
   padding-left:70px;
   ">
       <table class="table table-bordered">
  <thead>
    <tr class="text-justify">
      <th class="text-danger">Username</th>
      <th class="text-primary">1<sup>st</sup>  Investment</th>
      <th class="text-success">Award </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="ref in refferals" :key="ref.id">
      <td>{{ref.username}}</td>
      <td>to Do</td>
      <td class="table-success">50ksh</td>
    </tr>
  </tbody>
</table>
   </div>
 </div>
</div>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  mounted: function () {
    let db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.refferals.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      this.amount = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      var data = snapshot.data()
      this.balance = data.wallet_balance
    })
  },
  methods: {
    showuserdata: function () {
      alert('....')
    },
    Verify: function (id) {
      let db = firebase.firestore()
      db.collection('cashout').where('ref', '==', id).get().then(snapshot => {
        snapshot.forEach(doc => {
          db.collection('cashout').doc(doc.id).update({
            sent: true
          })
        })
      })
    },
    search: function () {
      let db = firebase.firestore()
      console.log(this.form.email)
      db.collection('users').where('email', '==', this.form.email).get().then(snapshot => {
        snapshot.forEach(doc => {
          this.userinfo.push(doc.data)
        })
      })
    },
    withdraw: function () {
      let db = firebase.firestore()
      db.collection('users').doc(this.form.email).get().then(snapshot => {
        let data = snapshot.data()
        let newBalance = data.wallet_balance - parseFloat(this.form.amount)
        db.collection('users').doc(this.form.email).update({
          wallet_balance: newBalance
        })
      })
    },
    Redeem: function (email) {
      let db = firebase.firestore()
      console.log(email)
      db.collection('users').doc(this.user.data.email).collection('invitess').where('email', '==', email).get().then(snapshot => {
        snapshot.forEach(doc => {
          var email = doc.data().email
          var username = doc.data().username
          var phone = doc.data().phone
          // var bonus = 25
          // eslint-disable-next-line camelcase
          // var new_balance = this.wallet_balance + bonus
          db.collection('users').doc(this.user.data.email).collection('redeemed').doc(doc.id).add({
            email: email,
            username: username,
            phone: phone,
            redeemed: true
          })
          console.log(doc.id)
          // db.collection('users').doc(this.user.data.email).update({
          //   wallet_balance: parseFloat(new_balance)
          // })
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  data () {
    return {
      role: '',
      amount: 0,
      balance: 0,
      refferals: [],
      form: {
        email: '',
        amount: 0
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
 body {
     background-color: #f9f9fa
 }

 .flex {
     -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
     flex: 1 1 auto
 }

 @media (max-width:991.98px) {
     .padding {
         padding: 1.5rem
     }
 }

 @media (max-width:767.98px) {
     .padding {
         padding: 1rem
     }
 }

 .padding {
     padding: 5rem
 }

 .card {
     box-shadow: none;
     -webkit-box-shadow: none;
     -moz-box-shadow: none;
     -ms-box-shadow: none
 }

 .pl-3,
 .px-3 {
     padding-left: 1rem !important
 }

 .card {
     position: relative;
     display: flex;
     flex-direction: column;
     min-width: 0;
     word-wrap: break-word;
     background-color: #fff;
     background-clip: border-box;
     border: 1px solid #d2d2dc;
     border-radius: 0
 }

 .card .card-title {
     color: #000000;
     margin-bottom: 0.625rem;
     text-transform: capitalize;
     font-size: 0.875rem;
     font-weight: 500
 }

 .card .card-description {
     margin-bottom: .875rem;
     font-weight: 400;
     color: #76838f
 }

 p {
     font-size: 0.875rem;
     margin-bottom: .5rem;
     line-height: 1.5rem
 }

 .table-responsive {
     display: block;
     width: 100%;
     overflow-x: auto;
     -webkit-overflow-scrolling: touch;
     -ms-overflow-style: -ms-autohiding-scrollbar
 }

 .table,
 .jsgrid .jsgrid-table {
     width: 100%;
     max-width: 100%;
     margin-bottom: 1rem;
     background-color: transparent
 }

 .table thead th,
 .jsgrid .jsgrid-table thead th {
     border-top: 0;
     border-bottom-width: 1px;
     font-weight: 500;
     font-size: .875rem;
     text-transform: uppercase
 }

 .table td,
 .jsgrid .jsgrid-table td {
     font-size: 0.875rem;
     padding: .875rem 0.9375rem
 }

 .badge {
     border-radius: 0;
     font-size: 12px;
     line-height: 1;
     padding: .375rem .5625rem;
     font-weight: normal
 }
</style>
