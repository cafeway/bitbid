/* eslint-disable camelcase */
<template>
  <div class="container" style="padding-top:150px">
  <div v-if="referee_id =='' " class="text-center text-secondary alert alert-primary">
    Reffer More Friends To Earn
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
          <a href="https://capitalcell.co.uk/investor-terms-and-conditions/">Terms & Conditions</a>
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <div class="col-md-12 text-center">
                  <input
                    id="name"
                    type="name"
                    class="form-control text-center"
                    name="name"
                    placeholder="Pick A Username"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-10">
                  <input
                    id="email"
                    type="email"
                    class="form-control text-center"
                    name="email"
                    value
                    required
                    autofocus
                    placeholder="Enter Your Email"
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-8">
                  <input
                    id="password"
                    type="password"
                    class="form-control text-center"
                    name="password"
                    required
                    placeholder="Choose A Password"
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6">
                  <input
                    id="phone"
                    type="text"
                    class="form-control text-center"
                    name="phone"
                    required
                    placeholder="Enter Your Mpesa Number"
                    v-model="form.phone"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-10">
                <div style="padding-left:20px;">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    i agree to to your terms and conditions
  </label>
                </div>
  <hr>
                  <button type="button" @click="submit()" class="btn" style="background-color:#ffdb58; color:#4545b9;">Register</button>
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
      referee_id: '',
      referee_name: '',
      referee: ''
    }
  },
  mounted: function () {
    this.referee_uid = ''
    let url = window.location.href
    // eslint-disable-next-line camelcase
    let splitted_urls = url.split('uid=')
    // eslint-disable-next-line camelcase
    let referee = splitted_urls[1]
    // eslint-disable-next-line camelcase
    this.referee_id = referee
    firebase.firestore().collection('users').where('uid', '==', this.referee_id).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.referee_name = doc.data().username
        this.referee = doc.data().email
      })
    })
    this.$vs.notify({title: 'Your Upline', text: this.referee_name, color: 'blue', position: 'top-center'})
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
          this.$swal('Welcome!!!....Login To Explore')
          firebase.firestore().collection('users').doc(this.form.email).set({
            uid: firebase.auth().currentUser.uid,
            email: this.form.email,
            phonenumber: this.form.phone,
            username: this.form.name,
            walletbalance: 0,
            verified: 'no',
            activated: false,
            role: 'user',
            refferals: 0,
            amount_sent: 0,
            amount_received: 0,
            wallet_balance: 0
          })
          firebase.firestore().collection('users').doc(this.referee).collection('invitees').add({
            username: this.form.name,
            email: this.form.email,
            phone: this.form.phone
          })
          firebase.firestore().collection('users').doc(this.referee).get().then(snapshot => {
            let data = snapshot.data()
            let bal = data.wallet_balance + 50
            let db = firebase.firestore()
            db.collection('users').doc(this.referee).update({
              wallet_balance: bal
            })
          })
          this.$router.push('/login')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
