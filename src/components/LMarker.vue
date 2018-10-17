<template>
    <div id="lmark"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "LMarker",
  props: {
    lat: Number,
    long: Number
  },
  data() {
    return {
      lmap: this.$parent.lmap
    };
  },
  mounted() {
    var customIcon = L.icon({
      iconUrl: "/icons/eco_point.png",
      iconSize: [35, 40], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [17, 40], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    L.marker([this.lat, this.long], { icon: customIcon })
      .addTo(this.lmap)
      .bindPopup("TEXTO A INTRODUCIR");
  }
};
</script>

