<template>
  <div id = "form">
    <form>
    <md-field>
      <label>Residuo</label>
      <md-input v-model="newDeal.junk" md-counter="30"></md-input>
    </md-field>
    <md-field :md-counter="false">
      <label>Precio (€)</label>
      <md-input v-model="newDeal.price" maxlength="10"></md-input>
    </md-field>
    <md-field>
      <label>Ubicación</label>
      <md-input v-model="newDeal.location" maxlength="30"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>
    </form>
  </div>
</template>




<script>
import { mapMutations } from "vuex";

export default {
  name: "Counters",
  data: () => ({
    newDeal: {
      junk:"",
      price:"",
      location:""
    },
    textarea: "",
    deadline: "",
    countDown: "2018-12-1 9:19:18"
  }),
  methods: {
    ...mapMutations(["ADD_AGREEMENT"]),
    addAgreement: function() {
      if (
        this.newDeal.junk.name == "" ||
        this.newDeal.location == "" ||
        this.newDeal.price == ""
      ) {
        alert("Campos vacíos");
        return;
      }
      const { id, user, raider, location, price } = this.newAgreement;
      this.$store
        .dispatch("agreement/AGREE_ADD", { id, user, raider, location, price })
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