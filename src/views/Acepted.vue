<style scoped>
.acepted {
  width: 100%;
  height: 95%;
}
.md-dialog{
  position: fixed;
  top: 300px;
  right: 500px;
  width: 100%;
  height: 100%;
}
.search-toolbar {
  margin: 5%;
}
.md-card {
  margin: 5px;
}
</style>




<template>
  <div class="acepted">
    <s-toolbar @openDrawer="openDrawer" msg="Buscar acuerdo"/>
    
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Agreements" to="/agreements"></md-tab>
      <md-tab id="tab-pages" md-label="Accepted" to="/acepted"></md-tab>
      <md-tab id="tab-posts" md-label="Rejected" to="/rejected"></md-tab>
    </md-tabs>
    <md-card v-for="item in store.agreementsAcepted" :key="item.id" v-bind:index="item.id">
      
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.id}}</div>
          <div class="md-subhead">Acuerdo del usuario: {{ item.user.name }}</div>
        </md-card-header-text>

        <md-card-actions>
          <md-button :to="{ name: 'info', params: { id:item } }" class="md-raised md-primary">
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

<script>
import SToolbar from "@/components/SearchToolbar";
import { store } from "@/store/index.js";

export default {
  store,
  name: "acepted",
  components: {
    "s-toolbar": SToolbar
  },
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