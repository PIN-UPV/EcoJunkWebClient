<style scoped>
.agreements{
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="agreements">
    <s-toolbar @openDrawer="openDrawer"/>
    <h1>Bienvenido a Agreements</h1>
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
