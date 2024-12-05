<template>
    <nav class="navbar">
      <div class="brand">
        <a href="/" class="brand-link">ThriftStoreKe</a>
      </div>
      <ul class="nav-links">
        <li><a href="/shop">Shop</a></li>
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
    padding: 1rem 2rem;
    font-size: 1.2rem;
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
  
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  @media (max-width: 768px) {
    .navbar {
      padding: 1rem;
      font-size: 1rem;
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
  