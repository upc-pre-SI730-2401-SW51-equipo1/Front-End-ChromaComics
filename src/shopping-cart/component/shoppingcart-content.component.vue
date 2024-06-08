<script setup>
import { ref, onMounted, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import shoppingcartService from '../services/shoppingcart.service';


const displayCart = ref(false);
const ShopCart = ref({ id: null, items: [] });
const Books = ref([]);


const fetchCartAndBooks = async () => {
  try {
    const cart = await shoppingcartService.getCart();
    const books = await shoppingcartService.getAllBooks();

    Books.value = books;
    ShopCart.value = cart ? cart : { id: null, items: [] };

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

const addToCart = async (book) => {
  const existingProduct = ShopCart.value.items.find(item => item.libroid === book.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.pricetotal = existingProduct.quantity * existingProduct.unitPrice;
  } else {
    ShopCart.value.items.push({
      libroid: book.id,
      productName: book.title,
      unitPrice: book.price,
      quantity: 1,
      pricetotal: book.price
    });
  }

  try {
    if (ShopCart.value.id) {
      await shoppingcartService.update(ShopCart.value.id, ShopCart.value);
    } else {
      const response = await shoppingcartService.create(ShopCart.value);
      ShopCart.value.id = response.data.id;
    }
  } catch (error) {
    console.error('Error updating the cart:', error);
  }
};


const totalPrice = computed(() => {
  return ShopCart.value.items.reduce((acc, item) => acc + item.pricetotal, 0).toFixed(2);
});
</script>

<template>
  <div>

    <Button label="Show Cart" icon="pi pi-shopping-cart" @click="openCart" />


    <div class="book-list">
      <div v-for="book in Books" :key="book.id" class="book-card">
        <h3>{{ book.title }}</h3>
        <p>{{ book.writer }}</p>
        <p>${{ book.price.toFixed(2) }}</p>
        <Button label="Add to Cart" icon="pi pi-plus" @click="addToCart(book)" />
      </div>
    </div>


    <Dialog header="Your Shopping Cart!" v-model:visible="displayCart" modal style="width: 50vw" @hide="closeCart">
      <div v-if="ShopCart.value && ShopCart.value.items.length > 0" class="cart-cards">
        <div v-for="shoppingcart in ShopCart.value.items" :key="shoppingcart.libroid" class="cart-card">
          <div class="cart-info">
            <h3 class="cart-title">{{ shoppingcart.productName }}</h3>
            <p class="cart-quantity">Quantity: {{ shoppingcart.quantity }}</p>
            <p class="cart-unit-price">Unit Price: ${{ shoppingcart.unitPrice.toFixed(2) }}</p>
            <p class="cart-total-price">Total: ${{ shoppingcart.pricetotal.toFixed(2) }}</p>
          </div>
        </div>
      </div>
      <div v-else class="cart-empty">
        <p>Your cart is empty.</p>
      </div>
      <div v-if="ShopCart.value && ShopCart.value.items.length > 0" class="cart-summary">
        <h3>Total Price: ${{ totalPrice }}</h3>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.book-card {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.cart-card {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-title {
  margin: 0;
  font-size: 16px;
}

.cart-quantity, .cart-unit-price, .cart-total-price {
  margin: 0;
}

.cart-summary {
  text-align: center;
  margin-top: 20px;
}

.cart-summary h3 {
  font-weight: bold;
}

.cart-empty {
  text-align: center;
  margin-top: 20px;
  color: grey;
}
</style>
