<template>
<div class="container-fluid" style="padding-top:100px;">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center text-primary login-title">Enter The Transaction Id From Your receipt</h1>
            <div class="account-wall">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
                <form class="form-signin">
                <input type="text" id="text" v-model="form.id" class="form-control" placeholder="Receipt ID" required>
                <br>

                <button class="btn btn-lg btn-primary btn-block" type="button" @click="login()">

                    Verify Payment</button>

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
        id: null
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
    })
  },
  methods: {
    ToRegister () {
      this.$router.push('/register')
    },
    login: function () {
      let url = 'https://api.nowpayments.io/v1/payment/' + this.form.id
      fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': 'WFZZEWZ-71X43DX-HFVVY7G-MG6N0ZP'
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.payment_status === 'confirmed') {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).collection('logs').add({
              'id': response.payment_id,
              'amount': response.pay_amount,
              'date': response.created_at,
              'coin': response.outcome_currency,
              'package': response.order_id
            })
            let db = firebase.firestore()
            switch (response.order_id) {
              case 1:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 25,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Bronze',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 2:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 50,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Silver',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 3:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 100,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'White',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 4:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 200,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Black',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 5:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 400,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Gold',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 6:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 500,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Gold Pro',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 7:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 1000,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Platinum',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 8:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 2000,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Platinum pro',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 9:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 5000,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Diamond',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break
              case 10:
                db.collection('users').doc(firebase.auth().currentUser.email).collection('bids').add({
                  'id': response.payment_id,
                  'amount': 10000,
                  'startDay': Date.now(),
                  'stopDay': Date.now() + 1.577e+10,
                  'amountPaid': 0,
                  'package': 'Diamond Pro',
                  'cashouts': 0
                })
                this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
                break

              default:
    // code block
            }
          } else if (response.payment_status === 'waiting') {
            this.$vs.notify({title: 'Blockchain Notification!', text: 'The transaction is not complete kindly send the funds to complete the transaction ', color: 'red', position: 'top-center'})
          } else if (response.payment_status === 'confirming') {
            this.$vs.notify({title: 'Blockchain Notification!', text: 'The transaction has been received and is being verified by the blockchain', color: 'green', position: 'top-center'})
          } else if (response.payment_status === 'partially_funded ') {
            this.$vs.notify({title: 'Blockchain Notification!', text: 'The transaction is not complete due to partially paid funds kindly topup ', color: 'red', position: 'top-center'})
          } else if (response.payment_status === 'expired') {
            this.$vs.notify({title: 'Blockchain Notification!', text: 'The transaction is expired kindly initiate a new one', color: 'red', position: 'top-center'})
          }

          console.log(response)
        })
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
