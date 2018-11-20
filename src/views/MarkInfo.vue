<template>
  <div>
      <md-toolbar class="md-medium md-primary">
        <md-button class="md-icon-button  md-primary" @click="returnToMap">
          <md-icon>arrow_back</md-icon>
        </md-button>
        <h2>Información</h2>
      </md-toolbar>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Punto de Recogida {{query.description}}</div>
        </md-card-header>

        <md-card-content>
          <b>Nombre</b> 
          <p>{{query.description}}</p>
          <b>Descripción </b> 
          <p>{{query.street_name}}</p> 
        </md-card-content>

      </md-ripple>
    </md-card>

  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: true,
    }),
    computed: {
      query: function() {return this.$route.query}
    },
    methods: {
      returnToMap(){
      this.$router.push('/')
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>