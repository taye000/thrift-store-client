<template>
    <div class="shop-view">
      <h1 class="shop-title">Shop Our Collection</h1>
      <div class="items-container">
        <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
      </div>
    </div>
  </template>
  
  <script>
  import ItemCard from '@/components/ItemCard.vue';
  
  export default {
    name: 'ShopView',
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
  .shop-view {
    text-align: center;
    padding: 2rem;
  }
  
  .shop-title {
    font-size: 2rem;
    font-weight: 700;
    color: #264653;
    margin-bottom: 2rem;
  }
  
  .items-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  
  @media (max-width: 768px) {
    .shop-title {
      font-size: 1.5rem;
    }
  }
  </style>
  