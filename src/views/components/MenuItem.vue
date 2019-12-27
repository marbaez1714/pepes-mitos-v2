<template>
  <div class="section-wrapper" :id="target">
    <div
      class="section"
      :class="[{ selected: selected }, color]"
      @click="scrollTo()"
    >
      <p class="section-title">{{ title }}</p>
    </div>
    <div class="menu-section" :class="{ open: selected }">
      <FoodItem v-for="item in data" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import FoodItem from "@/views/components/FoodItem";
export default {
  name: "menu-view",
  components: {
    FoodItem
  },
  props: {
    color: {
      type: String
    },
    title: {
      type: String
    },
    selected: {
      type: Boolean
    },
    target: {
      type: String
    },
    data: {
      type: Array
    }
  },
  methods: {
    scrollTo() {
      this.$emit("selectItem");
      VueScrollTo.scrollTo(`#${this.target}`, 500, {
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

.section-wrapper {
  display: flex;
  flex-direction: column;
}

.section {
  background-color: red;
  display: flex;
  transition: all 250ms ease-in;
  background-image: $gradient, url("../../assets/concrete-wall.png");
  align-items: center;
  font-family: "Recoleta-Bold";
  justify-content: flex-start;
  background-size: contain;
  height: 12.5vh;

  .section-title {
    font-size: 2rem;
    transition: all 250ms ease-in;
    padding: 0 0 0 2rem;
    margin: 2rem 0;
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

  &.yellow {
    background-color: $yellow;
  }
  &.blue {
    background-color: $blue;
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
.menu-section {
  display: flex;
  flex-direction: column;
  max-height: 0;
  transition: all 250ms ease-in;
  background-color: $light;
  background-image: url("../../assets/brick-wall.png");
  transform-origin: top center;
  opacity: 0;
  overflow: scroll;
  padding: 0 1rem;
  box-shadow: inset 0 0 10px #000000;

  &.open {
    opacity: 1;
    max-height: 70vh;
    padding: 1rem 1rem 2rem;
  }
}
</style>
