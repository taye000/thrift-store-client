<template>
  <div class="item-detail">
    <div class="item-main">
      <!-- Main Photo Section -->
      <div class="image-section">
        <img :src="selectedImage" :alt="item.name" class="main-image" />
        <div class="extra-photos">
          <img
            v-for="(photo, index) in item.extraPhotos"
            :key="index"
            :src="photo"
            alt="Extra photo"
            class="thumbnail"
            :class="{ active: photo === selectedImage }"
            @click="selectImage(photo)"
          />
        </div>
      </div>

      <!-- Details Section -->
      <div class="details-section">
        <h1 class="item-name">{{ item.name }}</h1>
        <p class="item-description">{{ item.description }}</p>
        <div class="item-size">Size: {{ item.size || "N/A" }}</div>
        <div class="item-price">Price: ${{ item.price }}</div>
        <div class="quantity-section">
          <label for="quantity">Quantity:</label>
          <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
          <input
            id="quantity"
            type="number"
            v-model="quantity"
            min="1"
            readonly
          />
          <button @click="increaseQuantity">+</button>
        </div>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      </div>
    </div>
    <router-link to="/shop" class="back-button">Back to Shop</router-link>
  </div>
</template>

<script>
export default {
  name: "ItemDetailView",
  props: ["id"],
  data() {
    return {
      item: null,
      selectedImage: "",
      quantity: 1,
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
  created() {
    const id = parseInt(this.id);
    this.item = this.items.find((item) => item.id === id);
    this.selectedImage = this.item?.image;
  },
  methods: {
    selectImage(photo) {
      this.selectedImage = photo;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      alert(`Added ${this.quantity} of ${this.item.name} to cart.`);
    },
  },
};
</script>

<style scoped>
.item-detail {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.item-main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.image-section {
  flex: 1;
  text-align: center;
}

.main-image {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.main-image:hover {
  transform: scale(1.02);
}

.extra-photos {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
}

.thumbnail:hover {
  transform: scale(1.1);
  border-color: #2a9d8f;
}

.thumbnail.active {
  border-color: #264653;
}

.details-section {
  flex: 1;
}

.item-name {
  font-size: 2rem;
  font-weight: bold;
  color: #264653;
  margin-bottom: 1rem;
}

.item-description {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #555;
}

.item-size {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #666;
}

.item-price {
  font-size: 1.5rem;
  color: #e63946;
  font-weight: bold;
  margin-bottom: 1rem;
}

.quantity-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.quantity-section button {
  background-color: #457b9d;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.quantity-section button:hover {
  background-color: #2a9d8f;
}

.quantity-section button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.quantity-section input {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.25rem;
}

.add-to-cart {
  background-color: #2a9d8f;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #1d6f62;
}

.back-button {
  margin-top: 2rem;
  color: white;
  background-color: #457b9d;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #2a9d8f;
}

/* Responsive Design */
@media (max-width: 768px) {
  .item-main {
    flex-direction: column;
  }
}
</style>
