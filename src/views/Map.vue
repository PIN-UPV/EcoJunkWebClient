<style scoped>
@import "~leaflet/dist/leaflet.css";

.mymap {
  height: 90vh;
  widows: 100vw;
}
</style>

<template>
    <div class="mymap">
        <h1>Mapa Vue Leaflet</h1>
        <l-map ref="map" :zoom=12 :center="[39.4520498, -0.440134]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <l-marker :lat-lng="[39.4520498, -0.440134]" />
        </l-map>
    </div>
</template>

<script>
// https://github.com/KoRiGaN/Vue2Leaflet NO DOCS
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import L from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    L
  },
  data() {
    return {
      mymap: this.$refs.map.mapObject
    }
  },
  mounted() {
    this.$refs.map.mapObject._onResize();
  }
};
</script>
