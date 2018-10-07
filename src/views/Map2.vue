<style scoped>
@import "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css";
#map {
  height: 100vh;
  width: 100vw;
}
</style>

<template>
    <div class="mymap">
        <h1>Mapa Leaflet</h1>
        <div id="map"></div>
    </div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Mapa2",
  data() {
    return {};
  },
  mounted() {
    var map = L.map("map").setView([39.4520498, -0.440134], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([39.4697992, -0.3791969])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      ;
  }
};
</script>

