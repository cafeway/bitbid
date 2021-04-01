<template>
  <div class="container">
<div class="row align-items-center ">
    <div class="col-md-12">
        <div class="text-center">
            <p id="profile-name" class="profile-name-card"></p>
            <form  class="form-signin">
                <input
                 type="email"
                 name="email"
                 id="email"
                 class="form-control form-group"
                 placeholder="ninja@gmail.com"
                 required
                  autofocus
                  v-model="form.email"
                 />
                <input
                 type="number"
                 name="amount"
                 id="amount"
                 class="form-control form-group"
                  placeholder="password"
                  required
                  autofocus
                  v-model="form.amount"
                  >
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="button" @click="withdraw()">Withdraw</button>
            </form><!-- /form -->
        </div>
    </div>
</div>
</div>

</template>
<script>
import firebase from 'firebase'
export default {
  mounted: function () {
    let user = firebase.auth().currentUser.email
    let db = firebase.firestore()
    db.collection('users').doc(user).get().then(snapshot => {
      let data = snapshot.data()
      if (data.role !== 'admin') {
        window.location.href('/dash')
      }
    })
  },
  methods: {
    showuserdata: function () {
      alert('....')
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
