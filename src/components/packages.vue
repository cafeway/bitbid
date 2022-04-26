/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
<div class="pricing-table">
  <div class="pricing-card">
    <h3 class="pricing-card-header">Bronze</h3>
    <div class="price"><sup>$</sup>25<span></span></div>
    <ul>
      <li><strong>Earn</strong>$0.25</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Silver</h3>
    <div class="price"><sup>$</sup>50<span></span></div>
    <ul>
      <li><strong>Earn</strong>$1</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">White</h3>
    <div class="price"><sup>$</sup>100<span></span></div>
    <ul>
      <li><strong>Earn</strong>$2</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Black</h3>
    <div class="price"><sup>$</sup>200<span></span></div>
    <ul>
      <li><strong>Earn</strong>$4</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold</h3>
    <div class="price"><sup>$</sup>400<span></span></div>
    <ul>
      <li><strong>Earn</strong>$8</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Gold Pro</h3>
    <div class="price"><sup>$</sup>500<span></span></div>
    <ul>
      <li><strong>Earn</strong>$10</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinum</h3>
    <div class="price"><sup>$</sup>100<span></span></div>
    <ul>
      <li><strong>Earn</strong>$21</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Platinium Pro</h3>
    <div class="price"><sup>$</sup>2000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$43</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
  <div class="pricing-card">
    <h3 class="pricing-card-header">Diamond</h3>
    <div class="price"><sup>$</sup>5000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$109</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div><div class="pricing-card">
    <h3 class="pricing-card-header">Diamond pro</h3>
    <div class="price"><sup>$</sup>10000<span></span></div>
    <ul>
      <li><strong>Earn</strong>$209</li>
    </ul>
    <a href="#" class="order-btn">Order Now</a>
  </div>
</div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans",sans-serif;
  text-decoration: none;
  list-style: none;
}

body{
  background-color: #30336b;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.pricing-table{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: min(1600px, 100%);
  margin: auto;
}

.pricing-card{
  flex: 1;
  max-width: 360px;
  background-color: #fff;
  margin: 20px 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  color: #2d2d2d;
  transition: .3s linear;
}

.pricing-card-header{
  background-color: #0fbcf9;
  display: inline-block;
  color: #fff;
  padding: 12px 30px;
  border-radius: 0 0 20px 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  transition: .4s linear;
}

.pricing-card:hover .pricing-card-header{
  box-shadow: 0 0 0 26em #0fbcf9;
}

.price{
  font-size: 70px;
  color: #0fbcf9;
  margin: 40px 0;
  transition: .2s linear;
}

.price sup, .price span{
  font-size: 22px;
  font-weight: 700;
}

.pricing-card:hover ,.pricing-card:hover .price{
  color: #fff;
}

.pricing-card li{
  font-size: 16px;
  padding: 10px 0;
  text-transform: uppercase;
}

.order-btn{
  display: inline-block;
  margin-bottom: 40px;
  margin-top: 80px;
  border: 2px solid #0fbcf9;
  color: #0fbcf9;
  padding: 18px 40px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 500;
  transition: .3s linear;
}

.order-btn:hover{
  background-color: #0fbcf9;
  color: #fff;
}

@media screen and (max-width:1100px){
  .pricing-card{
    flex: 50%;
  }
}
</style>
