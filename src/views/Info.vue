<template>
  <div>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{id.id}}</div>
          <div class="md-subhead">User: {{id.user.name}}</div>
        </md-card-header>

        <md-card-content>
          Description: {{id.junk.name}} 
          Date: {{id.date}}
          Price: {{id.price}}
        </md-card-content>

        <md-card-actions>
        <md-button to="/">Aceptar Acuerdo</md-button>
        <md-button to="/agreements">Rechazar Acuerdo</md-button>
      </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>




<script>
  export default {
    name: 'info',
    data(){
        return{
            store: this.$store.state.agreement,
            id: 0
        }
    },
        created() {
            this.id = this.$route.params.id;

    }
  }
</script>