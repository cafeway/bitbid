<template>
  <div class="page-content page-container" id="page-content">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <div class="padding">
        <div class="row container d-flex ">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"> </div>
                                <h6 class="f-w-600">{{this.user.data.displayName}}</h6>
                                <p>{{this.role}}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600"> Account Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">{{this.email}}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400">{{this.phone}}</h6>
                                        <i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#edit">edit</i>
                                    </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">refferals</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Downlines</p>
                                        <h6 class="text-muted f-w-400">{{this.downlines}}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Bonus</p>
                                        <button  class="btn btn-md btn-success" data-toggle="modal" data-target="#bonus">Redeem invites</button>
                                    </div>
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Enter your new Number</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="reload()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" id="new_phone" required="required" class="form-control" name="phone" v-model="form.new_number">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="save()">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="bonus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Your Awards</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="reload()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>number</th>
                                            <th>name</th>
                                            <th>redeemed</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="ref in refferals" :key="ref.id">
                                            <td>{{ref.phone}}</td>
                                            <td>{{ref.username}}</td>
                                            <td v-if="ref.email !== 'redeemed'"  ><button class=" btn btn-md btn-primary" v-on:click="redeem(ref.email)">Redeem</button></td>
                                            <td v-else><button class=" btn btn-md btn-success disabled">Redeemed</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
      </div>
      <div class="modal-footer">
        <h6>Dont Forget To Reffer More!</h6>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
body {
    background-color: #f9f9fa
}

.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    border: none;
    margin-bottom: 30px
}

.m-r-0 {
    margin-right: 0px
}

.m-l-0 {
    margin-left: 0px
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px
}

.bg-c-lite-green {
    background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f));
    background: linear-gradient(to right, #ee5a6f, #f29263)
}

.user-profile {
    padding: 20px 0
}

.card-block {
    padding: 1.25rem
}

.m-b-25 {
    margin-bottom: 25px
}

.img-radius {
    border-radius: 5px
}

h6 {
    font-size: 14px
}

.card .card-block p {
    line-height: 25px
}

@media only screen and (min-width: 1400px) {
    p {
        font-size: 14px
    }
}

.card-block {
    padding: 1.25rem
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.m-b-20 {
    margin-bottom: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.card .card-block p {
    line-height: 25px
}

.m-b-10 {
    margin-bottom: 10px
}

.text-muted {
    color: #919aa3 !important
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.f-w-600 {
    font-weight: 600
}

.m-b-20 {
    margin-bottom: 20px
}

.m-t-40 {
    margin-top: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.m-b-10 {
    margin-bottom: 10px
}

.m-t-40 {
    margin-top: 20px
}

.user-card-full .social-link li {
    display: inline-block
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out
}
</style>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      email: '',
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
