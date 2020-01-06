<template>
  <div class="contact">
    <div class="sub-section">
      <!-- HOURS -->
      <div class="information hours">
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
        <span class="detail">Sun. <span class="pipe">||</span> 11am - 5pm</span>
      </div>
      <!-- ADDRESS -->
      <div class="information address">
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
      <div class="information phone">
        <span class="title">Phone Number</span>
        <span class="detail link">
          <a href="tel:214-741-1901">214-741-1901</a>
        </span>
      </div>
      <!-- SOCIAL MEDIA -->
      <div class="information social">
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
      background-size: contain;
      background-image: $gradient, url("../assets/concrete-wall.png");

      &.hours {
        background-color: $yellow;
      }
      &.address {
        background-color: $blue-light;
      }
      &.phone {
        background-color: $orange;
      }
      &.social {
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
    height: 650px;

    flex-direction: column;
    .sub-section {
      text-align: center;
      width: 100%;
      font-size: 20px;
      .information {
        flex: unset;

        .detail {
          padding-left: 0;
        }
        &.hours {
          height: 250px;
        }
        &.address {
          height: 100px;
        }
        &.phone {
          height: 100px;
        }
        &.social {
          height: 150px;
        }
      }
      &.map {
        padding: 10px;
        height: 420px;
      }
    }
    span {
      padding: 10px 0 0;
      &.title {
        padding: 0;
      }
    }
    .map {
      width: calc(100% - 20px);
      .vue-google-map {
        height: 400px;
      }
    }
  }
}
</style>
