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
  <a class="navbar-brand" >Admin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">SetShares <span class="sr-only">(current)</span></a>
      </li>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">amount</label>

                <div class="col-md-6">
                  <input
                    id="transferamount"
                    type="number"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.amount"
                  />
                </div>
              </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" v-on:click="setshares" data-dismiss="modal">Set Shares</button>
      </div>
    </div>
  </div>
</div>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>User<i class="fa fa-user-circle-o"></i></th>
                        <th>PhoneNumber <i class="fa fa-mobile"></i></th>
                        <th>Investments<i class="fa fa-sort"></i></th>
                        <th>Activated<i class="fa fa-certificate"></i></th>
                        <th>Balance<i class="fa fa-money"></i></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.uid">
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.investments}}</td>
                        <td>{{user.activated}}</td>
                        <td>{{user.wallet_balance}}</td>
                        <td>{{user.shares}}</td>
                        <td>
                            <a href="#" class="view" v-on:click="verifyUser(user.email)" title="View" data-toggle="tooltip"><i class="fa fa-check"></i></a>
                            <a href="#" class="edit" v-on:click="deleteUser(user.email)" title="Edit" data-toggle="tooltip"><i class="fa fa-power-off"></i></a>
                            <a href="#" class="delete"  title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
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
        amount: ''
      }
    }
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('shares').doc('available').get().then(snapshot => {
      this.availableshares = snapshot.data().total
    })
    db.collection('users').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.users.push(doc.data())
      })
    })
  },
  methods: {
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
