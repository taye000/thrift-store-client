<template>
  <section class="items-carousel">
    <h2>Shop Our Collection</h2>
    <div class="carousel">
      <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <div class="button-container">
      <router-link to="/shop" class="cta-button">Shop Now</router-link>
    </div>
  </section>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemsCarousel",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Nike Kyrie",
          price: 120,
          description: "Quality & authentic",
          size: "medium",
          image: require("@/assets/nike-kyrie-4.jpg"),
          extraPhotos: [
            require("@/assets/nike-kyrie-4.jpg"),
            require("@/assets/nike-kyrie-4.jpg"),
          ],
        },
        {
          id: 2,
          name: "Adidas Ultraboost",
          price: 150,
          description: "Quality & authentic",
          size: "medium",
          image: require("@/assets/Adidas.png"),
          extraPhotos: [
            require("@/assets/Adidas.png"),
            require("@/assets/Adidas.png"),
          ],
        },
        {
          id: 3,
          name: "Puma Suede",
          price: 90,
          description: "Quality & authentic",
          size: "medium",
          image: require("@/assets/Puma.jpg"),
          extraPhotos: [
            require("@/assets/Puma.jpg"),
            require("@/assets/Puma.jpg"),
          ],
        },
        {
          id: 4,
          name: "Levi's 501 Jeans",
          price: 70,
          description: "Quality & authentic",
          size: "medium",
          image: require("@/assets/levis.jpg"),
          extraPhotos: [
            require("@/assets/levis.jpg"),
            require("@/assets/levis.jpg"),
          ],
        },
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

.button-container {
  text-align: center; /* Center the button horizontally */
  margin-top: 1.5rem;
}

.cta-button {
  background-color: #457b9d;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.cta-button:hover {
  background-color: #2a9d8f;
}

@media (max-width: 1200px) {
  .carousel {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 items per row on medium screens */
  }
}

@media (max-width: 768px) {
  .carousel {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 items per row on smaller screens */
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
