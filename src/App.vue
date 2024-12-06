<template>
  <div id="app" class="app-wrapper">
    <!-- Navbar at the top -->
    <NavbarComponent />
    
    <!-- Main content dynamically loaded based on route -->
    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
    
    <!-- Footer at the bottom -->
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

.content-wrapper {
  max-width: 90%; 
  margin: 0 auto; 
}

footer {
  background-color: #1e293b;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
}
</style>
