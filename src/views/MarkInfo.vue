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
          <div class="md-title">{{id.name}}</div>
        </md-card-header>

        <md-card-content>
          <p>Description:</p>
          <p>Date:</p> 
          <p>Price:</p> 
          <p>Location:</p> 
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
      value: this.$store.state.marker,
      id: 1
    }), 
    created(){
      this.id = this.$route.params.id
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