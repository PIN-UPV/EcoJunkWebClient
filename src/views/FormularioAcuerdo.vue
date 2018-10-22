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

    <md-button class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>

    <timer v-if="showTimer" v-bind:deadline="deadline"></timer>
    
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
    showTimer: false,
    deadline: null
  }),
  components: {
    timer: TIMER
  },
  methods: {
    //2019-10-11 00:00:00
    addAgreement() {
      var now = new Date();
      now.setTime(now.getTime() + 1000 * 60 * 60 * 24);

      this.deadline =
        now.getFullYear() +
        "-" +
        (now.getMonth() + 1) +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes() +
        ":" +
        now.getSeconds();

      this.showTimer = true;
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