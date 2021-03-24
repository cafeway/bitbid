import firebase from 'firebase/app'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOV7DEnom-HdWz3mO-CGtSX_at2rBZBtU',
  authDomain: 'hustlebidders.firebaseapp.com',
  databaseURL: 'https://hustlebidders-default-rtdb.firebaseio.com',
  projectId: 'hustlebidders',
  storageBucket: 'hustlebidders.appspot.com',
  messagingSenderId: '1045831540548',
  appId: '1:1045831540548:web:e9be5fd96b6240c3fe4111',
  measurementId: 'G-EQC5JY6CQ7'
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}
export default {
  auth: firebase.auth(),
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      })
  },
  logout () {
    firebase.auth().signOut()
      .then(function () {})
      .catch(function (error) {
        console.log(error)
      })
  }
}
