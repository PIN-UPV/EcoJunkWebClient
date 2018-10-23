<template>
  <div id = "form">

    <md-field>
      <label>Nombre</label>
      <md-input v-model="newAgreement.id" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Usuario</label>
      <md-input v-model="newAgreement.user.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Rider</label>
      <md-input v-model="newAgreement.rider.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Residuo</label>
      <md-input v-model="newAgreement.junk.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Fecha</label>
      <md-input v-model="newAgreement.date" md-counter="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Precio (€)</label>
      <md-input v-model="newAgreement.price" maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Ubicación</label>
      <md-input v-model="newAgreement.location" maxlength="30"></md-input>
    </md-field>


    <md-button class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>

    
    
  </div>
</template>




<script>

import { mapMutations} from 'vuex';

export default {
  name: "Counters",
  data: () => ({
    newAgreement:{
    id: '',
    user: {
      name: ''
      },
    rider:{
      name: ''
    },
    junk:{
      name: ''
    },
    date: '',
    location: '',
    price: '',
    },
    textarea: '',
    deadline: ''
  }),
  methods: {
   ...mapMutations([
     'ADD_AGREEMENT'
   ]),
   addAgreement: function(){
        if ( this.newAgreement.id == '' ||
            this.newAgreement.user == '' ||
            this.newAgreement.rider.name == '' ||
            this.newAgreement.user.name == '' ||
            this.newAgreement.junk.name == '' ||
            this.newAgreement.date == '' ||
            this.newAgreement.location == '' ||
            this.newAgreement.price == ''
        ) {
          alert("Campos vacíos");
          return;
        }
        this.ADD_AGREEMENT(this.newAgreement);
        this.$router.push('agreements')
   },
   clearForm: function(){
        this.newAgreement.id= ''
        this.newAgreement.user= ''
        this.newAgreement.rider.name= ''
        this.newAgreement.user.name= ''
        this.newAgreement.junk.name= ''
        this.newAgreement.date= ''
        this.newAgreement.location= ''
        this.newAgreement.price= ''
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