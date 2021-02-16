<template>
  <div class="add-person">
    <h2>Add Person</h2>
    <form @submit.prevent="handleSubmit">
      <label>Person Name</label>
      <label>
        <input
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="employee.name"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
      </label>
      <br />
      <label>Person email</label>
      <label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidEmail }"
          v-model="employee.email"
          @focus="clearStatus"
        />
      </label>
      <p v-if="error && submitting" class="error-message">
        ❗ Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Employee successfully added
      </p>
      <br />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  // Example with forms. https://codepen.io/sethdavis512/pen/VPwygN
  name: "AddPerson",
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      employee: {
        name: "",
        lastName: "",
        email: ""
      }
    };
  },
  computed: {
    invalidName() {
      return this.employee.name === "";
    },
    invalidEmail() {
      return this.employee.email === "";
    }
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;
      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }
      this.$emit("add:employee", this.employee);
      this.$refs.first.focus();
      this.employee = {
        name: "",
        email: ""
      };
      this.clearStatus();
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
