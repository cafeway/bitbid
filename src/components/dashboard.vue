/* eslint-disable camelcase */
/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
  <div class="container-fluid">
  <div v-if="this.connected">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid"> <a class="navbar-brand" href="#">BITBID Investments</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
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
            </div>
             <div class="d-flex" style="padding-right:10px">
                <div class="text-center text-secondary alert alert-success" @click="logout()">
                Sign out
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
    <div class="col-md-4" @click="route()">
            <div class="widget lazur-bg p-xl">
                <h2>Awards</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
                 <hr>
                  <b><label style="font-size: 40px;">{{this.refferals}}</label></b>
            </div>
</div>
<div class="col-md-4">
            <div class="widget red-bg p-xl">
                <h2>Transactions</h2>
   <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
</svg>
                <hr>
                <b><label style="font-size:40px;">mpesa</label></b>
            </div>
</div>
<div class="col-md-4">
            <div class="widget mpesa-bg p-xl">
                <h2>Amount received</h2>
   <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
</svg>
                <hr>
                <b><label style="font-size: 20px;">{{this.amount_received}}</label></b>
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
        <h5 class="modal-title" id="exampleModalLongTitle">Till number: 5475005</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="alert alert-primary" role="alert">
       <h5><u>Payment Procedure</u></h5>
       1.Sim toolkit <br>
       2.Buy Goods and services <br>
       3.Enter Till number<br>
       4.Enter  Amount & Pay<br>
       5.Refresh your dashboard and Invest!!!
       </div>
       <div class="alert alert-success" role="alert">
         For payments use the phone number in our systems....!
         <br>
         <hr>
         Contact admins 4 further assistance
       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <div id="pvp_checkout_button">
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-md-4">
            <div class="widget navy-bg p-xl">
                <h2>Total Investments</h2>
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
                    <h5 class="header-title pb-3 mt-0">Cheda Zako!</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>#</th>
                                    <th>Amount</th>
                                    <th>Transaction Status</th>
                                    <th>Timer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bid in bids" :key="bid.id">
                                    <td>{{bid.id}}</td>
                                    <td>{{bid.investment}}</td>
                                    <td v-if="bid.state == 'running'"><span class="badge badge-boxed badge-soft-warning">pending</span></td>
                                    <td v-else-if="bid.state =='matured'"><span class="badge badge-boxed badge-soft-running">matured</span></td>
                                    <td v-else><span class="badge badge-boxed badge-soft-primary">cashed out</span></td>
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
                                    <td v-if="bid.state == 'running'"><button class="btn btn-sm btn-default disabled"><strike>running</strike></button></td>
                                    <td v-else-if="bid.state == 'matured'" ><button  class="btn btn-sm btn-outline-success" @click="cashout(bid.id)">Cash-out</button></td>
                                     <td v-else><p class="alert alert-success" role="alert">Cashed out</p></td>
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
      <input
        type="text"
        placeholder="Your mpesa number"
        id="cashout_no"
        v-model="form.cashout_no"
        class="form-control"
        />
        <hr>
        <input
        type="number"
        value="0"
        placeholder="amount"
        id="withdrawal"
        v-model="form.withdrawal"
        class="form-control"
        />
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
    <div class="dropdown">
  <select name="cars" id="rates">
    <option value="1">15% for 24hrs</option>
    <option value="3">40% for 72hours</option>
  </select>
</div>
  </div>
  <div class="form-group">
    <input type="number" required autofocus  class="form-control" id="investment" placeholder="amount">
  </div>
</form>
<div  v-else-if="Investment == 1" class="alert alert-warning" role="alert">
<h3>Your Investment Successfull...!</h3>
</div>
<div  v-else-if="Investment == 2" class="alert alert-warning" role="alert">
<h4>Bid Failed due to insufficient wallet_balance
<p> Kindly Top Or Try Investing a smaller amount</p>
</h4>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" @click="refresh()" data-dismiss="modal">Close</button>
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
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#withdraw">Withdraw</button>
                     <!-- <button type="button" class="btn btn-warning btn-md" @click="verify_trans()">
 Withdraw
</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!-- Footer -->
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!--social media-->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn btn-outline-light mb-4">
              Holla at us!
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <p>
        Invest with us to secure tomorrow!
      </p>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:
     BitBid
  </div>
  <!-- Copyright -->
</footer>
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
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        number: '',
        amount: 0,
        withdrawal: 0,
        cashout_no: ''
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
      doc_ref: '',
      connected: true,
      profit: 0
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  created () {
    let jquery = document.createElement('script')
    jquery.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/jquery-3.4.1.min.js')
    document.head.appendChild(jquery)
    let external = document.createElement('')
    external.setAttribute('src', 'https://pvp.proxyapi.co.ke/dist/pvp.min.js')
    document.head.appendChild(external)
  },
  mounted: function () {
    this.profit = 0
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
    route: function () {
      this.$router.push('/profile')
    },
    refresh: function () {
      window.location.reload()
    },
    // eslint-disable-next-line camelcase
    cashout: function (bid_id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
        snapshot.forEach(doc => {
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.cashed) {
              let cashout = snapshot.data().investment
              db.collection('users').doc(this.user.data.email).get().then(snapshot => {
              // eslint-disable-next-line camelcase
                if (data.period === 1) {
                  this.profit = cashout * 0.15
                } else {
                  this.profit = cashout * 0.40
                }
                // eslint-disable-next-line camelcase
                let amount_received = snapshot.data().amount_received + cashout + this.profit
                let wb = snapshot.data().wallet_balance + cashout + this.profit
                db.collection('users').doc(this.user.data.email).update({
                  wallet_balance: wb,
                  amount_received: amount_received
                })
                db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                  state: 'cashed',
                  matured: true,
                  cashed: true
                })
                window.location.reload()
              })
            } else {
              this.$swal('cashed out .... please refresh')
              window.location.reload()
            }
          })
        })
      })
    },
    verify_trans: function () {
      var request = require('request')
      var options = {
        'method': 'GET',
        'url': 'https://api.flutterwave.com/v3/transactions/123456/verify',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer FLWSECK_TEST-40f50b8a0e514349a47be4d0acc29e0f-X'
        }
      }
      request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log(response.body)
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
      let period = document.getElementById('rates').value
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
          var startdate = new Date()
          var startdateconverted = new Date().getTime()
          var maturedate = startdate.setDate(startdate.getDate() + parseFloat(period))
          console.log(startdateconverted)
          db.collection('users').doc(firebase.auth().currentUser.email).collection('investments').add({
            id: cust_id,
            investment: parseFloat(investment),
            period: parseFloat(period),
            date: new Date().toDateString(),
            started: false,
            state: 'running',
            cashed: false,
            startdate: startdateconverted,
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
      var baseURL = 'https://bitbidltd.com/#/register'
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
      var axios = require('axios').default
      axios({
        method: 'GET',
        url: 'https://api.proxyapi.co.ke/sandbox/mpesa/v1/auth',
        headers: {
          'X-Authorization': 'Basic 40ca323c8f19bd3c34df48320881110de55fc3f48344e0000d1c0144fb66235b',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (response) {
        console.log(response)
      })
    },
    withdraw: function () {
      let db = firebase.firestore()
      // eslint-disable-next-line camelcase
      let amount_out = parseFloat(this.form.withdrawal)
      // eslint-disable-next-line camelcase
      let balance = this.wallet_balance - amount_out
      let number = parseFloat(this.form.cashout_no)
      // eslint-disable-next-line camelcase
      if (amount_out <= this.wallet_balance) {
        db.collection('users').doc(this.user.data.email).update({
          wallet_balance: balance
        })
        db.collection('cashout').add({
          ref: Math.floor(Math.random() * 1000000000),
          sent: false,
          amount: amount_out,
          number: number,
          email: this.user.data.email
        })
        this.$swal('Your cashout was  successfull!....Your mpesa will receive payments in the next 30min  watchout!')
      } else {
        this.$swal('insufficient funds....try as smaller amount')
      }
    }
  }
}
</script>
<style scoped>
@import '../assets/footer.css';
@import url("https://fonts.googleapis.com/css?family=Raleway");
        .load{
            width: 330px;
            height: 330px;
            display: flex;
            position:absolute;
            top: 35%;
            justify-content: center;
            align-items: center;
            background-color: #f35430;
            border-radius: 50%;
            animation: shadow 1.4s ease-in-out infinite;
        }
        .fingers{
            background-color: #f7c86b;
            width: 45px;
            margin-right: 5px;
            border-radius: 15px 15px 25px 25px;
            position: relative;
            animation: move 1.5s ease-in-out infinite;
        }
        .fingers:nth-child(1){
            height: 130px;
            top: 5px;
            margin-left: 24px;
        }
        .fingers:nth-child(2){
            height: 150px;
            animation-delay: .1s;
        }
        .fingers:nth-child(3){
            height: 170px;
            top: -5px;
            animation-delay: .2s;
        }
        .fingers:nth-child(4){
            height: 150px;
            animation-delay: .3s;
        }
        .pollex{
            width: 60px;
            height: 45px;
            position: relative;
            top: 5px;
            background-color: #f7c86b;
            border-radius: 5px 15px 45px 5px;
            animation: move2 1.5s linear infinite;
            animation-delay: .4s;
        }
        .nails{
            width: 30px;
            height: 30px;
            border-radius: 50px 50px 20px 20px;
            background-color: #faf5c3;
            position: absolute;
            bottom: 13px;
            left: 50%;
            transform: translateX(-50%);
        }
        .fingers::before,.fingers::after{
            content: '';
            position: absolute;
            width: 30px;
            height: 5px;
            background-color: #e69b4c;
            border-radius: 5px;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
        .fingers::before{
            top: 20px;
        }
        @keyframes move{
            0%{transform: scaleY(1) translateY(0px)}
            20%{transform: scaleY(.8) translateY(-30px)}
            30%{transform: scaleY(.8) translateY(-30px)}
            40%{transform: scaleY(1) translateY(0px)}
            100%{transform: scaleY(1) translateY(0px)}
        }
        @keyframes move2{
            0%{transform: scaleY(1) translateY(0px)}
            20%{transform: scaleY(.9) translateY(-20px)}
            30%{transform: scaleY(.9) translateY(-20px)}
            40%{transform: scaleY(1) translateY(0px)}
            100%{transform: scaleY(1) translateY(0px)}
        }
        @keyframes shadow{
            0%{box-shadow: 0 0 0 5px #fff}
            100%{box-shadow: 0 0 0 20px #f35430}
        }
.hover {
  animation: hover 2s alternate ease-in-out infinite;
}

@keyframes hover {
  to {
    transform: translate(0, 0);
  }
  from {
    transform: translate(0, 8px);
  }
}

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
  background-color: #FFD700;
  color: #ffffff;
}

.red-bg {
  background-color: #50C878;;
  color: #ffffff;
}

.navy-bg {
  background-color: #800080 ;
  color: #ffffff;
}
.mpesa-bg {
  background-color: #00008B;
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
    color: #3c39d4;
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
