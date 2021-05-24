<template>
<div class="container">
<div class="light-dark-btn"></div>
    <div class="container">
        <section class="card">
            <div class="icon"><i class="fa fa-paper-plane" aria-hidden="true"></i></div>
            <h3>Basic</h3>
            <h4><sup>$</sup>25</h4>
            <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i> 10Gb Space</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 5 Domain Names</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 2 E-mail Address</li>
                <li><i class="fa fa-times" aria-hidden="true"></i> Live Support</li>
            </ul>
            <a href="#" class="btn">Order now</a>
        </section>
        <section class="card">
            <div class="icon standard"><i class="fa fa-plane" aria-hidden="true"></i></div>
            <h3>Standard</h3>
            <h4><sup>$</sup>50</h4>
            <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i> 20Gb Space</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 5 Domain Names</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 2 E-mail Address</li>
                <li><i class="fa fa-times" aria-hidden="true"></i> Live Support</li>
            </ul>
            <a href="#" class="btn standard">Order now</a>
        </section>
        <section class="card">
            <div class="icon premium"><i class="fa fa-rocket" aria-hidden="true"></i></div>
            <h3>Premium</h3>
            <h4><sup>$</sup>100</h4>
            <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i> 50Gb Space</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 10 Domain Names</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> 5 E-mail Address</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Live Support</li>
            </ul>
            <a href="#" class="btn premium">Order now</a>
        </section>
    </div>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap');
:root {
    --dark-bg: rgb(29, 34, 37);
    --dark-text-color: #FFF;
    --light-bg: rgb(219, 219, 219);
    --light-text-color: var(--dark-bg);
    --basic-btn: rgb(61, 111, 218);
    --basic-btn-hover: rgb(17, 42, 97);
    --standard-btn: rgb(147, 61, 218);
    --standard-btn-hover: rgb(65, 18, 104);
    --premium-btn: rgb(61, 218, 113);
    --premium-btn-hover: rgb(23, 143, 63);
}

* {
    padding: 0;
    margin: 0;
}

body {
    width: 100%;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .2s ease-in;
    font-family: 'Baloo Thambi 2', cursive;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 100px 50px;
}

.card {
    position: relative;
    width: 250px;
    height: auto;
    background-color: var(--dark-bg);
    border-radius: 20px;
    padding: 10px;
    color: #FFF;
    box-shadow: 0px 0px 25px #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    transition: all .2s ease-in;
}

.card:hover {
    transform: scale(1.05);
}
.card .icon {
    width: 50px;
    height: 50px;
    background-color: var(--basic-btn);
    color: rgb(255, 255, 255);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    margin: 20px 0;
}

.card h3, .card sup {
    font-size: 2rem;
    font-weight: 100;
}

.card h4 {
    font-size: 4rem;
}

.card ul {
    list-style: none;
}
.card ul li {
    padding: 2px 0;
}

.card ul li .fa-check {
    color: rgb(12, 99, 31);
}
.card ul li .fa-times {
    color: rgb(99, 12, 12);
}

.card .btn {
    padding: 10px 20px;
    background-color: var(--basic-btn);
    border-radius: 25px;
    margin: 20px;
    text-decoration: none;
    color: #FFF;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color .2s ease-in;
}

.card .btn:hover {
    background-color: var(--basic-btn-hover);
}
.card .standard {
    background-color: var(--standard-btn)
}
.card .btn.standard:hover {
    background-color: var(--standard-btn-hover);
}
.card .premium {
    background-color: var(--premium-btn)
}
.card .btn.premium:hover {
    background-color: var(--premium-btn-hover);
}

.light-dark-btn {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: var(--dark-text-color);
    top: 20px;
    left: calc(50% - 30px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 0 20px #000;
    transition: background-color .2s ease-in;
}
.light-dark-btn::before {
    content: '\f185';
    font-family: fontAwesome;
}

/* LIGHT THEME*/

body.light .light-dark-btn::before {
    content: '\f186';
    font-family: fontAwesome;
}

body.light .light-dark-btn {
    color: var(--dark-text-color);
    background-color: var(--dark-bg);
}

body.light {
    background-color: var(--light-bg);
}

body.light .card {
    background-color: var(--light-bg);
    color: var(--light-text-color);
}

</style>
