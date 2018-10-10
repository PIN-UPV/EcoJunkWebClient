<template>
  <div>


      <md-dialog-title>Info</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <p>Esta es la información del punto</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="returnToMap">Close</md-button>
      </md-dialog-actions>

  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: true
    }), 
    methods: {
      returnToMap(){
      this.$router.push('/')
    
      }
    }
  }
</script>

<style scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>