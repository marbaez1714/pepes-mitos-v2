<template>
  <div class="footer-bar">
    <div class="footer-section">
      <span class="title">Location</span>
      <a
        href="https://goo.gl/maps/pEJBpcGrtMF4rEic8"
        target="_blank"
        rel="noopener noreferrer"
      >
        2911 Elm Street, Dallas, Texas
      </a>
    </div>
    <div class="footer-section">
      <span class="title">Contact</span>
      <a href="tel:214-741-1901">214-741-1901</a>
    </div>
    <div class="footer-section social">
      <a href="https://www.facebook.com/pepesandmitos/">
        <FacebookIcon class="icon" />
      </a>
      <a href="https://www.instagram.com/pepeandmitosmexcafe/">
        <InstagramIcon class="icon" />
      </a>
    </div>
    <div class="logo-wrapper">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
import FacebookIcon from "@/assets/FacebookIcon.vue";
import InstagramIcon from "@/assets/InstagramIcon.vue";
export default {
  components: {
    FacebookIcon,
    InstagramIcon
  }
};
</script>

<style lang="scss" scoped>
.footer-bar {
  height: 8vh;
  background-color: #2c3e50;
  background-image: url("../assets/lined-paper-2.png");
  display: flex;
  align-items: center;
  .footer-section {
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-family: "Recoleta-Bold";
    }
    a {
      color: white;
      text-decoration: none;
    }
    &.social {
      flex-direction: row;
    }
  }
  .logo-wrapper {
    height: calc(100% - 2rem);
    padding: 1rem 2rem;
    justify-self: flex-end;
    margin-left: auto;
    img {
      height: 100%;
    }
  }
}
@media screen and (max-width: 800px) {
  .footer-bar {
    height: unset;
    flex-direction: column;
    .footer-section {
      align-items: center;
      padding: 0.5rem;
    }
    .logo-wrapper {
      height: 4rem;
      padding: 0.5rem;

      margin: 0 auto;
    }
  }
}
</style>
<style lang="scss">
.icon {
  path {
    fill: white;
  }
}
</style>
