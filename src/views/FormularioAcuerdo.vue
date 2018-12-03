<template>
  <div id = "form">
    <form>
    <md-field>
      <label>Residuo</label>
      <md-input v-model="newDeal.junk" md-counter="30"></md-input>
    </md-field>
    <!--<md-field>
      <label>Junk Point</label>
      <md-input v-model="newDeal.junk_point" md-counter="30"></md-input>
    </md-field>-->
    <md-field :md-counter="false">
      <label>Precio (€)</label>
      <md-input v-model="newDeal.price" maxlength="10"></md-input>
    </md-field>
    <!--<h2>{{newDeal.location}}</h2>
      <label>Ubicación</label>
      <md-input v-model="newDeal.location" maxlength="30"></md-input>-->
    
    <md-button class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>
    </form>
  </div>
</template>




<script>
import { store } from "@/store/index.js";
export default {
  store,
  name: "Counters",
  data () {
    return{
    newDeal: {
      junk:"",
      price:"",
      junk_point: ""
    },
    
    }
  },
  methods: {
    addAgreement: function() {
      if (
        this.newDeal.junk == "" ||
        //this.newDeal.junk_point == "" ||
        this.newDeal.price == ""
      ) {
        alert("Campos vacíos");
        return;
      }
      const { junk, junk_point, price } = this.newDeal;
      this.$store
        .dispatch("agreement/AGREE_ADD", { junk, junk_point, price })
        .then(() => {
          this.$router.push("agreements");
        });
    },
    clearForm: function() {
     
    }
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