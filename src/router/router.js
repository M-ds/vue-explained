import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

// Now we enable the current vue instance to use Router
Vue.use(Router);

export default new Router({
  // This will make the url look normal
  mode: "history",
  // With this you can define your own active class (when clicked on router)
  linkExactActiveClass: "custom-active-link",
  routes: [
    {
      path: "/",
      name: "Home", // Name of the route
      component: Home, // Which component we refer to
      props: true
    }
  ]
});
