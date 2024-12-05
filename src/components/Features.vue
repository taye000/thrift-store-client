<template>
    <section class="features">
      <h2>Why Shop With Us?</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>Authentic & Quality</h3>
          <p>All items are washed and securely stored, ensuring the best for you.</p>
        </div>
        <div class="feature">
          <h3>Vintage & Unique</h3>
          <p>Shop vintage brands and one-of-a-kind items you won't find anywhere else.</p>
        </div>
        <div class="feature">
          <h3>2-Week Returns</h3>
          <p>Change your mind? Enjoy a 2-week hassle-free return policy.</p>
        </div>
        <div class="feature">
          <h3>Order Tracking</h3>
          <p>Track your order from checkout to doorstep with real-time updates.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeaturesComponent',
  };
  </script>
  
  <style scoped>
  .features {
    text-align: center;
    padding: 2rem;
    background-color: #dcd9d7;
    margin-top: 2rem;
  }
  
  .features h2 {
    font-size: 2rem;
    color: #164f87;
    margin-bottom: 1.5rem;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .feature {
    background-color: #b7b3b1;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .feature h3 {
    font-size: 1.5rem;
    color: #457b9d;
  }
  
  .feature p {
    font-size: 1rem;
    color: #333333;
  }
  </style>
  