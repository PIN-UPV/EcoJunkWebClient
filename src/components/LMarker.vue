<template>
    <div id="lmark"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "LMarker",
  props: {
    value: Object
  },
  data() {
    return {
      lmap: this.$parent.lmap
    };
  },
  mounted() {
    var customIcon = L.icon({
      iconUrl: "/icons/" + this.value.type.name + ".png",
      iconSize: [35, 40], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [17, 40], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    L.marker([this.value.location.coordinates[0], this.value.location.coordinates[1]], { icon: customIcon })
      .addTo(this.lmap)
      .on('click', this.changePage)
  
  }, 
  methods: {
    changePage(){
      this.$router.push({path:'/markinfo', query: this.value})
    
    }

  }
};
</script>

