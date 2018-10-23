<template>
  <div id = "form">

    <md-field>
      <label>Id</label>
      <md-input v-model="newAgreement.id" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>User</label>
      <md-input v-model="newAgreement.user.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Raider</label>
      <md-input v-model="newAgreement.raider.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Junk</label>
      <md-input v-model="newAgreement.junk.name" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Date</label>
      <md-input v-model="newAgreement.date" md-counter="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Price €</label>
      <md-input v-model="newAgreement.price" maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Location</label>
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
    id: null,
    user: {
      name: null
      },
    raider:{
      name: null
    },
    junk:{
      name: null
    },
    date: null,
    location: null,
    price: null,
    },
    textarea: null,
    deadline: null
  }),
  methods: {
   ...mapMutations([
     'ADD_AGREEMENT'
   ]),
   addAgreement: function(){
        this.ADD_AGREEMENT(this.newAgreement);
        this.$router.push('/agreements')
   },
   clearForm: function(){
        this.newAgreement.id= ''
        this.newAgreement.user= ''
        this.newAgreement.raider.name= ''
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