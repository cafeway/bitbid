<template>
  <div class="container">
<div class="row align-items-center padding-top:700px;">
    <div class="col-md-12">
        <div class="text-center">
            <p id="profile-name" class="profile-name-card"></p>
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
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="button" @click="resetPassword()">Reset Password</button>
            </form><!-- /form -->
        </div>
    </div>
</div>
</div>

</template>
<script>
import firebase from 'firebase'
export default {
  methods: {
    showuserdata: function () {
      alert('....')
    },
    search: function () {
      let db = firebase.firestore()
      console.log(this.form.email)
      db.collection('users').where('email', '==', this.form.email).get().then(snapshot => {
        snapshot.forEach(doc => {
          this.userinfo.push(doc.data)
        })
      })
    },
    resetPassword: function () {
      firebase.auth().sendPasswordResetEmail(this.form.email)
        .then(
          this.$swal('check your email to reset your password')
        ).catch(function (err) {
          console.log(err)
        })
    }
  },
  data () {
    return {
      role: '',
      userinfo: [],
      form: {
        email: ''
      }
    }
  }
}
</script>

<style scoped>
.form-control-borderless {
    border: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
</style>
