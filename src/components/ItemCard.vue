<template>
  <div class="item-card" @click="goToDetail">
    <img :src="item.image" :alt="item.name" class="item-image" />
    <h3 class="item-name">{{ item.name }}</h3>
    <p class="item-price">${{ item.price }}</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: Object,
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: "ItemDetailView",
        params: { id: this.item.id },
      });
    },
  },
};
</script>

<style scoped>
.item-card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding-bottom: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
  overflow: hidden;
}

.item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.item-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.item-card:hover .item-image {
  transform: scale(1.05);
}

.item-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #264653;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

.item-price {
  font-size: 1.25rem;
  font-weight: 550;
  color: #e63946;
  margin-bottom: 1rem;
}

.add-to-cart {
  background-color: #457b9d;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-to-cart:hover {
  background-color: #2a9d8f;
  transform: scale(1.05);
}

.add-to-cart:focus {
  outline: none;
}

@media (max-width: 768px) {
  .item-card {
    width: 100%;
    padding: 1rem;
  }
  .item-image {
    height: 180px;
  }
  .item-name {
    font-size: 1.1rem;
  }
  .item-price {
    font-size: 1rem;
  }
}
</style>
