<template>
  <div id="app">
    <NavbarComponent />
    <HeroComponent />
    <MenWomenComponent />
    <BrandsComponent />
    <ItemsCarousel />
    <FeaturesComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import HeroComponent from './components/Hero.vue';
import FeaturesComponent from './components/Features.vue';
import FooterComponent from './components/Footer.vue';
import BrandsComponent from './components/Brands.vue';
import MenWomenComponent from './components/MenWomen.vue';
import ItemsCarousel from './components/ItemsCarousel.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeroComponent,
    BrandsComponent,
    MenWomenComponent,
    FeaturesComponent,
    ItemsCarousel,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Playfair Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #164f87;
  margin: 0 auto;
  width: 90%;
}
</style>
