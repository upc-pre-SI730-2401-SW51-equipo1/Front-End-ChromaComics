<script >

import {defineComponent} from "vue";
import RecomendationContent from "../component/recomendation-content.component.vue";
import Footer from "../../public/pages/footer.vue";
import Header from "../../public/pages/header.vue";

export default defineComponent({
  components: {Footer, Header,RecomendationContent}
})
</script>

<template>
  <div class="app-container">
    <Header />
    <recomendation-content/>
    <Footer/>
  </div>

</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Asegúrate de que el contenedor ocupe toda la altura de la pantalla */
}

.app-container > * {
  flex-shrink: 0; /* Evita que los componentes se reduzcan más allá de su altura mínima */
}
</style>