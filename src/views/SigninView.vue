<template>
  <div class="auth-page">
    <h1 class="auth-title">Sign In</h1>
    <form @submit.prevent="handleSignIn">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Enter your password"
        required
      />

      <button type="submit" class="auth-button">Sign In</button>
    </form>
    <router-link to="/register" class="auth-link"
      >Don't have an account? Register</router-link
    >
  </div>
</template>

<script>
export default {
  name: "SignInView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignIn() {
      alert(`Sign In as ${this.email}`);
      // Logic for sign in
    },
  },
};
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
}

.auth-title {
  font-size: 2rem;
  text-align: center;
  color: #264653;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #457b9d;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.auth-button {
  background-color: #2a9d8f;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.auth-button:hover {
  background-color: #1d6f62;
}

.auth-link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #457b9d;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}
</style>
