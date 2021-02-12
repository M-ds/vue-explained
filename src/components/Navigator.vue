<template>
  <nav id="nav">
    <p class="logo">Navigation</p>
    <ul class="nav-links">
      <li class="links">
        <!-- We define the location of the url to point to -->
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigator"
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a.custom-active-link {
  color: purple;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>