<template>
  <div class="container">
    <div class="row-element">
      <div v-for="person in persons" class="row-element-card" :key="person.id">
        <router-link
          :to="{
            name: 'personDetail',
            params: { personId: person.id }
          }"
        >
          <img
            :src="require(`@/assets/${person.profilePicture}`)"
            :alt="person.name"
          />
          <h3>{{ person.firstName }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data() {
    return {
      persons: [
        {
          id: 1,
          firstName: "Mr. Vogel",
          lastName: "Vliegend",
          profilePicture: "bird.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
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
