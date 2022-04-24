<template>
<div class="container">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" target="_blank" href="">
                BACK OFFICE
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
                        <a class="nav-link p-3" href="/">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<section id="about-us" class="py-5">
    <div class="container">

             <!--left sidebar-->
            <div class="col-md-3 pr-md-4">
                <div class="sidebar-left">
                    <!--sidebar menu-->
                </div>
            </div>
            <!--Content-->
            <div class="col-md-12">
                <div class="dashboard-area">
                    <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">User Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Packages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-withdraw" role="tab" aria-controls="pills-contact" aria-selected="false">Withdraw</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-invest" role="tab" aria-controls="pills-contact" aria-selected="false">Invite Link</a>
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
                                                                    <p class="text-secondary">Total: {{this.cashout}}</p>
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
                                                                    <p class="text-success">Your team</p>
                                                                    <p class="text-success">Members: {{this.refferals}}</p>
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
                                                                    <p class="text-danger"><b>Wallet Balance</b></p>
                                                                    <p class="text-secondary">Ledger:{{this.wallet}} btc</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                         <div class="col-lg-4 col-sm-6"  @click="toInvestment()">
                                            <a class="member-item" href="#">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-facebook text-center">
                                                                    <i class="fa fa-wallet"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-primary">Investments</p>
                                                                    <p class="text-secondary">Total: {{this.total_bids}}</p>
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
                                        <p class="text-secondary"><b>Invite Link:</b><button class="btn btn-primary" type="button" @click="Getlink()">Invite Link</button></p>
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
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Bronze</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $25| Earn $0.25</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(25,0.25)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-success text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Silver</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $50| Earn $1</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(50,1)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-success text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">White</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $100| Earn $2</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(100,2)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-primary text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Black</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $200| Earn $4</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(200,4)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-primary text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Gold</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $400| Earn $8</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(400,8)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-warning text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Gold Pro</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $500| Earn $10</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(500,10)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-warning text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Platinum</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $1000| Earn $21</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(1000,21)">Invest</button>
                                    </div>
                                    </div>
                                         <div class="col-md-3">
                                    <div class="alert alert-warning text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">PLatinum Pro</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $2000| Earn $43</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(2000,43)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-danger text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Diamond</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $5000| Earn $109</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(5000,109)">Invest</button>
                                    </div>
                                    </div>
                                     <div class="col-md-3">
                                    <div class="alert alert-danger text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Diamond pro</h4></div>
                                      <hr>
                                      <div class="row"><h6 class="text-secondary" style="padding-left:50px;">Invest $10000| Earn $219</h6></div>
                                         <hr>
                                    <button class="btn btn-success btn-block" @click="Invest(10000,219)">Invest</button>
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
        <h5 class="modal-title text-secondary" id="exampleModalLongTitle">Initiate Withdrawal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="refresh()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form>
            <div class="form-group">
              <input type="number" class="form-control" id="cashout" v-model="form.cashout" aria-describedby="emailHelp" placeholder="Enter the Desired amount">
            </div>
            <div class="form-group">
              <input type="text" v-model="form.number" class="form-control" id="number" placeholder="Btc Wallet">
            </div>
            <div class="form-check">
            </div>
            <button type="button" @click="withdraw()" class="btn btn-success">Cashout</button>
            <button type="button" @click="refresh()" class="btn btn-danger">Refresh</button>
          </form>
      </div>
      <div class="modal-footer">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
      <h5 class="text-success">Dreams come true here!</h5>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="example" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                                </div>
                                <div class="tab-pane fade" id="pills-invest" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-md-3">
                                    <div class="alert alert-primary text-justify" role="alert">
                                      <div class="row"><h4 class="text-secondary" style="padding-left:50px;">Your Team link</h4></div>
                                      <hr>
                                      <div class="row"><h6 id="inviteLink" class="text-secondary" style="padding-left:50px;">https:://https://dream-creation-agency.netlify.app/#/register?uid={{this.uid}}</h6></div>
                                        <hr>
                                        <p>Use this link to create your team</p>
                                    </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                <!--bot tab-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <df-messenger
  intent="Ask For help"
  chat-title="Dream creation int"
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
</section>
 <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>How to Earn</h6>
            <p class="text-justify" style="color:white">
            Choose your desired package from the compensation plan by clicking on packages.Each package offers a 400% turnover for 6 months on a daily basis
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Earn from teams</h6>
            <p class="text-justify" style="color:white;">
              You can earn by inviting friends to join using your assigned referral link and earn 20%,10%,5%,2% and 1% refferal bonus from level 1 to level 5 respectively when a team members investment successfully earns interest and gets approved.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
          <h6>Social Media</h6>
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
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
         <a href="#">Dream Creation international</a>.
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
      cashouts: 0,
      form: {
        amount: 0,
        days: 0,
        sharesOnSale: 0,
        bidhours: 0,
        investment: 0,
        cashout: 0,
        number: ''
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
    // get the total cashouts
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
    withdraw: function () {
      let db = firebase.firestore()
      let cashout = this.form.cashout
      let number = this.form.number
      let balance = this.wallet - cashout
      if (cashout <= this.wallet && cashout > 0) {
        db.collection('users').doc(this.user.data.email).update({
          wallet_balance: balance
        })
        this.$vs.notify({title: 'Your Withdrawal was initiated..it takes 20 min max for processing!', text: 'kindly refresh asap to complete the transaction ', color: 'blue', position: 'bottom-center'})
        db.collection('cashout').add({
          id: Math.floor((Math.random() * 1000000) + 1),
          amount: cashout,
          number: number,
          email: this.user.data.email,
          sent: false
        })
      } else {
        this.$vs.notify({title: 'Your withdrawal exceeds the balance!', text: 'please recharge or check if you withdrew a negative', color: 'red', position: 'bottom-center'})
      }
    },
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
      var baseURL = 'https://hortlite-investments.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      this.$swal(finalURL)
    },
    Getlink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://dream-creation-agency.netlify.app/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      document.getElementById('inviteLink').value = finalURL
      navigator.clipboard.writeText(finalURL)
      alert('Copied link to clipboard')
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
    refresh: function () {
      window.location.reload()
    },
    Invest: function (amount, dailyPay) {
      this.$router.push({ path: '/address/:amount', params: { amount: 10 } })
      let db = firebase.firestore()
      db.collection('bids').add({
        'id': Math.floor((Math.random() * 10000) + 1),
        'email': firebase.auth().currentUser.email,
        'amount': amount,
        'verification_status': 'unverified',
        'startDay': Date.now(),
        'stopDay': Date.now() + 1.577e+10,
        'dailyPay': dailyPay,
        'cashouts': 0
      })
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
