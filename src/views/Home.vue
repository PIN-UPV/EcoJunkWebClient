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
  border-style: solid 1px lightgrey;
  border-width: 1px;
}
.h2 {
  margin-left: 10px;
}
</style>

<template>
  <div class="home">
    <s-toolbar v-model="filter" @openDrawer="openDrawer" msg="Buscar contenedor"/>
    <!-- <select v-model="filter">
      <option selected="selected" value="">Seleccione una</option>
      <option value="aparatos electrónicos">Aparatos electrónicos</option>
      <option value="baterías">Baterías</option>
      <option value="aceite">Aceite</option>
      <option value="papel">Papel</option>
      <option value="plástico">Plástico</option>
      <option value="vidrio">Vidrio</option>
    </select> -->
    <h2 class="h2" v-if="filteredItems.length == 0">NO HAY RESULTADOS</h2>
    <md-card v-for="item in filteredItems" :key="item.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ item.junkPointType.name }}</div>
          <div class="md-subhead">{{item.junkPointType.description}}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="imageSrc(item.junkPointType.name)">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="setView(item.latitude,item.longitude)">Ir</md-button>
      </md-card-actions>
    </md-card>

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
      search: '', 
      filter: ''
    };
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
    }
  },
  computed: {
    filteredItems() {
      return this.$store.getters['marker/filterMarksByName'](this.filter)
    }
  }
};
</script>
