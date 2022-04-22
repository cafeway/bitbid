<template>
<div>
<!-- Overlay -->
<div class="overlay fade-out"></div>
<!-- Header -->
<header class="header">
  <div class="container">
    <nav class="flex flex-jc-sb flex-ai-c">
      <!-- Logo -->

      <!-- Links -->
      <div class="main-navgation hide-for-mobile">
        <a href="#">Home</a><a href="#"><router-link to="/login">Login</router-link></a>
      </div>
      <!-- CTA Button -->
      <a href="/register" class="button hide-for-mobile">  <router-link to="/register">Join Us</router-link></a>
      <!-- Hamburger Menu -->
      <div class="menu hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</header>
<main class="main">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-image"></div>
      <div class="hero-text">
        <h1>Next generation crypto mining platform</h1>
        <p>
          Take your financial life online. Your Dream Creation account will be a
          one-stop-shop for a  new level of digital currency.
        </p>
        <a href="#" class="button"><router-link to="/register">Join Us</router-link></a>
      </div>
    </div>
  </section>
  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <div class="section-heading">
        <h2>Why choose DreamCreationAgency?</h2>
        <p>
          We leverage Crypto mining and A Day in crypto Helps You Work, Rest And Play.
        </p>
      </div>
      <div class="section-contant">
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">
              <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/icon-online.svg" alt="Online Banking Icon" />
            </div>
            <div class="feature-title">
              <h3>Instant Withdrawals</h3>
            </div>
            <div class="feature-description">
              <p>
                Our modern web and mobile applications allow you to keep
                track of your investments and withdraw your earnings Instantly at the comfort of your home
              </p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/icon-budgeting.svg" alt="Simple Budgeting Icon" />
            </div>
            <div class="feature-title">
              <h3>Clean Interface</h3>
            </div>
            <div class="feature-description">
              <p>
                See exactly where your money goes and  keep track of how much interest it reaps easily</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/icon-onboarding.svg" alt="Fast Onboarding Icon" />
            </div>
            <div class="feature-title">
              <h3>Fast Onboarding</h3>
            </div>
            <div class="feature-description">
              <p>
                We don’t do branches. Open your account in minutes online
                and start taking control of your finances right away.
              </p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/icon-api.svg" alt="Open API Icon" />
            </div>
            <div class="feature-title">
              <h3>Customer service</h3>
            </div>
            <div class="feature-description">
              <p>
                Tracking your account errors and complaints has never been easier. Our organization has adhoc customer cares as well as an online chatbot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Latest Articels -->

</main>
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-logo">
      <a href="#">
        <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/logo-light.svg" alt="EasyBank Logo" />
      </a>
    </div>
    <div class="footer-social-media">
      <a href="#">
        <!-- <img src="./images/icon-facebook.svg" alt="Facebook" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <title>Facebook</title>
          <path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
        </svg>
      </a>
      <a href="#">
        <!-- <img src="./images/icon-youtube.svg" alt="Youtube" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
          <title>Youtube</title>
          <path fill="#FFF" d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
        </svg>
      </a>
      <a href="#">
        <!-- <img src="./images/icon-twitter.svg" alt="Twitter" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
          <title>Twitter</title>
          <path fill="#FFF" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
        </svg>
      </a>
      <a href="#">
        <!-- <img src="./images/icon-pinterest.svg" alt="Pinterest" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <title>Pinterest</title>
          <path fill="#FFF" d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
        </svg>
      </a>
      <a href="#">
        <!-- <img src="./images/icon-instagram.svg" alt="Instagram" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
          <title>Instagram</title>
          <path fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
        </svg>
      </a>
    </div>
    <div class="footer-links col1">
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
    </div>
    <div class="footer-links col2">
      <a href="#">Careers</a>
      <a href="#">Support</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div class="footer-cta">
      <a href="#" class="button">Request Invite</a>
    </div>
    <div class="footer-copyright">
      <p>© Dream Creation. All Rights Reserved</p>
    </div>
  </div>
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" class="outer-link" target="_blank">Brixt Technologies</a>. Coded by <span class="outer-link">Brian The Ninja</span>.
    <ul class="social-media">
      <li>
        <a href="https://www.github.com/MohamedAridah" title="Visite My Github Account">
          <img src="https://raw.githubusercontent.com/devicons/devicon/1a5dbfa142a9677d6ddaa05d05f377ac23af9a2e/icons/github/github-original.svg" class="light" alt="My Github Account" />
        </a>
      </li>
      <li>
        <a href="https://www.codepen.io/FedLover" title="Visite My Codepen Account">
          <img src="https://raw.githubusercontent.com/devicons/devicon/1a5dbfa142a9677d6ddaa05d05f377ac23af9a2e/icons/codepen/codepen-plain.svg" class="light" alt="My codepen Account" />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/MohamedAridah" title="Visite My Frontend Mentor Account">
          <img src="https://mohamedaridah.github.io/hosted-assets/FEM.png" alt="My Frontend Mentor Account" />
        </a>
      </li>
    </ul>
  </div>
</footer>
</div>
</template>
<style>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: "Public Sans", sans-serif;
  font-weight: 400;
  color: #9698a6;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-x: hidden;
}

@media (min-width: 64em) {
  body {
    font-size: 1.125rem;
  }
}

a {
  text-decoration: none;
}

h1,
h2,
h3 {
  color: #2d314d;
  font-weight: 500;
}

h2 {
  font-size: 1.875rem;
  margin-bottom: 1.875rem;
}

@media (min-width: 64em) {
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2.25rem;
  }
}

.flex {
  display: flex;
}

.flex-jc-sb {
  justify-content: space-between;
}

.flex-jc-c {
  justify-content: center;
}

.flex-ai-c {
  align-items: center;
}

.container {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

@media (min-width: 64em) {
  .container {
    max-width: 69.375rem;
    margin: 0 auto;
  }
}

button,
.button {
  position: relative;
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.8125rem 2.1875rem;
  border-radius: 3.125rem;
  background: linear-gradient(to right, #31d35c, #2bb7da);
  color: white;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
}

button::after,
.button::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

button:hover::after,
.button:hover::after {
  opacity: 1;
}

@media (max-width: 63.9375em) {
  .hide-for-mobile {
    display: none;
  }
}

@media (min-width: 64em) {
  .hide-for-desktop {
    display: none;
  }
}

.fade-in {
  opacity: 1;
  visibility: visible;
}

.fade-out {
  opacity: 0;
  visibility: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #2d314d linear-gradient(to bottom, #2d314d, transparent);
  transition: 0.5s ease-in-out;
}

.section-heading {
  text-align: center;
  margin-bottom: 1.875rem;
}

@media (min-width: 40em) {
  .section-heading {
    text-align: start;
    margin-bottom: 2.8125rem;
  }
}

@media (min-width: 64em) {
  .section-heading {
    width: 60%;
  }
}

.header {
  position: relative;
  padding: 1.0625rem 0;
  z-index: 1;
  background: white;
}

.header nav {
  position: relative;
}

.header .logo img {
  width: 8.8125rem;
  height: 1.375rem;
}

@media (max-width: 63.9375em) {
  .header .main-navgation {
    position: absolute;
    top: calc(100% + 3.875rem);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: white;
    border-radius: 0.3125rem;
    padding: 1.625rem;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  .header .main-navgation.fade-in {
    top: calc(100% + 2.625rem);
    opacity: 1;
    visibility: visible;
    z-index: 1;
  }
}

.header .main-navgation a {
  padding: 0.625rem 0;
  color: #2d314d;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
}

.header .main-navgation a:hover {
  color: #9698a6;
}

@media (min-width: 64em) {
  .header .main-navgation a {
    position: relative;
    font-size: 0.875rem;
    color: #9698a6;
  }
  .header .main-navgation a:not(:last-child) {
    margin-right: 2rem;
  }
  .header .main-navgation a::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1.25rem;
    width: 100%;
    height: 0.3125rem;
    background: linear-gradient(to right, #31d35c, #2bb7da);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .header .main-navgation a:hover {
    color: #2d314d;
  }
  .header .main-navgation a:hover::after {
    opacity: 1;
  }
}

.header .menu {
  width: 1.625rem;
  cursor: pointer;
}

.header .menu > span {
  display: block;
  width: 100%;
  height: 0.125rem;
  background: #2d314d;
  transform-origin: 0.1875rem 0.0625rem;
  transition: transform 0.3s ease-in-out;
}

.header .menu > span:not(:last-child) {
  margin-bottom: 0.3125rem;
}

.header .menu.open > span:first-child {
  transform: rotate(45deg);
}

.header .menu.open > span:nth-child(2) {
  transform: scaleX(0);
}

.header .menu.open > span:last-child {
  transform: rotate(-45deg);
}

.hero {
  background: #fafafa;
}

@media (max-width: 63.9375em) {
  .hero .container {
    padding: 0;
  }
}

@media (min-width: 64em) {
  .hero .container {
    display: flex;
    align-items: center;
  }
}

.hero .hero-image {
  position: relative;
  background: url(https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/bg-intro-mobile.svg)
    no-repeat center/cover;
  min-height: 17.5rem;
}

@media (min-width: 40em) {
  .hero .hero-image {
    min-height: 25rem;
    background-position-y: 70%;
  }
}

@media (min-width: 64em) {
  .hero .hero-image {
    flex: 3;
    order: 2;
    min-height: 41rem;
    background-image: none;
  }
  .hero .hero-image::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 150%;
    background: url(https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/bg-intro-desktop.svg)
      no-repeat -5% 83%/122%;
  }
}

.hero .hero-image::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: url(https://raw.githubusercontent.com/MohamedAridah/frontendmentor_easybank-landing-page/main/images/image-mockups.png)
    no-repeat center bottom/93%;
}

@media (min-width: 40em) {
  .hero .hero-image::after {
    background-size: 53%;
  }
}

@media (min-width: 64em) {
  .hero .hero-image::after {
    width: 119%;
    height: 122%;
    background-size: 94%;
    background-position: center 150%;
    left: 19%;
  }
}

.hero .hero-text {
  text-align: center;
}

@media (max-width: 63.9375em) {
  .hero .hero-text {
    padding: 3.125rem 1.5rem;
  }
}

@media (min-width: 64em) {
  .hero .hero-text {
    flex: 2;
    order: 1;
    text-align: start;
  }
}

.hero .hero-text h1 {
  font-size: 2.3125rem;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

@media (min-width: 64em) {
  .hero .hero-text h1 {
    font-size: 3.25rem;
  }
}

.hero .hero-text p {
  line-height: 1.5;
  margin-bottom: 1.875rem;
}

.features {
  background: #f3f4f6;
  padding: 6.25rem 0;
}

.features .features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 30px;
}

.features .feature {
  text-align: center;
}

@media (min-width: 40em) {
  .features .feature {
    text-align: start;
    flex: 1 0 calc(50% - 30px);
  }
}

@media (min-width: 64em) {
  .features .feature {
    flex: 1;
  }
}

.features .feature-icon {
  margin-bottom: 1.875rem;
}

@media (min-width: 64em) {
  .features .feature-icon {
    margin-bottom: 2.75rem;
  }
}

.features .feature-title h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

@media (min-width: 64em) {
  .features .feature-title h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

.features .feature-description p {
  font-size: 0.875rem;
}

.articles {
  background: #fafafa;
  padding: 6.25rem 0;
}

.articles .articles-grid {
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 1fr;
}

@media (min-width: 40em) {
  .articles .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64em) {
  .articles .articles-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.articles .article {
  background: #fff;
  border-radius: 0.3125rem;
  box-shadow: 0 0.1875rem 0.75rem rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
}

.articles .article:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.articles .article-image {
  height: 12.5rem;
}

.articles .article-image img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.articles .article-text {
  padding: 1.875rem 1.5625rem 2.75rem 1.5625rem;
}

@media (min-width: 40em) {
  .articles .article-text {
    padding: 1.875rem 1.5625rem 1.5625rem 1.5625rem;
  }
}

.articles .article-author span {
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
}

.articles .article-title h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.2;
  transition: color 0.2s ease-in-out;
}

.articles .article-title h3:hover {
  color: #31d35c;
}

.articles .article-description p {
  font-size: 0.8125rem;
  line-height: 1.3;
}

.footer {
  background: #2d314d;
  color: white;
  padding: 2.5rem;
  padding-bottom: 0;
  text-align: center;
}

@media (min-width: 64em) {
  .footer {
    padding: 3.125rem;
    padding-bottom: 0;
  }
}

@media (min-width: 64em) {
  .footer .container {
    display: grid;
    grid-template-areas:
      "logo col1 col2 cta"
      "social col1 col2 copyright";
    justify-items: start;
    gap: 1rem;
  }
}

@media (max-width: 63.9375em) {
  .footer .footer-logo {
    margin-bottom: 1.875rem;
  }
}

@media (min-width: 64em) {
  .footer .footer-logo {
    grid-area: logo;
  }
}

@media (max-width: 63.9375em) {
  .footer .footer-social-media {
    margin-bottom: 1.875rem;
  }
}

@media (min-width: 64em) {
  .footer .footer-social-media {
    grid-area: social;
    align-self: end;
  }
}

.footer .footer-social-media a:not(:last-child) {
  margin-right: 1rem;
}

.footer .footer-social-media a:hover svg path {
  fill: #31d35c;
  transition: all 0.2s ease-in-out;
}

.footer .footer-links {
  display: flex;
  flex-direction: column;
}

@media (min-width: 64em) {
  .footer .footer-links {
    align-items: flex-start;
  }
}

.footer .footer-links a {
  color: #fff;
  font-size: 0.9375rem;
  line-height: 2.25;
  transition: color 0.2s ease-in-out;
}

.footer .footer-links a:hover {
  color: #31d35c;
}

@media (min-width: 64em) {
  .footer .col1 {
    grid-area: col1;
  }
}

@media (max-width: 63.9375em) {
  .footer .col2 {
    margin-bottom: 1.875rem;
  }
}

@media (min-width: 64em) {
  .footer .col2 {
    grid-area: col2;
  }
}

@media (max-width: 63.9375em) {
  .footer .footer-cta {
    margin-bottom: 1.875rem;
  }
}

@media (min-width: 64em) {
  .footer .footer-cta {
    grid-area: cta;
    justify-self: end;
  }
}

.footer .footer-copyright p {
  color: #9698a6;
  font-size: 0.875rem;
}

@media (min-width: 64em) {
  .footer .footer-copyright {
    grid-area: copyright;
    justify-self: end;
    align-self: end;
  }
}

.attribution {
  color: #fff;
  font-size: 0.8125rem;
  text-align: center;
  padding-top: 1.875rem;
  padding-bottom: 1.5625rem;
}

.attribution .outer-link {
  color: #fff;
  margin-left: 0.0625rem;
  transition: all 0.2s ease-in-out;
}

.attribution .outer-link:hover {
  color: #57db7a;
  cursor: pointer;
}

.attribution .social-media {
  list-style: none;
  margin-left: 0.3125rem;
  display: inline-flex;
  align-items: flex-end;
  gap: 0.75rem;
}

.attribution .social-media img {
  width: 22px;
  height: 22px;
  transition: transform 0.2s ease-in-out;
}

.attribution .social-media img:hover {
  transform: scale(1.08);
}

.attribution .social-media img.light {
  filter: invert(1);
}

</style>
