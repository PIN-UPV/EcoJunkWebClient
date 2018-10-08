<template>
  <div class="home">
    <l-map >
      <l-mark :lat="39.4697992" :long="-0.3791969" />
      <l-mark :lat="39.4907311" :long="-0.4019578" />
    </l-map>

  </div>
</template>

<script>
import LMAP from "@/components/LMap";
import LMARKER from "@/components/LMarker";

export default {
  name: "home",
  components: {
    "l-map": LMAP,
    "l-mark": LMARKER
  }
};
</script>
