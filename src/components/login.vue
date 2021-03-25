<template>
<div class="container-fluid">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand disabled" href="">BITBID-P2P</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <router-link class="nav-link" to="/login">Login</router-link>
    </form>
    <router-link class="nav-link" to="/register">register</router-link>
  </div>
</nav>
<hr>
 <div class="text-center text-secondary">
    DONT FORGET TO REFFER FRIENDS
    </div>
<div class="container">
<div class="row align-items-center ">
    <div class="col-md-12">
        <div class="text-center">
            <img id="profile-img" class="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form  class="form-signin">
                <input
                 type="email"
                 name="email"
                 id="email"
                 class="form-control form-group"
                 placeholder="ninja@gmail.com"
                 required
                  autofocus
                  v-model="form.email"
                 />
                <input
                 type="password"
                 name="password"
                 id="Password"
                 class="form-control form-group"
                  placeholder="password"
                  required
                  autofocus
                  v-model="form.Password"
                  >
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="button" @click="submit()">Login</button>
            </form><!-- /form -->
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
        Password: ''
      },
      error: null,
      activated: false
    }
  },
  methods: {
    submit () {
      let db = firebase.firestore()
      firebase.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.Password)
        .then(data => {
          db.collection('users').doc(firebase.auth().currentUser.email).get().then(snapshot => {
            let activated = snapshot.data().activated
            this.activated = activated
            if (activated) {
              this.$router.push('/dash')
            } else {
              this.$router.push('/activate')
            }
          })
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
@import '../assets/auth.css'
</style>
