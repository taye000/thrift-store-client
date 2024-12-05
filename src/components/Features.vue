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
    padding: 3rem;
    background-color: #dcd9d7;
    margin-top: 3rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .features h2 {
    font-size: 2.25rem;
    color: #2a9d8f;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
  }
  
  .feature {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .feature h3 {
    font-size: 1.5rem;
    color: #457b9d;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  .feature p {
    font-size: 1.1rem;
    color: #333333;
    line-height: 1.6;
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    .features h2 {
      font-size: 2rem;
    }
  
    .feature h3 {
      font-size: 1.25rem;
    }
  
    .feature p {
      font-size: 1rem;
    }
  }
  </style>
  