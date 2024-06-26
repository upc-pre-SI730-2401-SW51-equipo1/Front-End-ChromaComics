<template>

  <main :class="$style.component4">

    <section :class="$style.wrapperRectangle1Parent">
      <div :class="$style.wrapperRectangle1">
        <img
            :class="$style.wrapperRectangle1Child"
            alt=''
            src='../../assets/rectangle-1@2x.png'
        />
      </div>
      <div :class="$style.rectangleParent">
        <div :class="$style.frameChild"/>
        <div :class="$style.image4Wrapper">
          <img :class="$style.image4Icon" alt="" src="../../assets/image-4@2x.png"/>
        </div>
        <div :class="$style.ckeckoutParent">
          <h1 :class="$style.ckeckout">ckeckout</h1>
          <div :class="$style.frameWrapper">
            <div :class="$style.homeParent">
              <div :class="$style.home">Home</div>
              <div :class="$style.dashiconsarrowDownAlt2Wrapper">
                <img
                    :class="$style.dashiconsarrowDownAlt2"
                    loading="lazy"
                    alt=""
                    src="../../assets/dashiconsarrowdownalt2@2x.png"
                />
              </div>
              <div :class="$style.checkout">checkout</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <form @submit.prevent="createUser" :class="$style.rectangleGroup">
      <div :class="$style.frameItem"/>
      <div :class="$style.frameParent">
        <div :class="$style.rectangleContainer">
          <div :class="$style.frameInner"/>
          <div :class="$style.billingDetailsParent">
            <h1 :class="$style.billingDetails">Billing details</h1>
            <div :class="$style.outputPort">
              <div :class="$style.frameGroup">
                <div :class="$style.frameContainer">

                  <div :class="$style.frameDiv">
                    <div :class="$style.firstNameParent">
                      <div :class="$style.firstName">First Name</div>
                      <div :class="$style.rectangleWrapper">
                        <input v-model="newUser.firstName" :class="$style.rectangleDiv"/>
                      </div>
                    </div>
                    <div :class="$style.dataLink">
                      <div :class="$style.lastName">Last Name</div>
                      <div :class="$style.dataLinkInner">
                        <input v-model="newUser.lastName" :class="$style.frameChild1"/>
                      </div>
                    </div>
                  </div>
                  <div :class="$style.companyNameOptional">
                    Codigo de Compra
                  </div>
                </div>
                <input type="number" v-model="newUser.shoppingId" :class="$style.frameChild2" />
              </div>
            </div>
            <div :class="$style.frameWrapper1">
              <div :class="$style.groupDiv">
                <div :class="$style.countryRegionParent">
                  <div :class="$style.countryRegion">Country / Region</div>
                  <div :class="$style.rectangleFrame">
                    <input v-model="newUser.country" :class="$style.rectangleInput" type="text"/>
                  </div>
                  <div :class="$style.sriLanka">Sri Lanka</div>
                  <img
                      :class="$style.dashiconsarrowDownAlt21"
                      alt=""
                      src="../../assets/dashiconsarrowdownalt2-1.svg"
                  />
                </div>
              </div>
            </div>
            <div :class="$style.frameWrapper2">
              <div :class="$style.streetAddressParent">
                <div :class="$style.streetAddress">Street address</div>
                <div :class="$style.dataHub">
                  <input v-model="newUser.street" :class="$style.inputGate"/>
                </div>
              </div>
            </div>
            <div :class="$style.frameWrapper3">
              <div :class="$style.townCityParent">
                <div :class="$style.townCity">Town / City</div>
                <div :class="$style.rectangleWrapper1">
                  <input v-model="newUser.city" :class="$style.frameChild3"/>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.frameParent1">
            <div :class="$style.provinceParent">
              <div :class="$style.province">Province</div>
              <div :class="$style.rectangleWrapper2">
                <input v-model="newUser.number" :class="$style.frameChild4" type="text"/>
              </div>
              <div :class="$style.westernProvince">Western Province</div>
            </div>
            <img
                :class="$style.dashiconsarrowDownAlt22"
                alt=""
                src='../../assets/dashiconsarrowdownalt2-1.svg'
            />
          </div>
          <textarea
              :class="$style.groupTextarea"
              placeholder="ZIP code"
              rows="6"
              cols="23"
              v-model="newUser.postalCode"
          />
          <div :class="$style.frameParent2">
            <textarea
                :class="$style.frameChild5"
                placeholder="Phone"
                rows="6"
                cols="23"
                v-model="newUser.phone"
            />
            <div :class="$style.emailAddressParent">
              <div :class="$style.emailAddress">Email address</div>
              <div :class="$style.rectangleWrapper3">
                <input :class="$style.frameChild6" v-model="newUser.email"/>
              </div>
            </div>
          </div>
          <div :class="$style.rectangleParent1">
            <div :class="$style.frameChild7"/>
            <input
                :class="$style.additionalInformation"
                placeholder="Additional information"
                type="text"
            />
          </div>
        </div>
        <div :class="$style.rectangleParent2">
          <div :class="$style.frameChild8"/>
          <div :class="$style.frameParent3">

            <div :class="$style.frameWrapper6">
              <div :class="$style.frameParent9">
                <div :class="$style.lineWrapper">
                  <div :class="$style.lineDiv"/>
                </div>
                <div :class="$style.dataConnectorParent">
                  <div v-for="(product, index) in products" :key="index">
                    <h2>{{ product.title }}</h2>
                    <p>Precio: {{ product.price }} soles</p>
                    <p>Cantidad: {{ product.quantity }}</p>

                  </div>
                  <p>Cantidad total de la compra: {{ totalQuantity }}</p>
                  <div :class="$style.dataConnector">
                    <div :class="$style.shapeContainer">
                      <div :class="$style.shapeContainerInner">
                        <div :class="$style.ellipseDiv"/>
                      </div>
                      <div :class="$style.directBankTransfer">
                        Direct Bank Transfer
                      </div>
                    </div>
                  </div>
                  <div :class="$style.makeYourPayment">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
                <div :class="$style.pathBuilderWrapper">
                  <div :class="$style.pathBuilder">
                    <div :class="$style.frameParent10">
                      <div :class="$style.circleClusterWrapper">
                        <div :class="$style.circleCluster"/>
                      </div>
                      <div :class="$style.directBankTransfer1">
                        Direct Bank Transfer
                      </div>
                    </div>
                    <div :class="$style.frameParent11">
                      <div :class="$style.ellipseWrapper">
                        <div :class="$style.frameChild9"/>
                      </div>
                      <div :class="$style.cashOnDelivery">Cash On Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.yourPersonalDataWillBeUseWrapper">
              <div :class="$style.yourPersonalDataContainer">
                <span :class="$style.yourPersonalData"
                >Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                </span>
                <span :class="$style.privacyPolicy">privacy policy.</span>
              </div>
            </div>
            <div :class="$style.frameWrapper7">

              <button @click="createUser" :class="$style.groupButton">
                <div :class="$style.frameChild10"/>
                <div :class="$style.placeOrder">Place order</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <section :class="$style.featureWrapper">
      <div :class="$style.feature">
        <div :class="$style.trophy1Parent">
          <img :class="$style.trophy1Icon" loading="lazy" alt="" :src="'src/public/assets/trophy-1.svg'"/>
          <div :class="$style.text">
            <h3 :class="$style.highQuality">High Quality</h3>
            <div :class="$style.craftedFromTop">crafted from top materials</div>
          </div>
        </div>
        <div :class="$style.guaranteeParent">
          <img
              :class="$style.guaranteeIcon"
              loading="lazy"
              alt=""
              src='../../assets/guarantee.svg'
          />
          <div :class="$style.frameChild11"/>
          <div :class="$style.text1">
            <h3 :class="$style.warrantyProtection">Warranty Protection</h3>
            <div :class="$style.over2Years">Over 2 years</div>
          </div>
        </div>
        <div :class="$style.shippingParent">
          <img
              :class="$style.shippingIcon"
              loading="lazy"
              alt=""
              src='../../assets/shipping.svg'
          />
          <div :class="$style.text2">
            <h3 :class="$style.freeShipping">Free Shipping</h3>
            <div :class="$style.orderOver150">Order over 150 $</div>
          </div>
        </div>
        <div :class="$style.customerSupportParent">
          <img :class="$style.customerSupportIcon"
               loading="lazy"
               alt=""
               src='../../assets/customersupport.svg'/>
          <div :class="$style.text3">
            <div :class="$style.support">24 / 7 Support</div>
            <div :class="$style.dedicatedSupport">Dedicated support</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { defineComponent, ref } from "vue";
import { OnlineEntity } from '../model/online.entity.js';
import { PaymentService } from '../service/payment.service.js';

export default defineComponent({
  name: "Online",
  setup() {
    // Creas una instancia de tu servicio
    const paymentService = new PaymentService();
    const newUser = ref(new OnlineEntity(0, '', 0, '', '', '', '', '', '', '', '', 0,'pending'));

    // Creas una referencia a una nueva lista de productos
    const products = ref([]);

    const createUser = () => {
      // Llama al método create de tu servicio con el nuevo usuario
      paymentService.CreatePayment(newUser.value).then(
          response => {
            console.log('Pago creado con éxito:', response);
          },
          error => {
            console.error('Hubo un error al crear el Pago:', error);
          }
      );
    };

    // Método para obtener los productos del carrito de compras y los títulos de los productos
    const getProducts = async () => {
      const cartItems = await paymentService.getproductsShoppingCart();
      for (let item of cartItems) {
        const product = await paymentService.gettitleComic(item.productId);
        const price = Math.floor(Math.random() * (150 - 20 + 1)) + 20;
        products.value.push({
          title: product.title,
          price: price,
          quantity: 1 // Asumiendo que la cantidad es 1
        });
      }
    };

    // Llama al método getProducts cuando se monta el componente
    getProducts();

    return {
      newUser,
      createUser,
      products
    };
  },
  computed: {
    totalQuantity() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
});
</script>
<style module>

.wrapperRectangle1Child {
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  position: absolute;
  left: 0;
  top: 0;
  transform: scale(1.038);
}

.wrapperRectangle1 {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  max-height: 200%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.frameChild {
  width: 100%;
  height: 13.25rem;
  position: absolute;
  margin: 0 !important;
  right: 0;
  bottom: 0;

  background-color: white;
}

.image4Icon {
  height: 4.5rem;
  width: 5.625rem;
  position: relative;

  border-radius: var(--br-181xl);
  object-fit: cover;
  z-index: 1;
}

.image4Wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  justify-content: center; /* Centra los elementos a lo largo del eje principal (horizontal) */
  padding: 0 37px;
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

.dashiconsarrowDownAlt2Wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
}

.checkout {

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

.frameWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-9xl) 0 var(--padding-20xl);
  font-size: var(--font-size-base);
}

.ckeckoutParent {

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  left: 45em;
}

.rectangleParent {
  width: 20.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  left:35em;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-11xl);
  max-width: 100%;
  z-index: 1;
}

.wrapperRectangle1Parent {
  align-self: stretch;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-486xl) var(--padding-66xl);
  box-sizing: border-box;
  position: relative;
  max-width: 200%;

  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-poppins),serif;
}

.frameItem {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}

.frameInner {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}

.billingDetails {
  margin: 0;
  position: relative;
  font-size: var(--font-size-17xl);
  font-weight: 600;
  font-family: inherit;
  z-index: 1;
}

.firstName {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 5.438rem;
}

.rectangleDiv {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
}

.rectangleWrapper {
  align-self: stretch;
  height: 4.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
}

.firstNameParent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  min-width: 8.625rem;
  z-index: 1;
}

.lastName {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 5.375rem;
  z-index: 1;
}

.frameChild1 {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  z-index: 1;
}

.dataLinkInner {
  align-self: stretch;
  height: 4.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
}

.dataLink {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  min-width: 8.625rem;
}

.frameDiv {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
}

.companyNameOptional {
  position: relative;
  font-weight: 500;
  z-index: 1;
}

.frameContainer {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-17xl);
}

.frameChild2 {
  align-self: stretch;
  height: 4.688rem;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  z-index: 1;
}

.frameGroup {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
}

.outputPort {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.countryRegion {
  position: relative;
  font-weight: 500;
}

.rectangleInput {
  border: 1px solid var(--color-darkgray-200);
  outline: none;
  background-color: white;
  height: 4.688rem;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  box-sizing: border-box;
  min-width: 15.625rem;
  max-width: 100%;
}

.rectangleFrame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.sriLanka {
  position: absolute;
  margin: 0 !important;
  bottom: 1.563rem;
  left: 1.938rem;
  color: var(--color-darkgray-200);
  display: inline-block;
  min-width: 4.438rem;
  z-index: 1;
}

.dashiconsarrowDownAlt21 {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  margin: 0 !important;
  right: 1.688rem;
  bottom: 1.688rem;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
}

.countryRegionParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xl);
  max-width: 100%;
}

.groupDiv {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 1;
}

.frameWrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 12px;
  box-sizing: border-box;
  max-width: 100%;
}

.streetAddress {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 7.375rem;
}

.inputGate {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  max-width: 100%;
}

.dataHub {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.streetAddressParent {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
  z-index: 1;
}

.frameWrapper2 {
  align-self: stretch;
  height: 7.563rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.townCity {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 5.75rem;
}

.frameChild3 {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  max-width: 100%;
}

.rectangleWrapper1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.townCityParent {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
  z-index: 1;
}

.frameWrapper3 {
  align-self: stretch;
  height: 7.563rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.billingDetailsParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-17xl);
  max-width: 100%;
}

.province {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 4.375rem;
}

.frameChild4 {
  border: 1px solid var(--color-darkgray-200);
  outline: none;
  background-color: white;
  height: 4.688rem;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  box-sizing: border-box;
  min-width: 15.625rem;
  max-width: 100%;
}

.rectangleWrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.westernProvince {
  position: absolute;
  margin: 0 !important;
  bottom: 1.563rem;
  left: 1.938rem;
  color: var(--color-darkgray-200);
  z-index: 1;
}

.provinceParent {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
}

.dashiconsarrowDownAlt22 {
  position: absolute;
  height: 16.53%;
  width: 4.41%;
  top: 61.16%;
  right: 5.95%;
  bottom: 22.31%;
  left: 89.65%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 2;
}

.frameParent1 {
  align-self: stretch;
  height: 7.563rem;
  position: relative;
  max-width: 100%;
  z-index: 1;
}

.groupTextarea {
  border: none;
  background-color: transparent;
  height: 7.563rem;
  width: auto;
  outline: none;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: var(--font-poppins),serif;
  font-weight: 500;
  font-size: var(--font-size-base);
  color: var(--color-black);
  z-index: 1;
}

.frameChild5 {
  border: none;
  background-color: transparent;
  height: 7.563rem;
  width: auto;
  outline: none;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: var(--font-poppins),serif;
  font-weight: 500;
  font-size: var(--font-size-base);
  color: var(--color-black);
  z-index: 1;
}

.emailAddress {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 7.188rem;
}

.frameChild6 {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
  max-width: 100%;
}

.rectangleWrapper3 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.emailAddressParent {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
  z-index: 1;
}

.frameParent2 {
  align-self: stretch;
  height: 19.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-11xl);
  box-sizing: border-box;
  gap: var(--gap-17xl);
  max-width: 100%;
}

.frameChild7 {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-3xs);
  background-color: white;
  border: 1px solid var(--color-darkgray-200);
  box-sizing: border-box;
}

.additionalInformation {
  width: 11.188rem;
  border: none;
  outline: none;
  font-family: var(--font-poppins),serif;
  font-size: var(--font-size-base);
  background-color: transparent;
  height: 1.5rem;
  position: relative;
  color: var(--color-darkgray-200);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 1;
}

.rectangleParent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-10xl) var(--padding-6xl);
  position: relative;
  z-index: 1;
}

.rectangleContainer {
  flex: 0.8537;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-16xl) var(--padding-60xl) var(--padding-52xl) var(--padding-55xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-17xl);
  min-width: 24.688rem;
  max-width: 100%;
}

.frameChild8 {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}

.product {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  min-width: 5.875rem;
}

.asgaardSofa {
  position: relative;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-200);
  display: inline-block;
  min-width: 6.75rem;
}

.x {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 0.5rem;
}

.xWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0 0;
}

.div {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 0.313rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0 0;
}

.asgaardSofaParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-5);
}

.frameWrapper4 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  font-size: var(--font-size-xs);
}

.productParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
}

.subtotal {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  min-width: 6.438rem;
}

.subtotalWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-3xs);
}

.s25 {
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 300;
  display: inline-block;
  min-width: 2.438rem;
}

.frameParent6 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
}

.frameParent5 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
}

.subtotal1 {
  position: relative;
  display: inline-block;
  min-width: 4.25rem;
}

.s251 {
  position: relative;
  font-weight: 300;
  display: inline-block;
  min-width: 2.438rem;
}

.subtotalParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
}

.total {
  position: relative;
  display: inline-block;
  min-width: 2.5rem;
}

.totalWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0 0;
}

.s252 {
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  background:  #ffcf33;

  -webkit-text-fill-color: transparent;
  min-width: 3.875rem;
}

.frameParent8 {
  width: 26rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
}

.frameParent7 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
}

.frameWrapper5 {
  width: 29rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-base);
}

.frameParent4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-xs-5);
  box-sizing: border-box;
  gap: var(--gap-3xl);
  max-width: 100%;
  font-size: var(--font-size-5xl);
}

.lineDiv {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  max-width: 100%;
}

.lineWrapper {
  align-self: stretch;
  height: 0.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.ellipseDiv {
  width: 0.875rem;
  height: 0.875rem;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-black);
}

.shapeContainerInner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0 0;
}

.directBankTransfer {
  position: relative;
}

.shapeContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
}

.dataConnector {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-12xs);
}

.makeYourPayment {
  align-self: stretch;
  position: relative;
  font-weight: 300;
  color: darkgray;
  text-align: justify;
}

.dataConnectorParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
}

.circleCluster {
  width: 0.875rem;
  height: 0.875rem;
  position: relative;
  border-radius: 50%;
  border: 0 solid var(--color-darkgray-200);
  box-sizing: border-box;
}

.circleClusterWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0 0;
}

.directBankTransfer1 {
  position: relative;
  font-weight: 500;
}

.frameParent10 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
}

.frameChild9 {
  width: 0.875rem;
  height: 0.875rem;
  position: relative;
  border-radius: 50%;
  border: 0 solid var(--color-darkgray-200);
  box-sizing: border-box;
}

.ellipseWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0 0;
}

.cashOnDelivery {
  position: relative;
  font-weight: 500;
}

.frameParent11 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
}

.pathBuilder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
}

.pathBuilderWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-12xs);
  color: darkgray;
}

.frameParent9 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl-3);
  max-width: 100%;
}

.frameWrapper6 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-9xs) 0 var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
}

.yourPersonalData {
  font-weight: 300;
}

.privacyPolicy {
  font-weight: 600;
}

.yourPersonalDataContainer {
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.yourPersonalDataWillBeUseWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-mid);
  box-sizing: border-box;
  max-width: 100%;
  text-align: justify;
}

.frameChild10 {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
}

.placeOrder {
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-poppins),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 7.125rem;
  z-index: 1;
}

.groupButton {
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) var(--padding-xl);
  background-color: transparent;
  width: 19.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  white-space: nowrap;
}

.frameWrapper7 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl) 0 var(--padding-8xl);
}

.frameParent3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
  z-index: 1;
}

.rectangleParent2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-68xl) var(--padding-18xl) var(--padding-67xl) var(--padding-19xl);
  box-sizing: border-box;
  position: relative;
  min-width: 24.688rem;
  max-width: 100%;
}

.frameParent {
  width: 77.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  max-width: 100%;
  z-index: 1;
}

.rectangleGroup {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-44xl) var(--padding-xl) var(--padding-33xl) var(--padding-3xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: black;
  font-family: var(--font-poppins),serif;
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

.trophy1Parent {
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

.frameChild11 {
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

.guaranteeParent {
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

.shippingParent {
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

.customerSupportParent {
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

.featureWrapper {
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
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-gray-100);
  font-family: var(--font-poppins),serif;
}

.component4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  overflow-y: auto;
  min-height: 500px; /* Añade una barra de desplazamiento vertical si es necesario */
}

@media screen and (max-width: 1325px) {
  .wrapperRectangle1Parent {
    padding-left: var(--padding-233xl);
    padding-right: var(--padding-233xl);
    box-sizing: border-box;
  }

  .rectangleContainer {
    padding-top: var(--padding-4xl);
    padding-bottom: var(--padding-27xl);
    box-sizing: border-box;
  }

  .rectangleGroup {
    padding-top: var(--padding-22xl);
    padding-bottom: var(--padding-15xl);
    box-sizing: border-box;
  }

  .feature {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 1125px) {
  .rectangleContainer {
    flex: 1;
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-11xl);
    box-sizing: border-box;
  }

  .rectangleParent2 {
    flex: 1;
  }

  .frameParent {
    flex-wrap: wrap;
  }

  .rectangleGroup {
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-3xl);
    box-sizing: border-box;
  }
}

@media screen and (max-width: 800px) {
  .ckeckout {
    font-size: var(--font-size-19xl);
  }

  .wrapperRectangle1Parent {
    padding-left: var(--padding-107xl);
    padding-right: var(--padding-107xl);
    box-sizing: border-box;
  }

  .billingDetails {
    font-size: var(--font-size-10xl);
  }

  .frameDiv {
    flex-wrap: wrap;
  }

  .rectangleContainer {
    gap: var(--gap-lg);
    padding-left: var(--padding-18xl);
    padding-right: var(--padding-20xl);
    box-sizing: border-box;
    min-width: 100%;
  }

  .rectangleParent2 {
    padding-top: var(--padding-38xl);
    padding-bottom: var(--padding-37xl);
    box-sizing: border-box;
    min-width: 100%;
  }

  .featureWrapper {
    padding-left: var(--padding-7xl);
    padding-right: var(--padding-7xl);
    box-sizing: border-box;
  }
}

@media screen and (max-width: 450px) {
  .ckeckout {
    font-size: var(--font-size-10xl);
  }

  .rectangleParent {
    gap: var(--gap-mini);
  }

  .wrapperRectangle1Parent {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .billingDetails {
    font-size: var(--font-size-3xl);
  }

  .frameContainer {
    gap: var(--gap-lg);
  }

  .billingDetailsParent {
    gap: var(--gap-lg);
  }

  .frameParent2 {
    gap: var(--gap-lg);
  }

  .rectangleContainer {
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }

  .product {
    font-size: var(--font-size-lgi);
  }

  .subtotal {
    font-size: var(--font-size-lgi);
  }

  .frameParent5 {
    flex-wrap: wrap;
  }

  .subtotalParent {
    flex-wrap: wrap;
  }

  .s252 {
    font-size: var(--font-size-lgi);
  }

  .frameParent8 {
    flex-wrap: wrap;
  }

  .rectangleParent2 {
    padding-top: var(--padding-18xl);
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }

  .rectangleGroup {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }

  .highQuality {
    font-size: var(--font-size-xl);
    line-height: 1.875rem;
  }

  .craftedFromTop {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }

  .trophy1Parent {
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

  .guaranteeParent {
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
