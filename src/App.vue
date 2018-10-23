<style lang="scss">
#app {
  .page-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, 0.12);
  }
  .md-drawer {
    width: 25%;
    max-width: calc(100vw - 125px);
    z-index: 1001;

    .md-divider.md-inset {
      margin-left: 0px;
    }
  }
  .page-container .md-overlay {
    z-index: 1000;
  }
  .md-content {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 35%;
    height: 100vh;
    min-width: 340px;

    overflow: auto;
    z-index: 999;
    background-color: whitesmoke;
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.5, 0.5, 0.5, 0.5);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <div class="page-container md-layout-column">

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">EcoJunk</span>
        </md-toolbar>

        <md-divider class="md-inset"></md-divider>

        <md-list @click="showNavigation=false">
          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inicio</span>
          </md-list-item>

          <md-list-item to="/agreements">
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Acuerdos</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Info</span>
          </md-list-item>

        </md-list>

        <md-divider class="md-inset"></md-divider>
      </md-drawer>

      <md-content class="md-scrollbar md-elevation-8">
        <transition name="slide-fade">
          <router-view v-model="showNavigation" />
        </transition>
      </md-content>
      
      <l-map >
        <l-mark v-for="item in store.markers" :key="item.street_name" :value="item"></l-mark>
      </l-map>

    </div>
  </div>
</template>

<script>
import LMAP from "@/components/LMap";
import LMARKER from "@/components/LMarker";

export default {
  name: "App",
  data() {
    return {
      showNavigation: false,
      store: this.$store.state.marker
    };
  },
  components: {
    "l-map": LMAP,
    "l-mark": LMARKER
  }
};
</script>

