<template>
  <div class="store-info">
    <header class="store-header">
      <h1>{{ title }}</h1>
      <p>{{ tagline }}</p>
    </header>

    <section>
      <h3>Helpful Links</h3>
      <ul>
        <li><a href="/about" target="_self">About Us</a></li>
        <li><a href="/sell" target="_self">Sell Your Items</a></li>
        <li><a href="/contact" target="_self">Contact Support</a></li>
        <li><a href="/faq" target="_self">FAQs</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ThriftStoreInfo',
  props: {
    title: {
      type: String,
      default: 'Welcome to ThriftStore'
    },
    tagline: {
      type: String,
      default: 'Buy and sell second-hand items sustainably.'
    }
  }
}
</script>

<style scoped>
.store-info {
  padding: 1rem;
  font-family: 'Arial', sans-serif;
  color: #1d3557; /* Dark Blue */
  background-color: #f1faee; /* Light Beige */
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.store-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.store-header h1 {
  font-size: 2rem;
  color: #457b9d; /* Medium Blue */
}

.store-header p {
  font-size: 1rem;
  color: #2a9d8f; /* Green */
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1d3557;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #e63946; /* Deep Red */
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #2a9d8f; /* Green */
}
</style>
