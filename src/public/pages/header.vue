<template>
  <header :class="$style.header">
    <div :class="$style.headerChild" />
    <div :class="$style.image4Parent">
      <img
          :class="$style.image4Icon"
          loading="lazy"
          alt=""
          src='../../assets/image-4@2x.png'
      />
      <div :class="$style.chromacomicsWrapper">
        <div :class="$style.chromacomics">ChromaComics</div>
      </div>
    </div>
    <div :class="$style.headerInner">
      <div :class="$style.frameParent">
        <nav :class="$style.frameWrapper">
          <nav :class="$style.homeParent">
            <div :class="$style.home" @click="$router.push('/recomendation')">Home</div>
            <div :class="$style.shop" @click="$router.push('/shopping')">Shop</div>
            <div :class="$style.about" @click="$router.push('/home')">About</div>
            <div :class="$style.contact" @click="$router.push('/home')">Contact</div>
          </nav>
        </nav>
        <div :class="$style.mdiaccountAlertOutlineParent">
          <img
              :class="$style.mdiaccountAlertOutlineIcon"
              loading="lazy"
              alt=""
              src='../../assets/mdiaccountalertoutline.svg'
          />
          <img
              :class="$style.akarIconssearch"
              loading="lazy"
              alt=""
              src='../../assets/akariconssearch.svg'
          />
          <img
              :class="$style.akarIconsheart"
              loading="lazy"
              alt=""
              src='../../assets/akariconsheart.svg'
          />
          <img
              :class="$style.antDesignshoppingCartOutliIcon"
              loading="lazy"
              alt=""
              src='../../assets/antdesignshoppingcartoutlined.svg'
              @click="$router.push('/ShoppingCart')"
          />
          <div :class="$style.meubelHouseLogos05Parent">
            <img
                :class="$style.meubelHouseLogos05Icon"
                alt=""
                src='../../assets/meubel-house-logos05@2x.png'
            />
            <b :class="$style.skinclinic">ChromaComics</b>
          </div>
        </div>
      </div>
    </div>
  </header>
  <Dialog v-model:visible="showModal">

  </Dialog>
</template>
<script>
import { defineComponent } from "vue";

import Dialog from 'primevue/dialog';
export default defineComponent({
  name: "Header",
  components: {

    Dialog,

  },
  data() {
    return {
      showModal: false,  // Agrega una propiedad de datos para controlar la visibilidad del modal
    };
  },
});
</script>
<style module>
.headerChild {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-forestgreen);
}
.image4Icon {
  height: 4.5rem;
  width: 5.625rem;
  position: relative;
  border-radius: var(--br-181xl);
  object-fit: cover;
  z-index: 1;
}
.chromacomics {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 8.063rem;
  z-index: 1;
}
.chromacomicsWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xl) 0 0;
}
.image4Parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-20xl);
}
.home {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 3rem;
}
.shop {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 2.625rem;
}
.about {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 3.063rem;
}
.contact {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 4.125rem;
}
.homeParent {
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-poppins),serif;
}
.frameWrapper {
  margin: 0;
  width: 26.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
  max-width: 100%;
}
.mdiaccountAlertOutlineIcon {
  height: 1.75rem;
  width: 1.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.75rem;
}
.akarIconssearch {
  height: 1.75rem;
  width: 1.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.75rem;
}
.akarIconsheart {
  height: 1.75rem;
  width: 1.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.75rem;
}
.antDesignshoppingCartOutliIcon {
  height: 1.75rem;
  width: 1.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.75rem;
}
.meubelHouseLogos05Icon {
  height: 2rem;
  width: 3.125rem;
  position: relative;
  object-fit: contain;
}
.skinclinic {
  align-self: stretch;
  position: relative;
  white-space: nowrap;
}
.meubelHouseLogos05Parent {
  height: 2.563rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8xs);
}
.mdiaccountAlertOutlineParent {
  width: 15.438rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
}
.frameParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  z-index: 1;
}
.headerInner {
  width: 52.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xl) 0 0;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-15xl);
  font-family: var(--font-montserrat),serif;
}
.header {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-11xl) var(--padding-smi);
  box-sizing: border-box;
  position: sticky;
  gap: var(--gap-198xl);
  top: 0;
  z-index: 99;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-poppins),serif;
}

@media screen and (max-width: 1325px) {
  .header {
    gap: var(--gap-89xl);
  }
}
@media screen and (max-width: 1125px) {
  .frameWrapper {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .header {
    gap: var(--gap-35xl);
  }
}
@media screen and (max-width: 450px) {
  .image4Parent {
    gap: var(--gap-lgi);
  }

  .homeParent {
    display: none;
  }

  .frameWrapper {
    width: 0;
  }

  .header {
    gap: var(--gap-8xl);
  }
}
</style>
