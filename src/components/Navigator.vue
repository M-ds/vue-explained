<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="link">
        <!-- We define the location of the url to point to -->
        <router-link class="link-text" to="/">Home</router-link>
      </li>
      <li class="link">
        <router-link class="link-text" to="/profile">Profile</router-link>
      </li>
      <li class="link">
        <router-link class="link-text" to="/add">Add Interactable</router-link>
      </li>
      <li class="link">
        <router-link class="link-text" to="/marketplace">Marketplace</router-link>
      </li>
      <li class="link">
        <router-link class="link-text" to="/logout">Log Out</router-link>
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
}

.nav-links {
  padding: 10px 0;
}

.link {
  background-color: lightcyan;
  border-radius: 10%;
  height: 100px;
  line-height: 100px;
  border: solid #4f2f4f 2px;
  list-style: none;
  margin: 10px;
  text-align: center;
}

.link:hover {
  cursor: pointer;
  background: mediumpurple;
}

.link-text {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  text-decoration: none;
  color: black;
}
</style>
