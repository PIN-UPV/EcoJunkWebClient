<template>
  <div>
    <h1>datos</h1>
    <md-table>

      <md-table-row v-for="item in store.agreements" :key="item.id">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <!--<md-table-cell md-label="User">{{ item.user.name }}</md-table-cell>
        <md-table-cell md-label="Rider">{{ item.rider.name }}</md-table-cell>
        <md-table-cell md-label="Junk">{{ item.junk.name }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date}}</md-table-cell>-->
      </md-table-row>
    </md-table>
    <md-button to="/agreements" class="md-raised md-primary">
           Return
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'TableTemplate',
    data(){
        return{
            store: this.$store.state.agreement
        }
    },
    methods: {
       getInfo() {
      this.$emit("index", true);
    }
    }
  }
</script>