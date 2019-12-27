import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Menu.vue")
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("../views/ContactUs.vue")
  },
  {
    path: "/tour",
    name: "tour",
    component: () => import("../views/Tour.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
