<template>
  <div class="profile-page">
    <div class="profile-header">
      <img :src="user.image" alt="Profile Picture" class="profile-image" />
      <h1 class="profile-title">Welcome, {{ user.name }}</h1>
    </div>

    <div class="profile-details">
      <div class="detail"><strong>Email:</strong> {{ user.email }}</div>
      <div class="detail">
        <strong>Member Since:</strong> {{ formattedJoinDate }}
      </div>
    </div>

    <div class="profile-actions">
      <button @click="handleSignOut" class="auth-button">Sign Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      user: {
        name: "John Doe",
        email: "johndoe@example.com",
        joinDate: "2023-01-15",
        image: require("@/assets/Puma.jpg"),
      },
    };
  },
  computed: {
    formattedJoinDate() {
      const date = new Date(this.user.joinDate);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  methods: {
    handleSignOut() {
      alert("Signed Out");
      // Implement actual sign-out logic here
    },
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.profile-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #264653;
  margin: 0;
}

.profile-details {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.detail {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.detail strong {
  color: #264653;
}

.profile-actions {
  display: flex;
  justify-content: center;
}

.auth-button {
  background-color: #2a9d8f;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.auth-button:hover {
  background-color: #1d6f62;
  transform: scale(1.05);
}

.auth-button:active {
  background-color: #145950;
  transform: scale(1);
}

@media (max-width: 768px) {
  .profile-page {
    padding: 1.5rem;
  }

  .profile-title {
    font-size: 1.5rem;
  }

  .profile-details {
    padding: 1rem;
  }
}
</style>
