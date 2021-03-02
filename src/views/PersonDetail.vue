<template>
  <div>
    <h3>{{ this.person.firstName }}</h3>
  </div>
</template>

<script>
export default {
  name: "PersonDetail",
  props: {
    person: {
      firstName: String,
      lastName: String
    }
  }
};
</script>

<style scoped>

</style>