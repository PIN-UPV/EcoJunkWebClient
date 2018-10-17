<style scoped>
.agreements {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="agreements">
    <s-toolbar @openDrawer="openDrawer" msg="Buscar acuerdo"/>
    <h1>Bienvenido a Agreements</h1>
    
    <md-card v-for="item in store.agreements" :key="item.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.id}}</div>
          <div class="md-subhead">Acuerdo entre {{ item.user.name }} y {{item.rider.name}}</div>
        </md-card-header-text>

      <md-card-actions>
        <md-button class="md-raised md-primary">
          info
        </md-button>
      </md-card-actions>
        
      </md-card-header>
      
      </md-card>

    <md-button to="/form" class="md-fab md-accent">
        <md-icon>add</md-icon>
      </md-button>

  </div>
</template>

<style lang="scss" scoped>
.md-card {
  margin: 5px;
}
</style>

<script>
import SToolbar from "@/components/SearchToolbar";
import { store } from "@/store/index.js";

export default {
  store,
  name: "agreements",
  components: {
    "s-toolbar": SToolbar
  },
  props: {
    value: Boolean
  },
  methods: {
    openDrawer() {
      this.$emit("input", true);
    },
    info() {}
  },
  data() {
    return {
      store: this.$store.state.agreement
    };
  }
};
</script>
