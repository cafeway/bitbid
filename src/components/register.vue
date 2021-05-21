/* eslint-disable camelcase */
<template>
 <section class="contact-from pt-4">
<div class="container">
                <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                      <div class="form-wrapper">
                        <div class="row">
                          <div class="col-md-12">
                            <h4>Let Us Know You Better</h4>
                          </div>
                        </div>
                        <form _lpchecked="1">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Username" id="username" v-model="form.name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Email">
                                    </div>
                                </div>
                              <div class="col-md-6">
                                  <div class="form-group">
                                        <input type="text" v-model="form.phone" id="phone" class="form-control" placeholder="Phone number">
                                    </div>
                                </div>
                               <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="password" id="password" v-model="form.password" placeholder="password" class="form-control">
                                    </div>
                               </div>
                              <div class="col-md-12">
                                <select name="countries" class="custom-select" id="country">
  <option>Select country</option>
  <option>Kenya</option>
  <option>Tanzania</option>
  <option>Uganda</option>
  <option>Rwanda</option>
</select>
                              </div>
                            </div>
      <div class="mt-3">
            <button class="btn btn-primary" type="btn" @click="submit()">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  </div>
  </section>
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
        name: ''
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
          this.$vs.notify({title: 'Karibu Hortlite @ ', text: this.form.name, color: 'green', position: 'top-center'})
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
<style>
body{
  font-family: 'Poiret One', cursive;
  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECV7za5N0aLbQHEgmHvQVf8S_SpthQSc-MNZ3DK7DDQECtr_15Ai5N4gkW2nd4u-nU7g&usqp=CAU')

}
h4{
  font-weight: bold;
  margin-bottom: 2.5rem;
}
.form-wrapper{
  background: #fff;
  border-radius: 5px;
  padding: 50px;
}
.form-control, .custom-select{
  border-radius: 0px;
    color: #495057;
    background-color: #f1f1f1;
    border-color: none;
}

.form-control:focus {
    color: #495057;
    background-color: #ffffff;
    border:1px solid #b5b6b3;
    outline: 0;
    box-shadow: none;

}

.btn{
  background: #3494E6;
  border: #3494E6;
  padding: 0.6rem 3rem;
  font-weight: bold;
}
.btn:hover, .btn:focus, .btn:active, .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
  background: #3494E6;
  border: #3494E6;
  outline: 0;
}
</style>
