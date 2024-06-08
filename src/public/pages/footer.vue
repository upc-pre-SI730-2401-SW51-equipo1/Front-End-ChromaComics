<template>
  <footer :class="$style.footer">
    <div :class="$style.footerChild" />
    <div :class="$style.frameParent">
      <div :class="$style.frameGroup">
        <div :class="$style.chromacomicsParent">
          <h3 :class="$style.chromacomics" :style="chromaComicsStyle">
            ChromaComics
          </h3>
          <div :class="$style.chromacomicsFl33134PeruWrapper">
            <div
                :class="$style.chromacomicsFl33134Container"
                :style="chromaComicsFL33134ContainerStyle"
            >
              <p :class="$style.chromacomics1">@ChromaComics</p>
              <p :class="$style.fl33134Peru">FL 33134 Peru</p>
            </div>
          </div>
        </div>
        <div :class="$style.frameContainer">
          <div :class="$style.groupDiv">
            <div :class="$style.linksParent">
              <div :class="$style.links">Links</div>
              <div :class="$style.frameWrapper">
                <div :class="$style.homeParent">
                  <div :class="$style.home">Home</div>
                  <div :class="$style.shop">Shop</div>
                  <div :class="$style.about">About</div>
                  <div :class="$style.contact">Contact</div>
                </div>
              </div>
            </div>
            <div :class="$style.helpParent">
              <div :class="$style.help">Help</div>
              <div :class="$style.paymentOptionsParent">
                <div :class="$style.paymentOptions">Payment Options</div>
                <div :class="$style.returns">Returns</div>
                <div :class="$style.privacyPolicies">Privacy Policies</div>
              </div>
            </div>
          </div>
          <div :class="$style.frameDiv">
            <div :class="$style.newsletterParent">
              <div :class="$style.newsletter">Newsletter</div>
              <div :class="$style.frameParent1">
                <div :class="$style.enterYourEmailAddressParent">
                  <div :class="$style.enterYourEmail">
                    Enter Your Email Address
                  </div>
                  <div :class="$style.frameChild" />
                </div>
                <button :class="$style.subscribeParent">
                  <div :class="$style.subscribe">SUBSCRIBE</div>
                  <div :class="$style.frameItem" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.lineParent" :style="groupDivStyle">
        <div :class="$style.frameInner" />
        <div :class="$style.chromacomicsAllRightsRevervWrapper">
          <div :class="$style.chromacomicsAllRights">
            2024 ChromaComics All rights reverved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
    chromaComicsDebugCommit: { type: String },
    chromaComicsFL33134ContaiDebugCommit: { type: String },
    groupDivHeight: { type: [Object, Array, String, Number, Boolean] },
    groupDivPadding: { type: [Object, Array, String, Number, Boolean] },
  },
  computed: {
    chromaComicsStyle() {
      return {
        debugCommit: this.chromaComicsDebugCommit,
      };
    },
    chromaComicsFL33134ContainerStyle() {
      return {
        debugCommit: this.chromaComicsFL33134ContaiDebugCommit,
      };
    },
    groupDivStyle() {
      return {
        height: this.groupDivHeight,
        padding: this.groupDivPadding,
      };
    },
  },
});
</script>
<style module>
.footerChild {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: -0.031rem;
  left: 0;
  background-color: var(--color-forestgreen);
  border-top: 1px solid var(--color-gray-200);
  box-sizing: border-box;
}
.chromacomics {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  flex-shrink: 0;

}
.chromacomics1 {
  margin: 0;
}
.fl33134Peru {
  margin: 0;
}
.chromacomicsFl33134Container {
  flex: 1;
  position: relative;
  flex-shrink: 0;

}
.chromacomicsFl33134PeruWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-11xs);
  font-size: var(--font-size-base);
  color: var(--color-darkgray-200);
}
.chromacomicsParent {
  width: 17.938rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-30xl);
  min-width: 17.938rem;
}
.links {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 2.5rem;
  flex-shrink: 0;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-12xs-1);
  gap: var(--gap-25xl-8);
  flex-shrink: 0;

}
.frameWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-11xs);
  color: var(--color-black);
}
.linksParent {
  height: 19.113rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-263xl-3);
  box-sizing: border-box;
  gap: var(--gap-35xl);
}
.help {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 2.313rem;
  flex-shrink: 0;

}
.paymentOptions {
  position: relative;
  font-weight: 500;
}
.returns {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 3.875rem;
}
.privacyPolicies {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 7.75rem;
}
.paymentOptionsParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-12xs-1);
  gap: var(--gap-25xl-6);
  flex-shrink: 0;

  color: var(--color-black);
}
.helpParent {
  height: 14.825rem;
  width: 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 var(--padding-194xl-7);
  box-sizing: border-box;
  gap: var(--gap-35xl);
}
.groupDiv {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 13rem;
  max-width: 100%;
  gap: var(--gap-xl);
}
.newsletter {
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 5.375rem;
}
.enterYourEmail {
  position: relative;
}
.frameChild {
  align-self: stretch;
  height: 0.125rem;
  position: relative;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
}
.enterYourEmailAddressParent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-9);
}
.subscribe {
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 500;
  font-family: var(--font-poppins),serif;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  min-width: 4.688rem;
}
.frameItem {
  width: 4.813rem;
  height: 0.125rem;
  position: relative;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
}
.subscribeParent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-9);
}
.frameParent1 {
  align-self: stretch;
  height: 1.469rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0;
  box-sizing: border-box;
  gap: var(--gap-2xs);
  font-size: var(--font-size-sm);
}
.newsletterParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-33xl);
}
.frameDiv {
  width: 17.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0 0;
  box-sizing: border-box;
  min-width: 17.875rem;
}
.frameContainer {
  width: 44.375rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-53xl);
  min-width: 44.375rem;
  max-width: 100%;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-200);
}
.frameGroup {
  width: 70.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;

  max-width: 100%;
  gap: var(--gap-xl);
}
.frameInner {
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  border-top: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
}
.chromacomicsAllRights {
  position: relative;
}
.chromacomicsAllRightsRevervWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
}
.lineParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-14xl-3);
  flex-shrink: 0;

  max-width: 100%;
  font-size: var(--font-size-base);
}
.frameParent {
  width: 77.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl-1);
  max-width: 100%;
  z-index: 1;
}
.footer {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-28xl) var(--padding-xl) var(--padding-18xl-3);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-poppins),serif;
}

@media screen and (max-width: 1125px) {
  .chromacomicsParent {
    flex: 1;
  }

  .frameContainer {
    flex: 1;
  }

  .frameGroup {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 800px) {
  .linksParent {
    padding-bottom: var(--padding-164xl);
    box-sizing: border-box;
  }

  .frameDiv {
    flex: 1;
  }

  .frameContainer {
    flex-wrap: wrap;
    gap: var(--gap-17xl);
    min-width: 100%;
  }

  .lineParent {
    gap: var(--gap-mid);
  }

  .frameParent {
    gap: var(--gap-5xl);
  }

  .footer {
    padding-top: var(--padding-12xl);
    padding-bottom: var(--padding-5xl);
    box-sizing: border-box;
  }
}
@media screen and (max-width: 450px) {
  .chromacomics {
    font-size: var(--font-size-lgi);
  }

  .chromacomicsParent {
    gap: var(--gap-5xl);
  }

  .helpParent {
    padding-bottom: var(--padding-120xl);
    box-sizing: border-box;
  }

  .groupDiv {
    flex-wrap: wrap;
  }

  .newsletterParent {
    gap: var(--gap-7xl);
  }

  .frameContainer {
    gap: var(--gap-lg);
  }
}
</style>