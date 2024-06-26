<template>
  <div>

    <Button label="Show Cart" icon="pi pi-shopping-cart" @click="openCart" />


    <div class="comic-list">
      <div v-for="comic in comics" :key="comic.id" class="comic-card">
        <h3>{{ comic.title }}</h3>
        <Button label="Add to Cart" icon="pi pi-plus" @click="addToCart(comic)" />
      </div>
    </div>


    <Dialog header="Your Shopping Cart!" v-model:visible="displayCart" modal style="width: 50vw" @hide="closeCart">
      <div v-if="!ShopCart || !ShopCart.items || ShopCart.items.length === 0" class="cart-empty">
        Your cart is empty.
      </div>
      <div v-else class="cart-cards">
        <div v-for="(item, index) in ShopCart.items" :key="index" class="cart-card">
          <h3 class="cart-title">Product ID: {{ item.ProductId }}</h3>
          <p>{{ item.title }}</p> 
        </div>
        <Button label="Proceed to Payment" icon="pi pi-save" @click="saveAsShoppingCart" />
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
const comics = ref([]);


async function fetchComics() {
  try {
    comics.value = await shoppingcartService.getAllComics();
  } catch (error) {
    console.error('Error fetching comics:', error);
  }
}

const openCart = () => {
  displayCart.value = true;
};

const closeCart = () => {
  displayCart.value = false;
};


const addToCart = (book) => {
  ShopCart.value.items.push({
    ProductId: book.id, 
    title: book.title
  });

  displayCart.value = true; 
};


const saveAsShoppingCart = async () => {
  try {
    if (ShopCart.value.items.length === 0) {
      return; 
    }


    const newCart = {
      items: ShopCart.value.items.map(item => ({
        bookId: item.ProductId 
      }))
    };

  
    await shoppingcartService.createShoppingCart(newCart);


    ShopCart.value = { id: null, items: [] };
    router.push({ name: 'Home' });
  } catch (error) {
    console.error('Error saving shopping cart:', error);
  }
};

onMounted(fetchComics);
</script>

<style scoped>
.comic-list {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.comic-card {
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
