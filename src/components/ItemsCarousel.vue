<template>
    <section class="items-carousel">
      <h2>Shop Our Collection</h2>
      <div class="carousel">
        <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
      </div>
      <button class="cta-button">Shop Now</button>
    </section>
  </template>
  
  <script>
  import ItemCard from './ItemCard.vue';
  
  export default {
    name: 'ItemsCarousel',
    components: {
      ItemCard,
    },
    data() {
      return {
        items: [
          { name: 'Nike Kyrie', price: 120, image: require('@/assets/nike-kyrie-4.jpg') },
          { name: 'Adidas Ultraboost', price: 150, image: require('@/assets/Adidas.png') },
          { name: 'Puma Suede', price: 90, image: require('@/assets/Puma.jpg') },
          { name: 'Levi\'s 501 Jeans', price: 70, image: require('@/assets/levis.jpg') },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .items-carousel {
    padding: 2rem;
    background-color: #dcd9d7;
    margin-top: 2rem;
  }
  
  .items-carousel h2 {
    font-size: 2rem;
    color: #457b9d;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .carousel {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row on large screens */
    gap: 1.5rem;
    padding: 1rem;
  }

  .cta-button {
    background-color: #457b9d;
    color: white;
    padding: 1rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #2a9d8f;
  }
  
  @media (max-width: 1200px) {
    .carousel {
      grid-template-columns: repeat(3, 1fr); /* 3 items per row on medium screens */
    }
  }
  
  @media (max-width: 768px) {
    .carousel {
      grid-template-columns: repeat(2, 1fr); /* 2 items per row on smaller screens */
      gap: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .carousel {
      grid-template-columns: 1fr; /* 1 item per row on very small screens */
      gap: 1rem;
    }
  }
  </style>
  