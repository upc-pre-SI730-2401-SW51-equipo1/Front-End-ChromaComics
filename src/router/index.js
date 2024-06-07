import { createRouter, createWebHistory } from 'vue-router'
import Home from '../public/pages/LadingPage.vue'
import Gallery from '../comics/components/gallery.component.vue'

const routes = [
  { path: '/', component: Home },
    { path: '/comics', component: Gallery }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router