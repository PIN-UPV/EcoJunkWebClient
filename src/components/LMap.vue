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
      zoom: 12
    };
  },
  mounted() {
    this.lmap = L.map("lmap", {
      zoomControl: false,
      minZoom: 5,
      zoom: this.zoom
    }).setView([39.4520498, -0.440134]);

    /* L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.lmap);*/

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
      iconUrl: "/icons/user_point.png",
      iconSize: [35, 40]
    });
    this.lmap
      .locate({
        setView: false,
        maxZoom: 120
      })
      .on("locationfound", e => {
        L.marker([e.latitude, e.longitude], {
          icon: userIcon
        })
          .bindPopup(e.latitude + " " + e.longitude)
          .addTo(this.lmap);

        this.lmap.setView([e.latitude, e.longitude]);
      });
    this.lmap.invalidateSize();
  
    this.ready = true;
  }
};
</script>

