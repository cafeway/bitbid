<template>
  <div class="container-fluid all" style="padding-top:150px; backgroundImage: { url('../assets/btc.jpg')}">
    <div class="row justify-content-center">
      <div class="col-md-6" style="background-color: transparent">
       <v-row justify="space-around">
    <v-icon
      large
      color="green darken-2"
    >
    </v-icon>
       </v-row>
        <div class="card">
          <div class="card-header">Welcome back</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit" >
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
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-success  ">Login</button>
                  <br>
                   <a class="text-danger" href="/resetpassword"><b>Reset password</b></a>
                   <hr>
                   <a class="text-success" @click="ToRegister()"><b>Create a new Account</b></a>
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
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push('/dash')
        })
        .catch(err => {
          this.error = err.message
        })
    },
    ToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>
<style scoped>

</style>
