<style scoped>
.rejected {
  width: 100%;
  height: 95%;
}
.md-dialog {
  position: fixed;
  top: 300px;
  right: 500px;
  width: 100%;
  height: 100%;
}
.rejected .fixed-right {
  float: right;
}
.md-card {
  margin: 5px;
}
</style>

<template>
  <div>
    <md-card v-for="item in store.agreementsRejected" :key="item.id" v-bind:index="item.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.id}}</div>
          <div class="md-subhead">Acuerdo del usuario: {{ item.user.name }}</div>
        </md-card-header-text>
        <md-card-actions>
          <md-button :to="{ name: 'infoR', params: { id:item } }" class="md-raised md-primary">
           info
          </md-button>
        </md-card-actions>  
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
import { store } from "@/store/index.js";

export default {
  store,
  name: "rejected",
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