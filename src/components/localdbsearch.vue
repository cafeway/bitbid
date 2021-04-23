<template>
<section id="tabs" class="project-tab">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cashouts</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Ref</th>
                                            <th>amount</th>
                                            <th>Number</th>
                                            <th>Sent</th>
                                            <th>Email<th/>
                                            <th>Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cashout in cashouts" :key="cashout.id">
                                            <td>{{cashout.ref}}</td>
                                            <td>{{cashout.amount}}</td>
                                            <td>{{cashout.number}}</td>
                                            <td>{{cashout.sent}}</td>
                                            <td>{{cashout.email}}</td>
                                            <td><button class=" btn btn-md btn-success" v-on:click="Verify(cashout.ref)">Verify</button></td>
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
export default {
  mounted: function () {
    let db = firebase.firestore()
    db.collection('cashout').where('sent', '==', false).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.cashouts.push(doc.data())
      })
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
    }
  },
  data () {
    return {
      role: '',
      userinfo: [],
      cashouts: [],
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
