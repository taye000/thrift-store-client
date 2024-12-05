<template>
    <nav class="navbar">
      <div class="brand">ThriftStoreKe</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #164f87;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }
  
  .nav-links {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: #ffffff;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  