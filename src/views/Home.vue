<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.search-toolbar {
  margin: 5%;
  color: #448aff;
}
.md-checkbox {
    display: flex;
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

.h1 {
  text-align: center
}
.md-card-content {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

</style>

<template>
  <div class="home">
    <md-toolbar class="md-large md-primary">
      <md-button class="md-icon-button" @click="openDrawer">
            <md-icon>menu</md-icon>
        </md-button>
        <h1 class="h1">Inicio</h1>
    </md-toolbar>

    <s-toolbar v-model="filter" msg="Buscar contenedor"/>

    <md-card-content>
      <md-checkbox v-model="filterCB" value="Eco">EcoParque</md-checkbox>
      <md-checkbox v-model="filterCB" value="Aceite">Aceite</md-checkbox>
      <md-checkbox v-model="filterCB" value="Electrónicos">Aparatos Electrónicos</md-checkbox>
      <md-checkbox v-model="filterCB" value="Baterías">Baterias</md-checkbox>
      <md-checkbox v-model="filterCB" value="Papel">Papel</md-checkbox>
      <md-checkbox v-model="filterCB" value="Plástico">Plástico</md-checkbox>
      <md-checkbox v-model="filterCB" value="Vidrio">Vidrio</md-checkbox>
      <md-checkbox v-model="filterCB" value="Rider">Riders</md-checkbox>
    </md-card-content>

    <h2 class="h2" v-if="filteredItems.length == 0 && filteredItemsCB == 0">NO HAY RESULTADOS</h2>
      <div class="cursor" v-for="item in totalFilteredItems" :key="item.id"
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
import SToolbar from "@/components/StandarSearchToolbar";

export default {
  name: "home",
  components: {
    "s-toolbar": SToolbar
  },
  data() {
    return {
      store: this.$store.state.marker,
      filter: "",
      filterCB: []
    };
  },
  computed: {
    filteredItems() {
      return this.$store.getters["marker/filterMarksByName"](this.filter);
    },
    filteredItemsCB(){
      return this.$store.getters["marker/filterMarksByType"](this.filterCB);
    },
    totalFilteredItems(){
      if(this.filterCB.length == 0)
        return this.filteredItems
      else {
        return this.filteredItemsCB.concat(this.filteredItems)
      }
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
    if (this.filteredItems.length == 0 && this.$store.getters['auth/isAuthenticated'])
      this.$store.dispatch("marker/LOAD_MARKS", 1);
  }
};
</script>
