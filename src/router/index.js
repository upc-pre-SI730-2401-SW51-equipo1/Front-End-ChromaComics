import { createRouter, createWebHistory } from 'vue-router'
import Home from '../public/pages/LadingPage.vue'
import Gallery from '../comics/components/gallery.component.vue'
import Login from "../Login/components/Login/Login.vue";
import CreateAccount from "../Login/components/create-account/CreateAccount.vue";


const router = createRouter({
  history: createWebHistory(),
  routes :[
    { path: '/', component: Home },
    { path: '/comics', component: Gallery },
    { path: '/Login', component: Login },
    { path: '/create-account', component: CreateAccount },
    { path: '/:pathMatch(.*)*', redirect: '/' },

  ]
})

export default router