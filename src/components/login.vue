<template>
<div class="container-fluid" style="padding-top:100px;background-image:url('data:image/jpeg;base64,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')">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title"><sup>@</sup>Hortlite.<sub>com</sub></h1>
            <div class="account-wall">
                <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt="">
                <form class="form-signin">
                <input type="email" class="form-control" placeholder="Email" id="email" v-model="form.email" required autofocus>
                <input type="password" id="passsword" v-model="form.password" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="button" @click="login()">
                    Sign in</button>
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me">
                    Remember me
                </label>
                <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
            </div>
            <a class="text-center new-account" @click="ToRegister()">Create an account </a>
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
        password: ''
      },
      error: null
    }
  },
  methods: {
    ToRegister () {
      this.$router.push('/register')
    },
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push('/dash')
        })
        .catch(err => {
          this.$vs.notify({title: 'Invalid email or password', text: err.message, color: 'red', position: 'bottom-center'})
        })
    }
  }
}
</script>
<style scoped>
.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}
</style>
