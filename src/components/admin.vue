<template>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Bootstrap Simple Data Table</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Search Users</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline col-md-6">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"  id="username" v-model="form.username" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
    </form>
  </div>
</nav>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>User<i class="fa fa-user-circle-o"></i></th>
                        <th>PhoneNumber <i class="fa fa-mobile"></i></th>
                        <th>Activated<i class="fa fa-certificate"></i></th>
                        <th>Balance<i class="fa fa-money"></i></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.uid">
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.activated}}</td>
                        <td>{{user.wallet_balance}}</td>
                        <td>
                         <ul>
                         <li data-toggle="modal" data-target="#exampleModal" class="alert alert-success">withdraw</li>
                         <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{user.username}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input class="form-control" id="amount" placeholder="amount" type="number" v-model="form.amount">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="withdraw(user.email)" >Withdraw</button>
      </div>
    </div>
  </div>
</div>
                         </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item active"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</body>
</html>
</template>
<style>
body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Roboto', sans-serif;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
    min-width: 1000px;
    background: #fff;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
    padding-bottom: 10px;
    margin: 0 0 10px;
    min-width: 100%;
}
.table-title h2 {
    margin: 8px 0 0;
    font-size: 22px;
}
.search-box {
    position: relative;
    float: right;
}
.search-box input {
    height: 34px;
    border-radius: 20px;
    padding-left: 35px;
    border-color: #ddd;
    box-shadow: none;
}
.search-box input:focus {
    border-color: #3FBAE4;
}
.search-box i {
    color: #a0a5b1;
    position: absolute;
    font-size: 19px;
    top: 8px;
    left: 10px;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}
table.table td:last-child {
    width: 130px;
}
table.table td a {
    color: #a0a5b1;
    display: inline-block;
    margin: 0 5px;
}
table.table td a.view {
    color: #03A9F4;
}
table.table td a.edit {
    color: #FFC107;
}
table.table td a.delete {
    color: #E34724;
}
table.table td i {
    font-size: 19px;
}
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 95%;
    width: 30px;
    height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 30px !important;
    text-align: center;
    padding: 0;
}
.pagination li a:hover {
    color: #666;
}
.pagination li.active a {
    background: #03A9F4;
}
.pagination li.active a:hover {
    background: #0397d6;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 6px;
    font-size: 95%;
}
</style>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      users: [],
      availableshares: 0,
      form: {
        username: '',
        amount: 0
      }
    }
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.users.push(doc.data())
      })
    })
    let user = firebase.auth().currentUser.email
    db.collection('users').doc(user).get().then(snapshot => {
      let data = snapshot.data()
      if (!data.admin) {
        window.location.href('/dash')
      }
    })
  },
  methods: {
    withdraw: function (email) {
      let db = firebase.firestore()
      console.log(email)
      db.collection('users').doc(email).collection('withdrawals').where('amount', '==', this.form.amount).get().then(snapshot => {
        snapshot.forEach(doc => {
          if (!doc.data().status) {
            db.collection('users').doc(email).collection('withdrawals').doc(doc.id).update({
              cashed: true
            })
          }
        })
      })
    },
    deleteUser: function (email) {
      let db = firebase.firestore()
      db.collection('users').doc(email).update({
        activated: true
      })
      this.$swal('activated')
    },
    verifyUser: function (email) {
      let db = firebase.firestore()
      db.collection('users').doc(email).update({
        verified: 'Yes'
      })
      this.$swal('verified')
    },
    setshares: function (event) {
      alert(this.form.amount)
      let db = firebase.firestore()
      db.collection('shares').doc('available').update({
        total: parseFloat(this.form.amount)
      })
    }
  }
}
</script>
