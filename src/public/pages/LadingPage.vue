<script >
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Image from 'primevue/image';
import router from "../../router/index.js";
export default {
  components: {
    'button': Button,
    'img': Image
  },

  methods: {
    navigateToLogin() {
      router.push('/Login');
    },
  },

}
</script>

<template>
  <div class="index">
    <header class="header">
      <div class="logo-build-sphere-1-parent">
        <img class="logo-build-sphere-1" alt="" src="../../assets/logo-build-sphere-1.svg">

        <b class="chromacomics">ChromaComics</b>
        <img class="image-1-icon" loading="lazy" alt="" src="../../assets/image-1@2x.png">
      </div>
      <div class="testimonios-container">

      </div>
      <nav class="monthly-subscription-box">
        <nav class="loyalty-program-box">
          <b class="testimonios"><a href="#who">Who are we?</a></b>
          <b class="testimonios"><a href="#testimonios">Testimonials</a></b>
          <b class="contact-us" id="contactUsText"><a href="#contact-us">contact us</a></b>
          <b class="nuestros-planes"><a href="#nuestros-planes">Our Plans</a></b>
          <button class="component-2" @click="navigateToLogin">Sing In</button>
        </nav>
      </nav>
    </header>
      <section class="header-parent">

                  <div class="introduction-wrapper">
                  <div class="introduction">
                    <div class="service-description-container">
                      <div class="infomartion-text-parent">
                        <div class="infomartion-text">
                        We are a company that helps to obtain comics from any country,
                          besides that we help young people who are looking for educational books.
                        </div>
                        <div class="comment-box-component-wrapper">
                          <div class="comment-box-component">
                            <button class="component-2" @click="navigateToLogin">
                              <div class="component-2-child"></div>
                              <div class="send-button-component-parent">
                                <div class="send-button-component"></div>
                                <div class="comencemos">Let's start</div>
                              </div>
                            </button>
                            <button class="component-1">
                              <img
                                class="component-1-child"
                                alt=""
                                src="../../assets/rectangle-3.svg"
                              />

                              <div class="saber-mas">Learn more</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      class="image-2-icon"
                      loading="lazy"
                      alt=""
                      src="../../assets/image-2@2x.png"
                    />
                  </div>
                </div>
                  <div class="website-title">
                  <div class="about" id="who">
                    <div class="frame-parent" >
                      <div class="about-title-wrapper">
                        <h3 class="about-title" >Who are we?</h3>
                      </div>
                      <div class="text-about">
                        Chroma Comics, we are an online store passionate about comics and education.
                        Our mission is to provide a platform where comics fans can explore and enjoy
                        works from all continents, while promoting academic knowledge.
                      </div>
                    </div>
                    <div class="image-4-wrapper">
                      <img
                        class="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="../../assets/image-4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                  <div class="submenu-label">
                  <div class="caracterist" id="caracteristContainer">
                    <div class="caractersticas-wrapper">
                      <h3 class="caractersticas">Features</h3>
                    </div>
                    <div class="frame-group">
                      <img
                        class="frame-child"
                        loading="lazy"
                        alt=""
                        src="../../assets/group-19@2x.png"
                      />

                      <div class="rectangle-parent">
                        <div class="frame-item"></div>
                        <div class="amplia-seleccin-de-gneros-wrapper">
                          <div class="amplia-seleccin-de">
                           Wide Selection of Genres:
                          </div>
                        </div>
                        <div class="nuestro-catlogo-abarca">
                          Our catalog covers a variety of genres to satisfy all tastes. From superheroes to science fiction,
                          fantasy and romance, we want every reader to find something they are passionate about. The diversity
                          of genres allows us to offer a unique experience for each person who visits Chroma Comics.
                        </div>
                      </div>
                      <div class="rectangle-group">
                        <div class="frame-inner"></div>
                        <div class="enfoque-acadmico-wrapper">
                          <div class="enfoque-acadmico">Academic Focus:</div>
                        </div>
                        <div class="ms-all-de">
                         Beyond comics, we are also passionate about academic knowledge. That's why we offer academic books
                          in a variety of areas. We believe that learning is a superpower and we want to foster it. So, whether
                          you are an avid reader or a curious inquisitive Chroma Comics is your destination to explore and learn!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



      </section>
    <div class="proyects" id="testimonios" data-scroll-to="proyectsContainer">
      <div class="testimonios-wrapper">
        <h3 class="testimonios1" >Testimonials</h3>
      </div>
      <div class="frame-container">
        <div class="frame-div">
          <div class="buildsphere-wrapper">
            <div class="buildsphere">BuildSphere</div>
          </div>
          <div class="enim-sed-faucibus">
            Enim sed faucibus turpis in eu mi bibendum neque egestas.
            Volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend. Rhoncus urna neque viverra
            justo nec. Adipiscing bibendum est ultricies integer quis
            auctor elit sed.
          </div>
        </div>
        <div class="projects-list"></div>
      </div>
      <div class="proyects-inner">
        <div class="frame-parent1">
          <div class="frame-parent2">
            <div class="mode-apps-wrapper">
              <div class="mode-apps">Mode apps</div>
            </div>
            <div class="lectus-urna-duis" >
              Lectus urna duis convallis convallis tellus id interdum.
              Adipiscing tristique risus nec feugiat. Enim sed faucibus
              turpis in eu mi bibendum neque egestas. Volutpat commodo sed
              egestas egestas fringilla phasellus faucibus scelerisque
              eleifend.
            </div>
          </div>
          <div class="rectangle-div"></div>
        </div>
      </div>
      <div class="proyects-child">
        <div class="frame-parent3">
          <div class="frame-parent4">
            <div class="scraps-mode-wrapper">
              <div class="scraps-mode">SCRAPS MODE</div>
            </div>
            <div class="sit-amet-mauris">
              Sit amet mauris commodo quis. Mollis aliquam ut porttitor
              leo a diam sollicitudin tempor. Pharetra diam sit amet nisl
              suscipit adipiscing. Ullamcorper dignissim cras tincidunt
              lobortis feugiat.
            </div>
          </div>
          <div class="frame-child1"></div>
        </div>
      </div>
    </div>
      <section class="contact-parent">
            <div class="contact" data-scroll-to="contactContainer">
              <div class="contact-label">
                <div class="contact-title">
                  <h3 class="contact-us1" id="contact-us" >contact us</h3>
                </div>
                <div class="submit-button">
                  <div class="image-3-wrapper">
                    <img
                      class="image-3-icon"
                      loading="lazy"
                      alt=""
                      src="../../assets/image-3@2x.png"
                    />
                  </div>
                  <div class="email-field">
                    <div class="footer-image">
                      <div class="frame-parent5">
                        <div class="nombre-parent">
                          <div class="nombre">Nombre</div>
                          <div class="frame-parent6">
                            <div class="rectangle-container">
                              <div class="frame-child2"></div>
                              <div class="jhon">Jhon</div>
                            </div>
                            <div class="correo">Mail</div>
                          </div>
                        </div>
                        <div class="email-label">
                          <div class="apellido">Last name</div>
                          <div class="smith-label">
                            <div class="smith-label-child"></div>
                            <div class="smith">Smith</div>
                          </div>
                        </div>
                      </div>
                      <div class="details-area">
                        <div class="details-area-child"></div>
                        <a
                          class="exampleexamplecom"
                          href="mailto:example@example.com"
                          target="_blank"
                          >example@example.com</a
                        >
                      </div>
                    </div>
                    <div class="detalles">Details</div>
                    <textarea
                      class="email-field-child"
                      placeholder="Comenta aquí"
                      rows="{11}"
                      cols="{34}"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
              <div class="send-button">
                <button class="frame-button">
                  <div class="frame-child3"></div>
                  <div class="enviar">Enviar</div>
                </button>
              </div>
            </div>
            <div class="service">
              <div class="service1">
                <div class="monthly-plan" id="nuestros-planes">
                  <h3 class="nuestros-planes1" >Our Plans</h3>
                </div>
                <div class="program-label-parent">
                  <div class="program-label">
                    <div class="frame-parent7">
                      <div class="suscripcin-mensual-wrapper">
                        <div class="suscripcin-mensual">Monthly Subscription</div>
                      </div>
                      <div class="text-plan1-2">
                        For a monthly fee, subscribers will receive new comics directly to their home.
                      </div>
                      <div class="text-plan1-wrapper">
                        <div class="text-plan1">
                          <p class="caractersticas1">Characteristics:</p>
                          <ul class="acceso-anticipado-a-ediciones">
                            <li class="acceso-anticipado-a">
                             Early access to limited editions.
                            </li>
                            <li class="descuentos-exclusivos">
                              Exclusive discounts
                            </li>
                            <li class="en-mercanca-relacionada">
                              in related merchandise
                            </li>
                            <li>with comics.</li>
                          </ul>
                        </div>
                      </div>
                      <div class="us-29mes-wrapper">
                        <div class="us-29mes">
                          <span>US$ </span>
                          <span class="span"> </span>
                          <span>29/</span>
                          <span class="mes">mes</span>
                        </div>
                      </div>
                    </div>
                    <div class="lealtad-program">
                      <div class="frame-parent8">
                        <div class="programa-de-lealtad-saber-wrapper">
                          <div class="programa-de-lealtad">
                            Loyalty Program “Know+”
                          </div>
                        </div>
                        <div class="rewards-wrapper">
                          <div class="rewards">
                            Depending on the number of free chapters offered for free per day or per purchase, points
                            will be accumulated and can be redeemed for discounts.
                          </div>
                        </div>
                        <div class="text-plan2">
                          <p class="caractersticas2">Characteristics:</p>
                          <ul class="los-clientes-acumularn-puntos">
                            <li class="los-clientes-acumularn">
                              Customers will accumulate points for each purchase of academic books.
                            </li>
                            <li class="los-puntos-se">
                              The points can be redeemed for a discount to read a chapter or free to read it on the platform.
                            </li>
                            <li>
                             Points can also be exchanged for other chapters.
                            </li>
                          </ul>
                        </div>
                        <div class="us-0mes-wrapper">
                          <div class="us-0mes">
                            <span>US$ </span>
                            <span class="span1"> </span>
                            <span>0/</span>
                            <span class="mes1">mes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="frame-wrapper">
                    <button class="group-button">
                      <div class="frame-child4"></div>
                      <b class="adquirir-ya">Buy now!</b>
                      <div class="frame-child5"></div>
                      <b class="adquirir-ya1">Buy now!</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
      <footer class="footer">
            <img
              class="imagen-4-icon"
              loading="lazy"
              alt=""
              src="../../assets/imagen-4@2x.png"
            />

            <img class="footer-child" loading="lazy" alt="" />

            <div class="frame-parent9">
              <div class="informacin-legal-wrapper">
                <div class="informacin-legal">Legal information</div>
              </div>
              <div class="copyright-2024-chromecomics">
                Copyright© 2024 ChromeComics
              </div>
              <div class="poltica-de-privacidad-wrapper">
                <div class="poltica-de-privacidad">Privacy Policy</div>
              </div>
            </div>
          </footer>
  </div>
</template>

<style >
.logo-build-sphere-1 {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--br-xl);
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.chromacomics,
.image-1-icon {
  position: absolute;
  top: 26px;
  left: 87px;
  z-index: 1;
}
.image-1-icon {
  top: 12px;
  left: 29px;
  border-radius: 200px;
  width: 77px;
  height: 72px;
  object-fit: cover;
  z-index: 2;
}
.logo-build-sphere-1-parent {
  height: 90px;
  width: 274px;
  position: relative;
}
.who {
  width: 191px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
}
.testimonios a, .contact-us a, .nuestros-planes a {
  color: black;
  text-decoration: none;
}
.testimonios-container {
  width: 273px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-xl) 0 0;
  box-sizing: border-box;
  color: #000;
}

.testimonios-container {
  color: var(--color-gray-100);
}

.contact-us,
.nuestros-planes,
.contact-us {
  min-width: 113px;
  cursor: pointer;
}
.nuestros-planes {
  width: 178px;
}
.loyalty-program-box {
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-roboto),serif;
}
.header,
.monthly-subscription-box {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
}
.monthly-subscription-box {
  margin: 0;
  width: 686px;
  flex-direction: column;
  padding: var(--padding-7xl) 0 0;
  max-width: 100%;
}
.header {

  margin-bottom: 33px;
  width: 1452px;
  border-radius: 10px;
  background-color: var(--color-forestgreen);
  flex-direction: row;
  padding: var(--padding-8xs) 7px;
  gap: 58px;
  top: 0;
  z-index: 99;
  position: sticky;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  box-sizing: border-box;

  max-width: 100%;
  text-align: left;

  flex-shrink: 0;

  font-size: var(--font-size-5xl);
  color: #192829;
  font-family: var(--font-roboto),sans-serif;
}
.infomartion-text {
  align-self: stretch;
  position: relative;
  font-weight: 500;
  display: inline-flex;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.component-2-child,
.send-button-component {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-mini);
  background-color: var(--color-gold);
}
.comencemos {
  position: absolute;
  margin: 0 !important;
  top: 24.49%;
  left: 30.59%;
  font-size: var(--font-size-sm);
  font-family: var(--font-roboto),serif;
  color: var(--color-whitesmoke-100);
  text-align: left;
  display: inline-block;
  min-width: 87px;
  z-index: 1;
}
.component-2,
.send-button-component-parent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.send-button-component-parent {
  height: 49px;
  padding: var(--padding-xs) 31px var(--padding-2xl) var(--padding-33xl);
  box-sizing: border-box;
  z-index: 1;
}
.component-2 {
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
  min-width: 110px;
}
.component-1-child {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-mini);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.saber-mas {
  position: relative;
  font-size: var(--font-size-sm);
  font-family: var(--font-roboto),sans-serif;
  color: var(--color-whitesmoke-100);
  text-align: left;
  display: inline-block;
  min-width: 67px;
  z-index: 1;
}
.component-1 {
  cursor: pointer;
  border: 0;
  padding: var(--padding-xs) var(--padding-22xl) var(--padding-2xl);
  background-color: transparent;
  flex: 0.5176;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  box-sizing: border-box;
  position: relative;
  min-width: 110px;
}
.comment-box-component,
.comment-box-component-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

}
.comment-box-component {
  flex: 1;
  justify-content: center;
  gap: var(--gap-28xl);
}
.comment-box-component-wrapper {
  width: 411px;
  justify-content: flex-end;
  padding: 0 var(--padding-xs);
  box-sizing: border-box;
}
.infomartion-text-parent,
.service-description-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.infomartion-text-parent {
  align-self: stretch;
  align-items: flex-end;
  gap: 118px;

}
.service-description-container {
  width: 458px;
  align-items: flex-start;
  padding: 0 0 74px;
  box-sizing: border-box;
  min-height: 356px;
  max-width: calc(100% - 606px);
  flex-shrink: 0;
}
.image-2-icon {
  height: 695px;
  width: 572px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: normal;

}
.introduction,
.introduction-wrapper {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

}
.introduction {
  height: 652px;
  width: 1229px;
  overflow: hidden;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 285px var(--padding-7xl) 10.6px;
  gap: 33px;
}
.introduction-wrapper {
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0 var(--padding-14xl-8);
  text-align: center;
  font-size: var(--font-size-xl);
}
.about-title {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
}
.about-title-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl);
}
.text-about {
  align-self: stretch;
  height: 212px;
  position: relative;
  font-size: var(--font-size-5xl);
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
}
.frame-parent {
  width: 483px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 483px;

}
.image-4-icon {
  align-self: stretch;
  flex: 1;
  position: relative;

  overflow: hidden;

  object-fit: contain;
}
.about,
.image-4-wrapper,
.website-title {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
}
.image-4-wrapper {
  height: 238.2px;
  width: 385px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 0 15.7px;
  min-width: 385px;
}
.about,
.website-title {
  flex-direction: row;
}
.about {
  flex: 1;
  background-color: var(--color-forestgreen);
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px 119px var(--padding-8xl) 83px;
  gap: var(--gap-xl);
}
.website-title {
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-14xl-8);
}
.caractersticas {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
}
.caractersticas-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl);
}
.frame-child,
.frame-item {
  position: relative;
  max-width: 100%;
}
.frame-child {
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  min-height: 374px;
}
.frame-item {
  width: 398px;
  height: 373px;
  border-radius: var(--br-mini);
  background-color: var(--color-forestgreen);
  display: none;
}
.amplia-seleccin-de {
  width: 323px;
  position: relative;
  line-height: 29px;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
}
.amplia-seleccin-de-gneros-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 8px;
  box-sizing: border-box;

}
.nuestro-catlogo-abarca {
  align-self: stretch;
  height: 308px;
  position: relative;
  font-weight: 300;
  text-align: justify;
  display: inline-block;
  z-index: 1;
}
.frame-inner,
.rectangle-parent {
  border-radius: var(--br-mini);
  background-color: var(--color-forestgreen);

}
.rectangle-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) 24px 6px;
  box-sizing: border-box;
  gap: 14px;
  flex-shrink: 0;
}
.frame-inner {
  width: 398px;
  height: 373px;
  position: relative;
  display: none;
}
.enfoque-acadmico {
  width: 224px;
  position: relative;
  line-height: 29px;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
}
.enfoque-acadmico-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 var(--padding-33xl);
  box-sizing: border-box;

}
.ms-all-de {
  align-self: stretch;
  height: 308px;
  position: relative;
  font-weight: 300;
  text-align: justify;
  display: inline-block;
  z-index: 1;
}
.frame-group,
.rectangle-group {
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
}
.rectangle-group {
  border-radius: var(--br-mini);
  background-color: var(--color-forestgreen);
  display: flex;
  flex-direction: column;
  padding: var(--padding-mid) var(--padding-8xl) 9px var(--padding-2xl);
  box-sizing: border-box;
  gap: 11px;
  flex-shrink: 0;
}
.frame-group {
  width: 1328.7px;
  display: grid;
  flex-direction: row;
  gap: 67px;
  grid-template-columns: repeat(3, minmax(299px, 1fr));
  text-align: center;
  font-size: var(--font-size-5xl);
}
.caracterist,
.submenu-label {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}
.caracterist {
  flex: 1;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--gap-43xl);
  cursor: pointer;
}
.submenu-label {
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 20.5px 0 var(--padding-xl);
  box-sizing: border-box;
}
.nuestros-proyectos1 {
  margin: 0;
  width: 537px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  white-space: pre-wrap;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
}
.nuestros-proyectos-wrapper {
  width: 791px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font-size-17xl);
  color: var(--color-gray-100);
}
.buildsphere {
  width: 156.4px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
}
.buildsphere-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl) 0 var(--padding-2xl);
}

.enim-sed-faucibus {
  align-self: stretch;
  height: 112px;
  position: relative;
  font-weight: 300;
  white-space: pre-wrap;
  text-align: center;
  display: inline-block;
}
.frame-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 458px;
  max-width: 100%;
}
.projects-list {
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-dimgray-100);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25) inset;
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  min-width: 300px;
}
.frame-container {
  width: 1077.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-53xl);
  max-width: 100%;
}
.mode-apps {
  width: 131px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
}
.mode-apps-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl);
}
.lectus-urna-duis {
  align-self: stretch;
  height: 140px;
  position: relative;
  font-weight: 300;
  white-space: pre-wrap;
  text-align: center;
  display: inline-block;
}
.frame-parent2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 376px;
  max-width: 100%;
}
.rectangle-div {
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-dimgray-100);
  min-width: 300px;
}
.frame-parent1,
.proyects-inner {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
}
.frame-parent1 {
  width: 950.5px;
  gap: var(--gap-53xl);
}
.proyects-inner {
  align-self: stretch;
}
.scraps-mode {
  width: 204.8px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
}
.scraps-mode-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-2xl) 0 var(--padding-xl);
}
.sit-amet-mauris {
  align-self: stretch;
  height: 112px;
  position: relative;
  font-weight: 300;
  white-space: pre-wrap;
  text-align: center;
  display: inline-block;
}
.frame-parent4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 376px;
  max-width: 100%;
}
.frame-child1 {
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-dimgray-100);
  min-width: 300px;
}
.frame-parent3 {
  width: 950.5px;
  flex-direction: row;
  justify-content: center;
  gap: var(--gap-53xl);
  max-width: 100%;
}
.frame-parent3,
.proyects,
.proyects-child {
  display: flex;
  align-items: flex-start;
}
.proyects-child {
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
}
.proyects {
  width: 1440.5px;
  background-color: var(--color-forestgreen);
  flex-direction: column;
  justify-content: flex-start;
  padding: 54px 118px;
  box-sizing: border-box;
  gap: 190px;
  max-width: 101%;
  flex-shrink: 0;
  color: black;
}
.dropdown-icon,
.header-parent {
  align-self: stretch;
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
}
.dropdown-icon {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 4px 0 0;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
}
.header-parent {
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 8.5px var(--padding-8xs);
  gap: 28.2px;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-gray-100);
  font-family: var(--font-roboto),sans-serif;
}
.contact-us1 {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  text-shadow: 1px 0 0#000, 0 1px 0#000, -1px 0 0#000, 0-1px 0#000;
}
.contact-title {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl) 0 176px;
}
.image-3-icon {
  align-self: stretch;
  height: 279px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
}
.image-3-wrapper {
  height: 332.6px;
  width: 297.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 297.5px;
}
.nombre {
  position: relative;
  display: inline-block;
  min-width: 93.7px;
}
.frame-child2 {
  height: 52px;
  width: 323.5px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
}
.jhon {
  position: relative;
  display: inline-block;
  min-width: 39.2px;
  z-index: 1;
}
.rectangle-container {
  align-self: stretch;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-2xs-9) var(--padding-mid);
  max-width: 100%;
}
.correo {
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  min-width: 78.4px;
}
.frame-parent6,
.nombre-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
}
.frame-parent6 {
  align-self: stretch;
  gap: var(--gap-mid);
  font-size: var(--font-size-base);
}
.nombre-parent {
  flex: 1;
  gap: var(--gap-7xs);
  min-width: 210px;
}
.apellido {
  position: relative;
  display: inline-block;
  min-width: 94.8px;
}
.smith-label-child {
  height: 52px;
  width: 323.5px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
}
.smith {
  position: relative;
  display: inline-block;
  min-width: 45.7px;
  z-index: 1;
}
.smith-label {
  align-self: stretch;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  flex-direction: row;
  padding: var(--padding-base) 13.1px var(--padding-mid);
  font-size: var(--font-size-base);
}
.email-label,
.frame-parent5,
.smith-label {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
}
.email-label {
  flex: 1;
  flex-direction: column;
  gap: var(--gap-7xs);
  min-width: 210px;
}
.frame-parent5 {
  align-self: stretch;
  flex-direction: row;
  gap: 31.5px;
}
.details-area-child {
  height: 52px;
  width: 678.5px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
}
.exampleexamplecom {
  width: 187.3px;
  position: relative;
  text-decoration: underline;
  color: inherit;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 1;
}
.details-area,
.footer-image {
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
}
.details-area {
  border-radius: var(--br-8xs);
  background-color: var(--color-darkgray);
  border: 1px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  flex-direction: row;
  padding: var(--padding-base) var(--padding-2xs-9) var(--padding-mid);
  font-size: var(--font-size-base);
}
.footer-image {
  flex-direction: column;
  gap: 7.1px;
}
.detalles {
  position: relative;
  display: inline-block;
  min-width: 94.8px;
}
.email-field,
.email-field-child {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.email-field-child {
  border: 1px solid var(--color-whitesmoke-100);
  background-color: var(--color-darkgray);
  height: 219.1px;
  width: auto;
  outline: 0;
  align-self: stretch;
  border-radius: var(--br-8xs);
  box-sizing: border-box;
  flex-direction: row;
  padding: var(--padding-xs) 7.6px;
  font-family: var(--font-roboto);
  font-size: var(--font-size-base);
  color: var(--color-dimgray-200);
}
.email-field {
  flex: 1;
  flex-direction: column;
  gap: 11.5px;
  min-width: 441px;
  max-width: 100%;
}
.submit-button {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 141px;
  max-width: 100%;
  font-size: var(--font-size-5xl);
  color: var(--color-dimgray-200);
}
.contact-label {
  width: 1117px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-43xl);
  flex-shrink: 0;
  debug_commit: f6aba90;
  max-width: 116%;
}
.frame-child3 {
  height: 50px;
  width: 174.3px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--color-gold);
  display: none;
}
.enviar {
  flex: 1;
  position: relative;
  font-size: var(--font-size-sm);
  font-family: var(--font-roboto);
  color: var(--color-whitesmoke-100);
  text-align: left;
  z-index: 1;
}
.frame-button {
  cursor: pointer;
  border: 0;
  padding: var(--padding-mid) var(--padding-45xl) 18px 64.3px;
  background-color: var(--color-gold);
  width: 174.3px;
  border-radius: var(--br-mini);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;
  debug_commit: f6aba90;
}
.frame-button:hover {
  background-color: #cc9c00;
}
.contact,
.send-button {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
}
.send-button {
  width: 688.3px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl);
}
.contact {
  width: 1231px;
  height: 638px;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 135px 73.8px;
  gap: var(--gap-5xl);
}
.nuestros-planes1 {
  margin: 0;
  height: 42px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
}
.monthly-plan {
  width: 1070px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1px 0 0;
  box-sizing: border-box;
  max-width: 100%;
}
.suscripcin-mensual {
  position: relative;
  font-weight: 600;
}
.suscripcin-mensual-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-45xl);
}
.text-plan1-2 {
  align-self: stretch;
  height: 112px;
  position: relative;
  text-align: center;
  display: inline-block;
}
.caractersticas1 {
  margin: 0;
}
.acceso-anticipado-a,
.descuentos-exclusivos,
.en-mercanca-relacionada {
  margin-bottom: 0;
}
.acceso-anticipado-a-ediciones {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-13xl);
}
.text-plan1 {
  height: 168px;
  width: 323px;
  position: relative;
  display: inline-block;
}
.text-plan1-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 15px 0 15.5px;
}
.mes,
.span {
  font-size: var(--font-size-base);
}
.us-29mes {
  height: 28px;
  width: 121px;
  position: relative;
  white-space: pre-wrap;
  display: inline-block;
}
.frame-parent7,
.us-29mes-wrapper {
  display: flex;
  align-items: flex-start;
}
.us-29mes-wrapper {
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: var(--color-black);
}
.frame-parent7 {
  width: 431px;
  border-radius: var(--br-mini);
  background-color: var(--color-whitesmoke-200);
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--padding-3xl) 38.5px 154px;
  box-sizing: border-box;
  gap: 82px;
  min-width: 431px;
  max-width: 100%;
}
.programa-de-lealtad {
  position: relative;
  line-height: 29.6px;
  font-weight: 600;
}
.programa-de-lealtad-saber-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 30px 0 29px;
}

.rewards {
  height: 131px;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.rewards-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
}
.caractersticas2 {
  margin: 0;
}
.los-clientes-acumularn,
.los-puntos-se {
  margin-bottom: 0;
}
.los-clientes-acumularn-puntos {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-13xl);
}
.text-plan2 {
  align-self: stretch;
  height: 280px;
  position: relative;
  display: inline-block;
}
.mes1,
.span1 {
  font-size: var(--font-size-base);
}
.us-0mes {
  height: 28px;
  width: 108px;
  position: relative;
  white-space: pre-wrap;
  display: inline-block;
  min-width: 108px;
}
.us-0mes-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl);
  text-align: center;
  color: var(--color-black);
}
.frame-parent8 {
  align-self: stretch;
  border-radius: var(--br-mini);
  background-color: var(--color-whitesmoke-200);
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--padding-base) 10.5px 151px;
  box-sizing: border-box;
  gap: 40px;
}
.frame-parent8,
.lealtad-program,
.program-label {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}
.lealtad-program {
  width: 406px;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
  min-width: 406px;
}
.program-label {
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-xl);
}
.frame-child4 {
  height: 50px;
  width: 174.3px;
  border-radius: var(--br-mini);
  background-color: var(--color-gold);
}
.adquirir-ya,
.frame-child4,
.frame-child5 {
  position: relative;
  display: none;
}
.adquirir-ya {
  font-size: var(--font-size-xl);
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: left;
  min-width: 110px;
}
.frame-child5 {
  height: 50px;
  width: 174px;
  border-radius: var(--br-mini);
  background-color: var(--color-gold);
}
.adquirir-ya1 {
  position: relative;
  font-size: var(--font-size-xl);
  display: inline-block;
  font-family: var(--font-roboto),sans-serif;
  color: var(--color-black);
  text-align: left;
  min-width: 110px;
  z-index: 3;
}
.frame-wrapper,
.group-button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.group-button {
  cursor: pointer;
  border: 0;
  padding: 13px var(--padding-13xl) var(--padding-sm);
  background-color: var(--color-gold);
  border-radius: var(--br-mini);
  justify-content: flex-start;
  z-index: 2;
}
.frame-wrapper {
  width: 1015px;
  justify-content: center;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
}
.program-label-parent {
  width: 1070px;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;
  max-width: 100%;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
}
.contact-parent,
.program-label-parent,
.service,
.service1 {
  display: flex;
  justify-content: flex-start;
}
.service1 {
  flex: 1;
  background-color: var(--color-forestgreen);
  flex-direction: column;
  align-items: center;
  padding: 55px var(--padding-xl) 80px;
  box-sizing: border-box;
  gap: 66px;
  max-width: 100%;
  flex-shrink: 0;
}
.contact-parent,
.service {
  align-items: flex-start;
}
.service {
  margin-left: -93px;
  width: 1454px;
  height: 1010px;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  max-width: 107%;
  color: var(--color-black);
}
.contact-parent {
  align-self: stretch;
  flex-direction: column;
  padding: 0 0 0 88px;
  box-sizing: border-box;
  gap: var(--gap-4xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-gray-100);
  font-family: var(--font-roboto),sans-serif;
}
.imagen-4-icon {
  width: 216.5px;
  height: 42px;
  position: relative;
  border-radius: var(--br-8xs);
  object-fit: cover;
}
.footer-child,
.informacin-legal {
  align-self: stretch;
  position: relative;
}
.footer-child {
  height: 4.2px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
}
.informacin-legal {
  font-weight: 300;
}
.informacin-legal-wrapper {
  width: 293px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
}
.copyright-2024-chromecomics {
  height: 28px;
  width: 293px;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
}
.poltica-de-privacidad {
  align-self: stretch;
  position: relative;
  font-weight: 300;
}
.poltica-de-privacidad-wrapper {
  width: 293px;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
}
.footer,
.frame-parent9,
.index,
.poltica-de-privacidad-wrapper {
  display: flex;
  align-items: flex-start;
}
.frame-parent9 {
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-xl);
}
.footer,
.index {
  flex-direction: column;
  justify-content: flex-start;
}
.footer {
  margin-left: -3px;
  align-self: stretch;
  background-color: var(--color-gold);
  padding: 54px var(--padding-sm);
  gap: 8px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-roboto),serif;
}

.index {
  width: 100%;
  position: relative;
  background-color: #0073b7;
  overflow-y: auto;
  gap: 91px;
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 1225px) {
  .monthly-subscription-box {
    display: none;
  }
  .header {
    width: 766px;
  }
  .frame-parent {
    flex: 1;
  }
  .image-4-icon {
    align-self: stretch;
    width: auto;
  }
  .image-4-wrapper {
    flex: 1;
  }
  .about {
    flex-wrap: wrap;
    justify-content: center;
  }
  .projects-list {
    flex: 1;
  }
  .frame-container {
    flex-wrap: wrap;
    gap: var(--gap-17xl);
  }
  .proyects {
    padding-top: var(--padding-16xl);
    padding-bottom: var(--padding-16xl);
    box-sizing: border-box;
  }
  .submit-button {
    gap: 70px;
  }
  .contact-label {
    gap: var(--gap-12xl);
  }
  .contact {
    padding-left: var(--padding-48xl);
    padding-right: var(--padding-48xl);
    box-sizing: border-box;
  }
  .service1 {
    gap: var(--gap-14xl);
  }
  .contact-parent {
    padding-left: 44px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1050px) {
  .image-2-icon,
  .service-description-container {
    display: none;
    max-width: 100%;
  }
  .introduction {
    padding-top: 185px;
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  .frame-group {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(299px, 518px));
  }
  .rectangle-div {
    flex: 1;
  }
  .frame-parent1 {
    flex-wrap: wrap;
    gap: var(--gap-17xl);
  }
  .frame-child1 {
    flex: 1;
  }
  .frame-parent3 {
    flex-wrap: wrap;
    gap: var(--gap-17xl);
  }
  .proyects {
    padding-top: var(--padding-4xl);
    padding-bottom: var(--padding-4xl);
    box-sizing: border-box;
  }
  .image-3-icon {
    align-self: stretch;
    width: auto;
  }
  .image-3-wrapper {
    flex: 1;
  }
  .email-field {
    min-width: 100%;
  }
  .submit-button {
    flex-wrap: wrap;
  }
  .contact {
    height: auto;
  }
  .frame-parent7,
  .lealtad-program {
    flex: 1;
  }
  .program-label {
    flex-wrap: wrap;
    justify-content: center;
  }
  .service1 {
    padding-top: 36px;
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
  .service {
    height: auto;
  }
  .frame-parent9 {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 750px) {
  .header {
    gap: 29px;
  }
  .introduction {
    gap: var(--gap-mid);
    padding-top: 120px;
    box-sizing: border-box;
  }
  .about-title {
    font-size: var(--font-size-10xl);
  }
  .frame-parent,
  .image-4-wrapper {
    min-width: 100%;
  }
  .about {
    padding-left: var(--padding-22xl);
    padding-right: var(--padding-40xl);
    box-sizing: border-box;
  }
  .caractersticas {
    font-size: var(--font-size-10xl);
  }
  .frame-child {
    width: 100%;
  }
  .frame-group {
    gap: var(--gap-14xl);
    grid-template-columns: minmax(299px, 1fr);
  }
  .caracterist {
    gap: var(--gap-12xl);
  }
  .nuestros-proyectos1 {
    font-size: var(--font-size-10xl);
  }
  .frame-div {
    min-width: 100%;
  }
  .frame-container {
    gap: var(--gap-lg);
  }
  .frame-parent2 {
    min-width: 100%;
  }
  .frame-parent1 {
    gap: var(--gap-lg);
  }
  .frame-parent4 {
    min-width: 100%;
  }
  .frame-parent3 {
    gap: var(--gap-lg);
  }
  .proyects {
    gap: 95px;
    padding-left: var(--padding-40xl);
    padding-right: var(--padding-40xl);
    box-sizing: border-box;
  }
  .contact-us1 {
    font-size: var(--font-size-10xl);
  }
  .frame-parent5 {
    flex-wrap: wrap;
    gap: 16px;
  }
  .submit-button {
    gap: 35px;
  }
  .contact-label {
    gap: var(--gap-mini);
  }
  .contact {
    padding-left: var(--padding-14xl);
    padding-right: var(--padding-14xl);
    padding-bottom: var(--padding-29xl);
    box-sizing: border-box;
  }
  .nuestros-planes1 {
    font-size: var(--font-size-10xl);
  }
  .frame-parent7,
  .frame-parent8 {
    padding-top: var(--padding-xl);
    box-sizing: border-box;
  }
  .frame-parent7 {
    padding-bottom: 100px;
    min-width: 100%;
  }
  .frame-parent8 {
    padding-bottom: 98px;
  }
  .lealtad-program {
    min-width: 100%;
  }
  .service1 {
    gap: var(--gap-mid);
    padding-top: var(--padding-4xl);
    padding-bottom: 34px;
    box-sizing: border-box;
  }
  .contact-parent {
    padding-left: var(--padding-3xl);
    box-sizing: border-box;
  }
  .index {
    gap: 45px;
  }
}
@media screen and (max-width: 450px) {
  .loyalty-program-box {
    display: none;
  }
  .monthly-subscription-box {
    width: 0;
  }
  .infomartion-text {
    font-size: var(--font-size-base);
  }
  .component-1,
  .component-2 {
    flex: 1;
  }
  .comment-box-component {
    flex-wrap: wrap;
    gap: var(--gap-4xl);
  }
  .infomartion-text-parent {
    gap: 59px;
  }
  .service-description-container {
    padding-bottom: var(--padding-29xl);
    box-sizing: border-box;
  }
  .introduction {
    height: auto;
  }
  .about-title {
    font-size: var(--font-size-3xl);
  }
  .text-about {
    font-size: var(--font-size-lgi);
  }
  .about {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  .caractersticas {
    font-size: var(--font-size-3xl);
  }
  .amplia-seleccin-de,
  .enfoque-acadmico,
  .nuestro-catlogo-abarca {
    font-size: var(--font-size-lgi);
  }
  .enfoque-acadmico-wrapper {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  .ms-all-de {
    font-size: var(--font-size-lgi);
  }
  .frame-group {
    gap: var(--gap-mid);
  }
  .caracterist {
    gap: var(--gap-mini);
  }
  .nuestros-proyectos1 {
    font-size: var(--font-size-3xl);
  }
  .buildsphere,
  .enim-sed-faucibus,
  .lectus-urna-duis,
  .mode-apps,
  .scraps-mode,
  .sit-amet-mauris {
    font-size: var(--font-size-lgi);
  }
  .proyects {
    gap: var(--gap-28xl);
    padding: var(--padding-xl);
    box-sizing: border-box;
  }
  .contact-us1 {
    font-size: var(--font-size-3xl);
  }
  .contact-title {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
  .apellido,
  .correo,
  .detalles,
  .nombre {
    font-size: var(--font-size-lgi);
  }
  .submit-button {
    gap: var(--gap-lg);
  }
  .nuestros-planes1 {
    font-size: var(--font-size-3xl);
  }
  .suscripcin-mensual {
    font-size: var(--font-size-lgi);
  }
  .suscripcin-mensual-wrapper {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  .text-plan1,
  .text-plan1-2 {
    font-size: var(--font-size-lgi);
  }
  .frame-parent7 {
    gap: 41px;
  }
  .programa-de-lealtad,
  .rewards,
  .text-plan2 {
    font-size: var(--font-size-lgi);
  }
  .frame-parent8 {
    gap: var(--gap-xl);
  }
  .adquirir-ya,
  .adquirir-ya1,
  .informacin-legal,
  .poltica-de-privacidad {
    font-size: var(--font-size-base);
  }
  .index {
    gap: var(--gap-4xl);
  }
}
</style>
