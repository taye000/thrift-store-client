<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="brand">
        <a href="/" class="brand-link">ThriftStoreKe</a>
      </div>
      <ul class="nav-links">
        <li><router-link to="/shop">Shop</router-link></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="nav-icons">
        <a href="/cart" class="icon-link">
          <i class="fas fa-shopping-basket"></i>
        </a>
        <a href="/profile" class="icon-link">
          <i class="fas fa-user-circle"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: center; /* Center navbar container */
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  font-size: 1.2rem;
  position: fixed; /* Fix navbar to top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Adds subtle shadow for better visibility */
  margin-top: 0; /* Remove space at the top */
}

/* Container to limit navbar width to 90% */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%; /* Restrict width */
  margin: 0 auto; /* Center the container */
}

.brand {
  font-size: 1.8rem;
  font-weight: bold;
}

.brand-link {
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #f39c12;
}

.nav-icons {
  display: flex;
  gap: 1.5rem;
}

.icon-link {
  color: white;
  font-size: 1.6rem;
  transition: color 0.3s ease;
}

.icon-link:hover {
  color: #f39c12;
}

/* Add FontAwesome icon styles */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    font-size: 1rem;
  }

  .navbar-container {
    width: 90%;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-icons {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 1rem;
  }
}
</style>
