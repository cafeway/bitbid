/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
<div class="pricing-table">
  <div class="pricing-card">
    <h3 class="pricing-card-header">Bronze</h3>
    <div class="price"><sup>$</sup>25<span></span></div>
    <ul>
      <li><strong>Earn</strong>$0.25</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=4896525932"   class="order-btn">Select</a>

  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Silver</h3>
    <div class="price"><sup>$</sup>50<span></span></div>
    <ul>
      <li><strong>Earn</strong>$1</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5720069193" class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">White</h3>
    <div class="price"><sup>$</sup>100<span></span></div>
    <ul>
      <li><strong>Earn</strong>$2</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=4804149192" class="order-btn">Select </a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Black</h3>
    <div class="price"><sup>$</sup>200<span></span></div>
    <ul>
      <li><strong>Earn</strong>$4</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=4310841179"  class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold</h3>
    <div class="price"><sup>$</sup>400<span></span></div>
    <ul>
      <li><strong>Earn</strong>$8</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5927296550" class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold Pro</h3>
    <div class="price"><sup>$</sup>500<span></span></div>
    <ul>
      <li><strong>Earn</strong>$10</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5223630849" class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinum</h3>
    <div class="price"><sup>$</sup>1000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$21</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5586255459"  class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinium Pro</h3>
    <div class="price"><sup>$</sup>2000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$43</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5051260241"   class="order-btn">Select</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Diamond</h3>
    <div class="price"><sup>$</sup>5000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$109</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=5530461493" class="order-btn">Select</a>
  </div><div class="pricing-card">
    <h3 class="pricing-card-header">Diamond pro</h3>
    <div class="price"><sup>$</sup>10000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$209</li>
    </ul>
    <a href="https://nowpayments.io/payment/?iid=6384069471"  class="order-btn">Select</a>
  </div>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-secondary" id="exampleModalLongTitle" >You choose the  {{this.pack}} pack</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="invest()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <br> <button @click="copybtc()" class="btn btn-block btn-success"> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg></span>Copy btc address</button>
<hr>
<button @click="copyltc()" class="btn btn-block btn-danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg></span>Copy ltc address</button>
<br>
<p class="text-secondary">Contact the admin <strong> dreamcreation74@gmail.com</strong> <br>to confirm your pamyment</p>
      </div>
      <div class="modal-footer">
        <p>We Are The  Home To Your Dreams &#128512;</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans",sans-serif;
  text-decoration: none;
  list-style: none;
}
.pricing-table{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: min(1600px, 100%);
  margin: auto;
}

.pricing-card{
  flex: 1;
  max-width: 360px;
  background-color: #fff;
  margin: 20px 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  color: #2d2d2d;
  transition: .3s linear;
}

.pricing-card-header{
  background-color: #0fbcf9;
  display: inline-block;
  color: #fff;
  padding: 12px 30px;
  border-radius: 0 0 20px 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  transition: .4s linear;
}

.pricing-card:hover .pricing-card-header{
  box-shadow: 0 0 0 26em #0fbcf9;
}

.price{
  font-size: 70px;
  color: #0fbcf9;
  margin: 40px 0;
  transition: .2s linear;
}

.price sup, .price span{
  font-size: 22px;
  font-weight: 700;
}

.pricing-card:hover ,.pricing-card:hover .price{
  color: #fff;
}

.pricing-card li{
  font-size: 16px;
  padding: 10px 0;
  text-transform: uppercase;
}

.order-btn{
  display: inline-block;
  margin-bottom: 40px;
  margin-top: 80px;
  border: 2px solid #0fbcf9;
  color: #0fbcf9;
  padding: 18px 40px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 500;
  transition: .3s linear;
}

.order-btn:hover{
  background-color: #0fbcf9;
  color: #fff;
}

@media screen and (max-width:1100px){
  .pricing-card{
    flex: 50%;
  }
}
</style>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      email: '',
      btcaddress: '',
      username: '',
      litecoinaddress: '',
      package: '',
      phone: '',
      role: '',
      change: 0,
      downlines: 0,
      amount: 0,
      pack: '',
      balance: 0,
      refferals: [],
      form: {
        new_number: '',
        downline: ''
      }
    }
  },
  mounted: function () {
    if (firebase.auth().currentUser == null) {
      this.$router.push('/')
    } else if (firebase.auth().currentUser != null) {
      this.change = 0
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).get().then(snapshot => {
        let data = snapshot.data()
        // eslint-disable-next-line no-unused-expressions
        this.email = data.email
        this.phone = data.phonenumber
        this.role = data.role
        this.balance = data.wallet_balance
        this.package = data.package
      })
      db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
        this.downlines = snapshot.size
      })
      db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.refferals.push(doc.data())
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    copybtc: function () {
      navigator.clipboard.writeText('31r5QreLwu1aFHR7WNdSZVovMXPNyJ4xAf')
      this.$vs.notify({title: 'Success', text: 'Btc address copied to clipboard', color: 'green', position: 'top-center'})
    },
    copyltc: function () {
      navigator.clipboard.writeText('ltc1qd8sj9x3cvpuy4qulst7zxez07uglxk0tt34js4')
      this.$vs.notify({title: 'Success', text: 'Ltc address copied to clipboard', color: 'green', position: 'top-center'})
    },
    SetPackage: function (amount, pack) {
      this.amount = amount
      this.pack = pack
    },
    invest: function () {
      let db = firebase.firestore()
      db.collection('bids').add({
        'id': Math.floor((Math.random() * 10000) + 1),
        'email': firebase.auth().currentUser.email,
        'amount': this.amount,
        'verification_status': 'unverified',
        'startDay': Date.now(),
        'stopDay': Date.now() + 1.577e+10,
        'amountPaid': 0,
        'package': this.pack,
        'cashouts': 0
      })
      this.$vs.notify({title: 'Investment Queued', text: 'The investment was successfully queud.Kindly Confirm to activate the investment', color: 'green', position: 'top-center'})
    },
    save: function () {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).update({
        phonenumber: this.form.new_number
      })
      this.$swal('refersh for changes to take effect')
    },
    reload: function () {
      window.location.reload()
    },
    redeem: function (email) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('invitees').where('email', '==', email).get().then(snapshot => {
        snapshot.forEach(doc => {
          db.collection('users').doc(this.user.data.email).collection('invitees').doc(doc.id).update({
            email: 'redeemed'
          })
          let NewBalance = this.balance + 5
          db.collection('users').doc(this.user.data.email).update({
            wallet_balance: NewBalance
          })
        })
      })
    }
  }
}
</script>
