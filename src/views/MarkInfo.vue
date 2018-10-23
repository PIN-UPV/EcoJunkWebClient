<template>
  <div>
    <md-toolbar class="md-large md-primary">
      <h2>Información</h2>
    </md-toolbar>

    <p>Nombre: </p>

          
    <md-button class="md-primary fixed-right" @click="returnToMap">Close</md-button>
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: true,
      value: this.$router.query
    }), 
    methods: {
      returnToMap(){
      this.$router.push('/')
    
      }
    },
    mounted() {
      console.log(this.$router.query)
    }
  }
</script>

<style scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>