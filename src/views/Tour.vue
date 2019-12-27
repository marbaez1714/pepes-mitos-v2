<template>
  <div class="tour">
    <div class="section yellow"><img src="../assets/tour1.jpg" /></div>
    <div class="section orange"><img src="../assets/tour2.jpg" /></div>
    <div class="section green"><img src="../assets/tour3.jpg" /></div>
    <div class="section red"><img src="../assets/tour4.jpg" /></div>
    <div class="section green-light"><img src="../assets/tour5.jpg" /></div>
    <div class="section pink"><img src="../assets/tour6.jpg" /></div>
  </div>
</template>
<style lang="scss" scoped>
$blue-light: #5bc6cc;
$blue-dark: #072269;
$yellow: #f8ed45;
$blue: #5bc6cc;
$orange: #f07f22;
$green: #43ac88;
$red: #ee373e;
$green-light: #9ecf7c;
$pink: #f06098;
$dark: #4a4a4a;
$brown: #382626;
$gradient: linear-gradient(
  100deg,
  rgba(255, 255, 255, 0%) 0%,
  rgba(0, 0, 0, 0.15) 100%
);
.tour {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  .section {
    height: 45vh;
    padding: 2.5vh 2.5vh;
    flex: 1 0 0;
    transition: all 250ms ease-in;
    background-image: $gradient, url("../assets/concrete-wall.png");
    img {
      height: 100%;
    }
    &:hover {
      box-shadow: inset 0 0 10px #000000;
    }
    &.yellow {
      background-color: $yellow;
    }
    &.orange {
      background-color: $orange;
    }
    &.green {
      background-color: $green;
    }
    &.red {
      background-color: $red;
    }
    &.green-light {
      background-color: $green-light;
    }
    &.pink {
      background-color: $pink;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    .section {
      width: calc(100% - 5vh);
      img {
        width: 100%;
        height: unset;
      }
    }
  }
}
</style>
