<style scoped>
@import "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css";
#lmap {
  height: 100vh;
  width: 100vw;
}
</style>

<template>
    <div id="lmap">
      <slot v-if="ready"/>
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
      zoom: 12,
      currentLocationMarker: null
    };
  },
  mounted() {
    this.lmap = L.map("lmap", {
      zoomControl: false,
      minZoom: 13,
      zoom: this.zoom
    }).setView([39.4520498, -0.440134]);

    //https://leafletjs.com/examples/map-panes/
    this.lmap.createPane("labels");
    this.lmap.getPane("labels").style.zIndex = 650;
    this.lmap.getPane("labels").style.pointerEvents = "none";
    L.tileLayer(
      "http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
    ).addTo(this.lmap);

    L.tileLayer(
      "http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
      {
        pane: "labels"
      }
    ).addTo(this.lmap);

    L.control.zoom({ position: "topright" }).addTo(this.lmap);
    var userIcon = L.icon({
      iconUrl: "/icons/user.png",
      iconSize: [35, 40]
    });

    this.lmap
      .locate({
        setView: false,
        watch: true,
        maxZoom: 120
      })
      .on("locationfound", e => {
        if (this.currentLocationMarker != null) {
          this.currentLocationMarker.setLatLng([e.latitude,e.longitude]);
          this.$store.commit("auth/ADD_USER_LOCATION", { lat: e.latitude, long: e.longitude })
        } else {
          this.currentLocationMarker = L.marker([e.latitude, e.longitude], {
            icon: userIcon
          })
            .bindPopup("Ubicación Actual")
            .addTo(this.lmap);

          this.lmap.setView([e.latitude, e.longitude]);
        }
      });

    this.lmap.invalidateSize();

    this.$store.dispatch("marker/CHANGE_MAP", this.lmap);

    this.ready = true;
  }
};
</script>

