<template>
  <section class="hero">
    <div class="hero-text">
      <h1>The Thrift Store</h1>
      <h2>Your plug for all things thrift!</h2>
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
        src="@/assets/nike-kyrie-4.jpg"
        alt="Thrift store hero"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem; /* Increased padding for a more spacious feel */
  background: linear-gradient(135deg, #dcd9d7, #f4f4f4); /* Subtle gradient */
  gap: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.hero-text {
  flex: 1;
  max-width: 600px; /* Limit width for better alignment */
  text-align: left;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #264653;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero h2 {
  font-size: 1.8rem;
  color: #2a9d8f;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #333;
}

.hero-features li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 2rem;
}

.hero-features li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #2a9d8f;
  font-size: 1.5rem;
}

.cta-button {
  background-color: #457b9d;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #2a9d8f;
}

.hero-image-wrapper {
  flex: 1;
  max-width: 500px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column; /* Stack text and image on mobile */
    padding: 2rem;
  }

  .hero-text {
    text-align: center; /* Center-align text for smaller screens */
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 1.5rem;
  }

  .cta-button {
    width: 80%; /* Larger button on mobile for better visibility */
    margin: 0 auto;
  }
}
</style>
