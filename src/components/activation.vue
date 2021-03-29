<template>
  <div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 class="navbar-brand" href="#">BITBID</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
       <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"><router-link to="/login">login</router-link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item"><router-link to="/register">Register</router-link></a>
        </div>
      </div>
    </form>
  </div>
</nav>
<hr>
<div class="alert alert-danger" role="alert">
  Pay an activation fee of $2.5
</div>
<hr>
  <div>
   <div class="container">
<div class="row align-items-center ">
    <div class="col-md-12">
        <div class="text-center">
            <img id="profile-img" class="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png"  style="height:100px"/>
            <p id="profile-name" class="profile-name-card"></p>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form  class="form-signin">
                <input
                 type="email"
                 name="email"
                 id="email"
                 class="form-control form-group"
                 placeholder="enter your email"
                 required
                  autofocus
                  v-model="form.email"
                 />
                 <input
                 type="text"
                 name="name"
                 id="name"
                 class="form-control form-group"
                  placeholder="enter your name"
                  required
                  autofocus
                  value=250
                  v-model="form.name"
                  >
                 <input
                 type="text"
                 name="number"
                 id="name"
                 class="form-control form-group"
                 placeholder="phone number: e.g 0743*****0"
                 required
                  autofocus
                  v-model="form.number"
                 />
                <input
                 type="number"
                 name="amount"
                 id="amount"
                 class="form-control form-group"
                  placeholder="kes:250"
                  required
                  autofocus
                  value=250
                  v-model="form.amount"
                  >
                <button class="btn btn-md btn-danger  btn-block btn-signin" type="button" @click="pay()">Checkout<span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></span></button>
            </form><!-- /form -->
        </div>
    </div>
</div>
</div>
  </div>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  created () {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  data () {
    return {
      form: {
        amount: '',
        email: '',
        number: '',
        name: ''
      }
    }
  },
  methods: {
    pay: function () {
      document.getElementById('amount').innerHTML = 250
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK-dfa1f8026935ce5fdeb76020057e0ec0-X',
        tx_ref: 'registration fees' + new Date(),
        amount: 250,
        currency: 'KES',
        country: 'KE',
        payment_option: 'mpesa,card,ussd,account',
        customer: {
          email: this.form.email,
          phone_number: this.form.number,
          name: this.form.name
        },
        callback: function (data) {
          let db = firebase.firestore()
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            activated: true
          })
          db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(data.tx_ref).set({
            transaction_id: data.transaction_id,
            transaction_status: data.status,
            date: new Date(),
            amount: data.amount
          })
        },
        onclose: function () {},
        customizations: {
          title: 'BitBid payments',
          description: 'Activation fees',
          logo: 'data:image/png;base64,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'
        }

      })
    },
    redirectToMpesa: function () {
      window.location.href = 'https://ravesandbox.flutterwave.com/pay/3weo3ps0qjxk'
    }
  }
}
</script>
