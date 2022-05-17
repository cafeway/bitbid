<template>
<div class="container-fluid" style="padding-top:100px;">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center text-primary login-title">instant B-2-P</h1>
            <div class="account-wall">
           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg>
                <form class="form-signin">
                <input type="email" class="form-control" placeholder="Email" id="email" v-model="form.email" required autofocus readonly >
                <br/>
                <input type="text" id="passsword" v-model="form.walletaddress" class="form-control" placeholder="Crypto Wallet address" required>
                <br>
                <input type="number" id="amoount" v-model="form.amount" class="form-control" placeholder="amount" min="0" required>
                <br>
<div class="select">
  <select id="coin">
    <option value="bitcoin">Bitcoin</option>
    <option value="litecoin">Litecoin</option>

  </select>
</div>

                <button class="btn btn-lg btn-primary btn-block" type="button" @click="login()">

                    Request Withdrawal</button>

                </form>
            </div>
        </div>
    </div>

</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      btcbalance: 0,
      ltcbalance: 0,
      form: {
        email: '',
        walletaddress: '',
        prefferedcoin: 'btc',
        amount: 0
      },
      error: null
    }
  },
  mounted: function () {
    document.getElementById('email').value = firebase.auth().currentUser.email
    let doc = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).get()
    doc.then(snap => {
      let data = snap.data()
      console.log(snap.data().btcbalance)
      this.btcbalance = data.btcbalance
      this.ltcbalance = data.ltcbalance
      console.log(this.btcbalance)
      this.form.email = data.email
    })
  },
  methods: {
    ToRegister () {
      this.$router.push('/register')
    },
    login: function () {
      if (document.getElementById('coin').value === 'bitcoin') {
        if (this.form.amount > this.btcbalance) {
          this.$vs.notify({title: 'Insufficient funds', text: 'You have insufficient funds,chooose a smaller amount or a different wallet', color: 'red', position: 'top-center'})
        } else if (this.form.amount <= this.btcbalance) {
          if (this.form.amount > 50) {
            let UserDoc = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).get()
            UserDoc.then(dat => {
              let data = dat.data()
              let currentBalance = data.btcbalance
              let newBalance = currentBalance - this.form.amount
              firebase.firestore().collection('users').doc(data.id).update({
                'btcbalance': newBalance
              })
            })
            this.$vs.notify({title: 'Success', text: 'Your withdrawal was successful,your funds will be sent to your wallet soon', color: 'green', position: 'top-center'})
            firebase.firestore().collection('cashouts').add({
              'amount': this.form.amount,
              'user': this.form.email,
              'wallet': this.form.walletaddress,
              'date': Date.now(),
              'coin': document.getElementById('coin').value,
              'verified': false,
              'id': Math.floor((Math.random() * 10000) + 1)
            })
          } else if (this.form.amount < 50) {
            this.$vs.notify({title: 'Minimum withdrawal exceeded', text: 'The minimum amount you can cashout is $50', color: 'red', position: 'top-center'})
          }
        }
      } else if (document.getElementById('coin').value === 'litecoin') {
        if (this.form.amount > this.ltcbalance) {
          this.$vs.notify({title: 'Insufficient funds', text: 'You have insufficient funds,chooose a smaller amount or a different wallet', color: 'red', position: 'top-center'})
        } else if (this.form.amount <= this.btcbalance) {
          if (this.form.amount > 50) {
            let UserDoc = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).get()
            UserDoc.then(dat => {
              let data = dat.data()
              let currentBalance = data.ltcbalance
              let newBalance = currentBalance - this.form.amount
              firebase.firestore().collection('users').doc(data.id).update({
                'ltcbalance': newBalance
              })
            })
            this.$vs.notify({title: 'Success', text: 'Your withdrawal was successful,your funds will be sent to your wallet soon', color: 'green', position: 'top-center'})
            firebase.firestore().collection('cashouts').add({
              'amount': this.form.amount,
              'user': this.form.email,
              'wallet': this.form.walletaddress,
              'date': Date.now(),
              'coin': document.getElementById('coin').value,
              'verified': false,
              'id': Math.floor((Math.random() * 10000) + 1)
            })
          } else if (this.form.amount < 50) {
            this.$vs.notify({title: 'Minimum withdrawal exceeded', text: 'The minimum amount you can cashout is $50', color: 'red', position: 'top-center'})
          }
        }
      }
    }
  }
}
</script>
<style scoped>
.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}

</style>
