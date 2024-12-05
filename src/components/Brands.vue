<template>
    <section class="brands">
      <h2>Shop by Popular Brands</h2>
      <div class="carousel">
        <div class="carousel-item" v-for="(brand, index) in brands" :key="index">
          <img :src="brand.image" :alt="brand.name" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BrandsComponent',
    data() {
  return {
    brands: [
      { name: 'Nike', image: require('@/assets/nike.jpg') },
      { name: 'Adidas', image: require('@/assets/Adidas.png') },
      { name: 'Puma', image: require('@/assets/Puma.jpg') },
      { name: 'The North Face', image: require('@/assets/tnf-logo.jpg') },
      { name: 'Levi\'s', image: require('@/assets/levis.jpg') },
      { name: 'Jordan\'s', image: require('@/assets/Jordan-Logo.png') },
    ],
  };
},

  };
  </script>
  
  <style scoped>
  .brands {
    text-align: center;
    background-color: #dcd9d7;
    padding: 2rem;
    margin-top: 2rem;
  }
  
  .brands h2 {
    font-size: 2rem;
    color: #457b9d;
    margin-bottom: 1.5rem;
  }
  
  .carousel {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    padding: 1rem;
  }
  
  .carousel-item {
    flex: 0 0 auto;
    scroll-snap-align: start;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 150px; 
    padding: 1rem;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
    max-height: 80px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
  
  .carousel-item p {
    font-size: 1rem;
    color: #2a9d8f;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .carousel {
      gap: 0.5rem;
    }
  
    .carousel-item {
      width: 120px;
      padding: 0.75rem;
    }
  
    .carousel-item p {
      font-size: 0.9rem;
    }
  }
  </style>
  