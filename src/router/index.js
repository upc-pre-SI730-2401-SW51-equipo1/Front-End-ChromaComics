import { createRouter, createWebHistory } from 'vue-router'
import Home from '../public/pages/LadingPage.vue'
import Gallery from '../comics/components/gallery.component.vue'
import CheckoutOnline from "../payment/pages/CheckoutOnline.vue";
import CheckoutOfline from "../payment/pages/CheckoutOfline.vue";
import shoppingcartContent from '../shopping-cart/component/shoppingcart-content.component.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/comics', component: Gallery },
  {path: "/online", component: CheckoutOnline,},
  {path: "/ofline", component: CheckoutOfline,},
  {path: "/shopping", component: shoppingcartContent,},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  let baseTitle = 'ChromaComics';
  document.title = `${baseTitle} | ${to.meta['title']}`;
  next();
});
export default router