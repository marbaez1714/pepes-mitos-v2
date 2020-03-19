<template>
  <div class="section-wrapper" :id="target">
    <div class="section" :class="[{ selected: selected }, color]" @click="scrollTo()">
      <p class="section-title">{{ title }}</p>
    </div>
    <div class="menu-section" :class="{ open: selected }">
      <FoodItem v-for="item in data" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import FoodItem from "@/components/FoodItem";
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
    }
  }
};
</script>

<style lang="scss" scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
}

.section {
  display: flex;
  height: 12vh;
  align-items: center;
  background-color: red;
  background-size: contain;
  justify-content: flex-start;
  font-family: "Recoleta-Bold";
  transition: all 150ms ease-in;
  background-image: $gradient, url("../assets/concrete-wall.png");

  .section-title {
    font-size: 2rem;
    padding: 0 0 0 2rem;
    transition: all 250ms ease-in;
  }

  &.selected {
    box-shadow: inset 0 0 10px #000000;

    .section-title {
      padding-left: 3rem;
      text-decoration: underline;
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
  opacity: 0;
  max-height: 0;
  display: flex;
  padding: 0 1rem;
  overflow: scroll;
  flex-direction: column;
  background-color: $light;
  transform-origin: top center;
  transition: all 150ms ease-in;
  box-shadow: inset 0 0 10px #000000;
  background-image: url("../assets/brick-wall.png");

  &.open {
    opacity: 1;
    max-height: max-content;
    padding: 1rem 1rem 2rem;
  }
}
</style>
