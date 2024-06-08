<script >
import { defineComponent } from "vue";
import Header from "@/public/pages/header.vue";
import Footer from "@/public/pages/footer.vue";
import Ofline from "../component/PayOfline.vue";

export default defineComponent({
  name: "CheckoutOfline",
  components: { Header, Ofline, Footer },
});


</script>

<template>
  <div :class="$style.checkoutOfline">
    <Header /><Ofline />
    <Footer
        chromaComicsDebugCommit="unset"
        chromaComicsFL33134ContaiDebugCommit="unset"
        groupDivHeight="3.613rem"
        groupDivPadding="0rem 0rem 3.55rem"
    />
  </div>
</template>

<style module>
.checkoutOfline {
  width: 100%;
  position: relative;
  --color-steelblue: #4682B4;
  background-color: var(--color-steelblue);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
}
</style>