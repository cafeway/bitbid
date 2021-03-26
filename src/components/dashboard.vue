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
                <div class="text-center text-secondary alert alert-primary">
               ENTER YOUR TRANSACTION ID
           </div>
            </div>
        </div>
        <form class="form-inline my-2 my-lg-0" style="padding-top:-10">
      <input class="form-control mr-sm-2" type="search" placeholder="e.g Rave-Pages736117551155" aria-label="Search">
      <button class="btn btn-success my-2 my-sm-0" type="button" @click="verify()">recharge with id</button>
    </form>
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
<div class="col-md-4" @click="deposit()">
            <div class="widget purple-bg p-xl">
                <h2 style="padding-bottom:5px;">Deposit</h2>
     <svg xmlns="http://www.w3.org/2000/svg"  padding-top="40px" width="140" height="170" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
            </div>
</div>
<div class="col-md-4">
            <div class="widget royal-bg p-xl">
                <h2 style="padding-bottom:5px;">Withdraw</h2>
     <svg xmlns="http://www.w3.org/2000/svg" width="140" height="170" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
</svg>
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
                    <h5 class="header-title pb-3 mt-0">Your bids</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Paid Date</th>
                                    <th>Amount</th>
                                    <th>Transaction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Product Devlopment</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="thumb-sm rounded-circle mr-2"> Kevin Heal</td>
                                    <td>Paypal</td>
                                    <td>5/8/2018</td>
                                    <td>$15,000</td>
                                    <td><span class="badge badge-boxed badge-soft-warning">panding</span></td>
                                </tr>
                                <tr>
                                    <td>New Office Building</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="thumb-sm rounded-circle mr-2"> Frank M. Lyons</td>
                                    <td>Paypal</td>
                                    <td>15/7/2018</td>
                                    <td>$35,000</td>
                                    <td><span class="badge badge-boxed badge-soft-primary">Success</span></td>
                                </tr>
                                <tr>
                                    <td>Market Research</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="thumb-sm rounded-circle mr-2"> Angelo Butler</td>
                                    <td>Pioneer</td>
                                    <td>30/9/2018</td>
                                    <td>$45,000</td>
                                    <td><span class="badge badge-boxed badge-soft-warning">Panding</span></td>
                                </tr>
                                <tr>
                                    <td>Website &amp; Blog</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="thumb-sm rounded-circle mr-2"> Phillip Morse</td>
                                    <td>Paypal</td>
                                    <td>2/6/2018</td>
                                    <td>$70,000</td>
                                    <td><span class="badge badge-boxed badge-soft-warning">Success</span></td>
                                </tr>
                                <tr>
                                    <td>Product Devlopment</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="thumb-sm rounded-circle mr-2"> Kevin Heal</td>
                                    <td>Paypal</td>
                                    <td>5/8/2018</td>
                                    <td>$15,000</td>
                                    <td><span class="badge badge-boxed badge-soft-primary">panding</span></td>
                                </tr>
                                <tr>
                                    <td>New Office Building</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="thumb-sm rounded-circle mr-2"> Frank M. Lyons</td>
                                    <td>Paypal</td>
                                    <td>15/7/2018</td>
                                    <td>$35,000</td>
                                    <td><span class="badge badge-boxed badge-soft-primary">Success</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--end table-responsive-->
                    <div class="pt-3 border-top text-right">
                    <a href="#" class="text-warning">View all <i class="fa fa-eye"></i></a>
                       <button class="btn btn-outline-success"><i class="fa fa-check-circle-o" aria-hidden="true"></i>Bid</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!--footer-->
<footer id="dk-footer" class="dk-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <div class="dk-footer-box-info">
                        <a href="index.html" class="footer-logo">
                            <!-- <img src="images/footer_logo.png" alt="footer_logo" class="img-fluid"> -->
                        </a>
                        <p class="footer-info-text">
                         Bidbid Invest on Your peers
                        </p>
                        <div class="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- End Social link -->
                    </div>
                    <!-- End Footer info -->
                    <div class="footer-awarad">
                        <img src="images/icon/best.png" alt="">
                        <!-- <p>Best Design Company 2019</p> -->
                    </div>
                </div>
                <!-- End Col -->
                <div class="col-md-12 col-lg-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us">
                                <div class="contact-icon">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <!-- End contact Icon -->
                                <div class="contact-info">
                                    <h3>Email us</h3>
                                    <p>Bitbid@gmail.com</p>
                                </div>
                                <!-- End Contact Info -->
                            </div>
                            <!-- End Contact Us -->
                        </div>
                        <!-- End Col -->
                        <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">
                                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <!-- End contact Icon -->
                                <div class="contact-info">
                                    <h3>0743126150</h3>
                                    <p>Give us a call</p>
                                </div>
                                <!-- End Contact Info -->
                            </div>
                            <!-- End Contact Us -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Contact Row -->
                    <div class="row" id="address">
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    <h3>NetWorth</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                            </div>
                            <!-- End Footer Widget -->
                        </div>
                        <!-- End col -->
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget">
                                <div class="section-heading">
                                    <h3>Active bids</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <p><!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                                send us your mail and we will get in touch</p>
                                <form action="#">
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <input type="email" class="form-control" placeholder="Email Address">
                                            <button type="submit" lang="btn btn-md btn-success">
                                              <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <!-- End form -->
                            </div>
                            <!-- End footer widget -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Row -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Widget Row -->
        </div>
        <!-- End Contact Container -->
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <span>Copyright © 2021, All Right ninja corp</span>
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
</footer>

  </div>
  <div v-else>
  <div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Your account is Deactivate!</h4>
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
const Flutterwave = require('flutterwave-node-v3')
const flw = new Flutterwave('FLWPUBK_TEST-51ca022e8a64b1ff7a3e67ab623cc585-X', 'FLWSECK_TEST-40f50b8a0e514349a47be4d0acc29e0f-X')
export default {
  data () {
    return {
      refferals: 0,
      amount_sent: 0,
      amount_received: 0,
      wallet_balance: 0,
      activated: false,
      verified: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  mounted: function () {
    firebase.firestore().collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.refferals = data.refferals
      this.amount_sent = data.amount_sent
      this.amount_received = data.amount_received
      this.wallet_balance = data.wallet_balance
      this.activated = data.activated
    })
  },
  methods: {
    deposit: function () {
      window.location.href = 'https://ravesandbox.flutterwave.com/pay/bitbidpayments'
    },
    verify: function () {
    //   const axios = require('axios')
    //   const headers = { 'Content-Type': 'application/json',
    //     'Authorization': '{{FLWSECK_TEST-40f50b8a0e514349a47be4d0acc29e0f-X}}'}
    //   axios.get('https://api.flutterwave.com/v3/transactions/123456/verify', {headers})
    //     .then(response => {
    //       console.log(response)
    //     })
      // eslint-disable-next-line camelcase
      const fetch_transaction = async () => {
        const payload = {
          'from': '2020-01-01',
          'to': '2020-05-05'
        }
        const response = await flw.Transaction.fetch(payload)
        console.log(response)
      }
      return fetch_transaction()
    }
  }
}
</script>
<style scoped>
@import '../assets/footer.css';
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
    color: #f8c955;
}

.badge {
    font-weight: 500;
}
.badge-soft-primary {
    background-color: rgba(96,93,175,.2);
    color: #605daf;
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
