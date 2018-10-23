<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.search-toolbar {
  margin: 5%;
}
.md-card {
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray
}
.h2 {
  margin-left: 10px;
}
.cursor {
  cursor: pointer
}

</style>

<template>
  <div class="home">
    <s-toolbar v-model="filter" @openDrawer="openDrawer" msg="Buscar contenedor"/>

    <h2 class="h2" v-if="filteredItems.length == 0">NO HAY RESULTADOS</h2>
    <div class="cursor" v-for="item in filteredItems" :key="item.id"
      @mousedown="setView(item.location.coordinates[0],item.location.coordinates[1])"
      @mouseover="changeCursor">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ item.description }}</div>
          <div class="md-subhead">{{ item.street_name }}</div>
        </md-card-header-text>
      </md-card-header>
    </md-card>
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
      filter: ""
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
    changeCursor() {
    }
  },
  created() {
    //this.$store.dispatch("marker/LOAD_MARKS");
  }
};
</script>
