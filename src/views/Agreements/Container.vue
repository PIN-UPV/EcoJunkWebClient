<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.container .fixed-right {
  float: right;
}
.md-tabs{
  width: 100%;
}
</style>

<template>
  <div class="container">
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button @click="openDrawer" class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <h3>Acuerdos</h3>
      </div>
    </md-toolbar>
     <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Todos" to="/agreements"></md-tab>
      <md-tab id="tab-pages" md-label="Aceptados" to="/acepted"></md-tab>
      <md-tab id="tab-posts" md-label="Rechazados" to="/rejected"></md-tab>
    </md-tabs>
    <router-view></router-view>
      <md-button to="/form" class="md-fab md-accent fixed-right">
        <md-icon>add</md-icon>
      </md-button>  
      </div>
</template>


<script>
import { store } from "@/store/index.js";

export default {
  store,
  name: "container",
  props: {
    index: Number
  },
  methods: {
    openDrawer() {
      this.$emit("input", true);
    }
  },
  data() {
    return {
      store: this.$store.state.agreement,
      showDialog: false
    };
  }
};
</script>
