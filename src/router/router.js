import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

// Now we enable the current vue instance to use Router
Vue.use(Router);

export default new Router({
  // This will make the url look normal otherwise you'll see /#/{link}
  mode: "history",
  // With this you can define your own active class (when clicked on router)
  linkExactActiveClass: "custom-active-link",
  routes: [
    {
      path: "/",
      name: "Home", // Name of the route
      props: true,
      component: Home // Which component we refer to
    },
    {
      path: "/add",
      name: "addPerson",
      props: true,
      component: () =>
        import(/* webpackChuckName: "AddPerson"*/ "../views/AddPerson")
    },
    {
      path: "/overview",
      name: "overview",
      props: true,
      component: () =>
        import(/* webpackChuckName: "Overview"*/ "../views/Overview"),
      children: [
        {
          path: ":personId",
          name: "personDetail",
          props: true,
          component: () =>
            import(
              /* webpackChuckName: "PersonDetail"*/ "../views/PersonDetail"
            )
        }
      ]
    }
  ]
});
