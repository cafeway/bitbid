<template>
<div>
<html>
  <head>
    <title>Google</title>
  </head>
  <body>
    <div class="box"></div>
    <div class="g1">
      <div class="hl"></div>
      <div class="ggap"></div>
    </div>
    <div class="o1"></div>
    <div class="o2"></div>
    <div class="g2">
      <div class="sl"></div>
      <div class="hc"></div>
    </div>
    <div class="l"></div>
    <div class="e">
      <div class="dl"></div>
      <div class="egap"></div>
    </div>
    <div class="searchbar">
      <div class="search"><img src="data:image/png;base64,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"></div>
      <div class="cursor"></div>
    </div>
  </body>
</html>
</div>
</template>
<script>
</script>
<style scoped>
body {
  text-align: center;
}
.g1 {
  border-style: solid;
  border-width: 15px;
  border-radius: 50%;
  border-color: rgb(66,133,244);
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 490px;
}
.hl {
  border-style: solid;
  border-width: 7px;
  border-color: rgb(66,133,244);
  width: 60px;
  position: absolute;
  top: 45px;
  left: 40px;
  background-color: rgb(66,133,244);
}
.ggap {
  border: 0 solid transparent;
  border-right-width: 0px;
  border-left-width: 60px;
  border-bottom: 60px solid rgb(255,255,255);
  width: 0px;
  height: 0px;
  position: absolute;
  left: 55px;
  bottom: 55px;
}
.o1, .o2 {
  border-style: solid;
  border-width: 13px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 95px;
}
.o1 {
  left: 635px;
  border-color: rgb(219,68,55);
}
.o2 {
  left: 730px;
  border-color: rgb(244,160,0);
}
.g2 {
  border-style: solid;
  border-width: 13px;
  border-radius: 50%;
  border-color: rgb(66,133,244);
  width: 60px;
  height: 60px;
  position: absolute;
  top: 95px;
  left: 825px;
}
.sl {
  border-style: solid;
  border-width: 6.5px;
  border-color: rgb(66,133,244);
  background-color: rgb(66,133,244);
  width: 0px;
  height: 80px;
  position: absolute;
  top: -10px;
  left: 60px;
}
.hc {
  width: 55px;
  height: 30px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border: 13px solid rgb(66,133,244);
  border-top: 0px;
  position: absolute;
  top: 80px;
  left: -8px;
}
.l {
  border-style: solid;
  border-width: 7px;
  border-color: rgb(15,157,88);
  width: 0px;
  height: 100px;
  position: absolute;
  top: 60px;
  left: 930px;
  background-color: rgb(15,157,88);
}
.e {
  border-style: solid;
  border-width: 13px;
  border-radius: 50%;
  border-color: rgb(219,68,55);
  width: 60px;
  height: 60px;
  position: absolute;
  top: 95px;
  left: 960px;
}
.dl {
  border-style: solid;
  border-color: rgb(219,68,55);
  background-color: rgb(219,68,55);
  border-width: 7px;
  width: 60px;
  position: absolute;
  top: 20px;
  right: -10px;
  transform: rotate(-25deg);
}
.egap {
  border: 0 solid transparent;
  border-top-width: 27px;
  border-bottom-width: 20px;
  border-right: 50px solid rgb(255,255,255);
  width: 0px;
  height: 0px;
  position: absolute;
  top: 10px;
  left: 30px;
}
.searchbar {
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  border-color: rgb(255,255,255);
  width: 700px;
  height: 40px;
  position: absolute;
  top: 250px;
  left: 425px;
  box-shadow: 0 0 5px 0.9px grey;
  cursor: text;
}
img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 12px;
}
.cursor {
  border-style: solid;
  border-width: 0.4px;
  border-color: rgb(0,0,0);
  width: 0px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 50px;
  animation-name: blink;
  animation-duration: 0.8s;
  animation-timimg-function: linear;
  animation-iteration-count: infinite;
}
@keyframes blink {
  0%{border-color: black;}
  49%{border-color: transparent;}
  50%{border-color: transparent;}
  99%{border-color: transparent;}
  100%{border-color: black;}
}

</style>
