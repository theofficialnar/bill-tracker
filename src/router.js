import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/history",
      name: "history",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/History.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/Login.vue")
    }
  ]
});
