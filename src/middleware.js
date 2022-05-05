import firebase from 'firebase'
export default function auth () {
  firebase.onAuthStateChanged(auth, (user) => {
    if (!user) {
      this.router.push('/')
      // ...
    }
  })
}
