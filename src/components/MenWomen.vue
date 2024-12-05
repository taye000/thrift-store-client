<template>
  <section class="categories">
    <h2>Shop by Category</h2>
    <div class="category-cards">
      <div class="category-card">
        <img :src="require('@/assets/Men.jpg.webp')" alt="Men's Fashion" />
        <div class="category-info">
          <h3>Men's Fashion</h3>
          <button class="cta-button">Shop Now</button>
        </div>
      </div>
      <div class="category-card">
        <img :src="require('@/assets/kids.jpg')" alt="Kid's Fashion" />
        <div class="category-info">
          <h3>Kid's Fashion</h3>
          <button class="cta-button">Shop Now</button>
        </div>
      </div>
      <div class="category-card">
        <img :src="require('@/assets/women.jpg')" alt="Women's Fashion" />
        <div class="category-info">
          <h3>Women's Fashion</h3>
          <button class="cta-button">Shop Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesComponent",
};
</script>

<style scoped>
.categories {
  text-align: center;
  background-color: #dcd9d7;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.categories h2 {
  font-size: 2rem;
  color: #457b9d;
  margin-bottom: 1.5rem;
}

.category-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.category-card {
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for transform and shadow */
}

.category-card:hover {
  transform: scale(1.05); /* Slightly scale the card on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Add a more prominent shadow */
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  text-align: center;
}

.category-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cta-button {
  background-color: #457b9d;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2a9d8f;
}

@media (max-width: 768px) {
  .category-cards {
    flex-direction: column;
    align-items: center;
  }

  .category-card {
    width: 80%;
    height: 250px;
  }
}
</style>
