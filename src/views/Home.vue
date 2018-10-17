<style scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="home">
    <s-toolbar @openDrawer="openDrawer" msg="Buscar en Home"/>
    <h1>Bienvenido a Home</h1>
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
