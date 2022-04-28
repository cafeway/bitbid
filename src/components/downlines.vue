<template>
<div>
<h1>Your Team</h1>
<table>
  <thead>
    <tr>
      <!-- <th scope="col">UserId</th>
      <th scope="col">UserName</th>
      <th scope="col">Commission</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="member in refferals" :key="member.id">
      <td data-label="UserId">{{ member.UserId}}</td>
      <td data-label="Username">{{ member.username }}</td>
      <td data-label="Commission">{{member.bonus }}</td>
      <td data-label="Joined">{{member.joined }}</td>
    </tr>

  </tbody>
</table>
</div>
</template>
<style>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}
f
table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      email: '',
      btcaddress: '',
      username: '',
      litecoinaddress: '',
      phone: '',
      role: '',
      change: 0,
      downlines: 0,
      amount: 0,
      balance: 0,
      refferals: [],
      form: {
        new_number: '',
        downline: ''
      }
    }
  },
  mounted: function () {
    let db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.refferals.push(doc.data())
      })
    })
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
