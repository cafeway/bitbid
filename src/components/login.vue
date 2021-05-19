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
          <div class="card-header">
          <div class="container">
          <img src="https://gle-precision.com/wp-content/uploads/2019/04/fiber-optic-globe.jpg">
          </div>
          </div>
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
                <div class="col-md-3">
                <vs-button color="primary" type="border" @click="login()" icon="login">Login</vs-button>
                </div>
                <div class="col-md-5">
                <vs-button color="danger" type="border" icon="password">Reset Password</vs-button>
                </div>
                <div class="col-md-4">
                <vs-button color="success" type="filled" @click="ToRegister()" icon="favorite">Join</vs-button>
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
    ToRegister () {
      this.$router.push('/reg')
    },
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push('/dash')
        })
        .catch(err => {
          this.$vs.notify({title: 'Invalid email or password', text: err.message, color: 'dark', position: 'bottom-center'})
        })
    }
  }
}
</script>
<style scoped>

</style>
