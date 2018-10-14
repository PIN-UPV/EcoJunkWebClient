<style scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="home">
    <Menu />
    <l-map >
      <l-mark :lat="39.4697992" :long="-0.3791969" />
      <l-mark :lat="39.4907311" :long="-0.4019578" />
    </l-map>

  </div>
</template>

<script>
import SToolbar from "@/components/SearchToolbar";

export default {
  name: "home",
  components: {
    's-toolbar': SToolbar
  },
  props: {
    value: Boolean
  },
  methods: {
    openDrawer() {
      this.$emit('input', true);
    }
  }
};
</script>
