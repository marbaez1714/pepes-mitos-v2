<template>
  <div class="contact">
    <div class="section-content location">
      <div class="sub-section">
        <!-- HOURS -->
        <div class="information yellow">
          <span class="title">Hours</span>
          <span class="detail">Open 7 days a week!</span>
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
        <div class="information blue-light">
          <span class="title">Address</span>
          <span class="detail">Located in the heard of Deep Ellum.</span>

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
        <div class="information orange">
          <span class="title">Phone Number</span>
          <span class="detail link">
            <a href="tel:214-741-1901">214-741-1901</a>
          </span>
        </div>
        <!-- SOCIAL MEDIA -->
        <div class="information green">
          <span class="title">Social Media</span>
          <span class="detail link">
            <a href="https://www.facebook.com/pepesandmitos/"
              ><FacebookIcon />
            </a>
            <a href="https://www.instagram.com/pepeandmitosmexcafe/"
              ><InstagramIcon />
            </a>
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
import InstagramIcon from "@/assets/InstagramIcon.vue";
export default {
  components: {
    FacebookIcon,
    InstagramIcon
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
.contact {
  height: 100%;
}
.section-content {
  height: 100%;
  display: flex;
  font-size: 2rem;
  align-items: center;
  flex-direction: row;
  background-color: $light;
  background-image: $gradient, url("../assets/brick-wall.png");
  a {
    margin-left: 0.5rem;
  }

  .sub-section {
    width: 50%;
    height: 100%;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
    .information {
      flex: 1 0 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: $gradient, url("../assets/concrete-wall.png");

      &.yellow {
        background-color: $yellow;
      }
      &.blue-light {
        background-color: $blue-light;
      }
      &.orange {
        background-color: $orange;
      }
      &.green {
        background-color: $green;
      }
    }
    .pipe {
      color: $orange;
    }
    .title {
      font-family: "Recoleta-Bold";
    }
    .detail {
      padding-left: 2rem;
    }
    &.map {
      padding: 1rem;
      background: $red;
      height: calc(100% - 2rem);
      background-image: $gradient, url("../assets/concrete-wall.png");
      .vue-google-map {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    font-size: 1.5rem;
    height: auto;
    .sub-section {
      text-align: center;

      width: 100%;
      font-size: 1.25rem;
      .detail {
        padding-left: 0;
      }
      &.map {
        height: calc(90vh - 4rem);
      }
    }
    span {
      padding: 0.5rem 0 0;
    }
    .pipe {
      display: none;
    }
    .map {
      width: calc(100% - 2rem);
      .vue-google-map {
        height: 60vh;
      }
    }
  }
}
</style>
