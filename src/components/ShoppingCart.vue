<template>
    <div class="ShoppingCart">
        <h1>Shopping Cart</h1>

        <div class="table-container">
            <table>
                <tr v-for="cartItem, index in cartItems" :key="index">
                    <td class="cartItem">
                        <b>{{ cartItem.name }}</b>
                    </td>
                    <td class="cartPrice">
                        P {{ cartItem.price }}.00
                    </td>
                    <td class="qty">
                        {{ cartItem.quantity }}
                    </td>
                    <td class="buttons">
                        <button class="qtybutton" @click="updateQuantity(index, cartItem.quantity - 1)">-</button>
                    </td>
                    <td>
                        <button class="qtybutton" @click="updateQuantity(index, cartItem.quantity + 1)">+</button>
                    </td>
                    <td>
                        <button class="remove" @click="deleteItem(index)">Remove</button>
                    </td>
                </tr>
            </table>
        </div>

        <h3>Total Price: P {{ totalPrice }}</h3>
    </div>
</template>


<script>
    export default {
        name: 'ShoppingCart',
        props: {
            cartItems: Array
        },
        methods: {
            deleteItem(index) {
                this.$emit('delete-item', index);
            },
            updateQuantity(index, quantity) {
                if (quantity >= 0) {
                    this.$emit("update-quantity", { index, quantity });
                }
            },
        },
        computed: {
            totalPrice() {
                if (!this.cartItems || this.cartItems.length === 0) {
                return 0;
                }
                return this.cartItems.reduce((total, cartItem) => {
                return total + cartItem.price * cartItem.quantity;
                }, 0).toFixed(2);
            },
            },
    }
</script>

<style>
    .ShoppingCart {
        background-color: white;
        width: 700px;
        height: auto;
        margin: auto;
        padding: 20px;
        text-align: center;
        margin-top: 20px;
        border-radius: 10px;
    }

    .table-container {
        display: flex;
        justify-content: center;
    }

    table .cartItem {
        text-align: left;
        width: 150px;
        height: 30px;
    }

    table .cartPrice {
        width: 80px;
    }

    table .qty {
        width: 60px;
    }

    .remove {
        margin-left: 20px;
        margin-right: 20px;
    }

    .ShoppingCart .qtybutton {
        width: 30px;
    }
</style>