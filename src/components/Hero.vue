<template>
  <section class="hero">
    <div class="hero-text">
      <h1>The Thrift Store</h1>
      <h2>Your plug for all things, Thrift!</h2>
      <ul class="hero-features">
        <li>Unique Finds</li>
        <li>100% Authentic Brands</li>
        <li>2 Weeks Return</li>
      </ul>
      <button class="cta-button">Shop Now</button>
    </div>
    <div class="hero-image-wrapper">
      <img
        class="hero-image"
        src="@/assets/the-north-face-jacket.jpg"
        alt="Thrift store hero"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: row; /* Ensure horizontal alignment */
  align-items: center;
  justify-content: space-between;
  gap: 2rem; /* Space between text and image */
  padding: 2rem;
  background-color: #dcd9d7;
}

.hero-text {
  flex: 1; /* Allow the text section to grow */
  text-align: left;
}

.hero h1 {
  font-size: 3rem;
  color: #457b9d;
  margin-bottom: 0.5rem;
}

.hero h2 {
  font-size: 1.5rem;
  color: #2a9d8f;
  margin-bottom: 1rem;
}

.hero-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #101230;
}

.hero-features li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.hero-features li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #2a9d8f;
  font-size: 1.2rem;
}

.cta-button {
  background-color: #457b9d;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2a9d8f;
}

.hero-image-wrapper {
  flex: 1; /* Allow the image section to grow */
  max-width: 600px; /* Limit the width of the image */
  height: 400px; /* Fixed height for the image container */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fits while maintaining aspect ratio */
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column; /* Stack text and image vertically on smaller screens */
  }

  .hero-text {
    text-align: center;
  }
}
</style>
