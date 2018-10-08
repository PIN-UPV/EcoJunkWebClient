<style scoped>
@import "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css";
#lmap {
  height: 100vh;
  width: 100vw;
}
</style>

<template>
    <div id="lmap">
      <slot v-if="ready" />
    </div>
</template>

<script>
import L from "leaflet";

export default {
  name: "LMAP",
  data() {
    return {
      ready: false,
      lmap: null,
      zoom: 12
    }
  },
  mounted() {
    this.lmap = L.map("lmap").setView([39.4520498, -0.440134], this.zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.lmap);
    this.ready = true;
  }
};
</script>

