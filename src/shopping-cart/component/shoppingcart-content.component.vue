<template>
  <div>
    <Button label="Show Cart" icon="pi pi-shopping-cart" @click="openCart" />

    <div class="book-list">
      <div v-for="book in Books" :key="book.id" class="book-card">
        <h3>{{ book.title }}</h3>
        <Button label="Add to Cart" icon="pi pi-plus" @click="addToCart(book.id)" />
      </div>
    </div>

    <Dialog header="Your Shopping Cart!" v-model:visible="displayCart" modal style="width: 50vw" @hide="closeCart">
      <div v-for="item in ShopCart.items" :key="item.productId" class="cart-card">
        <h3>{{ item.productName }}</h3>
      </div>
      <div v-if="ShopCart.items.length > 0" class="cart-summary">
        <h3>Total Items: {{ ShopCart.items.length }}</h3>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import shoppingcartService from '../services/shoppingcart.service';

const displayCart = ref(false);
const ShopCart = ref({ id: null, items: [] });
const Books = ref([]);

const fetchCartAndBooks = async () => {
  try {
    const books = await shoppingcartService.getAllBooks();
    Books.value = books;

    const cart = await shoppingcartService.getCart();
    if (cart && Array.isArray(cart.items)) {
      ShopCart.value.id = cart.id;
      ShopCart.value.items = cart.items.map(item => ({
        productId: item.productId,
        productName: books.find(b => b.id === item.productId)?.title
      }));
    } else {
      ShopCart.value.id = null;
      ShopCart.value.items = [];
    }
  } catch (error) {
    console.error('Error fetching the cart or books:', error);
  }
};

onMounted(fetchCartAndBooks);

const openCart = () => {
  displayCart.value = true;
};

const closeCart = () => {
  displayCart.value = false;
};

const addToCart = async (bookId) => {
  try {
    const response = await shoppingcartService.create({ productId: bookId });
    const cart = response.data;
    
    if (cart && Array.isArray(cart.items)) {
      ShopCart.value.id = cart.id;
      ShopCart.value.items = cart.items.map(item => ({
        productId: item.productId,
        productName: Books.value.find(b => b.id === item.productId)?.title
      }));
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};
</script>
