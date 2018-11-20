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

.h1 {
  text-align: center
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
    <div class="cursor" v-for="item in filteredItems" :key="item.id"
      @mousedown="setView(item.location.coordinates[0],item.location.coordinates[1]); changePage(item);">
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
    changePage(item){
      this.$router.push({path:'/markinfo', query: item})
    }
  },
  created() {
    //this.$store.dispatch("marker/LOAD_MARKS");
  }
};
</script>
