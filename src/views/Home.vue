<template>
  <div class="home">
    <div class="section green">
      <div class="overlay" />
      <h2 class="title">Tour</h2>
    </div>
    <div class="section white">
      <div class="overlay" />
      <h2 class="title">About Us</h2>
    </div>
    <div class="section red">
      <div class="overlay" />
      <h2 class="title">Menu</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
$red: #ee373e;
$blue: #5bc6cc;
$green-light: #9ecf7c;
$gradient: linear-gradient(
  100deg,
  rgba(255, 255, 255, 0%) 0%,
  rgba(0, 0, 0, 0.15) 100%
);
.home {
  display: flex;
  flex-direction: row;
  height: 90vh;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0px;
    transition: all 250ms ease-in;
    background-size: cover;
    position: relative;
    .title {
      z-index: 3;
      font-family: "Recoleta-Bold";
      font-size: 3rem;
    }

    .overlay {
      display: flex;
      height: 100%;
      width: 100%;
      opacity: 0.9;
      position: absolute;
      z-index: 2;
      box-shadow: none;
      transition: all 250ms ease-in;
      cursor: pointer;
    }

    &.green {
      background-image: $gradient, url("../assets/background1-3.jpg");

      .overlay {
        background-image: $gradient, url("../assets/arches.png");
        background-color: $green-light;
      }
    }
    &.white {
      background-image: $gradient, url("../assets/background2-3.jpg");

      .overlay {
        opacity: 0.8;
        background-image: $gradient, url("../assets/arches.png");
        background-color: white;
      }
    }
    &.red {
      background-image: $gradient, url("../assets/background3-3.jpg");

      .overlay {
        background-image: $gradient, url("../assets/arches.png");
        background-color: $red;
      }
    }
    &:hover {
      .overlay {
        box-shadow: inset 0 0 10px #000000;
      }
    }
  }
}
</style>
