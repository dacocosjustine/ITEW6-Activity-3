<template>
    <div class="ProductListing">
        <h1>Browse Products</h1>
        <div class="product-container">
            <div v-for="item in items" :key="item.id" class="product-item">
                <img :src="item.imageUrl"><br>
                <div class="product-details">
                    <b>Name:</b> {{ item.name }} <br>
                    <b>Price:</b> P {{ item.price }}.00 <br>
                    <button class="product-button" @click="addToCart(item)">Add to Cart</button>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'ProductListing',
        data() {
            return {
                items: [
                    { id: 1, name: 'Hamburger', price: 49.00, quantity: 0, imageUrl: require("@/assets/hamburger.jpg")},
                    { id: 2, name: 'Pizza', price: 129.00, quantity: 0, imageUrl: require("@/assets/pizza.jpg") },
                    { id: 3, name: 'Ice Cream', price: 56.00, quantity: 0, imageUrl: require("@/assets/ice-cream.jpg")  },
                    { id: 4, name: 'Fries', price: 40.00, quantity: 0, imageUrl: require("@/assets/fries.webp")  },
                    { id: 5, name: 'Potato Chips', price: 78.00, quantity: 0, imageUrl: require("@/assets/potato-chips.jpg")  },
                ]
            }
        },
        methods: {
            addToCart(item) {
                this.$emit('add-to-cart', item);
            },
            updateQuantity(index, quantity) {
                if (quantity >= 0) {
                    this.items[index].quantity = quantity;
                }
            },
            removeItem(item) {
                this.$emit('remove-item', item);
            }
        }
    }
</script>


<style>
    img {
        width: 150px;
        height: 150px;
    }
    .ProductListing {
        background-color: white;
        width: 700px;
        margin: auto;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
    }

    .product-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .product-item {
        width: 170px; /* Adjust the width as needed */
        padding: 20px;
        border: 1px solid #ccc;
        margin: 10px;
    }

    .product-details {
        text-align: left;
        padding: 10px;
    }

    .product-button {
        border-radius: 10px;
    }
</style>