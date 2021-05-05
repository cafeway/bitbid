/* eslint-disable no-tabs */
/* eslint-disable camelcase */
/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
 /* eslint-disable */
<template>
  <div class="container-fluid">
  <div v-if="this.connected">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <header class="header">
     <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
               <b-list-group style="max-width: 300px;">
                 <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                 <span class="mr-auto text-success"> Welcome back ...   {{this.user.data.displayName}}!</span>
                <b-badge></b-badge>
               </b-list-group-item>
               </b-list-group>
            </ul>

  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a @click="routeHome()">How it Works</a></li>
    <li><a href="#about"  data-toggle="modal" data-target="#invest">Invest</a></li>
    <li><a href="#careers" data-toggle="modal" data-target="#deposit">Deposit</a></li>
    <li><a data-toggle="modal" data-target="#withdraw">Withdraw</a></li>
     <li><a href="#contact">Get help</a></li>
  </ul>
</header>

<hr>
<div>
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css
">
<div class="modal fade" id="invest" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">How to Invest  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" v-if="Investment == 0">
        <div>
    <md-steppers md-vertical>
      <md-step id="first" md-label="Enter Amount" md-description="min 500 max 50000">
        <div>
        <input type="number" class="form-control" id="investment" name="amount" v-model="form.amount">
        </div>
      </md-step>
      <hr>
      <md-step id="second" md-label="Second Step" md-description="Choose between 1-3 days">
   <div>
        <input type="number" class="form-control" id="period" name="amount" v-model="form.duration">
        </div>
      </md-step>
      <hr>
      <md-step id="third" md-label="Third Step">
      <div>
        <button class="btn btn-primary btn-block" @click="invest()">Invest</button>
      </div>
      </md-step>
    </md-steppers>
  </div>
      </div>
      <div v-else-if="Investment == 2" class="modal-body alert alert-danger" role="alert">
      <h4>Insufficient Balance</h4>
      </div>
      <div v-else class="modal-body alert alert-success" role="alert">
      <p>Investment Was Successfull</p>
      </div>
      <div class="modal-footer">
        <button  v-if="Investment !=2" type="button" class="btn btn-primary" data-dismiss="modal" @click="reload()">Save changes</button>
        <button  v-else type="button" class="btn btn-danger" data-dismiss="modal" @click="reload()">Home</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">How  to Deposit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container">
      <img src="data:image/png;base64,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">
      <hr>
      <div class="alert alert-secondary" role="alert">
      <h4><b>Till no: 5581293</b></h4>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" >Ok</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Withdraw Earnings</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container">
      <img id="profile-img" class="rounded-circle profile-img-card" src="data:image/jpeg;base64,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" />
           <form>
                    <input
                     type="text"
                     name="email"
                     id="phone"
                     class="form-control form-group"
                     placeholder="Enter your Phone Number"
                     required
                      autofocus
                      v-model="form.phone"
                     />
                    <input
                     type="number"
                     name="password"
                     id="withdrawal"
                     class="form-control form-group"
                      placeholder="enter amount you wish to Cashout"
                      required
                      autofocus
                      v-model="form.withdrawal"
                      >
                    <button class="btn btn-lg btn-primary btn-block btn-signin" data-dismiss="modal" type="button" @click="withdraw()">Confirm</button>
                </form>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" >Ok</button>
      </div>
    </div>
  </div>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
<div class="container">
 <section class="details-card">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                    </div>
                    <div class="card-desc" style="background-color:#06092c;color: #ffffff;">
                        <h3 style="color:#ffffff;">Balance</h3>
                        <p style="color:#ffffff;">{{this.wallet_balance}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                    </div>
                    <div class="card-desc" style="background-color:#06092c;">
                        <h3 style="color:#ffffff;">Cashouts</h3>
                        <p style="color:#ffffff;">{{this.amount_received}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                    </div>
                    <div class="card-desc" style="background-color:#06092c;">
                        <h3 style="color:#ffffff;">investments</h3>
                        <p style="color:#ffffff;">{{this.total_bids}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                    </div>
                    <div class="card-desc" style="background-color:#06092c;">
                        <h3 style="color:#ffffff;">refferals</h3>
                        <p style="color:#ffffff;">{{this.refferals}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- details card section starts from here -->
</div>

</div>
</div>
<section id="tabs" class="project-tab">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Running</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Matured</a>
                                  <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">CashedOut</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Timer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="bid in bids" :key="bid.id">
                                            <td>{{bid.investment}}</td>
                                            <td>{{bid.state}}</td>
                                            <td>
                                              <vue-countdown-timer
      @start_callback="startCallBack(bid.id)"
      @end_callback="endCallBack(bid.id)"
      :start-time="bid.startdate"
      :end-time="bid.stopdate"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="''"
      label-position="begin"
      :end-text="'timer expired'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
    </vue-countdown-timer>
                                    </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Timer</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="mat in matured" :key="mat.id">
                                            <td>{{mat.investment}}</td>
                                            <td>{{mat.state}}</td>
                                                     <td class="text-danger"><b><h5>Expired</h5></b></td>
                                    <td><button type="button" class="btn btn-md btn-warning" @click="cashout(mat.id)">Redeem</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cash in cashed" :key="cash.id">
                                            <td>{{cash.investment}}</td>
                                            <td>{{cash.state}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <button class="btn btn-block btn-success" @click="genaratelink()">Create Your Link</button>
        <hr>
        <button class="btn btn-block bg-local" @click="logout()">log out</button>
<!-- Footer -->
  </div>
  <div v-else  class="container-fluid" style="padding-left:500px">
  <p></p>
    <div class="load">
        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="pollex"></div>

    </div>
  </div>
</div>

</template>
<script>
import store from '../store'
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        number: '',
        amount: 0,
        withdrawal: 0,
        phone: ''
      },
      receipt_no: '',
      refferals: 0,
      amount_sent: 0,
      amount_received: 0,
      wallet_balance: 0,
      activated: false,
      verified: '',
      transaction_status: 1,
      transaction_type: '',
      invitelink: '',
      Investment: 0,
      total_bids: 0,
      bids: [],
      matured: [],
      cashed: [],
      now: 0,
      doc_ref: '',
      connected: true
    }
  },
  computed: {
    userdata () {
      return store.state.userdata
    },
    ...mapGetters({
      user: 'user'
    })
  },
  mounted: function () {
    this.Investment = 0
    this.invitelink = ''
    this.receipt_no = ''
    this.transaction_type = ''
    this.transaction_status = 1
    let db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      this.refferals = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      this.total_bids = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).collection('investments').where('state', '==', 'running').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.bids.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('investments').where('state', '==', 'matured').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.matured.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('investments').where('state', '==', 'cashed').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.cashed.push(doc.data())
      })
    })
    firebase.firestore().collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.amount_sent = data.amount_sent
      this.amount_received = data.amount_received
      this.wallet_balance = data.wallet_balance
      this.activated = data.activated
    })
  },
  methods: {
    routeHome: function () {
      this.$router.push('/')
    },
    refresh: function () {
      window.location.reload()
    },
    // // eslint-disable-next-line camelcase
    // cashout: function (bid_id) {
    //   let db = firebase.firestore()
    //   db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
    //     snapshot.forEach(doc => {
    //       db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
    //         let data = snapshot.data()
    //         if (!data.cashed) {
    //           let cashout = snapshot.data().investment
    //           db.collection('users').doc(this.user.data.email).get().then(snapshot => {
    //           // eslint-disable-next-line camelcase
    //             let profit = cashout * 0.15
    //             // eslint-disable-next-line camelcase
    //             let amount_received = snapshot.data().amount_received + cashout + profit
    //             let wb = snapshot.data().wallet_balance + cashout + profit
    //             db.collection('users').doc(this.user.data.email).update({
    //               wallet_balance: wb,
    //               amount_received: amount_received
    //             })
    //             db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
    //               state: 'cashed',
    //               matured: true,
    //               cashed: true
    //             })
    //             window.location.reload()
    //           })
    //         } else {
    //           this.$swal('cashed out .... please refresh')
    //           window.location.reload()
    //         }
    //       })
    //     })
    //   })
    // },
    cashout: function (id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach(doc => {
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data
            if (!data.cashed) {
              let cashout = snapshot.data().investment
              db.collection('users').doc(this.user.data.email).get().then(snapshot => {
                let profit = cashout * 0.16
                // eslint-disable-next-line camelcase
                let amount_received = snapshot.data().amount_received + cashout + profit
                let wb = snapshot.data().wallet_balance + cashout + profit
                db.collection('users').doc(this.user.data.email).update({
                  wallet_balance: wb,
                  amount_received: amount_received
                })
                db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                  state: 'cashed',
                  matured: true,
                  cashed: true
                })
              })
            }
          })
        })
      })
    },
    starttimer: function (id, period) {
      this.now = id
      let db = firebase.firestore()
      console.log(this.now)
      var startdate = new Date()
      var startdateconverted = new Date().getTime()
      var maturedate = startdate.setDate(startdate.getDate() + period)
      console.log(startdateconverted)
      console.log(maturedate)
      firebase.firestore().collection('users').doc(this.user.data.email).collection('investments').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach(doc => {
          // eslint-disable-next-line camelcase
          var doc_id = doc.id
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc_id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.redeemed) {
              db.collection('users').doc(this.user.data.email).collection('investments').doc(doc_id).update({
                startdate: startdateconverted,
                stopdate: maturedate,
                redeemed: true,
                started: true
              })
            } else {}
          })
        })
      })
    },
    // eslint-disable-next-line camelcase
    startCallBack: function (bid_id) {
      console.log(bid_id)
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
    },
    invest: function () {
      let investment = document.getElementById('investment').value
      let period = document.getElementById('period').value
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.email).get().then(snapshot => {
        if (parseFloat(investment) <= snapshot.data().wallet_balance) {
          this.Investment = 1
          let db = firebase.firestore()
          let balance = snapshot.data().wallet_balance - parseFloat(investment)
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            wallet_balance: balance
          })
          console.log(balance)
          // eslint-disable-next-line camelcase
          let cust_id = parseFloat(this.total_bids) + 1
          console.log(this.now)
          var startdate = firebase.firestore.Timestamp.now().seconds
          var maturedate = startdate + 86400
          db.collection('users').doc(firebase.auth().currentUser.email).collection('investments').add({
            id: cust_id,
            investment: parseFloat(investment),
            period: parseFloat(period),
            date: new Date().toDateString(),
            started: false,
            state: 'running',
            cashed: false,
            startdate: startdate,
            stopdate: maturedate

          })
          this.$swal('congratulations your investment was a success')
        } else {
          this.Investment = 2
          console.log('***')
          this.$swal('Insufficient Balance')
        }
        window.location.href('/dash')
      })
    },
    logout: function () {
      firebase.auth().signOut()
      this.$router.push('/login')
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hortlite-investments.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      this.$swal('Invite Link ', finalURL)
    },
    reload: function () {
      window.location.reload()
    },
    To_investments: function () {
      this.$router.push('/info')
    },
    verify: function () {
      var ref = document.getElementById('receipt_no').value
      this.receipt_no = ref
      console.log(ref)
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(this.receipt_no).get().then(snapshot => {
        if (snapshot.data().redeemed !== true) {
          // eslint-disable-next-line camelcase
          let balance_now = this.wallet_balance + snapshot.data().amount
          console.log(balance_now)
          this.transaction_status = 2
          this.transaction_type = snapshot.data().tx_ref
          db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(ref).update({
            redeemed: true
          })
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            wallet_balance: balance_now
          })
        } else {
          this.transaction_status = 3
        }
      })
    },
    withdraw: function () {
      let db = firebase.firestore()
      if (this.form.withdrawal <= this.wallet_balance) {
        let balance = this.wallet_balance - parseFloat(this.form.withdrawal)
        db.collection('users').doc(this.user.data.email).update({
          wallet_balance: balance
        })
        db.collection('cashout').add({
          number: this.form.phone,
          amount: this.form.withdrawal,
          email: this.user.data.email,
          sent: false
        })
        this.$swal('you withdrawal was successful and is being processes ...hold on it takes 0-20min')
      } else {
        this.$swal('You cannot withdraw more than you have! please try again with a smaller amount!')
      }
    }
  }
}
</script>
<style scoped>
@import '../assets/footer.css';
.bg-mine {
 background-color:#4545b9;
}
.bg-footer {
 background-color:#BC427F;
}

a {
  color: #000;
}
.project-tab {
    padding: 10%;
    margin-top: -8%;
}
.project-tab #tabs{
    background: #007b5e;
    color: #eee;
}
.project-tab #tabs h6.section-title{
    color: #eee;
}
.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #0062cc;
    background-color: transparent;
    border-color: transparent transparent #f3f3f3;
    border-bottom: 3px solid !important;
    font-size: 16px;
    font-weight: bold;
}
.project-tab .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    color: #06092c;
    font-size: 16px;
    font-weight: 600;
}
.project-tab .nav-link:hover {
    border: none;
}
.project-tab thead{
    background: #f3f3f3;
    color: #333;
}
.project-tab a{
    text-decoration: none;
    color: #333;
    font-weight: 600;
}

/* header */

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: sticky;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
/* card details start  */
@import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto+Condensed:400,400i,700,700i');
section{
    padding: 100px 0;
}
.details-card {
  background: #ecf0f1;
}

.card-content {
 background: #ffffff;
  border: 4px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}

.card-img {
  position: relative;
  overflow: hidden;
 border-radius: 0;
 z-index: 1;
}

.card-img img {
  width: 100%;
  height: auto;
  display: block;
}

.card-img span {
 position: absolute;
    top: 15%;
    left: 12%;
    background: #1ABC9C;
    padding: 6px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    transform: translate(-50%,-50%);
}
.card-img span h4{
        font-size: 12px;
        margin:0;
        padding:10px 5px;
         line-height: 0;
}
.card-desc {
 padding: 1.25rem;
}

.card-desc h3 {
 color: #000000;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
}

.card-desc p {
  color: #747373;
   font-size: 14px;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5;
  margin: 0px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}
.btn-card{
  background-color: #1ABC9C;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    margin: 0;
    border: 0;
    -webkit-border-radius: .125rem;
    border-radius: .125rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    color: #fff;
}
.btn-card:hover {
    background: orange;
}
a.btn-card {
    text-decoration: none;
    color: #fff;
}
/* End card section */
.bg-local {
  background-color:#06092c;
  color:#ffff;
}
</style>
