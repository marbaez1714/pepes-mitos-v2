<template>
  <div id="app">
    <div id="nav">
      <div class="title">
        <span class="main">Pepe's & Mito's </span>
        <span class="sub">Mexican Cafe & Cantina</span>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/tour">Tour</router-link>
        <router-link to="/contact-us">Contact Us!</router-link>
      </div>
      <BarsIcon class="menu-open" />
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>
<script>
import BarsIcon from "@/assets/BarsIcon.vue";
export default {
  components: {
    BarsIcon
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "Recoleta";
  src: url("./fonts/RecoletaRegular.otf");
}
@font-face {
  font-family: "Recoleta-Bold";
  src: url("./fonts/RecoletaBold.otf");
}

body {
  margin: 0;
  background-color: #072269;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding: 0;
  overflow: scroll;
}

#nav {
  height: 10vh;
  z-index: 5;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  background-image: url("./assets/lined-paper-2.png");
  justify-content: space-between;

  .title {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    .main {
      font-family: "Recoleta-Bold";
      line-height: 1;
      font-size: 2rem;
    }
    .sub {
      line-height: 1;
      font-size: 1rem;
    }
  }
  .links {
    margin-right: 0.5rem;
    a {
      margin: 0 0.5rem;
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: #f8ed45;
      }
    }
  }
  .menu-open {
    display: none;
    transition: all 250ms ease-in;
  }
  @media screen and (max-width: 800px) {
    justify-content: space-between;
    .title {
      .main {
        font-size: 1.25rem;
      }
      .sub {
        font-size: 0.5rem;
      }
    }
    .links {
      display: none;
    }
    .menu-open {
      display: block;
      margin-right: 1rem;
      &:active {
        transform: scale(0.8);
      }
    }
  }
}
.router-view {
  height: 90vh;
  overflow: scroll;
}
</style>
