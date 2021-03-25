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
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/payment">Payment</router-link></a>
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

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/pay.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>Earn Incentives </h5>
        <p>Get profits by sending your peers your bid tickets.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/blockchain.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>Crypto</h5>
        <p>Buy Crypto using your profits.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/bkg.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>Get Instant profits</h5>
        <p>Get Pain in over 10 payment methods.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<!--- ignore the code below-->

<div class="link-area">
  <a href="https://www.youtube.com/channel/UCki4IDK86E6_pDtptmsslow" target="_blank">Click for More</a>
</div>
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
                       After clicking invest your three days timer begins counting down,During this period your funds get allocated a receiver
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
<!--footer-->
<footer id="dk-footer" class="dk-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <div class="dk-footer-box-info">
                        <a href="index.html" class="footer-logo">
                            <!-- <img src="images/footer_logo.png" alt="footer_logo" class="img-fluid"> -->
                        </a>
                        <p class="footer-info-text">
                         Bidbid Invest on Your peers
                        </p>
                        <div class="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- End Social link -->
                    </div>
                    <!-- End Footer info -->
                    <div class="footer-awarad">
                        <img src="images/icon/best.png" alt="">
                        <!-- <p>Best Design Company 2019</p> -->
                    </div>
                </div>
                <!-- End Col -->
                <div class="col-md-12 col-lg-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us">
                                <div class="contact-icon">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <!-- End contact Icon -->
                                <div class="contact-info">
                                    <h3>Email us</h3>
                                    <p>Bitbid@gmail.com</p>
                                </div>
                                <!-- End Contact Info -->
                            </div>
                            <!-- End Contact Us -->
                        </div>
                        <!-- End Col -->
                        <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">
                                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <!-- End contact Icon -->
                                <div class="contact-info">
                                    <h3>0743126150</h3>
                                    <p>Give us a call</p>
                                </div>
                                <!-- End Contact Info -->
                            </div>
                            <!-- End Contact Us -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Contact Row -->
                    <div class="row" id="address">
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    <h3>NetWorth</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                            </div>
                            <!-- End Footer Widget -->
                        </div>
                        <!-- End col -->
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget">
                                <div class="section-heading">
                                    <h3>Active bids</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <p><!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                                send us your mail and we will get in touch</p>
                                <form action="#">
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <input type="email" class="form-control" placeholder="Email Address">
                                            <button type="submit" lang="btn btn-md btn-success">
                                              <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <!-- End form -->
                            </div>
                            <!-- End footer widget -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Row -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Widget Row -->
        </div>
        <!-- End Contact Container -->
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <span>Copyright © 2021, All Right ninja corp</span>
                    </div>
                    <!-- End Col -->
                    <!-- End col -->
                </div>
                <!-- End Row -->
            </div>
            <!-- End Copyright Container -->
        </div>
        <!-- End Copyright -->
        <!-- Back to top -->
        <div class="back-to-top">
            <button class="btn btn-dark" title="Back to Top" style="display: block;">
                <a href="#/"><i class="fa fa-angle-up"></i></a>
            </button>
        </div>
        <!-- End Back to top -->
</footer>

</div>

</template>
<style scoped>
@import '../assets/footer.css';
@import '../assets/cards.css'
</style>
