/* eslint-disable camelcase */
/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
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
    <li><a>How it Works </a></li>
    <li><a href="#about"  data-toggle="modal" data-target="#invest">Invest</a></li>
    <li><a href="#careers" data-toggle="modal" data-target="#deposit">Deposit</a></li>
    <li><a href="#contact">Withdraw</a></li>
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
      <div v-else class="modal-body alert alert-danger" role="alert">
      <h4>Insufficient Balance</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="pvp_checkout_button"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="jumbotron">
<div class="row w-100">
        <div class="col-md-3">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><i class="fa fa-usd" aria-hidden="true"></i></div>
                <div class="text-info text-center mt-3"><h4>Balance</h4></div>
                <div class="text-info text-center mt-2"><h1>{{this.wallet_balance}}</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><i class="fa fa-money" aria-hidden="true"></i>
</div>
                <div class="text-danger text-center mt-3"><h4>cashout </h4></div>
                <div class="text-danger text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
                <div class="text-success text-center mt-3"><h4>Invitees</h4></div>
                <div class="text-success text-center mt-2"><h1>{{this.refferals}}</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
                <div class="card border-warning shadow text-warning p-3 my-card" ><i class="fa fa-btc" aria-hidden="true"></i></div>
                <div class="text-warning text-center mt-3"><h4>Investments</h4></div>
                <div class="text-warning text-center mt-2"><h1>{{this.total_bids}}</h1></div>
            </div>
        </div>
     </div>
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
        <button class="btn btn-block btn-primary" @click="logout()">log out</button>
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
        withdrawal: 0
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
  created () {
    let jqueryScript = document.createElement('script')
    jqueryScript.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/jquery-3.4.1.min.js')
    document.head.appendChild(jqueryScript)
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/pvp.min.js')
    document.head.appendChild(externalScript)
  },
  updated: function () {
    window.location.href('/dash')
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
        } else {
          this.Investment = 2
          console.log('***')
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
      var baseURL = 'https://wise-fex.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      let field = document.getElementById('code')
      field.value = finalURL
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
    deposit: function () {
      let jqueryScript = document.createElement('script')
      jqueryScript.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/jquery-3.4.1.min.js')
      document.head.appendChild(jqueryScript)
      let externalScript = document.createElement('script')
      externalScript.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/pvp.min.js')
      document.head.appendChild(externalScript)
    },
    withdraw: function () {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('withdrawals').add({
        amount: parseFloat(this.form.withdrawal),
        status: false
      })
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
.c-dashboardInfo {
  margin-bottom: 15px;
}
.c-dashboardInfo .wrap {
  background: #ffffff;
  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 25px 20px;
  height: 100%;
}
.c-dashboardInfo__title,
.c-dashboardInfo__subInfo {
  color: #6c6c6c;
  font-size: 1.18em;
}
.c-dashboardInfo span {
  display: block;
}
.c-dashboardInfo__count {
  font-weight: 600;
  font-size: 2.5em;
  line-height: 64px;
  color: #323c43;
}
.c-dashboardInfo .wrap:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
}

.c-dashboardInfo:nth-child(1) .wrap:after {
  background: linear-gradient(82.59deg, #00c48c 0%, #00a173 100%);
}
.c-dashboardInfo:nth-child(2) .wrap:after {
  background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
}
.c-dashboardInfo:nth-child(3) .wrap:after {
  background: linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%);
}
.c-dashboardInfo:nth-child(4) .wrap:after {
  background: linear-gradient(81.67deg, #ff647c 0%, #1f5dc5 100%);
}
.c-dashboardInfo__title svg {
  color: #d7d7d7;
  margin-left: 5px;
}
.MuiSvgIcon-root-19 {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
}
.my-card
{
    position:absolute;
    left:40%;
    top:-20px;
    border-radius:50%;
}
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
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
    color: #0062cc;
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
</style>
