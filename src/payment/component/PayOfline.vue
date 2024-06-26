<template>

  <section :class="$style.returnsPolicy">
    <div :class="$style.wrapperNewsletterBlockParent">
      <div :class="$style.wrapperNewsletterBlock">
        <img
            :class="$style.newsletterBlockIcon"
            alt=""
            src="../../assets/rectangle-1@2x.png"
        />
      </div>
      <div :class="$style.topMenuBarParent">
        <div :class="$style.topMenuBar" />
        <div :class="$style.logoArea">
          <img :class="$style.image4Icon" alt="" src='../../assets/image-4@2x.png' />
        </div>
        <h1 :class="$style.ckeckout">ckeckout</h1>
        <div :class="$style.mainBanner">
          <div :class="$style.homeParent">
            <div :class="$style.home">Home</div>
            <div :class="$style.copyrightInfo">
              <img
                  :class="$style.dashiconsarrowDownAlt2"
                  loading="lazy"
                  alt=""
                    src='../../assets/dashiconsarrowdownalt2@2x.png'
              />
            </div>
            <div :class="$style.checkout">checkout</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.phoneNumber">
      <form  @submit.prevent="createUser" :class="$style.mailAddress">
        <div :class="$style.locationInfo">
          <div :class="$style.openingHours">
            <div :class="$style.borders">
              <div :class="$style.pageTitle" />
            </div>
            <div :class="$style.logoContainer">
              <div :class="$style.navLinks">
                <div :class="$style.emailInputFieldWrapper">
                  <div :class="$style.emailInputField">
                    <div :class="$style.subscribeButton">
                      <div :class="$style.s5000">S/50.00</div>
                    </div>
                    <div :class="$style.subscribeButton1">
                      <div :class="$style.s4000">S/40.00</div>
                    </div>
                  </div>
                </div>
                <div :class="$style.searchIcon">
                  <div :class="$style.frame">
                    <div :class="$style.descuentoEspecial25">
                      Descuento especial 25% para lectores!
                    </div>
                  </div>
                  <div :class="$style.frame1">
                    <b :class="$style.libroDeAventuras">Mejores Precios Siempre</b>
                  </div>
                </div>
              </div>
              <div :class="$style.companyLogo">
                <div :class="$style.borders1">
                  <div :class="$style.pageBackground" />
                </div>
                <div :class="$style.favicon">
                  <div :class="$style.mobileViewport">
                    <div :class="$style.accessibilitySettings">
                      <b :class="$style.s40001">S/40.00</b>
                    </div>
                    <div :class="$style.accessibilitySettings1">
                      <b :class="$style.total">Total</b>
                    </div>
                  </div>
                </div>
                <div :class="$style.sidebarContainer">
                  <div :class="$style.sidebarItemList">
                    <div :class="$style.s40002">S/40.00</div>
                  </div>
                  <div :class="$style.sidebarItemList1">
                    <div  :class="$style.subtotal"> SubTotal</div>
                  </div>
                </div>
              </div>
              <button  @click="createUser" :class="$style.frame2">
                <b :class="$style.continuar" >Continuar</b>
              </button>
            </div>
            <div :class="$style.pageDescription">
              <b :class="$style.resumenDelPedido">Resumen del pedido</b>
            </div>
          </div>
        </div>
        <div :class="$style.errorMessage">
          <div :class="$style.listItem">
            <div :class="$style.listIcon">
              <div :class="$style.volverAMtodos" @click="$router.push('/ofline')">Ir al pago Ofline</div>
            </div>
            <div :class="$style.imageCaption">
              <img :class="$style.cardLayoutIcon" alt="" :src="'src/public/assets/frame-3.svg'" />
            </div>
          </div>
          <div :class="$style.loadingSpinner">
            <div :class="$style.alContinuarConfirmas">
              Al continuar, confirmas que eres un adulto según las leyes de tu
              país y aceptas estar sujeto a los Términos de servicio de la
              librería.
            </div>
          </div>
          <div :class="$style.loadingSpinner1">
            <div :class="$style.frame3">
              <input
                  :class="$style.frameChild"
                  placeholder="Introducir telefono aqui"
                  type="number" id="phoneNumber" v-model="newUser.phoneNumber"
              />
              <div :class="$style.formLabelWrapper">
                <div :class="$style.formLabel">
                  <div :class="$style.borders2">
                    <div :class="$style.rectangle" />
                  </div>
                  <div :class="$style.subtitle">
                    <div :class="$style.contentRow">+51</div>
                  </div>
                  <img :class="$style.frameIcon1" alt="" :src="'src/public/assets/frame-2.svg'" />
                </div>
              </div>
            </div>
            <div :class="$style.frame4">
              <div :class="$style.nmeroDeTelfono">Número de teléfono</div>
            </div>
          </div>
          <div :class="$style.loadingSpinner2">
            <div :class="$style.callToAction">
              <img :class="$style.formFieldIcon" alt="" :src="'src/public/assets/frame-1.svg'" />
                <input type="text" id="user" v-model="newUser.firstName"
                    :class="$style.imageColumn"
                               placeholder=" "

                />
            </div>
            <div :class="$style.frame5">
              <div :class="$style.nombreCompleto">Nombre completo</div>
            </div>
          </div>
          <div :class="$style.loadingSpinner3">
            <b :class="$style.pagoViaPago">Pago via Pago Ofline</b>
          </div>
        </div>
      </form>
    </div>
    <div :class="$style.cardContent">
      <div :class="$style.feature">
        <div :class="$style.cardTitle">
          <img
              :class="$style.trophy1Icon"
              loading="lazy"
              alt=""
              :src="'src/public/assets/trophy-1.svg'"
          />
          <div :class="$style.text">
            <h3 :class="$style.highQuality">High Quality</h3>
            <div :class="$style.craftedFromTop">crafted from top materials</div>
          </div>
        </div>
        <div :class="$style.caption">
          <img
              :class="$style.guaranteeIcon"
              loading="lazy"
              alt=""
              :src="'src/public/assets/guarantee.svg'"
          />
          <div :class="$style.captionChild" />
          <div :class="$style.text1">
            <h3 :class="$style.warrantyProtection">Warranty Protection</h3>
            <div :class="$style.over2Years">Over 2 years</div>
          </div>
        </div>
        <div :class="$style.cardTitle1">
          <img
              :class="$style.shippingIcon"
              loading="lazy"
              alt=""
              :src="'src/public/assets/shipping.svg'"
          />
          <div :class="$style.text2">
            <h3 :class="$style.freeShipping">Free Shipping</h3>
            <div :class="$style.orderOver150">Order over 150 $</div>
          </div>
        </div>
        <div :class="$style.cardTitle2">
          <img
              :class="$style.customerSupportIcon"
              loading="lazy"
              alt=""
              :src="'src/public/assets/customersupport.svg'"
          />
          <div :class="$style.text3">
            <div :class="$style.support">24 / 7 Support</div>
            <div :class="$style.dedicatedSupport">Dedicated support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import { defineComponent,ref  } from "vue";
import {PaymentService} from '../service/payment.service.js';
import {UserEntity} from '../model/user.entity.js';
export default defineComponent({
  name: "Ofline",
  setup() {
    // Creas una instancia de tu servicio
    const paymentService = new PaymentService();

    // Creas una referencia a un nuevo objeto UserEntity
    const newUser = ref(new UserEntity(0, '', ''));

    // Método para crear un nuevo usuario
    const createUser = () => {
      // Llama al método create de tu servicio con el nuevo usuario
      paymentService.create(newUser.value).then(
          response => {
            console.log('Pago creado con éxito:', response);
          },
          error => {
            console.error('Hubo un error al crear el Pago:', error);
          }
      );
    };

    // Devuelves el método y el nuevo usuario para que puedan ser usados en tu plantilla
    return {
      newUser,
      createUser
    };
  }

});
</script>

<style module>
:root {
  /* fonts */
  --font-poppins: Poppins;
  --font-montserrat: Montserrat;
  --font-roboto: Roboto;

  /* font sizes */
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-5xl: 1.5rem;
  --font-size-lgi: 1.188rem;
  --font-size-xl: 1.25rem;
  --font-size-6xl: 1.563rem;
  --font-size-xs: 0.75rem;
  --font-size-17xl: 2.25rem;
  --font-size-10xl: 1.813rem;
  --font-size-3xl: 1.375rem;
  --font-size-29xl: 3rem;
  --font-size-19xl: 2.375rem;
  --font-size-15xl: 2.125rem;

  /* Colors */

  --color-black: #000;
  --color-gainsboro-100: #e5e7eb;
  --color-gainsboro-200: #d9d9d9;
  --color-darkgray-100: #b2b2b2;
  --color-darkgray-200: #9f9f9f;
  --color-forestgreen: #28a745;
  --color-gray-3: #898989;
  --color-gray-100: #242424;
  --color-gray-200: rgba(0, 0, 0, 0.17);
  --color-linen: #faf3ea;
  --color-white: #fff;
  --color-floralwhite: #fff7ed;
  --color-sandybrown: #fdba74;
  --color-slategray: #6b7280;
  --color-darkslategray: #374151;
  --color-darkorange: #f97316;
  --color-chocolate: #e05900;
  --color-dimgray: #4b5563;

  /* Gaps */
  --gap-28xl-1: 2.943rem;
  --gap-5xl: 1.5rem;
  --gap-14xl-3: 2.081rem;
  --gap-mid: 1.062rem;
  --gap-xl: 1.25rem;
  --gap-53xl: 4.5rem;
  --gap-17xl: 2.25rem;
  --gap-lg: 1.125rem;
  --gap-33xl: 3.25rem;
  --gap-7xl: 1.625rem;
  --gap-2xs: 0.687rem;
  --gap-10xs-9: 0.181rem;
  --gap-35xl: 3.375rem;
  --gap-25xl-6: 2.787rem;
  --gap-25xl-8: 2.8rem;
  --gap-30xl: 3.062rem;
  --gap-3xs: 0.625rem;
  --gap-11xs: 0.125rem;
  --gap-3xl: 1.375rem;
  --gap-4xl-3: 1.456rem;
  --gap-mini: 0.937rem;
  --gap-base: 1rem;
  --gap-sm: 0.875rem;
  --gap-2xs-5: 0.656rem;
  --gap-11xl: 1.875rem;
  --gap-7xs: 0.375rem;
  --gap-198xl: 13.562rem;
  --gap-8xl: 1.687rem;
  --gap-89xl: 6.75rem;
  --gap-26xl: 2.812rem;
  --gap-8xs: 0.312rem;
  --gap-20xl: 2.437rem;
  --gap-lgi: 1.187rem;
  --gap-25xl-5: 2.781rem;
  --gap-5xs: 0.5rem;

  /* Paddings */
  --padding-28xl: 2.937rem;
  --padding-xl: 1.25rem;
  --padding-18xl-3: 2.331rem;
  --padding-12xl: 1.937rem;
  --padding-5xl: 1.5rem;
  --padding-11xs: 0.125rem;
  --padding-194xl-7: 13.356rem;
  --padding-120xl: 8.687rem;
  --padding-12xs-1: 0.006rem;
  --padding-263xl-3: 17.643rem;
  --padding-164xl: 11.437rem;
  --padding-81xl: 6.25rem;
  --padding-34xl: 3.312rem;
  --padding-7xl: 1.625rem;
  --padding-44xl: 3.937rem;
  --padding-33xl: 3.25rem;
  --padding-3xl: 1.375rem;
  --padding-8xl: 1.687rem;
  --padding-22xl: 2.562rem;
  --padding-15xl: 2.125rem;
  --padding-68xl: 5.437rem;
  --padding-18xl: 2.312rem;
  --padding-67xl: 5.375rem;
  --padding-19xl: 2.375rem;
  --padding-38xl: 3.562rem;
  --padding-37xl: 3.5rem;
  --padding-17xl: 2.25rem;
  --padding-mid: 1.062rem;
  --padding-9xs: 0.25rem;
  --padding-12xs: 0.062rem;
  --padding-8xs: 0.312rem;
  --padding-xs-5: 0.718rem;
  --padding-7xs: 0.375rem;
  --padding-3xs: 0.625rem;
  --padding-10xs: 0.187rem;
  --padding-16xl: 2.187rem;
  --padding-60xl: 4.937rem;
  --padding-52xl: 4.437rem;
  --padding-55xl: 4.625rem;
  --padding-20xl: 2.437rem;
  --padding-11xl: 1.875rem;
  --padding-4xl: 1.437rem;
  --padding-27xl: 2.875rem;
  --padding-10xl: 1.812rem;
  --padding-6xl: 1.562rem;
  --padding-486xl: 31.562rem;
  --padding-66xl: 5.312rem;
  --padding-107xl: 7.875rem;
  --padding-233xl: 15.75rem;
  --padding-9xl: 1.75rem;
  --padding-mini: 0.937rem;
  --padding-smi: 0.812rem;
  --padding-2xl: 1.312rem;
  --padding-5xs: 0.5rem;
  --padding-lgi: 1.187rem;
  --padding-31xl: 3.125rem;
  --br-mini: 15px;
  --br-3xs: 10px;
  --br-181xl: 200px;
  --br-5xs: 8px;
  --br-9xs: 4px;
}

.newsletterBlockIcon {
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  position: absolute;
  left: 0;
  top: 0;
  transform: scale(1.038);
}
.wrapperNewsletterBlock {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
.topMenuBar {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-white);
}
.image4Icon {
  height: 4.5rem;
  width: 5.625rem;
  position: relative;
  border-radius: var(--br-181xl);
  object-fit: cover;
  z-index: 1;
}
.logoArea {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-31xl);
}
.ckeckout {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  z-index: 1;
}
.home {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 3rem;
  z-index: 1;
}
.dashiconsarrowDownAlt2 {
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  z-index: 1;
}
.copyrightInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
}
.checkout {
  position: relative;
  font-weight: 300;
  display: inline-block;
  min-width: 4.625rem;
  z-index: 1;
}
.homeParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
}
.mainBanner {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-20xl);
  font-size: var(--font-size-base);
}
.topMenuBarParent {
  width: 20.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-12xl) var(--padding-12xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  z-index: 1;
}
.wrapperNewsletterBlockParent {
  align-self: stretch;
  height: 19.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lgi) var(--padding-486xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
}
.pageTitle {
  position: absolute;
  top: 0;
  left: 0.013rem;
  background-color: var(--color-gainsboro-100);
  width: 0.1rem;
  height: 19.9rem;
}
.borders {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 1.25rem;
  width: 37.313rem;
}
.s5000 {
  position: absolute;
  top: 0;
  right: 2.713rem;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-dimgray);
  text-align: right;
  display: inline-block;
  width: 3.125rem;
  min-width: 3.125rem;
}
.subscribeButton {
  position: absolute;
  width: 100%;
  top: 1.25rem;
  right: 0;
  left: 0;
  height: 1.25rem;
}
.s4000 {
  position: absolute;
  top: 0;
  right: 2.713rem;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: right;
  display: inline-block;
  width: 3.125rem;
  min-width: 3.125rem;
}
.subscribeButton1 {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  height: 1.25rem;
}
.emailInputField {
  align-self: stretch;
  height: 2.5rem;
  position: relative;
}
.emailInputFieldWrapper {
  position: absolute;
  top: 0;
  left: 37.525rem;
  width: 3.338rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
}
.descuentoEspecial25 {
  position: absolute;
  width: 45.84%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-dimgray);
  text-align: left;
  display: inline-block;
}
.frame {
  position: absolute;
  width: 100%;
  top: 1.5rem;
  right: 0;
  left: 0;
  height: 1.25rem;
}
.libroDeAventuras {
  position: absolute;
  width: 27.47%;
  top: 0;
  left: 0;
  font-size: var(--font-size-base);
  line-height: 1.5rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
}
.frame1 {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  height: 1.5rem;
}
.searchIcon {
  position: absolute;
  width: 91.83%;
  top: calc(50% - 22px);
  right: 8.17%;
  left: 0;
  height: 2.75rem;
}
.navLinks {
  align-self: stretch;
  height: 2.75rem;
  position: relative;
  z-index: 1;
}
.pageBackground {
  position: absolute;
  top: -0.1rem;
  left: -0.012rem;
  background-color: var(--color-gainsboro-100);
  width: 35.2rem;
  height: 0.1rem;
}
.borders1 {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35.188rem;
}
.s40001 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  height: 100%;
}
.accessibilitySettings {
  position: absolute;
  width: 8.89%;
  top: 0;
  right: 0;
  left: 91.11%;
  height: 1.25rem;
}
.total {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  height: 100%;
}
.accessibilitySettings1 {
  position: absolute;
  width: 5.69%;
  top: 0;
  right: 94.31%;
  left: 0;
  height: 1.25rem;
}
.mobileViewport {
  align-self: stretch;
  height: 1.25rem;
  position: relative;
  z-index: 1;
}
.favicon {
  position: absolute;
  top: 0.625rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0 0;
  box-sizing: border-box;
  max-width: 100%;
}
.s40002 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  height: 100%;
}
.sidebarItemList {
  position: absolute;
  width: 8.17%;
  top: 0;
  right: 0;
  left: 91.83%;
  height: 1.25rem;
}
.subtotal {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 3.994rem;
  height: 100%;
}
.sidebarItemList1 {
  position: absolute;
  width: 9.41%;
  top: 0;
  right: 90.59%;
  left: 0;
  height: 1.25rem;
}
.sidebarContainer {
  position: absolute;
  width: 100%;
  top: 0.625rem;
  right: 0;
  left: 0;
  height: 1.25rem;
  z-index: 1;
}
.companyLogo {
  align-self: stretch;
  height: 3.625rem;
  position: relative;
  max-width: 100%;
  z-index: 1;
}
.continuar {
  position: absolute;
  top: 0.438rem;
  left: calc(50% - 73px);
  font-size: var(--font-size-base);
  line-height: 1.5rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-white);
  text-align: center;
  width: 4.688rem;
  min-width: 4.688rem;
}
.frame2 {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-darkorange);
  align-self: stretch;
  height: 2.5rem;
  position: relative;
  border-radius: var(--br-9xs);
  z-index: 1;
}
.frame2:hover {
  background-color: var(--color-chocolate);
}
.logoContainer {
  position: absolute;
  top: 3.75rem;
  left: 2.556rem;
  width: 40.863rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.resumenDelPedido {
  position: absolute;
  width: 33.92%;
  top: 0;
  left: 0;
  font-size: var(--font-size-xl);
  line-height: 1.75rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
}
.pageDescription {
  position: absolute;
  width: 91.66%;
  top: 1rem;
  right: 2.61%;
  left: 5.73%;
  height: 1.75rem;
  z-index: 1;
}
.openingHours {
  height: 19.875rem;
  width: 44.581rem;
  position: relative;
  max-width: 100%;
}
.locationInfo {
  position: absolute;
  top: 1.5rem;
  left: 1.744rem;
  width: 86.513rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
}
.volverAMtodos {
  position: absolute;
  width: 100%;
  top: calc(50% - 10px);
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-darkslategray);
  text-align: left;
  display: inline-block;
  height: 100%;
}
.listIcon {
  position: absolute;
  width: 28.95%;
  top: calc(50% - 10px);
  right: 66.78%;
  left: 4.27%;
  height: 1.25rem;
}
.cardLayoutIcon {
  width: 1rem;
  height: 1rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
}
.imageCaption {
  position: absolute;
  top: 0;
  left: 2.813rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
}
.listItem {
  position: absolute;
  width: 94.62%;
  top: 17.625rem;
  right: 2.69%;
  left: 2.69%;
  height: 1.25rem;
}
.alContinuarConfirmas {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: var(--font-size-xs);
  line-height: 1rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-slategray);
  text-align: left;
  display: inline-block;
  height: 100%;
}
.loadingSpinner {
  position: absolute;
  width: 94.62%;
  top: 14.625rem;
  right: 2.69%;
  left: 2.69%;
  height: 2rem;
}

.frameChild {
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top: 0.625rem;
  left: 5.225rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
  box-sizing: border-box;
  font-family: var(--font-roboto),serif;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
}
.rectangle {
  position: absolute;
  top: -0.012rem;
  left: 3.756rem;
  background-color: var(--color-sandybrown);
  width: 0.1rem;
  height: 1.5rem;
}
.borders2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.875rem;
  height: 1.5rem;
}
.contentRow {
  margin-top: -0.063rem;
  position: absolute;
  width: 100%;
  top: calc(50% - 13px);
  left: 0;
  font-size: var(--font-size-base);
  line-height: 1.5rem;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  flex-shrink: 0;

  white-space: nowrap;
  height: 100%;
}
.subtitle {
  position: absolute;
  width: 45.14%;
  top: calc(50% - 12px);
  right: 3.19%;
  left: 51.67%;
  height: 1.5rem;
  z-index: 1;
}
.frameIcon1 {
  position: absolute;
  top: 0.25rem;
  left: calc(50% - 23px);
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  z-index: 1;
}
.formLabel {
  align-self: stretch;
  height: 1.5rem;
  position: relative;
}
.formLabelWrapper {
  position: absolute;
  top: 0.625rem;
  left: 0.725rem;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
}
.frame3 {
  position: absolute;
  width: 100%;
  top: 1.5rem;
  right: 0;
  left: 0;
  border-radius: var(--br-9xs);
  background-color: var(--color-floralwhite);
  border: 2px solid var(--color-sandybrown);
  box-sizing: border-box;
  height: 2.938rem;
}
.nmeroDeTelfono {
  position: absolute;
  width: 22.91%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
}
.frame4 {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  height: 1.25rem;
}
.loadingSpinner1 {
  position: absolute;
  width: 94.62%;
  top: 9.188rem;
  right: 2.69%;
  left: 2.69%;
  height: 4.438rem;
}
.formFieldIcon {
  position: absolute;
  top: 1rem;
  left: calc(50% + 256px);
  width: 1rem;
  height: 1rem;
  overflow: hidden;
}
.imageColumn {
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  width: 91.65%;
  top: calc(50% - 14px);
  right: 6.58%;
  left: 1.77%;
  height: 1.75rem;
  padding: var(--padding-9xs) var(--padding-5xs);
  box-sizing: border-box;
  font-family: var(--font-roboto),serif;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
  z-index: 1;
}
.callToAction {
  position: absolute;
  width: 100%;
  top: 1.5rem;
  right: 0;
  left: 0;
  border-radius: var(--br-9xs);
  background-color: var(--color-floralwhite);
  border: 2px solid var(--color-sandybrown);
  box-sizing: border-box;
  height: 2.938rem;
}
.nombreCompleto {
  position: absolute;
  width: 20.79%;
  top: 0;
  left: 0;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
}
.frame5 {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  height: 1.25rem;
}
.loadingSpinner2 {
  position: absolute;
  width: 94.62%;
  top: 3.75rem;
  right: 2.69%;
  left: 2.69%;
  height: 4.438rem;
}
.pagoViaPago {
  position: absolute;
  width: 37.84%;
  top: 0;
  left: 0;
  font-size: var(--font-size-xl);
  line-height: 1.75rem;
  display: inline-block;
  font-family: var(--font-roboto),serif;
  color: var(--color-black);
  text-align: left;
}
.loadingSpinner3 {
  position: absolute;
  width: 94.62%;
  top: 1rem;
  right: 2.69%;
  left: 2.69%;
  height: 1.75rem;
}
.errorMessage {
  position: absolute;
  width: 47.99%;
  top: 1.5rem;
  right: 50.08%;
  left: 1.94%;
  height: 19.875rem;
  z-index: 2;
}
.mailAddress {
  margin: 0;
  height: 25.688rem;
  flex: 1;
  position: relative;
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.1),
  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 #000, 0 0 0 #000;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  overflow: hidden;
  max-width: 100%;
}
.phoneNumber {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 var(--padding-3xs) 0 0;
  box-sizing: border-box;
  max-width: 100%;
}
.trophy1Icon {
  height: 3.75rem;
  width: 3.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.highQuality {
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 2.375rem;
  font-weight: 600;
  font-family: inherit;
}
.craftedFromTop {
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 150%;
  font-weight: 500;
  color: var(--color-gray-3);
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
}
.cardTitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
}
.guaranteeIcon {
  height: 3.75rem;
  width: 3.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.captionChild {
  height: 5.313rem;
  width: 5.313rem;
  position: relative;
  display: none;
}
.warrantyProtection {
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 2.375rem;
  font-weight: 600;
  font-family: inherit;
}
.over2Years {
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 150%;
  font-weight: 500;
  color: var(--color-gray-3);
  display: inline-block;
  min-width: 7.875rem;
}
.text1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
}
.caption {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  max-width: 100%;
}
.shippingIcon {
  height: 3.75rem;
  width: 3.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.freeShipping {
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 2.375rem;
  font-weight: 600;
  font-family: inherit;
}
.orderOver150 {
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 150%;
  font-weight: 500;
  color: var(--color-gray-3);
}
.text2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
}
.cardTitle1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
}
.customerSupportIcon {
  height: 3.75rem;
  width: 3.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.support {
  position: relative;
  line-height: 2.375rem;
  font-weight: 600;
}
.dedicatedSupport {
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 150%;
  font-weight: 500;
  color: var(--color-gray-3);
}
.text3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
}
.cardTitle2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.feature {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
}
.cardContent {
  align-self: stretch;
  background-color: var(--color-linen);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-81xl) var(--padding-34xl);
  box-sizing: border-box;
  min-height: 16.875rem;
  max-width: 100%;
  font-size: var(--font-size-6xl);
  color: var(--color-gray-100);
}
.returnsPolicy {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-25xl-5);
  max-width: 101%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-poppins),serif;
}

@media screen and (max-width: 1325px) {
  .wrapperNewsletterBlockParent {
    padding-left: var(--padding-233xl);
    padding-right: var(--padding-233xl);
    box-sizing: border-box;
  }

  .feature {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 800px) {
  .ckeckout {
    font-size: var(--font-size-19xl);
  }

  .wrapperNewsletterBlockParent {
    padding-left: var(--padding-107xl);
    padding-right: var(--padding-107xl);
    box-sizing: border-box;
  }

  .cardContent {
    padding-left: var(--padding-7xl);
    padding-right: var(--padding-7xl);
    box-sizing: border-box;
  }

  .returnsPolicy {
    gap: var(--gap-3xl);
  }
}
@media screen and (max-width: 450px) {
  .ckeckout {
    font-size: var(--font-size-10xl);
  }

  .wrapperNewsletterBlockParent {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .resumenDelPedido {
    font-size: var(--font-size-base);
    line-height: 1.375rem;
  }

  .pagoViaPago {
    font-size: var(--font-size-base);
    line-height: 1.375rem;
  }

  .highQuality {
    font-size: var(--font-size-xl);
    line-height: 1.875rem;
  }

  .craftedFromTop {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }

  .cardTitle {
    flex-wrap: wrap;
  }

  .warrantyProtection {
    font-size: var(--font-size-xl);
    line-height: 1.875rem;
  }

  .over2Years {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }

  .caption {
    flex-wrap: wrap;
  }

  .freeShipping {
    font-size: var(--font-size-xl);
    line-height: 1.875rem;
  }

  .orderOver150 {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }

  .support {
    font-size: var(--font-size-xl);
    line-height: 1.875rem;
  }

  .dedicatedSupport {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }
}
</style>
