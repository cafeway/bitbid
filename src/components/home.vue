<template>
 <div class="container-fluid">
 <link rel="stylesheet" href="../assets/nav.css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 class="navbar-brand" href="#">BITBID</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#howitworks">How it works</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
       <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"><router-link to="/login">login</router-link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item"><router-link to="/register">Register</router-link></a>
        </div>
      </div>
    </form>
  </div>
</nav>
<hr>
<!--how it works-->
<!-- details card section starts from here -->
<section class="details-card">
    <div class="container">
        <div class="row" id="howitworks">
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/register.png" alt="">
                        <span><h4>Step1</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Register</h3>
                        <p>
                        Make sure you use your correct number during registration.This is how members will communicate with you and how you will get paid.
                        After registration a joining fee of ksh 250 will be required alongside proof of payment
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/login.png" alt="">
                        <span><h4>Step2</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Login</h3>
                        <p>
                        After registration and payment you will now have access to login into your account and bid otherwise you will be
                        stuck at the login page till you pay the activation fee
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/payment.png" alt="">
                        <span><h4>Step3</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Invest</h3>
                        <p>
                        The next step is to click invest after login then enter your  desired  investment amount.<br><i>Min 2000 max 20000</i>
                        </p>
                            <!-- <a href="#" class="btn-card">Read</a> -->
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
        <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/timer.png" alt="">
                        <span><h4>Step4</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Timer</h3>
                        <p>
                       After clicking invest your proceed to click the activate button
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/pay.jpg" alt="">
                        <span><h4>Step5</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Make payment</h3>
                        <p>
                        After your investment is allocated to a receiver all you need to do is login into your account,make payment, upload proof of payment
                        You can also call the recipient for confimation
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src="../assets/payment.jpg" alt="">
                        <span><h4>Step6</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Get paid</h3>
                        <p>
                        When the timer is over, a cashout button will be visible,click on it and you will be allocated a pay with 30% interest
                        make sure to confirm recipience of funds
                        </p>
                            <!-- <a href="#" class="btn-card">Read</a> -->
                    </div>
                </div>
            </div>
        </div>
         <hr>
    </div>
</section>
<section >
  <div class="container">
    <div class="row">
       <div class="col-md-6">
            <div class="card-content">
            <div class="card-img">
                <img src="../assets/reffer.jpg" alt="">
            </div>
            <div class="card-desc">
                        <h3>Refferal system</h3>
                        <p>
                        BITBID offers 5% continous referral referral bonus. Whenever your downlines invest, you get paid. The referral bonus will be added to your incoming funds, meaning you have to invest in order to be paid the bonus. Kindly note that your accumulated referral bonus must be greater or equal to your investment otherwise the bonus will not be paid.
                        </p>
            </div>
            </div>
       </div>
       <div class="col-md-6">
            <div class="card-content">
            <div class="card-img">
                <img src="../assets/about.jpg" alt="">
            </div>
            <div class="card-desc">
                        <h3>About Us</h3>
                        <p>
                         BIDBIT is a Peer to Peer mutual investment system where where members get rewarded from helping each others. This is the next big thing to liberate your financial burden.
                        </p>
            </div>
            </div>
       </div>
    </div>
  </div>
</section>
</div>

</template>
<style scoped>
@import '../assets/footer.css';
@import '../assets/cards.css'
</style>
