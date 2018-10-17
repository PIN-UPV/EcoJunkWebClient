<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.md-card {
  margin: 5px;
  border-style: solid;
  border-width: 1px;
}

</style>

<template>
  <div class="home">
    <s-toolbar @openDrawer="openDrawer" msg="Buscar contenedor" v-model="tipo"/>

    <md-card v-for="item in store.markers" :key="item.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ item.junkPointType.name }}</div>
          <div class="md-subhead">{{item.junkPointType.description}}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="imageSrc(item.junkPointType.name)">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="setView(item.latitude,item.longitude)">Ir</md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>
import SToolbar from "@/components/SearchToolbar";

export default {
  name: "home",
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
    setView(lat, long) {
      this.store.map.setView([lat,long]);
    },
    imageSrc(type) {
      return 'icons/' + type + '.png';
    }
  },
  data() {
    return {
      store: this.$store.state.marker
    };
  }
};
</script>
