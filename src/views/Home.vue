<template>
  <div class="home">
    <h1>Homepage</h1>
    <div class="container">
      <div class="row-element">
        <div class="row-element-card">
          <h3>Title</h3>
          <ul>
            <li>
              bla
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  background-color: lightgray;
  max-width: 1400px;
  margin: 0 auto;
}

.container {
  border-radius: 8px;
  display: flex;
  height: 320px;
  justify-content: space-evenly;
  margin: 6px;
}

.row-element {
  background-color: lightcyan;
  border-radius: 25%;
  border: solid #4f2f4f 2px;
  display: inline-block;
  height: 300px;
  outline: none;
  padding: 4px;
  position: relative;
  width: 300px;
}

.row-element-card {
  text-align: center;
}
</style>
