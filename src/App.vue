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
    height: 100%;
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

        <md-list>
          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Map</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <md-content>
        <router-view v-model="showNavigation" />
      </md-content>
      
      <l-map >
        <l-mark :lat="39.4697992" :long="-0.3791969" />
        <l-mark :lat="39.4907311" :long="-0.4019578" />
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
      showNavigation: false
    };
  },
  components: {
    "l-map": LMAP,
    "l-mark": LMARKER
  }
};
</script>

