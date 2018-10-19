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
</style>

<template>
  <div id="app">
    <div class="page-container md-layout-column">

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">EcoJunk</span>
        </md-toolbar>

        <md-list @click="showNavigation=false">
          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>

          <md-list-item to="/agreements">
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Agreements</span>
          </md-list-item>

        </md-list>
      </md-drawer>

      <md-content class="md-scrollbar md-elevation-8">
        <router-view v-model="showNavigation" />
      </md-content>
      
      <l-map >
        <l-mark v-for="item in store.markers" :key="item.id" :lat="item.latitude" :long="item.longitude" :img="item.junkPointType.name"></l-mark>
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

