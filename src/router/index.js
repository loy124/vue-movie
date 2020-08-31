import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import MainVuex from "../views/MainVuex.vue";
import MovieDetail from "../views/MovieDetail.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/mainvuex",
    name: "Main",
    component: MainVuex,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component:MovieDetail
  },
  {
    path:"/search",
    name:"Search",
    component:Search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
