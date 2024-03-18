<template>
    <ProductListing @add-to-cart="addToCart"></ProductListing>
    <ShoppingCart :cartItems="cartItems" @delete-item="deleteItem" @update-quantity="updateQuantity"></ShoppingCart>
  </template>
  
  <script>
  import ProductListing from '../components/ProductListing.vue'
  import ShoppingCart from '../components/ShoppingCart.vue'
  
  export default {
    name: 'BrowseView',
    components: {
      ProductListing,
      ShoppingCart
    },
    data () {
      return {
        cartItems: [],
      }
    },
    methods: {
      addToCart(item) {
        const addedItem = this.cartItems.find(cartItem => cartItem.id === item.id);
  
        if (addedItem) {
          addedItem.quantity += 1;
        } else {
          this.cartItems.push({ ...item, quantity: 1 });
        }
      },
      deleteItem(index) {
        this.cartItems.splice(index, 1);
      },
      updateQuantity({ index, quantity }) {
        if (quantity >= 1) {
          this.cartItems[index] = Object.assign({}, this.cartItems[index], { quantity });
        } else {
          this.deleteItem(index);
        }
      }
    },
  }
  </script>
  
  <style>
  body {
    background-color: #2f6859;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  button {
    background-color: #2f6859;
    color: white;
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 20px;
  }
  </style>