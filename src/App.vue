<template>
  <div id="app">
    <navigator id="nav-bar"/>
    <!--
      Render the masked component which is clicked by the router...
      Renders the content of the current selected page.

      :key="$route.path" -> This triggers a new reload of the page, when the path (url) changes.
       -->
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import Navigator from "@/components/Navigator";

export default {
  components: {
    Navigator
  }
};
</script>

<style>
html {
  background-color: lightgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-bar {
  height: 100%;
  width: 150px;
  position: fixed;
}
</style>
