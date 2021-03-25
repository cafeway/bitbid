<template>
  <div class="container" style="padding-top:150px">
  <div class="text-center text-secondary alert alert-primary">
    DONT FORGET TO REFFER FRIENDS
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
          <img id="profile-img" class="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" style="height:100px;" />
          <h3 class="text-success">JOIN BITBID</h3>
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    placeholder="jane doe"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    placeholder=" enter a legit email"
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="phone" class="col-md-4 col-form-label text-md-right">Phone</label>

                <div class="col-md-6">
                  <input
                    id="phone"
                    type="text"
                    class="form-control"
                    name="phone"
                    required
                    placeholder="0743***1*0"
                    v-model="form.phone"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                   <a class="text-success"><b><router-link to="login">Login</router-link></b></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        phone: '',
        name: '',
        refferalcode: ''
      },
      error: null,
      refereename: ''
    }
  },
  mounted: function () {
    const url = require('url')
    let urlObject = url.parse(window.location.href, true)
    let queryData = urlObject.query
    let referee = queryData.email
    firebase.firestore().collection('users').doc(referee).get().then(snapshot => {
      this.refereename = this.snapshot.data().username
    })
    this.$swal(referee + '  ' + 'reffered you')
  },
  methods: {
    submit () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          var user = firebase.auth().currentUser
          user.updateProfile({
            displayName: this.form.name,
            phoneNumber: this.form.phone
          })
          user.sendEmailVerification()
          const url = require('url')
          let urlObject = url.parse(window.location.href, true)
          let queryData = urlObject.query
          let referee = queryData.email
          this.$swal('Account created successfully please check your email to verify your account....')
          this.$router.push('/')
          firebase.firestore().collection('users').doc(this.form.email).set({
            uid: firebase.auth().currentUser.uid,
            email: this.form.email,
            phonenumber: this.form.phone,
            username: this.form.name,
            walletbalance: 0,
            verified: 'no',
            activated: false,
            role: 'user'
          })
          firebase.firestore().collection('users').doc(referee).collection('invitees').add({
            username: this.form.name,
            email: this.form.email,
            phone: this.form.phone
          })
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
