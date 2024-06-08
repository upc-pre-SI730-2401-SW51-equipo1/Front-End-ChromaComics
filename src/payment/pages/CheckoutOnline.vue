<script >

import Online from "../component/PayOnline.vue";

import Footer from "../../public/pages/footer.vue";
import Header from "../../public/pages/header.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "CheckoutOnline",
  components: { Header, Online, Footer },
});
</script>

<template>
  <div :class="$style.checkoutOnline">
  <Header />
    <Online />
    <Footer/>
  </div>
</template>

<style module>
.checkoutOnline {
  width: 100%;
  position: relative;
  background-color: var(--color-steelblue);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
}
</style>