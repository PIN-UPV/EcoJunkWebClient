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
        <h1 class="h1">Inicio</h1>
    </md-toolbar>

    <s-toolbar v-model="filter" @openDrawer="openDrawer" msg="Buscar contenedor"/>
    <md-card-content>
      <md-checkbox v-model="filter" value="Eco">EcoParque</md-checkbox>
      <md-checkbox v-model="filter" value="Aceite">Aceite</md-checkbox>
      <md-checkbox v-model="filter" value="Electrónicos">Aparatos Electrónicos</md-checkbox>
      <md-checkbox v-model="filter" value="Baterías">Baterias</md-checkbox>
      <md-checkbox v-model="filter" value="Papel">Papel</md-checkbox>
      <md-checkbox v-model="filter" value="Plástico">Plástico</md-checkbox>
      <md-checkbox v-model="filter" value="Vidrio">Vidrio</md-checkbox>
      <md-checkbox v-model="filter" value="Rider">Riders</md-checkbox>
      <table>
      <tr>
        <th>EcoParque</th>
        <th>Aceite</th>
        <th>Baterias</th>
        <th>Riders</th>
      </tr>

      <tr>
        <td>{{ str4 }}</td>
        <td>{{ str2 }}</td>
        <td>{{ str4 }}</td>
        <td>{{ str8 }}</td>
      </tr>
    </table>
    </md-card-content>

    <h2 class="h2" v-if="filteredItems.length == 0">NO HAY RESULTADOS</h2>
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
import SToolbar from "@/components/SearchToolbar";

export default {
  name: "home",
  components: {
    "s-toolbar": SToolbar
  },
  data() {
    return {
     /* str1: null,
      str2: null,
      str3: null,
      str4: null,
      str5: null,
      str6: null,
      str7: null,
      str8: null,*/
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
    changePage(item){
      this.$router.push({path:'/markinfo', query: item})
    }
  },
  created() {
    //this.$store.dispatch("marker/LOAD_MARKS");
  }
};
</script>
