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
