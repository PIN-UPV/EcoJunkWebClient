<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.search-toolbar {
  margin: 5%;
  color: #448aff;
}
.md-card {
  margin: 10px;
}
.h2 {
  margin-left: 10px;
}
.cursor {
  cursor: pointer;
}
.loadDiv {
  height: auto;
  text-align: center;
}
</style>

<template>
  <div class="home">
    <s-toolbar v-model="filter" @openDrawer="openDrawer" msg="Buscar contenedor"/>

    <div class="cursor" v-for="item in filteredItems" :key="item.id"
      @click="setView(item.location.coordinates[0],item.location.coordinates[1]); changePage(item);">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ item.description }}</div>
          <div class="md-subhead">{{ item.street_name }}</div>
        </md-card-header-text>
      </md-card-header>
    </md-card>
    </div>

    <div id="loadDiv" class="loadDiv" v-if="filteredItems.length > 0 && filteredItems.length == store.markers.length && filteredItems.length % 20 == 0"
      v-observe-visibility="{
        callback: loadMoreMarks,
      }" 
      
      >CARGANDO...
    </div>
  </div>
</template>

<script>
import SToolbar from "@/components/SearchToolbar";

export default {
  name: "home",
  components: {
    "s-toolbar": SToolbar
  },
  data() {
    return {
      store: this.$store.state.marker,
      filter: "",
      visibility: false
    };
  },
  computed: {
    filteredItems() {
      return this.$store.getters["marker/filterMarksByName"](this.filter);
    }
  },
  props: {
    value: Boolean
  },
  methods: {
    openDrawer() {
      this.$emit("input", true);
    },
    setView(lat, long) {
      this.store.map.setView([lat, long]);
    },
    imageSrc(type) {
      return "icons/" + type + ".png";
    },
    changePage(item) {
      this.$router.push({ path: "/markinfo", query: item });
    },
    loadMoreMarks() {
      this.visibility = !this.visibility;
      if (!this.visibility && this.$store.getters['auth/isAuthenticated']) {
        var page = this.filteredItems.length / 20 + 1;
        this.$store.dispatch("marker/LOAD_MARKS", page);
      }
    }
  },
  created() {
    if (this.filteredItems.length == 0)
      this.$store.dispatch("marker/LOAD_MARKS", 1);
  }
};
</script>
