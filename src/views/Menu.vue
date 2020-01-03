<template>
  <div class="menu">
    <MenuItem
      color="yellow"
      :selected="selectedItem === 'appetizers'"
      title="Appetizers"
      target="appetizers"
      :data="appetizersData"
      @selectItem="selectSection('appetizers')"
    />
    <MenuItem
      color="blue"
      :selected="selectedItem === 'soups'"
      title="Soups"
      target="soups"
      :data="soupsData"
      @selectItem="selectSection('soups')"
    />
    <MenuItem
      color="orange"
      :selected="selectedItem === 'house'"
      title="House"
      target="house"
      :data="houseData"
      @selectItem="selectSection('house')"
    />
    <MenuItem
      color="green"
      :selected="selectedItem === 'mex-tex'"
      title="Mex-Tex"
      target="mex-tex"
      :data="mexTexData"
      @selectItem="selectSection('mex-tex')"
    />
    <MenuItem
      color="red"
      :selected="selectedItem === 'brunch'"
      title="Brunch"
      target="brunch"
      :data="brunchData"
      @selectItem="selectSection('brunch')"
    />
    <MenuItem
      color="green-light"
      :selected="selectedItem === 'tacos'"
      title="Tacos"
      target="tacos"
      :data="tacosData"
      @selectItem="selectSection('tacos')"
    />
    <MenuItem
      color="yellow"
      :selected="selectedItem === 'lunch'"
      title="Lunch"
      target="lunch"
      :data="lunchData"
      @selectItem="selectSection('lunch')"
    />
    <MenuItem
      color="pink"
      :selected="selectedItem === 'desserts'"
      title="Kids & Desserts"
      target="desserts"
      :data="kidsData"
      @selectItem="selectSection('desserts')"
    />
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import MenuData from "@/assets/menu.json";
import VueScrollTo from "vue-scrollto";

export default {
  name: "menu-view",
  components: {
    MenuItem
  },
  data() {
    return {
      selectedItem: "",
      appetizersData: MenuData.appetizers,
      soupsData: MenuData.soups,
      houseData: MenuData.house,
      mexTexData: MenuData.mexTex,
      brunchData: MenuData.brunch,
      tacosData: MenuData.tacos,
      lunchData: MenuData.lunch,
      kidsData: MenuData.kids
    };
  },
  methods: {
    selectSection(section) {
      if (section === this.selectedItem) {
        this.selectedItem = "";
      } else {
        this.selectedItem = section;
      }
      VueScrollTo.scrollTo(`#${section}`, 500, {
        container: ".menu",
        easing: "ease-in",
        offset: 0,
        force: true,
        cancelable: true,
        x: false,
        y: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  background-color: $light;
  .menu-section {
    height: 0;
    min-height: 0;
    display: block;
    background-color: $light;
    transition: all 250ms ease-in;
    background-image: url("../assets/brick-wall.png");

    &.selected {
      min-height: 80vh;
    }
  }
  .section {
    background-image: $gradient, url("../assets/concrete-wall.png");
    transition: all 250ms ease-in;
    font-family: "Recoleta-Bold";
    justify-content: flex-start;
    background-size: contain;
    background-color: red;
    align-items: center;
    display: flex;
    flex: 1 1 0px;
    height: 100%;

    .section-title {
      font-size: 2rem;
      padding-left: 2rem;
      transition: all 250ms ease-in;
    }

    &.selected {
      box-shadow: inset 0 0 10px #000000;
      .section-title {
        text-decoration: underline;
        padding-left: 3rem;
      }
    }

    &:hover {
      box-shadow: inset 0 0 10px #000000;
    }
    &.appetizers {
      background-color: $yellow;
    }
    &.soups {
      background-color: $blue;
    }
    &.house {
      background-color: $orange;
    }
    &.mex-tex {
      background-color: $green;
    }
    &.brunch {
      background-color: $red;
    }
    &.tacos {
      background-color: $green-light;
    }
    &.lunch {
      background-color: $yellow;
    }
    &.kids {
      background-color: $blue;
    }
    &.desserts {
      background-color: $pink;
    }
  }
}
</style>
