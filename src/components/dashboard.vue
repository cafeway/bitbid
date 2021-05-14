<template>
<div class="container">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" target="_blank" href="">
                HUSTLE BIDDERS
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
                        <div class="col-12">
                            <div class="mb-3 bg-dark">
                                <div class="row">
                                    <div class="col-12">
                                        <a class="position-absolute ml-3 mt-3 text-white" href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit cover images"><i class="fas fa-cog"></i></a>
                                        <div class="row">
                                            <div class="col-md-6 ml-auto mr-auto">
                                               <div class="profiles p-3 my-4 rounded text-center shadow-sm">
                                                    <div class="avatars">
                                                        <a href="setting.html">
                                                            <img src="https://demo.bootstrap.news/bootnews/assets/img/avatar/avatar1.png" alt="Circle Image" class="avatar-lg rounded-circle img-fluid" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit avatar images">
                                                        </a>
                                                    </div>
                                                    <div class="names">
                                                        <h3 class="title text-light">@{{this.user.data.displayName}}</h3>
                                                        <a href="#" class="btn btn-link btn-facebook"><i class="fab fa-facebook"></i></a>
                                                        <a href="#" class="btn btn-link btn-twitter"><i class="fab fa-twitter"></i></a>
                                                        <a href="#" class="btn btn-link btn-gplus"><i class="fab fa-google-plus"></i></a>
                                                        <a href="#" class="btn btn-link btn-instagram"><i class="fab fa-instagram"></i></a>
                                                        <a href="#" class="btn btn-link btn-youtube"><i class="fab fa-youtube"></i></a>
                                                    </div>
                                                </div>
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
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Deposit</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-withdraw" role="tab" aria-controls="pills-contact" aria-selected="false">Withdraw</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" href="/sharesdash">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-warning text-center">
                                                                    <i class="fa fa-credit-card"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-secondary">Transactions</p>
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
                                                                <div class="icon-big text-info text-center" title="1 new comment">
                                                                    <div class="notif">1</div>
                                                                    <i class="fa fa-user-md"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <a data-toggle="modal" data-target="#exampleModalCenter">Invite Friends</a>
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
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" href="/sell">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-danger text-center">
                                                                    <i class="fa fa-money"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p class="text-success">Sell Tokens</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="member-item" href="/sharesdash">
                                                <div class="card mb-2 mb-md-5 py-3">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="icon-big text-twitter text-center" title="1 new messages">
                                                                    <i class="fa fa-suitcase  "></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 d-flex justify-content-center align-items-center">
                                                                <div class="numbers">
                                                                    <p>Records</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div class="p-3 border mb-3">
                                        <a class="position-absolute" style="right: 25px" href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit profile"><i class="fas fa-cog"></i></a>
                                        <h3>{{this.user.data.displayName}}</h3>
                                        <p><b>Tokens: </b>{{shares}}</p>
                                        <p><b>Address:  </b> {{this.user.data.email}}</p>
                                        <p><b>Phone:  </b>{{phoneNumber}}</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                              <form>
                      <div class="mb-3">
                        <input type="number" name="days" required="required"  v-model="form.days" class="form-control" id="days"  aria-describedby="emailHelp" placeholder="number of days to the bids maturity">
                      </div>
                      <hr>
                      <div class="mb-3">
                      <input type="number" class="form-control" id="amount" placeholder="enter your bid amount" required="required" name="amount" v-model="form.amount">
                      </div>
                     <div class="mb-3 form-check">
                     </div>
                     <div class="form-group">
                     <button type="button" class="btn btn-danger" v-on:click="submit()">Buy and Pair</button>
                     </div>
                   </form>
                                </div>
                                    <div class="tab-pane fade" id="pills-withdraw" role="tabpanel" aria-labelledby="pills-contact-tab">
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
</section>
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
      phoneNumber: '',
      email: '',
      admin1: 'mccafeway@gmail.com',
      admin2: 'philipnderitu40@gmail.com',
      balance: 0,
      maturedShares: '',
      invitelink: '',
      previewLink: '',
      availableshares: 0,
      shares: 0,
      refferalMoney: 0,
      date: '',
      activated: null,
      messages: 0,
      bidtime: 0,
      timer: null,
      invitees: [],
      inbox: [],
      interval: null,
      form: {
        amount: 0,
        days: 0,
        sharesOnSale: 0,
        bidhours: 0
      }
    }
  },
  created: function () {
  },
  updated: function () {
    console.log('updated')
    var db = firebase.firestore()
    var user = firebase.auth().currentUser
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      this.activated = snapshot.data().activated
    })
    db.collection('users').doc(user.email).get().then(snapshot => {
      const doc = snapshot.data()
      this.phoneNumber = doc.phonenumber
      this.balance = doc.balance
      this.shares = doc.shares
    })
    db.collection('users').doc(user.email).collection('invitees').get().then(snapshot => {
      this.refferalMoney = snapshot.size * 20
    })
    db.collection('users').doc(this.user.data.email).collection('messages').where('read', '==', false).get().then(snapshot => {
      this.messages = snapshot.size
    })
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.invitees.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('messages').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.inbox.push(doc.data())
      })
    })
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1')
    document.head.appendChild(externalScript)
  },
  methods: {
    setMessagesToRead: function (email) {
      var db = firebase.firestore()
      db.collection('users').doc(email).collection('messages').get().then(snapshot => {
        snapshot.forEach(doc => {
          doc.data().read = true
        })
      })
    },
    countdown: function (to) {
      var countDownDate = new Date()
      countDownDate.setHours(countDownDate.getHours() + to)
      var x = setInterval(() => {
        var now = new Date().getTime()
        var distance = countDownDate - now
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)
        document.getElementById('timer').innerHTML = hours + 'h' + minutes + 'm' + seconds + 's'
        if (distance < 0) {
          clearInterval(x)
          document.getElementById('timer').innerHTML = 'Expired'
        }
      }, 1000)
    },
    setBidTime: function () {
      alert('dksj')
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
    submit () {
      var db = firebase.firestore()
      if (this.activated) {
        db.collection('bids').add({
          dob: Date(),
          buyerid: this.phoneNumber,
          buyeremail: this.user.data.email,
          sellerid: '',
          amount: this.form.amount,
          status: 'pending',
          paired: false,
          period: this.form.days,
          dop: '',
          phone: this.phoneNumber,
          transferdate: '',
          sold: false
        })
        this.$swal('Bid  Placed Successfully')
        this.$router.push('/sharesdash')
      } else {
        this.$swal('Activate your Account to bid')
      }
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
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hustlebidders.netlify.com/register'
      var useremail = firebase.auth().currentUser.email
      var parameters = {'email': useremail}
      var finalURL = createURLwithParameters(baseURL, parameters)
      console.log('final URL is ', finalURL)
      const url = require('url')
      let urlObject = url.parse(finalURL, true)
      console.log(urlObject.host)
      let queryData = urlObject.query
      console.log(queryData.email)
      this.invitelink = finalURL
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
  background: #dc3545;
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
</style>
