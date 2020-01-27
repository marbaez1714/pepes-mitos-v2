import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";

import "vue-googlemaps/dist/vue-googlemaps.css";
import VueGoogleMaps from "vue-googlemaps";

import VueYouTubeEmbed from "vue-youtube-embed";
import VueAnalytics from "vue-analytics";

Vue.use(VueYouTubeEmbed);
Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: "AIzaSyA8bBGIaExp9QIJKSBA-hddWgnR2QTlvOQ",
    // Enable more Google Maps libraries here
    libraries: ["places"],
    // Use new renderer
    useBetaRenderer: false
  }
});

Vue.use(VueAnalytics, {
  id: "UA-130106600-2",
  router
});

Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
