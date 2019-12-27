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
import MenuItem from "@/views/components/MenuItem";
import MenuData from "@/assets/menu.json";
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
    },
    test() {
      console.log("test");
    }
  }
};
</script>

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
$light: #f6f3ea;
$gradient: linear-gradient(
  100deg,
  rgba(255, 255, 255, 0%) 0%,
  rgba(0, 0, 0, 0.15) 100%
);

.menu {
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow: scroll;
  background-color: $light;
  .menu-section {
    display: block;
    height: 0;
    min-height: 0;
    transition: all 250ms ease-in;
    background-color: $light;
    background-image: url("../assets/brick-wall.png");

    &.selected {
      min-height: 80vh;
    }
  }
  .section {
    background-color: red;
    display: flex;
    flex: 1 1 0px;
    transition: all 250ms ease-in;
    height: 100%;
    background-image: $gradient, url("../assets/concrete-wall.png");
    align-items: center;
    font-family: "Recoleta-Bold";
    justify-content: flex-start;
    background-size: contain;

    .section-title {
      font-size: 2rem;
      transition: all 250ms ease-in;
      padding-left: 2rem;
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
