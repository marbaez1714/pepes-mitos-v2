<template>
  <div class="nav-bar">
    <div class="title" @click="handleClickTitle">
      <span class="main">Pepe's & Mito's</span>
      <span class="sub">Mexican Cafe & Cantina</span>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/tour">Tour</router-link>
      <router-link to="/contact-us">Contact Us!</router-link>
    </div>
    <SideBar @onToggle="toggleSideBar" :open="sideBarOpen" />
    <div @click="toggleSideBar" class="menu-open-wrapper">
      <BarsIcon class="menu-open" />
    </div>
  </div>
</template>

<script>
import BarsIcon from "@/assets/BarsIcon.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    BarsIcon,
    SideBar
  },
  data() {
    return {
      sideBarOpen: false
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarOpen = !this.sideBarOpen;
    },
    handleClickTitle() {
      this.sideBarOpen = false;
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 10vh;
  z-index: 5;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  background-image: url("../assets/lined-paper-2.png");
  box-shadow: 0 0 10px #000000;

  .title {
    display: flex;
    cursor: pointer;
    margin-left: 1rem;
    flex-direction: column;
    .main {
      line-height: 1;
      font-size: 2rem;
      font-family: "Recoleta-Bold";
    }
    .sub {
      line-height: 1;
      font-size: 1rem;
    }
  }
  .links {
    margin-right: 0.5rem;
    a {
      color: white;
      margin: 0 0.5rem;
      font-weight: bold;

      &.router-link-exact-active {
        color: #f8ed45;
      }
    }
  }
  .menu-open-wrapper {
    display: none;
    .menu-open {
      transition: all 250ms ease-in;
    }
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
    .menu-open-wrapper {
      display: block;
      .menu-open {
        margin-right: 1rem;
        &:active {
          transform: scale(0.8);
        }
      }
    }
  }
}
</style>
