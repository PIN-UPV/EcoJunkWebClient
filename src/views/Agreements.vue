<style scoped>
.agreements {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="agreements">
    <s-toolbar @openDrawer="openDrawer" msg="Buscar acuerdo"/>
    <h1>Bienvenido a Agreements</h1>
      <ul>
         <li v-for="item in this.$store.state.agreements" :key="item.id">
          <span>{{ item.nombre }}</span>
         </li>
      </ul>
  </div>
</template>

<script>
import SToolbar from "@/components/SearchToolbar";
import { store } from "@/store/index.js";

export default {
  store,
  name: "agreements",
  components: {
    "s-toolbar": SToolbar
  },
  props: {
    value: Boolean,
  },
  methods: {
    openDrawer() {
      this.$emit("input", true);
    }
  }
};
</script>
