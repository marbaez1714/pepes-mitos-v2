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
.side-bar {
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  opacity: 0;
  width: 60vw;
  height: 70vh;
  display: none;
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  background-size: contain;
  font-family: "Recoleta-Bold";
  background-color: $blue-light;
  justify-content: space-between;
  box-shadow: 0 0 10px #000000;
  background-image: $gradient, url("../assets/arches.png");
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  .link {
    flex: 1 0 0;
    display: flex;
    font-size: 2rem;
    padding-left: 2rem;
    align-items: center;
    cursor: pointer;
    &:hover {
      box-shadow: inset 0 0 10px #000000;
    }
  }
  .close-icon {
    top: 0;
    right: 0;
    height: 1.75rem;
    margin: 1rem 1rem;
    position: absolute;
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
