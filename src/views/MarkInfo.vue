<template>
  <div>
      <md-toolbar class="md-small md-primary">
        <md-button class="md-icon-button  md-primary" @click="returnToMap">
          <md-icon>arrow_back</md-icon>
        </md-button>
        <h2>Información</h2>
      </md-toolbar>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{query.description}}</div>
        </md-card-header>

        <md-card-content>
          <b>Nombre</b> 
          <p>{{query.description}}</p>
          <b>Calle </b> 
          <p>{{query.street_name}}</p> 
          <a target="_blank" :href="getUrl(query.location.coordinates)">¿Cómo llegar?</a>
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
      },
      getUrl(coordinates) {
      var coords = coordinates[0] + ',' + coordinates[1];
      return "https://www.google.es/maps/dir/current+location/" + coords;
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