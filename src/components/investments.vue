/* eslint-disable camelcase */
<template>
  <html lang="es">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimun-scale=1.0"/>
    <link rel="stylesheet" href="styles.css"/>
    <title></title>
  </head>
  <body>
    <h4>Investment Logs</h4>
    <div class="table-container">
      <table class="table-rwd">
        <tr>

          <th>Inv Id</th>
          <th>Pack id</th>
          <th>Amount</th>
          <th>Daily Pay</th>
          <th>StartDay</th>
          <th>StopDay</th>
          <th>Cashouts</th>
          <th>Status</th>
        </tr>
        <tr v-for="inv in investments" :key="inv.id">
          <td>{{inv.id}}</td>
          <td>{{inv.id}}</td>
          <td>{{ inv.amount}}</td>
          <td>{{ inv.dailyPay }}</td>
          <td>{{ inv.startDay }}</td>
          <td>{{ inv.stopDay }}</td>
          <td>{{ inv.cashouts }}</td>
          <td>{{ inv.verification_status }}</td>
        </tr>

      </table>
    </div>
  </body>
</html>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      investments: [],
      balance: 0
    }
  },
  mounted: function () {
    let db = firebase.firestore()
    this.balance = 0
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.balance = data.wallet_balance
    })
    db.collection('bids').where('email', '==', firebase.auth().currentUser.email).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.investments.push(doc.data())
      })
    })
  },
  methods: {
    withdraw: function (id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', id).where('cashed', '==', false).get().then(snapshot => {
        snapshot.forEach(doc => {
          let DocId = doc.id
          db.collection('users').doc(this.user.data.email).collection('investments').doc(DocId).update({
            cashed: true
          })
          db.collection('users').doc(this.user.data.email).collection('investments').doc(DocId).get().then(snapshot => {
            let data = snapshot.data()
            let cashout = data.amount
            console.log(cashout)
            db.collection('users').doc(this.user.data.email).get().then(snapshot => {
              let data = snapshot.data()
              let balance = data.wallet_balance + cashout
              console.log(balance)
              db.collection('users').doc(this.user.data.email).update({
                wallet_balance: balance
              })
            })
          })
        })
      })
    },
    startCallBack: function (id) {
      console.log(id)
    },
    // eslint-disable-next-line camelcase
    endCallBack: function (bid_id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
        snapshot.forEach(doc => {
          let db = firebase.firestore()
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let ifmatured = snapshot.data().matured
            if (ifmatured) {
              console.log(snapshot.data().state)
            } else {
              console.log('......')
              db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                state: 'matured'
              })
            }
          })
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

:root {
  --color-main: #2a2a2a;
  --color-dark: #1d2231;
  --texto-grey: #8390a2;
  --color-blanco: #fff;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #333;
}

h4 {
  text-align: center;
  color: #333;
}

.table-rwd {
  font-size: 0.85em;
  border: 1px solid rgba(181, 213, 144, 0.5);
  color: #666;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
.table-rwd td,
.table-rwd th {
  padding: 0.8em;
  border-bottom: 1px solid rgba(181, 213, 144, 0.5);
}
.table-rwd th {
  background: var(--color-main);
  color: #fff;
  font-weight: normal;
  text-align: right;
}
.table-rwd td {
  text-align: right;
}

.table-rwd td:first-of-type {
  text-align: left;
}
.table-rwd td:first-of-type:before {
  content: "";
}
.table-rwd td:first-of-type:after {
  content: "";
}
.table-rwd tr:hover {
  background: rgba(181, 213, 144, 0.2);
}
.table-rwd tr td:nth-child(2n) {
  background: rgba(181, 213, 144, 0.2);
}

.table-container {
  overflow-x: auto;
}

.table-rwd {
  min-width: 980px;
}
.table-rwd td:first-child {
  position: absolute;
  background: #fff;
  width: 8em;
}
.table-rwd th:first-child {
  width: 8em;
}
.table-rwd tr:hover td:first-child {
  background: var(--color-main);
  color: #fff;
}

.table-rwd tr:nth-child(2) td:first-child {
  box-shadow: 0 -2.7em 0 -6px var(--color-main),
    -6px -2.7em 0 -6px var(--color-main);
}

</style>
