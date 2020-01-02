<template>
  <div class="side-bar" :class="`${open ? 'open' : 'closed'}`">
    <div class="link" @click="handleClick('/')">Home</div>
    <div class="link" @click="handleClick('/about')">About</div>
    <div class="link" @click="handleClick('/menu')">Menu</div>
    <div class="link" @click="handleClick('/tour')">Tour</div>
    <div class="link" @click="handleClick('/contact-us')">Contact</div>
    <div @click="$emit('onToggle')">
      <CloseIcon class="close-icon" />
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/CloseIcon.vue";
export default {
  components: {
    CloseIcon
  },
  props: {
    open: {
      type: Boolean
    }
  },
  methods: {
    handleClick(path) {
      this.$emit("onToggle");
      this.$router.push(path);
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
.side-bar {
  height: 100vh;
  width: 60vw;
  background-color: $blue-light;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 5;
  background-image: $gradient, url("../assets/arches.png");
  display: none;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Recoleta-Bold";
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  .link {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    padding-left: 2rem;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0 0 10px #000000;
    }
  }
  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem;
    height: 1.75rem;
    &:active {
      transform: scale(0.8);
    }
  }
  &.open {
    opacity: 1;
  }
  &.closed {
    opacity: 0;
    pointer-events: none;
  }
}
@media screen and (max-width: 800px) {
  .side-bar {
    display: flex;
  }
}
</style>
