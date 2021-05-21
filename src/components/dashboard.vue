<template>
<div class="container">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" target="_blank" href="">
                HORTLITE FIBRE
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="ml-auto navbar-nav text-uppercase">
                    <li class="nav-item active">
                        <a class=" nav-link p-3" href="#"><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class=" text-danger nav-link p-3" id="timer" href="">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3" href="">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3" href="">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3" href="/">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<section id="about-us" class="py-5">
    <div class="container">
        <div class="row">
             <!--left sidebar-->
            <div class="col-md-3 pr-md-4">
                <div class="sidebar-left">
                    <!--sidebar menu-->
                </div>
            </div>
            <!--Content-->
            <div class="col-md-12">
                <div class="dashboard-area">
                    <div class="row">
                      <a class="position-absolute ml-3 mt-3 text-white" href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit cover images"><i class="fas fa-cog"></i></a>
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-md-4">
                                                                        <div class="loader">
  <div class="loader__image">
    <div class="loader__coin">
  <img src="https://www.dropbox.com/s/fzc3fidyxqbqhnj/loader-coin.png?raw=1" alt="">
  </div>
    <div class="loader__hand">
  <img src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1" alt="">
    </div>
  </div>
</div>
 <h4>{{this.wallet}}<small><sub>Ksh</sub></small></h4>
 <p><small>Balance</small></p>
                                            </div>
                                              <div class="col-md-4">
                                              <div class="col-md-6">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" fill="blue" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
                                              </div>
                                              <div class="col-md-6"><h4>{{this.refferals * 50}}<sub><small>ksh</small></sub></h4><sub><small> downline bonus</small></sub></div>
                                              </div>
                                            <div class="col-md-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" fill="#FFD700" class="bi bi-currency-exchange" viewBox="0 0 16 16">
  <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
</svg>
<h4>{{this.cashout}}<small><sub>Ksh</sub></small></h4>
 <p><small>Amount Earned</small></p>
                                            </div>
                                        </div>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Dashboard</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">User Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">How To Deposit</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-withdraw" role="tab" aria-controls="pills-contact" aria-selected="false">Withdraw</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-invest" role="tab" aria-controls="pills-contact" aria-selected="false">Invest</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-6"  data-toggle="modal" data-target="#transactions">
                                            <a class="member-item">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div  class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-warning text-center">
                                                                    <i class="fa fa-credit-card"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-warning"><b>Transactions</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" >
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-success  text-center" title="1 new comment">
                                                                    <i class="fa fa-users"></i>
                                                                </div>
                                                            </div>
                                                            <div @click="toRefs()" class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-success">Downlines</p>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                   <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLongTitle">Redeem url!..send it to friends as a refferal</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <a id = "link" class=" text text-success" >{{invitelink}}</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="genaratelink()" >Share link</button>
      </div>
    </div>
  </div>
</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6" @click="toInvestment()">
                                            <a class="member-item">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-danger text-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
</svg>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-danger"><b>Investments</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" href="/sharesdash">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-facebook text-center">
                                                                    <i class="fa fa-clock-o"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p>Running Shares</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div> -->
                                        <!-- <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" href="/sharesdash">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-success text-center">
                                                                    <i class="fa fa-graduation-cap"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p>Matured Shares</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div class="p-3 border mb-3">
                                       <div class="row">
                                       <div class="col-md-6">
                                          <a class="position-absolute" style="right: 25px" href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit profile"><i class="fas fa-cog"></i></a>
                                        <p class="text-secondary"><b>Username:  </b>{{this.user.data.displayName}} <i class="fa fa-pencil"></i><p>
                                        <p class="text-secondary"><b>Address:  </b> {{this.user.data.email}}</p>
                                        <p class="text-secondary"><b>Phone:  </b>{{this.phone}}</p>
                                        <p class="text-secondary"><b>Invite Link:</b><button class="btn btn-primary" type="button" @click="GetLink()">Invite Link</button></p>
                                       </div>
                                       <div class="col-md-6">
                                       <p class="text-danger"><b>Current Balance</b>   <span class="badge badge-danger">{{this.wallet}}</span></p>
                                       <p class="text-success"><b>Cashouts</b>   <span class="badge badge-success">{{this.cashout}}</span></p>
                                        <p class="text-primary"><b>Refferals</b>   <span class="badge badge-primary">{{this.refferals}}</span></p>
                                       </div>
                                       </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                  <div class="container">
                                  <div class="row">
                                    <div class="col-md-3">
                                    <div class="alert alert-success text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">KENYA</h4></div>
                                      <hr>
                                    <button class="btn btn-success btn-block">Lipa na Mpesa</button>
                                    </div>
                                    </div>
                                      <div class="col-md-3">
                                    <div class="alert alert-warning text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">UGANDA</h4></div>
                                      <hr>
                                    <h6 class="text-secondary">*165*1*3*1*0743******#</h6>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-primary text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Tanzania</h4></div>
                                      <hr>

                                    <h6 class="text-secondary">*150*00#</h6>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-danger text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">RWANDA</h4></div>
                                      <hr>

                                    <h6 class="text-secondary">*830#</h6>
                                    </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                                    <div class="tab-pane fade" id="pills-withdraw" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <button class="btn btn-success"  data-toggle="modal" data-target="#withdraw">Withdraw </button>
                                <!-- Modal -->
<div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Initiate B2C</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form>
            <div class="form-group">
              <input type="number" class="form-control" id="number" aria-describedby="emailHelp" placeholder="Enter the Desired amount">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone number">
            </div>
            <div class="form-check">
            </div>
            <button type="submit" class="btn btn-success">Cashout</button>
          </form>
      </div>
      <div class="modal-footer">
      <h5>Keep it Hortlite!</h5>
      </div>
    </div>
  </div>
</div>
                                </div>
                                <div class="tab-pane fade" id="pills-invest" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Amount</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="amount" v-model="form.investment" placeholder="Amount">
    </div>
  </div>
  <div>
    <md-radio v-model="radio" :value="16">16% @ 24hrs</md-radio>
    <md-radio v-model="radio" :value="25">25% @ 48hrs</md-radio>
    <md-radio v-model="radio" :value="35">35% @ 72hrs</md-radio>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="button" @click="submit()" class="btn btn-primary">Invest</button>
    </div>
  </div>
</form>
                                </div>
                                <!--bot tab-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <df-messenger
  intent="WELCOME"
  chat-title="Customer Care"
  agent-id="7b8aa6ce-ff13-4cf0-9ab9-39bee6a1e14a"
  language-code="en"
></df-messenger>
    </div>
    <div class="modal fade" id="ug-ke" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Uganda-Kenya</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <ul>
      <p> Dial *165#</p>
      <p>Select Send Money (1)</p>
      <p>Select International Transfer (3)</p>
      <p>Select Safaricom M-Pesa (1)</p>
      <p>Enter the recipient Number in format 254XXX</p>
      </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="transactions" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Financial History</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
    <div class="row col-md-12 col-md-offset-2 custyle">
    <table class="table table-striped custab">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th class="text-center">Status</th>
        </tr>
    </thead>
            <tr>
                <td>1</td>
                <td>News</td>
                <td>News Cate</td>
            </tr>
    </table>
    </div>
</div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</section>
 <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>How to Earn</h6>
            <p class="text-justify" style="color:white">
            You can deposit as low as Ksh 1000 and invest with it and a maximum of Ksh 100,000 to our till number 5581293 and your account will be credited.Using the amount deposited click on the invest tab then enter your amount and rate then click invest.
            We are a credible company in Kenya that gives you 16%,25% & 35% of your investment after 24 hours.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Earn from friends</h6>
            <p class="text-justify" style="color:white;">
              You can earn by inviting friends to join using your assigned referral link to get 50ksh instant refferal bonus.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
          <h6>Social Sites</h6>
          <ul>
              <a href="#" class="btn btn-link btn-facebook"><i class="fab fa-facebook"></i></a>
                                                        <a href="#" class="btn btn-link btn-twitter"><i class="fab fa-twitter"></i></a>
                                                        <a href="#" class="btn btn-link btn-gplus"><i class="fab fa-google-plus"></i></a>
                                                        <a href="#" class="btn btn-link btn-instagram"><i class="fab fa-instagram"></i></a>
                                                        <a href="#" class="btn btn-link btn-youtube"><i class="fab fa-youtube"></i></a>
          </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <a href="#">Hortlite inc</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
// const Mpesa = require('mpesa-api').Mpesa
// const credentials = {
//   clientKey: 'PzYKGrQDH8C75CkzOhn9QEUwNVuKAmpI',
//   clientSecret: 'h8mZA8Z5zdjgCYge',
//   initiatorPassword: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
//   securityCredential: 'W0lMwNhtwOU3vBnHrrNJUYzr6tKSuIOCZTCCeE4wQ/OE0iTvXoY8Al/EwhHqydzvDh/V7MYXMQ+NFoxbeTTIF4BBW8MnVi6W3TyTUBi9k1Ip9YO5r5Mnjf9PuThgchppO60CgBbCNP0wSfEsmrgqD0L4SIAMHeWQX6DpR7g1RuPQCrmmhU5OTA1fa0dvk3KPb1b8/Fzgh7PscGQV8V2AyDeA3HkL/AHKqUaC3tS7l99AivAoqpeT7N3RtgIiDMiKFa5APPQGYvaOqy1QjduYz9auCneMQOEoQHOoh5yAnj1RmUXjOoiPjtYZF9jk0Us/FseKxbHJwft9BTyzcwu1Mg==',
//   certificatePath: 'keys/example.cert'
// }
// const environment = 'production'
// const mpesa = new Mpesa(credentials, environment)
export default {
  data () {
    return {
      objA: { name: 'a' },
      objB: { name: 'b' },
      radio: false,
      uid: '',
      wallet: 0,
      cashout: 0,
      refferals: 0,
      phone: '',
      email: '',
      balance: 0,
      maturedShares: '',
      invitelink: '',
      previewLink: '',
      availableshares: 0,
      shares: 0,
      refferalMoney: 0,
      date: '',
      activated: null,
      total_bids: 0,
      messages: 0,
      change: 0,
      form: {
        amount: 0,
        days: 0,
        sharesOnSale: 0,
        bidhours: 0,
        investment: 0
      }
    }
  },
  beforeCreate: function () {
    this.$vs.loading()
    setTimeout(() => {
      this.$vs.loading.close()
    }, 2000)
  },
  updated: function () {
    console.log('updated')
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.wallet = data.wallet_balance
      this.cashout = data.amount_received
      this.phone = data.phonenumber
      this.uid = data.uid
    })
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      this.refferals = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      this.total_bids = snapshot.size
    })
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1')
    document.head.appendChild(externalScript)
  },
  methods: {
    toInvestment: function () {
      this.$router.push('/investments')
    },
    toRefs: function () {
      this.$router.push('/refs')
    },
    setMessagesToRead: function (email) {
      var db = firebase.firestore()
      db.collection('users').doc(email).collection('messages').get().then(snapshot => {
        snapshot.forEach(doc => {
          doc.data().read = true
        })
      })
    },
    setBidTime: function () {
      alert('dksj')
    },
    genaratelink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hortlite-investment.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      this.$swal(finalURL)
    },
    GetLink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hortlite-investment.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      this.$swal(finalURL)
    },
    SetBidder: function () {
      var countdown = require('countdown-js')
      var end = new Date()
      end.setHours(end.getHours() + 6)
      var timer = countdown.timer(end, function (timeleft) {
        document.getElementById('timer').innerHTML = timeleft.hours + 'H:' + timeleft.minutes + 'M:' + timeleft.seconds
      })
      return timer
    },
    reload: function () {
      window.navigator.reload()
    },
    submit () {
      let db = firebase.firestore()
      if (this.form.investment <= this.wallet) {
        let balance = this.wallet - parseFloat(this.form.investment)
        db.collection('users').doc(this.user.data.email).update({
          wallet_balance: balance
        })
        // eslint-disable-next-line camelcase
        let cust_id = parseFloat(this.total_bids) + 1
        var startdate = firebase.firestore.Timestamp.now().seconds
        var maturedate = startdate + 86400
        var rate = this.radio / 100
        var amount = parseFloat(this.form.investment)
        var profit = rate * amount
        var total = profit + amount
        console.log(amount)
        console.log(profit)
        db.collection('users').doc(this.user.data.email).collection('investments').add({
          id: cust_id,
          amount: total,
          rate: rate,
          date: new Date().toDateString(),
          started: false,
          state: 'running',
          cashed: false,
          startdate: startdate,
          stopdate: maturedate
        })
        this.$vs.notify({title: 'Your investment was successfull kindly refresh!', text: this.form.investment, color: 'green', position: 'top-center'})
      } else {
        this.$vs.notify({title: 'Insufficient Account Balance', text: 'You have invested more than you have!Please Try a smaller amount', color: 'red', position: 'right-bottom'})
      }
      console.log(this.form.investment)
      console.log(this.radio)
    },
    Pay: function (event) {
      // mpesa.b2c({
      //   Initiator: 'Initiator Name',
      //   Amount: 1000 /* 1000 is an example amount */,
      //   PartyA: 'Party A',
      //   PartyB: 'Party B',
      //   QueueTimeOutURL: 'Queue Timeout URL',
      //   ResultURL: 'Result URL'
      // })
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
      alert('under maintainance')
    },
    redirect: function (event) {
      window.location = 'https://chat.whatsapp.com/HU3wvCqjXmJ0J0OMSPndyJ'
    },
    redirecttg: function (event) {
      window.location = 'https://t.me/hustlerbidders'
    },
    logout: function (event) {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
<style scoped>
.site-footer
{
  background-color:#06092c;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
/*------------------------------------
  Social color
------------------------------------*/
.text-facebook, .hover-facebook-text:hover i, .hover-facebook a:hover i {
  color: #3b5998;
}

.bg-facebook, .btn-facebook {
  background-color: #3b5998;
  color: #fff;
}

.text-twitter, .hover-twitter-text:hover i, .hover-twitter a:hover i {
  color: #00aced;
}

.bg-twitter, .btn-twitter {
  background-color: #00aced;
  color: #fff;
}

.text-instagram, .hover-instagram-text:hover i, .hover-instagram a:hover i {
  color: #b300ad;
}

.bg-instagram, .btn-instagram {
  background-color: #b300ad;
  color: #fff;
}

.text-youtube, .hover-youtube-text:hover i, .hover-youtube a:hover i {
  color: #bd0000;
}

.bg-youtube, .btn-youtube {
  background-color: #bd0000;
  color: #fff;
}

.text-gplus, .hover-gplus-text:hover i, .hover-gplus a:hover i {
  color: #eb5e4c;
}

.bg-gplus, .btn-gplus {
  background-color: #eb5e4c;
  color: #fff;
}

.text-vimeo, .hover-vimeo-text:hover i, .hover-vimeo a:hover i {
  color: #35c6ea;
}

.bg-vimeo, .btn-vimeo {
  background-color: #35c6ea;
  color: #fff;
}

.text-envelope, .hover-envelope-text:hover i, .hover-envelope a:hover i {
  color: #faa33d;
}

.bg-envelope, .btn-envelope {
  background-color: #faa33d;
  color: #fff;
}

.text-linkedin, .hover-linkedin-text:hover i, .hover-linkedin a:hover i {
  color: #6697ff;
}

.bg-linkedin, .btn-linkedin {
  background-color: #6697ff;
  color: #fff;
}

.text-telegram, .hover-telegram-text:hover i, .hover-telegram a:hover i {
  color: #30a8dc;
}

.bg-telegram, .btn-telegram {
  background-color: #30a8dc;
  color: #fff;
}

.text-pinterest, .hover-pinterest-text:hover i, .hover-pinterest a:hover i {
  color: #bd081b;
}

.bg-pinterest, .btn-pinterest {
  background-color: #bd081b;
  color: #fff;
}

.black a {
  color: #000;
}

.post-content ul {
  color: #474b5f;
}

.white a {
  color: #fff;
}
.sidebar-item.active, .sidebar-item:hover {
  background-color: #fff;
  border: 1px solid #e6e7e9;
  border-right: 0;
  margin-right: -1px;
}

.sidebar-menu {
  border-bottom: 1px solid #e6e7e9;
  border-top: 1px solid #e6e7e9;
  border-right: 1px solid #e6e7e9;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: #f4f4f4;
}

.sidebar-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0.5rem;
  border: 1px solid transparent;
}

.sidebar-item.active:hover {
  background-color: #fff;
}

.card .icon-big {
  font-size: 3rem;
}

.card .icon-big .notif {
  position: absolute;
  min-width: 25px;
  border-radius: 5rem;
  font-size: 1rem;
  background: #0621e8;
  color: #fff;
}

.card .numbers {
  text-align: right;
}

.card .numbers p {
  font-size: 1rem;
  margin: 0;
}

.card .footer {
  padding: 0;
  line-height: 30px;
}

.side-notif {
  padding-left: 7px;
  padding-right: 7px;
  font-size: 0.8rem;
  border-radius: 5rem;
  background-color: #dc3545;
  color: #fff;
}

.statistics li {
  padding: 0.25rem 0;
}

.member-item:hover .card {
  background-color: #f4f4f4;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f4f4f4;
}

@media (max-width: 767.98px) {
  .sidebar-item.active, .sidebar-item:hover {
    border-right: 1px solid #e6e7e9;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
}
@keyframes flip {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #F1F2E6;
}

.loader {
  width: 65px;
  margin: auto;
  &__image {

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__coin {
    animation: flip .5s ease-in-out infinite alternate-reverse both;
  }
}
</style>
