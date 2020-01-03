<template>
  <div class="home">
    <div class="section green" @click="$router.push('/tour')">
      <div class="overlay" />
      <h2 class="title">Tour</h2>
    </div>
    <div class="section white">
      <div class="overlay" />
      <img class="logo" src="../assets/logo.png" />
    </div>
    <div class="section red" @click="$router.push('/menu')">
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
.home {
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }

  .section {
    flex: 1 1 0px;
    display: flex;
    position: relative;
    align-items: center;
    background-size: cover;
    justify-content: center;
    transition: all 250ms ease-in;
    .title {
      z-index: 3;
      font-size: 3rem;
      font-family: "Recoleta-Bold";
    }
    .logo{
      z-index: 5;
      padding: 2rem;
      height: 40vh;
    }
    .overlay {
      z-index: 2;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      display: flex;
      cursor: pointer;
      box-shadow: none;
      position: absolute;
      transition: all 250ms ease-in;
    }
    &.green {
      background-image: $gradient, url("../assets/background1-3.jpg");
      .overlay {
        background-color: $green-light;
        background-image: $gradient, url("../assets/arches.png");
      }
    }
    &.white {
      background-image: $gradient, url("../assets/background2-3.jpg");

      .overlay {
        opacity: 0.8;
        background-color: white;
        background-image: $gradient, url("../assets/arches.png");
      }
    }
    &.red {
      background-image: $gradient, url("../assets/background3-3.jpg");

      .overlay {
        background-color: $red;
        background-image: $gradient, url("../assets/arches.png");
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
