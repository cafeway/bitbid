<template>
<section id="tabs" class="project-tab">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cashouts</a>
                            <div class="alert alert-primary" role="alert">
  {{this.amount}}
</div>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>email</th>
                                            <th>number</th>
                                            <th>name</th>
                                            <th>Sent</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="ref in refferals" :key="ref.id">
                                            <td>{{ref.email}}</td>
                                            <td>{{ref.phone}}</td>
                                            <td>{{ref.username}}</td>
                                            <td v-if="!ref.redeemed"  ><button class=" btn btn-md btn-primary" v-on:click="Redeem(ref.email)">Redeem</button></td>
                                            <td v-else><button class=" btn btn-md btn-success disabled">Redeemed</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
.form-control-borderless {
    border: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
</style>
