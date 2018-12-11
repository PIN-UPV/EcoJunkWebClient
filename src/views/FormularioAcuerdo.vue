<template>
  <div id="form">
    <form>
      <md-field>
        <label>Residuo</label>
        <md-input v-model="newDeal.junk" md-counter="30"></md-input>
      </md-field>
      <md-field :md-counter="false">
        <label>Precio (€)</label>
        <md-input v-model="streetName" maxlength="10"></md-input>
      </md-field>
      <md-field>
        <label>Ubicación</label>
        <md-input v-model="newDeal.pick_up_point" readonly></md-input>
      </md-field>

      <md-button class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
      <md-button to="/agreements" class="md-raised md-accent">Cancelar</md-button>
    </form>
  </div>
</template>




<script>
import { store } from "@/store/index.js";
import L from "leaflet";
import { ReverseGeocode } from "esri-leaflet-geocoder";
export default {
  store,
  name: "Counters",
  data() {
    return {
      newDeal: {
        junk: "",
        price: "",
        pick_up_point: [
          this.$store.state.auth.location.lat,
          this.$store.state.auth.location.long
        ]
      },
      streetName: ""
    };
  },
  methods: {
    addAgreement: function() {
      if (this.newDeal.junk == "" || this.newDeal.price == "") {
        alert("Campos vacíos");
        return;
      }
      this.newDeal.pick_up_point =
        "POINT(" +
        this.newDeal.pick_up_point[0] +
        " " +
        this.newDeal.pick_up_point[1] +
        ")";
      const { junk, price, pick_up_point } = this.newDeal;
      this.$store
        .dispatch("agreement/AGREE_ADD", { junk, price, pick_up_point })
        .then(() => {
          this.$router.push("agreements");
        });
    },
    clearForm: function() {}
  },
  created() {

    alert(geocodeService)
    geocodeService.latlng([355,355])
    alert(L);
  }
};
</script>

<style>
#form {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid rgba(#000, 0.12);
  padding: 15px;
}
</style>