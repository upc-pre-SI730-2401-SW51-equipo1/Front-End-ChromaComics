import { createRouter, createWebHistory } from 'vue-router'
import Home from '../public/pages/LadingPage.vue'
import Gallery from '../comics/pages/list-comics.vue'
import Login from "../Login/components/Login/Login.vue";
import CreateAccount from "../Login/components/create-account/CreateAccount.vue";
import recomendationContentComponent from "../recommendations/pages/recomendation.vue";
import ShoppingcartContent from "../shopping-cart/component/shoppingcart-content.component.vue";
import PaymentOfline from "../payment/pages/CheckoutOfline.vue";
import PaymentOnline from "../payment/pages/CheckoutOnline.vue";
const router = createRouter({
  history: createWebHistory(),
  routes :[
    { path: '/', component: Home },
    { path: '/comics', component: Gallery },
    { path: '/recomendation', component: recomendationContentComponent },
    {path: '/paymentOnline', component: PaymentOnline},
    {path: '/paymentOfline', component: PaymentOfline},
    { path: '/Login', component: Login },
    { path: '/ShoppingCart', component: ShoppingcartContent },
    { path: '/create-account', component: CreateAccount },
    { path: '/:pathMatch(.*)*', redirect: '/' },

  ]
})

export default router