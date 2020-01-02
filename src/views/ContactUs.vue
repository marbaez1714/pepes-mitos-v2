<template>
  <div class="contact">
    <div class="section-content location">
      <div class="sub-section">
        <!-- HOURS -->
        <div class="information">
          <span class="title">Hours</span>
          <span class="detail"
            >Mon. & Tue. <span class="pipe">||</span> 11am - 3pm</span
          >
          <span class="detail"
            >Wed. & Thu. <span class="pipe">||</span> 11am - 10pm</span
          >
          <span class="detail"
            >Fri. & Sat. <span class="pipe">||</span> 11am - 11pm</span
          >
          <span class="detail"
            >Sun. <span class="pipe">||</span> 11am - 5pm</span
          >
        </div>
        <!-- ADDRESS -->
        <div class="information">
          <span class="title">Address</span>
          <span class="detail link">
            <a
              href="https://goo.gl/maps/pEJBpcGrtMF4rEic8"
              target="_blank"
              rel="noopener noreferrer"
            >
              2911 Elm Street, Dallas, Texas
            </a>
          </span>
        </div>
        <!-- PHONE NUMBER -->
        <div class="information">
          <span class="title">Phone Number</span>
          <span class="detail link">
            <a href="tel:214-741-1901">214-741-1901</a>
          </span>
        </div>
        <!-- SOCIAL MEDIA -->
        <div class="information">
          <span class="title">Social Media</span>
          <span class="detail link">
            <a href="https://www.facebook.com/pepesandmitos/"
              ><FacebookIcon
            /></a>
          </span>
        </div>
      </div>
      <!-- MAP -->
      <div class="sub-section map">
        <googlemaps-map :center="center" :zoom="zoom">
          <googlemaps-marker :position="center" />
        </googlemaps-map>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "@/assets/FacebookIcon.vue";
export default {
  components: {
    FacebookIcon
  },
  data() {
    return {
      center: {
        lat: 32.785092,
        lng: -96.781926
      },
      zoom: 15
    };
  },
  methods: {}
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

.contact {
  height: 100%;
}
.section-content {
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  height: calc(100% - 2rem);
  padding: 1rem;
  align-items: center;
  background-color: $light;
  background-image: $gradient, url("../assets/brick-wall.png");
  a {
    margin-left: 0.5rem;
  }

  .sub-section {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: space-evenly;
    .information {
      display: flex;
      flex-direction: column;
    }
    .pipe {
      color: $orange;
    }
    .title {
      font-family: "Recoleta-Bold";
    }
    .link {
      margin-bottom: 1rem;
    }
    .detail {
      padding-left: 2rem;
    }
    &.map {
      border: 0.25rem solid $blue-dark;
      .vue-google-map {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    font-size: 1.25rem;
    height: auto;
    .sub-section {
      text-align: center;

      width: 100%;
      font-size: 1.25rem;
      .detail {
        padding-left: 0;
      }
    }
    span {
      padding: 0.5rem 0 0;
    }
    .pipe {
      display: none;
    }
    .map {
      height: 60vh;
    }
  }
}
</style>
