<template>
  <div>
    <HeroComponent />
    <MenWomenComponent />
    <BrandsComponent />
    <ItemsCarousel />
    <FeaturesComponent />
  </div>
</template>

<script>
import HeroComponent from "../components/Hero.vue";
import MenWomenComponent from "../components/MenWomen.vue";
import BrandsComponent from "../components/Brands.vue";
import ItemsCarousel from "../components/ItemsCarousel.vue";
import FeaturesComponent from "../components/Features.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    MenWomenComponent,
    BrandsComponent,
    ItemsCarousel,
    FeaturesComponent,
  },
};
</script>
