/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
  <div class="container-fluid">
  <div v-if="this.activated">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid"> <a class="navbar-brand" href="#">BITBID</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
               <b-list-group style="max-width: 300px;">
                 <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                 <span class="mr-auto">{{this.user.data.displayName}}</span>
                <b-badge></b-badge>
               </b-list-group-item>
               </b-list-group>
            </ul>
            <div class="d-flex" style="padding-right:10px">
                <div class="text-center text-secondary alert alert-primary" data-toggle="modal" data-target="#verify">
                click to verify a payment
           </div>
            </div>
        </div>
      <!-- Modal -->
<div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hold Up!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
<div id="loadingIndicator" v-if="transaction_status == 1">
<div class="loadingBar" id="loadingBar1"></div>
<div class="loadingBar" id="loadingBar2"></div>
<div class="loadingBar" id="loadingBar3"></div>
<div class="loadingBar" id="loadingBar4"></div>
</div>
<div v-else-if="transaction_status == 2" class="text-center text-secondary alert alert-success">
<h4>Transaction id: <b>{{receipt_no}} </b> </h4>
<h5>Transaction type: <b>{{transaction_type}}</b></h5>
<h6>Transaction status: <b>Success</b></h6>
</div>
<div v-else class="text-center text-danger alert alert-primary">
  <h3>Transaction: <b>{{receipt_no}} </b> failed due:  </h3>
  <ol>
  <li>Duplicate existing transaction</li>
  <li>The transaction was already verified</li>
  </ol>
  <h5>Transaction type: <b>{{transaction_type}}</b></h5>
  <h6>Transaction status: <b>Failed</b></h6>
</div>
<label for="receipt">Verification status of </label>
<input id="receipt_no" name="receipt" v-model="receipt_no" class="form-control mr-sm-2" type="search" placeholder="ref_no:  5993859372
" aria-label="Search">
      </div>
      <div class="modal-footer" v-if="transaction_status == 1">
        <button type="button" class="btn btn-outline-danger"  @click="reload()" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-primary" @click="verify()">Verify</button>
      </div>
      <div class="modal-footer" v-else-if="transaction_status == 2">
        <button type="button" class="btn btn-outline-success"  @click="reload()" data-dismiss="modal">Home</button>
      </div>
      <div class="modal-footer" v-else-if="transaction_status == 3">
        <button type="button" class="btn btn-outline-danger"  @click="reload()" data-dismiss="modal">Home</button>
      </div>
    </div>
  </div>
</div>
    </div>
</nav>

<hr>
<div>
<div>
<div class="container bootstrap snippets bootdey">
    <div class="row">
    <div class="col-md-4">
            <div class="widget lazur-bg p-xl">
                <h2>Refferals</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
                 <hr>
                  <b><label style="font-size: 40px;">{{this.refferals}}</label></b>
            </div>
</div>
<div class="col-md-4">
            <div class="widget red-bg p-xl">
                <h2>Amount sent</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-arrow-up-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"/>
</svg>
                <hr>
                <b><label style="font-size: 40px;">{{this.amount_sent}}</label></b>
            </div>
</div>
<div class="col-md-4">
            <div class="widget navy-bg p-xl">
                <h2>Amount received</h2>
   <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
</svg>
                <hr>
                <b><label style="font-size: 40px;">{{this.amount_received}}</label></b>
     </div>
</div>
</div>
    <div class="row">
    <div class="col-md-4">
            <div class="widget yellow-bg p-xl">
                <h2>Wallet Balance</h2>
                <ul class="list-unstyled m-t-md" style="padding-left:110px;">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>

                    </li>
                </ul>
                <hr>
                <b><label style="font-size: 40px;">{{this.wallet_balance}}</label></b>
            </div>
</div>
<!-- Modal -->
<div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="deposit" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Deposit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
  <div class="form-group">
    <input type="text" class="form-control" id="number" required autofocus v-model="form.number" aria-describedby="emailHelp" placeholder="Enter phone number">
  </div>
  <div class="form-group">
    <input type="number" required autofocus v-model="form.amount" class="form-control" id="amount" placeholder="amount">
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" @click="deposit()">Deposit</button>
      </div>
    </div>
  </div>
</div>
<div class="col-md-4">
            <div class="widget navy-bg p-xl">
                <h2>Total Bids</h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg>
                <hr>
                <b><label style="font-size: 40px;">{{this.total_bids}}</label></b>
     </div>
</div>

</div>
</div>
</div>
<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Bids History</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>#</th>
                                    <th>Bid Date</th>
                                    <th>Payment Method</th>
                                    <th>Pay Days</th>
                                    <th>Amount</th>
                                    <th>Transaction</th>
                                    <th>Timer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bid in bids" :key="bid.id">
                                    <td>{{bid.id}}</td>
                                    <td>{{bid.date}}</td>
                                    <td>Local Wallet</td>
                                    <td>{{bid.period}}</td>
                                    <td>{{bid.investment}}</td>
                                    <td v-if="!bid.started"><span class="badge badge-boxed badge-soft-warning">pending</span></td>
                                    <td v-else><span class="badge badge-boxed badge-soft-running">running</span></td>
                                    <td>
                                    <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="bid.startdate"
      :end-time="bid.stopdate"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="''"
      label-position="begin"
      :end-text="'Bid is mature'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
    </vue-countdown-timer>
                                    </td>
                                    <td><button class="btn btn-sm btn-primary" v-on:click="starttimer(bid.id,bid.period)">start timer</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--end table-responsive-->
                    <div class="pt-3 border-top text-right">
                    <input type="text" id="invitelink" class="form-control col-md-5" placeholder="your invite link">
                    <button type="button" class="btn btn-danger btn-md  " data-toggle="modal" data-target="#deposit">
  Deposit
</button>
                  <button type="button" class="btn btn-success btn-md " @click="genaratelink">
                  get link
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>
</button>
<!-- Modal -->
<div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="withdraw()">Withdraw</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="invest" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Investment today is a source of income tomorrow.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form v-if="Investment == 0">
  <div class="form-group">
    <input type="number" class="form-control" id="period" required autofocus  aria-describedby="emailHelp" placeholder="number of days">
  </div>
  <div class="form-group">
    <input type="number" required autofocus  class="form-control" id="investment" placeholder="amount">
  </div>
</form>
<div  v-else-if="Investment == 1" class="alert alert-warning" role="alert">
<h3>Investment Successfull activate it to earn</h3>
</div>
<div  v-else-if="Investment == 2" class="alert alert-warning" role="alert">
<h4>Bid Failed due to insufficient wallet_balance
<p><a href="https://ravesandbox.flutterwave.com/pay/bitbid">Kindly Top Here</a>Or Try Biding a smaller amount</p>
</h4>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-primary" @click="invest()">Invest</button>
      </div>
    </div>
  </div>
</div>

                    <!-- <a href="#" class="text-warning">View all <i class="fa fa-eye"></i></a> -->
                       <button class="btn btn-secondary" data-toggle="modal" data-target="#invest">
                       Invest
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
</svg>
                       </button>
                       <button type="button" class="btn btn-warning btn-md" data-toggle="modal" data-target="#withdraw">
 Withdraw
</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!--footer-->
<footer>
        <div class="container-fluid">
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <span>Copyright © 2021, All Right ninja corp</span>
                    </div>
                    <div class="col-md-4 form-group">
                        <input type="email" required autofocus id="clientemail" class="form-control" placeholder="email us">
                    </div>
                     <div class="col-md-4 form-group">
                        <button class="btn btn primary">send</button>
                    </div>
                    <!-- End Col -->
                    <!-- End col -->
                </div>
                <!-- End Row -->
            </div>
            <!-- End Copyright Container -->
        </div>
        <!-- End Copyright -->
        <!-- Back to top -->
        <div class="back-to-top">
            <button class="btn btn-dark" title="Back to Top" style="display: block;">
                <a href="#/"><i class="fa fa-angle-up"></i></a>
            </button>
        </div>
        <!-- End Back to top -->
        </div>
</footer>

  </div>
  <div v-else>
  <div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Your account is Deactivated!</h4>
  <p><router-link class="router-link-active" to="/activate">Pay your activation fees here</router-link></p>
  <hr>
  <p class="mb-0">For more information contact bidbit@gmail.com</p>
</div>

  </div>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        number: '',
        amount: 0
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
      now: 0,
      doc_ref: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  created () {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
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
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.bids.push(doc.data())
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
      window.location.reload()
    },
    startCallBack: function (x) {
      console.log(x)
    },
    endCallBack: function (x) {
      console.log(x)
    },
    invest: function () {
      let investment = document.getElementById('investment').value
      let period = document.getElementById('period').value
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.email).get().then(snapshot => {
        if (parseFloat(investment) <= snapshot.data().wallet_balance) {
          this.Investment = 1
          let balance = snapshot.data().wallet_balance - parseFloat(investment)
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            wallet_balance: balance
          })
          // eslint-disable-next-line camelcase
          let cust_id = parseFloat(this.total_bids) + 1
          db.collection('users').doc(firebase.auth().currentUser.email).collection('investments').add({
            id: cust_id,
            investment: parseFloat(investment),
            period: parseFloat(period),
            date: new Date().toDateString(),
            started: false
          })
        } else {
          this.Investment = 2
          console.log('***')
        }
      })
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://bitbid.netlify.app/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      let field = document.getElementById('invitelink')
      field.value = finalURL
    },
    reload: function () {
      window.location.reload()
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
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-51ca022e8a64b1ff7a3e67ab623cc585-X',
        tx_ref: 'Deposit',
        amount: this.form.amount,
        currency: 'KES',
        country: 'KE',
        payment_option: 'mpesa,card,ussd,account',
        customer: {
          email: firebase.auth().currentUser.email,
          name: this.user.data.displayName,
          phone_number: this.form.number
        },
        callback: function (data) {
          let db = firebase.firestore()
          db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(data.flw_ref).set({
            transaction_id: data.transaction_id,
            transaction_status: data.status,
            date: new Date(),
            amount: data.amount,
            redeemed: false,
            reference: data.flw_ref,
            tx_ref: data.tx_ref
          })
        }
      })
    },
    withdraw: function () {
      console.log(this.wallet_balance + 3)
    }
  }
}
</script>
<style scoped>
@import '../assets/footer.css';
@import url("https://fonts.googleapis.com/css?family=Raleway");
#description {
position: absolute;
left: 50%;
top: 150px;
transform: translate(-50%, -50%);

text-align: center;
font-family: Raleway;
color: white;
}

#loadingIndicator {
position: relative;
height: 90px;
width: 150px;
top: 10px;
left: 50%;
transform: translate(-50%, 0%);
}

.loadingBar {
position: absolute;
top: 30px;
width: 30px;
height: 30px;
border-radius: 30px;
animation: loadingAnimation 3s infinite;
}

#loadingBar1 {
background: #1e00ff;
animation-delay: 0s;
left: 0px;
}
#loadingBar2 {
background: #ff0061;
animation-delay: 0.2s;
left: 40px;
}

#loadingBar3 {
background: #e1ff00;
animation-delay: 0.4s;
left: 80px;
}
#loadingBar4 {
background: #00ff9e;
animation-delay: 0.6s;
left: 120px;
}

@keyframes loadingAnimation {
0% {
top: 30px;
}
20% {
top: 0px;
}
50% {
height: 30px;
top: 30px;
border-radius: 5px;
}
75% {
height: 90px;
top: 0px;
border-radius: 30px;
}
100% {
height: 30px;
top: 30px;
}
}

.p-xl {
  padding: 40px;
}

.lazur-bg {
  background-color: #23c6c8;
  color: #ffffff;
}

.red-bg {
  background-color: #ed5565;
  color: #ffffff;
}

.navy-bg {
  background-color: #1ab394;
  color: #ffffff;
}

.yellow-bg {
  background-color: #f8ac59;
  color: #ffffff;
}
.purple-bg {
  background-color: #cb59f8;
  color: #ffffff;
}
.royal-bg {
  background-color: #11139e;
  color: #ffffff;
}

.widget {
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
}

.widget h2, .widget h3 {
  margin-top: 5px;
  margin-bottom: 0;
  border-bottom:1px dotted white;
}

.m-t-md {
  margin-top: 20px;
}
body{
    background:#f5f5f5;
    margin-top:20px;
}
.card {
    border: none;
    -webkit-box-shadow: 1px 0 20px rgba(96,93,175,.05);
    box-shadow: 1px 0 20px rgba(96,93,175,.05);
    margin-bottom: 30px;
}
.table th {
    font-weight: 500;
    color: #827fc0;
}
.table thead {
    background-color: #f3f2f7;
}
.table>tbody>tr>td, .table>tfoot>tr>td, .table>thead>tr>td {
    padding: 14px 12px;
    vertical-align: middle;
}
.table tr td {
    color: #8887a9;
}
.thumb-sm {
    height: 32px;
    width: 32px;
}
.badge-soft-warning {
    background-color: rgba(248,201,85,.2);
    color: #f85555;
}

.badge {
    font-weight: 500;
}
.badge-soft-primary {
    background-color: rgba(96,93,175,.2);
    color: #605daf;
}
.badge-soft-running {
    background-color: rgba(96,93,175,.2);
    color: #13b135;
}

ul {
    list-style: none;
    display: flex;
    margin-bottom: 0
}

.social-icon {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    border-radius: 7px;
    margin-right: 11px;
    cursor: pointer
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
.social-twitter {
    background-color: #55acee
}

.social-facebook {
    background-color: #3b5999
}

.social-linkedin {
    background-color: #0077B5
}

.social-google {
    background-color: #dd4b39
}

.social-instagram {
    background-color: #dd4b39
}

.social-icon i {
    transition: 0.4s all
}
</style>
