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
    <button @click="invest(25,'Bronze')"  class="order-btn">Select</button>

  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Silver</h3>
    <div class="price"><sup>$</sup>50<span></span></div>
    <ul>
      <li><strong>Earn</strong>$1</li>
    </ul>
    <button @click="invest(50,'Silver')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">White</h3>
    <div class="price"><sup>$</sup>100<span></span></div>
    <ul>
      <li><strong>Earn</strong>$2</li>
    </ul>
    <button @click="invest(100,'White')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Black</h3>
    <div class="price"><sup>$</sup>200<span></span></div>
    <ul>
      <li><strong>Earn</strong>$4</li>
    </ul>
    <button @click="invest(200,'Blacl')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold</h3>
    <div class="price"><sup>$</sup>400<span></span></div>
    <ul>
      <li><strong>Earn</strong>$8</li>
    </ul>
    <button @click="invest(400,'Gold')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold Pro</h3>
    <div class="price"><sup>$</sup>500<span></span></div>
    <ul>
      <li><strong>Earn</strong>$10</li>
    </ul>
    <button @click="invest(500,'GoldPro')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinum</h3>
    <div class="price"><sup>$</sup>1000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$21</li>
    </ul>
    <button @click="invest(1000,'Platinum')"   class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinium Pro</h3>
    <div class="price"><sup>$</sup>2000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$43</li>
    </ul>
    <button @click="invest(2000,'PlatinumPro')"  class="order-btn">Select</button>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Diamond</h3>
    <div class="price"><sup>$</sup>5000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$109</li>
    </ul>
    <button @click="invest(5000,'Diamond')"  class="order-btn">Select</button>
  </div><div class="pricing-card">
    <h3 class="pricing-card-header">Diamond pro</h3>
    <div class="price"><sup>$</sup>10000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$209</li>
    </ul>
    <button  @click="invest(10000,'DiamondPro')" class="order-btn">Select</button>
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
      balance: 0,
      refferals: [],
      form: {
        new_number: '',
        downline: ''
      }
    }
  },
  mounted: function () {
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
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    invest: function (amount, pack) {
      switch (pack) {
        case 'Bronze':
          if (this.package === pack) {
            alert('Your are already enrolled for this package kindly upgrade')
          } else if (this.pacakge !== pack) {
            let db = firebase.firestore()
            db.collection('bids').add({
              'id': Math.floor((Math.random() * 10000) + 1),
              'email': firebase.auth().currentUser.email,
              'amount': amount,
              'verification_status': 'unverified',
              'startDay': Date.now(),
              'stopDay': Date.now() + 1.577e+10,
              'amountPaid': 0,
              'cashouts': 0
            })
          }
          break
        case 'Silver':
          if (this.package === pack) {
            alert('Your are already enrolled for this package kindly upgrade')
          } else if (this.pacakge !== pack && pack === 'Bronze') {
            let db = firebase.firestore()
            db.collection('bids').add({
              'id': Math.floor((Math.random() * 10000) + 1),
              'email': firebase.auth().currentUser.email,
              'amount': amount,
              'verification_status': 'unverified',
              'startDay': Date.now(),
              'stopDay': Date.now() + 1.577e+10,
              'amountPaid': 0,
              'cashouts': 0
            })
          } else {
            alert('You cannot downgrade your investment')
          }

          // code block
          break
        default:
    // code block
      }
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
