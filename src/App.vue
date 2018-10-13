<style >
#app .page-container {
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);

  height: 100vh;
}

#app .md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  z-index: 1001;
}

#app .page-container .md-overlay {
  z-index: 1000
}

#app .md-content {
  z-index: 0;
}

</style>

<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Index</span>
      </md-toolbar>

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
        <router-view/>
      </md-content>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNavigation: false
    };
  }
};
</script>

