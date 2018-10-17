<template>
  <div id = "form">
    <md-field>
      <label>Residuo</label>
      <md-input v-model="residuo" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Localización</label>
      <md-input v-model="location" maxlength="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Precio €</label>
      <md-input v-model="price" maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Descripción</label>
      <md-textarea v-model="description" md-autogrow md-counter="200"></md-textarea>
    </md-field>

    <timer :md-active.sync="showTimer">
      </timer>

    <md-button class="md-raised md-primary">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>
  
    

    
    
  </div>
</template>




<script>
import TIMER from "@/components/CountDown";

export default {
  name: "Counters",
  data: () => ({
    residuo: null,
    location: null,
    price: null,
    description: null,
    textarea: null,
    showTimer: false
  }),
  components: {
    timer: TIMER
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