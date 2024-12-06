import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: null,
    cart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
