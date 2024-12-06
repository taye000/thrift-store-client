<template>
    <div class="cart-view">
      <h1 class="cart-title">Your Cart</h1>
      <div class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="item-details">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-size">Size: {{ item.size }}</p>
            <p class="item-price">${{ item.price }}</p>
          </div>
          <div class="item-quantity">
            <button
              @click="decreaseQuantity(item)"
              :disabled="item.quantity <= 1"
            >
              -
            </button>
            <input type="number" v-model="item.quantity" min="1" readonly />
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <div class="item-total">
            <p>Total: ${{ item.quantity * item.price }}</p>
          </div>
          <div class="item-actions">
            <button @click="removeItem(index)" class="action-button remove">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="cart-summary">
        <p class="cart-total">Cart Total: ${{ cartTotal }}</p>
        <button class="checkout-button" @click="checkout">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CartView",
    data() {
      return {
        cartItems: [
          {
            id: 1,
            name: "Nike Kyrie",
            price: 120,
            size: "Medium",
            image: require("@/assets/nike-kyrie-4.jpg"),
            quantity: 2,
          },
          {
            id: 2,
            name: "Adidas Ultraboost",
            price: 150,
            size: "Large",
            image: require("@/assets/Adidas.png"),
            quantity: 1,
          },
          {
            id: 3,
            name: "Puma Suede",
            price: 90,
            size: "Medium",
            image: require("@/assets/Puma.jpg"),
            quantity: 3,
          },
        ],
      };
    },
    computed: {
      cartTotal() {
        return this.cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2);
      },
    },
    methods: {
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      },
      editItem(item) {
        alert(`Edit item: ${item.name}`);
      },
      removeItem(index) {
        this.cartItems.splice(index, 1);
      },
      checkout() {
        alert("Proceeding to checkout");
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-view {
    padding: 2rem;
    max-width: 1200px;
    margin: 3rem auto;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .cart-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #264653;
    text-align: center;
  }
  
  .cart-items {
    margin-bottom: 2rem;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .item-image img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .item-details {
    flex-grow: 1;
    padding: 0 1rem;
  }
  
  .item-name {
    font-weight: bold;
    color: #264653;
  }
  
  .item-size,
  .item-price {
    color: #555;
  }
  
  .item-quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 120px;
  }
  
  .item-quantity button {
    background-color: #457b9d;
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    width: 35px;
    height: 35px;
  }
  
  .item-quantity button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .item-quantity input {
    width: 50px;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  
  .item-total {
    font-size: 1.1rem;
    font-weight: bold;
    color: #e63946;
    margin: 1rem;
  }
  
  .item-actions {
    display: flex;
    gap: 1rem;
  }
  
  .action-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .action-button.remove {
    background-color: #e63946;
    color: white;
  }
  
  .action-button.remove:hover {
    background-color: #d62828;
  }
  
  .cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: #264653;
    color: white;
    border-radius: 8px;
  }
  
  .cart-total {
    font-size: 1.5rem;
  }
  
  .checkout-button {
    background-color: #2a9d8f;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
  }
  
  .checkout-button:hover {
    background-color: #1d6f62;
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .cart-item {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .item-details {
      padding: 0;
      margin-bottom: 1rem;
    }
  
    .item-quantity {
      width: 100%;
      margin-bottom: 1rem;
    }
  
    .cart-summary {
      flex-direction: column;
      align-items: stretch;
      padding: 1rem;
    }
  
    .checkout-button {
      width: 100%;
    }
  
    .item-actions {
      width: 100%;
      justify-content: space-between;
    }
  }
  </style>
  