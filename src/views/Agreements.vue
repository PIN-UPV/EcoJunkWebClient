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

    <md-list>
     
     
      <md-list-item to='/form' @click="showNavigation=false">
            <md-speed-dial-target>
            <md-icon>add</md-icon>
            <span class="md-list-item-text"></span>
            </md-speed-dial-target>
        </md-list-item>
    </md-list>
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
