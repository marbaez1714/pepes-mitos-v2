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
.tour {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .section {
    flex: 1 0 0;
    height: 30vh;
    padding: 2.5vh 2.5vh;
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
    .section {
      height: 50vh;
    }
  }
}
</style>
