<template>
  <div id="app">
    <NavBar />
    <div class="router-view">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  components: {
    NavBar,
    FooterBar
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

.router-view {
  margin-top: 10vh;
  height: 82vh;
  overflow: scroll;
}
@media screen and (max-width: 850px) {
  .router-view {
    margin-top: 70px;
    height: 650px;
  }
}
</style>
