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
<div class="alert alert-primary" role="alert">
  Make your first Payment Here
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
                <label for="email"> Email address</label>
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
                  placeholder="250ksh"
                  required
                  autofocus
                  value=250
                  v-model="form.amount"
                  >
                <button class="btn btn-md btn-danger  btn-block btn-signin" type="button" @click="pay()">Pay with Card</button>
                <button class="btn btn-md btn-primary btn-block btn-signin" type="button" @click="redirectToMpesa()">Lipa na mpesa</button>
            </form><!-- /form -->
        </div>
    </div>
</div>
</div>
  </div>
  </div>
</template>
<script>

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
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-51ca022e8a64b1ff7a3e67ab623cc585-X',
        tx_ref: 'registration fees' + new Date(),
        amount: this.form.amount,
        currency: 'USD',
        country: 'KE',
        payment_option: 'mobilemoney',
        customer: {
          email: this.form.email,
          phone_number: this.form.number,
          name: this.form.name
        },
        callback: function (data) {
          console.log(data)
        },
        onclose: function () {},
        customizations: {
          title: 'BitBid payments',
          description: 'Activation fees',
          logo: '../assets/payment.png'
        }

      })
    },
    redirectToMpesa: function () {
      window.location.href = 'https://ravesandbox.flutterwave.com/pay/3weo3ps0qjxk'
    }
  }
}
</script>
